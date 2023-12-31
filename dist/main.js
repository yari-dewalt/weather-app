(() => {
  "use strict";
  var t,
    e,
    n,
    r,
    a = {
      138: (t, e, n) => {
        n.a(
          t,
          async (t, e) => {
            try {
              var r = n(720),
                a = n(173);
              let t = !0,
                o = document.getElementById("content"),
                i = document.getElementById("loading-screen");
              const s = document.getElementById("day-0");
              if (t) {
                i.style.display = "block";
                for (const t of o.children) t.style.display = "none";
              }
              let u;
              if (
                ((window.current_info = await (0, a.v)("Los Angeles")),
                (window.forecast_info = await (0, a.t)("Los Angeles")),
                (0, r.NQ)(window.current_info),
                (0, r.p2)(window.forecast_info),
                (0, r.kP)(window.forecast_info[0]),
                (s.className = "day-card selected"),
                (u =
                  document.getElementsByClassName("hour-card selected")[0]
                    .firstElementChild.textContent),
                (t = !1),
                !t)
              ) {
                i.style.display = "none";
                for (const t of o.children) t.style.display = "";
              }
              const c = document.getElementById("form"),
                d = document.getElementById("city");
              let l = 0;
              const m = document.getElementsByClassName("day-card");
              c.addEventListener("submit", async (e) => {
                e.preventDefault(), (t = !0), t && (i.style.display = "block");
                try {
                  (window.current_info = await (0, a.v)(d.value)),
                    (window.forecast_info = await (0, a.t)(d.value)),
                    (0, r.NQ)(window.current_info),
                    (0, r.p2)(window.forecast_info),
                    (0, r.kP)(window.forecast_info[0]);
                } catch (e) {
                  t = !1;
                }
                if (
                  ((u =
                    document.getElementsByClassName("hour-card selected")[0]
                      .firstElementChild.textContent),
                  Array.from(m).forEach((t) => {
                    t.className = "day-card";
                  }),
                  (s.className = "day-card selected"),
                  (t = !1),
                  !t)
                ) {
                  i.style.display = "none";
                  for (const t of o.children) t.style.display = "";
                }
              });
              let f = document.getElementsByClassName("dot");
              Array.from(f).forEach((t, e) => {
                t.addEventListener("click", () => {
                  let n;
                  switch (
                    (Array.from(f).forEach((t) => {
                      t.className = "dot";
                    }),
                    (t.className = "dot selected"),
                    e)
                  ) {
                    case 0:
                      n = -1;
                      break;
                    case 1:
                      n = 16;
                      break;
                    case 2:
                      n = 24;
                  }
                  (0, r.ok)(window.forecast_info[l], n);
                  let a = document.getElementsByClassName("hour-card");
                  Array.from(a).forEach((t) => {
                    (t.className = "hour-card"),
                      t.firstElementChild.textContent === u &&
                        (t.className = "hour-card selected");
                  });
                });
              }),
                document
                  .getElementById("left-arrow")
                  .addEventListener("click", () => {
                    let t;
                    Array.from(f).forEach((e, n) => {
                      "dot selected" === e.className && (t = n);
                    }),
                      0 !== t && (f[t].className = "dot"),
                      (f[t - 1].className = "dot selected");
                    let e = document.getElementById("hour-1-time"),
                      n = e.textContent.split(" ")[1];
                    (e = e.textContent.split(" ")[0]),
                      (e = parseInt(e)),
                      "pm" === n
                        ? (e += 12)
                        : 12 === e && "am" === n && (e -= 12),
                      (0, r.q)(window.forecast_info[l], e);
                    let a = document.getElementsByClassName("hour-card");
                    Array.from(a).forEach((t) => {
                      (t.className = "hour-card"),
                        t.firstElementChild.textContent === u &&
                          (t.className = "hour-card selected");
                    });
                  }),
                document
                  .getElementById("right-arrow")
                  .addEventListener("click", () => {
                    let t;
                    Array.from(f).forEach((e, n) => {
                      "dot selected" === e.className && (t = n);
                    }),
                      2 !== t && (f[t].className = "dot"),
                      (f[t + 1].className = "dot selected");
                    let e = document.getElementById("hour-1-time"),
                      n = e.textContent.split(" ")[1];
                    if (
                      ((e = e.textContent.split(" ")[0]),
                      (e = parseInt(e)),
                      "pm" === n
                        ? (e += 12)
                        : 12 === e && "am" === n && (e -= 12),
                      16 === e)
                    )
                      return;
                    (0, r.ok)(window.forecast_info[l], e);
                    let a = document.getElementsByClassName("hour-card");
                    Array.from(a).forEach((t) => {
                      (t.className = "hour-card"),
                        t.firstElementChild.textContent === u &&
                          (t.className = "hour-card selected");
                    });
                  }),
                Array.from(m).forEach((t, e) => {
                  t.addEventListener("click", () => {
                    Array.from(m).forEach((t) => {
                      t.className = "day-card";
                    }),
                      (t.className = "day-card selected"),
                      (0, r.kP)(window.forecast_info[e]),
                      (l = e);
                  });
                }),
                e();
            } catch (t) {
              e(t);
            }
          },
          1
        );
      },
      720: (t, e, n) => {
        n.d(e, {
          NQ: () => a,
          kP: () => i,
          ok: () => u,
          p2: () => o,
          q: () => s,
        });
        const r = document.getElementById("city");
        async function a(t) {
          let e = document.getElementById("current-location"),
            n = document.getElementById("current-region"),
            a = document.getElementById("current-date-time"),
            o = document.getElementById("current-temperature"),
            i = document.getElementById("current-weather"),
            s = document.getElementById("current-weather-icon");
          const u = t[0];
          e.textContent = u;
          const c = t[1];
          n.textContent = c;
          const d = t[2];
          a.textContent = d;
          const l = t[3];
          o.textContent = `${Math.round(l)} °F`;
          const m = t[4];
          i.textContent = m;
          const f = t[5];
          s.setAttribute("src", `https://${f}`), console.log(t), (r.value = "");
        }
        async function o(t) {
          const e = document.getElementsByClassName("day-card");
          let n = 0;
          Array.from(e).forEach((e) => {
            let r = e.children;
            r[0].setAttribute("src", `https://${t[n].day.condition.icon}`),
              (r[1].textContent = t[n].day.condition.text),
              (r[2].textContent = `${Math.round(t[n].day.maxtemp_f)} °F`),
              (r[3].textContent = `${Math.round(t[n].day.mintemp_f)} °F`),
              (r[4].textContent = `${t[n].day.avghumidity}% Humidity`),
              (r[5].textContent = `${Math.round(
                t[n].day.maxwind_mph
              )} mph Winds`),
              n++;
          });
        }
        async function i(t) {
          const e = (function () {
            const t = document.getElementById("current-date-time");
            let e = t.textContent.split(":")[0].slice(-2);
            e = parseInt(e);
            const n = t.textContent.split(":")[1].substring(3);
            return (
              "PM" === n || "noon" == n
                ? (e += 12)
                : "midnight" === n && (e -= 12),
              e
            );
          })();
          let n = document.getElementsByClassName("dot");
          Array.from(n).forEach((t) => {
            t.className = "dot";
          }),
            e <= 8
              ? (n[0].className = "dot selected")
              : e <= 16
              ? (n[1].className = "dot selected")
              : e <= 24 && (n[2].className = "dot selected");
          let r = document.getElementsByClassName("hour-card");
          Array.from(r).forEach((t) => {
            t.className = "hour-card";
          }),
            (document.getElementById("hour-" + ((e % 8) + 1)).className =
              "hour-card selected"),
            c(t, e);
        }
        function s(t, e) {
          c(t, (e -= 8));
        }
        function u(t, e) {
          c(t, (e += 8));
        }
        function c(t, e) {
          const n = document.getElementsByClassName("hour-card");
          let r = 0;
          e > 7 && e <= 15 ? (r = 8) : e > 15 && (r = 16),
            24 === e && (r = 8),
            Array.from(n).forEach((e) => {
              let n = e.children,
                a = t.hour[r].time.split(" ")[1].split(":")[0];
              parseInt(a.substring(0, 3)) > 12
                ? (n[0].textContent = parseInt(a) - 12 + " pm")
                : 12 == parseInt(a.substring(0, 3))
                ? (n[0].textContent = parseInt(a) + " pm")
                : parseInt(a.substring(0, 3)) < 12 &&
                  ((n[0].textContent = parseInt(a) + " am"),
                  0 == parseInt(a.substring(0, 3)) &&
                    (n[0].textContent = parseInt(a) + 12 + " am")),
                (n[1].textContent = `${Math.round(t.hour[r].temp_f)} °F`),
                n[2].setAttribute("src", `https://${t.hour[r].condition.icon}`),
                r++;
            });
        }
      },
      173: (t, e, n) => {
        function r(t) {
          return (
            (r =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            r(t)
          );
        }
        function a(t, e) {
          if (e.length < t)
            throw new TypeError(
              t +
                " argument" +
                (t > 1 ? "s" : "") +
                " required, but only " +
                e.length +
                " present"
            );
        }
        function o(t) {
          a(1, arguments);
          var e = Object.prototype.toString.call(t);
          return t instanceof Date ||
            ("object" === r(t) && "[object Date]" === e)
            ? new Date(t.getTime())
            : "number" == typeof t || "[object Number]" === e
            ? new Date(t)
            : (("string" != typeof t && "[object String]" !== e) ||
                "undefined" == typeof console ||
                (console.warn(
                  "Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"
                ),
                console.warn(new Error().stack)),
              new Date(NaN));
        }
        function i(t) {
          if (null === t || !0 === t || !1 === t) return NaN;
          var e = Number(t);
          return isNaN(e) ? e : e < 0 ? Math.ceil(e) : Math.floor(e);
        }
        function s(t) {
          a(1, arguments);
          var e = o(t),
            n = e.getUTCDay(),
            r = (n < 1 ? 7 : 0) + n - 1;
          return e.setUTCDate(e.getUTCDate() - r), e.setUTCHours(0, 0, 0, 0), e;
        }
        function u(t) {
          a(1, arguments);
          var e = o(t),
            n = e.getUTCFullYear(),
            r = new Date(0);
          r.setUTCFullYear(n + 1, 0, 4), r.setUTCHours(0, 0, 0, 0);
          var i = s(r),
            u = new Date(0);
          u.setUTCFullYear(n, 0, 4), u.setUTCHours(0, 0, 0, 0);
          var c = s(u);
          return e.getTime() >= i.getTime()
            ? n + 1
            : e.getTime() >= c.getTime()
            ? n
            : n - 1;
        }
        n.d(e, { v: () => R, t: () => J });
        var c = {};
        function d() {
          return c;
        }
        function l(t, e) {
          var n, r, s, u, c, l, m, f;
          a(1, arguments);
          var h = d(),
            g = i(
              null !==
                (n =
                  null !==
                    (r =
                      null !==
                        (s =
                          null !== (u = null == e ? void 0 : e.weekStartsOn) &&
                          void 0 !== u
                            ? u
                            : null == e ||
                              null === (c = e.locale) ||
                              void 0 === c ||
                              null === (l = c.options) ||
                              void 0 === l
                            ? void 0
                            : l.weekStartsOn) && void 0 !== s
                        ? s
                        : h.weekStartsOn) && void 0 !== r
                    ? r
                    : null === (m = h.locale) ||
                      void 0 === m ||
                      null === (f = m.options) ||
                      void 0 === f
                    ? void 0
                    : f.weekStartsOn) && void 0 !== n
                ? n
                : 0
            );
          if (!(g >= 0 && g <= 6))
            throw new RangeError(
              "weekStartsOn must be between 0 and 6 inclusively"
            );
          var w = o(t),
            y = w.getUTCDay(),
            v = (y < g ? 7 : 0) + y - g;
          return w.setUTCDate(w.getUTCDate() - v), w.setUTCHours(0, 0, 0, 0), w;
        }
        function m(t, e) {
          var n, r, s, u, c, m, f, h;
          a(1, arguments);
          var g = o(t),
            w = g.getUTCFullYear(),
            y = d(),
            v = i(
              null !==
                (n =
                  null !==
                    (r =
                      null !==
                        (s =
                          null !==
                            (u =
                              null == e ? void 0 : e.firstWeekContainsDate) &&
                          void 0 !== u
                            ? u
                            : null == e ||
                              null === (c = e.locale) ||
                              void 0 === c ||
                              null === (m = c.options) ||
                              void 0 === m
                            ? void 0
                            : m.firstWeekContainsDate) && void 0 !== s
                        ? s
                        : y.firstWeekContainsDate) && void 0 !== r
                    ? r
                    : null === (f = y.locale) ||
                      void 0 === f ||
                      null === (h = f.options) ||
                      void 0 === h
                    ? void 0
                    : h.firstWeekContainsDate) && void 0 !== n
                ? n
                : 1
            );
          if (!(v >= 1 && v <= 7))
            throw new RangeError(
              "firstWeekContainsDate must be between 1 and 7 inclusively"
            );
          var b = new Date(0);
          b.setUTCFullYear(w + 1, 0, v), b.setUTCHours(0, 0, 0, 0);
          var p = l(b, e),
            C = new Date(0);
          C.setUTCFullYear(w, 0, v), C.setUTCHours(0, 0, 0, 0);
          var T = l(C, e);
          return g.getTime() >= p.getTime()
            ? w + 1
            : g.getTime() >= T.getTime()
            ? w
            : w - 1;
        }
        function f(t, e) {
          for (
            var n = t < 0 ? "-" : "", r = Math.abs(t).toString();
            r.length < e;

          )
            r = "0" + r;
          return n + r;
        }
        const h = function (t, e) {
            var n = t.getUTCFullYear(),
              r = n > 0 ? n : 1 - n;
            return f("yy" === e ? r % 100 : r, e.length);
          },
          g = function (t, e) {
            var n = t.getUTCMonth();
            return "M" === e ? String(n + 1) : f(n + 1, 2);
          },
          w = function (t, e) {
            return f(t.getUTCDate(), e.length);
          },
          y = function (t, e) {
            return f(t.getUTCHours() % 12 || 12, e.length);
          },
          v = function (t, e) {
            return f(t.getUTCHours(), e.length);
          },
          b = function (t, e) {
            return f(t.getUTCMinutes(), e.length);
          },
          p = function (t, e) {
            return f(t.getUTCSeconds(), e.length);
          },
          C = function (t, e) {
            var n = e.length,
              r = t.getUTCMilliseconds();
            return f(Math.floor(r * Math.pow(10, n - 3)), e.length);
          };
        var T = {
          G: function (t, e, n) {
            var r = t.getUTCFullYear() > 0 ? 1 : 0;
            switch (e) {
              case "G":
              case "GG":
              case "GGG":
                return n.era(r, { width: "abbreviated" });
              case "GGGGG":
                return n.era(r, { width: "narrow" });
              default:
                return n.era(r, { width: "wide" });
            }
          },
          y: function (t, e, n) {
            if ("yo" === e) {
              var r = t.getUTCFullYear(),
                a = r > 0 ? r : 1 - r;
              return n.ordinalNumber(a, { unit: "year" });
            }
            return h(t, e);
          },
          Y: function (t, e, n, r) {
            var a = m(t, r),
              o = a > 0 ? a : 1 - a;
            return "YY" === e
              ? f(o % 100, 2)
              : "Yo" === e
              ? n.ordinalNumber(o, { unit: "year" })
              : f(o, e.length);
          },
          R: function (t, e) {
            return f(u(t), e.length);
          },
          u: function (t, e) {
            return f(t.getUTCFullYear(), e.length);
          },
          Q: function (t, e, n) {
            var r = Math.ceil((t.getUTCMonth() + 1) / 3);
            switch (e) {
              case "Q":
                return String(r);
              case "QQ":
                return f(r, 2);
              case "Qo":
                return n.ordinalNumber(r, { unit: "quarter" });
              case "QQQ":
                return n.quarter(r, {
                  width: "abbreviated",
                  context: "formatting",
                });
              case "QQQQQ":
                return n.quarter(r, { width: "narrow", context: "formatting" });
              default:
                return n.quarter(r, { width: "wide", context: "formatting" });
            }
          },
          q: function (t, e, n) {
            var r = Math.ceil((t.getUTCMonth() + 1) / 3);
            switch (e) {
              case "q":
                return String(r);
              case "qq":
                return f(r, 2);
              case "qo":
                return n.ordinalNumber(r, { unit: "quarter" });
              case "qqq":
                return n.quarter(r, {
                  width: "abbreviated",
                  context: "standalone",
                });
              case "qqqqq":
                return n.quarter(r, { width: "narrow", context: "standalone" });
              default:
                return n.quarter(r, { width: "wide", context: "standalone" });
            }
          },
          M: function (t, e, n) {
            var r = t.getUTCMonth();
            switch (e) {
              case "M":
              case "MM":
                return g(t, e);
              case "Mo":
                return n.ordinalNumber(r + 1, { unit: "month" });
              case "MMM":
                return n.month(r, {
                  width: "abbreviated",
                  context: "formatting",
                });
              case "MMMMM":
                return n.month(r, { width: "narrow", context: "formatting" });
              default:
                return n.month(r, { width: "wide", context: "formatting" });
            }
          },
          L: function (t, e, n) {
            var r = t.getUTCMonth();
            switch (e) {
              case "L":
                return String(r + 1);
              case "LL":
                return f(r + 1, 2);
              case "Lo":
                return n.ordinalNumber(r + 1, { unit: "month" });
              case "LLL":
                return n.month(r, {
                  width: "abbreviated",
                  context: "standalone",
                });
              case "LLLLL":
                return n.month(r, { width: "narrow", context: "standalone" });
              default:
                return n.month(r, { width: "wide", context: "standalone" });
            }
          },
          w: function (t, e, n, r) {
            var s = (function (t, e) {
              a(1, arguments);
              var n = o(t),
                r =
                  l(n, e).getTime() -
                  (function (t, e) {
                    var n, r, o, s, u, c, f, h;
                    a(1, arguments);
                    var g = d(),
                      w = i(
                        null !==
                          (n =
                            null !==
                              (r =
                                null !==
                                  (o =
                                    null !==
                                      (s =
                                        null == e
                                          ? void 0
                                          : e.firstWeekContainsDate) &&
                                    void 0 !== s
                                      ? s
                                      : null == e ||
                                        null === (u = e.locale) ||
                                        void 0 === u ||
                                        null === (c = u.options) ||
                                        void 0 === c
                                      ? void 0
                                      : c.firstWeekContainsDate) && void 0 !== o
                                  ? o
                                  : g.firstWeekContainsDate) && void 0 !== r
                              ? r
                              : null === (f = g.locale) ||
                                void 0 === f ||
                                null === (h = f.options) ||
                                void 0 === h
                              ? void 0
                              : h.firstWeekContainsDate) && void 0 !== n
                          ? n
                          : 1
                      ),
                      y = m(t, e),
                      v = new Date(0);
                    return (
                      v.setUTCFullYear(y, 0, w),
                      v.setUTCHours(0, 0, 0, 0),
                      l(v, e)
                    );
                  })(n, e).getTime();
              return Math.round(r / 6048e5) + 1;
            })(t, r);
            return "wo" === e
              ? n.ordinalNumber(s, { unit: "week" })
              : f(s, e.length);
          },
          I: function (t, e, n) {
            var r = (function (t) {
              a(1, arguments);
              var e = o(t),
                n =
                  s(e).getTime() -
                  (function (t) {
                    a(1, arguments);
                    var e = u(t),
                      n = new Date(0);
                    return (
                      n.setUTCFullYear(e, 0, 4), n.setUTCHours(0, 0, 0, 0), s(n)
                    );
                  })(e).getTime();
              return Math.round(n / 6048e5) + 1;
            })(t);
            return "Io" === e
              ? n.ordinalNumber(r, { unit: "week" })
              : f(r, e.length);
          },
          d: function (t, e, n) {
            return "do" === e
              ? n.ordinalNumber(t.getUTCDate(), { unit: "date" })
              : w(t, e);
          },
          D: function (t, e, n) {
            var r = (function (t) {
              a(1, arguments);
              var e = o(t),
                n = e.getTime();
              e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
              var r = n - e.getTime();
              return Math.floor(r / 864e5) + 1;
            })(t);
            return "Do" === e
              ? n.ordinalNumber(r, { unit: "dayOfYear" })
              : f(r, e.length);
          },
          E: function (t, e, n) {
            var r = t.getUTCDay();
            switch (e) {
              case "E":
              case "EE":
              case "EEE":
                return n.day(r, {
                  width: "abbreviated",
                  context: "formatting",
                });
              case "EEEEE":
                return n.day(r, { width: "narrow", context: "formatting" });
              case "EEEEEE":
                return n.day(r, { width: "short", context: "formatting" });
              default:
                return n.day(r, { width: "wide", context: "formatting" });
            }
          },
          e: function (t, e, n, r) {
            var a = t.getUTCDay(),
              o = (a - r.weekStartsOn + 8) % 7 || 7;
            switch (e) {
              case "e":
                return String(o);
              case "ee":
                return f(o, 2);
              case "eo":
                return n.ordinalNumber(o, { unit: "day" });
              case "eee":
                return n.day(a, {
                  width: "abbreviated",
                  context: "formatting",
                });
              case "eeeee":
                return n.day(a, { width: "narrow", context: "formatting" });
              case "eeeeee":
                return n.day(a, { width: "short", context: "formatting" });
              default:
                return n.day(a, { width: "wide", context: "formatting" });
            }
          },
          c: function (t, e, n, r) {
            var a = t.getUTCDay(),
              o = (a - r.weekStartsOn + 8) % 7 || 7;
            switch (e) {
              case "c":
                return String(o);
              case "cc":
                return f(o, e.length);
              case "co":
                return n.ordinalNumber(o, { unit: "day" });
              case "ccc":
                return n.day(a, {
                  width: "abbreviated",
                  context: "standalone",
                });
              case "ccccc":
                return n.day(a, { width: "narrow", context: "standalone" });
              case "cccccc":
                return n.day(a, { width: "short", context: "standalone" });
              default:
                return n.day(a, { width: "wide", context: "standalone" });
            }
          },
          i: function (t, e, n) {
            var r = t.getUTCDay(),
              a = 0 === r ? 7 : r;
            switch (e) {
              case "i":
                return String(a);
              case "ii":
                return f(a, e.length);
              case "io":
                return n.ordinalNumber(a, { unit: "day" });
              case "iii":
                return n.day(r, {
                  width: "abbreviated",
                  context: "formatting",
                });
              case "iiiii":
                return n.day(r, { width: "narrow", context: "formatting" });
              case "iiiiii":
                return n.day(r, { width: "short", context: "formatting" });
              default:
                return n.day(r, { width: "wide", context: "formatting" });
            }
          },
          a: function (t, e, n) {
            var r = t.getUTCHours() / 12 >= 1 ? "pm" : "am";
            switch (e) {
              case "a":
              case "aa":
                return n.dayPeriod(r, {
                  width: "abbreviated",
                  context: "formatting",
                });
              case "aaa":
                return n
                  .dayPeriod(r, { width: "abbreviated", context: "formatting" })
                  .toLowerCase();
              case "aaaaa":
                return n.dayPeriod(r, {
                  width: "narrow",
                  context: "formatting",
                });
              default:
                return n.dayPeriod(r, { width: "wide", context: "formatting" });
            }
          },
          b: function (t, e, n) {
            var r,
              a = t.getUTCHours();
            switch (
              ((r =
                12 === a
                  ? "noon"
                  : 0 === a
                  ? "midnight"
                  : a / 12 >= 1
                  ? "pm"
                  : "am"),
              e)
            ) {
              case "b":
              case "bb":
                return n.dayPeriod(r, {
                  width: "abbreviated",
                  context: "formatting",
                });
              case "bbb":
                return n
                  .dayPeriod(r, { width: "abbreviated", context: "formatting" })
                  .toLowerCase();
              case "bbbbb":
                return n.dayPeriod(r, {
                  width: "narrow",
                  context: "formatting",
                });
              default:
                return n.dayPeriod(r, { width: "wide", context: "formatting" });
            }
          },
          B: function (t, e, n) {
            var r,
              a = t.getUTCHours();
            switch (
              ((r =
                a >= 17
                  ? "evening"
                  : a >= 12
                  ? "afternoon"
                  : a >= 4
                  ? "morning"
                  : "night"),
              e)
            ) {
              case "B":
              case "BB":
              case "BBB":
                return n.dayPeriod(r, {
                  width: "abbreviated",
                  context: "formatting",
                });
              case "BBBBB":
                return n.dayPeriod(r, {
                  width: "narrow",
                  context: "formatting",
                });
              default:
                return n.dayPeriod(r, { width: "wide", context: "formatting" });
            }
          },
          h: function (t, e, n) {
            if ("ho" === e) {
              var r = t.getUTCHours() % 12;
              return 0 === r && (r = 12), n.ordinalNumber(r, { unit: "hour" });
            }
            return y(t, e);
          },
          H: function (t, e, n) {
            return "Ho" === e
              ? n.ordinalNumber(t.getUTCHours(), { unit: "hour" })
              : v(t, e);
          },
          K: function (t, e, n) {
            var r = t.getUTCHours() % 12;
            return "Ko" === e
              ? n.ordinalNumber(r, { unit: "hour" })
              : f(r, e.length);
          },
          k: function (t, e, n) {
            var r = t.getUTCHours();
            return (
              0 === r && (r = 24),
              "ko" === e ? n.ordinalNumber(r, { unit: "hour" }) : f(r, e.length)
            );
          },
          m: function (t, e, n) {
            return "mo" === e
              ? n.ordinalNumber(t.getUTCMinutes(), { unit: "minute" })
              : b(t, e);
          },
          s: function (t, e, n) {
            return "so" === e
              ? n.ordinalNumber(t.getUTCSeconds(), { unit: "second" })
              : p(t, e);
          },
          S: function (t, e) {
            return C(t, e);
          },
          X: function (t, e, n, r) {
            var a = (r._originalDate || t).getTimezoneOffset();
            if (0 === a) return "Z";
            switch (e) {
              case "X":
                return E(a);
              case "XXXX":
              case "XX":
                return M(a);
              default:
                return M(a, ":");
            }
          },
          x: function (t, e, n, r) {
            var a = (r._originalDate || t).getTimezoneOffset();
            switch (e) {
              case "x":
                return E(a);
              case "xxxx":
              case "xx":
                return M(a);
              default:
                return M(a, ":");
            }
          },
          O: function (t, e, n, r) {
            var a = (r._originalDate || t).getTimezoneOffset();
            switch (e) {
              case "O":
              case "OO":
              case "OOO":
                return "GMT" + x(a, ":");
              default:
                return "GMT" + M(a, ":");
            }
          },
          z: function (t, e, n, r) {
            var a = (r._originalDate || t).getTimezoneOffset();
            switch (e) {
              case "z":
              case "zz":
              case "zzz":
                return "GMT" + x(a, ":");
              default:
                return "GMT" + M(a, ":");
            }
          },
          t: function (t, e, n, r) {
            var a = r._originalDate || t;
            return f(Math.floor(a.getTime() / 1e3), e.length);
          },
          T: function (t, e, n, r) {
            return f((r._originalDate || t).getTime(), e.length);
          },
        };
        function x(t, e) {
          var n = t > 0 ? "-" : "+",
            r = Math.abs(t),
            a = Math.floor(r / 60),
            o = r % 60;
          if (0 === o) return n + String(a);
          var i = e || "";
          return n + String(a) + i + f(o, 2);
        }
        function E(t, e) {
          return t % 60 == 0
            ? (t > 0 ? "-" : "+") + f(Math.abs(t) / 60, 2)
            : M(t, e);
        }
        function M(t, e) {
          var n = e || "",
            r = t > 0 ? "-" : "+",
            a = Math.abs(t);
          return r + f(Math.floor(a / 60), 2) + n + f(a % 60, 2);
        }
        const k = T;
        var N = function (t, e) {
            switch (t) {
              case "P":
                return e.date({ width: "short" });
              case "PP":
                return e.date({ width: "medium" });
              case "PPP":
                return e.date({ width: "long" });
              default:
                return e.date({ width: "full" });
            }
          },
          D = function (t, e) {
            switch (t) {
              case "p":
                return e.time({ width: "short" });
              case "pp":
                return e.time({ width: "medium" });
              case "ppp":
                return e.time({ width: "long" });
              default:
                return e.time({ width: "full" });
            }
          },
          S = {
            p: D,
            P: function (t, e) {
              var n,
                r = t.match(/(P+)(p+)?/) || [],
                a = r[1],
                o = r[2];
              if (!o) return N(t, e);
              switch (a) {
                case "P":
                  n = e.dateTime({ width: "short" });
                  break;
                case "PP":
                  n = e.dateTime({ width: "medium" });
                  break;
                case "PPP":
                  n = e.dateTime({ width: "long" });
                  break;
                default:
                  n = e.dateTime({ width: "full" });
              }
              return n
                .replace("{{date}}", N(a, e))
                .replace("{{time}}", D(o, e));
            },
          };
        const P = S;
        var U = ["D", "DD"],
          W = ["YY", "YYYY"];
        function Y(t, e, n) {
          if ("YYYY" === t)
            throw new RangeError(
              "Use `yyyy` instead of `YYYY` (in `"
                .concat(e, "`) for formatting years to the input `")
                .concat(
                  n,
                  "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"
                )
            );
          if ("YY" === t)
            throw new RangeError(
              "Use `yy` instead of `YY` (in `"
                .concat(e, "`) for formatting years to the input `")
                .concat(
                  n,
                  "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"
                )
            );
          if ("D" === t)
            throw new RangeError(
              "Use `d` instead of `D` (in `"
                .concat(e, "`) for formatting days of the month to the input `")
                .concat(
                  n,
                  "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"
                )
            );
          if ("DD" === t)
            throw new RangeError(
              "Use `dd` instead of `DD` (in `"
                .concat(e, "`) for formatting days of the month to the input `")
                .concat(
                  n,
                  "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"
                )
            );
        }
        var B = {
          lessThanXSeconds: {
            one: "less than a second",
            other: "less than {{count}} seconds",
          },
          xSeconds: { one: "1 second", other: "{{count}} seconds" },
          halfAMinute: "half a minute",
          lessThanXMinutes: {
            one: "less than a minute",
            other: "less than {{count}} minutes",
          },
          xMinutes: { one: "1 minute", other: "{{count}} minutes" },
          aboutXHours: { one: "about 1 hour", other: "about {{count}} hours" },
          xHours: { one: "1 hour", other: "{{count}} hours" },
          xDays: { one: "1 day", other: "{{count}} days" },
          aboutXWeeks: { one: "about 1 week", other: "about {{count}} weeks" },
          xWeeks: { one: "1 week", other: "{{count}} weeks" },
          aboutXMonths: {
            one: "about 1 month",
            other: "about {{count}} months",
          },
          xMonths: { one: "1 month", other: "{{count}} months" },
          aboutXYears: { one: "about 1 year", other: "about {{count}} years" },
          xYears: { one: "1 year", other: "{{count}} years" },
          overXYears: { one: "over 1 year", other: "over {{count}} years" },
          almostXYears: {
            one: "almost 1 year",
            other: "almost {{count}} years",
          },
        };
        function _(t) {
          return function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              n = e.width ? String(e.width) : t.defaultWidth;
            return t.formats[n] || t.formats[t.defaultWidth];
          };
        }
        var O,
          q = {
            date: _({
              formats: {
                full: "EEEE, MMMM do, y",
                long: "MMMM do, y",
                medium: "MMM d, y",
                short: "MM/dd/yyyy",
              },
              defaultWidth: "full",
            }),
            time: _({
              formats: {
                full: "h:mm:ss a zzzz",
                long: "h:mm:ss a z",
                medium: "h:mm:ss a",
                short: "h:mm a",
              },
              defaultWidth: "full",
            }),
            dateTime: _({
              formats: {
                full: "{{date}} 'at' {{time}}",
                long: "{{date}} 'at' {{time}}",
                medium: "{{date}}, {{time}}",
                short: "{{date}}, {{time}}",
              },
              defaultWidth: "full",
            }),
          },
          A = {
            lastWeek: "'last' eeee 'at' p",
            yesterday: "'yesterday at' p",
            today: "'today at' p",
            tomorrow: "'tomorrow at' p",
            nextWeek: "eeee 'at' p",
            other: "P",
          };
        function I(t) {
          return function (e, n) {
            var r;
            if (
              "formatting" ===
                (null != n && n.context ? String(n.context) : "standalone") &&
              t.formattingValues
            ) {
              var a = t.defaultFormattingWidth || t.defaultWidth,
                o = null != n && n.width ? String(n.width) : a;
              r = t.formattingValues[o] || t.formattingValues[a];
            } else {
              var i = t.defaultWidth,
                s = null != n && n.width ? String(n.width) : t.defaultWidth;
              r = t.values[s] || t.values[i];
            }
            return r[t.argumentCallback ? t.argumentCallback(e) : e];
          };
        }
        function j(t) {
          return function (e) {
            var n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              r = n.width,
              a =
                (r && t.matchPatterns[r]) ||
                t.matchPatterns[t.defaultMatchWidth],
              o = e.match(a);
            if (!o) return null;
            var i,
              s = o[0],
              u =
                (r && t.parsePatterns[r]) ||
                t.parsePatterns[t.defaultParseWidth],
              c = Array.isArray(u)
                ? (function (t, e) {
                    for (var n = 0; n < t.length; n++)
                      if (t[n].test(s)) return n;
                  })(u)
                : (function (t, e) {
                    for (var n in t)
                      if (t.hasOwnProperty(n) && t[n].test(s)) return n;
                  })(u);
            return (
              (i = t.valueCallback ? t.valueCallback(c) : c),
              {
                value: (i = n.valueCallback ? n.valueCallback(i) : i),
                rest: e.slice(s.length),
              }
            );
          };
        }
        const L = {
          code: "en-US",
          formatDistance: function (t, e, n) {
            var r,
              a = B[t];
            return (
              (r =
                "string" == typeof a
                  ? a
                  : 1 === e
                  ? a.one
                  : a.other.replace("{{count}}", e.toString())),
              null != n && n.addSuffix
                ? n.comparison && n.comparison > 0
                  ? "in " + r
                  : r + " ago"
                : r
            );
          },
          formatLong: q,
          formatRelative: function (t, e, n, r) {
            return A[t];
          },
          localize: {
            ordinalNumber: function (t, e) {
              var n = Number(t),
                r = n % 100;
              if (r > 20 || r < 10)
                switch (r % 10) {
                  case 1:
                    return n + "st";
                  case 2:
                    return n + "nd";
                  case 3:
                    return n + "rd";
                }
              return n + "th";
            },
            era: I({
              values: {
                narrow: ["B", "A"],
                abbreviated: ["BC", "AD"],
                wide: ["Before Christ", "Anno Domini"],
              },
              defaultWidth: "wide",
            }),
            quarter: I({
              values: {
                narrow: ["1", "2", "3", "4"],
                abbreviated: ["Q1", "Q2", "Q3", "Q4"],
                wide: [
                  "1st quarter",
                  "2nd quarter",
                  "3rd quarter",
                  "4th quarter",
                ],
              },
              defaultWidth: "wide",
              argumentCallback: function (t) {
                return t - 1;
              },
            }),
            month: I({
              values: {
                narrow: [
                  "J",
                  "F",
                  "M",
                  "A",
                  "M",
                  "J",
                  "J",
                  "A",
                  "S",
                  "O",
                  "N",
                  "D",
                ],
                abbreviated: [
                  "Jan",
                  "Feb",
                  "Mar",
                  "Apr",
                  "May",
                  "Jun",
                  "Jul",
                  "Aug",
                  "Sep",
                  "Oct",
                  "Nov",
                  "Dec",
                ],
                wide: [
                  "January",
                  "February",
                  "March",
                  "April",
                  "May",
                  "June",
                  "July",
                  "August",
                  "September",
                  "October",
                  "November",
                  "December",
                ],
              },
              defaultWidth: "wide",
            }),
            day: I({
              values: {
                narrow: ["S", "M", "T", "W", "T", "F", "S"],
                short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                wide: [
                  "Sunday",
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                ],
              },
              defaultWidth: "wide",
            }),
            dayPeriod: I({
              values: {
                narrow: {
                  am: "a",
                  pm: "p",
                  midnight: "mi",
                  noon: "n",
                  morning: "morning",
                  afternoon: "afternoon",
                  evening: "evening",
                  night: "night",
                },
                abbreviated: {
                  am: "AM",
                  pm: "PM",
                  midnight: "midnight",
                  noon: "noon",
                  morning: "morning",
                  afternoon: "afternoon",
                  evening: "evening",
                  night: "night",
                },
                wide: {
                  am: "a.m.",
                  pm: "p.m.",
                  midnight: "midnight",
                  noon: "noon",
                  morning: "morning",
                  afternoon: "afternoon",
                  evening: "evening",
                  night: "night",
                },
              },
              defaultWidth: "wide",
              formattingValues: {
                narrow: {
                  am: "a",
                  pm: "p",
                  midnight: "mi",
                  noon: "n",
                  morning: "in the morning",
                  afternoon: "in the afternoon",
                  evening: "in the evening",
                  night: "at night",
                },
                abbreviated: {
                  am: "AM",
                  pm: "PM",
                  midnight: "midnight",
                  noon: "noon",
                  morning: "in the morning",
                  afternoon: "in the afternoon",
                  evening: "in the evening",
                  night: "at night",
                },
                wide: {
                  am: "a.m.",
                  pm: "p.m.",
                  midnight: "midnight",
                  noon: "noon",
                  morning: "in the morning",
                  afternoon: "in the afternoon",
                  evening: "in the evening",
                  night: "at night",
                },
              },
              defaultFormattingWidth: "wide",
            }),
          },
          match: {
            ordinalNumber:
              ((O = {
                matchPattern: /^(\d+)(th|st|nd|rd)?/i,
                parsePattern: /\d+/i,
                valueCallback: function (t) {
                  return parseInt(t, 10);
                },
              }),
              function (t) {
                var e =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  n = t.match(O.matchPattern);
                if (!n) return null;
                var r = n[0],
                  a = t.match(O.parsePattern);
                if (!a) return null;
                var o = O.valueCallback ? O.valueCallback(a[0]) : a[0];
                return {
                  value: (o = e.valueCallback ? e.valueCallback(o) : o),
                  rest: t.slice(r.length),
                };
              }),
            era: j({
              matchPatterns: {
                narrow: /^(b|a)/i,
                abbreviated:
                  /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
                wide: /^(before christ|before common era|anno domini|common era)/i,
              },
              defaultMatchWidth: "wide",
              parsePatterns: { any: [/^b/i, /^(a|c)/i] },
              defaultParseWidth: "any",
            }),
            quarter: j({
              matchPatterns: {
                narrow: /^[1234]/i,
                abbreviated: /^q[1234]/i,
                wide: /^[1234](th|st|nd|rd)? quarter/i,
              },
              defaultMatchWidth: "wide",
              parsePatterns: { any: [/1/i, /2/i, /3/i, /4/i] },
              defaultParseWidth: "any",
              valueCallback: function (t) {
                return t + 1;
              },
            }),
            month: j({
              matchPatterns: {
                narrow: /^[jfmasond]/i,
                abbreviated:
                  /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
                wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
              },
              defaultMatchWidth: "wide",
              parsePatterns: {
                narrow: [
                  /^j/i,
                  /^f/i,
                  /^m/i,
                  /^a/i,
                  /^m/i,
                  /^j/i,
                  /^j/i,
                  /^a/i,
                  /^s/i,
                  /^o/i,
                  /^n/i,
                  /^d/i,
                ],
                any: [
                  /^ja/i,
                  /^f/i,
                  /^mar/i,
                  /^ap/i,
                  /^may/i,
                  /^jun/i,
                  /^jul/i,
                  /^au/i,
                  /^s/i,
                  /^o/i,
                  /^n/i,
                  /^d/i,
                ],
              },
              defaultParseWidth: "any",
            }),
            day: j({
              matchPatterns: {
                narrow: /^[smtwf]/i,
                short: /^(su|mo|tu|we|th|fr|sa)/i,
                abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
                wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
              },
              defaultMatchWidth: "wide",
              parsePatterns: {
                narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
                any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
              },
              defaultParseWidth: "any",
            }),
            dayPeriod: j({
              matchPatterns: {
                narrow:
                  /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
                any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
              },
              defaultMatchWidth: "any",
              parsePatterns: {
                any: {
                  am: /^a/i,
                  pm: /^p/i,
                  midnight: /^mi/i,
                  noon: /^no/i,
                  morning: /morning/i,
                  afternoon: /afternoon/i,
                  evening: /evening/i,
                  night: /night/i,
                },
              },
              defaultParseWidth: "any",
            }),
          },
          options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
        };
        var F = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
          H = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
          z = /^'([^]*?)'?$/,
          Q = /''/g,
          G = /[a-zA-Z]/;
        function X(t, e, n) {
          var s, u, c, l, m, f, h, g, w, y, v, b, p, C, T, x, E, M;
          a(2, arguments);
          var N = String(e),
            D = d(),
            S =
              null !==
                (s =
                  null !== (u = null == n ? void 0 : n.locale) && void 0 !== u
                    ? u
                    : D.locale) && void 0 !== s
                ? s
                : L,
            B = i(
              null !==
                (c =
                  null !==
                    (l =
                      null !==
                        (m =
                          null !==
                            (f =
                              null == n ? void 0 : n.firstWeekContainsDate) &&
                          void 0 !== f
                            ? f
                            : null == n ||
                              null === (h = n.locale) ||
                              void 0 === h ||
                              null === (g = h.options) ||
                              void 0 === g
                            ? void 0
                            : g.firstWeekContainsDate) && void 0 !== m
                        ? m
                        : D.firstWeekContainsDate) && void 0 !== l
                    ? l
                    : null === (w = D.locale) ||
                      void 0 === w ||
                      null === (y = w.options) ||
                      void 0 === y
                    ? void 0
                    : y.firstWeekContainsDate) && void 0 !== c
                ? c
                : 1
            );
          if (!(B >= 1 && B <= 7))
            throw new RangeError(
              "firstWeekContainsDate must be between 1 and 7 inclusively"
            );
          var _ = i(
            null !==
              (v =
                null !==
                  (b =
                    null !==
                      (p =
                        null !== (C = null == n ? void 0 : n.weekStartsOn) &&
                        void 0 !== C
                          ? C
                          : null == n ||
                            null === (T = n.locale) ||
                            void 0 === T ||
                            null === (x = T.options) ||
                            void 0 === x
                          ? void 0
                          : x.weekStartsOn) && void 0 !== p
                      ? p
                      : D.weekStartsOn) && void 0 !== b
                  ? b
                  : null === (E = D.locale) ||
                    void 0 === E ||
                    null === (M = E.options) ||
                    void 0 === M
                  ? void 0
                  : M.weekStartsOn) && void 0 !== v
              ? v
              : 0
          );
          if (!(_ >= 0 && _ <= 6))
            throw new RangeError(
              "weekStartsOn must be between 0 and 6 inclusively"
            );
          if (!S.localize)
            throw new RangeError("locale must contain localize property");
          if (!S.formatLong)
            throw new RangeError("locale must contain formatLong property");
          var O = o(t);
          if (
            !(function (t) {
              if (
                (a(1, arguments),
                !(function (t) {
                  return (
                    a(1, arguments),
                    t instanceof Date ||
                      ("object" === r(t) &&
                        "[object Date]" === Object.prototype.toString.call(t))
                  );
                })(t) && "number" != typeof t)
              )
                return !1;
              var e = o(t);
              return !isNaN(Number(e));
            })(O)
          )
            throw new RangeError("Invalid time value");
          var q = (function (t) {
              var e = new Date(
                Date.UTC(
                  t.getFullYear(),
                  t.getMonth(),
                  t.getDate(),
                  t.getHours(),
                  t.getMinutes(),
                  t.getSeconds(),
                  t.getMilliseconds()
                )
              );
              return (
                e.setUTCFullYear(t.getFullYear()), t.getTime() - e.getTime()
              );
            })(O),
            A = (function (t, e) {
              return (
                a(2, arguments),
                (function (t, e) {
                  a(2, arguments);
                  var n = o(t).getTime(),
                    r = i(e);
                  return new Date(n + r);
                })(t, -i(e))
              );
            })(O, q),
            I = {
              firstWeekContainsDate: B,
              weekStartsOn: _,
              locale: S,
              _originalDate: O,
            };
          return N.match(H)
            .map(function (t) {
              var e = t[0];
              return "p" === e || "P" === e ? (0, P[e])(t, S.formatLong) : t;
            })
            .join("")
            .match(F)
            .map(function (r) {
              if ("''" === r) return "'";
              var a,
                o,
                i = r[0];
              if ("'" === i)
                return (o = (a = r).match(z)) ? o[1].replace(Q, "'") : a;
              var s,
                u = k[i];
              if (u)
                return (
                  (null != n && n.useAdditionalWeekYearTokens) ||
                    ((s = r), -1 === W.indexOf(s)) ||
                    Y(r, e, String(t)),
                  (null != n && n.useAdditionalDayOfYearTokens) ||
                    !(function (t) {
                      return -1 !== U.indexOf(t);
                    })(r) ||
                    Y(r, e, String(t)),
                  u(A, r, S.localize, I)
                );
              if (i.match(G))
                throw new RangeError(
                  "Format string contains an unescaped latin alphabet character `" +
                    i +
                    "`"
                );
              return r;
            })
            .join("");
        }
        const $ = "d679f5647a6d4e16a6522939232510";
        async function R(t) {
          const e = await fetch(
              `https://api.weatherapi.com/v1/current.json?key=${$}&q=${t}`,
              { mode: "cors" }
            ),
            n = await e.json();
          console.log(n);
          const r = n.location.name;
          console.log(r);
          const a = n.location.region;
          console.log(a);
          const o = n.location.localtime,
            i = o.split(" ")[0],
            s = o.split(" ")[1];
          let u = i.split("-")[0],
            c = i.split("-")[1],
            d = i.split("-")[2],
            l = s.split(":")[0],
            m = s.split(":")[1];
          const f = X(
            new Date(u, String(parseInt(c) - 1), d, l, m),
            "iiii, do LLL ''yy hh:mm b"
          );
          console.log(f);
          const h = n.current.temp_f;
          console.log(h);
          const g = n.current.condition.text;
          return (
            console.log(g),
            [r, a, f, h, g, n.current.condition.icon.substring(2)]
          );
        }
        async function J(t) {
          const e = await fetch(
              `https://api.weatherapi.com/v1/forecast.json?key=${$}&q=${t}&days=3`,
              { mode: "cors" }
            ),
            n = (await e.json()).forecast;
          return (
            console.log(n),
            [n.forecastday[0], n.forecastday[1], n.forecastday[2]]
          );
        }
      },
    },
    o = {};
  function i(t) {
    var e = o[t];
    if (void 0 !== e) return e.exports;
    var n = (o[t] = { exports: {} });
    return a[t](n, n.exports, i), n.exports;
  }
  (t =
    "function" == typeof Symbol
      ? Symbol("webpack queues")
      : "__webpack_queues__"),
    (e =
      "function" == typeof Symbol
        ? Symbol("webpack exports")
        : "__webpack_exports__"),
    (n =
      "function" == typeof Symbol
        ? Symbol("webpack error")
        : "__webpack_error__"),
    (r = (t) => {
      t &&
        t.d < 1 &&
        ((t.d = 1),
        t.forEach((t) => t.r--),
        t.forEach((t) => (t.r-- ? t.r++ : t())));
    }),
    (i.a = (a, o, i) => {
      var s;
      i && ((s = []).d = -1);
      var u,
        c,
        d,
        l = new Set(),
        m = a.exports,
        f = new Promise((t, e) => {
          (d = e), (c = t);
        });
      (f[e] = m),
        (f[t] = (t) => (s && t(s), l.forEach(t), f.catch((t) => {}))),
        (a.exports = f),
        o(
          (a) => {
            var o;
            u = ((a) =>
              a.map((a) => {
                if (null !== a && "object" == typeof a) {
                  if (a[t]) return a;
                  if (a.then) {
                    var o = [];
                    (o.d = 0),
                      a.then(
                        (t) => {
                          (i[e] = t), r(o);
                        },
                        (t) => {
                          (i[n] = t), r(o);
                        }
                      );
                    var i = {};
                    return (i[t] = (t) => t(o)), i;
                  }
                }
                var s = {};
                return (s[t] = (t) => {}), (s[e] = a), s;
              }))(a);
            var i = () =>
                u.map((t) => {
                  if (t[n]) throw t[n];
                  return t[e];
                }),
              c = new Promise((e) => {
                (o = () => e(i)).r = 0;
                var n = (t) =>
                  t !== s &&
                  !l.has(t) &&
                  (l.add(t), t && !t.d && (o.r++, t.push(o)));
                u.map((e) => e[t](n));
              });
            return o.r ? c : i();
          },
          (t) => (t ? d((f[n] = t)) : c(m), r(s))
        ),
        s && s.d < 0 && (s.d = 0);
    }),
    (i.d = (t, e) => {
      for (var n in e)
        i.o(e, n) &&
          !i.o(t, n) &&
          Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
    }),
    (i.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    i(138);
})();
