/*
 * @file sidenav.js
 * @author Jianlong Chen <jianlong99@gmail.com>
 * @date 2014-03-08
 * @update 2014-11-12
 */

(function($) {

  'use strict';

  function SideNav($el) {
    this.$el = $el;
  }


  SideNav.prototype = {
    constructor: SideNav,

    init: function(options) {
      this.options = options;

      this.initViews();
      this.initAffix();
    },

    initViews: function() {
      var that = this,
          counts = {},
          preLevel = 0,
          parentId = '';

      this.$menu = $([
          '<div class="bs-sidebar hidden-print">',
          '  <ul class="nav bs-sidenav">',
          '  </ul>',
          '</div>'
          ].join(''));
      this.$list = '';

      // Support String type, for example use: data-hs="h1, h2, h3"
      if (typeof this.options.hs === 'string') {
        this.options.hs = $.map(this.options.hs.split(','), function (h) {
          return $.trim(h); // remove space
        });
      }

      this.$el.find(this.options.hs.join(',')).each(function(i) {
        var $this = $(this),
        $div,
        name = $this[0].localName,
        title = $this.text(),
        level = $.inArray(name, that.options.hs) + 1,
        nums = [],
        index,
        id;

        if (level - preLevel > 1) {
          return;
        }
        if (!counts.hasOwnProperty(name) || level - preLevel === 1) {
          counts[name] = 0;
        }
        counts[name]++;

        $.each(counts, function(i) {
          nums.push(counts[i]);
          if (nums.length === level) {
            return false;
          }
        });
        index = nums.join('-');

        id = 'sideNavTitle' + index;

        if (that.options.smartId) {
          id = $.trim($(this).text()).toLowerCase();
          id = id.replace(/ /g, '-');
          id = id.replace(/'|"/g, '');
          if (level === 2) {
            id = parentId + '-' + id;
          }
        }
        $div = $('<div id="' + id + '"></div>');
        $div.insertAfter($this).append($this);

        var aElem = '<a href="#' + id + '">' + title + '</a>';
        if (level === 1 && preLevel === 0) {
          that.$list += '<li class="active">' + aElem;
        } else if (level === preLevel) {
          that.$list += '</li><li>' + aElem;
        } else if (level - preLevel === 1) {
          that.$list += '<ul class="nav"><li>' + aElem;
        } else {
          for (var $i = 0; $i < preLevel - level; $i++) {
            that.$list += '</ul></li>';
          }
          that.$list += '<li>' + aElem;
        }
        if (level === 1) {
          parentId = id;
        }
        preLevel = level;
      });

      for (; preLevel > 0; preLevel--) {
        if (preLevel > 1) {
          that.$list += '</ul>';
        }
        that.$list += '</li>';
      }
      this.$menu.find('ul').append(this.$list);

      var backElem = '<a class="back-to-top" href="' +
        this.options.toTopHref + '">' + this.options.toTopText + '</a>';
      this.$menu.append(backElem);

      $(this.options.container).append(this.$menu);
    },

    initAffix: function() {
      $('body').scrollspy({target: '.bs-sidebar'});

      if (typeof this.options.top === 'undefined') {
        this.options.top = this.options.container;
      }
      if (typeof this.options.top === 'string' && $(this.options.top).length) {
        this.options.top = $(this.options.top).offset().top;
      }
      if (typeof this.options.bottom === 'string' && $(this.options.bottom).length) {
        this.options.bottom = $(this.options.bottom).outerHeight(true);
      }
      this.$menu.affix({
        offset: {
          top: this.options.top || 0,
          bottom: this.options.bottom || 0
        }
      });
    }
  };

  $.fn.sideNav = function() {
    var option = arguments[0],
      args = arguments,
      value;

    this.each(function() {
      var $this = $(this), data = $this.data('sideNav'),
      options = $.extend({}, $.fn.sideNav.defaults, $this.data(), option);

      if (!data) {
        data = new SideNav($this);
        data.init(options, true);
        $this.data('sideNav', data);
      } else {
        data.init(options);
      }
    });

    return value ? value : this;
  };

  $.fn.sideNav.defaults = {
    container: 'body',
    hs: ['h2', 'h3', 'h4'],
    smartId: false,
    top: undefined,
    bottom: undefined,
    toTopHref: '#top',
    toTopText: 'Back to top'
  };

  $(function () {
    $('[data-toggle="sidenav"]').sideNav();
  });
})(jQuery);
