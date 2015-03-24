/**
 * @author aperez <aperez@datadec.es>
 * Añade los iconos de buscador y buscador avanzado detrás del campo search.
 */

! function($) {

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


    var showAvdSearch = function(pColumns, pObjSearch) {

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
            var vFormAvd = createFormAvd(pColumns, pObjSearch);
            $('#avdSearchModalContent').append(vFormAvd.join(''));
            //



            $("#btnSearchAvd").click(function() {
                var vFormData = $("#" + pObjSearch.idForm).serializeJSON();
                var vText = $('#' + pObjSearch.idTable).parents('.bootstrap-table').find('.search input').val();

                $.extend(vFormData, {
                    searchText: vText
                });
                var sFunctionData = JSON.stringify(vFormData);
                BootstrapTable.DEFAULTS.searchText = sFunctionData;

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


    var createFormAvd = function(pColumns, pObjSearch) {
        var htmlForm = [];
        htmlForm.push('<form class="form-horizontal" id="' + pObjSearch.idForm + '" action="' + pObjSearch.actionForm + '" >');

        for (var i in pColumns) {
            var vObjCol = pColumns[i];
            if (!vObjCol.checkbox && vObjCol.visible && vObjCol.searchable) {
                htmlForm.push('<div class="form-group">',
                    '<label class="col-sm-4 control-label">' + vObjCol.title + '</label>',
                    '<div class="col-sm-6">',
                    '<input type = "text" class="form-control input-md" name="' + vObjCol.field + '" placeholder="Email">',
                    '</div>',
                    '</div>');
            }
        }

        htmlForm.push('<div class="form-group">',
            '<div class="col-sm-offset-9 col-sm-3">',
            '<button type="button" id="btnSearchAvd" class="btn btn-default" >Buscar</button>',
            '</div>',
            '</div>',
            '</form>');

        return htmlForm;
    }



    $.extend($.fn.bootstrapTable.defaults, {
        advancedSearch: undefined,
        idTable: undefined
    });

    $.extend($.fn.bootstrapTable.defaults.icons, {
        avdSearch: 'glyphicon-chevron-down'
    });

    $.extend($.fn.bootstrapTable.locales, {
        formatAvancedSearch: function() {
            return 'Buscador Avanzado';
        }
    });

    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales);


    var BootstrapTable = $.fn.bootstrapTable.Constructor,
        _initToolbar = BootstrapTable.prototype.initToolbar,        
        _load = BootstrapTable.prototype.load;

    BootstrapTable.prototype.initToolbar = function() {
        var that = this,
            htmlBtns = [],
            $search,
            advSearch = {
                active: false,
                idTable: '',
                idForm: '',
                actionForm: ''
            };

        _initToolbar.apply(this, Array.prototype.slice.apply(arguments));

        if (typeof this.options.advancedSearch !== 'undefined') {
            advSearch = this.options.advancedSearch;
        }

        if (advSearch.active) {
            htmlBtns.push(sprintf('<div class="btn-group" role="group"><button class="btn btn-default' + (that.options.iconSize === undefined ? '' : ' btn-' + that.options.iconSize) + '" type="button" name="avdSearch" title="%s">',
                    that.options.formatAvancedSearch()),
                sprintf('<i class="%s %s"></i>', that.options.iconsPrefix, that.options.icons.avdSearch),
                '</button></div>');

            // Añadimos el botón al toolbar.
            that.$toolbar.find('.columns').prepend(htmlBtns.join(''));

            // Creamos el onclick para el booton            
            that.$toolbar.find('button[name="avdSearch"]')
                .off('click').on('click', function() {
                    showAvdSearch(that.options.columns, advSearch);
                });
        }

        // Anulamos la búsqueda automática
        if (that.options.searchTimeOut === -1) {
            $search = that.$toolbar.find('.search input');
            $search.off('keyup').on('keyup', function(event) {
                var text = $.trim($(event.currentTarget).val());
                // Al pulsar Enter realizamos la búsqueda.
                if (event.which === 13) {
                    that.onSearch(event);
                }

            });
        }

    };

    BootstrapTable.prototype.load = function(data) {

        _load.apply(this, Array.prototype.slice.apply(arguments));

        if (typeof this.options.idTable === 'undefined') {
            alert('Error: La propiedad "idTable" de bootstrapTable debe tener el id definido en la tabla.');
        } else {
            if (!firstLoad) {
                var vTam = parseInt($(".bootstrap-table").height());
                vTam += 10;
                $("#" + this.options.idTable).bootstrapTable("resetView", {height: vTam});
                firstLoad = true;
            }
        }

    };


}(jQuery);
