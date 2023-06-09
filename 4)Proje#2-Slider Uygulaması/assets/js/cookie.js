!function (e) {
    if ("function" == typeof define && define.amd) define(e); else if ("object" == typeof exports) module.exports = e(); else {
        var n = window.Cookies, o = window.Cookies = e();
        o.noConflict = function () {
            return window.Cookies = n, o
        }
    }
}(function () {
    function e() {
        for (var e = 0, n = {}; e < arguments.length; e++) {
            var o = arguments[e];
            for (var t in o) n[t] = o[t]
        }
        return n
    }

    function n(o) {
        function t(n, i, r) {
            var c;
            if ("undefined" != typeof document) {
                if (arguments.length > 1) {
                    if (r = e({path: "/"}, t.defaults, r), "number" == typeof r.expires) {
                        var s = new Date;
                        s.setMilliseconds(s.getMilliseconds() + 864e5 * r.expires), r.expires = s
                    }
                    try {
                        c = JSON.stringify(i), /^[\{\[]/.test(c) && (i = c)
                    } catch (a) {
                    }
                    return i = o.write ? o.write(i, n) : encodeURIComponent(String(i)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), n = encodeURIComponent(String(n)), n = n.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent), n = n.replace(/[\(\)]/g, escape), document.cookie = [n, "=", i, r.expires && "; expires=" + r.expires.toUTCString(), r.path && "; path=" + r.path, r.domain && "; domain=" + r.domain, r.secure ? "; secure" : ""].join("")
                }
                n || (c = {});
                for (var p = document.cookie ? document.cookie.split("; ") : [], d = /(%[0-9A-Z]{2})+/g, f = 0; f < p.length; f++) {
                    var u = p[f].split("="), l = u[0].replace(d, decodeURIComponent), m = u.slice(1).join("=");
                    '"' === m.charAt(0) && (m = m.slice(1, -1));
                    try {
                        if (m = o.read ? o.read(m, l) : o(m, l) || m.replace(d, decodeURIComponent), this.json) try {
                            m = JSON.parse(m)
                        } catch (a) {
                        }
                        if (n === l) {
                            c = m;
                            break
                        }
                        n || (c[l] = m)
                    } catch (a) {
                    }
                }
                return c
            }
        }

        return t.set = t, t.get = function (e) {
            return t(e)
        }, t.getJSON = function () {
            return t.apply({json: !0}, [].slice.call(arguments))
        }, t.defaults = {}, t.remove = function (n, o) {
            t(n, "", e(o, {expires: -1}))
        }, t.withConverter = n, t
    }

    return n(function () {
    })
});

var lang = {
    title: "",
    description: "<p>Bu web sitesi, hizmetlerimizden en iyi şekilde yararlanabilmeniz için yasal düzenlemelere uygun çerezler kullanır.</p>",
    link: {
        text: "KVKK aydınlatma metnini görüntülemek için burayı tıklayın.",
        url: "kvkk"
    },
    buttons: {
        accept: "Tamam",
        cancel: ""
    }
};

!function (e) {
    e.fn.qookies = function (o) {
        if ("undefined" == typeof lang) throw new Error("Lang is not defined!");
        var s = e.extend({
            theme: "theme-default",
            position: "bottom-right",
            expires: 30,
            path: "/",
            value: "1",
            cookieName: "qookies-accepted",
            link: {text: lang.link.text, url: lang.link.url}
        }, o), i = e(this);
        i.hide(), i.hasClass("qookies--" + s.position) || i.addClass("qookies--" + s.position), i.hasClass("qookies-" + s.theme) || i.addClass("qookies-" + s.theme);
        var a = e("<div />").addClass("qookies__content"),
            t = e("<header />").addClass("qookies__header js-qookies-header"),
            d = e("<h1 />").addClass("qookies__title js-qookies-title"),
            n = e("<div />").addClass("qookies__description js-cookies-description"),
            l = e("<div />").addClass("qookies__link"), k = e("<a />").addClass("js-cookies-link"),
            p = e("<div />").addClass("qookies__footer"), r = e("<a />").addClass("qookies__btn js-cookies-accept");
        d.html(lang.title).appendTo(t), n.html(lang.description), k.html(s.link.text).attr("href", s.link.url).appendTo(l), a.append(t, n), l.appendTo(p), r.html(lang.buttons.accept).appendTo(p), i.append(a, p), "1" !== Cookies.get(s.cookieName) && i.fadeIn(), r.on("click", function (e) {
            e.preventDefault(), Cookies.set(s.cookieName, s.value, {expires: s.expires, path: s.path}), i.fadeOut()
        })
    }



        $('.qookies').qookies({
        theme: 'theme-default',
        position: 'bottom-right',
        expires: 30, // 30 gun
        path: '/',
        value: '1',
        cookieName: 'HBTCookie',
        link: {
        text: lang.link.text,
        url: lang.link.url
    },
    });


}(jQuery);

