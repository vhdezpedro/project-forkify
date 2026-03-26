
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
const $949cefe0e606d775$export$923ea8233b386e99 = 'https://forkify-api.herokuapp.com/api/v2/recipes/';
const $949cefe0e606d775$export$196440f71ed9f601 = 5;
const $949cefe0e606d775$export$5feaddb1377b7f5e = 10;



const $8655b94003061a8a$var$timeout = function(s) {
    return new Promise(function(_, reject) {
        setTimeout(function() {
            reject(new Error(`Request took too long! Timeout after ${s} second`));
        }, s * 1000);
    });
};
async function $8655b94003061a8a$export$d047a7c56db64af4(url) {
    const fetchPro = fetch(url);
    const res = await Promise.race([
        fetchPro,
        $8655b94003061a8a$var$timeout((0, $949cefe0e606d775$export$196440f71ed9f601))
    ]);
    const data = await res.json();
    return data;
}


const $f821677b80d93c23$export$ca000e230c0caa3e = {
    recipe: {},
    search: {
        query: '',
        results: [],
        page: 1,
        resultsPerPage: (0, $949cefe0e606d775$export$5feaddb1377b7f5e)
    }
};
async function $f821677b80d93c23$export$b96725c7a035d60b(id) {
    try {
        const data = await (0, $8655b94003061a8a$export$d047a7c56db64af4)((0, $949cefe0e606d775$export$923ea8233b386e99) + id);
        const { recipe: recipe } = data.data;
        $f821677b80d93c23$export$ca000e230c0caa3e.recipe = {
            id: recipe.id,
            title: recipe.title,
            publisher: recipe.publisher,
            sourceUrl: recipe.source_url,
            image: recipe.image_url,
            servings: recipe.servings,
            cookTime: recipe.cooking_time,
            ingredients: recipe.ingredients
        };
    } catch (error) {
        throw error;
    }
}
async function $f821677b80d93c23$export$202b8e5cb363a0c4(query) {
    try {
        const data = await (0, $8655b94003061a8a$export$d047a7c56db64af4)(`${(0, $949cefe0e606d775$export$923ea8233b386e99)}?search=${query}`);
        $f821677b80d93c23$export$ca000e230c0caa3e.search.query = query;
        $f821677b80d93c23$export$ca000e230c0caa3e.search.results = data.data.recipes.map((recipe)=>{
            return {
                id: recipe.id,
                title: recipe.title,
                publisher: recipe.publisher,
                image: recipe.image_url
            };
        });
    } catch (error) {
        throw error;
    }
}
function $f821677b80d93c23$export$8d7f79465139ab72(page = $f821677b80d93c23$export$ca000e230c0caa3e.search.page) {
    $f821677b80d93c23$export$ca000e230c0caa3e.search.page = page;
    const start = (page - 1) * $f821677b80d93c23$export$ca000e230c0caa3e.search.resultsPerPage;
    const end = page * $f821677b80d93c23$export$ca000e230c0caa3e.search.resultsPerPage;
    return $f821677b80d93c23$export$ca000e230c0caa3e.search.results.slice(start, end);
}


var $9d84e720eea5ad24$exports = {};
$9d84e720eea5ad24$exports = import.meta.resolve("efVGJ");


const $39aeb40ef9a540e0$var$icons = new URL($9d84e720eea5ad24$exports).href;
class $39aeb40ef9a540e0$export$2e2bcd8739ae039 {
    _data;
    render(data) {
        if (!data || Array.isArray(data) && data.length === 0) return this.renderError();
        this._data = data;
        const markup = this._generateMarkup();
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }
    renderSpinner() {
        const markup = `
    <div class="spinner">
      <svg>
        <use href="${$39aeb40ef9a540e0$var$icons}#icon-loader"></use>
      </svg>
    </div>
  `;
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }
    renderMessage(message = this._message) {
        const markup = `
      <div class="error">
        <div>
          <svg>
            <use href="${$39aeb40ef9a540e0$var$icons}#icon-smile"></use>
          </svg>
        </div>
        <p>${message}</p>
      </div>
    `;
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }
    renderError(message = this._errorMessage) {
        const markup = `
      <div class="error">
        <div>
          <svg>
            <use href="${$39aeb40ef9a540e0$var$icons}#icon-alert-triangle"></use>
          </svg>
        </div>
        <p>${message}</p>
      </div>
    `;
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }
    _clear() {
        this._parentElement.innerHTML = '';
    }
}



