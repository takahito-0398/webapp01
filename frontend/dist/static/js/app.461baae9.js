(function(e) {
  function t(t) {
    for (
      var a, o, c = t[0], l = t[1], f = t[2], u = 0, d = [];
      u < c.length;
      u++
    )
      (o = c[u]),
        Object.prototype.hasOwnProperty.call(n, o) && n[o] && d.push(n[o][0]),
        (n[o] = 0);
    for (a in l) Object.prototype.hasOwnProperty.call(l, a) && (e[a] = l[a]);
    b && b(t);
    while (d.length) d.shift()();
    return r.push.apply(r, f || []), s();
  }
  function s() {
    for (var e, t = 0; t < r.length; t++) {
      for (var s = r[t], a = !0, o = 1; o < s.length; o++) {
        var l = s[o];
        0 !== n[l] && (a = !1);
      }
      a && (r.splice(t--, 1), (e = c((c.s = s[0]))));
    }
    return e;
  }
  var a = {},
    n = { app: 0 },
    r = [];
  function o(e) {
    return (
      c.p +
      "static/js/" +
      ({ about: "about" }[e] || e) +
      "." +
      { about: "c93212f8" }[e] +
      ".js"
    );
  }
  function c(t) {
    if (a[t]) return a[t].exports;
    var s = (a[t] = { i: t, l: !1, exports: {} });
    return e[t].call(s.exports, s, s.exports, c), (s.l = !0), s.exports;
  }
  (c.e = function(e) {
    var t = [],
      s = n[e];
    if (0 !== s)
      if (s) t.push(s[2]);
      else {
        var a = new Promise(function(t, a) {
          s = n[e] = [t, a];
        });
        t.push((s[2] = a));
        var r,
          l = document.createElement("script");
        (l.charset = "utf-8"),
          (l.timeout = 120),
          c.nc && l.setAttribute("nonce", c.nc),
          (l.src = o(e));
        var f = new Error();
        r = function(t) {
          (l.onerror = l.onload = null), clearTimeout(u);
          var s = n[e];
          if (0 !== s) {
            if (s) {
              var a = t && ("load" === t.type ? "missing" : t.type),
                r = t && t.target && t.target.src;
              (f.message =
                "Loading chunk " + e + " failed.\n(" + a + ": " + r + ")"),
                (f.name = "ChunkLoadError"),
                (f.type = a),
                (f.request = r),
                s[1](f);
            }
            n[e] = void 0;
          }
        };
        var u = setTimeout(function() {
          r({ type: "timeout", target: l });
        }, 12e4);
        (l.onerror = l.onload = r), document.head.appendChild(l);
      }
    return Promise.all(t);
  }),
    (c.m = e),
    (c.c = a),
    (c.d = function(e, t, s) {
      c.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: s });
    }),
    (c.r = function(e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (c.t = function(e, t) {
      if ((1 & t && (e = c(e)), 8 & t)) return e;
      if (4 & t && "object" === typeof e && e && e.__esModule) return e;
      var s = Object.create(null);
      if (
        (c.r(s),
        Object.defineProperty(s, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var a in e)
          c.d(
            s,
            a,
            function(t) {
              return e[t];
            }.bind(null, a)
          );
      return s;
    }),
    (c.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e["default"];
            }
          : function() {
              return e;
            };
      return c.d(t, "a", t), t;
    }),
    (c.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (c.p = "/"),
    (c.oe = function(e) {
      throw (console.error(e), e);
    });
  var l = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    f = l.push.bind(l);
  (l.push = t), (l = l.slice());
  for (var u = 0; u < l.length; u++) t(l[u]);
  var b = f;
  r.push([0, "chunk-vendors"]), s();
})({
  0: function(e, t, s) {
    e.exports = s("56d7");
  },
  "034f": function(e, t, s) {
    "use strict";
    s("85ec");
  },
  4678: function(e, t, s) {
    var a = {
      "./af": "2bfb",
      "./af.js": "2bfb",
      "./ar": "8e73",
      "./ar-dz": "a356",
      "./ar-dz.js": "a356",
      "./ar-kw": "423e",
      "./ar-kw.js": "423e",
      "./ar-ly": "1cfd",
      "./ar-ly.js": "1cfd",
      "./ar-ma": "0a84",
      "./ar-ma.js": "0a84",
      "./ar-sa": "8230",
      "./ar-sa.js": "8230",
      "./ar-tn": "6d83",
      "./ar-tn.js": "6d83",
      "./ar.js": "8e73",
      "./az": "485c",
      "./az.js": "485c",
      "./be": "1fc1",
      "./be.js": "1fc1",
      "./bg": "84aa",
      "./bg.js": "84aa",
      "./bm": "a7fa",
      "./bm.js": "a7fa",
      "./bn": "9043",
      "./bn-bd": "9686",
      "./bn-bd.js": "9686",
      "./bn.js": "9043",
      "./bo": "d26a",
      "./bo.js": "d26a",
      "./br": "6887",
      "./br.js": "6887",
      "./bs": "2554",
      "./bs.js": "2554",
      "./ca": "d716",
      "./ca.js": "d716",
      "./cs": "3c0d",
      "./cs.js": "3c0d",
      "./cv": "03ec",
      "./cv.js": "03ec",
      "./cy": "9797",
      "./cy.js": "9797",
      "./da": "0f14",
      "./da.js": "0f14",
      "./de": "b469",
      "./de-at": "b3eb",
      "./de-at.js": "b3eb",
      "./de-ch": "bb71",
      "./de-ch.js": "bb71",
      "./de.js": "b469",
      "./dv": "598a",
      "./dv.js": "598a",
      "./el": "8d47",
      "./el.js": "8d47",
      "./en-au": "0e6b",
      "./en-au.js": "0e6b",
      "./en-ca": "3886",
      "./en-ca.js": "3886",
      "./en-gb": "39a6",
      "./en-gb.js": "39a6",
      "./en-ie": "e1d3",
      "./en-ie.js": "e1d3",
      "./en-il": "7333",
      "./en-il.js": "7333",
      "./en-in": "ec2e",
      "./en-in.js": "ec2e",
      "./en-nz": "6f50",
      "./en-nz.js": "6f50",
      "./en-sg": "b7e9",
      "./en-sg.js": "b7e9",
      "./eo": "65db",
      "./eo.js": "65db",
      "./es": "898b",
      "./es-do": "0a3c",
      "./es-do.js": "0a3c",
      "./es-mx": "b5b7",
      "./es-mx.js": "b5b7",
      "./es-us": "55c9",
      "./es-us.js": "55c9",
      "./es.js": "898b",
      "./et": "ec18",
      "./et.js": "ec18",
      "./eu": "0ff2",
      "./eu.js": "0ff2",
      "./fa": "8df4",
      "./fa.js": "8df4",
      "./fi": "81e9",
      "./fi.js": "81e9",
      "./fil": "d69a",
      "./fil.js": "d69a",
      "./fo": "0721",
      "./fo.js": "0721",
      "./fr": "9f26",
      "./fr-ca": "d9f8",
      "./fr-ca.js": "d9f8",
      "./fr-ch": "0e49",
      "./fr-ch.js": "0e49",
      "./fr.js": "9f26",
      "./fy": "7118",
      "./fy.js": "7118",
      "./ga": "5120",
      "./ga.js": "5120",
      "./gd": "f6b4",
      "./gd.js": "f6b4",
      "./gl": "8840",
      "./gl.js": "8840",
      "./gom-deva": "aaf2",
      "./gom-deva.js": "aaf2",
      "./gom-latn": "0caa",
      "./gom-latn.js": "0caa",
      "./gu": "e0c5",
      "./gu.js": "e0c5",
      "./he": "c7aa",
      "./he.js": "c7aa",
      "./hi": "dc4d",
      "./hi.js": "dc4d",
      "./hr": "4ba9",
      "./hr.js": "4ba9",
      "./hu": "5b14",
      "./hu.js": "5b14",
      "./hy-am": "d6b6",
      "./hy-am.js": "d6b6",
      "./id": "5038",
      "./id.js": "5038",
      "./is": "0558",
      "./is.js": "0558",
      "./it": "6e98",
      "./it-ch": "6f12",
      "./it-ch.js": "6f12",
      "./it.js": "6e98",
      "./ja": "079e",
      "./ja.js": "079e",
      "./jv": "b540",
      "./jv.js": "b540",
      "./ka": "201b",
      "./ka.js": "201b",
      "./kk": "6d79",
      "./kk.js": "6d79",
      "./km": "e81d",
      "./km.js": "e81d",
      "./kn": "3e92",
      "./kn.js": "3e92",
      "./ko": "22f8",
      "./ko.js": "22f8",
      "./ku": "2421",
      "./ku.js": "2421",
      "./ky": "9609",
      "./ky.js": "9609",
      "./lb": "440c",
      "./lb.js": "440c",
      "./lo": "b29d",
      "./lo.js": "b29d",
      "./lt": "26f9",
      "./lt.js": "26f9",
      "./lv": "b97c",
      "./lv.js": "b97c",
      "./me": "293c",
      "./me.js": "293c",
      "./mi": "688b",
      "./mi.js": "688b",
      "./mk": "6909",
      "./mk.js": "6909",
      "./ml": "02fb",
      "./ml.js": "02fb",
      "./mn": "958b",
      "./mn.js": "958b",
      "./mr": "39bd",
      "./mr.js": "39bd",
      "./ms": "ebe4",
      "./ms-my": "6403",
      "./ms-my.js": "6403",
      "./ms.js": "ebe4",
      "./mt": "1b45",
      "./mt.js": "1b45",
      "./my": "8689",
      "./my.js": "8689",
      "./nb": "6ce3",
      "./nb.js": "6ce3",
      "./ne": "3a39",
      "./ne.js": "3a39",
      "./nl": "facd",
      "./nl-be": "db29",
      "./nl-be.js": "db29",
      "./nl.js": "facd",
      "./nn": "b84c",
      "./nn.js": "b84c",
      "./oc-lnc": "167b",
      "./oc-lnc.js": "167b",
      "./pa-in": "f3ff",
      "./pa-in.js": "f3ff",
      "./pl": "8d57",
      "./pl.js": "8d57",
      "./pt": "f260",
      "./pt-br": "d2d4",
      "./pt-br.js": "d2d4",
      "./pt.js": "f260",
      "./ro": "972c",
      "./ro.js": "972c",
      "./ru": "957c",
      "./ru.js": "957c",
      "./sd": "6784",
      "./sd.js": "6784",
      "./se": "ffff",
      "./se.js": "ffff",
      "./si": "eda5",
      "./si.js": "eda5",
      "./sk": "7be6",
      "./sk.js": "7be6",
      "./sl": "8155",
      "./sl.js": "8155",
      "./sq": "c8f3",
      "./sq.js": "c8f3",
      "./sr": "cf1e",
      "./sr-cyrl": "13e9",
      "./sr-cyrl.js": "13e9",
      "./sr.js": "cf1e",
      "./ss": "52bd",
      "./ss.js": "52bd",
      "./sv": "5fbd",
      "./sv.js": "5fbd",
      "./sw": "74dc",
      "./sw.js": "74dc",
      "./ta": "3de5",
      "./ta.js": "3de5",
      "./te": "5cbb",
      "./te.js": "5cbb",
      "./tet": "576c",
      "./tet.js": "576c",
      "./tg": "3b1b",
      "./tg.js": "3b1b",
      "./th": "10e8",
      "./th.js": "10e8",
      "./tk": "5aff",
      "./tk.js": "5aff",
      "./tl-ph": "0f38",
      "./tl-ph.js": "0f38",
      "./tlh": "cf75",
      "./tlh.js": "cf75",
      "./tr": "0e81",
      "./tr.js": "0e81",
      "./tzl": "cf51",
      "./tzl.js": "cf51",
      "./tzm": "c109",
      "./tzm-latn": "b53d",
      "./tzm-latn.js": "b53d",
      "./tzm.js": "c109",
      "./ug-cn": "6117",
      "./ug-cn.js": "6117",
      "./uk": "ada2",
      "./uk.js": "ada2",
      "./ur": "5294",
      "./ur.js": "5294",
      "./uz": "2e8c",
      "./uz-latn": "010e",
      "./uz-latn.js": "010e",
      "./uz.js": "2e8c",
      "./vi": "2921",
      "./vi.js": "2921",
      "./x-pseudo": "fd7e",
      "./x-pseudo.js": "fd7e",
      "./yo": "7f33",
      "./yo.js": "7f33",
      "./zh-cn": "5c3a",
      "./zh-cn.js": "5c3a",
      "./zh-hk": "49ab",
      "./zh-hk.js": "49ab",
      "./zh-mo": "3a6c",
      "./zh-mo.js": "3a6c",
      "./zh-tw": "90ea",
      "./zh-tw.js": "90ea",
    };
    function n(e) {
      var t = r(e);
      return s(t);
    }
    function r(e) {
      if (!s.o(a, e)) {
        var t = new Error("Cannot find module '" + e + "'");
        throw ((t.code = "MODULE_NOT_FOUND"), t);
      }
      return a[e];
    }
    (n.keys = function() {
      return Object.keys(a);
    }),
      (n.resolve = r),
      (e.exports = n),
      (n.id = "4678");
  },
  5272: function(e, t, s) {},
  "56d7": function(e, t, s) {
    "use strict";
    s.r(t);
    s("e260"), s("e6cf"), s("cca6"), s("a79d");
    var a,
      n,
      r = s("2b0e"),
      o = function() {
        var e = this,
          t = e.$createElement,
          s = e._self._c || t;
        return s(
          "div",
          { attrs: { id: "app" } },
          [
            s(
              "div",
              { attrs: { id: "nav" } },
              [
                s("router-link", { attrs: { to: "/" } }, [e._v("Home")]),
                e._v(" | "),
                s("router-link", { attrs: { to: "/about" } }, [e._v("About")]),
                e._v(" | "),
                s("router-link", { attrs: { to: "/chart " } }, [e._v("Chart")]),
              ],
              1
            ),
            s("router-view"),
          ],
          1
        );
      },
      c = [],
      l = (s("034f"), s("2877")),
      f = {},
      u = Object(l["a"])(f, o, c, !1, null, null, null),
      b = u.exports,
      d = (s("d3b7"), s("3ca3"), s("ddb0"), s("8c4f")),
      i = function() {
        var e = this,
          t = e.$createElement,
          a = e._self._c || t;
        return a(
          "div",
          { staticClass: "home" },
          [
            a("img", { attrs: { alt: "Vue logo", src: s("cf05") } }),
            a("HelloWorld", { attrs: { msg: "Welcome to Your Vue.js App" } }),
            a("h2", [
              e._v(
                "Hi, " +
                  e._s(e.name) +
                  ". Your are " +
                  e._s(e.age) +
                  " years old."
              ),
            ]),
          ],
          1
        );
      },
      j = [],
      p = function() {
        var e = this,
          t = e.$createElement,
          s = e._self._c || t;
        return s("div", { staticClass: "hello" }, [
          s("h1", [e._v(e._s(e.msg))]),
        ]);
      },
      m = [],
      h = { name: "HelloWorld", props: { msg: String } },
      g = h,
      v = (s("5d06"), Object(l["a"])(g, p, m, !1, null, "43f48a4c", null)),
      y = v.exports,
      k = { name: "Home", components: { HelloWorld: y } },
      _ = k,
      w = Object(l["a"])(_, i, j, !1, null, null, null),
      z = w.exports,
      x = function() {
        var e = this,
          t = e.$createElement,
          s = e._self._c || t;
        return s(
          "div",
          { staticClass: "graph" },
          [s("h1", [e._v("Bar & Line")]), s("chart")],
          1
        );
      },
      O = [],
      C = s("1fca"),
      E = {
        extends: C["a"],
        name: "chart",
        data: function() {
          return {
            data: {
              labels: ["January", "February", "March", "April", "May", "June"],
              datasets: [
                {
                  label: "Bar Dataset",
                  data: [10, 20, 30, 40, 50, 30],
                  backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                    "rgba(255, 159, 64, 0.2)",
                  ],
                  borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                    "rgba(255, 159, 64, 1)",
                  ],
                  borderWidth: 1,
                },
                {
                  label: "Line Dataset",
                  data: [10, 50, 20, 30, 30, 40],
                  borderColor: "#CFD8DC",
                  fill: !1,
                  type: "line",
                  lineTension: 0.3,
                },
              ],
            },
            options: {
              scales: {
                xAxes: [{ scaleLabel: { display: !0, labelString: "Month" } }],
                yAxes: [{ ticks: { beginAtZero: !0, stepSize: 10 } }],
              },
            },
          };
        },
        mounted: function() {
          this.renderChart(this.data, this.options);
        },
      },
      P = E,
      S = Object(l["a"])(P, a, n, !1, null, null, null),
      A = S.exports,
      M = { name: "graph", components: { Chart: A } },
      H = M,
      T = Object(l["a"])(H, x, O, !1, null, null, null),
      D = T.exports;
    r["a"].use(d["a"]);
    var L = [
        { path: "/", name: "Home", component: z },
        {
          path: "/about",
          name: "About",
          component: function() {
            return s.e("about").then(s.bind(null, "f820"));
          },
        },
        { path: "/chart", name: "chart", component: D },
      ],
      W = new d["a"]({ mode: "history", base: "/", routes: L }),
      $ = W,
      J = s("2f62");
    r["a"].use(J["a"]);
    var q = new J["a"].Store({
      state: {},
      mutations: {},
      actions: {},
      modules: {},
    });
    (r["a"].config.productionTip = !1),
      new r["a"]({
        router: $,
        store: q,
        render: function(e) {
          return e(b);
        },
      }).$mount("#app");
  },
  "5d06": function(e, t, s) {
    "use strict";
    s("5272");
  },
  "85ec": function(e, t, s) {},
  cf05: function(e, t, s) {
    e.exports = s.p + "static/img/logo.82b9c7a5.png";
  },
});
//# sourceMappingURL=app.461baae9.js.map
