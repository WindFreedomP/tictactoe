
try {
	(window.FB && !window.FB.__buffer) || (function() {
		var apply = Function.prototype.apply;

		function bindContext(fn, thisArg) {
			return function _sdkBound() {
				return apply.call(fn, thisArg, arguments);
			};
		}
		var global = {
			__type: 'JS_SDK_SANDBOX',
			window: window,
			document: window.document
		};
		var sandboxSafelist = ['setTimeout', 'setInterval', 'clearTimeout', 'clearInterval'];
		for(var i = 0; i < sandboxSafelist.length; i++) {
			global[sandboxSafelist[i]] = bindContext(window[sandboxSafelist[i]], window);
		}(function() {
			var self = window;
			var __DEV__ = 0;

			function emptyFunction() {};
			var __transform_includes = {};
			var __annotator, __bodyWrapper;
			var __w, __t;
			var undefined;
			with(this) {
				(function() {
					var a = {},
						b = function(a, b) {
							if(!a && !b) return null;
							var c = {};
							typeof a !== "undefined" && (c.type = a);
							typeof b !== "undefined" && (c.signature = b);
							return c
						},
						c = function(a, c) {
							return b(a && /^[A-Z]/.test(a) ? a : void 0, c && (c.params && c.params.length || c.returns) ? "function(" + (c.params ? c.params.map(function(a) {
								return /\?/.test(a) ? "?" + a.replace("?", "") : a
							}).join(",") : "") + ")" + (c.returns ? ":" + c.returns : "") : void 0)
						},
						d = function(a, b, c) {
							return a
						},
						e = function(a, b, d) {
							"sourcemeta" in __transform_includes && (a.__SMmeta = b);
							if("typechecks" in __transform_includes) {
								b = c(b ? b.name : void 0, d);
								b && __w(a, b)
							}
							return a
						},
						f = function(a, b, c) {
							return c.apply(a, b)
						},
						g = function(a, b, c, d) {
							d && d.params && __t.apply(a, d.params);
							c = c.apply(a, b);
							d && d.returns && __t([c, d.returns]);
							return c
						};
					g = function(b, c, d, e, f) {
						if(f) {
							f.callId || (f.callId = f.module + ":" + (f.line || 0) + ":" + (f.column || 0));
							e = f.callId;
							a[e] = (a[e] || 0) + 1
						}
						return d.apply(b, c)
					};
					typeof __transform_includes === "undefined" ? (__annotator = d, __bodyWrapper = f) : (__annotator = e, "codeusage" in __transform_includes ? (__annotator = d, __bodyWrapper = g, __bodyWrapper.getCodeUsage = function() {
						return a
					}, __bodyWrapper.clearCodeUsage = function() {
						a = {}
					}) : "typechecks" in __transform_includes ? __bodyWrapper = f : __bodyWrapper = f)
				})();
				__t = function(a) {
					return a[0]
				}, __w = function(a) {
					return a
				};
				(function(a) {
					var b = {},
						c = ["global", "require", "requireDynamic", "requireLazy", "module", "exports"],
						d = ["global", "require", "importDefault", "importNamespace", "requireLazy", "module", "exports"],
						e = 1,
						f = 32,
						g = 64,
						h = {},
						i = Object.prototype.hasOwnProperty;

					function j(e, h) {
						if(!i.call(b, e)) {
							if(h) return null;
							throw new Error("Module " + e + " has not been defined")
						}
						h = b[e];
						if(h.resolved) return h;
						e = h.special;
						var j = h.factory.length,
							n = e & f ? d.concat(h.deps) : c.concat(h.deps),
							o = [],
							p;
						for(var q = 0; q < j; q++) {
							switch(n[q]) {
								case "module":
									p = h;
									break;
								case "exports":
									p = h.exports;
									break;
								case "global":
									p = a;
									break;
								case "require":
									p = k;
									break;
								case "requireDynamic":
									p = null;
									break;
								case "requireLazy":
									p = null;
									break;
								case "importDefault":
									p = l;
									break;
								case "importNamespace":
									p = m;
									break;
								default:
									typeof n[q] === "string" && (p = k.call(null, n[q]))
							}
							o.push(p)
						}
						n = h.factory.apply(a, o);
						n && (h.exports = n);
						e & g ? h.exports != null && i.call(h.exports, "default") && (h.defaultExport = h.exports["default"]) : h.defaultExport = h.exports;
						h.resolved = !0;
						return h
					}

					function k(a, b) {
						a = j(a, b);
						if(a) return a.defaultExport !== h ? a.defaultExport : a.exports
					}

					function l(a) {
						a = j(a);
						if(a) return a.defaultExport !== h ? a.defaultExport : null
					}

					function m(a) {
						a = j(a);
						if(a) return a.exports
					}

					function n(a, c, d, f) {
						typeof d === "function" ? (b[a] = {
							factory: d,
							deps: c,
							defaultExport: h,
							exports: {},
							special: f || 0,
							resolved: !1
						}, f != null && f & e && k.call(null, a)) : b[a] = {
							defaultExport: d,
							exports: d,
							resolved: !0
						}
					}
					a.__d = n;
					a.require = k;
					a.importDefault = l;
					a.importNamespace = m;
					a.$RefreshReg$ = function() {};
					a.$RefreshSig$ = function() {
						return function(a) {
							return a
						}
					}
				})(this);
				__d("ES5FunctionPrototype", [], (function(a, b, c, d, e, f) {
					a = {
						bind: function(a) {
							if(typeof this !== "function") throw new TypeError("Bind must be called on a function");
							var b = this,
								c = Array.prototype.slice.call(arguments, 1);

							function d() {
								return b.apply(a, c.concat(Array.prototype.slice.call(arguments)))
							}
							d.displayName = "bound:" + (b.displayName || b.name || "(?)");
							d.toString = function() {
								return "bound: " + b
							};
							return d
						}
					};
					b = a;
					f["default"] = b
				}), 66);
				__d("ES5StringPrototype", [], (function(a, b, c, d, e, f) {
					a = {
						startsWith: function(a) {
							var b = String(this);
							if(this == null) throw new TypeError("String.prototype.startsWith called on null or undefined");
							var c = arguments.length > 1 ? Number(arguments[1]) : 0;
							isNaN(c) && (c = 0);
							var d = Math.min(Math.max(c, 0), b.length);
							return b.indexOf(String(a), c) == d
						},
						endsWith: function(a) {
							var b = String(this);
							if(this == null) throw new TypeError("String.prototype.endsWith called on null or undefined");
							var c = b.length,
								d = String(a),
								e = arguments.length > 1 ? Number(arguments[1]) : c;
							isNaN(e) && (e = 0);
							var f = Math.min(Math.max(e, 0), c),
								g = f - d.length;
							return g < 0 ? !1 : b.lastIndexOf(d, g) == g
						},
						includes: function(a) {
							if(this == null) throw new TypeError("String.prototype.contains called on null or undefined");
							var b = String(this),
								c = arguments.length > 1 ? Number(arguments[1]) : 0;
							isNaN(c) && (c = 0);
							return b.indexOf(String(a), c) != -1
						},
						repeat: function(a) {
							if(this == null) throw new TypeError("String.prototype.repeat called on null or undefined");
							var b = String(this);
							a = a ? Number(a) : 0;
							isNaN(a) && (a = 0);
							if(a < 0 || a === Infinity) throw RangeError();
							if(a === 1) return b;
							if(a === 0) return "";
							var c = "";
							while(a) a & 1 && (c += b), (a >>= 1) && (b += b);
							return c
						}
					};
					b = a;
					f["default"] = b
				}), 66);
				__d("ES6Array", [], (function(a, b, c, d, e, f) {
					"use strict";
					a = {
						from: function(a) {
							if(a == null) throw new TypeError("Object is null or undefined");
							var b = arguments[1],
								c = arguments[2],
								d = this,
								e = Object(a),
								f = typeof Symbol === "function" && navigator.userAgent.indexOf("Trident/7.0") === -1 ? typeof Symbol === "function" ? Symbol.iterator : "@@iterator" : "@@iterator",
								g = typeof b === "function",
								h = typeof e[f] === "function",
								i = 0,
								j, k;
							if(h) {
								j = typeof d === "function" ? new d() : [];
								var l = e[f](),
									m;
								while(!(m = l.next()).done) k = m.value, g && (k = b.call(c, k, i)), j[i] = k, i += 1;
								j.length = i;
								return j
							}
							var n = e.length;
							(isNaN(n) || n < 0) && (n = 0);
							j = typeof d === "function" ? new d(n) : new Array(n);
							while(i < n) k = e[i], g && (k = b.call(c, k, i)), j[i] = k, i += 1;
							j.length = i;
							return j
						}
					};
					b = a;
					f["default"] = b
				}), 66);
				__d("ES6ArrayPrototype", [], (function(a, b, c, d, e, f) {
					var g = {
						find: function(a, b) {
							if(this == null) throw new TypeError("Array.prototype.find called on null or undefined");
							if(typeof a !== "function") throw new TypeError("predicate must be a function");
							a = g.findIndex.call(this, a, b);
							return a === -1 ? void 0 : this[a]
						},
						findIndex: function(a, b) {
							if(this == null) throw new TypeError("Array.prototype.findIndex called on null or undefined");
							if(typeof a !== "function") throw new TypeError("predicate must be a function");
							var c = Object(this),
								d = c.length >>> 0;
							for(var e = 0; e < d; e++)
								if(a.call(b, c[e], e, c)) return e;
							return -1
						},
						fill: function(a, b, c) {
							if(this == null) throw new TypeError("Array.prototype.fill called on null or undefined");
							var d = Object(this),
								e = d.length >>> 0,
								f = arguments[1],
								g = f >> 0,
								h = g < 0 ? Math.max(e + g, 0) : Math.min(g, e),
								i = arguments[2],
								j = i === void 0 ? e : i >> 0,
								k = j < 0 ? Math.max(e + j, 0) : Math.min(j, e);
							while(h < k) d[h] = a, h++;
							return d
						}
					};
					a = g;
					f["default"] = a
				}), 66);
				__d("ES6Number", [], (function(a, b, c, d, e, f) {
					a = Math.pow(2, -52);
					b = Math.pow(2, 53) - 1;
					c = -1 * b;
					d = {
						isFinite: function(a) {
							function b(b) {
								return a.apply(this, arguments)
							}
							b.toString = function() {
								return a.toString()
							};
							return b
						}(function(a) {
							return typeof a === "number" && isFinite(a)
						}),
						isNaN: function(a) {
							function b(b) {
								return a.apply(this, arguments)
							}
							b.toString = function() {
								return a.toString()
							};
							return b
						}(function(a) {
							return typeof a === "number" && isNaN(a)
						}),
						isInteger: function(a) {
							return this.isFinite(a) && Math.floor(a) === a
						},
						isSafeInteger: function(a) {
							return this.isFinite(a) && a >= this.MIN_SAFE_INTEGER && a <= this.MAX_SAFE_INTEGER && Math.floor(a) === a
						},
						EPSILON: a,
						MAX_SAFE_INTEGER: b,
						MIN_SAFE_INTEGER: c
					};
					e = d;
					f["default"] = e
				}), 66);
				__d("ES6Object", [], (function(a, b, c, d, e, f) {
					var g = {}.hasOwnProperty;
					a = {
						assign: function(a) {
							if(a == null) throw new TypeError("Object.assign target cannot be null or undefined");
							a = Object(a);
							for(var b = 0; b < (arguments.length <= 1 ? 0 : arguments.length - 1); b++) {
								var c = b + 1 < 1 || arguments.length <= b + 1 ? void 0 : arguments[b + 1];
								if(c == null) continue;
								c = Object(c);
								for(var d in c) g.call(c, d) && (a[d] = c[d])
							}
							return a
						},
						is: function(a, b) {
							if(a === b) return a !== 0 || 1 / a === 1 / b;
							else return a !== a && b !== b
						}
					};
					b = a;
					f["default"] = b
				}), 66);
				__d("ES5Array", [], (function(a, b, c, d, e, f) {
					a = {
						isArray: function(a) {
							return Object.prototype.toString.call(a) == "[object Array]"
						}
					};
					b = a;
					f["default"] = b
				}), 66);
				__d("ES5ArrayPrototype", [], (function(a, b, c, d, e, f) {
					a = {
						indexOf: function(a, b) {
							b = b;
							var c = this.length;
							b |= 0;
							b < 0 && (b += c);
							for(; b < c; b++)
								if(b in this && this[b] === a) return b;
							return -1
						}
					};
					b = a;
					f["default"] = b
				}), 66);
				__d("ES7ArrayPrototype", ["ES5Array", "ES5ArrayPrototype"], (function(a, b, c, d, e, f) {
					var g = b("ES5Array").isArray,
						h = b("ES5ArrayPrototype").indexOf;

					function i(a) {
						return Math.min(Math.max(j(a), 0), Number.MAX_SAFE_INTEGER)
					}

					function j(a) {
						a = Number(a);
						return isFinite(a) && a !== 0 ? k(a) * Math.floor(Math.abs(a)) : a
					}

					function k(a) {
						return a >= 0 ? 1 : -1
					}
					a = {
						includes: function(a) {
							"use strict";
							if(a !== void 0 && g(this) && !(typeof a === "number" && isNaN(a))) return h.apply(this, arguments) !== -1;
							var b = Object(this),
								c = b.length ? i(b.length) : 0;
							if(c === 0) return !1;
							var d = arguments.length > 1 ? j(arguments[1]) : 0,
								e = d < 0 ? Math.max(c + d, 0) : d,
								f = isNaN(a) && typeof a === "number";
							while(e < c) {
								var k = b[e];
								if(k === a || typeof k === "number" && f && isNaN(k)) return !0;
								e++
							}
							return !1
						}
					};
					e.exports = a
				}), null);
				__d("ES7Object", [], (function(a, b, c, d, e, f) {
					var g = {}.hasOwnProperty;
					a = {
						entries: function(a) {
							if(a == null) throw new TypeError("Object.entries called on non-object");
							var b = [];
							for(var c in a) g.call(a, c) && b.push([c, a[c]]);
							return b
						},
						values: function(a) {
							if(a == null) throw new TypeError("Object.values called on non-object");
							var b = [];
							for(var c in a) g.call(a, c) && b.push(a[c]);
							return b
						}
					};
					b = a;
					f["default"] = b
				}), 66);
				__d("ES7StringPrototype", [], (function(a, b, c, d, e, f) {
					a = {
						trimLeft: function() {
							return this.replace(/^\s+/, "")
						},
						trimRight: function() {
							return this.replace(/\s+$/, "")
						}
					};
					b = a;
					f["default"] = b
				}), 66);
				/**
				 * License: https://www.facebook.com/legal/license/MDzNl_j9yvg/
				 */
				__d("json3-3.3.2", [], (function(a, b, c, d, e, f) {
					"use strict";
					var g = {},
						h = {
							exports: g
						},
						i;

					function j() {
						(function() {
							var b = typeof i === "function" && i.amd,
								c = {
									"function": !0,
									object: !0
								},
								d = c[typeof g] && g && !g.nodeType && g,
								e = c[typeof window] && window || this,
								j = d && c[typeof h] && h && !h.nodeType && typeof a == "object" && a;
							j && (j.global === j || j.window === j || j.self === j) && (e = j);

							function k(b, a) {
								b || (b = e.Object());
								a || (a = e.Object());
								var d = b.Number || e.Number,
									g = b.String || e.String,
									h = b.Object || e.Object,
									i = b.Date || e.Date,
									j = b.SyntaxError || e.SyntaxError,
									l = b.TypeError || e.TypeError,
									m = b.Math || e.Math;
								b = b.JSON || e.JSON;
								typeof b == "object" && b && (a.stringify = b.stringify, a.parse = b.parse);
								b = h.prototype;
								var n = b.toString,
									o, p, q, r = new i(-3509827334573292);
								try {
									r = r.getUTCFullYear() == -109252 && r.getUTCMonth() === 0 && r.getUTCDate() === 1 && r.getUTCHours() == 10 && r.getUTCMinutes() == 37 && r.getUTCSeconds() == 6 && r.getUTCMilliseconds() == 708
								} catch(a) {}

								function s(b) {
									if(s[b] !== q) return s[b];
									var c;
									if(b == "bug-string-char-index") c = "a" [0] != "a";
									else if(b == "json") c = s("json-stringify") && s("json-parse");
									else {
										var e, f = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
										if(b == "json-stringify") {
											var h = a.stringify,
												j = typeof h == "function" && r;
											if(j) {
												(e = function() {
													return 1
												}).toJSON = e;
												try {
													j = h(0) === "0" && h(new d()) === "0" && h(new g()) == '""' && h(n) === q && h(q) === q && h() === q && h(e) === "1" && h([e]) == "[1]" && h([q]) == "[null]" && h(null) == "null" && h([q, n, null]) == "[null,null,null]" && h({
														a: [e, !0, !1, null, "\0\b\n\f\r\t"]
													}) == f && h(null, e) === "1" && h([1, 2], null, 1) == "[\n 1,\n 2\n]" && h(new i(-864e13)) == '"-271821-04-20T00:00:00.000Z"' && h(new i(864e13)) == '"+275760-09-13T00:00:00.000Z"' && h(new i(-621987552e5)) == '"-000001-01-01T00:00:00.000Z"' && h(new i(-1)) == '"1969-12-31T23:59:59.999Z"'
												} catch(a) {
													j = !1
												}
											}
											c = j
										}
										if(b == "json-parse") {
											h = a.parse;
											if(typeof h == "function") try {
												if(h("0") === 0 && !h(!1)) {
													e = h(f);
													var k = e.a.length == 5 && e.a[0] === 1;
													if(k) {
														try {
															k = !h('"\t"')
														} catch(a) {}
														if(k) try {
															k = h("01") !== 1
														} catch(a) {}
														if(k) try {
															k = h("1.") !== 1
														} catch(a) {}
													}
												}
											} catch(a) {
												k = !1
											}
											c = k
										}
									}
									return s[b] = !!c
								}
								if(!s("json")) {
									var t = "[object Function]",
										u = "[object Date]",
										v = "[object Number]",
										w = "[object String]",
										x = "[object Array]",
										y = "[object Boolean]",
										z = s("bug-string-char-index");
									if(!r) var A = m.floor,
										B = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
										C = function(a, b) {
											return B[b] + 365 * (a - 1970) + A((a - 1969 + (b = +(b > 1))) / 4) - A((a - 1901 + b) / 100) + A((a - 1601 + b) / 400)
										};
									(o = b.hasOwnProperty) || (o = function(a) {
										var b = {},
											c;
										(b.__proto__ = null, b.__proto__ = {
											toString: 1
										}, b).toString != n ? o = function(a) {
											var b = this.__proto__;
											a = a in (this.__proto__ = null, this);
											this.__proto__ = b;
											return a
										} : (c = b.constructor, o = function(a) {
											var b = (this.constructor || c).prototype;
											return a in this && !(a in b && this[a] === b[a])
										});
										return o.call(this, a)
									});
									p = function(a, b) {
										var d = 0,
											e, f;
										(e = function() {
											this.valueOf = 0
										}).prototype.valueOf = 0;
										f = new e();
										for(e in f) o.call(f, e) && d++;
										f = null;
										!d ? (f = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"], p = function(a, b) {
											var d = n.call(a) == t,
												e, g = !d && typeof a.constructor != "function" && c[typeof a.hasOwnProperty] && a.hasOwnProperty || o;
											for(e in a) !(d && e == "prototype") && g.call(a, e) && b(e);
											for(d = f.length; e = f[--d]; g.call(a, e) && b(e));
										}) : d == 2 ? p = function(a, b) {
											var c = {},
												d = n.call(a) == t,
												e;
											for(e in a) !(d && e == "prototype") && !o.call(c, e) && (c[e] = 1) && o.call(a, e) && b(e)
										} : p = function(a, b) {
											var c = n.call(a) == t,
												d, e;
											for(d in a) !(c && d == "prototype") && o.call(a, d) && !(e = d === "constructor") && b(d);
											(e || o.call(a, d = "constructor")) && b(d)
										};
										return p(a, b)
									};
									if(!s("json-stringify")) {
										var D = {
												92: "\\\\",
												34: '\\"',
												8: "\\b",
												12: "\\f",
												10: "\\n",
												13: "\\r",
												9: "\\t"
											},
											E = "000000",
											F = function(a, b) {
												return(E + (b || 0)).slice(-a)
											},
											G = "\\u00",
											H = function(a) {
												var b = '"',
													c = 0,
													d = a.length,
													e = !z || d > 10,
													f = e && (z ? a.split("") : a);
												for(; c < d; c++) {
													var g = a.charCodeAt(c);
													switch(g) {
														case 8:
														case 9:
														case 10:
														case 12:
														case 13:
														case 34:
														case 92:
															b += D[g];
															break;
														default:
															if(g < 32) {
																b += G + F(2, g.toString(16));
																break
															}
															b += e ? f[c] : a.charAt(c)
													}
												}
												return b + '"'
											},
											I = function(a, b, c, d, e, f, g) {
												var h, i, j, k, m, r, s, t, z, B;
												try {
													h = b[a]
												} catch(a) {}
												if(typeof h == "object" && h) {
													i = n.call(h);
													if(i == u && !o.call(h, "toJSON"))
														if(h > -1 / 0 && h < 1 / 0) {
															if(C) {
																m = A(h / 864e5);
																for(j = A(m / 365.2425) + 1970 - 1; C(j + 1, 0) <= m; j++);
																for(k = A((m - C(j, 0)) / 30.42); C(j, k + 1) <= m; k++);
																m = 1 + m - C(j, k);
																r = (h % 864e5 + 864e5) % 864e5;
																s = A(r / 36e5) % 24;
																t = A(r / 6e4) % 60;
																z = A(r / 1e3) % 60;
																r = r % 1e3
															} else j = h.getUTCFullYear(), k = h.getUTCMonth(), m = h.getUTCDate(), s = h.getUTCHours(), t = h.getUTCMinutes(), z = h.getUTCSeconds(), r = h.getUTCMilliseconds();
															h = (j <= 0 || j >= 1e4 ? (j < 0 ? "-" : "+") + F(6, j < 0 ? -j : j) : F(4, j)) + "-" + F(2, k + 1) + "-" + F(2, m) + "T" + F(2, s) + ":" + F(2, t) + ":" + F(2, z) + "." + F(3, r) + "Z"
														} else h = null;
													else typeof h.toJSON == "function" && (i != v && i != w && i != x || o.call(h, "toJSON")) && (h = h.toJSON(a))
												}
												c && (h = c.call(b, a, h));
												if(h === null) return "null";
												i = n.call(h);
												if(i == y) return "" + h;
												else if(i == v) return h > -1 / 0 && h < 1 / 0 ? "" + h : "null";
												else if(i == w) return H("" + h);
												if(typeof h == "object") {
													for(j = g.length; j--;)
														if(g[j] === h) throw l();
													g.push(h);
													B = [];
													k = f;
													f += e;
													if(i == x) {
														for(m = 0, j = h.length; m < j; m++) s = I(m, h, c, d, e, f, g), B.push(s === q ? "null" : s);
														t = B.length ? e ? "[\n" + f + B.join(",\n" + f) + "\n" + k + "]" : "[" + B.join(",") + "]" : "[]"
													} else p(d || h, function(a) {
														var b = I(a, h, c, d, e, f, g);
														b !== q && B.push(H(a) + ":" + (e ? " " : "") + b)
													}), t = B.length ? e ? "{\n" + f + B.join(",\n" + f) + "\n" + k + "}" : "{" + B.join(",") + "}" : "{}";
													g.pop();
													return t
												}
											};
										a.stringify = function(a, b, d) {
											var e, f, g, h;
											if(c[typeof b] && b)
												if((h = n.call(b)) == t) f = b;
												else if(h == x) {
												g = {};
												for(var i = 0, j = b.length, k; i < j; k = b[i++], (h = n.call(k), h == w || h == v) && (g[k] = 1));
											}
											if(d)
												if((h = n.call(d)) == v) {
													if((d -= d % 1) > 0)
														for(e = "", d > 10 && (d = 10); e.length < d; e += " ");
												} else h == w && (e = d.length <= 10 ? d : d.slice(0, 10));
											return I("", (k = {}, k[""] = a, k), f, g, e, "", [])
										}
									}
									if(!s("json-parse")) {
										var J = g.fromCharCode,
											K = {
												92: "\\",
												34: '"',
												47: "/",
												98: "\b",
												116: "\t",
												110: "\n",
												102: "\f",
												114: "\r"
											},
											L, M, N = function() {
												L = M = null;
												throw j()
											},
											O = function() {
												var a = M,
													b = a.length,
													c, d, e, f, g;
												while(L < b) {
													g = a.charCodeAt(L);
													switch(g) {
														case 9:
														case 10:
														case 13:
														case 32:
															L++;
															break;
														case 123:
														case 125:
														case 91:
														case 93:
														case 58:
														case 44:
															c = z ? a.charAt(L) : a[L];
															L++;
															return c;
														case 34:
															for(c = "@", L++; L < b;) {
																g = a.charCodeAt(L);
																if(g < 32) N();
																else if(g == 92) {
																	g = a.charCodeAt(++L);
																	switch(g) {
																		case 92:
																		case 34:
																		case 47:
																		case 98:
																		case 116:
																		case 110:
																		case 102:
																		case 114:
																			c += K[g];
																			L++;
																			break;
																		case 117:
																			d = ++L;
																			for(e = L + 4; L < e; L++) g = a.charCodeAt(L), g >= 48 && g <= 57 || g >= 97 && g <= 102 || g >= 65 && g <= 70 || N();
																			c += J("0x" + a.slice(d, L));
																			break;
																		default:
																			N()
																	}
																} else {
																	if(g == 34) break;
																	g = a.charCodeAt(L);
																	d = L;
																	while(g >= 32 && g != 92 && g != 34) g = a.charCodeAt(++L);
																	c += a.slice(d, L)
																}
															}
															if(a.charCodeAt(L) == 34) {
																L++;
																return c
															}
															N();
														default:
															d = L;
															g == 45 && (f = !0, g = a.charCodeAt(++L));
															if(g >= 48 && g <= 57) {
																g == 48 && (g = a.charCodeAt(L + 1), g >= 48 && g <= 57) && N();
																f = !1;
																for(; L < b && (g = a.charCodeAt(L), g >= 48 && g <= 57); L++);
																if(a.charCodeAt(L) == 46) {
																	e = ++L;
																	for(; e < b && (g = a.charCodeAt(e), g >= 48 && g <= 57); e++);
																	e == L && N();
																	L = e
																}
																g = a.charCodeAt(L);
																if(g == 101 || g == 69) {
																	g = a.charCodeAt(++L);
																	(g == 43 || g == 45) && L++;
																	for(e = L; e < b && (g = a.charCodeAt(e), g >= 48 && g <= 57); e++);
																	e == L && N();
																	L = e
																}
																return +a.slice(d, L)
															}
															f && N();
															if(a.slice(L, L + 4) == "true") {
																L += 4;
																return !0
															} else if(a.slice(L, L + 5) == "false") {
																L += 5;
																return !1
															} else if(a.slice(L, L + 4) == "null") {
																L += 4;
																return null
															}
															N()
													}
												}
												return "$"
											},
											P = function(a) {
												var b, c;
												a == "$" && N();
												if(typeof a == "string") {
													if((z ? a.charAt(0) : a[0]) == "@") return a.slice(1);
													if(a == "[") {
														b = [];
														for(;; c || (c = !0)) {
															a = O();
															if(a == "]") break;
															c && (a == "," ? (a = O(), a == "]" && N()) : N());
															a == "," && N();
															b.push(P(a))
														}
														return b
													} else if(a == "{") {
														b = {};
														for(;; c || (c = !0)) {
															a = O();
															if(a == "}") break;
															c && (a == "," ? (a = O(), a == "}" && N()) : N());
															(a == "," || typeof a != "string" || (z ? a.charAt(0) : a[0]) != "@" || O() != ":") && N();
															b[a.slice(1)] = P(O())
														}
														return b
													}
													N()
												}
												return a
											},
											Q = function(a, b, c) {
												c = R(a, b, c);
												c === q ? delete a[b] : a[b] = c
											},
											R = function(a, b, c) {
												var d = a[b],
													e;
												if(typeof d == "object" && d)
													if(n.call(d) == x)
														for(e = d.length; e--;) Q(d, e, c);
													else p(d, function(a) {
														Q(d, a, c)
													});
												return c.call(a, b, d)
											};
										a.parse = function(a, b) {
											var c;
											L = 0;
											M = "" + a;
											a = P(O());
											O() != "$" && N();
											L = M = null;
											return b && n.call(b) == t ? R((c = {}, c[""] = a, c), "", b) : a
										}
									}
								}
								a.runInContext = k;
								return a
							}
							if(d && !b) k(e, d);
							else {
								var l = e.JSON,
									m = e.JSON3,
									n = !1,
									o = k(e, e.JSON3 = {
										noConflict: function() {
											n || (n = !0, e.JSON = l, e.JSON3 = m, l = m = null);
											return o
										}
									});
								e.JSON = {
									parse: o.parse,
									stringify: o.stringify
								}
							}
							b && i(function() {
								return o
							})
						}).call(this)
					}
					var k = !1;

					function l() {
						k || (k = !0, j());
						return h.exports
					}

					function b(a) {
						switch(a) {
							case void 0:
								return l()
						}
					}
					e.exports = b
				}), null);
				__d("json3", ["json3-3.3.2"], (function(a, b, c, d, e, f) {
					e.exports = b("json3-3.3.2")()
				}), null);
				__d("ES", ["ES5FunctionPrototype", "ES5StringPrototype", "ES6Array", "ES6ArrayPrototype", "ES6Number", "ES6Object", "ES7ArrayPrototype", "ES7Object", "ES7StringPrototype", "json3"], (function(a, b, c, d, e, f, g) {
					var h = {}.toString,
						i = {
							"JSON.stringify": c("json3").stringify,
							"JSON.parse": c("json3").parse
						};
					d = {
						"Function.prototype": c("ES5FunctionPrototype"),
						"String.prototype": c("ES5StringPrototype")
					};
					e = {
						Object: c("ES6Object"),
						"Array.prototype": c("ES6ArrayPrototype"),
						Number: c("ES6Number"),
						Array: c("ES6Array")
					};
					f = {
						Object: c("ES7Object"),
						"String.prototype": c("ES7StringPrototype"),
						"Array.prototype": c("ES7ArrayPrototype")
					};

					function a(a) {
						for(var b in a) {
							if(!Object.prototype.hasOwnProperty.call(a, b)) continue;
							var c = a[b],
								d = b.split(".");
							if(d.length === 2) {
								var e = d[0],
									f = d[1];
								if(!e || !f || !window[e] || !window[e][f]) {
									var g = e ? window[e] : "-",
										h = e && window[e] && f ? window[e][f] : "-";
									throw new Error("Unexpected state (t11975770): " + (e + ", " + f + ", " + g + ", " + h + ", " + b))
								}
							}
							e = d.length === 2 ? window[d[0]][d[1]] : window[b];
							for(f in c) {
								if(!Object.prototype.hasOwnProperty.call(c, f)) continue;
								if(typeof c[f] !== "function") {
									i[b + "." + f] = c[f];
									continue
								}
								g = e[f];
								i[b + "." + f] = g && /\{\s+\[native code\]\s\}/.test(g) ? g : c[f]
							}
						}
					}
					a(d);
					a(e);
					a(f);

					function b(a, b, c) {
						var d = c ? h.call(a).slice(8, -1) + ".prototype" : a,
							e;
						if(Array.isArray(a))
							if(typeof d === "string") e = i[d + "." + b];
							else throw new Error("Can't polyfill " + b + " directly on an Array.");
						else if(typeof d === "string") e = i[d + "." + b];
						else if(typeof a === "string") throw new Error("Can't polyfill " + b + " directly on a string.");
						else e = a[b];
						if(typeof e === "function") {
							for(var f = arguments.length, g = new Array(f > 3 ? f - 3 : 0), j = 3; j < f; j++) g[j - 3] = arguments[j];
							return e.apply(a, g)
						} else if(e) return e;
						throw new Error("Polyfill " + d + " does not have implementation of " + b)
					}
					g["default"] = b
				}), 98);
				__d("ES5Object", [], (function(a, b, c, d, e, f) {
					var g = {}.hasOwnProperty;
					a = {
						create: function(a) {
							var b = typeof a;
							if(b != "object" && b != "function") throw new TypeError("Object prototype may only be a Object or null");
							h.prototype = a;
							return new h()
						},
						keys: function(a) {
							var b = typeof a;
							if(b != "object" && b != "function" || a === null) throw new TypeError("Object.keys called on non-object");
							b = [];
							for(var c in a) g.call(a, c) && b.push(c);
							return b
						},
						freeze: function(a) {
							return a
						},
						isFrozen: function() {
							return !1
						},
						seal: function(a) {
							return a
						}
					};

					function h() {}
					b = a;
					f["default"] = b
				}), 66);
				__d("sdk.babelHelpers", ["ES5FunctionPrototype", "ES5Object", "ES6Object"], (function(a, b, c, d, e, f) {
					var g = {},
						h = Object.prototype.hasOwnProperty;
					g.inheritsLoose = function(a, c) {
						b("ES6Object").assign(a, c);
						a.prototype = b("ES5Object").create(c && c.prototype);
						a.prototype.constructor = a;
						a.__superConstructor__ = c;
						return c
					};
					g.inherits = g.inheritsLoose;
					g.wrapNativeSuper = function(a) {
						var b = typeof Map === "function" ? new Map() : void 0;
						g.wrapNativeSuper = function(a) {
							if(a === null) return null;
							if(typeof a !== "function") throw new TypeError("Super expression must either be null or a function");
							if(b !== void 0) {
								if(b.has(a)) return b.get(a);
								b.set(a, c)
							}
							g.inheritsLoose(c, a);

							function c() {
								a.apply(this, arguments)
							}
							return c
						};
						return g.wrapNativeSuper(a)
					};
					g.assertThisInitialized = function(a) {
						if(a === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return a
					};
					g._extends = b("ES6Object").assign;
					g["extends"] = g._extends;
					g.construct = function(a, b) {
						var c = [null];
						c.push.apply(c, b);
						return new(Function.prototype.bind.apply(a, c))()
					};
					g.objectWithoutPropertiesLoose = function(a, b) {
						var c = {};
						for(var d in a) {
							if(!h.call(a, d) || b.indexOf(d) >= 0) continue;
							c[d] = a[d]
						}
						return c
					};
					g.objectWithoutProperties = g.objectWithoutPropertiesLoose;
					g.taggedTemplateLiteralLoose = function(a, b) {
						b || (b = a.slice(0));
						a.raw = b;
						return a
					};
					g.bind = b("ES5FunctionPrototype").bind;
					e.exports = g
				}), null);
				var ES = require('ES');
				var babelHelpers = require('sdk.babelHelpers');
				(function(a, b) {
					var c = "keys",
						d = "values",
						e = "entries",
						f = function() {
							var a = h(Array),
								b;
							a || (b = function() {
								"use strict";

								function a(a, b) {
									this.$1 = a, this.$2 = b, this.$3 = 0
								}
								var b = a.prototype;
								b.next = function() {
									if(this.$1 == null) return {
										value: void 0,
										done: !0
									};
									var a = this.$1,
										b = this.$1.length,
										f = this.$3,
										g = this.$2;
									if(f >= b) {
										this.$1 = void 0;
										return {
											value: void 0,
											done: !0
										}
									}
									this.$3 = f + 1;
									if(g === c) return {
										value: f,
										done: !1
									};
									else if(g === d) return {
										value: a[f],
										done: !1
									};
									else if(g === e) return {
										value: [f, a[f]],
										done: !1
									}
								};
								b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] = function() {
									return this
								};
								return a
							}());
							return {
								keys: a ? function(a) {
									return a.keys()
								} : function(a) {
									return new b(a, c)
								},
								values: a ? function(a) {
									return a.values()
								} : function(a) {
									return new b(a, d)
								},
								entries: a ? function(a) {
									return a.entries()
								} : function(a) {
									return new b(a, e)
								}
							}
						}(),
						g = function() {
							var a = h(String),
								b;
							a || (b = function() {
								"use strict";

								function a(a) {
									this.$1 = a, this.$2 = 0
								}
								var b = a.prototype;
								b.next = function() {
									if(this.$1 == null) return {
										value: void 0,
										done: !0
									};
									var a = this.$2,
										b = this.$1,
										c = b.length;
									if(a >= c) {
										this.$1 = void 0;
										return {
											value: void 0,
											done: !0
										}
									}
									var d = b.charCodeAt(a);
									if(d < 55296 || d > 56319 || a + 1 === c) d = b[a];
									else {
										c = b.charCodeAt(a + 1);
										c < 56320 || c > 57343 ? d = b[a] : d = b[a] + b[a + 1]
									}
									this.$2 = a + d.length;
									return {
										value: d,
										done: !1
									}
								};
								b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] = function() {
									return this
								};
								return a
							}());
							return {
								keys: function() {
									throw TypeError("Strings default iterator doesn't implement keys.")
								},
								values: a ? function(a) {
									return a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]()
								} : function(a) {
									return new b(a)
								},
								entries: function() {
									throw TypeError("Strings default iterator doesn't implement entries.")
								}
							}
						}();

					function h(a) {
						return typeof a.prototype[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] === "function" && typeof a.prototype.values === "function" && typeof a.prototype.keys === "function" && typeof a.prototype.entries === "function"
					}
					var i = function() {
							"use strict";

							function a(a, b) {
								this.$1 = a, this.$2 = b, this.$3 = Object.keys(a), this.$4 = 0
							}
							var b = a.prototype;
							b.next = function() {
								var a = this.$3.length,
									b = this.$4,
									f = this.$2,
									g = this.$3[b];
								if(b >= a) {
									this.$1 = void 0;
									return {
										value: void 0,
										done: !0
									}
								}
								this.$4 = b + 1;
								if(f === c) return {
									value: g,
									done: !1
								};
								else if(f === d) return {
									value: this.$1[g],
									done: !1
								};
								else if(f === e) return {
									value: [g, this.$1[g]],
									done: !1
								}
							};
							b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] = function() {
								return this
							};
							return a
						}(),
						j = {
							keys: function(a) {
								return new i(a, c)
							},
							values: function(a) {
								return new i(a, d)
							},
							entries: function(a) {
								return new i(a, e)
							}
						};

					function k(a, b) {
						if(typeof a === "string") return g[b || d](a);
						else if(Array.isArray(a)) return f[b || d](a);
						else if(a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]) return a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();
						else return j[b || e](a)
					}
					ES("Object", "assign", !1, k, {
						KIND_KEYS: c,
						KIND_VALUES: d,
						KIND_ENTRIES: e,
						keys: function(a) {
							return k(a, c)
						},
						values: function(a) {
							return k(a, d)
						},
						entries: function(a) {
							return k(a, e)
						},
						generic: j.entries
					});
					a.FB_enumerate = k
				})(typeof global === "undefined" ? this : global);
				__d("cr:717822", [], function(g, r, rd, rl, m, e) {
					m.exports = require("TimeSliceImpl");
				});
				__d("cr:986633", [], function(g, r, rd, rl, m, e) {
					m.exports = require("setTimeoutAcrossTransitionsBlue");
				});
				__d("JSSDKFBInstantGraphAPIMigrationConfig", [], {
					"getConnectedPlayersAsync": false,
					"getDataAsync": false,
					"setDataAsync": false,
					"getSignedPlayerInfoAsync": false,
					"contextplayer_passthroughDataMonitoring": false,
					"graphApi_userLocaleGraphAPIMigration": true,
					"canSubscribeBotAsync": false,
					"getEntryPointAsync": true,
					"getASIDAsync": true
				});
				__d("JSSDKConfig", [], {
					"features": {
						"allow_non_canvas_app_events": false,
						"error_handling": {
							"rate": 4
						},
						"e2e_ping_tracking": {
							"rate": 0.1
						},
						"xd_timeout": {
							"rate": 1,
							"value": 60000
						},
						"use_bundle": false,
						"should_log_response_error": true,
						"popup_blocker_scribe_logging": {
							"rate": 100
						},
						"https_only_enforce_starting": 2538809200000,
						"https_only_learn_more": "https:\/\/developers.facebook.com\/blog\/post\/2018\/06\/08\/enforce-https-facebook-login\/",
						"https_only_scribe_logging": {
							"rate": 1
						},
						"log_perf": {
							"rate": 0.001
						},
						"use_x_xd": {
							"rate": 100
						},
						"cache_auth_response": {
							"rate": 100
						},
						"oauth_funnel_logger_version": 1,
						"force_popup_to_canvas_apps_with_id": [],
						"force_popup_to_all_canvas_app": false,
						"max_oauth_dialog_retries": {
							"rate": 100,
							"value": 10
						},
						"plugin_tags_blacklist": [],
						"idle_callback_wait_time_ms": 3000,
						"chat_plugin_facade_timeout_ms": 8000,
						"chat_plugin_facade_enabled_pageids": ["102493178867330", "107331571710078", "1032787970130843", "107771111665395", "261907812360345", "101305975654752", "275483104252055", "101664622285042", "112682113428700", "271628573687012", "385757598521443", "100545935690488"],
						"should_enable_ig_login_status_fetch": true,
						"log_cookies_usage": {
							"rate": 0.1
						},
						"allow_shadow_dom_for_apps_with_id": [520916077950649, 152351391599356, 132081130190180, 468663283258845, 409976882430412, 189845245141894, 360467581347, 274266067164],
						"allow_shadow_dom": true,
						"xfoa_login_enabled": false
					}
				});
				__d("JSSDKRuntimeConfig", [], {
					"locale": "en_US",
					"revision": "1006638650",
					"rtl": false,
					"sdkab": null,
					"sdkns": "",
					"sdkurl": "https:\/\/connect.facebook.net\/en_US\/fbinstant.6.3.js",
					"scribeurl": "https:\/\/www.facebook.com\/platform\/scribe_endpoint.php\/"
				});
				__d("UrlMapConfig", [], {
					"www": "www.facebook.com",
					"m": "m.facebook.com",
					"business": "business.facebook.com",
					"api": "api.facebook.com",
					"api_read": "api-read.facebook.com",
					"graph": "graph.facebook.com",
					"an": "an.facebook.com",
					"fbcdn": "static.xx.fbcdn.net",
					"cdn": "staticxx.facebook.com",
					"graph_facebook": "graph.facebook.com",
					"graph_gaming": "graph.fb.gg",
					"graph_instagram": "graph.instagram.com",
					"www_instagram": "www.instagram.com",
					"social_plugin": "socialplugin.facebook.net"
				});
				__d("PromiseUsePolyfillSetImmediateGK", [], {
					"www_always_use_polyfill_setimmediate": false
				});
				__d("ImmediateImplementationExperiments", [], {
					"prefer_message_channel": true
				});
				__d("JSSDKFBInstantConfig", [], {
					"latest": {
						"player.getASIDAsync": true,
						"graphApi": true,
						"switchNativeAsync": true,
						"performHapticFeedbackAsync": true
					},
					"7.1": {
						"player.getASIDAsync": true,
						"graphApi": true,
						"switchNativeAsync": true,
						"performHapticFeedbackAsync": true
					},
					"7.0": {
						"player.getASIDAsync": true,
						"graphApi": true,
						"switchNativeAsync": true,
						"performHapticFeedbackAsync": true
					},
					"beta-xplay": {
						"player.getASIDAsync": true,
						"graphApi": true,
						"switchNativeAsync": true
					},
					"beta": {
						"performHapticFeedbackAsync": true
					},
					"default": {},
					"delta.m1": {
						"player.getASIDAsync": true
					},
					"delta.m2": {
						"player.getASIDAsync": true
					},
					"plugins": {
						"player.getASIDAsync": true
					}
				});
				__d("Env", [], (function(a, b, c, d, e, f) {
					b = {
						ajaxpipe_token: null,
						compat_iframe_token: null,
						iframeKey: "",
						iframeTarget: "",
						iframeToken: "",
						isCQuick: !1,
						start: Date.now(),
						nocatch: !1,
						enableDefaultTrustedTypePolicy: !1,
						ig_server_override: "",
						ig_mqtt_wss_endpoint: "",
						ig_mqtt_polling_endpoint: ""
					};
					a.Env && ES("Object", "assign", !1, b, a.Env);
					a.Env = b;
					c = b;
					f["default"] = c
				}), 66);
				__d("performance", [], (function(a, b, c, d, e, f) {
					"use strict";
					b = a.performance || a.msPerformance || a.webkitPerformance || {};
					c = b;
					f["default"] = c
				}), 66);
				__d("performanceNow", ["performance"], (function(a, b, c, d, e, f, g) {
					if(c("performance").now) b = function() {
						return c("performance").now()
					};
					else {
						d = a._cstart;
						e = Date.now();
						var h = typeof d === "number" && d < e ? d : e,
							i = 0;
						b = function() {
							var a = Date.now(),
								b = a - h;
							b < i && (h -= i - b, b = a - h);
							i = b;
							return b
						}
					}
					f = b;
					g["default"] = f
				}), 98);
				__d("performanceNowSinceAppStart", ["performanceNow"], (function(a, b, c, d, e, f, g) {
					g["default"] = c("performanceNow")
				}), 98);
				__d("removeFromArray", [], (function(a, b, c, d, e, f) {
					function a(a, b) {
						b = a.indexOf(b);
						b !== -1 && a.splice(b, 1)
					}
					f["default"] = a
				}), 66);
				__d("fb-error", ["performanceNowSinceAppStart", "removeFromArray"], (function(a, b, c, d, e, f) {
					"use strict";
					var g = {
						PREVIOUS_FILE: 1,
						PREVIOUS_FRAME: 2,
						PREVIOUS_DIR: 3,
						FORCED_KEY: 4
					};

					function h(b) {
						var a = new Error(b);
						if(a.stack === void 0) try {
							throw a
						} catch(a) {}
						a.messageFormat = b;
						for(var c = arguments.length, d = new Array(c > 1 ? c - 1 : 0), e = 1; e < c; e++) d[e - 1] = arguments[e];
						a.messageParams = d.map(function(a) {
							return String(a)
						});
						a.taalOpcodes = [g.PREVIOUS_FRAME];
						return a
					}
					var i = !1,
						j = {
							errorListener: function(b) {
								var c = a.console,
									d = c[b.type] ? b.type : "error";
								if(b.type === "fatal" || d === "error" && !i) {
									d = b.message;
									c.error("ErrorUtils caught an error:\n\n" + d + "\n\nSubsequent non-fatal errors won't be logged; see https://fburl.com/debugjs.");
									i = !0
								}
							}
						},
						k = {
							access_token: null
						},
						l = 6,
						m = 6e4,
						n = 10 * m,
						o = new Map(),
						p = 0;

					function q() {
						var a = b("performanceNowSinceAppStart")();
						if(a > p + m) {
							var c = a - n;
							for(var d = o, e = Array.isArray(d), f = 0, d = e ? d : d[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
								var g;
								if(e) {
									if(f >= d.length) break;
									g = d[f++]
								} else {
									f = d.next();
									if(f.done) break;
									g = f.value
								}
								g = g;
								var h = g[0];
								g = g[1];
								g.lastAccessed < c && o["delete"](h)
							}
							p = a
						}
					}

					function r(a) {
						q();
						var c = b("performanceNowSinceAppStart")(),
							d = o.get(a);
						if(d == null) {
							o.set(a, {
								dropped: 0,
								logged: [c],
								lastAccessed: c
							});
							return 1
						}
						a = d.dropped;
						var e = d.logged;
						d.lastAccessed = c;
						while(e[0] < c - m) e.shift();
						if(e.length < l) {
							d.dropped = 0;
							e.push(c);
							return a + 1
						} else {
							d.dropped++;
							return null
						}
					}
					var s = {
							shouldLog: function(a) {
								return r(a.hash)
							}
						},
						t = "RE_EXN_ID";

					function u(a) {
						var b = null;
						a == null || typeof a !== "object" ? b = h("Non-object thrown: %s", String(a)) : Object.prototype.hasOwnProperty.call(a, t) ? b = h("Rescript exception thrown: %s", ES("JSON", "stringify", !1, a)) : typeof a.message !== "string" ? b = h("Non-error thrown: %s, keys: %s", String(a), ES("JSON", "stringify", !1, Object.keys(a).sort())) : Object.isExtensible && !Object.isExtensible(a) && (b = h("Non-extensible thrown: %s", String(a.message)));
						if(b != null) {
							b.taalOpcodes = b.taalOpcodes || [];
							b.taalOpcodes.push(g.PREVIOUS_FRAME);
							return b
						}
						return a
					}
					var aa = typeof window === "undefined" ? "<self.onerror>" : "<window.onerror>",
						v;

					function ba(a) {
						var b = a.error != null ? u(a.error) : h(a.message || "");
						b.fileName == null && a.filename != null && (b.fileName = a.filename);
						b.line == null && a.lineno != null && (b.line = a.lineno);
						b.column == null && a.colno != null && (b.column = a.colno);
						b.guardList = [aa];
						b.loggingSource = "ONERROR";
						(a = v) === null || a === void 0 ? void 0 : a.reportError(b)
					}
					var w = {
							setup: function(b) {
								if(typeof a.addEventListener !== "function") return;
								if(v != null) return;
								v = b;
								a.addEventListener("error", ba)
							}
						},
						x = [],
						y = {
							pushGuard: function(a) {
								x.unshift(a)
							},
							popGuard: function() {
								x.shift()
							},
							inGuard: function() {
								return x.length !== 0
							},
							cloneGuardList: function() {
								return x.map(function(a) {
									return a.name
								})
							},
							findDeferredSource: function() {
								for(var a = 0; a < x.length; a++) {
									var b = x[a];
									if(b.deferredSource != null) return b.deferredSource
								}
							}
						};

					function ca(a) {
						if(a.type != null) return a.type;
						if(a.loggingSource == "GUARDED" || a.loggingSource == "ERROR_BOUNDARY") return "fatal";
						if(a.name == "SyntaxError") return "fatal";
						if(a.loggingSource == "ONERROR" && a.message.indexOf("ResizeObserver loop") >= 0) return "warn";
						return a.stack != null && a.stack.indexOf("chrome-extension://") >= 0 ? "warn" : "error"
					}
					var z = [],
						A = function() {
							function a() {
								this.metadata = [].concat(z)
							}
							var b = a.prototype;
							b.addEntries = function() {
								var a;
								(a = this.metadata).push.apply(a, arguments);
								return this
							};
							b.addEntry = function(a, b, c) {
								this.metadata.push([a, b, c]);
								return this
							};
							b.isEmpty = function() {
								return this.metadata.length === 0
							};
							b.clearEntries = function() {
								this.metadata = []
							};
							b.format = function() {
								var a = [];
								this.metadata.forEach(function(b) {
									if(b && b.length) {
										b = b.map(function(a) {
											return a != null ? String(a).replace(/:/g, "_") : ""
										}).join(":");
										a.push(b)
									}
								});
								return a
							};
							b.getAll = function() {
								return this.metadata
							};
							a.addGlobalMetadata = function(a, b, c) {
								z.push([a, b, c])
							};
							a.getGlobalMetadata = function() {
								return z
							};
							a.unsetGlobalMetadata = function(a, b) {
								z = z.filter(function(c) {
									return !(Array.isArray(c) && c[0] === a && c[1] === b)
								})
							};
							return a
						}(),
						B = {
							debug: 1,
							info: 2,
							warn: 3,
							error: 4,
							fatal: 5
						};

					function c(a, b) {
						if(Object.isFrozen(a)) return;
						b.type && ((!a.type || B[a.type] > B[b.type]) && (a.type = b.type));
						var c = b.metadata;
						if(c != null) {
							var d;
							d = (d = a.metadata) !== null && d !== void 0 ? d : new A();
							c != null && d.addEntries.apply(d, c.getAll());
							a.metadata = d
						}
						b.project != null && (a.project = b.project);
						b.errorName != null && (a.errorName = b.errorName);
						b.componentStack != null && (a.componentStack = b.componentStack);
						b.deferredSource != null && (a.deferredSource = b.deferredSource);
						b.blameModule != null && (a.blameModule = b.blameModule);
						b.loggingSource != null && (a.loggingSource = b.loggingSource);
						d = (c = a.messageFormat) !== null && c !== void 0 ? c : a.message;
						c = (c = a.messageParams) !== null && c !== void 0 ? c : [];
						if(d !== b.messageFormat && b.messageFormat != null) {
							var e;
							d += " [Caught in: " + b.messageFormat + "]";
							c.push.apply(c, (e = b.messageParams) !== null && e !== void 0 ? e : [])
						}
						a.messageFormat = d;
						a.messageParams = c;
						e = b.forcedKey;
						d = a.forcedKey;
						c = e != null && d != null ? e + "_" + d : e !== null && e !== void 0 ? e : d;
						a.forcedKey = c
					}

					function d(a) {
						var b;
						return da((b = a.messageFormat) !== null && b !== void 0 ? b : a.message, a.messageParams || [])
					}

					function da(a, b) {
						var c = 0;
						a = a.replace(/%s/g, function() {
							return c < b.length ? b[c++] : "NOPARAM"
						});
						c < b.length && (a += " PARAMS" + ES("JSON", "stringify", !1, b.slice(c)));
						return a
					}

					function f(a) {
						return(a !== null && a !== void 0 ? a : []).map(function(a) {
							return String(a)
						})
					}
					var C = {
							aggregateError: c,
							toReadableMessage: d,
							toStringParams: f
						},
						ea = 5,
						D = [];

					function E(a) {
						D.push(a), D.length > ea && D.shift()
					}

					function F(a) {
						var b = a.getAllResponseHeaders();
						if(b != null && b.indexOf("X-FB-Debug") >= 0) {
							b = a.getResponseHeader("X-FB-Debug");
							b && E(b)
						}
					}

					function fa() {
						return D
					}
					var G = {
							add: E,
							addFromXHR: F,
							getAll: fa
						},
						ga = "abcdefghijklmnopqrstuvwxyz012345";

					function H() {
						var a = 0;
						for(var b = arguments.length, c = new Array(b), d = 0; d < b; d++) c[d] = arguments[d];
						for(var e = 0; e < c.length; e++) {
							var f = c[e];
							if(f != null) {
								var g = f.length;
								for(var h = 0; h < g; h++) a = (a << 5) - a + f.charCodeAt(h)
							}
						}
						var i = "";
						for(var j = 0; j < 6; j++) i = ga.charAt(a & 31) + i, a >>= 5;
						return i
					}
					var I = [/\(([^\s\)\()]+):(\d+):(\d+)\)$/, /@([^\s\)\()]+):(\d+):(\d+)$/, /^([^\s\)\()]+):(\d+):(\d+)$/, /^at ([^\s\)\()]+):(\d+):(\d+)$/],
						ha = /^\w+:\s.*?\n/g;
					Error.stackTraceLimit != null && Error.stackTraceLimit < 80 && (Error.stackTraceLimit = 80);

					function ia(a) {
						var b = a.name,
							c = a.message;
						a = a.stack;
						if(a == null) return null;
						if(b != null && c != null && c !== "") {
							var d = b + ": " + c + "\n";
							if(ES(a, "startsWith", !0, d)) return a.substr(d.length);
							if(a === b + ": " + c) return null
						}
						if(b != null) {
							d = b + "\n";
							if(ES(a, "startsWith", !0, d)) return a.substr(d.length)
						}
						if(c != null && c !== "") {
							b = ": " + c + "\n";
							d = a.indexOf(b);
							c = a.substring(0, d);
							if(/^\w+$/.test(c)) return a.substring(d + b.length)
						}
						return a.replace(ha, "")
					}

					function J(a) {
						a = a.trim();
						var b;
						a;
						var c, d, e;
						if(ES(a, "includes", !0, "charset=utf-8;base64,")) b = "<inlined-file>";
						else {
							var f;
							for(var g = 0; g < I.length; g++) {
								var h = I[g];
								f = a.match(h);
								if(f != null) break
							}
							f != null && f.length === 4 ? (c = f[1], d = parseInt(f[2], 10), e = parseInt(f[3], 10), b = a.substring(0, a.length - f[0].length)) : b = a;
							b = b.replace(/^at /, "").trim()
						}
						h = {
							identifier: b,
							script: c,
							line: d,
							column: e
						};
						h.text = K(h);
						return h
					}

					function ja(a) {
						return a == null || a === "" ? [] : a.split(/\n\n/)[0].split("\n").map(J)
					}

					function ka(a) {
						a = ia(a);
						return ja(a)
					}

					function la(a) {
						if(a == null || a === "") return null;
						a = a.split("\n");
						a.splice(0, 1);
						return a.map(function(a) {
							return a.trim()
						})
					}

					function K(a) {
						var b = a.identifier,
							c = a.script,
							d = a.line;
						a = a.column;
						b = "    at " + (b !== null && b !== void 0 ? b : "<unknown>");
						c != null && d != null && a != null && (b += " (" + c + ":" + d + ":" + a + ")");
						return b
					}

					function L(c) {
						var d, e, f, h, i, j, k = ka(c);
						d = (d = c.taalOpcodes) !== null && d !== void 0 ? d : [];
						var l = c.framesToPop;
						if(l != null) {
							l = Math.min(l, k.length);
							while(l-- > 0) d.unshift(g.PREVIOUS_FRAME)
						}
						l = (l = c.messageFormat) !== null && l !== void 0 ? l : c.message;
						e = ((e = c.messageParams) !== null && e !== void 0 ? e : []).map(function(a) {
							return String(a)
						});
						var m = la(c.componentStack),
							n = m == null ? null : m.map(J),
							o = c.metadata ? c.metadata.format() : new A().format();
						o.length === 0 && (o = void 0);
						var p = k.map(function(a) {
							return a.text
						}).join("\n");
						f = (f = c.errorName) !== null && f !== void 0 ? f : c.name;
						var q = ca(c),
							r = c.loggingSource,
							s = c.project;
						h = (h = c.lineNumber) !== null && h !== void 0 ? h : c.line;
						i = (i = c.columnNumber) !== null && i !== void 0 ? i : c.column;
						j = (j = c.fileName) !== null && j !== void 0 ? j : c.sourceURL;
						var t = k.length > 0;
						t && h == null && (h = k[0].line);
						t && i == null && (i = k[0].column);
						t && j == null && (j = k[0].script);
						n = {
							blameModule: c.blameModule,
							column: i == null ? null : String(i),
							clientTime: Math.floor(Date.now() / 1e3),
							componentStackFrames: n,
							deferredSource: c.deferredSource != null ? L(c.deferredSource) : null,
							extra: (t = c.extra) !== null && t !== void 0 ? t : {},
							fbtrace_id: c.fbtrace_id,
							guardList: (i = c.guardList) !== null && i !== void 0 ? i : [],
							hash: H(f, p, q, s, r),
							isNormalizedError: !0,
							line: h == null ? null : String(h),
							loggingSource: r,
							message: C.toReadableMessage(c),
							messageFormat: l,
							messageParams: e,
							metadata: o,
							name: f,
							page_time: Math.floor(b("performanceNowSinceAppStart")()),
							project: s,
							reactComponentStack: m,
							script: j,
							serverHash: c.serverHash,
							stack: p,
							stackFrames: k,
							type: q,
							xFBDebug: G.getAll()
						};
						c.forcedKey != null && (n.forcedKey = c.forcedKey);
						d.length > 0 && (n.taalOpcodes = d);
						t = a.location;
						t && (n.windowLocationURL = t.href);
						for(i in n) n[i] == null && delete n[i];
						return n
					}

					function ma(a) {
						return a != null && typeof a === "object" && a.isNormalizedError === !0 ? a : null
					}
					var M = {
							formatStackFrame: K,
							normalizeError: L,
							ifNormalizedError: ma
						},
						na = "<global.react>",
						N = [],
						O = [],
						P = 50,
						Q = !1,
						R = {
							history: O,
							addListener: function(a, b) {
								b === void 0 && (b = !1), N.push(a), b || O.forEach(function(b) {
									return a(b, (b = b.loggingSource) !== null && b !== void 0 ? b : "DEPRECATED")
								})
							},
							unshiftListener: function(a) {
								N.unshift(a)
							},
							removeListener: function(a) {
								b("removeFromArray")(N, a)
							},
							reportError: function(a) {
								a = M.normalizeError(a);
								R.reportNormalizedError(a)
							},
							reportNormalizedError: function(b) {
								if(Q) return !1;
								var a = y.cloneGuardList();
								b.componentStackFrames && a.unshift(na);
								a.length > 0 && (b.guardList = a);
								if(b.deferredSource == null) {
									a = y.findDeferredSource();
									a != null && (b.deferredSource = M.normalizeError(a))
								}
								O.length > P && O.splice(P / 2, 1);
								O.push(b);
								Q = !0;
								for(a = 0; a < N.length; a++) try {
									var c;
									N[a](b, (c = b.loggingSource) !== null && c !== void 0 ? c : "DEPRECATED")
								} catch(a) {}
								Q = !1;
								return !0
							}
						};
					R.addListener(j.errorListener);
					var oa = "<anonymous guard>",
						S = !1,
						T = {
							applyWithGuard: function(a, b, c, d) {
								y.pushGuard({
									name: ((d === null || d === void 0 ? void 0 : d.name) != null ? d.name : null) || (a.name ? "func_name:" + a.name : null) || oa,
									deferredSource: d === null || d === void 0 ? void 0 : d.deferredSource
								});
								if(S) try {
									return a.apply(b, c)
								} finally {
									y.popGuard()
								}
								try {
									return Function.prototype.apply.call(a, b, c)
								} catch(h) {
									try {
										b = d !== null && d !== void 0 ? d : babelHelpers["extends"]({}, null);
										var e = b.deferredSource,
											f = b.onError;
										b = b.onNormalizedError;
										var g = u(h);
										e = {
											deferredSource: e,
											loggingSource: "GUARDED",
											project: (e = d === null || d === void 0 ? void 0 : d.project) !== null && e !== void 0 ? e : "ErrorGuard",
											type: d === null || d === void 0 ? void 0 : d.errorType
										};
										C.aggregateError(g, e);
										d = M.normalizeError(g);
										g == null && a && (d.extra[a.toString().substring(0, 100)] = "function", c != null && c.length && (d.extra[ES("Array", "from", !1, c).toString().substring(0, 100)] = "args"));
										d.guardList = y.cloneGuardList();
										f && f(g);
										b && b(d);
										R.reportNormalizedError(d)
									} catch(a) {}
								} finally {
									y.popGuard()
								}
							},
							guard: function(a, b) {
								function c() {
									for(var c = arguments.length, d = new Array(c), e = 0; e < c; e++) d[e] = arguments[e];
									return T.applyWithGuard(a, this, d, b)
								}
								a.__SMmeta && (c.__SMmeta = a.__SMmeta);
								return c
							},
							inGuard: function() {
								return y.inGuard()
							},
							skipGuardGlobal: function(a) {
								S = a
							}
						},
						U = 1024,
						V = [],
						W = 0;

					function X(a) {
						return String(a)
					}

					function Y(a) {
						return a == null ? null : String(a)
					}

					function pa(a, b) {
						var c = {};
						b && b.forEach(function(a) {
							c[a] = !0
						});
						Object.keys(a).forEach(function(b) {
							a[b] ? c[b] = !0 : c[b] && delete c[b]
						});
						return Object.keys(c)
					}

					function Z(a) {
						return(a !== null && a !== void 0 ? a : []).map(function(a) {
							return {
								column: Y(a.column),
								identifier: a.identifier,
								line: Y(a.line),
								script: a.script
							}
						})
					}

					function qa(a) {
						a = String(a);
						return a.length > U ? a.substring(0, U - 3) + "..." : a
					}

					function ra(a, b) {
						var c;
						c = {
							appId: Y(b.appId),
							cavalry_lid: b.cavalry_lid,
							access_token: k.access_token,
							ancestor_hash: a.hash,
							bundle_variant: (c = b.bundle_variant) !== null && c !== void 0 ? c : null,
							clientTime: X(a.clientTime),
							column: a.column,
							componentStackFrames: Z(a.componentStackFrames),
							events: a.events,
							extra: pa(a.extra, b.extra),
							forcedKey: a.forcedKey,
							frontend_env: (c = b.frontend_env) !== null && c !== void 0 ? c : null,
							guardList: a.guardList,
							line: a.line,
							loggingFramework: b.loggingFramework,
							messageFormat: qa(a.messageFormat),
							messageParams: a.messageParams.map(qa),
							name: a.name,
							sample_weight: Y(b.sample_weight),
							script: a.script,
							site_category: b.site_category,
							stackFrames: Z(a.stackFrames),
							type: a.type,
							page_time: Y(a.page_time),
							project: a.project,
							push_phase: b.push_phase,
							report_source: b.report_source,
							report_source_ref: b.report_source_ref,
							rollout_hash: (c = b.rollout_hash) !== null && c !== void 0 ? c : null,
							script_path: b.script_path,
							server_revision: Y(b.server_revision),
							spin: Y(b.spin),
							svn_rev: String(b.client_revision),
							additional_client_revisions: ES("Array", "from", !1, (c = b.additional_client_revisions) !== null && c !== void 0 ? c : []).map(X),
							taalOpcodes: a.taalOpcodes == null ? null : a.taalOpcodes.map(function(a) {
								return a
							}),
							web_session_id: b.web_session_id,
							version: "3",
							xFBDebug: a.xFBDebug
						};
						b = a.blameModule;
						var d = a.deferredSource;
						b != null && (c.blameModule = String(b));
						d && d.stackFrames && (c.deferredSource = {
							stackFrames: Z(d.stackFrames)
						});
						a.metadata && (c.metadata = a.metadata);
						a.loadingUrls && (c.loadingUrls = a.loadingUrls);
						a.serverHash != null && (c.serverHash = a.serverHash);
						a.windowLocationURL != null && (c.windowLocationURL = a.windowLocationURL);
						a.loggingSource != null && (c.loggingSource = a.loggingSource);
						return c
					}

					function sa(a, b, c) {
						var d;
						W++;
						if(b.sample_weight === 0) return !1;
						var e = s.shouldLog(a);
						if(e == null) return !1;
						if((d = b.projectBlocklist) !== null && d !== void 0 && ES(d, "includes", !0, a.project)) return !1;
						d = ra(a, b);
						ES("Object", "assign", !1, d, {
							ancestors: V.slice(),
							clientWeight: X(e),
							page_position: X(W)
						});
						V.length < 15 && V.push(a.hash);
						c(d);
						return !0
					}
					var ta = {
							createErrorPayload: ra,
							postError: sa
						},
						$ = null,
						ua = !1;

					function va(a) {
						if(!$) return;
						var b = a.reason,
							c;
						if(b != null && typeof b === "object" && (b.name == null || b.name === "" || b.message == null || b.message === "")) try {
							c = h("UnhandledRejection: %s", ES("JSON", "stringify", !1, b)), c.loggingSource = "ONUNHANDLEDREJECTION"
						} catch(a) {
							c = h("UnhandledRejection: (circular) %s", Object.keys(b).join(",")), c.loggingSource = "ONUNHANDLEDREJECTION"
						} else c = u(b), c.loggingSource || (c.loggingSource = "ONUNHANDLEDREJECTION");
						try {
							b = a.promise;
							c.stack = String(c.stack || "") + (b != null && typeof b.settledStack === "string" ? "\n(<promise_settled_stack_below>)\n" + b.settledStack : "") + (b != null && typeof b.createdStack === "string" ? "\n(<promise_created_stack_below>)\n" + b.createdStack : "")
						} catch(a) {}
						$.reportError(c);
						a.preventDefault()
					}

					function wa(b) {
						$ = b, typeof a.addEventListener === "function" && !ua && (ua = !0, a.addEventListener("unhandledrejection", va))
					}
					var xa = {
						onunhandledrejection: va,
						setup: wa
					};
					c = {
						preSetup: function(a) {
							(a == null || a.ignoreOnError !== !0) && w.setup(R), (a == null || a.ignoreOnUnahndledRejection !== !0) && xa.setup(R)
						},
						setup: function(a, b) {
							R.addListener(function(c) {
								ta.postError(c, a, b)
							})
						}
					};
					var ya = function() {
						function a(a) {
							this.project = a, this.events = [], this.metadata = new A(), this.taalOpcodes = []
						}
						var b = a.prototype;
						b.$1 = function(b, c) {
							var d = String(c),
								e = this.events,
								f = this.project,
								h = this.metadata,
								i = this.blameModule,
								j = this.forcedKey,
								k = this.error,
								l;
							for(var m = arguments.length, n = new Array(m > 2 ? m - 2 : 0), o = 2; o < m; o++) n[o - 2] = arguments[o];
							if(this.normalizedError) {
								var p = {
									message: this.normalizedError.messageFormat + " [Caught in: " + d + "]",
									params: [].concat(this.normalizedError.messageParams, n),
									forcedKey: j
								};
								l = babelHelpers["extends"]({}, this.normalizedError, {
									message: p.message,
									messageFormat: p.message,
									messageParams: C.toStringParams(p.params),
									project: f,
									type: b,
									loggingSource: "FBLOGGER"
								})
							} else if(k) this.taalOpcodes.length > 0 && new a("fblogger").blameToPreviousFrame().blameToPreviousFrame().warn("Blame helpers do not work with catching"), C.aggregateError(k, {
								messageFormat: d,
								messageParams: C.toStringParams(n),
								errorName: k.name,
								forcedKey: j,
								project: f,
								type: b,
								loggingSource: "FBLOGGER"
							}), l = M.normalizeError(k);
							else {
								k = new Error(d);
								if(k.stack === void 0) try {
									throw k
								} catch(a) {}
								k.messageFormat = d;
								k.messageParams = C.toStringParams(n);
								k.blameModule = i;
								k.forcedKey = j;
								k.project = f;
								k.type = b;
								k.loggingSource = "FBLOGGER";
								k.taalOpcodes = [g.PREVIOUS_FRAME, g.PREVIOUS_FRAME].concat(this.taalOpcodes);
								l = M.normalizeError(k);
								l.name = "FBLogger"
							}
							if(!h.isEmpty())
								if(l.metadata == null) l.metadata = h.format();
								else {
									var q = l.metadata.concat(h.format()),
										r = new Set(q);
									l.metadata = ES("Array", "from", !1, r.values())
								}
							if(e.length > 0)
								if(l.events != null) {
									var s;
									(s = l.events).push.apply(s, e)
								} else l.events = e;
							R.reportNormalizedError(l);
							return k
						};
						b.fatal = function(a) {
							for(var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d];
							this.$1.apply(this, ["fatal", a].concat(c))
						};
						b.mustfix = function(a) {
							for(var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d];
							this.$1.apply(this, ["error", a].concat(c))
						};
						b.warn = function(a) {
							for(var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d];
							this.$1.apply(this, ["warn", a].concat(c))
						};
						b.info = function(a) {
							for(var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d];
							this.$1.apply(this, ["info", a].concat(c))
						};
						b.debug = function(a) {};
						b.mustfixThrow = function(a) {
							for(var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d];
							var e = this.$1.apply(this, ["error", a].concat(c));
							e || (e = h("mustfixThrow does not support catchingNormalizedError"), e.taalOpcodes = e.taalOpcodes || [], e.taalOpcodes.push(g.PREVIOUS_FRAME));
							throw e
						};
						b.catching = function(b) {
							!(b instanceof Error) ? new a("fblogger").blameToPreviousFrame().warn("Catching non-Error object is not supported"): this.error = b;
							return this
						};
						b.catchingNormalizedError = function(a) {
							this.normalizedError = a;
							return this
						};
						b.event = function(a) {
							this.events.push(a);
							return this
						};
						b.blameToModule = function(a) {
							this.blameModule = a;
							return this
						};
						b.blameToPreviousFile = function() {
							this.taalOpcodes.push(g.PREVIOUS_FILE);
							return this
						};
						b.blameToPreviousFrame = function() {
							this.taalOpcodes.push(g.PREVIOUS_FRAME);
							return this
						};
						b.blameToPreviousDirectory = function() {
							this.taalOpcodes.push(g.PREVIOUS_DIR);
							return this
						};
						b.addToCategoryKey = function(a) {
							this.forcedKey = a;
							return this
						};
						b.addMetadata = function(a, b, c) {
							this.metadata.addEntry(a, b, c);
							return this
						};
						return a
					}();
					d = function(a, b) {
						var c = new ya(a);
						return b != null ? c.event(a + "." + b) : c
					};
					d.addGlobalMetadata = function(a, b, c) {
						A.addGlobalMetadata(a, b, c)
					};
					f = {
						blameToPreviousFile: function(a) {
							var b;
							a.taalOpcodes = (b = a.taalOpcodes) !== null && b !== void 0 ? b : [];
							a.taalOpcodes.push(g.PREVIOUS_FILE);
							return a
						},
						blameToPreviousFrame: function(a) {
							var b;
							a.taalOpcodes = (b = a.taalOpcodes) !== null && b !== void 0 ? b : [];
							a.taalOpcodes.push(g.PREVIOUS_FRAME);
							return a
						},
						blameToPreviousDirectory: function(a) {
							var b;
							a.taalOpcodes = (b = a.taalOpcodes) !== null && b !== void 0 ? b : [];
							a.taalOpcodes.push(g.PREVIOUS_DIR);
							return a
						}
					};
					F = {
						err: h,
						ErrorBrowserConsole: j,
						ErrorDynamicData: k,
						ErrorFilter: s,
						ErrorGlobalEventHandler: w,
						ErrorGuard: T,
						ErrorGuardState: y,
						ErrorMetadata: A,
						ErrorNormalizeUtils: M,
						ErrorPoster: ta,
						ErrorPubSub: R,
						ErrorSerializer: C,
						ErrorSetup: c,
						ErrorXFBDebug: G,
						FBLogger: d,
						getErrorSafe: u,
						getSimpleHash: H,
						TAAL: f,
						TAALOpcode: g
					};
					e.exports = F
				}), null);
				__d("ErrorGuard", ["fb-error"], (function(a, b, c, d, e, f, g) {
					"use strict";
					g["default"] = c("fb-error").ErrorGuard
				}), 98);
				__d("FBLogger", ["fb-error"], (function(a, b, c, d, e, f, g) {
					"use strict";
					g["default"] = c("fb-error").FBLogger
				}), 98);
				__d("unrecoverableViolation", ["FBLogger"], (function(a, b, c, d, e, f, g) {
					"use strict";

					function a(a, b, d, e) {
						d = d === void 0 ? {} : d;
						d = d.error;
						b = c("FBLogger")(b);
						d ? b = b.catching(d) : b = b.blameToPreviousFrame();
						for(d = 0; d < ((f = e == null ? void 0 : e.blameToPreviousFrame) != null ? f : 0); ++d) {
							var f;
							b = b.blameToPreviousFrame()
						}
						f = e == null ? void 0 : e.categoryKey;
						f != null && (b = b.addToCategoryKey(f));
						return b.mustfixThrow(a)
					}
					g["default"] = a
				}), 98);
				__d("CircularBuffer", ["unrecoverableViolation"], (function(a, b, c, d, e, f, g) {
					a = function() {
						function a(a) {
							if(a <= 0) throw c("unrecoverableViolation")("Buffer size should be a positive integer", "comet_infra");
							this.$1 = a;
							this.$2 = 0;
							this.$3 = [];
							this.$4 = []
						}
						var b = a.prototype;
						b.write = function(a) {
							var b = this;
							this.$3.length < this.$1 ? this.$3.push(a) : (this.$4.forEach(function(a) {
								return a(b.$3[b.$2])
							}), this.$3[this.$2] = a, this.$2++, this.$2 %= this.$1);
							return this
						};
						b.onEvict = function(a) {
							this.$4.push(a);
							return this
						};
						b.read = function() {
							return this.$3.slice(this.$2).concat(this.$3.slice(0, this.$2))
						};
						b.expand = function(a) {
							if(a > this.$1) {
								var b = this.read();
								this.$2 = 0;
								this.$3 = b;
								this.$1 = a
							}
							return this
						};
						b.dropFirst = function(a) {
							if(a <= this.$1) {
								var b = this.read();
								this.$2 = 0;
								b.splice(0, a);
								this.$3 = b
							}
							return this
						};
						b.clear = function() {
							this.$2 = 0;
							this.$3 = [];
							return this
						};
						b.currentSize = function() {
							return this.$3.length
						};
						return a
					}();
					g["default"] = a
				}), 98);
				__d("ErrorPubSub", ["fb-error"], (function(a, b, c, d, e, f, g) {
					"use strict";
					g["default"] = c("fb-error").ErrorPubSub
				}), 98);
				__d("IntervalTrackingBoundedBuffer", ["CircularBuffer", "ErrorPubSub"], (function(a, b, c, d, e, f, g) {
					"use strict";
					var h = 5e3;
					a = function() {
						function a(a) {
							var b = this;
							this.$6 = 0;
							if(a != null) {
								if(a <= 0) throw new Error("Size for a buffer must be greater than zero.")
							} else a = h;
							this.$4 = a;
							this.$1 = new(c("CircularBuffer"))(a);
							this.$1.onEvict(function() {
								b.$6++
							});
							this.$2 = [];
							this.$3 = 1;
							this.$5 = 0
						}
						var b = a.prototype;
						b.open = function() {
							var a = this,
								b = this.$3++,
								c = !1,
								d, e = this.$5,
								f = {
									id: b,
									startIdx: e,
									hasOverflown: function() {
										return f.getOverflowSize() > 0
									},
									getOverflowSize: function() {
										return d != null ? d : Math.max(a.$6 - e, 0)
									},
									close: function() {
										if(c) return [];
										else {
											c = !0;
											d = a.$6 - e;
											return a.$7(b)
										}
									}
								};
							this.$2.push(f);
							return f
						};
						b.pushElement = function(a) {
							this.$2.length > 0 && (this.$1.write(a), this.$5++);
							return this
						};
						b.isActive = function() {
							return this.$2.length > 0
						};
						b.$8 = function(a) {
							return Math.max(a - this.$6, 0)
						};
						b.$7 = function(a) {
							var b, d, e, f;
							for(var g = 0; g < this.$2.length; g++) {
								var h = this.$2[g],
									i = h.startIdx;
								h = h.id;
								h === a ? (e = g, f = i) : (d == null || i < d) && (d = i);
								(b == null || i < b) && (b = i)
							}
							if(e == null || b == null || f == null) {
								c("ErrorPubSub").reportError(new Error("messed up state inside IntervalTrackingBoundedBuffer"));
								return []
							}
							this.$2.splice(e, 1);
							h = this.$8(f);
							i = this.$1.read().slice(h);
							g = this.$8(d == null ? this.$5 : d) - this.$8(b);
							g > 0 && (this.$1.dropFirst(g), this.$6 += g);
							return i
						};
						return a
					}();
					g["default"] = a
				}), 98);
				__d("WorkerUtils", [], (function(a, b, c, d, e, f) {
					"use strict";

					function b() {
						try {
							return "WorkerGlobalScope" in a && a instanceof a.WorkerGlobalScope
						} catch(a) {
							return !1
						}
					}

					function c() {
						try {
							return "SharedWorkerGlobalScope" in a && a instanceof a.SharedWorkerGlobalScope
						} catch(a) {
							return !1
						}
					}

					function d() {
						return "SharedWorker" in a && typeof a.SharedWorker === "function"
					}
					f.isWorkerContext = b;
					f.isSharedWorkerContext = c;
					f.isSharedWorkerSupported = d
				}), 66);
				__d("getReusableTimeSliceContinuation", [], (function(a, b, c, d, e, f) {
					"use strict";

					function a(a, b, c) {
						var d = !1,
							e = a.getGuardedContinuation(c),
							f = function(b) {
								e(function() {
									d || (e = a.getGuardedContinuation(c)), b()
								})
							};
						f.last = function(a) {
							var b = e;
							g();
							b(a)
						};
						f[b] = {};

						function g() {
							d = !0, e = function(a) {
								a()
							}
						}
						return f
					}
					f["default"] = a
				}), 66);
				__d("fb-error-lite", [], (function(a, b, c, d, e, f) {
					"use strict";
					var g = {
						PREVIOUS_FILE: 1,
						PREVIOUS_FRAME: 2,
						PREVIOUS_DIR: 3,
						FORCED_KEY: 4
					};

					function a(a) {
						var b = new Error(a);
						if(b.stack === void 0) try {
							throw b
						} catch(a) {}
						b.messageFormat = a;
						for(var c = arguments.length, d = new Array(c > 1 ? c - 1 : 0), e = 1; e < c; e++) d[e - 1] = arguments[e];
						b.messageParams = d.map(function(a) {
							return String(a)
						});
						b.taalOpcodes = [g.PREVIOUS_FRAME];
						return b
					}
					b = {
						err: a,
						TAALOpcode: g
					};
					f["default"] = b
				}), 66);
				__d("sprintf", [], (function(a, b, c, d, e, f) {
					function a(a) {
						for(var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d];
						var e = 0;
						return a.replace(/%s/g, function() {
							return String(c[e++])
						})
					}
					f["default"] = a
				}), 66);
				__d("invariant", ["Env", "fb-error-lite", "sprintf"], (function(a, b, c, d, e, f, g) {
					"use strict";

					function a(a, b) {
						if(!a) {
							var d = b;
							for(var e = arguments.length, f = new Array(e > 2 ? e - 2 : 0), g = 2; g < e; g++) f[g - 2] = arguments[g];
							if(typeof d === "number") {
								var i = h(d, f),
									j = i.message,
									k = i.decoderLink;
								d = j;
								f.unshift(k)
							} else if(d === void 0) {
								d = "Invariant: ";
								for(var l = 0; l < f.length; l++) d += "%s,"
							}
							var m = d,
								n = new Error(m);
							n.name = "Invariant Violation";
							n.messageFormat = d;
							n.messageParams = f.map(function(a) {
								return String(a)
							});
							n.taalOpcodes = [c("fb-error-lite").TAALOpcode.PREVIOUS_FRAME];
							n.stack;
							throw n
						}
					}

					function h(a, b) {
						var d = "Minified invariant #" + a + "; %s";
						b.length > 0 && (d += " Params: " + b.map(function(a) {
							return "%s"
						}).join(", "));
						a = c("Env").show_invariant_decoder === !0 ? "visit " + i(a, b) + " to see the full message." : "";
						return {
							message: d,
							decoderLink: a
						}
					}

					function i(a, b) {
						a = "https://www.internalfb.com/intern/invariant/" + a + "/";
						b.length > 0 && (a += "?" + b.map(function(a, b) {
							return "args[" + b + "]=" + encodeURIComponent(String(a))
						}).join("&"));
						return a
					}
					g["default"] = a
				}), 98);
				__d("performanceAbsoluteNow", ["performance"], (function(a, b, c, d, e, f, g) {
					var h = function() {
						return Date.now()
					};

					function a(a) {
						h = a
					}
					if(c("performance").now && c("performance").timing && c("performance").timing.navigationStart) {
						var i = c("performance").timing.navigationStart;
						b = function() {
							return c("performance").now() + i
						}
					} else b = function() {
						return h()
					};
					b.setFallback = a;
					d = b;
					g["default"] = d
				}), 98);
				__d("wrapFunction", [], (function(a, b, c, d, e, f) {
					var g = {};

					function a(a, b, c) {
						var d = b in g ? g[b](a, c) : a;
						return function() {
							for(var a = arguments.length, b = new Array(a), c = 0; c < a; c++) b[c] = arguments[c];
							return d.apply(this, b)
						}
					}
					a.setWrapper = function(a, b) {
						g[b] = a
					};
					f["default"] = a
				}), 66);
				__d("TimeSliceImpl", ["invariant", "Env", "ErrorGuard", "FBLogger", "IntervalTrackingBoundedBuffer", "WorkerUtils", "getReusableTimeSliceContinuation", "performanceAbsoluteNow", "wrapFunction"], (function(a, b, c, d, e, f, g) {
					var h, i, j, k, l = [],
						m = [],
						n = "key" + Math.random(),
						o = 1,
						p = !1;
					c = (h || (h = b("Env"))).timesliceBufferSize;
					c == null && (c = 5e3);
					var q = (d = (h || (h = b("Env"))).timesliceReduceSpreadEnabled) != null ? d : !1,
						r = new(b("IntervalTrackingBoundedBuffer"))(c),
						s = [],
						t = [],
						u = [];

					function v() {
						return w(s)
					}

					function w(a) {
						return a.length > 0 ? a[a.length - 1] : null
					}

					function x(a, c) {
						var d = {};
						(i || (i = b("ErrorGuard"))).applyWithGuard(A, null, [a, c, d]);
						i.applyWithGuard(B, null, [a, c, d]);
						s.push(a);
						t.push(c);
						u.push(d)
					}

					function y(a, b, c) {
						l.forEach(function(d) {
							var e = d.onNewContextCreated(v(), b, c);
							a[d.getBeforeID()] = e
						})
					}

					function z(a, b, c) {
						m.forEach(function(d) {
							d.onAfterContextEnded(a, b[d.getBeforeID()], c[d.getBeforeID()], a.meta)
						})
					}

					function A(a, b, c) {
						l.forEach(function(d) {
							var e = d.onBeforeContextStarted(a, b[d.getBeforeID()], a.meta);
							c[d.getBeforeID()] = e
						})
					}

					function B(a, b, c) {
						l.forEach(function(d) {
							var e = d.onAfterContextStarted(a, b[d.getBeforeID()], c[d.getBeforeID()], a.meta);
							c[d.getBeforeID()] = e
						})
					}

					function C() {
						var a = v(),
							c = w(t),
							d = w(u);
						if(a == null || c == null || d == null) {
							b("FBLogger")("TimeSlice").mustfix("popped too many times off the timeslice stack");
							p = !1;
							return
						}(i || (i = b("ErrorGuard"))).applyWithGuard(z, null, [a, c, d]);
						p = !a.isRoot;
						s.pop();
						t.pop();
						u.pop()
					}
					var D = {
						PropagationType: {
							CONTINUATION: 0,
							EXECUTION: 1,
							ORPHAN: 2
						},
						guard: function(a, c, d) {
							var e;
							typeof a === "function" || g(0, 3725);
							typeof c === "string" || g(0, 3726);
							var f = E(d);
							if(a[n]) return a;
							var l;
							p && (l = v());
							var m = {},
								s = 0,
								t = void 0;
							e = (e = (h || (h = b("Env"))).deferred_stack_trace_rate) != null ? e : 0;
							d && d.registerCallStack && e > 0 && Math.random() < 1 / e && (t = new Error("deferred execution source"));
							d = function() {
								var d = (j || (j = b("performanceAbsoluteNow")))(),
									e = o++,
									g = {
										contextID: e,
										name: c,
										isRoot: !p,
										executionNumber: s++,
										meta: f,
										absBeginTimeMs: d
									};
								x(g, m);
								if(l != null) {
									var h = !!f.isContinuation;
									l.isRoot ? (g.indirectParentID = l.contextID, g.isEdgeContinuation = h) : (g.indirectParentID = l.indirectParentID, g.isEdgeContinuation = !!(h && l.isEdgeContinuation))
								}
								var n = (k || (k = b("WorkerUtils"))).isWorkerContext();
								p = !0;
								try {
									for(var u = arguments.length, w = new Array(u), y = 0; y < u; y++) w[y] = arguments[y];
									if(!g.isRoot || n) return a.apply(this, w);
									else return(i || (i = b("ErrorGuard"))).applyWithGuard(a, this, w, {
										name: "TimeSlice" + (c ? ": " + c : ""),
										deferredSource: t
									})
								} finally {
									var z = v();
									if(z == null) b("FBLogger")("TimeSlice").mustfix("timeslice stack misaligned, not logging the block"), p = !1;
									else {
										var A = z.isRoot,
											B = z.contextID,
											D = z.indirectParentID,
											E = z.isEdgeContinuation,
											F = (j || (j = b("performanceAbsoluteNow")))();
										z.absEndTimeMs = F;
										if(A && d != null) {
											var G = q ? {
												begin: d,
												end: F,
												id: B,
												indirectParentID: D,
												representsExecution: !0,
												isEdgeContinuation: l && E,
												guard: c
											} : babelHelpers["extends"]({
												begin: d,
												end: F,
												id: B,
												indirectParentID: D,
												representsExecution: !0,
												isEdgeContinuation: l && E,
												guard: c
											}, f, a.__SMmeta);
											if(q && a.__SMmeta != null) {
												var H = a.__SMmeta.name,
													I = a.__SMmeta.module;
												H != null && (G.name = H);
												I != null && (G.module = I)
											}
											r.pushElement(G)
										}
										C()
									}
								}
							};
							d[n] = {};
							(i || (i = b("ErrorGuard"))).applyWithGuard(y, null, [m, c, f]);
							return d
						},
						copyGuardForWrapper: function(a, b) {
							a && a[n] && (b[n] = a[n]);
							return b
						},
						getContext: function() {
							return v()
						},
						getGuardedContinuation: function(a) {
							function b(a) {
								for(var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d];
								return a.apply(this, c)
							}
							return D.guard(b, a, {
								propagationType: D.PropagationType.CONTINUATION
							})
						},
						getReusableContinuation: function(a) {
							return b("getReusableTimeSliceContinuation")(D, n, a)
						},
						getPlaceholderReusableContinuation: function() {
							var a = function(a) {
								return a()
							};
							a.last = a;
							return a
						},
						getGuardNameStack: function() {
							return s.map(function(a) {
								return a.name
							})
						},
						registerExecutionContextObserver: function(a) {
							var b = !1;
							for(var c = 0; c < l.length; c++)
								if(l[c].getBeforeID() > a.getBeforeID()) {
									l.splice(c, 0, a);
									b = !0;
									break
								}
							b || l.push(a);
							for(c = 0; c < m.length; c++)
								if(m[c].getAfterID() > a.getAfterID()) {
									m.splice(c, 0, a);
									return
								}
							m.push(a)
						},
						catchUpOnDemandExecutionContextObservers: function(a) {
							for(var b = 0; b < s.length; b++) {
								var c = s[b],
									d = t[b],
									e = u[b] || {};
								d = a.onBeforeContextStartedWhileEnabled(c, d[a.getBeforeID()], c.meta);
								e[a.getBeforeID()] = d;
								u[b] = e
							}
						},
						getBuffer: function() {
							return r
						}
					};

					function E(a) {
						var b = {};
						a && a.propagateCounterAttribution !== void 0 && (b.propagateCounterAttribution = a.propagateCounterAttribution);
						a && a.root !== void 0 && (b.root = a.root);
						switch(a && a.propagationType) {
							case D.PropagationType.CONTINUATION:
								b.isContinuation = !0;
								b.extendsExecution = !0;
								break;
							case D.PropagationType.ORPHAN:
								b.isContinuation = !1;
								b.extendsExecution = !1;
								break;
							case D.PropagationType.EXECUTION:
							default:
								b.isContinuation = !1, b.extendsExecution = !0
						}
						return b
					}
					b("wrapFunction").setWrapper(function(a, b) {
						return D.guard(a, b, {
							registerCallStack: !0
						})
					}, "entry");
					a.TimeSlice = D;
					e.exports = D
				}), 6);
				__d("requireCond", [], (function(a, b, c, d, e, f) {
					function a(a, b, c) {
						throw new Error("Cannot use raw untransformed requireCond.")
					}
					b = a;
					f["default"] = b
				}), 66);
				__d("TimeSlice", ["cr:717822"], (function(a, b, c, d, e, f, g) {
					g["default"] = b("cr:717822")
				}), 98);
				__d("setTimeoutAcrossTransitionsBlue", ["TimeSlice"], (function(a, b, c, d, e, f, g) {
					var h = a.__fbNativeSetTimeout || a.setTimeout;

					function b(b, d) {
						var e = c("TimeSlice").guard(b, "setTimeout", {
							propagationType: c("TimeSlice").PropagationType.CONTINUATION,
							registerCallStack: !0
						});
						for(var f = arguments.length, g = new Array(f > 2 ? f - 2 : 0), i = 2; i < f; i++) g[i - 2] = arguments[i];
						return Function.prototype.apply.call(h, a, [e, d].concat(g))
					}
					g["default"] = b
				}), 98);
				__d("InstantGamesGameState", [], (function(a, b, c, d, e, f) {
					"use strict";
					a = "initial";
					b = "loading";
					c = "ready";
					d = "playing";
					e = "gameover";
					f.INITIAL = a;
					f.LOADING = b;
					f.READY = c;
					f.PLAYING = d;
					f.GAMEOVER = e
				}), 66);
				__d("InstantGamesSDKMessages", [], (function(a, b, c, d, e, f) {
					a = Object.freeze({
						AD_CLICK: "adclick",
						ANALYTICS_LOG_EVENT: "analyticslogevent",
						AUTHORIZE_ASYNC: "authorizeasync",
						AVERAGE_FRAME_TIME: "averageframetime",
						CAMERA_LOAD_EFFECT_ASYNC: "cameraloadeffectasync",
						CAMERA_SHOW_EFFECT_ASYNC: "camerashoweffectasync",
						CAN_CREATE_SHORTCUT_ASYNC: "cancreateshortcutasync",
						CG_CONNECTION_ERROR: "cloudgamingconnectionerror",
						CG_RETRY: "cgretry",
						CHANGE_CONTEXT_ASYNC: "changecontextasync",
						CONTEXT_ADD_PLAYER_ASYNC: "contextaddplayerasync",
						CONTEXT_CHOOSE_ASYNC: "contextchooseasync",
						CONTEXT_CREATE_ASYNC: "contextcreateasync",
						CONTEXT_MATCH_CREATE_ASYNC: "contextmatchcreateasync",
						CONTEXT_MATCH_DATA_FETCH_ASYNC: "contextmatchdatafetchasync",
						CONTEXT_MATCH_DATA_INC_ASYNC: "contextmatchdataincasync",
						CONTEXT_MATCH_DATA_SAVE_ASYNC: "contextmatchdatasaveasync",
						CONTEXT_MATCH_END_ASYNC: "contextmatchendasync",
						CONTEXT_MATCH_FETCH_ASYNC: "contextmatchfetchasync",
						CONTEXT_PLAYERS_FETCH_ASYNC: "contextplayersfetchasync",
						CONTEXT_SWITCH_ASYNC: "contextswitchasync",
						COPLAY_CLEAR_EFFECT_ASYNC: "coplaycleareffectasync",
						COPLAY_LOAD_EFFECT_ASYNC: "coplayloadeffectasync",
						COPLAY_SHOW_EFFECT_ASYNC: "coplayshoweffectasync",
						CREATE_BOTTOM_SHEET_ASYNC: "createbottomsheetasync",
						CREATE_CHAT_MESSAGE_ASYNC: "createchatmessageasync",
						CREATE_CONTEXT_CARD_ASYNC: "createcontextcardasync",
						CREATE_LIVE_PRODUCER_EXTRA_CONTENT_ASYNC: "createliveproducerextracontentasync",
						CREATE_PLAYER_TAB_ASYNC: "createplayertabasync",
						CREATE_SHORTCUT_ASYNC: "createshortcutasync",
						CREATE_SPLITSCREEN_BOTTOM_SHEET_ASYNC: "createsplitscreenbottomsheetasync",
						DISMISS_BOTTOM_SHEET_ASYNC: "dismissbottomsheetasync",
						DISMISS_SPLITSCREEN_BOTTOM_SHEET_ASYNC: "dismisssplitscreenbottomsheetasync",
						DVR_CLIP_REQUESTED: "dvrcliprequested",
						DVR_CLIP_RESULT: "dvrclipresult",
						FBGCOMPONENT_REPLACE: "fbgcomponentreplace",
						FLUSH_PLAYER_DATA_ASYNC: "flushplayerdataasync",
						GAME_START: "gamestart",
						GAME_SWITCH: "gameswitch",
						GAME_SWITCH_NATIVE: "gameswitchnative",
						GAME_TOS: "gametos",
						GAME_YIELD: "gameyield",
						GESTURE_COMMAND: "gesturecommand",
						GET_CLIPBOARD_TEXT_ASYNC: "getclipboardtextasync",
						GET_CONNECTED_PLAYERS_ASYNC: "getconnectedplayersasync",
						GET_ENTRY_POINT_VIDEO_ID: "getentrypointvideoid",
						GET_ENTRY_POINT_VIDEO_ID_ASYNC: "getentrypointvideoidasync",
						GET_INTERSTITIAL_AD_ASYNC: "getinterstitialadasync",
						GET_PLAYER_DATA_ASYNC: "getplayerdataasync",
						GET_REWARDED_INTERSTITIAL_ASYNC: "getrewardedinterstitialasync",
						GET_REWARDED_VIDEO_ASYNC: "getrewardedvideoasync",
						GET_SIGNED_PLAYER_INFO_ASYNC: "getsignedplayerinfoasync",
						HIDE_BANNER_AD_ASYNC: "hidebanneradasync",
						INITIALIZE_ASYNC: "initializeasync",
						INVENTORY_UNLOCK_ITEM_ASYNC: "inventoryunlockitemasync",
						INVOKE_FBGCOMPONENT_CALLBACK: "invokefbgcomponentcallback",
						LIVE_VIDEO_COMMENT_VIEW_CREATE_ASYNC: "livevideocommentviewcreateasync",
						LIVE_VIDEO_COMMENT_VIEW_DESTROY: "livevideocommentviewdestroy",
						LIVE_VIDEO_COMMENT_VIEW_GET_DISPLAY_RECT_ASYNC: "livevideocommentviewgetdisplayrectasync",
						LIVE_VIDEO_COMMENT_VIEW_GET_STATE_ASYNC: "livevideocommentviewgetstateasync",
						LIVE_VIDEO_COMMENT_VIEW_SET_STATE: "livevideocommentviewsetstate",
						LOAD_AD_ASYNC: "loadadasync",
						LOAD_BANNER_AD_ASYNC: "loadbanneradasync",
						MATCH_PLAYER_ASYNC: "matchplayerasync",
						MEDIA_SEND_IMAGE_ASYNC: "mediasendimageasync",
						ON_BEGIN_LOAD: "onbeginload",
						ON_CONSOLE: "onconsole",
						ON_END_GAME: "onendgame",
						ON_FRAME_DROP: "onframedrop",
						ON_GAME_READY: "ongameready",
						ON_PICTURE: "onpicture",
						ON_PROGRESS_LOAD: "onprogressload",
						ON_SCORE: "onscore",
						ON_SCREENSHOT: "onscreenshot",
						OPEN_URL_ASYNC: "openurlasync",
						PAUSE: "pause",
						PAYMENTS_CANCEL_SUBSCRIPTION_ASYNC: "paymentscancelsubscriptionasync",
						PAYMENTS_CONSUME_PURCHASE_ASYNC: "paymentsconsumepurchaseasync",
						PAYMENTS_FETCH_CATALOG_ASYNC: "paymentsfetchcatalogasync",
						PAYMENTS_FETCH_PURCHASES_ASYNC: "paymentsfetchpurchasesasync",
						PAYMENTS_FETCH_SUBSCRIBABLE_CATALOG_ASYNC: "paymentsfetchsubscribablecatalogasync",
						PAYMENTS_FETCH_SUBSCRIPTIONS_ASYNC: "paymentsfetchsubscriptionsasync",
						PAYMENTS_INITIALIZED: "paymentsinitialized",
						PAYMENTS_PURCHASE_ASYNC: "paymentspurchaseasync",
						PAYMENTS_PURCHASE_SUBSCRIPTION_ASYNC: "paymentspurchasesubscriptionasync",
						PAYMENTS_RESTORE_PURCHASES_ASYNC: "paymentsrestorepurchasesasync",
						PERFORM_HAPTIC_FEEDBACK_ASYNC: "performhapticfeedbackasync",
						PLUGIN_EVENT_UPDATE_SUBSCRIPTION_ASYNC: "plugineventupdatesubscriptionasync",
						PLUGIN_GAME_BOTTOM_SHEET_CREATE_ASYNC: "plugingamebottomsheetcreateasync",
						PLUGIN_GAME_BOTTOM_SHEET_DISMISS_ASYNC: "plugingamebottomsheetdismissasync",
						PLUGIN_GAME_BOTTOM_SHEET_ON_DISMISSED: "plugingamebottomsheetondismissed",
						PLUGIN_GAME_BOTTOM_SHEET_ON_MESSAGE_RECEIVED: "plugingamebottomsheetonmessagereceived",
						PLUGIN_GAME_BOTTOM_SHEET_SEND_MESSAGE_ASYNC: "plugingamebottomsheetsendmessageasync",
						QUIT: "quit",
						REALTIME_RECEIVE_MESSAGE: "realtimereceivemessage",
						REALTIME_RECEIVE_STATE_UPDATE: "realtimereceivestateupdate",
						REALTIME_SEND_MESSAGE: "realtimesendmessage",
						REALTIME_SEND_STATE_UPDATE: "realtimesendstateupdate",
						REGISTER_SCREENSHOT_PROVIDER: "registerscreenshotprovider",
						REJECT_PROMISE: "rejectpromise",
						REQUEST_SCREENSHOT: "requestscreenshot",
						REQUEST_STAR_SEND_ASYNC: "requeststarsendasync",
						RESOLVE_PROMISE: "resolvepromise",
						RESTART: "restart",
						RESUME: "resume",
						SELECT_PLAYER_TAB_ASYNC: "selectplayertabasync",
						SEND_PASS_THROUGH_ASYNC: "sendpassthroughasync",
						SET_CLIPBOARD_TEXT_ASYNC: "setclipboardtextasync",
						SET_PLAYER_DATA_ASYNC: "setplayerdataasync",
						SET_SESSION_DATA: "setsessiondata",
						SHARE_ASYNC: "shareasync",
						SHOW_AD_ASYNC: "showadasync",
						SHOW_GENERIC_DIALOG_ASYNC: "showgenericdialogasync",
						SHOW_GENERIC_DIALOG_ASYNC_IOS: "showgenericdialogasync-ios",
						SHOW_TOAST_ASYNC: "showtoastasync",
						SUBSCRIBE_BOT_ASYNC: "subscribebotasync",
						VIDEO_PLAYER_CREATE_ASYNC: "videoplayercreateasync",
						VIDEO_PLAYER_GET_INSTANCES_ASYNC: "videoplayergetinstancesasync",
						VIDEO_PLAYER_INSTANCE_DESTROY: "videoplayerinstancedestroy",
						VIDEO_PLAYER_INSTANCE_GET_ORIGINAL_DIMENSIONS_ASYNC: "videoplayerinstancegetoriginaldimensionsasync",
						VIDEO_PLAYER_INSTANCE_GET_STATE_ASYNC: "videoplayerinstancegetstateasync",
						VIDEO_PLAYER_INSTANCE_JUMP_TO_END: "videoplayerinstancejumptoend",
						VIDEO_PLAYER_INSTANCE_JUMP_TO_TIMESTAMP: "videoplayerinstancejumptotimestamp",
						VIDEO_PLAYER_INSTANCE_SET_STATE: "videoplayerinstancesetstate",
						VIDEO_PLAYER_INSTANCE_TIMESTAMP_UPDATE: "videoplayerinstancetimestampupdate"
					});
					f["default"] = a
				}), 66);
				/**
				 * License: https://www.facebook.com/legal/license/Ga6vBwdwgUx/
				 */
				__d("ImmediateImplementation", ["ImmediateImplementationExperiments"], (function(a, b, c, d, e, f) {
					(function(c, d) {
						"use strict";
						var e = 1,
							g = {},
							h = {},
							i = h,
							j = !1,
							k = c.document,
							l, m, n, o = "setImmediate$" + Math.random() + "$";

						function p() {
							var a = c.event;
							return !a ? !1 : a.isTrusted && ES(["change", "click", "contextmenu", "dblclick", "mouseup", "pointerup", "reset", "submit", "touchend"], "includes", !0, a.type) || a.type === "message" && a.source === c && typeof a.data === "string" && a.data.indexOf(o) === 0
						}

						function q(a) {
							var b = a[0];
							a = Array.prototype.slice.call(a, 1);
							g[e] = function() {
								b.apply(void 0, a)
							};
							i = i.next = {
								handle: e++
							};
							return i.handle
						}

						function r() {
							var a, b;
							while(!j && (a = h.next)) {
								h = a;
								if(b = g[a.handle]) {
									j = !0;
									try {
										b(), j = !1
									} finally {
										s(a.handle), j && (j = !1, h.next && l(r))
									}
								}
							}
						}

						function s(a) {
							delete g[a]
						}

						function d() {
							if(c.postMessage && !c.importScripts) {
								var a = !0,
									b = function b() {
										a = !1, c.removeEventListener ? c.removeEventListener("message", b, !1) : c.detachEvent("onmessage", b)
									};
								if(c.addEventListener) c.addEventListener("message", b, !1);
								else if(c.attachEvent) c.attachEvent("onmessage", b);
								else return !1;
								c.postMessage("", "*");
								return a
							}
						}

						function t() {
							var a = function(a) {
								a.source === c && typeof a.data === "string" && a.data.indexOf(o) === 0 && r()
							};
							c.addEventListener ? c.addEventListener("message", a, !1) : c.attachEvent("onmessage", a);
							l = function() {
								var a = q(arguments);
								c.originalPostMessage ? c.originalPostMessage(o + a, "*") : c.postMessage(o + a, "*");
								return a
							};
							m = l
						}

						function u() {
							var a = new MessageChannel(),
								b = !1;
							a.port1.onmessage = function(a) {
								b = !1, r()
							};
							l = function() {
								var c = q(arguments);
								b || (a.port2.postMessage(c), b = !0);
								return c
							};
							n = l
						}

						function v() {
							var a = k.documentElement;
							l = function() {
								var b = q(arguments),
									c = k.createElement("script");
								c.onreadystatechange = function() {
									c.onreadystatechange = null, a.removeChild(c), c = null, r()
								};
								a.appendChild(c);
								return b
							}
						}

						function w() {
							l = function() {
								setTimeout(r, 0);
								return q(arguments)
							}
						}
						d() ? c.MessageChannel && b("ImmediateImplementationExperiments").prefer_message_channel ? (t(), u(), l = function() {
							if(p()) return m.apply(null, arguments);
							else return n.apply(null, arguments)
						}) : t() : c.MessageChannel ? u() : k && k.createElement && "onreadystatechange" in k.createElement("script") ? v() : w();
						f.setImmediate = l;
						f.clearImmediate = s
					})(typeof self === "undefined" ? typeof a === "undefined" ? this : a : self)
				}), null);
				__d("setImmediatePolyfill", ["invariant", "ImmediateImplementation", "PromiseUsePolyfillSetImmediateGK"], (function(a, b, c, d, e, f, g) {
					var h = a.setImmediate;
					if(b("PromiseUsePolyfillSetImmediateGK").www_always_use_polyfill_setimmediate || !h) {
						d = b("ImmediateImplementation");
						h = d.setImmediate
					}

					function c(a) {
						typeof a === "function" || g(0, 5912);
						for(var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d];
						return h.apply(void 0, [a].concat(c))
					}
					e.exports = c
				}), null);
				__d("setImmediateAcrossTransitions", ["TimeSlice", "setImmediatePolyfill"], (function(a, b, c, d, e, f, g) {
					function a(a) {
						var b = c("TimeSlice").guard(a, "setImmediate", {
							propagationType: c("TimeSlice").PropagationType.CONTINUATION,
							registerCallStack: !0
						});
						for(var d = arguments.length, e = new Array(d > 1 ? d - 1 : 0), f = 1; f < d; f++) e[f - 1] = arguments[f];
						return c("setImmediatePolyfill").apply(void 0, [b].concat(e))
					}
					g["default"] = a
				}), 98);
				__d("PromiseImpl", ["TimeSlice", "setImmediateAcrossTransitions"], (function(a, b, c, d, e, f) {
					"use strict";
					c = a.Env || {};
					d = !!c.gk_use_microtask_promise_polyfill;
					c = ((f = a.queueMicrotask) != null ? f : a.Promise) ? function(c) {
						a.Promise.resolve().then(c)["catch"](function(a) {
							b("setImmediateAcrossTransitions")(function() {
								throw a
							})
						})
					} : b("setImmediateAcrossTransitions");
					var g = d ? c : b("setImmediateAcrossTransitions");

					function h() {}
					var i = null,
						j = {};

					function k(a) {
						try {
							return a.then
						} catch(a) {
							i = a;
							return j
						}
					}

					function l(a, b) {
						try {
							return a(b)
						} catch(a) {
							i = a;
							return j
						}
					}

					function m(a, b, c) {
						try {
							a(b, c)
						} catch(a) {
							i = a;
							return j
						}
					}

					function n(a) {
						if(typeof this !== "object") throw new TypeError("Promises must be constructed via new");
						if(typeof a !== "function") throw new TypeError("not a function");
						this._state = 0;
						this._value = null;
						this._deferreds = [];
						if(a === h) return;
						u(a, this)
					}
					n._noop = h;
					n.prototype.then = function(a, b) {
						if(this.constructor !== n) return o(this, a, b);
						var c = new n(h);
						p(this, new t(a, b, c));
						return c
					};

					function o(a, b, c) {
						return new a.constructor(function(d, e) {
							var f = new n(h);
							f.then(d, e);
							p(a, new t(b, c, f))
						})
					}

					function p(a, b) {
						while(a._state === 3) a = a._value;
						if(a._state === 0) {
							a._deferreds.push(b);
							return
						}
						g(function() {
							var c = a._state === 1 ? b.onFulfilled : b.onRejected;
							if(c === null) {
								b.continuation(function() {});
								a._state === 1 ? q(b.promise, a._value) : r(b.promise, a._value);
								return
							}
							c = l(ES(b.continuation, "bind", !0, null, c), a._value);
							c === j ? r(b.promise, i) : q(b.promise, c)
						})
					}

					function q(a, b) {
						if(b === a) return r(a, new TypeError("A promise cannot be resolved with itself."));
						if(b && (typeof b === "object" || typeof b === "function")) {
							var c = k(b);
							if(c === j) return r(a, i);
							if(c === a.then && b instanceof n) {
								a._state = 3;
								a._value = b;
								s(a);
								return
							} else if(typeof c === "function") {
								u(ES(c, "bind", !0, b), a);
								return
							}
						}
						a._state = 1;
						a._value = b;
						s(a)
					}

					function r(a, b) {
						a._state = 2, a._value = b, s(a)
					}

					function s(a) {
						for(var b = 0; b < a._deferreds.length; b++) p(a, a._deferreds[b]);
						a._deferreds = null
					}

					function t(a, c, d) {
						this.onFulfilled = typeof a === "function" ? a : null, this.onRejected = typeof c === "function" ? c : null, this.continuation = b("TimeSlice").getGuardedContinuation("Promise Handler"), this.promise = d
					}

					function u(a, b) {
						var c = !1;
						a = m(a, function(a) {
							if(c) return;
							c = !0;
							q(b, a)
						}, function(a) {
							if(c) return;
							c = !0;
							r(b, a)
						});
						!c && a === j && (c = !0, r(b, i))
					}
					var v = B(!0),
						w = B(!1),
						x = B(null),
						y = B(void 0),
						z = B(0),
						A = B("");

					function B(a) {
						var b = new n(n._noop);
						b._state = 1;
						b._value = a;
						return b
					}
					n.resolve = function(a) {
						if(a instanceof n) return a;
						if(a === null) return x;
						if(a === void 0) return y;
						if(a === !0) return v;
						if(a === !1) return w;
						if(a === 0) return z;
						if(a === "") return A;
						if(typeof a === "object" || typeof a === "function") try {
							var b = a.then;
							if(typeof b === "function") return new n(ES(b, "bind", !0, a))
						} catch(a) {
							return new n(function(b, c) {
								c(a)
							})
						}
						return B(a)
					};
					n.all = function(a) {
						Array.isArray(a) || (a = [n.reject(new TypeError("Promise.all must be passed an array."))]);
						var b = Array.prototype.slice.call(a);
						return new n(function(a, c) {
							if(b.length === 0) return a([]);
							var d = b.length;

							function e(f, g) {
								if(g && (typeof g === "object" || typeof g === "function"))
									if(g instanceof n && g.then === n.prototype.then) {
										while(g._state === 3) g = g._value;
										if(g._state === 1) return e(f, g._value);
										g._state === 2 && c(g._value);
										g.then(function(a) {
											e(f, a)
										}, c);
										return
									} else {
										var h = g.then;
										if(typeof h === "function") {
											h = new n(ES(h, "bind", !0, g));
											h.then(function(a) {
												e(f, a)
											}, c);
											return
										}
									}
								b[f] = g;
								--d === 0 && a(b)
							}
							for(var f = 0; f < b.length; f++) e(f, b[f])
						})
					};
					n.reject = function(a) {
						return new n(function(b, c) {
							c(a)
						})
					};
					n.race = function(a) {
						return new n(function(b, c) {
							a.forEach(function(a) {
								n.resolve(a).then(b, c)
							})
						})
					};
					n.prototype["catch"] = function(a) {
						return this.then(null, a)
					};
					e.exports = n
				}), null);
				__d("err", ["fb-error"], (function(a, b, c, d, e, f, g) {
					"use strict";
					g["default"] = c("fb-error").err
				}), 98);
				__d("setTimeoutAcrossTransitions", ["cr:986633"], (function(a, b, c, d, e, f, g) {
					g["default"] = b("cr:986633")
				}), 98);
				__d("Promise", ["ErrorPubSub", "PromiseImpl", "err", "setTimeoutAcrossTransitions"], (function(a, b, c, d, e, f) {
					"use strict";
					var g;
					c = a.Env || {};
					d = !!c.gk_use_native_promise;
					var h;
					d && !!a.Promise ? h = a.Promise : h = b("PromiseImpl");
					h.allSettled || (h.allSettled = function(a) {
						if(!Array.isArray(a)) return h.reject(new TypeError("Promise.allSettled must be passed an array."));
						var b = Array(a.length),
							c = function(c, d) {
								var e = a[c];
								d = typeof e === "object" && e !== null && typeof e.then === "function";
								b[c] = d ? new h(function(a, b) {
									e.then(function(b) {
										a({
											status: "fulfilled",
											value: b
										})
									}, function(b) {
										a({
											status: "rejected",
											reason: b
										})
									})
								}) : h.resolve({
									status: "fulfilled",
									value: e
								})
							};
						for(var d = 0, e = a.length; d < e; ++d) c(d, e);
						return h.all(b)
					});
					h.prototype["finally"] || (h.prototype["finally"] = function(a) {
						return this.then(function(b) {
							return h.resolve(a()).then(function() {
								return b
							})
						}, function(b) {
							return h.resolve(a()).then(function() {
								throw b
							})
						})
					});
					h.prototype.done || (h.prototype.done = function(a, c) {
						(g || (g = b("ErrorPubSub"))).reportError(b("err")("Promise.done is deprecated. Please use promiseDone."));
						var d = new Error("Promise.done"),
							e = arguments.length ? this.then.apply(this, arguments) : this;
						e.then(null, function(a) {
							b("setTimeoutAcrossTransitions")(function() {
								if(a instanceof Error) throw a;
								else {
									d.message = "" + a;
									throw d
								}
							}, 0)
						})
					});
					e.exports = h
				}), null);
				__d("InstantGamesErrorCode", [], (function(a, b, c, d, e, f) {
					a = Object.freeze({
						ACHIEVEMENT_NOT_FOUND: "ACHIEVEMENT_NOT_FOUND",
						ADS_EXPIRED: "ADS_EXPIRED",
						ADS_FREQUENT_LOAD: "ADS_FREQUENT_LOAD",
						ADS_NO_FILL: "ADS_NO_FILL",
						ADS_NOT_LOADED: "ADS_NOT_LOADED",
						ADS_TOO_MANY_INSTANCES: "ADS_TOO_MANY_INSTANCES",
						ANALYTICS_POST_EXCEPTION: "ANALYTICS_POST_EXCEPTION",
						ARENAS_NOT_FOUND: "ARENAS_NOT_FOUND",
						CLIENT_REQUIRES_UPDATE: "CLIENT_REQUIRES_UPDATE",
						CLIENT_UNSUPPORTED_OPERATION: "CLIENT_UNSUPPORTED_OPERATION",
						DUPLICATE_POST: "DUPLICATE_POST",
						GAMING_SQUAD_NOT_FOUND: "GAMING_SQUAD_NOT_FOUND",
						GROUP_NOT_LINKED: "GROUP_NOT_LINKED",
						INVALID_OPERATION: "INVALID_OPERATION",
						INVALID_PARAM: "INVALID_PARAM",
						LEADERBOARD_NOT_FOUND: "LEADERBOARD_NOT_FOUND",
						LEADERBOARD_WRONG_CONTEXT: "LEADERBOARD_WRONG_CONTEXT",
						LIVE_MATCH_NOT_FOUND: "LIVE_MATCH_NOT_FOUND",
						LIVE_STREAMS_NOT_FOUND: "LIVE_STREAMS_NOT_FOUND",
						NETWORK_FAILURE: "NETWORK_FAILURE",
						NOT_AUTHORIZED: "NOT_AUTHORIZED",
						PAGE_NOT_LINKED: "PAGE_NOT_LINKED",
						PAYMENTS_INVALID: "PAYMENTS_INVALID",
						PAYMENTS_NOT_ALLOWED: "PAYMENTS_NOT_ALLOWED",
						PAYMENTS_NOT_INITIALIZED: "PAYMENTS_NOT_INITIALIZED",
						PAYMENTS_OPERATION_FAILURE: "PAYMENTS_OPERATION_FAILURE",
						PAYMENTS_PURCHASE_CREATION_FAILED: "PAYMENTS_PURCHASE_CREATION_FAILED",
						PAYMENTS_PURCHASE_POST_PROCESSING_FAILED: "PAYMENTS_PURCHASE_POST_PROCESSING_FAILED",
						PAYMENTS_USER_CANCELLED: "PAYMENTS_USER_CANCELLED",
						PENDING_REQUEST: "PENDING_REQUEST",
						RATE_LIMITED: "RATE_LIMITED",
						ROOM_AR_DENIED_USER_EFFECT_IN_PLACE: "ROOM_AR_DENIED_USER_EFFECT_IN_PLACE",
						ROOM_AR_EFFECT_ALREADY_LOADED: "ROOM_AR_EFFECT_ALREADY_LOADED",
						ROOM_AR_EFFECT_NOT_FOUND: "ROOM_AR_EFFECT_NOT_FOUND",
						SAME_CONTEXT: "SAME_CONTEXT",
						TOURNAMENT_NOT_FOUND: "TOURNAMENT_NOT_FOUND",
						TOURNAMENT_SCORE_REJECTED: "TOURNAMENT_SCORE_REJECTED",
						UNKNOWN: "UNKNOWN",
						USER_INPUT: "USER_INPUT",
						VIDEO_NOT_FOUND: "VIDEO_NOT_FOUND"
					});
					f["default"] = a
				}), 66);
				__d("fbinstant/common/errorCode", ["InstantGamesErrorCode"], (function(a, b, c, d, e, f, g) {
					"use strict";
					g["default"] = c("InstantGamesErrorCode")
				}), 98);
				__d("fbinstant/common/apiError", ["fbinstant/common/errorCode"], (function(a, b, c, d, e, f, g) {
					"use strict";
					a = function(a) {
						this.code = a.code || c("fbinstant/common/errorCode").UNKNOWN, this.message = a.message, this.code === c("fbinstant/common/errorCode").CLIENT_REQUIRES_UPDATE && (this.code = c("fbinstant/common/errorCode").CLIENT_UNSUPPORTED_OPERATION)
					};
					g["default"] = a
				}), 98);
				__d("fbinstant/common/dataAccessRecorder", [], (function(a, b, c, d, e, f) {
					"use strict";
					var g = {};

					function a(a, b, c, d) {
						d === void 0 && (d = {});
						c = a + "_" + c;
						if(Object.prototype.hasOwnProperty.call(g, c)) return;
						g[c] = !0;
						b.sendPassThroughAsync(a, d)
					}
					f["default"] = a
				}), 66);
				__d("fbinstant/common/featureAvailabilityFetcher", [], (function(a, b, c, d, e, f) {
					"use strict";
					a = function() {
						function a() {
							this.$1 = {}
						}
						var b = a.prototype;
						b.fetchAsync = function(a, b) {
							if(this.$1[b] != null) return this.$1[b];
							this.$1[b] = a.sendPassThroughAsync("FEATURE_AVAILABILITY", {
								feature: b
							});
							return this.$1[b]
						};
						return a
					}();
					b = new a();
					f["default"] = b
				}), 66);
				__d("InstantGamesNTViewType", [], (function(a, b, c, d, e, f) {
					a = Object.freeze({
						ADD_TO_GAMING_SQUAD: "add_to_gaming_squad",
						CANVAS_TO_INSTANT_GAMES_SILENT_REAUTH_NOTICE: "canvas_to_instant_games_silent_reauth_notice",
						COMMUNITY_HUD: "community_hud",
						CONTEXT_CHOOSE: "context_choose",
						CONTEXT_CREATE: "context_create",
						CONTEXT_SOLO_SWITCH: "context_solo_switch",
						CONTEXT_SWITCH: "context_switch",
						CONTEXT_SWITCH_AFTER_SHARE: "context_switch_after_share",
						CONTEXT_SWITCHER: "context_switcher",
						CREATE_GAMING_SQUAD: "create_gaming_squad",
						CROSS_PLAY_MIGRATION_DIALOG: "cross_play_migration_dialog",
						CUSTOM_INVITE: "custom_invite",
						CUSTOM_LINK_SHARE: "custom_link_share",
						CUSTOM_SHARE: "custom_share",
						CUSTOM_UPDATE_MESSAGING_CONSENT: "custom_update_messaging_consent",
						CUSTOM_UPDATE_POST_COMMENT: "custom_update_post_comment",
						CUSTOM_UPDATE_SHARE_AS_MESSAGE: "custom_update_share_as_message",
						ERROR: "error",
						FOLLOW_PAGE: "follow_page",
						FRIEND_FINDER: "friend_finder",
						GAME_GENERAL_STATUS: "game_general_status",
						GAME_REQUESTS: "game_requests",
						GAME_SHARE: "game_share",
						GAME_SWITCH: "game_switch",
						GAME_SWITCH_NATIVE: "game_switch_native",
						GENERAL_GAME_SHARE: "general_game_share",
						IN_APP_PURCHASE: "in_app_purchase",
						IN_APP_PURCHASE_SUBSCRIPTION: "in_app_purchase_subscription",
						INTERNAL_E2E_TEST_GENERIC_DIALOG: "internal_e2e_test_generic_dialog",
						JOIN_GAMING_SQUAD: "join_gaming_squad",
						JOIN_GROUP: "join_group",
						LEAVE_GAMING_SQUAD: "leave_gaming_squad",
						LIKE: "like",
						LIVE_STREAMS: "live_streams",
						MATCH_MAKING: "match_making",
						MATCH_PLAYER: "match_player",
						MEDIA_ASSET: "media_asset",
						MULTI_TOUCH_OVERLAY_TUTORIAL: "multi_touch_overlay_tutorial",
						NAV_BAR: "nav_bar",
						OBA_TOAST: "oba_toast",
						OPEN_EXTERNAL_LINK: "open_external_link",
						POST_LIVE: "post_live",
						POST_USER_ACHIEVEMENT: "post_user_achievement",
						REGISTER_ARENA: "register_arena",
						SHARE_TOURNAMENT: "share_tournament",
						SHORTCUT: "shortcut",
						SUBSCRIBE_BOT: "subscribe_bot",
						TOS_SCREEN: "tos_screen",
						TOURNAMENT_CREATE: "tournament_create",
						TOURNAMENT_STATUS: "tournament_status",
						VIDEO_PLAYER: "video_player"
					});
					f["default"] = a
				}), 66);
				__d("fbinstant/common/genericDialogs", ["InstantGamesNTViewType"], (function(a, b, c, d, e, f, g) {
					"use strict";
					g["default"] = c("InstantGamesNTViewType")
				}), 98);
				__d("fbinstant/common/getUrlParam", [], (function(a, b, c, d, e, f) {
					"use strict";
					var g = window.location.href;
					a = function(a) {
						try {
							var b = g.split("?");
							if(b.length < 2) return null;
							b = b[1].split("&");
							for(var b = b, c = Array.isArray(b), d = 0, b = c ? b : b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
								var e;
								if(c) {
									if(d >= b.length) break;
									e = b[d++]
								} else {
									d = b.next();
									if(d.done) break;
									e = d.value
								}
								e = e;
								e = e.split("=");
								if(e.length > 1 && e[0] === a) return e[1]
							}
							return null
						} catch(a) {
							return null
						}
					};
					b = a;
					f["default"] = b
				}), 66);
				__d("fbinstant/common/platform", [], (function(a, b, c, d, e, f) {
					"use strict";
					a = {
						IOS: "IOS",
						ANDROID: "ANDROID",
						WEB: "WEB",
						MOBILE_WEB: "MOBILE_WEB"
					};
					f["default"] = a
				}), 66);
				__d("fbinstant/common/promiseResultRecorder", ["fbinstant/common/dataAccessRecorder"], (function(a, b, c, d, e, f, g) {
					"use strict";

					function a(a, b, d) {
						return a.then(function(a) {
							c("fbinstant/common/dataAccessRecorder")(b, d, b + "_" + String(a), {
								promiseResolvedResult: a
							});
							return a
						})["catch"](function(a) {
							var e = a && a.code || null,
								f = a && a.message || null;
							c("fbinstant/common/dataAccessRecorder")(b, d, b + "_" + e, {
								promiseRejectedResult: {
									code: e,
									message: f
								}
							});
							throw a
						})
					}
					g["default"] = a
				}), 98);
				__d("fbinstant/common/validator", ["fbinstant/common/errorCode"], (function(a, b, c, d, e, f, g) {
					"use strict";
					var h = ES("Number", "isInteger", !1) || function(a) {
						return typeof a === "number" && isFinite(a) && Math.floor(a) === a
					};
					a = function() {
						function a() {}
						var b = a.prototype;
						b.validate = function(a, b) {
							return b.validate(a)["catch"](function(a) {
								a = {
									code: c("fbinstant/common/errorCode").INVALID_PARAM,
									message: a.message
								};
								throw a
							})
						};
						b.object = function() {
							return new j()
						};
						b.array = function() {
							return new k()
						};
						b.string = function() {
							return new l()
						};
						b.number = function() {
							return new m()
						};
						b.integer = function() {
							return new n()
						};
						b["boolean"] = function() {
							return new o()
						};
						b.union = function(a) {
							return new p(a)
						};
						return a
					}();
					var i = function() {
							function a() {
								this.validator = function(a) {
									return
								}, this.errors = [], this.isOptional = !1, this.type = "Any"
							}
							var b = a.prototype;
							b.validate = function(a) {
								var b = this;
								this.validator(a);
								return new Promise(function(c, d) {
									return b.errors.length > 0 ? d(new Error(b.errors.map(function(a) {
										return a.message
									}).join("\n"))) : c(a)
								})
							};
							b.optional = function() {
								this.isOptional = !0;
								return this
							};
							b.addError = function(a, b) {
								if(b) {
									this.errors.push(new Error(b));
									return
								}
								this.errors.push(new Error("Expected a value of type " + this.type + ", received: " + String(a)))
							};
							b.getErrors = function() {
								return this.errors
							};
							b.getType = function() {
								return this.type
							};
							return a
						}(),
						j = function(b) {
							babelHelpers.inheritsLoose(a, b);

							function a() {
								var a;
								a = b.call(this) || this;
								a.validator = function(b) {
									if(b == null && a.isOptional) return;
									(typeof b !== "object" || Array.isArray(b)) && a.addError(b);
									a.$ObjectSchema4(b);
									for(var c in a.$ObjectSchema1) {
										var d = b[c],
											e = a.$ObjectSchema1[c];
										if(!e.validator) {
											a.addError(d, "Bad/missing validator for key: " + c);
											return
										}
										e.validator(d);
										e = e.getErrors();
										if(e.length > 0) {
											var f = "For key " + c + ": ";
											for(var e = e, g = Array.isArray(e), h = 0, e = g ? e : e[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
												var i;
												if(g) {
													if(h >= e.length) break;
													i = e[h++]
												} else {
													h = e.next();
													if(h.done) break;
													i = h.value
												}
												i = i;
												f += "[" + i.message + "],"
											}
											a.addError(d, f)
										}
									}
								};
								a.$ObjectSchema1 = {};
								a.$ObjectSchema2 = null;
								a.$ObjectSchema3 = null;
								a.type = "Object";
								return a
							}
							var c = a.prototype;
							c.keys = function(a) {
								this.$ObjectSchema1 = a;
								return this
							};
							c.maxSize = function(a) {
								this.$ObjectSchema2 = a;
								return this
							};
							c.minSize = function(a) {
								this.$ObjectSchema3 = a;
								return this
							};
							c.$ObjectSchema4 = function(a) {
								if(this.$ObjectSchema2 || this.$ObjectSchema3) {
									a = ES("JSON", "stringify", !1, a).length;
									this.$ObjectSchema2 && a > this.$ObjectSchema2 && this.errors.push(new Error("Object must be at most " + String(this.$ObjectSchema2) + " characters when stringified, was " + String(a)));
									this.$ObjectSchema3 && a < this.$ObjectSchema3 && this.errors.push(new Error("Object must be at least " + String(this.$ObjectSchema3) + " characters when stringified, was " + String(a)))
								}
							};
							return a
						}(i),
						k = function(b) {
							babelHelpers.inheritsLoose(a, b);

							function a() {
								var a;
								a = b.call(this) || this;
								a.validator = function(b) {
									if(b == null && a.isOptional) return;
									if(!Array.isArray(b)) {
										a.addError(b);
										return
									}
									if(a.$ArraySchema2 && b.length !== a.$ArraySchema2) {
										a.addError(b, "Received an array of length " + String(b.length) + ", expected an array of length " + String(a.$ArraySchema2));
										return
									}
									for(var b = b, c = Array.isArray(b), d = 0, b = c ? b : b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
										var e;
										if(c) {
											if(d >= b.length) break;
											e = b[d++]
										} else {
											d = b.next();
											if(d.done) break;
											e = d.value
										}
										e = e;
										if(!a.$ArraySchema1.validator) {
											a.addError(e, "Bad/missing validator for Array");
											return
										}
										a.$ArraySchema1.validator(e);
										var f = a.$ArraySchema1.getErrors();
										if(f.length > 0) {
											f = a.$ArraySchema1.getType();
											f = "Array of type " + f + " contained a value of another type: " + String(e);
											a.addError(e, f);
											return
										}
									}
								};
								a.$ArraySchema1 = new i();
								a.$ArraySchema2 = null;
								a.type = "Array";
								return a
							}
							var c = a.prototype;
							c.schemaType = function(a) {
								this.$ArraySchema1 = a;
								return this
							};
							c.length = function(a) {
								this.$ArraySchema2 = a;
								return this
							};
							return a
						}(i),
						l = function(b) {
							babelHelpers.inheritsLoose(a, b);

							function a() {
								var a;
								a = b.call(this) || this;
								a.validator = function(b) {
									if(b == null && a.isOptional) return;
									typeof b !== "string" && a.addError(b)
								};
								a.type = "String";
								return a
							}
							return a
						}(i),
						m = function(b) {
							babelHelpers.inheritsLoose(a, b);

							function a() {
								var a;
								a = b.call(this) || this;
								a.validator = function(b) {
									if(b == null && a.isOptional) return;
									var c = typeof b === "number" && !isNaN(b);
									c || a.addError(b)
								};
								a.type = "Number";
								return a
							}
							return a
						}(i),
						n = function(b) {
							babelHelpers.inheritsLoose(a, b);

							function a() {
								var a;
								a = b.call(this) || this;
								a.validator = function(b) {
									if(b == null && a.isOptional) return;
									h(b) || a.addError(b)
								};
								a.type = "Integer";
								return a
							}
							return a
						}(m),
						o = function(b) {
							babelHelpers.inheritsLoose(a, b);

							function a() {
								var a;
								a = b.call(this) || this;
								a.validator = function(b) {
									if(b == null && a.isOptional) return;
									typeof b !== "boolean" && a.addError(b)
								};
								a.type = "Boolean";
								return a
							}
							return a
						}(i),
						p = function(b) {
							babelHelpers.inheritsLoose(a, b);

							function a(a) {
								var c;
								c = b.call(this) || this;
								c.validator = function(a) {
									if(a == null && c.isOptional) return;
									var b = [];
									for(var d = c.$UnionSchema1, e = Array.isArray(d), f = 0, d = e ? d : d[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
										var g;
										if(e) {
											if(f >= d.length) break;
											g = d[f++]
										} else {
											f = d.next();
											if(f.done) break;
											g = f.value
										}
										g = g;
										g.validator(a);
										g = g.getErrors();
										if(g.length === 0) return;
										b.concat(g)
									}
									c.addError(a);
									for(g = 0; g < b.length; g++) {
										f = b[g];
										c.errors.push(f)
									}
								};
								c.$UnionSchema1 = a;
								var d = " or ",
									e = "";
								for(var f = 0; f < a.length; f++) {
									var g = a[f];
									e += g.type + d
								}
								c.type = e.substring(0, e.length - d.length);
								return c
							}
							return a
						}(i);
					b = new a();
					g["default"] = b
				}), 98);
				__d("fbinstant/common/score", ["fbinstant/common/genericDialogs", "fbinstant/common/validator"], (function(a, b, c, d, e, f, g) {
					"use strict";

					function h(a) {
						return c("fbinstant/common/validator").validate(a, c("fbinstant/common/validator").integer())
					}

					function a(a, b, d) {
						return h(b).then(function() {
							return a.sendPassThroughAsync("POST_SESSION_SCORE", {
								score: b,
								contextID: d
							})
						}).then(function(b) {
							if(!b || b == null) return Promise.resolve();
							if(b.shouldPromptAchievementShare && a.showGenericDialogAsync) return a.showGenericDialogAsync(c("fbinstant/common/genericDialogs").POST_USER_ACHIEVEMENT, b.achievementArgs)["catch"](function() {
								return Promise.resolve()
							}).then(function() {
								return b.shouldPromptTournamentShare && a.showGenericDialogAsync ? a.showGenericDialogAsync(c("fbinstant/common/genericDialogs").SHARE_TOURNAMENT, b.args)["catch"](function() {
									return Promise.resolve()
								}) : Promise.resolve()
							});
							else if(b.shouldPromptTournamentShare && a.showGenericDialogAsync) return a.showGenericDialogAsync(c("fbinstant/common/genericDialogs").SHARE_TOURNAMENT, b.args)["catch"](function() {
								return Promise.resolve()
							});
							return Promise.resolve()
						})
					}
					b = {
						PostSessionScore: a,
						ValidateScore: h
					};
					g["default"] = b
				}), 98);
				__d("fbinstant/common/adType", [], (function(a, b, c, d, e, f) {
					"use strict";
					a = {
						INTERSTITIAL: "INTERSTITIAL",
						REWARDED_VIDEO: "REWARDED_VIDEO",
						REWARDED_INTERSTITIAL: "REWARDED_INTERSTITIAL"
					};
					f["default"] = a
				}), 66);
				__d("InstantGamesPassThroughRequestType", [], (function(a, b, c, d, e, f) {
					a = Object.freeze({
						API_RESULT_COMPARATOR: "API_RESULT_COMPARATOR",
						APP_CUSTOM_EVENT: "APP_CUSTOM_EVENT",
						ASID: "ASID",
						CAMERA_LOAD_EFFECT: "CAMERA_LOAD_EFFECT",
						CAN_CREATE_CONTEXT: "CAN_CREATE_CONTEXT",
						CAN_CREATE_TOURNAMENT: "CAN_CREATE_TOURNAMENT",
						CAN_FOLLOW_PAGE: "CAN_FOLLOW_PAGE",
						CAN_GET_LIVE_STREAMS: "CAN_GET_LIVE_STREAMS",
						CAN_JOIN_GROUP: "CAN_JOIN_GROUP",
						CAN_JOIN_TOURNAMENT: "CAN_JOIN_TOURNAMENT",
						CAN_PLAYER_MATCH: "CAN_PLAYER_MATCH",
						CAN_SHARE_TOURNAMENT: "CAN_SHARE_TOURNAMENT",
						CAN_SWITCH_CONTEXT: "CAN_SWITCH_CONTEXT",
						CAN_SWITCH_NATIVE_GAME: "CAN_SWITCH_NATIVE_GAME",
						CAN_SWITCH_TO_SOLO_CONTEXT: "CAN_SWITCH_TO_SOLO_CONTEXT",
						CAN_USE_UNIFIED_SHARE_GENERIC_DIALOG: "can_use_unified_share_generic_dialog",
						COPLAY_CAN_LOAD_AR_EFFECT: "COPLAY_CAN_LOAD_AR_EFFECT",
						CREATE_EMBEDDED_VIDEO_PLAYER: "CREATE_EMBEDDED_VIDEO_PLAYER",
						CROSS_PLAY_TRACKING: "CROSS_PLAY_TRACKING",
						ECHO: "ECHO",
						ENTRYPOINT_DATA: "ENTRYPOINT_DATA",
						ERROR: "ERROR",
						FEATURE_AVAILABILITY: "FEATURE_AVAILABILITY",
						GET_ACCESS_TOKEN: "GET_ACCESS_TOKEN",
						GET_ARENAS: "GET_ARENAS",
						GET_CONNECTED_PLAYERS: "GET_CONNECTED_PLAYERS",
						GET_CONTEXT_PARTICIPANTS: "GET_CONTEXT_PARTICIPANTS",
						GET_DOES_CONTEXT_HAVE_FEEDBACK: "GET_DOES_CONTEXT_HAVE_FEEDBACK",
						GET_ENTRY_POINT: "GET_ENTRY_POINT",
						GET_ENTRY_POINT_VIDEO_ID: "GET_ENTRY_POINT_VIDEO_ID",
						GET_ENTRY_POINT_VIDEO_ID_ASYNC: "GET_ENTRY_POINT_VIDEO_ID_ASYNC",
						GET_GAMING_ARENA_PLUGIN_DATA: "GET_GAMING_ARENA_PLUGIN_DATA",
						GET_GAMING_SQUAD: "GET_GAMING_SQUAD",
						GET_GIANT_BOMB_DATA: "GET_GIANT_BOMB_DATA",
						GET_IS_CONTEXT_DISCOVERABLE: "GET_IS_CONTEXT_DISCOVERABLE",
						GET_IS_CONTEXT_PUBLIC: "GET_IS_CONTEXT_PUBLIC",
						GET_LIVE_MATCH_INFO: "GET_LIVE_MATCH_INFO",
						GET_LIVE_STREAMS: "GET_LIVE_STREAMS",
						GET_PLAYER_GAMING_SQUADS: "GET_PLAYER_GAMING_SQUADS",
						GET_PLAYER_STATS: "GET_PLAYER_STATS",
						GET_STREAMER_SCHEDULE_DATA: "GET_STREAMER_SCHEDULE_DATA",
						GET_TOURNAMENT_INFO: "GET_TOURNAMENT_INFO",
						GET_TOURNAMENTS: "GET_TOURNAMENTS",
						GET_USER_UNLOCKED_ACHIEVEMENTS: "GET_USER_UNLOCKED_ACHIEVEMENTS",
						HEARTBEAT: "HEARTBEAT",
						HIGH_AD_RATE: "HIGH_AD_RATE",
						INCREMENT_PLAYER_STATS: "INCREMENT_PLAYER_STATS",
						JOIN_ROOM: "JOIN_ROOM",
						LEADERBOARD_FETCH: "LEADERBOARD_FETCH",
						LEADERBOARD_OPERATION: "LEADERBOARD_OPERATION",
						LEADERBOARD_UPDATE: "LEADERBOARD_UPDATE",
						LOG_PLUGIN_CUSTOM_EVENT: "LOG_PLUGIN_CUSTOM_EVENT",
						OFF_PLATFORM_CONTEXT_UPDATE: "OFF_PLATFORM_CONTEXT_UPDATE",
						PAYMENTS_CANCEL_SUBSCRIPTION: "PAYMENTS_CANCEL_SUBSCRIPTION",
						PAYMENTS_FETCH_SUBSCRIPTIONS: "PAYMENTS_FETCH_SUBSCRIPTIONS",
						PLATFORM_INIT: "PLATFORM_INIT",
						PLAYER_CAN_SUBSCRIBE_GAME_BOT: "PLAYER_CAN_SUBSCRIBE_GAME_BOT",
						PLAYER_IS_SUBSCRIBED_GAME_BOT: "PLAYER_IS_SUBSCRIBED_GAME_BOT",
						POST_SESSION_SCORE: "POST_SESSION_SCORE",
						POST_TOURNAMENT_SCORE: "POST_TOURNAMENT_SCORE",
						POST_USER_ACHIEVEMENT: "POST_USER_ACHIEVEMENT",
						QE_LOG_EXPOSURE: "QE_LOG_EXPOSURE",
						QE_PARAM_NO_EXPOSURE_FETCH: "QE_PARAM_NO_EXPOSURE_FETCH",
						RECORD_CAN_CREATE_SHORTCUT: "RECORD_CAN_CREATE_SHORTCUT",
						RECORD_GET_CONTEXT_INFO: "RECORD_GET_CONTEXT_INFO",
						RECORD_GET_ENTRYPOINT_DATA: "RECORD_GET_ENTRYPOINT_DATA",
						RECORD_GET_PLATFORM: "RECORD_GET_PLATFORM",
						RECORD_GET_PLAYER_ID: "RECORD_GET_PLAYER_ID",
						RECORD_LIVE_VIDEO_COMMENT_VIEW_GET_DISPLAY_RECT: "RECORD_LIVE_VIDEO_COMMENT_VIEW_GET_DISPLAY_RECT",
						RECORD_LIVE_VIDEO_COMMENT_VIEW_GET_STATE: "RECORD_LIVE_VIDEO_COMMENT_VIEW_GET_STATE",
						RECORD_LOAD_CAMERA_EFFECT: "RECORD_LOAD_CAMERA_EFFECT",
						RECORD_MATCH_PLAYER_ASYNC_PROMISE_RESULT: "RECORD_MATCH_PLAYER_ASYNC_PROMISE_RESULT",
						RECORD_SCREENSHOT_PROVIDER: "RECORD_SCREENSHOT_PROVIDER",
						RECORD_VIDEO_PLAYER_CREATE: "RECORD_VIDEO_PLAYER_CREATE",
						RECORD_VIDEO_PLAYER_GET_ORIGINAL_DIMENSIONS: "RECORD_VIDEO_PLAYER_GET_ORIGINAL_DIMENSIONS",
						SAVE_HIGHLIGHT: "SAVE_HIGHLIGHT",
						SDK_EVENT: "SDK_EVENT",
						SET_PLAYER_STATS: "SET_PLAYER_STATS",
						STORE_SENDER_INFO: "STORE_SENDER_INFO",
						SWITCH_GAME: "SWITCH_GAME",
						UPDATE: "UPDATE"
					});
					f["default"] = a
				}), 66);
				__d("fbinstant/common/rateLimiter", [], (function(a, b, c, d, e, f) {
					"use strict";
					a = function() {
						function a(a, b) {
							var c = this;
							this.$4 = function() {
								c.$1 = 0
							};
							this.$2 = a;
							this.$1 = 0;
							b != null && (this.$3 = window.setInterval(this.$4, b))
						}
						var b = a.prototype;
						b.check = function() {
							return this.$1 < this.$2
						};
						b.bump = function() {
							if(this.check()) {
								this.$1 += 1;
								return !0
							}
							return !1
						};
						return a
					}();
					f["default"] = a
				}), 66);
				__d("fbinstant/common/adLimiter", ["InstantGamesPassThroughRequestType", "fbinstant/common/adType", "fbinstant/common/rateLimiter"], (function(a, b, c, d, e, f, g) {
					"use strict";
					a = function() {
						function a(b) {
							this.$2 = b;
							this.$1 = (b = {}, b[c("fbinstant/common/adType").INTERSTITIAL] = new(c("fbinstant/common/rateLimiter"))(a.RATE_LIMIT_AMOUNT, a.RATE_LIMIT_PERIOD), b[c("fbinstant/common/adType").REWARDED_VIDEO] = new(c("fbinstant/common/rateLimiter"))(a.RATE_LIMIT_AMOUNT, a.RATE_LIMIT_PERIOD), b[c("fbinstant/common/adType").REWARDED_INTERSTITIAL] = new(c("fbinstant/common/rateLimiter"))(a.RATE_LIMIT_AMOUNT, a.RATE_LIMIT_PERIOD), b)
						}
						var b = a.prototype;
						b.canShowAd = function(a) {
							var b = this.$3(a);
							b && this.$2.sendPassThroughAsync(c("InstantGamesPassThroughRequestType").HIGH_AD_RATE, {});
							return a === c("fbinstant/common/adType").REWARDED_VIDEO || a === c("fbinstant/common/adType").REWARDED_INTERSTITIAL ? !0 : !b
						};
						b.markAdShown = function(a) {
							this.$1[a] && this.$1[a].bump()
						};
						b.$3 = function(a) {
							return this.$1[a] ? !this.$1[a].check() : !1
						};
						return a
					}();
					a.RATE_LIMIT_AMOUNT = 1;
					a.RATE_LIMIT_PERIOD = 3e4;
					g["default"] = a
				}), 98);
				__d("AppEventField", [], (function(a, b, c, d, e, f) {
					e.exports = {
						ANALYTICS_PARTNER_APP_ID: "_analyticsPartnerAppid",
						APP_USER_ID: "_app_user_id",
						APP_VERSION: "_appVersion",
						EVENT_NAME: "_eventName",
						EVENT_NAME_MD5: "_eventName_md5",
						FB_CURRENCY: "_currency",
						IMPLICITLY_LOGGED: "_implicitlyLogged",
						IN_BACKGROUND: "_inBackground",
						IS_TIMED_EVENT: "_isTimedEvent",
						LOG_TIME: "_logTime",
						ORDER_ID: "fb_order_id",
						SESSION_ID: "_session_id",
						UI: "_ui",
						VALUE_TO_SUM: "_valueToSum",
						VALUE_TO_UPDATE: "_valueToUpdate",
						EVENT_NAME_BEFORE_REMAPPED: "_event_name_before_remapped",
						IS_CODELESS: "_is_fb_codeless",
						IS_SUGGESTED_EVENT: "_is_suggested_event",
						IS_REFERRED_PIXEL_EVENT: "_fb_pixel_referral_id",
						FB_PIXEL_PARAMETER: "fb_pixel_id",
						TRACE_ID: "trace_id",
						USER_AGENT: "user_agent",
						SUBSCRIPTION_ID: "subscription_id",
						SUBSCRIPTION_SID: "subscription_sid",
						PREDICTED_LTV: "predicted_ltv",
						BACKEND_INFERRED: "_backendInferred",
						ANALYTICS_TRACE: "_analyticsTrace",
						IP_ADDRESS: "ip_address",
						EVENT_ID: "event_id",
						RESTRICTED_PARAMS: "_restrictedParams",
						ON_DEVICE_PARAMS: "_onDeviceParams",
						PURCHASE_VALID_RESULT_TYPE: "purchase_valid_result_type",
						CORE_LIB_INCLUDED: "core_lib_included",
						LOGIN_LIB_INCLUDED: "login_lib_included",
						SHARE_LIB_INCLUDED: "share_lib_included",
						PLACE_LIB_INCLUDED: "place_lib_included",
						MESSENGER_LIB_INCLUDED: "messenger_lib_included",
						APPLINKS_LIB_INCLUDED: "applinks_lib_included",
						MARKETING_LIB_INCLUDED: "marketing_lib_included",
						CODELESS_DEBUG_ACTION: "_codeless_action",
						MARKETING_LIB_INITIALIZED: "sdk_initialized",
						BILLING_CLIENT_LIB_INCLUDED: "billing_client_lib_included",
						BILLING_SERVICE_LIB_INCLUDED: "billing_service_lib_included",
						USER_DATA_KEYS: "user_data_keys",
						DEVICE_PUSH_TOKEN: "device_push_token",
						FB_MOBILE_PCKG_FP: "fb_mobile_pckg_fp",
						FB_MOBILE_APP_CERT_HASH: "fb_mobile_app_cert_hash",
						ORIGINAL_EVENT_NAME: "original_event_name",
						APP_EVENT_SEPARABLE_ID: "app_event_user_separable_id_DO_NOT_USE",
						ENCRYPTED_APP_EVENT_SEPARABLE_ID: "encrypted_app_event_user_separable_id_DO_NOT_USE",
						AGGREGATE_ID: "_aggregate_id",
						ANONYMOUS_ID: "_anonymous_id",
						COUNT: "$aggr.count"
					}
				}), null);
				__d("FBEventsParamList", [], (function(a, b, c, d, e, f) {
					"use strict";
					var g = "deep",
						h = "shallow";
					a = function() {
						function a() {
							this.list = []
						}
						var b = a.prototype;
						b.append = function(a, b) {
							this.$1(encodeURIComponent(a), b, g)
						};
						b.each = function(a) {
							var b = this.list;
							for(var c = 0, d = b.length; c < d; c++) a(b[c][0], b[c][1])
						};
						b.toQueryString = function() {
							var a = [];
							this.each(function(b, c) {
								a.push(b + "=" + encodeURIComponent(c))
							});
							return a.join("&")
						};
						b.$1 = function(a, b, c) {
							Object(b) !== b ? this.$2(a, b) : c === g ? this.$3(a, b) : this.$2(a, i(b))
						};
						b.$2 = function(a, b) {
							b != null && this.list.push([a, b])
						};
						b.$3 = function(a, b) {
							for(var c in b)
								if(Object.prototype.hasOwnProperty.call(b, c)) {
									var d = a + "[" + encodeURIComponent(c) + "]";
									this.$1(d, b[c], h)
								}
						};
						return a
					}();

					function i(a) {
						if(typeof JSON === "undefined" || JSON === null || !ES("JSON", "stringify", !1)) return Object.prototype.toString.call(a);
						else return ES("JSON", "stringify", !1, a)
					}
					f["default"] = a
				}), 66);
				__d("fbinstant/common/postEvent", [], (function(a, b, c, d, e, f) {
					"use strict";
					a = function(a, b) {
						var c = new XMLHttpRequest();
						c.open("POST", a);
						c.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
						c.send(b.toQueryString())
					};
					b = a;
					f["default"] = b
				}), 66);
				__d("fbinstant/common/analytics", ["AppEventField", "FBEventsParamList", "fbinstant/common/errorCode", "fbinstant/common/getUrlParam", "fbinstant/common/postEvent"], (function(a, b, c, d, e, f, g) {
					"use strict";
					a = function() {
						function a() {
							this.$1 = "WAITING", this.$5 = [], this.$2 = null, this.$3 = /^apps-(\d+)\..*\.fbsbx\.com$/i
						}
						var b = a.prototype;
						b.init = function(a, b) {
							this.$2 = a;
							this.$4 = b;
							this.$6 = this.$7();
							this.$2 == null && (this.$2 = this.$8());
							if(this.$2 == null) {
								this.$1 = "FAILED";
								return
							}
							this.$9();
							this.$1 = "DONE"
						};
						b.logEvent = function(a, b, d) {
							a = {
								eventName: a,
								valueToSum: b,
								parameters: d
							};
							if(this.$1 === "WAITING") {
								this.$5.push(a);
								return null
							} else if(this.$1 === "DONE") return this.$10([a]);
							else return {
								code: c("fbinstant/common/errorCode").ANALYTICS_POST_EXCEPTION,
								message: "Failed to log analytics event"
							}
						};
						b.logAPICall = function(a) {
							return null
						};
						b.logBeginAsyncAPICall = function(a) {
							return this.logAPICall(a)
						};
						b.logResolveAsyncAPICall = function(a) {
							return this.logAPICall(a)
						};
						b.logRejectAsyncAPICall = function(a, b) {
							return this.logAPICall(a)
						};
						b.$11 = function() {
							return this.$2 == null ? null : "https://graph.facebook.com/" + this.$2 + "/activities"
						};
						b.$12 = function(a) {
							var b = babelHelpers["extends"]({}, a.parameters, {
								app_id: this.$2
							});
							this.$6 != null && (b[c("AppEventField").APP_VERSION] = this.$6);
							b[c("AppEventField").EVENT_NAME] = a.eventName;
							b[c("AppEventField").VALUE_TO_SUM] = a.valueToSum;
							return ES("JSON", "stringify", !1, b)
						};
						b.$10 = function(a) {
							var b = this;
							if(this.$2 == null) return {
								code: c("fbinstant/common/errorCode").ANALYTICS_POST_EXCEPTION,
								message: "Analytics failed to resolve the application ID."
							};
							try {
								a = a.map(function(a) {
									return b.$12(a)
								});
								var d = new(c("FBEventsParamList"))();
								d.append("event", "CUSTOM_APP_EVENTS");
								d.append("extinfo", ["ig1"]);
								d.append("user_id", this.$4);
								d.append("user_id_type", "INSTANT_GAMES_PLAYER_ID");
								d.append("advertiser_tracking_enabled", 1);
								d.append("application_tracking_enabled", 1);
								d.append("data_processing_options", "[]");
								d.append("custom_events", a);
								a = this.$11();
								if(a == null) return {
									code: c("fbinstant/common/errorCode").ANALYTICS_POST_EXCEPTION,
									message: "Unable to use the analytics endpoint"
								};
								c("fbinstant/common/postEvent")(a, d)
							} catch(a) {
								return {
									code: c("fbinstant/common/errorCode").ANALYTICS_POST_EXCEPTION,
									message: a.message
								}
							}
							return null
						};
						b.$9 = function() {
							if(this.$5.length === 0) return null;
							this.$10(this.$5);
							this.$5 = []
						};
						b.$8 = function() {
							var a = window.location.hostname;
							if(a) {
								a = this.$3.exec(a);
								if(a && a.length && a.length > 1 && a[1]) return a[1]
							}
							return null
						};
						b.$7 = function() {
							var a = c("fbinstant/common/getUrlParam")("version");
							return a == null ? null : parseInt(a, 10) || null
						};
						return a
					}();
					g["default"] = a
				}), 98);
				__d("fbinstant/common/contextType", [], (function(a, b, c, d, e, f) {
					"use strict";
					a = {
						GENERIC: "GENERIC",
						GROUP: "GROUP",
						POST: "POST",
						SOLO: "SOLO",
						THREAD: "THREAD",
						LINK: "LINK"
					};
					f["default"] = a
				}), 66);
				__d("fbinstant/common/event", [], (function(a, b, c, d, e, f) {
					"use strict";
					a = function() {
						function a() {
							var a = this;
							this.triggerSubscribers = function(b) {
								var c = a.$1.slice();
								for(var c = c, d = Array.isArray(c), e = 0, c = d ? c : c[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
									var f;
									if(d) {
										if(e >= c.length) break;
										f = c[e++]
									} else {
										e = c.next();
										if(e.done) break;
										f = e.value
									}
									f = f;
									f(b)
								}
							};
							this.$1 = []
						}
						var b = a.prototype;
						b.on = function(a) {
							this.$1.push(a)
						};
						b.off = function(a) {
							var b = this.$1.length;
							for(var c = 0; c < b; c++)
								if(this.$1[c] === a) {
									this.$1.splice(c, 1);
									return
								}
						};
						b.unbind = function() {
							this.$1 = []
						};
						return a
					}();
					f["default"] = a
				}), 66);
				__d("fbinstant/common/gameContext", ["fbinstant/common/contextType"], (function(a, b, c, d, e, f, g) {
					"use strict";
					a = function() {
						function a(a) {
							this.$4 = null;
							var b = a.id,
								d = a.type;
							a = a.size;
							if(!b || !d) {
								this.$1 = null;
								this.$2 = null;
								this.$3 = c("fbinstant/common/contextType").SOLO;
								return
							}
							d === c("fbinstant/common/contextType").SOLO ? this.$3 = c("fbinstant/common/contextType").THREAD : d === c("fbinstant/common/contextType").LINK ? this.$3 = c("fbinstant/common/contextType").THREAD : d === c("fbinstant/common/contextType").GENERIC ? this.$3 = c("fbinstant/common/contextType").THREAD : this.$3 = d;
							this.$1 = b.toString();
							this.$2 = a || null
						}
						var b = a.prototype;
						b.getID = function() {
							return this.$1
						};
						b.getType = function() {
							return this.$3
						};
						b.getSize = function() {
							return this.$2
						};
						b.getContextSizeResponse = function() {
							return this.$4
						};
						b.setContextSizeResponse = function(a) {
							this.$4 = a
						};
						return a
					}();
					g["default"] = a
				}), 98);
				__d("fbinstant/common/getJSONEntrypointData", [], (function(a, b, c, d, e, f) {
					"use strict";

					function a(a) {
						try {
							return ES("JSON", "parse", !1, a)
						} catch(b) {
							try {
								a = decodeURIComponent(a);
								return ES("JSON", "parse", !1, a)
							} catch(a) {
								return null
							}
						}
					}
					f["default"] = a
				}), 66);
				__d("fbinstant/common/supportedFeaturesManager", [], (function(a, b, c, d, e, f) {
					"use strict";
					a = function() {
						function a() {
							this.$1 = new Set()
						}
						var b = a.prototype;
						b.setSupported = function(a) {
							this.$1 = new Set(a)
						};
						b.isSupported = function(a) {
							return this.$1.has(a) ? !0 : !1
						};
						return a
					}();
					b = new a();
					f["default"] = b
				}), 66);
				__d("fbinstant/common/supportedMessagesManager", ["InstantGamesSDKMessages"], (function(a, b, c, d, e, f, g) {
					"use strict";
					var h = new Set([c("InstantGamesSDKMessages").INITIALIZE_ASYNC, c("InstantGamesSDKMessages").ON_BEGIN_LOAD, c("InstantGamesSDKMessages").ON_CONSOLE, c("InstantGamesSDKMessages").ON_PROGRESS_LOAD, c("InstantGamesSDKMessages").ON_GAME_READY, c("InstantGamesSDKMessages").ON_SCORE, c("InstantGamesSDKMessages").ON_SCREENSHOT, c("InstantGamesSDKMessages").ON_PICTURE, c("InstantGamesSDKMessages").ON_END_GAME, c("InstantGamesSDKMessages").GET_PLAYER_DATA_ASYNC, c("InstantGamesSDKMessages").SET_PLAYER_DATA_ASYNC, c("InstantGamesSDKMessages").CG_RETRY, c("InstantGamesSDKMessages").SET_CLIPBOARD_TEXT_ASYNC, c("InstantGamesSDKMessages").GET_CLIPBOARD_TEXT_ASYNC]);
					a = function() {
						function a() {
							this.$1 = new Set()
						}
						var b = a.prototype;
						b.setSupported = function(a) {
							this.$1 = new Set(a)
						};
						b.isSupported = function(a) {
							return h.has(a) ? !0 : this.$1.has(a)
						};
						return a
					}();
					b = new a();
					g["default"] = b
				}), 98);
				__d("fbinstant/releases/6.3/entryPoint.6.3", ["Promise"], (function(a, b, c, d, e, f) {
					"use strict";
					a = function() {
						function a(a, b) {
							this.$3 = null, this.$2 = a, this.$1 = b
						}
						var c = a.prototype;
						c.getData = function() {
							return this.$1
						};
						c.getSource = function() {
							return this.$2
						};
						c.getCanonicalEntryPointAsync = function(a) {
							var c = this;
							return this.$3 != null ? b("Promise").resolve(this.$3) : a.sendPassThroughAsync("GET_ENTRY_POINT", {
								source: this.$2
							}).then(function(a) {
								c.$3 = a.entry_point;
								return a.entry_point
							})
						};
						return a
					}();
					e.exports = a
				}), null);
				__d("fbinstant/common/eventBatcher", [], (function(a, b, c, d, e, f) {
					"use strict";
					var g = 5e3;
					a = function() {
						function a(a) {
							var b = this;
							this.$4 = function() {
								b.$3(b.$2), b.$2 = []
							};
							this.$3 = a;
							this.$2 = [];
							this.$1 = null
						}
						var b = a.prototype;
						b.startInterval = function(a) {
							a === void 0 && (a = g), this.$1 !== null && this.stopInterval(), this.$1 = window.setInterval(this.$4, a)
						};
						b.stopInterval = function() {
							if(!this.$1) return;
							window.clearInterval(this.$1);
							this.$1 = null
						};
						b.logEvent = function(a) {
							this.$2.push(a)
						};
						return a
					}();
					f["default"] = a
				}), 66);
				__d("fbinstant/releases/6.3/internalEventLogger.6.3", ["fbinstant/common/eventBatcher"], (function(a, b, c, d, e, f) {
					"use strict";
					a = function() {
						function a() {
							var a = this;
							this.$3 = function(b) {
								var c = a.$2;
								if(b.length <= 0 || !c) return;
								b = a.$4(b);
								c.sendPassThroughAsync("SDK_EVENT", {
									events: b
								})
							};
							this.$1 = new(b("fbinstant/common/eventBatcher"))(this.$3)
						}
						var c = a.prototype;
						c.initialize = function(a) {
							this.$2 = a, this.$1.startInterval()
						};
						c.logEvent = function(a, b, c) {
							this.$1.logEvent({
								type: a,
								data: babelHelpers["extends"]({}, c, {
									contextID: b.getContext().getID()
								})
							})
						};
						c.$4 = function(a) {
							var b = {};
							for(var c = 0; c < a.length; c++) {
								var d = a[c];
								Object.prototype.hasOwnProperty.call(b, d.data.key) || (b[d.data.key] = babelHelpers["extends"]({}, d), b[d.data.key].data.count = 0);
								b[d.data.key].data.count += 1
							}
							d = [];
							for(c in b) d.push(b[c]);
							return d
						};
						return a
					}();
					e.exports = a
				}), null);
				/**
				 * License: https://www.facebook.com/legal/license/A4tfXiHOGrs/
				 */
				__d("Alea", [], (function(a, b, c, d, e, f) {
					function g() {
						var a = 4022871197,
							b = function(b) {
								b = b.toString();
								for(var c = 0; c < b.length; c++) {
									a += b.charCodeAt(c);
									var d = .02519603282416938 * a;
									a = d >>> 0;
									d -= a;
									d *= a;
									a = d >>> 0;
									d -= a;
									a += d * 4294967296
								}
								return(a >>> 0) * 23283064365386963e-26
							};
						b.version = "Mash 0.9";
						return b
					}

					function a() {
						var a = 0,
							b = 0,
							c = 0,
							d = 1;
						for(var e = arguments.length, f = new Array(e), h = 0; h < e; h++) f[h] = arguments[h];
						var i = f.length > 0 ? f : [new Date()],
							j = g();
						a = j(" ");
						b = j(" ");
						c = j(" ");
						for(var k = 0; k < i.length; k++) a -= j(i[k]), a < 0 && (a += 1), b -= j(i[k]), b < 0 && (b += 1), c -= j(i[k]), c < 0 && (c += 1);
						j = null;
						var l = function() {
							var e = 2091639 * a + d * 23283064365386963e-26;
							a = b;
							b = c;
							c = e - (d = e | 0);
							return c
						};
						l.version = "Alea 0.9";
						l.args = i;
						return l
					}
					f["default"] = a
				}), 66);
				__d("fbinstant/common/messageLocksMap", ["InstantGamesSDKMessages"], (function(a, b, c, d, e, f, g) {
					"use strict";
					a = [c("InstantGamesSDKMessages").CONTEXT_CHOOSE_ASYNC, c("InstantGamesSDKMessages").CONTEXT_CREATE_ASYNC, c("InstantGamesSDKMessages").CONTEXT_SWITCH_ASYNC, c("InstantGamesSDKMessages").CREATE_SHORTCUT_ASYNC, c("InstantGamesSDKMessages").SHARE_ASYNC, c("InstantGamesSDKMessages").SHOW_AD_ASYNC, c("InstantGamesSDKMessages").SHOW_GENERIC_DIALOG_ASYNC, c("InstantGamesSDKMessages").SHOW_GENERIC_DIALOG_ASYNC_IOS, c("InstantGamesSDKMessages").SHARE_ASYNC];
					b = [c("InstantGamesSDKMessages").FLUSH_PLAYER_DATA_ASYNC, c("InstantGamesSDKMessages").SET_PLAYER_DATA_ASYNC];
					d = {};
					for(e = 0; e < a.length; e++) {
						f = a[e];
						d[f] = a
					}
					d[c("InstantGamesSDKMessages").FLUSH_PLAYER_DATA_ASYNC] = b;
					d[c("InstantGamesSDKMessages").CONTEXT_MATCH_CREATE_ASYNC] = [c("InstantGamesSDKMessages").CONTEXT_MATCH_CREATE_ASYNC];
					f = d;
					g["default"] = f
				}), 98);
				__d("fbinstant/common/exclusiveMessageManager", ["invariant", "InstantGamesErrorCode", "fbinstant/common/messageLocksMap"], (function(a, b, c, d, e, f, g, h) {
					"use strict";
					a = function() {
						function a() {
							this.$1 = new Map()
						}
						var b = a.prototype;
						b.isLocked = function(a) {
							return this.$1.has(a)
						};
						b.lockOrThrow = function(a) {
							if(this.isLocked(a)) {
								var b = this.$1.get(a);
								return this.$2(String(b))
							}
							b = c("fbinstant/common/messageLocksMap")[a];
							if(!b) return Promise.resolve();
							for(var d = b, e = Array.isArray(d), f = 0, d = e ? d : d[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
								var g;
								if(e) {
									if(f >= d.length) break;
									g = d[f++]
								} else {
									f = d.next();
									if(f.done) break;
									g = f.value
								}
								g = g;
								if(this.$1.has(g)) {
									g = this.$1.get(g);
									g !== void 0 || h(0, 1560);
									return this.$2(g)
								}
							}
							for(g = b, f = Array.isArray(g), e = 0, g = f ? g : g[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
								if(f) {
									if(e >= g.length) break;
									d = g[e++]
								} else {
									e = g.next();
									if(e.done) break;
									d = e.value
								}
								b = d;
								this.$1.set(b, a)
							}
							return Promise.resolve()
						};
						b.release = function(a) {
							a = c("fbinstant/common/messageLocksMap")[a];
							if(!a) return;
							for(var a = a, b = Array.isArray(a), d = 0, a = b ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
								var e;
								if(b) {
									if(d >= a.length) break;
									e = a[d++]
								} else {
									d = a.next();
									if(d.done) break;
									e = d.value
								}
								e = e;
								this.$1["delete"](e)
							}
						};
						b.reset_TESTINGONLY = function() {
							this.$1 = new Map()
						};
						b.$2 = function(a) {
							return Promise.reject({
								code: c("InstantGamesErrorCode").PENDING_REQUEST,
								message: "There is currently a pending request for locking message: " + a
							})
						};
						return a
					}();
					b = new a();
					g["default"] = b
				}), 98);
				__d("fbinstant/releases/6.3/platform.6.3", ["fbinstant/common/platform"], (function(a, b, c, d, e, f) {
					"use strict";

					function a() {
						if(window.IsQuicksilverReactNativeIOS || window.webkit) return b("fbinstant/common/platform").IOS;
						else if(window.IsQuicksilverReactNativeAndroid || window.QuicksilverAndroid) return b("fbinstant/common/platform").ANDROID;
						else if(window.IsMobileWeb) return b("fbinstant/common/platform").MOBILE_WEB;
						else return b("fbinstant/common/platform").WEB
					}
					e.exports = {
						getPlatform: a
					}
				}), null);
				__d("fbinstant/releases/6.3/messageSender.6.3", ["Alea", "InstantGamesSDKMessages", "Promise", "fbinstant/common/apiError", "fbinstant/common/errorCode", "fbinstant/common/event", "fbinstant/common/exclusiveMessageManager", "fbinstant/common/platform", "fbinstant/common/supportedMessagesManager", "fbinstant/releases/6.3/platform.6.3"], (function(a, b, c, d, e, f) {
					"use strict";
					var g = b("Alea")(),
						h = 4294967296;
					a = function() {
						function a(a) {
							this.$4 = a, this.$1 = {}, this.$2 = new(b("fbinstant/common/event"))(), this.$3 = new(b("fbinstant/common/event"))()
						}
						var c = a.prototype;
						c.initialize = function(a) {
							var b = this;
							this.$6 = a.source;
							this.$5 = a.sender;
							this.$2.on(function(a) {
								b.$7(a, !0)
							});
							this.$3.on(function(a) {
								b.$7(a, !1)
							});
							a = new RegExp("[?&]IsMobileWeb(=([^&#]*)|&|#|$)", "i");
							a = a.exec(window.location.href);
							if(!a || !a[2]) return;
							window.IsMobileWeb = parseInt(a[2], 10) === 1
						};
						c.getResolvePromiseEvent = function() {
							return this.$2
						};
						c.getRejectPromiseEvent = function() {
							return this.$3
						};
						c.send = function(a, c) {
							if(!this.$6 || !this.$5 || !b("fbinstant/common/supportedMessagesManager").isSupported(a)) return;
							this.$5.postMessage(this.$8({
								type: a,
								content: c,
								destination: this.$6
							}), "*")
						};
						c.sendAsync = function(a, c) {
							var d = this;
							return !b("fbinstant/common/supportedMessagesManager").isSupported(a) ? b("Promise").reject(new(b("fbinstant/common/apiError"))({
								code: b("fbinstant/common/errorCode").CLIENT_UNSUPPORTED_OPERATION,
								message: "Client does not support the message: " + a
							})) : b("fbinstant/common/exclusiveMessageManager").lockOrThrow(a).then(function() {
								return d.$9(a, c).then(function(c) {
									b("fbinstant/common/exclusiveMessageManager").release(a);
									return c
								})["catch"](function(c) {
									b("fbinstant/common/exclusiveMessageManager").release(a);
									throw c
								})
							})["catch"](function(a) {
								throw new(b("fbinstant/common/apiError"))(a)
							})
						};
						c.showGenericDialogAsync = function(a, c) {
							c = ES("JSON", "stringify", !1, c || {});
							c = {
								data: c,
								request: a,
								sdkVersion: this.$4
							};
							a = b("fbinstant/releases/6.3/platform.6.3").getPlatform() === b("fbinstant/common/platform").IOS ? b("InstantGamesSDKMessages").SHOW_GENERIC_DIALOG_ASYNC_IOS : b("InstantGamesSDKMessages").SHOW_GENERIC_DIALOG_ASYNC;
							return this.sendAsync(a, c).then(function(a) {
								if(!a) return b("Promise").reject(new(b("fbinstant/common/apiError"))({
									code: b("fbinstant/common/errorCode").UNKNOWN,
									message: "No response data provided"
								}));
								if(typeof a === "object" && !a.errorCode) return a;
								a = ES("JSON", "parse", !1, a);
								var c = a.data,
									d = a.errorCode;
								a = a.errorMessage;
								return d ? b("Promise").reject(new(b("fbinstant/common/apiError"))({
									code: d,
									message: a || ""
								})) : c
							})
						};
						c.sendPassThroughAsync = function(a, c) {
							c = ES("JSON", "stringify", !1, c || {});
							c = {
								data: c,
								request: a,
								sdkVersion: this.$4
							};
							return this.sendAsync(b("InstantGamesSDKMessages").SEND_PASS_THROUGH_ASYNC, c).then(function(a) {
								if(!a) return b("Promise").reject(new(b("fbinstant/common/apiError"))({
									code: b("fbinstant/common/errorCode").UNKNOWN,
									message: "No response data provided"
								}));
								a = ES("JSON", "parse", !1, a);
								var c = a.data,
									d = a.errorCode;
								a = a.errorMessage;
								return d ? b("Promise").reject(new(b("fbinstant/common/apiError"))({
									code: d,
									message: a || ""
								})) : c
							})
						};
						c.$8 = function(a) {
							switch(this.$6) {
								case "Android":
								case "quicksilver-rn":
									return ES("JSON", "stringify", !1, a)
							}
							return a
						};
						c.$10 = function(a) {
							return a + "_" + Math.floor(g() * h)
						};
						c.$11 = function(a, b, c) {
							this.$1[a] = {
								resolve: b,
								reject: c
							}
						};
						c.$7 = function(a, c) {
							var d = a.promiseID;
							if(!d || !this.$1[d]) return;
							var e = this.$1[d];
							if(c && e.resolve) e.resolve(a.data);
							else if(!c && e.reject) {
								c = a.data;
								!c ? c = new(b("fbinstant/common/apiError"))({
									message: ""
								}) : c = new(b("fbinstant/common/apiError"))({
									code: c.code || b("fbinstant/common/errorCode").UNKNOWN,
									message: c.message || ""
								});
								e.reject(c)
							}
							delete this.$1[d]
						};
						c.$9 = function(a, c) {
							var d = this;
							return new(b("Promise"))(function(b, e) {
								var f = d.$10(a);
								d.$11(f, b, e);
								b = c || {};
								b.promiseID = f;
								d.send(a, b)
							})
						};
						return a
					}();
					e.exports = a
				}), null);
				__d("fbinstant/releases/6.3/paymentsState.6.3", ["Promise", "fbinstant/common/event"], (function(a, b, c, d, e, f) {
					"use strict";
					a = function() {
						function a() {
							var a = this;
							this.$3 = !1;
							this.$1 = new(b("fbinstant/common/event"))();
							this.$2 = new(b("Promise"))(function(b, c) {
								a.$1.on(function() {
									a.$3 = !0, b(), a.$1.unbind()
								})
							})
						}
						var c = a.prototype;
						c.getPaymentsInitializedEvent = function() {
							return this.$1
						};
						c.isClientReady = function() {
							return this.$3
						};
						c.onInitialized = function(a) {
							this.$2.then(a)
						};
						return a
					}();
					e.exports = a
				}), null);
				__d("fbinstant/releases/6.3/internalStates.6.3", ["InstantGamesGameState", "fbinstant/common/adLimiter", "fbinstant/common/analytics", "fbinstant/common/contextType", "fbinstant/common/event", "fbinstant/common/gameContext", "fbinstant/common/getJSONEntrypointData", "fbinstant/common/supportedFeaturesManager", "fbinstant/common/supportedMessagesManager", "fbinstant/releases/6.3/entryPoint.6.3", "fbinstant/releases/6.3/internalEventLogger.6.3", "fbinstant/releases/6.3/messageSender.6.3", "fbinstant/releases/6.3/paymentsState.6.3"], (function(a, b, c, d, e, f, g) {
					"use strict";
					a = function() {
						function a() {
							this.$28 = "fbinstant.6.3".substring("fbinstant.".length), this.$17 = new(c("fbinstant/releases/6.3/messageSender.6.3"))(this.$28), this.$1 = new(c("fbinstant/common/adLimiter"))(this.$17), this.$2 = new(c("fbinstant/common/analytics"))(), this.$3 = new(c("fbinstant/common/event"))(), this.$4 = null, this.$5 = null, this.$6 = new(c("fbinstant/common/gameContext"))({
								type: c("fbinstant/common/contextType").SOLO
							}), this.$7 = 0, this.$9 = new(c("fbinstant/releases/6.3/entryPoint.6.3"))(null, null), this.$10 = d("InstantGamesGameState").LOADING, this.$11 = new(c("fbinstant/common/event"))(), this.$12 = new(c("fbinstant/common/event"))(), this.$13 = !1, this.$14 = new(c("fbinstant/releases/6.3/internalEventLogger.6.3"))(), this.$15 = null, this.$16 = null, this.$18 = new(c("fbinstant/common/event"))(), this.$21 = new(c("fbinstant/releases/6.3/paymentsState.6.3"))(), this.$22 = null, this.$23 = null, this.$24 = null, this.$25 = null, this.$19 = new(c("fbinstant/common/event"))(), this.$20 = new(c("fbinstant/common/event"))(), this.$26 = new(c("fbinstant/common/event"))(), this.$27 = new(c("fbinstant/common/event"))(), this.$8 = null, this.$29 = !1, this.$30 = null
						}
						var b = a.prototype;
						b.initialize = function(a) {
							var b = this;
							a.appID && this.setAppID(a.appID);
							a.customUpdateID && this.setCustomUpdateID(a.customUpdateID);
							a.supportedMessages && Array.isArray(a.supportedMessages) && c("fbinstant/common/supportedMessagesManager").setSupported(a.supportedMessages);
							a.supportedFeatures && Array.isArray(a.supportedFeatures) && c("fbinstant/common/supportedFeaturesManager").setSupported(a.supportedFeatures);
							var d = null;
							if(a.entryPointData) {
								var e = c("fbinstant/common/getJSONEntrypointData")(a.entryPointData);
								e != null && (e.sender && e.data ? d = e.data : d = e)
							}
							e = a.entryPoint || null;
							this.updateEntryPoint(new(c("fbinstant/releases/6.3/entryPoint.6.3"))(e, d));
							this.updateContext(a);
							this.setInitialized();
							this.getAnalyticsLogEvent().on(function(a) {
								var c = a.eventName,
									d = a.valueToSum;
								a = a.parameters;
								if(!c) return;
								b.getAnalytics().logEvent(c, d != null ? d : null, a || null)
							});
							this.getInternalEventLogger().initialize(this.getMessageSender())
						};
						b.updateContext = function(a) {
							if(!a.contextType) return;
							this.$6 = new(c("fbinstant/common/gameContext"))({
								id: a.contextID,
								size: a.contextSize,
								type: a.contextType.toUpperCase()
							});
							this.getMessageSender().sendPassThroughAsync("CROSS_PLAY_TRACKING", {
								context_token_id: this.getContext().getID()
							})
						};
						b.updateEntryPoint = function(a) {
							this.$9 = a
						};
						b.setAppID = function(a) {
							this.$4 = a
						};
						b.setLocale = function(a) {
							this.$15 = a
						};
						b.setCustomUpdateID = function(a) {
							this.$8 = a
						};
						b.setPlayerID = function(a) {
							this.$22 = a
						};
						b.setPlayerName = function(a) {
							this.$23 = a
						};
						b.setPlayerPhoto = function(a) {
							this.$24 = a
						};
						b.setInitialized = function() {
							this.$13 = !0
						};
						b.setLoadingProgress = function(a) {
							this.$7 = a
						};
						b.setGameState = function(a) {
							this.$10 = a
						};
						b.setConnectedPlayersPromise = function(a) {
							this.$5 = a
						};
						b.setMatchPlayerPromise = function(a) {
							this.$16 = a
						};
						b.setQEParams = function(a) {
							this.$25 = a
						};
						b.setShouldCallGraphApiDuringInitialization = function(a) {
							this.$29 = a
						};
						b.setGetEntryPointAsyncPromise = function(a) {
							this.$30 = a
						};
						b.getAnalytics = function() {
							return this.$2
						};
						b.getAppID = function() {
							return this.$4
						};
						b.getConnectedPlayersPromise = function() {
							return this.$5
						};
						b.getContext = function() {
							return this.$6
						};
						b.getCustomUpdateID = function() {
							return this.$8
						};
						b.getLoadingProgress = function() {
							return this.$7
						};
						b.getEntryPoint = function() {
							return this.$9
						};
						b.getGameState = function() {
							return this.$10
						};
						b.getGameStartEvent = function() {
							return this.$11
						};
						b.isInitialized = function() {
							return this.$13
						};
						b.getInternalEventLogger = function() {
							return this.$14
						};
						b.getLocale = function() {
							return this.$15
						};
						b.getMatchPlayerPromise = function() {
							return this.$16
						};
						b.getMessageSender = function() {
							return this.$17
						};
						b.getPaymentsState = function() {
							return this.$21
						};
						b.getPlayerID = function() {
							return this.$22
						};
						b.getPlayerName = function() {
							return this.$23
						};
						b.getPlayerPhoto = function() {
							return this.$24
						};
						b.getRestartEvent = function() {
							return this.$26
						};
						b.getPauseEvent = function() {
							return this.$18
						};
						b.getReceiveMessageEvent = function() {
							return this.$19
						};
						b.getReceiveStateUpdateEvent = function() {
							return this.$20
						};
						b.getResumeEvent = function() {
							return this.$27
						};
						b.getAnalyticsLogEvent = function() {
							return this.$3
						};
						b.getSdkVersion = function() {
							return this.$28
						};
						b.getQEParams = function() {
							return this.$25
						};
						b.getAdLimiter = function() {
							return this.$1
						};
						b.getGestureCommandEvent = function() {
							return this.$12
						};
						b.getShouldCallGraphApiDuringInitialization = function() {
							return this.$29
						};
						b.getEntryPointAsyncPromise = function() {
							return this.$30
						};
						return a
					}();
					f.exports = new a()
				}), 34);
				__d("fbinstant/releases/6.3/logger.6.3", ["fbinstant/releases/6.3/internalStates.6.3"], (function(a, b, c, d, e, f) {
					"use strict";

					function a(a, b) {
						return a.then(function(a) {
							h(b);
							return a
						})["catch"](function(a) {
							var c = a && a.code || null;
							g(b, c);
							throw a
						})
					}

					function c(a) {
						var c = b("fbinstant/releases/6.3/internalStates.6.3").getAnalytics();
						c.logAPICall(a);
						i(j(a, "api_call"), "API", {
							type: "api_call",
							name: a
						})
					}

					function d(a) {
						var c = b("fbinstant/releases/6.3/internalStates.6.3").getAnalytics();
						c.logBeginAsyncAPICall(a);
						i(j(a, "api_begin_async"), "API", {
							type: "api_begin_async",
							name: a
						})
					}

					function g(a, c) {
						var d = b("fbinstant/releases/6.3/internalStates.6.3").getAnalytics();
						d.logRejectAsyncAPICall(a, c);
						i(j(a, "api_reject_async", String(c)), "API", {
							type: "api_reject_async",
							name: a,
							code: c
						})
					}

					function h(a) {
						var c = b("fbinstant/releases/6.3/internalStates.6.3").getAnalytics();
						c.logResolveAsyncAPICall(a);
						i(j(a, "api_resolve_async"), "API", {
							type: "api_resolve_async",
							name: a
						})
					}

					function i(a, c, d) {
						d = babelHelpers["extends"]({}, d, {
							key: a,
							gameState: b("fbinstant/releases/6.3/internalStates.6.3").getGameState()
						});
						b("fbinstant/releases/6.3/internalStates.6.3").getInternalEventLogger().logEvent(c, b("fbinstant/releases/6.3/internalStates.6.3"), d)
					}

					function j(a, b, c) {
						c === void 0 && (c = null);
						return c != null ? a + "." + b + "." + c : a + "." + b
					}
					e.exports = {
						logAPICall: c,
						logBeginAsync: d,
						logAsyncResult: a,
						logReject: g,
						logResolve: h
					}
				}), null);
				__d("fbinstant/releases/6.3/ads.6.3", ["InstantGamesGameState", "InstantGamesSDKMessages", "Promise", "fbinstant/common/adType", "fbinstant/common/apiError", "fbinstant/common/errorCode", "fbinstant/common/validator", "fbinstant/releases/6.3/internalStates.6.3", "fbinstant/releases/6.3/logger.6.3"], (function(a, b, c, d, e, f) {
					"use strict";
					var g = function() {
						function a(a, b) {
							this.$1 = a, this.$2 = b
						}
						var c = a.prototype;
						c.getPlacementID = function() {
							return this.$1.placementID
						};
						c.loadAsync = function() {
							var a = "AdInstance_loadAsync";
							b("fbinstant/releases/6.3/logger.6.3").logBeginAsync(a);
							var c = b("fbinstant/releases/6.3/internalStates.6.3").getMessageSender().sendAsync(b("InstantGamesSDKMessages").LOAD_AD_ASYNC, {
								adInstanceID: this.$1.adInstanceID
							});
							return b("fbinstant/releases/6.3/logger.6.3").logAsyncResult(c, a).then(function() {})
						};
						c.showAsync = function() {
							var a = this,
								c = "AdInstance_showAsync";
							b("fbinstant/releases/6.3/logger.6.3").logBeginAsync(c);
							if(b("fbinstant/releases/6.3/internalStates.6.3").getGameState() !== b("InstantGamesGameState").PLAYING) {
								b("fbinstant/releases/6.3/logger.6.3").logReject(c, b("fbinstant/common/errorCode").INVALID_OPERATION);
								return b("Promise").reject(new(b("fbinstant/common/apiError"))({
									code: b("fbinstant/common/errorCode").INVALID_OPERATION,
									message: "Can not perform this operation before game start."
								}))
							}
							this.$2 === b("fbinstant/common/adType").INTERSTITIAL && b("fbinstant/releases/6.3/internalStates.6.3").getMessageSender().sendPassThroughAsync("QE_LOG_EXPOSURE", {
								qe_name: "IGSAC"
							});
							if(!b("fbinstant/releases/6.3/internalStates.6.3").getAdLimiter().canShowAd(this.$2)) {
								b("fbinstant/releases/6.3/logger.6.3").logReject(c, b("fbinstant/common/errorCode").RATE_LIMITED);
								return b("Promise").reject(new(b("fbinstant/common/apiError"))({
									code: b("fbinstant/common/errorCode").RATE_LIMITED,
									message: "Too many ads shown recently. Wait a bit before attempting to show more."
								}))
							}
							var d = b("fbinstant/releases/6.3/internalStates.6.3").getMessageSender().sendAsync(b("InstantGamesSDKMessages").SHOW_AD_ASYNC, {
								adInstanceID: this.$1.adInstanceID
							});
							return b("fbinstant/releases/6.3/logger.6.3").logAsyncResult(d, c).then(function() {
								b("fbinstant/releases/6.3/internalStates.6.3").getAdLimiter().markAdShown(a.$2)
							})
						};
						return a
					}();
					e.exports = {
						AdInstance: g,
						getInterstitialAdAsync: function(a) {
							return b("fbinstant/common/validator").validate(a, b("fbinstant/common/validator").string()).then(function() {
								return b("fbinstant/releases/6.3/internalStates.6.3").getMessageSender().sendAsync(b("InstantGamesSDKMessages").GET_INTERSTITIAL_AD_ASYNC, {
									placementID: a
								})
							}).then(function(a) {
								return new g(a, b("fbinstant/common/adType").INTERSTITIAL)
							})
						},
						getRewardedVideoAsync: function(a) {
							return b("fbinstant/common/validator").validate(a, b("fbinstant/common/validator").string()).then(function() {
								return b("fbinstant/releases/6.3/internalStates.6.3").getMessageSender().sendAsync(b("InstantGamesSDKMessages").GET_REWARDED_VIDEO_ASYNC, {
									placementID: a
								})
							}).then(function(a) {
								return new g(a, b("fbinstant/common/adType").REWARDED_VIDEO)
							})
						}
					}
				}), null);
				__d("fbinstant/releases/6.3/config.6.3", ["JSSDKFBInstantGraphAPIMigrationConfig"], (function(a, b, c, d, e, f, g) {
					"use strict";

					function a(a) {
						var b = h();
						return b == null ? !1 : a in b ? b[a] : !1
					}

					function h() {
						return c("JSSDKFBInstantGraphAPIMigrationConfig")
					}
					b = {
						shouldUseGraphAPI: a
					};
					g["default"] = b
				}), 98);
				__d("InstantGamesChallengePickerFilter", [], (function(a, b, c, d, e, f) {
					a = Object.freeze({
						NEW_CONTEXT_ONLY: "NEW_CONTEXT_ONLY",
						INCLUDE_EXISTING_CHALLENGES: "INCLUDE_EXISTING_CHALLENGES",
						NEW_PLAYERS_ONLY: "NEW_PLAYERS_ONLY",
						DUMMY_FILTER: "DUMMY_FILTER"
					});
					f["default"] = a
				}), 66);
				__d("fbinstant/common/apiResultComparator", [], (function(a, b, c, d, e, f) {
					"use strict";

					function a(a, b, c, d, e) {
						a.sendPassThroughAsync("API_RESULT_COMPARATOR", {
							control_result: b,
							experiment_result: c,
							compare_method: d,
							endpoint: e
						})
					}
					f["default"] = a
				}), 66);
				__d("fbinstant/common/bannerAdLimiter", ["InstantGamesPassThroughRequestType", "fbinstant/common/rateLimiter"], (function(a, b, c, d, e, f, g) {
					"use strict";
					a = function() {
						function a(b) {
							this.$2 = b, this.$1 = new(c("fbinstant/common/rateLimiter"))(a.RATE_LIMIT_AMOUNT, a.RATE_LIMIT_PERIOD)
						}
						var b = a.prototype;
						b.updateRateLimiter = function(b) {
							this.$1 = new(c("fbinstant/common/rateLimiter"))(a.RATE_LIMIT_AMOUNT, b)
						};
						b.canShowAd = function() {
							var a = this.$1.check();
							if(a) return !0;
							this.$2.sendPassThroughAsync(c("InstantGamesPassThroughRequestType").HIGH_AD_RATE, {});
							return !1
						};
						b.markAdShown = function() {
							this.$1.bump()
						};
						return a
					}();
					a.RATE_LIMIT_AMOUNT = 1;
					a.RATE_LIMIT_PERIOD = 45e3;
					g["default"] = a
				}), 98);
				__d("fbinstant/common/platformUtils", ["fbinstant/common/platform"], (function(a, b, c, d, e, f, g) {
					"use strict";

					function a() {
						if(window.IsQuicksilverReactNativeIOS || window.webkit) return c("fbinstant/common/platform").IOS;
						else if(window.IsQuicksilverReactNativeAndroid || window.QuicksilverAndroid) return c("fbinstant/common/platform").ANDROID;
						else if(window.IsMobileWeb) return c("fbinstant/common/platform").MOBILE_WEB;
						else return c("fbinstant/common/platform").WEB
					}
					b = {
						getPlatform: a
					};
					g["default"] = b
				}), 98);
				__d("fbinstant/common/videoPlayerInstanceManager", ["fbinstant/common/platform", "fbinstant/common/platformUtils"], (function(a, b, c, d, e, f, g) {
					"use strict";
					a = function() {
						function a() {
							this.$1 = {}
						}
						var b = a.prototype;
						b.updateTimestamp = function(a) {
							var b;
							if(((b = this.$1[a.videoPlayerInstanceID]) == null ? void 0 : b.val) === a.timestamp) return;
							this.$1[a.videoPlayerInstanceID] = {
								receivedTime: new Date(),
								val: a.timestamp
							}
						};
						b.getCurrentTimestamp = function(b) {
							var d;
							b = this.$1[b];
							if(b === void 0) return 0;
							var e = new Date() - b.receivedTime;
							d = (d = a.maxTimestampOffsetMs[c("fbinstant/common/platformUtils").getPlatform()]) != null ? d : 0;
							return b.val + Math.min(e, d)
						};
						return a
					}();
					a.maxTimestampOffsetMs = (b = {}, b[c("fbinstant/common/platform").IOS] = 200, b[c("fbinstant/common/platform").ANDROID] = 16, b[c("fbinstant/common/platform").WEB] = 16, b[c("fbinstant/common/platform").MOBILE_WEB] = 16, b);
					d = new a();
					g["default"] = d
				}), 98);
				__d("fbinstant/latest/entryPoint", [], (function(a, b, c, d, e, f) {
					"use strict";
					a = function() {
						function a(a, b) {
							this.$3 = null, this.$2 = a, this.$1 = b || null
						}
						var b = a.prototype;
						b.getData = function() {
							return this.$1
						};
						b.getSource = function() {
							return this.$2
						};
						b.getCanonicalEntryPointAsync = function(a) {
							var b = this;
							return this.$3 != null ? Promise.resolve(this.$3) : a.sendPassThroughAsync("GET_ENTRY_POINT", {
								source: this.$2
							}).then(function(a) {
								b.$3 = a.entry_point;
								return a.entry_point
							})
						};
						return a
					}();
					f["default"] = a
				}), 66);
				__d("fbinstant/latest/internalEventLogger", ["fbinstant/common/eventBatcher"], (function(a, b, c, d, e, f, g) {
					"use strict";
					a = function() {
						function a() {
							var a = this;
							this.$3 = function(b) {
								var c = a.$2;
								if(b.length <= 0 || !c) return;
								b = a.$4(b);
								c.sendPassThroughAsync("SDK_EVENT", {
									events: b
								})
							};
							this.$1 = new(c("fbinstant/common/eventBatcher"))(this.$3)
						}
						var b = a.prototype;
						b.initialize = function(a) {
							this.$2 = a, this.$1.startInterval()
						};
						b.logEvent = function(a, b, c) {
							this.$1.logEvent({
								type: a,
								data: babelHelpers["extends"]({}, c, {
									contextID: b.getContext().getID()
								})
							})
						};
						b.$4 = function(a) {
							var b = {};
							for(var c = 0; c < a.length; c++) {
								var d = a[c];
								Object.prototype.hasOwnProperty.call(b, d.data.key) || (b[d.data.key] = babelHelpers["extends"]({}, d), b[d.data.key].data.count = 0);
								b[d.data.key].data.count += 1
							}
							d = [];
							for(c in b) d.push(b[c]);
							return d
						};
						return a
					}();
					g["default"] = a
				}), 98);
				__d("fbinstant/latest/messageSender", ["Alea", "InstantGamesSDKMessages", "fbinstant/common/apiError", "fbinstant/common/errorCode", "fbinstant/common/event", "fbinstant/common/exclusiveMessageManager", "fbinstant/common/platform", "fbinstant/common/platformUtils", "fbinstant/common/supportedMessagesManager"], (function(a, b, c, d, e, f, g) {
					"use strict";
					var h = c("Alea")(),
						i = 4294967296;
					a = function() {
						function a(a) {
							this.$4 = a, this.$1 = {}, this.$2 = new(c("fbinstant/common/event"))(), this.$3 = new(c("fbinstant/common/event"))()
						}
						var b = a.prototype;
						b.initialize = function(a) {
							var b = this;
							this.$6 = a.source;
							this.$5 = a.sender;
							this.$2.on(function(a) {
								b.$7(a, !0)
							});
							this.$3.on(function(a) {
								b.$7(a, !1)
							});
							a = new RegExp("[?&]IsMobileWeb(=([^&#]*)|&|#|$)", "i");
							a = a.exec(window.location.href);
							if(!a || !a[2]) return;
							window.IsMobileWeb = parseInt(a[2], 10) === 1
						};
						b.getResolvePromiseEvent = function() {
							return this.$2
						};
						b.getRejectPromiseEvent = function() {
							return this.$3
						};
						b.send = function(a, b) {
							if(!this.$6 || !this.$5 || !c("fbinstant/common/supportedMessagesManager").isSupported(a)) return;
							this.$5.postMessage(this.$8({
								type: a,
								content: b,
								destination: this.$6
							}), "*")
						};
						b.sendAsync = function(a, b) {
							var d = this;
							return !c("fbinstant/common/supportedMessagesManager").isSupported(a) ? Promise.reject(new(c("fbinstant/common/apiError"))({
								code: c("fbinstant/common/errorCode").CLIENT_UNSUPPORTED_OPERATION,
								message: "Client does not support the message: " + a
							})) : c("fbinstant/common/exclusiveMessageManager").lockOrThrow(a).then(function() {
								return d.$9(a, b).then(function(b) {
									c("fbinstant/common/exclusiveMessageManager").release(a);
									return b
								})["catch"](function(b) {
									c("fbinstant/common/exclusiveMessageManager").release(a);
									throw b
								})
							})["catch"](function(a) {
								throw new(c("fbinstant/common/apiError"))(a)
							})
						};
						b.showGenericDialogAsync = function(a, b) {
							b = ES("JSON", "stringify", !1, b || {});
							b = {
								data: b,
								request: a,
								sdkVersion: this.$4
							};
							a = c("fbinstant/common/platformUtils").getPlatform() === c("fbinstant/common/platform").IOS ? c("InstantGamesSDKMessages").SHOW_GENERIC_DIALOG_ASYNC_IOS : c("InstantGamesSDKMessages").SHOW_GENERIC_DIALOG_ASYNC;
							return this.sendAsync(a, b).then(function(a) {
								if(!a) return Promise.reject(new(c("fbinstant/common/apiError"))({
									code: c("fbinstant/common/errorCode").UNKNOWN,
									message: "No response data provided"
								}));
								return a.errorCode ? Promise.reject(new(c("fbinstant/common/apiError"))({
									code: a.errorCode,
									message: a.errorMessage || ""
								})) : a
							})["catch"](function(a) {
								throw new(c("fbinstant/common/apiError"))(a)
							})
						};
						b.sendPassThroughAsync = function(a, b) {
							b = ES("JSON", "stringify", !1, b || {});
							b = {
								data: b,
								request: a,
								sdkVersion: this.$4
							};
							return this.sendAsync(c("InstantGamesSDKMessages").SEND_PASS_THROUGH_ASYNC, b).then(function(a) {
								if(!a) return Promise.reject(new(c("fbinstant/common/apiError"))({
									code: c("fbinstant/common/errorCode").UNKNOWN,
									message: "No response data provided"
								}));
								a = ES("JSON", "parse", !1, a);
								var b = a.data,
									d = a.errorCode;
								a = a.errorMessage;
								return d ? Promise.reject(new(c("fbinstant/common/apiError"))({
									code: d,
									message: a || ""
								})) : b
							})
						};
						b.$8 = function(a) {
							switch(this.$6) {
								case "Android":
								case "quicksilver-rn":
									return ES("JSON", "stringify", !1, a)
							}
							return a
						};
						b.$10 = function(a) {
							return a + "_" + Math.floor(h() * i)
						};
						b.$11 = function(a, b, c) {
							this.$1[a] = {
								resolve: b,
								reject: c
							}
						};
						b.$7 = function(a, b) {
							var d = a.promiseID;
							if(!d || !this.$1[d]) return;
							var e = this.$1[d];
							if(b && e.resolve) e.resolve(a.data);
							else if(!b && e.reject) {
								b = a.data;
								!b ? b = new(c("fbinstant/common/apiError"))({
									message: ""
								}) : b = new(c("fbinstant/common/apiError"))({
									code: b.code || c("fbinstant/common/errorCode").UNKNOWN,
									message: b.message || ""
								});
								e.reject(b)
							}
							delete this.$1[d]
						};
						b.$9 = function(a, b) {
							var c = this;
							return new Promise(function(d, e) {
								var f = c.$10(a);
								c.$11(f, d, e);
								d = b || {};
								d.promiseID = f;
								c.send(a, d)
							})
						};
						return a
					}();
					g["default"] = a
				}), 98);
				__d("fbinstant/latest/paymentsState", ["fbinstant/common/event"], (function(a, b, c, d, e, f, g) {
					"use strict";
					a = function() {
						function a() {
							var a = this;
							this.$3 = !1;
							this.$1 = new(c("fbinstant/common/event"))();
							this.$2 = new Promise(function(b, c) {
								a.$1.on(function() {
									a.$3 = !0, b(), a.$1.unbind()
								})
							})
						}
						var b = a.prototype;
						b.getPaymentsInitializedEvent = function() {
							return this.$1
						};
						b.isClientReady = function() {
							return this.$3
						};
						b.onInitialized = function(a) {
							this.$2.then(a)
						};
						return a
					}();
					g["default"] = a
				}), 98);
				__d("fbinstant/latest/internalStates", ["InstantGamesGameState", "fbinstant/common/adLimiter", "fbinstant/common/analytics", "fbinstant/common/bannerAdLimiter", "fbinstant/common/contextType", "fbinstant/common/event", "fbinstant/common/gameContext", "fbinstant/common/getJSONEntrypointData", "fbinstant/common/supportedFeaturesManager", "fbinstant/common/supportedMessagesManager", "fbinstant/common/videoPlayerInstanceManager", "fbinstant/latest/entryPoint", "fbinstant/latest/internalEventLogger", "fbinstant/latest/messageSender", "fbinstant/latest/paymentsState"], (function(a, b, c, d, e, f, g) {
					"use strict";
					a = function() {
						function a() {
							this.$32 = null, this.$33 = !1, this.$30 = "fbinstant.latest".substring("fbinstant.".length), this.$18 = new(c("fbinstant/latest/messageSender"))(this.$30), this.$1 = new(c("fbinstant/common/adLimiter"))(this.$18), this.$2 = new(c("fbinstant/common/analytics"))(), this.$3 = new(c("fbinstant/common/event"))(), this.$4 = null, this.$5 = new(c("fbinstant/common/bannerAdLimiter"))(this.$18), this.$6 = null, this.$7 = new(c("fbinstant/common/gameContext"))({
								type: c("fbinstant/common/contextType").SOLO
							}), this.$8 = 0, this.$10 = new(c("fbinstant/latest/entryPoint"))(null, null), this.$11 = d("InstantGamesGameState").LOADING, this.$12 = new(c("fbinstant/common/event"))(), this.$13 = new(c("fbinstant/common/event"))(), this.$14 = !1, this.$15 = new(c("fbinstant/latest/internalEventLogger"))(), this.$16 = null, this.$17 = null, this.$19 = new(c("fbinstant/common/event"))(), this.$22 = new(c("fbinstant/latest/paymentsState"))(), this.$23 = null, this.$24 = null, this.$25 = null, this.$26 = null, this.$20 = new(c("fbinstant/common/event"))(), this.$21 = new(c("fbinstant/common/event"))(), this.$27 = new(c("fbinstant/common/event"))(), this.$28 = new(c("fbinstant/common/event"))(), this.$29 = new(c("fbinstant/common/event"))(), this.$31 = new(c("fbinstant/common/event"))(), this.$9 = null, this.$34 = !1, this.$35 = null
						}
						var b = a.prototype;
						b.initialize = function(a) {
							var b = this;
							a.appID && this.setAppID(a.appID);
							a.customUpdateID && this.setCustomUpdateID(a.customUpdateID);
							a.supportedMessages && Array.isArray(a.supportedMessages) && c("fbinstant/common/supportedMessagesManager").setSupported(a.supportedMessages);
							a.supportedFeatures && Array.isArray(a.supportedFeatures) && c("fbinstant/common/supportedFeaturesManager").setSupported(a.supportedFeatures);
							var d = null;
							if(a.entryPointData) {
								var e = c("fbinstant/common/getJSONEntrypointData")(a.entryPointData);
								e != null && (e.sender && e.data ? d = e.data : d = e)
							}
							e = a.entryPoint || null;
							this.updateEntryPoint(new(c("fbinstant/latest/entryPoint"))(e, d));
							this.updateContext(a);
							this.setInitialized();
							this.getAnalyticsLogEvent().on(function(a) {
								var c = a.eventName,
									d = a.valueToSum;
								a = a.parameters;
								if(!c) return;
								b.getAnalytics().logEvent(c, d != null ? d : null, a || null)
							});
							this.getInternalEventLogger().initialize(this.getMessageSender());
							this.getVideoPlayerInstanceTimestampUpdateEvent().on(function(a) {
								var b = a.videoPlayerInstanceID;
								a = a.timestamp;
								c("fbinstant/common/videoPlayerInstanceManager").updateTimestamp({
									videoPlayerInstanceID: b,
									timestamp: a
								})
							})
						};
						b.setEntryPointVideoID = function(a) {
							a != null && (this.$32 = String(a)), this.$33 = !0
						};
						b.updateContext = function(a) {
							if(!a.contextType) return;
							this.$7 = new(c("fbinstant/common/gameContext"))({
								id: a.contextID,
								size: a.contextSize,
								type: a.contextType.toUpperCase()
							});
							this.getMessageSender().sendPassThroughAsync("CROSS_PLAY_TRACKING", {
								context_token_id: this.getContext().getID()
							})
						};
						b.updateEntryPoint = function(a) {
							this.$10 = a
						};
						b.setAppID = function(a) {
							this.$4 = a
						};
						b.setCustomUpdateID = function(a) {
							this.$9 = a
						};
						b.setLocale = function(a) {
							this.$16 = a
						};
						b.setPlayerID = function(a) {
							this.$23 = a
						};
						b.setPlayerName = function(a) {
							this.$24 = a
						};
						b.setPlayerPhoto = function(a) {
							this.$25 = a
						};
						b.setInitialized = function() {
							this.$14 = !0
						};
						b.setLoadingProgress = function(a) {
							this.$8 = a
						};
						b.setGameState = function(a) {
							this.$11 = a
						};
						b.setConnectedPlayersPromise = function(a) {
							this.$6 = a
						};
						b.setMatchPlayerPromise = function(a) {
							this.$17 = a
						};
						b.setQEParams = function(a) {
							this.$26 = a
						};
						b.setShouldCallGraphApiDuringInitialization = function(a) {
							this.$34 = a
						};
						b.setGetEntryPointAsyncPromise = function(a) {
							this.$35 = a
						};
						b.getAnalytics = function() {
							return this.$2
						};
						b.getAppID = function() {
							return this.$4
						};
						b.getConnectedPlayersPromise = function() {
							return this.$6
						};
						b.getContext = function() {
							return this.$7
						};
						b.getCustomUpdateID = function() {
							return this.$9
						};
						b.getLoadingProgress = function() {
							return this.$8
						};
						b.getEntryPoint = function() {
							return this.$10
						};
						b.getEntryPointVideoID = function() {
							return this.$32
						};
						b.hasEntryPointVideoIDResolved = function() {
							return this.$33
						};
						b.getGameState = function() {
							return this.$11
						};
						b.getGameStartEvent = function() {
							return this.$12
						};
						b.isInitialized = function() {
							return this.$14
						};
						b.getInternalEventLogger = function() {
							return this.$15
						};
						b.getLocale = function() {
							return this.$16
						};
						b.getMatchPlayerPromise = function() {
							return this.$17
						};
						b.getMessageSender = function() {
							return this.$18
						};
						b.getPaymentsState = function() {
							return this.$22
						};
						b.getPlayerID = function() {
							return this.$23
						};
						b.getPlayerName = function() {
							return this.$24
						};
						b.getPlayerPhoto = function() {
							return this.$25
						};
						b.getRequestScreenshotEvent = function() {
							return this.$27
						};
						b.getRestartEvent = function() {
							return this.$28
						};
						b.getPauseEvent = function() {
							return this.$19
						};
						b.getReceiveMessageEvent = function() {
							return this.$20
						};
						b.getReceiveStateUpdateEvent = function() {
							return this.$21
						};
						b.getResumeEvent = function() {
							return this.$29
						};
						b.getAnalyticsLogEvent = function() {
							return this.$3
						};
						b.getSdkVersion = function() {
							return this.$30
						};
						b.getQEParams = function() {
							return this.$26
						};
						b.getAdLimiter = function() {
							return this.$1
						};
						b.getBannerAdLimiter = function() {
							return this.$5
						};
						b.updateBannerAdLimiter = function(a) {
							this.$5.updateRateLimiter(a)
						};
						b.getGestureCommandEvent = function() {
							return this.$13
						};
						b.getVideoPlayerInstanceTimestampUpdateEvent = function() {
							return this.$31
						};
						b.getShouldCallGraphApiDuringInitialization = function() {
							return this.$34
						};
						b.getEntryPointAsyncPromise = function() {
							return this.$35
						};
						return a
					}();
					b = new a();
					g["default"] = b
				}), 98);
				__d("fbinstant/latest/config", ["JSSDKFBInstantConfig", "JSSDKFBInstantGraphAPIMigrationConfig", "fbinstant/latest/internalStates"], (function(a, b, c, d, e, f, g) {
					"use strict";
					var h = "default";

					function a(a) {
						var b = c("fbinstant/latest/internalStates").getSdkVersion();
						b = i(b, a);
						return b != null ? b : i(h, a)
					}

					function i(a, b) {
						var c = j();
						c = a in c ? c[a] : null;
						return c == null ? null : b in c ? c[b] : null
					}

					function j() {
						return c("JSSDKFBInstantConfig")
					}

					function b(a) {
						var b = k();
						return b == null ? !1 : a in b ? b[a] : !1
					}

					function k() {
						return c("JSSDKFBInstantGraphAPIMigrationConfig")
					}
					d = {
						get: a,
						shouldUseGraphAPI: b
					};
					g["default"] = d
				}), 98);
				__d("ManagedError", [], (function(a, b, c, d, e, f) {
					a = function(a) {
						babelHelpers.inheritsLoose(b, a);

						function b(b, c) {
							var d;
							d = a.call(this, b !== null && b !== void 0 ? b : "") || this;
							b !== null && b !== void 0 ? d.message = b : d.message = "";
							d.innerError = c;
							return d
						}
						return b
					}(babelHelpers.wrapNativeSuper(Error));
					f["default"] = a
				}), 66);
				__d("ArgumentError", ["ManagedError"], (function(a, b, c, d, e, f, g) {
					a = function(a) {
						babelHelpers.inheritsLoose(b, a);

						function b(b, c) {
							return a.call(this, b, c) || this
						}
						return b
					}(c("ManagedError"));
					g["default"] = a
				}), 98);
				__d("AssertionError", ["ManagedError"], (function(a, b, c, d, e, f, g) {
					a = function(a) {
						babelHelpers.inheritsLoose(b, a);

						function b(b) {
							return a.call(this, b) || this
						}
						return b
					}(c("ManagedError"));
					g["default"] = a
				}), 98);
				__d("Assert", ["AssertionError", "sprintf"], (function(a, b, c, d, e, f, g) {
					function h(a, b) {
						if(typeof a !== "boolean" || a === !1) throw new(c("AssertionError"))(b);
						return a
					}

					function i(a, b, d) {
						var e;
						if(b === void 0) e = "undefined";
						else if(b === null) e = "null";
						else {
							var f = Object.prototype.toString.call(b);
							f = /\s(\w*)/.exec(f);
							e = f == null ? typeof f : f[1].toLowerCase()
						}
						h(a.indexOf(e) !== -1, (f = d) != null ? f : c("sprintf")("Expression is of type %s, not %s", e, a));
						return b
					}

					function a(a, b, c) {
						h(b instanceof a, (a = c) != null ? a : "Expression not instance of type");
						return b
					}

					function j(a, b) {
						k["is" + a] = b, k["maybe" + a] = function(a, c) {
							return a == null ? a : b(a, c)
						}
					}
					b = function(a, b) {
						return a
					};
					var k = {
						isInstanceOf: a,
						isTrue: h,
						isTruthy: function(a, b) {
							return h(!!a, b)
						},
						isBoolean: b,
						isFunction: b,
						isNumber: b,
						isObject: b,
						isString: b,
						isUndefined: b,
						maybeObject: b,
						maybeNumber: b,
						maybeFunction: b
					};
					["Boolean", "Function", "Number", "Object", "String", "Undefined"].forEach(function(a) {
						j(a, ES(i, "bind", !0, null, a.toLowerCase()))
					});
					d = k;
					g["default"] = d
				}), 98);
				__d("Log", [], (function(a, b, c, d, e, f) {
					"use strict";
					var g = -1;
					b = {
						DEBUG: 3,
						INFO: 2,
						WARNING: 1,
						ERROR: 0
					};
					c = function(a, b, c) {
						for(var d = arguments.length, e = new Array(d > 3 ? d - 3 : 0), f = 3; f < d; f++) e[f - 3] = arguments[f];
						var h = 0,
							i = c.replace(/%s/g, function() {
								return String(e[h++])
							}),
							j = window.console;
						j && g >= b && j[a in j ? a : "log"](i)
					};

					function a(a) {
						g = a
					}
					d = ES(c, "bind", !0, null, "debug", b.DEBUG);
					e = ES(c, "bind", !0, null, "info", b.INFO);
					var h = ES(c, "bind", !0, null, "warn", b.WARNING),
						i = ES(c, "bind", !0, null, "error", b.ERROR);
					f.Level = b;
					f.log = c;
					f.setLevel = a;
					f.debug = d;
					f.info = e;
					f.warn = h;
					f.error = i
				}), 66);
				__d("flattenObject", [], (function(a, b, c, d, e, f) {
					"use strict";

					function a(a) {
						var b = {};
						for(var c in a)
							if(Object.prototype.hasOwnProperty.call(a, c)) {
								var d = a[c];
								if(d == null) continue;
								else typeof d === "string" ? b[c] = d : b[c] = ES("JSON", "stringify", !1, d)
							}
						return b
					}
					f["default"] = a
				}), 66);
				__d("QueryString", [], (function(a, b, c, d, e, f) {
					function g(a) {
						var b = [];
						Object.keys(a).sort().forEach(function(c) {
							var d = a[c];
							if(d === void 0) return;
							if(d === null) {
								b.push(c);
								return
							}
							b.push(encodeURIComponent(c) + "=" + encodeURIComponent(String(d)))
						});
						return b.join("&")
					}

					function a(a, b) {
						b === void 0 && (b = !1);
						var c = {};
						if(a === "") return c;
						a = a.split("&");
						for(var d = 0; d < a.length; d++) {
							var e = a[d].split("=", 2),
								f = decodeURIComponent(e[0]);
							if(b && Object.prototype.hasOwnProperty.call(c, f)) throw new URIError("Duplicate key: " + f);
							c[f] = e.length === 2 ? decodeURIComponent(e[1]) : null
						}
						return c
					}

					function b(a, b) {
						return a + (a.indexOf("?") !== -1 ? "&" : "?") + (typeof b === "string" ? b : g(b))
					}
					c = {
						encode: g,
						decode: a,
						appendToUrl: b
					};
					f["default"] = c
				}), 66);
				__d("BaseDeserializePHPQueryData", [], (function(a, b, c, d, e, f) {
					"use strict";
					var g = /^([-_\w]+)((?:\[[-_\w]*\])+)=?(.*)/;

					function h(a) {
						return a === "hasOwnProperty" || a === "__proto__" ? "\ud83d\udf56" : a
					}

					function a(a, b) {
						if(a == null || a === "") return {};
						var c = {};
						a = a.replace(/%5B/gi, "[").replace(/%5D/gi, "]");
						a = a.split("&");
						var d = Object.prototype.hasOwnProperty;
						for(var e = 0, f = a.length; e < f; e++) {
							var i = a[e].match(g);
							if(!i) {
								var j = a[e].indexOf("=");
								if(j === -1) c[b(a[e])] = null;
								else {
									var k = a[e].substring(0, j);
									j = a[e].substring(j + 1);
									c[b(k)] = b(j)
								}
							} else {
								k = i[2].split(/\]\[|\[|\]/).slice(0, -1);
								j = i[1];
								i = b(i[3] || "");
								k[0] = j;
								j = c;
								for(var l = 0; l < k.length - 1; l++) {
									var m = h(k[l]);
									if(m) {
										if(!d.call(j, m)) {
											var n = k[l + 1] && !k[l + 1].match(/^\d{1,3}$/) ? {} : [];
											j[m] = n;
											if(j[m] !== n) return c
										}
										j = j[m]
									} else k[l + 1] && !k[l + 1].match(/^\d{1,3}$/) ? j.push({}) : j.push([]), j = j[j.length - 1]
								}
								j instanceof Array && k[k.length - 1] === "" ? j.push(i) : j[h(k[k.length - 1])] = i
							}
						}
						return c
					}
					f.deserialize = a
				}), 66);
				__d("flattenPHPQueryData", ["invariant"], (function(a, b, c, d, e, f, g, h) {
					function a(a) {
						return i(a, "", {})
					}

					function i(a, b, c) {
						if(a == null) c[b] = void 0;
						else if(typeof a === "object") {
							typeof a.appendChild !== "function" || h(0, 2616);
							for(var d in a) d !== "$$typeof" && Object.prototype.hasOwnProperty.call(a, d) && a[d] !== void 0 && i(a[d], b ? b + "[" + d + "]" : d, c)
						} else c[b] = a;
						return c
					}
					g["default"] = a
				}), 98);
				__d("PHPQuerySerializer", ["BaseDeserializePHPQueryData", "flattenPHPQueryData"], (function(a, b, c, d, e, f, g) {
					function a(a) {
						var b = [];
						a = c("flattenPHPQueryData")(a);
						for(var d in a)
							if(Object.prototype.hasOwnProperty.call(a, d)) {
								var e = h(d);
								a[d] === void 0 ? b.push(e) : b.push(e + "=" + h(String(a[d])))
							}
						return b.join("&")
					}

					function h(a) {
						return encodeURIComponent(a).replace(/%5D/g, "]").replace(/%5B/g, "[")
					}

					function b(a) {
						return d("BaseDeserializePHPQueryData").deserialize(a, i)
					}

					function i(a) {
						try {
							return decodeURIComponent(a.replace(/\+/g, " "))
						} catch(b) {
							return a
						}
					}
					e = {
						decodeComponent: i,
						deserialize: b,
						encodeComponent: h,
						serialize: a
					};
					f.exports = e
				}), 34);
				__d("PHPStrictQuerySerializer", ["PHPQuerySerializer", "flattenPHPQueryData"], (function(a, b, c, d, e, f, g) {
					function a(a) {
						var b = [];
						a = c("flattenPHPQueryData")(a);
						for(var d in a)
							if(Object.prototype.hasOwnProperty.call(a, d)) {
								var e = h(d);
								a[d] === void 0 ? b.push(e) : b.push(e + "=" + h(String(a[d])))
							}
						return b.join("&")
					}

					function h(a) {
						return encodeURIComponent(a)
					}
					g.serialize = a;
					g.encodeComponent = h;
					g.deserialize = d("PHPQuerySerializer").deserialize;
					g.decodeComponent = d("PHPQuerySerializer").decodeComponent
				}), 98);
				__d("URIRFC3986", [], (function(a, b, c, d, e, f) {
					var g = new RegExp("^([^:/?#]+:)?(//([^\\\\/?#@]*@)?(\\[[A-Fa-f0-9:.]+\\]|[^\\/?#:]*)(:[0-9]*)?)?([^?#]*)(\\?[^#]*)?(#.*)?");

					function a(a) {
						if(a.trim() === "") return null;
						a = a.match(g);
						if(a == null) return null;
						var b = a[2] ? a[2].substr(2) : null,
							c = a[1] ? a[1].substr(0, a[1].length - 1) : null;
						a = {
							uri: a[0] ? a[0] : null,
							scheme: c,
							authority: b,
							userinfo: a[3] ? a[3].substr(0, a[3].length - 1) : null,
							host: a[2] ? a[4] : null,
							port: a[5] ? a[5].substr(1) ? parseInt(a[5].substr(1), 10) : null : null,
							path: a[6] ? a[6] : null,
							query: a[7] ? a[7].substr(1) : null,
							fragment: a[8] ? a[8].substr(1) : null,
							isGenericURI: b === null && !!c
						};
						return a
					}
					f.parse = a
				}), 66);
				__d("createObjectFrom", [], (function(a, b, c, d, e, f) {
					function g(a, b) {
						if(b === void 0) return g(a, !0);
						var c = {};
						if(Array.isArray(b))
							for(var d = a.length - 1; d >= 0; d--) c[a[d]] = b[d];
						else
							for(d = a.length - 1; d >= 0; d--) c[a[d]] = b;
						return c
					}
					f["default"] = g
				}), 66);
				__d("URISchemes", ["createObjectFrom"], (function(a, b, c, d, e, f, g) {
					var h = c("createObjectFrom")(["accountscenter", "aidemos", "aistudio", "blob", "cmms", "fb", "fba", "fbatwork", "fb-ama", "fb-internal", "fb-workchat", "fb-workchat-secure", "fb-messenger", "fb-messenger-public", "fb-messenger-group-thread", "fb-page-messages", "fb-pma", "fbcf", "fbconnect", "fbinternal", "fbmobilehome", "fbrpc", "file", "flipper", "ftp", "gtalk", "http", "https", "mailto", "wss", "ms-app", "intent", "itms", "itms-apps", "lasso", "market", "svn+ssh", "fbstaging", "tel", "sms", "pebblejs", "sftp", "whatsapp", "moments", "flash", "fblite", "chrome-extension", "webcal", "instagram", "iglite", "fb124024574287414", "fb124024574287414rc", "fb124024574287414master", "fb1576585912599779", "fb929757330408142", "designpack", "fbpixelcloud", "fbapi20130214", "fb1196383223757595", "oculus", "oculus.store", "oculus.feed", "oculusstore", "odh", "com.oculus.rd", "aria", "skype", "ms-windows-store", "callto", "messenger", "workchat", "fb236786383180508", "fb1775440806014337", "data", "fb-mk", "munki", "origami-file", "fb-nimble-vrsrecorder", "fb-nimble-monohandtrackingvis", "together", "togetherbl", "horizonlauncher", "venues", "whatsapp-consumer", "whatsapp-smb", "fb-ide-opener", "fb-vscode", "fb-vscode-insiders", "editor", "spark-studio", "manifold", "origami-internal", "origami-public", "stella", "mwa", "mattermost", "logaggregator"]);

					function a(a) {
						return a == null || a === "" ? !0 : Object.prototype.hasOwnProperty.call(h, a.toLowerCase())
					}
					g.isAllowed = a
				}), 98);
				__d("setHostSubdomain", [], (function(a, b, c, d, e, f) {
					function a(a, b) {
						a = a.split(".");
						a.length < 3 ? a.unshift(b) : a[0] = b;
						return a.join(".")
					}
					f["default"] = a
				}), 66);
				__d("URIAbstractBase", ["invariant", "FBLogger", "PHPStrictQuerySerializer", "URIRFC3986", "URISchemes", "setHostSubdomain"], (function(a, b, c, d, e, f, g) {
					var h, i, j = new RegExp("[\\x00-\\x2c\\x2f\\x3b-\\x40\\x5c\\x5e\\x60\\x7b-\\x7f\\uFDD0-\\uFDEF\\uFFF0-\\uFFFF\\u2047\\u2048\\uFE56\\uFE5F\\uFF03\\uFF0F\\uFF1F]"),
						k = new RegExp("^(?:[^/]*:|[\\x00-\\x1f]*/[\\x00-\\x1f]*/)"),
						l = [];
					a = function() {
						"use strict";
						a.parse = function(c, d, e, f) {
							if(!d) return !0;
							if(d instanceof a) {
								c.setProtocol(d.getProtocol());
								c.setDomain(d.getDomain());
								c.setPort(d.getPort());
								c.setPath(d.getPath());
								c.setQueryData(f.deserialize(f.serialize(d.getQueryData())));
								c.setFragment(d.getFragment());
								c.setIsGeneric(d.getIsGeneric());
								c.setForceFragmentSeparator(d.getForceFragmentSeparator());
								c.setOriginalRawQuery(d.getOriginalRawQuery());
								c.setQueryParamModified(!1);
								return !0
							}
							d = d.toString().trim();
							var g = (h || (h = b("URIRFC3986"))).parse(d) || {
								fragment: null,
								scheme: null,
								query: null
							};
							if(!e && !(i || (i = b("URISchemes"))).isAllowed(g.scheme)) return !1;
							c.setProtocol(g.scheme || "");
							if(!e && j.test(g.host || "")) return !1;
							c.setDomain(g.host || "");
							c.setPort(g.port || "");
							c.setPath(g.path || "");
							if(e) c.setQueryData(f.deserialize(g.query || "") || {});
							else try {
								c.setQueryData(f.deserialize(g.query || "") || {})
							} catch(a) {
								return !1
							}
							c.setFragment(g.fragment || "");
							g.fragment === "" && c.setForceFragmentSeparator(!0);
							c.setIsGeneric(g.isGenericURI || !1);
							c.setOriginalRawQuery(g.query);
							c.setQueryParamModified(!1);
							if(g.userinfo !== null) {
								if(e) throw new Error("URI.parse: invalid URI (userinfo is not allowed in a URI): " + d);
								return !1
							}
							if(!c.getDomain() && c.getPath().indexOf("\\") !== -1) {
								if(e) throw new Error("URI.parse: invalid URI (no domain but multiple back-slashes): " + d);
								return !1
							}
							if(!c.getProtocol() && k.test(d)) {
								if(e) throw new Error("URI.parse: invalid URI (unsafe protocol-relative URLs): " + d + "'");
								return !1
							}
							if(c.getDomain() && c.getPath() && !ES(c.getPath(), "startsWith", !0, "/")) {
								if(e) throw new Error("URI.parse: invalid URI (domain and path where path lacks leading slash): " + d);
								return !1
							}
							f = c.getProtocol() === "mailto" || c.getProtocol() === "tel" || c.getProtocol() === "sms";
							c.getProtocol() && !f && !c.getDomain() && c.getPath() !== "" && b("FBLogger")("uri").warn('URI.parse: invalid URI (protocol "' + c.getProtocol() + '" with no domain)');
							return !0
						};
						a.tryParse = function(b, c) {
							var d = new a(null, c);
							return a.parse(d, b, !1, c) ? d : null
						};
						a.isValid = function(b, c) {
							return !!a.tryParse(b, c)
						};

						function a(b, c) {
							c || g(0, 2966), this.$9 = c, this.$7 = "", this.$1 = "", this.$6 = "", this.$5 = "", this.$3 = "", this.$4 = !1, this.$8 = {}, this.$2 = !1, a.parse(this, b, !0, c), this.$11 = !1
						}
						var c = a.prototype;
						c.setProtocol = function(a) {
							(i || (i = b("URISchemes"))).isAllowed(a) || g(0, 11793, a);
							this.$7 = a;
							return this
						};
						c.getProtocol = function() {
							return(this.$7 || "").toLowerCase()
						};
						c.setSecure = function(a) {
							return this.setProtocol(a ? "https" : "http")
						};
						c.isSecure = function() {
							return this.getProtocol() === "https"
						};
						c.setDomain = function(a) {
							if(j.test(a)) throw new Error("URI.setDomain: unsafe domain specified: " + a + " for url " + this.toString());
							this.$1 = a;
							return this
						};
						c.getDomain = function() {
							return this.$1
						};
						c.setPort = function(a) {
							this.$6 = a;
							return this
						};
						c.getPort = function() {
							return this.$6
						};
						c.setPath = function(a) {
							this.$5 = a;
							return this
						};
						c.getPath = function() {
							return this.$5
						};
						c.addQueryData = function(a, b) {
							Object.prototype.toString.call(a) === "[object Object]" ? ES("Object", "assign", !1, this.$8, a) : this.$8[a] = b;
							this.$11 = !0;
							return this
						};
						c.setQueryData = function(a) {
							this.$8 = a;
							this.$11 = !0;
							return this
						};
						c.getQueryData = function() {
							return this.$8
						};
						c.setQueryString = function(a) {
							return this.setQueryData(this.$9.deserialize(a))
						};
						c.getQueryString = function(a, b, c) {
							a === void 0 && (a = !1);
							b === void 0 && (b = function() {
								return !1
							});
							c === void 0 && (c = null);
							return this.$12(!1, a, b, c)
						};
						c.$12 = function(a, b, c, d) {
							a === void 0 && (a = !1);
							b === void 0 && (b = !1);
							c === void 0 && (c = function() {
								return !1
							});
							d === void 0 && (d = null);
							if(!this.$11 && (b || c(this.getDomain()))) {
								return(b = this.$10) != null ? b : ""
							}
							return(a && d ? d : this.$9).serialize(this.getQueryData())
						};
						c.removeQueryData = function(a) {
							Array.isArray(a) || (a = [a]);
							for(var b = 0, c = a.length; b < c; ++b) delete this.$8[a[b]];
							this.$11 = !0;
							return this
						};
						c.setFragment = function(a) {
							this.$3 = a;
							this.setForceFragmentSeparator(!1);
							return this
						};
						c.getFragment = function() {
							return this.$3
						};
						c.setForceFragmentSeparator = function(a) {
							this.$2 = a;
							return this
						};
						c.getForceFragmentSeparator = function() {
							return this.$2
						};
						c.setIsGeneric = function(a) {
							this.$4 = a;
							return this
						};
						c.getIsGeneric = function() {
							return this.$4
						};
						c.getOriginalRawQuery = function() {
							return this.$10
						};
						c.setOriginalRawQuery = function(a) {
							this.$10 = a;
							return this
						};
						c.setQueryParamModified = function(a) {
							this.$11 = a;
							return this
						};
						c.isEmpty = function() {
							return !(this.getPath() || this.getProtocol() || this.getDomain() || this.getPort() || Object.keys(this.getQueryData()).length > 0 || this.getFragment())
						};
						c.toString = function(a, b) {
							a === void 0 && (a = function() {
								return !1
							});
							b === void 0 && (b = null);
							return this.$13(!1, !1, a, b)
						};
						c.toStringRawQuery = function(a, b) {
							a === void 0 && (a = function() {
								return !1
							});
							b === void 0 && (b = null);
							return this.$13(!0, !1, a, b)
						};
						c.toStringPreserveQuery = function(a, b) {
							a === void 0 && (a = function() {
								return !1
							});
							b === void 0 && (b = null);
							return this.$13(!1, !0, a, b)
						};
						c.toStringStrictQueryEncoding = function(a) {
							a === void 0 && (a = function() {
								return !1
							});
							return this.$13(!0, !1, a, b("PHPStrictQuerySerializer"))
						};
						c.$13 = function(a, b, c, d) {
							a === void 0 && (a = !1);
							b === void 0 && (b = !1);
							c === void 0 && (c = function() {
								return !1
							});
							d === void 0 && (d = null);
							var e = this;
							for(var f = 0; f < l.length; f++) e = l[f](e);
							return e.$14(a, b, c, d)
						};
						c.$14 = function(a, b, c, d) {
							a === void 0 && (a = !1);
							b === void 0 && (b = !1);
							c === void 0 && (c = function() {
								return !1
							});
							d === void 0 && (d = null);
							var e = "",
								f = this.getProtocol();
							f && (e += f + ":" + (this.getIsGeneric() ? "" : "//"));
							f = this.getDomain();
							f && (e += f);
							f = this.getPort();
							f && (e += ":" + f);
							f = this.getPath();
							f ? e += f : e && (e += "/");
							f = this.$12(a, b, c, d);
							f && (e += "?" + f);
							a = this.getFragment();
							a ? e += "#" + a : this.getForceFragmentSeparator() && (e += "#");
							return e
						};
						a.registerFilter = function(a) {
							l.push(a)
						};
						c.getOrigin = function() {
							var a = this.getPort();
							return this.getProtocol() + "://" + this.getDomain() + (a ? ":" + a : "")
						};
						c.isSameOrigin = function(a) {
							return !this.getProtocol() || !this.getDomain() || !a.getProtocol() || !a.getDomain() ? !1 : this.getOrigin() === a.getOrigin()
						};
						c.getQualifiedURIBase = function() {
							return new a(this, this.$9).qualify()
						};
						c.qualify = function() {
							if(!this.getDomain()) {
								var b = new a(window.location.href, this.$9);
								this.setProtocol(b.getProtocol()).setDomain(b.getDomain()).setPort(b.getPort())
							}
							return this
						};
						c.setSubdomain = function(a) {
							var c = this.qualify();
							c = c.getDomain();
							return this.setDomain(b("setHostSubdomain")(c, a))
						};
						c.getSubdomain = function() {
							if(!this.getDomain()) return "";
							var a = this.getDomain().split(".");
							if(a.length <= 2) return "";
							else return a[0]
						};
						c.isSubdomainOfDomain = function(b) {
							var c = this.getDomain();
							return a.isDomainSubdomainOfDomain(c, b, this.$9)
						};
						a.isDomainSubdomainOfDomain = function(b, c, d) {
							if(c === "" || b === "") return !1;
							if(ES(b, "endsWith", !0, c)) {
								var e = b.length,
									f = c.length,
									g = e - f - 1;
								if(e === f || b[g] === ".") {
									e = new a(null, d);
									e.setDomain(c);
									return a.isValid(e, d)
								}
							}
							return !1
						};
						return a
					}();
					e.exports = a
				}), null);
				__d("sdk.URI", ["QueryString", "URIAbstractBase"], (function(a, b, c, d, e, f, g) {
					var h = /\.facebook\.com$/,
						i = {
							serialize: function(a) {
								return a ? c("QueryString").encode(a) : ""
							},
							deserialize: function(a) {
								return a ? c("QueryString").decode(a) : {}
							}
						};
					a = function(a) {
						babelHelpers.inheritsLoose(b, a);

						function b(b) {
							return a.call(this, b, i) || this
						}
						var d = b.prototype;
						d.isFacebookURI = function() {
							return h.test(this.getDomain())
						};
						d.valueOf = function() {
							return this.toString()
						};
						b.isValidURI = function(a) {
							return c("URIAbstractBase").isValid(a, i)
						};
						return b
					}(c("URIAbstractBase"));
					g["default"] = a
				}), 98);
				__d("ApiClientUtils", ["ArgumentError", "Assert", "Log", "flattenObject", "sdk.URI", "sprintf"], (function(a, b, c, d, e, f, g) {
					var h = {
						get: !0,
						post: !0,
						"delete": !0,
						put: !0
					};

					function a(a) {
						var b = a.shift();
						c("Assert").isString(b, "Invalid path");
						!/^https?/.test(b) && b.charAt(0) !== "/" && (b = "/" + b);
						var e, f = {};
						try {
							e = new(c("sdk.URI"))(b)
						} catch(a) {
							throw new(c("ArgumentError"))(a.message, a)
						}
						a.forEach(function(a) {
							return f[typeof a] = a
						});
						b = (f.string || "get").toLowerCase();
						c("Assert").isTrue(Object.prototype.hasOwnProperty.call(h, b), c("sprintf")("Invalid method passed to ApiClient: %s", b));
						a = f["function"];
						a || d("Log").warn("No callback passed to the ApiClient");
						f.object && e.addQueryData(c("flattenObject")(f.object));
						var g = e.getQueryData();
						g.method = b;
						return {
							uri: e,
							callback: a,
							params: g
						}
					}
					g.parseCallDataFromArgs = a
				}), 98);
				__d("errorCode", [], (function(a, b, c, d, e, f) {
					"use strict";

					function a(a) {
						throw new Error('errorCode("' + a + '"): This should not happen. Oh noes!')
					}
					f["default"] = a
				}), 66);
				__d("nullthrows", [], (function(a, b, c, d, e, f) {
					function a(a, b) {
						b === void 0 && (b = "Got unexpected null or undefined");
						if(a != null) return a;
						a = new Error(b);
						a.framesToPop = 1;
						throw a
					}
					f["default"] = a
				}), 66);
				__d("sdk.safelyParseResponse", ["errorCode", "nullthrows"], (function(a, b, c, d, e, f, g, h) {
					"use strict";
					var i = function(a, b, c, d) {
						return j
					};

					function a(a, b, d) {
						b === void 0 && (b = null);
						d === void 0 && (d = null);
						try {
							return a === null ? j : ES("JSON", "parse", !1, c("nullthrows")(a))
						} catch(c) {
							return i(c, a, b, d)
						}
					}
					var j = {
						error: {
							code: 1,
							error_subcode: 1357046,
							message: "Received Invalid JSON reply.",
							type: "http"
						}
					};
					a.ERROR = j;
					a.setErrorHandler = function(a) {
						i = a
					};
					b = a;
					g["default"] = b
				}), 98);
				__d("whitelistObjectKeys", [], (function(a, b, c, d, e, f) {
					function a(a, b) {
						var c = {};
						b = Array.isArray(b) ? b : Object.keys(b);
						for(var d = 0; d < b.length; d++) typeof a[b[d]] !== "undefined" && (c[b[d]] = a[b[d]]);
						return c
					}
					f["default"] = a
				}), 66);
				__d("ApiBatcher", ["invariant", "ApiClientUtils", "QueryString", "sdk.safelyParseResponse", "whitelistObjectKeys"], (function(a, b, c, d, e, f, g, h) {
					"use strict";
					var i = 50,
						j = 105440539523;
					a = function() {
						function a(a, b) {
							this.$1 = [], this.$2 = [], this.$4 = null, this.executeRequest = a, this.$3 = b
						}
						var b = a.prototype;
						b.scheduleBatchCall = function() {
							var b = this;
							for(var c = arguments.length, d = new Array(c), e = 0; e < c; e++) d[e] = arguments[e];
							var f = a.prepareBatchParams(d),
								g = f.body,
								h = f.callback,
								j = f.method,
								k = f.relative_url,
								l = {
									method: j,
									relative_url: k
								};
							g && (l.body = g);
							this.$1.push(l);
							this.$2.push(h);
							this.$1.length == i ? (this.$4 && window.clearTimeout(this.$4), this.$5()) : this.$4 || (this.$4 = window.setTimeout(function() {
								b.$5()
							}, 0))
						};
						a.prepareBatchParams = function(a, b) {
							b === void 0 && (b = []);
							a = d("ApiClientUtils").parseCallDataFromArgs(a);
							var e = a.uri,
								f = a.callback;
							a = a.params.method;
							var g, h = e.removeQueryData("method").toString();
							if(a.toLowerCase() == "post") {
								var i = e.getQueryData();
								g = c("QueryString").encode(i);
								i = c("whitelistObjectKeys")(i, b);
								h = e.setQueryData(i).toString()
							}
							return {
								body: g,
								callback: f,
								method: a,
								relative_url: h
							}
						};
						b.$5 = function() {
							this.$1.length > 0 || h(0, 4698);
							this.$1.length === this.$2.length || h(0, 4699);
							var a = this.$1,
								b = this.$2;
							this.$1 = [];
							this.$2 = [];
							this.$4 = null;
							if(a.length === 1) {
								var d = a[0],
									e = b[0],
									f = d.body ? c("QueryString").decode(d.body) : null;
								this.executeRequest(d.relative_url, d.method, f, e);
								return
							}
							this.executeRequest("/", "POST", {
								batch: a,
								include_headers: !1,
								batch_app_id: this.$3 || j
							}, function(a) {
								Array.isArray(a) ? a.forEach(function(a, d) {
									b[d](c("sdk.safelyParseResponse")(a && a.body))
								}) : b.forEach(function(a) {
									return a({
										error: {
											message: "Fatal: batch call failed."
										}
									})
								})
							})
						};
						return a
					}();
					g["default"] = a
				}), 98);
				__d("RequestConstants", ["errorCode"], (function(a, b, c, d, e, f, g, h) {
					a = {
						code: 1,
						error_subcode: 1357045,
						message: "unknown error (empty response)",
						type: "http",
						status: 0
					};
					g.PARSE_ERROR_TEMPLATE = a
				}), 98);
				__d("ObservableMixin", [], (function(a, b, c, d, e, f) {
					function a() {
						this.__observableEvents = {}
					}
					a.prototype = {
						inform: function(a) {
							var b = Array.prototype.slice.call(arguments, 1),
								c = Array.prototype.slice.call(this.getSubscribers(a));
							for(var d = 0; d < c.length; d++) {
								if(c[d] === null) continue;
								try {
									c[d].apply(this, b)
								} catch(a) {
									window.setTimeout(function() {
										throw a
									}, 0)
								}
							}
							return this
						},
						getSubscribers: function(a) {
							return this.__observableEvents[a] || (this.__observableEvents[a] = [])
						},
						clearSubscribers: function(a) {
							a && (this.__observableEvents[a] = []);
							return this
						},
						subscribe: function(a, b) {
							a = this.getSubscribers(a);
							a.push(b);
							return this
						},
						unsubscribe: function(a, b) {
							a = this.getSubscribers(a);
							for(var c = 0; c < a.length; c++)
								if(a[c] === b) {
									a.splice(c, 1);
									break
								}
							return this
						}
					};
					e.exports = a
				}), null);
				__d("Type", ["Assert"], (function(a, b, c, d, e, f) {
					function g() {
						var a = this.__mixins;
						if(a)
							for(var b = 0; b < a.length; b++) a[b].apply(this, arguments)
					}

					function h(a, b) {
						if(b instanceof a) return !0;
						if(b instanceof g)
							for(var c = 0; c < b.__mixins.length; c++)
								if(b.__mixins[c] == a) return !0;
						return !1
					}

					function i(a, b) {
						var c = a.prototype;
						Array.isArray(b) || (b = [b]);
						for(a = 0; a < b.length; a++) {
							var d = b[a];
							typeof d === "function" && (c.__mixins.push(d), d = d.prototype);
							Object.keys(d).forEach(function(a) {
								c[a] = d[a]
							})
						}
					}

					function j(a, c, d) {
						var e = c && Object.prototype.hasOwnProperty.call(c, "constructor") ? c.constructor : function() {
							this.parent.apply(this, arguments)
						};
						b("Assert").isFunction(e);
						if(a && a.prototype instanceof g === !1) throw new Error("parent type does not inherit from Type");
						a = a || g;

						function f() {}
						f.prototype = a.prototype;
						e.prototype = new f();
						c && ES("Object", "assign", !1, e.prototype, c);
						e.prototype.constructor = e;
						e.parent = a;
						e.prototype.__mixins = a.prototype.__mixins ? Array.prototype.slice.call(a.prototype.__mixins) : [];
						d && i(e, d);
						e.prototype.parent = function() {
							this.parent = a.prototype.parent, a.apply(this, arguments)
						};
						e.prototype.parentCall = function(b) {
							return a.prototype[b].apply(this, Array.prototype.slice.call(arguments, 1))
						};
						e.extend = function(a, b) {
							return j(this, a, b)
						};
						return e
					}
					ES("Object", "assign", !1, g.prototype, {
						instanceOf: function(a) {
							return h(a, this)
						}
					});
					ES("Object", "assign", !1, g, {
						extend: function(a, b) {
							return typeof a === "function" ? j.apply(null, arguments) : j(null, a, b)
						},
						instanceOf: h
					});
					e.exports = g
				}), null);
				__d("sdk.Model", ["ObservableMixin", "Type"], (function(a, b, c, d, e, f, g) {
					"use strict";
					a = c("Type").extend({
						constructor: function(a) {
							this.parent();
							var b = {},
								c = this;
							Object.keys(a).forEach(function(d) {
								b[d] = a[d], c["set" + d] = function(a) {
									if(a === b[d]) return c;
									b[d] = a;
									c.inform(d + ".change", a);
									return c
								}, c["get" + d] = function() {
									return b[d]
								}
							})
						}
					}, c("ObservableMixin"));
					b = a;
					g["default"] = b
				}), 98);
				__d("sdk.Runtime", ["JSSDKRuntimeConfig", "sdk.Model"], (function(a, b, c, d, e, f, g) {
					var h = {
							UNKNOWN: 0,
							PAGETAB: 1,
							CANVAS: 2,
							PLATFORM: 4
						},
						i = new(c("sdk.Model"))({
							AccessToken: "",
							AutoLogAppEvents: !1,
							ClientID: "",
							CookieUserID: "",
							EnforceHttps: !1,
							Environment: h.UNKNOWN,
							FamilyLoginLoaded: !1,
							GraphDomain: "",
							Initialized: !1,
							IsSPIN: Boolean(d("JSSDKRuntimeConfig").isSPIN),
							IsVersioned: !1,
							KidDirectedSite: void 0,
							Locale: d("JSSDKRuntimeConfig").locale,
							LoggedIntoFacebook: void 0,
							LoginStatus: void 0,
							Revision: d("JSSDKRuntimeConfig").revision,
							Rtl: d("JSSDKRuntimeConfig").rtl,
							Scope: void 0,
							SDKAB: d("JSSDKRuntimeConfig").sdkab,
							SDKUrl: d("JSSDKRuntimeConfig").sdkurl,
							SDKNS: d("JSSDKRuntimeConfig").sdkns,
							ShouldLoadFamilyLogin: !1,
							UseCookie: !1,
							UseLocalStorage: !0,
							UserID: "",
							Version: void 0
						});
					ES("Object", "assign", !1, i, {
						ENVIRONMENTS: h,
						isEnvironment: function(a) {
							var b = this.getEnvironment();
							return(a | b) === b
						},
						isCanvasEnvironment: function() {
							return this.isEnvironment(h.CANVAS) || this.isEnvironment(h.PAGETAB)
						}
					});
					(function() {
						var a = /app_runner/.test(window.name) ? h.PAGETAB : /iframe_canvas/.test(window.name) ? h.CANVAS : h.UNKNOWN;
						(a | h.PAGETAB) === a && (a |= h.CANVAS);
						i.setEnvironment(a)
					})();
					a = i;
					g["default"] = a
				}), 98);
				__d("UrlMap", ["invariant", "UrlMapConfig", "sdk.Runtime"], (function(a, b, c, d, e, f, g, h) {
					function a(a) {
						var b = "https";
						if(a === "graph_domain") {
							var e = c("sdk.Runtime").getGraphDomain();
							e ? a = "graph_".concat(e) : a = "graph"
						}
						if(a in d("UrlMapConfig")) return b + "://" + d("UrlMapConfig")[a];
						a in d("UrlMapConfig") || h(0, 2511, a);
						return ""
					}
					g.resolve = a
				}), 98);
				__d("sdk.Scribe", ["QueryString", "UrlMap", "sdk.Runtime"], (function(a, b, c, d, e, f, g) {
					var h = {};

					function a(a, b, e) {
						e === void 0 && (e = !1);
						if(a === "jssdk_error") {
							var f = ES("JSON", "stringify", !1, b);
							if(Object.prototype.hasOwnProperty.call(h, f)) return;
							else h[f] = !0
						}
						if(b.extra != null && typeof b.extra === "object") {
							f = b.extra;
							f.revision = c("sdk.Runtime").getRevision()
						}
						f = new Image();
						var g = d("UrlMap").resolve("www") + "/platform/scribe_endpoint.php/";
						e || (f.crossOrigin = "anonymous");
						f.src = c("QueryString").appendToUrl(g, {
							c: a,
							m: ES("JSON", "stringify", !1, babelHelpers["extends"]({}, b, {
								isSPIN: c("sdk.Runtime").getIsSPIN()
							}))
						})
					}
					g.log = a
				}), 98);
				__d("sdk.FeatureFunctor", [], (function(a, b, c, d, e, f) {
					function g(a, b, c) {
						if(a.features && b in a.features) {
							a = a.features[b];
							if(typeof a === "object" && typeof a.rate === "number")
								if(a.rate && Math.random() * 100 <= a.rate) return a.value || !0;
								else return a.value ? null : !1;
							else return a
						}
						return c
					}

					function a(a) {
						return function() {
							for(var b = arguments.length, c = new Array(b), d = 0; d < b; d++) c[d] = arguments[d];
							if(c.length < 2) throw new Error("Default value is required");
							var e = c[0],
								f = c[1];
							return g(a, e, f)
						}
					}
					f.create = a
				}), 66);
				__d("sdk.feature", ["JSSDKConfig", "sdk.FeatureFunctor"], (function(a, b, c, d, e, f, g) {
					a = d("sdk.FeatureFunctor").create(d("JSSDKConfig"));
					g["default"] = a
				}), 98);
				__d("sdk.Cookie", ["QueryString", "sdk.Runtime", "sdk.Scribe", "sdk.feature"], (function(a, b, c, d, e, f, g) {
					var h = null,
						i = ["fblo_", "fbsr_", "fbm_"];

					function j(a, b, e, f) {
						if(!ES(i, "includes", !0, a)) {
							d("sdk.Scribe").log("jssdk_error", {
								appId: c("sdk.Runtime").getClientID(),
								error: "unknown_cookie_prefix." + a
							});
							if(c("sdk.feature")("limit_unknown_cookie_setting", !1)) return
						}
						a = a + c("sdk.Runtime").getClientID();
						f = f ? "; SameSite=None;Secure" : "";
						var g = h !== null && h !== ".";
						g && (document.cookie = a + "=; expires=Wed, 04 Feb 2004 08:00:00 GMT" + f, document.cookie = a + "=; expires=Wed, 04 Feb 2004 08:00:00 GMT;domain=" + location.hostname + f);
						var j = new Date(e).toUTCString();
						document.cookie = a + "=" + b + (b && e === 0 ? "" : "; expires=" + j) + "; path=/" + (g ? "; domain=" + ((a = h) != null ? a : "") : "") + f
					}

					function k(a) {
						a = a + c("sdk.Runtime").getClientID();
						a = new RegExp("\\b" + a + "=([^;]*)\\b");
						a = document.cookie.match(a);
						if(a == null) return null;
						else return a[1]
					}

					function a(a) {
						h = a;
						a = c("QueryString").encode({
							base_domain: h !== null && h !== "." ? h : ""
						});
						var b = new Date();
						b.setFullYear(b.getFullYear() + 1);
						j("fbm_", a, b.getTime(), !0)
					}

					function b() {
						return h
					}

					function l() {
						var a = k("fbm_");
						if(a != null && h === null) {
							a = c("QueryString").decode(a);
							h = a.base_domain;
							return {
								base_domain: h
							}
						}
						return null
					}

					function e() {
						return k("fbsr_")
					}

					function f(a, b) {
						if(a === "") throw new Error("Value passed to Cookie.setSignedRequestCookie was empty.");
						j("fbsr_", a, b, !0)
					}

					function m() {
						l(), j("fbsr_", "", 0, !0)
					}
					g.setRaw = j;
					g.getRaw = k;
					g.setDomain = a;
					g.getDomain = b;
					g.loadMeta = l;
					g.loadSignedRequest = e;
					g.setSignedRequestCookie = f;
					g.clearSignedRequestCookie = m
				}), 98);
				__d("CORSRequest", ["Log", "QueryString", "RequestConstants", "sdk.Cookie", "sdk.safelyParseResponse", "wrapFunction"], (function(a, b, c, d, e, f, g) {
					function h(a, b, d) {
						d === void 0 && (d = {
							withCredentials: !1
						});
						if(!self.XMLHttpRequest) return null;
						var e = new XMLHttpRequest(),
							f = function() {};
						((d = d) == null ? void 0 : d.withCredentials) && (e.withCredentials = !0);
						if("withCredentials" in e) e.open(a, b, !0), e.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
						else if(self.XDomainRequest) {
							e = new XDomainRequest();
							try {
								e.open(a, b), e.onprogress = e.ontimeout = f
							} catch(a) {
								return null
							}
						} else return null;
						var g = {
								send: function(a) {
									e.send(a)
								}
							},
							h = c("wrapFunction")(function() {
								h = f, "onload" in g && g.onload(e)
							}, "entry", "XMLHttpRequest:load"),
							i = c("wrapFunction")(function() {
								i = f, "onerror" in g && g.onerror(e)
							}, "entry", "XMLHttpRequest:error");
						e.onload = function() {
							h()
						};
						e.onerror = function() {
							i()
						};
						e.onreadystatechange = function() {
							e.readyState == 4 && (e.status == 200 ? h() : i())
						};
						return g
					}
					var i = "for (;;);",
						j = i.length;

					function k(a) {
						a.substring(0, j) == i && (a = a.substring(j));
						return a
					}

					function a(a, b, e, f, g) {
						g === void 0 && (g = {
							withCredentials: !1
						});
						if(ES(a, "includes", !0, "/../") || ES(a, "includes", !0, "/..\\") || ES(a, "includes", !0, "\\../") || ES(a, "includes", !0, "\\..\\")) {
							d("Log").error("CORSRequest.execute(): path traversal is not allowed.");
							return !1
						}
						try {
							if(self.document) {
								var i = d("sdk.Cookie").getRaw("cppo");
								i && (a = c("QueryString").appendToUrl(a, c("QueryString").encode({
									__cppo: i
								})))
							}
						} catch(a) {}
						e.suppress_http_code = 1;
						i = c("QueryString").encode(e);
						b != "post" && (a = c("QueryString").appendToUrl(a, i), i = "");
						e = h(b, a, g);
						if(!e) return !1;
						e.onload = function(b) {
							f(c("sdk.safelyParseResponse")(k(b.responseText), a, b.status))
						};
						e.onerror = function(b) {
							b.responseText ? f(c("sdk.safelyParseResponse")(k(b.responseText), a, b.status)) : f({
								error: babelHelpers["extends"]({}, d("RequestConstants").PARSE_ERROR_TEMPLATE, {
									status: b.status
								})
							})
						};
						e.send(i);
						return !0
					}
					b = {
						execute: a
					};
					e = b;
					g["default"] = e
				}), 98);
				__d("ApiClient", ["ApiBatcher", "ApiClientUtils", "Assert", "CORSRequest", "Log", "ObservableMixin", "QueryString", "UrlMap", "flattenObject"], (function(a, b, c, d, e, f, g) {
					var h, i, j, k = [],
						l = !1,
						m = 2e3,
						n = {
							fql_query: !0,
							fql_multiquery: !0,
							friends_get: !0,
							notifications_get: !0,
							stream_get: !0,
							users_getinfo: !0
						},
						o = ["cors"],
						p = 0,
						q = [],
						r = 0,
						s = 0,
						t, u = d("Log");

					function v(a, b, d, e) {
						var f = r !== 0 && p >= r;
						if(f) {
							q.push(function() {
								return v(a, b, d, e)
							});
							y.inform("request.queued", a, b, d);
							return
						}
						p++;
						var g = babelHelpers["extends"]({}, j, d);
						g.pretty = g.pretty || 0;
						g = c("flattenObject")(g);
						f = {
							cors: c("CORSRequest")
						};
						var i = {},
							m = g.access_token || h;
						m && (i.access_token = m);
						b !== "get" && k.forEach(function(a) {
							i[a] = g[a]
						});
						m = Object.keys(i);
						m.length > 0 && (a = c("QueryString").appendToUrl(a, i), delete g.access_token);
						m = o;
						for(var n = 0; n < m.length; n++) {
							var s = f[m[n]],
								t = babelHelpers["extends"]({}, g);
							if(s.execute(a, b, t, e, {
									withCredentials: l
								})) return
						}
						e({
							error: {
								type: "no-transport",
								message: "Could not find a usable transport for request"
							}
						})
					}

					function w(a, b, c, d, e, f, g, h) {
						if(d.transport && d.transport === "chunked" && h === !1) {
							a(g, !1);
							return
						}
						g && g.error && y.inform("request.error", b, c, d, g, Date.now() - e, f);
						y.inform("request.complete", b, c, d, g, Date.now() - e, f);
						p--;
						a && a(g);
						h = q.length > 0 && p < r;
						if(h) {
							b = q.shift();
							b()
						}
					}

					function x() {
						for(var a = arguments.length, b = new Array(a), c = 0; c < a; c++) b[c] = arguments[c];
						var e = d("ApiClientUtils").parseCallDataFromArgs(b),
							f = e.uri,
							g = e.callback,
							h = e.params,
							i = h.method;
						z(f, i) && (i = "post");
						var j = f.getProtocol() && f.getDomain() ? f.setQueryData({}).toString() : d("UrlMap").resolve("graph_domain") + f.getPath(),
							k = s++;
						"_fb_domain" in h && y.setKeptQueryParams(["_fb_domain"]);
						y.inform("request.prepare", j, h, k);
						v(j, i == "get" ? "get" : "post", h, ES(w, "bind", !0, null, g, f.getPath(), i, h, Date.now(), k))
					}

					function a() {
						var a;
						t || (t = new(c("ApiBatcher"))(x, i));
						(a = t).scheduleBatchCall.apply(a, arguments)
					}

					function b(a, b) {
						c("Assert").isObject(a);
						c("Assert").isString(a.method, "method missing");
						b || u.warn("No callback passed to the ApiClient");
						var e = a.method.toLowerCase().replace(".", "_");
						a.format = "json-strings";
						a.api_key = i;
						e = e in n ? "api_read" : "api";
						e = d("UrlMap").resolve(e) + "/restserver.php";
						var f = s++;
						b = ES(w, "bind", !0, null, b, "/restserver.php", "get", a, Date.now(), f);
						v(e, "get", a, b)
					}

					function e(a) {
						return c("ApiBatcher").prepareBatchParams(a, k)
					}
					var y = ES("Object", "assign", !1, new(c("ObservableMixin"))(), {
						setAccessToken: function(a) {
							h && a && h !== a && u.error("You are overriding current access token, that means some other app is expecting different access token and you will probably break things. Please consider passing access_token directly to API parameters instead of overriding the global settings."), h = a
						},
						setAccessTokenForClientID: function(a, b) {
							h && i && i !== b ? u.error("Not overriding access token since it was not initialized by your application.") : h = a
						},
						setWithCredentials: function(a) {
							l = a
						},
						getWithCredentials: function() {
							return l
						},
						getClientID: function() {
							return i
						},
						getAccessToken: function() {
							return h
						},
						setClientID: function(a) {
							i && i !== a && u.warn("Warning: Two different applications have attempted to set the client ID. Overriding the previously set client ID."), i = a
						},
						setDefaultParams: function(a) {
							j = a
						},
						getDefaultParams: function() {
							return j
						},
						setDefaultTransports: function(a) {
							o = a
						},
						setLogger: function(a) {
							u = a
						},
						setMaxConcurrentRequests: function(a) {
							r = a
						},
						setKeptQueryParams: function(a) {
							k = a
						},
						getCurrentlyExecutingRequestCount: function() {
							return p
						},
						getQueuedRequestCount: function() {
							return q.length
						},
						rest: b,
						graph: x,
						scheduleBatchCall: a,
						prepareBatchParams: e
					});

					function z(a, b) {
						return a.toString().length > m && b === "get"
					}
					f = y;
					g["default"] = f
				}), 98);
				__d("fbinstant/common/graphAPIResponseHandler", ["fbinstant/common/apiError", "fbinstant/common/errorCode"], (function(a, b, c, d, e, f, g) {
					"use strict";

					function a(a, b, d) {
						if(!a) return d(new(c("fbinstant/common/apiError"))({
							code: c("fbinstant/common/errorCode").UNKNOWN,
							message: "No response data provided"
						}));
						return a.error ? d(h(a.error)) : b(a)
					}

					function h(a) {
						try {
							a = a.error_user_msg;
							var b = null;
							if(a == null || a.length === 0) b = c("fbinstant/common/errorCode").UNKNOWN;
							else switch(a) {
								case "Player cannot see the game.":
								case "Invalid app.":
								case "No page associated to the Instant Game.":
								case "Can not perform this operation before game start.":
								case "User already subscribed to this game bot.":
									b = c("fbinstant/common/errorCode").INVALID_OPERATION;
									break;
								case "Exceed API policy limit.":
									b = c("fbinstant/common/errorCode").RATE_LIMITED;
									break;
								case "Client version does not support this API.":
									b = c("fbinstant/common/errorCode").CLIENT_UNSUPPORTED_OPERATION;
									break;
								case "Invalid entry point":
									b = c("fbinstant/common/errorCode").INVALID_PARAM;
									break;
								default:
									b = c("fbinstant/common/errorCode").UNKNOWN
							}
							return new(c("fbinstant/common/apiError"))({
								code: b,
								message: a
							})
						} catch(a) {
							return new(c("fbinstant/common/apiError"))({
								code: c("fbinstant/common/errorCode").UNKNOWN,
								message: ""
							})
						}
					}
					g["default"] = a
				}), 98);
				__d("fbinstant/latest/asid", [], (function(a, b, c, d, e, f) {
					"use strict";
					a = function() {
						function a(a) {
							this.$1 = a
						}
						var b = a.prototype;
						b.getASID = function() {
							return this.$1.asid
						};
						b.getSignature = function() {
							return this.$1.signed_request
						};
						return a
					}();
					f["default"] = a
				}), 66);
				__d("InstantGamesSDKFeatures", [], (function(a, b, c, d, e, f) {
					"use strict";
					a = "flexible";
					f.FLEXIBLE = a
				}), 66);
				__d("fbinstant/common/consoleLogger", [], (function(a, b, c, d, e, f) {
					"use strict";
					a = {
						init: function(a) {
							if(!a) return;
							window.addEventListener("error", function(b) {
								b = {
									type: "error",
									message: b && b.message || "",
									filename: b && b.filename || null,
									lineno: b && b.lineno || null,
									colno: b && b.colno || null,
									stack: b && b.error && b.error.stack || null
								};
								try {
									b.print = ES("JSON", "stringify", !1, b)
								} catch(a) {
									b.print = b.message
								}
								a(b)
							})
						}
					};
					b = a;
					f["default"] = b
				}), 66);
				__d("getActiveElement", [], (function(a, b, c, d, e, f) {
					function a(a) {
						a === void 0 && (a = document);
						if(a === void 0) return null;
						try {
							return a.activeElement || a.body
						} catch(b) {
							return a.body
						}
					}
					f["default"] = a
				}), 66);
				__d("fbinstant/common/gestureCommandManager", ["getActiveElement"], (function(a, b, c, d, e, f, g) {
					"use strict";
					a = function() {
						function a() {}
						var b = a.prototype;
						b.handleCommand = function(a) {
							a = a.gesture;
							if(!a.length) return;
							var b = a[0];
							switch(b) {
								case "swipe":
									b = this.$1(a);
									b != null && this.$2(b);
									break
							}
						};
						b.$1 = function(a) {
							if(a.length !== 6) return null;
							var b = parseFloat(a[1]),
								c = parseFloat(a[2]),
								d = parseFloat(a[3]),
								e = parseFloat(a[4]);
							a = parseFloat(a[5]);
							return isNaN(b) || b < 0 || b > 1 || isNaN(c) || c < 0 || c > 1 || isNaN(d) || d < 0 || d > 1 || isNaN(e) || e < 0 || e > 1 || isNaN(a) || a < 0 ? null : {
								x1: b,
								y1: c,
								x2: d,
								y2: e,
								speed: a
							}
						};
						b.$2 = function(a) {
							var b = c("getActiveElement")();
							if(b == null) return;
							var d = a.x1 * b.clientWidth,
								e = a.y1 * b.clientHeight,
								f = a.x2 * b.clientWidth,
								g = a.y2 * b.clientHeight,
								h = new MouseEvent("mousedown", {
									view: window,
									bubbles: !0,
									cancelable: !0,
									clientX: d,
									clientY: e
								}),
								i = new MouseEvent("mousemove", {
									view: window,
									bubbles: !0,
									cancelable: !0,
									clientX: f,
									clientY: g
								}),
								j = new MouseEvent("mouseup", {
									view: window,
									bubbles: !0,
									cancelable: !0,
									clientX: f,
									clientY: g
								});
							b = (f = document.elementFromPoint(d, e)) != null ? f : b;
							b.dispatchEvent(h);
							(function(b) {
								window.setTimeout(function() {
									b.dispatchEvent(i), b.dispatchEvent(j)
								}, a.speed * 1e3)
							})(b)
						};
						return a
					}();
					b = new a();
					g["default"] = b
				}), 98);
				__d("fbinstant/common/igPromiseDone", [], (function(a, b, c, d, e, f) {
					"use strict";

					function a(a, b, c) {
						var d = arguments.length > 1 ? a.then(b, c) : a;
						d.then(function() {}, function() {})
					}
					f["default"] = a
				}), 66);
				__d("fbinstant/common/performanceTracker", [], (function(a, b, c, d, e, f) {
					"use strict";
					a = function() {
						function a() {}
						var b = a.prototype;
						b.init = function(a) {
							return
						};
						return a
					}();
					b = new a();
					f["default"] = b
				}), 66);
				__d("fbinstant/latest/heartbeat", ["fbinstant/latest/internalStates"], (function(a, b, c, d, e, f, g) {
					"use strict";
					var h = 6e4,
						i = {
							_heartbeatInterval: null,
							startHeartbeat: function() {
								i._heartbeatInterval && i.stopHeartbeat(), i.sendHeartbeat("start"), i._heartbeatInterval = window.setInterval(function() {
									i.sendHeartbeat("update")
								}, h)
							},
							stopHeartbeat: function() {
								window.clearInterval(i._heartbeatInterval), i._heartbeatInterval = null, i.sendHeartbeat("end")
							},
							sendHeartbeat: function(a) {
								c("fbinstant/latest/internalStates").getMessageSender().sendPassThroughAsync("HEARTBEAT", {
									action: a,
									contextID: c("fbinstant/latest/internalStates").getContext().getID()
								})
							}
						};
					a = i;
					g["default"] = a
				}), 98);
				__d("fbinstant/latest/messageConfig", [], (function(a, b, c, d, e, f) {
					"use strict";
					a = {
						getConfig: function() {
							if(window.QuicksilverAndroid) return {
								sender: window.QuicksilverAndroid,
								source: "Android"
							};
							else if(window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.quicksilver) return {
								sender: window.webkit.messageHandlers.quicksilver || parent,
								source: "iOS"
							};
							var a = new RegExp("[?&]source(=([^&#]*)|&|#|$)", "i");
							a = a.exec(window.location.href);
							return {
								sender: parent,
								source: a && a[2] && decodeURIComponent(a[2].replace(/\+/g, " "))
							}
						}
					};
					b = a;
					f["default"] = b
				}), 66);
				__d("fbinstant/latest/messageReceiver", [], (function(a, b, c, d, e, f) {
					"use strict";
					a = function() {
						function a() {
							this.$1 = null
						}
						var b = a.prototype;
						b.$2 = function(a) {
							if(!a.data || !a.data.source) return;
							var b = a.data.type;
							if(!b) return;
							b = this.$1 && this.$1[b];
							if(!b) return;
							b(a.data.content)
						};
						b.init = function() {
							this.$1 = {}, window.addEventListener("message", ES(this.$2, "bind", !0, this))
						};
						b.registerMessageHandler = function(a, b, c) {
							var d = this.$1;
							if(!d) return;
							c ? d[a] = ES(b.triggerSubscribers, "bind", !0, b, c) : d[a] = ES(b.triggerSubscribers, "bind", !0, b)
						};
						return a
					}();
					b = new a();
					f["default"] = b
				}), 66);
				__d("fbinstant/latest/lifecycle", ["InstantGamesGameState", "InstantGamesSDKFeatures", "InstantGamesSDKMessages", "fbinstant/common/apiError", "fbinstant/common/consoleLogger", "fbinstant/common/errorCode", "fbinstant/common/genericDialogs", "fbinstant/common/gestureCommandManager", "fbinstant/common/getJSONEntrypointData", "fbinstant/common/igPromiseDone", "fbinstant/common/performanceTracker", "fbinstant/common/supportedFeaturesManager", "fbinstant/latest/entryPoint", "fbinstant/latest/heartbeat", "fbinstant/latest/internalStates", "fbinstant/latest/messageConfig", "fbinstant/latest/messageReceiver"], (function(a, b, c, d, e, f, g) {
					"use strict";

					function h(a) {
						var b = null;
						return new Promise(function(d) {
							c("fbinstant/latest/internalStates").getGameStartEvent().on(d), a.send(c("InstantGamesSDKMessages").ON_GAME_READY), b = function(a) {
								c("fbinstant/latest/internalStates").getGameStartEvent().off(d);
								return a
							}
						}).then(b)
					}

					function i(a) {
						c("fbinstant/latest/internalStates").updateContext(a);
						a.customUpdateID && c("fbinstant/latest/internalStates").setCustomUpdateID(a.customUpdateID);
						var b = null;
						if(a.entryPointData) {
							var d = c("fbinstant/common/getJSONEntrypointData")(a.entryPointData);
							d != null && (d.sender && d.data ? b = d.data : (c("fbinstant/latest/internalStates").getMessageSender().sendPassThroughAsync("ENTRYPOINT_DATA", {
								entrypoint_data: a.entryPointData
							}), b = d))
						}
						d = null;
						a.entryPoint && (d = a.entryPoint);
						c("fbinstant/latest/internalStates").updateEntryPoint(new(c("fbinstant/latest/entryPoint"))(d, b))
					}
					var j = {
						initializeAsync: function(a) {
							a.initialize(c("fbinstant/latest/messageConfig").getConfig());
							a.send(c("InstantGamesSDKMessages").ON_BEGIN_LOAD, 100);
							c("fbinstant/common/consoleLogger").init(function(b) {
								a.send(c("InstantGamesSDKMessages").ON_CONSOLE, b)
							});
							c("fbinstant/latest/messageReceiver").init();
							c("fbinstant/latest/messageReceiver").registerMessageHandler(c("InstantGamesSDKMessages").REQUEST_SCREENSHOT, c("fbinstant/latest/internalStates").getRequestScreenshotEvent(), null);
							c("fbinstant/latest/messageReceiver").registerMessageHandler(c("InstantGamesSDKMessages").RESTART, c("fbinstant/latest/internalStates").getRestartEvent(), null);
							c("fbinstant/latest/messageReceiver").registerMessageHandler(c("InstantGamesSDKMessages").RESOLVE_PROMISE, a.getResolvePromiseEvent(), null);
							c("fbinstant/latest/messageReceiver").registerMessageHandler(c("InstantGamesSDKMessages").REJECT_PROMISE, a.getRejectPromiseEvent(), null);
							c("fbinstant/latest/messageReceiver").registerMessageHandler(c("InstantGamesSDKMessages").PAUSE, c("fbinstant/latest/internalStates").getPauseEvent(), null);
							c("fbinstant/latest/messageReceiver").registerMessageHandler(c("InstantGamesSDKMessages").RESUME, c("fbinstant/latest/internalStates").getResumeEvent(), null);
							c("fbinstant/latest/messageReceiver").registerMessageHandler(c("InstantGamesSDKMessages").VIDEO_PLAYER_INSTANCE_TIMESTAMP_UPDATE, c("fbinstant/latest/internalStates").getVideoPlayerInstanceTimestampUpdateEvent(), null);
							c("fbinstant/latest/messageReceiver").registerMessageHandler(c("InstantGamesSDKMessages").ANALYTICS_LOG_EVENT, c("fbinstant/latest/internalStates").getAnalyticsLogEvent(), null);
							c("fbinstant/latest/messageReceiver").registerMessageHandler(c("InstantGamesSDKMessages").REALTIME_RECEIVE_MESSAGE, c("fbinstant/latest/internalStates").getReceiveMessageEvent(), null);
							c("fbinstant/latest/messageReceiver").registerMessageHandler(c("InstantGamesSDKMessages").REALTIME_RECEIVE_STATE_UPDATE, c("fbinstant/latest/internalStates").getReceiveStateUpdateEvent(), null);
							c("fbinstant/latest/internalStates").getGameStartEvent().on(function() {
								c("fbinstant/latest/internalStates").setGameState(d("InstantGamesGameState").PLAYING)
							});
							c("fbinstant/latest/messageReceiver").registerMessageHandler(c("InstantGamesSDKMessages").GAME_START, c("fbinstant/latest/internalStates").getGameStartEvent(), null);
							c("fbinstant/latest/messageReceiver").registerMessageHandler(c("InstantGamesSDKMessages").PAYMENTS_INITIALIZED, c("fbinstant/latest/internalStates").getPaymentsState().getPaymentsInitializedEvent(), null);
							c("fbinstant/latest/internalStates").getGestureCommandEvent().on(function(a) {
								c("fbinstant/common/gestureCommandManager").handleCommand(a)
							});
							c("fbinstant/latest/messageReceiver").registerMessageHandler(c("InstantGamesSDKMessages").GESTURE_COMMAND, c("fbinstant/latest/internalStates").getGestureCommandEvent(), null);
							return a.sendAsync(c("InstantGamesSDKMessages").INITIALIZE_ASYNC, {
								sdkVersion: c("fbinstant/latest/internalStates").getSdkVersion()
							}).then(function(a) {
								c("fbinstant/latest/internalStates").isInitialized() || c("fbinstant/latest/internalStates").initialize(a)
							})
						},
						startGameAsync: function(a) {
							if(c("fbinstant/latest/internalStates").getGameState() === d("InstantGamesGameState").PLAYING) return Promise.resolve();
							if(!c("fbinstant/latest/internalStates").isInitialized()) return Promise.reject(new(c("fbinstant/common/apiError"))({
								code: c("fbinstant/common/errorCode").INVALID_OPERATION,
								message: "The SDK has not been initialized yet. Please wait for FBInstant.initializeAsync to resolve before calling this API."
							}));
							if(!c("fbinstant/common/supportedFeaturesManager").isSupported(d("InstantGamesSDKFeatures").FLEXIBLE)) return Promise.reject(new(c("fbinstant/common/apiError"))({
								code: c("fbinstant/common/errorCode").CLIENT_UNSUPPORTED_OPERATION,
								message: "The client does not support Instant Games."
							}));
							c("fbinstant/common/performanceTracker").init(a);
							c("fbinstant/latest/internalStates").setLoadingProgress(100);
							return h(a).then(function(b) {
								c("fbinstant/latest/internalStates").setGameState(d("InstantGamesGameState").PLAYING);
								b && i(b);
								return a.sendPassThroughAsync("APP_CUSTOM_EVENT", {
									contextID: c("fbinstant/latest/internalStates").getContext().getID(),
									entryPointRawSource: c("fbinstant/latest/internalStates").getEntryPoint().getSource(),
									payload: c("fbinstant/latest/internalStates").getEntryPoint().getData(),
									customUpdateID: c("fbinstant/latest/internalStates").getCustomUpdateID()
								})
							}).then(function(b) {
								var d;
								b && b.shouldShowMessagingConsentDialog ? d = a.showGenericDialogAsync(c("fbinstant/common/genericDialogs").CUSTOM_UPDATE_MESSAGING_CONSENT, b.args).then()["catch"](function(b) {
									b.code === c("fbinstant/common/errorCode").USER_INPUT && j.quit(a)
								}) : d = Promise.resolve();
								b && b.shouldPromptTournamentStatus && c("fbinstant/common/igPromiseDone")(d, function() {
									return a.showGenericDialogAsync(c("fbinstant/common/genericDialogs").TOURNAMENT_STATUS, b.args).then(function(a) {
										if(a != null && a.context_id != null && a.context_type != null && a.context_size != null) {
											var b = a.context_id,
												d = a.context_type;
											a = a.context_size;
											c("fbinstant/latest/internalStates").updateContext({
												contextID: b,
												contextType: d,
												contextSize: a
											})
										}
									})
								});
								c("fbinstant/latest/heartbeat").startHeartbeat()
							})
						},
						setLoadingProgress: function(a, b) {
							if(b >= 0 && b <= 100 && b > c("fbinstant/latest/internalStates").getLoadingProgress()) a.send(c("InstantGamesSDKMessages").ON_PROGRESS_LOAD, b), c("fbinstant/latest/internalStates").setLoadingProgress(b);
							else {
								a = "FbInstant::setLoadingProgress(";
								a = ") is invalid. The progress must be";
								b < 0 || b > 100 || b <= c("fbinstant/latest/internalStates").getLoadingProgress()
							}
						},
						quit: function(a) {
							a.send(c("InstantGamesSDKMessages").QUIT, {}), c("fbinstant/latest/heartbeat").stopHeartbeat()
						}
					};
					a = j;
					g["default"] = a
				}), 98);
				__d("fbinstant/latest/logger", ["fbinstant/common/getUrlParam", "fbinstant/latest/internalStates"], (function(a, b, c, d, e, f, g) {
					"use strict";
					var h = 15e3;

					function a(a, b, c) {
						i([a, b].filter(Boolean).join("_"));
						for(var d = arguments.length, e = new Array(d > 3 ? d - 3 : 0), g = 3; g < d; g++) e[g - 3] = arguments[g];
						return c.apply(null, e)
					}

					function b(a, b) {
						var c = window.setTimeout(function() {
							return l(b)
						}, h);
						return a.then(function(a) {
							window.clearTimeout(c);
							k(b);
							return a
						})["catch"](function(a) {
							window.clearTimeout(c);
							var d = a && a.code || null,
								e = a && a.message || null;
							j(b, d, e);
							throw a
						})
					}

					function i(a) {
						var b = c("fbinstant/latest/internalStates").getAnalytics();
						b.logAPICall(a);
						m(n(a, "api_call"), "API", {
							type: "api_call",
							name: a
						})
					}

					function d(a) {
						var b = c("fbinstant/latest/internalStates").getAnalytics();
						b.logBeginAsyncAPICall(a);
						m(n(a, "api_begin_async"), "API", {
							type: "api_begin_async",
							name: a
						})
					}

					function j(a, b, d) {
						var e = c("fbinstant/latest/internalStates").getAnalytics();
						e.logRejectAsyncAPICall(a, b);
						m(n(a, "api_reject_async", String(b)), "API", {
							type: "api_reject_async",
							name: a,
							code: b,
							errorMessage: d
						})
					}

					function k(a) {
						var b = c("fbinstant/latest/internalStates").getAnalytics();
						b.logResolveAsyncAPICall(a);
						m(n(a, "api_resolve_async"), "API", {
							type: "api_resolve_async",
							name: a
						})
					}

					function l(a) {
						m(n(a, "api_exceed_duration"), "API", {
							type: "api_exceed_duration",
							name: a
						})
					}

					function m(a, b, d) {
						d = babelHelpers["extends"]({}, d, {
							key: a,
							gameState: c("fbinstant/latest/internalStates").getGameState(),
							clientTime: new Date().getTime(),
							environmentType: c("fbinstant/common/getUrlParam")("environment_type")
						});
						c("fbinstant/latest/internalStates").getInternalEventLogger().logEvent(b, c("fbinstant/latest/internalStates"), d)
					}

					function n(a, b, c) {
						c === void 0 && (c = null);
						return c != null ? a + "." + b + "." + c : a + "." + b
					}
					e = {
						logAPICall: a,
						logBeginAsync: d,
						logAsyncResult: b,
						logReject: j,
						logResolve: k
					};
					g["default"] = e
				}), 98);
				__d("fbinstant/latest/graphApi", ["ApiClient", "fbinstant/common/apiError", "fbinstant/common/errorCode", "fbinstant/common/genericDialogs", "fbinstant/common/graphAPIResponseHandler", "fbinstant/latest/asid", "fbinstant/latest/internalStates", "fbinstant/latest/lifecycle", "fbinstant/latest/logger"], (function(a, b, c, d, e, f, g) {
					"use strict";
					var h = null,
						i = null,
						j = 2e3;

					function k(a, b, d) {
						var e = "graph_api_async";
						c("fbinstant/latest/logger").logBeginAsync(e);
						var f = "https://graph.fb.gg" + a;
						a = m().then(function() {
							return new Promise(function(a, e) {
								return c("ApiClient").graph(f, b, d, function(b) {
									return c("fbinstant/common/graphAPIResponseHandler")(b, a, e)
								})
							})
						});
						return c("fbinstant/latest/logger").logAsyncResult(a, e)
					}

					function a() {
						i == null && (i = k("/me", "get", {
							fields: ["id"]
						}).then(function(a) {
							return a.id
						}));
						return i
					}

					function b() {
						return c("fbinstant/latest/internalStates").getMessageSender().sendPassThroughAsync("ASID").then(function(a) {
							if(a && a.asid) return new(c("fbinstant/latest/asid"))(a)
						})
					}

					function d() {
						h === null && (h = c("fbinstant/latest/internalStates").getMessageSender().sendPassThroughAsync("PLATFORM_INIT", {
							payload: c("fbinstant/latest/internalStates").getEntryPoint().getData(),
							context_token_id: c("fbinstant/latest/internalStates").getContext().getID(),
							retry_count: 0
						}).then(function(a) {
							if(a == null || a.access_token == null) throw a;
							p(a)
						}, function() {
							h = null
						})["catch"](function(a) {
							var b = [1, 2, 3].reduce(function(a, b) {
								return a.then(function(a) {
									return n(b, a).then()
								})
							}, new Promise(function(b) {
								return b(a)
							}));
							return b.then(function(a) {
								if(a == null || a.access_token == null) {
									c("fbinstant/latest/lifecycle").quit(c("fbinstant/latest/internalStates").getMessageSender());
									throw new(c("fbinstant/common/apiError"))({
										code: c("fbinstant/common/errorCode").NOT_AUTHORIZED,
										message: "The player is not currently authorized."
									})
								} else p(a)
							})
						})["finally"](function() {
							return l()
						}));
						return h
					}

					function l() {
						if(!c("fbinstant/latest/internalStates").getShouldCallGraphApiDuringInitialization()) return Promise.resolve();
						if(c("ApiClient").getAccessToken() == null) throw new(c("fbinstant/common/apiError"))({
							code: c("fbinstant/common/errorCode").NOT_AUTHORIZED,
							message: "The player is not currently authorized."
						});
						return k("/me", "get", {
							fields: ["instant_game_player_id", "name", "picture", "locale"]
						}).then(function(a) {
							c("fbinstant/latest/internalStates").setPlayerID(a.instant_game_player_id);
							c("fbinstant/latest/internalStates").setPlayerName(a.name);
							c("fbinstant/latest/internalStates").setPlayerPhoto(a.picture.data.url);
							c("fbinstant/latest/internalStates").setLocale((a = a.locale) != null ? a : "")
						})
					}

					function m() {
						var a = c("ApiClient").getAccessToken();
						return a ? Promise.resolve() : c("fbinstant/latest/internalStates").getMessageSender().sendPassThroughAsync("GET_ACCESS_TOKEN").then(function(a) {
							if(a && a.access_token) {
								c("ApiClient").setAccessToken(a.access_token);
								return Promise.resolve()
							}
						})
					}

					function n(a, b) {
						if(b == null || b.access_token == null) return o(a);
						else return new Promise(function(a) {
							return a(b)
						})
					}

					function o(a) {
						return new Promise(function(b) {
							return window.setTimeout(function() {
								return c("fbinstant/latest/internalStates").getMessageSender().sendPassThroughAsync("PLATFORM_INIT", {
									payload: c("fbinstant/latest/internalStates").getEntryPoint().getData(),
									context_token_id: c("fbinstant/latest/internalStates").getContext().getID(),
									retry_count: a
								}).then(function(a) {
									return b(a)
								})
							}, j * a)
						})
					}

					function p(a) {
						a && a.access_token && c("ApiClient").setAccessToken(a.access_token), a && a.should_show_oba_toast && window.setTimeout(function() {
							c("fbinstant/latest/internalStates").getMessageSender().showGenericDialogAsync(c("fbinstant/common/genericDialogs").OBA_TOAST)
						}, 5e3), a && a.should_call_graph_api_during_initialization != null && c("fbinstant/latest/internalStates").setShouldCallGraphApiDuringInitialization(a.should_call_graph_api_during_initialization), a && a.is_canvas_to_instant_games_silent_reauth && window.setTimeout(function() {
							c("fbinstant/latest/internalStates").getMessageSender().showGenericDialogAsync(c("fbinstant/common/genericDialogs").CANVAS_TO_INSTANT_GAMES_SILENT_REAUTH_NOTICE)
						}, 5e3)
					}
					e = {
						initPlatformAsync: d,
						getPlayerASIDAsync: a,
						getPlayerSignedASIDAsync: b,
						requestAsync: k
					};
					g["default"] = e
				}), 98);
				__d("fbinstant/common/connectedPlayers", ["InstantGamesPassThroughRequestType", "InstantGamesSDKMessages", "fbinstant/common/apiResultComparator", "fbinstant/latest/config", "fbinstant/latest/graphApi"], (function(a, b, c, d, e, f, g) {
					"use strict";
					var h = function() {
						function a(a) {
							this.$1 = a
						}
						var b = a.prototype;
						b.getID = function() {
							return this.$1.id
						};
						b.getName = function() {
							return this.$1.name
						};
						b.getPhoto = function() {
							return this.$1.photo
						};
						return a
					}();

					function i() {
						return c("fbinstant/latest/graphApi").requestAsync("/me/friends?limit=1000", "get", {
							fields: ["instant_game_player_id", "name", "picture"]
						}).then(function(a) {
							return a.data.map(function(a) {
								return new h({
									id: a.instant_game_player_id,
									name: a.name,
									photo: a.picture.data.url
								})
							})
						})
					}
					a = {
						fetchAsync: function(a) {
							a.sendAsync(c("InstantGamesSDKMessages").GET_CONNECTED_PLAYERS_ASYNC, {});
							return a.sendPassThroughAsync(c("InstantGamesPassThroughRequestType").GET_CONNECTED_PLAYERS, {}).then(function(b) {
								c("fbinstant/latest/config").shouldUseGraphAPI("getConnectedPlayersAsync") && i().then(function(d) {
									var e = d.map(function(a) {
											return a.getID()
										}),
										f = b.map(function(a) {
											return a.id
										}),
										g = d.map(function(a) {
											return a.getName()
										}),
										h = b.map(function(a) {
											return a.name
										});
									d = d.map(function(a) {
										return a.getPhoto()
									});
									var i = b.map(function(a) {
										return a.photo
									});
									c("fbinstant/common/apiResultComparator")(a, f, e, "one_to_one_match", "player.getConnectedPlayer.id");
									c("fbinstant/common/apiResultComparator")(a, h, g, "one_to_one_match", "player.getConnectedPlayer.name");
									c("fbinstant/common/apiResultComparator")(a, i, d, "observing", "player.getConnectedPlayer.photo")
								});
								return b.map(function(a) {
									return new h(a)
								})
							})
						},
						ConnectedPlayer: h
					};
					b = a;
					g["default"] = b
				}), 98);
				__d("fbinstant/releases/6.3/contextCreator.6.3", ["InstantGamesGameState", "InstantGamesSDKMessages", "Promise", "fbinstant/common/apiError", "fbinstant/common/connectedPlayers", "fbinstant/common/errorCode", "fbinstant/common/validator", "fbinstant/releases/6.3/internalStates.6.3"], (function(a, b, c, d, e, f) {
					"use strict";
					a = {
						createAsync: function(a) {
							if(b("fbinstant/releases/6.3/internalStates.6.3").getGameState() !== b("InstantGamesGameState").PLAYING) return b("Promise").reject(new(b("fbinstant/common/apiError"))({
								code: b("fbinstant/common/errorCode").INVALID_OPERATION,
								message: "Can not perform this operation before game start."
							}));
							var c = [a];
							return b("fbinstant/common/validator").validate(c, b("fbinstant/common/validator").array().schemaType(b("fbinstant/common/validator").string()).length(1)).then(function() {
								var a = c.indexOf(b("fbinstant/releases/6.3/internalStates.6.3").getPlayerID() || "");
								a > -1 && c.splice(a, 1);
								if(c.length === 0) return b("Promise").reject(new(b("fbinstant/common/apiError"))({
									code: b("fbinstant/common/errorCode").INVALID_PARAM,
									message: "At least one player id besides the current player must be provided."
								}));
								a = b("fbinstant/releases/6.3/internalStates.6.3").getConnectedPlayersPromise();
								if(a) return a;
								a = b("fbinstant/common/connectedPlayers").fetchAsync(b("fbinstant/releases/6.3/internalStates.6.3").getMessageSender());
								b("fbinstant/releases/6.3/internalStates.6.3").setConnectedPlayersPromise(a);
								return a
							}).then(function(a) {
								a = new Set(a.map(function(a) {
									return a.getID()
								}));
								for(var d = 0; d < c.length; d++) {
									var e = c[d];
									if(!a.has(e)) return b("Promise").reject(new(b("fbinstant/common/apiError"))({
										code: b("fbinstant/common/errorCode").INVALID_PARAM,
										message: "Provided ID " + String(e) + " is not a connected player of the current player."
									}))
								}
								return b("fbinstant/releases/6.3/internalStates.6.3").getMessageSender().sendAsync(b("InstantGamesSDKMessages").CONTEXT_CREATE_ASYNC, {
									playerIDs: c
								})
							}).then(function(a) {
								b("fbinstant/releases/6.3/internalStates.6.3").updateContext(a);
								return
							})
						}
					};
					e.exports = a
				}), null);
				__d("fbinstant/releases/6.3/contextPlayers.6.3", ["InstantGamesSDKMessages", "fbinstant/releases/6.3/internalStates.6.3"], (function(a, b, c, d, e, f) {
					"use strict";
					var g = function() {
						function a(a) {
							this.$1 = a
						}
						var b = a.prototype;
						b.getID = function() {
							return this.$1.id
						};
						b.getName = function() {
							return this.$1.name || null
						};
						b.getPhoto = function() {
							return this.$1.photo || null
						};
						return a
					}();
					a = {
						fetchAsync: function() {
							return b("fbinstant/releases/6.3/internalStates.6.3").getMessageSender().sendAsync(b("InstantGamesSDKMessages").CONTEXT_PLAYERS_FETCH_ASYNC, {}).then(function(a) {
								return a.map(function(a) {
									return new g(a)
								})
							})
						},
						ContextPlayer: g
					};
					e.exports = a
				}), null);
				__d("fbinstant/releases/6.3/contextSwitcher.6.3", ["InstantGamesGameState", "InstantGamesSDKMessages", "Promise", "fbinstant/common/apiError", "fbinstant/common/errorCode", "fbinstant/common/genericDialogs", "fbinstant/common/getUrlParam", "fbinstant/common/platform", "fbinstant/common/validator", "fbinstant/releases/6.3/internalStates.6.3", "fbinstant/releases/6.3/platform.6.3"], (function(a, b, c, d, e, f) {
					"use strict";
					var g = {
						switchAsync: function(a) {
							if(b("fbinstant/releases/6.3/internalStates.6.3").getGameState() !== b("InstantGamesGameState").PLAYING) return b("Promise").reject(new(b("fbinstant/common/apiError"))({
								code: b("fbinstant/common/errorCode").INVALID_OPERATION,
								message: "Can not perform this operation before game start."
							}));
							if(a === b("fbinstant/releases/6.3/internalStates.6.3").getContext().getID()) return b("Promise").reject(new(b("fbinstant/common/apiError"))({
								code: b("fbinstant/common/errorCode").SAME_CONTEXT,
								message: "Must specify a context other than the current one."
							}));
							var c = Number(b("fbinstant/common/getUrlParam")("use_generic_dialog_for_switch_async")) || 0;
							if(c === 1 && b("fbinstant/releases/6.3/platform.6.3").getPlatform() !== b("fbinstant/common/platform").WEB && b("fbinstant/releases/6.3/platform.6.3").getPlatform() !== b("fbinstant/common/platform").MOBILE_WEB) return b("fbinstant/releases/6.3/internalStates.6.3").getMessageSender().sendPassThroughAsync("CAN_SWITCH_CONTEXT", {
								id: a
							}).then(function() {
								return g._switchAsync(a, !0)
							});
							c = Number(b("fbinstant/common/getUrlParam")("gcgs")) || 0;
							c = c === 1;
							if(!c) return g._canSwitchAsync(a).then(function(c) {
								return !c ? b("Promise").reject(new(b("fbinstant/common/apiError"))({
									code: b("fbinstant/common/errorCode").CLIENT_REQUIRES_UPDATE,
									message: "Client requires update to support this operation"
								})) : g._switchAsync(a, !1)
							});
							else return g._switchAsync(a, !1)
						},
						_switchAsync: function(a, c) {
							return b("fbinstant/common/validator").validate(a, b("fbinstant/common/validator").string()).then(function() {
								if(c) return b("fbinstant/releases/6.3/internalStates.6.3").getMessageSender().showGenericDialogAsync(b("fbinstant/common/genericDialogs").CONTEXT_SWITCH, {
									newContextTokenID: a,
									switchContext: !0
								});
								else return b("fbinstant/releases/6.3/internalStates.6.3").getMessageSender().sendAsync(b("InstantGamesSDKMessages").CONTEXT_SWITCH_ASYNC, {
									id: a
								})
							}).then(function(a) {
								b("fbinstant/releases/6.3/internalStates.6.3").updateContext(a);
								return
							})
						},
						_canSwitchAsync: function(a) {
							return b("fbinstant/releases/6.3/internalStates.6.3").getMessageSender().sendPassThroughAsync("CAN_SWITCH_CONTEXT", {
								id: a
							})["catch"](function(a) {
								return !1
							})
						}
					};
					e.exports = g
				}), null);
				__d("fbinstant/releases/6.3/context.6.3", ["InstantGamesChallengePickerFilter", "InstantGamesGameState", "InstantGamesSDKMessages", "Promise", "fbinstant/common/apiError", "fbinstant/common/dataAccessRecorder", "fbinstant/common/errorCode", "fbinstant/common/getUrlParam", "fbinstant/common/validator", "fbinstant/releases/6.3/contextCreator.6.3", "fbinstant/releases/6.3/contextPlayers.6.3", "fbinstant/releases/6.3/contextSwitcher.6.3", "fbinstant/releases/6.3/internalStates.6.3", "fbinstant/releases/6.3/logger.6.3"], (function(a, b, c, d, e, f) {
					"use strict";
					a = {
						getID: function() {
							b("fbinstant/releases/6.3/logger.6.3").logAPICall("context_getID");
							var a = b("fbinstant/releases/6.3/internalStates.6.3").getContext().getID();
							a != null && b("fbinstant/common/dataAccessRecorder")("RECORD_GET_CONTEXT_INFO", b("fbinstant/releases/6.3/internalStates.6.3").getMessageSender(), a, {
								contextID: a
							});
							return a
						},
						getType: function() {
							b("fbinstant/releases/6.3/logger.6.3").logAPICall("context_getType");
							var a = b("fbinstant/releases/6.3/internalStates.6.3").getContext().getType(),
								c = b("fbinstant/releases/6.3/internalStates.6.3").getContext().getID();
							a === "POST" && b("fbinstant/common/getUrlParam")("oct") && (a = "THREAD");
							c != null && b("fbinstant/common/dataAccessRecorder")("RECORD_GET_CONTEXT_INFO", b("fbinstant/releases/6.3/internalStates.6.3").getMessageSender(), c, {
								contextID: c
							});
							return a
						},
						isSizeBetween: function(a, c) {
							b("fbinstant/releases/6.3/logger.6.3").logAPICall("context_isSizeBetween");
							var d = b("fbinstant/releases/6.3/internalStates.6.3").getContext().getContextSizeResponse();
							if(d) return d;
							d = b("fbinstant/releases/6.3/internalStates.6.3").getContext().getSize();
							if(a !== null && !ES("Number", "isInteger", !1, a) || c !== null && !ES("Number", "isInteger", !1, c) || d == null) return null;
							var e = !1;
							(!a || d >= a) && (!c || d <= c) && (a || c) && (e = !0);
							d = {
								answer: e,
								minSize: a,
								maxSize: c
							};
							b("fbinstant/releases/6.3/internalStates.6.3").getContext().setContextSizeResponse(d);
							return d
						},
						switchAsync: function(a) {
							var c = "context_switchAsync";
							b("fbinstant/releases/6.3/logger.6.3").logBeginAsync(c);
							a = b("fbinstant/releases/6.3/contextSwitcher.6.3").switchAsync(a);
							return b("fbinstant/releases/6.3/logger.6.3").logAsyncResult(a, c)
						},
						chooseAsync: function(a) {
							var c = "context_chooseAsync";
							b("fbinstant/releases/6.3/logger.6.3").logBeginAsync(c);
							if(b("fbinstant/releases/6.3/internalStates.6.3").getGameState() !== b("InstantGamesGameState").PLAYING) {
								b("fbinstant/releases/6.3/logger.6.3").logReject(c, b("fbinstant/common/errorCode").INVALID_OPERATION);
								return b("Promise").reject(new(b("fbinstant/common/apiError"))({
									code: b("fbinstant/common/errorCode").INVALID_OPERATION,
									message: "Can not perform this operation before game start."
								}))
							}
							var d = a || {};
							d.filters = d.filters || [];
							d.maxSize = d.maxSize || null;
							d.minSize = d.minSize || null;
							if(d.maxSize && d.maxSize < 2) {
								b("fbinstant/releases/6.3/logger.6.3").logReject(c, b("fbinstant/common/errorCode").INVALID_PARAM);
								return b("Promise").reject(new(b("fbinstant/common/apiError"))({
									code: b("fbinstant/common/errorCode").INVALID_PARAM,
									message: "The maximum context size must be at least 2"
								}))
							} else if(d.minSize && d.minSize < 2) {
								b("fbinstant/releases/6.3/logger.6.3").logReject(c, b("fbinstant/common/errorCode").INVALID_PARAM);
								return b("Promise").reject(new(b("fbinstant/common/apiError"))({
									code: b("fbinstant/common/errorCode").INVALID_PARAM,
									message: "The minimum context size must be at least 2"
								}))
							} else if(d.maxSize && d.minSize && d.minSize > d.maxSize) {
								b("fbinstant/releases/6.3/logger.6.3").logReject(c, b("fbinstant/common/errorCode").INVALID_PARAM);
								return b("Promise").reject(new(b("fbinstant/common/apiError"))({
									code: b("fbinstant/common/errorCode").INVALID_PARAM,
									message: "The min size cannot be greater than the max size"
								}))
							}
							for(var a = d.filters, e = Array.isArray(a), f = 0, a = e ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
								var g;
								if(e) {
									if(f >= a.length) break;
									g = a[f++]
								} else {
									f = a.next();
									if(f.done) break;
									g = f.value
								}
								g = g;
								if(!Object.prototype.hasOwnProperty.call(b("InstantGamesChallengePickerFilter"), g)) {
									b("fbinstant/releases/6.3/logger.6.3").logReject(c, b("fbinstant/common/errorCode").INVALID_PARAM);
									return b("Promise").reject(new(b("fbinstant/common/apiError"))({
										code: b("fbinstant/common/errorCode").INVALID_PARAM,
										message: 'Filter "' + g + '" is not supported'
									}))
								}
							}
							g = b("fbinstant/common/validator").object().keys({
								filters: b("fbinstant/common/validator").array().schemaType(b("fbinstant/common/validator").string()),
								maxSize: b("fbinstant/common/validator").number().optional(),
								minSize: b("fbinstant/common/validator").number().optional()
							});
							f = b("fbinstant/common/validator").validate(d, g).then(function() {
								return b("fbinstant/releases/6.3/internalStates.6.3").getMessageSender().sendAsync(b("InstantGamesSDKMessages").CONTEXT_CHOOSE_ASYNC, d)
							}).then(function(a) {
								b("fbinstant/releases/6.3/internalStates.6.3").updateContext(a);
								return
							});
							return b("fbinstant/releases/6.3/logger.6.3").logAsyncResult(f, c)
						},
						addPlayerAsync: function(a) {
							var c = "context_addPlayerAsync";
							b("fbinstant/releases/6.3/logger.6.3").logBeginAsync(c);
							if(b("fbinstant/releases/6.3/internalStates.6.3").getGameState() !== b("InstantGamesGameState").PLAYING) {
								b("fbinstant/releases/6.3/logger.6.3").logReject(c, b("fbinstant/common/errorCode").INVALID_OPERATION);
								return b("Promise").reject(new(b("fbinstant/common/apiError"))({
									code: b("fbinstant/common/errorCode").INVALID_OPERATION,
									message: "Can not perform this operation before game start."
								}))
							}
							var d = {
								playerID: a ? a : null
							};
							a = b("fbinstant/common/validator").object().keys({
								playerID: b("fbinstant/common/validator").string().optional()
							});
							a = b("fbinstant/common/validator").validate(d, a).then(function() {
								return b("fbinstant/releases/6.3/internalStates.6.3").getMessageSender().sendAsync(b("InstantGamesSDKMessages").CONTEXT_ADD_PLAYER_ASYNC, d)
							}).then(function(a) {
								b("fbinstant/releases/6.3/internalStates.6.3").updateContext(a);
								return
							});
							return b("fbinstant/releases/6.3/logger.6.3").logAsyncResult(a, c)
						},
						createAsync: function(a) {
							var c = "context_createAsync";
							b("fbinstant/releases/6.3/logger.6.3").logBeginAsync(c);
							a = b("fbinstant/releases/6.3/contextCreator.6.3").createAsync(a);
							return b("fbinstant/releases/6.3/logger.6.3").logAsyncResult(a, c)
						},
						getPlayersAsync: function() {
							var a = "context_fetchPlayers";
							b("fbinstant/releases/6.3/logger.6.3").logBeginAsync(a);
							if(b("fbinstant/releases/6.3/internalStates.6.3").getContext().getID() === null) {
								b("fbinstant/releases/6.3/logger.6.3").logReject(a, b("fbinstant/common/errorCode").INVALID_OPERATION);
								return b("Promise").reject(new(b("fbinstant/common/apiError"))({
									code: b("fbinstant/common/errorCode").INVALID_OPERATION,
									message: "Cannot get context players in a solo context"
								}))
							}
							var c = b("fbinstant/releases/6.3/contextPlayers.6.3").fetchAsync().then(function(c) {
								b("fbinstant/releases/6.3/logger.6.3").logResolve(a);
								return c
							})["catch"](function(c) {
								b("fbinstant/releases/6.3/logger.6.3").logReject(a);
								throw c
							});
							return b("fbinstant/releases/6.3/logger.6.3").logAsyncResult(c, a)
						}
					};
					e.exports = a
				}), null);
				__d("InstantGameSDKCustomUpdateNotificationType", [], (function(a, b, c, d, e, f) {
					a = Object.freeze({
						PUSH: "PUSH",
						NO_PUSH: "NO_PUSH"
					});
					f["default"] = a
				}), 66);
				__d("InstantGameSDKEndAction", [], (function(a, b, c, d, e, f) {
					a = Object.freeze({
						SCORE: "SCORE",
						CUSTOM: "CUSTOM",
						NONE: "NONE"
					});
					f["default"] = a
				}), 66);
				__d("InstantGamesCustomUpdateDeliveryPolicy", [], (function(a, b, c, d, e, f) {
					e.exports = Object.freeze({
						IMMEDIATE: "IMMEDIATE",
						LAST: "LAST",
						IMMEDIATE_CLEAR: "IMMEDIATE_CLEAR"
					})
				}), null);
				__d("fbinstant/releases/6.3/endGamePayload.6.3", ["InstantGameSDKCustomUpdateNotificationType", "InstantGameSDKEndAction", "InstantGamesCustomUpdateDeliveryPolicy", "Promise", "fbinstant/common/apiError", "fbinstant/common/errorCode", "fbinstant/common/validator"], (function(a, b, c, d, e, f) {
					"use strict";
					a = function() {
						function a() {}
						var c = a.prototype;
						c.format = function(a) {
							if(!a || !(a instanceof Object) || !a.action || a.action !== b("InstantGameSDKEndAction").CUSTOM) return b("Promise").reject(new(b("fbinstant/common/apiError"))({
								code: b("fbinstant/common/errorCode").INVALID_PARAM,
								message: 'Update action property must be "CUSTOM"'
							}));
							if(!a.image && !a.media) return b("Promise").reject(new(b("fbinstant/common/apiError"))({
								code: b("fbinstant/common/errorCode").INVALID_PARAM,
								message: "Custom update requires image or media input"
							}));
							return a.media && !a.media.gif && !a.media.video ? b("Promise").reject(new(b("fbinstant/common/apiError"))({
								code: b("fbinstant/common/errorCode").INVALID_PARAM,
								message: "Media content requires at least video or gif."
							})) : this.$1(a)
						};
						c.$1 = function(a) {
							var c = a.strategy && a.strategy in b("InstantGamesCustomUpdateDeliveryPolicy") ? a.strategy : b("InstantGamesCustomUpdateDeliveryPolicy").IMMEDIATE,
								d = a.notification && a.notification in b("InstantGameSDKCustomUpdateNotificationType") ? a.notification : b("InstantGameSDKCustomUpdateNotificationType").NO_PUSH;
							a = babelHelpers["extends"]({}, a, {
								strategy: c,
								notification: d
							});
							c = b("fbinstant/common/validator").object().keys({
								action: b("fbinstant/common/validator").string(),
								template: b("fbinstant/common/validator").string(),
								cta: b("fbinstant/common/validator").union([b("fbinstant/common/validator").string(), b("fbinstant/common/validator").object()]).optional(),
								image: b("fbinstant/common/validator").string().optional(),
								media: b("fbinstant/common/validator").object().keys({
									gif: b("fbinstant/common/validator").object().keys({
										url: b("fbinstant/common/validator").string()
									}).optional(),
									video: b("fbinstant/common/validator").object().keys({
										url: b("fbinstant/common/validator").string()
									}).optional()
								}).optional(),
								text: b("fbinstant/common/validator").union([b("fbinstant/common/validator").string(), b("fbinstant/common/validator").object()]),
								data: b("fbinstant/common/validator").object().optional().maxSize(1e3),
								strategy: b("fbinstant/common/validator").string(),
								notification: b("fbinstant/common/validator").string()
							});
							return this.$2(a, c, ["action", "cta", "image", "media", "text", "data", "strategy"], ["data"])
						};
						c.$2 = function(a, c, d, e) {
							var f = this;
							e === void 0 && (e = []);
							return b("fbinstant/common/validator").validate(a, c).then(function(a) {
								return b("Promise").resolve(f.$3(a, d, e))
							})
						};
						c.$3 = function(a, b, c) {
							c === void 0 && (c = []);
							var d = this.$4(a);
							a = babelHelpers["extends"]({}, a, d);
							d = {};
							for(var e in a)
								if(c.indexOf(e) !== -1) try {
									a[e] = ES("JSON", "stringify", !1, a[e])
								} catch(a) {}
							for(e in a) b.indexOf(e) === -1 && (d[e] = a[e], delete a[e]);
							a.extra = ES("JSON", "stringify", !1, d);
							return a
						};
						c.$4 = function(a) {
							var b = {},
								c = a.text,
								d = a.cta;
							typeof c === "object" && (b.text_localizations = c.localizations, a.text = c["default"]);
							d != null && typeof d !== "string" && (b.cta_localizations = d.localizations, a.cta = d["default"]);
							return b
						};
						return a
					}();
					e.exports = new a()
				}), null);
				__d("fbinstant/releases/6.3/heartbeat.6.3", ["fbinstant/releases/6.3/internalStates.6.3"], (function(a, b, c, d, e, f) {
					"use strict";
					var g = 6e4,
						h = {
							_heartbeatInterval: null,
							startHeartbeat: function() {
								h._heartbeatInterval && h.stopHeartbeat(), h.sendHeartbeat("start"), h._heartbeatInterval = window.setInterval(function() {
									h.sendHeartbeat("update")
								}, g)
							},
							stopHeartbeat: function() {
								window.clearInterval(h._heartbeatInterval), h._heartbeatInterval = null, h.sendHeartbeat("end")
							},
							sendHeartbeat: function(a) {
								b("fbinstant/releases/6.3/internalStates.6.3").getMessageSender().sendPassThroughAsync("HEARTBEAT", {
									action: a,
									contextID: b("fbinstant/releases/6.3/internalStates.6.3").getContext().getID()
								})
							}
						};
					e.exports = h
				}), null);
				__d("fbinstant/releases/6.3/messageConfig.6.3", [], (function(a, b, c, d, e, f) {
					"use strict";
					a = {
						getConfig: function() {
							if(window.QuicksilverAndroid) return {
								sender: window.QuicksilverAndroid,
								source: "Android"
							};
							else if(window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.quicksilver) return {
								sender: window.webkit.messageHandlers.quicksilver || parent,
								source: "iOS"
							};
							var a = new RegExp("[?&]source(=([^&#]*)|&|#|$)", "i");
							a = a.exec(window.location.href);
							return {
								sender: parent,
								source: a && a[2] && decodeURIComponent(a[2].replace(/\+/g, " "))
							}
						}
					};
					e.exports = a
				}), null);
				__d("fbinstant/releases/6.3/messageReceiver.6.3", [], (function(a, b, c, d, e, f) {
					"use strict";
					a = function() {
						function a() {
							this.$1 = null
						}
						var b = a.prototype;
						b.$2 = function(a) {
							if(!a.data || !a.data.source) return;
							var b = a.data.type;
							if(!b) return;
							b = this.$1 && this.$1[b];
							if(!b) return;
							b(a.data.content)
						};
						b.init = function() {
							this.$1 = {}, window.addEventListener("message", ES(this.$2, "bind", !0, this))
						};
						b.registerMessageHandler = function(a, b, c) {
							var d = this.$1;
							if(!d) return;
							c ? d[a] = ES(b.triggerSubscribers, "bind", !0, b, c) : d[a] = ES(b.triggerSubscribers, "bind", !0, b)
						};
						return a
					}();
					e.exports = new a()
				}), null);
				__d("fbinstant/releases/6.3/lifecycle.6.3", ["InstantGamesGameState", "InstantGamesSDKFeatures", "InstantGamesSDKMessages", "Promise", "fbinstant/common/apiError", "fbinstant/common/consoleLogger", "fbinstant/common/errorCode", "fbinstant/common/gestureCommandManager", "fbinstant/common/getJSONEntrypointData", "fbinstant/common/igPromiseDone", "fbinstant/common/performanceTracker", "fbinstant/common/supportedFeaturesManager", "fbinstant/releases/6.3/entryPoint.6.3", "fbinstant/releases/6.3/heartbeat.6.3", "fbinstant/releases/6.3/internalStates.6.3", "fbinstant/releases/6.3/messageConfig.6.3", "fbinstant/releases/6.3/messageReceiver.6.3"], (function(a, b, c, d, e, f) {
					"use strict";

					function g(a) {
						var c = null;
						return new(b("Promise"))(function(d) {
							b("fbinstant/releases/6.3/internalStates.6.3").getGameStartEvent().on(d), a.send(b("InstantGamesSDKMessages").ON_GAME_READY), c = function(a) {
								b("fbinstant/releases/6.3/internalStates.6.3").getGameStartEvent().off(d);
								return a
							}
						}).then(c)
					}

					function h(a) {
						b("fbinstant/releases/6.3/internalStates.6.3").updateContext(a);
						a.customUpdateID && b("fbinstant/releases/6.3/internalStates.6.3").setCustomUpdateID(a.customUpdateID);
						var c = null;
						if(a.entryPointData) {
							var d = b("fbinstant/common/getJSONEntrypointData")(a.entryPointData);
							d != null && (d.sender && d.data ? c = d.data : (b("fbinstant/releases/6.3/internalStates.6.3").getMessageSender().sendPassThroughAsync("ENTRYPOINT_DATA", {
								entrypoint_data: a.entryPointData
							}), c = d))
						}
						d = null;
						a.entryPoint && (d = a.entryPoint);
						b("fbinstant/releases/6.3/internalStates.6.3").updateEntryPoint(new(b("fbinstant/releases/6.3/entryPoint.6.3"))(d, c))
					}
					a = {
						initializeAsync: function(a) {
							var c, d, e;
							a.initialize(b("fbinstant/releases/6.3/messageConfig.6.3").getConfig());
							a.send((c = b("InstantGamesSDKMessages")).ON_BEGIN_LOAD, 100);
							b("fbinstant/common/consoleLogger").init(function(c) {
								a.send(b("InstantGamesSDKMessages").ON_CONSOLE, c)
							});
							(d = b("fbinstant/releases/6.3/messageReceiver.6.3")).init();
							d.registerMessageHandler(c.RESTART, (e = b("fbinstant/releases/6.3/internalStates.6.3")).getRestartEvent(), null);
							d.registerMessageHandler(c.RESOLVE_PROMISE, a.getResolvePromiseEvent(), null);
							d.registerMessageHandler(c.REJECT_PROMISE, a.getRejectPromiseEvent(), null);
							d.registerMessageHandler(c.PAUSE, e.getPauseEvent(), null);
							d.registerMessageHandler(c.RESUME, e.getResumeEvent(), null);
							d.registerMessageHandler(c.ANALYTICS_LOG_EVENT, e.getAnalyticsLogEvent(), null);
							d.registerMessageHandler(c.REALTIME_RECEIVE_MESSAGE, e.getReceiveMessageEvent(), null);
							d.registerMessageHandler(c.REALTIME_RECEIVE_STATE_UPDATE, e.getReceiveStateUpdateEvent(), null);
							e.getGameStartEvent().on(function() {
								b("fbinstant/releases/6.3/internalStates.6.3").setGameState(b("InstantGamesGameState").PLAYING)
							});
							d.registerMessageHandler(c.GAME_START, e.getGameStartEvent(), null);
							d.registerMessageHandler(c.PAYMENTS_INITIALIZED, e.getPaymentsState().getPaymentsInitializedEvent(), null);
							e.getGestureCommandEvent().on(function(a) {
								b("fbinstant/common/gestureCommandManager").handleCommand(a)
							});
							d.registerMessageHandler(c.GESTURE_COMMAND, e.getGestureCommandEvent(), null);
							return a.sendAsync(c.INITIALIZE_ASYNC, {
								sdkVersion: e.getSdkVersion()
							}).then(function(a) {
								b("fbinstant/releases/6.3/internalStates.6.3").isInitialized() || b("fbinstant/releases/6.3/internalStates.6.3").initialize(a)
							})
						},
						startGameAsync: function(a) {
							if(b("fbinstant/releases/6.3/internalStates.6.3").getGameState() === b("InstantGamesGameState").PLAYING) return b("Promise").resolve();
							if(!b("fbinstant/releases/6.3/internalStates.6.3").isInitialized()) return b("Promise").reject(new(b("fbinstant/common/apiError"))({
								code: b("fbinstant/common/errorCode").INVALID_OPERATION,
								message: "The SDK has not been initialized yet. Please wait for FBInstant.initializeAsync to resolve before calling this API."
							}));
							if(!b("fbinstant/common/supportedFeaturesManager").isSupported(b("InstantGamesSDKFeatures").FLEXIBLE)) return b("Promise").reject(new(b("fbinstant/common/apiError"))({
								code: b("fbinstant/common/errorCode").CLIENT_UNSUPPORTED_OPERATION,
								message: "The client does not support Instant Games."
							}));
							b("fbinstant/common/performanceTracker").init(a);
							b("fbinstant/releases/6.3/internalStates.6.3").setLoadingProgress(100);
							return g(a).then(function(c) {
								b("fbinstant/releases/6.3/internalStates.6.3").setGameState(b("InstantGamesGameState").PLAYING);
								c && h(c);
								return a.sendPassThroughAsync("APP_CUSTOM_EVENT", {
									contextID: b("fbinstant/releases/6.3/internalStates.6.3").getContext().getID(),
									entryPointRawSource: b("fbinstant/releases/6.3/internalStates.6.3").getEntryPoint().getSource(),
									customUpdateID: b("fbinstant/releases/6.3/internalStates.6.3").getCustomUpdateID()
								})
							}).then(function(c) {
								c && c.shouldPromptTournamentStatus && b("fbinstant/common/igPromiseDone")(a.showGenericDialogAsync("tournament_status", c.args).then(function(a) {
									if(a != null && a.context_id != null && a.context_type != null && a.context_size != null) {
										var c = a.context_id,
											d = a.context_type;
										a = a.context_size;
										b("fbinstant/releases/6.3/internalStates.6.3").updateContext({
											contextID: c,
											contextType: d,
											contextSize: a
										})
									}
								})), b("fbinstant/releases/6.3/heartbeat.6.3").startHeartbeat()
							})
						},
						setLoadingProgress: function(a, c) {
							if(c >= 0 && c <= 100 && c > b("fbinstant/releases/6.3/internalStates.6.3").getLoadingProgress()) a.send(b("InstantGamesSDKMessages").ON_PROGRESS_LOAD, c), b("fbinstant/releases/6.3/internalStates.6.3").setLoadingProgress(c);
							else {
								a = "FbInstant::setLoadingProgress(";
								a = ") is invalid. The progress must be";
								c < 0 || c > 100 || c <= b("fbinstant/releases/6.3/internalStates.6.3").getLoadingProgress()
							}
						},
						quit: function(a) {
							a.send(b("InstantGamesSDKMessages").QUIT, {}), b("fbinstant/releases/6.3/heartbeat.6.3").stopHeartbeat()
						}
					};
					e.exports = a
				}), null);
				__d("fbinstant/releases/6.3/graphApi.6.3", ["ApiClient", "fbinstant/common/apiError", "fbinstant/common/errorCode", "fbinstant/common/genericDialogs", "fbinstant/common/graphAPIResponseHandler", "fbinstant/releases/6.3/internalStates.6.3", "fbinstant/releases/6.3/lifecycle.6.3", "fbinstant/releases/6.3/logger.6.3"], (function(a, b, c, d, e, f) {
					"use strict";
					var g = null,
						h = 2e3;

					function i(a, c, d) {
						var e = "graph_api_async";
						b("fbinstant/releases/6.3/logger.6.3").logBeginAsync(e);
						var f = "https://graph.fb.gg" + a;
						a = k().then(function() {
							return new Promise(function(a, e) {
								return b("ApiClient").graph(f, c, d, function(c) {
									return b("fbinstant/common/graphAPIResponseHandler")(c, a, e)
								})
							})
						});
						return b("fbinstant/releases/6.3/logger.6.3").logAsyncResult(a, e)
					}

					function a() {
						g === null && (g = b("fbinstant/releases/6.3/internalStates.6.3").getMessageSender().sendPassThroughAsync("PLATFORM_INIT", {
							payload: b("fbinstant/releases/6.3/internalStates.6.3").getEntryPoint().getData(),
							context_token_id: b("fbinstant/releases/6.3/internalStates.6.3").getContext().getID(),
							retry_count: 0
						}).then(function(a) {
							if(a == null || a.access_token == null) throw a;
							n(a)
						}, function() {
							g = null
						})["catch"](function(a) {
							var c = [1, 2, 3].reduce(function(a, b) {
								return a.then(function(a) {
									return l(b, a).then()
								})
							}, new Promise(function(b) {
								return b(a)
							}));
							return c.then(function(a) {
								if(a == null || a.access_token == null) {
									b("fbinstant/releases/6.3/lifecycle.6.3").quit(b("fbinstant/releases/6.3/internalStates.6.3").getMessageSender());
									throw new(b("fbinstant/common/apiError"))({
										code: b("fbinstant/common/errorCode").NOT_AUTHORIZED,
										message: "The player is not currently authorized."
									})
								} else n(a)
							})
						})["finally"](function() {
							return j()
						}));
						return g
					}

					function j() {
						if(!b("fbinstant/releases/6.3/internalStates.6.3").getShouldCallGraphApiDuringInitialization()) return Promise.resolve();
						if(b("ApiClient").getAccessToken() == null) throw new(b("fbinstant/common/apiError"))({
							code: b("fbinstant/common/errorCode").NOT_AUTHORIZED,
							message: "The player is not currently authorized."
						});
						return i("/me", "get", {
							fields: ["instant_game_player_id", "name", "picture", "locale"]
						}).then(function(a) {
							var c;
							(c = b("fbinstant/releases/6.3/internalStates.6.3")).setPlayerID(a.instant_game_player_id);
							c.setPlayerName(a.name);
							c.setPlayerPhoto(a.picture.data.url);
							c.setLocale((c = a.locale) != null ? c : "")
						})
					}

					function k() {
						var a = b("ApiClient").getAccessToken();
						return a ? Promise.resolve() : b("fbinstant/releases/6.3/internalStates.6.3").getMessageSender().sendPassThroughAsync("GET_ACCESS_TOKEN").then(function(a) {
							if(a && a.access_token) {
								b("ApiClient").setAccessToken(a.access_token);
								return Promise.resolve()
							}
						})
					}

					function l(a, b) {
						if(b == null || b.access_token == null) return m(a);
						else return new Promise(function(a) {
							return a(b)
						})
					}

					function m(a) {
						return new Promise(function(c) {
							return window.setTimeout(function() {
								return b("fbinstant/releases/6.3/internalStates.6.3").getMessageSender().sendPassThroughAsync("PLATFORM_INIT", {
									payload: b("fbinstant/releases/6.3/internalStates.6.3").getEntryPoint().getData(),
									context_token_id: b("fbinstant/releases/6.3/internalStates.6.3").getContext().getID(),
									retry_count: a
								}).then(function(a) {
									return c(a)
								})
							}, h * a)
						})
					}

					function n(a) {
						a && a.access_token && b("ApiClient").setAccessToken(a.access_token), a && a.should_show_oba_toast && window.setTimeout(function() {
							b("fbinstant/releases/6.3/internalStates.6.3").getMessageSender().showGenericDialogAsync(b("fbinstant/common/genericDialogs").OBA_TOAST)
						}, 5e3), a && a.should_call_graph_api_during_initialization != null && b("fbinstant/releases/6.3/internalStates.6.3").setShouldCallGraphApiDuringInitialization(a.should_call_graph_api_during_initialization), a && a.is_canvas_to_instant_games_silent_reauth && window.setTimeout(function() {
							b("fbinstant/releases/6.3/internalStates.6.3").getMessageSender().showGenericDialogAsync(b("fbinstant/common/genericDialogs").CANVAS_TO_INSTANT_GAMES_SILENT_REAUTH_NOTICE)
						}, 5e3)
					}
					c = {
						initPlatformAsync: a,
						requestAsync: i
					};
					f["default"] = c
				}), 66);
				__d("fbinstant/releases/6.3/inventory.6.3", ["InstantGamesGameState", "InstantGamesSDKMessages", "Promise", "fbinstant/common/apiError", "fbinstant/common/errorCode", "fbinstant/common/platform", "fbinstant/common/validator", "fbinstant/releases/6.3/internalStates.6.3", "fbinstant/releases/6.3/logger.6.3", "fbinstant/releases/6.3/platform.6.3"], (function(a, b, c, d, e, f) {
					"use strict";

					function a(a) {
						var c = "inventory_unlockItem";
						if(b("fbinstant/releases/6.3/internalStates.6.3").getGameState() !== b("InstantGamesGameState").PLAYING) return b("Promise").reject(new(b("fbinstant/common/apiError"))({
							code: b("fbinstant/common/errorCode").INVALID_OPERATION,
							message: "Cannot unlock item until startGameAsync() resolves."
						}));
						if(b("fbinstant/releases/6.3/platform.6.3").getPlatform() === b("fbinstant/common/platform").IOS) return b("Promise").reject(new(b("fbinstant/common/apiError"))({
							code: b("fbinstant/common/errorCode").INVALID_OPERATION,
							message: "Client not supported."
						}));
						b("fbinstant/releases/6.3/logger.6.3").logBeginAsync(c);
						var d = b("fbinstant/common/validator").object().keys({
							name: b("fbinstant/common/validator").string()
						});
						d = b("fbinstant/common/validator").validate(a, d).then(function() {
							return b("fbinstant/releases/6.3/internalStates.6.3").getMessageSender().sendAsync(b("InstantGamesSDKMessages").INVENTORY_UNLOCK_ITEM_ASYNC, {
								unlockableItemConfig: a
							})
						});
						return b("fbinstant/releases/6.3/logger.6.3").logAsyncResult(d, c)
					}
					c = {
						unlockItemAsync: a
					};
					e.exports = c
				}), null);
				__d("fbinstant/releases/6.3/leaderboards.6.3", ["Promise", "fbinstant/common/apiError", "fbinstant/common/errorCode", "fbinstant/common/rateLimiter", "fbinstant/common/validator", "fbinstant/releases/6.3/internalStates.6.3", "fbinstant/releases/6.3/logger.6.3"], (function(a, b, c, d, e, f) {
					"use strict";
					d = 20;
					f = 2e3;
					var g = new(b("fbinstant/common/rateLimiter"))(d, f);

					function h() {
						var a = g.bump();
						return a ? b("Promise").resolve() : b("Promise").reject(new(b("fbinstant/common/apiError"))({
							code: b("fbinstant/common/errorCode").RATE_LIMITED,
							message: "Game called too many leaderboard APIs too quickly. Reduce the rate of requests in order to avoid being rate-limited."
						}))
					}
					var i = function() {
							function a(a) {
								var b = a.id,
									c = a.name;
								a = a.contextID;
								this.$1 = b;
								this.$2 = c;
								this.$3 = a
							}
							var c = a.prototype;
							c.getName = function() {
								return this.$2
							};
							c.getContextID = function() {
								return this.$3
							};
							c.getEntryCountAsync = function() {
								var a = this,
									c = "Leaderboard_getEntryCountAsync";
								b("fbinstant/releases/6.3/logger.6.3").logBeginAsync(c);
								var d = h().then(function() {
									return b("fbinstant/releases/6.3/internalStates.6.3").getMessageSender().sendPassThroughAsync("LEADERBOARD_OPERATION", {
										leaderboard_id: a.$1,
										operation: "COUNT"
									})
								});
								return b("fbinstant/releases/6.3/logger.6.3").logAsyncResult(d, c)
							};
							c.setScoreAsync = function(a, c) {
								var d = this;
								c === void 0 && (c = null);
								var e = "Leaderboard_setScoreAsync";
								b("fbinstant/releases/6.3/logger.6.3").logBeginAsync(e);
								var f = b("fbinstant/common/validator").integer(),
									g = b("fbinstant/common/validator").string().optional();
								f = b("fbinstant/common/validator").validate(a, f).then(function() {
									return b("fbinstant/common/validator").validate(c, g)
								}).then(h).then(function() {
									return b("fbinstant/releases/6.3/internalStates.6.3").getMessageSender().sendPassThroughAsync("LEADERBOARD_OPERATION", {
										context_id: b("fbinstant/releases/6.3/internalStates.6.3").getContext().getID(),
										leaderboard_id: d.$1,
										operation: "SET_SCORE",
										score: a,
										extra_data: c
									})
								}).then(function(a) {
									return new j(a)
								});
								return b("fbinstant/releases/6.3/logger.6.3").logAsyncResult(f, e)
							};
							c.getPlayerEntryAsync = function() {
								var a = this,
									c = "Leaderboard_getPlayerEntryAsync";
								b("fbinstant/releases/6.3/logger.6.3").logBeginAsync(c);
								var d = h().then(function() {
									return b("fbinstant/releases/6.3/internalStates.6.3").getMessageSender().sendPassThroughAsync("LEADERBOARD_OPERATION", {
										leaderboard_id: a.$1,
										operation: "GET_ENTRY"
									})
								}).then(function(a) {
									return !a ? null : new j(a)
								});
								return b("fbinstant/releases/6.3/logger.6.3").logAsyncResult(d, c)
							};
							c.getEntriesAsync = function(a, c) {
								var d = this,
									e = "Leaderboard_getEntriesAsync";
								b("fbinstant/releases/6.3/logger.6.3").logBeginAsync(e);
								var f = b("fbinstant/common/validator").integer().optional(),
									g = b("fbinstant/common/validator").integer().optional();
								f = b("fbinstant/common/validator").validate(a, f).then(function() {
									return b("fbinstant/common/validator").validate(c, g)
								}).then(h).then(function() {
									return b("fbinstant/releases/6.3/internalStates.6.3").getMessageSender().sendPassThroughAsync("LEADERBOARD_OPERATION", {
										leaderboard_id: d.$1,
										operation: "GET_ENTRIES",
										limit: a,
										offset: c
									})
								}).then(function(a) {
									return a.map(function(a) {
										return new j(a)
									})
								});
								return b("fbinstant/releases/6.3/logger.6.3").logAsyncResult(f, e)
							};
							c.getConnectedPlayerEntriesAsync = function(a, c) {
								var d = this,
									e = "Leaderboard_getConnectedPlayerEntriesAsync";
								b("fbinstant/releases/6.3/logger.6.3").logBeginAsync(e);
								var f = b("fbinstant/common/validator").integer().optional(),
									g = b("fbinstant/common/validator").integer().optional();
								f = b("fbinstant/common/validator").validate(a, f).then(function() {
									return b("fbinstant/common/validator").validate(c, g)
								}).then(h).then(function() {
									return b("fbinstant/releases/6.3/internalStates.6.3").getMessageSender().sendPassThroughAsync("LEADERBOARD_OPERATION", {
										leaderboard_id: d.$1,
										operation: "GET_FRIENDS_ENTRIES",
										limit: a,
										offset: c
									})
								}).then(function(a) {
									return a.map(function(a) {
										return new j(a)
									})
								});
								return b("fbinstant/releases/6.3/logger.6.3").logAsyncResult(f, e)
							};
							return a
						}(),
						j = function() {
							function a(a) {
								this.$1 = a.score, this.$2 = a.format_score, this.$5 = a.rank, this.$3 = a.extra_data, this.$4 = a.ts, this.$6 = new k(a.player.name, a.player.photo, a.player.player_id)
							}
							var b = a.prototype;
							b.getScore = function() {
								return this.$1
							};
							b.getFormattedScore = function() {
								return this.$2
							};
							b.getTimestamp = function() {
								return this.$4
							};
							b.getRank = function() {
								return this.$5
							};
							b.getExtraData = function() {
								return this.$3
							};
							b.getPlayer = function() {
								return this.$6
							};
							return a
						}(),
						k = function() {
							function a(a, b, c) {
								this.$1 = a, this.$2 = c, this.$3 = b
							}
							var b = a.prototype;
							b.getName = function() {
								return this.$1
							};
							b.getPhoto = function() {
								return this.$3
							};
							b.getID = function() {
								return this.$2
							};
							return a
						}();

					function a(a) {
						return b("fbinstant/releases/6.3/internalStates.6.3").getMessageSender().sendPassThroughAsync("LEADERBOARD_FETCH", {
							name: a
						}).then(function(a) {
							var b = a.id,
								c = a.name;
							a = a.context_id;
							return new i({
								id: b,
								name: c,
								contextID: a
							})
						})
					}

					function c(a) {
						var c, d = (c = b("fbinstant/common/validator")).object().keys({
							name: c.string(),
							text: c.string().optional()
						});
						return c.validate(a, d).then(function(a) {
							return b("fbinstant/releases/6.3/internalStates.6.3").getMessageSender().sendPassThroughAsync("LEADERBOARD_UPDATE", {
								context_token_id: b("fbinstant/releases/6.3/internalStates.6.3").getContext().getID(),
								leaderboard_name: a.name,
								text: a.text
							})
						}).then(function() {})
					}
					e.exports = {
						getLeaderboardAsync: a,
						sendUpdateAsync: c,
						Leaderboard: i
					}
				}), null);
				__d("fbinstant/releases/6.3/payments.6.3", ["InstantGamesGameState", "InstantGamesSDKMessages", "Promise", "fbinstant/common/apiError", "fbinstant/common/errorCode", "fbinstant/common/supportedMessagesManager", "fbinstant/common/validator", "fbinstant/releases/6.3/internalStates.6.3", "fbinstant/releases/6.3/logger.6.3"], (function(a, b, c, d, e, f) {
					"use strict";

					function a() {
						var a = "payments_getCatalogAsync";
						b("fbinstant/releases/6.3/logger.6.3").logBeginAsync(a);
						var c = i(b("InstantGamesSDKMessages").PAYMENTS_FETCH_CATALOG_ASYNC).then(function() {
							return b("fbinstant/releases/6.3/internalStates.6.3").getMessageSender().sendAsync(b("InstantGamesSDKMessages").PAYMENTS_FETCH_CATALOG_ASYNC, {})
						});
						return b("fbinstant/releases/6.3/logger.6.3").logAsyncResult(c, a)
					}

					function c(a) {
						var c = "payments_purchaseAsync";
						if(b("fbinstant/releases/6.3/internalStates.6.3").getGameState() !== b("InstantGamesGameState").PLAYING) return b("Promise").reject(new(b("fbinstant/common/apiError"))({
							code: b("fbinstant/common/errorCode").INVALID_OPERATION,
							message: "Cannot purchase until startGameAsync() resolves."
						}));
						b("fbinstant/releases/6.3/logger.6.3").logBeginAsync(c);
						var d = b("fbinstant/common/validator").object().keys({
							productID: b("fbinstant/common/validator").string(),
							developerPayload: b("fbinstant/common/validator").string().optional()
						});
						d = b("fbinstant/common/validator").validate(a, d).then(function() {
							return i(b("InstantGamesSDKMessages").PAYMENTS_PURCHASE_ASYNC)
						}).then(function() {
							return b("fbinstant/releases/6.3/internalStates.6.3").getMessageSender().sendAsync(b("InstantGamesSDKMessages").PAYMENTS_PURCHASE_ASYNC, {
								config: a
							})
						});
						return b("fbinstant/releases/6.3/logger.6.3").logAsyncResult(d, c)
					}

					function d() {
						var a = "payments_getPurchasesAsync";
						b("fbinstant/releases/6.3/logger.6.3").logBeginAsync(a);
						var c = i(b("InstantGamesSDKMessages").PAYMENTS_FETCH_PURCHASES_ASYNC).then(function() {
							return b("fbinstant/releases/6.3/internalStates.6.3").getMessageSender().sendAsync(b("InstantGamesSDKMessages").PAYMENTS_FETCH_PURCHASES_ASYNC, {})
						});
						return b("fbinstant/releases/6.3/logger.6.3").logAsyncResult(c, a)
					}

					function f(a) {
						var c = "payments_consumePurchaseAsync";
						b("fbinstant/releases/6.3/logger.6.3").logBeginAsync(c);
						var d = b("fbinstant/common/validator").string();
						d = b("fbinstant/common/validator").validate(a, d).then(function() {
							return i(b("InstantGamesSDKMessages").PAYMENTS_CONSUME_PURCHASE_ASYNC)
						}).then(function() {
							return b("fbinstant/releases/6.3/internalStates.6.3").getMessageSender().sendAsync(b("InstantGamesSDKMessages").PAYMENTS_CONSUME_PURCHASE_ASYNC, {
								token: a
							})
						});
						return b("fbinstant/releases/6.3/logger.6.3").logAsyncResult(d, c).then(function() {})
					}

					function g(a) {
						b("fbinstant/releases/6.3/internalStates.6.3").getPaymentsState().onInitialized(a)
					}

					function h() {
						var a = "payments_restorePurchasesAsync";
						b("fbinstant/releases/6.3/logger.6.3").logBeginAsync(a);
						var c = i(b("InstantGamesSDKMessages").PAYMENTS_RESTORE_PURCHASES_ASYNC).then(function() {
							return b("fbinstant/releases/6.3/internalStates.6.3").getMessageSender().sendAsync(b("InstantGamesSDKMessages").PAYMENTS_RESTORE_PURCHASES_ASYNC, {})
						});
						return b("fbinstant/releases/6.3/logger.6.3").logAsyncResult(c, a).then(function() {})
					}

					function i(a) {
						return !b("fbinstant/common/supportedMessagesManager").isSupported(a) ? b("Promise").reject(new(b("fbinstant/common/apiError"))({
							code: b("fbinstant/common/errorCode").CLIENT_UNSUPPORTED_OPERATION,
							message: "Client does not support this API"
						})) : b("Promise").resolve()
					}
					f = {
						consumePurchaseAsync: f,
						getCatalogAsync: a,
						getPurchasesAsync: d,
						purchaseAsync: c,
						onReady: g,
						restorePurchasesAsync: h
					};
					e.exports = f
				}), null);
				__d("fbinstant/releases/6.3/auth.6.3", ["InstantGamesSDKMessages", "fbinstant/releases/6.3/internalStates.6.3"], (function(a, b, c, d, e, f) {
					"use strict";
					var g = function() {
						function a(a) {
							this.$1 = a
						}
						var b = a.prototype;
						b.getPlayerID = function() {
							return this.$1.playerID
						};
						b.getSignature = function() {
							return this.$1.signature
						};
						return a
					}();
					e.exports = {
						SignedPlayerInfo: g,
						getSignedPlayerInfoAsync: function(a) {
							return b("fbinstant/releases/6.3/internalStates.6.3").getMessageSender().sendAsync(b("InstantGamesSDKMessages").GET_SIGNED_PLAYER_INFO_ASYNC, {
								requestPayload: a || null
							}).then(function(a) {
								return new g(a)
							})
						}
					}
				}), null);
				__d("fbinstant/releases/6.3/botSubscription.6.3", ["InstantGamesGameState", "InstantGamesSDKMessages", "Promise", "fbinstant/common/apiError", "fbinstant/common/errorCode", "fbinstant/releases/6.3/config.6.3", "fbinstant/releases/6.3/graphApi.6.3", "fbinstant/releases/6.3/internalStates.6.3"], (function(a, b, c, d, e, f) {
					"use strict";
					var g = 1,
						h = 0,
						i = null;

					function j() {
						var a = b("fbinstant/releases/6.3/internalStates.6.3").getContext().getID();
						if(b("fbinstant/releases/6.3/config.6.3").shouldUseGraphAPI("canSubscribeBotAsync")) {
							var c = a != null ? "can_subscribe_to_game_bot.context_id(" + a + ")" : "can_subscribe_to_game_bot";
							return b("fbinstant/releases/6.3/graphApi.6.3").requestAsync("/me", "get", {
								fields: [c]
							}).then(function(a) {
								return a.can_subscribe_to_game_bot
							})
						} else return b("fbinstant/releases/6.3/internalStates.6.3").getMessageSender().sendPassThroughAsync("PLAYER_CAN_SUBSCRIBE_GAME_BOT", {
							contextID: a
						})
					}

					function a() {
						if(h >= g) {
							i = !1;
							return b("Promise").resolve(!1)
						}
						return i != null ? b("Promise").resolve(i) : j().then(function(a) {
							i = a;
							return a
						})
					}

					function c() {
						if(b("fbinstant/releases/6.3/internalStates.6.3").getGameState() !== b("InstantGamesGameState").PLAYING) return b("Promise").reject(new(b("fbinstant/common/apiError"))({
							code: b("fbinstant/common/errorCode").INVALID_OPERATION,
							message: "Cannot perform this operation before the game has started."
						}));
						if(h >= g) return b("Promise").reject(new(b("fbinstant/common/apiError"))({
							code: b("fbinstant/common/errorCode").INVALID_OPERATION,
							message: "Player can only see the subscription dialog once per session."
						}));
						if(i != null) {
							if(!i) return b("Promise").reject(new(b("fbinstant/common/apiError"))({
								code: b("fbinstant/common/errorCode").INVALID_OPERATION,
								message: "Cannot use subscribeBotAsync() to the player. Please check canSubscribeBotAsync() before calling this API."
							}))
						} else return b("Promise").reject(new(b("fbinstant/common/apiError"))({
							code: b("fbinstant/common/errorCode").INVALID_OPERATION,
							message: "Cannot directly use subscribeBotAsync(). Please check canSubscribeBotAsync() before calling this API."
						}));
						i = null;
						h += 1;
						return b("fbinstant/releases/6.3/internalStates.6.3").getMessageSender().sendAsync(b("InstantGamesSDKMessages").SUBSCRIBE_BOT_ASYNC)
					}
					e.exports = {
						canSubscribeBotAsync: a,
						subscribeBotAsync: c
					}
				}), null);
				__d("fbinstant/releases/6.3/player.6.3", ["InstantGamesSDKMessages", "Promise", "fbinstant/common/apiError", "fbinstant/common/connectedPlayers", "fbinstant/common/errorCode", "fbinstant/common/getUrlParam", "fbinstant/common/validator", "fbinstant/releases/6.3/auth.6.3", "fbinstant/releases/6.3/botSubscription.6.3", "fbinstant/releases/6.3/config.6.3", "fbinstant/releases/6.3/graphApi.6.3", "fbinstant/releases/6.3/internalStates.6.3", "fbinstant/releases/6.3/logger.6.3"], (function(a, b, c, d, e, f) {
					"use strict";
					var g = 5e3,
						h, i = !1,
						j = !1,
						k;

					function l() {
						if(j) {
							j = !1;
							return b("fbinstant/releases/6.3/graphApi.6.3").requestAsync("/me/data", "post", {
								payload: h
							}).then(function(a) {
								return a.data
							})
						}
					}

					function m() {
						return b("fbinstant/releases/6.3/graphApi.6.3").requestAsync("/me/data").then(function(a) {
							h = {}, a.data.forEach(function(a) {
								h[a.key] = a.value
							}), i = !0
						})
					}
					a = {
						getID: function() {
							b("fbinstant/releases/6.3/logger.6.3").logAPICall("player_getID");
							return b("fbinstant/releases/6.3/internalStates.6.3").getPlayerID()
						},
						getSignedPlayerInfoAsync: function(a) {
							var c = "player_getSignedPlayerInfoAsync";
							b("fbinstant/releases/6.3/logger.6.3").logBeginAsync(c);
							var d = b("fbinstant/common/validator").string().optional();
							d = b("fbinstant/common/validator").validate(a, d).then(function() {
								return b("fbinstant/releases/6.3/auth.6.3").getSignedPlayerInfoAsync(a)
							});
							return b("fbinstant/releases/6.3/logger.6.3").logAsyncResult(d, c)
						},
						canSubscribeBotAsync: function() {
							var a = "getPlayerCanSubscribeBotAsync";
							b("fbinstant/releases/6.3/logger.6.3").logBeginAsync(a);
							var c = b("fbinstant/releases/6.3/botSubscription.6.3").canSubscribeBotAsync();
							return b("fbinstant/releases/6.3/logger.6.3").logAsyncResult(c, a)
						},
						subscribeBotAsync: function() {
							var a = "subscribeBotAsync";
							b("fbinstant/releases/6.3/logger.6.3").logBeginAsync(a);
							var c = b("fbinstant/releases/6.3/botSubscription.6.3").subscribeBotAsync();
							return b("fbinstant/releases/6.3/logger.6.3").logAsyncResult(c, a)
						},
						getName: function() {
							b("fbinstant/releases/6.3/logger.6.3").logAPICall("player_getName");
							return b("fbinstant/releases/6.3/internalStates.6.3").getPlayerName()
						},
						getPhoto: function() {
							b("fbinstant/releases/6.3/logger.6.3").logAPICall("player_getPhoto");
							var a = Boolean(Number(b("fbinstant/common/getUrlParam")("should_block_profile_picture")));
							return a ? null : b("fbinstant/releases/6.3/internalStates.6.3").getPlayerPhoto()
						},
						getDataAsync: function(a) {
							var c = "player_getDataAsync";
							b("fbinstant/releases/6.3/logger.6.3").logBeginAsync(c);
							var d = b("fbinstant/common/validator").array().schemaType(b("fbinstant/common/validator").string());
							d = b("fbinstant/common/validator").validate(a, d).then(function() {
								if(b("fbinstant/releases/6.3/config.6.3").shouldUseGraphAPI("getDataAsync"))
									if(!i) return m().then(function(b) {
										return Object.keys(h).filter(function(b) {
											return ES(a, "includes", !0, b)
										}).reduce(function(a, b) {
											a[b] = h[b];
											return a
										}, {})
									});
									else return Object.keys(h).filter(function(b) {
										return ES(a, "includes", !0, b)
									}).reduce(function(a, b) {
										a[b] = h[b];
										return a
									}, {});
								else return b("fbinstant/releases/6.3/internalStates.6.3").getMessageSender().sendAsync(b("InstantGamesSDKMessages").GET_PLAYER_DATA_ASYNC, {
									keys: a
								})
							});
							return b("fbinstant/releases/6.3/logger.6.3").logAsyncResult(d, c)
						},
						setDataAsync: function(a) {
							var c = "player_setDataAsync";
							b("fbinstant/releases/6.3/logger.6.3").logBeginAsync(c);
							var d = function(a) {
									var b = Object.keys(a);
									for(var c = 0; c < b.length; c++) {
										var d = b[c];
										d = a[d];
										if(typeof d === "function") return !0
									}
									return !1
								},
								e = function(a) {
									try {
										ES("JSON", "stringify", !1, a);
										return !1
									} catch(a) {
										return !0
									}
								},
								f = b("fbinstant/common/validator").validate(a, b("fbinstant/common/validator").object()).then(function(a) {
									if(d(a) || e(a)) {
										b("fbinstant/releases/6.3/logger.6.3").logReject(c, b("fbinstant/common/errorCode").INVALID_PARAM);
										return b("Promise").reject(new(b("fbinstant/common/apiError"))({
											code: b("fbinstant/common/errorCode").INVALID_PARAM,
											message: "Object is not serializable"
										}))
									}
									return a
								}).then(function(c) {
									if(b("fbinstant/releases/6.3/config.6.3").shouldUseGraphAPI("setDataAsync")) {
										c = b("Promise").resolve();
										i || (c = m());
										return c.then(function(b) {
											Object.keys(a).forEach(function(b) {
												h[b] = a[b]
											}), j = !0, k == null && (k = window.setInterval(l, g))
										})
									} else return b("fbinstant/releases/6.3/internalStates.6.3").getMessageSender().sendAsync(b("InstantGamesSDKMessages").SET_PLAYER_DATA_ASYNC, {
										data: a
									})
								});
							return b("fbinstant/releases/6.3/logger.6.3").logAsyncResult(f, c).then(function() {})
						},
						flushDataAsync: function() {
							var a = "player_flushDataAsync";
							b("fbinstant/releases/6.3/logger.6.3").logBeginAsync(a);
							var c;
							b("fbinstant/releases/6.3/config.6.3").shouldUseGraphAPI("flushDataAsync") ? c = b("Promise").resolve(l()) : c = b("fbinstant/releases/6.3/internalStates.6.3").getMessageSender().sendAsync(b("InstantGamesSDKMessages").FLUSH_PLAYER_DATA_ASYNC, null);
							return b("fbinstant/releases/6.3/logger.6.3").logAsyncResult(c, a).then(function() {})
						},
						getConnectedPlayersAsync: function() {
							var a = "player_getConnectedPlayers",
								c = b("fbinstant/releases/6.3/internalStates.6.3").getConnectedPlayersPromise();
							if(c) return c;
							b("fbinstant/releases/6.3/logger.6.3").logBeginAsync(a);
							c = b("fbinstant/releases/6.3/logger.6.3").logAsyncResult(b("fbinstant/common/connectedPlayers").fetchAsync(b("fbinstant/releases/6.3/internalStates.6.3").getMessageSender()), a)["catch"](function(a) {
								b("fbinstant/releases/6.3/internalStates.6.3").setConnectedPlayersPromise(null);
								throw a
							});
							b("fbinstant/releases/6.3/internalStates.6.3").setConnectedPlayersPromise(c);
							return c
						}
					};
					e.exports = a
				}), null);
				__d("fbinstant/releases/6.3/supportedFunctions.6.3", ["InstantGamesSDKFeatures", "InstantGamesSDKMessages", "fbinstant/common/supportedFeaturesManager", "fbinstant/common/supportedMessagesManager"], (function(a, b, c, d, e, f) {
					"use strict";
					var g = new Set(["getLocale", "getPlatform", "getSDKVersion", "getSupportedAPIs", "getEntryPointData", "player.getID", "player.getName", "player.getPhoto", "context.getID", "context.getType", "context.isSizeBetween", "logEvent", "onPause"]),
						h = {
							"inventory.unlockItemAsync": (c = b("InstantGamesSDKMessages")).INVENTORY_UNLOCK_ITEM_ASYNC,
							matchPlayerAsync: c.MATCH_PLAYER_ASYNC,
							initializeAsync: c.INITIALIZE_ASYNC,
							setLoadingProgress: c.ON_PROGRESS_LOAD,
							setSessionData: c.SET_SESSION_DATA,
							startGameAsync: c.ON_GAME_READY,
							"player.flushDataAsync": c.FLUSH_PLAYER_DATA_ASYNC,
							"player.getDataAsync": c.GET_PLAYER_DATA_ASYNC,
							"player.setDataAsync": c.SET_PLAYER_DATA_ASYNC,
							"player.subscribeBotAsync": c.SUBSCRIBE_BOT_ASYNC,
							"player.getConnectedPlayersAsync": c.GET_CONNECTED_PLAYERS_ASYNC,
							"player.getSignedPlayerInfoAsync": c.GET_SIGNED_PLAYER_INFO_ASYNC,
							"context.switchAsync": c.CONTEXT_SWITCH_ASYNC,
							"context.chooseAsync": c.CONTEXT_CHOOSE_ASYNC,
							"context.createAsync": c.CONTEXT_CREATE_ASYNC,
							"context.getPlayersAsync": c.CONTEXT_PLAYERS_FETCH_ASYNC,
							getInterstitialAdAsync: c.GET_INTERSTITIAL_AD_ASYNC,
							getRewardedVideoAsync: c.GET_REWARDED_VIDEO_ASYNC,
							"payments.consumePurchaseAsync": c.PAYMENTS_CONSUME_PURCHASE_ASYNC,
							"payments.getCatalogAsync": c.PAYMENTS_FETCH_CATALOG_ASYNC,
							"payments.getPurchasesAsync": c.PAYMENTS_FETCH_PURCHASES_ASYNC,
							"payments.purchaseAsync": c.PAYMENTS_PURCHASE_ASYNC,
							shareAsync: c.SHARE_ASYNC,
							switchGameAsync: c.GAME_SWITCH,
							quit: c.QUIT,
							canCreateShortcutAsync: c.CAN_CREATE_SHORTCUT_ASYNC,
							createShortcutAsync: c.CREATE_SHORTCUT_ASYNC
						},
						i = new Set(["getEntryPointAsync", "getLeaderboardAsync", "checkCanPlayerMatchAsync", "player.canSubscribeBotAsync", "postSessionScore"]),
						j = {
							updateAsync: function() {
								return b("fbinstant/common/supportedFeaturesManager").isSupported(b("InstantGamesSDKFeatures").FLEXIBLE)
							}
						};

					function a() {
						var a = k(),
							b = l(),
							c = m(),
							d = n(),
							e = o(g);
						return e.concat(a).concat(b).concat(c).concat(d)
					}

					function k() {
						var a = new Set();
						for(var c in h) {
							var d = h[c];
							b("fbinstant/common/supportedMessagesManager").isSupported(d) && a.add(c)
						}
						return o(a)
					}

					function l() {
						return b("fbinstant/common/supportedMessagesManager").isSupported(b("InstantGamesSDKMessages").SEND_PASS_THROUGH_ASYNC) ? o(i) : []
					}

					function m() {
						var a = new Set();
						for(var b in j) {
							var c = j[b]();
							c && a.add(b)
						}
						return o(a)
					}

					function n() {
						var a = k(),
							b = new Set();
						a.indexOf("payments.purchaseAsync") !== -1 && b.add("payments.onReady");
						return o(b)
					}

					function o(a) {
						var b = [];
						a.forEach(function(a) {
							b.push(a)
						});
						return b
					}
					d = {
						getSupported: a
					};
					e.exports = d
				}), null);
				__d("fbinstant/releases/6.3/index.6.3", ["InstantGamesGameState", "InstantGamesSDKMessages", "Promise", "fbinstant/common/apiError", "fbinstant/common/dataAccessRecorder", "fbinstant/common/errorCode", "fbinstant/common/featureAvailabilityFetcher", "fbinstant/common/genericDialogs", "fbinstant/common/getUrlParam", "fbinstant/common/platform", "fbinstant/common/promiseResultRecorder", "fbinstant/common/score", "fbinstant/common/validator", "fbinstant/releases/6.3/ads.6.3", "fbinstant/releases/6.3/config.6.3", "fbinstant/releases/6.3/context.6.3", "fbinstant/releases/6.3/endGamePayload.6.3", "fbinstant/releases/6.3/graphApi.6.3", "fbinstant/releases/6.3/internalStates.6.3", "fbinstant/releases/6.3/inventory.6.3", "fbinstant/releases/6.3/leaderboards.6.3", "fbinstant/releases/6.3/lifecycle.6.3", "fbinstant/releases/6.3/logger.6.3", "fbinstant/releases/6.3/payments.6.3", "fbinstant/releases/6.3/platform.6.3", "fbinstant/releases/6.3/player.6.3", "fbinstant/releases/6.3/supportedFunctions.6.3"], (function(a, b, c, d, e, f) {
					"use strict";
					var g = {
						CUSTOM: "CUSTOM",
						LEADERBOARD: "LEADERBOARD"
					};

					function h() {
						if(b("fbinstant/releases/6.3/config.6.3").shouldUseGraphAPI("getEntryPointAsync")) {
							var a = b("fbinstant/releases/6.3/internalStates.6.3").getEntryPointAsyncPromise();
							if(a != null) return a;
							else {
								a = (a = b("fbinstant/releases/6.3/internalStates.6.3").getEntryPoint().getSource()) != null ? a : "";
								a = b("fbinstant/releases/6.3/graphApi.6.3").requestAsync("/me", "get", {
									fields: ["instant_game_entry_point.payload(" + a + ")"]
								}).then(function(a) {
									return a.instant_game_entry_point
								});
								b("fbinstant/releases/6.3/internalStates.6.3").setGetEntryPointAsyncPromise(a);
								return a
							}
						} else return b("fbinstant/releases/6.3/internalStates.6.3").getEntryPoint().getCanonicalEntryPointAsync(b("fbinstant/releases/6.3/internalStates.6.3").getMessageSender())
					}
					a = {
						getLocale: function() {
							b("fbinstant/releases/6.3/logger.6.3").logAPICall("getLocale");
							return b("fbinstant/releases/6.3/internalStates.6.3").getLocale() || ""
						},
						getPlatform: function() {
							b("fbinstant/releases/6.3/logger.6.3").logAPICall("getPlatform");
							if(!b("fbinstant/releases/6.3/internalStates.6.3").isInitialized()) return null;
							var a = b("fbinstant/releases/6.3/platform.6.3").getPlatform();
							b("fbinstant/common/dataAccessRecorder")("RECORD_GET_PLATFORM", b("fbinstant/releases/6.3/internalStates.6.3").getMessageSender(), a, {
								platform: a
							});
							return a
						},
						getSDKVersion: function() {
							b("fbinstant/releases/6.3/logger.6.3").logAPICall("getSDKVersion");
							return b("fbinstant/releases/6.3/internalStates.6.3").getSdkVersion()
						},
						initializeAsync: function() {
							var a = "initializeAsync";
							if(b("fbinstant/releases/6.3/internalStates.6.3").isInitialized()) return b("Promise").reject(new(b("fbinstant/common/apiError"))({
								code: b("fbinstant/common/errorCode").INVALID_OPERATION,
								message: "Game has already been initialized."
							}));
							b("fbinstant/releases/6.3/logger.6.3").logBeginAsync(a);
							var c = b("fbinstant/releases/6.3/internalStates.6.3").getMessageSender();
							c = b("fbinstant/releases/6.3/lifecycle.6.3").initializeAsync(c);
							return b("fbinstant/releases/6.3/logger.6.3").logAsyncResult(c, a).then(function() {
								b("fbinstant/releases/6.3/internalStates.6.3").getMessageSender().sendPassThroughAsync("QE_PARAM_NO_EXPOSURE_FETCH", {}).then(function(a) {
									b("fbinstant/releases/6.3/internalStates.6.3").setQEParams(a)
								})["catch"]();
								return b("fbinstant/releases/6.3/graphApi.6.3").initPlatformAsync().then(function() {
									return b("fbinstant/releases/6.3/internalStates.6.3").getAnalytics().init(b("fbinstant/releases/6.3/internalStates.6.3").getAppID(), b("fbinstant/releases/6.3/internalStates.6.3").getPlayerID())
								})["catch"]()
							})
						},
						setLoadingProgress: function(a) {
							b("fbinstant/releases/6.3/logger.6.3").logAPICall("setLoadingProgress"), b("fbinstant/releases/6.3/lifecycle.6.3").setLoadingProgress(b("fbinstant/releases/6.3/internalStates.6.3").getMessageSender(), a)
						},
						getSupportedAPIs: function() {
							b("fbinstant/releases/6.3/logger.6.3").logAPICall("getSupportedAPIs");
							return b("fbinstant/releases/6.3/supportedFunctions.6.3").getSupported()
						},
						getEntryPointData: function() {
							b("fbinstant/releases/6.3/logger.6.3").logAPICall("getEntryPointData");
							var a = b("fbinstant/releases/6.3/internalStates.6.3").getEntryPoint().getData();
							if(a != null) {
								var c = ES("JSON", "stringify", !1, a);
								b("fbinstant/common/dataAccessRecorder")("RECORD_GET_ENTRYPOINT_DATA", b("fbinstant/releases/6.3/internalStates.6.3").getMessageSender(), c, {
									entrypointData: c
								})
							}
							return a
						},
						getEntryPointAsync: function() {
							var a = "getEntryPointAsync";
							b("fbinstant/releases/6.3/logger.6.3").logBeginAsync(a);
							var c = h();
							return b("fbinstant/releases/6.3/logger.6.3").logAsyncResult(c, a)
						},
						setSessionData: function(a) {
							b("fbinstant/releases/6.3/logger.6.3").logAPICall("setSessionData");
							var c = a;
							b("fbinstant/common/validator").validate(c, b("fbinstant/common/validator").object().maxSize(1e3)).then(function() {
								b("fbinstant/releases/6.3/internalStates.6.3").getMessageSender().send(b("InstantGamesSDKMessages").SET_SESSION_DATA, ES("JSON", "stringify", !1, c))
							})
						},
						startGameAsync: function() {
							var a = "startGameAsync";
							b("fbinstant/releases/6.3/logger.6.3").logBeginAsync(a);
							var c = b("fbinstant/releases/6.3/lifecycle.6.3").startGameAsync(b("fbinstant/releases/6.3/internalStates.6.3").getMessageSender());
							return b("fbinstant/releases/6.3/logger.6.3").logAsyncResult(c, a).then(function() {})
						},
						player: b("fbinstant/releases/6.3/player.6.3"),
						context: b("fbinstant/releases/6.3/context.6.3"),
						payments: b("fbinstant/releases/6.3/payments.6.3"),
						inventory: b("fbinstant/releases/6.3/inventory.6.3"),
						shareAsync: function(a) {
							var c, d = "shareAsync";
							c = (c = b("fbinstant/common/validator")).object().keys({
								intent: c.string(),
								image: c.string(),
								media: c.object().keys({
									gif: c.object().keys({
										url: c.string()
									}).optional(),
									video: c.object().keys({
										url: c.string()
									}).optional()
								}).optional(),
								text: c.string(),
								data: c.object().optional().maxSize(1e3),
								surface: c.string().optional()
							});
							b("fbinstant/releases/6.3/logger.6.3").logBeginAsync(d);
							if(b("fbinstant/releases/6.3/internalStates.6.3").getGameState() !== b("InstantGamesGameState").PLAYING) {
								b("fbinstant/releases/6.3/logger.6.3").logReject(d, b("fbinstant/common/errorCode").INVALID_OPERATION);
								return b("Promise").reject(new(b("fbinstant/common/apiError"))({
									code: b("fbinstant/common/errorCode").INVALID_OPERATION,
									message: "Can not perform this operation before game start."
								}))
							}
							c = b("fbinstant/common/validator").validate(a, c).then(function() {
								if(a.media != null) return b("fbinstant/common/featureAvailabilityFetcher").fetchAsync(b("fbinstant/releases/6.3/internalStates.6.3").getMessageSender(), "IGVS").then(function(a) {
									return a ? b("Promise").resolve() : b("Promise").reject(new(b("fbinstant/common/apiError"))({
										code: b("fbinstant/common/errorCode").INVALID_PARAM,
										message: "The share content provided is not supported"
									}))
								});
								else return b("Promise").resolve()
							}).then(function() {
								var c = babelHelpers["extends"]({}, a);
								c.data = ES("JSON", "stringify", !1, a.data);
								return b("fbinstant/releases/6.3/internalStates.6.3").getMessageSender().sendAsync(b("InstantGamesSDKMessages").SHARE_ASYNC, c)
							});
							return b("fbinstant/releases/6.3/logger.6.3").logAsyncResult(c, d).then(function() {})
						},
						updateAsync: function(a) {
							var c = "updateAsync";
							if(a.action === g.LEADERBOARD) {
								var d = a;
								b("fbinstant/releases/6.3/logger.6.3").logBeginAsync(c);
								d = b("fbinstant/releases/6.3/leaderboards.6.3").sendUpdateAsync(d);
								return b("fbinstant/releases/6.3/logger.6.3").logAsyncResult(d, c)
							} else if(a.action === g.CUSTOM) {
								var e = a;
								d = e.media != null;
								b("fbinstant/releases/6.3/logger.6.3").logBeginAsync(c);
								if(d) {
									a = b("fbinstant/releases/6.3/endGamePayload.6.3").format(e).then(function(a) {
										return b("fbinstant/releases/6.3/internalStates.6.3").getMessageSender().sendPassThroughAsync("UPDATE", {
											formatted_payload: a,
											context_token_id: b("fbinstant/releases/6.3/internalStates.6.3").getContext().getID()
										}).then(function() {})
									});
									return b("fbinstant/releases/6.3/logger.6.3").logAsyncResult(a, c)
								}
								return new(b("Promise"))(function(a, d) {
									b("fbinstant/releases/6.3/endGamePayload.6.3").format(e).then(function(e) {
										var f = Boolean(Number(b("fbinstant/common/getUrlParam")("show_epd_dialog_at_update_async_call")));
										if(f) return b("fbinstant/releases/6.3/internalStates.6.3").getMessageSender().showGenericDialogAsync(b("fbinstant/common/genericDialogs").CUSTOM_UPDATE_SHARE_AS_MESSAGE, {
											context_token_id: b("fbinstant/releases/6.3/internalStates.6.3").getContext().getID(),
											custom_update_data: e
										})["catch"](function(a) {
											return b("Promise").reject(a)
										});
										else b("fbinstant/releases/6.3/internalStates.6.3").getMessageSender().send(b("InstantGamesSDKMessages").ON_END_GAME, e), b("fbinstant/releases/6.3/internalStates.6.3").getRestartEvent().on(function(e) {
											if(e && e.error) {
												b("fbinstant/releases/6.3/logger.6.3").logReject(c);
												d(new(b("fbinstant/common/apiError"))({
													code: e.error.code,
													message: e.error.message
												}));
												return
											}
											e && e.contextType && b("fbinstant/releases/6.3/internalStates.6.3").updateContext(e);
											b("fbinstant/releases/6.3/logger.6.3").logResolve(c);
											a();
											b("fbinstant/releases/6.3/internalStates.6.3").getRestartEvent().unbind()
										})
									})["catch"](function(a) {
										d(a)
									})
								})
							}
							return b("Promise").reject(new(b("fbinstant/common/apiError"))({
								code: b("fbinstant/common/errorCode").INVALID_PARAM,
								message: 'Invalid update action. Must be "CUSTOM" or "LEADERBOARD".'
							}))
						},
						switchGameAsync: function(a, c) {
							var d = "switchGameAsync";
							b("fbinstant/releases/6.3/logger.6.3").logBeginAsync(d);
							if(b("fbinstant/releases/6.3/internalStates.6.3").getGameState() !== b("InstantGamesGameState").PLAYING) {
								b("fbinstant/releases/6.3/logger.6.3").logReject(d, b("fbinstant/common/errorCode").INVALID_OPERATION);
								return b("Promise").reject(new(b("fbinstant/common/apiError"))({
									code: b("fbinstant/common/errorCode").INVALID_OPERATION,
									message: "Can not perform this operation before game start."
								}))
							}
							var e = b("fbinstant/common/validator").validate(a, b("fbinstant/common/validator").string()).then(function() {
								return b("fbinstant/common/validator").validate(c, b("fbinstant/common/validator").object().optional().maxSize(1e3))
							}).then(function() {
								return b("fbinstant/releases/6.3/internalStates.6.3").getMessageSender().sendPassThroughAsync("SWITCH_GAME", {
									app_id: a
								})
							}).then(function() {
								var d = {
									app_id: a,
									payload: c != null ? ES("JSON", "stringify", !1, c) : null
								};
								return b("fbinstant/releases/6.3/internalStates.6.3").getMessageSender().sendAsync(b("InstantGamesSDKMessages").GAME_SWITCH, d)
							});
							return b("fbinstant/releases/6.3/logger.6.3").logAsyncResult(e, d)
						},
						canCreateShortcutAsync: function() {
							var a = "canCreateShortcutAsync";
							b("fbinstant/releases/6.3/logger.6.3").logBeginAsync(a);
							var c = b("fbinstant/releases/6.3/internalStates.6.3").getMessageSender().sendAsync(b("InstantGamesSDKMessages").CAN_CREATE_SHORTCUT_ASYNC, null);
							return b("fbinstant/releases/6.3/logger.6.3").logAsyncResult(c, a).then(function(a) {
								a = a.canCreateShortcut;
								a != null && b("fbinstant/common/dataAccessRecorder")("RECORD_CAN_CREATE_SHORTCUT", b("fbinstant/releases/6.3/internalStates.6.3").getMessageSender(), "canCreateShortcut" + a, {
									canCreateShortcut: a
								});
								return a
							})["catch"](function(a) {
								return !1
							})
						},
						createShortcutAsync: function() {
							var a = "createShortcutAsync";
							b("fbinstant/releases/6.3/logger.6.3").logBeginAsync(a);
							if(b("fbinstant/releases/6.3/internalStates.6.3").getGameState() !== b("InstantGamesGameState").PLAYING) {
								b("fbinstant/releases/6.3/logger.6.3").logReject(a, b("fbinstant/common/errorCode").INVALID_OPERATION);
								return b("Promise").reject(new(b("fbinstant/common/apiError"))({
									code: b("fbinstant/common/errorCode").INVALID_OPERATION,
									message: "Can not perform this operation before game start."
								}))
							}
							var c = b("fbinstant/releases/6.3/internalStates.6.3").getMessageSender().sendAsync(b("InstantGamesSDKMessages").CREATE_SHORTCUT_ASYNC, null);
							return b("fbinstant/releases/6.3/logger.6.3").logAsyncResult(c, a)
						},
						quit: function() {
							b("fbinstant/releases/6.3/logger.6.3").logAPICall("quit"), b("fbinstant/releases/6.3/lifecycle.6.3").quit(b("fbinstant/releases/6.3/internalStates.6.3").getMessageSender())
						},
						logEvent: function(a, c, d) {
							a = b("fbinstant/releases/6.3/internalStates.6.3").getAnalytics().logEvent(a, c, d);
							return !a ? null : new(b("fbinstant/common/apiError"))({
								code: a.code,
								message: a.message
							})
						},
						onPause: function(a) {
							b("fbinstant/releases/6.3/logger.6.3").logAPICall("onPause"), b("fbinstant/releases/6.3/internalStates.6.3").getPauseEvent().on(a)
						},
						getInterstitialAdAsync: function(a) {
							var c = "getInterstitialAdAsync";
							b("fbinstant/releases/6.3/logger.6.3").logBeginAsync(c);
							var d = b("fbinstant/common/validator").string();
							d = b("fbinstant/common/validator").validate(a, d).then(function() {
								return b("fbinstant/releases/6.3/ads.6.3").getInterstitialAdAsync(a)
							});
							return b("fbinstant/releases/6.3/logger.6.3").logAsyncResult(d, c)
						},
						getRewardedVideoAsync: function(a) {
							var c = "getRewardedVideoAsync";
							b("fbinstant/releases/6.3/logger.6.3").logBeginAsync(c);
							var d = b("fbinstant/common/validator").string();
							d = b("fbinstant/common/validator").validate(a, d).then(function() {
								return b("fbinstant/releases/6.3/ads.6.3").getRewardedVideoAsync(a)
							});
							return b("fbinstant/releases/6.3/logger.6.3").logAsyncResult(d, c)
						},
						matchPlayerAsync: function(a, c, d) {
							var e = "matchPlayerAsync",
								f = b("fbinstant/releases/6.3/internalStates.6.3").getMatchPlayerPromise();
							if(f) return f;
							b("fbinstant/releases/6.3/logger.6.3").logBeginAsync(e);
							if(b("fbinstant/releases/6.3/internalStates.6.3").getGameState() !== b("InstantGamesGameState").PLAYING) {
								b("fbinstant/releases/6.3/logger.6.3").logReject(e, b("fbinstant/common/errorCode").INVALID_OPERATION);
								return b("Promise").reject(new(b("fbinstant/common/apiError"))({
									code: b("fbinstant/common/errorCode").INVALID_OPERATION,
									message: "Can not perform this operation before game start."
								}))
							}
							var g = {
								matchTag: a || null,
								switchContextWhenMatched: b("fbinstant/releases/6.3/platform.6.3").getPlatform() === b("fbinstant/common/platform").IOS ? !0 : c || !1,
								offlineMatch: d || !1
							};
							f = /^[a-zA-Z0-9_]+$/;
							if(g.matchTag && g.matchTag.search(f) === -1) {
								b("fbinstant/releases/6.3/logger.6.3").logReject(e);
								return b("Promise").reject(new(b("fbinstant/common/apiError"))({
									code: b("fbinstant/common/errorCode").INVALID_PARAM,
									message: "Match Tag must only include letters, numbers and underscores."
								}))
							}
							if(g.matchTag && g.matchTag.length > 100) {
								b("fbinstant/releases/6.3/logger.6.3").logReject(e);
								return b("Promise").reject(new(b("fbinstant/common/apiError"))({
									code: b("fbinstant/common/errorCode").INVALID_PARAM,
									message: "Match Tag must be 100 characters or less."
								}))
							}
							a = b("fbinstant/common/validator").object().keys({
								matchTag: b("fbinstant/common/validator").string().optional(),
								switchContextWhenMatched: b("fbinstant/common/validator")["boolean"](),
								offlineMatch: b("fbinstant/common/validator")["boolean"]()
							});
							c = b("fbinstant/common/validator").validate(g, a).then(function(a) {
								return b("fbinstant/releases/6.3/internalStates.6.3").getMessageSender().sendPassThroughAsync("CAN_PLAYER_MATCH", {
									contextID: b("fbinstant/releases/6.3/internalStates.6.3").getContext().getID(),
									offlineMatch: d
								})
							}).then(function(a) {
								if(!a.can_match) throw new(b("fbinstant/common/apiError"))({
									code: b("fbinstant/common/errorCode").INVALID_OPERATION,
									message: "The player is not currently eligible to match."
								});
								g.dialogTitle = a.dialog_title;
								g.dialogTextLineOne = a.dialog_text_line_one;
								g.dialogTextLineTwo = a.dialog_text_line_two;
								g.dialogButtonText = a.dialog_button_text;
								g.bannerSearchText = a.banner_search_text;
								g.bannerRetryText = a.banner_retry_text;
								g.bannerMatchFoundText = a.banner_match_found_text;
								g.bannerUserAlreadyInThreadText = a.banner_user_already_in_thread_text;
								g.useV2 = a.use_v2 || !1;
								return b("fbinstant/releases/6.3/internalStates.6.3").getMessageSender().sendAsync(b("InstantGamesSDKMessages").MATCH_PLAYER_ASYNC, g)
							}).then(function(a) {
								b("fbinstant/releases/6.3/internalStates.6.3").updateContext(a);
								b("fbinstant/releases/6.3/internalStates.6.3").setMatchPlayerPromise(null);
								return
							})["catch"](function(a) {
								b("fbinstant/releases/6.3/internalStates.6.3").setMatchPlayerPromise(null);
								throw a
							});
							c = b("fbinstant/releases/6.3/logger.6.3").logAsyncResult(c, e);
							c = b("fbinstant/common/promiseResultRecorder")(c, "RECORD_MATCH_PLAYER_ASYNC_PROMISE_RESULT", b("fbinstant/releases/6.3/internalStates.6.3").getMessageSender());
							b("fbinstant/releases/6.3/internalStates.6.3").setMatchPlayerPromise(c);
							return c
						},
						checkCanPlayerMatchAsync: function() {
							var a = "checkCanPlayerMatchAsync";
							b("fbinstant/releases/6.3/logger.6.3").logBeginAsync(a);
							var c = b("fbinstant/releases/6.3/internalStates.6.3").getMessageSender().sendPassThroughAsync("CAN_PLAYER_MATCH", {
								contextID: b("fbinstant/releases/6.3/internalStates.6.3").getContext().getID()
							}).then(function(a) {
								return a.can_match
							});
							return b("fbinstant/releases/6.3/logger.6.3").logAsyncResult(c, a)
						},
						getLeaderboardAsync: function(a) {
							var c = "getLeaderboardAsync";
							b("fbinstant/releases/6.3/logger.6.3").logBeginAsync(c);
							var d = b("fbinstant/common/validator").string();
							d = b("fbinstant/common/validator").validate(a, d).then(function() {
								return b("fbinstant/releases/6.3/leaderboards.6.3").getLeaderboardAsync(a)
							});
							return b("fbinstant/releases/6.3/logger.6.3").logAsyncResult(d, c)
						},
						postSessionScore: function(a) {
							b("fbinstant/releases/6.3/logger.6.3").logAPICall("postSessionScore"), b("fbinstant/common/score").PostSessionScore(b("fbinstant/releases/6.3/internalStates.6.3").getMessageSender(), a, b("fbinstant/releases/6.3/internalStates.6.3").getContext().getID()).then(function(a) {
								a && a.contextType && b("fbinstant/releases/6.3/internalStates.6.3").updateContext(a)
							})
						}
					};
					e.exports = a
				}), null);
				__d("legacy:fbinstant.6.3.all", ["fbinstant/releases/6.3/index.6.3"], (function(a, b, c, d, e, f) {
					"use strict";
					window.FBInstant = b("fbinstant/releases/6.3/index.6.3")
				}), 3);
			}
		}).call(global);
	})();
} catch(e) {
	var i = new Image();
	i.crossOrigin = 'anonymous';
	i.dataset.testid = 'fbSDKErrorReport';
	i.src = 'https://www.facebook.com/platform/scribe_endpoint.php/?c=jssdk_error&m=' + encodeURIComponent('{"error":"LOAD", "extra": {"name":"' + e.name + '","line":"' + (e.lineNumber || e.line) + '","script":"' + (e.fileName || e.sourceURL || e.script || "fbinstant.6.3.js") + '","stack":"' + (e.stackTrace || e.stack) + '","revision":"1006638650","namespace":"FB","message":"' + e.message + '"}}');
	document.body.appendChild(i);
}