const $ea55b24677fb9333$var$icons = new URL($9d84e720eea5ad24$exports).href;
class $ea55b24677fb9333$var$PaginationView extends (0, $39aeb40ef9a540e0$export$2e2bcd8739ae039) {
    _parentElement = document.querySelector('.pagination');
    addHandlerClick(handler) {
        this._parentElement.addEventListener('click', (e)=>{
            const btn = e.target.closest('.btn--inline');
            const goToPage = +btn.dataset.goto;
            handler(goToPage);
        });
    }
    _generateMarkup() {
        const currPage = this._data.page;
        const numPages = Math.ceil(this._data.results.length / this._data.resultsPerPage);
        if (currPage === 1 && numPages === 1) return '';
        else if (currPage === 1 && numPages > 1) return `
        <button data-goto="${currPage + 1}" class="btn--inline pagination__btn--next">
          <span>${currPage + 1}</span>
          <svg class="search__icon">
            <use href="${$ea55b24677fb9333$var$icons}#icon-arrow-right"></use>
          </svg>
        </button>
      `;
        else if (currPage > 1 && currPage < numPages) return `
        <button data-goto="${currPage + 1}" class="btn--inline pagination__btn--next">
          <span>${currPage + 1}</span>
          <svg class="search__icon">
            <use href="${$ea55b24677fb9333$var$icons}#icon-arrow-right"></use>
          </svg>
        </button>
        <button data-goto="${currPage - 1}" class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href="${$ea55b24677fb9333$var$icons}#icon-arrow-left"></use>
          </svg>
          <span>${currPage - 1}</span>
        </button>
      `;
        else if (currPage === numPages) return `
        <button data-goto="${currPage - 1}" class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href="${$ea55b24677fb9333$var$icons}#icon-arrow-left"></use>
          </svg>
          <span>${currPage - 1}</span>
        </button>
      `;
    }
}
const $ea55b24677fb9333$export$13bc880e24b6e7d1 = new $ea55b24677fb9333$var$PaginationView();


