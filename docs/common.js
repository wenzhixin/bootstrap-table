$(function() {
    'use strict';

	var defaultTranslation = 'en',
		translations = {'en': {title: 'English', code: 'en'},'zh': {title: '简体中文', code: 'zh'},'es': {title: 'Español', code: 'es'}};
	
	window.getLocale = function () {
        if (!localStorage) {
            return defaultTranslation;
        }
		
		if (location.search !== '') {
            localStorage.locale = translations[location.search.replace('?locale=', '')].code;
        }
		
        return localStorage.locale === undefined ? defaultTranslation : localStorage.locale;
    };
	
	function main() {
        $(window).scroll(showGotoTop);
        $(window).resize(showGotoTop);
        $('.goto-top').click(function() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
            return false;
        });
        initLocale();
        initScrollspy();
        showGotoTop();
        $('#bulletin').bulletin();
    }

    function initLocale() {
        var $locale = $('#locale'),
			translation = {};
			
        if (!localStorage) {
            $locale.hide();
            return;
        }
		
		translation = translations[getLocale()];
		setGlobalLanguage($locale, translation.title, translation.code);

        $('[data-locale]').click(function () {
            localStorage.locale = $(this).data('locale');
            location.reload(true);
        });
    }
	
	function setGlobalLanguage($locale, text, languageCode) {
		var translationsArray = $.map(translations, function(value, index) {
			return [value];
		});
		
		for(var i = 0; i < translationsArray.length; i++) { 
			if(translationsArray[i].code !== languageCode) {
				$locale.find('[data-locale="'+ translationsArray[i].code + '"]').removeClass('active').end()
				.find('.dropdown-toggle img').removeClass('flag-'+ translationsArray[i].code +'').end();
			}
		}
		
		$locale.find('.language').text(text).end()
			.find('[data-locale="'+languageCode + '"]').addClass('active').end()
			.find('.dropdown-toggle img').addClass('flag-'+ languageCode +'').end();
			
		$('[data-'+ languageCode + ']').each(function () {
			$(this).html($(this).data(languageCode));
		});	
	}

    function initScrollspy() {
        var $window = $(window),
            $body = $(document.body),
            html = [];

        $('.page-header').find('h1, h2').each(function (i) {
            var $this = $(this),
                parent = $this.is('h1'),
                link = '<a href="#' + $this.attr('id') + '">' + $.trim($this.text()) + '</a>';

            if (parent) {
                if (i > 0) {
                    html.push('</ul></li>');
                }
                html.push('<li>', link, '<ul class="nav">');
            } else {
                html.push('<li>', link, '</li>');
            }
        });
        html.push('</ul></li>');
        $('.bs-sidenav').html(html.join(''));

        $body.scrollspy({
            target: '.bs-sidebar',
            offset: $('.navbar').outerHeight(true) + 10
        });
        $body.scrollspy('refresh');

        // affix
        setTimeout(function () {
            var $sideBar = $('.bs-sidebar');

            $sideBar.affix({
                offset: {
                    top: function () {
                        var offsetTop = $sideBar.offset().top;
                        var sideBarMargin = parseInt($sideBar.children(0).css('margin-top'), 10);
                        var navOuterHeight = $('.bs-docs-nav').height();

                        return (this.top = offsetTop - navOuterHeight - sideBarMargin);
                    },
                    bottom: function () {
                        return (this.bottom = $('.bs-footer').outerHeight(true));
                    }
                }
            });
        }, 100);
    }

    function showGotoTop() {
        var $gotoTop = $('.goto-top'),
            $bdshare = $('#bdshare');

        if ($(document).scrollTop() > 0) {
            $gotoTop.fadeIn('slow');
            $bdshare.fadeOut('slow');
        } else {
            $gotoTop.fadeOut('slow');
            $bdshare.fadeIn('slow');
        }
    }

    main();
});