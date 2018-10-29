//= require ./lib/_energize
//= require ./app/_toc
//= require ./app/_lang

$(function() {
  loadToc($('#toc'), '.toc-link', '.toc-list-h2', 10);
  setupLanguages($('body').data('languages'));
  $('.content').imagesLoaded( function() {
    window.recacheHeights();
    window.refreshToc();
  });

  // parseURL and stringifyURL are from https://github.com/sindresorhus/query-string
  // MIT licensed
  // https://github.com/sindresorhus/query-string/blob/7bee64c16f2da1a326579e96977b9227bf6da9e6/license
  function parseURL(str) {
    if (typeof str !== 'string') {
      return {};
    }

    str = str.trim().replace(/^(\?|#|&)/, '');

    if (!str) {
      return {};
    }

    return str.split('&').reduce(function (ret, param) {
      var parts = param.replace(/\+/g, ' ').split('=');
      var key = parts[0];
      var val = parts[1];

      key = decodeURIComponent(key);
      // missing `=` should be `null`:
      // http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
      val = val === undefined ? null : decodeURIComponent(val);

      if (!ret.hasOwnProperty(key)) {
        ret[key] = val;
      } else if (Array.isArray(ret[key])) {
        ret[key].push(val);
      } else {
        ret[key] = [ret[key], val];
      }

      return ret;
    }, {});
  };

  function getProductionKeyFromQueryString() {
    if (location.search.length >= 1) {
      var prodKey = parseURL(location.search).prodKey;
      return prodKey? prodKey : false;
    }
    return false;
  }

  function getDevKeyFromQueryString() {
    if (location.search.length >= 1) {
      var devKey = parseURL(location.search).devKey;
      return devKey? devKey : false;
    }
    return false;
  }
  var devKey = getDevKeyFromQueryString();
  var prodKey = getProductionKeyFromQueryString();

  if (devKey) {
    $('.dev-api-key').text(devKey);
  }
  if (prodKey) {
    $('.prod-api-key').text(prodKey);
  }


});

window.onpopstate = function() {
  activateLanguage(getLanguageFromQueryString());
};