var $86d567cf5d15eb45$exports = {};
/*
Fraction.js v5.3.4 8/22/2025
https://raw.org/article/rational-numbers-in-javascript/

Copyright (c) 2025, Robert Eisele (https://raw.org/)
Licensed under the MIT license.
*/ 'use strict';
(function(F) {
    function D() {
        return Error("Parameters must be integer");
    }
    function x() {
        return Error("Invalid argument");
    }
    function C() {
        return Error("Division by Zero");
    }
    function q(a, b) {
        var d = g, c = h;
        let f = h;
        if (void 0 !== a && null !== a) {
            if (void 0 !== b) {
                if ("bigint" === typeof a) d = a;
                else {
                    if (isNaN(a)) throw x();
                    if (0 !== a % 1) throw D();
                    d = BigInt(a);
                }
                if ("bigint" === typeof b) c = b;
                else {
                    if (isNaN(b)) throw x();
                    if (0 !== b % 1) throw D();
                    c = BigInt(b);
                }
                f = d * c;
            } else if ("object" === typeof a) {
                if ("d" in a && "n" in a) d = BigInt(a.n), c = BigInt(a.d), "s" in a && (d *= BigInt(a.s));
                else if (0 in a) d = BigInt(a[0]), 1 in a && (c = BigInt(a[1]));
                else if ("bigint" === typeof a) d = a;
                else throw x();
                f = d * c;
            } else if ("number" === typeof a) {
                if (isNaN(a)) throw x();
                0 > a && (f = -h, a = -a);
                if (0 === a % 1) d = BigInt(a);
                else {
                    b = 1;
                    var k = 0, l = 1, m = 1;
                    let r = 1;
                    1 <= a && (b = 10 ** Math.floor(1 + Math.log10(a)), a /= b);
                    for(; 1E7 >= l && 1E7 >= r;)if (c = (k + m) / (l + r), a === c) {
                        1E7 >= l + r ? (d = k + m, c = l + r) : r > l ? (d = m, c = r) : (d = k, c = l);
                        break;
                    } else a > c ? (k += m, l += r) : (m += k, r += l), 1E7 < l ? (d = m, c = r) : (d = k, c = l);
                    d = BigInt(d) * BigInt(b);
                    c = BigInt(c);
                }
            } else if ("string" === typeof a) {
                c = 0;
                k = b = d = g;
                l = m = h;
                a = a.replace(/_/g, "").match(/\d+|./g);
                if (null === a) throw x();
                "-" === a[c] ? (f = -h, c++) : "+" === a[c] && c++;
                if (a.length === c + 1) b = w(a[c++], f);
                else if ("." === a[c + 1] || "." === a[c]) {
                    "." !== a[c] && (d = w(a[c++], f));
                    c++;
                    if (c + 1 === a.length || "(" === a[c + 1] && ")" === a[c + 3] || "'" === a[c + 1] && "'" === a[c + 3]) b = w(a[c], f), m = t ** BigInt(a[c].length), c++;
                    if ("(" === a[c] && ")" === a[c + 2] || "'" === a[c] && "'" === a[c + 2]) k = w(a[c + 1], f), l = t ** BigInt(a[c + 1].length) - h, c += 3;
                } else "/" === a[c + 1] || ":" === a[c + 1] ? (b = w(a[c], f), m = w(a[c + 2], h), c += 3) : "/" === a[c + 3] && " " === a[c + 1] && (d = w(a[c], f), b = w(a[c + 2], f), m = w(a[c + 4], h), c += 5);
                if (a.length <= c) c = m * l, f = d = k + c * d + l * b;
                else throw x();
            } else if ("bigint" === typeof a) f = d = a, c = h;
            else throw x();
        }
        if (c === g) throw C();
        e.s = f < g ? -h : h;
        e.n = d < g ? -d : d;
        e.d = c < g ? -c : c;
    }
    function w(a, b) {
        try {
            a = BigInt(a);
        } catch (d) {
            throw x();
        }
        return a * b;
    }
    function u(a) {
        return "bigint" === typeof a ? a : Math.floor(a);
    }
    function n(a, b) {
        if (b === g) throw C();
        const d = Object.create(v.prototype);
        d.s = a < g ? -h : h;
        a = a < g ? -a : a;
        const c = y(a, b);
        d.n = a / c;
        d.d = b / c;
        return d;
    }
    function A(a) {
        const b = Object.create(null);
        if (a <= h) return b[a] = h, b;
        for(; a % p === g;)b[p] = (b[p] || g) + h, a /= p;
        for(; a % B === g;)b[B] = (b[B] || g) + h, a /= B;
        for(; a % z === g;)b[z] = (b[z] || g) + h, a /= z;
        for(let d = 0, c = p + z; c * c <= a;){
            for(; a % c === g;)b[c] = (b[c] || g) + h, a /= c;
            c += G[d];
            d = d + 1 & 7;
        }
        a > h && (b[a] = (b[a] || g) + h);
        return b;
    }
    function y(a, b) {
        if (!a) return b;
        if (!b) return a;
        for(;;){
            a %= b;
            if (!a) return b;
            b %= a;
            if (!b) return a;
        }
    }
    function v(a, b) {
        q(a, b);
        if (this instanceof v) a = y(e.d, e.n), this.s = e.s, this.n = e.n / a, this.d = e.d / a;
        else return n(e.s * e.n, e.d);
    }
    "undefined" === typeof BigInt && (BigInt = function(a) {
        if (isNaN(a)) throw Error("");
        return a;
    });
    const g = BigInt(0), h = BigInt(1), p = BigInt(2), B = BigInt(3), z = BigInt(5), t = BigInt(10), e = {
        s: h,
        n: g,
        d: h
    }, G = [
        p * p,
        p,
        p * p,
        p,
        p * p,
        p * B,
        p,
        p * B
    ];
    v.prototype = {
        s: h,
        n: g,
        d: h,
        abs: function() {
            return n(this.n, this.d);
        },
        neg: function() {
            return n(-this.s * this.n, this.d);
        },
        add: function(a, b) {
            q(a, b);
            return n(this.s * this.n * e.d + e.s * this.d * e.n, this.d * e.d);
        },
        sub: function(a, b) {
            q(a, b);
            return n(this.s * this.n * e.d - e.s * this.d * e.n, this.d * e.d);
        },
        mul: function(a, b) {
            q(a, b);
            return n(this.s * e.s * this.n * e.n, this.d * e.d);
        },
        div: function(a, b) {
            q(a, b);
            return n(this.s * e.s * this.n * e.d, this.d * e.n);
        },
        clone: function() {
            return n(this.s * this.n, this.d);
        },
        mod: function(a, b) {
            if (void 0 === a) return n(this.s * this.n % this.d, h);
            q(a, b);
            if (g === e.n * this.d) throw C();
            return n(this.s * e.d * this.n % (e.n * this.d), e.d * this.d);
        },
        gcd: function(a, b) {
            q(a, b);
            return n(y(e.n, this.n) * y(e.d, this.d), e.d * this.d);
        },
        lcm: function(a, b) {
            q(a, b);
            return e.n === g && this.n === g ? n(g, h) : n(e.n * this.n, y(e.n, this.n) * y(e.d, this.d));
        },
        inverse: function() {
            return n(this.s * this.d, this.n);
        },
        pow: function(a, b) {
            q(a, b);
            if (e.d === h) return e.s < g ? n((this.s * this.d) ** e.n, this.n ** e.n) : n((this.s * this.n) ** e.n, this.d ** e.n);
            if (this.s < g) return null;
            a = A(this.n);
            b = A(this.d);
            let d = h, c = h;
            for(let f in a)if ("1" !== f) {
                if ("0" === f) {
                    d = g;
                    break;
                }
                a[f] *= e.n;
                if (a[f] % e.d === g) a[f] /= e.d;
                else return null;
                d *= BigInt(f) ** a[f];
            }
            for(let f in b)if ("1" !== f) {
                b[f] *= e.n;
                if (b[f] % e.d === g) b[f] /= e.d;
                else return null;
                c *= BigInt(f) ** b[f];
            }
            return e.s < g ? n(c, d) : n(d, c);
        },
        log: function(a, b) {
            q(a, b);
            if (this.s <= g || e.s <= g) return null;
            var d = Object.create(null);
            a = A(e.n);
            const c = A(e.d);
            b = A(this.n);
            const f = A(this.d);
            for(var k in c)a[k] = (a[k] || g) - c[k];
            for(var l in f)b[l] = (b[l] || g) - f[l];
            for(var m in a)"1" !== m && (d[m] = !0);
            for(var r in b)"1" !== r && (d[r] = !0);
            l = k = null;
            for(const E in d)if (m = a[E] || g, d = b[E] || g, m === g) {
                if (d !== g) return null;
            } else if (r = y(d, m), d /= r, m /= r, null === k && null === l) k = d, l = m;
            else if (d * l !== k * m) return null;
            return null !== k && null !== l ? n(k, l) : null;
        },
        equals: function(a, b) {
            q(a, b);
            return this.s * this.n * e.d === e.s * e.n * this.d;
        },
        lt: function(a, b) {
            q(a, b);
            return this.s * this.n * e.d < e.s * e.n * this.d;
        },
        lte: function(a, b) {
            q(a, b);
            return this.s * this.n * e.d <= e.s * e.n * this.d;
        },
        gt: function(a, b) {
            q(a, b);
            return this.s * this.n * e.d > e.s * e.n * this.d;
        },
        gte: function(a, b) {
            q(a, b);
            return this.s * this.n * e.d >= e.s * e.n * this.d;
        },
        compare: function(a, b) {
            q(a, b);
            a = this.s * this.n * e.d - e.s * e.n * this.d;
            return (g < a) - (a < g);
        },
        ceil: function(a) {
            a = t ** BigInt(a || 0);
            return n(u(this.s * a * this.n / this.d) + (a * this.n % this.d > g && this.s >= g ? h : g), a);
        },
        floor: function(a) {
            a = t ** BigInt(a || 0);
            return n(u(this.s * a * this.n / this.d) - (a * this.n % this.d > g && this.s < g ? h : g), a);
        },
        round: function(a) {
            a = t ** BigInt(a || 0);
            return n(u(this.s * a * this.n / this.d) + this.s * ((this.s >= g ? h : g) + a * this.n % this.d * p > this.d ? h : g), a);
        },
        roundTo: function(a, b) {
            q(a, b);
            var d = this.n * e.d;
            a = this.d * e.n;
            b = d % a;
            d = u(d / a);
            b + b >= a && d++;
            return n(this.s * d * e.n, e.d);
        },
        divisible: function(a, b) {
            q(a, b);
            return e.n === g ? !1 : this.n * e.d % (e.n * this.d) === g;
        },
        valueOf: function() {
            return Number(this.s * this.n) / Number(this.d);
        },
        toString: function(a = 15) {
            let b = this.n, d = this.d;
            var c;
            a: {
                for(c = d; c % p === g; c /= p);
                for(; c % z === g; c /= z);
                if (c === h) c = g;
                else {
                    for(var f = t % c, k = 1; f !== h; k++)if (f = f * t % c, 2E3 < k) {
                        c = g;
                        break a;
                    }
                    c = BigInt(k);
                }
            }
            a: {
                f = h;
                k = t;
                var l = c;
                let m = h;
                for(; l > g; k = k * k % d, l >>= h)l & h && (m = m * k % d);
                k = m;
                for(l = 0; 300 > l; l++){
                    if (f === k) {
                        f = BigInt(l);
                        break a;
                    }
                    f = f * t % d;
                    k = k * t % d;
                }
                f = 0;
            }
            k = f;
            f = this.s < g ? "-" : "";
            f += u(b / d);
            (b = b % d * t) && (f += ".");
            if (c) {
                for(a = k; a--;)f += u(b / d), b %= d, b *= t;
                f += "(";
                for(a = c; a--;)f += u(b / d), b %= d, b *= t;
                f += ")";
            } else for(; b && a--;)f += u(b / d), b %= d, b *= t;
            return f;
        },
        toFraction: function(a = !1) {
            let b = this.n, d = this.d, c = this.s < g ? "-" : "";
            if (d === h) c += b;
            else {
                const f = u(b / d);
                a && f > g && (c += f, c += " ", b %= d);
                c = c + b + "/" + d;
            }
            return c;
        },
        toLatex: function(a = !1) {
            let b = this.n, d = this.d, c = this.s < g ? "-" : "";
            if (d === h) c += b;
            else {
                const f = u(b / d);
                a && f > g && (c += f, b %= d);
                c = c + "\\frac{" + b + "}{" + d;
                c += "}";
            }
            return c;
        },
        toContinued: function() {
            let a = this.n, b = this.d;
            const d = [];
            for(; b;){
                d.push(u(a / b));
                const c = a % b;
                a = b;
                b = c;
            }
            return d;
        },
        simplify: function(a = .001) {
            a = BigInt(Math.ceil(1 / a));
            const b = this.abs(), d = b.toContinued();
            for(let f = 1; f < d.length; f++){
                let k = n(d[f - 1], h);
                for(var c = f - 2; 0 <= c; c--)k = k.inverse().add(d[c]);
                c = k.sub(b);
                if (c.n * a < c.d) return k.mul(this.s);
            }
            return this;
        }
    };
    "function" === typeof define && define.amd ? define([], function() {
        return v;
    }) : (Object.defineProperty(v, "__esModule", {
        value: !0
    }), v["default"] = v, v.Fraction = v, $86d567cf5d15eb45$exports = v);
})($86d567cf5d15eb45$exports);




