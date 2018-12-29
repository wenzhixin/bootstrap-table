(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define([], factory);
    } else if (typeof exports !== "undefined") {
        factory();
    } else {
        var mod = {
            exports: {}
        };
        factory();
        global.bootstrapTableAfZA = mod.exports;
    }
})(this, function () {
    'use strict';

    /**
     * Bootstrap Table Afrikaans translation
     * Author: Phillip Kruger <phillip.kruger@gmail.com>
     */
    (function ($) {
        'use strict';

        $.fn.bootstrapTable.locales['af-ZA'] = {
            formatLoadingMessage: function formatLoadingMessage() {
                return 'Besig om te laai, wag asseblief ...';
            },
            formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
                return pageNumber + ' rekords per bladsy';
            },
            formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
                return 'Resultate ' + pageFrom + ' tot ' + pageTo + ' van ' + totalRows + ' rye';
            },
            formatSearch: function formatSearch() {
                return 'Soek';
            },
            formatNoMatches: function formatNoMatches() {
                return 'Geen rekords gevind nie';
            },
            formatPaginationSwitch: function formatPaginationSwitch() {
                return 'Wys/verberg bladsy nummering';
            },
            formatRefresh: function formatRefresh() {
                return 'Herlaai';
            },
            formatToggle: function formatToggle() {
                return 'Wissel';
            },
            formatColumns: function formatColumns() {
                return 'Kolomme';
            }
        };

        $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['af-ZA']);
    })(jQuery);
});
(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define([], factory);
    } else if (typeof exports !== "undefined") {
        factory();
    } else {
        var mod = {
            exports: {}
        };
        factory();
        global.bootstrapTableArSA = mod.exports;
    }
})(this, function () {
    'use strict';

    /**
     * Bootstrap Table English translation
     * Author: Zhixin Wen<wenzhixin2010@gmail.com>
     */
    (function ($) {
        'use strict';

        $.fn.bootstrapTable.locales['ar-SA'] = {
            formatLoadingMessage: function formatLoadingMessage() {
                return 'جاري التحميل, يرجى الإنتظار...';
            },
            formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
                return pageNumber + ' سجل لكل صفحة';
            },
            formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
                return 'الظاهر ' + pageFrom + ' إلى ' + pageTo + ' من ' + totalRows + ' سجل';
            },
            formatSearch: function formatSearch() {
                return 'بحث';
            },
            formatNoMatches: function formatNoMatches() {
                return 'لا توجد نتائج مطابقة للبحث';
            },
            formatPaginationSwitch: function formatPaginationSwitch() {
                return 'إخفاء\إظهار ترقيم الصفحات';
            },
            formatRefresh: function formatRefresh() {
                return 'تحديث';
            },
            formatToggle: function formatToggle() {
                return 'تغيير';
            },
            formatColumns: function formatColumns() {
                return 'أعمدة';
            }
        };

        $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['ar-SA']);
    })(jQuery);
});
(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define([], factory);
    } else if (typeof exports !== "undefined") {
        factory();
    } else {
        var mod = {
            exports: {}
        };
        factory();
        global.bootstrapTableCaES = mod.exports;
    }
})(this, function () {
    'use strict';

    /**
     * Bootstrap Table Catalan translation
     * Authors: Marc Pina<iwalkalone69@gmail.com>
     *          Claudi Martinez<claudix.kernel@gmail.com>
     */
    (function ($) {
        'use strict';

        $.fn.bootstrapTable.locales['ca-ES'] = {
            formatLoadingMessage: function formatLoadingMessage() {
                return 'Espereu, si us plau...';
            },
            formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
                return pageNumber + ' resultats per pàgina';
            },
            formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
                return 'Mostrant de ' + pageFrom + ' fins ' + pageTo + ' - total ' + totalRows + ' resultats';
            },
            formatSearch: function formatSearch() {
                return 'Cerca';
            },
            formatNoMatches: function formatNoMatches() {
                return 'No s\'han trobat resultats';
            },
            formatPaginationSwitch: function formatPaginationSwitch() {
                return 'Amaga/Mostra paginació';
            },
            formatRefresh: function formatRefresh() {
                return 'Refresca';
            },
            formatToggle: function formatToggle() {
                return 'Alterna formatació';
            },
            formatColumns: function formatColumns() {
                return 'Columnes';
            },
            formatAllRows: function formatAllRows() {
                return 'Tots';
            }
        };

        $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['ca-ES']);
    })(jQuery);
});
(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define([], factory);
    } else if (typeof exports !== "undefined") {
        factory();
    } else {
        var mod = {
            exports: {}
        };
        factory();
        global.bootstrapTableCsCZ = mod.exports;
    }
})(this, function () {
    'use strict';

    /**
     * Bootstrap Table Czech translation
     * Author: Lukas Kral (monarcha@seznam.cz)
     * Author: Jakub Svestka <svestka1999@gmail.com>
     */
    (function ($) {
        'use strict';

        $.fn.bootstrapTable.locales['cs-CZ'] = {
            formatLoadingMessage: function formatLoadingMessage() {
                return 'Čekejte, prosím...';
            },
            formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
                return pageNumber + ' položek na stránku';
            },
            formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
                return 'Zobrazena ' + pageFrom + '. - ' + pageTo + '. položka z celkových ' + totalRows;
            },
            formatSearch: function formatSearch() {
                return 'Vyhledávání';
            },
            formatNoMatches: function formatNoMatches() {
                return 'Nenalezena žádná vyhovující položka';
            },
            formatPaginationSwitch: function formatPaginationSwitch() {
                return 'Skrýt/Zobrazit stránkování';
            },
            formatRefresh: function formatRefresh() {
                return 'Aktualizovat';
            },
            formatToggle: function formatToggle() {
                return 'Přepni';
            },
            formatColumns: function formatColumns() {
                return 'Sloupce';
            },
            formatAllRows: function formatAllRows() {
                return 'Vše';
            }
        };

        $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['cs-CZ']);
    })(jQuery);
});
(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define([], factory);
    } else if (typeof exports !== "undefined") {
        factory();
    } else {
        var mod = {
            exports: {}
        };
        factory();
        global.bootstrapTableDaDK = mod.exports;
    }
})(this, function () {
    'use strict';

    /**
     * Bootstrap Table danish translation
     * Author: Your Name Jan Borup Coyle, github@coyle.dk
     */
    (function ($) {
        'use strict';

        $.fn.bootstrapTable.locales['da-DK'] = {
            formatLoadingMessage: function formatLoadingMessage() {
                return 'Indlæser, vent venligst...';
            },
            formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
                return pageNumber + ' poster pr side';
            },
            formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
                return 'Viser ' + pageFrom + ' til ' + pageTo + ' af ' + totalRows + ' række' + (totalRows > 1 ? 'r' : '');
            },
            formatDetailPagination: function formatDetailPagination(totalRows) {
                return 'Viser ' + totalRows + ' række' + (totalRows > 1 ? 'r' : '');
            },
            formatSearch: function formatSearch() {
                return 'Søg';
            },
            formatNoMatches: function formatNoMatches() {
                return 'Ingen poster fundet';
            },
            formatPaginationSwitch: function formatPaginationSwitch() {
                return 'Skjul/vis nummerering';
            },
            formatRefresh: function formatRefresh() {
                return 'Opdater';
            },
            formatToggle: function formatToggle() {
                return 'Skift';
            },
            formatColumns: function formatColumns() {
                return 'Kolonner';
            },
            formatAllRows: function formatAllRows() {
                return 'Alle';
            },
            formatExport: function formatExport() {
                return 'Eksporter';
            },
            formatClearFilters: function formatClearFilters() {
                return 'Ryd filtre';
            }
        };

        $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['da-DK']);
    })(jQuery);
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof exports !== "undefined") {
    factory();
  } else {
    var mod = {
      exports: {}
    };
    factory();
    global.bootstrapTableDeDE = mod.exports;
  }
})(this, function () {
  'use strict';

  /**
  * Bootstrap Table German translation
  * Author: Paul Mohr - Sopamo<p.mohr@sopamo.de>
  */
  (function ($) {
    'use strict';

    $.fn.bootstrapTable.locales['de-DE'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return 'Lade, bitte warten...';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return pageNumber + ' Zeilen pro Seite.';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return 'Zeige Zeile ' + pageFrom + ' bis ' + pageTo + ' von ' + totalRows + ' Zeile' + (totalRows > 1 ? "n" : "") + ".";
      },
      formatDetailPagination: function formatDetailPagination(totalRows) {
        return 'Zeige ' + totalRows + ' Zeile' + (totalRows > 1 ? "n" : "") + ".";
      },
      formatSearch: function formatSearch() {
        return 'Suchen';
      },
      formatNoMatches: function formatNoMatches() {
        return 'Keine passenden Ergebnisse gefunden';
      },
      formatPaginationSwitch: function formatPaginationSwitch() {
        return 'Verstecke/Zeige Nummerierung';
      },
      formatRefresh: function formatRefresh() {
        return 'Neu laden';
      },
      formatToggle: function formatToggle() {
        return 'Umschalten';
      },
      formatColumns: function formatColumns() {
        return 'Spalten';
      },
      formatAllRows: function formatAllRows() {
        return 'Alle';
      },
      formatExport: function formatExport() {
        return 'Datenexport';
      },
      formatClearFilters: function formatClearFilters() {
        return 'Lösche Filter';
      }
    };

    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['de-DE']);
  })(jQuery);
});
(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define([], factory);
    } else if (typeof exports !== "undefined") {
        factory();
    } else {
        var mod = {
            exports: {}
        };
        factory();
        global.bootstrapTableElGR = mod.exports;
    }
})(this, function () {
    'use strict';

    /**
     * Bootstrap Table Greek translation
     * Author: giannisdallas
     */
    (function ($) {
        'use strict';

        $.fn.bootstrapTable.locales['el-GR'] = {
            formatLoadingMessage: function formatLoadingMessage() {
                return 'Φορτώνει, παρακαλώ περιμένετε...';
            },
            formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
                return pageNumber + ' αποτελέσματα ανά σελίδα';
            },
            formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
                return 'Εμφανίζονται από την ' + pageFrom + ' ως την ' + pageTo + ' από σύνολο ' + totalRows + ' σειρών';
            },
            formatSearch: function formatSearch() {
                return 'Αναζητήστε';
            },
            formatNoMatches: function formatNoMatches() {
                return 'Δεν βρέθηκαν αποτελέσματα';
            }
        };

        $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['el-GR']);
    })(jQuery);
});
(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define([], factory);
    } else if (typeof exports !== "undefined") {
        factory();
    } else {
        var mod = {
            exports: {}
        };
        factory();
        global.bootstrapTableEnUS = mod.exports;
    }
})(this, function () {
    'use strict';

    /**
     * Bootstrap Table English translation
     * Author: Zhixin Wen<wenzhixin2010@gmail.com>
     */
    (function ($) {
        'use strict';

        $.fn.bootstrapTable.locales['en-US'] = {
            formatLoadingMessage: function formatLoadingMessage() {
                return 'Loading, please wait...';
            },
            formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
                return pageNumber + ' rows per page';
            },
            formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
                return 'Showing ' + pageFrom + ' to ' + pageTo + ' of ' + totalRows + ' rows';
            },
            formatSearch: function formatSearch() {
                return 'Search';
            },
            formatNoMatches: function formatNoMatches() {
                return 'No matching records found';
            },
            formatPaginationSwitch: function formatPaginationSwitch() {
                return 'Hide/Show pagination';
            },
            formatRefresh: function formatRefresh() {
                return 'Refresh';
            },
            formatToggle: function formatToggle() {
                return 'Toggle';
            },
            formatColumns: function formatColumns() {
                return 'Columns';
            },
            formatAllRows: function formatAllRows() {
                return 'All';
            },
            formatExport: function formatExport() {
                return 'Export data';
            },
            formatClearFilters: function formatClearFilters() {
                return 'Clear filters';
            }
        };

        $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['en-US']);
    })(jQuery);
});
(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define([], factory);
    } else if (typeof exports !== "undefined") {
        factory();
    } else {
        var mod = {
            exports: {}
        };
        factory();
        global.bootstrapTableEsAR = mod.exports;
    }
})(this, function () {
    'use strict';

    /**
     * Bootstrap Table Spanish (Argentina) translation
     * Author: Felix Vera (felix.vera@gmail.com)
     */
    (function ($) {
        'use strict';

        $.fn.bootstrapTable.locales['es-AR'] = {
            formatLoadingMessage: function formatLoadingMessage() {
                return 'Cargando, espere por favor...';
            },
            formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
                return pageNumber + ' registros por página';
            },
            formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
                return 'Mostrando ' + pageFrom + ' a ' + pageTo + ' de ' + totalRows + ' filas';
            },
            formatSearch: function formatSearch() {
                return 'Buscar';
            },
            formatNoMatches: function formatNoMatches() {
                return 'No se encontraron registros';
            },
            formatAllRows: function formatAllRows() {
                return 'Todo';
            }
        };

        $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['es-AR']);
    })(jQuery);
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof exports !== "undefined") {
    factory();
  } else {
    var mod = {
      exports: {}
    };
    factory();
    global.bootstrapTableEsCL = mod.exports;
  }
})(this, function () {
  'use strict';

  /**
   * Traducción de librería Bootstrap Table a Español (Chile)
   * @author Brian Álvarez Azócar
   * email brianalvarezazocar@gmail.com
   */
  (function ($) {
    'use strict';

    $.fn.bootstrapTable.locales['es-CL'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return 'Cargando, espere por favor...';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return pageNumber + ' filas por p\xE1gina';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return 'Mostrando ' + pageFrom + ' a ' + pageTo + ' de ' + totalRows + ' filas';
      },
      formatSearch: function formatSearch() {
        return 'Buscar';
      },
      formatNoMatches: function formatNoMatches() {
        return 'No se encontraron registros';
      },
      formatPaginationSwitch: function formatPaginationSwitch() {
        return 'Ocultar/Mostrar paginaci\xF3n';
      },
      formatRefresh: function formatRefresh() {
        return 'Refrescar';
      },
      formatToggle: function formatToggle() {
        return 'Cambiar';
      },
      formatColumns: function formatColumns() {
        return 'Columnas';
      },
      formatAllRows: function formatAllRows() {
        return 'Todo';
      }
    };

    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['es-CL']);
  })(jQuery);
});
(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define([], factory);
    } else if (typeof exports !== "undefined") {
        factory();
    } else {
        var mod = {
            exports: {}
        };
        factory();
        global.bootstrapTableEsCR = mod.exports;
    }
})(this, function () {
    'use strict';

    /**
     * Bootstrap Table Spanish (Costa Rica) translation
     * Author: Dennis Hernández (http://djhvscf.github.io/Blog/)
     */
    (function ($) {
        'use strict';

        $.fn.bootstrapTable.locales['es-CR'] = {
            formatLoadingMessage: function formatLoadingMessage() {
                return 'Cargando, por favor espere...';
            },
            formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
                return pageNumber + ' registros por página';
            },
            formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
                return 'Mostrando de ' + pageFrom + ' a ' + pageTo + ' registros de ' + totalRows + ' registros en total';
            },
            formatSearch: function formatSearch() {
                return 'Buscar';
            },
            formatNoMatches: function formatNoMatches() {
                return 'No se encontraron registros';
            },
            formatRefresh: function formatRefresh() {
                return 'Refrescar';
            },
            formatToggle: function formatToggle() {
                return 'Alternar';
            },
            formatColumns: function formatColumns() {
                return 'Columnas';
            },
            formatAllRows: function formatAllRows() {
                return 'Todo';
            }
        };

        $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['es-CR']);
    })(jQuery);
});
(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define([], factory);
    } else if (typeof exports !== "undefined") {
        factory();
    } else {
        var mod = {
            exports: {}
        };
        factory();
        global.bootstrapTableEsES = mod.exports;
    }
})(this, function () {
    'use strict';

    /**
     * Bootstrap Table Spanish Spain translation
     * Author: Marc Pina<iwalkalone69@gmail.com>
     */
    (function ($) {
        'use strict';

        $.fn.bootstrapTable.locales['es-ES'] = {
            formatLoadingMessage: function formatLoadingMessage() {
                return 'Por favor espere...';
            },
            formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
                return pageNumber + ' resultados por página';
            },
            formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
                return 'Mostrando desde ' + pageFrom + ' hasta ' + pageTo + ' - En total ' + totalRows + ' resultados';
            },
            formatSearch: function formatSearch() {
                return 'Buscar';
            },
            formatNoMatches: function formatNoMatches() {
                return 'No se encontraron resultados';
            },
            formatPaginationSwitch: function formatPaginationSwitch() {
                return 'Ocultar/Mostrar paginación';
            },
            formatRefresh: function formatRefresh() {
                return 'Refrescar';
            },
            formatToggle: function formatToggle() {
                return 'Ocultar/Mostrar';
            },
            formatColumns: function formatColumns() {
                return 'Columnas';
            },
            formatAllRows: function formatAllRows() {
                return 'Todos';
            }
        };

        $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['es-ES']);
    })(jQuery);
});
(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define([], factory);
    } else if (typeof exports !== "undefined") {
        factory();
    } else {
        var mod = {
            exports: {}
        };
        factory();
        global.bootstrapTableEsMX = mod.exports;
    }
})(this, function () {
    'use strict';

    /**
     * Bootstrap Table Spanish (México) translation (Obtenido de traducción de Argentina)
     * Author: Felix Vera (felix.vera@gmail.com) 
     * Copiado: Mauricio Vera (mauricioa.vera@gmail.com)
     * Revisión: J Manuel Corona (jmcg92@gmail.com) (13/Feb/2018).
     */
    (function ($) {
        'use strict';

        $.fn.bootstrapTable.locales['es-MX'] = {
            formatLoadingMessage: function formatLoadingMessage() {
                return 'Cargando, espere por favor...';
            },
            formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
                return pageNumber + ' registros por página';
            },
            formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
                return 'Mostrando ' + pageFrom + ' a ' + pageTo + ' de ' + totalRows + ' filas';
            },
            formatDetailPagination: function formatDetailPagination(totalRows) {
                return 'Mostrando ' + totalRows + ' filas';
            },
            formatSearch: function formatSearch() {
                return 'Buscar';
            },
            formatNoMatches: function formatNoMatches() {
                return 'No se encontraron registros que coincidan';
            },
            formatPaginationSwitch: function formatPaginationSwitch() {
                return 'Mostrar/ocultar paginación';
            },
            formatRefresh: function formatRefresh() {
                return 'Actualizar';
            },
            formatToggle: function formatToggle() {
                return 'Cambiar vista';
            },
            formatFullscreen: function formatFullscreen() {
                return 'Pantalla completa';
            },
            formatColumns: function formatColumns() {
                return 'Columnas';
            },
            formatAllRows: function formatAllRows() {
                return 'Todo';
            }
        };

        $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['es-MX']);
    })(jQuery);
});
(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define([], factory);
    } else if (typeof exports !== "undefined") {
        factory();
    } else {
        var mod = {
            exports: {}
        };
        factory();
        global.bootstrapTableEsNI = mod.exports;
    }
})(this, function () {
    'use strict';

    /**
     * Bootstrap Table Spanish (Nicaragua) translation
     * Author: Dennis Hernández (http://djhvscf.github.io/Blog/)
     */
    (function ($) {
        'use strict';

        $.fn.bootstrapTable.locales['es-NI'] = {
            formatLoadingMessage: function formatLoadingMessage() {
                return 'Cargando, por favor espere...';
            },
            formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
                return pageNumber + ' registros por página';
            },
            formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
                return 'Mostrando de ' + pageFrom + ' a ' + pageTo + ' registros de ' + totalRows + ' registros en total';
            },
            formatSearch: function formatSearch() {
                return 'Buscar';
            },
            formatNoMatches: function formatNoMatches() {
                return 'No se encontraron registros';
            },
            formatRefresh: function formatRefresh() {
                return 'Refrescar';
            },
            formatToggle: function formatToggle() {
                return 'Alternar';
            },
            formatColumns: function formatColumns() {
                return 'Columnas';
            },
            formatAllRows: function formatAllRows() {
                return 'Todo';
            }
        };

        $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['es-NI']);
    })(jQuery);
});
(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define([], factory);
    } else if (typeof exports !== "undefined") {
        factory();
    } else {
        var mod = {
            exports: {}
        };
        factory();
        global.bootstrapTableEsSP = mod.exports;
    }
})(this, function () {
    'use strict';

    /**
     * Bootstrap Table Spanish (España) translation
     * Author: Antonio Pérez <anpegar@gmail.com>
     */
    (function ($) {
        'use strict';

        $.fn.bootstrapTable.locales['es-SP'] = {
            formatLoadingMessage: function formatLoadingMessage() {
                return 'Cargando, por favor espera...';
            },
            formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
                return pageNumber + ' registros por p&#225;gina.';
            },
            formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
                return pageFrom + ' - ' + pageTo + ' de ' + totalRows + ' registros.';
            },
            formatSearch: function formatSearch() {
                return 'Buscar';
            },
            formatNoMatches: function formatNoMatches() {
                return 'No se han encontrado registros.';
            },
            formatRefresh: function formatRefresh() {
                return 'Actualizar';
            },
            formatToggle: function formatToggle() {
                return 'Alternar';
            },
            formatColumns: function formatColumns() {
                return 'Columnas';
            },
            formatAllRows: function formatAllRows() {
                return 'Todo';
            }
        };

        $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['es-SP']);
    })(jQuery);
});
(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define([], factory);
    } else if (typeof exports !== "undefined") {
        factory();
    } else {
        var mod = {
            exports: {}
        };
        factory();
        global.bootstrapTableEtEE = mod.exports;
    }
})(this, function () {
    'use strict';

    /**
     * Bootstrap Table Estonian translation
     * Author: kristjan@logist.it>
     */
    (function ($) {
        'use strict';

        $.fn.bootstrapTable.locales['et-EE'] = {
            formatLoadingMessage: function formatLoadingMessage() {
                return 'Päring käib, palun oota...';
            },
            formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
                return pageNumber + ' rida lehe kohta';
            },
            formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
                return 'Näitan tulemusi ' + pageFrom + ' kuni ' + pageTo + ' - kokku ' + totalRows + ' tulemust';
            },
            formatSearch: function formatSearch() {
                return 'Otsi';
            },
            formatNoMatches: function formatNoMatches() {
                return 'Päringu tingimustele ei vastanud ühtegi tulemust';
            },
            formatPaginationSwitch: function formatPaginationSwitch() {
                return 'Näita/Peida lehtedeks jagamine';
            },
            formatRefresh: function formatRefresh() {
                return 'Värskenda';
            },
            formatToggle: function formatToggle() {
                return 'Lülita';
            },
            formatColumns: function formatColumns() {
                return 'Veerud';
            },
            formatAllRows: function formatAllRows() {
                return 'Kõik';
            }
        };

        $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['et-EE']);
    })(jQuery);
});
(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define([], factory);
    } else if (typeof exports !== "undefined") {
        factory();
    } else {
        var mod = {
            exports: {}
        };
        factory();
        global.bootstrapTableEuEU = mod.exports;
    }
})(this, function () {
    'use strict';

    /**
     * Bootstrap Table Basque (Basque Country) translation
     * Author: Iker Ibarguren Berasaluze<ikerib@gmail.com>
     */
    (function ($) {
        'use strict';

        $.fn.bootstrapTable.locales['eu-EU'] = {
            formatLoadingMessage: function formatLoadingMessage() {
                return 'Itxaron mesedez...';
            },
            formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
                return pageNumber + ' emaitza orriko.';
            },
            formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
                return totalRows + ' erregistroetatik ' + pageFrom + 'etik ' + pageTo + 'erakoak erakusten.';
            },
            formatSearch: function formatSearch() {
                return 'Bilatu';
            },
            formatNoMatches: function formatNoMatches() {
                return 'Ez da emaitzarik aurkitu';
            },
            formatPaginationSwitch: function formatPaginationSwitch() {
                return 'Ezkutatu/Erakutsi orrikatzea';
            },
            formatRefresh: function formatRefresh() {
                return 'Eguneratu';
            },
            formatToggle: function formatToggle() {
                return 'Ezkutatu/Erakutsi';
            },
            formatColumns: function formatColumns() {
                return 'Zutabeak';
            },
            formatAllRows: function formatAllRows() {
                return 'Guztiak';
            }
        };

        $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['eu-EU']);
    })(jQuery);
});
(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define([], factory);
    } else if (typeof exports !== "undefined") {
        factory();
    } else {
        var mod = {
            exports: {}
        };
        factory();
        global.bootstrapTableFaIR = mod.exports;
    }
})(this, function () {
    'use strict';

    /**
     * Bootstrap Table Persian translation
     * Author: MJ Vakili <mjv.1989@Gmail.com>
     */
    (function ($) {
        'use strict';

        $.fn.bootstrapTable.locales['fa-IR'] = {
            formatLoadingMessage: function formatLoadingMessage() {
                return 'در حال بارگذاری, لطفا صبر کنید...';
            },
            formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
                return pageNumber + ' رکورد در صفحه';
            },
            formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
                return 'نمایش ' + pageFrom + ' تا ' + pageTo + ' از ' + totalRows + ' ردیف';
            },
            formatSearch: function formatSearch() {
                return 'جستجو';
            },
            formatNoMatches: function formatNoMatches() {
                return 'رکوردی یافت نشد.';
            },
            formatPaginationSwitch: function formatPaginationSwitch() {
                return 'نمایش/مخفی صفحه بندی';
            },
            formatRefresh: function formatRefresh() {
                return 'به روز رسانی';
            },
            formatToggle: function formatToggle() {
                return 'تغییر نمایش';
            },
            formatColumns: function formatColumns() {
                return 'سطر ها';
            },
            formatAllRows: function formatAllRows() {
                return 'همه';
            }
        };

        $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['fa-IR']);
    })(jQuery);
});
(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define([], factory);
    } else if (typeof exports !== "undefined") {
        factory();
    } else {
        var mod = {
            exports: {}
        };
        factory();
        global.bootstrapTableFiFI = mod.exports;
    }
})(this, function () {
    'use strict';

    /**
     * Bootstrap Table Finnish translations
     * Author: Minna Lehtomäki <minna.j.lehtomaki@gmail.com>
     */
    (function ($) {
        'use strict';

        $.fn.bootstrapTable.locales['fi-FI'] = {
            formatLoadingMessage: function formatLoadingMessage() {
                return 'Ladataan, ole hyvä ja odota...';
            },
            formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
                return pageNumber + ' riviä sivulla';
            },
            formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
                return 'Näytetään rivit ' + pageFrom + ' - ' + pageTo + ' / ' + totalRows;
            },
            formatSearch: function formatSearch() {
                return 'Hae';
            },
            formatNoMatches: function formatNoMatches() {
                return 'Hakuehtoja vastaavia tuloksia ei löytynyt';
            },
            formatPaginationSwitch: function formatPaginationSwitch() {
                return 'Näytä/Piilota sivutus';
            },
            formatRefresh: function formatRefresh() {
                return 'Päivitä';
            },
            formatToggle: function formatToggle() {
                return 'Valitse';
            },
            formatColumns: function formatColumns() {
                return 'Sarakkeet';
            },
            formatAllRows: function formatAllRows() {
                return 'Kaikki';
            },
            formatExport: function formatExport() {
                return 'Vie tiedot';
            },
            formatClearFilters: function formatClearFilters() {
                return 'Poista suodattimet';
            }
        };

        $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['fi-FI']);
    })(jQuery);
});
(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define([], factory);
    } else if (typeof exports !== "undefined") {
        factory();
    } else {
        var mod = {
            exports: {}
        };
        factory();
        global.bootstrapTableFrBE = mod.exports;
    }
})(this, function () {
    'use strict';

    /**
     * Bootstrap Table French (Belgium) translation
     * Author: Julien Bisconti (julien.bisconti@gmail.com)
     */
    (function ($) {
        'use strict';

        $.fn.bootstrapTable.locales['fr-BE'] = {
            formatLoadingMessage: function formatLoadingMessage() {
                return 'Chargement en cours...';
            },
            formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
                return pageNumber + ' entrées par page';
            },
            formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
                return 'Affiche de' + pageFrom + ' à ' + pageTo + ' sur ' + totalRows + ' lignes';
            },
            formatSearch: function formatSearch() {
                return 'Recherche';
            },
            formatNoMatches: function formatNoMatches() {
                return 'Pas de fichiers trouvés';
            }
        };

        $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['fr-BE']);
    })(jQuery);
});
(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define([], factory);
    } else if (typeof exports !== "undefined") {
        factory();
    } else {
        var mod = {
            exports: {}
        };
        factory();
        global.bootstrapTableFrFR = mod.exports;
    }
})(this, function () {
    'use strict';

    /**
     * Bootstrap Table French (France) translation
     * Author: Dennis Hernández (http://djhvscf.github.io/Blog/)
     * Modification: Tidalf (https://github.com/TidalfFR)
     */
    (function ($) {
        'use strict';

        $.fn.bootstrapTable.locales['fr-FR'] = {
            formatLoadingMessage: function formatLoadingMessage() {
                return 'Chargement en cours, patientez, s´il vous plaît ...';
            },
            formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
                return pageNumber + ' lignes par page';
            },
            formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
                return 'Affichage des lignes ' + pageFrom + ' à ' + pageTo + ' sur ' + totalRows + ' lignes au total';
            },
            formatSearch: function formatSearch() {
                return 'Rechercher';
            },
            formatNoMatches: function formatNoMatches() {
                return 'Aucun résultat trouvé';
            },
            formatPaginationSwitch: function formatPaginationSwitch() {
                return 'Montrer/Masquer pagination';
            },
            formatRefresh: function formatRefresh() {
                return 'Rafraîchir';
            },
            formatToggle: function formatToggle() {
                return 'Alterner';
            },
            formatColumns: function formatColumns() {
                return 'Colonnes';
            },
            formatAllRows: function formatAllRows() {
                return 'Tous';
            },
            formatExport: function formatExport() {
                return 'Exporter les données';
            },
            formatClearFilters: function formatClearFilters() {
                return 'Vider les filtres';
            },
            formatMultipleSort: function formatMultipleSort() {
                return 'Tri avancé';
            },
            formatAddLevel: function formatAddLevel() {
                return 'Ajouter un niveau';
            },
            formatDeleteLevel: function formatDeleteLevel() {
                return 'Supprimer un niveau';
            },
            formatColumn: function formatColumn() {
                return 'Colonne';
            },
            formatOrder: function formatOrder() {
                return 'Ordre';
            },
            formatSortBy: function formatSortBy() {
                return 'Trier par';
            },
            formatThenBy: function formatThenBy() {
                return 'Puis par';
            },
            formatSort: function formatSort() {
                return 'Trier';
            },
            formatCancel: function formatCancel() {
                return 'Annuler';
            },
            formatDuplicateAlertTitle: function formatDuplicateAlertTitle() {
                return 'Doublon(s) détecté(s)!';
            },
            formatDuplicateAlertDescription: function formatDuplicateAlertDescription() {
                return 'Supprimez ou changez les colonnes dupliquées.';
            },
            formatSortOrders: function formatSortOrders() {
                return {
                    asc: 'Croissant',
                    desc: 'Décroissant'
                };
            },
            formatAdvancedSearch: function formatAdvancedSearch() {
                return 'Recherche avancée';
            },
            formatAdvancedCloseButton: function formatAdvancedCloseButton() {
                return "Fermer";
            }
        };

        $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['fr-FR']);
    })(jQuery);
});
(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define([], factory);
    } else if (typeof exports !== "undefined") {
        factory();
    } else {
        var mod = {
            exports: {}
        };
        factory();
        global.bootstrapTableHeIL = mod.exports;
    }
})(this, function () {
    'use strict';

    /**
     * Bootstrap Table Hebrew translation
     * Author: legshooter
     */
    (function ($) {
        'use strict';

        $.fn.bootstrapTable.locales['he-IL'] = {
            formatLoadingMessage: function formatLoadingMessage() {
                return 'טוען, נא להמתין...';
            },
            formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
                return pageNumber + ' שורות בעמוד';
            },
            formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
                return 'מציג ' + pageFrom + ' עד ' + pageTo + ' מ-' + totalRows + ' שורות';
            },
            formatSearch: function formatSearch() {
                return 'חיפוש';
            },
            formatNoMatches: function formatNoMatches() {
                return 'לא נמצאו רשומות תואמות';
            },
            formatPaginationSwitch: function formatPaginationSwitch() {
                return 'הסתר/הצג מספור דפים';
            },
            formatRefresh: function formatRefresh() {
                return 'רענן';
            },
            formatToggle: function formatToggle() {
                return 'החלף תצוגה';
            },
            formatColumns: function formatColumns() {
                return 'עמודות';
            },
            formatAllRows: function formatAllRows() {
                return 'הכל';
            }
        };

        $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['he-IL']);
    })(jQuery);
});
(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define([], factory);
    } else if (typeof exports !== "undefined") {
        factory();
    } else {
        var mod = {
            exports: {}
        };
        factory();
        global.bootstrapTableHrHR = mod.exports;
    }
})(this, function () {
    'use strict';

    /**
    * Bootstrap Table Croatian translation
    * Author: Petra Štrbenac (petra.strbenac@gmail.com)
    * Author: Petra Štrbenac (petra.strbenac@gmail.com)
    */
    (function ($) {
        'use strict';

        $.fn.bootstrapTable.locales['hr-HR'] = {
            formatLoadingMessage: function formatLoadingMessage() {
                return 'Molimo pričekajte ...';
            },
            formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
                return pageNumber + ' broj zapisa po stranici';
            },
            formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
                return 'Prikazujem ' + pageFrom + '. - ' + pageTo + '. od ukupnog broja zapisa ' + totalRows;
            },
            formatSearch: function formatSearch() {
                return 'Pretraži';
            },
            formatNoMatches: function formatNoMatches() {
                return 'Nije pronađen niti jedan zapis';
            },
            formatPaginationSwitch: function formatPaginationSwitch() {
                return 'Prikaži/sakrij stranice';
            },
            formatRefresh: function formatRefresh() {
                return 'Osvježi';
            },
            formatToggle: function formatToggle() {
                return 'Promijeni prikaz';
            },
            formatColumns: function formatColumns() {
                return 'Kolone';
            },
            formatAllRows: function formatAllRows() {
                return 'Sve';
            }
        };

        $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['hr-HR']);
    })(jQuery);
});
(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define([], factory);
    } else if (typeof exports !== "undefined") {
        factory();
    } else {
        var mod = {
            exports: {}
        };
        factory();
        global.bootstrapTableHuHU = mod.exports;
    }
})(this, function () {
    'use strict';

    /**
     * Bootstrap Table Hungarian translation
     * Author: Nagy Gergely <info@nagygergely.eu>
     */
    (function ($) {
        'use strict';

        $.fn.bootstrapTable.locales['hu-HU'] = {
            formatLoadingMessage: function formatLoadingMessage() {
                return 'Betöltés, kérem várjon...';
            },
            formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
                return pageNumber + ' rekord per oldal';
            },
            formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
                return 'Megjelenítve ' + pageFrom + ' - ' + pageTo + ' / ' + totalRows + ' összesen';
            },
            formatSearch: function formatSearch() {
                return 'Keresés';
            },
            formatNoMatches: function formatNoMatches() {
                return 'Nincs találat';
            },
            formatPaginationSwitch: function formatPaginationSwitch() {
                return 'Lapozó elrejtése/megjelenítése';
            },
            formatRefresh: function formatRefresh() {
                return 'Frissítés';
            },
            formatToggle: function formatToggle() {
                return 'Összecsuk/Kinyit';
            },
            formatColumns: function formatColumns() {
                return 'Oszlopok';
            },
            formatAllRows: function formatAllRows() {
                return 'Összes';
            }
        };

        $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['hu-HU']);
    })(jQuery);
});
(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define([], factory);
    } else if (typeof exports !== "undefined") {
        factory();
    } else {
        var mod = {
            exports: {}
        };
        factory();
        global.bootstrapTableIdID = mod.exports;
    }
})(this, function () {
    'use strict';

    /**
     * Bootstrap Table Indonesian translation
     * Author: Andre Gardiner<andre@sirdre.com> 
     */
    (function ($) {
        'use strict';

        $.fn.bootstrapTable.locales['id-ID'] = {
            formatLoadingMessage: function formatLoadingMessage() {
                return 'Memuat, mohon tunggu...';
            },
            formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
                return pageNumber + ' baris per halaman';
            },
            formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
                return 'Menampilkan ' + pageFrom + ' sampai ' + pageTo + ' dari ' + totalRows + ' baris';
            },
            formatSearch: function formatSearch() {
                return 'Pencarian';
            },
            formatNoMatches: function formatNoMatches() {
                return 'Tidak ditemukan data yang cocok';
            },
            formatPaginationSwitch: function formatPaginationSwitch() {
                return 'Sembunyikan/Tampilkan halaman';
            },
            formatRefresh: function formatRefresh() {
                return 'Muat ulang';
            },
            formatToggle: function formatToggle() {
                return 'Beralih';
            },
            formatColumns: function formatColumns() {
                return 'kolom';
            },
            formatAllRows: function formatAllRows() {
                return 'Semua';
            },
            formatExport: function formatExport() {
                return 'Ekspor data';
            },
            formatClearFilters: function formatClearFilters() {
                return 'Bersihkan filter';
            }
        };

        $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['id-ID']);
    })(jQuery);
});
(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define([], factory);
    } else if (typeof exports !== "undefined") {
        factory();
    } else {
        var mod = {
            exports: {}
        };
        factory();
        global.bootstrapTableItIT = mod.exports;
    }
})(this, function () {
    'use strict';

    /**
     * Bootstrap Table Italian translation
     * Author: Davide Renzi<davide.renzi@gmail.com>
     * Author: Davide Borsatto <davide.borsatto@gmail.com>
     * Author: Alessio Felicioni <alessio.felicioni@gmail.com>
     */
    (function ($) {
        'use strict';

        $.fn.bootstrapTable.locales['it-IT'] = {
            formatLoadingMessage: function formatLoadingMessage() {
                return 'Caricamento in corso...';
            },
            formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
                return pageNumber + ' elementi per pagina';
            },
            formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
                return 'Elementi mostrati da ' + pageFrom + ' a ' + pageTo + ' (Numero totali di elementi ' + totalRows + ')';
            },
            formatSearch: function formatSearch() {
                return 'Cerca';
            },
            formatNoMatches: function formatNoMatches() {
                return 'Nessun elemento trovato';
            },
            formatPaginationSwitch: function formatPaginationSwitch() {
                return 'Nascondi/Mostra paginazione';
            },
            formatRefresh: function formatRefresh() {
                return 'Aggiorna';
            },
            formatToggle: function formatToggle() {
                return 'Attiva/Disattiva';
            },
            formatColumns: function formatColumns() {
                return 'Colonne';
            },
            formatAllRows: function formatAllRows() {
                return 'Tutto';
            },
            formatExport: function formatExport() {
                return 'Esporta dati';
            },
            formatClearFilters: function formatClearFilters() {
                return 'Pulisci filtri';
            }

        };

        $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['it-IT']);
    })(jQuery);
});
(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define([], factory);
    } else if (typeof exports !== "undefined") {
        factory();
    } else {
        var mod = {
            exports: {}
        };
        factory();
        global.bootstrapTableJaJP = mod.exports;
    }
})(this, function () {
    'use strict';

    /**
     * Bootstrap Table Japanese translation
     * Author: Azamshul Azizy <azamshul@gmail.com>
     */
    (function ($) {
        'use strict';

        $.fn.bootstrapTable.locales['ja-JP'] = {
            formatLoadingMessage: function formatLoadingMessage() {
                return '読み込み中です。少々お待ちください。';
            },
            formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
                return 'ページ当たり最大' + pageNumber + '件';
            },
            formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
                return '全' + totalRows + '件から、' + pageFrom + 'から' + pageTo + '件目まで表示しています';
            },
            formatSearch: function formatSearch() {
                return '検索';
            },
            formatNoMatches: function formatNoMatches() {
                return '該当するレコードが見つかりません';
            },
            formatPaginationSwitch: function formatPaginationSwitch() {
                return 'ページ数を表示・非表示';
            },
            formatRefresh: function formatRefresh() {
                return '更新';
            },
            formatToggle: function formatToggle() {
                return 'トグル';
            },
            formatColumns: function formatColumns() {
                return '列';
            },
            formatAllRows: function formatAllRows() {
                return 'すべて';
            }
        };

        $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['ja-JP']);
    })(jQuery);
});
(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define([], factory);
    } else if (typeof exports !== "undefined") {
        factory();
    } else {
        var mod = {
            exports: {}
        };
        factory();
        global.bootstrapTableKaGE = mod.exports;
    }
})(this, function () {
    'use strict';

    /**
     * Bootstrap Table Georgian translation
     * Author: Levan Lotuashvili <l.lotuashvili@gmail.com>
     */
    (function ($) {
        'use strict';

        $.fn.bootstrapTable.locales['ka-GE'] = {
            formatLoadingMessage: function formatLoadingMessage() {
                return 'იტვირთება, გთხოვთ მოიცადოთ...';
            },
            formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
                return pageNumber + ' ჩანაწერი თითო გვერდზე';
            },
            formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
                return 'ნაჩვენებია ' + pageFrom + '-დან ' + pageTo + '-მდე ჩანაწერი ჯამური ' + totalRows + '-დან';
            },
            formatSearch: function formatSearch() {
                return 'ძებნა';
            },
            formatNoMatches: function formatNoMatches() {
                return 'მონაცემები არ არის';
            },
            formatPaginationSwitch: function formatPaginationSwitch() {
                return 'გვერდების გადამრთველის დამალვა/გამოჩენა';
            },
            formatRefresh: function formatRefresh() {
                return 'განახლება';
            },
            formatToggle: function formatToggle() {
                return 'ჩართვა/გამორთვა';
            },
            formatColumns: function formatColumns() {
                return 'სვეტები';
            }
        };

        $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['ka-GE']);
    })(jQuery);
});
(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define([], factory);
    } else if (typeof exports !== "undefined") {
        factory();
    } else {
        var mod = {
            exports: {}
        };
        factory();
        global.bootstrapTableKoKR = mod.exports;
    }
})(this, function () {
    'use strict';

    /**
     * Bootstrap Table Korean translation
     * Author: Yi Tae-Hyeong (jsonobject@gmail.com)
     */
    (function ($) {
        'use strict';

        $.fn.bootstrapTable.locales['ko-KR'] = {
            formatLoadingMessage: function formatLoadingMessage() {
                return '데이터를 불러오는 중입니다...';
            },
            formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
                return '페이지 당 ' + pageNumber + '개 데이터 출력';
            },
            formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
                return '전체 ' + totalRows + '개 중 ' + pageFrom + '~' + pageTo + '번째 데이터 출력,';
            },
            formatSearch: function formatSearch() {
                return '검색';
            },
            formatNoMatches: function formatNoMatches() {
                return '조회된 데이터가 없습니다.';
            },
            formatRefresh: function formatRefresh() {
                return '새로 고침';
            },
            formatToggle: function formatToggle() {
                return '전환';
            },
            formatColumns: function formatColumns() {
                return '컬럼 필터링';
            }
        };

        $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['ko-KR']);
    })(jQuery);
});
(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define([], factory);
    } else if (typeof exports !== "undefined") {
        factory();
    } else {
        var mod = {
            exports: {}
        };
        factory();
        global.bootstrapTableMsMY = mod.exports;
    }
})(this, function () {
    'use strict';

    /**
     * Bootstrap Table Malay translation
     * Author: Azamshul Azizy <azamshul@gmail.com>
     */
    (function ($) {
        'use strict';

        $.fn.bootstrapTable.locales['ms-MY'] = {
            formatLoadingMessage: function formatLoadingMessage() {
                return 'Permintaan sedang dimuatkan. Sila tunggu sebentar...';
            },
            formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
                return pageNumber + ' rekod setiap muka surat';
            },
            formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
                return 'Sedang memaparkan rekod ' + pageFrom + ' hingga ' + pageTo + ' daripada jumlah ' + totalRows + ' rekod';
            },
            formatSearch: function formatSearch() {
                return 'Cari';
            },
            formatNoMatches: function formatNoMatches() {
                return 'Tiada rekod yang menyamai permintaan';
            },
            formatPaginationSwitch: function formatPaginationSwitch() {
                return 'Tunjuk/sembunyi muka surat';
            },
            formatRefresh: function formatRefresh() {
                return 'Muatsemula';
            },
            formatToggle: function formatToggle() {
                return 'Tukar';
            },
            formatColumns: function formatColumns() {
                return 'Lajur';
            },
            formatAllRows: function formatAllRows() {
                return 'Semua';
            }
        };

        $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['ms-MY']);
    })(jQuery);
});
(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define([], factory);
    } else if (typeof exports !== "undefined") {
        factory();
    } else {
        var mod = {
            exports: {}
        };
        factory();
        global.bootstrapTableNbNO = mod.exports;
    }
})(this, function () {
    'use strict';

    /**
     * Bootstrap Table norwegian translation
     * Author: Jim Nordbø, jim@nordb.no
     */
    (function ($) {
        'use strict';

        $.fn.bootstrapTable.locales['nb-NO'] = {
            formatLoadingMessage: function formatLoadingMessage() {
                return 'Oppdaterer, vennligst vent...';
            },
            formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
                return pageNumber + ' poster pr side';
            },
            formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
                return 'Viser ' + pageFrom + ' til ' + pageTo + ' av ' + totalRows + ' rekker';
            },
            formatSearch: function formatSearch() {
                return 'Søk';
            },
            formatNoMatches: function formatNoMatches() {
                return 'Ingen poster funnet';
            },
            formatRefresh: function formatRefresh() {
                return 'Oppdater';
            },
            formatToggle: function formatToggle() {
                return 'Endre';
            },
            formatColumns: function formatColumns() {
                return 'Kolonner';
            }
        };

        $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['nb-NO']);
    })(jQuery);
});
(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define([], factory);
    } else if (typeof exports !== "undefined") {
        factory();
    } else {
        var mod = {
            exports: {}
        };
        factory();
        global.bootstrapTableNlNL = mod.exports;
    }
})(this, function () {
    'use strict';

    /**
     * Bootstrap Table Dutch translation
     * Author: Your Name <info@a2hankes.nl>
     */
    (function ($) {
        'use strict';

        $.fn.bootstrapTable.locales['nl-NL'] = {
            formatLoadingMessage: function formatLoadingMessage() {
                return 'Laden, even geduld...';
            },
            formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
                return pageNumber + ' records per pagina';
            },
            formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
                return 'Toon ' + pageFrom + ' tot ' + pageTo + ' van ' + totalRows + ' record' + (totalRows > 1 ? 's' : '');
            },
            formatDetailPagination: function formatDetailPagination(totalRows) {
                return 'Toon ' + totalRows + ' record' + (totalRows > 1 ? 's' : '');
            },
            formatSearch: function formatSearch() {
                return 'Zoeken';
            },
            formatNoMatches: function formatNoMatches() {
                return 'Geen resultaten gevonden';
            },
            formatRefresh: function formatRefresh() {
                return 'Vernieuwen';
            },
            formatToggle: function formatToggle() {
                return 'Omschakelen';
            },
            formatColumns: function formatColumns() {
                return 'Kolommen';
            },
            formatAllRows: function formatAllRows() {
                return 'Alle';
            },
            formatPaginationSwitch: function formatPaginationSwitch() {
                return 'Verberg/Toon paginatie';
            },
            formatExport: function formatExport() {
                return 'Exporteer data';
            },
            formatClearFilters: function formatClearFilters() {
                return 'Verwijder filters';
            }
        };

        $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['nl-NL']);
    })(jQuery);
});
(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define([], factory);
    } else if (typeof exports !== "undefined") {
        factory();
    } else {
        var mod = {
            exports: {}
        };
        factory();
        global.bootstrapTablePlPL = mod.exports;
    }
})(this, function () {
    'use strict';

    /**
     * Bootstrap Table Polish translation
     * Author: zergu <michal.zagdan @ gmail com>
     */
    (function ($) {
        'use strict';

        $.fn.bootstrapTable.locales['pl-PL'] = {
            formatLoadingMessage: function formatLoadingMessage() {
                return 'Ładowanie, proszę czekać...';
            },
            formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
                return pageNumber + ' rekordów na stronę';
            },
            formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
                return 'Wyświetlanie rekordów od ' + pageFrom + ' do ' + pageTo + ' z ' + totalRows;
            },
            formatSearch: function formatSearch() {
                return 'Szukaj';
            },
            formatNoMatches: function formatNoMatches() {
                return 'Niestety, nic nie znaleziono';
            },
            formatRefresh: function formatRefresh() {
                return 'Odśwież';
            },
            formatToggle: function formatToggle() {
                return 'Przełącz';
            },
            formatColumns: function formatColumns() {
                return 'Kolumny';
            }
        };

        $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['pl-PL']);
    })(jQuery);
});
(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define([], factory);
    } else if (typeof exports !== "undefined") {
        factory();
    } else {
        var mod = {
            exports: {}
        };
        factory();
        global.bootstrapTablePtBR = mod.exports;
    }
})(this, function () {
    'use strict';

    /**
     * Bootstrap Table Brazilian Portuguese Translation
     * Author: Eduardo Cerqueira<egcerqueira@gmail.com>
     * Update: João Mello<jmello@hotmail.com.br>
     */
    (function ($) {
        'use strict';

        $.fn.bootstrapTable.locales['pt-BR'] = {
            formatLoadingMessage: function formatLoadingMessage() {
                return 'Carregando, aguarde...';
            },
            formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
                return pageNumber + ' registros por página';
            },
            formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
                return 'Exibindo ' + pageFrom + ' até ' + pageTo + ' de ' + totalRows + ' linhas';
            },
            formatSearch: function formatSearch() {
                return 'Pesquisar';
            },
            formatRefresh: function formatRefresh() {
                return 'Recarregar';
            },
            formatToggle: function formatToggle() {
                return 'Alternar';
            },
            formatColumns: function formatColumns() {
                return 'Colunas';
            },
            formatPaginationSwitch: function formatPaginationSwitch() {
                return 'Ocultar/Exibir paginação';
            },
            formatNoMatches: function formatNoMatches() {
                return 'Nenhum registro encontrado';
            }
        };

        $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['pt-BR']);
    })(jQuery);
});
(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define([], factory);
    } else if (typeof exports !== "undefined") {
        factory();
    } else {
        var mod = {
            exports: {}
        };
        factory();
        global.bootstrapTablePtPT = mod.exports;
    }
})(this, function () {
    'use strict';

    /**
     * Bootstrap Table Portuguese Portugal Translation
     * Author: Burnspirit<burnspirit@gmail.com>
     */
    (function ($) {
        'use strict';

        $.fn.bootstrapTable.locales['pt-PT'] = {
            formatLoadingMessage: function formatLoadingMessage() {
                return 'A carregar, por favor aguarde...';
            },
            formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
                return pageNumber + ' registos por p&aacute;gina';
            },
            formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
                return 'A mostrar ' + pageFrom + ' at&eacute; ' + pageTo + ' de ' + totalRows + ' linhas';
            },
            formatSearch: function formatSearch() {
                return 'Pesquisa';
            },
            formatNoMatches: function formatNoMatches() {
                return 'Nenhum registo encontrado';
            },
            formatPaginationSwitch: function formatPaginationSwitch() {
                return 'Esconder/Mostrar pagina&ccedil&atilde;o';
            },
            formatRefresh: function formatRefresh() {
                return 'Atualizar';
            },
            formatToggle: function formatToggle() {
                return 'Alternar';
            },
            formatColumns: function formatColumns() {
                return 'Colunas';
            },
            formatAllRows: function formatAllRows() {
                return 'Tudo';
            }
        };

        $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['pt-PT']);
    })(jQuery);
});
(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define([], factory);
    } else if (typeof exports !== "undefined") {
        factory();
    } else {
        var mod = {
            exports: {}
        };
        factory();
        global.bootstrapTableRoRO = mod.exports;
    }
})(this, function () {
    'use strict';

    /**
     * Bootstrap Table Romanian translation
     * Author: cristake <cristianiosif@me.com>
     */
    (function ($) {
        'use strict';

        $.fn.bootstrapTable.locales['ro-RO'] = {
            formatLoadingMessage: function formatLoadingMessage() {
                return 'Se incarca, va rugam asteptati...';
            },
            formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
                return pageNumber + ' inregistrari pe pagina';
            },
            formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
                return 'Arata de la ' + pageFrom + ' pana la ' + pageTo + ' din ' + totalRows + ' randuri';
            },
            formatSearch: function formatSearch() {
                return 'Cauta';
            },
            formatNoMatches: function formatNoMatches() {
                return 'Nu au fost gasite inregistrari';
            },
            formatPaginationSwitch: function formatPaginationSwitch() {
                return 'Ascunde/Arata paginatia';
            },
            formatRefresh: function formatRefresh() {
                return 'Reincarca';
            },
            formatToggle: function formatToggle() {
                return 'Comuta';
            },
            formatColumns: function formatColumns() {
                return 'Coloane';
            },
            formatAllRows: function formatAllRows() {
                return 'Toate';
            }
        };

        $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['ro-RO']);
    })(jQuery);
});
(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define([], factory);
    } else if (typeof exports !== "undefined") {
        factory();
    } else {
        var mod = {
            exports: {}
        };
        factory();
        global.bootstrapTableRuRU = mod.exports;
    }
})(this, function () {
    'use strict';

    /**
     * Bootstrap Table Russian translation
     * Author: Dunaevsky Maxim <dunmaksim@yandex.ru>
     */
    (function ($) {
        'use strict';

        $.fn.bootstrapTable.locales['ru-RU'] = {
            formatLoadingMessage: function formatLoadingMessage() {
                return 'Пожалуйста, подождите, идёт загрузка...';
            },
            formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
                return pageNumber + ' записей на страницу';
            },
            formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
                return 'Записи с ' + pageFrom + ' по ' + pageTo + ' из ' + totalRows;
            },
            formatSearch: function formatSearch() {
                return 'Поиск';
            },
            formatNoMatches: function formatNoMatches() {
                return 'Ничего не найдено';
            },
            formatRefresh: function formatRefresh() {
                return 'Обновить';
            },
            formatToggle: function formatToggle() {
                return 'Переключить';
            },
            formatColumns: function formatColumns() {
                return 'Колонки';
            },
            formatClearFilters: function formatClearFilters() {
                return 'Очистить фильтры';
            },
            formatMultipleSort: function formatMultipleSort() {
                return 'Множественная сортировка';
            },
            formatAddLevel: function formatAddLevel() {
                return 'Добавить уровень';
            },
            formatDeleteLevel: function formatDeleteLevel() {
                return 'Удалить уровень';
            },
            formatColumn: function formatColumn() {
                return 'Колонка';
            },
            formatOrder: function formatOrder() {
                return 'Порядок';
            },
            formatSortBy: function formatSortBy() {
                return 'Сортировать по';
            },
            formatThenBy: function formatThenBy() {
                return 'затем по';
            },
            formatSort: function formatSort() {
                return 'Сортировать';
            },
            formatCancel: function formatCancel() {
                return 'Отмена';
            },
            formatDuplicateAlertTitle: function formatDuplicateAlertTitle() {
                return 'Дублирование колонок!';
            },
            formatDuplicateAlertDescription: function formatDuplicateAlertDescription() {
                return 'Удалите, пожалуйста, дублирующую колонку, или замените ее на другую.';
            }
        };

        $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['ru-RU']);
    })(jQuery);
});
(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define([], factory);
    } else if (typeof exports !== "undefined") {
        factory();
    } else {
        var mod = {
            exports: {}
        };
        factory();
        global.bootstrapTableSkSK = mod.exports;
    }
})(this, function () {
    'use strict';

    /**
     * Bootstrap Table Slovak translation
     * Author: Jozef Dúc<jozef.d13@gmail.com>
     */
    (function ($) {
        'use strict';

        $.fn.bootstrapTable.locales['sk-SK'] = {
            formatLoadingMessage: function formatLoadingMessage() {
                return 'Prosím čakajte ...';
            },
            formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
                return pageNumber + ' záznamov na stranu';
            },
            formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
                return 'Zobrazená ' + pageFrom + '. - ' + pageTo + '. položka z celkových ' + totalRows;
            },
            formatSearch: function formatSearch() {
                return 'Vyhľadávanie';
            },
            formatNoMatches: function formatNoMatches() {
                return 'Nenájdená žiadna vyhovujúca položka';
            },
            formatPaginationSwitch: function formatPaginationSwitch() {
                return 'Skry/Zobraz stránkovanie';
            },
            formatRefresh: function formatRefresh() {
                return 'Obnoviť';
            },
            formatToggle: function formatToggle() {
                return 'Prepni';
            },
            formatColumns: function formatColumns() {
                return 'Stĺpce';
            },
            formatAllRows: function formatAllRows() {
                return 'Všetky';
            },
            formatExport: function formatExport() {
                return 'Exportuj dáta';
            },
            formatClearFilters: function formatClearFilters() {
                return 'Odstráň filtre';
            }
        };

        $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['sk-SK']);
    })(jQuery);
});
(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define([], factory);
    } else if (typeof exports !== "undefined") {
        factory();
    } else {
        var mod = {
            exports: {}
        };
        factory();
        global.bootstrapTableSvSE = mod.exports;
    }
})(this, function () {
    'use strict';

    /**
     * Bootstrap Table Swedish translation
     * Author: C Bratt <bratt@inix.se>
     */
    (function ($) {
        'use strict';

        $.fn.bootstrapTable.locales['sv-SE'] = {
            formatLoadingMessage: function formatLoadingMessage() {
                return 'Laddar, vänligen vänta...';
            },
            formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
                return pageNumber + ' rader per sida';
            },
            formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
                return 'Visa ' + pageFrom + ' till ' + pageTo + ' av ' + totalRows + ' rader';
            },
            formatSearch: function formatSearch() {
                return 'Sök';
            },
            formatNoMatches: function formatNoMatches() {
                return 'Inga matchande resultat funna.';
            },
            formatRefresh: function formatRefresh() {
                return 'Uppdatera';
            },
            formatToggle: function formatToggle() {
                return 'Skifta';
            },
            formatColumns: function formatColumns() {
                return 'kolumn';
            }
        };

        $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['sv-SE']);
    })(jQuery);
});
(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define([], factory);
    } else if (typeof exports !== "undefined") {
        factory();
    } else {
        var mod = {
            exports: {}
        };
        factory();
        global.bootstrapTableThTH = mod.exports;
    }
})(this, function () {
    'use strict';

    /**
     * Bootstrap Table Thai translation
     * Author: Monchai S.<monchais@gmail.com>
     */
    (function ($) {
        'use strict';

        $.fn.bootstrapTable.locales['th-TH'] = {
            formatLoadingMessage: function formatLoadingMessage() {
                return 'กำลังโหลดข้อมูล, กรุณารอสักครู่...';
            },
            formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
                return pageNumber + ' รายการต่อหน้า';
            },
            formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
                return 'รายการที่ ' + pageFrom + ' ถึง ' + pageTo + ' จากทั้งหมด ' + totalRows + ' รายการ';
            },
            formatSearch: function formatSearch() {
                return 'ค้นหา';
            },
            formatNoMatches: function formatNoMatches() {
                return 'ไม่พบรายการที่ค้นหา !';
            },
            formatRefresh: function formatRefresh() {
                return 'รีเฟรส';
            },
            formatToggle: function formatToggle() {
                return 'สลับมุมมอง';
            },
            formatColumns: function formatColumns() {
                return 'คอลัมน์';
            }
        };

        $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['th-TH']);
    })(jQuery);
});
(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define([], factory);
    } else if (typeof exports !== "undefined") {
        factory();
    } else {
        var mod = {
            exports: {}
        };
        factory();
        global.bootstrapTableTrTR = mod.exports;
    }
})(this, function () {
    'use strict';

    /**
     * Bootstrap Table Turkish translation
     * Author: Emin Şen
     * Author: Sercan Cakir <srcnckr@gmail.com>
     */
    (function ($) {
        'use strict';

        $.fn.bootstrapTable.locales['tr-TR'] = {
            formatLoadingMessage: function formatLoadingMessage() {
                return 'Yükleniyor, lütfen bekleyin...';
            },
            formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
                return 'Sayfa başına ' + pageNumber + ' kayıt.';
            },
            formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
                return totalRows + ' kayıttan ' + pageFrom + '-' + pageTo + ' arası gösteriliyor.';
            },
            formatSearch: function formatSearch() {
                return 'Ara';
            },
            formatNoMatches: function formatNoMatches() {
                return 'Eşleşen kayıt bulunamadı.';
            },
            formatRefresh: function formatRefresh() {
                return 'Yenile';
            },
            formatToggle: function formatToggle() {
                return 'Değiştir';
            },
            formatColumns: function formatColumns() {
                return 'Sütunlar';
            },
            formatAllRows: function formatAllRows() {
                return 'Tüm Satırlar';
            }
        };

        $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['tr-TR']);
    })(jQuery);
});
(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define([], factory);
    } else if (typeof exports !== "undefined") {
        factory();
    } else {
        var mod = {
            exports: {}
        };
        factory();
        global.bootstrapTableUkUA = mod.exports;
    }
})(this, function () {
    'use strict';

    /**
     * Bootstrap Table Ukrainian translation
     * Author: Vitaliy Timchenko <vitaliy.timchenko@gmail.com>
     */
    (function ($) {
        'use strict';

        $.fn.bootstrapTable.locales['uk-UA'] = {
            formatLoadingMessage: function formatLoadingMessage() {
                return 'Завантаження, будь ласка, зачекайте...';
            },
            formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
                return pageNumber + ' записів на сторінку';
            },
            formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
                return 'Показано з ' + pageFrom + ' по ' + pageTo + '. Всього: ' + totalRows;
            },
            formatSearch: function formatSearch() {
                return 'Пошук';
            },
            formatNoMatches: function formatNoMatches() {
                return 'Не знайдено жодного запису';
            },
            formatRefresh: function formatRefresh() {
                return 'Оновити';
            },
            formatToggle: function formatToggle() {
                return 'Змінити';
            },
            formatColumns: function formatColumns() {
                return 'Стовпці';
            },
            formatClearFilters: function formatClearFilters() {
                return 'Очистити фільтри';
            },
            formatMultipleSort: function formatMultipleSort() {
                return 'Сортування за кількома стовпцями';
            },
            formatAddLevel: function formatAddLevel() {
                return 'Додати рівень';
            },
            formatDeleteLevel: function formatDeleteLevel() {
                return 'Видалити рівень';
            },
            formatColumn: function formatColumn() {
                return 'Стовпець';
            },
            formatOrder: function formatOrder() {
                return 'Порядок';
            },
            formatSortBy: function formatSortBy() {
                return 'Сортувати за';
            },
            formatThenBy: function formatThenBy() {
                return 'потім за';
            },
            formatSort: function formatSort() {
                return 'Сортувати';
            },
            formatCancel: function formatCancel() {
                return 'Скасувати';
            },
            formatDuplicateAlertTitle: function formatDuplicateAlertTitle() {
                return 'Дублювання стовпців!';
            },
            formatDuplicateAlertDescription: function formatDuplicateAlertDescription() {
                return 'Видаліть, будь ласка, дублюючий стовпець, або замініть його на інший.';
            }
        };

        $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['uk-UA']);
    })(jQuery);
});
(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define([], factory);
    } else if (typeof exports !== "undefined") {
        factory();
    } else {
        var mod = {
            exports: {}
        };
        factory();
        global.bootstrapTableUrPK = mod.exports;
    }
})(this, function () {
    'use strict';

    /**
     * Bootstrap Table Urdu translation
     * Author: Malik <me@malikrizwan.com>
     */
    (function ($) {
        'use strict';

        $.fn.bootstrapTable.locales['ur-PK'] = {
            formatLoadingMessage: function formatLoadingMessage() {
                return 'براۓ مہربانی انتظار کیجئے';
            },
            formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
                return pageNumber + ' ریکارڈز فی صفہ ';
            },
            formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
                return 'دیکھیں ' + pageFrom + ' سے ' + pageTo + ' کے ' + totalRows + 'ریکارڈز';
            },
            formatSearch: function formatSearch() {
                return 'تلاش';
            },
            formatNoMatches: function formatNoMatches() {
                return 'کوئی ریکارڈ نہیں ملا';
            },
            formatRefresh: function formatRefresh() {
                return 'تازہ کریں';
            },
            formatToggle: function formatToggle() {
                return 'تبدیل کریں';
            },
            formatColumns: function formatColumns() {
                return 'کالم';
            }
        };

        $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['ur-PK']);
    })(jQuery);
});
(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define([], factory);
    } else if (typeof exports !== "undefined") {
        factory();
    } else {
        var mod = {
            exports: {}
        };
        factory();
        global.bootstrapTableUzLatnUZ = mod.exports;
    }
})(this, function () {
    'use strict';

    /**
     * Bootstrap Table Uzbek translation
     * Author: Nabijon Masharipov <mnabijonz@gmail.com>
     */
    (function ($) {
        'use strict';

        $.fn.bootstrapTable.locales['uz-Latn-UZ'] = {
            formatLoadingMessage: function formatLoadingMessage() {
                return 'Yuklanyapti, iltimos kuting...';
            },
            formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
                return pageNumber + ' qator har sahifada';
            },
            formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
                return 'Ko\'rsatypati ' + pageFrom + ' dan ' + pageTo + ' gacha ' + totalRows + ' qatorlarni';
            },
            formatSearch: function formatSearch() {
                return 'Qidirish';
            },
            formatNoMatches: function formatNoMatches() {
                return 'Hech narsa topilmadi';
            },
            formatPaginationSwitch: function formatPaginationSwitch() {
                return 'Sahifalashni yashirish/ko\'rsatish';
            },
            formatRefresh: function formatRefresh() {
                return 'Yangilash';
            },
            formatToggle: function formatToggle() {
                return 'Ko\'rinish';
            },
            formatColumns: function formatColumns() {
                return 'Ustunlar';
            },
            formatAllRows: function formatAllRows() {
                return 'Hammasi';
            },
            formatExport: function formatExport() {
                return 'Eksport';
            },
            formatClearFilters: function formatClearFilters() {
                return 'Filtrlarni tozalash';
            }
        };

        $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['uz-Latn-UZ']);
    })(jQuery);
});
(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define([], factory);
    } else if (typeof exports !== "undefined") {
        factory();
    } else {
        var mod = {
            exports: {}
        };
        factory();
        global.bootstrapTableViVN = mod.exports;
    }
})(this, function () {
    'use strict';

    /**
     * Bootstrap Table Vietnamese translation
     * Author: Duc N. PHAM <pngduc@gmail.com>
     */
    (function ($) {
        'use strict';

        $.fn.bootstrapTable.locales['vi-VN'] = {
            formatLoadingMessage: function formatLoadingMessage() {
                return 'Đang tải...';
            },
            formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
                return pageNumber + ' bản ghi mỗi trang';
            },
            formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
                return 'Hiển thị từ trang ' + pageFrom + ' đến ' + pageTo + ' của ' + totalRows + ' bảng ghi';
            },
            formatSearch: function formatSearch() {
                return 'Tìm kiếm';
            },
            formatNoMatches: function formatNoMatches() {
                return 'Không có dữ liệu';
            }
        };

        $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['vi-VN']);
    })(jQuery);
});
(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define([], factory);
    } else if (typeof exports !== "undefined") {
        factory();
    } else {
        var mod = {
            exports: {}
        };
        factory();
        global.bootstrapTableZhCN = mod.exports;
    }
})(this, function () {
    'use strict';

    /**
     * Bootstrap Table Chinese translation
     * Author: Zhixin Wen<wenzhixin2010@gmail.com>
     */
    (function ($) {
        'use strict';

        $.fn.bootstrapTable.locales['zh-CN'] = {
            formatLoadingMessage: function formatLoadingMessage() {
                return '正在努力地加载数据中，请稍候……';
            },
            formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
                return '每页显示 ' + pageNumber + ' 条记录';
            },
            formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
                return '显示第 ' + pageFrom + ' 到第 ' + pageTo + ' 条记录，总共 ' + totalRows + ' 条记录';
            },
            formatSearch: function formatSearch() {
                return '搜索';
            },
            formatNoMatches: function formatNoMatches() {
                return '没有找到匹配的记录';
            },
            formatPaginationSwitch: function formatPaginationSwitch() {
                return '隐藏/显示分页';
            },
            formatRefresh: function formatRefresh() {
                return '刷新';
            },
            formatToggle: function formatToggle() {
                return '切换';
            },
            formatColumns: function formatColumns() {
                return '列';
            },
            formatExport: function formatExport() {
                return '导出数据';
            },
            formatClearFilters: function formatClearFilters() {
                return '清空过滤';
            }
        };

        $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['zh-CN']);
    })(jQuery);
});
(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define([], factory);
    } else if (typeof exports !== "undefined") {
        factory();
    } else {
        var mod = {
            exports: {}
        };
        factory();
        global.bootstrapTableZhTW = mod.exports;
    }
})(this, function () {
    'use strict';

    /**
     * Bootstrap Table Chinese translation
     * Author: Zhixin Wen<wenzhixin2010@gmail.com>
     */
    (function ($) {
        'use strict';

        $.fn.bootstrapTable.locales['zh-TW'] = {
            formatLoadingMessage: function formatLoadingMessage() {
                return '正在努力地載入資料，請稍候……';
            },
            formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
                return '每頁顯示 ' + pageNumber + ' 項記錄';
            },
            formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
                return '顯示第 ' + pageFrom + ' 到第 ' + pageTo + ' 項記錄，總共 ' + totalRows + ' 項記錄';
            },
            formatSearch: function formatSearch() {
                return '搜尋';
            },
            formatNoMatches: function formatNoMatches() {
                return '沒有找到符合的結果';
            },
            formatPaginationSwitch: function formatPaginationSwitch() {
                return '隱藏/顯示分頁';
            },
            formatRefresh: function formatRefresh() {
                return '重新整理';
            },
            formatToggle: function formatToggle() {
                return '切換';
            },
            formatColumns: function formatColumns() {
                return '列';
            }
        };

        $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['zh-TW']);
    })(jQuery);
});
