(function () {
  try {
    (function () {
      function Gg(a) {
        var c = zd(a, "c"),
          b = xb(a, c),
          d = Qe(a),
          e = aa(a)(db);
        return L(
          function (f, g, h) {
            var k = "sci" + h;
            h = Ik(d.l(k));
            return !h || 1440 < e - h
              ? f.then(function () {
                  return b({ ua: ["sync.cook.int"] }, ["https://" + g], {
                    Rb: 1500,
                  }).then(function () {
                    d.o(k, e);
                  }, B);
                })
              : f;
          },
          K.resolve(),
          Jk
        );
      }
      function Hg(a, c, b) {
        void 0 === b && (b = 0);
        c = Aa(c);
        c = L(
          function (d, e) {
            var f = e[0],
              g = e[1],
              h = Lb(g);
            if (!Ka(g) && !h) return d;
            g =
              b || "yandex_cid" !== f
                ? h
                  ? Hg(a, g, b + 1)
                  : Kk(a, g)
                : K.resolve(g);
            d.push(
              g.then(function (k) {
                return [f, k];
              })
            );
            return d;
          },
          [],
          c
        );
        return K.all(c);
      }
      function Kk(a, c) {
        return new K(function (b, d) {
          var e = new a.TextEncoder().encode(c);
          a.crypto.subtle.digest("SHA-256", e).then(function (f) {
            f = new a.Blob([f], { type: "application/octet-binary" });
            var g = new a.FileReader();
            g.onload = function (h) {
              h = n(h, "target.result");
              var k = (h || "").indexOf(",");
              -1 !== k ? b(h.substring(k + 1)) : d(qc("fpm.i"));
            };
            g.readAsDataURL(f);
          }, d);
        });
      }
      function Lk(a, c, b) {
        a = xa(b);
        b = a[1];
        "track" === a[0] && c({ version: "0", lc: b });
      }
      function Mk(a, c, b) {
        if (b) {
          var d = b.version;
          (b = n(Nk, d + "." + b.lc)) &&
            ((c && F(b, Ok)) || a("ym-" + b + "-" + d));
        }
      }
      function Pk(a) {
        return a.replace(Qk, function (c, b, d, e) {
          return "" + b + e;
        });
      }
      function Ad(a, c) {
        if (!c) return !1;
        var b = P(a);
        return new RegExp(c).test("" + b.pathname + b.hash + b.search);
      }
      function Rk(a, c) {
        return ya(a, c, function (b) {
          var d = n(b, "settings.dr");
          return { vh: Sk(a, d), isEnabled: n(b, "settings.auto_goals") };
        });
      }
      function Tk(a, c) {
        function b() {
          var m = l + "0",
            p = l + "1";
          h[m]
            ? h[p]
              ? ((l = l.slice(0, -1)), --k)
              : ((g[p] = e(8)), (h[p] = 1))
            : ((g[m] = e(8)), (h[m] = 1));
        }
        function d() {
          var m = l + "1";
          h[l + "0"]
            ? h[m]
              ? ((l = l.slice(0, -1)), --k)
              : ((l += "1"), (h[l] = 1))
            : ((l += "0"), (h[l] = 1));
        }
        function e(m) {
          void 0 === m && (m = 1);
          var p = f.slice(k, k + m);
          k += m;
          return p;
        }
        for (
          var f = Ig(a, c, ""), g = {}, h = {}, k = 1, l = "";
          k < f.length - 1;

        )
          ("0" === e() ? d : b)();
        return g;
      }
      function Uk(a, c, b, d, e) {
        b = Re(a, a.document.body, b);
        d = Re(a, a.document.body, d);
        F(e.target, [b, d]) && Se(a, c);
      }
      function Jg(a, c, b, d) {
        (b = Vk(a, d, b)) && Se(a, c, b);
      }
      function Kg(a, c) {
        var b = Lg(a, c);
        return Wk(a, b);
      }
      function Lg(a, c) {
        var b = Re(a, a.document.body, c);
        return b ? Xk(a, b) : "";
      }
      function Se(a, c, b) {
        (c = Ia(a, c)) && c.params(Jc(["__ym", "dr", b || t(Mg, Yk)(a)]));
      }
      function Re(a, c, b) {
        var d = null;
        try {
          d = b ? rc(a, c, b) : d;
        } catch (e) {}
        return d;
      }
      function Ig(a, c, b) {
        try {
          var d = ja(a.atob(c));
          return y(function (e) {
            e = e.charCodeAt(0).toString(2);
            return Ng("0", 8 - e.length) + e;
          }, d).join(b);
        } catch (e) {
          return "";
        }
      }
      function Mg(a) {
        return Ua(a, 10, 99);
      }
      function Xk(a, c) {
        if (!c) return "";
        var b = [],
          d = n(a, "document");
        Te(a, c, function (e) {
          e.nodeType === d.TEXT_NODE && e.textContent
            ? b.push(e.textContent.trim())
            : e instanceof HTMLImageElement && e.alt && b.push(e.alt.trim());
        });
        return 0 === b.length ? "" : b.join(" ");
      }
      function Zk(a, c, b) {
        var d,
          e = Og(a, c),
          f = P(a);
        f = Bd(f.protocol + "//" + f.hostname + f.pathname);
        c = Cd(a, c);
        var g = "";
        do g += Ua(a);
        while (g.length < c.length);
        g = g.slice(0, c.length);
        a = "";
        for (var h = 0; h < c.length; h += 1)
          a += (c.charCodeAt(h) + g.charCodeAt(h) - 96) % 10;
        c = [g, a];
        a = c[0];
        c = c[1];
        return ((d = {}),
        (d.mf =
          "https://adstat.yandex.ru/track?service=metrika&id=" +
          c +
          "&mask=" +
          a +
          "&ref=" +
          f),
        (d.rt = "https://" + e + ".mc.yandex.ru/watch/3/1"),
        d)[b];
      }
      function $k(a, c, b, d) {
        a = n(d, "data");
        if (Ka(a)) {
          var e = a.split("*");
          a = e[0];
          var f = e[1];
          e = e[2];
          "sc.frame" === a
            ? d.source.postMessage("sc.images*" + c, "*")
            : "sc.image" === a && f === c && b(e);
        }
      }
      function al(a, c, b, d) {
        d = n(d, "target");
        (d = Mb("button,input", a, d)) &&
          "submit" === d.type &&
          (d = Pg(a, d)) &&
          (b.push(d), T(a, G([!1, a, c, b, d], Qg), 300));
      }
      function Qg(a, c, b, d, e) {
        var f = yb(c)(e, d),
          g = -1 !== f;
        if (a || g)
          g && d.splice(f, 1),
            (a = Rg(c, e)),
            (a = "?" + Kc(a)),
            (d = G(
              [c, b, "Form goal. Counter " + b.id + ". Form: " + a + "."],
              Sg
            )),
            Dd(c, b, "form", d)(a);
      }
      function Sg(a, c, b) {
        return bl(a, c).then(function (d) {
          d && Nb(a, c, b)();
        });
      }
      function cl(a) {
        a = dl(a);
        return ca(a) ? I("x", a) : a;
      }
      function el(a) {
        return I("x", fl(a) || []);
      }
      function fl(a) {
        var c = n(a, "speechSynthesis.getVoices");
        if (!c) return "";
        a = C(c, a.speechSynthesis);
        return bc(function (b) {
          return y(u(b, n), gl);
        }, a());
      }
      function hl(a) {
        if ((a = il(a)))
          try {
            for (var c = [], b = 0; b < Tg.length; b += 1) {
              var d = a(Tg[b]);
              c.push(d);
            }
            var e = c;
          } catch (f) {
            e = [];
          }
        else e = [];
        return e ? I("x", e) : "";
      }
      function jl(a) {
        var c = kl(a);
        return c
          ? I(
              "x",
              y(function (b) {
                b = c[b];
                return I(
                  "x",
                  y(t(N, ea("concat", ""), u(b, n)), ["matches", "media"])
                );
              }, fa(c))
            )
          : "";
      }
      function ll(a, c) {
        var b = c.ih;
        if (!ml(a, b)) return "";
        var d = [];
        a: {
          var e = nl(a, b);
          try {
            var f = G(e, t)()();
            break a;
          } catch (J) {
            if ("ccf" === J.message) {
              f = null;
              break a;
            }
            kb(J);
          }
          f = void 0;
        }
        if (La(f)) var g = "";
        else
          try {
            g = f.toDataURL();
          } catch (J) {
            g = "";
          }
        (f = g) && d.push(f);
        var h = b.getContextAttributes();
        try {
          var k = Fa(b.getSupportedExtensions, "getSupportedExtensions")
            ? b.getSupportedExtensions() || []
            : [];
        } catch (J) {
          k = [];
        }
        k = I(";", k);
        f = Ue(b.getParameter(b.ALIASED_LINE_WIDTH_RANGE), b);
        e = Ue(b.getParameter(b.ALIASED_POINT_SIZE_RANGE), b);
        g = b.getParameter(b.ALPHA_BITS);
        h = h && h.antialias ? "yes" : "no";
        var l = b.getParameter(b.BLUE_BITS),
          m = b.getParameter(b.DEPTH_BITS),
          p = b.getParameter(b.GREEN_BITS),
          r =
            b.getExtension("EXT_texture_filter_anisotropic") ||
            b.getExtension("WEBKIT_EXT_texture_filter_anisotropic") ||
            b.getExtension("MOZ_EXT_texture_filter_anisotropic");
        if (r) {
          var q = b.getParameter(r.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
          0 === q && (q = 2);
        }
        q = {
          nm: k,
          "webgl aliased line width range": f,
          "webgl aliased point size range": e,
          "webgl alpha bits": g,
          "webgl antialiasing": h,
          "webgl blue bits": l,
          "webgl depth bits": m,
          "webgl green bits": p,
          "webgl max anisotropy": r ? q : null,
          "webgl max combined texture image units": b.getParameter(
            b.MAX_COMBINED_TEXTURE_IMAGE_UNITS
          ),
          "webgl max cube map texture size": b.getParameter(
            b.MAX_CUBE_MAP_TEXTURE_SIZE
          ),
          "webgl max fragment uniform vectors": b.getParameter(
            b.MAX_FRAGMENT_UNIFORM_VECTORS
          ),
          "webgl max render buffer size": b.getParameter(
            b.MAX_RENDERBUFFER_SIZE
          ),
          "webgl max texture image units": b.getParameter(
            b.MAX_TEXTURE_IMAGE_UNITS
          ),
          "webgl max texture size": b.getParameter(b.MAX_TEXTURE_SIZE),
          "webgl max varying vectors": b.getParameter(b.MAX_VARYING_VECTORS),
          "webgl max vertex attribs": b.getParameter(b.MAX_VERTEX_ATTRIBS),
          "webgl max vertex texture image units": b.getParameter(
            b.MAX_VERTEX_TEXTURE_IMAGE_UNITS
          ),
          "webgl max vertex uniform vectors": b.getParameter(
            b.MAX_VERTEX_UNIFORM_VECTORS
          ),
          "webgl max viewport dims": Ue(b.getParameter(b.MAX_VIEWPORT_DIMS), b),
          "webgl red bits": b.getParameter(b.RED_BITS),
          "webgl renderer": b.getParameter(b.RENDERER),
          "webgl shading language version": b.getParameter(
            b.SHADING_LANGUAGE_VERSION
          ),
          "webgl stencil bits": b.getParameter(b.STENCIL_BITS),
          "webgl vendor": b.getParameter(b.VENDOR),
          "webgl version": b.getParameter(b.VERSION),
        };
        Ve(d, q, ": ");
        a: {
          try {
            var v = b.getExtension("WEBGL_debug_renderer_info");
            if (v) {
              var x = {
                "webgl unmasked vendor": b.getParameter(
                  v.UNMASKED_VENDOR_WEBGL
                ),
                "webgl unmasked renderer": b.getParameter(
                  v.UNMASKED_RENDERER_WEBGL
                ),
              };
              break a;
            }
          } catch (J) {}
          x = {};
        }
        Ve(d, x);
        if (!b.getShaderPrecisionFormat) return I("~", d);
        Ve(d, ol(b));
        return I("~", d);
      }
      function Ve(a, c, b) {
        void 0 === b && (b = ":");
        z(function (d) {
          return a.push("" + d[0] + b + d[1]);
        }, Aa(c));
      }
      function pl(a) {
        var c = ql(a);
        return c
          ? L(
              function (b, d, e) {
                d = "" + (e + 1);
                var f = c.supportsVersion;
                return R(f) ? (f.call(c, e + 1) ? b + d : b + "0") : b;
              },
              "",
              rl(19)
            ) + c.canMakePayments()
          : "";
      }
      function ql(a) {
        var c = n(a, "ApplePaySession"),
          b = P(a).protocol;
        return !c || "https:" !== b || zb(a) ? "" : c;
      }
      function sl(a, c) {
        var b = Na(a),
          d = "wv2rf:" + W(c),
          e = c.vb,
          f = We(a),
          g = b.l(d),
          h = c.Ij;
        return S(f) || La(g)
          ? sa(function (k, l) {
              ya(a, c, function (m) {
                var p = n(m, "settings.webvisor.forms");
                p = !n(m, "settings.x3") && p;
                f = We(a) || n(m, "settings.eu");
                b.o(d, Ed(p));
                l({ vb: e, If: !!f, Yf: p, Cg: h });
              });
            })
          : Xe({ vb: e, If: f, Yf: !!Ba(g), Cg: h });
      }
      function tl() {
        var a = L(
          function (c, b) {
            c[b[0]] = { od: 0, fh: 1 / b[1] };
            return c;
          },
          {},
          [
            ["blur", 0.0034],
            ["change", 0.0155],
            ["click", 0.01095],
            ["deviceRotation", 2e-4],
            ["focus", 0.0061],
            ["mousemove", 0.5132],
            ["scroll", 0.4795],
            ["selection", 0.0109],
            ["touchcancel", 2e-4],
            ["touchend", 0.0265],
            ["touchforcechange", 0.0233],
            ["touchmove", 0.1442],
            ["touchstart", 0.027],
            ["zoom", 0.0014],
          ]
        );
        return {
          Yg: function (c) {
            if (c.length)
              return {
                type: "activity",
                data: L(
                  function (b, d) {
                    var e = a[d];
                    return Math.round(b + e.od * e.fh);
                  },
                  0,
                  fa(a)
                ),
              };
          },
          Si: function (c) {
            c && (c = a[c.data.type]) && (c.od += 1);
          },
        };
      }
      function ul(a) {
        if (a.type && a.event)
          switch (a.type) {
            case "page":
              var c = a.data,
                b = c.ya,
                d = c.bd,
                e = c.content;
              delete c.ya;
              delete c.bd;
              delete c.content;
              c = {
                type: "page",
                data: { L: a.L || 0, content: e, ya: b, bd: d, Y: c },
              };
              a.K && (c.K = a.K);
              return c;
            case "event":
              a: {
                c = {
                  type: "event",
                  K: a.K,
                  data: { L: a.L, type: a.event, Y: {} },
                };
                b = A({}, a.data);
                switch (a.event) {
                  case "zoom":
                    c.data.Y = {
                      Jg: { x: 0, y: 0, level: 0 },
                      Lg: b,
                      duration: 1,
                    };
                    break;
                  case "keystroke":
                    c.data.Y = b.Fc;
                    break;
                  case "deviceRotation":
                  case "resize":
                    c.data.Y = b;
                    break;
                  case "windowfocus":
                  case "windowblur":
                  case "focus":
                    c.data.target = b.target;
                    c.data.Y = null;
                    break;
                  case "touchmove":
                  case "touchstart":
                  case "touchend":
                  case "touchcancel":
                  case "touchforcechange":
                  case "scroll":
                  case "change":
                  case "click":
                  case "mousemove":
                  case "mousedown":
                  case "mouseup":
                  case "selection":
                  case "stylechange":
                    c.data.target = b.target;
                    delete b.target;
                    c.data.Y = b;
                    break;
                  case "srcset":
                    a = {
                      type: "mutation",
                      K: a.K,
                      data: {
                        L: a.L,
                        Y: {
                          Aa: [
                            {
                              nd: [
                                {
                                  id: b.target,
                                  ub: { src: { Jc: "", n: b.value, r: !1 } },
                                  wa: 0,
                                },
                              ],
                            },
                          ],
                          index: 0,
                        },
                      },
                    };
                    break a;
                }
                a = c;
              }
              break;
            case "mutation":
              return vl(a);
          }
        return a;
      }
      function vl(a) {
        var c = A({}, a.data),
          b = [];
        switch (a.event) {
          case "tc":
            b = [
              {
                d: [{ id: c.target, ec: { Jc: "", n: c.value }, wa: c.index }],
              },
            ];
            break;
          case "ac":
            b = [
              {
                nd: [
                  {
                    id: c.target,
                    ub: L(
                      function (d, e) {
                        var f = e[1];
                        d[e[0]] = { Jc: "", n: f, r: ka(f) };
                        return d;
                      },
                      {},
                      Aa(c.attributes)
                    ),
                    wa: c.index,
                  },
                ],
              },
            ];
            break;
          case "re":
            b = [
              {
                Ue: y(function (d) {
                  return { id: d, wa: c.index };
                }, c.ga),
              },
            ];
            break;
          case "ad":
            b = [
              {
                Xe: y(function (d) {
                  return {
                    id: d.id,
                    Qf: d.name,
                    Rf: d.Pf,
                    je: d.parent,
                    me: d.oe,
                    ae: d.next,
                    ub: d.attributes,
                    wa: c.index,
                    ec: d.content,
                    Ma: d.hidden,
                  };
                }, c.ga),
              },
            ];
        }
        return {
          type: "mutation",
          K: a.K,
          data: { L: a.L, Y: { Aa: b, index: c.index } },
        };
      }
      function wl(a) {
        return {
          Qh: function () {
            var c = a.document.querySelector("base[href]");
            return c ? c.getAttribute("href") : null;
          },
          Sh: function () {
            if (a.document.doctype) {
              var c = A(
                  { name: "html", publicId: "", systemId: "" },
                  a.document.doctype
                ),
                b = c.publicId,
                d = c.systemId;
              return (
                "<!DOCTYPE " +
                I("", [
                  c.name,
                  b ? ' PUBLIC "' + b + '"' : "",
                  !b && d ? " SYSTEM" : "",
                  d ? ' "' + d + '"' : "",
                ]) +
                ">"
              );
            }
            return null;
          },
          bi: function () {
            try {
              if (!a.sessionStorage) return null;
              var c = a.sessionStorage.getItem("__vw_tab_guid"),
                b = !1;
              try {
                var d = a.opener ? a.opener.sessionStorage : null;
                b = !!d && c === d.getItem("__vw_tab_guid");
              } catch (e) {
                b = !0;
              }
              if (!c || b)
                (c = Ug()), a.sessionStorage.setItem("__vw_tab_guid", c);
              return c;
            } catch (e) {
              return null;
            }
          },
        };
      }
      function xl(a, c, b) {
        var d = Lc(a),
          e = la(a),
          f = zb(a),
          g = c.Hd(),
          h = !n(a, "postMessage") || (f && !n(a, "parent.postMessage")),
          k = u(d, N);
        if (h) {
          if (!g)
            return (
              T(a, C(d.N, d, "i", { na: !1 }), 10), { Gd: k, jg: B, stop: B }
            );
          kb(Va());
        }
        d.C(["sr"], function (q) {
          var v,
            x = Vg(a, q.source);
          x &&
            Ye(
              a,
              q.source,
              ((v = {}), (v.type = "\u043d"), (v.frameId = c.ma().X(x)), v)
            );
        });
        d.C(["sd"], function (q) {
          var v = q.data;
          q = q.source;
          (a === q || Vg(a, q)) && d.N("sdr", { data: v.data, L: v.frameId });
        });
        if (f && !g) {
          var l = !1,
            m = 0,
            p = function () {
              var q;
              Ye(a, a.parent, ((q = {}), (q.type = "sr"), q));
              m = T(a, p, 100, "if.i");
            };
          p();
          var r = function (q) {
            d.da(["\u043d"], r);
            ha(a, m);
            var v = sc(a, q.origin).host;
            l ||
              q.source !== a.parent ||
              !q.data.frameId ||
              ("about:blank" !== P(a).host && !F(v, b)) ||
              ((l = !0), d.N("i", { L: q.data.frameId, na: !0 }));
          };
          d.C(["\u043d"], r);
          T(
            a,
            function () {
              d.da(["\u043d"], r);
              ha(a, m);
              l || ((l = !0), d.N("i", { na: !1 }));
            },
            2e3,
            "if.r"
          );
        }
        e = e.C(a, ["message"], function (q) {
          var v = qb(a, q.data);
          v &&
            v.type &&
            F(v.type, yl) &&
            d.N(v.type, { data: v, source: q.source, origin: q.origin });
        });
        return {
          Gd: k,
          jg: function (q) {
            var v;
            return Ye(
              a,
              a.parent,
              ((v = {}), (v.frameId = c.Hd()), (v.data = q), (v.type = "sd"), v)
            );
          },
          stop: e,
        };
      }
      function Vg(a, c) {
        try {
          return Za(
            t(U("contentWindow"), ta(c)),
            ja(a.document.querySelectorAll("iframe"))
          );
        } catch (b) {
          return null;
        }
      }
      function Ye(a, c, b) {
        a = eb(a, b);
        c.postMessage(a, "*");
      }
      function Ug() {
        return (
          Ob() +
          Ob() +
          "-" +
          Ob() +
          "-" +
          Ob() +
          "-" +
          Ob() +
          "-" +
          Ob() +
          Ob() +
          Ob()
        );
      }
      function Ob() {
        return Math.floor(65536 * (1 + Math.random()))
          .toString(16)
          .substring(1);
      }
      function zl(a, c) {
        if (Ka(c)) return c;
        var b = a.textContent;
        if (Ka(b)) return b;
        b = a.data;
        if (Ka(b)) return b;
        b = a.nodeValue;
        return Ka(b) ? b : "";
      }
      function Al(a, c, b, d, e) {
        void 0 === d && (d = {});
        void 0 === e && (e = Ca(c));
        var f = A(
          L(
            function (h, k) {
              h[k.name] = k.value;
              return h;
            },
            {},
            ja(c.attributes)
          ),
          d
        );
        A(f, Bl(c, e, f));
        var g =
          (d = L(
            function (h, k) {
              var l = k[0],
                m = Fd(a, c, l, k[1], b, e),
                p = m.value;
              ka(p) ? delete f[l] : (f[l] = p);
              return h || m.fb;
            },
            !1,
            Aa(f)
          )) && Mc(c);
        g && ((f.width = g.width), (f.height = g.height));
        return { fb: d, ah: f };
      }
      function Bl(a, c, b) {
        var d = {};
        Ze(a)
          ? (d.value = a.value || b.value)
          : "IMG" !== c || b.src || (d.src = "");
        return d;
      }
      function Fd(a, c, b, d, e, f) {
        void 0 === f && (f = Ca(c));
        var g = { fb: !1, value: d };
        if (Ze(c))
          "value" === b
            ? !ka(d) &&
              "" !== d &&
              ((b = e.If),
              (f = e.Yf),
              (e = Nc(a, c)),
              f
                ? ((b = Oc(a, c, b)),
                  (a = b.Rd),
                  (c = b.Cd),
                  (b = b.ib),
                  (g.fb = !c && (e || a)))
                : ((g.fb = e), (b = !Gd(c))),
              b || e) &&
              (g.value = I("", y(u("\u2022", N), ("" + d).split(""))))
            : "checked" === b &&
              F((c.getAttribute("type") || "").toLowerCase(), Cl)
            ? (g.value = c.checked ? "checked" : null)
            : Dl.test(b) && $e(a, c) && (g.value = null);
        else if ("IMG" === f && "src" === b)
          (e = Nc(a, c))
            ? ((g.fb = e),
              (g.value =
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="))
            : (g.value =
                (c.getAttribute("srcset") ? c.currentSrc : "") || c.src);
        else if ("A" === f && "href" === b) g.value = d ? "#" : "";
        else if (
          F(b, ["srcset", "integrity", "crossorigin", "password"]) ||
          (2 < b.length && 0 === Wg(b, "on")) ||
          ("IFRAME" === f && "src" === b) ||
          ("SCRIPT" === f && F(b, ["src", "type"]))
        )
          g.value = null;
        return g;
      }
      function af(a, c, b, d) {
        void 0 === d && (d = "wv2");
        return {
          G: function (e, f) {
            return D(a, d + "." + b + "." + f, e, void 0, c);
          },
        };
      }
      function El(a, c) {
        var b = a.document;
        if (F(b.readyState, ["interactive", "complete"])) Ab(a, c);
        else {
          var d = la(a),
            e = d.C,
            f = d.Sb,
            g = function () {
              f(b, ["DOMContentLoaded"], g);
              f(a, ["load"], g);
              c();
            };
          e(b, ["DOMContentLoaded"], g);
          e(a, ["load"], g);
        }
      }
      function Fl(a, c) {
        var b = Gl(a),
          d = qa(a, "r", c),
          e = D(a, "rts.p");
        return ya(
          a,
          c,
          C(
            L,
            null,
            function (f, g) {
              var h = { id: g.qh, aa: g.aa };
              h = d({ $: g.dj, H: ua(g.eh), F: g.T, Nb: g.Nb }, h, g.jj)[
                "catch"
              ](e);
              return f.then(u(h, N));
            },
            K.resolve(""),
            b
          )
        )["catch"](e);
      }
      function Xg(a, c, b) {
        c = Pc(a, void 0, c);
        c = Yg(a, c.l("phc_settings") || "");
        var d = n(c, "clientId"),
          e = n(c, "orderId"),
          f = n(c, "service_id"),
          g = n(c, "phones") || [];
        return d && e && g
          ? Hl(a, b.ac, { Ag: Il })
              .$f(g)
              .then(function (h) {
                return Jl(b, { xb: d, Ib: e, og: f }, h.ha, g, h.ra);
              })
              ["catch"](function () {})
          : K.resolve();
      }
      function Il(a, c, b) {
        a = Kl(b.Tc);
        if ("href" === b.xe) {
          var d = b.mb;
          c = d.href;
          b = c.replace(a, b.Sa);
          if (c !== b) return (d.href = b), !0;
        } else if (
          (a =
            null === (d = b.mb.textContent) || void 0 === d
              ? void 0
              : d.replace(a, b.Sa)) &&
          a !== b.mb.textContent
        )
          return (b.mb.textContent = a), !0;
        return !1;
      }
      function Jl(a, c, b, d, e) {
        var f;
        c.xb &&
          c.Ib &&
          ((c.xb === a.xb && c.Ib === a.Ib) || A(a, c, { ha: {}, Za: !0 }),
          0 < e && Wa(a.ra, [e]),
          z(function (g) {
            var h,
              k,
              l = g[0];
            g = g[1];
            var m = +(a.ha[l] && a.ha[l][g] ? a.ha[l][g] : 0);
            A(a.ha, ((h = {}), (h[l] = ((k = {}), (k[g] = m), k)), h));
          }, d),
          z(function (g) {
            var h,
              k,
              l = g[0];
            g = g[1];
            var m = 1 + (a.ha[l] ? a.ha[l][g] : 0);
            A(a.ha, ((h = {}), (h[l] = ((k = {}), (k[g] = m), k)), h));
          }, b),
          a.Kf &&
            (a.Za || b.length) &&
            ((c = Ia(a.b, a.ac)) &&
              c.params(
                "__ym",
                "phc",
                ((f = {}),
                (f.clientId = a.xb),
                (f.orderId = a.Ib),
                (f.service_id = a.og),
                (f.phones = a.ha),
                (f.performance = a.ra),
                f)
              ),
            (a.Za = !1)));
      }
      function Ll(a, c) {
        try {
          var b = c.origin;
        } catch (e) {}
        if (b) {
          var d = Pa(t($a, sa(b)), [
            /^http:\/\/([\w\-.]+\.)?webvisor\.com\/?$/,
            /^https:\/\/([\w\-.]+\.)?metri[kc]a\.yandex\.(ru|ua|by|kz|com|com\.tr)\/?$/,
          ]);
          b = F(b.replace(/\/?$/, "/"), Ml);
          if (d || b)
            (d = qb(a, c.data)),
              "appendremote" === n(d, "action") && Nl(a, c, d);
        }
      }
      function Zg(a, c) {
        var b,
          d,
          e,
          f,
          g = c.data;
        g = void 0 === g ? "" : g;
        var h = c.id;
        h = void 0 === h ? "" : h;
        var k = O(a),
          l = {};
        l.getCachedTags = $g;
        l.form =
          ((b = {}),
          (b.closest = u(a, Pg)),
          (b.select = u(a, Ol)),
          (b.getData = u(a, Rg)),
          b);
        l.button =
          ((d = {}),
          (d.closest = u(a, ah)),
          (d.select = u(a, bh)),
          (d.getData = u(a, ch)),
          d);
        l.phone = ((e = {}), (e.hidePhones = G([a, null, [g]], dh)), e);
        l.status = ((f = {}), (f.checkStatus = G([a, Ba(h)], Pl)), f);
        k.o("_u", l);
        b = c.lang;
        b = void 0 === b ? "" : b;
        d = c.appVersion;
        d = void 0 === d ? "" : d;
        e = c.fileId;
        e = void 0 === e ? "" : e;
        f = c.beta;
        f = void 0 === f ? !1 : f;
        d = I(".", t(fb(t(N, Ba)), tc(Boolean))(d.split(".")));
        F(e, Ql) && F(b, ["ru", "en", "tr"])
          ? ((b =
              (f
                ? "https://s3.mds.yandex.net/internal-metrika-betas"
                : "https://yastatic.net/s3/metrika") +
              (d ? "/" + d : "") +
              "/form-selector/" +
              (e + "_" + b + ".js")),
            (b = Rl(b) ? b : ""))
          : (b = "");
        b && uc(a, { src: b });
      }
      function Sl(a, c) {
        var b = ab(a);
        if (b) {
          b = b("div");
          var d = Pb(a);
          if (d) {
            b.innerHTML =
              '<iframe name="RemoteIframe" allowtransparency="true" style="position: absolute; left: -999px; top: -999px; width: 1px; height: 1px;"></iframe>';
            var e = b.firstChild;
            e.onload = function () {
              uc(e.contentWindow, { src: c });
            };
            a._ym__remoteIframeEl = e;
            d.appendChild(b);
            b.removeChild(e);
            var f = null;
            b.attachShadow
              ? (f = b.attachShadow({ mode: "open" }))
              : b.createShadowRoot
              ? (f = b.createShadowRoot())
              : b.webkitCreateShadowRoot && (f = b.webkitCreateShadowRoot());
            f
              ? f.appendChild(e)
              : (d.appendChild(e), (a._ym__remoteIframeContainer = e));
          }
        }
      }
      function Pl(a) {
        var c,
          b = eh(a);
        a = O(a).l("getCounters", Hd)();
        a = y(U("id"), a);
        return (c = { id: b }), (c.counterFound = !!b && F(b, a)), c;
      }
      function dh(a, c, b) {
        var d;
        c = fh(a, c, { Ag: Tl, Li: ((d = {}), (d.href = !0), d) });
        b = V(
          Boolean,
          y(function (f) {
            return "*" === f ? f : Qc(f);
          }, b)
        );
        var e = y(t(N, ea("concat", [""]), Ul("reverse"), Ma), b);
        b = Rc(a);
        d = gh(a, b, 1e3);
        c = C(c.$f, c, e, !1);
        d.C(c);
        Vl(a, b);
        hh(a, b);
        c();
      }
      function Tl(a, c, b) {
        var d = ab(a),
          e = b.mb,
          f = b.Tc,
          g = e.parentNode,
          h = e.textContent;
        if ("text" === b.xe && h && d && g) {
          b = d("small");
          ih(b);
          var k = h.split(""),
            l = h.replace(/\s/g, "").length;
          z(
            ea("appendChild", b),
            L(
              function (m, p) {
                var r = m.ga,
                  q = m.Hg,
                  v = d("small");
                v.innerHTML = p;
                var x = Wl.test(p);
                ih(v);
                x && (v.style.opacity = "" + (l - q - 1) / l);
                r.push(v);
                return { ga: r, Hg: q + (x ? 1 : 0) };
              },
              { ga: [], Hg: 0 },
              k
            ).ga
          );
          Xl(a, c, b, f);
          g.insertBefore(b, e);
          e.textContent = "";
          return !0;
        }
        return !1;
      }
      function Xl(a, c, b, d) {
        function e() {
          z(u(["style", "opacity", ""], Jc), ja(b.childNodes));
          if (c) {
            var k = Ia(a, c);
            k && k.extLink("tel:" + d, {});
          }
          g();
          h();
        }
        var f = la(a),
          g = B,
          h = B;
        g = f.C(b, ["mouseenter"], function (k) {
          if (k.target === b) {
            var l = T(a, e, 200, "ph.h.e");
            (h || B)();
            h = f.C(b, ["mouseleave"], function (m) {
              m.target === b && ha(a, l);
            });
          }
        });
      }
      function hh(a, c) {
        return Id(a).then(function () {
          var b,
            d = a.document.body,
            e =
              ((b = {}),
              (b.attributes = !0),
              (b.childList = !0),
              (b.subtree = !0),
              b);
          ma("MutationObserver", a.MutationObserver) &&
            new MutationObserver(c.N).observe(d, e);
        });
      }
      function Vl(a, c) {
        return la(a).C(a, ["load"], c.N);
      }
      function fh(a, c, b) {
        function d(k) {
          var l;
          return f(a, c, k)
            ? null === (l = h[k.Tc]) || void 0 === l
              ? void 0
              : l.fd
            : null;
        }
        var e,
          f = b.Ag;
        b = b.Li;
        var g = void 0 === b ? ((e = {}), (e.href = !0), (e.text = !0), e) : b,
          h;
        return {
          $f: function (k) {
            return new K(function (l, m) {
              (k && k.length) || m();
              h = jh()(k);
              l(
                Id(a)
                  .then(function () {
                    var p = aa(a),
                      r = p(Y),
                      q = g.href ? Yl(a, h) : [],
                      v = g.text ? kh(a, h) : [];
                    return {
                      ha: V(ca, V(Boolean, y(d, q.concat(v)))),
                      ra: p(Y) - r,
                    };
                  })
                  ["catch"](function () {
                    return { ha: [], ra: 0 };
                  })
              );
            });
          },
        };
      }
      function Yl(a, c) {
        var b = a.document.body;
        if (!b) return [];
        var d = lh(c);
        return L(
          function (e, f) {
            var g = n(f, "href");
            try {
              var h = decodeURI(g || "");
            } catch (p) {
              h = "";
            }
            if ("tel:" === h.slice(0, 4)) {
              var k = (d.exec(h) || [])[0],
                l = k ? Qc(k) : "",
                m = c[l];
              S(m) ||
                (!l && "*" !== m.fd[0]) ||
                (e.push({
                  xe: "href",
                  mb: f,
                  Tc: l,
                  Sa: mh(k, c[l].Sa),
                  xj: g,
                }),
                (g = Qc(h.slice(4))),
                (l = jh()([l ? m.fd : [g, ""]])),
                e.push.apply(e, kh(a, l, f)));
            }
            return e;
          },
          [],
          ja(b.querySelectorAll("a"))
        );
      }
      function kh(a, c, b) {
        void 0 === b && (b = a.document.body);
        if (!b) return [];
        var d = [],
          e = lh(c);
        Te(
          a,
          b,
          function (f) {
            if (
              f !== b &&
              "script" !== (n(f, "parentNode.nodeName") || "").toLowerCase()
            ) {
              var g = V(Boolean, e.exec(f.textContent || "") || []);
              z(function (h) {
                var k = Qc(h);
                S(c[k]) ||
                  d.push({
                    xe: "text",
                    mb: f,
                    Tc: k,
                    Sa: mh(h, c[k].Sa),
                    xj: f.textContent || "",
                  });
              }, g);
            }
          },
          function (f) {
            return e.test(f.textContent || "") ? 1 : 0;
          },
          a.NodeFilter.SHOW_TEXT
        );
        return d;
      }
      function jh() {
        return vc(function (a, c) {
          var b = y(Qc, c),
            d = b[0];
          b = b[1];
          a[d] = { Sa: b, fd: c };
          var e = nh(d);
          e !== d && (a[e] = { Sa: nh(b), fd: c });
          return a;
        }, {});
      }
      function mh(a, c) {
        for (
          var b = [], d = a.split(""), e = c.split(""), f = 0, g = 0;
          g < a.length && !(f >= e.length);
          g += 1
        ) {
          var h = d[g];
          "0" <= h && "9" >= h ? (b.push(e[f]), (f += 1)) : b.push(d[g]);
        }
        return I("", b) + c.slice(f + 1);
      }
      function nh(a) {
        var c = { 7: "8", 8: "7" };
        return 11 === a.length && c[a[0]] ? "" + c[a[0]] + a.slice(1) : a;
      }
      function lh(a) {
        return new RegExp("(?:" + I("|", y(oh, fa(a))) + ")");
      }
      function ph(a, c, b, d) {
        if (c) {
          var e = [];
          c &&
            (a.document.documentElement.contains(c)
              ? Te(a, c, ea("push", e), d)
              : Wa(e, qh(a, c, d)));
          z(b, e);
        }
      }
      function Te(a, c, b, d, e) {
        function f(g) {
          return R(d)
            ? d(g)
              ? a.NodeFilter.FILTER_ACCEPT
              : a.NodeFilter.FILTER_REJECT
            : a.NodeFilter.FILTER_ACCEPT;
        }
        void 0 === e && (e = -1);
        if (R(b) && f(c) === a.NodeFilter.FILTER_ACCEPT && (b(c), !bf(c)))
          for (
            c = a.document.createTreeWalker(
              c,
              e,
              d ? { acceptNode: f } : null,
              !1
            );
            c.nextNode() && !1 !== b(c.currentNode);

          );
      }
      function qh(a, c, b) {
        var d = [],
          e = t(N, ea("push", d));
        R(b)
          ? ((b = b(c)), (ka(b) || b === a.NodeFilter.FILTER_ACCEPT) && e(c))
          : e(c);
        if (c.childNodes && 0 < c.childNodes.length) {
          c = c.childNodes;
          b = 0;
          for (var f = c.length; b < f; b += 1) {
            var g = qh(a, c[b]);
            z(e, g);
          }
        }
        return d;
      }
      function Id(a, c) {
        function b(e) {
          n(c, d) ? e() : T(a, u(e, b), 100);
        }
        void 0 === c && (c = a);
        var d = (c.nodeType ? "contentWindow." : "") + "document.body";
        return new K(b);
      }
      function Zl(a, c) {
        function b(e) {
          n(c, d) ? e() : T(a, u(e, b), 100);
        }
        void 0 === c && (c = a);
        var d = (c.nodeType ? "contentWindow." : "") + "document.body";
        return sa(function (e, f) {
          b(f);
        });
      }
      function Rg(a, c, b) {
        return rh(a, c, ["i", "n", "p"], void 0, b);
      }
      function Jd(a, c, b) {
        return function (d) {
          var e,
            f,
            g = Ia(c, b);
          g &&
            $l(a, d, c) &&
            ((g = C(g.params, g)),
            (d = cf(a, d, "goods")) &&
              g &&
              g(((e = {}), (e.__ym = ((f = {}), (f.ecommerce = [d]), f)), e)));
        };
      }
      function am(a, c, b) {
        var d, e;
        var f = n(b, "ecommerce") || {};
        var g = n(b, "event") || "";
        f = (g = sh[g]) ? cf(g, f, "items") : void 0;
        if (!f)
          a: {
            f = b;
            !ca(b) && Kd(a, cc(b)) && (f = xa(f));
            if (ca(f) && ((a = sh[f[1]]), "event" === f[0] && a)) {
              f = cf(a, f[2], "items");
              break a;
            }
            f = void 0;
          }
        (b = f || bm(b)) &&
          c &&
          c(((d = {}), (d.__ym = ((e = {}), (e.ecommerce = [b]), e)), d));
      }
      function bm(a) {
        var c = n(a, "ecommerce") || {};
        a = V(Qb(cm), fa(c));
        a = L(
          function (b, d) {
            b[d] = c[d];
            return b;
          },
          {},
          a
        );
        return fa(a).length ? a : void 0;
      }
      function $l(a, c, b) {
        var d = !1,
          e = "";
        if (!Lb(c)) return Bb(b, "Ecommerce data should be an object"), d;
        var f = c.goods;
        switch (a) {
          case "detail":
          case "add":
          case "remove":
            ca(f) && f.length
              ? (d = df(function (g) {
                  return Lb(g) && (Ka(g.id) || Kd(b, g.id) || Ka(g.name));
                }, f)) ||
                (e =
                  "All items in 'goods' should be objects and contain 'id' or 'name' field")
              : (e = "Ecommerce data should contain 'goods' non-empty array");
            break;
          case "purchase":
            Kd(b, c.id) || Ka(c.id)
              ? (d = !0)
              : (e =
                  "Purchase object should contain string or number 'id' field");
        }
        Bb(b, e);
        return d;
      }
      function cf(a, c, b) {
        var d, e;
        if (c) {
          var f = c.purchase || c;
          c = fa(f);
          var g = f[b];
          if (g) {
            var h =
              ((d = {}), (d[a] = ((e = {}), (e.products = y(dm, g)), e)), d);
            1 < c.length &&
              (h[a].actionField = L(
                function (k, l) {
                  if (l === b) return k;
                  if ("currency" === l) return (h.currencyCode = f.currency), k;
                  k[ef[l] || l] = f[l];
                  return k;
                },
                {},
                c
              ));
            return h;
          }
        }
      }
      function dm(a) {
        var c = {};
        z(function (b) {
          var d = ef[b] || b;
          -1 !== b.indexOf("item_category")
            ? ((d = ef.item_category),
              (c[d] = c[d] ? c[d] + ("/" + a[b]) : a[b]))
            : (c[d] = a[b]);
        }, fa(a));
        return c;
      }
      function em(a, c) {
        var b = th(a),
          d = W(c),
          e = b[d];
        e || ((e = {}), (b[d] = e));
        e.ti = !0;
        if ((b = e.pg)) (d = uh(a)), z(d, b);
      }
      function fm(a, c, b, d) {
        var e;
        if ((a = Ia(a, b))) {
          var f = d.data;
          b = "" + b.id;
          var g = d.sended || [];
          d.sended || (d.sended = g);
          F(b, g) ||
            !a.params ||
            (d.counter && "" + d.counter !== b) ||
            (a.params(f),
            g.push(b),
            d.parent && c.mg(((e = {}), (e.type = "params"), (e.data = f), e)));
        }
      }
      function gm(a) {
        var c = B,
          b = null,
          d = a.length;
        if (0 !== a.length && a[0]) {
          var e = a.slice(-1)[0];
          R(e) && ((c = e), (d = a.length + -1));
          var f = a.slice(-2)[0];
          R(f) && ((c = f), (b = e), (d = a.length + -2));
          d = a.slice(0, d);
          return { sh: b, Ua: c, T: 1 === d.length ? a[0] : Jc(d) };
        }
      }
      function vh(a, c, b) {
        var d = n(a, "AppMetricaInitializer"),
          e = n(d, "init");
        if (e)
          try {
            C(e, d)(eb(a, c));
          } catch (f) {}
        else wh = T(a, G([a, c, 2 * b], vh), b, "ai.d");
        return function () {
          return ha(a, wh);
        };
      }
      function hm(a, c, b) {
        if (b && ((b = ah(a, b)), (b = ch(a, b)))) {
          b = "?" + Kc(b);
          var d = Nb(
            a,
            c,
            "Button goal. Counter " + c.id + ". Button: " + b + "."
          );
          Dd(a, c, "btn", d)(b);
        }
      }
      function im(a, c) {
        var b = Na(a);
        if ("" !== b.l("cc")) return 0;
        var d = u("cc", b.o);
        d(0);
        var e = aa(a),
          f = O(a);
        f = t(
          U(Qa({ Vc: 1 }) + ".c"),
          Sc(function (g) {
            d(g + "&" + e(db));
          }),
          u("cc", f.o)
        );
        qa(
          a,
          "6",
          c
        )({})
          .then(f)
          ["catch"](
            t(
              Sc(function () {
                var g = e(db);
                b.o("cc", "&" + g);
              }),
              D(a, "cc")
            )
          );
      }
      function jm(a, c) {
        var b;
        a(((b = {}), (b.clickmap = S(c) ? !0 : c), b));
      }
      function km(a, c, b, d, e) {
        function f() {
          k && k.stop();
        }
        if (!c.Ta) return K.resolve(B);
        var g = qa(a, "4", c),
          h = { F: { "wv-type": "0" }, H: ua() };
        b = new lm(a, b, function (l, m, p) {
          if (!g) return K.resolve();
          m = "wv-data=" + xh(l, !0);
          for (var r = l.length, q = 0, v = 255, x = 255, J, X, ra; r; ) {
            J = 21 < r ? 21 : r;
            r -= J;
            do
              (X = "string" === typeof l ? l.charCodeAt(q) : l[q]),
                (q += 1),
                255 < X && ((ra = X >> 8), (X &= 255), (X ^= ra)),
                (v += X),
                (x += v);
            while (--J);
            v = (v & 255) + (v >> 8);
            x = (x & 255) + (x >> 8);
          }
          l = (((v & 255) + (v >> 8)) << 8) | ((x & 255) + (x >> 8));
          return g(
            A({}, h, {
              $: m,
              F: { "wv-check": 65535 === l ? 0 : l, "wv-type": "0" },
            }),
            c,
            p
          )["catch"](D(a, "m.n.m.s"));
        });
        var k = mm(a, b, d, e);
        return ya(a, c, function (l) {
          l && O(a).o("isEU", n(l, "settings.eu"));
          !ff(a) && k && yh(a, l) && k.start();
          return f;
        });
      }
      function yh(a, c) {
        var b = Rb(a),
          d = b.l("visorc");
        F(d, ["w", "b"]) || (d = "");
        (zh(a) && Ah(a, Ld, "visorc") && !nm.test(lb(a) || "")) || (d = "b");
        var e = n(c, "settings.webvisor.recp");
        if (!a.isFinite(e) || 0 > e || 1 < e) d = "w";
        d || (d = (O(a).l("hitId") % 1e4) / 1e4 < e ? "w" : "b");
        b.o("visorc", d, 30);
        return "w" === d;
      }
      function mm(a, c, b, d) {
        var e = a.document,
          f = [],
          g = la(a),
          h = ":submit" + Math.random(),
          k = [],
          l = C(c.flush, c),
          m = da(function (q, v) {
            D(a, "hfv." + q, function () {
              try {
                var x = v.type;
              } catch (J) {
                return;
              }
              x = F(x, d);
              c.push(v, { type: q });
              x && l();
            })();
          }),
          p = D(a, "sfv", function () {
            if (!gf(a)) {
              var q = b(a),
                v = om(a);
              z(function (x) {
                f.push(g.C(x.target, [x.event], m(x.type)));
              }, q);
              z(function (x) {
                f.push(
                  g.C(
                    x.target,
                    [x.event],
                    D(a, "hff." + x.type + "." + x.event, function (J) {
                      z(sa({ b: a, ia: J, flush: l }), x.M);
                    })
                  )
                );
              }, v);
              k = Bh(a, "form", e);
              e.attachEvent &&
                ((q = Bh(a, "form *", e)),
                z(function (x) {
                  f.push(g.C(x, ["submit"], m("form")));
                }, k),
                z(function (x) {
                  hf(x) && f.push(g.C(x, ["change"], m("formInput")));
                }, q));
              z(function (x) {
                var J = x.submit;
                if (R(J) || ("object" === typeof J && pm.test("" + J)))
                  (x[h] = J),
                    (x.submit = D(a, "fv", function () {
                      var X = { target: x, type: "submit" };
                      m("document")(X);
                      return x[h]();
                    }));
              }, k);
            }
          }),
          r = D(a, "ufv", function () {
            z(Ma, f);
            z(function (q) {
              q && (q.submit = q[h]);
            }, k);
            c.flush();
          });
        return { start: p, stop: r };
      }
      function qm(a, c) {
        var b = V(function (e) {
            return 0 < e.M.length;
          }, c),
          d = Ch({ target: a.document, type: "document" });
        return y(t(N, d, rm(a)), b);
      }
      function Dh(a, c) {
        var b = a.b,
          d = [],
          e = c.form;
        if (!c[Oa] && e) {
          var f = e.elements;
          e = e.length;
          for (var g = 0; g < e; g += 1) {
            var h = f[g];
            Md(h) && !h[Oa] && Wa(d, dc(b, h));
          }
        } else Wa(d, dc(b, c));
        return d;
      }
      function jf(a) {
        if (Tc) {
          Tc = !1;
          var c = mb(a.b),
            b = [];
          bb(a.b, b, 15) ? (a = []) : (Q(b, c), (a = b));
          return a;
        }
      }
      function Eh(a) {
        if (!Tc) {
          Tc = !0;
          a = mb(a.b);
          var c = [];
          Cb(c, 14);
          Q(c, a);
          return c;
        }
      }
      function sm(a, c, b) {
        var d = c[Oa];
        if (d) {
          a: {
            var e = mb(a),
              f = c[Oa];
            if (0 < f) {
              var g = [];
              c = kf(a, c);
              var h = ec[f],
                k = c[0] + "x" + c[1],
                l = c[2] + "x" + c[3];
              if (k !== h.Vf) {
                h.Vf = k;
                if (bb(a, g, 9)) {
                  a = [];
                  break a;
                }
                Q(g, e);
                Q(g, f);
                Q(g, c[0]);
                Q(g, c[1]);
              }
              if (l !== h.size) {
                h.size = l;
                if (bb(a, g, 10)) {
                  a = [];
                  break a;
                }
                Q(g, e);
                Q(g, f);
                Q(g, c[2]);
                Q(g, c[3]);
              }
              if (g.length) {
                a = g;
                break a;
              }
            }
            a = [];
          }
          Wa(b, a);
        }
        return d;
      }
      function Oc(a, c, b) {
        void 0 === b && (b = !1);
        if ("button" === c.getAttribute("type"))
          return { ib: !1, Cd: !1, Rd: !1 };
        var d = Gd(c),
          e = lf(c);
        a = Fh(a, c) || (b && e);
        return { ib: !(d || !a), Cd: d, Rd: e };
      }
      function Fh(a, c) {
        return $e(a, c) || Uc(a, c) ? !0 : Nc(a, c);
      }
      function lf(a) {
        if (!a) return !1;
        var c = a.placeholder,
          b = a.type;
        a = V(Gh, [a.className, a.id, a.name]);
        return (b && F(b, tm)) || Pa($a(um), a) || (Gh(c) && vm.test(c));
      }
      function Gh(a) {
        return !!(a && 2 < a.length);
      }
      function Ze(a) {
        try {
          var c = Ca(a);
          if (F(c, mf)) {
            if ("INPUT" === c) {
              var b = a.type;
              return !b || F(b.toLocaleLowerCase(), wm);
            }
            return !0;
          }
        } catch (d) {}
        return !1;
      }
      function Hh(a, c) {
        return c && fc("(ym-disable-submit|-metrika-noform)", c);
      }
      function Gd(a) {
        return a && fc("ym-record-keys", a);
      }
      function xm(a, c) {
        return I(
          "",
          y(function (b) {
            return a.isNaN(b)
              ? zm.test(b)
                ? ((b = b.toUpperCase() === b ? Am : Bm),
                  String.fromCharCode(Ua(a, b[0], b[1])))
                : b
              : "" + Ua(a, 0, 9);
          }, c.split(""))
        );
      }
      function Nc(a, c) {
        if (ka(c)) return !1;
        if (bf(c)) {
          var b = c.parentNode;
          return (ka(b) ? 0 : 11 === b.nodeType) ? !1 : Nc(a, c.parentNode);
        }
        if (Cm.test(c.className)) return !0;
        b = Ih(a);
        if (!b) return !1;
        var d = b.call(c, ".ym-hide-content *");
        return d &&
          (Dm.test(c.className) ||
            b.call(c, ".ym-hide-content .ym-show-content *"))
          ? !1
          : d;
      }
      function Em(a, c, b, d, e) {
        var f;
        c = {
          H: ua(),
          F: ((f = {}), (f["page-url"] = c), (f["pointer-click"] = b), f),
        };
        d(c, e)["catch"](D(a, "c.s.c"));
      }
      function Fm(a, c, b, d, e) {
        if (Vc(a, "ymDisabledClickmap") || gf(a) || !c || !c.element) return !1;
        a = Ca(c.element);
        if (
          (e && !e(c.element, a)) ||
          (F(c.button, [2, 3]) && "A" !== a) ||
          Pa(ta(a), d)
        )
          return !1;
        d = c.element;
        if (c && b) {
          if (50 > c.time - b.time) return !1;
          e = Math.abs(b.position.x - c.position.x);
          a = Math.abs(b.position.y - c.position.y);
          c = c.time - b.time;
          if (b.element === d && 2 > e && 2 > a && 1e3 > c) return !1;
        }
        for (; d; ) {
          if (Gm(d)) return !1;
          d = d.parentElement;
        }
        return !0;
      }
      function Hm(a, c) {
        var b = null;
        try {
          if ((b = c.target || c.srcElement))
            !b.ownerDocument && b.documentElement
              ? (b = b.documentElement)
              : b.ownerDocument !== a.document && (b = null);
        } catch (d) {}
        return b;
      }
      function Im(a) {
        var c = a.which;
        a = a.button;
        return c || void 0 === a
          ? c
          : 1 === a || 3 === a
          ? 1
          : 2 === a
          ? 3
          : 4 === a
          ? 2
          : 0;
      }
      function Jh(a, c) {
        var b = Pb(a),
          d = nf(a);
        return {
          x: c.pageX || c.clientX + d.x - (b.clientLeft || 0) || 0,
          y: c.pageY || c.clientY + d.y - (b.clientTop || 0) || 0,
        };
      }
      function Jm(a) {
        var c = D(a, "i.clch", Km);
        la(a).C(a.document, ["click"], C(c, null, a), { passive: !1 });
        return function (b) {
          var d = na.Ka,
            e = a.Ya[na.Zb],
            f = !!e._informer;
          e._informer = A({ domain: "informer.yandex.ru" }, b);
          f || uc(a, { src: d + "//informer.yandex.ru/metrika/informer.js" });
        };
      }
      function Lm(a) {
        var c = void 0;
        void 0 === c && (c = Mm);
        var b = n(a, "navigator") || {};
        c = y(u(b, n), c);
        c = I("x", c);
        try {
          var d = n(a, "navigator.getGamepads");
          var e = (Fa(d, "getGamepads") && a.navigator.getGamepads()) || [];
        } catch (f) {
          e = [];
        }
        return c + "x" + cc(e);
      }
      function Nm(a) {
        try {
          var c = cc(a) ? a : [];
          return I(",", [
            a.name,
            a.description,
            t(ja, tc(Boolean), fb(Om), Wc(","))(c),
          ]);
        } catch (b) {
          return "";
        }
      }
      function Om(a) {
        return I(",", [a.description, a.suffixes, a.type]);
      }
      function ol(a) {
        return L(
          function (c, b) {
            var d = b[0],
              e = b[1];
            c[d + " precision"] = n(e, "precision") || "n";
            c[d + " precision rangeMin"] = n(e, "rangeMin") || "n";
            c[d + " precision rangeMax"] = n(e, "rangeMax") || "n";
            return c;
          },
          {},
          [
            [
              "webgl vertex shader high float",
              a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_FLOAT),
            ],
            [
              "webgl vertex shader medium",
              a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_FLOAT),
            ],
            [
              "webgl vertex shader low float",
              a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_FLOAT),
            ],
            [
              "webgl fragment shader high float",
              a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_FLOAT),
            ],
            [
              "webgl fragment shader medium float",
              a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_FLOAT),
            ],
            [
              "webgl fragment shader low float",
              a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_FLOAT),
            ],
            [
              "webgl vertex shader high int",
              a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_INT),
            ],
            [
              "webgl vertex shader medium int",
              a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_INT),
            ],
            [
              "webgl vertex shader low int",
              a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_INT),
            ],
            [
              "webgl fragment shader high int",
              a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_INT),
            ],
            [
              "webgl fragment shader medium int",
              a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_INT),
            ],
            [
              "webgl fragment shader low int precision",
              a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_INT),
            ],
          ]
        );
      }
      function nl(a, c) {
        return [
          function () {
            var b = c.createBuffer();
            (b && c.getParameter && ma("getParameter", c.getParameter)) || of();
            c.bindBuffer(c.ARRAY_BUFFER, b);
            var d = new a.Float32Array(Pm);
            c.bufferData(c.ARRAY_BUFFER, d, c.STATIC_DRAW);
            b.Bi = 3;
            b.Pi = 3;
            d = c.createProgram();
            var e = c.createShader(c.VERTEX_SHADER);
            (d && e) || of();
            return { ue: d, Sj: e, Rj: b };
          },
          function (b) {
            var d = b.ue,
              e = b.Sj;
            c.shaderSource(
              e,
              "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}"
            );
            c.compileShader(e);
            c.attachShader(d, e);
            (d = c.createShader(c.FRAGMENT_SHADER)) || of();
            return A(b, { Oh: d });
          },
          function (b) {
            var d = b.ue,
              e = b.Oh;
            c.shaderSource(
              e,
              "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}"
            );
            c.compileShader(e);
            c.attachShader(d, e);
            c.linkProgram(d);
            c.useProgram(d);
            return b;
          },
          function (b) {
            var d = b.ue;
            b = b.Rj;
            d.Qj = c.getAttribLocation(d, "attrVertex");
            d.Ri = c.getUniformLocation(d, "uniformOffset");
            c.enableVertexAttribArray(d.Hm);
            c.vertexAttribPointer(d.Qj, b.Bi, c.FLOAT, !1, 0, 0);
            c.uniform2f(d.Ri, 1, 1);
            c.drawArrays(c.TRIANGLE_STRIP, 0, b.Pi);
            return c.canvas;
          },
        ];
      }
      function ml(a, c) {
        if (!R(a.Float32Array)) return !1;
        var b = n(c, "canvas");
        if (!b || !ma("toDataUrl", b.toDataURL)) return !1;
        try {
          c.createBuffer();
        } catch (d) {
          return !1;
        }
        return !0;
      }
      function Ue(a, c) {
        c.clearColor(0, 0, 0, 1);
        c.enable(c.DEPTH_TEST);
        c.depthFunc(c.LEQUAL);
        c.clear(c.COLOR_BUFFER_BIT | c.DEPTH_BUFFER_BIT);
        return "[" + n(a, "0") + ", " + n(a, "1") + "]";
      }
      function Qm(a) {
        a = n(a, "screen") || {};
        return I("x", y(u(a, n), Rm));
      }
      function kl(a) {
        var c = n(a, "matchMedia");
        if (!c || !ma("matchMedia", c)) return "";
        var b = ea("matchMedia", a);
        return L(
          function (d, e) {
            d[e] = b("(" + e + ")");
            return d;
          },
          {},
          Sm
        );
      }
      function dl(a) {
        a = ab(a);
        if (!a) return "";
        a = a("video");
        try {
          var c = ea("canPlayType", a),
            b = bc(function (d) {
              return y(t(N, ea("concat", d + "; codecs=")), Tm);
            }, Kh);
          return y(c, [].concat(Kh, b));
        } catch (d) {
          return "canPlayType";
        }
      }
      function Um(a) {
        a = n(a, "navigator") || {};
        return a.doNotTrack || a.msDoNotTrack || "unknown";
      }
      function Lh(a, c, b) {
        var d = b.Va,
          e = aa(a),
          f = Vm(a, c.userData, d),
          g = Wm(a);
        return g.length
          ? Xm(a, e, f, c, b).then(function () {
              return Ym(a, g, f, e, b);
            }, B)
          : K.resolve();
      }
      function Wm(a) {
        var c = Xc(a);
        a = t(pf, Qb(["iPhone", "iPad"]))(a);
        return c ? Zm : a ? $m : [];
      }
      function Ym(a, c, b, d, e) {
        var f = e.wj,
          g = void 0 === f ? B : f,
          h = e.Wd,
          k = d(Y);
        return an(
          a,
          c,
          e
        )(
          Sb(
            function (l) {
              z(function (m) {
                m && Nd(a, h + ".s", m);
              }, l);
              l = d(db);
              b.o(h, l);
            },
            function (l) {
              b.o(h, d(db));
              g(l, d, k);
            }
          )
        );
      }
      function Xm(a, c, b, d, e) {
        var f = e.Wd,
          g = e.Va;
        return new K(function (h, k) {
          var l = b.l(f, 0);
          l = parseInt("" + l, 10);
          return 60 >= c(db) - l
            ? k()
            : bn(a)
            ? h(void 0)
            : Mh(d)
            ? k()
            : h(cn(a, g));
        });
      }
      function an(a, c, b) {
        var d = b.Kb,
          e = b.data,
          f = qa(a, d, b.Va);
        a = A({}, Nh);
        e && A(a.F, e);
        return dn(
          y(function (g) {
            return en(
              f(
                Nh,
                y(function (h) {
                  var k = h[1],
                    l = h[2];
                  h = I(
                    "",
                    y(function (m) {
                      return String.fromCharCode(m.charCodeAt(0) + 10);
                    }, h[0].split(""))
                  );
                  return (
                    "http" + (l ? "s" : "") + "://" + h + ":" + k + "/" + fn[d]
                  );
                }, g),
                { Ig: !1, lj: !0 }
              ).then(function (h) {
                return A({}, h, { host: g[h.Oj] });
              })
            );
          }, c)
        );
      }
      function Vm(a, c, b) {
        var d = c || {},
          e = qa(a, "u", b),
          f = Na(a);
        return {
          l: function (g, h) {
            return S(d[g]) ? f.l(g, h) : d[g];
          },
          o: function (g, h) {
            var k,
              l = "" + h;
            d[g] = l;
            f.o(g, l);
            return e(
              { F: ((k = {}), (k.key = g), (k.value = l), k) },
              [na.Ka + "//mc.yandex.ru/user_storage_set"],
              {}
            )["catch"](D(a, "u.d.s.s"));
          },
        };
      }
      function gn(a, c) {
        if (a.Gj()) {
          var b = null;
          try {
            b = c.target || c.srcElement;
          } catch (v) {}
          if (b) {
            3 === b.nodeType && (b = b.parentNode);
            for (
              var d = b && b.nodeName && ("" + b.nodeName).toLowerCase();
              n(b, "parentNode.nodeName") &&
              (("a" !== d && "area" !== d) ||
                (!b.href && !b.getAttribute("xlink:href")));

            )
              d =
                (b = b.parentNode) &&
                b.nodeName &&
                ("" + b.nodeName).toLowerCase();
            var e = b.href ? b : null;
          } else e = null;
          if (e && !fc("ym-disable-tracklink", e)) {
            var f = a.b,
              g = a.globalStorage;
            b = a.rh;
            var h = a.Va,
              k = a.ri,
              l = a.sender,
              m = a.Gh,
              p = h.qc,
              r = e.href;
            d = Db(e && e.innerHTML && e.innerHTML.replace(/<\/?[^>]+>/gi, ""));
            d = r === d ? "" : d;
            if (fc("ym-external-link", e))
              Od(f, h, { url: r, Eb: !0, title: d, sender: l });
            else {
              p = p ? sc(f, p).hostname : P(f).hostname;
              m = RegExp("\\.(" + I("|", y(hn, m)) + ")$", "i");
              var q = e.protocol + "//" + e.hostname + e.pathname;
              m = Oh.test(q) || Oh.test(r) || m.test(r) || m.test(q);
              e = e.hostname;
              Ph(p) === Ph(e)
                ? m
                  ? Od(f, h, { url: r, Cc: !0, title: d, sender: l })
                  : ((k = (f = g.l("pai", B)()) && f + "-" + k) &&
                      b.o("pai", k),
                    d && b.o("il", Db(d).slice(0, 100)))
                : (r && jn.test(r)) ||
                  Od(f, h, {
                    url: r,
                    Hc: !0,
                    Eb: !0,
                    Cc: m,
                    title: d,
                    sender: l,
                  });
            }
          }
        }
      }
      function Od(a, c, b, d) {
        var e,
          f = ua();
        b.Cc && f.o("dl", "1");
        b.Eb && f.o("ln", "1");
        f = {
          H: f,
          title: b.title,
          Hc: !!b.Hc,
          T: b.T,
          F:
            ((e = {}),
            (e["page-url"] = b.url),
            (e["page-ref"] = c.qc || P(a).href),
            e),
        };
        e = "Link";
        b.Cc
          ? (e = b.Eb ? "Ext link - File" : "File")
          : b.Eb && (e = "Ext link");
        c = b
          .sender(f, c)
          .then(d || B)
          .then(Nb(a, c, e + ". Counter " + c.id + ". Url: " + b.url, b));
        return wc(a, "cl.p.s", c, b.Ua || B, b.b);
      }
      function kn(a, c) {
        var b,
          d,
          e =
            ((b = {}), (b.string = !0), (b.object = !0), (b["boolean"] = c), b)[
              typeof c
            ] || !1;
        a(((d = {}), (d.trackLinks = e), d));
      }
      function ln(a, c, b, d) {
        var e = P(a),
          f = e.hostname;
        e = e.href;
        if ((c = Yc(c).url)) (a = sc(a, c)), (f = a.hostname), (e = a.href);
        return [d + "://" + f + "/" + b, e || ""];
      }
      function Pd(a, c) {
        return function (b) {
          Qh(a, c, b);
        };
      }
      function mn(a, c) {
        qf(a)(function (b) {
          delete b[c];
        });
      }
      function Qh(a, c, b) {
        qf(a)(function (d) {
          d[c] = A(d[c] || {}, b);
        });
      }
      function nn(a, c) {
        var b = {};
        qf(a)(function (d) {
          b = d[c] || {};
        });
        return b;
      }
      function qf(a) {
        a = O(a);
        var c = a.l("dsjf") || sa({});
        a.Fa("dsjf", c);
        return c;
      }
      function Rh(a) {
        return !!Za(function (c) {
          return F(c.type, ["articleInfo", "publishersHeader"]);
        }, a);
      }
      function Sh(a) {
        var c = rf(a).isEnabled,
          b = !1;
        try {
          b =
            (b = 2 === new a.Blob(["\u00e4"]).size) &&
            2 === new a.Blob([new a.Uint8Array([1, 2])]).size;
        } catch (d) {}
        return df(Boolean, [
          !c,
          b,
          a.Uint8Array,
          n(a, "Uint8Array.prototype.slice"),
        ]);
      }
      function sf(a, c) {
        var b = c[1][3],
          d = 0,
          e = new a.Uint8Array(c[0]);
        return gc([b], function (f, g) {
          if (!f) return e;
          f[0](a, f[2], e, d);
          d += f[1];
          g.push(f[3]);
          return e;
        });
      }
      function Qd(a, c, b) {
        a = c(b);
        c = [B, 0, 0];
        var d = [0, c, c, void 0];
        return gc(a, function (e, f) {
          var g = e[0],
            h = e[1],
            k = e[2];
          if (0 === g) return k(d, h), d;
          if (void 0 === h || null === h) return d;
          var l = g >> 3;
          if (g & 1)
            hc(d, gb(l)), (h = k(h)), l & 2 && hc(d, gb(h[1])), hc(d, h);
          else if (g & 4)
            for (g = h.length - 1; 0 <= g; ) {
              var m = k(h[g]);
              m.push([0, 0, tf]);
              m.push([0, gb(l), hc]);
              m.unshift([0, 0, uf]);
              f.push.apply(f, m);
              --g;
            }
          else if (g & 2) {
            k = e[2];
            var p = e[3],
              r = e[4],
              q = e[5],
              v = fa(h);
            for (g = v.length - 1; 0 <= g; )
              (m = v[g]),
                (m = [
                  [0, 0, uf],
                  [r, h[m], q],
                  [k, m, p],
                  [0, 0, tf],
                  [0, gb(l), hc],
                ]),
                f.push.apply(f, m),
                --g;
          } else
            (m = k(h)),
              m.push([0, 0, tf]),
              m.push([0, gb(l), hc]),
              m.unshift([0, 0, uf]),
              f.push.apply(f, m);
          return d;
        });
      }
      function uf(a) {
        var c = a[1],
          b = a[0],
          d = a[2];
        a[3]
          ? ((a[0] = a[3][0]),
            (a[1] = a[3][1]),
            (a[2] = a[3][2]),
            (a[3] = a[3][3]))
          : ((a[0] = 0), (a[1] = [B, 0, 0]), (a[2] = a[1]));
        hc(a, gb(b));
        b && ((a[2][3] = c[3]), (a[2] = d), (a[0] += b));
      }
      function tf(a) {
        a[3] = [a[0], a[1], a[2], a[3]];
        a[1] = [B, 0, 0];
        a[2] = a[1];
        a[0] = 0;
      }
      function hc(a, c) {
        a[0] += c[1];
        a[2][3] = c;
        a[2] = c;
      }
      function vf(a) {
        return [
          [385, a.Wg, gb],
          [336, a.gj, on],
          [272, a.Zg, pn],
          [208, a.event, qn],
          [144, a.Ji, rn],
          [80, a.page, sn],
        ];
      }
      function tn(a) {
        return [
          [321, a.end, Eb],
          [273, a.nh, un],
          [193, a.page, H],
          [144, a.data, vf],
          [65, a.K, H],
        ];
      }
      function Th(a) {
        return [[84, a.buffer, tn]];
      }
      function vn(a) {
        return [
          [129, a.position, H],
          [81, a.name, M],
        ];
      }
      function wn(a) {
        return [[81, a.name, M]];
      }
      function xn(a) {
        return [[81, a.name, M]];
      }
      function pn(a) {
        return [
          [593, a.Mj, M],
          [532, a.mj, vn],
          [449, a.$e, H],
          [401, a.fj, M],
          [340, a.Aj, wn],
          [276, a.bh, xn],
          [209, a.bj, M],
          [145, a.cj, M],
          [65, a.id, gb],
        ];
      }
      function yn(a) {
        return [
          [513, a.$e, H],
          [489, a.Gi, Zc],
          [385, a.eb, H],
          [321, a.height, H],
          [257, a.width, H],
          [193, a.y, H],
          [129, a.x, H],
          [65, a.id, gb],
        ];
      }
      function on(a) {
        return [
          [129, a.eb, H],
          [84, a.$g, yn],
        ];
      }
      function zn(a) {
        return [[81, a.hash, M]];
      }
      function An(a) {
        return [
          [209, a.stack, M],
          [145, a.Bh, M],
          [81, a.code, M],
        ];
      }
      function Bn(a) {
        return [
          [193, a.orientation, H],
          [129, a.height, H],
          [65, a.width, H],
        ];
      }
      function Cn(a) {
        return [[84, a.Fc, Dn]];
      }
      function Dn(a) {
        return [
          [273, a.Gc, M],
          [193, a.Jf, Eb],
          [145, a.key, M],
          [65, a.id, H],
        ];
      }
      function En(a) {
        return [
          [145, a.value, M],
          [81, a.Am, M],
        ];
      }
      function Fn(a) {
        return [
          [149, a.Wb, M],
          [81, a.method, M],
        ];
      }
      function Gn(a) {
        return [
          [257, a.kb, H],
          [193, a.lb, H],
          [129, a.height, H],
          [65, a.width, H],
        ];
      }
      function Hn(a) {
        return [
          [144, a.Lg, Uh],
          [80, a.Jg, Uh],
        ];
      }
      function Uh(a) {
        return [
          [193, a.y, H],
          [129, a.x, H],
          [105, a.level, Zc],
        ];
      }
      function In(a) {
        return [[84, a.touches, Jn]];
      }
      function Jn(a) {
        return [
          [297, a.force, Zc],
          [233, a.y, Zc],
          [169, a.x, Zc],
          [81, a.id, M],
        ];
      }
      function Kn(a) {
        return [
          [193, a.hidden, Eb],
          [129, a.checked, Eb],
          [81, a.value, M],
        ];
      }
      function Ln(a) {
        return [
          [257, a.ff, H],
          [193, a.qg, H],
          [129, a.end, H],
          [65, a.start, H],
        ];
      }
      function Mn() {
        return [];
      }
      function Nn(a) {
        return [
          [193, a.page, Eb],
          [129, a.y, H],
          [65, a.x, H],
        ];
      }
      function On(a) {
        return [
          [129, a.y, H],
          [65, a.x, H],
        ];
      }
      function Pn(a) {
        return [[84, a.Aa, Qn]];
      }
      function Qn(a) {
        return [
          [257, a.index, H],
          [209, a.ie, M],
          [145, a.style, M],
          [65, a.target, H],
        ];
      }
      function qn(a) {
        return [
          [1168, a.uj, Pn],
          [1104, a.oi, zn],
          [1040, a.Fh, An],
          [976, a.uh, Bn],
          [912, a.Di, Cn],
          [848, a.ij, Gn],
          [784, a.Wj, Hn],
          [720, a.Bm, En],
          [656, a.xm, Fn],
          [592, a.Bj, In],
          [528, a.jh, Kn],
          [464, a.pj, Ln],
          [400, a.Tj, Mn],
          [336, a.nj, Nn],
          [272, a.Hi, On],
          [193, a.L, Rd],
          [129, a.target, Rd],
          [65, a.type, gb],
        ];
      }
      function rn(a) {
        return [
          [257, a.L, Rd],
          [208, a.Y, Rn],
          [129, a.K, H],
          [65, a.target, H],
        ];
      }
      function Rn(a) {
        return [
          [148, a.Aa, Sn],
          [65, a.index, H],
        ];
      }
      function Sn(a) {
        return [
          [276, a.d, Tn],
          [212, a.nd, Un],
          [148, a.Xe, Vn],
          [84, a.Ue, Wn],
        ];
      }
      function Tn(a) {
        return [
          [193, a.wa, H],
          [144, a.ec, Vh],
          [65, a.id, H],
        ];
      }
      function Un(a) {
        return [
          [193, a.wa, H],
          [146, a.ub, 81, M, 144, Vh],
          [65, a.id, H],
        ];
      }
      function Vh(a) {
        return [
          [193, a.r, Eb],
          [145, a.n, M],
          [81, a.Jc, M],
        ];
      }
      function Vn(a) {
        return [
          [641, a.Ma, Eb],
          [577, a.wa, H],
          [513, a.ae, H],
          [465, a.ec, M],
          [402, a.ub, 81, M, 145, M],
          [321, a.me, H],
          [273, a.Rf, M],
          [193, a.je, H],
          [145, a.Qf, M],
          [65, a.id, H],
        ];
      }
      function Wn(a) {
        return [
          [321, a.wa, H],
          [257, a.je, H],
          [193, a.ae, H],
          [129, a.me, H],
          [65, a.id, H],
        ];
      }
      function sn(a) {
        return [
          [321, a.ya, Xn],
          [273, a.bd, M],
          [193, a.L, Rd],
          [148, a.content, Yn],
          [80, a.Y, Zn],
        ];
      }
      function Yn(a) {
        return [
          [513, a.hidden, Eb],
          [449, a.oe, H],
          [385, a.next, H],
          [337, a.content, M],
          [257, a.parent, H],
          [210, a.attributes, 81, M, 145, M],
          [145, a.name, M],
          [65, a.id, H],
        ];
      }
      function Zn(a) {
        return [
          [724, a.tm, $n],
          [656, a.location, ao],
          [592, a.viewport, Wh],
          [528, a.screen, Wh],
          [449, a.Bf, Eb],
          [401, a.Ye, M],
          [337, a.referrer, M],
          [273, a.Dg, M],
          [209, a.Ve, M],
          [145, a.title, M],
          [81, a.doctype, M],
        ];
      }
      function $n(a) {
        return [
          [133, a.scroll, H],
          [65, a.target, H],
        ];
      }
      function ao(a) {
        return [
          [209, a.path, M],
          [145, a.protocol, M],
          [81, a.host, M],
        ];
      }
      function Wh(a) {
        return [
          [129, a.height, H],
          [65, a.width, H],
        ];
      }
      function M(a) {
        var c = bo({}, a, [], 0);
        return c ? [co, c, a] : [Xh, 1, 0];
      }
      function un(a) {
        return [eo, a.length, a];
      }
      function Eb(a) {
        return [Xh, 1, a ? 1 : 0];
      }
      function Xn(a) {
        a = Yh(a);
        var c = a[0],
          b = a[1],
          d = ((b >>> 28) | (c << 4)) >>> 0;
        c >>>= 24;
        return [
          Zh,
          0 === c
            ? 0 === d
              ? 16384 > b
                ? 128 > b
                  ? 1
                  : 2
                : 2097152 > b
                ? 3
                : 4
              : 16384 > d
              ? 128 > d
                ? 5
                : 6
              : 2097152 > d
              ? 7
              : 8
            : 128 > c
            ? 9
            : 10,
          a,
        ];
      }
      function Zc(a) {
        return [fo, 4, a];
      }
      function Rd(a) {
        return gb(((a << 1) ^ (a >> 31)) >>> 0);
      }
      function H(a) {
        return 0 > a ? [Zh, 10, Yh(a)] : gb(a);
      }
      function gb(a) {
        return [
          go,
          128 > a ? 1 : 16384 > a ? 2 : 2097152 > a ? 3 : 268435456 > a ? 4 : 5,
          a,
        ];
      }
      function go(a, c, b, d) {
        for (a = c; 127 < a; ) (b[d++] = (a & 127) | 128), (a >>>= 7);
        b[d] = a;
      }
      function Xh(a, c, b, d) {
        b[d] = c;
      }
      function eo(a, c, b, d) {
        for (a = 0; a < c.length; ++a) b[d + a] = c[a];
      }
      function $h(a) {
        return function (c, b, d, e) {
          for (var f, g = 0, h = 0; h < b.length; ++h)
            if (((c = b.charCodeAt(h)), 128 > c)) a ? (g += 1) : (d[e++] = c);
            else {
              if (2048 > c) {
                if (a) {
                  g += 2;
                  continue;
                }
                d[e++] = (c >> 6) | 192;
              } else {
                if (
                  55296 === (c & 64512) &&
                  56320 === ((f = b.charCodeAt(h + 1)) & 64512)
                ) {
                  if (a) {
                    g += 4;
                    continue;
                  }
                  c = 65536 + ((c & 1023) << 10) + (f & 1023);
                  ++h;
                  d[e++] = (c >> 18) | 240;
                  d[e++] = ((c >> 12) & 63) | 128;
                } else {
                  if (a) {
                    g += 3;
                    continue;
                  }
                  d[e++] = (c >> 12) | 224;
                }
                d[e++] = ((c >> 6) & 63) | 128;
              }
              d[e++] = (c & 63) | 128;
            }
          return a ? g : e;
        };
      }
      function fo(a, c, b, d) {
        return ho(a)(a, c, b, d);
      }
      function io(a, c, b, d) {
        var e = 0 > c ? 1 : 0;
        e && (c = -c);
        if (0 === c) $c(0 < 1 / c ? 0 : 2147483648, b, d);
        else if (a.isNaN(c)) $c(2143289344, b, d);
        else if (3.4028234663852886e38 < c)
          $c(((e << 31) | 2139095040) >>> 0, b, d);
        else if (1.1754943508222875e-38 > c)
          $c(((e << 31) | a.Math.round(c / 1.401298464324817e-45)) >>> 0, b, d);
        else {
          var f = a.Math.floor(a.Math.log(c) / Math.LN2);
          $c(
            ((e << 31) |
              ((f + 127) << 23) |
              (Math.round(c * a.Math.pow(2, -f) * 8388608) & 8388607)) >>>
              0,
            b,
            d
          );
        }
      }
      function $c(a, c, b) {
        c[b] = a & 255;
        c[b + 1] = (a >>> 8) & 255;
        c[b + 2] = (a >>> 16) & 255;
        c[b + 3] = a >>> 24;
      }
      function Zh(a, c, b, d) {
        a = c[0];
        for (c = c[1]; a; )
          (b[d++] = (c & 127) | 128),
            (c = ((c >>> 7) | (a << 25)) >>> 0),
            (a >>>= 7);
        for (; 127 < c; ) (b[d++] = (c & 127) | 128), (c >>>= 7);
        b[d++] = c;
      }
      function Yh(a) {
        if (!a) return [0, 0];
        var c = 0 > a;
        c && (a = -a);
        var b = a >>> 0;
        a = ((a - b) / 4294967296) >>> 0;
        c &&
          ((a = ~a >>> 0),
          (b = ~b >>> 0),
          4294967295 < ++b && ((b = 0), 4294967295 < ++a && (a = 0)));
        return [a, b];
      }
      function Sd(a) {
        return ca(a)
          ? y(Sd, a)
          : ka(a) || "object" !== typeof a
          ? a
          : L(
              function (c, b) {
                var d = b[0],
                  e = b[1],
                  f = jo[d];
                S(f) && (f = d);
                e = F(f, ko) ? e : Sd(e);
                f ? (c[f] = e) : (c[d] = e);
                return c;
              },
              {},
              Aa(a)
            );
      }
      function wc(a, c, b, d, e) {
        var f = C(wf, null, a, d, e);
        return b.then(f, function (g) {
          f();
          Nd(a, c, g);
        });
      }
      function Nb(a, c, b, d) {
        return ai(c)
          ? B
          : u(G(va([a], d ? [b + ". Params:", d] : [b]), Bb), Ma);
      }
      function Bb() {
        var a = xa(arguments),
          c = a.slice(1);
        Td(a[0]).log.apply(Bb, c);
      }
      function rf(a) {
        var c = Rb(a),
          b = P(a);
        c = "1" === c.l("debug");
        b = -1 < b.href.indexOf("_ym_debug=1");
        a = a._ym_debug;
        return { li: c, xi: a || b, isEnabled: Pa(Boolean, [c, a, b]) };
      }
      function lo(a, c, b) {
        var d;
        (d = wa[c]) || (d = Ja);
        d = d.slice();
        d.unshift(mo);
        d.unshift(no);
        return y(t(bi([a, c, b]), Ma), d);
      }
      function ci(a, c) {
        var b = P(a),
          d = b.href,
          e = b.host,
          f = -1;
        if (!Ka(c) || S(c)) return d;
        b = c.replace(di, "");
        if (-1 !== b.search(oo)) return b;
        var g = b.charAt(0);
        if (
          ("?" === g && ((f = d.search(/\?/)), -1 === f)) ||
          ("#" === g && ((f = d.search(/#/)), -1 === f))
        )
          return d + b;
        if (-1 !== f) return d.substr(0, f) + b;
        if ("/" === g) {
          if (((f = d.indexOf(e)), -1 !== f))
            return d.substr(0, f + e.length) + b;
        } else return (d = d.split("/")), (d[d.length - 1] = b), I("/", d);
        return "";
      }
      function ei(a) {
        return {
          ba: function (c, b) {
            if (!c.H) return b();
            var d = O(a).l("fid");
            !fi && d && (Ud(c, "fid", d), (fi = !0));
            return b();
          },
        };
      }
      function gi(a) {
        return {
          ba: function (c, b) {
            var d = c.H;
            if (d) {
              var e = O(a).l("adBlockEnabled");
              e && d.o("adb", e);
            }
            b();
          },
        };
      }
      function no(a) {
        return {
          ba: function (c, b) {
            ff(a) || b();
          },
        };
      }
      function po(a) {
        a = qo(a);
        return ro[a] || a;
      }
      function so(a) {
        a = hi(a);
        return to[a] || "ru";
      }
      function mo(a, c, b) {
        return {
          ba: function (d, e) {
            uo(a, d, b, e);
          },
        };
      }
      function uo(a, c, b, d) {
        var e = c.H;
        if (b.Uj || !e) d();
        else {
          var f = Vd(a),
            g = Pc(a, "");
          d = t(function () {
            var q = ii(f);
            q = "" + q + vo(q, g);
            e.o("gdpr", q);
            Ud(c, "gdpr", q);
          }, d);
          if (3 === b.id) d();
          else {
            var h = O(a),
              k = h.l("f1");
            if (k) k(d);
            else if (
              ((k = (k = ii(f)) ? y(u(Wd, n), k.split(",")) : []), ji(k))
            )
              d();
            else {
              var l = Xd(a),
                m = P(a),
                p =
                  l &&
                  (-1 !== m.href.indexOf("yagdprcheck=1") ||
                    g.l("yaGdprCheck"));
              m = g.l("gdpr");
              g.l("yandex_login")
                ? (k.push("13"), g.o("gdpr", xc, 525600))
                : l
                ? F(m, Tb)
                  ? m === xf
                    ? k.push("12")
                    : k.push("3")
                  : yf(a) || ad(a)
                  ? k.push("17")
                  : wo(a) && k.push("28")
                : k.push("14");
              var r = u(f, xo);
              ji(k)
                ? (z(r, k), d())
                : (Yd.push(d),
                  h.o("f1", function (q, v) {
                    var x = 0;
                    if (v) {
                      var J = eb(a, v) || "";
                      x += J.length;
                    }
                    Yd.push(q);
                    1e6 >= x && Yd.push(q);
                  }),
                  (0, zf[0])(a)
                    .then(U("params.eu"))
                    .then(function (q) {
                      if (q || p) {
                        g.o("gdpr_popup", xf);
                        yo(a, b);
                        if (zb(a)) return zo(a, r, b);
                        var v = ki(a, f);
                        if (v)
                          return (q = Ao(a, r, v, b)), q.then(G([a, b], Bo)), q;
                      }
                      q || r("8");
                      return K.resolve({ value: xc, Sd: !0 });
                    })
                    .then(function (q) {
                      g.ic("gdpr_popup");
                      if (q) {
                        var v = q.value;
                        q = q.Sd;
                        F(v, Tb) && g.o("gdpr", v, q ? void 0 : 525600);
                      }
                      v = gc(Yd, Ma);
                      ic(a, v, 20)(Sb(D(a, "gdr"), B));
                      h.o("f1", Ma);
                    })
                    ["catch"](D(a, "gdp.a")));
            }
          }
        }
      }
      function Bo(a, c) {
        if (Xd(a)) {
          var b = Vd(a),
            d = Ia(a, c);
          d = d && d.params;
          b = y(u(Co, n), Af(b));
          d && b.length && d("gdpr", V(Boolean, b));
        }
      }
      function Ia(a, c) {
        var b = O(a).l("counters", {}),
          d = W(c);
        return b[d];
      }
      function zo(a, c, b) {
        var d = Zd(a, b);
        return new K(function (e) {
          var f;
          if (d) {
            var g = d.Z,
              h = t(u("4", c), u(null, e)),
              k = T(a, h, 2e3, "gdp.f.t");
            d.mg(((f = {}), (f.type = "isYandex"), f))
              .then(function (l) {
                l.isYandex
                  ? (c("5"),
                    g.C(
                      va(["GDPR-ok-view-default", "GDPR-ok-view-detailed"], Bf),
                      function (m) {
                        e({ value: li(m[1].type) });
                      }
                    ))
                  : (c("6"), e(null));
              })
              ["catch"](h)
              .then(G([a, k], ha));
          } else e({ value: xf, Sd: !0 });
        });
      }
      function yo(a, c) {
        var b = Zd(a, c);
        b &&
          b.Z.C(["isYandex"], function () {
            var d;
            return (d = { type: "isYandex" }), (d.isYandex = Xd(a)), d;
          });
        return b;
      }
      function Ao(a, c, b, d) {
        var e = Do(a, d.Vj),
          f = Zd(a, d);
        if (!f) return K.resolve({ value: xc, Sd: !0 });
        var g = uc(a, {
          src:
            "https://yastatic.net/s3/gdpr/popup/v2/" +
            e +
            "_inversed_buttons.js",
        });
        return new K(function (h, k) {
          g
            ? (c("7"),
              (g.onerror = function () {
                var l;
                c("9");
                f.lg(((l = {}), (l.type = "GDPR-ok-view-default"), l));
                h(null);
              }),
              (g.onload = function () {
                c("10");
                b.C(
                  va(["GDPR-ok-view-default", "GDPR-ok-view-detailed"], Bf),
                  function (l) {
                    var m;
                    l = l.type;
                    f.lg(((m = {}), (m.type = l), m));
                    h({ value: li(l) });
                  }
                );
              }))
            : (c("9"), k(Va("gdp.e")));
        });
      }
      function Do(a, c) {
        var b = c || hi(a);
        return F(b, Eo) ? b : "en";
      }
      function $d() {
        return function (a, c, b) {
          return {
            ba: function (d, e) {
              var f,
                g = d.H,
                h = d.F;
              if (g && h) {
                var k = F(h["wv-type"], Fo);
                if (!h["wv-type"] || k) {
                  var l = aa(a);
                  g.De("rqnl", 1);
                  g = g.b();
                  for (var m = bd(a), p = 1; m[p]; ) p += 1;
                  d.Nb = p;
                  m[p] =
                    ((f = {}),
                    (f.protocol = na.Ka),
                    (f.host = "mc.yandex.ru"),
                    (f.resource = k ? "webvisor" : "watch"),
                    (f.postParams = d.$),
                    (f.time = l(Y)),
                    (f.counterType = b.aa),
                    (f.params = h),
                    (f.browserInfo = g),
                    (f.counterId = b.id),
                    (f.ghid = yc(a)),
                    f);
                  Cf(a);
                }
              }
              e();
            },
            Ia: function (d, e) {
              mi(a, d);
              e();
            },
          };
        };
      }
      function mi(a, c) {
        var b = bd(a);
        c.H && !La(b) && (delete b[c.Nb], Cf(a));
      }
      function Cf(a) {
        var c = bd(a);
        Na(a).o("retryReqs", c);
      }
      function ae(a, c, b) {
        var d = be(a, c, b);
        return function (e, f, g) {
          var h;
          e = A({ H: ua() }, e);
          e.F || (e.F = {});
          var k = e.F;
          k.wmode = "0";
          k["wv-part"] = "" + g;
          k["wv-hit"] = k["wv-hit"] || "" + yc(a);
          k["page-url"] = k["page-url"] || a.location.href;
          k.rn = k.rn || "" + Ua(a);
          if (!k["wv-type"]) {
            g = e.af;
            var l = "4",
              m = "2";
            e.Hf && ((l = "5"), (m = "3"));
            k["wv-type"] = g ? l : m;
          }
          f = "webvisor/" + f.id;
          return d(A(e, { F: k }), f, {
            Lb: ((h = {}), (h["Content-Type"] = "text/plain"), h),
            Gg: "POST",
          });
        };
      }
      function Go(a, c, b, d) {
        c = d.l("cc");
        d = G(["cc", ""], d.o);
        if (c) {
          var e = c.split("&");
          c = e[0];
          if ((e = (e = e[1]) && Ba(e)) && 1440 < aa(a)(db) - e) return d();
          b.o("cc", c);
        } else ta(0)(c) || d();
      }
      function Ho(a, c, b, d) {
        return ya(a, c, function (e) {
          if ("0" === n(e, "settings.pcs") && !cd(a))
            if (((e = d.l("zzlc")), S(e) || La(e) || "na" === e)) {
              e = "ru";
              var f = ni(a, 68),
                g = oi(a, 79);
              if (f || g) e = "md";
              if ((f = ab(a))) {
                var h = f("iframe");
                A(h.style, {
                  display: "none",
                  width: "1px",
                  height: "1px",
                  visibility: "hidden",
                });
                h.src =
                  "https://mc.yandex." + e + Io("L21ldHJpa2EvenpsYy5odG1s");
                if ((e = Pb(a))) {
                  e.appendChild(h);
                  var k = 0,
                    l = la(a).C(
                      a,
                      ["message"],
                      D(a, "zz.m", function (m) {
                        (m = n(m, "data")) &&
                          m.substr &&
                          "__ym__zz" === m.substr(0, 8) &&
                          (jc(h),
                          (m = m.substr(8)),
                          d.o("zzlc", m),
                          b.o("zzlc", m),
                          l(),
                          ha(a, k));
                      })
                    );
                  k = T(a, t(l, u(h, jc)), 3e3);
                }
              }
            } else b.o("zzlc", e);
        });
      }
      function ya(a, c, b) {
        a = W(c);
        return pi()(Jo(a)).then(b);
      }
      function Ko(a, c, b) {
        c = W(c);
        a = Df(a);
        b = A({ Ih: a(Y) }, b);
        return pi()(Lo(c, b));
      }
      function Lo(a, c) {
        return function (b) {
          var d = b[a];
          d
            ? ((d.hj = c), (d.cg = !0), d.bg ? d.bg(c) : (d.Qa = K.resolve(c)))
            : (b[a] = { Qa: K.resolve(c), hj: c, cg: !0 });
        };
      }
      function Mo(a, c, b) {
        var d, e;
        c = Za(u(a, n), No);
        c = S(c) ? null : n(a, c);
        if (
          n(a, "navigator.onLine") &&
          c &&
          c &&
          n(c, "prototype.constructor.name")
        ) {
          var f = new c(((d = {}), (d.iceServers = []), d));
          a = n(f, "createDataChannel");
          R(a) &&
            (C(a, f, "y.metrika")(),
            (a = n(f, "createOffer")),
            R(a) &&
              !a.length &&
              ((a = C(a, f)()),
              (d = n(a, "then")),
              R(d) &&
                C(d, a, function (g) {
                  var h = n(f, "setLocalDescription");
                  R(h) && C(h, f, g, B, B)();
                })(),
              A(
                f,
                ((e = {}),
                (e.onicecandidate = function () {
                  var g,
                    h = n(f, "close");
                  if (R(h)) {
                    h = C(h, f);
                    try {
                      var k =
                        (g = n(f, "localDescription.sdp")) &&
                        g.match(/c=IN\s[\w\d]+\s([\w\d:.]+)/);
                    } catch (l) {
                      f.onicecandidate = B;
                      "closed" !== f.iceConnectionState && h();
                      return;
                    }
                    k && 0 < k.length && ((g = Ub(k[1])), b.o("pp", g));
                    f.onicecandidate = B;
                    h();
                  }
                }),
                e)
              )));
        }
      }
      function Oo(a, c, b) {
        var d,
          e = qi(a, c);
        if (e) {
          e.Z.C(["gpu-get"], function () {
            var h;
            return (h = {}), (h.type = "gpu-get"), (h.pu = b.l("pu")), h;
          });
          var f = n(a, "opener");
          if (f) {
            var g = T(a, G([a, c, b], ri), 200, "pu.m");
            e.ze(f, ((d = {}), (d.type = "gpu-get"), d), function (h, k) {
              var l = n(k, "pu");
              l && (ha(a, g), b.o("pu", l));
            });
          } else ri(a, c, b);
        }
      }
      function ri(a, c, b) {
        var d = n(a, "location.host");
        a = Cd(a, c);
        b.o("pu", "" + Ub(d) + a);
      }
      function Ef(a, c, b) {
        return {
          ba: function (d, e) {
            var f = d.H;
            if (f && (!b || b.kg)) {
              var g = a.document.title;
              d.title && (g = d.title);
              var h = Vb("getElementsByTagName", a.document);
              "string" !== typeof g &&
                h &&
                ((g = h("title")), (g = (g = n(g, "0.innerHtml")) ? g : ""));
              g = g.slice(0, na.Pg);
              f.o("t", g);
            }
            e();
          },
        };
      }
      function kc(a) {
        void 0 === a && (a = Po);
        return function (c, b, d) {
          return {
            ba: function (e, f) {
              var g = e.H,
                h = e.F;
              g &&
                h &&
                z(function (k) {
                  var l = rb[k],
                    m = "bi",
                    p = g;
                  l || ((l = sb[k]), (m = "tel"), (p = Ud(e)));
                  l && ((l = E(m + ":" + k, l, null)(c, d, e)), p.De(k, l));
                }, a);
              f();
            },
          };
        };
      }
      function Qo(a, c, b, d, e, f, g, h) {
        var k = b.l(f);
        ka(k) && (b.o(f, g), e(a, c, b, d), (k = b.l(f, g)));
        S(h) || h.De(f, "" + k);
        return k;
      }
      function Ro(a, c) {
        if (dd(a)) {
          var b = lb(a).match(So);
          if (b && b.length) return b[1] === c;
        }
        return !1;
      }
      function ni(a, c) {
        if (ed(a) && c) {
          var b = lb(a).match(To);
          if (b && b.length) return +b[1] >= c;
        }
        return !1;
      }
      function oi(a, c) {
        var b = lb(a);
        return b && (b = b.match(Uo)) && 1 < b.length ? Ba(b[1]) >= c : !1;
      }
      function xh(a, c) {
        void 0 === c && (c = !1);
        for (var b = a.length, d = b - (b % 3), e = [], f = 0; f < d; f += 3) {
          var g = (a[f] << 16) + (a[f + 1] << 8) + a[f + 2];
          e.push(
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[
              (g >> 18) & 63
            ],
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[
              (g >> 12) & 63
            ],
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[
              (g >> 6) & 63
            ],
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[
              g & 63
            ]
          );
        }
        switch (b - d) {
          case 1:
            b = a[d] << 4;
            e.push(
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[
                (b >> 6) & 63
              ],
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[
                b & 63
              ],
              "=",
              "="
            );
            break;
          case 2:
            (b = (a[d] << 10) + (a[d + 1] << 2)),
              e.push(
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[
                  (b >> 12) & 63
                ],
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[
                  (b >> 6) & 63
                ],
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[
                  b & 63
                ],
                "="
              );
        }
        e = e.join("");
        return c ? si(e, !0) : e;
      }
      function Io(a, c) {
        void 0 === c && (c = !1);
        var b = a,
          d = "",
          e = 0;
        if (!b) return "";
        for (c && (b = si(b)); b.length % 4; ) b += "=";
        do {
          var f =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(
                b.charAt(e++)
              ),
            g =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(
                b.charAt(e++)
              ),
            h =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(
                b.charAt(e++)
              ),
            k =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(
                b.charAt(e++)
              );
          if (0 > f || 0 > g || 0 > h || 0 > k) return null;
          var l = (f << 18) | (g << 12) | (h << 6) | k;
          f = (l >> 16) & 255;
          g = (l >> 8) & 255;
          l &= 255;
          d =
            64 === h
              ? d + String.fromCharCode(f)
              : 64 === k
              ? d + String.fromCharCode(f, g)
              : d + String.fromCharCode(f, g, l);
        } while (e < b.length);
        return d;
      }
      function si(a, c) {
        void 0 === c && (c = !1);
        return a
          ? a.replace(c ? /[+/=]/g : /[-*_]/g, function (b) {
              return Vo[b] || b;
            })
          : "";
      }
      function Wo(a, c) {
        var b = a.length
          ? y(function (d, e) {
              var f = c[e];
              return f === d ? null : f;
            }, a)
          : c;
        a.length = 0;
        z(t(N, ea("push", a)), c);
        return V(ta(null), b).length === a.length ? null : b;
      }
      function Xo(a, c, b) {
        return y(function (d) {
          var e = d[0],
            f = d[1];
          if (R(e)) return e(a, c) || null;
          if (R(f)) return null;
          var g = !(!c[e] || !c[f]);
          !g &&
            2 === d.length &&
            (g = 0 === c[e] && 0 === c[f]) &&
            ((g = d[1]), (g = !(ti[d[0]] || ti[g])));
          return g
            ? ((d = Math.round(c[e]) - Math.round(c[f])),
              0 > d || 36e5 < d ? null : d)
            : 1 === d.length && c[e]
            ? Math.round(c[e])
            : null;
        }, b);
      }
      function fd(a, c, b) {
        return {
          ba: function (d, e) {
            var f = ui(b),
              g = d.H;
            g
              ? g.l("pv") && !g.l("ar")
                ? ((f.kf = g), e())
                : f.zc
                ? f.zc.push(e)
                : e()
              : e();
          },
          Ia: function (d, e) {
            var f = d.H,
              g = d.kj,
              h = ui(b);
            if (f) {
              var k = h.zc;
              h.kf === f &&
                k &&
                (g && O(a).o("isEU", n(g, "settings.eu")),
                z(Ma, k),
                (h.zc = null));
            }
            e();
          },
        };
      }
      function vi(a, c) {
        var b = qi(a, c),
          d = [],
          e = [];
        if (!b) return null;
        var f = G([a, b.ze], Yo),
          g = u(f, Zo);
        b.Z.C(["initToParent"], function (h) {
          g(d, b.wb[h[1].counterId]);
        }).C(["parentConnect"], function (h) {
          g(e, b.Jb[h[1].counterId]);
        });
        return {
          Z: b.Z,
          Em: function (h, k) {
            return new K(function (l, m) {
              b.ze(h, k, function (p, r) {
                l([p, r]);
              });
              T(a, u(Va(), m), 5100, "is.o");
            });
          },
          lg: function (h) {
            var k = { ng: [], Le: [], data: h };
            d.push(k);
            return f(b.wb, k, h);
          },
          mg: function (h) {
            var k = { ng: [], Le: [], data: h };
            e.push(k);
            return f(b.Jb, k, h);
          },
        };
      }
      function Zo(a, c, b) {
        c = V(function (d) {
          return !F(b.info.counterId, d.Le);
        }, c);
        z(function (d) {
          var e;
          b.info.counterId &&
            a(((e = {}), (e[b.info.counterId] = b), e), d, d.data);
        }, c);
      }
      function Yo(a, c, b, d, e) {
        return new K(function (f, g) {
          var h = fa(b),
            k = t(d.resolve ? d.resolve : N, Sc(f)),
            l = t(d.reject ? d.reject : N, Sc(g));
          d.resolve = k;
          d.reject = l;
          z(function (m) {
            var p;
            d.Le.push(m);
            var r = b[m],
              q = T(a, u(Va(), l), 5100, "is.m");
            c(
              r.window,
              A(e, ((p = {}), (p.toCounter = Ba(m)), p)),
              function (v, x) {
                ha(a, q);
                d.ng.push(m);
                d.resolve && d.resolve(x);
              }
            );
          }, h);
        })["catch"](D(a, "if.b"));
      }
      function $o(a, c) {
        var b = ce(a);
        c.C(["initToParent"], function (d) {
          var e = d[1];
          b.wb[e.counterId] = { info: e, window: d[0].source };
        })
          .C(["initToChild"], function (d) {
            var e = d[0];
            d = d[1];
            e.source === a.parent && c.N("parentConnect", [e, d]);
          })
          .C(["parentConnect"], function (d) {
            var e = d[1];
            e.counterId &&
              (b.Jb[e.counterId] = { info: e, window: d[0].source });
          });
      }
      function ap(a, c) {
        return function (b, d) {
          var e,
            f = { hc: aa(a)(Y), key: a.Math.random(), dir: 0 };
          b.length &&
            ((f.hc = Ba(b[0])), (f.key = parseFloat(b[1])), (f.dir = Ba(b[2])));
          A(d, c);
          var g =
            ((e = { data: d }),
            (e.__yminfo = I(":", ["__yminfo", f.hc, f.key, f.dir])),
            e);
          return { Y: f, ug: eb(a, g) || "" };
        };
      }
      function yc(a) {
        var c = O(a),
          b = c.l("hitId");
        b || ((b = Ua(a)), c.o("hitId", b));
        return b;
      }
      function ff(a) {
        var c;
        return (c = (c = !!O(a).l("oo")) || gf(a));
      }
      function Ud(a, c, b) {
        void 0 === b && (b = null);
        a.cd || (a.cd = bp());
        c && !La(b) && a.cd.o(c, b);
        return a.cd;
      }
      function Ff(a) {
        return {
          ba: function (c, b) {
            var d = a.document,
              e = c.H;
            if (e && Gf(a)) {
              var f = la(a),
                g = function (h) {
                  Gf(a) || (f.Sb(d, wi, g), b());
                  return h;
                };
              f.C(d, wi, g);
              e.o("pr", "1");
            } else b();
          },
        };
      }
      function Ra(a, c, b) {
        var d = be(a, c, b);
        return function (e, f) {
          var g,
            h = A({ H: ua() }, e),
            k = h.F,
            l = h.H;
          k =
            ((g = {}),
            (g["page-url"] = (k && k["page-url"]) || ""),
            (g.charset = "utf-8"),
            g);
          "0" !== f.aa && (k["cnt-class"] = f.aa);
          g = A(h, { F: A(h.F || {}, k) });
          h = "";
          if (g.H) {
            k = W(f);
            k = Hf(f)[k] || {};
            var m = k.status;
            "rt" === k.Kb && m
              ? (1 === m && (h = Og(a, f) + "."), g.H.o("rt", m))
              : (h = "");
          }
          A(g, { Cf: h });
          return d(g, "watch/" + f.id, {
            Re: !(!l.l("pv") || l.l("ar") || l.l("wh")),
          });
        };
      }
      function be(a, c, b) {
        var d = xb(a, c);
        return function (e, f, g) {
          void 0 === g && (g = {});
          var h = cp(a);
          e.Cf && (h = "" + e.Cf + h);
          f = [na.Ka + "//" + (h || "mc.yandex.ru") + "/" + f];
          return If(a, b, e, !0)
            .then(G([e, f, g], d))
            .then(function (k) {
              e.kj = k.Vc;
              return If(a, b, e).then(u(k.Vc, N));
            });
        };
      }
      function cp(a) {
        var c = "mc.yandex.ru",
          b = n(a, "document.referrer");
        if (!b) return c;
        (a = sc(a, b).host.match(/(?:^|\.)(?:ya|yandex)\.(?:\w+|com?\.\w+)$/))
          ? ((a = a[0].split("yandex").reverse()[0].substring(1)),
            (a = F(a, xi) ? a : !1))
          : (a = !1);
        return "mc.yandex." + (a || "ru");
      }
      function dp(a, c) {
        return a && c ? yi(a) === yi(c) : a || c ? !1 : !0;
      }
      function yi(a) {
        return (a.split(":")[1] || "")
          .replace(/^\/*/, "")
          .replace(/^www\./, "")
          .split("/")[0];
      }
      function If(a, c, b, d) {
        void 0 === d && (d = !1);
        return new K(function (e, f) {
          function g(l, m) {
            m();
            e();
          }
          var h = c.slice();
          h.push({ ba: g, Ia: g });
          var k = gc(h, function (l, m) {
            var p = d ? l.ba : l.Ia;
            if (p)
              try {
                p(b, m);
              } catch (r) {
                k(ep), f(r);
              }
            else m();
          });
          k(zi);
        });
      }
      function Ab(a, c, b) {
        var d = b || "as";
        if (a.postMessage && !a.attachEvent) {
          b = la(a);
          var e = "__ym__promise_" + Ua(a) + "_" + Ua(a),
            f = B;
          d = D(a, d, function (g) {
            try {
              var h = g.data;
            } catch (k) {
              return;
            }
            h === e && (f(), g.stopPropagation && g.stopPropagation(), c());
          });
          f = b.C(a, ["message"], d);
          a.postMessage(e, "*");
        } else T(a, c, 0, d);
      }
      function Ai(a, c, b, d, e) {
        void 0 === d && (d = 1);
        void 0 === e && (e = "itc");
        c = gc(c, b);
        ic(a, c, d)(Sb(D(a, e), B));
      }
      function ic(a, c, b, d) {
        void 0 === b && (b = 1);
        void 0 === d && (d = Bi);
        Jf = Infinity === b;
        return sa(function (e, f) {
          function g() {
            try {
              var k = c(d(a, b));
              h = h.concat(k);
            } catch (l) {
              return e(l);
            }
            c(fp);
            if (c(gd)) return f(h), Ci(a);
            Jf ? (c(d(a, 1e4)), f(h), Ci(a)) : T(a, g, 100);
          }
          var h = [];
          gp(g);
        });
      }
      function Ci(a) {
        if (Kf.length) {
          var c = Kf.shift();
          Jf ? c() : T(a, c, 100);
        } else Lf = !1;
      }
      function gp(a) {
        Lf ? Kf.push(a) : ((Lf = !0), a());
      }
      function Xe(a) {
        return sa(function (c, b) {
          b(a);
        });
      }
      function en(a) {
        return sa(function (c, b) {
          a.then(b, c);
        });
      }
      function hp(a) {
        var c = [],
          b = 0;
        return sa(function (d, e) {
          z(function (f, g) {
            f(
              Sb(d, function (h) {
                try {
                  (c[g] = h), (b += 1), b === a.length && e(c);
                } catch (k) {
                  d(k);
                }
              })
            );
          }, a);
        });
      }
      function dn(a) {
        var c = [],
          b = !1;
        return sa(function (d, e) {
          function f(g) {
            c.push(g) === a.length && d(c);
          }
          z(function (g) {
            g(
              Sb(f, function (h) {
                if (!b)
                  try {
                    e(h), (b = !0);
                  } catch (k) {
                    f(k);
                  }
              })
            );
          }, a);
        });
      }
      function Sb(a, c) {
        return function (b) {
          return b(a, c);
        };
      }
      function gc(a, c) {
        void 0 === c && (c = N);
        return sa({ Na: a, Td: c, Ge: !1, oa: 0 });
      }
      function zi(a) {
        function c() {
          function d() {
            b = !0;
            a.oa += 1;
          }
          b = !1;
          a.Td(a.Na[a.oa], function () {
            d();
          });
          b || ((a.oa += 1), (d = C(zi, null, a)));
        }
        for (var b = !0; !gd(a) && b; ) c();
      }
      function Bi(a, c) {
        return function (b) {
          var d = aa(a),
            e = d(Y);
          return Di(function (f, g) {
            d(Y) - e >= c && g(Ei);
          })(b);
        };
      }
      function de(a, c) {
        return function (b) {
          var d = aa(a),
            e = d(Y);
          return ee(function (f) {
            d(Y) - e >= c && Ei(f);
          })(b);
        };
      }
      function ee(a) {
        return function (c) {
          for (var b; c.Na.length && !gd(c); )
            (b = c.Na.pop()), (b = c.Td(b, c.Na)), a(c);
          return b;
        };
      }
      function ip(a) {
        gd(a) && kb(qc("i"));
        var c = a.Td(a.Na[a.oa]);
        a.oa += 1;
        return c;
      }
      function fp(a) {
        a.Ge = !1;
      }
      function Ei(a) {
        a.Ge = !0;
      }
      function ep(a) {
        a.oa = a.Na.length;
      }
      function gd(a) {
        return a.Ge || a.Na.length <= a.oa;
      }
      function xb(a, c) {
        return function (b, d, e) {
          void 0 === e && (e = {});
          return Fi(a, c, d, b, A(e, { ua: b.ua || [], $: e.$ || b.$ }));
        };
      }
      function Fi(a, c, b, d, e, f, g) {
        var h;
        void 0 === f && (f = 0);
        void 0 === g && (g = 0);
        var k = A({}, e),
          l = c[g],
          m = l[0];
        l = l[1];
        var p = A({}, d.F),
          r = aa(a);
        d.H && (p["browser-info"] = ua(d.H.b()).o("st", r(fe)).Da());
        !p.t && (r = d.cd) && (r.o("ti", m), (p.t = r.Da()));
        r = b[f];
        (k.Lb && k.Lb["Content-Type"]) ||
          !k.$ ||
          ((k.Lb = A(
            {},
            k.Lb,
            ((h = {}),
            (h["Content-Type"] = "application/x-www-form-urlencoded"),
            h)
          )),
          (k.$ = "site-info=" + Bd(k.$)));
        k.Gg = k.$ ? "POST" : "GET";
        k.Mb = p;
        k.ua.push(m);
        return l("" + r + (d.Mi ? "/1" : ""), k)
          .then(function (q) {
            return { Vc: q, Oj: f };
          })
          ["catch"](function (q) {
            var v = g + 1 >= c.length,
              x = f + 1 >= b.length;
            v && x && kb(q);
            return Fi(a, c, b, d, e, !x && v ? f + 1 : f, v ? 0 : g + 1);
          });
      }
      function Gi(a, c) {
        var b = c.Xd,
          d = b || "uid";
        b = b ? a.location.hostname : void 0;
        var e = Rb(a),
          f = Na(a),
          g = aa(a),
          h = g(fe),
          k = Hi(a, c),
          l = k[0];
        k = k[1];
        var m = e.l("d");
        Ii(a, c);
        var p = !1;
        !k && l && ((k = l), (p = !0));
        if (!k) (k = I("", [g(fe), Ua(a)])), (p = !0);
        else if (!m || 15768e3 < h - Ba(m)) p = !0;
        p && !c.gb && (e.o(d, k, 525600, b), e.o("d", "" + h, 525600, b));
        f.o(d, k);
        return k;
      }
      function Hi(a, c) {
        var b = Na(a),
          d = Rb(a),
          e = c.Xd || "uid";
        return [b.l(e), d.l(e)];
      }
      function mb(a) {
        a = aa(a);
        return Math.round(a(Mf) / 50);
      }
      function Mf(a) {
        var c = a.ra,
          b = c[1];
        a = c[0] && b ? b() : Y(a) - a.si;
        return Math.round(a);
      }
      function fe(a) {
        return Math.round(Y(a) / 1e3);
      }
      function db(a) {
        return Math.floor(Y(a) / 1e3 / 60);
      }
      function Y(a) {
        var c = a.Ne;
        return 0 !== c ? c : Nf(a.b, a.ra);
      }
      function Df(a) {
        var c = la(a),
          b = Ji(a),
          d = { b: a, Ne: 0, ra: b, si: Nf(a, b) },
          e = b[1];
        (b[0] && e) ||
          c.C(a, ["beforeunload", "unload"], function () {
            0 === d.Ne && (d.Ne = Nf(a, d.ra));
          });
        return sa(d);
      }
      function jp(a) {
        return (10 > a ? "0" : "") + a;
      }
      function Qe(a, c, b) {
        void 0 === c && (c = "");
        void 0 === b && (b = "_ym");
        var d = "" + b + c + "_";
        return {
          Qd: kp(a),
          l: function (e, f) {
            var g = Ki(a, "" + d + e);
            return La(g) && !S(f) ? f : g;
          },
          o: function (e, f) {
            Li(a, "" + d + e, f);
            return this;
          },
          ic: function (e) {
            Mi(a, "" + d + e);
            return this;
          },
        };
      }
      function Li(a, c, b) {
        var d = Of(a);
        a = eb(a, b);
        if (!La(a))
          try {
            d.setItem(c, a);
          } catch (e) {}
      }
      function Ki(a, c) {
        var b = Of(a);
        try {
          return qb(a, b.getItem(c));
        } catch (d) {}
        return null;
      }
      function Mi(a, c) {
        var b = Of(a);
        try {
          b.removeItem(c);
        } catch (d) {}
      }
      function Of(a) {
        try {
          return a.localStorage;
        } catch (c) {}
        return null;
      }
      function zh(a, c, b) {
        Pf(a, "metrika_enabled", "1", 0, c, b, !0);
        var d = Ni(a);
        (d = d && d.metrika_enabled) && Oi(a, "metrika_enabled", c, b, !0);
        return !!d;
      }
      function Pf(a, c, b, d, e, f, g) {
        void 0 === g && (g = !1);
        if (Ah(a, Ld, c)) {
          var h = c + "=" + encodeURIComponent(b) + ";";
          h += "" + lp(a);
          if (d) {
            var k = new Date();
            k.setTime(k.getTime() + 6e4 * d);
            h += "expires=" + k.toUTCString() + ";";
          }
          e && ((d = e.replace(mp, "")), (h += "domain=" + d + ";"));
          try {
            (a.document.cookie = h + ("path=" + (f || "/"))),
              g || (Pi(a)[c] = b);
          } catch (l) {}
        }
      }
      function Ld(a, c) {
        var b = Pi(a);
        return b ? b[c] || null : null;
      }
      function Ni(a) {
        try {
          var c = a.document.cookie;
          if (!ka(c)) {
            var b = {};
            z(function (d) {
              d = d.split("=");
              var e = d[1];
              b[Db(d[0])] = Db(Qi(e));
            }, (c || "").split(";"));
            return b;
          }
        } catch (d) {}
        return null;
      }
      function Ah(a, c, b) {
        F(b, ["gdpr", "gdpr_popup", "metrika_enabled"])
          ? (a = !0)
          : ((b = Vd(a)),
            (b = Af(b)),
            (a = c(a, "gdpr")),
            (a = V(Qb(np), b).length ? !0 : F(a, [xc, op])));
        return a;
      }
      function li(a) {
        if (F(a, ["GDPR-ok-view-default", "GDPR-ok-view-detailed"])) return xc;
        a = a.replace("GDPR-ok-view-detailed-", "");
        return F(a, Tb) ? a : xc;
      }
      function ki(a, c, b) {
        void 0 === b && (b = N);
        var d = Lc(a);
        b(d);
        var e = u(d, pp);
        ge(a, c, function (f) {
          f.qa.C(e);
        });
        return d;
      }
      function pp(a, c) {
        var b = n(c, "ymetrikaEvent");
        b && a.N(n(b, "type"), b);
      }
      function ge(a, c, b, d) {
        void 0 === b && (b = B);
        void 0 === d && (d = !1);
        var e = Rc(a);
        if (c && R(c.push)) {
          var f = c.push;
          c.push = function () {
            var g = xa(arguments),
              h = g[0];
            d && e.N(h);
            g = f.apply(c, g);
            d || e.N(h);
            return g;
          };
          a = {
            qa: e,
            unsubscribe: function () {
              c.push = f;
            },
          };
          b(a);
          z(e.N, c);
          return a;
        }
      }
      function Vd(a) {
        a = O(a);
        var c = a.l("dataLayer", []);
        a.o("dataLayer", c);
        return c;
      }
      function xo(a, c) {
        var b, d;
        a.push(((b = {}), (b.ymetrikaEvent = ((d = {}), (d.type = c), d)), b));
      }
      function gh(a, c, b) {
        function d() {
          f = 0;
          g && ((g = !1), (f = T(a, d, b)), e.N(h));
        }
        var e = Rc(a),
          f,
          g = !1,
          h;
        c.C(function (k) {
          g = !0;
          h = k;
          f || d();
          return B;
        });
        return e;
      }
      function qp(a, c) {
        return a.clearInterval(c);
      }
      function rp(a, c, b, d) {
        return a.setInterval(D(a, "i.err." + (d || "def"), c), b);
      }
      function T(a, c, b, d) {
        return he(a, D(a, "d.err." + (d || "def"), c), b);
      }
      function Lc(a) {
        var c = {};
        return {
          C: function (b, d) {
            z(function (e) {
              n(c, e) || (c[e] = Rc(a));
              c[e].C(d);
            }, b);
            return this;
          },
          da: function (b, d) {
            z(function (e) {
              n(c, e) && c[e].da(d);
            }, b);
            return this;
          },
          N: function (b, d) {
            return n(c, b) ? D(a, "e." + d, c[b].N)(d) : [];
          },
        };
      }
      function Rc(a) {
        var c = [],
          b = {};
        b.wm = c;
        b.C = t(ea("push", c), u(b, N));
        b.da = t(Wb(yb(a))(c), Wb(ea("splice", c))(1), u(b, N));
        b.N = t(N, Wb(Ma), sp(c));
        return b;
      }
      function E(a, c, b) {
        return function () {
          return D(arguments[0], a, c, b).apply(this, arguments);
        };
      }
      function D(a, c, b, d, e) {
        var f = kb,
          g = b || f;
        return function () {
          var h = d;
          try {
            h = g.apply(e || null, arguments);
          } catch (k) {
            Nd(a, c, k);
          }
          return h;
        };
      }
      function Nf(a, c) {
        var b = c || Ji(a),
          d = b[0];
        b = b[1];
        return !isNaN(d) && R(b)
          ? Math.round(b() + d)
          : a.Date.now
          ? a.Date.now()
          : new a.Date().getTime();
      }
      function Ji(a) {
        a = Ri(a);
        var c = n(a, "timing.navigationStart"),
          b = n(a, "now");
        b && (b = C(b, a));
        return [c, b];
      }
      function Ri(a) {
        return n(a, "performance") || n(a, "webkitPerformance");
      }
      function Nd(a, c, b) {
        var d, e, f, g, h;
        if (!(0.01 >= a.Math.random())) {
          var k = "u.a.e",
            l = "";
          b &&
            ("object" === typeof b
              ? ((k = b.message),
                (l =
                  ("string" === typeof b.stack &&
                    b.stack.replace(/\n/g, "\\n")) ||
                  "n.s.e.s"))
              : (k = "" + b));
          if (
            !(
              tp(k) ||
              Pa(t(ea("indexOf", k), ta(-1), Fb), up) ||
              (vp(k) && 0.1 <= a.Math.random())
            )
          ) {
            c =
              ((d = {}),
              (d.jserrs =
                ((e = {}),
                (e[na.Ja] =
                  ((f = {}),
                  (f[k] =
                    ((g = {}),
                    (g[c] = ((h = {}), (h[a.location.href] = l), h)),
                    g)),
                  f)),
                e)),
              d);
            a: {
              var m;
              d = na.Ka + "//mc.yandex.ru/watch/" + na.Mg;
              try {
                var p = zd(a, "er")[0];
                var r = void 0 === p ? [] : p;
                var q = r[1];
                var v = void 0 === q ? null : q;
              } catch (x) {
                break a;
              }
              p =
                ((m = {}),
                (m["browser-info"] =
                  "ar:1:pv:1:v:" + na.Ja + ":vf:" + hd.version),
                (m["page-url"] = a.location && "" + a.location.href),
                m);
              a = eb(a, c);
              if (v && a)
                v(d, { Mb: p, ua: [], $: "site-info=" + Bd(a) })["catch"](B);
            }
          }
        }
      }
      function Gb(a) {
        return y(function (c) {
          return !c || F(c, a) ? c : 0;
        }, lc);
      }
      function Si(a) {
        return !ad(a) && Ti(a);
      }
      function Qf(a) {
        return ab(a) ? u(a, wp) : !1;
      }
      function Ti(a) {
        var c = n(a, "navigator.sendBeacon");
        return c && ma("sendBeacon", c)
          ? G([a, C(c, n(a, "navigator"))], xp)
          : !1;
      }
      function xp(a, c, b, d) {
        return new K(function (e, f) {
          if (!n(a, "navigator.onLine")) return f();
          var g = A(d.Mb, { "force-urlencoded": 1 });
          g = b + "?" + Kc(g) + (d.$ ? "&" + d.$ : "");
          return 2e3 < g.length ? f(Va("sb.tlq")) : c(g) ? e("") : f();
        });
      }
      function wp(a, c, b) {
        return new K(function (d, e) {
          var f,
            g,
            h = "_ymjsp" + Ua(a),
            k = A(((f = {}), (f.callback = h), f), b.Mb),
            l = G([a, h], yp);
          a[h] = function (p) {
            try {
              l(), jc(m), d(p);
            } catch (r) {
              e(r);
            }
          };
          k.wmode = "5";
          var m = uc(a, ((g = {}), (g.src = Ui(c, b, k)), g));
          if (!m) return l(), e(qc("jp.s"));
          f = u(m, jc);
          f = t(f, u(Va(b.ua), e));
          g = he(a, f, b.Rb || 1e4);
          g = G([a, g], ha);
          m.onload = g;
          m.onerror = t(l, g, f);
        });
      }
      function yp(a, c) {
        try {
          delete a[c];
        } catch (b) {
          a[c] = void 0;
        }
      }
      function id(a) {
        var c = ab(a);
        return c ? G([a, c], zp) : !1;
      }
      function zp(a, c, b, d) {
        return new K(function (e, f) {
          var g = Pb(a),
            h = c("img"),
            k = t(u(h, jc), u(Va(d.ua), f)),
            l = he(a, k, d.Rb || 3e3);
          h.onerror = k;
          h.onload = t(u(h, jc), u(null, e), G([a, l], ha));
          k = A({}, d.Mb);
          delete k.wmode;
          h.src = Ui(b, d, k);
          dd(a) &&
            (A(h.style, {
              position: "absolute",
              visibility: "hidden",
              width: "0px",
              height: "0px",
            }),
            g.appendChild(h));
        });
      }
      function ch(a, c, b) {
        var d = Ca(c);
        return d && rh(a, c, V(Boolean, ["p", Ap[d], "c"]), u(a, bh), b);
      }
      function ah(a, c) {
        var b = Mb(Rf, a, c);
        if (!b) {
          var d = Mb("div", a, c);
          d && (tb(Rf + ",div", a, d).length || (b = d));
        }
        return b;
      }
      function rh(a, c, b, d, e) {
        return L(
          function (f, g) {
            var h = null;
            g in Vi
              ? (h = c.getAttribute && c.getAttribute(Vi[g]))
              : g in zc &&
                (h =
                  "p" === g
                    ? zc[g](a, c, e)
                    : "c" === g
                    ? zc[g](a, c, d)
                    : zc[g](a, c));
            h &&
              ((h = h.slice(0, Wi[g] || 100)), (f[g] = Sf[g] ? "" + Ub(h) : h));
            return f;
          },
          {},
          b
        );
      }
      function Bh(a, c, b) {
        if (
          a.document.querySelectorAll &&
          ma("querySelectorAll", n(a, "Element.prototype.querySelectorAll"))
        )
          return ja(b.querySelectorAll(c));
        var d = Xi(c.split(" "), b);
        return V(function (e, f) {
          return yb(a)(e, d) === f;
        }, d);
      }
      function Xi(a, c) {
        var b = va(a),
          d = b.shift();
        if (!d) return [];
        d = c.getElementsByTagName(d);
        return b.length ? bc(u(b, Xi), ja(d)) : ja(d);
      }
      function rc(a, c, b) {
        return c.querySelector
          ? c.querySelector(b)
          : (a = tb(b, a, c)) && a.length
          ? a[0]
          : null;
      }
      function tb(a, c, b) {
        return b ? ((a = b.querySelectorAll(a)) ? ja(a) : []) : [];
      }
      function uc(a, c) {
        var b = a.document,
          d = A({ type: "text/javascript", charset: "utf-8", async: !0 }, c),
          e = ab(a);
        if (e) {
          var f = e("script");
          Yi(
            Aa,
            fb(function (l) {
              var m = l[0];
              l = l[1];
              "async" === m && l ? (f.async = !0) : (f[m] = l);
            })
          )(d);
          try {
            var g = Vb("getElementsByTagName", b),
              h = g("head")[0];
            if (!h) {
              var k = g("html")[0];
              h = e("head");
              k && k.appendChild(h);
            }
            h.insertBefore(f, h.firstChild);
            return f;
          } catch (l) {}
        }
      }
      function Bp(a, c, b) {
        var d = Zi(c);
        F(b, d.jb) || d.jb.push(b);
        if (La(d.$a)) {
          b = ab(a);
          if (!b) return null;
          b = b("iframe");
          A(b.style, {
            display: "none",
            width: "1px",
            height: "1px",
            visibility: "hidden",
          });
          b.src = c;
          a = Pb(a);
          if (!a) return null;
          a.appendChild(b);
          d.$a = b;
        } else
          (a = n(d.$a, "contentWindow")) && a.postMessage("frameReinit", "*");
        return d.$a;
      }
      function Cp(a, c) {
        var b = ca(a) ? a : [a];
        c = c || document;
        if (c.querySelectorAll) {
          var d = I(
            ", ",
            y(function (e) {
              return "." + e;
            }, b)
          );
          return ja(c.querySelectorAll(d));
        }
        if (c.getElementsByClassName)
          return bc(t(ea("getElementsByClassName", c), ja), b);
        d = c.getElementsByTagName("*");
        b = "(" + I("|", b) + ")";
        return V(u(b, fc), ja(d));
      }
      function $i(a, c, b) {
        for (
          var d = "", e = $g(), f = Ca(c) || "*";
          c && c.parentNode && !F(f, ["BODY", "HTML"]);

        )
          (d += e[f] || "*"),
            (d += aj(a, c, b) || ""),
            (c = c.parentElement),
            (f = Ca(c) || "*");
        return Db(d, 128);
      }
      function aj(a, c, b) {
        if ((a = ie(a, c))) {
          a = a.childNodes;
          for (var d = c && c.nodeName, e = 0, f = 0; f < a.length; f += 1)
            if (d === (a[f] && a[f].nodeName)) {
              if (c === a[f]) return e;
              (b && a[f] === b) || (e += 1);
            }
        }
        return 0;
      }
      function ie(a, c) {
        var b = n(a, "document");
        if (!c || c === b.documentElement) return null;
        if (c === mc(a)) return b.documentElement;
        b = null;
        try {
          b = c.parentNode;
        } catch (d) {}
        return b;
      }
      function kf(a, c) {
        var b = Tf(a, c),
          d = b.left;
        b = b.top;
        var e = je(a, c);
        return [d, b, e[0], e[1]];
      }
      function je(a, c) {
        var b = n(a, "document");
        if (c === mc(a) || c === b.documentElement) {
          b = Pb(a);
          var d = jd(a);
          return [
            Math.max(b.scrollWidth, d[0]),
            Math.max(b.scrollHeight, d[1]),
          ];
        }
        return (b = Mc(c))
          ? [b.width, b.height]
          : [c.offsetWidth, c.offsetHeight];
      }
      function Tf(a, c) {
        var b = c,
          d = n(a, "document"),
          e = Ca(b);
        if (
          !b ||
          !b.ownerDocument ||
          "PARAM" === e ||
          b === mc(a) ||
          b === d.documentElement
        )
          return { left: 0, top: 0 };
        if ((d = b.getBoundingClientRect && Mc(b)))
          return (
            (b = nf(a)),
            { left: Math.round(d.left + b.x), top: Math.round(d.top + b.y) }
          );
        for (e = d = 0; b; )
          (d += b.offsetLeft), (e += b.offsetTop), (b = b.offsetParent);
        return { left: d, top: e };
      }
      function Mb(a, c, b) {
        if (!(c && c.Element && c.Element.prototype && c.document && b))
          return null;
        if (
          c.Element.prototype.closest &&
          ma("closest", c.Element.prototype.closest) &&
          b.closest
        )
          return b.closest(a);
        var d = Ih(c);
        if (d) {
          for (; b && 1 === b.nodeType && !d.call(b, a); )
            b = b.parentElement || b.parentNode;
          return b && 1 === b.nodeType ? b : null;
        }
        if (
          c.document.querySelectorAll &&
          ma("querySelectorAll", n(c, "Element.prototype.querySelectorAll"))
        ) {
          for (
            a = ja((c.document || c.ownerDocument).querySelectorAll(a));
            b && 1 === b.nodeType && -1 === yb(c)(b, a);

          )
            b = b.parentElement || b.parentNode;
          return b && 1 === b.nodeType ? b : null;
        }
        return null;
      }
      function bj(a) {
        return ke(a) && !Pa(ta(a.type), Dp)
          ? le(a)
            ? !a.checked
            : !a.value
          : Ep(a)
          ? !a.value
          : Fp(a)
          ? 0 > a.selectedIndex
          : !0;
      }
      function Ca(a) {
        if (a)
          try {
            var c = a.nodeName;
            if (Ka(c)) return c;
            c = a.tagName;
            if (Ka(c)) return c;
          } catch (b) {}
      }
      function cj(a, c) {
        var b = a.document.getElementsByTagName("form");
        return yb(a)(c, ja(b));
      }
      function Gp(a, c, b) {
        b = Vb("dispatchEvent", b || a.document);
        var d = null,
          e = n(a, "Event.prototype.constructor");
        if (
          e &&
          (ma("(Event|Object|constructor)", e) ||
            (me(a) && "[object Event]" === "" + e))
        )
          try {
            d = new a.Event(c);
          } catch (f) {
            if ((a = Vb("createEvent", n(a, "document"))) && R(a)) {
              try {
                d = a(c);
              } catch (g) {}
              d && d.initEvent && d.initEvent(c, !1, !1);
            }
          }
        d && b(d);
      }
      function Mc(a) {
        try {
          return a.getBoundingClientRect && a.getBoundingClientRect();
        } catch (c) {
          return "object" === typeof c &&
            null !== c &&
            16389 === (c.Sf && c.Sf & 65535)
            ? { top: 0, bottom: 0, left: 0, width: 0, height: 0, right: 0 }
            : null;
        }
      }
      function nf(a) {
        var c = mc(a),
          b = n(a, "document");
        return {
          x:
            a.pageXOffset ||
            (b.documentElement && b.documentElement.scrollLeft) ||
            (c && c.scrollLeft) ||
            0,
          y:
            a.pageYOffset ||
            (b.documentElement && b.documentElement.scrollTop) ||
            (c && c.scrollTop) ||
            0,
        };
      }
      function jd(a) {
        var c = Uf(a);
        if (c) {
          var b = c[2];
          return [a.Math.round(c[0] * b), a.Math.round(c[1] * b)];
        }
        c = Pb(a);
        return [
          n(c, "clientWidth") || a.innerWidth,
          n(c, "clientHeight") || a.innerHeight,
        ];
      }
      function Uf(a) {
        var c = n(a, "visualViewport.width"),
          b = n(a, "visualViewport.height");
        a = n(a, "visualViewport.scale");
        return ka(c) || ka(b) ? null : [Math.floor(c), Math.floor(b), a];
      }
      function Pb(a) {
        var c = n(a, "document") || {},
          b = c.documentElement;
        return "CSS1Compat" === c.compatMode ? b : mc(a) || b;
      }
      function mc(a) {
        a = n(a, "document");
        try {
          return a.getElementsByTagName("body")[0];
        } catch (c) {
          return null;
        }
      }
      function fc(a, c) {
        try {
          return new RegExp("(?:^|\\s)" + a + "(?:\\s|$)").test(c.className);
        } catch (b) {
          return !1;
        }
      }
      function nc(a) {
        var c;
        try {
          if ((c = a.target || a.srcElement))
            !c.ownerDocument && c.documentElement
              ? (c = c.documentElement)
              : c.ownerDocument !== document && (c = null);
        } catch (b) {}
        return c;
      }
      function jc(a) {
        var c = a && a.parentNode;
        c && c.removeChild(a);
      }
      function bf(a) {
        if (ka(a)) return !1;
        a = a.nodeType;
        return 3 === a || 8 === a;
      }
      function Xb(a) {
        var c;
        if ((c = n(a, "XMLHttpRequest")))
          if ((c = "withCredentials" in new a.XMLHttpRequest())) {
            a: {
              if (
                Hp.test(a.location.host) &&
                a.opera &&
                R(a.opera.version) &&
                ((c = a.opera.version()),
                "string" === typeof c && "12" === c.split(".")[0])
              ) {
                c = !0;
                break a;
              }
              c = !1;
            }
            c = !c;
          }
        return c ? u(a, Ip) : !1;
      }
      function Ip(a, c, b) {
        var d,
          e = new a.XMLHttpRequest(),
          f = b.$,
          g = A(b.Re ? ((d = {}), (d.wmode = "7"), d) : {}, b.Mb);
        return new K(function (h, k) {
          e.open(b.Gg || "GET", c + "?" + Kc(g), !0);
          e.withCredentials = !1 !== b.Ig;
          b.Rb && (e.timeout = b.Rb);
          Yi(
            Aa,
            fb(function (m) {
              e.setRequestHeader(m[0], m[1]);
            })
          )(b.Lb);
          var l = G([a, e, Va(b.ua), b.Re, b.lj, h, k], Jp);
          e.onreadystatechange = l;
          try {
            e.send(f);
          } catch (m) {}
        });
      }
      function Jp(a, c, b, d, e, f, g, h) {
        if (4 === c.readyState)
          if ((200 === c.status || e || g(b), e))
            200 === c.status
              ? f(c.responseText)
              : g(
                  qc(
                    "http." +
                      c.status +
                      ".st." +
                      c.statusText +
                      ".rt." +
                      ("" + c.responseText).substring(0, 50)
                  )
                );
          else {
            e = null;
            if (d)
              try {
                (e = qb(a, c.responseText)) || g(b);
              } catch (k) {
                g(b);
              }
            f(e);
          }
        return h;
      }
      function Ui(a, c, b) {
        (b = Kc(b)) && (a += "?" + b);
        c.$ && (a += (b ? "&" : "?") + c.$);
        return a;
      }
      function eb(a, c) {
        try {
          return a.JSON.stringify(c);
        } catch (b) {
          return null;
        }
      }
      function Kc(a) {
        return a
          ? t(
              Aa,
              vc(function (c, b) {
                var d = b[0],
                  e = b[1];
                S(e) || ka(e) || c.push(d + "=" + Bd(e));
                return c;
              }, []),
              Wc("&")
            )(a)
          : "";
      }
      function Kp(a) {
        return a
          ? t(
              fb(function (c) {
                c = c.split("=");
                var b = c[1];
                return [c[0], ka(b) ? void 0 : Qi(b)];
              }),
              vc(function (c, b) {
                c[b[0]] = b[1];
                return c;
              }, {})
            )(a.split("&"))
          : {};
      }
      function Qi(a) {
        var c = "";
        try {
          c = decodeURIComponent(a);
        } catch (b) {}
        return c;
      }
      function Bd(a) {
        try {
          return encodeURIComponent(a);
        } catch (c) {}
        a = I(
          "",
          V(function (c) {
            return 55296 >= c.charCodeAt(0);
          }, a.split(""))
        );
        return encodeURIComponent(a);
      }
      function Vf() {
        var a = xa(arguments);
        return kb(Va(a));
      }
      function Va(a) {
        var c = "";
        ca(a) ? (c = I(".", a)) : Ka(a) && (c = a);
        return qc("err.kn(" + na.Ja + ")" + c);
      }
      function Lp(a) {
        this.message = a;
      }
      function dj(a, c, b, d, e) {
        var f = a.addEventListener && a.removeEventListener,
          g = !f && a.attachEvent && a.detachEvent;
        if (f || g)
          if (
            ((e = e
              ? f
                ? "removeEventListener"
                : "detachEvent"
              : f
              ? "addEventListener"
              : "attachEvent"),
            f)
          )
            a[e](c, b, d);
          else a[e]("on" + c, b);
      }
      function P(a) {
        return L(
          function (c, b) {
            var d = n(a, "location." + b);
            c[b] = d ? "" + d : "";
            return c;
          },
          {},
          Mp
        );
      }
      function Np(a, c, b, d, e) {
        var f = "object" === typeof a ? a : { id: a, aa: d, $b: e, T: b };
        a = L(
          function (g, h) {
            var k = h[1],
              l = k.Ni;
            k = f[k.Uf];
            g[h[0]] = l ? l(k) : k;
            return g;
          },
          {},
          Aa(c)
        );
        ej(a, a.T || {});
        return a;
      }
      function Op(a, c) {
        return L(
          function (b, d) {
            b[c[d[0]].Uf] = d[1];
            return b;
          },
          {},
          Aa(a)
        );
      }
      function fj(a) {
        a = W(a);
        return Yb[a] && Yb[a].Dj;
      }
      function ej(a, c) {
        var b = W(a),
          d = n(c, "__ym.turbo_page"),
          e = n(c, "__ym.turbo_page_id");
        Yb[b] || (Yb[b] = {});
        if (d || e) (Yb[b].Dj = d), (Yb[b].Ej = e);
      }
      function Pp(a) {
        return (
          ne(a) || Xc(a) || /mobile/i.test(lb(a)) || !S(n(a, "orientation"))
        );
      }
      function Gf(a) {
        return F(
          "prerender",
          y(u(n(a, "document"), n), [
            "webkitVisibilityState",
            "visibilityState",
          ])
        );
      }
      function Ua(a, c, b) {
        var d = S(b);
        S(c) && d
          ? ((d = 1), (c = 1073741824))
          : d
          ? (d = 1)
          : ((d = c), (c = b));
        return a.Math.floor(a.Math.random() * (c - d)) + d;
      }
      function Ik(a) {
        try {
          return parseInt(a, 10);
        } catch (c) {
          return null;
        }
      }
      function Kd(a, c) {
        return a.isFinite(c) && !a.isNaN(c) && "[object Number]" === Wf(c);
      }
      function Qp(a) {
        for (var c = [], b = a.length - 1; 0 <= b; --b)
          c[a.length - 1 - b] = a[b];
        return c;
      }
      function Wa(a, c) {
        z(t(N, ea("push", a)), c);
        return a;
      }
      function Xf(a, c) {
        return Array.prototype.sort.call(c, a);
      }
      function ja(a) {
        return a
          ? ca(a)
            ? a
            : oe
            ? oe(a)
            : "number" === typeof a.length && 0 <= a.length
            ? gj(a)
            : []
          : [];
      }
      function rl(a) {
        if (0 > a) return [];
        for (var c = [], b = 0; b <= a; b += 1) c.push(b);
        return c;
      }
      function Rp(a, c) {
        if (!ed(a)) return !0;
        try {
          c.call({ 0: !0, length: -Math.pow(2, 32) + 1 }, function () {
            throw 1;
          });
        } catch (b) {
          return !1;
        }
        return !0;
      }
      function pe(a, c, b) {
        return b ? a : c;
      }
      function wf(a, c, b) {
        try {
          if (R(c)) {
            var d = xa(arguments).slice(3);
            ka(b) ? c.apply(void 0, d) : C.apply(void 0, va([c, b], d))();
          }
        } catch (e) {
          he(a, u(e, kb), 0);
        }
      }
      function kb(a) {
        throw a;
      }
      function he(a, c, b) {
        return Vb("setTimeout", a)(c, b);
      }
      function ha(a, c) {
        return Vb("clearTimeout", a)(c);
      }
      function Hd() {
        return [];
      }
      function Ac() {
        return {};
      }
      function Vb(a, c) {
        var b = n(c, a),
          d = n(c, "constructor.prototype." + a) || b;
        try {
          if (d && d.apply)
            return function () {
              return d.apply(c, arguments);
            };
        } catch (e) {
          return b;
        }
        return d;
      }
      function Hb(a, c) {
        return function () {
          var b = xa(arguments),
            d = b[0];
          b = b.slice(1);
          var e = O(d),
            f = e.l("m771", {}),
            g = n(f, a);
          g || ((g = w(c)), (f[a] = g), e.o("m771", f));
          return g.apply(void 0, va([d], b));
        };
      }
      function Ma(a, c) {
        return c ? a(c) : a();
      }
      function w(a, c) {
        var b = [],
          d = [];
        var e = c ? c : N;
        return function () {
          var f = xa(arguments),
            g = e.apply(void 0, f),
            h = hj(g, d);
          if (-1 !== h) return b[h];
          f = a.apply(void 0, f);
          b.push(f);
          d.push(g);
          return f;
        };
      }
      function Fb(a) {
        return !a;
      }
      function ub(a, c) {
        return c;
      }
      function N(a) {
        return a;
      }
      function yb(a) {
        if (Yf) return Yf;
        var c = !1;
        try {
          c = [].indexOf && 0 === [void 0].indexOf(void 0);
        } catch (d) {}
        var b =
          a.Array &&
          a.Array.prototype &&
          Fa(a.Array.prototype.indexOf, "indexOf");
        return (Yf = a =
          c && b
            ? function (d, e) {
                return b.call(e, d);
              }
            : Sp);
      }
      function Sp(a, c) {
        for (var b = 0; b < c.length; b += 1) if (c[b] === a) return b;
        return -1;
      }
      function oc(a) {
        a = a.Ya = a.Ya || {};
        var c = (a._metrika = a._metrika || {});
        return {
          Fa: function (b, d) {
            Zf.call(c, b) || (c[b] = d);
            return this;
          },
          o: function (b, d) {
            c[b] = d;
            return this;
          },
          l: function (b, d) {
            var e = c[b];
            return Zf.call(c, b) || S(d) ? e : d;
          },
        };
      }
      function Tp(a, c) {
        for (var b = "", d = 0; d < c; d += 1) b += a;
        return b;
      }
      function Up(a) {
        return S(a)
          ? []
          : kd(
              function (c, b) {
                c.push([b, a[b]]);
                return c;
              },
              [],
              ij(a)
            );
      }
      function Vp(a, c) {
        return kd(
          function (b, d, e) {
            d = a(d, e);
            return b.concat(ca(d) ? d : [d]);
          },
          [],
          c
        );
      }
      function Wp(a, c) {
        return kd(
          function (b, d, e) {
            b.push(a(d, e));
            return b;
          },
          [],
          c
        );
      }
      function Xp() {
        var a = xa(arguments),
          c = a[0];
        for (a = a.slice(1); a.length; ) {
          var b = a.shift(),
            d;
          for (d in b) Vc(b, d) && (c[d] = b[d]);
          Vc(b, "toString") && (c.toString = b.toString);
        }
        return c;
      }
      function ij(a) {
        var c = [],
          b;
        for (b in a) Vc(a, b) && c.push(b);
        return c;
      }
      function Yp(a, c) {
        return 1 <= jj(ta(a), c).length;
      }
      function jj(a, c) {
        return kd(
          function (b, d, e) {
            a(d, e) && b.push(d);
            return b;
          },
          [],
          c
        );
      }
      function Vc(a, c) {
        return ka(a) ? !1 : Zf.call(a, c);
      }
      function ca(a) {
        if (ld) return ld(a);
        (ld = Fa(Array.isArray, "isArray")) || (ld = Zp);
        return ld(a);
      }
      function t() {
        var a = xa(arguments),
          c = a.shift();
        return function () {
          var b = c.apply(void 0, arguments);
          return L(kj, b, a);
        };
      }
      function Jc(a, c) {
        void 0 === c && (c = {});
        if (!a || 1 > a.length) return c;
        L(
          function (b, d, e) {
            if (e === a.length - 1) return b;
            e === a.length - 2 ? (b[d] = a[e + 1]) : b[d] || (b[d] = {});
            return b[d];
          },
          c,
          a
        );
        return c;
      }
      function n(a, c) {
        return a
          ? L(
              function (b, d) {
                if (ka(b)) return b;
                try {
                  return b[d];
                } catch (e) {}
                return null;
              },
              a,
              c.split(".")
            )
          : null;
      }
      function vc(a, c) {
        return G([a, c], L);
      }
      function $a(a) {
        return ea("test", a);
      }
      function ea(a, c) {
        return C(c[a], c);
      }
      function u(a, c) {
        return G([a], c);
      }
      function G(a, c) {
        return C.apply(void 0, va([c, null], a));
      }
      function $p() {
        var a = xa(arguments),
          c = a[0],
          b = a[1],
          d = a.slice(2);
        return function () {
          var e = va(d, xa(arguments));
          if (Function.prototype.call)
            return Function.prototype.call.apply(c, va([b], e));
          if (b) {
            for (var f = "_b"; b[f]; ) f += "_" + f.length;
            b[f] = c;
            e = b[f] && lj(f, e, b);
            delete b[f];
            return e;
          }
          return lj(c, e);
        };
      }
      function lj(a, c, b) {
        void 0 === c && (c = []);
        b = b || {};
        var d = c.length,
          e = a;
        R(e) && ((e = "d"), (b[e] = a));
        var f;
        d
          ? 1 === d
            ? (f = b[e](c[0]))
            : 2 === d
            ? (f = b[e](c[0], c[1]))
            : 3 === d
            ? (f = b[e](c[0], c[1], c[2]))
            : 4 === d && (f = b[e](c[0], c[1], c[2], c[3]))
          : (f = b[e]());
        return f;
      }
      function xa(a) {
        if (oe)
          try {
            return oe(a);
          } catch (c) {}
        return gj(a);
      }
      function gj(a) {
        for (var c = a.length, b = [], d = 0; d < c; d += 1) b.push(a[d]);
        return b;
      }
      function $f(a, c) {
        $f =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (b, d) {
              b.__proto__ = d;
            }) ||
          function (b, d) {
            for (var e in d) d.hasOwnProperty(e) && (b[e] = d[e]);
          };
        return $f(a, c);
      }
      function kd(a, c, b) {
        for (var d = 0, e = b.length; d < e; ) (c = a(c, b[d], d)), (d += 1);
        return c;
      }
      function Lb(a) {
        return !La(a) && !S(a) && "[object Object]" === Wf(a);
      }
      function ka(a) {
        return S(a) || La(a);
      }
      function R(a) {
        return "function" === typeof a;
      }
      function Wb(a) {
        return function (c) {
          return function (b) {
            return a(b, c);
          };
        };
      }
      function da(a) {
        return function (c) {
          return function (b) {
            return a(c, b);
          };
        };
      }
      function kj(a, c) {
        return c(a);
      }
      function aq(a, c) {
        for (var b = "", d = 0; d < c.length; d += 1)
          b += "" + (d ? a : "") + c[d];
        return b;
      }
      function hn(a) {
        return a
          .replace(/\^/g, "\\^")
          .replace(/\$/g, "\\$")
          .replace(/\./g, "\\.")
          .replace(/\[/g, "\\[")
          .replace(/\]/g, "\\]")
          .replace(/\|/g, "\\|")
          .replace(/\(/g, "\\(")
          .replace(/\)/g, "\\)")
          .replace(/\?/g, "\\?")
          .replace(/\*/g, "\\*")
          .replace(/\+/g, "\\+")
          .replace(/\{/g, "\\{")
          .replace(/\}/g, "\\}");
      }
      function Db(a, c) {
        if (a) {
          var b = mj ? mj.call(a) : ("" + a).replace(di, "");
          return c && b.length > c ? b.substr(0, c) : b;
        }
        return "";
      }
      function Yk(a) {
        return "" + a;
      }
      function md(a, c) {
        return !(!a || -1 === Wg(a, c));
      }
      function Wg(a, c) {
        if (nj) var b = nj.call(a, c);
        else
          a: {
            b = 0;
            for (var d = a.length - c.length, e = 0; e < a.length; e += 1) {
              b = a[e] === c[b] ? b + 1 : 0;
              if (b === c.length) {
                b = e - c.length + 1;
                break a;
              }
              if (!b && e > d) break;
            }
            b = -1;
          }
        return b;
      }
      function Ka(a) {
        return "string" === typeof a;
      }
      function Wf(a) {
        return Object.prototype.toString.call(a);
      }
      function Fa(a, c) {
        return ma(c, a) && a;
      }
      function ma(a, c) {
        var b = qe(a, c);
        c && !b && ag.push([a, c]);
        return b;
      }
      function qe(a, c) {
        if (!c || "function" !== typeof c) return !1;
        try {
          var b = "" + c;
        } catch (h) {
          return !1;
        }
        var d = b.length;
        if (d > 35 + a.length) return !1;
        for (var e = d - 13, f = 0, g = 8; g < d; g += 1) {
          f =
            "[native code]"[f] === b[g] || (7 === f && "-" === b[g])
              ? f + 1
              : 0;
          if (12 === f) return !0;
          if (!f && g > e) break;
        }
        return !1;
      }
      function B() {}
      function Da(a, c) {
        function b() {
          this.constructor = a;
        }
        $f(a, c);
        a.prototype =
          null === c
            ? Object.create(c)
            : ((b.prototype = c.prototype), new b());
      }
      function va() {
        for (var a = 0, c = 0, b = arguments.length; c < b; c++)
          a += arguments[c].length;
        a = Array(a);
        var d = 0;
        for (c = 0; c < b; c++)
          for (var e = arguments[c], f = 0, g = e.length; f < g; f++, d++)
            a[d] = e[f];
        return a;
      }
      function Ub(a) {
        a = "" + a;
        for (var c = 2166136261, b = a.length, d = 0; d < b; d += 1)
          (c ^= a.charCodeAt(d)),
            (c += (c << 1) + (c << 4) + (c << 7) + (c << 8) + (c << 24));
        return c >>> 0;
      }
      function bq() {}
      function cq(a, c) {
        return function () {
          a.apply(c, arguments);
        };
      }
      function za(a) {
        if (!(this instanceof za))
          throw new TypeError("Promises must be constructed via new");
        if ("function" !== typeof a) throw new TypeError("not a function");
        this.za = 0;
        this.Se = !1;
        this.Ha = void 0;
        this.sb = [];
        oj(a, this);
      }
      function pj(a, c) {
        for (; 3 === a.za; ) a = a.Ha;
        0 === a.za
          ? a.sb.push(c)
          : ((a.Se = !0),
            za.Te(function () {
              var b = 1 === a.za ? c.Ti : c.Xi;
              if (null === b) (1 === a.za ? bg : nd)(c.Qa, a.Ha);
              else {
                try {
                  var d = b(a.Ha);
                } catch (e) {
                  nd(c.Qa, e);
                  return;
                }
                bg(c.Qa, d);
              }
            }));
      }
      function bg(a, c) {
        try {
          if (c === a)
            throw new TypeError("A promise cannot be resolved with itself.");
          if (c && ("object" === typeof c || "function" === typeof c)) {
            var b = c.then;
            if (c instanceof za) {
              a.za = 3;
              a.Ha = c;
              cg(a);
              return;
            }
            if ("function" === typeof b) {
              oj(cq(b, c), a);
              return;
            }
          }
          a.za = 1;
          a.Ha = c;
          cg(a);
        } catch (d) {
          nd(a, d);
        }
      }
      function nd(a, c) {
        a.za = 2;
        a.Ha = c;
        cg(a);
      }
      function cg(a) {
        2 === a.za &&
          0 === a.sb.length &&
          za.Te(function () {
            a.Se || za.Vg(a.Ha);
          });
        for (var c = 0, b = a.sb.length; c < b; c++) pj(a, a.sb[c]);
        a.sb = null;
      }
      function dq(a, c, b) {
        this.Ti = "function" === typeof a ? a : null;
        this.Xi = "function" === typeof c ? c : null;
        this.Qa = b;
      }
      function oj(a, c) {
        var b = !1;
        try {
          a(
            function (d) {
              b || ((b = !0), bg(c, d));
            },
            function (d) {
              b || ((b = !0), nd(c, d));
            }
          );
        } catch (d) {
          b || ((b = !0), nd(c, d));
        }
      }
      function qb(a, c) {
        if (!c) return null;
        try {
          return a.JSON.parse(c);
        } catch (b) {
          return null;
        }
      }
      function Oi(a, c, b, d, e) {
        void 0 === e && (e = !1);
        return Pf(a, c, "", -100, b, d, e);
      }
      function Pc(a, c, b) {
        void 0 === c && (c = "_ym_");
        void 0 === b && (b = "");
        var d = eq(a),
          e = 1 === (d || "").split(".").length ? d : "." + d,
          f = b ? "_" + b : "";
        return {
          ic: function (g, h, k) {
            Oi(a, "" + c + g + f, h || e, k);
            return this;
          },
          l: function (g) {
            return Ld(a, "" + c + g + f);
          },
          o: function (g, h, k, l, m) {
            Pf(a, "" + c + g + f, h, k, l || e, m);
            return this;
          },
        };
      }
      function sc(a, c) {
        var b = fq(a);
        return b
          ? ((b.href = c),
            {
              protocol: b.protocol,
              host: b.host,
              port: b.port,
              hostname: b.hostname,
              hash: b.hash,
              search: b.search,
              query: b.search.replace(/^\?/, ""),
              pathname: b.pathname || "/",
              path: (b.pathname || "/") + b.search,
              href: b.href,
            })
          : {};
      }
      function hb(a, c) {
        a = [a[0] >>> 16, a[0] & 65535, a[1] >>> 16, a[1] & 65535];
        c = [c[0] >>> 16, c[0] & 65535, c[1] >>> 16, c[1] & 65535];
        var b = [0, 0, 0, 0];
        b[3] += a[3] * c[3];
        b[2] += b[3] >>> 16;
        b[3] &= 65535;
        b[2] += a[2] * c[3];
        b[1] += b[2] >>> 16;
        b[2] &= 65535;
        b[2] += a[3] * c[2];
        b[1] += b[2] >>> 16;
        b[2] &= 65535;
        b[1] += a[1] * c[3];
        b[0] += b[1] >>> 16;
        b[1] &= 65535;
        b[1] += a[2] * c[2];
        b[0] += b[1] >>> 16;
        b[1] &= 65535;
        b[1] += a[3] * c[1];
        b[0] += b[1] >>> 16;
        b[1] &= 65535;
        b[0] += a[0] * c[3] + a[1] * c[2] + a[2] * c[1] + a[3] * c[0];
        b[0] &= 65535;
        return [(b[0] << 16) | b[1], (b[2] << 16) | b[3]];
      }
      function Zb(a, c) {
        a = [a[0] >>> 16, a[0] & 65535, a[1] >>> 16, a[1] & 65535];
        c = [c[0] >>> 16, c[0] & 65535, c[1] >>> 16, c[1] & 65535];
        var b = [0, 0, 0, 0];
        b[3] += a[3] + c[3];
        b[2] += b[3] >>> 16;
        b[3] &= 65535;
        b[2] += a[2] + c[2];
        b[1] += b[2] >>> 16;
        b[2] &= 65535;
        b[1] += a[1] + c[1];
        b[0] += b[1] >>> 16;
        b[1] &= 65535;
        b[0] += a[0] + c[0];
        b[0] &= 65535;
        return [(b[0] << 16) | b[1], (b[2] << 16) | b[3]];
      }
      function Bc(a, c) {
        c %= 64;
        if (32 === c) return [a[1], a[0]];
        if (32 > c)
          return [
            (a[0] << c) | (a[1] >>> (32 - c)),
            (a[1] << c) | (a[0] >>> (32 - c)),
          ];
        c -= 32;
        return [
          (a[1] << c) | (a[0] >>> (32 - c)),
          (a[0] << c) | (a[1] >>> (32 - c)),
        ];
      }
      function cb(a, c) {
        c %= 64;
        return 0 === c
          ? a
          : 32 > c
          ? [(a[0] << c) | (a[1] >>> (32 - c)), a[1] << c]
          : [a[1] << (c - 32), 0];
      }
      function oa(a, c) {
        return [a[0] ^ c[0], a[1] ^ c[1]];
      }
      function qj(a) {
        a = oa(a, [0, a[0] >>> 1]);
        a = hb(a, [4283543511, 3981806797]);
        a = oa(a, [0, a[0] >>> 1]);
        a = hb(a, [3301882366, 444984403]);
        return (a = oa(a, [0, a[0] >>> 1]));
      }
      function gq(a, c) {
        void 0 === c && (c = 210);
        var b = a || "",
          d = c || 0,
          e = b.length - (b.length % 16);
        d = { O: [0, d], R: [0, d] };
        for (var f = 0; f < e; f += 16) {
          var g = d,
            h = [
              (a.charCodeAt(f + 4) & 255) |
                ((a.charCodeAt(f + 5) & 255) << 8) |
                ((a.charCodeAt(f + 6) & 255) << 16) |
                ((a.charCodeAt(f + 7) & 255) << 24),
              (a.charCodeAt(f) & 255) |
                ((a.charCodeAt(f + 1) & 255) << 8) |
                ((a.charCodeAt(f + 2) & 255) << 16) |
                ((a.charCodeAt(f + 3) & 255) << 24),
            ],
            k = [
              (a.charCodeAt(f + 12) & 255) |
                ((a.charCodeAt(f + 13) & 255) << 8) |
                ((a.charCodeAt(f + 14) & 255) << 16) |
                ((a.charCodeAt(f + 15) & 255) << 24),
              (a.charCodeAt(f + 8) & 255) |
                ((a.charCodeAt(f + 9) & 255) << 8) |
                ((a.charCodeAt(f + 10) & 255) << 16) |
                ((a.charCodeAt(f + 11) & 255) << 24),
            ];
          h = hb(h, re);
          h = Bc(h, 31);
          h = hb(h, se);
          g.O = oa(g.O, h);
          g.O = Bc(g.O, 27);
          g.O = Zb(g.O, g.R);
          g.O = Zb(hb(g.O, [0, 5]), [0, 1390208809]);
          k = hb(k, se);
          k = Bc(k, 33);
          k = hb(k, re);
          g.R = oa(g.R, k);
          g.R = Bc(g.R, 31);
          g.R = Zb(g.R, g.O);
          g.R = Zb(hb(g.R, [0, 5]), [0, 944331445]);
        }
        e = b.length % 16;
        f = b.length - e;
        g = [0, 0];
        h = [0, 0];
        switch (e) {
          case 15:
            h = oa(h, cb([0, b.charCodeAt(f + 14)], 48));
          case 14:
            h = oa(h, cb([0, b.charCodeAt(f + 13)], 40));
          case 13:
            h = oa(h, cb([0, b.charCodeAt(f + 12)], 32));
          case 12:
            h = oa(h, cb([0, b.charCodeAt(f + 11)], 24));
          case 11:
            h = oa(h, cb([0, b.charCodeAt(f + 10)], 16));
          case 10:
            h = oa(h, cb([0, b.charCodeAt(f + 9)], 8));
          case 9:
            (h = oa(h, [0, b.charCodeAt(f + 8)])),
              (h = hb(h, se)),
              (h = Bc(h, 33)),
              (h = hb(h, re)),
              (d.R = oa(d.R, h));
          case 8:
            g = oa(g, cb([0, b.charCodeAt(f + 7)], 56));
          case 7:
            g = oa(g, cb([0, b.charCodeAt(f + 6)], 48));
          case 6:
            g = oa(g, cb([0, b.charCodeAt(f + 5)], 40));
          case 5:
            g = oa(g, cb([0, b.charCodeAt(f + 4)], 32));
          case 4:
            g = oa(g, cb([0, b.charCodeAt(f + 3)], 24));
          case 3:
            g = oa(g, cb([0, b.charCodeAt(f + 2)], 16));
          case 2:
            g = oa(g, cb([0, b.charCodeAt(f + 1)], 8));
          case 1:
            (g = oa(g, [0, b.charCodeAt(f)])),
              (g = hb(g, re)),
              (g = Bc(g, 31)),
              (g = hb(g, se)),
              (d.O = oa(d.O, g));
        }
        d.O = oa(d.O, [0, b.length]);
        d.R = oa(d.R, [0, b.length]);
        d.O = Zb(d.O, d.R);
        d.R = Zb(d.R, d.O);
        d.O = qj(d.O);
        d.R = qj(d.R);
        d.O = Zb(d.O, d.R);
        d.R = Zb(d.R, d.O);
        return (
          ("00000000" + (d.O[0] >>> 0).toString(16)).slice(-8) +
          ("00000000" + (d.O[1] >>> 0).toString(16)).slice(-8) +
          ("00000000" + (d.R[0] >>> 0).toString(16)).slice(-8) +
          ("00000000" + (d.R[1] >>> 0).toString(16)).slice(-8)
        );
      }
      function od(a, c, b) {
        var d = c.getAttribute("itemtype");
        b = tb('[itemprop~="' + b + '"]', a, c);
        return d
          ? V(function (e) {
              return e.parentNode && Mb("[itemtype]", a, e.parentNode) === c;
            }, b)
          : b;
      }
      function Xa(a, c, b) {
        return (a = od(a, c, b)) && a.length ? a[0] : null;
      }
      function Sa(a) {
        if (!a) return "";
        a = ca(a) ? a : [a];
        return a.length
          ? a[0].getAttribute("content") || a[0].innerText || ""
          : "";
      }
      function rj(a) {
        return a
          ? a.attributes && a.getAttribute("datetime")
            ? a.getAttribute("datetime")
            : Sa(a)
          : "";
      }
      function sj(a) {
        return (a = P(a).hash.split("#")[1]) ? a.split("?")[0] : "";
      }
      function hq(a, c) {
        var b = sj(a);
        tj = rp(
          a,
          function () {
            var d = sj(a);
            d !== b && (c(), (b = d));
          },
          200,
          "t.h"
        );
        return C(qp, null, a, tj);
      }
      function iq(a, c, b) {
        var d,
          e,
          f = c.aa,
          g = c.Oe,
          h = c.qc,
          k = O(a),
          l = ua(((d = {}), (d.wh = "1"), (d.pv = "1"), d));
        dg(f) && a.Ug && a.Ug.Bk && l.o("ad", "1");
        g && l.o("ut", "1");
        f = k.l("lastReferrer");
        d = P(a).href;
        h = {
          F: ((e = {}), (e["page-url"] = h || d), (e["page-ref"] = f), e),
          H: l,
        };
        b(h, c)["catch"](D(a, "g.s"));
        k.o("lastReferrer", d);
      }
      function jq(a, c) {
        if (me(a)) return ha(a, c);
        eg[c] = !0;
        return ha(a, te[c] || 0);
      }
      function kq(a, c, b) {
        function d() {
          eg[v] = !0;
          f(!1);
          c();
        }
        function e() {
          ha(a, te[v]);
          if (eg[v]) f(!1);
          else {
            var J = Math.max(0, b - (m ? p : p + h(Y) - r));
            J ? (te[v] = T(a, d, J, "u.t.d.c")) : d();
          }
        }
        function f(J) {
          z(function (X) {
            var ra = X[0],
              Ea = X[1];
            X = X[2];
            J ? q.C(ra, Ea, X) : q.Sb(ra, Ea, X);
          }, x);
        }
        var g = u(!1, f);
        if (me(a)) return { id: T(a, c, b, "u.t.d"), df: g };
        var h = aa(a),
          k = !1,
          l = !1,
          m = !0,
          p = 0,
          r = h(Y),
          q = la(a),
          v = uj;
        uj += 1;
        te[v] = 0;
        var x = [
          [
            a,
            ["blur"],
            function () {
              m = k = l = !0;
              p += h(Y) - r;
              r = h(Y);
              e();
            },
          ],
          [
            a,
            ["focus"],
            function () {
              k || l || (p = 0);
              r = h(Y);
              k = l = !0;
              m = !1;
              e();
            },
          ],
          [
            a.document,
            ["click", "mousemove", "keydown", "scroll"],
            function () {
              l || ((k = !0), (m = !1), (l = !0), e());
            },
          ],
        ];
        f(!0);
        e();
        return { id: v, df: g };
      }
      function Km(a, c) {
        var b,
          d = nc(c),
          e = na.Zb,
          f = oc(a);
        if (d && fc("ym-advanced-informer", d)) {
          var g = f.l("ifc", 0) + 1;
          f.o("ifc", g);
          g = d.getAttribute("data-lang");
          var h = Ba(d.getAttribute("data-cid") || "");
          if (h || 0 === h)
            (e = n(a, "Ya." + e + ".informer"))
              ? e(((b = {}), (b.i = d), (b.id = h), (b.lang = g), b))
              : f.o("ib", !0),
              (b = c || window.event),
              b.preventDefault ? b.preventDefault() : (b.returnValue = !1);
        }
      }
      function Uc(a, c, b) {
        a =
          c &&
          (md(c.className, "ym-disable-keys") ||
            md(c.className, "-metrika-nokeys"));
        return b && c
          ? a || !!Cp(["ym-disable-keys", "-metrika-nokeys"], c).length
          : a;
      }
      function $e(a, c) {
        return ke(c)
          ? "password" === c.type ||
              (c.name && F(c.name.toLowerCase(), vj)) ||
              (c.id && F(c.id.toLowerCase(), vj))
          : !1;
      }
      function wj(a, c) {
        var b = Math.max(0, Math.min(c, 65535));
        Wa(a, [b >> 8, b & 255]);
      }
      function Cb(a, c) {
        Wa(a, [c & 255]);
      }
      function bb(a, c, b) {
        return -1 !== yb(a)(b, lq) ? (Cb(c, b), !1) : !0;
      }
      function Q(a, c) {
        for (var b = Math.max(0, c | 0); 127 < b; )
          Wa(a, [(b & 127) | 128]), (b >>= 7);
        Wa(a, [b]);
      }
      function fg(a, c) {
        Q(a, c.length);
        for (var b = 0; b < c.length; b += 1) Q(a, c.charCodeAt(b));
      }
      function gg(a, c) {
        var b = c;
        255 < b.length && (b = b.substr(0, 255));
        a.push(b.length);
        for (var d = 0; d < b.length; d += 1) wj(a, b.charCodeAt(d));
      }
      function mq(a, c) {
        var b = [];
        if (bb(a, b, 27)) return [];
        Q(b, c);
        return b;
      }
      function nq(a, c) {
        var b = Ca(c);
        if (!b) return (c[Oa] = -1), null;
        var d = +c[Oa];
        if (!isFinite(d) || 0 >= d) return null;
        if (c.attributes)
          for (var e = c; e; ) {
            if (e.attributes.gm) return null;
            e = e.parentElement;
          }
        e = 64;
        var f = ie(a, c),
          g = f && f[Oa] ? f[Oa] : 0;
        0 > g && (g = 0);
        b = (b || "").toUpperCase();
        var h = oq()[b];
        h || (e |= 2);
        var k = aj(a, c);
        k || (e |= 4);
        var l = kf(a, c);
        (f = f ? kf(a, f) : null) &&
          l[0] === f[0] &&
          l[1] === f[1] &&
          l[2] === f[2] &&
          l[3] === f[3] &&
          (e |= 8);
        ec[d].Vf = l[0] + "x" + l[1];
        ec[d].size = l[2] + "x" + l[3];
        c.id && "string" === typeof c.id && (e |= 32);
        f = [];
        if (bb(a, f, 1)) return null;
        Q(f, d);
        Cb(f, e);
        Q(f, g);
        h ? Cb(f, h) : gg(f, b);
        k && Q(f, k);
        e & 8 || (Q(f, l[0]), Q(f, l[1]), Q(f, l[2]), Q(f, l[3]));
        e & 32 && gg(f, c.id);
        Cb(f, 0);
        return f;
      }
      function pq(a, c) {
        var b = c[Oa];
        if (!b || 0 > b || !hf(c) || !c.form || Hh(a, c.form)) return [];
        var d = cj(a, c.form);
        if (0 > d) return [];
        if (ke(c)) {
          var e = {
            text: 0,
            color: 0,
            hc: 0,
            mm: 0,
            "datetime-local": 0,
            email: 0,
            Sf: 0,
            Dm: 0,
            search: 0,
            Gm: 0,
            time: 0,
            url: 0,
            month: 0,
            Im: 0,
            password: 2,
            Cm: 3,
            jm: 4,
            file: 6,
            image: 7,
          };
          e = e[c.type];
        } else {
          e = { Fl: 1, Nl: 5 };
          var f = Ca(c);
          e = S(f) ? "" : e[f];
        }
        if ("number" !== typeof e) return [];
        f = -1;
        for (var g = c.form.elements, h = g.length, k = 0, l = 0; k < h; k += 1)
          if (g[k].name === c.name) {
            if (g[k] === c) {
              f = l;
              break;
            }
            l += 1;
          }
        if (0 > f) return [];
        g = [];
        if (bb(a, g, 7)) return [];
        Q(g, b);
        Q(g, d);
        Q(g, e);
        fg(g, c.name || "");
        Q(g, f);
        return g;
      }
      function qq(a, c, b) {
        var d = cj(a, b);
        if (0 > d) return [];
        var e = b.elements,
          f = e.length;
        b = [];
        for (var g = 0; g < f; g += 1)
          if (!bj(e[g])) {
            var h = e[g][Oa];
            h && 0 < h && b.push(h);
          }
        e = [];
        if (bb(a, e, 11)) return [];
        Q(e, c);
        Q(e, d);
        Q(e, b.length);
        for (a = 0; a < b.length; a += 1) Q(e, b[a]);
        return e;
      }
      function dc(a, c, b) {
        void 0 === b && (b = []);
        for (var d = []; c && !sm(a, c, b); c = ie(a, c)) d.push(c);
        z(function (e) {
          ec.sd += 1;
          var f = ec.sd;
          e[Oa] = f;
          ec[f] = {};
          f = nq(a, e);
          e = pq(a, e);
          f && e && (Wa(b, f), Wa(b, e));
        }, rq(d));
        return b;
      }
      function sq(a) {
        var c = a.ia;
        if (!Tc || (c && !c.fromElement)) return Eh(a);
      }
      function tq(a) {
        var c = a.ia;
        if (c && !c.toElement) return jf(a);
      }
      function xj(a) {
        var c = nc(a.ia);
        if (c && Md(c)) {
          var b = Dh(a, c);
          var d = mb(a.b),
            e = [];
          bb(a.b, e, 17) ? (a = []) : (Q(e, d), Q(e, c[Oa]), (a = e));
          return va(b, a);
        }
      }
      function yj(a) {
        var c = a.b,
          b = a.ia.target;
        if (b && Md(b)) {
          c = dc(c, b);
          var d = mb(a.b),
            e = [];
          bb(a.b, e, 18) ? (a = []) : (Q(e, d), Q(e, b[Oa]), (a = e));
          return va(c, a);
        }
      }
      function zj(a) {
        var c = a.b,
          b = nc(a.ia);
        if (!b || $e(c, b) || Uc(c, b)) return [];
        if (hf(b)) {
          var d = O(c).l("isEU"),
            e = Oc(c, b, d),
            f = e.ib;
          d = e.Rd;
          e = e.Cd;
          if (le(b)) var g = b.checked;
          else (g = b.value), (g = f ? I("", Aj(g.split(""))) : g);
          c = dc(c, b);
          f = mb(a.b);
          d = d && !e;
          e = [];
          bb(a.b, e, 39)
            ? (a = [])
            : (Q(e, f),
              Q(e, b[Oa]),
              gg(e, String(g)),
              Cb(e, d ? 1 : 0),
              (a = e));
          return va(c, a);
        }
      }
      function ue(a) {
        var c = a.b,
          b = a.ia,
          d = nc(b);
        if (!d || "SCROLLBAR" === d.nodeName) return [];
        var e = [],
          f = u(e, Wa);
        d && Md(d) ? f(Dh(a, d)) : f(dc(c, d));
        var g = Jh(c, b);
        a = mb(a.b);
        f = b.type;
        var h = [g.x, g.y];
        g = b.which;
        b = b.button;
        var k;
        var l = je(c, d);
        var m = l[0];
        for (l = l[1]; d && (!m || !l); )
          if ((d = ie(c, d))) (l = je(c, d)), (m = l[0]), (l = l[1]);
        d
          ? ((m = d[Oa]),
            !m || 0 > m
              ? (c = [])
              : (l = ((k = {}),
                (k.mousemove = 2),
                (k.click = 32),
                (k.dblclick = 33),
                (k.mousedown = 4),
                (k.mouseup = 30),
                (k.touch = 12),
                k)[f])
              ? ((k = []),
                (d = Tf(c, d)),
                bb(c, k, l)
                  ? (c = [])
                  : (Q(k, a),
                    Q(k, m),
                    Q(k, Math.max(0, h[0] - d.left)),
                    Q(k, Math.max(0, h[1] - d.top)),
                    /^mouse(up|down)|click$/.test(f) &&
                      ((c = g || b),
                      Cb(k, 2 > c ? 1 : c === (g ? 2 : 4) ? 4 : 2)),
                    (c = k)))
              : (c = []))
          : (c = []);
        return va(e, c);
      }
      function uq(a) {
        var c = null,
          b = a.b,
          d = b.document;
        if (b.getSelection) {
          d = void 0;
          try {
            d = b.getSelection();
          } catch (g) {
            return [];
          }
          if (La(d)) return [];
          var e = "" + d;
          c = d.anchorNode;
        } else
          d.selection &&
            d.selection.createRange &&
            ((d = d.selection.createRange()),
            (e = d.text),
            (c = d.parentElement()));
        if ("string" !== typeof e) return [];
        try {
          for (; c && 1 !== c.nodeType; ) c = c.parentNode;
        } catch (g) {
          return [];
        }
        if (!c) return [];
        d = Oc(b, c).ib || Uc(b, c, !0);
        c = c.getElementsByTagName("*");
        for (var f = 0; f < c.length && !d; )
          (d = c[f]), (d = Oc(b, d).ib || Uc(b, d, !0)), (f += 1);
        if (e !== hg)
          return (
            (hg = e),
            (d = d ? I("", Aj(e.split(""))) : e),
            (e = mb(a.b)),
            0 === d.length
              ? (d = b = "")
              : 100 >= d.length
              ? ((b = d), (d = ""))
              : 200 >= d.length
              ? ((b = d.substr(0, 100)), (d = d.substr(100)))
              : ((b = d.substr(0, 97)), (d = d.substr(d.length - 97))),
            (c = []),
            bb(a.b, c, 29) ? (a = []) : (Q(c, e), fg(c, b), fg(c, d), (a = c)),
            a
          );
      }
      function vq(a) {
        return va(ue(a), uq(a) || []);
      }
      function Bj(a) {
        return (
          (a.shiftKey ? 2 : 0) |
          (a.ctrlKey ? 4 : 0) |
          (a.altKey ? 1 : 0) |
          (a.metaKey ? 8 : 0) |
          (a.ctrlKey || a.altKey ? 16 : 0)
        );
      }
      function Cj(a) {
        var c = [];
        ig ||
          ((ig = !0),
          hg && c.push.apply(c, mq(a.b, mb(a.b))),
          Ab(
            a.b,
            function () {
              ig = !1;
            },
            "fv.c"
          ));
        return c;
      }
      function Dj(a, c, b, d) {
        var e = nc(c);
        if (!e || Fh(a, e)) return [];
        var f = Gd(e),
          g = lf(e);
        c = Oc(a, e).ib;
        var h = O(a);
        if (!f && ((g && h.l("isEU")) || Uc(a, e))) a = [];
        else {
          f = dc(a, e);
          h = mb(a);
          g = [];
          if (bb(a, g, 38)) a = [];
          else {
            Q(g, h);
            wj(g, b);
            Cb(g, d);
            a = e[Oa];
            if (!a || 0 > a) a = 0;
            Q(g, a);
            Cb(g, c ? 1 : 0);
            a = g;
          }
          a = va(f, a);
        }
        return a;
      }
      function wq(a) {
        var c = a.b,
          b = a.ia,
          d = b.keyCode,
          e = Bj(b),
          f = [],
          g = u(f, Wa);
        if (
          {
            3: 1,
            8: 1,
            9: 1,
            13: 1,
            16: 1,
            17: 1,
            18: 1,
            19: 1,
            20: 1,
            27: 1,
            33: 1,
            34: 1,
            35: 1,
            36: 1,
            37: 1,
            38: 1,
            39: 1,
            40: 1,
            45: 1,
            46: 1,
            91: 1,
            92: 1,
            93: 1,
            106: 1,
            110: 1,
            111: 1,
            144: 1,
            145: 1,
          }[d] ||
          (112 <= d && 123 >= d) ||
          (96 <= d && 105 >= d) ||
          e & 16
        )
          19 === d && 4 === (e & -17) && (d = 144),
            g(Dj(c, b, d, e | 16)),
            (jg = !1),
            Ab(
              c,
              function () {
                jg = !0;
              },
              "fv.kd"
            ),
            !(67 === d && e & 4) || e & 1 || e & 2 || g(Cj(a));
        return f;
      }
      function xq(a) {
        var c = a.b;
        a = a.ia;
        var b = [];
        jg &&
          !kg &&
          0 !== a.which &&
          (b.push.apply(b, Dj(c, a, a.charCode || a.keyCode, Bj(a))),
          (kg = !0),
          Ab(
            c,
            function () {
              kg = !1;
            },
            "fv.kp"
          ));
        return b;
      }
      function Ej(a) {
        var c = a.b,
          b = nc(a.ia);
        if (!b || Hh(c, b)) return [];
        var d = [];
        if ("FORM" === b.nodeName) {
          for (var e = b.elements, f = 0; f < e.length; f += 1)
            bj(e[f]) || d.push.apply(d, dc(c, e[f]));
          d.push.apply(d, qq(c, mb(a.b), b));
        }
        return d;
      }
      function yq(a) {
        var c = a.flush;
        a = nc(a.ia);
        "BODY" === Ca(a) && c();
      }
      function ve(a, c, b, d) {
        return function () {
          var e = Ia(a, c),
            f = xa(arguments);
          if (e) return d.apply(void 0, f);
        };
      }
      function zq(a, c, b, d) {
        var e = Aq[b];
        return e
          ? function () {
              var f = xa(arguments);
              try {
                var g = d.apply(void 0, f);
                var h = O(a);
                h.Fa("mt", {});
                var k = h.l("mt"),
                  l = k[e];
                k[e] = l ? l + 1 : 1;
              } catch (m) {
                kb(m);
              }
              return g;
            }
          : d;
      }
      function Fj(a, c, b, d) {
        return function () {
          var e = Ia(a, c),
            f = xa(arguments);
          d.apply(void 0, f);
          return e;
        };
      }
      function Gj(a, c, b, d) {
        return D(a, "cm." + b, d);
      }
      function Bq(a, c, b, d, e) {
        return b.length && e
          ? G(
              L(
                function (f, g, h) {
                  return b[h] ? f.concat(G([a, c, d], g)) : f;
                },
                [],
                b
              ),
              t
            )()(e)
          : e;
      }
      var Cq = {
          fl: !1,
          yk: !1,
          Mk: !1,
          vl: !0,
          wl: !0,
          xl: !0,
          ul: !0,
          Dk: !0,
          dm: !0,
          rk: !0,
          Tk: !0,
          Il: !0,
          Kk: !0,
          Bl: !0,
          Xk: !0,
          Ik: !0,
          ol: !0,
          ml: !0,
          ak: !0,
          sl: !1,
          rl: !0,
          xk: !0,
          zl: !0,
          bm: !1,
          Qk: !0,
          mk: !0,
          Kl: !1,
          Ul: !0,
          Pl: !0,
          zk: !0,
          Al: !0,
          ql: !0,
          Zk: !0,
          Rk: !1,
          Hl: !0,
          Uk: !0,
          Yj: !0,
          nl: !0,
          Gl: !0,
          Ol: !0,
          tl: !0,
          Ak: !0,
          Jk: !0,
          pl: !0,
          dk: !0,
          dl: !0,
          wk: !0,
          jl: !0,
          Wl: !0,
          yl: !0,
          Zl: !0,
          gk: !1,
          Xl: !0,
          Tl: !0,
          Dl: !0,
          El: !0,
          Rl: !0,
          Hk: !1,
          Ql: !1,
          $l: !0,
          bk: !1,
          Nk: !0,
          Vk: !0,
          Gk: !0,
          Sl: !1,
          Fk: !0,
          nk: !0,
          Xj: !0,
          el: !0,
          vk: !0,
          hk: !0,
          Cl: !0,
          Jl: !0,
          Vl: !1,
          kl: !1,
          ek: !0,
          ik: !0,
          $k: !0,
          jk: !0,
          pk: !0,
          Ek: !0,
          Sk: !1,
          Yk: !0,
          Yl: !1,
          Ok: !0,
          Zj: !0,
          Lk: !0,
          fk: !1,
          qk: !0,
          cm: !1,
          ck: !0,
          em: !0,
          bl: !0,
          gl: !0,
          lk: !0,
          $j: !0,
          Ml: !0,
          Ck: !0,
          Pk: !0,
          Ll: !0,
          al: !1,
        },
        hd = {
          construct: "Metrika2",
          callbackPostfix: "2",
          version: "uq3ipefhyn2n2dfa4fy",
        },
        ag = [],
        nj = Fa(String.prototype.indexOf, "indexOf"),
        di = /^\s+|\s+$/g,
        mj = Fa(String.prototype.trim, "trim"),
        Hj = Fa(Array.prototype.join, "join"),
        I = Hj
          ? function (a, c) {
              return Hj.call(c, a);
            }
          : aq,
        ta = da(function (a, c) {
          return a === c;
        }),
        Sc = da(function (a, c) {
          a(c);
          return c;
        }),
        Wc = da(I),
        sa = da(kj),
        La = ta(null),
        S = ta(void 0),
        oe = Fa(Array.from, "from"),
        Ij = Fa(Function.prototype.bind, "bind"),
        C = Ij
          ? function () {
              var a = xa(arguments);
              return Ij.apply(a[0], va([a[1]], a.slice(2)));
            }
          : $p,
        bi = da(G),
        Ul = da(ea),
        Jj = Fa(Array.prototype.reduce, "reduce"),
        L = Jj
          ? function (a, c, b) {
              return Jj.call(b, a, c);
            }
          : kd,
        U = Wb(n),
        cc = U("length"),
        Yi = t,
        ld,
        Zp = t(Wf, ta("[object Array]")),
        Zf = Object.prototype.hasOwnProperty,
        Aa = Object.entries
          ? function (a) {
              return a ? Object.entries(a) : [];
            }
          : Up,
        fa = Object.keys ? Object.keys : ij,
        A = Object.assign || Xp,
        Ch = da(function (a, c) {
          return A({}, a, c);
        }),
        Yf,
        hj = yb(window),
        Dq = Wb(hj),
        O = w(oc),
        df = Array.prototype.every
          ? function (a, c) {
              return Array.prototype.every.call(c, a);
            }
          : function (a, c) {
              return L(
                function (b, d) {
                  return b ? a(d) : !1;
                },
                !0,
                c
              );
            },
        Kj = Fa(Array.prototype.filter, "filter"),
        V = Kj
          ? function (a, c) {
              return Kj.call(c, a);
            }
          : jj,
        tc = da(V),
        Za = pe(
          function (a, c) {
            return Array.prototype.find.call(c, a);
          },
          function (a, c) {
            for (var b = 0; b < c.length; b += 1)
              if (a.call(c, c[b], b)) return c[b];
          },
          ma("find", Array.prototype.find)
        ),
        F = Array.prototype.includes
          ? function (a, c) {
              return Array.prototype.includes.call(c, a);
            }
          : Yp,
        Qb = Wb(F),
        Lj = w(function (a) {
          a = n(a, "navigator") || {};
          var c = n(a, "userAgent") || "";
          return { Gf: -1 < (n(a, "vendor") || "").indexOf("Apple"), Fg: c };
        }),
        ed = w(function (a) {
          var c = n(a, "document.documentElement.style");
          a = n(a, "InstallTrigger");
          return !(!(c && "MozAppearance" in c) || ka(a));
        }),
        Mj = Fa(Array.prototype.map, "map"),
        y =
          Mj && Rp(window, Array.prototype.map)
            ? function (a, c) {
                return c && 0 < c.length ? Mj.call(c, a) : [];
              }
            : Wp,
        z = y,
        bc = Array.prototype.flatMap
          ? function (a, c) {
              return Array.prototype.flatMap.call(c, a);
            }
          : Vp,
        fb = da(y),
        sp = Wb(y),
        Pa = pe(
          function (a, c) {
            return Array.prototype.some.call(c, a);
          },
          function (a, c) {
            for (var b = 0; b < c.length; b += 1)
              if (b in c && a.call(c, c[b], b)) return !0;
            return !1;
          },
          ma("some", Array.prototype.some)
        ),
        we = w(yb),
        Eq = da(Xf),
        Nj = Fa(Array.prototype.reverse, "reverse"),
        rq = Nj
          ? function (a) {
              return Nj.call(a);
            }
          : Qp,
        Ba = Wb(parseInt)(10),
        cd = w(t(U("String.fromCharCode"), u("fromCharCode", ma), Fb)),
        lb = w(U("navigator.userAgent")),
        ne = w(t(lb, $a(/ipad|iphone|ipod/i))),
        pf = w(function (a) {
          return n(a, "navigator.platform") || "";
        }),
        yf = w(function (a) {
          a = Lj(a);
          var c = a.Fg;
          return (
            a.Gf &&
            ((!c.match(/Safari/) && c.match(/Mobile/)) ||
              c.match(/CFNetwork\/[0-9][0-9.]*.*Darwin\/[0-9][0-9.]*/) ||
              -1 !== c.indexOf("FB_IAB") ||
              -1 !== c.indexOf("FBAV") ||
              -1 !== c.indexOf("OKApp") ||
              -1 !== c.indexOf("GSA/"))
          );
        }),
        dd = w(function (a) {
          a = Lj(a);
          var c = a.Fg;
          return a.Gf && !c.match("CriOS");
        }),
        ad = w(
          t(
            lb,
            ea(
              "test",
              /Android.*Version\/[0-9][0-9.]*\sChrome\/[0-9][0-9.]|Android.*Version\/[0-9][0-9.]*\s(?:Mobile\s)?Safari\/[0-9][0-9.]*\sChrome\/[0-9][0-9.]*|; wv\).*Chrome\/[0-9][0-9.]*\sMobile/
            )
          )
        ),
        Fq = /Chrome\/(\d+)\./,
        Gq = w(function (a) {
          return (a = (n(a, "navigator.userAgent") || "").match(Fq)) && a.length
            ? 76 <= Ba(a[1])
            : !1;
        }),
        Xc = w(function (a) {
          var c = (lb(a) || "").toLowerCase();
          a = pf(a);
          return !(
            -1 === c.indexOf("android") ||
            -1 === c.indexOf(c, "mobile") ||
            !/^android|linux armv/i.test(a)
          );
        }),
        Hq =
          "other none unknown wifi ethernet bluetooth cellular wimax mixed".split(
            " "
          ),
        Iq = w(function (a) {
          var c = n(a, "navigator.connection.type");
          if (S(c)) return null;
          a = we(a)(c, Hq);
          return -1 === a ? c : "" + a;
        }),
        me = w(t(U("document.addEventListener"), Fb)),
        Oj = w(function (a) {
          var c = n(a, "navigator") || {};
          return L(
            function (b, d) {
              return b || n(c, d);
            },
            "",
            ["language", "userLanguage", "browserLanguage", "systemLanguage"]
          );
        }),
        hi = w(function (a) {
          var c = n(a, "navigator") || {};
          a = Oj(a);
          Ka(a) || ((a = ""), (c = n(c, "languages.0")), Ka(c) && (a = c));
          return a.toLowerCase().split("-")[0];
        }),
        zb = w(function (a) {
          var c = !1;
          try {
            c = a.top !== a;
          } catch (b) {}
          return c;
        }),
        Jq = w(function (a) {
          var c = !1;
          try {
            c = a.top.contentWindow;
          } catch (b) {}
          return c;
        }),
        Kq = w(function (a) {
          var c = !1;
          try {
            c = a.navigator.javaEnabled();
          } catch (b) {}
          return c;
        }),
        Lq = w(function (a) {
          var c =
              "__webdriver_evaluate __selenium_evaluate __webdriver_script_function __webdriver_script_func __webdriver_script_fn __fxdriver_evaluate __driver_unwrapped __webdriver_unwrapped __driver_evaluate __selenium_unwrapped __fxdriver_unwrapped".split(
                " "
              ),
            b = n(a, "external");
          b =
            -1 !==
            (n(b, "toString") ? "" + b.toString() : "").indexOf("Sequentum");
          var d = n(a, "document.documentElement"),
            e = ["selenium", "webdriver", "driver"];
          return !!(
            Pa(u(a, n), [
              "_selenium",
              "callSelenium",
              "_Selenium_IDE_Recorder",
            ]) ||
            Pa(u(n(a, "document"), n), c) ||
            b ||
            (d && Pa(C(d.getAttribute, d), e))
          );
        }),
        Mq = w(function (a) {
          return !!(
            Pa(u(a, n), ["_phantom", "__nightmare", "callPhantom"]) ||
            /(PhantomJS)|(HeadlessChrome)/.test(lb(a)) ||
            n(a, "navigator.webdriver") ||
            (n(a, "isChrome") && !n(a, "chrome"))
          );
        }),
        Nq = w(function (a) {
          return df(u(a, n), ["ia_document.shareURL", "ia_document.referrer"]);
        }),
        Oq = w(function (a) {
          a = n(a, "navigator.plugins");
          return !!(a && cc(a) && Pa(t(U("name"), $a(/Chrome PDF Viewer/)), a));
        }),
        Pq = new RegExp(
          I(
            "|",
            "yandex.com/bots;Googlebot;APIs-Google;Mediapartners-Google;AdsBot-Google;FeedFetcher-Google;Google-Read-Aloud;DuplexWeb-Google;Google Favicon;googleweblight;Mail.RU_Bot;StackRambler;Slurp;msnbot;bingbot;www.baidu.com/search/spi_?der.htm".split(
              ";"
            )
          ).replace(/[./]/g, "\\$&")
        ),
        wo = w(t(U("navigator.userAgent"), $a(Pq))),
        xe = w(function (a) {
          var c = lb(a) || "",
            b = c.match(/Mac OS X ([0-9]+)_([0-9]+)/);
          b = b ? [+b[1], +b[2]] : [0, 0];
          c = c.match(/iPhone OS ([1-9]+)_([0-9]+)/);
          return 14 <= (c ? +c[1] : 0)
            ? !0
            : (ne(a) || 10 < b[0] || (10 === b[0] && 13 <= b[1])) && dd(a);
        }),
        Qq = hd.construct,
        lg = me(window),
        na = {
          Rg: 24226447,
          Mg: 26302566,
          Tg: 51533966,
          Wk: 65446441,
          Ka: "https:",
          Ja: "771",
          Zb: Qq,
          Qg: lg ? 512 : 2048,
          Og: lg ? 512 : 2048,
          Pg: lg ? 100 : 400,
          hl: 100,
          ll: "noindex",
        },
        Ga = {
          id: "id",
          Oe: "ut",
          aa: "type",
          Xd: "ldc",
          gb: "nck",
          qc: "url",
          Nh: "referrer",
        },
        Rq = /^\d+$/,
        Ib = {
          id: function (a) {
            a = "" + (a || "0");
            Rq.test(a) || (a = "0");
            try {
              var c = Ba(a);
            } catch (b) {
              c = 0;
            }
            return c;
          },
          aa: function (a) {
            return "" + (a || 0 === a ? a : "0");
          },
          gb: Boolean,
          Oe: Boolean,
        };
      Ga.$b = "defer";
      Ib.$b = Boolean;
      Ga.Uj = "yaDisableGDPR";
      Ga.Vj = "yaGDPRLang";
      Ga.exp = "experiments";
      Ga.jc = "ecommerce";
      Ib.jc = function (a) {
        if (a) return !0 === a ? "dataLayer" : "" + a;
      };
      Ga.T = "params";
      Ga.hd = "userParams";
      Ga.Vb = "accurateTrackBounce";
      Ga.Bg = "triggerEvent";
      Ib.Bg = Boolean;
      Ga.kg = "sendTitle";
      Ib.kg = function (a) {
        return !!a || S(a);
      };
      Ga.Ke = "trackHash";
      Ib.Ke = Boolean;
      Ga.oh = "clickmap";
      Ga.Ta = "webvisor";
      Ib.Ta = Boolean;
      Ga.Ij = "trustedDomains";
      Ga.vb = "childIframe";
      Ib.vb = Boolean;
      Ga.ed = "trackLinks";
      Ga.xh = "enableAll";
      Ga.ef = "disableFomAnalytics";
      Ib.ef = Boolean;
      var Pj = L(
          function (a, c) {
            var b = c[0];
            a[b] = { Uf: c[1], Ni: Ib[b] };
            return a;
          },
          {},
          Aa(Ga)
        ),
        Yb = {},
        W = w(function (a) {
          return a.id + ":" + a.aa;
        }),
        dg = ta("1"),
        Qj = da(function (a, c) {
          var b = c || {};
          return {
            b: u(b, N),
            l: function (d, e) {
              var f = b[d];
              return S(f) && !S(e) ? e : f;
            },
            o: function (d, e) {
              b[d] = e;
              return this;
            },
            De: function (d, e) {
              return "" === e || ka(e) ? this : this.o(d, e);
            },
            Da: u(b, a),
          };
        }),
        ua = Qj(function (a) {
          var c = "";
          a = L(
            function (b, d) {
              var e = d[0],
                f = "" + e + ":" + d[1];
              "t" === e ? (c = f) : b.push(f);
              return b;
            },
            [],
            Aa(a)
          );
          c && a.push(c);
          return I(":", a);
        }),
        Rj = na.Ka + "//mc.yandex.ru/metrika/metrika_match.html",
        Mp = "hash host hostname href pathname port protocol search".split(" "),
        xi =
          "ru ua by kz az kg lv md tj tm uz ee fr co.il com.ge com.am com.tr".split(
            " "
          ),
        qo = w(function (a) {
          a = P(a).hostname.split(".");
          return a[a.length - 1];
        }),
        Sj = w(function (a) {
          return (
            -1 !==
            P(a).hostname.search(
              /(?:^|\.)(?:ya|yandex|beru|kinopoisk|edadeal)\.(?:\w+|com?\.\w+)$/
            )
          );
        }),
        Ph = w(function (a) {
          return (a ? a.replace(/^www\./, "") : "").toLowerCase();
        }),
        Sq =
          /^(.*\.)?((yandex(-team)?)\.(com?\.)?[a-z]+|(auto|kinopoisk|beru|bringly)\.ru|ya\.(ru|cc)|yadi\.sk|deli\.yango\.com|yastatic\.net|meteum\.ai|.*\.yandex|turbopages\.org|turbo\.site)$/,
        Xd = w(function (a) {
          a = P(a).hostname;
          var c = !1;
          a && (c = -1 !== a.search(Sq));
          return c;
        }),
        Tq =
          /^(.*\.)?((yandex(-team)?)\.(com?\.)?[a-z]+|(auto|kinopoisk|beru|bringly)\.ru|ya\.(ru|cc)|yadi\.sk|.*\.yandex|turbopages\.org|turbo\.site)$/,
        bn = w(function (a) {
          a = P(a).hostname;
          var c = !1;
          a && (c = -1 !== a.search(Tq));
          return c;
        }),
        Uq = /(?:^|\.)(?:ya|yandex)\.(?:\w+|com?\.\w+)$/,
        Vq = w(function (a) {
          a = P(a).hostname;
          var c = !1;
          a && (c = -1 !== a.search(Uq));
          return c;
        }),
        lp = w(function (a) {
          return Gq(a) && "https:" === P(a).protocol
            ? "SameSite=None;Secure;"
            : "";
        }),
        Wq = w(function (a) {
          var c = !1;
          if (!a.addEventListener) return c;
          try {
            var b = Object.defineProperty({}, "passive", {
              get: function () {
                c = !0;
                return 1;
              },
            });
            a.addEventListener("test", B, b);
          } catch (d) {}
          return c;
        }),
        Xq = da(function (a, c) {
          return a ? A({ capture: !0, passive: !0 }, c || {}) : !!c;
        }),
        la = w(function (a) {
          a = Wq(a);
          var c = Xq(a),
            b = {};
          return A(b, {
            C: function (d, e, f, g) {
              z(function (h) {
                var k = c(g);
                dj(d, h, f, k, !1);
              }, e);
              return C(b.Sb, b, d, e, f, g);
            },
            Sb: function (d, e, f, g) {
              z(function (h) {
                var k = c(g);
                dj(d, h, f, k, !0);
              }, e);
            },
          });
        }),
        Yq = setTimeout;
      za.prototype["catch"] = function (a) {
        return this.then(null, a);
      };
      za.prototype.then = function (a, c) {
        var b = new this.constructor(bq);
        pj(this, new dq(a, c, b));
        return b;
      };
      za.prototype["finally"] = function (a) {
        var c = this.constructor;
        return this.then(
          function (b) {
            return c.resolve(a()).then(function () {
              return b;
            });
          },
          function (b) {
            return c.resolve(a()).then(function () {
              return c.reject(b);
            });
          }
        );
      };
      za.all = function (a) {
        return new za(function (c, b) {
          function d(h, k) {
            try {
              if (k && ("object" === typeof k || "function" === typeof k)) {
                var l = k.then;
                if ("function" === typeof l) {
                  l.call(
                    k,
                    function (m) {
                      d(h, m);
                    },
                    b
                  );
                  return;
                }
              }
              e[h] = k;
              0 === --f && c(e);
            } catch (m) {
              b(m);
            }
          }
          if (!a || "undefined" === typeof a.length)
            return b(new TypeError("Promise.all accepts an array"));
          var e = Array.prototype.slice.call(a);
          if (0 === e.length) return c([]);
          for (var f = e.length, g = 0; g < e.length; g++) d(g, e[g]);
        });
      };
      za.resolve = function (a) {
        return a && "object" === typeof a && a.constructor === za
          ? a
          : new za(function (c) {
              c(a);
            });
      };
      za.reject = function (a) {
        return new za(function (c, b) {
          b(a);
        });
      };
      za.race = function (a) {
        return new za(function (c, b) {
          if (!a || "undefined" === typeof a.length)
            return b(new TypeError("Promise.race accepts an array"));
          for (var d = 0, e = a.length; d < e; d++) za.resolve(a[d]).then(c, b);
        });
      };
      za.Te =
        ("function" === typeof setImmediate &&
          function (a) {
            setImmediate(a);
          }) ||
        function (a) {
          Yq(a, 0);
        };
      za.Vg = function (a) {
        "undefined" !== typeof console &&
          console &&
          console.warn("Possible Unhandled Promise Rejection:", a);
      };
      var K = window.Promise,
        Zq = Fa(K, "Promise"),
        Tj = Fa(n(K, "resolve"), "resolve"),
        Uj = Fa(n(K, "reject"), "reject"),
        Vj = Fa(n(K, "all"), "all");
      if (F(!1, [Zq, Tj, Uj, Vj])) K = za;
      else {
        var ye = function (a) {
          return new Promise(a);
        };
        ye.resolve = C(Tj, K);
        ye.reject = C(Uj, K);
        ye.all = C(Vj, K);
        K = ye;
      }
      var up = [
          "http.0.st..rt.",
          "network error occurred",
          "send beacon",
          "Content Security Policy",
          "DOM Exception 18",
        ],
        pd,
        qc = (function (a) {
          return function (c) {
            if (pd) return new pd(c);
            if (ma("Error", a.Error)) return (pd = a.Error), new a.Error(c);
            pd = Lp;
            return new pd(c);
          };
        })(window),
        vp = $a(/^http./),
        tp = $a(/^err.kn/),
        Hp = /[^a-z0-9.:-]/,
        $q = w(function (a) {
          a = n(a, "document") || {};
          return ("" + (a.characterSet || a.charset || "")).toLowerCase();
        }),
        ab = w(t(U("document"), u("createElement", Vb))),
        Ih = w(function (a) {
          var c = n(a, "Element.prototype");
          return c
            ? (a = Za(
                function (b) {
                  return ma(b, c[b]);
                },
                [
                  "matches",
                  "webkitMatchesSelector",
                  "mozMatchesSelector",
                  "msMatchesSelector",
                  "oMatchesSelector",
                ]
              ))
              ? c[a]
              : null
            : null;
        }),
        ar = ta("INPUT"),
        ke = t(Ca, ar),
        br = ta("TEXTAREA"),
        Ep = t(Ca, br),
        cr = ta("SELECT"),
        Fp = t(Ca, cr),
        le = t(U("type"), $a(/^(checkbox|radio)$/)),
        hf = t(Ca, $a(/^INPUT|SELECT|TEXTAREA$/)),
        Md = t(Ca, $a(/^INPUT|SELECT|TEXTAREA|BUTTON$/)),
        mf = "INPUT CHECKBOX RADIO TEXTAREA SELECT PROGRESS".split(" "),
        Dp = ["submit", "image", "hidden"],
        Wj =
          "A B BIG BODY BUTTON DD DIV DL DT EM FIELDSET FORM H1 H2 H3 H4 H5 H6 HR I IMG INPUT LI OL P PRE SELECT SMALL SPAN STRONG SUB SUP TABLE TBODY TD TEXTAREA TFOOT TH THEAD TR U UL ABBR AREA BLOCKQUOTE CAPTION CENTER CITE CODE CANVAS DFN EMBED FONT INS KBD LEGEND LABEL MAP OBJECT Q S SAMP STRIKE TT ARTICLE AUDIO ASIDE FOOTER HEADER MENU METER NAV PROGRESS SECTION TIME VIDEO NOINDEX NOBR MAIN svg circle clippath ellipse defs foreignobject g glyph glyphref image line lineargradient marker mask path pattern polygon polyline radialgradient rect set text textpath title".split(
            " "
          ),
        $g = w(function () {
          for (var a = 59, c = {}, b = 0; b < Wj.length; b += 1)
            (c[Wj[b]] = String.fromCharCode(a)), (a += 1);
          return c;
        }),
        Zi = w(function (a) {
          return { pm: a, $a: null, jb: [] };
        }),
        Wi = {},
        Sf = {};
      Wi.p = 500;
      var Vi = { i: "id", n: "name", h: "href", ty: "type" };
      Sf.h = !0;
      Sf.c = !0;
      var zc = {};
      zc.p = $i;
      zc.c = function (a, c, b) {
        (a = Db(n(c, "textContent"))) &&
          b &&
          ((b = b(c)),
          b.length && Pa(t(U("textContent"), Db, ta(a)), b) && (a = ""));
        ke(c) && (a = Db((c.getAttribute && c.getAttribute("value")) || a));
        return a;
      };
      var Cc,
        Rf =
          "button," +
          y(
            function (a) {
              return 'input[type="' + a + '"]';
            },
            ["button", "submit", "reset", "file"]
          ).join(",") +
          ",a",
        bh = u(Rf, tb),
        Ap =
          ((Cc = {}),
          (Cc.A = "h"),
          (Cc.BUTTON = "i"),
          (Cc.DIV = "i"),
          (Cc.INPUT = "ty"),
          Cc),
        qd;
      var lc = [Si, 0, Xb, Qf, id];
      var Xj = [Xb];
      Xj.push(Qf);
      var Yj = Gb(Xj),
        Dc = Gb([id]),
        dr = Gb([Si, id]),
        ze = Gb([0, Xb, Qf, id]);
      var pa = ((qd = {}), (qd.h = Yj), (qd.f = Yj), (qd.er = Dc), qd);
      pa.d = Dc;
      pa.s = Gb([Xb]);
      pa.S = pa.s;
      pa.u = Dc;
      pa.pi = Dc;
      pa.m = dr;
      pa["2"] = lc;
      pa["6"] = Gb([0, Xb]);
      pa.t = lc;
      pa.a = ze;
      pa.n = lc;
      pa.p = Gb([0, Xb]);
      pa["4"] = Gb([0, Xb, id]);
      pa.r = ze;
      pa["1"] = ze;
      pa.g = ze;
      pa.c = Dc;
      pa.e = lc;
      pa.adb = Dc;
      pa.W = Gb([0, Xb]);
      pa["5"] = lc;
      pa["8"] = [Ti];
      var zd = w(function (a, c) {
          var b;
          (b = c ? pa[c] : lc) || (b = []);
          b = L(
            function (d, e, f) {
              (e = e && e(a)) && d.push([f, e]);
              return d;
            },
            [],
            b
          );
          b.length || Vf();
          return b;
        }, ub),
        Tb = ["0", "1", "2", "3"],
        xc = Tb[0],
        xf = Tb[1],
        op = Tb[2],
        Bf = y(t(N, ea("concat", "GDPR-ok-view-detailed-")), Tb),
        Wd = va(
          "GDPR-ok GDPR-cross GDPR-cancel 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 GDPR-settings GDPR-ok-view-default GDPR-ok-view-detailed 21 22 23".split(
            " "
          ),
          Bf,
          ["28", "29", "30"]
        ),
        np = "3 13 14 15 16 17 28".split(" "),
        Af = t(fb(U("ymetrikaEvent.type")), tc(Qb(Wd))),
        Pi = Hb("gsc", Ni),
        mp = /:\d+$/,
        eq = w(function (a) {
          var c = (P(a).host || "").split(".");
          return 1 === c.length
            ? c[0]
            : L(
                function (b, d, e) {
                  e += 1;
                  2 <= e &&
                    !b &&
                    ((e = I(".", c.slice(-e))), zh(a, e) && (b = e));
                  return b;
                },
                "",
                c
              );
        }),
        Rb = w(Pc),
        kp = w(function (a) {
          Li(a, "_ymBRC", "1");
          var c = "1" !== Ki(a, "_ymBRC");
          c || Mi(a, "_ymBRC");
          return c;
        }),
        Na = w(Qe),
        rd = w(Qe, function (a, c, b) {
          return "" + c + b;
        }),
        aa = w(Df),
        Ii = Hb("r", function (a, c) {
          var b = Hi(a, c),
            d = b[0];
          return !b[1] && d;
        }),
        Cd = w(Gi, function (a, c) {
          return "{" + c.Xd + c.gb;
        }),
        Hf = w(Ac, W),
        Og = t(Cd, Ub),
        Di = da(function (a, c) {
          for (var b = []; !gd(c); ) {
            var d = ip(c);
            a(d, function (e) {
              return e(c);
            });
            b.push(d);
          }
          return b;
        }),
        mg = da(function (a, c) {
          return sa(function (b, d) {
            return c(b, function (e) {
              try {
                d(a(e));
              } catch (f) {
                b(f);
              }
            });
          });
        }),
        Ae = da(function (a, c) {
          return sa(function (b, d) {
            return c(b, function (e) {
              try {
                a(e)(Sb(b, d));
              } catch (f) {
                b(f);
              }
            });
          });
        }),
        Kf = [],
        Lf = !1,
        Jf = !1,
        fq = w(function (a) {
          if ((a = ab(a))) return a("a");
        }),
        wi = ["webkitvisibilitychange", "visibilitychange"],
        bp = Qj(function (a) {
          a = Aa(a);
          return I(
            "",
            y(function (c) {
              var b = c[0];
              c = c[1];
              return La(c) ? "" : b + "(" + c + ")";
            }, a)
          );
        }),
        vb = G([1, null], pe),
        Ed = G([1, 0], pe),
        jn = /^ *(data|javascript):/i,
        Oh = new RegExp(
          I("", [
            "\\.(" +
              I(
                "|",
                "3gp 7z aac ac3 acs ai avi ape apk asf bmp bz2 cab cdr crc32 css csv cue divx dmg djvu? doc(x|m|b)? emf eps exe flac? flv iso swf gif t?gz jpe?g? js m3u8? m4a mp(3|4|e?g?) m4v md5 mkv mov msi ods og(g|m|v) psd rar rss rtf sea sfv sit sha1 svg tar tif?f torrent ts txt vob wave? wma wmv wmf webm ppt(x|m|b)? xls(x|m|b)? pdf phps png xpi g?zip".split(
                  " "
                )
              ) +
              ")$",
          ]),
          "i"
        ),
        Ha,
        Aq =
          ((Ha = {}),
          (Ha.hit = "h"),
          (Ha.experiments = "ex"),
          (Ha.params = "p"),
          (Ha.reachGoal = "g"),
          (Ha.userParams = "up"),
          (Ha.trackHash = "th"),
          (Ha.accurateTrackBounce = "atb"),
          (Ha.notBounce = "nb"),
          (Ha.addFileExtension = "fe"),
          (Ha.extLink = "el"),
          (Ha.file = "fc"),
          (Ha.trackLinks = "tl"),
          (Ha.destruct = "d"),
          (Ha.setUserID = "ui"),
          (Ha.getClientID = "ci"),
          (Ha.clickmap = "cm"),
          (Ha.enableAll = "ea"),
          Ha),
        er = $a(/^.+\.mtproxy\.yandex\.net$/),
        gf = w(function (a) {
          if ("MetrikaPlayer" === a.name) return !0;
          a = P(a).hostname;
          return er(a);
        }),
        ce = w(function () {
          return { Jb: {}, pending: {}, wb: {} };
        }),
        ng = U("postMessage"),
        fr = E("s.f", function (a, c, b, d, e) {
          c = c(d);
          var f = ce(a),
            g = I(":", [c.Y.hc, c.Y.key]);
          if (ng(b)) {
            f.pending[g] = e;
            try {
              b.postMessage(c.ug, "*");
            } catch (h) {
              delete f.pending[g];
              return;
            }
            T(
              a,
              function () {
                delete f.pending[g];
              },
              5e3,
              "if.s"
            );
          }
        }),
        gr = E("s.fh", function (a, c, b, d, e, f) {
          var g = null,
            h = null,
            k = ce(a),
            l = null;
          try {
            (g = qb(a, f.data)), (h = g.__yminfo), (l = g.data);
          } catch (m) {
            return;
          }
          if (
            !ka(h) &&
            h.substring &&
            "__yminfo" === h.substring(0, 8) &&
            !ka(l) &&
            ((g = h.split(":")), 4 === g.length)
          )
            if (
              ((h = c.id),
              (c = g[1]),
              (a = g[2]),
              (g = g[3]),
              !ca(l) && l.type && "0" === g && l.counterId)
            ) {
              if (!l.toCounter || l.toCounter == h) {
                k = null;
                try {
                  k = f.source;
                } catch (m) {}
                !La(k) &&
                  ng(k) &&
                  ((f = d.N(l.type, [f, l])),
                  (e = y(t(N, Ch(e)), f.concat([{}]))),
                  (l = b([c, a, l.counterId], e)),
                  k.postMessage(l.ug, "*"));
              }
            } else
              g === "" + h &&
                ca(l) &&
                V(function (m) {
                  return !(!m.hid || !m.counterId);
                }, l).length === l.length &&
                (b = k.pending[I(":", [c, a])]) &&
                b.apply(null, [f].concat(l));
        }),
        qi = w(function (a, c) {
          var b,
            d = Vb("getElementsByTagName", n(a, "document")),
            e = ce(a),
            f = ng(a),
            g = Lc(a),
            h = la(a);
          if (!d || !f) return null;
          d = d.call(a.document, "iframe");
          f = ((b = {}), (b.counterId = c.id), (b.hid = "" + yc(a)), b);
          $o(a, g);
          b = ap(a, f);
          var k = G([a, u([], b)], fr);
          z(function (l) {
            var m = null;
            try {
              m = l.contentWindow;
            } catch (p) {}
            m &&
              k(m, { type: "initToChild" }, function (p, r) {
                g.N("initToParent", [p, r]);
              });
          }, d);
          zb(a) &&
            k(a.parent, { type: "initToParent" }, function (l, m) {
              g.N("parentConnect", [l, m]);
            });
          h.C(a, ["message"], G([a, c, b, g, f], gr));
          return { Z: g, Jb: e.Jb, wb: e.wb, ze: k };
        }, t(ub, W)),
        Zd = w(vi, t(ub, W)),
        hr = E("pa.plgn", function (a, c) {
          var b = Zd(a, c);
          b &&
            b.Z.C(
              ["pluginInfo"],
              D(a, "c.plgn", function () {
                var d = O(a);
                d.o("cmc", d.l("cmc", 0) + 1);
                return Op(c, Pj);
              })
            );
        }),
        Be = da(function (a, c) {
          return O(c).l(a, null);
        }),
        sb = {
          mc: function (a) {
            a = oc(a).l("mt", {});
            a = Aa(a);
            return a.length
              ? L(
                  function (c, b, d) {
                    return "" + c + (d ? "-" : "") + b[0] + "-" + b[1];
                  },
                  "",
                  a
                )
              : null;
          },
        };
      sb.oo = Be("oo");
      sb.pmc = Be("cmc");
      sb.clc = Be("cls");
      sb.lt = function (a) {
        var c = oc(a).l("lt", null);
        return c ? a.Math.round(100 * c) : c;
      };
      sb.re = t(function (a, c) {
        return !c.gb && Ii(a, c);
      }, vb);
      sb.aw = function (a) {
        a = Za(t(ka, Fb), [
          a.document.hidden,
          a.document.msHidden,
          a.document.webkitHidden,
        ]);
        return ka(a) ? null : Ed(!a);
      };
      sb.ifc = function (a) {
        return oc(a).l("ifc");
      };
      sb.ifb = function (a) {
        return oc(a).l("ifb");
      };
      var ir = fa(sb),
        ui = w(function () {
          return { kf: null, zc: [] };
        }, W),
        jr = [
          ["domainLookupEnd", "domainLookupStart"],
          ["connectEnd", "connectStart"],
          ["responseStart", "requestStart"],
          ["responseEnd", "responseStart"],
          ["fetchStart", "navigationStart"],
          ["redirectEnd", "redirectStart"],
          [
            function (a, c) {
              return n(c, "redirectCount") || n(a, "navigation.redirectCount");
            },
          ],
          ["domInteractive", "domLoading"],
          ["domContentLoadedEventEnd", "domContentLoadedEventStart"],
          ["domComplete", "navigationStart"],
          ["loadEventStart", "navigationStart"],
          ["loadEventEnd", "loadEventStart"],
          ["domContentLoadedEventStart", "navigationStart"],
        ],
        ib,
        kr = [
          ["domainLookupEnd", "domainLookupStart"],
          ["connectEnd", "connectStart"],
          ["responseStart", "requestStart"],
          ["responseEnd", "responseStart"],
          ["fetchStart"],
          ["redirectEnd", "redirectStart"],
          ["redirectCount"],
          ["domInteractive", "responseEnd"],
          ["domContentLoadedEventEnd", "domContentLoadedEventStart"],
          ["domComplete"],
          ["loadEventStart"],
          ["loadEventEnd", "loadEventStart"],
          ["domContentLoadedEventStart"],
        ],
        ti =
          ((ib = {}),
          (ib.responseEnd = 1),
          (ib.domInteractive = 1),
          (ib.domContentLoadedEventStart = 1),
          (ib.domContentLoadedEventEnd = 1),
          (ib.domComplete = 1),
          (ib.loadEventStart = 1),
          (ib.loadEventEnd = 1),
          (ib.unloadEventStart = 1),
          (ib.unloadEventEnd = 1),
          (ib.secureConnectionStart = 1),
          ib),
        lr = w(Hd),
        Vo = { "*": "+", "-": "/", fm: "=", "+": "*", "/": "-", "=": "_" },
        sd = w(function (a) {
          a = n(a, "console");
          var c = n(a, "log");
          c = qe("log", c) ? C(c, a) : B;
          var b = n(a, "warn");
          b = qe("warn", b) ? C(b, a) : c;
          var d = n(a, "error");
          a = qe("error", d) ? C(d, a) : c;
          return { log: c, error: a, warn: b };
        }),
        mr = E("p.cd", function (a) {
          if (Xc(a) || ne(a)) {
            var c = Na(a);
            if (ka(c.l("jn"))) {
              c.o("jn", !1);
              var b = a.km || dd(a) ? function () {} : /./;
              a = sd(a);
              b.toString = function () {
                c.o("jn", !0);
                return "Yandex.Metrika counter is initialized";
              };
              a.log("%c%s", "color: inherit", b);
            }
          }
        }),
        To = /Firefox\/([0-9]+)/,
        So = /([0-9\\.]+) Safari/,
        nr = /\sYptp\/\d\.(\d+)\s/,
        Uo = /Edg\/(\d+)\./,
        Zj = w(function (a) {
          var c;
          a: {
            if ((c = lb(a)) && (c = nr.exec(c)) && 1 < c.length) {
              c = Ba(c[1]);
              break a;
            }
            c = 0;
          }
          return (50 <= c && 99 >= c) || oi(a, 79) ? !1 : !xe(a) || yf(a);
        }),
        Tg =
          "monospace;sans-serif;serif;Andale Mono;Arial;Arial Black;Arial Hebrew;Arial MT;Arial Narrow;Arial Rounded MT Bold;Arial Unicode MS;Bitstream Vera Sans Mono;Book Antiqua;Bookman Old Style;Calibri;Cambria;Cambria Math;Century;Century Gothic;Century Schoolbook;Comic Sans;Comic Sans MS;Consolas;Courier;Courier New;Garamond;Geneva;Georgia;Helvetica;Helvetica Neue;Impact;Lucida Bright;Lucida Calligraphy;Lucida Console;Lucida Fax;LUCIDA GRANDE;Lucida Handwriting;Lucida Sans;Lucida Sans Typewriter;Lucida Sans Unicode;Microsoft Sans Serif;Monaco;Monotype Corsiva;MS Gothic;MS Outlook;MS PGothic;MS Reference Sans Serif;MS Sans Serif;MS Serif;MYRIAD;MYRIAD PRO;Palatino;Palatino Linotype;Segoe Print;Segoe Script;Segoe UI;Segoe UI Light;Segoe UI Semibold;Segoe UI Symbol;Tahoma;Times;Times New Roman;Times New Roman PS;Trebuchet MS;Verdana;Wingdings;Wingdings 2;Wingdings 3".split(
            ";"
          ),
        il = w(function (a) {
          a = ab(a)("canvas");
          var c = n(a, "getContext");
          if (!c) return null;
          try {
            var b = C(c, a)("2d");
            b.font = "72px mmmmmmmmmmlli";
            var d = b.measureText("mmmmmmmmmmlli").width;
            return function (e) {
              b.font = "72px " + e;
              return b.measureText("mmmmmmmmmmlli").width === d;
            };
          } catch (e) {
            return null;
          }
        }),
        ak = Fa(String.prototype.repeat, "repeat"),
        Ng = ak
          ? function (a, c) {
              return ak.call(a, c);
            }
          : Tp,
        re = [2277735313, 289559509],
        se = [1291169091, 658871167],
        bk = /\/$/,
        or = w(
          t(
            aa,
            sa(function (a) {
              return -new a.b.Date().getTimezoneOffset();
            })
          )
        ),
        pr = t(
          aa,
          sa(function (a) {
            a = new a.b.Date();
            return I(
              "",
              y(jp, [
                a.getFullYear(),
                a.getMonth() + 1,
                a.getDate(),
                a.getHours(),
                a.getMinutes(),
                a.getSeconds(),
              ])
            );
          })
        ),
        qr = t(aa, sa(fe)),
        ck = w(
          t(
            aa,
            sa(function (a) {
              return a.ra[0];
            })
          )
        ),
        rr = w(Ac),
        sr = w(Ac),
        tr = w(function (a) {
          var c = n(a, "webkitRequestFileSystem");
          if (R(c) && !Xc(a))
            return new K(C(c, a, 0, 0))
              .then(function () {
                var d = n(a, "navigator.storage") || {};
                return d.estimate ? d.estimate() : {};
              })
              .then(function (d) {
                return (d = d.quota) && 12e7 > d ? !0 : !1;
              })
              ["catch"](u(!0, N));
          if (ed(a))
            return (c = n(a, "navigator.serviceWorker")), K.resolve(S(c));
          c = n(a, "openDatabase");
          if (dd(a) && R(c)) {
            var b = !1;
            try {
              c(null, null, null, null);
            } catch (d) {
              b = !0;
            }
            return K.resolve(b);
          }
          return K.resolve(
            !n(a, "indexedDB") &&
              (n(a, "PointerEvent") || n(a, "MSPointerEvent"))
          );
        }),
        ur = /(\?|&)turbo_uid=([\w\d]+)($|&)/,
        vr = w(function (a, c) {
          var b = Rb(a),
            d = P(a).search.match(ur);
          return d && 2 <= d.length
            ? ((d = d[2]), c.gb || b.o("turbo_uid", d), d)
            : (b = b.l("turbo_uid"))
            ? b
            : "";
        }),
        wr = w(function (a) {
          return R(n(a, "yandex.getSiteUid")) ? a.yandex.getSiteUid() : null;
        }),
        ba,
        wb,
        xr = w(function (a) {
          a = O(a);
          var c = a.l("counterNum", 0) + 1;
          a.o("counterNum", c);
          return c;
        }, t(ub, W)),
        rb =
          ((ba = {}),
          (ba.vf = u(hd.version, N)),
          (ba.nt = Iq),
          (ba.fp = function (a, c, b) {
            if (b.F && b.F.nohit) return null;
            c = W(c);
            b = rr(a);
            if (b[c]) return null;
            a: {
              var d = ck(a),
                e = n(a, "performance.getEntriesByType");
              if (R(e)) {
                if (
                  ((a = V(
                    t(N, U("name"), ta("first-contentful-paint")),
                    e.call(a.performance, "paint")
                  )),
                  a.length)
                ) {
                  a = a[0].startTime;
                  break a;
                }
              } else {
                e = n(a, "chrome.loadTimes");
                if (
                  R(e) &&
                  ((e = e.call(a.chrome)), (e = n(e, "firstPaintTime")), d && e)
                ) {
                  a = 1e3 * e - d;
                  break a;
                }
                if ((a = n(a, "performance.timing.msFirstPaint"))) {
                  a -= d;
                  break a;
                }
              }
              a = void 0;
            }
            return a ? ((b[c] = a), Math.round(a)) : null;
          }),
          (ba.fu = function (a, c, b) {
            var d = b.F;
            if (!d) return null;
            c = (n(a, "document.referrer") || "").replace(bk, "");
            b = (d["page-ref"] || "").replace(bk, "");
            d = d["page-url"];
            a = P(a).href !== d;
            c = c !== b;
            b = 0;
            a && c ? (b = 3) : c ? (b = 1) : a && (b = 2);
            return b;
          }),
          (ba.en = $q),
          (ba.la = Oj),
          (ba.ut = function (a, c, b) {
            var d = b.Hc;
            (b = b.F) && (Vq(a) || c.Oe || d) && (b.ut = "noindex");
            return null;
          }),
          (ba.v = u(na.Ja, N)),
          (ba.cn = xr),
          (ba.dp = function (a) {
            var c = O(a),
              b = c.l("bt", {});
            if (S(c.l("bt"))) {
              var d = n(a, "navigator.getBattery");
              try {
                b.p = d ? d.call(a.navigator) : null;
              } catch (e) {}
              c.o("bt", b);
              b.p &&
                b.p.then &&
                b.p.then(function (e) {
                  b.Pj = e.charging && 0 === e.chargingTime;
                });
            }
            return b.Pj ? "1" : "0";
          }),
          (ba.ls = w(function (a, c) {
            var b = rd(a, c.id),
              d = aa(a),
              e = b.l("lsid");
            return +e ? e : ((d = Ua(a, 0, d(Y))), b.o("lsid", d), d);
          }, ub)),
          (ba.hid = yc),
          (ba.z = or),
          (ba.i = pr),
          (ba.et = qr),
          (ba.c = t(U("navigator.cookieEnabled"), vb)),
          (ba.rn = t(N, Ua)),
          (ba.rqn = function (a, c, b) {
            b = b.F;
            if (!b || b.nohit) return null;
            a = rd(a, c.id);
            c = (a.l("reqNum", 0) || 0) + 1;
            a.o("reqNum", c);
            if (a.l("reqNum") === c) return c;
            a.ic("reqNum");
            return null;
          }),
          (ba.u = Cd),
          (ba.tp = t(ub, fj, vb)),
          (ba.tpid = t(ub, function (a) {
            a = W(a);
            return (Yb[a] && Yb[a].Ej) || null;
          })),
          (ba.w = function (a) {
            a = jd(a);
            return a[0] + "x" + a[1];
          }),
          (ba.s = function (a) {
            var c = n(a, "screen");
            if (c) {
              a = n(c, "width");
              var b = n(c, "height");
              c = n(c, "colorDepth") || n(c, "pixelDepth");
              return I("x", [a, b, c]);
            }
            return null;
          }),
          (ba.sk = U("devicePixelRatio")),
          (ba.ifr = t(zb, vb)),
          (ba.j = t(Kq, vb)),
          (ba.sti = function (a) {
            return zb(a) ? (Jq(a) ? "1" : null) : null;
          }),
          ba);
      rb.pri = function (a) {
        if (ad(a)) return null;
        var c = sr(a),
          b = c.Xf;
        S(b) &&
          ((c.Xf = null),
          tr(a).then(function (d) {
            c.Xf = d;
          }));
        return b ? 1 : null;
      };
      A(
        rb,
        ((wb = {}),
        (wb.iss = t(Lq, vb)),
        (wb.hdl = t(Mq, vb)),
        (wb.iia = t(Nq, vb)),
        (wb.cpf = t(Oq, vb)),
        (wb.ntf = w(function (a) {
          a: switch (n(a, "Notification.permission")) {
            case "denied":
              a = !1;
              break a;
            case "granted":
              a = !0;
              break a;
            default:
              a = null;
          }
          return La(a) ? null : a ? 2 : 1;
        })),
        (wb.eu = Be("isEU")),
        (wb.ns = ck),
        (wb.np = function (a) {
          if (Ua(a, 0, 100)) a = null;
          else {
            a = Db(pf(a), 100);
            for (var c = [], b = 0; b < a.length; b++) {
              var d = a.charCodeAt(b);
              128 > d
                ? c.push(d)
                : (127 < d && 2048 > d
                    ? c.push((d >> 6) | 192)
                    : (c.push((d >> 12) | 224), c.push(((d >> 6) & 63) | 128)),
                  c.push((d & 63) | 128));
            }
            a = xh(c);
          }
          return a;
        }),
        wb)
      );
      rb.ds = function (a, c, b) {
        c = W(c);
        a = Ri(a);
        b = b.F;
        if ((void 0 === b ? {} : b).nohit) return null;
        var d = (b = null);
        n(a, "getEntriesByType") &&
          (d = n(a.getEntriesByType("navigation"), "0")) &&
          (b = kr);
        if (!b) {
          var e = n(a, "timing");
          e && ((b = jr), (d = e));
        }
        if (!b) return null;
        a = Xo(a, d, b);
        c = lr(c);
        return (c = Wo(c, a)) && I(",", c);
      };
      rb.bu = wr;
      rb.td = vr;
      rb.wv = u(2, N);
      rb.co = function (a) {
        return Ed(O(a).l("jn"));
      };
      var yr = fa(rb);
      rb.we = function (a, c) {
        return vb(c.Ta);
      };
      var Po = yr.concat(ir),
        No = [
          "RTCPeerConnection",
          "mozRTCPeerConnection",
          "webkitRTCPeerConnection",
        ],
        Jo = da(function (a, c) {
          if (!c[a]) {
            var b,
              d = new K(function (e) {
                b = e;
              });
            c[a] = { bg: b, Qa: d, cg: !1 };
          }
          return c[a].Qa;
        }),
        pi = w(t(Ac, sa)),
        og = w(
          function (a, c, b) {
            var d = O(a);
            c = Na(a);
            var e = [];
            b = G([a, b, d, c], Qo);
            ad(a) || Ro(a, "14.1") || e.push(G([Mo, "pp", ""], b));
            var f = Zj(a) && !ni(a, 68);
            f || e.push(G([Oo, "pu", ""], b));
            f ||
              c.Qd ||
              xe(a) ||
              (e.push(G([Ho, "zzlc", "na"], b)), e.push(G([Go, "cc", ""], b)));
            return e.length
              ? {
                  Ia: function (g, h) {
                    if (0 === d.l("isEU"))
                      try {
                        z(t(N, Ma), e);
                      } catch (k) {}
                    h();
                  },
                  ba: function (g, h) {
                    var k = g.H;
                    if (k && 0 === d.l("isEU"))
                      try {
                        z(sa(k), e);
                      } catch (l) {}
                    h();
                  },
                }
              : {};
          },
          function (a, c, b) {
            return W(b);
          }
        ),
        bd = Hb("retryReqs", function (a) {
          return Na(a).l("retryReqs", {});
        }),
        Fo = ["0"],
        Gl = E("g.r", function (a) {
          var c = aa(a),
            b = bd(a),
            d = c(Y),
            e = yc(a);
          return L(
            function (f, g) {
              var h = g[0],
                k = g[1];
              k &&
                !k.d &&
                k.ghid &&
                k.ghid !== e &&
                k.time &&
                500 < d - k.time &&
                k.time + 864e5 > d &&
                2 >= k.browserInfo.rqnl &&
                ((k.d = 1),
                f.push({
                  protocol: k.protocol,
                  host: k.host,
                  jj: k.resource,
                  dj: k.postParams,
                  T: k.params,
                  eh: k.browserInfo,
                  rm: k.ghid,
                  time: k.time,
                  Nb: Ba(h),
                  qh: k.counterId,
                  aa: k.counterType,
                }));
              return f;
            },
            [],
            Aa(b)
          );
        }),
        zf = [],
        Eo = "ru en et fi lt lv pl fr no sr".split(" "),
        Jb,
        Co =
          ((Jb = {}),
          (Jb["GDPR-ok"] = "ok"),
          (Jb["GDPR-ok-view-default"] = "ok-default"),
          (Jb["GDPR-ok-view-detailed"] = "ok-detailed"),
          (Jb["GDPR-ok-view-detailed-0"] = "ok-detailed-all"),
          (Jb["GDPR-ok-view-detailed-1"] = "ok-detailed-tech"),
          (Jb["GDPR-ok-view-detailed-2"] = "ok-detailed-tech-analytics"),
          (Jb["GDPR-ok-view-detailed-3"] = "ok-detailed-tech-other"),
          Jb),
        Yd = [],
        ii = t(Af, fb(Dq(Wd)), Wc(",")),
        ji = t(tc(Qb(Wd)), cc, Boolean),
        vo = w(function (a, c) {
          var b = c.l("gdpr");
          return F(b, Tb) ? "-" + b : "";
        }),
        dk = w(Hd),
        jb,
        $b,
        Ya,
        ro =
          ((jb = {}),
          (jb.am = "com.am"),
          (jb.tr = "com.tr"),
          (jb.ge = "com.ge"),
          (jb.il = "co.il"),
          (jb["\u0440\u0444"] = "ru"),
          (jb["xn--p1ai"] = "ru"),
          (jb["\u0443\u043a\u0440"] = "ua"),
          (jb["xn--j1amh"] = "ua"),
          (jb["\u0431\u0435\u043b"] = "by"),
          (jb["xn--90ais"] = "by"),
          jb),
        td =
          "85822663:0 21279832:0 34273590:0 64681882:0 42639109:0 23731303:0 86821095:0".split(
            " "
          ),
        ek =
          (($b = {}),
          ($b["an.yandex.ru/mapuid/google/?partner-tag=yandex_llc"] = {
            bc: td,
          }),
          ($b["an.yandex.ru/mapuid/google/?partner-tag=yandexcom"] = {
            bc: td,
          }),
          ($b["an.yandex.ru/mapuid/google/?partner-tag=yandexru"] = { bc: td }),
          ($b["mc.edadeal.ru"] = { Rc: /^([^/]+\.)?edadeal\.ru$/, zg: "ru" }),
          ($b["mc.yandexsport.ru"] = {
            Rc: /^([^/]+\.)?yandexsport\.ru$/,
            zg: "ru",
          }),
          ($b["mc.kinopoisk.ru"] = {
            Rc: /^([^/]+\.)?kinopoisk\.ru$/,
            zg: "ru",
          }),
          $b),
        to =
          ((Ya = {}),
          (Ya.ka = "ge"),
          (Ya.ro = "md"),
          (Ya.tg = "tj"),
          (Ya.tk = "tm"),
          (Ya.et = "ee"),
          (Ya.hy = "com.am"),
          (Ya.he = "co.li"),
          (Ya.ky = "kg"),
          (Ya.uk = "ua"),
          (Ya.be = "by"),
          (Ya.tr = "com.tr"),
          (Ya.kk = "kz"),
          Ya),
        fk = w(Hd),
        zr = w(function (a) {
          var c = t(
            tc(t(N, ta("ru"), Fb)),
            vc(function (b, d) {
              b[d] = ["mc.yandex." + d];
              return b;
            }, {})
          )(xi);
          z(function (b) {
            var d = b[0];
            b = b[1];
            if (!b.bc || F(a, b.bc)) c[d] = [d];
          }, Aa(ek));
          return c;
        }),
        Ar = w(function (a) {
          var c = P(a).hostname;
          return L(
            function (b, d) {
              var e = d[0],
                f = d[1];
              (f.Rc && !f.Rc.test(c)) || b.push(e);
              return b;
            },
            [],
            Aa(ek)
          );
        }),
        Br = da(function (a, c) {
          var b = Sj(c),
            d = so(c),
            e = Ar(c) || [po(c)],
            f = aa(c),
            g = Na(c),
            h = g.l("synced", {});
          b = b ? e.concat(d) : e;
          h &&
            (b = V(function (k) {
              var l = (h[k] || 1) + 1440 < f(db);
              l && delete h[k];
              return l;
            }, b));
          g.o("synced", h);
          return L(
            function (k, l) {
              z(function (m) {
                var p = { domain: m, Fi: l };
                md(m, "/") && (p.mi = 1);
                k.push(p);
              }, a[l] || []);
              return k;
            },
            [],
            b
          );
        }),
        Cr = (function (a, c) {
          return function (b, d, e) {
            d = W(e);
            e = zr(d);
            var f = Br(e),
              g = F(d, td);
            return xe(b) || ed(b)
              ? {}
              : {
                  ba: function (h, k) {
                    var l = h.H,
                      m = O(b),
                      p = Sj(b) || g,
                      r = zb(b);
                    l = !(l && l.l("pv"));
                    if (!p || r || l) return k();
                    p = f(b);
                    if (!p.length) return k();
                    if (m.l("startSync")) fk(b).push(k);
                    else {
                      m.o("startSync", !0);
                      m = G([b, p, B], a);
                      if (g) return m().then(k, k);
                      p = zf[0];
                      if (!p) return k();
                      p(b)
                        .then(m)
                        .then(k, t(Sc(k), D(b, c)))
                        ["catch"](B);
                    }
                  },
                };
          };
        })(function (a, c) {
          var b = aa(a),
            d = O(a),
            e = Na(a),
            f = zd(a, "c"),
            g = xb(a, f);
          return L(
            function (h, k) {
              function l() {
                var r = e.l("synced");
                d.o("startSync", !1);
                r && ((r[k.Fi] = p), e.o("synced", r));
                z(Ma, fk(a));
              }
              var m = g(
                  { ua: ["sync.cook"] },
                  [
                    na.Ka +
                      "//" +
                      k.domain +
                      (k.mi ? "" : "/sync_cookie_image_check"),
                  ],
                  { Rb: 1500 }
                ),
                p;
              m.then(function () {
                p = b(db);
                l();
              })["catch"](function () {
                p = b(db) - 1435;
                l();
              });
              m = u(m, N);
              return h.then(m);
            },
            K.resolve(""),
            c
          )["catch"](D(a, "ctl"));
        }, "sy.c"),
        fi = !1,
        oo = /^[a-z][\w.+-]+:/i,
        gk = {},
        Ce,
        Ja = [Ff, fd, kc(), Ef],
        hk = "et w v z i u vf".split(" ");
      hk.push("we");
      var pg = kc(hk);
      Ja.push(Cr);
      Ja.unshift(function (a, c, b) {
        return {
          Ia: function (d, e) {
            var f = Ia(a, b);
            (f = f && f.userParams) && d.hd && f(d.hd);
            e();
          },
        };
      });
      Ja.unshift(function (a, c, b) {
        return {
          ba: function (d, e) {
            if (d.T && (ej(b, d.T), !d.$ && d.H && d.F)) {
              var f = eb(a, d.T),
                g = dk(a),
                h = d.H.l("pv");
              f &&
                !d.F.nohit &&
                (h
                  ? encodeURIComponent(f).length > na.Og
                    ? g.push([d.H, d.T])
                    : (d.F["site-info"] = f)
                  : ((d.$ = f), (d.Mi = !0)));
            }
            e();
          },
          Ia: function (d, e) {
            var f = dk(a),
              g = Ia(a, b),
              h = g && g.params;
            h &&
              ((g = V(t(U("0"), ta(d.H)), f)),
              z(function (k) {
                h(k[1]);
                k = we(a)(k, f);
                f.splice(k, 1);
              }, g));
            e();
          },
        };
      });
      Ja.push(gi);
      Ja.push(ei);
      Ja.push(og);
      Ja.push(function (a) {
        return {
          ba: function (c, b) {
            var d = c.H,
              e = Na(a).l("fip");
            e && d && (d.o("fip", e), Ud(c, "fip", Ed(e)));
            b();
          },
        };
      });
      Ja.push($d());
      var wa = ((Ce = {}), (Ce.h = Ja), (Ce.er = []), Ce);
      wa.adb = [];
      var ik = [kc(), Ef];
      ik.push(og);
      wa.f = ik;
      wa["2"] = Ja;
      wa["1"] = (function (a, c) {
        return V(t(Qb(c), Fb), a);
      })(Ja, [Ef]);
      wa.a = Ja;
      wa.g = Ja;
      wa.e = Ja;
      var jk = [fd];
      jk.push(
        (function () {
          return function (a) {
            return {
              ba: function (c, b) {
                var d = c.H,
                  e = void 0 === d ? ua() : d,
                  f = c.Nb,
                  g = bd(a);
                d = e.l("rqnl", 0) + 1;
                e.o("rqnl", d);
                if ((e = n(g, I(".", [f, "browserInfo"])))) (e.rqnl = d), Cf(a);
                b();
              },
              Ia: function (c, b) {
                mi(a, c);
                b();
              },
            };
          };
        })()
      );
      wa.r = jk;
      var qg = [];
      qg.push(pg);
      qg.push($d());
      wa.p = qg;
      wa["6"] = [fd];
      wa.t = Ja;
      wa["4"] = [pg];
      wa.W = [pg];
      var ud = [Ff, fd, kc()];
      ud.push(gi);
      ud.push(og);
      ud.push(ei);
      ud.push($d());
      wa.n = ud;
      wa.d = [kc(["hid", "u", "v", "vf"])];
      wa.m = [kc(["u", "v", "vf"]), $d()];
      wa.s = [];
      wa.u = [];
      wa.S = [kc(["v", "hid", "u", "vf", "rn"])];
      wa.pi = [];
      Ja.unshift(function (a, c, b) {
        return {
          ba: function (d, e) {
            var f = d.H,
              g = d.F;
            if (!f || !g) return e();
            !gk[b.id] &&
              f.l("pv") &&
              b.exp &&
              !g.nohit &&
              ((g.exp = b.exp), (gk[b.id] = !0));
            f = g["page-ref"];
            var h = g["page-url"];
            f && h !== f ? (g["page-ref"] = ci(a, f)) : delete g["page-ref"];
            g["page-url"] = ci(a, h).slice(0, na.Qg);
            return e();
          },
        };
      });
      wa["5"] = V(t(Qb([Ff, fd]), Fb), Ja);
      var De,
        kk = C(K.reject, K, Va()),
        ia = ((De = {}), (De.h = Ra), (De.er = u(kk, N)), De);
      ia.a = Ra;
      ia.p = ae;
      ia["4"] = ae;
      ia.f = Ra;
      ia.n = Ra;
      ia["6"] = function (a, c, b) {
        var d = xb(a, c);
        return function (e) {
          return If(a, b, e, !0).then(
            G([e, ["https://mc.yandex.md/cc"], { Re: !0, Ig: !1 }], d)
          );
        };
      };
      ia["1"] = Ra;
      ia.n = Ra;
      ia.c = xb;
      ia.g = Ra;
      ia.e = Ra;
      ia["2"] = Ra;
      ia.r = function (a, c, b) {
        var d = ae(a, c, b),
          e = Ra(a, c, b);
        return function (f, g, h) {
          return "webvisor" === h ? d(f, g, f.F["wv-part"]) : e(f, g);
        };
      };
      ia.adb = be;
      ia.s = xb;
      ia.S = Ra;
      ia.u = xb;
      ia.pi = xb;
      ia.m = function (a, c, b) {
        return function (d, e) {
          var f,
            g = d.F;
          g = ((f = {}), (f["page-url"] = (g && g["page-url"]) || ""), f);
          f = A(d, { F: A(d.F || {}, g) });
          return be(a, c, b)(f, "clmap/" + e.id)["catch"](D(a, "c.m"));
        };
      };
      ia.d = Ra;
      ia.t = Ra;
      ia.W = ae;
      ia["5"] = Ra;
      ia["8"] = xb;
      var qa = E(
          "g.sen",
          function (a, c, b) {
            var d = zd(a, c);
            b = lo(a, c, b);
            var e = ia[c],
              f = e ? e(a, d, b) : Ra(a, d, b);
            return function () {
              var g = xa(arguments),
                h = g.slice(1);
              g = A(g[0], { ua: [c] });
              return f.apply(void 0, va([g], h));
            };
          },
          kk
        ),
        ai = w(t(U("id"), Qb([26812653])), W),
        Dr = E("dc.init", function (a) {
          var c = P(a),
            b = sd(a),
            d = Rb(a),
            e = rf(a),
            f = e.xi;
          e = e.li;
          f && !e && d.o("debug", "1", void 0, c.host);
          return ff(a) || (!f && !e) ? { log: B, warn: B, error: B } : b;
        }),
        Td = w(Dr),
        Er = D(window, "h.p", function (a, c) {
          var b,
            d,
            e = qa(a, "h", c),
            f = c.qc || "" + P(a).href,
            g = c.Nh || a.document.referrer,
            h = {
              H: ua(((b = {}), (b.pv = 1), b)),
              F: ((d = {}), (d["page-url"] = f), (d["page-ref"] = g), d),
            };
          h.T = c.T;
          h.hd = c.hd;
          c.$b && h.F && (h.F.nohit = "1");
          return e(h, c)
            .then(function (k) {
              k &&
                (c.$b ||
                  Nb(
                    a,
                    c,
                    "PageView. Counter " +
                      c.id +
                      ". URL: " +
                      f +
                      ". Referrer: " +
                      g,
                    c.T
                  )(),
                Ab(a, G([a, c, k], Ko)));
            })
            ["catch"](D(a, "h.g.s"));
        }),
        Yc = w(Ac, W),
        Fr = E("p.ar", function (a, c) {
          var b = qa(a, "a", c);
          return function (d, e, f, g, h, k) {
            var l,
              m,
              p = { F: {}, H: ua(((l = {}), (l.pv = 1), (l.ar = 1), l)) };
            if (d)
              return (
                (e = Lb(e)
                  ? {
                      title: e.title,
                      Zf: e.referer,
                      T: e.params,
                      Ua: e.callback,
                      b: e.ctx,
                    }
                  : { title: e, Zf: f, T: g, Ua: h, b: k }),
                (f = Yc(c)),
                f.url !== d && ((f.ref = f.url), (f.url = d)),
                (d = d || P(a).href),
                (f = e.Zf || f.ref || a.document.referrer),
                (g = Nb(
                  a,
                  c,
                  "PageView. Counter " +
                    c.id +
                    ". URL: " +
                    d +
                    ". Referrer: " +
                    f,
                  e.T
                )),
                (p = b(
                  A(p, {
                    T: e.T,
                    title: e.title,
                    F: A(
                      p.F,
                      ((m = {}), (m["page-url"] = d), (m["page-ref"] = f), m)
                    ),
                  }),
                  c
                ).then(g)),
                wc(a, "p.ar.s", p, e.Ua || B, e.b)
              );
          };
        }),
        jo = {
          K: "stamp",
          L: "frameId",
          Y: "meta",
          Ye: "base",
          Bf: "hasBase",
          Ve: "address",
          Dg: "ua",
          oe: "prev",
          Pf: "namespace",
          Fc: "keystrokes",
          Jf: "isMeta",
          Gc: "modifier",
          lb: "pageWidth",
          kb: "pageHeight",
          qg: "startNode",
          ff: "endNode",
          Jg: "zoomFrom",
          Lg: "zoomTo",
          level: "level",
          duration: "duration",
          wa: "i",
          Jc: "o",
          n: "n",
          r: "r",
          ec: "ct",
          ub: "at",
          Qf: "nm",
          Rf: "ns",
          je: "pa",
          me: "pr",
          ae: "nx",
          Ma: "h",
          Aa: "changes",
          Ue: "a",
          Xe: "b",
          nd: "c",
          ie: "op",
        },
        ko = ["attributes", "attrs"],
        Ee = (function () {
          function a(c) {
            this.b = c;
          }
          a.prototype.Da = function (c) {
            var b = Sd(c);
            c = y(C(this.Ea, this), b);
            return Xe(
              eb(
                this.b,
                y(function (d, e) {
                  var f;
                  return A({}, b[e], ((f = {}), (f.data = d), f));
                }, c)
              )
            );
          };
          a.prototype.Ea = function (c) {
            var b = c.data;
            "string" !== typeof b && (b = eb(this.b, Sd(c.data)));
            return b;
          };
          a.prototype.La = function (c) {
            return encodeURIComponent(c).length;
          };
          a.prototype.ad = function (c, b) {
            for (var d = Math.ceil(c.length / b), e = [], f = 0; f < b; f += 1)
              e.push(c.slice(f * d, d * (f + 1)));
            return e;
          };
          a.prototype.isEnabled = function () {
            return !!this.b.JSON;
          };
          return a;
        })(),
        ho = w(function (a) {
          function c(f, g, h, k) {
            d[0] = g;
            h[k] = e[3];
            h[k + 1] = e[2];
            h[k + 2] = e[1];
            h[k + 3] = e[0];
          }
          function b(f, g, h, k) {
            d[0] = g;
            h[k] = e[0];
            h[k + 1] = e[1];
            h[k + 2] = e[2];
            h[k + 3] = e[3];
          }
          if (
            "undefined" === typeof a.Float32Array ||
            "undefined" === typeof a.Uint8Array
          )
            return io;
          var d = new Float32Array([-0]),
            e = new Uint8Array(d.buffer);
          return 128 === e[3] ? b : c;
        }),
        co = $h(!1),
        bo = $h(!0),
        Gr = {
          Aj: "topics",
          fj: "publicationDate",
          cj: "pageUrlCanonical",
          Mj: "updateDate",
          bh: "authors",
          Zg: "articleInfo",
          mj: "rubric",
          gj: "publishersHeader",
          eb: "involvedTime",
          bj: "pageTitle",
          Gi: "maxScrolled",
          $e: "chars",
          $g: "articleMeta",
        },
        Hr = (function () {
          function a(c) {
            this.b = c;
            this.Fb = t(
              Aa,
              vc(function (b, d) {
                b[d[1]] = d[0];
                return b;
              }, {})
            )(Gr);
          }
          a.prototype.wg = function (c) {
            var b,
              d = this.ne(c.data);
            return {
              K: aa(this.b)(Mf),
              data: ((b = {}), (b[this.Fb[c.type]] = d), b),
            };
          };
          a.prototype.ne = function (c) {
            var b = this;
            return ca(c)
              ? y(C(this.ne, this), c)
              : Lb(c)
              ? t(
                  Aa,
                  vc(function (d, e) {
                    var f = e[0];
                    d[b.Fb[f] || f] = b.ne(e[1]);
                    return d;
                  }, {})
                )(c)
              : c;
          };
          a.prototype.Ea = function (c) {
            return Qd(this.b, vf, this.wg(c))(ee(B));
          };
          a.prototype.La = function (c) {
            return c[0];
          };
          a.prototype.ad = function (c) {
            return [c];
          };
          a.prototype.Da = function (c) {
            var b = this;
            c = Qd(this.b, Th, { buffer: y(C(this.wg, this), c) });
            return ic(
              this.b,
              c,
              20,
              de
            )(
              Ae(function (d) {
                d = sf(b.b, d.slice(-4));
                return ic(b.b, d, 20, de);
              })
            )(
              mg(function (d) {
                return d[d.length - 1];
              })
            );
          };
          a.prototype.isEnabled = function () {
            return Sh(this.b);
          };
          return a;
        })(),
        lk = (function () {
          function a(c, b, d) {
            this.cf = 0;
            this.le = 1;
            this.jd = 5e3;
            this.b = c;
            this.sa = b;
            this.Be = d;
          }
          a.prototype.$c = function () {
            this.cf = T(
              this.b,
              t(C(this.flush, this), C(this.$c, this)),
              this.jd,
              "b.f"
            );
          };
          a.prototype.send = function (c, b) {
            var d = this.Be(c, b || [], this.le);
            this.le += 1;
            return d;
          };
          a.prototype.push = function () {};
          a.prototype.flush = function () {};
          return a;
        })(),
        rg,
        sg =
          ((rg = (function (a) {
            function c(b, d, e, f) {
              void 0 === f && (f = 0);
              d = a.call(this, b, d, e) || this;
              d.Je = 0;
              d.tb = 0;
              d.Ie = 0;
              d.buffer = [];
              d.jd = 2e3;
              d.Z = Lc(b);
              d.$c();
              d.Ie = f;
              return d;
            }
            Da(c, a);
            c.prototype.sf = function (b) {
              return V(Boolean, this.Z.N("ag", b));
            };
            c.prototype.rf = function (b, d) {
              var e = this;
              b(
                Sb(D(this.b, "wv2.b.st"), function (f) {
                  e.send(f, d);
                })
              );
            };
            c.prototype.tj = function (b, d) {
              var e = this;
              ha(this.b, this.cf);
              var f = Math.ceil(this.sa.La(d) / 63e4),
                g = this.sa.ad(d, f);
              z(function (h, k) {
                var l,
                  m = A(
                    {},
                    b,
                    ((l = {}),
                    (l.data = h),
                    (l.partNum = k + 1),
                    (l.end = k + 1 === f),
                    l)
                  );
                l = e.sa.Da([m], !1);
                e.rf(l, [m]);
              }, g);
              this.$c();
            };
            c.prototype.send = function (b, d) {
              var e = this;
              this.Z.N("se", d);
              return a.prototype.send.call(this, b, d).then(N, function () {
                e.Z.N("see", d);
              });
            };
            c.Fd = function (b, d, e, f, g) {
              c.ld["" + b + d] ||
                (this.ld[d] = new c(g, f, e, "m" === d ? 31457280 : 0));
              return this.ld[d];
            };
            c.prototype.Ai = function () {
              return this.Ie && this.Je >= this.Ie;
            };
            c.prototype.push = function (b) {
              var d = this;
              if (!this.Ai()) {
                this.Z.N("p", b);
                var e = this.sa.Ea(b),
                  f = this.sa.La(e);
                7e5 < f
                  ? this.tj(b, e)
                  : ((e = this.sf(this.buffer.concat([b]))),
                    (e = L(
                      function (g, h) {
                        return g + d.sa.La(d.sa.Ea(h));
                      },
                      0,
                      e
                    )),
                    this.tb + e + f >= 7e5 * 0.7 && this.flush(),
                    this.buffer.push(b),
                    (this.tb += f));
              }
            };
            c.prototype.C = function (b, d) {
              this.Z.C([b], d);
            };
            c.prototype.da = function (b, d) {
              this.Z.da([b], d);
            };
            c.prototype.flush = function () {
              var b = this.buffer.concat(this.sf(this.buffer));
              if (b.length) {
                this.buffer = [];
                this.Je += this.tb;
                this.tb = 0;
                var d = this.sa.Da(b);
                this.rf(d, b);
              }
            };
            return c;
          })(lk)),
          (rg.ld = {}),
          rg),
        vd,
        tg = ((vd = {}), (vd[1] = 500), (vd[2] = 500), (vd[3] = 0), vd),
        ug = (function () {
          function a(c) {
            var b,
              d = this;
            this.id = "a";
            this.Pd = !1;
            this.Ab = {};
            this.ob = {
              "schema.org":
                "Article NewsArticle Movie BlogPosting Review Recipe Answer".split(
                  " "
                ),
              Tf: ["article"],
            };
            this.Me = ((b = {}), (b.Answer = 3), (b.Review = 2), b);
            this.ph = w(function (e, f) {
              Bb(
                d.b,
                "Warning: content has only " +
                  f.chars +
                  " chars. Required " +
                  tg[f.type],
                f
              );
            });
            this.b = c;
            this.root = Pb(c);
          }
          a.prototype.Ba = function (c) {
            return c.element;
          };
          a.prototype.tf = function (c, b) {
            var d = this,
              e;
            D(this.b, "P.s." + b, function () {
              e = d.Ab[b].call(d, c);
            })();
            return e;
          };
          a.prototype.ej = function (c) {
            var b = A({}, c);
            this.Pd &&
              !b.id &&
              F(c.type, [3, 2]) &&
              ((c = I(", ", y(U("name"), b.authors || []))),
              (b.pageTitle = c + ": " + b.pageTitle));
            b.pageTitle || (b.pageTitle = this.ci(b.yb));
            b.pageUrlCanonical ||
              ((c = b.id),
              (b.pageUrlCanonical = (
                "string" !== typeof c ? 0 : /^(https?:)\/\//.test(c)
              )
                ? b.id
                : this.$h()));
            b.id || (b.id = b.pageTitle || b.pageUrlCanonical);
            return b;
          };
          a.prototype.va = function (c) {
            var b = this,
              d = {},
              e = this.Ba(c);
            if (!e) return null;
            d.type = c.type;
            z(function (g) {
              d[g] = b.tf(c, g);
            }, fa(this.Ab));
            var f = aa(this.b);
            d.stamp = f(Mf);
            d.element = c.element;
            d.yb = e;
            d = this.ej(d);
            d.id = d.id ? Ub(d.id) : 1;
            d.update = function (g) {
              return b.Ba(c) ? b.tf(c, g) : void 0;
            };
            return d;
          };
          a.prototype.ci = function (c) {
            for (var b = 1; 5 >= b; b += 1) {
              var d = Sa(rc(this.b, c, "h" + b));
              if (d) return d;
            }
          };
          a.prototype.$h = function () {
            var c = rc(this.b, this.root, '[rel="canonical"]');
            if (c) return c.href;
          };
          a.prototype.zf = function () {
            return 1;
          };
          a.prototype.pc = function () {
            return [];
          };
          a.prototype.Hh = function () {
            var c = this,
              b = this.pc(),
              d = 1;
            return L(
              function (e, f) {
                var g = c.va({ element: f, type: c.zf(f) }) || [];
                ca(g) || (g = [g]);
                g = L(
                  function (h, k) {
                    var l = h.values,
                      m = h.Df;
                    k && k.chars > tg[k.type] && !F(k.id, m)
                      ? (l.push(k), m.push(k.id))
                      : k && k.chars <= tg[k.type] && c.ph(k.id, k);
                    return { values: l, Df: m };
                  },
                  { values: [], Df: y(U("id"), e) },
                  g
                ).values;
                return e.concat(
                  y(function (h) {
                    var k;
                    h = A(
                      ((k = { index: d, Ae: !1 }), (k.involvedTime = 0), k),
                      h
                    );
                    d += 1;
                    return h;
                  }, g)
                );
              },
              [],
              b
            );
          };
          return a;
        })(),
        mk = (function (a) {
          function c() {
            var b,
              d = (null !== a && a.apply(this, arguments)) || this;
            d.id = "j";
            d.Pd = !0;
            d.bf = I(",", [
              'script[type="application/ld+json"]',
              'script[type="application/json+ld"]',
              'script[type="ld+json"]',
              'script[type="json+ld"]',
            ]);
            d.Ab =
              ((b = {}),
              (b.id = function (e) {
                var f = e.data["@id"];
                e = e.data.mainEntity || e.data.mainEntityOfPage;
                !f && e && (f = e["@id"]);
                return f;
              }),
              (b.chars = function (e) {
                return "string" === typeof e.data.text
                  ? e.data.text.length
                  : this.Ba(e).innerText.length;
              }),
              (b.authors = function (e) {
                var f = [];
                f = f.concat(this.oc(e.data, "author"));
                f = f.concat(this.oc(e.data.mainEntity, "author"));
                return f.concat(this.oc(e.data.mainEntityOfPage, "author"));
              }),
              (b.pageTitle = function (e) {
                var f = e.data.headline || "";
                e.data.hm && (f += " " + e.data.alternativeHeadline);
                "" === f &&
                  (e.data.name
                    ? (f = e.data.name)
                    : e.data.itemReviewed && (f = e.data.itemReviewed));
                3 === e.type &&
                  e.data.parentItem &&
                  (f = e.data.parentItem.text);
                return f;
              }),
              (b.updateDate = function (e) {
                return e.data.dateModified || "";
              }),
              (b.publicationDate = function (e) {
                return e.data.datePublished || "";
              }),
              (b.pageUrlCanonical = function (e) {
                return e.data.url;
              }),
              (b.topics = function (e) {
                return this.oc(e.data, "about", ["name", "alternateName"]);
              }),
              (b.rubric = function (e) {
                var f = this,
                  g = this.Ba(e);
                e = V(
                  Boolean,
                  y(function (h) {
                    if ((h = qb(f.b, h.innerText))) {
                      var k = f.uf(h);
                      if (k)
                        return L(
                          function (l, m) {
                            return l
                              ? l
                              : "BreadcrumbList" === m["@type"]
                              ? m
                              : l;
                          },
                          null,
                          k
                        );
                      if ("BreadcrumbList" === h["@type"]) return h;
                    }
                    return null;
                  }, [e.element].concat(
                    ja(
                      tb(
                        this.bf,
                        this.b,
                        document.body === g ? document.documentElement : g
                      )
                    )
                  ))
                );
                return e.length && ((e = e[0].itemListElement), ca(e))
                  ? V(
                      Boolean,
                      y(function (h) {
                        return h.item && !f.b.isNaN(h.position)
                          ? {
                              name: h.item.name || h.name,
                              position: h.position,
                            }
                          : null;
                      }, e)
                    )
                  : [];
              }),
              b);
            return d;
          }
          Da(c, a);
          c.prototype.oc = function (b, d, e) {
            void 0 === e && (e = ["name"]);
            if (!b || !b[d]) return [];
            b = ca(b[d]) ? b[d] : [b[d]];
            b = V(
              Boolean,
              y(function (f) {
                return f
                  ? "string" === typeof f
                    ? f
                    : L(
                        function (g, h) {
                          return g || f[h];
                        },
                        "",
                        e
                      )
                  : null;
              }, b)
            );
            return y(function (f) {
              var g;
              return (g = {}), (g.name = f), g;
            }, b);
          };
          c.prototype.Ba = function (b) {
            var d = b.element,
              e = b.data["@id"],
              f = b.data.url;
            b = null;
            f && "string" === typeof f && (b = this.jf(f));
            !b && e && "string" === typeof e && (b = this.jf(e));
            b ||
              ((b = e = d.parentNode),
              !Mb("head", this.b, d) && e && 0 !== e.innerText.length) ||
              (b = this.b.document.body);
            return b;
          };
          c.prototype.jf = function (b) {
            try {
              var d = sc(this.b, b).hash;
              if (d) {
                var e = rc(this.b, this.b.document.body, d);
                if (e) return e;
              }
            } catch (f) {}
            return null;
          };
          c.prototype.ke = function (b) {
            return this.Me[b["@type"]] || 1;
          };
          c.prototype.va = function (b) {
            var d = this,
              e = b.element;
            if (
              !b.data &&
              ((b.data = qb(this.b, e.innerText)),
              !b.data ||
                (!/schema\.org/.test(b.data["@context"]) && !ca(b.data)))
            )
              return null;
            var f = this.uf(b.data);
            if (f)
              return y(function (h) {
                if (!F(h["@type"], d.ob["schema.org"])) return null;
                h = { element: e, data: h, type: d.ke(h) };
                return a.prototype.va.call(d, h);
              }, f);
            if ("QAPage" === b.data["@type"]) {
              var g = b.data.mainEntity || b.data.mainEntityOfPage;
              if (!g) return null;
            }
            "Question" === b.data["@type"] && (g = b.data);
            return g
              ? ((b = bc(u(g, n), ["acceptedAnswer", "suggestedAnswer"])),
                y(function (h) {
                  var k;
                  if (!h || !F(h["@type"], d.ob["schema.org"])) return null;
                  h = {
                    element: e,
                    type: d.ke(h),
                    data: A(((k = {}), (k.parentItem = g), k), h),
                  };
                  return a.prototype.va.call(d, h);
                }, b))
              : F(b.data["@type"], this.ob["schema.org"])
              ? a.prototype.va.call(this, A(b, { type: this.ke(b.data) }))
              : null;
          };
          c.prototype.pc = function () {
            return tb(this.bf, this.b, this.root);
          };
          c.prototype.uf = function (b) {
            return (ca(b) && b) || (b && ca(b["@graph"]) && b["@graph"]);
          };
          return c;
        })(ug),
        vg = (function (a) {
          function c() {
            var b,
              d = (null !== a && a.apply(this, arguments)) || this;
            d.id = "s";
            d.Pd = !0;
            d.Jj = ea(
              "exec",
              new RegExp("schema.org\\/(" + I("|", fa(d.Me)) + ")$")
            );
            d.Ab =
              ((b = {}),
              (b.id = function (e) {
                e = e.element;
                var f = Xa(this.b, e, "identifier");
                return f
                  ? Sa(f)
                  : (f = Xa(this.b, e, "mainEntityOfPage")) &&
                    f.getAttribute("itemid")
                  ? f.getAttribute("itemid")
                  : null;
              }),
              (b.chars = function (e) {
                var f = 0;
                e = e.element;
                for (
                  var g = [
                      "articleBody",
                      "reviewBody",
                      "recipeInstructions",
                      "description",
                      "text",
                    ],
                    h = 0;
                  h < g.length;
                  h += 1
                ) {
                  var k = Xa(this.b, e, g[h]);
                  if (k) {
                    f = Sa(k).length;
                    break;
                  }
                }
                0 === f && e.innerText && (f += e.innerText.length);
                return f;
              }),
              (b.topics = function (e) {
                var f = this,
                  g = od(this.b, e.element, "about");
                return y(function (h) {
                  var k = { name: Sa(h) };
                  if ((g = Xa(f.b, h, "name"))) k.name = Sa(g);
                  return k;
                }, g);
              }),
              (b.rubric = function (e) {
                var f = this;
                (e = rc(
                  this.b,
                  e.element,
                  '[itemtype$="schema.org/BreadcrumbList"]'
                )) ||
                  (e = rc(
                    this.b,
                    this.root,
                    '[itemtype$="schema.org/BreadcrumbList"]'
                  ));
                return e
                  ? y(function (g) {
                      return {
                        name: Sa(Xa(f.b, g, "name")),
                        position: Sa(Xa(f.b, g, "position")),
                      };
                    }, od(this.b, e, "itemListElement"))
                  : [];
              }),
              (b.updateDate = function (e) {
                return (e = Xa(this.b, e.element, "dateModified")) ? rj(e) : "";
              }),
              (b.publicationDate = function (e) {
                return (e = Xa(this.b, e.element, "datePublished"))
                  ? rj(e)
                  : "";
              }),
              (b.pageUrlCanonical = function (e) {
                e = od(this.b, e.element, "url");
                return e.length ? (e[0].href ? e[0].href : Sa(e)) : null;
              }),
              (b.pageTitle = function (e) {
                var f = "",
                  g = e.element,
                  h = Xa(this.b, g, "headline");
                h && (f += Sa(h));
                (h = Xa(this.b, g, "alternativeHeadline")) &&
                  (f += " " + Sa(h));
                "" === f &&
                  ((h = Xa(this.b, g, "name")) ||
                    (h = Xa(this.b, g, "itemReviewed")),
                  h && (f += Sa(h)));
                3 === e.type &&
                  (e = Mb('[itemtype$="schema.org/Question"]', this.b, g)) &&
                  (e = Xa(this.b, e, "text")) &&
                  (f += Sa(e));
                return f;
              }),
              (b.authors = function (e) {
                var f = this;
                e = od(this.b, e.element, "author");
                return y(function (g) {
                  var h,
                    k = ((h = {}), (h.name = ""), h);
                  /.+schema.org\/(Person|Organization)/.test(
                    g.getAttribute("itemtype") || ""
                  ) &&
                    (h = Xa(f.b, g, "name")) &&
                    (k.name = Sa(h));
                  k.name ||
                    (k.name =
                      g.getAttribute("content") ||
                      g.innerText ||
                      g.getAttribute("href"));
                  return k;
                }, e);
              }),
              b);
            return d;
          }
          Da(c, a);
          c.prototype.zf = function (b) {
            b = b.getAttribute("itemtype") || "";
            return (b = this.Jj(b)) ? this.Me[b[1]] : 1;
          };
          c.prototype.va = function (b) {
            return b.element &&
              b.element.innerText &&
              b.element.innerText.length
              ? a.prototype.va.call(this, b)
              : null;
          };
          c.prototype.pc = function () {
            var b = I(
              ",",
              y(function (d) {
                return '[itemtype$="schema.org/' + d + '"]';
              }, this.ob["schema.org"])
            );
            return tb(b, this.b, this.root);
          };
          return c;
        })(ug),
        nk = (function (a) {
          function c(b) {
            var d;
            b = a.call(this, b) || this;
            b.id = "o";
            b.Ab =
              ((d = {}),
              (d.chars = function (e) {
                e = this.Ba(e);
                return e.innerText ? e.innerText.length : 0;
              }),
              (d.authors = function (e) {
                return this.Ed(e.data.author);
              }),
              (d.pageTitle = function (e) {
                return this.vc(e.data.title) || "";
              }),
              (d.updateDate = function (e) {
                return this.vc(e.data.modified_time);
              }),
              (d.publicationDate = function (e) {
                return this.vc(e.data.published_time);
              }),
              (d.pageUrlCanonical = function (e) {
                return this.vc(e.data.url);
              }),
              (d.rubric = function (e) {
                return this.Ed(e.data.section);
              }),
              (d.topics = function (e) {
                return this.Ed(e.data.tag);
              }),
              d);
            b.yh = new RegExp("^(og:)?((" + I("|", b.ob.Tf) + "):)?");
            return b;
          }
          Da(c, a);
          c.prototype.Ed = function (b) {
            var d;
            return b
              ? ca(b)
                ? y(function (e) {
                    var f;
                    return (f = {}), (f.name = e), f;
                  }, b)
                : [((d = {}), (d.name = b), d)]
              : [];
          };
          c.prototype.vc = function (b) {
            return ca(b) ? (b.length ? b[0] : null) : b;
          };
          c.prototype.pc = function () {
            var b = tb(
              'meta[property="og:type"]',
              this.b,
              this.b.document.body
            );
            return [this.b.document.head].concat(b);
          };
          c.prototype.Th = function (b) {
            var d = this,
              e = b.element,
              f = {},
              g = this.Ba(b);
            e = tb(
              "meta[property]",
              this.b,
              e === this.b.document.head ? e : g
            );
            if (e.length)
              z(function (h) {
                try {
                  if (
                    h.parentNode === g ||
                    h.parentNode === d.b.document.head
                  ) {
                    var k = h.getAttribute("property").replace(d.yh, ""),
                      l = Sa(h);
                    f[k]
                      ? ca(f[k])
                        ? f[k].push(l)
                        : (f[k] = [f[k], l])
                      : (f[k] = l);
                  }
                } catch (m) {
                  Nd(d.b, "og.ed", m);
                }
              }, e);
            else return null;
            return F(f.type, this.ob.Tf) ? A(b, { data: f }) : null;
          };
          c.prototype.Ba = function (b) {
            b = b.element;
            var d = this.b.document;
            return b === d.head ? d.body : b.parentNode;
          };
          c.prototype.va = function (b) {
            return (b = this.Th(b)) ? a.prototype.va.call(this, b) : null;
          };
          return c;
        })(ug),
        ok =
          "resize scroll mousemove mousedown click windowfocus keydown orientationchange change focus touchmove touchstart".split(
            " "
          ),
        Ir = (function () {
          function a(c, b, d, e) {
            this.Dc = !1;
            this.Y = {};
            this.scroll = { x: 0, y: 0 };
            this.eb = this.Nf = 0;
            this.Zd = this.Wf = "";
            this.ea = [];
            this.Ga = 0;
            this.rb = { Ma: 0, Pe: 0 };
            this.buffer = d;
            this.Ub = C(this.Ub, this);
            this.rc = C(this.rc, this);
            this.Kc = C(this.Kc, this);
            this.b = c;
            this.vd = e;
            this.Wc = b;
            this.Ud = "pai" + b.id;
            this.Bb();
            this.gf = la(this.b);
            this.time = aa(this.b);
            this.Eg();
            this.wc = O(this.b);
          }
          a.prototype.start = function () {
            var c = this;
            if (!this.Dc) {
              this.buffer.C("ag", this.rc);
              this.buffer.C("se", this.Kc);
              this.vj();
              var b = this.wc.l(this.Ud, []),
                d = !b.length;
              b.push(C(this.Ci, this));
              this.wc.Fa(this.Ud, b);
              d && this.eg();
              this.wc.Fa("pai", function () {
                return c.ea.length
                  ? L(
                      function (e, f) {
                        return (e.Xc || 0) <= (f.Xc || 0) ? f : e;
                      },
                      c.ea[0],
                      c.ea.slice(1)
                    ).id
                  : 0;
              });
              this.Ub({ type: "page", target: this.b });
            }
          };
          a.prototype.stop = function () {
            this.buffer.da("se", this.Kc);
            this.buffer.da("ag", this.rc);
            this.Kj();
            this.Dc = !0;
          };
          a.prototype.Lf = function (c) {
            return Mb("html", this.b, c) !== this.b.document.documentElement;
          };
          a.prototype.eg = function () {
            var c = this;
            D(this.b, "p.ic" + this.Wc.id, function () {
              if (!c.Dc) {
                var b = c.wc.l(c.Ud),
                  d = c.Wc.Hh();
                z(function (e) {
                  var f = y(function (g) {
                    return A({}, g);
                  }, d);
                  R(e) && e(f);
                }, b);
                c.Ga = T(c.b, C(c.eg, c), 1e3, "p");
              }
            })();
          };
          a.prototype.Ci = function (c) {
            this.Dc || (this.Lj(c), this.Nj(), this.qj());
          };
          a.prototype.Ub = function (c) {
            var b = this;
            D(this.b, "p.ec." + this.Wc.id, function () {
              try {
                var d = c.type;
                var e = c.target;
              } catch (l) {
                return;
              }
              var f = "page" === d;
              if ("scroll" === d || f) {
                var g = [
                  b.b,
                  b.b.document,
                  b.b.document.documentElement,
                  mc(b.b),
                ];
                F(e, g) && b.Bb();
              }
              ("resize" === d || f) && b.Eg();
              d = b.time(Y);
              var h = Math.min(d - b.Nf, 5e3);
              b.eb += Math.round(h);
              b.Nf = d;
              if (b.Y && b.scroll && b.rb) {
                var k = b.rb.Ma * b.rb.Pe;
                b.ea = y(function (l) {
                  var m = A({}, l),
                    p = b.Y[m.id],
                    r = Mc(l.yb);
                  if (!p || b.Lf(m.element) || !r) return m;
                  l = b.b.Math;
                  p = l.max((b.scroll.y + b.rb.Ma - p.y) / p.height, 0);
                  var q = r.height * r.width;
                  r = b.gh(r);
                  m.Xc = r / k;
                  m.visibility = r / q;
                  if (0.9 <= m.visibility || 0.1 <= m.Xc) m.involvedTime += h;
                  m.maxScrolled = l.round(1e4 * p) / 1e4;
                  return m;
                }, b.ea);
              }
            })();
          };
          a.prototype.gh = function (c) {
            var b = c.top,
              d = c.bottom,
              e = c.left,
              f = this.rb,
              g = f.Pe;
            f = f.Ma;
            var h = this.b.Math;
            c = h.min(h.max(c.right, 0), g) - h.min(h.max(e, 0), g);
            return (h.min(h.max(d, 0), f) - h.min(h.max(b, 0), f)) * c;
          };
          a.prototype.Lj = function (c) {
            var b = y(function (d) {
              return d.id;
            }, this.ea);
            this.ea = this.ea.concat(
              V(function (d) {
                return !F(d.id, b);
              }, c)
            );
          };
          a.prototype.Eg = function () {
            var c = Uf(this.b) || jd(this.b);
            this.rb = { Pe: c[0], Ma: c[1] };
          };
          a.prototype.Nj = function () {
            var c = this;
            D(this.b, "p.um." + this.Wc.id, function () {
              var b = [];
              c.Bb();
              c.Y = L(
                function (d, e) {
                  var f;
                  if (c.Lf(e.element)) b.push(e), delete d[e.id];
                  else {
                    var g =
                      ((f = {}),
                      (f.id = e.id),
                      (f.involvedTime = Math.max(e.involvedTime, 0)),
                      (f.maxScrolled = e.maxScrolled || 0),
                      (f.chars = e.update ? e.update("chars") || 0 : 0),
                      f);
                    e.yb &&
                      (f = Mc(e.yb)) &&
                      ((g.x = Math.max(Math.round(f.left) + c.scroll.x, 0)),
                      (g.y = Math.max(Math.round(f.top) + c.scroll.y, 0)),
                      (g.width = Math.round(f.width)),
                      (g.height = Math.round(f.height)));
                    d[e.id] = g;
                  }
                  return d;
                },
                {},
                c.ea
              );
              z(function (d) {
                d = we(c.b)(d, c.ea);
                c.ea.splice(d, 1);
              }, b);
            })();
          };
          a.prototype.Kc = function () {
            this.Wf = this.Zd;
          };
          a.prototype.rc = function () {
            var c,
              b,
              d = y(u(this.Y, n), fa(this.Y));
            return d.length && ((this.Zd = eb(this.b, d)), this.Wf !== this.Zd)
              ? ((c = {}),
                (c.type = "publishersHeader"),
                (c.data =
                  ((b = {}),
                  (b.articleMeta = d || []),
                  (b.involvedTime = this.eb),
                  b)),
                c)
              : null;
          };
          a.prototype.qj = function () {
            var c = this;
            if (this.ea.length) {
              var b = V(function (d) {
                return !d.Ae;
              }, this.ea);
              z(function (d) {
                var e,
                  f = A({}, d);
                delete f.yb;
                delete f.Ae;
                delete f.index;
                delete f.involvedTime;
                delete f.visibility;
                delete f.Xc;
                delete f.maxScrolled;
                delete f.update;
                delete f.element;
                delete f.type;
                c.buffer.push(
                  ((e = {}),
                  (e.type = "articleInfo"),
                  (e.stamp = f.stamp),
                  (e.data = f),
                  e)
                );
                d.Ae = !0;
              }, b);
              b.length && Bb(this.b, "Publisher content info found: ", b);
            }
          };
          a.prototype.vj = function () {
            this.gf.C(this.b, ok, this.Ub);
          };
          a.prototype.Kj = function () {
            this.gf.Sb(this.b, ok, this.Ub);
          };
          a.prototype.Bb = function () {
            this.scroll = {
              x:
                this.b.pageXOffset ||
                n(this.b, "document.documentElement.scrollLeft") ||
                0,
              y:
                this.b.pageYOffset ||
                n(this.b, "document.documentElement.scrollLeft") ||
                0,
            };
          };
          return a;
        })(),
        wd = {};
      mk && (wd.json_ld = mk);
      vg && ((wd.schema = vg), (wd.microdata = vg));
      nk && (wd.opengraph = nk);
      var Jr = E("p.p", function (a, c) {
          function b(l, m, p) {
            return e(A({}, k, { $: l, af: Rh(m) }), c, p)["catch"](
              D(a, "s.ww.p")
            );
          }
          if (!ma("querySelectorAll", a.document.querySelectorAll))
            return K.resolve();
          var d = [new Ee(a)];
          d.unshift(new Hr(a));
          var e = qa(a, "p", c),
            f = Za(function (l) {
              return l.isEnabled();
            }, d);
          d = ua();
          var g = rd(a, c.id),
            h = g.l("pai");
          h && (g.ic("pai"), d.o("pai", h));
          var k = { F: {}, H: d, Hf: !(f instanceof Ee) };
          return ya(
            a,
            c,
            D(a, "ps.s", function (l) {
              if ((l = n(l, "settings.publisher.schema"))) {
                l = fj(c) ? "microdata" : l;
                var m = wd[l];
                if (m && f) {
                  var p = W(c),
                    r = sg.Fd(p, "e", b, f, a);
                  m = new m(a);
                  new Ir(a, m, r, p).start();
                  Bb(a, 'Publishers analytics schema "' + l + '"');
                }
              }
            })
          );
        }),
        Fe = da(function (a, c) {
          return nn(a, c);
        }),
        Kr = E("c.c.cc", function (a) {
          var c = O(a),
            b = t(Fe(a), function (d) {
              var e;
              return A(
                {},
                d,
                ((e = {}),
                (e.oldCode = !!a.ya_cid),
                (e.clickmap = !!d.clickmap),
                e)
              );
            });
          return D(a, "g.c.cc", t(C(c.l, c, "counters", {}), fa, fb(b)));
        }),
        Lr = E("gt.c.rs", function (a, c) {
          var b,
            d = W(c),
            e = c.id,
            f = c.aa,
            g = c.oh,
            h = c.Ta,
            k = c.Ke,
            l = G([a, d], mn);
          Qh(
            a,
            d,
            ((b = {}),
            (b.id = e),
            (b.type = +f),
            (b.clickmap = g),
            (b.webvisor = !!h),
            (b.trackHash = !!k),
            b)
          );
          return l;
        }),
        tj,
        Mr = E("th.e", function (a, c) {
          function b() {
            f ||
              (h = Vc(a, "onhashchange")
                ? la(a).C(a, ["hashchange"], g)
                : hq(a, g));
          }
          var d = qa(a, "t", c),
            e = Pd(a, W(c)),
            f = !1,
            g = D(a, "h.h.ch", C(iq, null, a, c, d)),
            h = B;
          c.Ke && (b(), (f = !0));
          return {
            Fj: D(a, "tr.hs.h", function (k) {
              var l;
              k ? b() : h();
              f = !!k;
              e(((l = {}), (l.trackHash = f), l));
            }),
            unsubscribe: h,
          };
        }),
        pk = {
          1882689622: 1,
          2318205080: 1,
          3115871109: 1,
          3604875100: 1,
          339366994: 1,
          2890452365: 1,
          849340123: 1,
          173872646: 1,
          2343947156: 1,
          655012937: 1,
          3724710748: 1,
          3364370932: 1,
          1996539654: 1,
          2065498185: 1,
          823651274: 1,
          12282461: 1,
          1555719328: 1,
          1417229093: 1,
          138396985: 1,
        },
        Nr = w(function () {
          return L(
            function (a, c) {
              var b = Ub(c + "/tag.js");
              pk[b] || (a[b] = 1);
              return a;
            },
            {},
            [
              "mc.yandex.ru",
              "mc.yandex.com",
              "cdn.jsdelivr.net/npm/yandex-metrica-watch",
            ]
          );
        }),
        uj = 1,
        eg = {},
        te = {},
        Qr = E("nb.p", function (a, c) {
          function b(J) {
            k() ||
              ((J = "number" === typeof J ? J : 15e3),
              (J = kq(a, d(!1), J)),
              (q = J.id),
              (x = J.df),
              l());
          }
          function d(J) {
            return function (X) {
              var ra, Ea, Kb;
              void 0 === X &&
                (X = ((ra = {}), (ra.ctx = {}), (ra.callback = B), ra));
              if (J || (!r && !h.Qd)) {
                r = !0;
                l();
                q && jq(a, q);
                var Ge = m(Y);
                ra = (Ba(h.l("lastHit")) || 0) < Ge - 18e5;
                var Or = 0.1 > Math.random();
                h.o("lastHit", Ge);
                Ge = ua(
                  ((Ea = {}), (Ea.nb = "1"), (Ea.cl = v), (Ea.ar = "1"), Ea)
                );
                Ea = Yc(c);
                Ea = {
                  F: ((Kb = {}), (Kb["page-url"] = Ea.url || P(a).href), Kb),
                  H: Ge,
                };
                Kb = sd(a).warn;
                !X.callback && X.ctx && Kb('"callback" argument missing');
                if (J || ra || Or || !dp(a.location.href, a.document.referrer))
                  return (
                    (Kb = f(Ea, c).then(function () {
                      if (!J) {
                        var Ec = 0.002,
                          Fc = c.id === na.Rg ? 1 : 0.002,
                          Gc,
                          He,
                          wg,
                          Ie,
                          xg;
                        void 0 === Ec && (Ec = 1);
                        void 0 === Fc && (Fc = 1);
                        var xd = a.performance;
                        if (
                          xd &&
                          R(xd.getEntriesByType) &&
                          ((Ec = Math.random() > Ec),
                          (Fc = Math.random() > Fc),
                          !Ec || !Fc)
                        ) {
                          xd = a.performance.getEntriesByType("resource");
                          for (
                            var Je = {}, yg = {}, Ke = {}, Pr = Nr(a), zg = 0;
                            zg < xd.length;
                            zg += 1
                          ) {
                            var nb = xd[zg],
                              Le = nb.name
                                .replace(/^https?:\/\//, "")
                                .split("?")[0],
                              qk = Ub(Le),
                              rk =
                                ((Gc = {}),
                                (Gc.dns = Math.round(
                                  nb.domainLookupEnd - nb.domainLookupStart
                                )),
                                (Gc.tcp = Math.round(
                                  nb.connectEnd - nb.connectStart
                                )),
                                (Gc.duration = Math.round(nb.duration)),
                                (Gc.response = Math.round(
                                  nb.responseEnd - nb.requestStart
                                )),
                                Gc);
                            "script" !== nb.initiatorType ||
                              Ec ||
                              (yg[Le] = A(
                                rk,
                                ((He = {}),
                                (He.name = nb.name),
                                (He.decodedBodySize = nb.decodedBodySize),
                                He)
                              ));
                            (!pk[qk] && !Pr[qk]) ||
                              Je[Le] ||
                              Fc ||
                              (Je[Le] = A(
                                rk,
                                ((wg = {}), (wg.pages = a.location.href), wg)
                              ));
                          }
                          fa(Je).length && (Ke.timings8 = Je);
                          fa(yg).length && (Ke.scripts = yg);
                          if (fa(Ke).length)
                            qa(
                              a,
                              "d",
                              c
                            )(
                              {
                                H: ua(
                                  ((Ie = {}), (Ie.ar = "1"), (Ie.pv = "1"), Ie)
                                ),
                                $: eb(a, Ke) || void 0,
                                F:
                                  ((xg = {}),
                                  (xg["page-url"] =
                                    a.location && "" + a.location.href),
                                  xg),
                              },
                              { id: na.Tg, aa: "0" }
                            )["catch"](D(a, "r.tim.ng2"));
                        }
                      }
                    })),
                    wc(a, "l.o.l", Kb, X.callback, X.ctx)
                  );
              }
              return null;
            };
          }
          var e,
            f = qa(a, "n", c),
            g = W(c),
            h = rd(a, c.id),
            k = u(u(g, Fe(a)), t(Ma, U("accurateTrackBounce"))),
            l = u(((e = {}), (e.accurateTrackBounce = !0), e), Pd(a, g)),
            m = aa(a),
            p = m(Y),
            r = !1,
            q = 0,
            v = 0,
            x;
          ya(a, c, function (J) {
            v = J.Ih - p;
          });
          c.Vb && b(c.Vb);
          return { Oi: d(!0), Vb: b, zd: x };
        }),
        Ag = [
          "yandex_metrika_callback" + hd.callbackPostfix,
          "yandex_metrika_callbacks" + hd.callbackPostfix,
        ],
        Rr = E("cb.i", function (a) {
          var c = Ag[0],
            b = Ag[1];
          if (R(a[c])) a[c]();
          "object" === typeof a[b] &&
            z(function (d, e) {
              a[b][e] = null;
              wf(a, d);
            }, a[b]);
          z(function (d) {
            try {
              delete a[d];
            } catch (e) {
              a[d] = void 0;
            }
          }, Ag);
        }),
        sk = { sm: $a(/[/&=?#]/) },
        Dd = E("go.in", function (a, c, b, d) {
          void 0 === b && (b = "goal");
          return function (e, f, g, h) {
            var k, l;
            if (!e || (sk[b] && sk[b](e))) return null;
            var m = f,
              p = g || B;
            R(f) && ((p = f), (m = void 0), (h = g));
            var r = Nb(
                a,
                c,
                "Reach goal. Counter: " + c.id + ". Goal id: " + e,
                m
              ),
              q = "goal" === b;
            f = qa(a, "g", c);
            g = ln(a, c, e, b);
            e = g[0];
            g = g[1];
            m = f(
              {
                T: m,
                H: ua(((k = {}), (k.ar = 1), k)),
                F: ((l = {}), (l["page-url"] = e), (l["page-ref"] = g), l),
              },
              c
            ).then(function () {
              q && r();
              d && d();
            });
            return wc(a, "g.s", m, p, h);
          };
        }),
        Sr = da(function (a, c) {
          Ka(c) ? a.push(c) : z(t(N, ea("push", a)), c);
        }),
        Tr = E("cl.p", function (a, c) {
          function b(m, p, r, q) {
            void 0 === q && (q = {});
            r
              ? Od(a, c, {
                  url: r,
                  Eb: !0,
                  Cc: m,
                  Hc: p,
                  sender: d,
                  b: q.ctx,
                  Ua: q.callback,
                  title: q.title,
                  T: q.params,
                })
              : f.warn("Empty link");
          }
          var d = qa(a, "2", c),
            e = [],
            f = sd(a),
            g = W(c),
            h = D(a, "s.s.tr", u(Pd(a, g), kn));
          g = {
            b: a,
            Va: c,
            Gh: e,
            sender: d,
            globalStorage: O(a),
            rh: rd(a, c.id),
            ri: yc(a),
            Gj: u(u(g, Fe(a)), t(Ma, U("trackLinks"))),
          };
          g = D(a, "cl.p.c", u(g, gn));
          g = la(a).C(a, ["click"], g);
          c.ed && h(c.ed);
          var k = D(a, "file.clc", G([!0, !1], b)),
            l = D(a, "e.l.l.clc", G([!1, !0], b));
          e = D(a, "add.f.e.clc", Sr(e));
          return { file: k, Ch: l, Xg: e, ed: h, zd: g };
        }),
        Zm = [
          [
            ["'(-$&$&$'", 30102, 0],
            ["'(-$&$&$'", 29009, 0],
          ],
          [
            ["oWdZ[nc[jh_YW$Yec", 30103, 1],
            ["oWdZ[nc[jh_YW$Yec", 29010, 1],
          ],
        ],
        $m = [
          [["oWdZ[nc[jh_YW$Yec", 30103, 1]],
          [["oWdZ[nc[jh_YW$Yec", 29010, 1]],
        ],
        Nh = { F: { t: 'UV|L7,!"T[rwe&D_>ZIb\\aW#98Y.PC6k' } },
        tk = { id: 42822899, aa: "0" },
        Me,
        fn = ((Me = {}), (Me.s = "p"), (Me["8"] = "i"), Me),
        cn = Hb("csp", function (a, c) {
          return qa(a, "s", c)({}, ["https://ymetrica1.com/watch/3/1"]);
        }),
        Mh = t(U("settings.pcs"), ta("1")),
        Ur = E("s", function (a, c) {
          return ya(a, c, function (b) {
            var d = O(a);
            if (!d.l("dSync", !1))
              return (
                d.o("dSync", !0),
                Lh(a, b, {
                  Va: c,
                  Kb: "s",
                  Wd: "ds",
                  wj: function (e, f, g) {
                    var h = e.Vc;
                    e = e.host;
                    if (n(h, "settings")) return kb(Va("ds.e"));
                    f = f(Y) - g;
                    g = e[1];
                    var k, l;
                    h = ua(((k = {}), (k.di = h), (k.dit = f), (k.dip = g), k));
                    k = ((l = {}), (l["page-url"] = P(a).href), l);
                    return qa(
                      a,
                      "S",
                      tk
                    )({ H: h, F: k }, tk)["catch"](D(a, "ds.rs"));
                  },
                })
              );
          });
        }),
        Vr = w(t(U("performance.memory.jsHeapSizeLimit"), ea("concat", ""))),
        Kh =
          "video/ogg video/mp4 video/webm audio/x-aiff audio/x-m4a audio/mpeg audio/aac audio/wav audio/ogg audio/mp4".split(
            " "
          ),
        Tm = "theora vorbis 1 avc1.4D401E mp4a.40.2 vp8.0 mp4a.40.5".split(" "),
        Sm =
          "prefers-reduced-motion;prefers-reduced-transparency;prefers-color-scheme: dark;prefers-color-scheme: light;pointer: none;pointer: coarse;pointer: fine;any-pointer: none;any-pointer: coarse;any-pointer: fine;scan: interlace;scan: progressive;color-gamut: srgb;color-gamut: p3;color-gamut: rec2020;update: fast;update: slow;update: none;grid: 0;grid: 2;hover: hover;inverted-colors: inverted;inverted-colors: none".split(
            ";"
          ),
        Rm = ["availWidth", "availHeight", "availTop"],
        Wr = ["webgl", "experimental-webgl"],
        Pm = [-0.2, -0.9, 0, 0.4, -0.26, 0, 0, 0.732134444, 0],
        of = u(Va("ccf"), kb),
        Mm =
          "appName vendor deviceMemory hardwareConcurrency maxTouchPoints appVersion productSub appCodeName vendorSub".split(
            " "
          ),
        Gm = da(fc)("(ym-disable-clickmap|ym-clickmap-ignore)"),
        Xr = E("clm.p", function (a, c) {
          if (cd(a)) return B;
          var b = qa(a, "m", c),
            d = W(c),
            e = aa(a),
            f = e(Y),
            g = u(u(d, Fe(a)), t(Ma, U("clickmap"))),
            h,
            k = null,
            l = O(a);
          d = D(a, "clm.p.c", function (m) {
            var p = g();
            if (p) {
              var r = l.l("cls", 0);
              l.o("cls", r + 1);
              r = "object" === typeof p ? p : {};
              var q = r.filter;
              p = r.isTrackHash || !1;
              var v = y(function (J) {
                return ("" + J).toUpperCase();
              }, r.ignoreTags || []);
              S(h) && (h = r.quota || null);
              var x = !!r.quota;
              m = {
                element: Hm(a, m),
                position: Jh(a, m),
                button: Im(m),
                time: e(Y),
              };
              r = P(a).href;
              if (Fm(a, m, k, v, q)) {
                if (x) {
                  if (!h) return;
                  --h;
                }
                v = je(a, m.element);
                q = v[0];
                v = v[1];
                x = Tf(a, m.element);
                q = [
                  "rn",
                  Ua(a),
                  "x",
                  Math.floor((65535 * (m.position.x - x.left)) / (q || 1)),
                  "y",
                  Math.floor((65535 * (m.position.y - x.top)) / (v || 1)),
                  "t",
                  Math.floor((m.time - f) / 100),
                  "p",
                  $i(a, m.element),
                  "X",
                  m.position.x,
                  "Y",
                  m.position.y,
                ];
                q = I(":", q);
                p && (q += ":wh:1");
                Em(a, r, q, b, c);
                k = m;
              }
            }
          });
          return la(a).C(n(a, "document"), ["click"], d);
        }),
        Yr = w(
          function (a) {
            var c = O(a),
              b = c.l("isEU");
            if (S(b)) {
              var d = Ba(Ld(a, "is_gdpr") || "");
              if (F(d, [0, 1])) c.o("isEU", d), (b = !!d);
              else if (((a = Na(a).l("wasSynced")), (a = n(a, "params.eu"))))
                c.o("isEU", a), (b = !!a);
            }
            return b;
          },
          function (a) {
            return O(a).l("isEU");
          }
        ),
        We = E("i.e", Yr),
        Zr = (function () {
          function a(c, b) {
            this.b = c;
            this.Rh = b;
          }
          a.prototype.Da = function (c) {
            return Xe(bc(C(this.Ea, this), c));
          };
          a.prototype.Ea = function (c, b) {
            var d = this,
              e = [],
              f = this.Rh(this.b, b && b.type, c.type);
            f &&
              (e = bc(function (g) {
                return g({ b: d.b, ia: c }) || [];
              }, f));
            return e;
          };
          a.prototype.La = function (c) {
            return c.length;
          };
          a.prototype.ad = function (c) {
            return [c];
          };
          a.prototype.isEnabled = function () {
            return !0;
          };
          return a;
        })(),
        lm = (function (a) {
          function c(b, d, e) {
            b = a.call(this, b, d, e) || this;
            b.buffer = [];
            b.Ng = 7500;
            b.jd = 3e4;
            b.$c();
            return b;
          }
          Da(c, a);
          c.prototype.push = function (b, d) {
            var e = this.sa.Ea(b, d);
            Wa(this.buffer, e);
            this.sa.La(this.buffer) > this.Ng && this.flush();
          };
          c.prototype.flush = function () {
            var b = this.buffer;
            b.length && (this.send(b), (this.buffer = []));
          };
          return c;
        })(lk),
        Oa = "metrikaId_" + Math.random(),
        ec = { sd: 0 },
        uk =
          "first(-|\\.|_|\\s){0,2}name last(-|\\.|_|\\s){0,2}name zip postal phone address passport (bank|credit)(-|\\.|_|\\s){0,2}card card(-|\\.|_|\\s){0,2}number card(-|\\.|_|\\s){0,2}holder cvv card(-|\\.|_|\\s){0,2}exp card(-|\\.|_|\\s){0,2}name card.*month card.*year card.*month card.*year password email birth(-|\\.|_|\\s){0,2}(day|date) second(-|\\.|_|\\s){0,2}name third(-|\\.|_|\\s){0,2}name patronymic middle(-|\\.|_|\\s){0,2}name birth(-|\\.|_|\\s){0,2}place house street city flat state contact.*".split(
            " "
          ),
        tm = ["email", "tel"],
        Cm = /ym-hide-content/,
        Dm = /ym-show-content/,
        zm = /^[\w\u0410-\u042f\u0430-\u044f]$/,
        Am = [65, 90],
        Bm = [97, 122],
        wm =
          "color radio checkbox date datetime-local email month number password range search tel text time url week".split(
            " "
          ),
        um = new RegExp("(" + I("|", uk) + ")", "i"),
        vj = ["password", "passwd", "pswd"],
        vm = new RegExp(
          "(" +
            I(
              "|",
              uk.concat(
                "\u0438\u043c\u044f \u0444\u0430\u043c\u0438\u043b\u0438\u044f \u043e\u0442\u0447\u0435\u0441\u0442\u0432\u043e \u0438\u043d\u0434\u0435\u043a\u0441 \u0442\u0435\u043b\u0435\u0444\u043e\u043d \u0430\u0434\u0440\u0435\u0441 \u043f\u0430\u0441\u043f\u043e\u0440\u0442 \u043d\u043e\u043c\u0435\u0440(-|\\.|_|\\s){0,2}\u043a\u0430\u0440\u0442\u044b \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0430\u044f(-|\\.|_|\\s){0,2}\u043f\u043e\u0447\u0442\u0430 \u0434\u0430\u0442\u0430(-|\\.|_|\\s){0,2}\u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f \u0434\u043e\u043c \u0443\u043b\u0438\u0446\u0430 \u043a\u0432\u0430\u0440\u0442\u0438\u0440\u0430 \u0433\u043e\u0440\u043e\u0434 \u043e\u0431\u043b\u0430\u0441\u0442\u044c".split(
                  " "
                )
              )
            ) +
            ")",
          "i"
        ),
        oq = w(function () {
          var a;
          return (
            (a = {}),
            (a.A = 1),
            (a.ABBR = 2),
            (a.ACRONYM = 3),
            (a.ADDRESS = 4),
            (a.APPLET = 5),
            (a.AREA = 6),
            (a.B = 7),
            (a.BASE = 8),
            (a.BASEFONT = 9),
            (a.BDO = 10),
            (a.BIG = 11),
            (a.BLOCKQUOTE = 12),
            (a.BODY = 13),
            (a.BR = 14),
            (a.BUTTON = 15),
            (a.CAPTION = 16),
            (a.CENTER = 17),
            (a.CITE = 18),
            (a.CODE = 19),
            (a.COL = 20),
            (a.COLGROUP = 21),
            (a.DD = 22),
            (a.DEL = 23),
            (a.DFN = 24),
            (a.DIR = 25),
            (a.DIV = 26),
            (a.DL = 27),
            (a.DT = 28),
            (a.EM = 29),
            (a.FIELDSET = 30),
            (a.FONT = 31),
            (a.FORM = 32),
            (a.FRAME = 33),
            (a.FRAMESET = 34),
            (a.H1 = 35),
            (a.H2 = 36),
            (a.H3 = 37),
            (a.H4 = 38),
            (a.H5 = 39),
            (a.H6 = 40),
            (a.HEAD = 41),
            (a.HR = 42),
            (a.HTML = 43),
            (a.I = 44),
            (a.IFRAME = 45),
            (a.IMG = 46),
            (a.INPUT = 47),
            (a.INS = 48),
            (a.ISINDEX = 49),
            (a.KBD = 50),
            (a.LABEL = 51),
            (a.LEGEND = 52),
            (a.LI = 53),
            (a.LINK = 54),
            (a.MAP = 55),
            (a.MENU = 56),
            (a.META = 57),
            (a.NOFRAMES = 58),
            (a.NOSCRIPT = 59),
            (a.OBJECT = 60),
            (a.OL = 61),
            (a.OPTGROUP = 62),
            (a.OPTION = 63),
            (a.P = 64),
            (a.PARAM = 65),
            (a.PRE = 66),
            (a.Q = 67),
            (a.S = 68),
            (a.SAMP = 69),
            (a.SCRIPT = 70),
            (a.SELECT = 71),
            (a.SMALL = 72),
            (a.SPAN = 73),
            (a.STRIKE = 74),
            (a.STRONG = 75),
            (a.STYLE = 76),
            (a.SUB = 77),
            (a.SUP = 78),
            (a.TABLE = 79),
            (a.TBODY = 80),
            (a.TD = 81),
            (a.TEXTAREA = 82),
            (a.TFOOT = 83),
            (a.TH = 84),
            (a.THEAD = 85),
            (a.TITLE = 86),
            (a.TR = 87),
            (a.TT = 88),
            (a.U = 89),
            (a.UL = 90),
            (a.VAR = 91),
            (a.NOINDEX = 100),
            a
          );
        }),
        lq = [17, 18, 38, 32, 39, 15, 11, 7, 1],
        $r = (function () {
          var a =
            "first(-|\\.|_|\\s){0,2}name last(-|\\.|_|\\s){0,2}name zip postal phone address passport (bank|credit)(-|\\.|_|\\s){0,2}card card(-|\\.|_|\\s){0,2}number card(-|\\.|_|\\s){0,2}holder cvv card(-|\\.|_|\\s){0,2}exp card(-|\\.|_|\\s){0,2}name card.*month card.*year card.*month card.*year password email birth(-|\\.|_|\\s){0,2}(day|date) second(-|\\.|_|\\s){0,2}name third(-|\\.|_|\\s){0,2}name patronymic middle(-|\\.|_|\\s){0,2}name birth(-|\\.|_|\\s){0,2}place house street city flat state".split(
              " "
            );
          return {
            qm: new RegExp("(" + I("|", a) + ")", "i"),
            zm: new RegExp(
              "(" +
                I(
                  "|",
                  a.concat(
                    "\u0438\u043c\u044f;\u0444\u0430\u043c\u0438\u043b\u0438\u044f;\u043e\u0442\u0447\u0435\u0441\u0442\u0432\u043e;\u0438\u043d\u0434\u0435\u043a\u0441;\u0442\u0435\u043b\u0435\u0444\u043e\u043d;\u0430\u0434\u0440\u0435\u0441;\u043f\u0430\u0441\u043f\u043e\u0440\u0442;\u041d\u043e\u043c\u0435\u0440(-|\\.|_|\\s){0,2}\u043a\u0430\u0440\u0442\u044b;\u0434\u0430\u0442\u0430(-|\\.|_|\\s){0,2} \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f;\u0434\u043e\u043c;\u0443\u043b\u0438\u0446\u0430;\u043a\u0432\u0430\u0440\u0442\u0438\u0440\u0430;\u0433\u043e\u0440\u043e\u0434;\u043e\u0431\u043b\u0430\u0441\u0442\u044c".split(
                      ";"
                    )
                  )
                ) +
                ")",
              "i"
            ),
            om: /ym-record-keys/i,
            Qi: "\u2022",
            ym: 88,
          };
        })(),
        Aj = fb(u($r.Qi, N)),
        Tc = !0,
        hg = "",
        ig = !1,
        jg = !0,
        kg = !1,
        rm = da(function (a, c) {
          var b = G([a, "efv." + c.event], D);
          c.M = y(t(N, b), c.M);
          return c;
        }),
        vk = w(function (a) {
          var c = [],
            b = [],
            d = [];
          a.document.attachEvent &&
            !a.opera &&
            (c.push(jf), b.push(sq), b.push(tq));
          a.document.addEventListener ? c.push(yj) : (b.push(xj), d.push(yj));
          c = va(
            [
              { target: a, type: "window", event: "beforeunload", M: [B] },
              { target: a, type: "window", event: "unload", M: [B] },
              { event: "click", M: [ue] },
              { event: "dblclick", M: [ue] },
              { event: "mousedown", M: [ue] },
              { event: "mouseup", M: [vq] },
              { event: "keydown", M: [wq] },
              { event: "keypress", M: [xq] },
              { event: "copy", M: [Cj] },
              { event: "blur", M: c },
              { event: "focusin", M: b },
              { event: "focusout", M: d },
            ],
            !a.document.attachEvent || a.opera
              ? [
                  { target: a, type: "window", event: "focus", M: [Eh] },
                  { target: a, type: "window", event: "blur", M: [jf] },
                ]
              : [],
            a.document.addEventListener
              ? [
                  { event: "focus", M: [xj] },
                  { event: "change", M: [zj] },
                  { event: "submit", M: [Ej] },
                ]
              : [
                  { type: "formInput", event: "change", M: [zj] },
                  { type: "form", event: "submit", M: [Ej] },
                ]
          );
          return qm(a, c);
        }),
        om = w(function (a) {
          return va(
            mc(a)
              ? [{ target: a, type: "document", event: "mouseleave", M: [yq] }]
              : []
          );
        }),
        as = ["submit", "beforeunload", "unload"],
        bs = w(function (a, c) {
          var b = c(a);
          return L(
            function (d, e) {
              d[e.type + ":" + e.event] = e.M;
              return d;
            },
            {},
            b
          );
        }),
        cs = u(vk, function (a, c, b, d) {
          return bs(c, a)[b + ":" + d] || [];
        }),
        pm = /^\s*function submit\(\)/,
        nm = /opera mini/i,
        ds = E("fw.p", function (a, c) {
          if (c.ef || !c.Ta) return K.resolve(B);
          var b = new Zr(a, cs);
          return km(a, c, b, vk, as);
        }),
        es = E("pr.p", function (a, c) {
          var b, d;
          if (Gf(a)) {
            var e = qa(a, "5", c),
              f = ua(((b = {}), (b.pq = 1), (b.ar = 1), b));
            e(
              {
                H: f,
                F:
                  ((d = {}),
                  (d["page-url"] = P(a).href),
                  (d["page-ref"] = n(a, "document.referrer") || ""),
                  d),
              },
              c
            )["catch"](D(a, "pr.p.s"));
          }
        }),
        Qa = t(fa, U("0")),
        fs = E("c.m.p", function (a, c) {
          var b = W(c);
          return u(Pd(a, b), jm);
        }),
        gs = E("e.a.p", function (a, c) {
          var b = Ia(a, c);
          b = G(
            [
              t(N, sa(!0)),
              V(
                Boolean,
                y(u(b, n), ["clickmap", "trackLinks", "accurateTrackBounce"])
              ),
            ],
            y
          );
          c.xh && b();
          return b;
        }),
        hs = E("cc.i", function (a, c) {
          var b = G([a, c], im);
          b = G([a, b, 300], T);
          ya(a, c, b);
        }),
        is = E("s.f.i", function (a, c) {
          return ya(a, c, function (b) {
            if (
              n(b, "settings.button_goals") ||
              -1 !== P(a).href.indexOf("yagoalsbuttons=1")
            )
              la(a).C(
                a,
                ["click"],
                D(a, "c.t.c", t(U("target"), G([a, c], ve(a, c, "", hm))))
              ),
                Nb(a, c, "Button goal. Counter " + c.id + ". Init.")();
          });
        }),
        wh,
        js = E("p.ai", function (a, c) {
          return new K(function (b) {
            (ad(a) || yf(a)) &&
              b(
                ya(a, c, function (d) {
                  var e;
                  return (d = n(d, "settings.sbp"))
                    ? vh(a, A({}, d, ((e = {}), (e.c = c.id), e)), 10)
                    : B;
                })
              );
            b(B);
          });
        }),
        ks = E("8", function (a, c) {
          return ya(a, c, function (b) {
            var d,
              e = n(b, "settings.sbp");
            return (
              e &&
              Lh(a, b, {
                Va: c,
                Kb: "8",
                data: A({}, e, ((d = {}), (d.c = c.id), d)),
                Wd: "cs",
              })
            );
          });
        }),
        ls = E("p.fh", function (a, c) {
          var b, d;
          void 0 === c && (c = !0);
          var e = Na(a),
            f = aa(a),
            g = e.l("wasSynced"),
            h = { id: 3, aa: "0" };
          return c && g && g.time + 864e5 > f(Y)
            ? K.resolve(g)
            : qa(
                a,
                "f",
                h
              )(
                {
                  H: ua(((b = {}), (b.pv = 1), b)),
                  F:
                    ((d = {}),
                    (d["page-url"] = P(a).href),
                    (d["page-ref"] = a.document.referrer),
                    d),
                },
                h
              )
                .then(function (k) {
                  var l;
                  k =
                    ((l = {}),
                    (l.time = f(Y)),
                    (l.params = n(k, "settings")),
                    (l.bkParams = n(k, "userData")),
                    l);
                  e.o("wasSynced", k);
                  return k;
                })
                ["catch"](D(a, "f.h"));
        }),
        ms = ["ecommerce", "user_id"],
        ns = E("pa.int", function (a, c) {
          return function () {
            var b,
              d,
              e = xa(arguments),
              f = gm(e);
            if (!f) return null;
            e = f.sh;
            var g = f.T;
            f = f.Ua;
            if (!Lb(g) && !ca(g)) return null;
            var h = qa(a, "1", c),
              k = Yc(c).url,
              l = n(g, "__ym.user_id"),
              m = fa(g),
              p = F("__ymu", m),
              r = F("__ym", m) && l;
            m = !ai(c);
            var q = g;
            q.__ym &&
              ((q = A({}, g)),
              (q.__ym = L(
                function (v, x) {
                  var J = n(g, "__ym." + x);
                  J && (v[x] = J);
                  return v;
                },
                {},
                ms
              )));
            l = Nb(
              a,
              c,
              r
                ? "Set user id " + l
                : (p ? "User p" : "P") + "arams. Counter " + c.id,
              r ? void 0 : JSON.stringify(q)
            );
            h = h(
              {
                T: g,
                H: ua(((b = {}), (b.pa = 1), (b.ar = 1), b)),
                F: ((d = {}), (d["page-url"] = k || P(a).href), d),
              },
              c
            ).then(m ? l : B);
            return wc(a, "p.s", h, f, e);
          };
        }),
        os = E("exps.int", function (a, c) {
          return function (b, d, e) {
            var f, g;
            void 0 === d && (d = B);
            if (b && 0 < b.length) {
              var h = qa(a, "e", c),
                k = Yc(c).url;
              b = h(
                {
                  H: ua(((f = {}), (f.ex = 1), (f.ar = 1), f)),
                  F:
                    ((g = {}),
                    (g["page-url"] = k || P(a).href),
                    (g.exp = b),
                    g),
                },
                c
              );
              return wc(a, "exps.s", b, d, e);
            }
          };
        }),
        ps = E("y.p", function (a, c) {
          var b = vi(a, c);
          if (b) {
            var d = Vd(a),
              e = G([a, b, c], fm);
            ki(a, d, function (f) {
              f.C(["params"], e);
            });
            b.Z.C(["params"], t(U("1"), e));
          }
        }),
        qs = Hb("is", function (a) {
          var c = Rb(a),
            b = "" + na.Ja + Ub("Wjw75ghm7fa7JW8p");
          if (
            P(a).hash.substring(1, b.length + 1) === b ||
            c.l("debug_build") === na.Ja
          )
            return (
              c.o("debug_build", na.Ja),
              uc(a, { src: "https://yastatic.net/metrika-static-watch/tag.js" })
            );
        }),
        th = w(Ac),
        rs = t(ea("exec", /counterID=(\d+)/), U("1")),
        uh = da(function (a, c) {
          var b = th(a),
            d = ja(c),
            e = d[0],
            f = d[1];
          d = d.slice(2);
          if (f) {
            var g = "" + e;
            var h = { id: 1, aa: "0" },
              k = rs(g);
            k
              ? (h.id = k)
              : -1 === g.indexOf(":")
              ? ((g = Ba(g)), (h.id = g))
              : ((g = g.split(":")),
                (k = g[1]),
                (h.id = Ba(g[0])),
                (h.aa = dg(k) ? "1" : "0"));
            g = [Ia(a, h), h];
            h = g[0];
            g = g[1];
            k = W(g);
            b[k] || (b[k] = {});
            b = b[k];
            "init" === f
              ? h ||
                qs(a) ||
                (a["yaCounter" + g.id] = new a.Ya[na.Zb](A({}, d[0], g)))
              : h && h[f] && b.ti
              ? h[f].apply(h, d)
              : ((h = b.pg),
                h || ((h = []), (b.pg = h)),
                h.push(va([e, f], d)));
          }
        }),
        ob,
        pc,
        ef =
          ((ob = {}),
          (ob.transaction_id = "id"),
          (ob.item_id = "id"),
          (ob.item_name = "name"),
          (ob.item_brand = "brand"),
          (ob.promotion_name = "coupon"),
          (ob.index = "position"),
          (ob.item_variant = "variant"),
          (ob.value = "revenue"),
          (ob.item_category = "category"),
          ob),
        sh =
          ((pc = {}),
          (pc.view_item = "detail"),
          (pc.add_to_cart = "add"),
          (pc.remove_from_cart = "remove"),
          (pc.begin_checkout = "checkout"),
          (pc.purchase = "purchase"),
          pc),
        cm = "currencyCode add delete remove purchase checkout detail".split(
          " "
        ),
        Ne = E("dl.w", function (a, c, b) {
          var d = 0;
          ge(a, a[c], b) ||
            (d = T(
              a,
              function () {
                Ne(a, c, b);
              },
              1e3,
              "ec.dl"
            ));
          return function () {
            return ha(a, d);
          };
        }),
        ss = E("p.e", function (a, c) {
          var b = Ia(a, c);
          if (b) {
            b = C(b.params, b);
            var d = D(a, "h.ee", G([a, b], am)),
              e,
              f = function (h) {
                e = h;
                h.qa.C(d);
              };
            if (c.jc) return Ne(a, c.jc, f);
            var g = ya(a, c, function (h) {
              return (h = n(h, "settings.ecommerce")) ? Ne(a, h, f) : B;
            });
            return function () {
              g.then(function (h) {
                h();
                e && e.unsubscribe();
              });
            };
          }
        }),
        ts = E("fid", function (a) {
          var c,
            b = B;
          if (!R(a.PerformanceObserver)) return b;
          var d = O(a);
          if (d.l("fido")) return b;
          d.o("fido", !0);
          var e = new a.PerformanceObserver(
            D(a, "fid", function (f) {
              f = f.getEntries()[0];
              d.o("fid", a.Math.round(100 * (f.processingStart - f.startTime)));
              b();
            })
          );
          b = function () {
            return e.disconnect();
          };
          try {
            e.observe(
              ((c = {}), (c.type = "first-input"), (c.buffered = !0), c)
            );
          } catch (f) {}
          return b;
        }),
        us = E("ecm.a", u("add", Jd)),
        vs = E("ecm.r", u("remove", Jd)),
        ws = E("ecm.d", u("detail", Jd)),
        xs = E("ecm.p", u("purchase", Jd)),
        Pg = u("form", Mb),
        Ol = u("form", tb),
        oh = w(function (a) {
          return I("[^\\d<>]*", a.split(""));
        }),
        Kl = w(function (a) {
          return new RegExp(oh(a), "g");
        }),
        Qc = t(u("replace", ea), bi([/\D/g, ""]), Ma),
        Wl = /\S/,
        ih = u(
          [
            "style",
            "display:inline;margin:0;padding:0;font-size:inherit;color:inherit;line-height:inherit",
          ],
          Jc
        ),
        wk = w(function (a) {
          a = P(a);
          a = Kp(a.search.substring(1));
          a["_ym_status-check"] = a["_ym_status-check"] || "";
          a._ym_lang = a._ym_lang || "ru";
          return a;
        }),
        eh = t(wk, U("_ym_status-check"), Ba),
        ys = t(wk, U("_ym_lang")),
        Ml = ["https://iframe-toloka.com/"],
        Rl = $a(
          /^https:\/\/(yastatic\.net\/s3\/metrika|s3\.mds\.yandex\.net\/internal-metrika-betas|[\w-]+\.dev\.webvisor\.com|[\w-]+\.dev\.metrika\.yandex\.ru)\/(\w|-|\/|(\.)(?!\.))+\.js$/
        ),
        Ql = ["form", "button", "phone", "status"],
        Nl = w(
          function (a, c, b) {
            b.inline
              ? Zg(a, b)
              : ((a._ym__postMessageEvent = c),
                (a._ym__inpageMode = b.inpageMode),
                (a._ym__initMessage = b.initMessage),
                Sl(a, b.resource));
          },
          function (a, c, b) {
            return b.id;
          }
        ),
        zs = E("cs.init", function (a, c) {
          var b,
            d = eh(a);
          d &&
            c.id === d &&
            "0" === c.aa &&
            ((d =
              ((b = {}),
              (b.lang = ys(a)),
              (b.fileId = "status"),
              (b.id = "" + c.id),
              b)),
            T(a, G([a, d], Zg), 0, "cs"));
        }),
        xk = w(function (a) {
          return cd(a) || !ma("querySelectorAll", a.document.querySelectorAll);
        }),
        Hl = w(fh),
        Yg = w(qb, ub),
        As = E("phc.p", function (a, c) {
          return xk(a)
            ? B
            : ya(a, c, function (b) {
                var d = c.id,
                  e = Pc(a, void 0, d),
                  f = e.l("phc_settings") || "";
                if ((b = n(b, "settings.phchange"))) {
                  var g = eb(a, b) || "";
                  g !== f && e.o("phc_settings", g);
                } else f && (b = Yg(a, f));
                e = n(b, "clientId");
                f = n(b, "orderId");
                b = n(b, "phones") || [];
                e &&
                  f &&
                  b.length &&
                  ((f = {
                    xb: "",
                    Ib: "",
                    og: 0,
                    ha: {},
                    ra: [],
                    Kf: !1,
                    Za: !0,
                    b: a,
                    ac: c,
                  }),
                  A(f, { Kf: !0 }),
                  Xg(a, d, f),
                  (b = Rc(a)),
                  (e = gh(a, b, 1e3)),
                  (d = C(Xg, null, a, d, f)),
                  e.C(d),
                  hh(a, b));
              });
        }),
        Bs = E("phc.h", function (a, c) {
          return Pp(a) || xk(a)
            ? null
            : ya(a, c, function (b) {
                if (!n(b, "settings.phchange")) {
                  var d = Pc(a, "").l("yaHidePhones");
                  d = d ? qb(a, d) : "";
                  (b = n(b, "settings.phhide") || d) && dh(a, c, b);
                }
              });
        }),
        Cs = E("up.int", function (a, c) {
          return D(a, "up.c", function (b, d, e) {
            var f,
              g = Ia(a, c),
              h = Td(a).warn;
            g
              ? Lb(b)
                ? ((b = ((f = {}), (f.__ymu = b), f)),
                  (f = g.params) && f(b, d || B, e))
                : h("Wrong user params")
              : h("No counter instance found");
          });
        }),
        Ds = E("trigger.in", function (a, c) {
          c.Bg && Ab(a, G([a, "yacounter" + c.id + "inited"], Gp), "t.i");
        }),
        Es = E("destruct.e", function (a, c, b) {
          return function () {
            var d = O(a),
              e = c.id;
            z(function (f, g) {
              return R(f) && D(a, "dest.fr." + g, f)();
            }, b);
            delete d.l("counters")[W(c)];
            delete a["yaCounter" + e];
          };
        }),
        Fs = E("fip", function (a, c) {
          if (!Zj(a) || ed(a)) {
            var b = Na(a);
            if (!b.l("fip")) {
              var d = t(
                fb(
                  t(function (e, f) {
                    return E("fip." + f, e)(a);
                  }, C(gq, null))
                ),
                Wc("-")
              )(c);
              b.o("fip", d);
            }
          }
        }),
        Gs = u("9-d5ve+.r%7", N),
        Hs = E("ad", function (a, c) {
          if (!c.gb) {
            var b = O(a);
            if (!b.l("adBlockEnabled")) {
              var d = function (m) {
                  F(m, ["2", "1"]) && b.o("adBlockEnabled", m);
                },
                e = Rb(a),
                f = e.l("isad");
              if (f) d(f);
              else {
                var g = u("adStatus", b.o),
                  h = function (m) {
                    m = m ? "1" : "2";
                    d(m);
                    g("complete");
                    e.o("isad", m, 1200);
                    return m;
                  },
                  k = qa(a, "adb", c);
                if (!b.l("adStatus")) {
                  g("process");
                  var l = "metrika/a" + Gs().replace(/[^a-v]+/g, "") + "t.gif";
                  El(a, function () {
                    return k({}, l).then(u(!1, h))["catch"](u(!0, h));
                  });
                }
              }
            }
          }
        }),
        Is = E("suid.int", function (a, c) {
          return function (b, d, e) {
            var f = Ia(a, c),
              g = sd(a);
            Ka(b) || Kd(a, b)
              ? ((b = Jc(["__ym", "user_id", b])), f.params(b, d || B, e))
              : g.error("Incorrect user ID");
          };
        }),
        Js = E("guid.int", function (a, c) {
          return function (b) {
            var d = Gi(a, c);
            b && wf(a, b, null, d);
            return d;
          };
        }),
        Ta = (function () {
          function a(c, b, d) {
            this.Ei = "wv2.c";
            this.Hb = [];
            this.fa = [];
            this.b = c;
            this.J = af(c, this, d, this.Ei);
            this.D = b;
            this.Wa = this.D.Vh();
            this.start = this.J.G(this.start, "st");
            this.stop = this.J.G(this.stop, "sp");
          }
          a.prototype.start = function () {
            var c = this;
            this.Hb = y(function (b) {
              var d = b[0],
                e = b[2];
              b = C(c.J.G(b[1], d[0]), c);
              return c.Wa.C(e || c.b, d, b);
            }, this.fa);
          };
          a.prototype.stop = function () {
            z(Ma, this.Hb);
          };
          a.prototype.X = function (c) {
            return this.D.ma().X(c);
          };
          return a;
        })(),
        Cl = ["checkbox", "radio"],
        Dl = /pwd|value|password/i,
        Bg = U("location.href"),
        Ks = (function (a) {
          function c(b, d, e) {
            d = a.call(this, b, d, e) || this;
            d.ja = { elements: [], attributes: [] };
            d.index = 0;
            d.ce = d.J.G(d.ce, "o");
            d.wd = d.J.G(d.wd, "io");
            d.kd = d.J.G(d.kd, "ao");
            d.se = d.J.G(d.se, "a");
            d.pe = d.J.G(d.pe, "at");
            d.te = d.J.G(d.te, "r");
            d.qe = d.J.G(d.qe, "c");
            d.qa = new b.MutationObserver(d.ce);
            return d;
          }
          Da(c, a);
          c.prototype.start = function () {
            this.qa.observe(this.b.document.documentElement, {
              attributes: !0,
              characterData: !0,
              childList: !0,
              subtree: !0,
              attributeOldValue: !0,
              characterDataOldValue: !0,
            });
          };
          c.prototype.stop = function () {
            this.qa.disconnect();
          };
          c.prototype.kd = function (b) {
            var d = b.target;
            b = b.attributeName;
            var e = this.ja.elements.indexOf(d);
            -1 === e &&
              ((e = this.ja.elements.push(d) - 1),
              (this.ja.attributes[e] = {}));
            this.ja.attributes[e] || (this.ja.attributes[e] = {});
            e = this.ja.attributes[e];
            var f = d.getAttribute(b);
            e[b] = Fd(this.b, d, b, f, this.D.tc()).value;
          };
          c.prototype.wd = function (b) {
            function d(k) {
              var l = yb(e.b)(k, f);
              return -1 === l
                ? (f.push(k), (k = { Bd: {} }), g.push(k), k)
                : g[l];
            }
            var e = this,
              f = [],
              g = [];
            z(function (k) {
              var l = k.attributeName,
                m = k.removedNodes,
                p = k.oldValue,
                r = k.target,
                q = k.nextSibling,
                v = k.previousSibling;
              switch (k.type) {
                case "attributes":
                  e.kd(k);
                  var x = d(r);
                  x.Bd[l] || (x.Bd[l] = Fd(e.b, r, l, p, e.D.tc()).value);
                  break;
                case "childList":
                  m &&
                    z(function (J) {
                      x = d(J);
                      x.pf ||
                        A(x, { pf: r, Lh: q ? q : void 0, Mh: v ? v : void 0 });
                    }, ja(m));
                  break;
                case "characterData":
                  (x = d(r)), x.qf || (x.qf = p);
              }
            }, b);
            var h = this.D.ma();
            z(function (k, l) {
              h.Ce(k, g[l]);
            }, f);
          };
          c.prototype.ce = function (b) {
            var d = this;
            if (Bg(this.b)) {
              var e = this.D.K();
              this.wd(b);
              z(function (f) {
                var g = f.addedNodes,
                  h = f.removedNodes,
                  k = f.target;
                switch (f.type) {
                  case "childList":
                    h && h.length && d.te(ja(h), e);
                    g && g.length && d.se(ja(g), e);
                    break;
                  case "characterData":
                    d.qe(k, e);
                }
              }, b);
              this.pe(e);
            } else this.stop();
          };
          c.prototype.pe = function (b) {
            var d = this;
            z(function (e, f) {
              var g = d.sc();
              d.D.V(
                "mutation",
                { index: g, attributes: d.ja.attributes[f], target: d.X(e) },
                "ac",
                b
              );
            }, this.ja.elements);
            this.ja.elements = [];
            this.ja.attributes = [];
          };
          c.prototype.se = function (b, d) {
            var e = this,
              f = this.sc();
            this.D.ma().yc({
              ga: b,
              Zc: function (g) {
                g = y(function (h) {
                  h = A({}, h);
                  delete h.node;
                  return h;
                }, g);
                e.D.V("mutation", { index: f, ga: g }, "ad", d);
              },
            });
          };
          c.prototype.te = function (b, d) {
            var e = this,
              f = this.sc(),
              g = this.D.ma(),
              h = y(function (k) {
                var l = g.removeNode(k);
                ph(e.b, k, function (m) {
                  g.removeNode(m);
                });
                return l;
              }, b);
            this.D.V("mutation", { index: f, ga: h }, "re", d);
          };
          c.prototype.qe = function (b, d) {
            var e = this.sc();
            this.D.V(
              "mutation",
              { value: b.textContent, target: this.X(b), index: e },
              "tc",
              d
            );
          };
          c.prototype.sc = function () {
            var b = this.index;
            this.index += 1;
            return b;
          };
          return c;
        })(Ta),
        Ls = (function () {
          function a(c, b) {
            var d = this;
            this.nc = [];
            this.Xa = [];
            this.$d = 1;
            this.Ga = 0;
            this.hb = {};
            this.Bc = {};
            this.Md = function (f) {
              return d.Xa.length ? F(f, d.Xa) : !1;
            };
            this.removeNode = function (f) {
              var g = d.X(f),
                h = Ca(f);
              if (h)
                return (
                  (h = "NR:" + h.toLowerCase()),
                  d.Md(h) && d.Z.N(h, { data: { node: f, id: g } }),
                  g
                );
            };
            this.bb = function (f) {
              var g = Ca(f);
              if (g) {
                var h = f.__ym_indexer;
                h ||
                  ((h = d.$d),
                  (f.__ym_indexer = h),
                  (d.$d += 1),
                  (g = "NA:" + g.toLowerCase()),
                  d.Md(g) && d.Z.N(g, { data: { node: f, id: h } }));
                return h;
              }
              return null;
            };
            this.b = c;
            var e = af(c, this, "i");
            this.Z = Lc(c);
            this.options = b;
            this.start = e.G(this.start, "st");
            this.stop = e.G(this.stop, "sp");
            this.X = e.G(this.X, "i");
            this.Ce = e.G(this.Ce, "o");
            this.yc = e.G(this.yc, "a");
            this.removeNode = e.G(this.removeNode, "r");
            this.ca = e.G(this.ca, "s");
          }
          a.prototype.Ce = function (c, b) {
            var d = this.bb(c);
            La(d) || (this.Bc[d] && this.X(c), (this.Bc[d] = b));
          };
          a.prototype.C = function (c, b, d) {
            c = "" + b + c;
            this.Xa.push(c);
            this.Md(c) || this.Xa.push(c);
            this.Z.C([c], d);
          };
          a.prototype.da = function (c, b, d) {
            var e = "" + b + c;
            this.Xa = V(function (f) {
              return f !== e;
            }, this.Xa);
            this.Z.da([e], d);
          };
          a.prototype.start = function () {
            this.Ga = T(this.b, t(C(this.ca, this, !1), this.start), 50, "i.s");
          };
          a.prototype.stop = function () {
            this.flush();
            ha(this.b, this.Ga);
            this.nc = [];
          };
          a.prototype.yc = function (c) {
            var b = this,
              d = [],
              e = 0,
              f = { Zc: c.Zc, result: [], Ac: 0, ga: d };
            this.nc.push(f);
            z(function (g) {
              ph(b.b, g, function (h) {
                var k = b.bb(h);
                La(k) ||
                  (d.push(h),
                  b.hb[k] && b.X(h),
                  (b.hb[k] = { node: h, event: f, Hj: e }),
                  (e += 1));
              });
            }, c.ga);
          };
          a.prototype.X = function (c) {
            if (c === this.b) return 0;
            var b = this.bb(c),
              d = this.hb[b],
              e = this.Ph(b),
              f = e.pf,
              g = e.Bd,
              h = e.qf,
              k = e.Lh,
              l = e.Mh;
            if (d) {
              e = d.event;
              d = d.Hj;
              var m = this.b.document.documentElement === c;
              k = k || c.nextSibling;
              var p = l || c.previousSibling;
              l = !m && k ? this.bb(k) : null;
              p = !m && p ? this.bb(p) : null;
              m = this.b;
              k = this.options;
              f = this.bb(f || c.parentNode || c.parentElement) || 0;
              var r = g,
                q = void 0;
              void 0 === p && (p = null);
              void 0 === l && (l = null);
              void 0 === r && (r = {});
              void 0 === q && (q = Ca(c));
              if (S(q)) c = void 0;
              else {
                g = {
                  id: b,
                  oe: p !== f ? p : null,
                  next: l !== f ? l : null,
                  parent: f,
                  name: q.toLowerCase(),
                  node: c,
                };
                if (bf(c)) {
                  if (((h = zl(c, h)), (g.attributes = {}), (g.content = h)))
                    if ((c = Nc(m, c)))
                      (g.content = "" !== h.trim() ? xm(m, h) : h),
                        (g.hidden = c);
                } else
                  (h = Al(m, c, k, r, q)),
                    (m = h.fb),
                    (g.attributes = h.ah),
                    m && (g.hidden = m),
                    c.namespaceURI &&
                      md(c.namespaceURI, "svg") &&
                      (g.Pf = c.namespaceURI);
                c = g;
              }
              if (S(c)) return;
              delete this.hb[b];
              e.result[d] = c;
              e.Ac += 1;
              e.ga.length === e.Ac && e.Zc(e.result);
            }
            return b;
          };
          a.prototype.flush = function () {
            this.ca(!0);
          };
          a.prototype.ca = function (c) {
            var b = this;
            if (Bg(this.b)) {
              var d = fa(this.hb);
              d = y(function (e) {
                return b.hb[e].node;
              }, d);
              d = gc(d, this.X);
              c = c ? Di(B) : Bi(this.b, 20);
              d(c);
              this.nc = V(function (e) {
                return e.Ac !== e.result.length;
              }, this.nc);
            }
          };
          a.prototype.Ph = function (c) {
            if (La(c)) return {};
            var b = this.Bc[c];
            return b ? (delete this.Bc[c], b) : {};
          };
          return a;
        })(),
        Ms = ["input", "change", "keyup", "paste", "cut"],
        Ns = (function (a) {
          function c(b, d, e) {
            b = a.call(this, b, d, e) || this;
            b.inputs = {};
            b.yd = !1;
            b.Lc = b.J.G(b.Lc, "ii");
            b.Mc = b.J.G(b.Mc, "ir");
            b.Sc = b.J.G(b.Sc, "ri");
            b.gd = b.J.G(b.gd, "ur");
            b.Ld = b.J.G(b.Ld, "ce");
            b.xc = b.J.G(b.xc, "vc");
            return b;
          }
          Da(c, a);
          c.prototype.start = function () {
            var b = this,
              d = this.D.ma();
            this.yd = this.kh();
            z(function (e) {
              e = e.toLowerCase();
              d.C(e, "NA:", C(b.Lc, b));
              d.C(e, "NR:", C(b.Mc, b));
            }, mf);
            this.Hb = [
              this.Wa.C(this.b.document, Ms, C(this.Ld, this)),
              function () {
                z(function (e) {
                  e = e.toLowerCase();
                  d.da(e, "NA:", b.Lc);
                  d.da(e, "NR:", b.Mc);
                }, mf);
                z(b.gd, fa(b.inputs));
              },
            ];
          };
          c.prototype.gd = function (b) {
            if (this.yd) {
              var d = this.inputs[b];
              d &&
                ((b = d.$i),
                (d = d.element),
                b && this.b.Object.defineProperty(d, this.uc(d), b));
            }
          };
          c.prototype.Mc = function (b) {
            b && this.gd(b.data.id);
          };
          c.prototype.Lc = function (b) {
            b && ((b = b.data), this.Sc(b.node, b.id));
          };
          c.prototype.uc = function (b) {
            return le(b) ? "checked" : "value";
          };
          c.prototype.Ld = function (b) {
            if ((b = b.target)) {
              var d = this.uc(b);
              this.xc(b[d], b);
            }
          };
          c.prototype.xc = function (b, d) {
            var e = this.X(d),
              f = this.inputs[e];
            if (!f && ((f = this.Sc(f, e)), !f)) return;
            e = f.mh;
            var g = f.value,
              h = this.uc(d);
            (b && !F(typeof b, ["string", "boolean", "number"])) ||
              b === g ||
              ((g = Fd(this.b, d, h, b, this.D.tc()).value),
              e
                ? this.D.V(
                    "event",
                    { target: this.X(d), checked: !!b },
                    "change"
                  )
                : ((e = Gd(d)),
                  (h = lf(d)),
                  this.D.V(
                    "event",
                    { value: g, hidden: h && !e, target: this.X(d) },
                    "change"
                  )),
              (f.value = b));
          };
          c.prototype.Sc = function (b, d) {
            var e = this;
            if (
              !Ze(b) ||
              "__ym_input_override_test" === b.getAttribute("class") ||
              this.inputs[d]
            )
              return null;
            var f = le(b),
              g = this.uc(b),
              h = { element: b, mh: f, value: b[g] };
            this.inputs[d] = h;
            this.yd &&
              Ab(this.b, function () {
                var k =
                    e.b.Object.getOwnPropertyDescriptor(
                      Object.getPrototypeOf(b),
                      g
                    ) || {},
                  l = e.b.Object.getOwnPropertyDescriptor(b, g) || {},
                  m = A({}, k, l);
                if (ma("((set)?(\\s?" + g + ")?)?", m.set)) {
                  try {
                    e.b.Object.defineProperty(
                      b,
                      g,
                      A({}, m, {
                        configurable: !0,
                        set: function (p) {
                          e.xc(p, this);
                          return m.set.call(this, p);
                        },
                      })
                    );
                  } catch (p) {}
                  h.$i = m;
                }
              });
            return h;
          };
          c.prototype.kh = function () {
            var b = !0,
              d = ab(this.b)("input");
            try {
              d = ab(this.b)("input");
              d.value = "INPUT_VALUE";
              d.style.setProperty("display", "none", "important");
              d.setAttribute("type", "text");
              d.setAttribute("class", "__ym_input_override_test");
              var e =
                  this.b.Object.getOwnPropertyDescriptor(
                    Object.getPrototypeOf(d),
                    "value"
                  ) || {},
                f = this.b.Object.getOwnPropertyDescriptor(d, "value") || {},
                g = A({}, e, f);
              this.b.Object.defineProperty(
                d,
                "value",
                A({}, g, {
                  configurable: !0,
                  set: function (h) {
                    return g.set.call(d, h);
                  },
                })
              );
              "INPUT_VALUE" !== d.value && (b = !1);
              d.value = "INPUT_TEST";
              "INPUT_TEST" !== d.value && (b = !1);
            } catch (h) {
              b = !1;
            }
            return b;
          };
          return c;
        })(Ta),
        Os = (function (a) {
          function c(b, d, e) {
            b = a.call(this, b, d, e) || this;
            b.Pa = { width: 0, height: 0, kb: 0, lb: 0, orientation: 0 };
            b.fa.push([["resize"], b.Yi]);
            b.fa.push([["orientationchange"], b.Wi]);
            return b;
          }
          Da(c, a);
          c.prototype.start = function () {
            a.prototype.start.call(this);
            this.hg();
          };
          c.prototype.Yi = function () {
            var b = this.Kd();
            this.ni(b) && ((this.Pa = b), this.ig(b));
          };
          c.prototype.Wi = function () {
            var b = this.Kd();
            this.Pa.orientation !== b.orientation &&
              ((this.Pa = b), this.rj(b));
          };
          c.prototype.Mf = function (b) {
            return !b.height || !b.width || !b.lb || !b.kb;
          };
          c.prototype.ni = function (b) {
            return b.height !== this.Pa.height || b.width !== this.Pa.width;
          };
          c.prototype.Kd = function () {
            var b = this.D.ab(),
              d = jd(this.b),
              e = d[0];
            d = d[1];
            b = b.Jd();
            return {
              width: e,
              height: d,
              lb: b ? b.scrollWidth : 0,
              kb: b ? b.scrollHeight : 0,
              orientation: this.D.ab().Xh(),
            };
          };
          c.prototype.rj = function (b) {
            var d;
            void 0 === d && (d = this.D.K());
            this.D.V(
              "event",
              { width: b.width, height: b.height, orientation: b.orientation },
              "deviceRotation",
              d
            );
          };
          c.prototype.ig = function (b, d) {
            void 0 === d && (d = this.D.K());
            this.D.V(
              "event",
              { width: b.width, height: b.height, lb: b.lb, kb: b.kb },
              "resize",
              d
            );
          };
          c.prototype.hg = function () {
            var b = this.Kd();
            this.Mf(b)
              ? T(this.b, C(this.hg, this), 300)
              : (this.Mf(this.Pa) && (this.Pa = b), this.ig(b, 0));
          };
          return c;
        })(Ta),
        Oe = (function () {
          function a(c) {
            this.index = 0;
            this.qb = {};
            this.b = c;
          }
          a.prototype.dc = function (c, b, d) {
            void 0 === d && (d = {});
            var e = aa(this.b),
              f = this.index;
            this.index += 1;
            this.qb[f] = { Ga: 0, Ob: !1, Jh: c, Wb: [], Vd: e(Y) };
            var g = this;
            return function () {
              var h = xa(arguments),
                k = d.Za && !g.qb[f].Ob,
                l = g.qb[f];
              ha(g.b, l.Ga);
              l.Wb = h;
              l.Ob = !0;
              var m = e(Y);
              if (k || m - l.Vd >= b) c.apply(void 0, h), (l.Vd = m);
              l.Ga = T(
                g.b,
                function () {
                  k || (c.apply(void 0, h), (l.Vd = e(Y)));
                  l.Ob = !1;
                  l.Wb = [];
                },
                b,
                "th"
              );
            };
          };
          a.prototype.flush = function () {
            var c = this;
            z(function (b) {
              var d = c.qb[b],
                e = d.Ga,
                f = d.Jh,
                g = d.Wb;
              d.Ob && ((c.qb[b].Ob = !1), f.apply(void 0, g), ha(c.b, e));
            }, fa(this.qb));
          };
          return a;
        })(),
        Ps = (function (a) {
          function c(b, d, e) {
            d = a.call(this, b, d, e) || this;
            d.xg = [];
            d.Qe = { x: 0, y: 0 };
            d.ta = new Oe(b);
            d.Pc = d.J.G(d.Pc, "o");
            d.fa.push([["scroll"], d.Zi]);
            return d;
          }
          Da(c, a);
          c.prototype.start = function () {
            a.prototype.start.call(this);
            this.D.V(
              "event",
              {
                x: Math.max(this.b.scrollX, 0),
                y: Math.max(this.b.scrollY, 0),
                page: !0,
                target: -1,
              },
              "scroll",
              0
            );
          };
          c.prototype.stop = function () {
            a.prototype.stop.call(this);
            this.ta.flush();
          };
          c.prototype.Zi = function (b) {
            if (this.D.ab().Ff()) this.Pc(b);
            else {
              var d = b.target,
                e = V(function (f) {
                  return f[0] === d;
                }, this.xg).pop();
              e
                ? (e = e[1])
                : ((e = this.ta.dc(C(this.Pc, this), 100, { Za: !0 })),
                  this.xg.push([d, e]));
              e(b);
            }
          };
          c.prototype.Pc = function (b) {
            var d = this.D.ab().Jd();
            b = b.target;
            var e = this.Bb(b);
            d = Pa(ta(b), [d, this.b, this.b.document]);
            var f = Math.max(e.left, 0);
            e = Math.max(e.top, 0);
            if (d) {
              if (this.Qe.x === f && this.Qe.y === e) return;
              this.Qe = { x: f, y: e };
            }
            this.D.V(
              "event",
              { x: f, y: e, page: d, target: d ? -1 : this.X(b) },
              "scroll"
            );
          };
          c.prototype.Bb = function (b) {
            var d = { left: 0, top: 0 };
            if (!b) return d;
            if (b.window === b)
              return { top: b.scrollY || 0, left: b.scrollX || 0 };
            var e = b.ownerDocument || b,
              f = b.documentElement,
              g = e.defaultView || e.parentWindow,
              h = e.body;
            return b !== e || ((b = this.D.ab().Jd()), b)
              ? F(b, [f, h])
                ? {
                    top: b.scrollTop || g.scrollY,
                    left: b.scrollLeft || g.scrollX,
                  }
                : { top: b.scrollTop || 0, left: b.scrollLeft || 0 }
              : d;
          };
          return c;
        })(Ta),
        Qs = ["mousemove", "mousedown", "mouseup", "click"],
        Rs = (function (a) {
          function c(b, d, e) {
            d = a.call(this, b, d, e) || this;
            d.fa.push([Qs, d.Vi]);
            d.ta = new Oe(b);
            d.Ic = d.J.G(d.Ic, "n");
            d.yj = d.J.G(d.ta.dc(C(d.Ic, d), 100), "t");
            return d;
          }
          Da(c, a);
          c.prototype.stop = function () {
            a.prototype.stop.call(this);
            this.ta.flush();
          };
          c.prototype.Vi = function (b) {
            var d = null;
            try {
              d = b.type;
            } catch (e) {
              return;
            }
            "mousemove" === d ? this.yj(b) : this.Ic(b);
          };
          c.prototype.Ic = function (b) {
            var d = b.type,
              e = b.clientX;
            e = void 0 === e ? null : e;
            var f = b.clientY;
            f = void 0 === f ? null : f;
            b = b.target || this.b.document.elementFromPoint(e, f);
            this.D.V("event", { x: e || 0, y: f || 0, target: this.X(b) }, d);
          };
          return c;
        })(Ta),
        Ss = ["focus", "blur"],
        Ts = (function (a) {
          function c(b, d, e) {
            b = a.call(this, b, d, e) || this;
            b.fa.push([Ss, b.Kh]);
            return b;
          }
          Da(c, a);
          c.prototype.Kh = function (b) {
            var d = b.target;
            b = b.type;
            this.D.V(
              "event",
              {
                target: this.X(
                  d === this.b ? this.b.document.documentElement : d
                ),
              },
              b
            );
          };
          return c;
        })(Ta),
        Us = w(function (a) {
          var c = Fa(a.getSelection, "getSelection");
          return c ? C(c, a) : B;
        }),
        Vs = t(Us, Ma),
        Ws = ["mousemove", "touchmove", "mousedown", "touchdown", "select"],
        Xs = /text|search|password|tel|url/,
        Ys = (function (a) {
          function c(b, d, e) {
            b = a.call(this, b, d, e) || this;
            b.Nd = !1;
            b.fa.push([Ws, b.ji]);
            return b;
          }
          Da(c, a);
          c.prototype.ji = function (b) {
            var d = this.D,
              e = b.type,
              f = b.which;
            b = b.target;
            if ("mousemove" !== e || 1 === f)
              (e = "select" === e ? this.ai(b) : this.Zh()) && e.start !== e.end
                ? ((this.Nd = !0), d.V("event", e, "selection"))
                : this.Nd &&
                  ((this.Nd = !1),
                  d.V("event", { start: 0, end: 0 }, "selection"));
          };
          c.prototype.Zh = function () {
            var b = Vs(this.b);
            if (b && 0 < b.rangeCount) {
              b = b.getRangeAt(0) || this.b.document.createRange();
              var d = this.X(b.startContainer),
                e = this.X(b.endContainer);
              if (!S(d) && !S(e))
                return { start: b.startOffset, end: b.endOffset, qg: d, ff: e };
            }
          };
          c.prototype.ai = function (b) {
            if (Xs.test(b.type || "")) {
              var d = this.X(b);
              if (!S(d))
                return {
                  start: b.selectionStart,
                  end: b.selectionEnd,
                  target: d,
                };
            }
          };
          return c;
        })(Ta),
        Zs = { focus: "windowfocus", blur: "windowblur" },
        $s = (function (a) {
          function c(b, d, e) {
            b = a.call(this, b, d, e) || this;
            b.visibility = null;
            S(b.b.document.hidden)
              ? S(b.b.document.msHidden)
                ? S(b.b.document.webkitHidden) ||
                  (b.visibility = {
                    hidden: "webkitHidden",
                    event: "webkitvisibilitychange",
                  })
                : (b.visibility = {
                    hidden: "msHidden",
                    event: "msvisibilitychange",
                  })
              : (b.visibility = {
                  hidden: "hidden",
                  event: "visibilitychange",
                });
            b.handleEvent = b.J.G(b.handleEvent, "e");
            return b;
          }
          Da(c, a);
          c.prototype.start = function () {
            this.Hb = [
              this.Wa.C(
                this.b,
                this.visibility ? [this.visibility.event] : ["focus", "blur"],
                C(this.handleEvent, this)
              ),
            ];
          };
          c.prototype.handleEvent = function (b) {
            this.D.V(
              "event",
              {},
              Zs[
                this.visibility
                  ? this.b.document[this.visibility.hidden]
                    ? "blur"
                    : "focus"
                  : b.type
              ]
            );
          };
          return c;
        })(Ta),
        at = [
          "touchmove",
          "touchstart",
          "touchend",
          "touchcancel",
          "touchforcechange",
        ],
        bt = (function (a) {
          function c(b, d, e) {
            d = a.call(this, b, d, e) || this;
            d.dd = {};
            d.scrolling = !1;
            d.fg = 0;
            d.fa.push([["scroll"], d.oj, d.b.document]);
            d.fa.push([at, d.Cj, d.b.document]);
            d.ta = new Oe(b);
            d.Gb = d.J.G(d.Gb, "nh");
            d.zj = d.J.G(
              d.ta.dc(d.Gb, d.D.ab().Ff() ? 0 : 50, { Za: !0 }),
              "th"
            );
            return d;
          }
          Da(c, a);
          c.prototype.oj = function () {
            var b = this;
            this.scrolling = !0;
            ha(this.b, this.fg);
            this.fg = T(
              this.b,
              function () {
                b.scrolling = !1;
              },
              150
            );
          };
          c.prototype.Cj = function (b) {
            var d = this,
              e = "touchcancel" === b.type || "touchend" === b.type;
            b.changedTouches &&
              0 < b.changedTouches.length &&
              z(function (f) {
                var g = d.ei(f);
                f.__ym_touch_id = g;
                e && delete d.dd[f.identifier];
              }, ja(b.changedTouches));
            "touchmove" === b.type
              ? this.scrolling
                ? this.Gb(b)
                : this.zj(b, this.D.K())
              : this.Gb(b);
          };
          c.prototype.ei = function (b) {
            this.dd[b.identifier] || (this.dd[b.identifier] = Ug());
            return this.dd[b.identifier];
          };
          c.prototype.Gb = function (b, d) {
            void 0 === d && (d = this.D.K());
            var e = b.type,
              f = y(function (g) {
                return {
                  id: g.__ym_touch_id,
                  x: Math.round(g.clientX),
                  y: Math.round(g.clientY),
                  force: g.force,
                };
              }, ja(b.changedTouches));
            0 < f.length &&
              this.D.V("event", { touches: f, target: this.X(b.target) }, e, d);
          };
          return c;
        })(Ta),
        ct = (function (a) {
          function c(b, d, e) {
            b = a.call(this, b, d, e) || this;
            b.fa.push([["load"], b.Ui, b.b.document]);
            return b;
          }
          Da(c, a);
          c.prototype.Ui = function (b) {
            b = b.target;
            "IMG" === Ca(b) &&
              b.getAttribute("srcset") &&
              this.D.V(
                "event",
                { target: this.X(b), value: b.currentSrc },
                "srcset"
              );
          };
          return c;
        })(Ta),
        dt = (function (a) {
          function c(b, d, e) {
            d = a.call(this, b, d, e) || this;
            d.Kg = 1;
            d.ta = new Oe(b);
            d.Yb = d.J.G(d.Yb, "z");
            return d;
          }
          Da(c, a);
          c.prototype.start = function () {
            if (this.Af()) {
              a.prototype.start.call(this);
              this.Yb();
              var b = this.Wa.C(
                n(this.b, "visualViewport"),
                ["resize"],
                this.ta.dc(this.Yb, 10)
              );
              this.Hb.push(b);
            }
          };
          c.prototype.stop = function () {
            a.prototype.stop.call(this);
            this.ta.flush();
          };
          c.prototype.Yb = function () {
            var b = this.Af();
            b && b !== this.Kg && ((this.Kg = b), this.sj(b));
          };
          c.prototype.Af = function () {
            var b = Uf(this.b);
            return b ? b[2] : null;
          };
          c.prototype.sj = function (b) {
            var d = nf(this.b);
            this.D.V("event", { x: d.x, y: d.y, level: b }, "zoom");
          };
          return c;
        })(Ta),
        yd,
        Pe = {
          91: "super",
          93: "super",
          224: "super",
          18: "alt",
          17: "ctrl",
          16: "shift",
          9: "tab",
          8: "backspace",
          46: "delete",
        },
        yk = { super: 1, lm: 2, alt: 3, shift: 4, Fm: 5, delete: 6, im: 6 },
        et = [4, 9, 8, 32, 37, 38, 39, 40, 46],
        zk =
          ((yd = {}),
          (yd["1"] = {
            91: "&#8984;",
            93: "&#8984;",
            224: "&#8984;",
            18: "&#8997;",
            17: "&#8963;",
            16: "&#8679;",
            9: "&#8677;",
            8: "&#9003;",
            46: "&#9003;",
          }),
          (yd["2"] = {
            91: "&#xff;",
            93: "&#xff;",
            224: "&#xff;",
            18: "Alt",
            17: "Ctrl",
            16: "Shift",
            9: "Tab",
            8: "Backspace",
            46: "Delete",
          }),
          (yd.Ii = {
            32: "SPACEBAR",
            37: "&larr;",
            38: "&uarr;",
            39: "&rarr;",
            40: "&darr;",
            13: "Enter",
          }),
          yd),
        ft = /flash/,
        gt = /ym-disable-keys/,
        ht = /^&#/,
        it = (function (a) {
          function c(b, d, e) {
            d = a.call(this, b, d, e) || this;
            d.cb = {};
            d.Ca = 0;
            d.xa = [];
            d.vg = [];
            d.kc = 0;
            d.ag = 0;
            d.fa.push([["keydown"], d.gi]);
            d.fa.push([["keyup"], d.hi]);
            d.Sg =
              -1 !== (n(b, "navigator.appVersion") || "").indexOf("Mac")
                ? "1"
                : "2";
            d.Ec = d.J.G(d.Ec, "v");
            d.Ad = d.J.G(d.Ad, "ec");
            d.Yc = d.J.G(d.Yc, "sk");
            d.Id = d.J.G(d.Id, "gk");
            d.Ee = d.J.G(d.Ee, "sc");
            d.Xb = d.J.G(d.Xb, "cc");
            d.reset = d.J.G(d.reset, "r");
            d.Uc = d.J.G(d.Uc, "rs");
            return d;
          }
          Da(c, a);
          c.prototype.gi = function (b) {
            if (this.Ec(b) && !this.zi(b)) {
              var d = b.keyCode;
              b.repeat ||
                this.cb[d] ||
                ((this.cb[b.keyCode] = !0),
                Pe[b.keyCode] && !this.Ca
                  ? ((this.Ca += 1), this.Ee(b), this.reset(300))
                  : this.Ca
                  ? (this.hh(), this.ve(b), this.Ad())
                  : (this.reset(), this.ve(b)));
            }
          };
          c.prototype.hi = function (b) {
            if (this.Ec(b)) {
              var d = b.keyCode,
                e = Pe[b.keyCode];
              this.cb[b.keyCode] && (this.cb[d] = !1);
              e && this.Ca && ((this.Ca = 0), (this.cb = {}));
              1 === this.xa.length &&
                ((b = this.xa[0]),
                F(b.keyCode, et) && (this.Yc([b], !0), this.reset()));
              this.xa = V(t(ta(d), Fb), this.xa);
              ha(this.b, this.kc);
            }
          };
          c.prototype.Ec = function (b) {
            var d = this.b.document.activeElement;
            b = b.target;
            return !Pa(Boolean, [
              d &&
                "OBJECT" === d.nodeName &&
                ft.test(d.getAttribute("type") || ""),
              "INPUT" === b.nodeName &&
                "password" === b.getAttribute("type") &&
                gt.test(b.className),
            ]);
          };
          c.prototype.Ad = function () {
            this.vg = this.xa.slice(0);
            ha(this.b, this.kc);
            this.kc = T(this.b, u(this.vg, C(this.Yc, this)), 0, "e.c");
          };
          c.prototype.Yc = function (b, d) {
            void 0 === d && (d = !1);
            if (1 < b.length || d) {
              var e = this.Id(b);
              this.D.V("event", { Fc: e }, "keystroke");
            }
          };
          c.prototype.Id = function (b) {
            var d = this;
            b = y(function (e) {
              e = e.keyCode;
              var f = Pe[e],
                g = d.Wh(e);
              return { id: e, key: g, Jf: !!f && ht.test(g), Gc: f };
            }, b);
            return Xf(function (e, f) {
              return (yk[e.Gc] || 100) - (yk[f.Gc] || 100);
            }, b);
          };
          c.prototype.Wh = function (b) {
            return zk[this.Sg][b] || zk.Ii[b] || String.fromCharCode(b);
          };
          c.prototype.ve = function (b) {
            F(b, this.xa) || this.xa.push(b);
          };
          c.prototype.Ee = function (b) {
            this.ve(b);
            this.Xb();
          };
          c.prototype.Xb = function () {
            this.Ca ? T(this.b, this.Xb, 100) : (this.xa = []);
          };
          c.prototype.hh = function () {
            ha(this.b, this.ag);
          };
          c.prototype.reset = function (b) {
            b ? (this.ag = T(this.b, C(this.Uc, this), b)) : this.Uc();
          };
          c.prototype.Uc = function () {
            this.Ca = 0;
            this.xa = [];
            this.cb = {};
            ha(this.b, this.kc);
          };
          c.prototype.zi = function (b) {
            return b.target && "INPUT" === b.target.nodeName
              ? b.shiftKey || 32 === b.keyCode || "shift" === Pe[b.keyCode]
              : !1;
          };
          return c;
        })(Ta),
        yl = ["sr", "sd", "\u043d"],
        jt = /allow-same-origin/,
        kt = (function (a) {
          function c(b, d, e) {
            b = a.call(this, b, d, e) || this;
            b.Pb = [];
            b.Dd = {};
            b.de = b.J.G(b.de, "fi");
            b.ee = b.J.G(b.ee, "sd");
            b.fe = b.J.G(b.fe, "src");
            b.qa = new MutationObserver(b.fe);
            return b;
          }
          Da(c, a);
          c.prototype.start = function () {
            a.prototype.start.call(this);
            this.D.tc().vb && this.D.ma().C("iframe", "NA:", C(this.de, this));
            this.D.wf().Gd().C(["sdr"], C(this.ee, this));
          };
          c.prototype.stop = function () {
            a.prototype.stop.call(this);
            z(function (b) {
              b.D.stop();
            }, this.Pb);
          };
          c.prototype.fe = function (b) {
            var d = b.pop().target;
            if (
              (b = Za(function (f) {
                return f.Ef === d;
              }, this.Pb))
            ) {
              this.Pb = V(function (f) {
                return f.Ef !== d;
              }, this.Pb);
              var e = b.D.Hd();
              try {
                b.D.stop();
              } catch (f) {}
              this.cc(d, e);
            }
          };
          c.prototype.de = function (b) {
            if (b) {
              var d = b.data.node;
              this.qa.observe(d, { attributes: !0, attributeFilter: ["src"] });
              this.cc(d, b.data.id);
            }
          };
          c.prototype.cc = function (b, d) {
            var e = this;
            if (this.wi(b))
              Id(this.b, b)
                .then(function () {
                  var f = e.D.cc(b.contentWindow, d);
                  e.Pb.push({ D: f, Ef: b });
                })
                ["catch"](B);
          };
          c.prototype.ee = function (b) {
            var d = this,
              e = b.L;
            b = b.data;
            this.Dd[e] || (this.Dd[e] = { data: [] });
            var f = this.Dd[e];
            f.data = f.data.concat(b);
            this.b.isNaN(f.xd) &&
              z(function (g) {
                "page" === g.type && (f.xd = g.data.ya - d.D.xf());
              }, f.data);
            this.b.isNaN(f.xd) ||
              (this.D.ca(
                y(function (g) {
                  g.K += f.xd;
                  g.K = d.b.Math.max(0, g.K);
                  return g;
                }, f.data)
              ),
              (f.data = []));
          };
          c.prototype.wi = function (b) {
            var d = b.getAttribute("src"),
              e = b.getAttribute("sandbox");
            return b.getAttribute("_ym_ignore") ||
              (e && !e.match(jt)) ||
              (d &&
                "about:blank" !== d &&
                (d = sc(this.b, d).host) &&
                P(this.b).host !== d)
              ? !1
              : n(b, "contentWindow.location.href");
          };
          return c;
        })(Ta),
        lt = (function (a) {
          function c(b, d, e) {
            b = a.call(this, b, d, e) || this;
            b.ye = b.J.G(b.ye, "ps");
            return b;
          }
          Da(c, a);
          c.prototype.start = function () {
            this.D.ma().yc({
              ga: [this.b.document.documentElement],
              Zc: this.ye,
            });
          };
          c.prototype.ye = function (b) {
            var d = this.D.Yh(),
              e = d.Qh(),
              f = P(this.b),
              g = f.host,
              h = f.protocol;
            f = f.pathname;
            var k = jd(this.b),
              l = k[0];
            k = k[1];
            this.D.V(
              "page",
              {
                content: y(function (m) {
                  m = A({}, m);
                  delete m.node;
                  return m;
                }, b),
                Ye: e || "",
                Bf: !!e,
                viewport: { width: l, height: k },
                title: this.b.document.title,
                doctype: d.Sh() || "",
                Ve: this.b.location.href,
                Dg: this.b.navigator.userAgent,
                referrer: this.b.document.referrer,
                screen: {
                  width: this.b.screen.width,
                  height: this.b.screen.height,
                },
                location: { host: g, protocol: h, path: f },
                ya: this.D.xf(),
                bd: d.bi(),
              },
              "page",
              0
            );
          };
          return c;
        })(Ta),
        mt = ["addRule", "removeRule", "insertRule", "deleteRule"],
        Cg = [
          [
            (function (a) {
              function c(b, d, e) {
                b = a.call(this, b, d, e) || this;
                b.Ra = {};
                b.Qb = {};
                b.We = 0;
                b.Nc = b.J.G(b.Nc, "a");
                b.pb = b.J.G(b.pb, "sr");
                b.Oc = b.J.G(b.Oc, "r");
                b.ca = b.J.G(b.ca, "d");
                return b;
              }
              Da(c, a);
              c.prototype.start = function () {
                var b = this.D.ma();
                b.C("style", "NA:", this.Nc);
                b.C("style", "NR:", this.Oc);
                this.ca();
              };
              c.prototype.stop = function () {
                var b = this;
                a.prototype.stop.call(this);
                var d = this.D.ma();
                d.da("style", "NA:", this.Nc);
                d.da("style", "NR:", this.Oc);
                this.ca();
                ha(this.b, this.We);
                z(function (e) {
                  b.Ra[e].sheet && b.dg(b.Ra[e].sheet);
                }, fa(this.Ra));
                this.Ra = {};
              };
              c.prototype.ca = function () {
                var b = this;
                z(function (d) {
                  var e = d[0];
                  d = d[1];
                  if (d.length) {
                    for (
                      var f = [], g = d[0].K, h = [], k = 0;
                      k < d.length;
                      k += 1
                    ) {
                      var l = d[k],
                        m = l.K;
                      delete l.K;
                      m <= g + 50 ? f.push(l) : (h.push(f), (g = m), (f = [l]));
                    }
                    f.length && h.push(f);
                    h.length &&
                      z(function (p) {
                        b.D.V(
                          "event",
                          { target: Ba(e), Aa: p },
                          "stylechange",
                          g
                        );
                      }, h);
                    delete b.Qb[e];
                  }
                }, Aa(this.Qb));
                this.We = T(this.b, this.ca, 100);
              };
              c.prototype.pb = function (b, d, e, f, g) {
                void 0 === f && (f = "");
                void 0 === g && (g = -1);
                this.Qb[b] || (this.Qb[b] = []);
                this.Qb[b].push({ ie: d, style: f, index: g, K: e });
              };
              c.prototype.aj = function (b, d) {
                var e = this,
                  f = b.addRule,
                  g = b.removeRule,
                  h = b.insertRule,
                  k = b.deleteRule;
                R(f) &&
                  (b.addRule = function (l, m, p) {
                    e.pb(d, "a", e.D.K(), l + "{" + m + "}", p);
                    return f.call(b, l, m, p);
                  });
                R(g) &&
                  (b.removeRule = function (l) {
                    e.pb(d, "r", e.D.K(), "", l);
                    return g.call(b, l);
                  });
                R(h) &&
                  (b.insertRule = function (l, m) {
                    e.pb(d, "a", e.D.K(), l, m);
                    return h.call(b, l, m);
                  });
                R(k) &&
                  (b.deleteRule = function (l) {
                    e.pb(d, "r", e.D.K(), "", l);
                    return k.call(b, l);
                  });
              };
              c.prototype.dg = function (b) {
                var d = this;
                z(function (e) {
                  var f = d.b.CSSStyleSheet.prototype[e];
                  R(f) && (b[e] = C(f, b));
                }, mt);
              };
              c.prototype.Dh = function (b) {
                try {
                  return b.cssRules || b.rules;
                } catch (d) {
                  return null;
                }
              };
              c.prototype.Nc = function (b) {
                var d = b.data;
                b = d.id;
                d = d.node;
                if (d.sheet && !d.getAttribute("src") && !d.innerText) {
                  var e = d.sheet,
                    f = this.Dh(e);
                  if (f && f.length) {
                    for (var g = [], h = 0; h < f.length; h += 1)
                      g.push({ style: f[h].cssText, index: h, ie: "a" });
                    this.D.V("event", { Aa: g, target: b }, "stylechange");
                  }
                  this.aj(e, b);
                  this.Ra[b] = d;
                }
              };
              c.prototype.Oc = function (b) {
                b = b.data.id;
                var d = this.Ra[b];
                d && (delete this.Ra[b], d.sheet && this.dg(d.sheet));
              };
              return c;
            })(Ta),
            "ss",
          ],
          [Ns, "in"],
          [Ks, "mu"],
          [Os, "r"],
          [Ps, "sc"],
          [Rs, "mo"],
          [Ts, "f"],
          [Ys, "se"],
          [$s, "wf"],
          [bt, "t"],
          [ct, "src"],
          [dt, "z"],
          [it, "ks"],
        ];
      Cg.push([kt, "if"]);
      Cg.push([lt, "pa"]);
      var nt = w(function (a) {
          var c = a.document;
          return {
            Jd: function () {
              if (c.scrollingElement) return c.scrollingElement;
              var b =
                0 === c.compatMode.indexOf("CSS1") ? c.documentElement : c.body;
              return n(c, "documentElement.scrollHeight") >=
                n(c, "body.scrollHeight")
                ? b
                : null;
            },
            Xh: function () {
              var b = a.screen;
              if (!b) return 0;
              var d = Za(u(b, n), [
                "orientation",
                "mozOrientation",
                "msOrientation",
              ]);
              return n(b, d + ".angle") || 0;
            },
            vm: u(a, zb),
            Ff: u(a, Xc),
            um: u(a, ne),
          };
        }),
        ot = (function () {
          function a(c, b) {
            var d = this;
            this.Db = 0;
            this.fc = [];
            this.Cb = null;
            this.na = this.Tb = this.rg = !1;
            this.ya = 0;
            this.Yh = function () {
              return d.page;
            };
            this.Hd = function () {
              return d.Db;
            };
            this.xf = function () {
              return d.ya;
            };
            this.Vh = function () {
              return d.Wa;
            };
            this.wf = function () {
              return d.Cb;
            };
            this.ma = function () {
              return d.Od;
            };
            this.K = function () {
              return d.He ? d.b.Math.max(d.He(Y) - d.ya, 0) : 0;
            };
            this.tc = function () {
              return d.options;
            };
            this.ab = function () {
              return d.dh;
            };
            this.V = function (f, g, h, k) {
              void 0 === k && (k = d.K());
              f = d.Uh(f, g, h, k);
              d.ca(f);
            };
            this.Uh = function (f, g, h, k) {
              void 0 === k && (k = d.K());
              return { type: f, data: g, K: k, L: d.Db, event: h };
            };
            this.ca = function (f) {
              f = ca(f) ? f : [f];
              d.rg && !d.Tb
                ? d.na
                  ? ((f = y(function (g) {
                      return g.L ? g : A(g, { L: d.Db });
                    }, f)),
                    d.wf().jg(f))
                  : ((f = y(ul, f)), d.Be(f))
                : (d.fc = d.fc.concat(f));
            };
            this.b = c;
            var e = af(c, this, "R");
            this.Fe = e.G(this.Fe, "s");
            this.ca = e.G(this.ca, "sd");
            e = O(c);
            e.l("wv2e") && Vf();
            e.o("wv2e", !0);
            this.options = b;
            this.Wa = la(c);
            this.Od = new Ls(this.b, b);
            this.dh = nt(c);
            this.Ze = y(function (f) {
              return new f[0](c, d, f[1]);
            }, Cg);
            this.ui();
            this.page = wl(this.b);
            this.Fe();
          }
          a.prototype.start = function (c) {
            this.rg = !0;
            this.Be = c;
            this.gg();
          };
          a.prototype.stop = function () {
            Bg(this.b) &&
              (z(function (c) {
                return c.stop();
              }, this.Ze),
              this.Od.stop(),
              this.Cb && this.Cb.stop(),
              this.na || this.V("event", {}, "eof"));
          };
          a.prototype.cc = function (c, b) {
            var d = new a(c, A({}, this.options, { L: b }));
            d.start(B);
            return d;
          };
          a.prototype.ui = function () {
            var c = this;
            this.na = !!this.options.L;
            this.Db = this.options.L || 0;
            this.Tb = !this.na;
            var b = this.options.Cg || [];
            b.push(P(this.b).host);
            this.Cb = xl(this.b, this, b);
            b = this.Cb.Gd();
            zb(this.b)
              ? this.Tb &&
                b.C(["i"], function (d) {
                  c.na = d.na;
                  c.Tb = !1;
                  d.L && (c.Db = d.L);
                  c.gg();
                })
              : (this.Tb = this.na = !1);
          };
          a.prototype.gg = function () {
            var c = this.fc.splice(0, this.fc.length);
            this.ca(c);
          };
          a.prototype.Fe = function () {
            this.He = Df(this.b);
            this.ya = this.He(Y);
            z(function (c) {
              c.start();
            }, this.Ze);
            this.Od.start();
          };
          return a;
        })(),
        Z,
        pt =
          ((Z = {}),
          (Z.mousemove = 0),
          (Z.mouseup = 1),
          (Z.mousedown = 2),
          (Z.click = 3),
          (Z.scroll = 4),
          (Z.windowblur = 5),
          (Z.windowfocus = 6),
          (Z.focus = 7),
          (Z.blur = 8),
          (Z.eof = 9),
          (Z.selection = 10),
          (Z.change = 11),
          (Z.input = 12),
          (Z.touchmove = 13),
          (Z.touchstart = 14),
          (Z.touchend = 15),
          (Z.touchcancel = 16),
          (Z.touchforcechange = 17),
          (Z.canvasMethod = 18),
          (Z.canvasProperty = 19),
          (Z.zoom = 20),
          (Z.resize = 21),
          (Z.mediaMethod = 22),
          (Z.mediaProperty = 23),
          (Z.keystroke = 24),
          (Z.deviceRotation = 25),
          (Z.fatalError = 26),
          (Z.hashchange = 27),
          (Z.stylechange = 28),
          Z),
        Dg = da(function (a, c) {
          var b;
          return (b = {}), (b[Qa(a)] = c), b;
        }),
        qt = (function () {
          function a(c) {
            var b;
            this.isSync = !1;
            this.zb = [];
            this.hf = [];
            this.b = c;
            this.Fb =
              ((b = {}),
              (b.event = C(this.zh, this)),
              (b.page = Dg({ page: 1 })),
              (b.mutation = Dg({ Ji: 1 })),
              (b.activity = Dg({ Wg: 1 })),
              b);
            this.hf = [
              [["scroll"], { nj: 1 }],
              [["selection"], { pj: 1 }],
              [["change", "input"], { jh: 1 }],
              [["keystroke"], { Di: 1 }, { Fc: 1 }],
              [["zoom"], { Wj: 1 }],
              [["resize"], { ij: 1 }],
              [
                ["windowfocus", "windowblur", "focus", "blur", "eof"],
                { Tj: 1 },
              ],
              [["mousemove", "mouseup", "mousedown", "click"], { Hi: 1 }],
              [["deviceRotation"], { uh: 1 }],
              [["fatalError"], { Fh: 1 }],
              [
                [
                  "touchmove",
                  "touchstart",
                  "touchend",
                  "touchcancel",
                  "touchforcechange",
                ],
                { Bj: 1 },
                { touches: 1 },
                { touches: 1 },
              ],
              [["hashchange"], { oi: 1 }],
              [["stylechange"], { uj: 1 }, { Aa: 1 }, { Aa: 1 }],
            ];
          }
          a.prototype.zh = function (c) {
            var b,
              d,
              e = c.type,
              f = Za(t(U("0"), u(e, F)), this.hf);
            f || kb(qc("vem." + e));
            "eof" === e && (this.isSync = !0);
            var g = f[1],
              h = f[2];
            f = f[3];
            var k = c.Y;
            return {
              event:
                ((b = { type: pt[e], target: c.target, L: c.L }),
                (b[Qa(g)] = h
                  ? ((d = {}), (d[Qa(h)] = f ? k[Qa(f)] : k), d)
                  : k),
                b),
            };
          };
          a.prototype.Da = function (c, b) {
            var d = this;
            void 0 === b && (b = !1);
            var e = gc(c, function (h) {
                var k = !S(h.partNum);
                return {
                  data: k ? void 0 : d.Fb[h.type](h.data),
                  nh: k ? h.data : void 0,
                  page: h.partNum,
                  end: h.end,
                  K: h.K,
                };
              }),
              f = this.isSync || b ? Infinity : 10;
            e = ic(this.b, e, f);
            var g = [e];
            this.zb.push(e);
            return e(
              Ae(function (h) {
                h = Qd(d.b, Th, { buffer: h });
                h = ic(d.b, h, f, de);
                g.push(h);
                d.zb.push(h);
                return h;
              })
            )(
              Ae(function (h) {
                h = sf(d.b, h.slice(-4));
                h = ic(d.b, h, f, de);
                g.push(h);
                d.zb.push(h);
                return h;
              })
            )(
              mg(function (h) {
                h = h[h.length - 1];
                z(function (k) {
                  k = we(d.b)(k, d.zb);
                  d.zb.splice(k, 1);
                }, g);
                return h;
              })
            );
          };
          a.prototype.Ea = function (c) {
            return Qd(this.b, vf, this.Fb[c.type](c.data))(ee(B));
          };
          a.prototype.La = function (c) {
            return c[0];
          };
          a.prototype.ad = function (c, b) {
            for (
              var d = sf(this.b, c)(ee(B)),
                e = Math.ceil(d.length / b),
                f = [],
                g = 0;
              g < b;
              g += 1
            )
              f.push(d.slice(g * e, e * (g + 1)));
            return f;
          };
          a.prototype.isEnabled = function () {
            return Sh(this.b);
          };
          return a;
        })(),
        rt = (function () {
          return function (a, c, b, d) {
            var e = this;
            this.md = this.Qc = !1;
            this.Oa = [];
            this.Of = [];
            this.send = function (f, g, h, k) {
              f = e.sender(f, e.ac, g);
              h && k && f.then(h, k);
              return f;
            };
            this.sg = function (f, g, h, k) {
              return new K(function (l, m) {
                f.push([g, h, l, m, k]);
              });
            };
            this.ki = function () {
              e.Oa = Xf(function (h, k) {
                return h[4].partNum - k[4].partNum;
              }, e.Oa);
              var f = L(
                  function (h, k, l) {
                    k = k[4];
                    return h && l + 1 === k.partNum;
                  },
                  !0,
                  e.Oa
                ),
                g = !!e.Oa[e.Oa.length - 1][4].end;
              return f && g;
            };
            this.nf = function (f) {
              Ai(
                e.b,
                f.slice(),
                function (g) {
                  e.send(g[0], g[1], g[2], g[3]);
                },
                20,
                "s.w2.sf.fes"
              );
              f.splice(0, f.length);
            };
            this.lf = function () {
              e.md || ((e.md = !0), e.nf(e.Of));
            };
            this.lh = function (f) {
              return L(
                function (g, h) {
                  var k = "page" === h.type && !h.L,
                    l = "eof" === h.data.type,
                    m = k && !!h.partNum;
                  return { rd: g.rd || m, qd: g.qd || k, pd: g.pd || l };
                },
                { qd: !1, pd: !1, rd: !1 },
                f
              );
            };
            this.ii = function (f, g, h, k) {
              k
                ? ((f = e.sg(e.Oa, f, g, h[0])),
                  e.ki() && (e.nf(e.Oa), (e.Qc = !0)))
                : ((e.Qc = !0), (f = e.send(f, g)));
              return f;
            };
            this.fi = function (f) {
              var g;
              return e.yi
                ? ((g = {}),
                  (g["wv-type"] = Pa(function (h) {
                    return "eof" === n(h, "data.type");
                  }, f)
                    ? "2"
                    : "8"),
                  g)
                : {};
            };
            this.yf = function (f, g, h) {
              g = { F: e.fi(h), H: ua(), $: g, af: !f && Rh(h), Hf: e.vi };
              f && g.H.o("bt", 1);
              return g;
            };
            this.Ah = function (f, g, h) {
              f = e.yf(!1, f, g);
              return e.send(f, h);
            };
            this.Ki = function (f, g, h) {
              f = e.yf(!0, f, g);
              if (e.Qc) return e.send(f, h);
              var k = e.lh(g),
                l = k.qd,
                m = k.pd;
              k = k.rd;
              var p;
              l && (p = e.ii(f, h, g, k));
              e.md
                ? l || (p = e.send(f, h))
                : (l || (p = e.sg(e.Of, f, h, g)), (e.Qc || m) && e.lf());
              return p;
            };
            this.yi = d;
            this.b = a;
            this.vi = b;
            this.sender = qa(a, "W", c);
            this.ac = c;
            T(a, this.lf, 5e3);
          };
        })(),
        st = E("w2", function (a, c) {
          function b() {
            h = !0;
          }
          var d = O(a),
            e = W(c);
          if (
            !c.Ta ||
            cd(a) ||
            !a.MutationObserver ||
            !ma("Element", a.Element)
          )
            return B;
          ma("MutationObserver", a.MutationObserver) ||
            Td(a).warn(
              "MutationObserver is overriden, webvisor is not guaranteed to work in this environment"
            );
          var f = sa(function (k, l) {
              ya(a, c, l)["catch"](k);
            }),
            g = Zl(a)(Ae(G([a, c], sl)))(
              mg(function (k) {
                return new ot(a, k);
              })
            ),
            h = !1;
          hp([g, f])(
            Sb(D(a, "wv2.R.c"), function (k) {
              var l = k[0];
              k = k[1];
              if (!h) {
                b = function () {
                  h || ((h = !0), l && l.stop());
                };
                var m = d.l("wv2Counter");
                if (!yh(a, k) || m) b();
                else if (
                  (la(a).C(a, ["beforeunload", "unload"], b),
                  d.o("wv2Counter", e),
                  d.o("stopRecorder", b),
                  (k = [new Ee(a)]),
                  k.unshift(new qt(a)),
                  (k = Za(function (v) {
                    return v.isEnabled();
                  }, k)))
                ) {
                  m = new rt(a, c, !(k instanceof Ee), Cq.PREPROD_FEATURE);
                  var p = sg.Fd(e, "m", C(m.Ki, m), k, a),
                    r = sg.Fd(e, "e", C(m.Ah, m), k, a);
                  k = tl();
                  m = k.Si;
                  r.C("ag", k.Yg);
                  r.C("p", m);
                  p.C("see", function (v) {
                    var x = !1;
                    z(function (J) {
                      "page" === J.type && (x = !0);
                    }, v);
                    x &&
                      (h ||
                        r.push({
                          type: "event",
                          data: {
                            type: "fatalError",
                            Y: {
                              code: "invalid-snapshot",
                              Bh: "p.s.f",
                              stack: "",
                            },
                          },
                        }),
                      b());
                  });
                  var q = fb(function (v) {
                    "eof" === n(v, "data.type")
                      ? (r.push(v), p.push(v), r.flush(), p.flush())
                      : ("event" === v.type ? r : p).push(v);
                  });
                  T(a, b, 864e5);
                  Ab(a, function () {
                    l.start(q);
                  });
                }
              }
            })
          );
          return function () {
            return b();
          };
        }),
        tt = da(function (a, c) {
          0 === parseFloat(n(c, "settings.c_recp")) &&
            (a.Yd.o("ymoo" + a.vd, a.yg(db)),
            a.ud && a.ud.destruct && a.ud.destruct());
        }),
        ut = E("wsa", function (a, c) {
          var b = { vd: W(c), ud: Ia(a, c), yg: aa(a), Yd: Na(a) },
            d = b.yg(db);
          if (b.Yd.Qd) return !1;
          var e = b.Yd.l("ymoo" + b.vd);
          if (e && 30 > d - e) return !0;
          ya(a, c, tt(b))["catch"](D(a, "d.f"));
          return !1;
        }),
        vt = t(function (a) {
          a = n(a, "navigator.plugins") || [];
          return cc(a)
            ? t(
                ja,
                tc(Boolean),
                Eq(function (c, b) {
                  return c.name > b.name ? 1 : 2;
                }),
                fb(Nm)
              )(a)
            : "";
        }, Wc(",")),
        wt = (function (a) {
          return function (c) {
            var b = ab(c);
            if (!b) return "";
            b = b("canvas");
            var d = [],
              e = a(),
              f = e.Eh;
            e = e.th;
            try {
              var g = ea("getContext", b);
              d = y(t(N, g), e);
            } catch (h) {
              return "";
            }
            return (g = Za(N, d)) ? f(c, { canvas: b, ih: g }) : "";
          };
        })(function () {
          return { th: Wr, Eh: ll };
        }),
        gl = ["name", "lang", "localService", "voiceURI", "default"],
        bl = w(function (a, c) {
          return ya(a, c, U("settings.form_goals"));
        }, ub),
        xt = u(!0, Qg),
        yt = E("s.f.i", function (a, c) {
          var b = [];
          la(a).C(a, ["click"], D(a, "s.f.c", G([a, c, b], al)));
          la(a).C(
            a,
            ["submit"],
            D(a, "s.f.e", t(U("target"), G([a, c, b], xt)))
          );
          Sg(a, c, "Form goal. Counter " + c.id + ". Init.");
        }),
        Ak = B,
        zt = Hb("isp.stat", function (a, c, b) {
          var d,
            e = W(c);
          e = Hf(c)[e].Kb;
          return qa(a, "pi", c)({ H: ua(((d = {}), (d[e] = 1), d)) }, [b]);
        }),
        At = Hb("isp.stat", function (a, c, b) {
          return new K(function (d, e) {
            if (Bp(a, Rj, "isp")) {
              var f = function (g) {
                ("1" === g ? d : e)();
                Ak();
                g = Zi(Rj);
                F("isp", g.jb) &&
                  ((g.jb = V(t(ta("isp"), Fb), g.jb)),
                  g.jb.length || (jc(g.$a), (g.$a = null)));
              };
              Ak = la(a).C(a, ["message"], G([a, b, f], $k));
              T(a, f, 1500);
            } else e();
          });
        }),
        Bt = Hb("isp", function (a, c) {
          ya(a, c, function (b) {
            var d = Za(
              function (h) {
                return n(b, "settings." + h);
              },
              ["rt", "mf"]
            );
            if (d && xe(a)) {
              var e = Mh(b) && !Xd(a),
                f = W(c),
                g = Hf(c);
              g[f] = { Kb: d, status: e ? 3 : 4 };
              if (!e)
                return (
                  (e = Zk(a, c, d)),
                  ("mf" === d ? At : zt)(a, c, e)
                    .then(function () {
                      g[f].status = 1;
                    })
                    ["catch"](function () {
                      g[f].status = 2;
                    })
                );
            }
          })["catch"](D(a, "l.isp"));
        }),
        Bk = /[^\d]/g,
        Ct = /[^\d.,]/g,
        Dt = /[.,]$/,
        Wk = E("ep.pp", function (a, c) {
          if (!c) return 0;
          a: {
            var b = c.replace(Ct, "").replace(Dt, "");
            var d = "0" === b[b.length - 1];
            for (var e = b.length; 0 < e && !(3 < b.length - e + 1 && d); --e) {
              var f = b[e - 1];
              if (F(f, [",", "."])) {
                d = f;
                break a;
              }
            }
            d = "";
          }
          b = d ? c.split(d) : [c];
          d = d ? b[1] : "00";
          b = parseFloat(b[0].replace(Bk, "") + "." + d.replace(Bk, ""));
          d = Math.pow(10, 8) - 0.01;
          a.isNaN(b) ? (b = 0) : ((b = Math.min(b, d)), (b = Math.max(b, 0)));
          return b;
        }),
        Et = [
          [["EUR", "\u20ac"], "978"],
          [["USD", "\u0423\\.\u0415\\.", "\\$"], "840"],
          [["UAH", "\u0413\u0420\u041d", "\u20b4"], "980"],
          [
            "\u0422\u0413 KZT \u20b8 \u0422\u04a2\u0413 TENGE \u0422\u0415\u041d\u0413\u0415".split(
              " "
            ),
            "398",
          ],
          [["GBP", "\u00a3", "UKL"], "826"],
          [
            "RUR RUB \u0420 \u0420\u0423\u0411 \u20bd P \u0420UB P\u0423\u0411 P\u0423B PY\u0411 \u0420Y\u0411 \u0420\u0423B P\u0423\u0411".split(
              " "
            ),
            "643",
          ],
        ],
        Ft = w(function (a) {
          return new RegExp(a.join("|"), "i");
        }),
        Gt = E("ep.cp", function (a) {
          if (!a) return "643";
          var c = a.replace(/\s/g, "");
          return (a = Za(function (b) {
            return Ft(b[0]).test(c);
          }, Et))
            ? a[1]
            : "643";
        }),
        Vk = E("ep.en", function (a, c, b) {
          a = Mg(a);
          c = "" + 100 * c + b + a;
          b = 16 - c.length;
          if (0 > b) return "";
          c = Ng("0", b) + c;
          b = c.slice(0, 8);
          c = c.slice(-8);
          b = (+b ^ 92844).toString(35);
          c = (+c ^ 92844).toString(35);
          return "" + b + "z" + c;
        }),
        Ck = t(Lg, Gt),
        Dk = E("ep.ctp", function (a, c, b, d) {
          var e = Ck(a, b),
            f = Kg(a, d);
          Jg(a, c, e, f);
          ma("MutationObserver", a.MutationObserver) &&
            new MutationObserver(function () {
              var g = Ck(a, b),
                h = Kg(a, d);
              if (e !== g || f !== h) (e = g), (f = h), Jg(a, c, e, f);
            }).observe(a.document.body, {
              attributes: !0,
              childList: !0,
              subtree: !0,
              characterData: !0,
            });
        }),
        Ht = E("ep.chp", function (a, c, b, d, e) {
          b && Se(a, c);
          return d || e
            ? la(a).C(
                a.document,
                ["click"],
                D(a, "ep.chp.cl", G([a, c, d, e], Uk))
              )
            : B;
        }),
        Sk = E("ep.dec", function (a, c) {
          if (!c || cd(a)) return [];
          var b = Ig(a, c, " ").split(" "),
            d = b[1],
            e = b[2],
            f = b.slice(3);
          b = parseInt(b[0], 2);
          if (1 === b)
            b =
              "AT5T6ku06kEsXK3iyBRgo6lk8rCtX4Kjf0qpRe74vtAplOkkpSi8E9FDTBJlIV6szGuWawyILrLlztwl4KEqs1pNFvNdtIrYtROBN1gSGS1adp+myrzmZKoqErtCv20WyWiRlEqZQUzvV3sRa1nScmlxptwLLY7o";
          else if (2 === b)
            b =
              "Cy2FcreLJLpYXW3BXFJqldVsGMwDcBw2BGnHL5uj1TKstzse3piMo3Osz+EqDotgqs1TIoZvKtMKDaSRFztgUS8qkqZcaETgKWM54tCpTXjV5vW5OrjBpC0jF4mspUBQGd95fNSfv+vz+g+Hze33Hg8by+Yen1PP6zsdl7PQCwX9mf+f7FMb9x/Pw+v2Pp8Xy74eTwuBwTt913u4On1XW6hxOO5nIzFam00tC218S0kaeugpqST+XliLOlMoTpRQkuewUxoy4CT3efWtdFjSAAm+1BkjIhyeU4vGOf13a6U8wzNY4bGo6DIUemE7N3SBojDr7ezXahpWF022y8mma1NuTnZbq8XZZlPStejfG/CsbPhV6/bSnA==";
          else return [];
          b = Tk(a, b);
          f = f.join("");
          e = parseInt(d + e, 2);
          var g = "";
          d = "";
          for (var h = 0; d.length < e && f[h]; )
            (g += f[h]),
              b[g] && ((d += String.fromCharCode(parseInt(b[g], 2))), (g = "")),
              (h += 1);
          b = "";
          for (e = 0; e < d.length; )
            (f = d.charCodeAt(e)),
              128 > f
                ? ((b += String.fromCharCode(f)), e++)
                : 191 < f && 224 > f
                ? ((g = d.charCodeAt(e + 1)),
                  (b += String.fromCharCode(((f & 31) << 6) | (g & 63))),
                  (e += 2))
                : ((g = d.charCodeAt(e + 1)),
                  (b += String.fromCharCode(
                    ((f & 15) << 12) |
                      ((g & 63) << 6) |
                      (d.charCodeAt(e + 2) & 63)
                  )),
                  (e += 3));
          d = qb(a, b);
          return ca(d) ? d : [];
        }),
        It = E("ep.i", function (a, c) {
          return ma("querySelectorAll", a.document.querySelectorAll)
            ? Rk(a, c).then(function (b) {
                var d = b.vh,
                  e = d[0],
                  f = d[1],
                  g = d[2],
                  h = d[3],
                  k = d[4],
                  l = d[5],
                  m = d[6],
                  p = d[7],
                  r = d[8],
                  q = d[9];
                if (!b.isEnabled) return K.resolve(B);
                var v = Ad(a, e),
                  x = Ad(a, h),
                  J = Ad(a, m),
                  X = Ad(a, r),
                  ra = "" + e + f + g === "" + h + k + l;
                return Id(a).then(function () {
                  v && Dk(a, c, f, g);
                  x && !ra && Dk(a, c, k, l);
                  return Ht(a, c, J || X, p, q);
                });
              })
            : K.resolve(B);
        }),
        Jt = /[\*\.\?\(\)]/g,
        Kt = w(function (a, c, b) {
          try {
            var d = b.replace("\\s", " ").replace(Jt, "");
            Td(a).warn(
              'Function "' +
                d +
                '" has been overriden, this may cause issues with Metrika counter'
            );
          } catch (e) {}
        }, ub),
        Lt = E("r.nn", function (a) {
          rf(a).isEnabled &&
            ge(a, ag, function (c) {
              c.qa.C(function (b) {
                Kt(a, b[1], b[0]);
                ag.splice(100);
              });
            });
        }),
        Mt = E(
          "lt.p",
          Hb("lt.p", function (a) {
            var c;
            if (ma("PerformanceObserver", a.PerformanceObserver)) {
              var b = 0,
                d = new a.PerformanceObserver(
                  D(a, "lt.o", function (e) {
                    e &&
                      e.getEntries &&
                      ((e = e.getEntries()),
                      (b = L(
                        function (f, g) {
                          return f + g.duration;
                        },
                        b,
                        e
                      )),
                      oc(a).o("lt", b));
                  })
                );
              try {
                d.observe(
                  ((c = {}), (c.type = "longtask"), (c.buffered = !0), c)
                );
              } catch (e) {
                return B;
              }
              return function () {
                return d.disconnect();
              };
            }
            return B;
          })
        );
      "function" == typeof Promise && Promise.resolve();
      var Qk = /(.*[\\?&])(ysclid=[^&]+&?)(.*)/,
        Nt = E("yid.e", function (a) {
          var c = P(a),
            b = c.href;
          if (md(c.search, "ysclid")) {
            c = Pk(b);
            var d;
            (null === (d = null === a || void 0 === a ? void 0 : a.history) ||
            void 0 === d
              ? 0
              : d.replaceState) &&
              ma("replaceState", a.history.replaceState) &&
              a.history.replaceState(void 0, "", c);
          }
        }),
        Ek = E("fbq.o", function (a, c, b) {
          var d = n(a, "fbq");
          if (d && d.callMethod) {
            var e = function () {
              var g = xa(arguments),
                h = d.apply(void 0, g);
              c(g);
              return h;
            };
            A(e, d);
            b && z(c, b);
            a.fbq = e;
          } else var f = T(a, G([a, c, va(ja(d && d.queue))], Ek), 1e3, "fbq.d");
          return C(ha, null, a, f);
        }),
        Hc,
        pb,
        Ic,
        Eg =
          ((Hc = {}),
          (Hc.add_to_wishlist = "add-to-whishlist"),
          (Hc.begin_checkout = "begin-checkout"),
          (Hc.generate_lead = "submit-lead"),
          (Hc.add_payment_info = "add-payment-info"),
          Hc),
        Fg =
          ((pb = {}),
          (pb.AddToCart = "add-to-cart"),
          (pb.Lead = "submit-lead"),
          (pb.InitiateCheckout = "begin-checkout"),
          (pb.Purchase = "purchase"),
          (pb.CompleteRegistration = "register"),
          (pb.Contact = "submit-contact"),
          (pb.AddPaymentInfo = "add-payment-info"),
          (pb.AddToWishlist = "add-to-whishlist"),
          (pb.Subscribe = "subscribe"),
          pb),
        Nk =
          ((Ic = {}),
          (Ic["1"] = Eg),
          (Ic["2"] = Eg),
          (Ic["3"] = Eg),
          (Ic["0"] = Fg),
          Ic),
        Ok = [Fg.AddToCart, Fg.Purchase],
        Ot = da(function (a, c) {
          var b = n(c, "ecommerce"),
            d = n(c, "event") || "";
          if (!(b = b && d && { version: "3", lc: d }))
            a: {
              if (ca(c) || cc(c))
                if (((b = xa(c)), (d = b[1]), "event" === b[0] && d)) {
                  b = { version: "2", lc: d };
                  break a;
                }
              b = void 0;
            }
          b ||
            (b = (b = n(c, "ecommerce")) && {
              version: "1",
              lc: I(",", fa(b)),
            });
          b && a(b);
        }),
        Pt = E("ag.e", function (a, c) {
          var b = [],
            d = D(a, "ag.s", G([Ma, b], z));
          "0" === c.aa &&
            ya(a, c, function (e) {
              if (
                n(e, "settings.auto_goals") &&
                Ia(a, c) &&
                (e = Dd(a, c, "autogoal"))
              ) {
                e = G([e, c.jc], Mk);
                var f = Ot(e);
                e = G([a, e], Lk);
                b.push(Ek(a, e));
                b.push(
                  Ne(a, "dataLayer", function (g) {
                    g.qa.C(f);
                  })
                );
              }
            });
          return d;
        }),
        Qt = w(function (a) {
          return (
            n(a, "crypto.subtle.digest") &&
            n(a, "TextEncoder") &&
            n(a, "FileReader") &&
            n(a, "Blob")
          );
        }),
        Rt = E("fpm", function (a, c) {
          if ("https:" !== P(a).protocol || !Qt(a)) return B;
          var b = Ia(a, c);
          return b
            ? function (d) {
                return new K(function (e, f) {
                  return Lb(d)
                    ? fa(d).length
                      ? e(
                          Hg(a, d).then(function (g) {
                            var h, k;
                            g &&
                              g.length &&
                              b.params(
                                ((h = {}),
                                (h.__ym = ((k = {}), (k.fpp = g), k)),
                                h)
                              );
                          }, B)
                        )
                      : f(Va("fpm.l"))
                    : f(Va("fpm.o"));
                })["catch"](D(a, "fpm.en"));
              }
            : B;
        }),
        Jk = [
          "an.yandex.ru/mapuid/google/?partner-tag=yandex_llc",
          "an.yandex.ru/mapuid/google/?partner-tag=yandexcom",
          "an.yandex.ru/mapuid/google/?partner-tag=yandexru",
        ],
        St = E("p.sci", function (a, c) {
          var b = W(c);
          if (!F(b, td)) {
            var d = O(a),
              e = d.l("scip");
            if (!e)
              return ya(a, c, N).then(function (f) {
                f = n(f, "settings.ins");
                e = d.l("scip");
                return !e && f ? (d.o("scip", !0), Gg(a)) : null;
              }, D(a, "ins.cs"));
          }
          return K.resolve();
        }),
        ac = O(window);
      ac.Fa("hitParam", {});
      ac.Fa("lastReferrer", window.location.href);
      ac.Fa("getCounters", Kr(window));
      zf.push(ls);
      var Fk = (function () {
        return function (a, c, b, d) {
          var e = this;
          return D(window, "c.i", function () {
            function f(X, ra, Ea) {
              e[ra] = Bq(k, l, Ea || v, ra, X);
            }
            function g(X, ra) {
              var Ea = ve(k, l, "", X)(k, l);
              Ea &&
                (R(Ea.then)
                  ? Ea.then(function (Kb) {
                      return h(Kb, ra);
                    })
                  : h(Ea, ra));
              return Ea;
            }
            function h(X, ra) {
              X && (R(X) ? r.push(X) : ra && r.push(X[ra]));
            }
            (!window || (isNaN(a) && !a)) && Vf();
            var k = window,
              l = Np(a, Pj, c, b, d);
            l.id || Bb(k, "Invalid Metrika id: " + l.id);
            var m = W(l),
              p = ac.l("counters", {}),
              r = [],
              q = [],
              v = [Gj, ve, Fj];
            v.unshift(zq);
            if (p[m])
              return Bb(k, "Duplicate counter " + m + " initialization"), p[m];
            var x = !1,
              J = ac.l("hitParam", {});
            J[m] && (x = !(!dg(l.aa) || p[m]));
            J[m] = 1;
            e._webvisor = l.Ta || !1;
            p[m] = e;
            ac.o("counters", p);
            ac.Fa("counter", e);
            J = Lr(window, l);
            r.push(J);
            We(window);
            ut(window, l) && delete p[m];
            g(Hs);
            Fs(k, [wt, vt, pl, Um, hl, Lm, Vr, Qm, el, cl, jl]);
            q.push(u(mr, g));
            q.push(u(St, g));
            g(Er);
            q.push(u(Fl, g));
            g(As);
            g(Bs);
            f(Fr(k, l), "hit");
            f(ns(k, l), "params");
            m = g(Mr, Qa({ unsubscribe: 1 }));
            e.trackHash = ve(k, l, "", n(m, Qa({ Fj: 1 })));
            f(Dd(k, l), "reachGoal");
            f(os(k, l), "experiments");
            g(Ds);
            q.push(u(Jr, g));
            x || q.push(u(ds, g));
            r.push(Pt(k, l));
            x = g(Qr, Qa({ zd: 1 }));
            f(n(x, Qa({ Oi: 1 })), "notBounce");
            m = g(Rt);
            f(m, "firstPartyParams");
            f(n(x, Qa({ Vb: 1 })), "accurateTrackBounce");
            g(ps);
            x = g(Tr, Qa({ zd: 1 }));
            f(n(x, Qa({ Ch: 1 })), "extLink");
            f(n(x, Qa({ Xg: 1 })), "addFileExtension");
            f(n(x, Qa({ file: 1 })), "file");
            f(n(x, Qa({ ed: 1 })), "trackLinks");
            r.push(ss(k, l));
            r.push(ts(k));
            f(us(k, l), "ecommerceAdd");
            f(vs(k, l), "ecommerceRemove");
            f(ws(k, l), "ecommerceDetail");
            f(xs(k, l), "ecommercePurchase");
            x = g(Cs);
            f(x || B, "userParams");
            f(Es(k, l, r), "destruct", [Gj, Fj]);
            g(hr);
            g(Ur);
            x = g(Is);
            f(x || B, "setUserID");
            e.getClientID = g(Js) || B;
            g(Xr);
            f(fs(k, l), "clickmap");
            (x = g(It)) && x.then(ea("push", r));
            g(es);
            f(gs(k, l), "enableAll");
            g(yt);
            g(Bt);
            g(hs);
            g(is);
            g(Nt);
            g(Mt);
            q.push(u(zs, g));
            (x = g(js)) && x.then(ea("push", r));
            g(ks);
            Ab(
              k,
              G(
                [
                  k,
                  q,
                  function (X) {
                    g(X);
                  },
                  1,
                  "a.i",
                ],
                Ai
              )
            );
            g(em);
            g(st);
            Lt(k);
          })();
        };
      })();
      (function (a) {
        var c = O(a);
        c.l("i") || (c.o("i", !0), la(a).C(a, ["message"], u(a, Ll)));
      })(window);
      if (window.Ya && Fk) {
        var Gk = na.Zb;
        window.Ya[Gk] = Fk;
        Rr(window);
        var Hk = window.Ya[Gk];
        Hk.informer = Jm(window);
        Hk.counters = ac.l("getCounters");
      }
      (function (a) {
        var c = n(a, "ym");
        if (c) {
          var b = n(c, "a");
          b || ((c.a = []), (b = c.a));
          var d = uh(a);
          ge(
            a,
            b,
            function (e) {
              e.qa.C(d);
            },
            !0
          );
        }
      })(window);
    })();
  } catch (Gg) {}
}.call(this));