const $87c8fee486b3a62a$var$icons = new URL($9d84e720eea5ad24$exports).href;
class $87c8fee486b3a62a$var$RecipeView extends (0, $39aeb40ef9a540e0$export$2e2bcd8739ae039) {
    _parentElement = document.querySelector('.recipe');
    _data;
    _errorMessage = 'We could not find that recipe. Please try another one!';
    _message = '';
    render(data) {
        this._data = data;
        const markup = this._generateMarkup();
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }
    renderSpinner() {
        const markup = `
    <div class="spinner">
      <svg>
        <use href="${$87c8fee486b3a62a$var$icons}#icon-loader"></use>
      </svg>
    </div>
  `;
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }
    renderMessage(message = this._message) {
        const markup = `
      <div class="error">
        <div>
          <svg>
            <use href="${$87c8fee486b3a62a$var$icons}#icon-smile"></use>
          </svg>
        </div>
        <p>${message}</p>
      </div>
    `;
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }
    renderError(message = this._errorMessage) {
        const markup = `
      <div class="error">
        <div>
          <svg>
            <use href="${$87c8fee486b3a62a$var$icons}#icon-alert-triangle"></use>
          </svg>
        </div>
        <p>${message}</p>
      </div>
    `;
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }
    _generateMarkup() {
        return `
    <figure class="recipe__fig">
      <img src="${this._data.image}" alt="Tomato" class="recipe__img" />
      <h1 class="recipe__title">
        <span>${this._data.title}</span>
      </h1>
    </figure>
    <div class="recipe__details">
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${$87c8fee486b3a62a$var$icons}#icon-clock"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookTime}</span>
        <span class="recipe__info-text">minutes</span>
      </div>
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${$87c8fee486b3a62a$var$icons}#icon-users"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
        <span class="recipe__info-text">servings</span>

        <div class="recipe__info-buttons">
          <button class="btn--tiny btn--increase-servings">
            <svg>
              <use href="${$87c8fee486b3a62a$var$icons}#icon-minus-circle"></use>
            </svg>
          </button>
          <button class="btn--tiny btn--increase-servings">
            <svg>
              <use href="${$87c8fee486b3a62a$var$icons}#icon-plus-circle"></use>
            </svg>
          </button>
        </div>
      </div>
      <div class="recipe__user-generated">
        <svg>
          <use href="${$87c8fee486b3a62a$var$icons}#icon-user"></use>
        </svg>
      </div>
      <button class="btn--round">
        <svg class="">
          <use href="${$87c8fee486b3a62a$var$icons}#icon-bookmark-fill"></use>
        </svg>
      </button>
    </div>
    <div class="recipe__ingredients">
      <h2 class="heading--2">Recipe ingredients</h2>
      <ul class="recipe__ingredient-list">
      ${this._data.ingredients.map((ingredient)=>{
            return `        
          <li class="recipe__ingredient">
            <svg class="recipe__icon">
              <use href="${$87c8fee486b3a62a$var$icons}#icon-check"></use>
            </svg>
            <div class="recipe__quantity">${ingredient.quantity ? new (0, (/*@__PURE__*/$parcel$interopDefault($86d567cf5d15eb45$exports)))(ingredient.quantity).toFraction() : ''}</div>
            <div class="recipe__description">
              <span class="recipe__unit">${ingredient.unit}</span>
              ${ingredient.description}
            </div>
          </li>
        `;
        }).join('')}
      </ul>
    </div>
    <div class="recipe__directions">
      <h2 class="heading--2">How to cook it</h2>
      <p class="recipe__directions-text">
        This recipe was carefully designed and tested by
        <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
        directions at their website.
      </p>
      <a
        class="btn--small recipe__btn"
        href="${this._data.sourceUrl}"
        target="_blank"
      >
        <span>Directions</span>
        <svg class="search__icon">
          <use href="${$87c8fee486b3a62a$var$icons}#icon-arrow-right"></use>
        </svg>
      </a>
    </div>
    `;
    }
    _clear() {
        this._parentElement.innerHTML = '';
    }
    addHandlerRender(handler) {
        [
            'hashchange',
            'load'
        ].forEach((e)=>window.addEventListener(e, handler));
    }
}
const $87c8fee486b3a62a$export$7605762ca9847433 = new $87c8fee486b3a62a$var$RecipeView();




