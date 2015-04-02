/**
 * @author: Dennis Hernández
 * @webSite: http://djhvscf.github.io/Blog
 * @version: v1.0.0
 *
 * @update zhixin wen <wenzhixin2010@gmail.com>
 */

(function ($) {
    'use strict';

    var idsStateSaveList = {
        sortOrder: 'bs.table.sortOrder',
        sortName: 'bs.table.sortName',
        pageNumber: 'bs.table.pageNumber',
        pageList: 'bs.table.pageList',
        columns: 'bs.table.columns'
    };

    var cookieEnabled = function () {
        return (navigator.cookieEnabled) ? true : false;
    };

    var setCookie = function (tableName, cookieName, sValue, vEnd, sPath, sDomain, bSecure) {
        cookieName = tableName + '.' + cookieName;
        if (!cookieName || /^(?:expires|max\-age|path|domain|secure)$/i.test(cookieName)) {
            return false;
        }
        var sExpires = '',
            time = '';

        time = vEnd.replace(/[0-9]/, ''); //s,mi,h,d,m,y
        vEnd = vEnd.replace(/[A-Za-z]/, ''); //number

        switch (time.toLowerCase()) {
            case 's':
                vEnd = +vEnd;
                break;
            case 'mi':
                vEnd = vEnd * 60;
                break;
            case 'h':
                vEnd = vEnd * 60 * 60;
                break;
            case 'd':
                vEnd = vEnd * 24 * 60 * 60;
                break;
            case 'm':
                vEnd = vEnd * 30 * 24 * 60 * 60;
                break;
            case 'y':
                vEnd = vEnd * 365 * 30 * 24 * 60 * 60;
                break;
            default:
                vEnd = undefined;
                break;
        }

        sExpires = vEnd === undefined ? '' : '; max-age=' + vEnd;

        document.cookie = encodeURIComponent(cookieName) + '=' + encodeURIComponent(sValue) + sExpires + (sDomain ? '; domain=' + sDomain : '') + (sPath ? '; path=' + sPath : '') + (bSecure ? '; secure' : '');
        return true;
    };

    var getCookie = function (tableName, cookieName) {
        cookieName = tableName + '.' + cookieName;
        if (!cookieName) {
            return null;
        }
        return decodeURIComponent(document.cookie.replace(new RegExp('(?:(?:^|.*;)\\s*' + encodeURIComponent(cookieName).replace(/[\-\.\+\*]/g, '\\$&') + '\\s*\\=\\s*([^;]*).*$)|^.*$'), '$1')) || null;
    };

    var hasCookie = function (cookieName) {
        if (!cookieName) {
            return false;
        }
        return (new RegExp('(?:^|;\\s*)' + encodeURIComponent(cookieName).replace(/[\-\.\+\*]/g, '\\$&') + '\\s*\\=')).test(document.cookie);
    };

    var deleteCookie = function (tableName, cookieName, sPath, sDomain) {
        cookieName = tableName + '.' + cookieName;
        if (!hasCookie(cookieName)) {
            return false;
        }
        document.cookie = encodeURIComponent(cookieName) + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT' + (sDomain ? '; domain=' + sDomain : '') + (sPath ? '; path=' + sPath : '');
        return true;
    };

    $.extend($.fn.bootstrapTable.defaults, {
        stateSave: false,
        stateSaveExpire: '2h',
        stateSaveIdTable: ''
    });

    $.fn.bootstrapTable.methods.push('deleteCookie');

    var BootstrapTable = $.fn.bootstrapTable.Constructor,
        _initTable = BootstrapTable.prototype.initTable,
        _onSort = BootstrapTable.prototype.onSort,
        _onPageNumber = BootstrapTable.prototype.onPageNumber,
        _onPageListChange = BootstrapTable.prototype.onPageListChange,
        _toggleColumn = BootstrapTable.prototype.toggleColumn;

    // init save data after initTable function
    BootstrapTable.prototype.initTable = function () {
        _initTable.apply(this, Array.prototype.slice.apply(arguments));
        this.initStateSave();
    };

    BootstrapTable.prototype.initStateSave = function () {
        var that = this;
        if (!this.options.stateSave) {
            return;
        }

        if (!cookieEnabled()) {
            return;
        }

        if (this.options.stateSaveIdTable === '') {
            return;
        }

        var sortOrderStateSave = getCookie(this.options.stateSaveIdTable, idsStateSaveList.sortOrder),
            sortOrderStateName = getCookie(this.options.stateSaveIdTable, idsStateSaveList.sortName),
            pageNumberStateSave = getCookie(this.options.stateSaveIdTable, idsStateSaveList.pageNumber),
            pageListStateSave = getCookie(this.options.stateSaveIdTable, idsStateSaveList.pageList),
            columnsStateSave = JSON.parse(getCookie(this.options.stateSaveIdTable, idsStateSaveList.columns));

        if (sortOrderStateSave !== undefined && sortOrderStateSave !== null) {
            this.options.sortOrder = sortOrderStateSave;
            this.options.sortName = sortOrderStateName;
        }

        if (pageNumberStateSave !== undefined && pageNumberStateSave !== null) {
            this.options.pageNumber = +pageNumberStateSave;
        }

        if (pageListStateSave !== undefined && pageListStateSave !== null) {
            this.options.pageSize = pageListStateSave ===
                this.options.formatAllRows() ? pageListStateSave : +pageListStateSave;
        }

        if (columnsStateSave !== undefined && columnsStateSave !== null) {
            $.each(this.options.columns, function (i, column) {
                column.visible = columnsStateSave.indexOf(i) !== -1;
            });
        }
    };

    BootstrapTable.prototype.onSort = function () {
        _onSort.apply(this, Array.prototype.slice.apply(arguments));

        if (this.options.stateSave && cookieEnabled() && (this.options.stateSaveIdTable !== '')) {
            setCookie(this.options.stateSaveIdTable, idsStateSaveList.sortOrder, this.options.sortOrder, this.options.stateSaveExpire);
            setCookie(this.options.stateSaveIdTable, idsStateSaveList.sortName, this.options.sortName, this.options.stateSaveExpire);
        }
    };

    BootstrapTable.prototype.onPageNumber = function () {
        _onPageNumber.apply(this, Array.prototype.slice.apply(arguments));

        if (this.options.stateSave && cookieEnabled() && this.options.stateSaveIdTable !== '') {
            setCookie(this.options.stateSaveIdTable, idsStateSaveList.pageNumber, this.options.pageNumber, this.options.stateSaveExpire);
        }
    };

    BootstrapTable.prototype.onPageListChange = function () {
        _onPageListChange.apply(this, Array.prototype.slice.apply(arguments));

        if (this.options.stateSave && cookieEnabled() && this.options.stateSaveIdTable !== '') {
            setCookie(this.options.stateSaveIdTable, idsStateSaveList.pageList, this.options.pageSize, this.options.stateSaveExpire);
        }
    };

    BootstrapTable.prototype.toggleColumn = function () {
        _toggleColumn.apply(this, Array.prototype.slice.apply(arguments));

        var visibleColumns = [];

        $.each(this.options.columns, function (i) {
            if (this.visible) {
                visibleColumns.push(i);
            }
        });

        if (this.options.stateSave && cookieEnabled()) {
            setCookie(this.options.stateSaveIdTable, idsStateSaveList.columns, JSON.stringify(visibleColumns), this.options.stateSaveExpire);
        }
    };

    BootstrapTable.prototype.deleteCookie = function (cookieName) {
        if (cookieName === '') {
            return;
        }

        if (!cookieEnabled()) {
            return;
        }

        deleteCookie(idsStateSaveList[cookieName]);
    }
})(jQuery);
