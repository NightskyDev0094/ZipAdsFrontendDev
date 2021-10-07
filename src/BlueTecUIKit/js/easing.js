(jQuery.easing.jswing = jQuery.easing.swing),
  jQuery.extend(jQuery.easing, {
    def: 'easeOutQuad',
    swing(a, b, c, d, e) {
      return jQuery.easing[jQuery.easing.def](a, b, c, d, e);
    },
    easeInQuad(a, b, c, d, e) {
      return d * (b /= e) * b + c;
    },
    easeOutQuad(a, b, c, d, e) {
      return -d * (b /= e) * (b - 2) + c;
    },
    easeInOutQuad(a, b, c, d, e) {
      return (b /= e / 2) < 1 ? (d / 2) * b * b + c : (-d / 2) * (--b * (b - 2) - 1) + c;
    },
    easeInCubic(a, b, c, d, e) {
      return d * (b /= e) * b * b + c;
    },
    easeOutCubic(a, b, c, d, e) {
      return d * ((b = b / e - 1) * b * b + 1) + c;
    },
    easeInOutCubic(a, b, c, d, e) {
      return (b /= e / 2) < 1 ? (d / 2) * b * b * b + c : (d / 2) * ((b -= 2) * b * b + 2) + c;
    },
    easeInQuart(a, b, c, d, e) {
      return d * (b /= e) * b * b * b + c;
    },
    easeOutQuart(a, b, c, d, e) {
      return -d * ((b = b / e - 1) * b * b * b - 1) + c;
    },
    easeInOutQuart(a, b, c, d, e) {
      return (b /= e / 2) < 1
        ? (d / 2) * b * b * b * b + c
        : (-d / 2) * ((b -= 2) * b * b * b - 2) + c;
    },
    easeInQuint(a, b, c, d, e) {
      return d * (b /= e) * b * b * b * b + c;
    },
    easeOutQuint(a, b, c, d, e) {
      return d * ((b = b / e - 1) * b * b * b * b + 1) + c;
    },
    easeInOutQuint(a, b, c, d, e) {
      return (b /= e / 2) < 1
        ? (d / 2) * b * b * b * b * b + c
        : (d / 2) * ((b -= 2) * b * b * b * b + 2) + c;
    },
    easeInSine(a, b, c, d, e) {
      return -d * Math.cos((b / e) * (Math.PI / 2)) + d + c;
    },
    easeOutSine(a, b, c, d, e) {
      return d * Math.sin((b / e) * (Math.PI / 2)) + c;
    },
    easeInOutSine(a, b, c, d, e) {
      return (-d / 2) * (Math.cos((Math.PI * b) / e) - 1) + c;
    },
    easeInExpo(a, b, c, d, e) {
      return b == 0 ? c : d * Math.pow(2, 10 * (b / e - 1)) + c;
    },
    easeOutExpo(a, b, c, d, e) {
      return b == e ? c + d : d * (-Math.pow(2, (-10 * b) / e) + 1) + c;
    },
    easeInOutExpo(a, b, c, d, e) {
      return b == 0
        ? c
        : b == e
        ? c + d
        : (b /= e / 2) < 1
        ? (d / 2) * Math.pow(2, 10 * (b - 1)) + c
        : (d / 2) * (-Math.pow(2, -10 * --b) + 2) + c;
    },
    easeInCirc(a, b, c, d, e) {
      return -d * (Math.sqrt(1 - (b /= e) * b) - 1) + c;
    },
    easeOutCirc(a, b, c, d, e) {
      return d * Math.sqrt(1 - (b = b / e - 1) * b) + c;
    },
    easeInOutCirc(a, b, c, d, e) {
      return (b /= e / 2) < 1
        ? (-d / 2) * (Math.sqrt(1 - b * b) - 1) + c
        : (d / 2) * (Math.sqrt(1 - (b -= 2) * b) + 1) + c;
    },
    easeInElastic(a, b, c, d, e) {
      var f = 1.70158;
      let g = 0;
      let h = d;
      if (b == 0) return c;
      if ((b /= e) == 1) return c + d;
      if ((g || (g = 0.3 * e), h < Math.abs(d))) {
        h = d;
        var f = g / 4;
      } else var f = (g / (2 * Math.PI)) * Math.asin(d / h);
      return -(h * Math.pow(2, 10 * (b -= 1)) * Math.sin(((b * e - f) * (2 * Math.PI)) / g)) + c;
    },
    easeOutElastic(a, b, c, d, e) {
      var f = 1.70158;
      let g = 0;
      let h = d;
      if (b == 0) return c;
      if ((b /= e) == 1) return c + d;
      if ((g || (g = 0.3 * e), h < Math.abs(d))) {
        h = d;
        var f = g / 4;
      } else var f = (g / (2 * Math.PI)) * Math.asin(d / h);
      return h * Math.pow(2, -10 * b) * Math.sin(((b * e - f) * (2 * Math.PI)) / g) + d + c;
    },
    easeInOutElastic(a, b, c, d, e) {
      var f = 1.70158;
      let g = 0;
      let h = d;
      if (b == 0) return c;
      if ((b /= e / 2) == 2) return c + d;
      if ((g || (g = e * (0.3 * 1.5)), h < Math.abs(d))) {
        h = d;
        var f = g / 4;
      } else var f = (g / (2 * Math.PI)) * Math.asin(d / h);
      return b < 1
        ? -0.5 * (h * Math.pow(2, 10 * (b -= 1)) * Math.sin(((b * e - f) * (2 * Math.PI)) / g)) + c
        : h * Math.pow(2, -10 * (b -= 1)) * Math.sin(((b * e - f) * (2 * Math.PI)) / g) * 0.5 +
            d +
            c;
    },
    easeInBack(a, b, c, d, e, f) {
      return void 0 == f && (f = 1.70158), d * (b /= e) * b * ((f + 1) * b - f) + c;
    },
    easeOutBack(a, b, c, d, e, f) {
      return void 0 == f && (f = 1.70158), d * ((b = b / e - 1) * b * ((f + 1) * b + f) + 1) + c;
    },
    easeInOutBack(a, b, c, d, e, f) {
      return (
        void 0 == f && (f = 1.70158),
        (b /= e / 2) < 1
          ? (d / 2) * (b * b * (((f *= 1.525) + 1) * b - f)) + c
          : (d / 2) * ((b -= 2) * b * (((f *= 1.525) + 1) * b + f) + 2) + c
      );
    },
    easeInBounce(a, b, c, d, e) {
      return d - jQuery.easing.easeOutBounce(a, e - b, 0, d, e) + c;
    },
    easeOutBounce(a, b, c, d, e) {
      return (b /= e) < 1 / 2.75
        ? d * (7.5625 * b * b) + c
        : b < 2 / 2.75
        ? d * (7.5625 * (b -= 1.5 / 2.75) * b + 0.75) + c
        : b < 2.5 / 2.75
        ? d * (7.5625 * (b -= 2.25 / 2.75) * b + 0.9375) + c
        : d * (7.5625 * (b -= 2.625 / 2.75) * b + 0.984375) + c;
    },
    easeInOutBounce(a, b, c, d, e) {
      return b < e / 2
        ? 0.5 * jQuery.easing.easeInBounce(a, 2 * b, 0, d, e) + c
        : 0.5 * jQuery.easing.easeOutBounce(a, 2 * b - e, 0, d, e) + 0.5 * d + c;
    },
  });