const $34f8e1938a5b3048$var$icons = new URL($9d84e720eea5ad24$exports).href;
class $34f8e1938a5b3048$var$ResultView extends (0, $39aeb40ef9a540e0$export$2e2bcd8739ae039) {
    _parentElement = document.querySelector('.results');
    _data = [];
    _errorMessage = 'No recipes found for your query';
    _message = '';
    _generateMarkup() {
        return this._data.map(this._generateMarkupPreview).join('');
    }
    _generateMarkupPreview(result) {
        return `
      <li class="preview">
        <a class="preview__link preview__link--active" href="#${result.id}">
          <figure class="preview__fig">
            <img src="${result.image}" alt="Test" />
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">${result.title}</h4>
            <p class="preview__publisher">${result.publisher}</p>
            <div class="preview__user-generated">
              <svg>
                <use href="${$34f8e1938a5b3048$var$icons}#icon-user"></use>
              </svg>
            </div>
          </div>
        </a>
      </li>
    `;
    }
}
const $34f8e1938a5b3048$export$fd6bb25c657a563c = new $34f8e1938a5b3048$var$ResultView();


class $faba7382c58d929e$var$SearchView {
    _parentElement = document.querySelector('.search');
    getQuery() {
        const query = this._parentElement.querySelector('.search__field').value;
        this._clearInput();
        return query;
    }
    addHandlerSearch(handler) {
        this._parentElement.addEventListener('submit', (e)=>{
            e.preventDefault();
            handler();
        });
    }
    _clearInput() {
        this._parentElement.querySelector('.search__field').value = '';
    }
}
const $faba7382c58d929e$export$200ed059967eb301 = new $faba7382c58d929e$var$SearchView();


