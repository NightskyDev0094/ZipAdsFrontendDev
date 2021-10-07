!(function (t) {
  function e(t, e) {
    return t.toFixed(e.decimals);
  }
  (t.fn.countTo = function (e) {
    return (
      (e = e || {}),
      t(this).each(function () {
        function a() {
          (s += l),
            c++,
            n(s),
            typeof o.onUpdate === 'function' && o.onUpdate.call(f, s),
            c >= r &&
              (i.removeData('countTo'),
              clearInterval(d.interval),
              (s = o.to),
              typeof o.onComplete === 'function' && o.onComplete.call(f, s));
        }
        function n(t) {
          const e = o.formatter.call(f, t, o);
          i.text(e);
        }
        var o = t.extend(
          {},
          t.fn.countTo.defaults,
          {
            from: t(this).data('from'),
            to: t(this).data('to'),
            speed: t(this).data('speed'),
            refreshInterval: t(this).data('refresh-interval'),
            decimals: t(this).data('decimals'),
          },
          e
        );
        var r = Math.ceil(o.speed / o.refreshInterval);
        var l = (o.to - o.from) / r;
        var f = this;
        var i = t(this);
        var c = 0;
        var s = o.from;
        var d = i.data('countTo') || {};
        i.data('countTo', d),
          d.interval && clearInterval(d.interval),
          (d.interval = setInterval(a, o.refreshInterval)),
          n(s);
      })
    );
  }),
    (t.fn.countTo.defaults = {
      from: 0,
      to: 0,
      speed: 1e3,
      refreshInterval: 100,
      decimals: 0,
      formatter: e,
      onUpdate: null,
      onComplete: null,
    });
})(jQuery);
