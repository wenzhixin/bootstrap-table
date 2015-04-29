/**
 * @author: aperez <aperez@datadec.es>
 * @version: v1.0.0
 *
 * @update Dennis Hernández <http://djhvscf.github.io/Blog>
 */

!function($) {
    'use strict';

    var firstLoad = false;
    var firstBody = false;

    var sprintf = function(str) {
        var args = arguments,
            flag = true,
            i = 1;

        str = str.replace(/%s/g, function() {
            var arg = args[i++];

            if (typeof arg === 'undefined') {
                flag = false;
                return '';
            }
            return arg;
        });
        return flag ? str : '';
    };


    var showAvdSearch = function(pColumns, pObjSearch, searchText) {
        if (!$("#avdSearchModal").hasClass("modal")) {
            var vModal = "<div id=\"avdSearchModal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">";
            vModal += "<div class=\"modal-dialog modal-xs\">";
            vModal += " <div class=\"modal-content\">";
            vModal += "  <div class=\"modal-header\">";
            vModal += "   <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\" >&times;</button>";
            vModal += "   <h4 class=\"modal-title\">Buscador Avanzado</h4>";
            vModal += "  </div>";
            vModal += "  <div class=\"modal-body modal-body-custom\">";
            vModal += "   <div class=\"container-fluid\" id=\"avdSearchModalContent\" style=\"padding-right: 0px;padding-left: 0px;\" >";
            vModal += "   </div>";
            vModal += "  </div>";
            vModal += "  </div>";
            vModal += " </div>";
            vModal += "</div>";

            $("body").append($(vModal));
            var vFormAvd = createFormAvd(pColumns, pObjSearch, searchText);
            $('#avdSearchModalContent').append(vFormAvd.join(''));

            $("#btnSearchAvd").click(function() {
                var vFormData = $("#" + pObjSearch.idForm).serializeJSON();
                var vText = $('#' + pObjSearch.idTable).parents('.bootstrap-table').find('.search input').val();

                $.extend(vFormData, {
                    searchText: vText
                });
                var sFunctionData = JSON.stringify(vFormData);
                BootstrapTable.DEFAULTS.searchText = sFunctionData;

                //TODO: Implement the search logic
                //BootstrapTable.prototype.onSearch(this,$.Event('keyup'));
                /*********************

                  * Here, I want to call the method onSearch.

                ***********************/
            });

            $("#avdSearchModal").modal();
        } else {
            $("#avdSearchModal").modal();
        }
    };

    var createFormAvd = function(pColumns, pObjSearch, searchText) {
        var htmlForm = [];
        htmlForm.push(sprintf('<form class="form-horizontal" id="%s" action="%s" >', pObjSearch.idForm, pObjSearch.actionForm));
        for (var i in pColumns) {
            var vObjCol = pColumns[i];
            if (!vObjCol.checkbox && vObjCol.visible && vObjCol.searchable) {
                htmlForm.push('<div class="form-group">');
                htmlForm.push(sprintf('<label class="col-sm-4 control-label">%s</label>', vObjCol.title));
                htmlForm.push('<div class="col-sm-6">');
                htmlForm.push(sprintf('<input type="text" class="form-control input-md" name="%s" placeholder="%s">', vObjCol.title, vObjCol.title));
                htmlForm.push('</div>');
                htmlForm.push('</div>');
            }
        }

        htmlForm.push('<div class="form-group">');
        htmlForm.push('<div class="col-sm-offset-9 col-sm-3">');
        htmlForm.push(sprintf('<button type="button" id="btnSearchAvd" class="btn btn-default" >%s</button>', searchText));
        htmlForm.push('</div>');
        htmlForm.push('</div>');
        htmlForm.push('</form>');

        return htmlForm;
    };

    $.extend($.fn.bootstrapTable.defaults, {
        advancedSearch: undefined,
        idTable: undefined
    });

    $.extend($.fn.bootstrapTable.defaults.icons, {
        advancedSearch: 'glyphicon-chevron-down'
    });

    $.extend($.fn.bootstrapTable.locales, {
        formatAdvancedSearch: function() {
            return 'Advanced search';
        },
        formatAdvancedSearchButton: function() {
            return "Search";
        }
    });

    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales);

    var BootstrapTable = $.fn.bootstrapTable.Constructor,
        _initToolbar = BootstrapTable.prototype.initToolbar,        
        _load = BootstrapTable.prototype.load;

    BootstrapTable.prototype.initToolbar = function() {
        _initToolbar.apply(this, Array.prototype.slice.apply(arguments));

        var that = this,
            htmlBtns = [],
            $search,
            advSearch = {
                active: false,
                idTable: '',
                idForm: '',
                actionForm: ''
            };

        if (typeof this.options.advancedSearch !== 'undefined') {
            advSearch = this.options.advancedSearch;
        }

        if (advSearch.active) {
            htmlBtns.push(sprintf('<div class="btn-group" role="group"><button class="btn btn-default' + (that.options.iconSize === undefined ? '' : ' btn-' + that.options.iconSize) + '" type="button" name="advancedSearch" title="%s">',
                    that.options.formatAdvancedSearch()),
                sprintf('<i class="%s %s"></i>', that.options.iconsPrefix, that.options.icons.advancedSearch),
                '</button></div>');

            // TODO: For now need the showColumns set to true. CHANGE this!
            that.$toolbar.find('.columns').prepend(htmlBtns.join(''));

            that.$toolbar.find('button[name="advancedSearch"]')
                .off('click').on('click', function() {
                    showAvdSearch(that.options.columns, advSearch, that.options.formatAdvancedSearchButton());
                });
        }

        if (that.options.searchTimeOut === -1) {
            $search = that.$toolbar.find('.search input');
            $search.off('keyup').on('keyup', function(event) {
                var text = $.trim($(event.currentTarget).val());
                //TODO: Check this logic
                if (event.which === 13) {
                    that.onSearch(event);
                }
            });
        }
    };

    BootstrapTable.prototype.load = function(data) {
        _load.apply(this, Array.prototype.slice.apply(arguments));

        if (typeof this.options.idTable === 'undefined') {
            //TODO: Should we show a error message?
            return;
        } else {
            if (!firstLoad) {
                var height = parseInt($(".bootstrap-table").height());
                height += 10;
                $("#" + this.options.idTable).bootstrapTable("resetView", {height: height});
                firstLoad = true;
            }
        }
    };
}(jQuery);
