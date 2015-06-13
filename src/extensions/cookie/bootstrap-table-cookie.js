/**
 * @author: Dennis Hernández
 * @webSite: http://djhvscf.github.io/Blog
 * @version: v1.2.0
 *
 * @update zhixin wen <wenzhixin2010@gmail.com>
 */

(function ($) {
    'use strict';

    var cookieIds = {
        sortOrder: 'bs.table.sortOrder',
        sortName: 'bs.table.sortName',
        pageNumber: 'bs.table.pageNumber',
        pageList: 'bs.table.pageList',
        columns: 'bs.table.columns',
        searchText: 'bs.table.searchText'
    };

    var cookieEnabled = function () {
        return (navigator.cookieEnabled) ? true : false;
    };

    var setCookie = function (that, cookieName, sValue) {
        if ((!that.options.stateSave) || (!cookieEnabled()) || (that.options.cookieIdTable === '')) {
            return;
        }

        cookieName = that.options.cookieIdTable + '.' + cookieName;
        if (!cookieName || /^(?:expires|max\-age|path|domain|secure)$/i.test(cookieName)) {
            return false;
        }

        document.cookie = encodeURIComponent(cookieName) + '=' + encodeURIComponent(sValue) + calculateExpiration(that.options.cookieExpire) + (that.options.cookieDomain ? '; domain=' + that.options.cookieDomain : '') + (that.options.cookiePath ? '; path=' + that.options.cookiePath : '') + (that.cookieSecure ? '; secure' : '');
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

    var calculateExpiration = function(cookieExpire) {
        var time = cookieExpire.replace(/[0-9]/, ''); //s,mi,h,d,m,y
        cookieExpire = cookieExpire.replace(/[A-Za-z]/, ''); //number

        switch (time.toLowerCase()) {
            case 's':
                cookieExpire = +cookieExpire;
                break;
            case 'mi':
                cookieExpire = cookieExpire * 60;
                break;
            case 'h':
                cookieExpire = cookieExpire * 60 * 60;
                break;
            case 'd':
                cookieExpire = cookieExpire * 24 * 60 * 60;
                break;
            case 'm':
                cookieExpire = cookieExpire * 30 * 24 * 60 * 60;
                break;
            case 'y':
                cookieExpire = cookieExpire * 365 * 30 * 24 * 60 * 60;
                break;
            default:
                cookieExpire = undefined;
                break;
        }

        return cookieExpire === undefined ? '' : '; max-age=' + cookieExpire;
    };

    $.extend($.fn.bootstrapTable.defaults, {
        cookie: false,
        cookieExpire: '2h',
        cookiePath: null,
        cookieDomain: null,
        cookieSecure: null,
        cookieIdTable: ''
    });

    $.fn.bootstrapTable.methods.push('deleteCookie');

    var BootstrapTable = $.fn.bootstrapTable.Constructor,
        _initTable = BootstrapTable.prototype.initTable,
        _onSort = BootstrapTable.prototype.onSort,
        _onPageNumber = BootstrapTable.prototype.onPageNumber,
        _onPageListChange = BootstrapTable.prototype.onPageListChange,
        _onPageFirst = BootstrapTable.prototype.onPageFirst,
        _onPagePre = BootstrapTable.prototype.onPagePre,
        _onPageNext = BootstrapTable.prototype.onPageNext,
        _onPageLast = BootstrapTable.prototype.onPageLast,
        _toggleColumn = BootstrapTable.prototype.toggleColumn,
        _onSearch = BootstrapTable.prototype.onSearch;

    // init save data after initTable function
    BootstrapTable.prototype.initTable = function () {
        _initTable.apply(this, Array.prototype.slice.apply(arguments));
        this.initCookie();
    };

    BootstrapTable.prototype.initCookie = function () {
        if (!this.options.cookie) {
            return;
        }

        if (!cookieEnabled()) {
            return;
        }

        if (this.options.cookieIdTable === '' || this.options.cookieExpire === '') {
            return;
        }

        var sortOrderCookie = getCookie(this.options.cookieIdTable, cookieIds.sortOrder),
            sortOrderNameCookie = getCookie(this.options.cookieIdTable, cookieIds.sortName),
            pageNumberCookie = getCookie(this.options.cookieIdTable, cookieIds.pageNumber),
            pageListCookie = getCookie(this.options.cookieIdTable, cookieIds.pageList),
            columnsCookie = JSON.parse(getCookie(this.options.cookieIdTable, cookieIds.columns)),
            searchTextCookie = getCookie(this.options.cookieIdTable, cookieIds.searchText);

        //sortOrder
        this.options.sortOrder = sortOrderCookie ? sortOrderCookie : 'asc';
        //sortName
        this.options.sortName = sortOrderNameCookie ? sortOrderNameCookie : undefined;
        //pageNumber
        this.options.pageNumber = pageNumberCookie ? +pageNumberCookie : 1;
        //pageSize
        this.options.pageSize = pageListCookie ? pageListCookie === this.options.formatAllRows() ? pageListCookie : +pageListCookie : 10;
        //searchText
        this.options.searchText = searchTextCookie ? searchTextCookie : '';

        if (columnsCookie) {
            $.each(this.options.columns, function (i, column) {
                column.visible = columnsCookie.indexOf(column.field) !== -1;
            });
        }
    };

    BootstrapTable.prototype.onSort = function () {
        _onSort.apply(this, Array.prototype.slice.apply(arguments));
        setCookie(this, cookieIds.sortOrder, this.options.sortOrder);
        setCookie(this, cookieIds.sortName, this.options.sortName);
    };

    BootstrapTable.prototype.onPageNumber = function () {
        _onPageNumber.apply(this, Array.prototype.slice.apply(arguments));
        setCookie(this, cookieIds.pageNumber, this.options.pageNumber);
    };

    BootstrapTable.prototype.onPageListChange = function () {
        _onPageListChange.apply(this, Array.prototype.slice.apply(arguments));
        setCookie(this, cookieIds.pageList, this.options.pageSize);
    };

    BootstrapTable.prototype.onPageFirst = function () {
        _onPageFirst.apply(this, Array.prototype.slice.apply(arguments));
        setCookie(this, cookieIds.pageNumber, this.options.pageNumber);
    };

    BootstrapTable.prototype.onPagePre = function () {
        _onPagePre.apply(this, Array.prototype.slice.apply(arguments));
        setCookie(this, cookieIds.pageNumber, this.options.pageNumber);
    };

    BootstrapTable.prototype.onPageNext = function () {
        _onPageNext.apply(this, Array.prototype.slice.apply(arguments));
        setCookie(this, cookieIds.pageNumber, this.options.pageNumber);
    };

    BootstrapTable.prototype.onPageLast = function () {
        _onPageLast.apply(this, Array.prototype.slice.apply(arguments));
        setCookie(this, cookieIds.pageNumber, this.options.pageNumber);
    };

    BootstrapTable.prototype.toggleColumn = function () {
        _toggleColumn.apply(this, Array.prototype.slice.apply(arguments));

        var visibleColumns = [];

        $.each(this.options.columns, function (i, column) {
            if (column.visible) {
                visibleColumns.push(column.field);
            }
        });

        setCookie(this, cookieIds.columns, JSON.stringify(visibleColumns));
    };

    BootstrapTable.prototype.onSearch = function () {
        _onSearch.apply(this, Array.prototype.slice.apply(arguments));
        setCookie(this, cookieIds.searchText, this.searchText);
    };

    BootstrapTable.prototype.deleteCookie = function (cookieName) {
        if ((cookieName === '') || (!cookieEnabled())) {
            return;
        }

        deleteCookie(cookieIds[cookieName], this.options.cookiePath, this.options.cookieDomain);
    };
})(jQuery);
