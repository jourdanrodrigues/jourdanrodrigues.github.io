window.gtag = (function () {
  var queryParams = location.search.slice(1).split('&').map(mapKeyValue).reduce(reduceQueryParams, {});

  if (!('analytics' in queryParams) || parseInt(queryParams.analytics) !== 0) {
    var gaId = 'UA-118478066-1';

    appendAnalyticsScript(gaId);

    window.dataLayer = window.dataLayer || [];
    function _gtag(){
      dataLayer.push(arguments);
    }
    _gtag('js', new Date());
    _gtag('config', gaId);

    return _gtag
  }

  function mapKeyValue(item) {
    return item.split('=');
  }

  function reduceQueryParams(object, keyValue) {
    return Object.assign({}, object, {[keyValue[0]]: keyValue[1]});
  }

  function appendAnalyticsScript(gaId) {
    var script = document.createElement('script');
    script.setAttribute('async', '');
    script.src = '//www.googletagmanager.com/gtag/js?id=' + gaId;

    document.body.appendChild(script);
  }
})();
