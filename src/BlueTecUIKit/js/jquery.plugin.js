!(function () {
  let t = !1;
  (window.JQClass = function () {}),
    (JQClass.classes = {}),
    (JQClass.extend = function e(n) {
      function a() {
        !t && this._init && this._init.apply(this, arguments);
      }
      const s = this.prototype;
      t = !0;
      const i = new this();
      t = !1;
      for (const r in n)
        i[r] =
          typeof n[r] === 'function' && typeof s[r] === 'function'
            ? (function (t, e) {
                return function () {
                  const n = this._super;
                  this._super = function (e) {
                    return s[t].apply(this, e || []);
                  };
                  const a = e.apply(this, arguments);
                  return (this._super = n), a;
                };
              })(r, n[r])
            : n[r];
      return (a.prototype = i), (a.prototype.constructor = a), (a.extend = e), a;
    });
})(),
  (function ($) {
    function camelCase(t) {
      return t.replace(/-([a-z])/g, (t, e) => e.toUpperCase());
    }
    (JQClass.classes.JQPlugin = JQClass.extend({
      name: 'plugin',
      defaultOptions: {},
      regionalOptions: {},
      _getters: [],
      _getMarker() {
        return `is-${this.name}`;
      },
      _init() {
        $.extend(this.defaultOptions, (this.regionalOptions && this.regionalOptions['']) || {});
        const t = camelCase(this.name);
        ($[t] = this),
          ($.fn[t] = function (e) {
            const n = Array.prototype.slice.call(arguments, 1);
            return $[t]._isNotChained(e, n)
              ? $[t][e].apply($[t], [this[0]].concat(n))
              : this.each(function () {
                  if (typeof e === 'string') {
                    if (e[0] === '_' || !$[t][e]) throw `Unknown method: ${e}`;
                    $[t][e].apply($[t], [this].concat(n));
                  } else $[t]._attach(this, e);
                });
          });
      },
      setDefaults(t) {
        $.extend(this.defaultOptions, t || {});
      },
      _isNotChained(t, e) {
        return t === 'option' && (e.length === 0 || (e.length === 1 && typeof e[0] === 'string'))
          ? !0
          : $.inArray(t, this._getters) > -1;
      },
      _attach(t, e) {
        if (((t = $(t)), !t.hasClass(this._getMarker()))) {
          t.addClass(this._getMarker()),
            (e = $.extend({}, this.defaultOptions, this._getMetadata(t), e || {}));
          const n = $.extend({ name: this.name, elem: t, options: e }, this._instSettings(t, e));
          t.data(this.name, n), this._postAttach(t, n), this.option(t, e);
        }
      },
      _instSettings(t, e) {
        return {};
      },
      _postAttach(t, e) {},
      _getMetadata(elem) {
        try {
          let data = elem.data(this.name.toLowerCase()) || '';
          (data = data.replace(/'/g, '"')),
            (data = data.replace(/([a-zA-Z0-9]+):/g, (t, e, n) => {
              const a = data.substring(0, n).match(/"/g);
              return a && a.length % 2 !== 0 ? `${e}:` : `"${e}":`;
            })),
            (data = $.parseJSON(`{${data}}`));
          for (const name in data) {
            const value = data[name];
            typeof value === 'string' &&
              value.match(/^new Date\((.*)\)$/) &&
              (data[name] = eval(value));
          }
          return data;
        } catch (e) {
          return {};
        }
      },
      _getInst(t) {
        return $(t).data(this.name) || {};
      },
      option(t, e, n) {
        t = $(t);
        const a = t.data(this.name);
        if (!e || (typeof e === 'string' && n == null)) {
          var s = (a || {}).options;
          return s && e ? s[e] : s;
        }
        if (t.hasClass(this._getMarker())) {
          var s = e || {};
          typeof e === 'string' && ((s = {}), (s[e] = n)),
            this._optionsChanged(t, a, s),
            $.extend(a.options, s);
        }
      },
      _optionsChanged(t, e, n) {},
      destroy(t) {
        (t = $(t)),
          t.hasClass(this._getMarker()) &&
            (this._preDestroy(t, this._getInst(t)),
            t.removeData(this.name).removeClass(this._getMarker()));
      },
      _preDestroy(t, e) {},
    })),
      ($.JQPlugin = {
        createPlugin(t, e) {
          typeof t === 'object' && ((e = t), (t = 'JQPlugin')), (t = camelCase(t));
          const n = camelCase(e.name);
          (JQClass.classes[n] = JQClass.classes[t].extend(e)), new JQClass.classes[n]();
        },
      });
  })(jQuery);
