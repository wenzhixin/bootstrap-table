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
    $.fn.bootstrapTable.locales['af-ZA'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return 'Besig om te laai, wag asseblief';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return pageNumber + ' rekords per bladsy';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return 'Resultate ' + pageFrom + ' tot ' + pageTo + ' van ' + totalRows + ' rye';
      },
      formatDetailPagination: function formatDetailPagination(totalRows) {
        return 'Showing ' + totalRows + ' rows';
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
      },
      formatFullscreen: function formatFullscreen() {
        return 'Fullscreen';
      },
      formatAllRows: function formatAllRows() {
        return 'All';
      },
      formatAutoRefresh: function formatAutoRefresh() {
        return 'Auto Refresh';
      },
      formatExport: function formatExport() {
        return 'Export data';
      },
      formatClearFilters: function formatClearFilters() {
        return 'Clear filters';
      },
      formatJumpto: function formatJumpto() {
        return 'GO';
      },
      formatAdvancedSearch: function formatAdvancedSearch() {
        return 'Advanced search';
      },
      formatAdvancedCloseButton: function formatAdvancedCloseButton() {
        return 'Close';
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
    $.fn.bootstrapTable.locales['ar-SA'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return 'جاري التحميل, يرجى الإنتظار';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return pageNumber + ' \u0633\u062C\u0644 \u0644\u0643\u0644 \u0635\u0641\u062D\u0629';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return '\u0627\u0644\u0638\u0627\u0647\u0631 ' + pageFrom + ' \u0625\u0644\u0649 ' + pageTo + ' \u0645\u0646 ' + totalRows + ' \u0633\u062C\u0644';
      },
      formatDetailPagination: function formatDetailPagination(totalRows) {
        return 'Showing ' + totalRows + ' rows';
      },
      formatSearch: function formatSearch() {
        return 'بحث';
      },
      formatNoMatches: function formatNoMatches() {
        return 'لا توجد نتائج مطابقة للبحث';
      },
      formatPaginationSwitch: function formatPaginationSwitch() {
        /* eslint-disable no-useless-escape */
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
      },
      formatFullscreen: function formatFullscreen() {
        return 'Fullscreen';
      },
      formatAllRows: function formatAllRows() {
        return 'All';
      },
      formatAutoRefresh: function formatAutoRefresh() {
        return 'Auto Refresh';
      },
      formatExport: function formatExport() {
        return 'Export data';
      },
      formatClearFilters: function formatClearFilters() {
        return 'Clear filters';
      },
      formatJumpto: function formatJumpto() {
        return 'GO';
      },
      formatAdvancedSearch: function formatAdvancedSearch() {
        return 'Advanced search';
      },
      formatAdvancedCloseButton: function formatAdvancedCloseButton() {
        return 'Close';
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
    $.fn.bootstrapTable.locales['ca-ES'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return 'Espereu, si us plau';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return pageNumber + ' resultats per p\xE0gina';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return 'Mostrant de ' + pageFrom + ' fins ' + pageTo + ' - total ' + totalRows + ' resultats';
      },
      formatDetailPagination: function formatDetailPagination(totalRows) {
        return 'Showing ' + totalRows + ' rows';
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
      formatFullscreen: function formatFullscreen() {
        return 'Fullscreen';
      },
      formatAllRows: function formatAllRows() {
        return 'Tots';
      },
      formatAutoRefresh: function formatAutoRefresh() {
        return 'Auto Refresh';
      },
      formatExport: function formatExport() {
        return 'Export data';
      },
      formatClearFilters: function formatClearFilters() {
        return 'Clear filters';
      },
      formatJumpto: function formatJumpto() {
        return 'GO';
      },
      formatAdvancedSearch: function formatAdvancedSearch() {
        return 'Advanced search';
      },
      formatAdvancedCloseButton: function formatAdvancedCloseButton() {
        return 'Close';
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
    $.fn.bootstrapTable.locales['cs-CZ'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return 'Čekejte, prosím';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return pageNumber + ' polo\u017Eek na str\xE1nku';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return 'Zobrazena ' + pageFrom + '. - ' + pageTo + '. polo\u017Eka z celkov\xFDch ' + totalRows;
      },
      formatDetailPagination: function formatDetailPagination(totalRows) {
        return 'Showing ' + totalRows + ' rows';
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
      formatFullscreen: function formatFullscreen() {
        return 'Fullscreen';
      },
      formatAllRows: function formatAllRows() {
        return 'Vše';
      },
      formatAutoRefresh: function formatAutoRefresh() {
        return 'Auto Refresh';
      },
      formatExport: function formatExport() {
        return 'Export data';
      },
      formatClearFilters: function formatClearFilters() {
        return 'Clear filters';
      },
      formatJumpto: function formatJumpto() {
        return 'GO';
      },
      formatAdvancedSearch: function formatAdvancedSearch() {
        return 'Advanced search';
      },
      formatAdvancedCloseButton: function formatAdvancedCloseButton() {
        return 'Close';
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
    $.fn.bootstrapTable.locales['da-DK'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return 'Indlæser, vent venligst';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return pageNumber + ' poster pr side';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return 'Viser ' + pageFrom + ' til ' + pageTo + ' af ' + totalRows + ' r\xE6kke' + (totalRows > 1 ? 'r' : '');
      },
      formatDetailPagination: function formatDetailPagination(totalRows) {
        return 'Viser ' + totalRows + ' r\xE6kke' + (totalRows > 1 ? 'r' : '');
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
      formatFullscreen: function formatFullscreen() {
        return 'Fullscreen';
      },
      formatAllRows: function formatAllRows() {
        return 'Alle';
      },
      formatAutoRefresh: function formatAutoRefresh() {
        return 'Auto Refresh';
      },
      formatExport: function formatExport() {
        return 'Eksporter';
      },
      formatClearFilters: function formatClearFilters() {
        return 'Ryd filtre';
      },
      formatJumpto: function formatJumpto() {
        return 'GO';
      },
      formatAdvancedSearch: function formatAdvancedSearch() {
        return 'Advanced search';
      },
      formatAdvancedCloseButton: function formatAdvancedCloseButton() {
        return 'Close';
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
    $.fn.bootstrapTable.locales['de-DE'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return 'Lade, bitte warten';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return pageNumber + ' Zeilen pro Seite.';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return 'Zeige Zeile ' + pageFrom + ' bis ' + pageTo + ' von ' + totalRows + ' Zeile' + (totalRows > 1 ? 'n' : '') + '.';
      },
      formatDetailPagination: function formatDetailPagination(totalRows) {
        return 'Zeige ' + totalRows + ' Zeile' + (totalRows > 1 ? 'n' : '') + '.';
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
      formatFullscreen: function formatFullscreen() {
        return 'Fullscreen';
      },
      formatAllRows: function formatAllRows() {
        return 'Alle';
      },
      formatAutoRefresh: function formatAutoRefresh() {
        return 'Auto Refresh';
      },
      formatExport: function formatExport() {
        return 'Datenexport';
      },
      formatClearFilters: function formatClearFilters() {
        return 'Lösche Filter';
      },
      formatJumpto: function formatJumpto() {
        return 'GO';
      },
      formatAdvancedSearch: function formatAdvancedSearch() {
        return 'Advanced search';
      },
      formatAdvancedCloseButton: function formatAdvancedCloseButton() {
        return 'Close';
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
    $.fn.bootstrapTable.locales['el-GR'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return 'Φορτώνει, παρακαλώ περιμένετε';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return pageNumber + ' \u03B1\u03C0\u03BF\u03C4\u03B5\u03BB\u03AD\u03C3\u03BC\u03B1\u03C4\u03B1 \u03B1\u03BD\u03AC \u03C3\u03B5\u03BB\u03AF\u03B4\u03B1';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return '\u0395\u03BC\u03C6\u03B1\u03BD\u03AF\u03B6\u03BF\u03BD\u03C4\u03B1\u03B9 \u03B1\u03C0\u03CC \u03C4\u03B7\u03BD ' + pageFrom + ' \u03C9\u03C2 \u03C4\u03B7\u03BD ' + pageTo + ' \u03B1\u03C0\u03CC \u03C3\u03CD\u03BD\u03BF\u03BB\u03BF ' + totalRows + ' \u03C3\u03B5\u03B9\u03C1\u03CE\u03BD';
      },
      formatDetailPagination: function formatDetailPagination(totalRows) {
        return 'Showing ' + totalRows + ' rows';
      },
      formatSearch: function formatSearch() {
        return 'Αναζητήστε';
      },
      formatNoMatches: function formatNoMatches() {
        return 'Δεν βρέθηκαν αποτελέσματα';
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
      formatFullscreen: function formatFullscreen() {
        return 'Fullscreen';
      },
      formatAllRows: function formatAllRows() {
        return 'All';
      },
      formatAutoRefresh: function formatAutoRefresh() {
        return 'Auto Refresh';
      },
      formatExport: function formatExport() {
        return 'Export data';
      },
      formatClearFilters: function formatClearFilters() {
        return 'Clear filters';
      },
      formatJumpto: function formatJumpto() {
        return 'GO';
      },
      formatAdvancedSearch: function formatAdvancedSearch() {
        return 'Advanced search';
      },
      formatAdvancedCloseButton: function formatAdvancedCloseButton() {
        return 'Close';
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
    $.fn.bootstrapTable.locales['en-US'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return 'Loading, please wait';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return pageNumber + ' rows per page';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return 'Showing ' + pageFrom + ' to ' + pageTo + ' of ' + totalRows + ' rows';
      },
      formatDetailPagination: function formatDetailPagination(totalRows) {
        return 'Showing ' + totalRows + ' rows';
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
      formatFullscreen: function formatFullscreen() {
        return 'Fullscreen';
      },
      formatAllRows: function formatAllRows() {
        return 'All';
      },
      formatAutoRefresh: function formatAutoRefresh() {
        return 'Auto Refresh';
      },
      formatExport: function formatExport() {
        return 'Export data';
      },
      formatClearFilters: function formatClearFilters() {
        return 'Clear filters';
      },
      formatJumpto: function formatJumpto() {
        return 'GO';
      },
      formatAdvancedSearch: function formatAdvancedSearch() {
        return 'Advanced search';
      },
      formatAdvancedCloseButton: function formatAdvancedCloseButton() {
        return 'Close';
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
    $.fn.bootstrapTable.locales['es-AR'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return 'Cargando, espere por favor';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return pageNumber + ' registros por p\xE1gina';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return 'Mostrando ' + pageFrom + ' a ' + pageTo + ' de ' + totalRows + ' filas';
      },
      formatDetailPagination: function formatDetailPagination(totalRows) {
        return 'Showing ' + totalRows + ' rows';
      },
      formatSearch: function formatSearch() {
        return 'Buscar';
      },
      formatNoMatches: function formatNoMatches() {
        return 'No se encontraron registros';
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
      formatFullscreen: function formatFullscreen() {
        return 'Fullscreen';
      },
      formatAllRows: function formatAllRows() {
        return 'Todo';
      },
      formatAutoRefresh: function formatAutoRefresh() {
        return 'Auto Refresh';
      },
      formatExport: function formatExport() {
        return 'Export data';
      },
      formatClearFilters: function formatClearFilters() {
        return 'Clear filters';
      },
      formatJumpto: function formatJumpto() {
        return 'GO';
      },
      formatAdvancedSearch: function formatAdvancedSearch() {
        return 'Advanced search';
      },
      formatAdvancedCloseButton: function formatAdvancedCloseButton() {
        return 'Close';
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
    $.fn.bootstrapTable.locales['es-CL'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return 'Cargando, espere por favor';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return pageNumber + ' filas por p\xE1gina';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return 'Mostrando ' + pageFrom + ' a ' + pageTo + ' de ' + totalRows + ' filas';
      },
      formatDetailPagination: function formatDetailPagination(totalRows) {
        return 'Showing ' + totalRows + ' rows';
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
      formatFullscreen: function formatFullscreen() {
        return 'Fullscreen';
      },
      formatAllRows: function formatAllRows() {
        return 'Todo';
      },
      formatAutoRefresh: function formatAutoRefresh() {
        return 'Auto Refresh';
      },
      formatExport: function formatExport() {
        return 'Export data';
      },
      formatClearFilters: function formatClearFilters() {
        return 'Clear filters';
      },
      formatJumpto: function formatJumpto() {
        return 'GO';
      },
      formatAdvancedSearch: function formatAdvancedSearch() {
        return 'Advanced search';
      },
      formatAdvancedCloseButton: function formatAdvancedCloseButton() {
        return 'Close';
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
    $.fn.bootstrapTable.locales['es-CR'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return 'Cargando, por favor espere';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return pageNumber + ' registros por p\xE1gina';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return 'Mostrando de ' + pageFrom + ' a ' + pageTo + ' registros de ' + totalRows + ' registros en total';
      },
      formatDetailPagination: function formatDetailPagination(totalRows) {
        return 'Showing ' + totalRows + ' rows';
      },
      formatSearch: function formatSearch() {
        return 'Buscar';
      },
      formatNoMatches: function formatNoMatches() {
        return 'No se encontraron registros';
      },
      formatPaginationSwitch: function formatPaginationSwitch() {
        return 'Hide/Show pagination';
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
      formatFullscreen: function formatFullscreen() {
        return 'Fullscreen';
      },
      formatAllRows: function formatAllRows() {
        return 'Todo';
      },
      formatAutoRefresh: function formatAutoRefresh() {
        return 'Auto Refresh';
      },
      formatExport: function formatExport() {
        return 'Export data';
      },
      formatClearFilters: function formatClearFilters() {
        return 'Clear filters';
      },
      formatJumpto: function formatJumpto() {
        return 'GO';
      },
      formatAdvancedSearch: function formatAdvancedSearch() {
        return 'Advanced search';
      },
      formatAdvancedCloseButton: function formatAdvancedCloseButton() {
        return 'Close';
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
    $.fn.bootstrapTable.locales['es-ES'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return 'Por favor espere';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return pageNumber + ' resultados por p\xE1gina';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return 'Mostrando desde ' + pageFrom + ' hasta ' + pageTo + ' - En total ' + totalRows + ' resultados';
      },
      formatDetailPagination: function formatDetailPagination(totalRows) {
        return 'Showing ' + totalRows + ' rows';
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
      formatFullscreen: function formatFullscreen() {
        return 'Fullscreen';
      },
      formatAllRows: function formatAllRows() {
        return 'Todos';
      },
      formatAutoRefresh: function formatAutoRefresh() {
        return 'Auto Refresh';
      },

      formatExport: function formatExport() {
        return 'Exportar los datos';
      },
      formatClearFilters: function formatClearFilters() {
        return 'Borrar los filtros';
      },
      formatJumpto: function formatJumpto() {
        return 'GO';
      },

      formatAdvancedSearch: function formatAdvancedSearch() {
        return 'Búsqueda avanzada';
      },
      formatAdvancedCloseButton: function formatAdvancedCloseButton() {
        return 'Cerrar';
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
    $.fn.bootstrapTable.locales['es-MX'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return 'Cargando, espere por favor';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return pageNumber + ' registros por p\xE1gina';
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
      formatColumns: function formatColumns() {
        return 'Columnas';
      },
      formatFullscreen: function formatFullscreen() {
        return 'Pantalla completa';
      },
      formatAllRows: function formatAllRows() {
        return 'Todo';
      },
      formatAutoRefresh: function formatAutoRefresh() {
        return 'Auto Refresh';
      },
      formatExport: function formatExport() {
        return 'Export data';
      },
      formatClearFilters: function formatClearFilters() {
        return 'Clear filters';
      },
      formatJumpto: function formatJumpto() {
        return 'GO';
      },
      formatAdvancedSearch: function formatAdvancedSearch() {
        return 'Advanced search';
      },
      formatAdvancedCloseButton: function formatAdvancedCloseButton() {
        return 'Close';
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
    $.fn.bootstrapTable.locales['es-NI'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return 'Cargando, por favor espere';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return pageNumber + ' registros por p\xE1gina';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return 'Mostrando de ' + pageFrom + ' a ' + pageTo + ' registros de ' + totalRows + ' registros en total';
      },
      formatDetailPagination: function formatDetailPagination(totalRows) {
        return 'Showing ' + totalRows + ' rows';
      },
      formatSearch: function formatSearch() {
        return 'Buscar';
      },
      formatNoMatches: function formatNoMatches() {
        return 'No se encontraron registros';
      },
      formatPaginationSwitch: function formatPaginationSwitch() {
        return 'Hide/Show pagination';
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
      formatFullscreen: function formatFullscreen() {
        return 'Fullscreen';
      },
      formatAllRows: function formatAllRows() {
        return 'Todo';
      },
      formatAutoRefresh: function formatAutoRefresh() {
        return 'Auto Refresh';
      },
      formatExport: function formatExport() {
        return 'Export data';
      },
      formatClearFilters: function formatClearFilters() {
        return 'Clear filters';
      },
      formatJumpto: function formatJumpto() {
        return 'GO';
      },
      formatAdvancedSearch: function formatAdvancedSearch() {
        return 'Advanced search';
      },
      formatAdvancedCloseButton: function formatAdvancedCloseButton() {
        return 'Close';
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
    $.fn.bootstrapTable.locales['es-SP'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return 'Cargando, por favor espera';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return pageNumber + ' registros por p&#225;gina.';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return pageFrom + ' - ' + pageTo + ' de ' + totalRows + ' registros.';
      },
      formatDetailPagination: function formatDetailPagination(totalRows) {
        return 'Showing ' + totalRows + ' rows';
      },
      formatSearch: function formatSearch() {
        return 'Buscar';
      },
      formatNoMatches: function formatNoMatches() {
        return 'No se han encontrado registros.';
      },
      formatPaginationSwitch: function formatPaginationSwitch() {
        return 'Hide/Show pagination';
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
      formatFullscreen: function formatFullscreen() {
        return 'Fullscreen';
      },
      formatAllRows: function formatAllRows() {
        return 'Todo';
      },
      formatAutoRefresh: function formatAutoRefresh() {
        return 'Auto Refresh';
      },
      formatExport: function formatExport() {
        return 'Export data';
      },
      formatClearFilters: function formatClearFilters() {
        return 'Clear filters';
      },
      formatJumpto: function formatJumpto() {
        return 'GO';
      },
      formatAdvancedSearch: function formatAdvancedSearch() {
        return 'Advanced search';
      },
      formatAdvancedCloseButton: function formatAdvancedCloseButton() {
        return 'Close';
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
    $.fn.bootstrapTable.locales['et-EE'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return 'Päring käib, palun oota';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return pageNumber + ' rida lehe kohta';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return 'N\xE4itan tulemusi ' + pageFrom + ' kuni ' + pageTo + ' - kokku ' + totalRows + ' tulemust';
      },
      formatDetailPagination: function formatDetailPagination(totalRows) {
        return 'Showing ' + totalRows + ' rows';
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
      formatFullscreen: function formatFullscreen() {
        return 'Fullscreen';
      },
      formatAllRows: function formatAllRows() {
        return 'Kõik';
      },
      formatAutoRefresh: function formatAutoRefresh() {
        return 'Auto Refresh';
      },
      formatExport: function formatExport() {
        return 'Export data';
      },
      formatClearFilters: function formatClearFilters() {
        return 'Clear filters';
      },
      formatJumpto: function formatJumpto() {
        return 'GO';
      },
      formatAdvancedSearch: function formatAdvancedSearch() {
        return 'Advanced search';
      },
      formatAdvancedCloseButton: function formatAdvancedCloseButton() {
        return 'Close';
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
    $.fn.bootstrapTable.locales['eu-EU'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return 'Itxaron mesedez';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return pageNumber + ' emaitza orriko.';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return totalRows + ' erregistroetatik ' + pageFrom + 'etik ' + pageTo + 'erakoak erakusten.';
      },
      formatDetailPagination: function formatDetailPagination(totalRows) {
        return 'Showing ' + totalRows + ' rows';
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
      formatFullscreen: function formatFullscreen() {
        return 'Fullscreen';
      },
      formatAllRows: function formatAllRows() {
        return 'Guztiak';
      },
      formatAutoRefresh: function formatAutoRefresh() {
        return 'Auto Refresh';
      },
      formatExport: function formatExport() {
        return 'Export data';
      },
      formatClearFilters: function formatClearFilters() {
        return 'Clear filters';
      },
      formatJumpto: function formatJumpto() {
        return 'GO';
      },
      formatAdvancedSearch: function formatAdvancedSearch() {
        return 'Advanced search';
      },
      formatAdvancedCloseButton: function formatAdvancedCloseButton() {
        return 'Close';
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
    $.fn.bootstrapTable.locales['fa-IR'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return 'در حال بارگذاری, لطفا صبر کنید';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return pageNumber + ' \u0631\u06A9\u0648\u0631\u062F \u062F\u0631 \u0635\u0641\u062D\u0647';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return '\u0646\u0645\u0627\u06CC\u0634 ' + pageFrom + ' \u062A\u0627 ' + pageTo + ' \u0627\u0632 ' + totalRows + ' \u0631\u062F\u06CC\u0641';
      },
      formatDetailPagination: function formatDetailPagination(totalRows) {
        return 'Showing ' + totalRows + ' rows';
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
      formatFullscreen: function formatFullscreen() {
        return 'Fullscreen';
      },
      formatAllRows: function formatAllRows() {
        return 'همه';
      },
      formatAutoRefresh: function formatAutoRefresh() {
        return 'Auto Refresh';
      },
      formatExport: function formatExport() {
        return 'Export data';
      },
      formatClearFilters: function formatClearFilters() {
        return 'Clear filters';
      },
      formatJumpto: function formatJumpto() {
        return 'GO';
      },
      formatAdvancedSearch: function formatAdvancedSearch() {
        return 'Advanced search';
      },
      formatAdvancedCloseButton: function formatAdvancedCloseButton() {
        return 'Close';
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
    $.fn.bootstrapTable.locales['fi-FI'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return 'Ladataan, ole hyvä ja odota';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return pageNumber + ' rivi\xE4 sivulla';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return 'N\xE4ytet\xE4\xE4n rivit ' + pageFrom + ' - ' + pageTo + ' / ' + totalRows;
      },
      formatDetailPagination: function formatDetailPagination(totalRows) {
        return 'Showing ' + totalRows + ' rows';
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
      formatFullscreen: function formatFullscreen() {
        return 'Fullscreen';
      },
      formatAllRows: function formatAllRows() {
        return 'Kaikki';
      },
      formatAutoRefresh: function formatAutoRefresh() {
        return 'Auto Refresh';
      },
      formatExport: function formatExport() {
        return 'Vie tiedot';
      },
      formatClearFilters: function formatClearFilters() {
        return 'Poista suodattimet';
      },
      formatJumpto: function formatJumpto() {
        return 'GO';
      },
      formatAdvancedSearch: function formatAdvancedSearch() {
        return 'Advanced search';
      },
      formatAdvancedCloseButton: function formatAdvancedCloseButton() {
        return 'Close';
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
    $.fn.bootstrapTable.locales['fr-BE'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return 'Chargement en cours';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return pageNumber + ' entr\xE9es par page';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return 'Affiche de' + pageFrom + ' \xE0 ' + pageTo + ' sur ' + totalRows + ' lignes';
      },
      formatDetailPagination: function formatDetailPagination(totalRows) {
        return 'Showing ' + totalRows + ' rows';
      },
      formatSearch: function formatSearch() {
        return 'Recherche';
      },
      formatNoMatches: function formatNoMatches() {
        return 'Pas de fichiers trouvés';
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
      formatFullscreen: function formatFullscreen() {
        return 'Fullscreen';
      },
      formatAllRows: function formatAllRows() {
        return 'All';
      },
      formatAutoRefresh: function formatAutoRefresh() {
        return 'Auto Refresh';
      },
      formatExport: function formatExport() {
        return 'Export data';
      },
      formatClearFilters: function formatClearFilters() {
        return 'Clear filters';
      },
      formatJumpto: function formatJumpto() {
        return 'GO';
      },
      formatAdvancedSearch: function formatAdvancedSearch() {
        return 'Advanced search';
      },
      formatAdvancedCloseButton: function formatAdvancedCloseButton() {
        return 'Close';
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
    $.fn.bootstrapTable.locales['fr-FR'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return 'Chargement en cours, patientez, s´il vous plaît';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return pageNumber + ' lignes par page';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return 'Affichage des lignes ' + pageFrom + ' \xE0 ' + pageTo + ' sur ' + totalRows + ' lignes au total';
      },
      formatDetailPagination: function formatDetailPagination(totalRows) {
        return 'Showing ' + totalRows + ' rows';
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
      formatFullscreen: function formatFullscreen() {
        return 'Fullscreen';
      },
      formatAllRows: function formatAllRows() {
        return 'Tous';
      },
      formatAutoRefresh: function formatAutoRefresh() {
        return 'Auto Refresh';
      },
      formatExport: function formatExport() {
        return 'Exporter les données';
      },
      formatClearFilters: function formatClearFilters() {
        return 'Vider les filtres';
      },
      formatJumpto: function formatJumpto() {
        return 'GO';
      },
      formatAdvancedSearch: function formatAdvancedSearch() {
        return 'Recherche avancée';
      },
      formatAdvancedCloseButton: function formatAdvancedCloseButton() {
        return 'Fermer';
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
    $.fn.bootstrapTable.locales['he-IL'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return 'טוען, נא להמתין';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return pageNumber + ' \u05E9\u05D5\u05E8\u05D5\u05EA \u05D1\u05E2\u05DE\u05D5\u05D3';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return '\u05DE\u05E6\u05D9\u05D2 ' + pageFrom + ' \u05E2\u05D3 ' + pageTo + ' \u05DE-' + totalRows + ' \u05E9\u05D5\u05E8\u05D5\u05EA';
      },
      formatDetailPagination: function formatDetailPagination(totalRows) {
        return 'Showing ' + totalRows + ' rows';
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
      formatFullscreen: function formatFullscreen() {
        return 'Fullscreen';
      },
      formatAllRows: function formatAllRows() {
        return 'הכל';
      },
      formatAutoRefresh: function formatAutoRefresh() {
        return 'Auto Refresh';
      },
      formatExport: function formatExport() {
        return 'Export data';
      },
      formatClearFilters: function formatClearFilters() {
        return 'Clear filters';
      },
      formatJumpto: function formatJumpto() {
        return 'GO';
      },
      formatAdvancedSearch: function formatAdvancedSearch() {
        return 'Advanced search';
      },
      formatAdvancedCloseButton: function formatAdvancedCloseButton() {
        return 'Close';
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
    $.fn.bootstrapTable.locales['hr-HR'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return 'Molimo pričekajte';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return pageNumber + ' broj zapisa po stranici';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return 'Prikazujem ' + pageFrom + '. - ' + pageTo + '. od ukupnog broja zapisa ' + totalRows;
      },
      formatDetailPagination: function formatDetailPagination(totalRows) {
        return 'Showing ' + totalRows + ' rows';
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
      formatFullscreen: function formatFullscreen() {
        return 'Fullscreen';
      },
      formatAllRows: function formatAllRows() {
        return 'Sve';
      },
      formatAutoRefresh: function formatAutoRefresh() {
        return 'Auto Refresh';
      },
      formatExport: function formatExport() {
        return 'Export data';
      },
      formatClearFilters: function formatClearFilters() {
        return 'Clear filters';
      },
      formatJumpto: function formatJumpto() {
        return 'GO';
      },
      formatAdvancedSearch: function formatAdvancedSearch() {
        return 'Advanced search';
      },
      formatAdvancedCloseButton: function formatAdvancedCloseButton() {
        return 'Close';
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
    $.fn.bootstrapTable.locales['hu-HU'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return 'Betöltés, kérem várjon';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return pageNumber + ' rekord per oldal';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return 'Megjelen\xEDtve ' + pageFrom + ' - ' + pageTo + ' / ' + totalRows + ' \xF6sszesen';
      },
      formatDetailPagination: function formatDetailPagination(totalRows) {
        return 'Showing ' + totalRows + ' rows';
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
      formatFullscreen: function formatFullscreen() {
        return 'Fullscreen';
      },
      formatAllRows: function formatAllRows() {
        return 'Összes';
      },
      formatAutoRefresh: function formatAutoRefresh() {
        return 'Auto Refresh';
      },
      formatExport: function formatExport() {
        return 'Export data';
      },
      formatClearFilters: function formatClearFilters() {
        return 'Clear filters';
      },
      formatJumpto: function formatJumpto() {
        return 'GO';
      },
      formatAdvancedSearch: function formatAdvancedSearch() {
        return 'Advanced search';
      },
      formatAdvancedCloseButton: function formatAdvancedCloseButton() {
        return 'Close';
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
    $.fn.bootstrapTable.locales['id-ID'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return 'Memuat, mohon tunggu';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return pageNumber + ' baris per halaman';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return 'Menampilkan ' + pageFrom + ' sampai ' + pageTo + ' dari ' + totalRows + ' baris';
      },
      formatDetailPagination: function formatDetailPagination(totalRows) {
        return 'Showing ' + totalRows + ' rows';
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
      formatFullscreen: function formatFullscreen() {
        return 'Fullscreen';
      },
      formatAllRows: function formatAllRows() {
        return 'Semua';
      },
      formatAutoRefresh: function formatAutoRefresh() {
        return 'Auto Refresh';
      },
      formatExport: function formatExport() {
        return 'Ekspor data';
      },
      formatClearFilters: function formatClearFilters() {
        return 'Bersihkan filter';
      },
      formatJumpto: function formatJumpto() {
        return 'GO';
      },
      formatAdvancedSearch: function formatAdvancedSearch() {
        return 'Advanced search';
      },
      formatAdvancedCloseButton: function formatAdvancedCloseButton() {
        return 'Close';
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
    $.fn.bootstrapTable.locales['it-IT'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return 'Caricamento in corso';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return pageNumber + ' elementi per pagina';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return 'Visualizzazione da ' + pageFrom + ' a ' + pageTo + ' di ' + totalRows + ' elementi';
      },
      formatDetailPagination: function formatDetailPagination(totalRows) {
        return 'Showing ' + totalRows + ' rows';
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
      formatFullscreen: function formatFullscreen() {
        return 'Fullscreen';
      },
      formatAllRows: function formatAllRows() {
        return 'Tutto';
      },
      formatAutoRefresh: function formatAutoRefresh() {
        return 'Auto Refresh';
      },
      formatExport: function formatExport() {
        return 'Esporta dati';
      },
      formatClearFilters: function formatClearFilters() {
        return 'Pulisci filtri';
      },
      formatJumpto: function formatJumpto() {
        return 'GO';
      },
      formatAdvancedSearch: function formatAdvancedSearch() {
        return 'Advanced search';
      },
      formatAdvancedCloseButton: function formatAdvancedCloseButton() {
        return 'Close';
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
    $.fn.bootstrapTable.locales['ja-JP'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return '読み込み中です。少々お待ちください。';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return '\u30DA\u30FC\u30B8\u5F53\u305F\u308A\u6700\u5927' + pageNumber + '\u4EF6';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return '\u5168' + totalRows + '\u4EF6\u304B\u3089\u3001' + pageFrom + '\u304B\u3089' + pageTo + '\u4EF6\u76EE\u307E\u3067\u8868\u793A\u3057\u3066\u3044\u307E\u3059';
      },
      formatDetailPagination: function formatDetailPagination(totalRows) {
        return 'Showing ' + totalRows + ' rows';
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
      formatFullscreen: function formatFullscreen() {
        return 'Fullscreen';
      },
      formatAllRows: function formatAllRows() {
        return 'すべて';
      },
      formatAutoRefresh: function formatAutoRefresh() {
        return 'Auto Refresh';
      },
      formatExport: function formatExport() {
        return 'Export data';
      },
      formatClearFilters: function formatClearFilters() {
        return 'Clear filters';
      },
      formatJumpto: function formatJumpto() {
        return 'GO';
      },
      formatAdvancedSearch: function formatAdvancedSearch() {
        return 'Advanced search';
      },
      formatAdvancedCloseButton: function formatAdvancedCloseButton() {
        return 'Close';
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
    $.fn.bootstrapTable.locales['ka-GE'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return 'იტვირთება, გთხოვთ მოიცადოთ';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return pageNumber + ' \u10E9\u10D0\u10DC\u10D0\u10EC\u10D4\u10E0\u10D8 \u10D7\u10D8\u10D7\u10DD \u10D2\u10D5\u10D4\u10E0\u10D3\u10D6\u10D4';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return '\u10DC\u10D0\u10E9\u10D5\u10D4\u10DC\u10D4\u10D1\u10D8\u10D0 ' + pageFrom + '-\u10D3\u10D0\u10DC ' + pageTo + '-\u10DB\u10D3\u10D4 \u10E9\u10D0\u10DC\u10D0\u10EC\u10D4\u10E0\u10D8 \u10EF\u10D0\u10DB\u10E3\u10E0\u10D8 ' + totalRows + '-\u10D3\u10D0\u10DC';
      },
      formatDetailPagination: function formatDetailPagination(totalRows) {
        return 'Showing ' + totalRows + ' rows';
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
      },
      formatFullscreen: function formatFullscreen() {
        return 'Fullscreen';
      },
      formatAllRows: function formatAllRows() {
        return 'All';
      },
      formatAutoRefresh: function formatAutoRefresh() {
        return 'Auto Refresh';
      },
      formatExport: function formatExport() {
        return 'Export data';
      },
      formatClearFilters: function formatClearFilters() {
        return 'Clear filters';
      },
      formatJumpto: function formatJumpto() {
        return 'GO';
      },
      formatAdvancedSearch: function formatAdvancedSearch() {
        return 'Advanced search';
      },
      formatAdvancedCloseButton: function formatAdvancedCloseButton() {
        return 'Close';
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
    $.fn.bootstrapTable.locales['ko-KR'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return '데이터를 불러오는 중입니다';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return '\uD398\uC774\uC9C0 \uB2F9 ' + pageNumber + '\uAC1C \uB370\uC774\uD130 \uCD9C\uB825';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return '\uC804\uCCB4 ' + totalRows + '\uAC1C \uC911 ' + pageFrom + '~' + pageTo + '\uBC88\uC9F8 \uB370\uC774\uD130 \uCD9C\uB825,';
      },
      formatDetailPagination: function formatDetailPagination(totalRows) {
        return 'Showing ' + totalRows + ' rows';
      },
      formatSearch: function formatSearch() {
        return '검색';
      },
      formatNoMatches: function formatNoMatches() {
        return '조회된 데이터가 없습니다.';
      },
      formatPaginationSwitch: function formatPaginationSwitch() {
        return 'Hide/Show pagination';
      },
      formatRefresh: function formatRefresh() {
        return '새로 고침';
      },
      formatToggle: function formatToggle() {
        return '전환';
      },
      formatColumns: function formatColumns() {
        return '컬럼 필터링';
      },
      formatFullscreen: function formatFullscreen() {
        return 'Fullscreen';
      },
      formatAllRows: function formatAllRows() {
        return 'All';
      },
      formatAutoRefresh: function formatAutoRefresh() {
        return 'Auto Refresh';
      },
      formatExport: function formatExport() {
        return 'Export data';
      },
      formatClearFilters: function formatClearFilters() {
        return 'Clear filters';
      },
      formatJumpto: function formatJumpto() {
        return 'GO';
      },
      formatAdvancedSearch: function formatAdvancedSearch() {
        return 'Advanced search';
      },
      formatAdvancedCloseButton: function formatAdvancedCloseButton() {
        return 'Close';
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
    $.fn.bootstrapTable.locales['ms-MY'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return 'Permintaan sedang dimuatkan. Sila tunggu sebentar';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return pageNumber + ' rekod setiap muka surat';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return 'Sedang memaparkan rekod ' + pageFrom + ' hingga ' + pageTo + ' daripada jumlah ' + totalRows + ' rekod';
      },
      formatDetailPagination: function formatDetailPagination(totalRows) {
        return 'Showing ' + totalRows + ' rows';
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
      formatFullscreen: function formatFullscreen() {
        return 'Fullscreen';
      },
      formatAllRows: function formatAllRows() {
        return 'Semua';
      },
      formatAutoRefresh: function formatAutoRefresh() {
        return 'Auto Refresh';
      },
      formatExport: function formatExport() {
        return 'Export data';
      },
      formatClearFilters: function formatClearFilters() {
        return 'Clear filters';
      },
      formatJumpto: function formatJumpto() {
        return 'GO';
      },
      formatAdvancedSearch: function formatAdvancedSearch() {
        return 'Advanced search';
      },
      formatAdvancedCloseButton: function formatAdvancedCloseButton() {
        return 'Close';
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
    $.fn.bootstrapTable.locales['nb-NO'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return 'Oppdaterer, vennligst vent';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return pageNumber + ' poster pr side';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return 'Viser ' + pageFrom + ' til ' + pageTo + ' av ' + totalRows + ' rekker';
      },
      formatDetailPagination: function formatDetailPagination(totalRows) {
        return 'Showing ' + totalRows + ' rows';
      },
      formatSearch: function formatSearch() {
        return 'Søk';
      },
      formatNoMatches: function formatNoMatches() {
        return 'Ingen poster funnet';
      },
      formatPaginationSwitch: function formatPaginationSwitch() {
        return 'Hide/Show pagination';
      },
      formatRefresh: function formatRefresh() {
        return 'Oppdater';
      },
      formatToggle: function formatToggle() {
        return 'Endre';
      },
      formatColumns: function formatColumns() {
        return 'Kolonner';
      },
      formatFullscreen: function formatFullscreen() {
        return 'Fullscreen';
      },
      formatAllRows: function formatAllRows() {
        return 'All';
      },
      formatAutoRefresh: function formatAutoRefresh() {
        return 'Auto Refresh';
      },
      formatExport: function formatExport() {
        return 'Export data';
      },
      formatClearFilters: function formatClearFilters() {
        return 'Clear filters';
      },
      formatJumpto: function formatJumpto() {
        return 'GO';
      },
      formatAdvancedSearch: function formatAdvancedSearch() {
        return 'Advanced search';
      },
      formatAdvancedCloseButton: function formatAdvancedCloseButton() {
        return 'Close';
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
    $.fn.bootstrapTable.locales['nl-NL'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return 'Laden, even geduld';
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
      formatPaginationSwitch: function formatPaginationSwitch() {
        return 'Verberg/Toon paginatie';
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
      formatFullscreen: function formatFullscreen() {
        return 'Fullscreen';
      },
      formatAllRows: function formatAllRows() {
        return 'Alle';
      },
      formatAutoRefresh: function formatAutoRefresh() {
        return 'Auto Refresh';
      },
      formatExport: function formatExport() {
        return 'Exporteer data';
      },
      formatClearFilters: function formatClearFilters() {
        return 'Verwijder filters';
      },
      formatJumpto: function formatJumpto() {
        return 'GO';
      },
      formatAdvancedSearch: function formatAdvancedSearch() {
        return 'Advanced search';
      },
      formatAdvancedCloseButton: function formatAdvancedCloseButton() {
        return 'Close';
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
    $.fn.bootstrapTable.locales['pl-PL'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return 'Ładowanie, proszę czekać';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return pageNumber + ' rekord\xF3w na stron\u0119';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return 'Wy\u015Bwietlanie rekord\xF3w od ' + pageFrom + ' do ' + pageTo + ' z ' + totalRows;
      },
      formatDetailPagination: function formatDetailPagination(totalRows) {
        return 'Showing ' + totalRows + ' rows';
      },
      formatSearch: function formatSearch() {
        return 'Szukaj';
      },
      formatNoMatches: function formatNoMatches() {
        return 'Niestety, nic nie znaleziono';
      },
      formatPaginationSwitch: function formatPaginationSwitch() {
        return 'Hide/Show pagination';
      },
      formatRefresh: function formatRefresh() {
        return 'Odśwież';
      },
      formatToggle: function formatToggle() {
        return 'Przełącz';
      },
      formatColumns: function formatColumns() {
        return 'Kolumny';
      },
      formatFullscreen: function formatFullscreen() {
        return 'Fullscreen';
      },
      formatAllRows: function formatAllRows() {
        return 'All';
      },
      formatAutoRefresh: function formatAutoRefresh() {
        return 'Auto Refresh';
      },
      formatExport: function formatExport() {
        return 'Export data';
      },
      formatClearFilters: function formatClearFilters() {
        return 'Clear filters';
      },
      formatJumpto: function formatJumpto() {
        return 'GO';
      },
      formatAdvancedSearch: function formatAdvancedSearch() {
        return 'Advanced search';
      },
      formatAdvancedCloseButton: function formatAdvancedCloseButton() {
        return 'Close';
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
    $.fn.bootstrapTable.locales['pt-BR'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return 'Carregando, aguarde';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return pageNumber + ' registros por p\xE1gina';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return 'Exibindo ' + pageFrom + ' at\xE9 ' + pageTo + ' de ' + totalRows + ' linhas';
      },
      formatDetailPagination: function formatDetailPagination(totalRows) {
        return 'Showing ' + totalRows + ' rows';
      },
      formatSearch: function formatSearch() {
        return 'Pesquisar';
      },
      formatNoMatches: function formatNoMatches() {
        return 'Nenhum registro encontrado';
      },
      formatPaginationSwitch: function formatPaginationSwitch() {
        return 'Ocultar/Exibir paginação';
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
      formatFullscreen: function formatFullscreen() {
        return 'Fullscreen';
      },
      formatAllRows: function formatAllRows() {
        return 'All';
      },
      formatAutoRefresh: function formatAutoRefresh() {
        return 'Auto Refresh';
      },
      formatExport: function formatExport() {
        return 'Export data';
      },
      formatClearFilters: function formatClearFilters() {
        return 'Clear filters';
      },
      formatJumpto: function formatJumpto() {
        return 'GO';
      },
      formatAdvancedSearch: function formatAdvancedSearch() {
        return 'Advanced search';
      },
      formatAdvancedCloseButton: function formatAdvancedCloseButton() {
        return 'Close';
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
    $.fn.bootstrapTable.locales['pt-PT'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return 'A carregar, por favor aguarde';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return pageNumber + ' registos por p&aacute;gina';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return 'A mostrar ' + pageFrom + ' at&eacute; ' + pageTo + ' de ' + totalRows + ' linhas';
      },
      formatDetailPagination: function formatDetailPagination(totalRows) {
        return 'Showing ' + totalRows + ' rows';
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
      formatFullscreen: function formatFullscreen() {
        return 'Fullscreen';
      },
      formatAllRows: function formatAllRows() {
        return 'Tudo';
      },
      formatAutoRefresh: function formatAutoRefresh() {
        return 'Auto Refresh';
      },
      formatExport: function formatExport() {
        return 'Export data';
      },
      formatClearFilters: function formatClearFilters() {
        return 'Clear filters';
      },
      formatJumpto: function formatJumpto() {
        return 'GO';
      },
      formatAdvancedSearch: function formatAdvancedSearch() {
        return 'Advanced search';
      },
      formatAdvancedCloseButton: function formatAdvancedCloseButton() {
        return 'Close';
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
    $.fn.bootstrapTable.locales['ro-RO'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return 'Se incarca, va rugam asteptati';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return pageNumber + ' inregistrari pe pagina';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return 'Arata de la ' + pageFrom + ' pana la ' + pageTo + ' din ' + totalRows + ' randuri';
      },
      formatDetailPagination: function formatDetailPagination(totalRows) {
        return 'Showing ' + totalRows + ' rows';
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
      formatFullscreen: function formatFullscreen() {
        return 'Fullscreen';
      },
      formatAllRows: function formatAllRows() {
        return 'Toate';
      },
      formatAutoRefresh: function formatAutoRefresh() {
        return 'Auto Refresh';
      },
      formatExport: function formatExport() {
        return 'Export data';
      },
      formatClearFilters: function formatClearFilters() {
        return 'Clear filters';
      },
      formatJumpto: function formatJumpto() {
        return 'GO';
      },
      formatAdvancedSearch: function formatAdvancedSearch() {
        return 'Advanced search';
      },
      formatAdvancedCloseButton: function formatAdvancedCloseButton() {
        return 'Close';
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
    $.fn.bootstrapTable.locales['ru-RU'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return 'Пожалуйста, подождите, идёт загрузка';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return pageNumber + ' \u0437\u0430\u043F\u0438\u0441\u0435\u0439 \u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return '\u0417\u0430\u043F\u0438\u0441\u0438 \u0441 ' + pageFrom + ' \u043F\u043E ' + pageTo + ' \u0438\u0437 ' + totalRows;
      },
      formatDetailPagination: function formatDetailPagination(totalRows) {
        return 'Showing ' + totalRows + ' rows';
      },
      formatSearch: function formatSearch() {
        return 'Поиск';
      },
      formatNoMatches: function formatNoMatches() {
        return 'Ничего не найдено';
      },
      formatPaginationSwitch: function formatPaginationSwitch() {
        return 'Hide/Show pagination';
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
      formatFullscreen: function formatFullscreen() {
        return 'Fullscreen';
      },
      formatAllRows: function formatAllRows() {
        return 'All';
      },
      formatAutoRefresh: function formatAutoRefresh() {
        return 'Auto Refresh';
      },
      formatExport: function formatExport() {
        return 'Export data';
      },
      formatClearFilters: function formatClearFilters() {
        return 'Очистить фильтры';
      },
      formatJumpto: function formatJumpto() {
        return 'GO';
      },
      formatAdvancedSearch: function formatAdvancedSearch() {
        return 'Advanced search';
      },
      formatAdvancedCloseButton: function formatAdvancedCloseButton() {
        return 'Close';
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
    $.fn.bootstrapTable.locales['sk-SK'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return 'Prosím čakajte';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return pageNumber + ' z\xE1znamov na stranu';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return 'Zobrazen\xE1 ' + pageFrom + '. - ' + pageTo + '. polo\u017Eka z celkov\xFDch ' + totalRows;
      },
      formatDetailPagination: function formatDetailPagination(totalRows) {
        return 'Showing ' + totalRows + ' rows';
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
      formatFullscreen: function formatFullscreen() {
        return 'Fullscreen';
      },
      formatAllRows: function formatAllRows() {
        return 'Všetky';
      },
      formatAutoRefresh: function formatAutoRefresh() {
        return 'Auto Refresh';
      },
      formatExport: function formatExport() {
        return 'Exportuj dáta';
      },
      formatClearFilters: function formatClearFilters() {
        return 'Odstráň filtre';
      },
      formatJumpto: function formatJumpto() {
        return 'GO';
      },
      formatAdvancedSearch: function formatAdvancedSearch() {
        return 'Advanced search';
      },
      formatAdvancedCloseButton: function formatAdvancedCloseButton() {
        return 'Close';
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
    $.fn.bootstrapTable.locales['sv-SE'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return 'Laddar, vänligen vänta';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return pageNumber + ' rader per sida';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return 'Visa ' + pageFrom + ' till ' + pageTo + ' av ' + totalRows + ' rader';
      },
      formatDetailPagination: function formatDetailPagination(totalRows) {
        return 'Showing ' + totalRows + ' rows';
      },
      formatSearch: function formatSearch() {
        return 'Sök';
      },
      formatNoMatches: function formatNoMatches() {
        return 'Inga matchande resultat funna.';
      },
      formatPaginationSwitch: function formatPaginationSwitch() {
        return 'Hide/Show pagination';
      },
      formatRefresh: function formatRefresh() {
        return 'Uppdatera';
      },
      formatToggle: function formatToggle() {
        return 'Skifta';
      },
      formatColumns: function formatColumns() {
        return 'kolumn';
      },
      formatFullscreen: function formatFullscreen() {
        return 'Fullscreen';
      },
      formatAllRows: function formatAllRows() {
        return 'All';
      },
      formatAutoRefresh: function formatAutoRefresh() {
        return 'Auto Refresh';
      },
      formatExport: function formatExport() {
        return 'Export data';
      },
      formatClearFilters: function formatClearFilters() {
        return 'Clear filters';
      },
      formatJumpto: function formatJumpto() {
        return 'GO';
      },
      formatAdvancedSearch: function formatAdvancedSearch() {
        return 'Advanced search';
      },
      formatAdvancedCloseButton: function formatAdvancedCloseButton() {
        return 'Close';
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
    $.fn.bootstrapTable.locales['th-TH'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return 'กำลังโหลดข้อมูล, กรุณารอสักครู่';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return pageNumber + ' \u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E15\u0E48\u0E2D\u0E2B\u0E19\u0E49\u0E32';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return '\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E17\u0E35\u0E48 ' + pageFrom + ' \u0E16\u0E36\u0E07 ' + pageTo + ' \u0E08\u0E32\u0E01\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14 ' + totalRows + ' \u0E23\u0E32\u0E22\u0E01\u0E32\u0E23';
      },
      formatDetailPagination: function formatDetailPagination(totalRows) {
        return 'Showing ' + totalRows + ' rows';
      },
      formatSearch: function formatSearch() {
        return 'ค้นหา';
      },
      formatNoMatches: function formatNoMatches() {
        return 'ไม่พบรายการที่ค้นหา !';
      },
      formatPaginationSwitch: function formatPaginationSwitch() {
        return 'Hide/Show pagination';
      },
      formatRefresh: function formatRefresh() {
        return 'รีเฟรส';
      },
      formatToggle: function formatToggle() {
        return 'สลับมุมมอง';
      },
      formatColumns: function formatColumns() {
        return 'คอลัมน์';
      },
      formatFullscreen: function formatFullscreen() {
        return 'Fullscreen';
      },
      formatAllRows: function formatAllRows() {
        return 'All';
      },
      formatAutoRefresh: function formatAutoRefresh() {
        return 'Auto Refresh';
      },
      formatExport: function formatExport() {
        return 'Export data';
      },
      formatClearFilters: function formatClearFilters() {
        return 'Clear filters';
      },
      formatJumpto: function formatJumpto() {
        return 'GO';
      },
      formatAdvancedSearch: function formatAdvancedSearch() {
        return 'Advanced search';
      },
      formatAdvancedCloseButton: function formatAdvancedCloseButton() {
        return 'Close';
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
    $.fn.bootstrapTable.locales['tr-TR'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return 'Yükleniyor, lütfen bekleyin';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return 'Sayfa ba\u015F\u0131na ' + pageNumber + ' kay\u0131t.';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return totalRows + ' kay\u0131ttan ' + pageFrom + '-' + pageTo + ' aras\u0131 g\xF6steriliyor.';
      },
      formatDetailPagination: function formatDetailPagination(totalRows) {
        return 'Showing ' + totalRows + ' rows';
      },
      formatSearch: function formatSearch() {
        return 'Ara';
      },
      formatNoMatches: function formatNoMatches() {
        return 'Eşleşen kayıt bulunamadı.';
      },
      formatPaginationSwitch: function formatPaginationSwitch() {
        return 'Hide/Show pagination';
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
      formatFullscreen: function formatFullscreen() {
        return 'Fullscreen';
      },
      formatAllRows: function formatAllRows() {
        return 'Tüm Satırlar';
      },
      formatAutoRefresh: function formatAutoRefresh() {
        return 'Auto Refresh';
      },
      formatExport: function formatExport() {
        return 'Export data';
      },
      formatClearFilters: function formatClearFilters() {
        return 'Clear filters';
      },
      formatJumpto: function formatJumpto() {
        return 'GO';
      },
      formatAdvancedSearch: function formatAdvancedSearch() {
        return 'Advanced search';
      },
      formatAdvancedCloseButton: function formatAdvancedCloseButton() {
        return 'Close';
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
    $.fn.bootstrapTable.locales['uk-UA'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return 'Завантаження, будь ласка, зачекайте';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return pageNumber + ' \u0437\u0430\u043F\u0438\u0441\u0456\u0432 \u043D\u0430 \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0443';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return '\u041F\u043E\u043A\u0430\u0437\u0430\u043D\u043E \u0437 ' + pageFrom + ' \u043F\u043E ' + pageTo + '. \u0412\u0441\u044C\u043E\u0433\u043E: ' + totalRows;
      },
      formatDetailPagination: function formatDetailPagination(totalRows) {
        return 'Showing ' + totalRows + ' rows';
      },
      formatSearch: function formatSearch() {
        return 'Пошук';
      },
      formatNoMatches: function formatNoMatches() {
        return 'Не знайдено жодного запису';
      },
      formatPaginationSwitch: function formatPaginationSwitch() {
        return 'Hide/Show pagination';
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
      formatFullscreen: function formatFullscreen() {
        return 'Fullscreen';
      },
      formatAllRows: function formatAllRows() {
        return 'All';
      },
      formatAutoRefresh: function formatAutoRefresh() {
        return 'Auto Refresh';
      },
      formatExport: function formatExport() {
        return 'Export data';
      },
      formatClearFilters: function formatClearFilters() {
        return 'Очистити фільтри';
      },
      formatJumpto: function formatJumpto() {
        return 'GO';
      },
      formatAdvancedSearch: function formatAdvancedSearch() {
        return 'Advanced search';
      },
      formatAdvancedCloseButton: function formatAdvancedCloseButton() {
        return 'Close';
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
    $.fn.bootstrapTable.locales['ur-PK'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return 'براۓ مہربانی انتظار کیجئے';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return pageNumber + ' \u0631\u06CC\u06A9\u0627\u0631\u0688\u0632 \u0641\u06CC \u0635\u0641\u06C1 ';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return '\u062F\u06CC\u06A9\u06BE\u06CC\u06BA ' + pageFrom + ' \u0633\u06D2 ' + pageTo + ' \u06A9\u06D2 ' + totalRows + '\u0631\u06CC\u06A9\u0627\u0631\u0688\u0632';
      },
      formatDetailPagination: function formatDetailPagination(totalRows) {
        return 'Showing ' + totalRows + ' rows';
      },
      formatSearch: function formatSearch() {
        return 'تلاش';
      },
      formatNoMatches: function formatNoMatches() {
        return 'کوئی ریکارڈ نہیں ملا';
      },
      formatPaginationSwitch: function formatPaginationSwitch() {
        return 'Hide/Show pagination';
      },
      formatRefresh: function formatRefresh() {
        return 'تازہ کریں';
      },
      formatToggle: function formatToggle() {
        return 'تبدیل کریں';
      },
      formatColumns: function formatColumns() {
        return 'کالم';
      },
      formatFullscreen: function formatFullscreen() {
        return 'Fullscreen';
      },
      formatAllRows: function formatAllRows() {
        return 'All';
      },
      formatAutoRefresh: function formatAutoRefresh() {
        return 'Auto Refresh';
      },
      formatExport: function formatExport() {
        return 'Export data';
      },
      formatClearFilters: function formatClearFilters() {
        return 'Clear filters';
      },
      formatJumpto: function formatJumpto() {
        return 'GO';
      },
      formatAdvancedSearch: function formatAdvancedSearch() {
        return 'Advanced search';
      },
      formatAdvancedCloseButton: function formatAdvancedCloseButton() {
        return 'Close';
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
    $.fn.bootstrapTable.locales['uz-Latn-UZ'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return 'Yuklanyapti, iltimos kuting';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return pageNumber + ' qator har sahifada';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return 'Ko\'rsatypati ' + pageFrom + ' dan ' + pageTo + ' gacha ' + totalRows + ' qatorlarni';
      },
      formatDetailPagination: function formatDetailPagination(totalRows) {
        return 'Showing ' + totalRows + ' rows';
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
      formatFullscreen: function formatFullscreen() {
        return 'Fullscreen';
      },
      formatAllRows: function formatAllRows() {
        return 'Hammasi';
      },
      formatAutoRefresh: function formatAutoRefresh() {
        return 'Auto Refresh';
      },
      formatExport: function formatExport() {
        return 'Eksport';
      },
      formatClearFilters: function formatClearFilters() {
        return 'Filtrlarni tozalash';
      },
      formatJumpto: function formatJumpto() {
        return 'GO';
      },
      formatAdvancedSearch: function formatAdvancedSearch() {
        return 'Advanced search';
      },
      formatAdvancedCloseButton: function formatAdvancedCloseButton() {
        return 'Close';
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
    $.fn.bootstrapTable.locales['vi-VN'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return 'Đang tải';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return pageNumber + ' b\u1EA3n ghi m\u1ED7i trang';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return 'Hi\u1EC3n th\u1ECB t\u1EEB trang ' + pageFrom + ' \u0111\u1EBFn ' + pageTo + ' c\u1EE7a ' + totalRows + ' b\u1EA3ng ghi';
      },
      formatDetailPagination: function formatDetailPagination(totalRows) {
        return 'Showing ' + totalRows + ' rows';
      },
      formatSearch: function formatSearch() {
        return 'Tìm kiếm';
      },
      formatNoMatches: function formatNoMatches() {
        return 'Không có dữ liệu';
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
      formatFullscreen: function formatFullscreen() {
        return 'Fullscreen';
      },
      formatAllRows: function formatAllRows() {
        return 'All';
      },
      formatAutoRefresh: function formatAutoRefresh() {
        return 'Auto Refresh';
      },
      formatExport: function formatExport() {
        return 'Export data';
      },
      formatClearFilters: function formatClearFilters() {
        return 'Clear filters';
      },
      formatJumpto: function formatJumpto() {
        return 'GO';
      },
      formatAdvancedSearch: function formatAdvancedSearch() {
        return 'Advanced search';
      },
      formatAdvancedCloseButton: function formatAdvancedCloseButton() {
        return 'Close';
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
    $.fn.bootstrapTable.locales['zh-CN'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return '正在努力地加载数据中，请稍候';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return '\u6BCF\u9875\u663E\u793A ' + pageNumber + ' \u6761\u8BB0\u5F55';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return '\u663E\u793A\u7B2C ' + pageFrom + ' \u5230\u7B2C ' + pageTo + ' \u6761\u8BB0\u5F55\uFF0C\u603B\u5171 ' + totalRows + ' \u6761\u8BB0\u5F55';
      },
      formatDetailPagination: function formatDetailPagination(totalRows) {
        return '\u603B\u5171 ' + totalRows + ' \u6761\u8BB0\u5F55';
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
      formatFullscreen: function formatFullscreen() {
        return '全屏';
      },
      formatAllRows: function formatAllRows() {
        return '所有';
      },
      formatAutoRefresh: function formatAutoRefresh() {
        return '自动刷新';
      },
      formatExport: function formatExport() {
        return '导出数据';
      },
      formatClearFilters: function formatClearFilters() {
        return '清空过滤';
      },
      formatJumpto: function formatJumpto() {
        return '跳转';
      },
      formatAdvancedSearch: function formatAdvancedSearch() {
        return '高级搜索';
      },
      formatAdvancedCloseButton: function formatAdvancedCloseButton() {
        return '关闭';
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
    $.fn.bootstrapTable.locales['zh-TW'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return '正在努力地載入資料，請稍候';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return '\u6BCF\u9801\u986F\u793A ' + pageNumber + ' \u9805\u8A18\u9304';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return '\u986F\u793A\u7B2C ' + pageFrom + ' \u5230\u7B2C ' + pageTo + ' \u9805\u8A18\u9304\uFF0C\u7E3D\u5171 ' + totalRows + ' \u9805\u8A18\u9304';
      },
      formatDetailPagination: function formatDetailPagination(totalRows) {
        return '\u7E3D\u5171 ' + totalRows + ' \u9805\u8A18\u9304';
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
      },
      formatFullscreen: function formatFullscreen() {
        return '全屏';
      },
      formatAllRows: function formatAllRows() {
        return '所有';
      },
      formatAutoRefresh: function formatAutoRefresh() {
        return '自動刷新';
      },
      formatExport: function formatExport() {
        return '導出數據';
      },
      formatClearFilters: function formatClearFilters() {
        return '清空過濾';
      },
      formatJumpto: function formatJumpto() {
        return '跳轉';
      },
      formatAdvancedSearch: function formatAdvancedSearch() {
        return '高級搜尋';
      },
      formatAdvancedCloseButton: function formatAdvancedCloseButton() {
        return '關閉';
      }
    };

    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['zh-TW']);
  })(jQuery);
});