// https://forkify-api.herokuapp.com/v2
///////////////////////////////////////
const $51e55805949f51d8$var$controlRecipes = async function() {
    try {
        const id = window.location.hash.slice(1);
        if (!id) return;
        (0, $87c8fee486b3a62a$export$7605762ca9847433).renderSpinner();
        await $f821677b80d93c23$export$b96725c7a035d60b(id);
        (0, $87c8fee486b3a62a$export$7605762ca9847433).render($f821677b80d93c23$export$ca000e230c0caa3e.recipe);
    } catch (error) {
        (0, $87c8fee486b3a62a$export$7605762ca9847433).renderError();
    }
};
const $51e55805949f51d8$var$controlSearchResults = async function() {
    const query = (0, $faba7382c58d929e$export$200ed059967eb301).getQuery();
    if (!query) return;
    try {
        (0, $34f8e1938a5b3048$export$fd6bb25c657a563c).renderSpinner();
        await $f821677b80d93c23$export$202b8e5cb363a0c4(query);
        (0, $34f8e1938a5b3048$export$fd6bb25c657a563c).render($f821677b80d93c23$export$8d7f79465139ab72());
        (0, $ea55b24677fb9333$export$13bc880e24b6e7d1).render($f821677b80d93c23$export$ca000e230c0caa3e.search);
    } catch (error) {
        console.log(error);
    }
};
const $51e55805949f51d8$var$controlPagination = function(goToPage) {
    (0, $34f8e1938a5b3048$export$fd6bb25c657a563c).render($f821677b80d93c23$export$8d7f79465139ab72(goToPage));
    (0, $ea55b24677fb9333$export$13bc880e24b6e7d1).render($f821677b80d93c23$export$ca000e230c0caa3e.search);
};
(function init() {
    (0, $87c8fee486b3a62a$export$7605762ca9847433).addHandlerRender($51e55805949f51d8$var$controlRecipes);
    (0, $faba7382c58d929e$export$200ed059967eb301).addHandlerSearch($51e55805949f51d8$var$controlSearchResults);
    (0, $ea55b24677fb9333$export$13bc880e24b6e7d1).addHandlerClick($51e55805949f51d8$var$controlPagination);
})();


//# sourceMappingURL=project-forkify.c1e04f82.js.map
