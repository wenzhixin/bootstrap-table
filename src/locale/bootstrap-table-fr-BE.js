/**
 * Bootstrap Table French (Belgium) translation
 * Author: Julien Bisconti (julien.bisconti@gmail.com)
 */
($ => {
  $.fn.bootstrapTable.locales['fr-BE'] = {
    formatLoadingMessage () {
      return 'Chargement en cours...'
    },
    formatRecordsPerPage (pageNumber) {
      return `${pageNumber} entrées par page`
    },
    formatShowingRows (pageFrom, pageTo, totalRows) {
      return `Affiche de${pageFrom} à ${pageTo} sur ${totalRows} lignes`
    },
    formatSearch () {
      return 'Recherche'
    },
    formatNoMatches () {
      return 'Pas de fichiers trouvés'
    }
  }

  $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['fr-BE'])
})(jQuery)
