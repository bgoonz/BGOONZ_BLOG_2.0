//Copy-2-clip.js

/*
 FireShot - Webpage Screenshots and Annotations
 Copyright (C) 2007-2021 Evgeny Suslikov (evgeny@suslikov.ru)
*/
window.fsAPIEvents || (window.fsAPIEvents = !0, chrome.runtime.sendMessage({ message: "checkFSAvailabilityEvt" }, function (a) { document.addEventListener("checkFSAvailabilityEvt", function (c) { for (var b in a) a.hasOwnProperty(b) && c.target.setAttribute(b, a[b]) }, !1) }), document.addEventListener("capturePageEvt", function (a) {
      chrome.runtime.sendMessage({
            message: "capturePageEvt", Entire: a.target.getAttribute("Entire"), Action: a.target.getAttribute("Action"), Data: a.target.getAttribute("Data"), CapturedElement: a.target.getAttribute("capturedFrameId") ||
                  void 0
      }, function (c) { window.fsPendingCB = a.target.getAttribute("CBID") })
}, !1), document.addEventListener("switchToNativeEvt", function () { chrome.runtime.sendMessage({ message: "switchToNativeEvt" }, function (a) { }) }, !1));


//--------------------iframe---------------------------------------------------

'use strict'
      ; (function (win) {
            const exports = {}

                  ; (function (exports) {
                        const utils = {
                              /**
                               * Normalize URL
                               * @param {String} url
                               */
                              normalizeUrl(url) {
                                    return this.hashUrl(url) || null
                              },

                              /**
                               * Get referrer.
                               */
                              getReferrer() {
                                    return this.normalizeUrl(document.referrer)
                              },

                              /**
                               * Get current page URL.
                               */
                              getPageUrl() {
                                    return this.normalizeUrl(window.location.href)
                              },

                              /**
                               * Generated hashed URL.
                               * @param {String} url
                               */
                              hashUrl(url) {
                                    let a, result

                                    if (!url || url.indexOf('http') !== 0) {
                                          return null
                                    }

                                    a = document.createElement('a')
                                    a.href = url

                                    result = a.protocol + '//' + a.hostname + '/'

                                    if (a.pathname && a.pathname !== '/') {
                                          result += this.hashCode(a.pathname)
                                    }

                                    if (a.search) {
                                          result += '?' + this.hashCode(a.search)
                                    }

                                    if (a.hash) {
                                          result += '#' + this.hashCode(a.hash)
                                    }

                                    return result
                              },

                              /**
                               * Generate random hash.
                               * @param {String} str
                               */
                              hashCode(str) {
                                    let hash = 0
                                    let kar
                                    let i

                                    if (str.length === 0) {
                                          return hash
                                    }

                                    for (i = 0; i < str.length; i++) {
                                          kar = str.charCodeAt(i)
                                          hash = (hash << 5) - hash + kar
                                          hash = hash & hash
                                    }

                                    return hash + Math.pow(2, 32)
                              },

                              /**
                               * Apply array function to non-array.
                               * @param {Object} a
                               */
                              realArray(a) {
                                    return Array.prototype.slice.apply(a)
                              },

                              /**
                               * Listener callback for onDocLoaded.
                               * @param {Object} doc
                               * @param {Function} callback
                               */
                              onDocLoaded(doc, callback) {
                                    if (doc.readyState === 'loading') {
                                          doc.addEventListener('DOMContentLoaded', callback)
                                    } else {
                                          callback()
                                    }
                              },

                              SCRIPT_IN_WINDOW_TOP: window === window.top,

                              /**
                               * Check for href Window object.
                               * @param {Object} win
                               */
                              isFriendlyWindow(win) {
                                    let href
                                    try {
                                          href = win.location.href
                                    } catch (e) {
                                          return false
                                    }
                                    return true
                              },

                              /**
                               * Get default view from element.
                               * @param {Object} el
                               */
                              elementWindow(el) {
                                    return el.ownerDocument.defaultView
                              },

                              /**
                               * Get viewport size.
                               * @param {Object} win
                               */
                              viewport(win) {
                                    return { width: win.innerWidth, height: win.innerHeight }
                              },

                              /**
                               * Parse query string parameters.
                               * @param {String} qs
                               */
                              parseQS(qs) {
                                    if (qs.indexOf('http') === 0) {
                                          qs = qs.split('?')[1]
                                    }
                                    let i, kvs, key, val
                                    const dict = {}
                                    qs = qs.split('&')
                                    for (i = 0; i < qs.length; i++) {
                                          kvs = qs[i].split('=')
                                          key = kvs[0]
                                          val = kvs.slice(1).join('=')
                                          try {
                                                dict[key] = window.decodeURIComponent(val)
                                          } catch (e) {
                                                continue
                                          }
                                    }
                                    return dict
                              },

                              /**
                               * Send PostMessage response.
                               * @param {Object} message
                               * @param {String} event
                               * @param {String} responseMessage
                               */
                              sendToBackground(message, event, responseMessage) {
                                    chrome.runtime.sendMessage(message, (message) => {
                                          if (message && typeof message.tracking_enabled !== 'undefined') {
                                                if (message.tracking_enabled) {
                                                      utilCallback()
                                                } else {
                                                      utilElseCallback()
                                                }
                                          }
                                    })
                              },

                              /**
                               * Check if anonymous tracking is enabled.
                               * @param {Function} callback
                               * @param {Function} elseCallback
                               * @todo validate if utilCallback or utilElseCallback are being used.
                               */
                              askIfTrackingEnabled(callback, elseCallback) {
                                    utilCallback = callback
                                    utilElseCallback = elseCallback

                                    this.sendToBackground(
                                          'is_tracking_enabled',
                                          '',
                                          'tracking_enabled_response'
                                    )
                              },
                        }

                        utils.SCRIPT_IN_FRIENDLY_IFRAME =
                              !utils.SCRIPT_IN_WINDOW_TOP && utils.isFriendlyWindow(window.parent)
                        utils.SCRIPT_IN_HOSTILE_IFRAME =
                              !utils.SCRIPT_IN_WINDOW_TOP && !utils.SCRIPT_IN_FRIENDLY_IFRAME

                        /**
                         * Generate new Logging object.
                         */
                        function LogGenerator() {
                              this.msgNum = 0
                              this.pageMeta = {
                                    url: utils.getPageUrl(),
                                    isHP: window.location.pathname === '/',
                                    referrer: utils.getReferrer(),
                                    rand: Math.floor(Math.random() * 10e12),
                                    startTime: new Date().getTime(),
                              }
                        }

                        LogGenerator.prototype = {
                              /**
                               * Log data.
                               * @param {String} event
                               * @param {Array} opt_assets
                               * @param {Array} opt_pageTags
                               */
                              log(event, opt_assets, opt_pageTags) {
                                    let opt_video_assets
                                    if (event === 'video' || event === 'invalid-video') {
                                          opt_video_assets = opt_assets || []
                                          opt_assets = []
                                    } else {
                                          opt_video_assets = []
                                          opt_assets = opt_assets || []
                                    }
                                    const result = {
                                          doc: this.pageMeta,
                                          event,
                                          video_assets: opt_video_assets,
                                          assets: opt_assets,
                                          version: '3',
                                          mrev: '15a9f21-d',
                                          msgNum: this.msgNum,
                                          timestamp: new Date().getTime(),
                                          pageVis: document.visibilityState,
                                          pageFoc: document.hasFocus(),
                                          pageTags: opt_pageTags || [],
                                    }
                                    this.msgNum++
                                    return result
                              },
                        }

                        utils.LogGenerator = LogGenerator

                        let utilCallback, utilElseCallback

                        exports.utils = utils
                  })(exports)
                  ; (function (exports) {
                        const SizeMatcher = {
                              VALID_AD_SIZES: [
                                    [300, 50],
                                    [320, 50],
                                    [160, 600],
                                    [300, 250],
                                    [300, 600],
                                    [300, 1050],
                                    [336, 280],
                                    [336, 850],
                                    [468, 60],
                                    [728, 90],
                                    [728, 250],
                                    [728, 270],
                                    [970, 66],
                                    [970, 90],
                                    [970, 125],
                                    [970, 250],
                                    [970, 400],
                                    [970, 415],
                                    [1280, 100],
                              ],

                              PX_SIZE_TOL: 10,

                              /**
                               * Get ad size.
                               * @param {Int} width
                               * @param {Int} height
                               */
                              getMatchedAdSize(width, height) {
                                    if (!this.set) {
                                          this.set = this._makeSizeSet()
                                    }

                                    return this.set[Math.round(width) + 'x' + Math.round(height)]
                              },

                              /**
                               * Check element size.
                               * @param {HTMLElement} el
                               */
                              elementIsAdShaped(el) {
                                    return !!this.getMatchedAdSizeForElement(el)
                              },

                              /**
                               * Get ad size.
                               * @param {HTMLElement} el
                               * @todo better description
                               */
                              getMatchedAdSizeForElement(el) {
                                    const rect = el.getBoundingClientRect()
                                    return this.getMatchedAdSize(rect.width, rect.height)
                              },

                              /**
                               * Generate ad sizes.
                               */
                              _makeSizeSet() {
                                    const set = {}
                                    let i
                                    let xfuz
                                    let yfuz
                                    let size
                                    let width
                                    let height

                                    for (i = 0; i < this.VALID_AD_SIZES.length; i++) {
                                          for (xfuz = -this.PX_SIZE_TOL; xfuz <= this.PX_SIZE_TOL; xfuz++) {
                                                for (yfuz = -this.PX_SIZE_TOL; yfuz <= this.PX_SIZE_TOL; yfuz++) {
                                                      size = this.VALID_AD_SIZES[i]
                                                      width = size[0] + xfuz
                                                      height = size[1] + yfuz
                                                      set[width + 'x' + height] = size
                                                }
                                          }
                                    }
                                    return set
                              },
                        }

                        const Throttler = {
                              MAX_SEARCHES_PER_WINDOW: 10,
                              MAX_SEARCHES_PER_ELEMENT: 2,

                              /**
                               * Count number of elements.
                               * @param {HTMLElement} el
                               */
                              countSearch: (el) => {
                                    if (typeof el.searches !== 'number') {
                                          el.searches = 0
                                    }

                                    el.searches += 1
                              },

                              /**
                               *
                               * @param {*} el
                               * @param {*} max
                               *
                               * @todo add description
                               */
                              throttle(el, max) {
                                    if (typeof el.searches === 'number' && el.searches >= max) {
                                          return true
                                    }
                                    return false
                              },

                              /**
                               *
                               * @param {*} el
                               *
                               * @todo add description
                               */
                              throttleElement(el) {
                                    return this.throttle(el, this.MAX_SEARCHES_PER_ELEMENT)
                              },

                              /**
                               *
                               * @param {*} win
                               *
                               * @todo add description
                               */
                              throttleWin(win) {
                                    return this.throttle(win, this.MAX_SEARCHES_PER_WINDOW)
                              },

                              /**
                               *
                               * @param {*} el
                               *
                               * @todo add description
                               */
                              getCount(el) {
                                    return el.searches || 0
                              },
                        }

                        /**
                         * Initialize window and document elements.
                         * @param {*} win
                         */
                        function TopSearcher(win) {
                              this.win = win
                              this.doc = win.document
                        }

                        /**
                         * Add search function.
                         */
                        TopSearcher.prototype.search = function () {
                              const candidates = exports.utils.realArray(
                                    this.doc.querySelectorAll('img, object, embed')
                              )
                              let html5Ad
                              let ads = []

                              ads = ads.concat(
                                    candidates.filter(function (el) {
                                          if (!el.mpAdFound && !Throttler.throttleElement(el)) {
                                                Throttler.countSearch(el)
                                                if (
                                                      (el.tagName !== 'IMG' || isStandardImage(el)) &&
                                                      SizeMatcher.elementIsAdShaped(el)
                                                ) {
                                                      el.mpAdFound = true
                                                      return true
                                                }
                                          }
                                          return false
                                    })
                              )

                              html5Ad = this._mainGetHTMLAd()
                              if (html5Ad) {
                                    html5Ad.html5 = true
                                    html5Ad.mpAdFound = true
                                    ads.push(html5Ad)
                              }

                              return ads
                        }

                        /**
                         * @todo add description
                         */
                        TopSearcher.prototype._mainGetHTMLAd = function () {
                              const styles = this.doc.querySelectorAll(
                                    'div > style, div > link[rel="stylesheet"]'
                              )
                              let i
                              let div
                              for (i = 0; i < styles.length; i++) {
                                    div = styles[i].parentNode
                                    if (
                                          !div.mpAdFound &&
                                          SizeMatcher.elementIsAdShaped(div) &&
                                          this._jumpedOut(div)
                                    ) {
                                          return div
                                    }
                              }
                        }

                        /**
                         * @todo add description
                         */
                        TopSearcher.prototype._jumpedOut = function (el) {
                              let siblings, ifrs
                              siblings = exports.utils.realArray(el.parentNode.children)
                              ifrs = siblings.filter(function (el) {
                                    return (
                                          el.tagName === 'IFRAME' &&
                                          el.offsetWidth === 0 &&
                                          el.offsetHeight === 0
                                    )
                              })
                              return ifrs.length > 0
                        }

                        /**
                         *
                         * @param {*} win
                         *
                         * @todo add description
                         */
                        function IframeSearcher(win) {
                              this.MIN_AD_AREA = 14000
                              this.MIN_WINDOW_PX = 10

                              this.win = win
                              this.doc = win.document
                              this.body = win.document.body
                              this.winClickTag = win.clickTag
                              this.adSizeMeta = this._getAdSizeMeta()
                              this.numElementsInBody =
                                    (this.body && this.body.querySelectorAll('*').length) || 0

                              this.shouldSearchWindow = false
                              if (
                                    !this.win.mpAdFound &&
                                    this.body &&
                                    !Throttler.throttleWin(this.win)
                              ) {
                                    this.winWidth = this.win.innerWidth
                                    this.winHeight = this.win.innerHeight
                                    if (
                                          this._meetsMinAdSize(this.winWidth, this.winHeight) &&
                                          !this._containsLargeIframes()
                                    ) {
                                          this.shouldSearchWindow = true
                                    }
                              }
                        }

                        /**
                         * @todo add description
                         */
                        IframeSearcher.prototype.search = function () {
                              let ad

                              if (this.shouldSearchWindow) {
                                    ad = this._search()
                                    if (ad) {
                                          ad.mpAdFound = true
                                          win.mpAdFound = true
                                          return ad
                                    }
                                    Throttler.countSearch(this.win)
                              }

                              return null
                        }

                        /**
                         * @todo add description
                         */
                        IframeSearcher.prototype._search = function () {
                              const _this = this
                              let stdCandidates
                              let html5Candidates
                              let stdEl
                              let html5El

                              stdCandidates = this.body.querySelectorAll('img, object, embed')

                              stdEl = getFirst(stdCandidates, function (el) {
                                    if (
                                          !el.mpAdFound &&
                                          !Throttler.throttleElement(el) &&
                                          (el.tagName !== 'IMG' || isStandardImage(el)) &&
                                          _this._elementIsAtLeastAsBigAsWindow(el)
                                    ) {
                                          return true
                                    }
                                    Throttler.countSearch(el)
                                    return false
                              })

                              if (stdEl) {
                                    return stdEl
                              }

                              if (this._isHTML5Iframe()) {
                                    html5Candidates = this.doc.querySelectorAll(
                                          'body, canvas, button, video, svg, div'
                                    )
                                    html5El = getFirst(html5Candidates, function (el) {
                                          if (_this._elementIsAtLeastAsBigAsWindow(el)) {
                                                return true
                                          }
                                          Throttler.countSearch(el)
                                          return false
                                    })
                              }

                              if (html5El) {
                                    html5El.html5 = true
                                    html5El.winClickTag = this.winClickTag
                                    html5El.adSizeMeta = this.adSizeMeta
                                    return html5El
                              }

                              return null
                        }

                        /**
                         * @todo add description
                         */
                        IframeSearcher.prototype._isHTML5Iframe = function () {
                              if (this.winClickTag || this.adSizeMeta) {
                                    return true
                              }

                              if (
                                    this.doc.querySelectorAll('canvas', 'button', 'video', 'svg').length > 0
                              ) {
                                    return true
                              }

                              if (
                                    this.numElementsInBody >= 5 &&
                                    Throttler.getCount(this.win) > 0 &&
                                    this.doc.querySelectorAll('div').length > 0
                              ) {
                                    return true
                              }

                              return false
                        }

                        /**
                         * @todo add description
                         */
                        IframeSearcher.prototype._elementIsAtLeastAsBigAsWindow = function (el) {
                              const rect = el.getBoundingClientRect()
                              const tol = 0.95

                              return (
                                    rect.width >= tol * this.winWidth && rect.height >= tol * this.winHeight
                              )
                        }

                        /**
                         * @todo add description
                         */
                        IframeSearcher.prototype._meetsMinAdSize = function (width, height) {
                              return width * height >= this.MIN_AD_AREA
                        }

                        /**
                         * @todo add description
                         */
                        IframeSearcher.prototype._containsLargeIframes = function () {
                              const iframes = this.doc.querySelectorAll('iframe')
                              let rect
                              let i
                              for (i = 0; i < iframes.length; i++) {
                                    rect = iframes[i].getBoundingClientRect()
                                    if (
                                          rect.width > this.MIN_WINDOW_PX ||
                                          rect.height > this.MIN_WINDOW_PX
                                    ) {
                                          return true
                                    }
                              }
                              return false
                        }

                        /**
                         * @todo add description
                         */
                        IframeSearcher.prototype._getAdSizeMeta = function () {
                              const adSizeMeta = this.doc.querySelectorAll('meta[name="ad.size"]')
                              if (adSizeMeta.length > 0) {
                                    return adSizeMeta[0].content
                              } else {
                                    return null
                              }
                        }

                        /**
                         *
                         * @param {*} arr
                         * @param {*} testFn
                         *
                         * @todo add description
                         */
                        function getFirst(arr, testFn) {
                              let i, el
                              for (i = 0; i < arr.length; i++) {
                                    el = arr[i]
                                    if (testFn(el)) {
                                          return el
                                    }
                              }
                              return null
                        }

                        /**
                         * Check for image attributes.
                         * @param {HTMLElement} img
                         */
                        function isStandardImage(img) {
                              return (
                                    img.src &&
                                    (img.parentNode.tagName === 'A' || img.getAttribute('onclick'))
                              )
                        }

                        /**
                         * Extract iFrames from page.
                         * @param {Object} win
                         */
                        function getFriendlyIframes(win) {
                              let iframes = win.document.querySelectorAll('iframe')
                              iframes = exports.utils.realArray(iframes)
                              const friendlyIframes = iframes.filter(function (ifr) {
                                    return exports.utils.isFriendlyWindow(ifr.contentWindow)
                              })
                              return friendlyIframes
                        }

                        /**
                         *
                         * @param {*} win
                         */
                        function findAds(win) {
                              let i
                              let iframes
                              let searcher
                              let ad
                              let ads = []

                              if (win === win.top) {
                                    searcher = new TopSearcher(win)
                                    ads = ads.concat(searcher.search())
                              } else {
                                    searcher = new IframeSearcher(win)
                                    ad = searcher.search()
                                    if (ad) {
                                          ads.push(ad)
                                    }
                              }

                              iframes = getFriendlyIframes(win)
                              for (i = 0; i < iframes.length; i++) {
                                    ads = ads.concat(findAds(iframes[i].contentWindow))
                              }

                              return ads
                        }

                        exports.adfinder = {
                              getMatchedAdSize: SizeMatcher.getMatchedAdSize.bind(SizeMatcher),
                              findAds,
                        }
                  })(exports)
                  ; (function (exports) {
                        const parser = {
                              TAGS_WITH_SRC_ATTR: {
                                    IMG: true,
                                    SCRIPT: true,
                                    IFRAME: true,
                                    EMBED: true,
                              },

                              MAX_ATTR_LEN: 100,

                              /**
                               *
                               * @param {*} el
                               * @param {*} params
                               *
                               * @todo add description
                               */
                              getUrl(el, params) {
                                    let url

                                    if (this.TAGS_WITH_SRC_ATTR.hasOwnProperty(el.tagName)) {
                                          url = el.src
                                    } else if (el.tagName === 'OBJECT') {
                                          url = el.data || (params && params.movie) || null
                                    } else if (el.tagName === 'A') {
                                          url = el.href
                                    }

                                    if (url && url.indexOf('http') === 0) {
                                          return url
                                    } else {
                                          return null
                                    }
                              },

                              /**
                               *
                               * @param {*} el
                               *
                               * @todo add description
                               */
                              getParams(el) {
                                    if (el.tagName !== 'OBJECT') {
                                          return null
                                    }

                                    let i, child
                                    const params = {}
                                    const children = el.children
                                    for (i = 0; i < children.length; i++) {
                                          child = children[i]
                                          if (child.tagName === 'PARAM' && child.name) {
                                                params[child.name.toLowerCase()] = child.value
                                          }
                                    }
                                    return params
                              },

                              /**
                               * Get element position.
                               * @param {HTMLElement} el
                               */
                              getPosition(el) {
                                    const rect = el.getBoundingClientRect()
                                    const win = exports.utils.elementWindow(el)

                                    return {
                                          width: Math.round(rect.width),
                                          height: Math.round(rect.height),
                                          left: Math.round(rect.left + win.pageXOffset),
                                          top: Math.round(rect.top + win.pageYOffset),
                                    }
                              },

                              /**
                               *
                               * @param {*} el
                               * @param {*} params
                               * @param {*} url
                               *
                               * @todo add description
                               */
                              getFlashvars(el, params, url) {
                                    let flashvars
                                    const urlQS = url && url.split('?')[1]

                                    if (el.tagName === 'EMBED') {
                                          flashvars = el.getAttribute('flashvars') || urlQS
                                    } else if (el.tagName === 'OBJECT') {
                                          flashvars = params.flashvars || el.getAttribute('flashvars') || urlQS
                                    }

                                    return (flashvars && exports.utils.parseQS(flashvars)) || null
                              },

                              /**
                               *
                               * @param {*} el
                               * @param {*} flashvars
                               *
                               * @todo add description
                               */
                              findClickThru(el, flashvars) {
                                    let key
                                    if (el.tagName === 'IMG' && el.parentElement.tagName === 'A') {
                                          return el.parentElement.href
                                    } else if (flashvars) {
                                          for (key in flashvars) {
                                                if (flashvars.hasOwnProperty(key)) {
                                                      if (key.toLowerCase().indexOf('clicktag') === 0) {
                                                            return flashvars[key]
                                                      }
                                                }
                                          }
                                    }
                                    return null
                              },

                              /**
                               * Get element attribute.
                               * @param {HTMLElement} el
                               * @param {String} name
                               */
                              getAttr(el, name) {
                                    const val = el.getAttribute(name)

                                    if (val && val.slice && val.toString) {
                                          return val.slice(0, this.MAX_ATTR_LEN).toString()
                                    } else {
                                          return null
                                    }
                              },

                              /**
                               *
                               * @param {*} obj
                               * @param {*} name
                               * @param {*} val
                               *
                               * @todo add description
                               */
                              putPropIfExists(obj, name, val) {
                                    if (val) {
                                          obj[name] = val
                                    }
                              },

                              /**
                               *
                               * @param {*} obj
                               * @param {*} el
                               * @param {*} name
                               *
                               * @todo add description
                               */
                              putAttrIfExists(obj, el, name) {
                                    const val = this.getAttr(el, name)
                                    this.putPropIfExists(obj, name, val)
                              },

                              /**
                               * Convert Element to JSON
                               * @param {HTMLElement} el
                               * @param {Boolean} opt_findClickThru
                               */
                              elementToJSON(el, opt_findClickThru) {
                                    const pos = this.getPosition(el)
                                    const params = this.getParams(el)
                                    const url = this.getUrl(el, params)
                                    const flashvars = this.getFlashvars(el, params, url)
                                    const clickThru = opt_findClickThru && this.findClickThru(el, flashvars)
                                    const json = {
                                          tagName: el.tagName,
                                          width: pos.width,
                                          height: pos.height,
                                          left: pos.left,
                                          top: pos.top,
                                          children: [],
                                    }

                                    if (params) {
                                          delete params.flashvars
                                    }

                                    this.putAttrIfExists(json, el, 'id')
                                    this.putAttrIfExists(json, el, 'class')
                                    this.putAttrIfExists(json, el, 'name')

                                    this.putPropIfExists(json, 'flashvars', flashvars)
                                    this.putPropIfExists(json, 'url', url)
                                    this.putPropIfExists(json, 'params', params)
                                    this.putPropIfExists(json, 'clickThru', clickThru)

                                    return json
                              },
                        }

                        exports.parser = { elementToJSON: parser.elementToJSON.bind(parser) }
                  })(exports)

                  // Anonymous invocation.
                  ; (function (exports) {
                        /**
                         * Setter for ad data.
                         * @param {*} adData
                         */
                        const ContextManager = function (adData) {
                              this.adData = adData
                        }

                        ContextManager.prototype = {
                              CONTAINER_SIZE_TOL: 0.4,
                              ASPECT_RATIO_FOR_LEADERBOARDS: 2,

                              /**
                               * Check if iframe is valid.
                               * @param {HTMLElement} el
                               * @param {HTMLElement} opt_curWin
                               */
                              isValidContainer(el, opt_curWin) {
                                    const cWidth = el.clientWidth
                                    const cHeight = el.clientHeight

                                    const adWidth = this.adData.width
                                    const adHeight = this.adData.height

                                    const winWidth = opt_curWin && opt_curWin.innerWidth
                                    const winHeight = opt_curWin && opt_curWin.innerHeight
                                    const similarWin =
                                          opt_curWin &&
                                          this.withinTol(adWidth, winWidth) &&
                                          this.withinTol(adHeight, winHeight)

                                    const similarSizeX = this.withinTol(adWidth, cWidth)
                                    const similarSizeY = this.withinTol(adHeight, cHeight)
                                    const adAspect = adWidth / adHeight

                                    return (
                                          similarWin ||
                                          el.tagName === 'A' ||
                                          (adAspect >= this.ASPECT_RATIO_FOR_LEADERBOARDS && similarSizeY) ||
                                          (similarSizeX && similarSizeY)
                                    )
                              },

                              /**
                               * Check tolerance.
                               * @param {Int} adlen
                               * @param {Int} conlen
                               */
                              withinTol(adlen, conlen) {
                                    const pct = (conlen - adlen) / adlen

                                    return pct <= this.CONTAINER_SIZE_TOL
                              },

                              /**
                               * Serialize elements.
                               * @param {*} el
                               * @todo define parameter type.
                               */
                              serializeElements(el) {
                                    if (!el) {
                                          return
                                    }
                                    let i
                                    let ifrWin
                                    const adId = this.adData.adId
                                    let elIsAd = false

                                    if (adId && el[adId] && el[adId].isAd === true) {
                                          elIsAd = true
                                    }

                                    const json = exports.parser.elementToJSON(el, elIsAd)
                                    let childJSON

                                    if (elIsAd) {
                                          json.adId = adId
                                          this.adData.element = {}

                                          const keys = Object.keys(json)
                                          for (i = 0; i < keys.length; i++) {
                                                const key = keys[i]
                                                if (key !== 'children' && key !== 'contents') {
                                                      this.adData.element[key] = json[key]
                                                }
                                          }
                                    }

                                    const children = exports.utils
                                          .realArray(el.children)
                                          .filter(function (el) {
                                                const param = el.tagName === 'PARAM'
                                                const inlineScript =
                                                      el.tagName === 'SCRIPT' && !(el.src && el.src.includes('http'))
                                                const noScript = el.tagName === 'NOSCRIPT'
                                                return !(param || inlineScript || noScript)
                                          })

                                    for (i = 0; i < children.length; i++) {
                                          childJSON = this.serializeElements(children[i])
                                          if (childJSON) {
                                                json.children.push(childJSON)
                                          }
                                    }

                                    if (el.tagName === 'IFRAME') {
                                          ifrWin = el.contentWindow

                                          if (adId && el[adId] && el[adId].needsWindow) {
                                                json.contents = this.adData.serializedIframeContents
                                                el[adId].needsWindow = false
                                                delete this.adData.serializedIframeContents
                                          } else if (exports.utils.isFriendlyWindow(ifrWin)) {
                                                childJSON = this.serializeElements(ifrWin.document.documentElement)
                                                if (childJSON) {
                                                      json.contents = childJSON
                                                }
                                          }
                                    }

                                    if (
                                          json.children.length > 0 ||
                                          json.adId ||
                                          json.tagName === 'IFRAME' ||
                                          json.url
                                    ) {
                                          return json
                                    } else {
                                          return null
                                    }
                              },

                              /**
                               * Get element containers.
                               * @param {*} containerEl
                               */
                              captureHTML(containerEl) {
                                    this.adData.context = this.serializeElements(containerEl)
                              },

                              /**
                               * Get number of Nodes.
                               * @param {HTMLElement} el
                               */
                              nodeCount(el) {
                                    return el.getElementsByTagName('*').length + 1
                              },

                              /**
                               *
                               * @param {*} curWin
                               * @param {*} referenceElement
                               *
                               * @todo add description
                               */
                              highestContainer(curWin, referenceElement) {
                                    let curContainer = referenceElement
                                    const docEl = curWin.document.documentElement
                                    let parentContainer

                                    if (curWin !== curWin.top && this.isValidContainer(docEl, curWin)) {
                                          return docEl
                                    }

                                    while (true) {
                                          parentContainer = curContainer.parentElement
                                          if (parentContainer && this.isValidContainer(parentContainer)) {
                                                curContainer = parentContainer
                                          } else {
                                                return curContainer
                                          }
                                    }
                              },
                        }

                        const tagfinder = {
                              /**
                               *
                               * @param {*} adData
                               * @param {*} opt_el
                               * @param {*} opt_winPos
                               *
                               * @todo add description
                               */
                              setPositions(adData, opt_el, opt_winPos) {
                                    const el = opt_el || adData.context
                                    const winPos = opt_winPos || { left: 0, top: 0 }
                                    let ifrPos

                                    el.left += winPos.left
                                    el.top += winPos.top

                                    if (el.children) {
                                          el.children.forEach(function (child) {
                                                this.setPositions(adData, child, winPos)
                                          }, this)
                                    }

                                    if (el.contents) {
                                          ifrPos = { left: el.left, top: el.top }
                                          this.setPositions(adData, el.contents, ifrPos)
                                    }

                                    if (el.adId === adData.adId) {
                                          adData.element.left = el.left
                                          adData.element.top = el.top
                                    }
                              },

                              /**
                               *
                               * @param {*} adData
                               * @param {*} referenceElement
                               *
                               * @todo add description
                               */
                              appendTags: (adData, referenceElement) => {
                                    const mgr = new ContextManager(adData)
                                    let curWin = exports.utils.elementWindow(referenceElement)
                                    let highestContainer

                                    while (true) {
                                          highestContainer = mgr.highestContainer(curWin, referenceElement)
                                          mgr.captureHTML(highestContainer)
                                          if (curWin === curWin.top) {
                                                break
                                          } else {
                                                curWin.mpAdFound = true

                                                mgr.adData.serializedIframeContents = mgr.adData.context

                                                if (exports.utils.isFriendlyWindow(curWin.parent)) {
                                                      referenceElement = curWin.frameElement
                                                      referenceElement[mgr.adData.adId] = { needsWindow: true }
                                                      curWin = curWin.parent
                                                } else {
                                                      break
                                                }
                                          }
                                    }
                                    return {
                                          referenceElement,
                                          highestContainer,
                                    }
                              },
                        }

                        exports.tagfinder = tagfinder
                  })(exports)
                  ; (function (exports) {
                        let _onAdFound
                        const _logGen = new exports.utils.LogGenerator()
                        let _pageTags
                        const INIT_MS_BW_SEARCHES = 2000
                        const PAGE_TAG_RE = new RegExp('gpt|oascentral')
                        const POST_MSG_ID = '1554456894-8541-12665-19466-15909'
                        const AD_SERVER_RE = new RegExp('^(google_ads_iframe|oas_frame|atwAdFrame)')

                        /**
                         * Get script tags from document.
                         * @param {Object} doc
                         */
                        function getPageTags(doc) {
                              let scripts = doc.getElementsByTagName('script')
                              const pageTags = []
                              scripts = exports.utils.realArray(scripts)
                              scripts.forEach(function (script) {
                                    if (PAGE_TAG_RE.exec(script.src)) {
                                          pageTags.push({ tagName: 'SCRIPT', url: script.src })
                                    }
                              })
                              return pageTags
                        }

                        /**
                         * Send message to parent iFrames.
                         * @param {String} adData
                         */
                        function messageAllParentFrames(adData) {
                              adData.postMessageId = POST_MSG_ID

                              adData = JSON.stringify(adData)

                              let win = window
                              while (win !== win.top) {
                                    win = win.parent
                                    win.postMessage(adData, '*')
                              }
                        }

                        /**
                         *
                         * @param {String} adData
                         * @param {HTMLElement} referenceElement
                         *
                         * @todo update description
                         */
                        function appendTagsAndSendToParent(adData, referenceElement) {
                              const results = exports.tagfinder.appendTags(adData, referenceElement)
                              if (exports.utils.SCRIPT_IN_HOSTILE_IFRAME) {
                                    messageAllParentFrames(adData)
                              } else if (exports.utils.SCRIPT_IN_WINDOW_TOP) {
                                    exports.tagfinder.setPositions(adData)

                                    adData.matchedSize = exports.adfinder.getMatchedAdSize(
                                          adData.width,
                                          adData.height
                                    )
                                    if (!adData.matchedSize) {
                                          if (AD_SERVER_RE.exec(results.referenceElement.id)) {
                                                adData.matchedSize = [adData.width, adData.height]
                                                adData.oddSize = true
                                          } else {
                                                return
                                          }
                                    }
                                    delete adData.width
                                    delete adData.height
                                    adData.curPageUrl = exports.utils.getPageUrl()
                                    _pageTags = _pageTags || getPageTags(document)
                                    const log = _logGen.log('ad', [adData], _pageTags)

                                    if (_onAdFound) {
                                          _onAdFound(log, results.referenceElement)
                                    }
                              }
                        }

                        /**
                         * SetTimeout wrapper for extracting ads.
                         */
                        function extractAdsWrapper() {
                              if (
                                    exports.utils.SCRIPT_IN_WINDOW_TOP ||
                                    document.readyState === 'complete'
                              ) {
                                    extractAds()
                              }
                              setTimeout(function () {
                                    extractAdsWrapper()
                              }, INIT_MS_BW_SEARCHES)
                        }

                        /**
                         * Main function for extracting ads after loaded.
                         */
                        function extractAds() {
                              const ads = exports.adfinder.findAds(window)
                              ads.forEach(function (ad) {
                                    const startTime = new Date().getTime()
                                    const adId = startTime + '-' + Math.floor(Math.random() * 10e12)

                                    const adData = {
                                          width: Math.round(ad.offsetWidth),
                                          height: Math.round(ad.offsetHeight),
                                          startTime,
                                          adId,
                                          html5: ad.html5 || false,
                                    }

                                    if (ad.html5) {
                                          adData.adSizeMeta = ad.adSizeMeta || null
                                          adData.winClickTag = ad.winClickTag || null
                                    }

                                    ad[adId] = { isAd: true }

                                    appendTagsAndSendToParent(adData, ad)
                              })
                        }

                        /**
                         * Check if window is child of parent.
                         * @param {Object} myWin
                         * @param {Object} otherWin
                         */
                        function isChildWin(myWin, otherWin) {
                              let parentWin = otherWin.parent
                              while (parentWin !== otherWin) {
                                    if (parentWin === myWin) {
                                          return true
                                    }
                                    otherWin = parentWin
                                    parentWin = parentWin.parent
                              }
                              return false
                        }

                        /**
                         *
                         * @param {*} win
                         * @param {*} winToMatch
                         *
                         * @todo update description
                         */
                        function iframeFromWindow(win, winToMatch) {
                              let i
                              let ifr
                              let ifrWin
                              const iframes = win.document.querySelectorAll('iframe')

                              for (i = 0; i < iframes.length; i++) {
                                    ifr = iframes[i]
                                    if (ifr.contentWindow === winToMatch) {
                                          return ifr
                                    }
                              }

                              for (i = 0; i < iframes.length; i++) {
                                    ifrWin = iframes[i].contentWindow
                                    if (exports.utils.isFriendlyWindow(ifrWin)) {
                                          ifr = iframeFromWindow(ifrWin, winToMatch)
                                          if (ifr) {
                                                return ifr
                                          }
                                    }
                              }
                        }

                        /**
                         *
                         * @param {*} event
                         *
                         * @todo update description
                         */
                        function onPostMessage(event) {
                              let adData
                              const ifrWin = event.source
                              const myWin = window.document.defaultView
                              let ifrTag

                              if (typeof event.data === 'string' && event.data.includes(POST_MSG_ID)) {
                                    try {
                                          adData = JSON.parse(event.data)
                                    } catch (e) {
                                          return
                                    }
                              } else return

                              if (adData.postMessageId === POST_MSG_ID) {
                                    delete adData.postMessageId

                                    event.stopImmediatePropagation()

                                    if (isChildWin(myWin, ifrWin)) {
                                          if (exports.utils.isFriendlyWindow(ifrWin)) {
                                                ifrTag = ifrWin.frameElement
                                          } else {
                                                ifrTag = iframeFromWindow(myWin, ifrWin)
                                          }

                                          if (ifrTag) {
                                                ifrTag[adData.adId] = { needsWindow: true }
                                                appendTagsAndSendToParent(adData, ifrTag)
                                          }
                                    }
                              }
                        }

                        /**
                         *
                         * @param {*} msg
                         * @param {*} sender
                         * @param {*} callback
                         *
                         * @todo update description
                         */
                        function onVideoMessage(msg, sender, callback) {
                              let log
                              if (msg.event === 'new-video-ad') {
                                    msg.assets.forEach(function (asset) { })
                                    log = _logGen.log('video', msg.assets)
                              } else {
                                    log = _logGen.log('invalid-video', msg.assets)
                              }

                              msg.assets.forEach(function (a) {
                                    delete a.isVideo
                              })
                              log.displayAdFound = msg.displayAdFound
                              log.requests = msg.requests
                              log.data = msg.event_data

                              log.doc.finalPageUrl = log.doc.url
                              log.doc.url = exports.utils.normalizeUrl(msg.origUrl)

                              _onAdFound(log)
                        }

                        /**
                         * Add background listener.
                         * @param {String} event
                         * @param {Function} callback
                         */
                        function addBackgroundListener(event, callback) {
                              chrome.runtime.onMessage.addListener(function (msg) {
                                    if (msg.event === event) {
                                          callback(msg)
                                    }
                              })
                        }

                        exports.coordinator = {
                              /**
                               * @todo update description
                               */
                              addPostMessageListener() {
                                    if (!exports.utils.SCRIPT_IN_FRIENDLY_IFRAME) {
                                          window.addEventListener('message', onPostMessage, false)
                                    }
                              },

                              /**
                               *
                               * @param {*} sendFcn
                               * @param {*} origUrl
                               *
                               * @todo update description
                               */
                              blockedRobotsMsgGen(sendFcn, origUrl) {
                                    if (!origUrl.includes('google.com/_/chrome/newtab')) {
                                          const onBlockedRobotsMessage = function () {
                                                let log
                                                log = _logGen.log('invalid-robotstxt', [])
                                                log.doc.finalPageUrl = log.doc.url
                                                log.doc.url = exports.utils.normalizeUrl(origUrl)

                                                sendFcn(log)
                                          }
                                          return onBlockedRobotsMessage
                                    } else {
                                          return function () { }
                                    }
                              },

                              /**
                               *
                               * @param {*} onAdFound
                               */
                              init(onAdFound) {
                                    if (exports.utils.SCRIPT_IN_FRIENDLY_IFRAME) {
                                          return false
                                    }

                                    _onAdFound = onAdFound
                                    if (exports.utils.SCRIPT_IN_WINDOW_TOP) {
                                          const log = _logGen.log('page')
                                          onAdFound(log)

                                          window.addEventListener('beforeunload', function (event) {
                                                const log = _logGen.log('unload')
                                                log.timing = window.performance.timing
                                                onAdFound(log)
                                          })

                                          addBackgroundListener('new-video-ad', onVideoMessage)
                                          addBackgroundListener('new-invalid-video-ad', onVideoMessage)
                                    }

                                    exports.utils.onDocLoaded(document, extractAdsWrapper)
                              },
                        }
                  })(exports)

            if (exports.utils.SCRIPT_IN_WINDOW_TOP) {
                  window.adparser = {
                        init: exports.coordinator.init,
                        addPostMessageListener: exports.coordinator.addPostMessageListener,
                        askIfTrackingEnabled: exports.utils.askIfTrackingEnabled,
                        blockedRobotsMsgGen: exports.coordinator.blockedRobotsMsgGen,
                        inWindowTop: exports.utils.SCRIPT_IN_WINDOW_TOP,
                        sendToBackground: exports.utils.sendToBackground,
                  }
            } else {
                  exports.coordinator.addPostMessageListener()
                  exports.utils.askIfTrackingEnabled(
                        function () {
                              exports.coordinator.init(function () { })
                        },
                        function () { }
                  )
            }
      })(window)
      ; (function (adparser, pageUrl) {
            function onAdFound(log) {
                  adparser.sendToBackground(
                        { source: 'iframe.js', func: 'onAd', args: [log] },
                        'onAd',
                        '',
                        function () { }
                  )
            }

            if (adparser && adparser.inWindowTop) {
                  adparser.addPostMessageListener()
                  adparser.askIfTrackingEnabled(function () {
                        adparser.init(onAdFound)
                  }, adparser.blockedRobotsMsgGen(onAdFound, pageUrl))
            }
      })(window.adparser, window.location.href)


      ///--------------------------------------Google optimize------------------------------------------


/*

Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/
var w = "function" == typeof Object.defineProperties ? Object.defineProperty : function (a, b, c) { if (a == Array.prototype || a == Object.prototype) return a; a[b] = c.value; return a }, aa = function (a) { a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global]; for (var b = 0; b < a.length; ++b) { var c = a[b]; if (c && c.Math == Math) return c } throw Error("Cannot find global object"); }, x = aa(this), y = function (a, b) {
      if (b) a: {
            var c = x; a = a.split("."); for (var f = 0; f < a.length -
                  1; f++) { var e = a[f]; if (!(e in c)) break a; c = c[e] } a = a[a.length - 1]; f = c[a]; b = b(f); b != f && null != b && w(c, a, { configurable: !0, writable: !0, value: b })
      }
}, ba = function (a) { var b = 0; return function () { return b < a.length ? { done: !1, value: a[b++] } : { done: !0 } } };
y("Symbol", function (a) { if (a) return a; var b = function (e, k) { this.V = e; w(this, "description", { configurable: !0, writable: !0, value: k }) }; b.prototype.toString = function () { return this.V }; var c = 0, f = function (e) { if (this instanceof f) throw new TypeError("Symbol is not a constructor"); return new b("jscomp_symbol_" + (e || "") + "_" + c++, e) }; return f });
y("Symbol.iterator", function (a) { if (a) return a; a = Symbol("Symbol.iterator"); for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) { var f = x[b[c]]; "function" === typeof f && "function" != typeof f.prototype[a] && w(f.prototype, a, { configurable: !0, writable: !0, value: function () { return ca(ba(this)) } }) } return a });
var ca = function (a) { a = { next: a }; a[Symbol.iterator] = function () { return this }; return a }, da = function (a, b) { a instanceof String && (a += ""); var c = 0, f = !1, e = { next: function () { if (!f && c < a.length) { var k = c++; return { value: b(k, a[k]), done: !1 } } f = !0; return { done: !0, value: void 0 } } }; e[Symbol.iterator] = function () { return e }; return e }, ea = function (a) { var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator]; return b ? b.call(a) : { next: ba(a) } };
y("Promise", function (a) {
      function b() { this.b = null } function c(d) { return d instanceof e ? d : new e(function (g) { g(d) }) } if (a) return a; b.prototype.D = function (d) { if (null == this.b) { this.b = []; var g = this; this.F(function () { g.Z() }) } this.b.push(d) }; var f = x.setTimeout; b.prototype.F = function (d) { f(d, 0) }; b.prototype.Z = function () { for (; this.b && this.b.length;) { var d = this.b; this.b = []; for (var g = 0; g < d.length; ++g) { var h = d[g]; d[g] = null; try { h() } catch (l) { this.X(l) } } } this.b = null }; b.prototype.X = function (d) {
            this.F(function () {
                  throw d;
            })
      }; var e = function (d) { this.m = 0; this.o = void 0; this.l = []; this.O = !1; var g = this.v(); try { d(g.resolve, g.reject) } catch (h) { g.reject(h) } }; e.prototype.v = function () { function d(l) { return function (q) { h || (h = !0, l.call(g, q)) } } var g = this, h = !1; return { resolve: d(this.ga), reject: d(this.B) } }; e.prototype.ga = function (d) {
            if (d === this) this.B(new TypeError("A Promise cannot resolve to itself")); else if (d instanceof e) this.ia(d); else {
                  a: switch (typeof d) {
                        case "object": var g = null != d; break a; case "function": g = !0; break a; default: g =
                              !1
                  }g ? this.fa(d) : this.J(d)
            }
      }; e.prototype.fa = function (d) { var g = void 0; try { g = d.then } catch (h) { this.B(h); return } "function" == typeof g ? this.ja(g, d) : this.J(d) }; e.prototype.B = function (d) { this.T(2, d) }; e.prototype.J = function (d) { this.T(1, d) }; e.prototype.T = function (d, g) { if (0 != this.m) throw Error("Cannot settle(" + d + ", " + g + "): Promise already settled in state" + this.m); this.m = d; this.o = g; 2 === this.m && this.ha(); this.$() }; e.prototype.ha = function () {
            var d = this; f(function () {
                  if (d.ea()) {
                        var g = x.console; "undefined" !== typeof g &&
                              g.error(d.o)
                  }
            }, 1)
      }; e.prototype.ea = function () { if (this.O) return !1; var d = x.CustomEvent, g = x.Event, h = x.dispatchEvent; if ("undefined" === typeof h) return !0; "function" === typeof d ? d = new d("unhandledrejection", { cancelable: !0 }) : "function" === typeof g ? d = new g("unhandledrejection", { cancelable: !0 }) : (d = x.document.createEvent("CustomEvent"), d.initCustomEvent("unhandledrejection", !1, !0, d)); d.promise = this; d.reason = this.o; return h(d) }; e.prototype.$ = function () {
            if (null != this.l) {
                  for (var d = 0; d < this.l.length; ++d)k.D(this.l[d]);
                  this.l = null
            }
      }; var k = new b; e.prototype.ia = function (d) { var g = this.v(); d.s(g.resolve, g.reject) }; e.prototype.ja = function (d, g) { var h = this.v(); try { d.call(g, h.resolve, h.reject) } catch (l) { h.reject(l) } }; e.prototype.then = function (d, g) { function h(m, n) { return "function" == typeof m ? function (p) { try { l(m(p)) } catch (v) { q(v) } } : n } var l, q, r = new e(function (m, n) { l = m; q = n }); this.s(h(d, l), h(g, q)); return r }; e.prototype.catch = function (d) { return this.then(void 0, d) }; e.prototype.s = function (d, g) {
            function h() {
                  switch (l.m) {
                        case 1: d(l.o);
                              break; case 2: g(l.o); break; default: throw Error("Unexpected state: " + l.m);
                  }
            } var l = this; null == this.l ? k.D(h) : this.l.push(h); this.O = !0
      }; e.resolve = c; e.reject = function (d) { return new e(function (g, h) { h(d) }) }; e.race = function (d) { return new e(function (g, h) { for (var l = ea(d), q = l.next(); !q.done; q = l.next())c(q.value).s(g, h) }) }; e.all = function (d) {
            var g = ea(d), h = g.next(); return h.done ? c([]) : new e(function (l, q) {
                  function r(p) { return function (v) { m[p] = v; n--; 0 == n && l(m) } } var m = [], n = 0; do m.push(void 0), n++, c(h.value).s(r(m.length -
                        1), q), h = g.next(); while (!h.done)
            })
      }; return e
}); y("Array.prototype.keys", function (a) { return a ? a : function () { return da(this, function (b) { return b }) } });
var z = this || self, ha = function () { var a = window; if (a && a != z) return fa(a.document); null === A && (A = fa(z.document)); return A }, ia = /^[\w+/_-]+[=]{0,2}$/, A = null, fa = function (a) { return (a = a.querySelector && a.querySelector("script[nonce]")) && (a = a.nonce || a.getAttribute("nonce")) && ia.test(a) ? a : "" }, ja = function (a) { var b = typeof a; return "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null" }, ka = function (a) { var b = typeof a; return "object" == b && null != a || "function" == b }, B = function (a, b) {
      function c() { } c.prototype = b.prototype; a.pa = b.prototype;
      a.prototype = new c; a.prototype.constructor = a; a.ka = function (f, e, k) { for (var d = Array(arguments.length - 2), g = 2; g < arguments.length; g++)d[g - 2] = arguments[g]; return b.prototype[e].apply(f, d) }
}, C = function (a) { return a }; function D(a) { if (Error.captureStackTrace) Error.captureStackTrace(this, D); else { var b = Error().stack; b && (this.stack = b) } a && (this.message = String(a)) } B(D, Error); D.prototype.name = "CustomError"; var E = function (a, b) { a = a.split("%s"); for (var c = "", f = a.length - 1, e = 0; e < f; e++)c += a[e] + (e < b.length ? b[e] : "%s"); D.call(this, c + a[f]) }; B(E, D); E.prototype.name = "AssertionError";
var la = function (a, b, c, f) { var e = "Assertion failed"; if (c) { e += ": " + c; var k = f } else a && (e += ": " + a, k = b); throw new E("" + e, k || []); }, F = function (a, b, c) { a || la("", null, b, Array.prototype.slice.call(arguments, 2)); return a }, G = function (a, b) { throw new E("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1)); }, ma = function (a, b, c) { "string" !== typeof a && la("Expected string but got %s: %s.", [ja(a), a], b, Array.prototype.slice.call(arguments, 2)) }; var H; var I = function (a, b) { this.C = a === na && b || ""; this.W = oa }; I.prototype.M = !0; I.prototype.K = function () { return this.C }; I.prototype.toString = function () { return "Const{" + this.C + "}" }; var pa = function (a) { if (a instanceof I && a.constructor === I && a.W === oa) return a.C; G("expected object of type Const, got '" + a + "'"); return "type_error:Const" }, oa = {}, na = {}; var xa = function (a, b) { if (b) a = a.replace(qa, "&amp;").replace(ra, "&lt;").replace(sa, "&gt;").replace(ta, "&quot;").replace(ua, "&#39;").replace(va, "&#0;"); else { if (!wa.test(a)) return a; -1 != a.indexOf("&") && (a = a.replace(qa, "&amp;")); -1 != a.indexOf("<") && (a = a.replace(ra, "&lt;")); -1 != a.indexOf(">") && (a = a.replace(sa, "&gt;")); -1 != a.indexOf('"') && (a = a.replace(ta, "&quot;")); -1 != a.indexOf("'") && (a = a.replace(ua, "&#39;")); -1 != a.indexOf("\x00") && (a = a.replace(va, "&#0;")) } return a }, qa = /&/g, ra = /</g, sa = />/g, ta = /"/g, ua = /'/g,
      va = /\x00/g, wa = /[\x00&<>"']/; var K = function (a, b, c) { this.A = c === J ? a : ""; this.I = b }; K.prototype.ca = !0; K.prototype.M = !0; K.prototype.K = function () { return this.A.toString() }; K.prototype.toString = function () { return "SafeHtml{" + this.A + "}" };
var L = function (a) { if (a instanceof K && a.constructor === K) return a.A; G("expected object of type SafeHtml, got '" + a + "' of type " + ja(a)); return "type_error:SafeHtml" }, za = function (a) { if (a instanceof K) return a; var b = "object" == typeof a, c = null; b && a.ca && (c = a.I); return ya(xa(b && a.M ? a.K() : String(a)), c) }, J = {}, ya = function (a, b) {
      if (void 0 === H) {
            var c = null; var f = z.trustedTypes; if (f && f.createPolicy) try { c = f.createPolicy("goog#html", { createHTML: C, createScript: C, createScriptURL: C }) } catch (e) { z.console && z.console.error(e.message) } H =
                  c
      } a = (c = H) ? c.createHTML(a) : a; return new K(a, b, J)
}, Aa = new K(z.trustedTypes && z.trustedTypes.emptyHTML || "", 0, J); var Ba = function (a) { var b = !1, c; return function () { b || (c = a(), b = !0); return c } }(function () { if ("undefined" === typeof document) return !1; var a = document.createElement("div"), b = document.createElement("div"); b.appendChild(document.createElement("div")); a.appendChild(b); if (!a.firstChild) return !1; b = a.firstChild.firstChild; a.innerHTML = L(Aa); return !b.parentElement }); var M = window; var N = {}; var Ca = {}, Da = function () { return void 0 == Ca.gtag_cs_api ? !1 : Ca.gtag_cs_api }; var O = []; function P() { var a = {}; var b = M.google_tag_data; M.google_tag_data = void 0 === b ? a : b; a = M.google_tag_data; a.ics || (a.ics = { entries: {}, set: Ea, update: Fa, addListener: Ga, notifyListeners: Ha, active: !1 }); return a.ics }
function Ea(a, b, c, f, e, k) { var d = P(); d.active = !0; if (void 0 != b) { var g = d.entries; d = g[a] || {}; var h = d.region; c = c && "string" == typeof c ? c.toUpperCase() : void 0; f = f.toUpperCase(); e = e.toUpperCase(); if (c === e || (c === f ? h !== e : !c && !h)) { f = !!(k && 0 < k && void 0 === d.update); var l = { region: c, initial: "granted" === b, update: d.update, quiet: f }; g[a] = l; f && M.setTimeout(function () { g[a] === l && l.quiet && (l.quiet = !1, Q(a), Ha(), N.TAGGING = N.TAGGING || [], N.TAGGING[2] = !0) }, k) } } }
function Fa(a, b) { var c = P(); c.active = !0; if (void 0 != b) { var f = Ia(a); c = c.entries; c = c[a] = c[a] || {}; c.update = "granted" === b; b = Ia(a); c.quiet ? (c.quiet = !1, Q(a)) : b !== f && Q(a) } } function Ga(a, b) { O.push({ G: a, ba: b }) } function Q(a) { for (var b = 0; b < O.length; ++b) { var c = O[b]; "[object Array]" == Object.prototype.toString.call(Object(c.G)) && -1 !== c.G.indexOf(a) && (c.P = !0) } } function Ha(a) { for (var b = 0; b < O.length; ++b) { var c = O[b]; if (c.P) { c.P = !1; try { c.ba({ la: a }) } catch (f) { } } } }
var Ia = function (a) { a = P().entries[a] || {}; return void 0 !== a.update ? a.update : void 0 !== a.initial ? a.initial : void 0 }; function Ja(a, b, c) { var f = document.cookie; document.cookie = a; a = document.cookie; if (!(f = f != a) && (f = void 0 != b)) { if (Ka(c)) for (c = [], a = String(a || document.cookie).split(";"), f = 0; f < a.length; f++) { var e = a[f].split("="), k = e[0].replace(/^\s*|\s*$/g, ""); k && "__TAG_ASSISTANT" == k && (e = e.slice(1).join("=").replace(/^\s*|\s*$/g, ""), c.push(e)) } else c = []; f = 0 <= c.indexOf(b) } return f }
var Oa = function (a) {
      function b(q, r, m) { if (null == m) return delete k[r], q; k[r] = m; return q + "; " + r + "=" + m } function c(q, r) { if (null == r) return delete k[r], q; k[r] = !0; return q + "; " + r } var f = void 0; if (Ka(a.S)) {
            if (void 0 == f) var e = "__TAG_ASSISTANT=deleted; expires=" + (new Date(0)).toUTCString(); else a.encode && (f = encodeURIComponent(f)), f = La(f), e = "__TAG_ASSISTANT=" + f; var k = {}; e = b(e, "path", a.path); var d; a.expires instanceof Date ? d = a.expires.toUTCString() : null != a.expires && (d = "" + a.expires); e = b(e, "expires", d); e = b(e, "max-age",
                  a.ma); e = b(e, "samesite", a.na); a.secure && (e = c(e, "secure")); d = a.domain; if ("auto" === d) { d = Ma(); for (var g = 0; g < d.length; ++g) { var h = "none" !== d[g] ? d[g] : void 0, l = b(e, "domain", h); l = c(l, a.flags); if (!Na(h, a.path) && Ja(l, f, a.S)) break } } else d && "none" !== d && (e = b(e, "domain", d)), e = c(e, a.flags), Na(d, a.path) || Ja(e, f, a.S)
      }
}, Pa = function () { var a = {}; null == a.path && (a.path = "/"); a.domain || (a.domain = "auto"); Oa(a) }, La = function (a) { a && 1200 < a.length && (a = a.substring(0, 1200)); return a }, Qa = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/, Ra =
            /(^|\.)doubleclick\.net$/i, Na = function (a, b) { return Ra.test(document.location.hostname) || "/" === b && Qa.test(a) }, Ma = function () { var a = [], b = document.location.hostname.split("."); if (4 === b.length) { var c = b[b.length - 1]; if (parseInt(c, 10).toString() === c) return ["none"] } for (c = b.length - 2; 0 <= c; c--)a.push(b.slice(c).join(".")); b = document.location.hostname; Ra.test(b) || Qa.test(b) || a.push("none"); return a }, Ka = function (a) {
                  if (!(Da() && a && Da() && P().active)) return !0; if ((P().entries[a] || {}).quiet) return !1; a = Ia(a); return null ==
                        a ? !0 : !!a
            }; function Sa(a) { a = Number(String(a)); return isNaN(a) ? "" : String(a) } function Ta(a) { return a && a.match(/^[\w-]*$/) ? a : "" }
var R = {}, S = (R.galaxy_s8 = { g: 360, c: 740, f: 3, a: "Mozilla/5.0 (Linux; Android 7.0; SM-G950U Build/NRD90M) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.84 Mobile Safari/537.36", j: "Mobile", i: "Galaxy S8", h: "opt_device_mobile_blk" }, R.galaxy_note8 = { g: 412, c: 846, f: 3.5, a: "Mozilla/5.0 (Linux; Android 7.1.1; SAMSUNG SM-N950U Build/NMF26X) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/6.2 Chrome/56.0.2924.87 Mobile Safari/537.36", j: "Mobile", i: "Galaxy Note 8", h: "opt_device_mobile_blk" }, R.galaxy_tab =
      { g: 768, c: 1024, f: 2, a: "Mozilla/5.0 (Linux; Android 7.0; SM-T827V Build/NRD90M) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.83 Safari/537.36", j: "Tablet", i: "Galaxy Tab", h: "opt_device_tablet_blk" }, R.iphone_7 = { g: 375, c: 667, f: 2, a: "Mozilla/5.0 (iPhone; CPU iPhone OS 11_1_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/11.0 Mobile/14E304 Safari/604.1", j: "Mobile", i: "iPhone 7", h: "opt_device_mobile_blk" }, R.iphone_7_plus = {
            g: 414, c: 736, f: 3, a: "Mozilla/5.0 (iPhone; CPU iPhone OS 11_1_1 like Mac OS X) AppleWebKit/604.3.5 (KHTML, like Gecko) Version/11.0 Mobile/15B150 Safari/604.1",
            j: "Mobile", i: "iPhone 7 plus", h: "opt_device_mobile_blk"
      }, R.iphone_x = { g: 375, c: 812, f: 3, a: "Mozilla/5.0 (iPhone; CPU iPhone OS 12_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.0 Mobile/15E148 Safari/604.1", j: "Mobile", i: "iPhone X", h: "opt_device_mobile_blk" }, R.ipad = { g: 768, c: 1024, f: 2, a: "Mozilla/5.0 (iPad; CPU OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1", j: "Tablet", i: "iPad", h: "opt_device_tablet_blk" }, R.responsive = {
            g: 768, c: 474,
            f: 1, a: "", j: "Responsive", i: "Responsive", h: "opt_device_web_blk"
      }, R); S.mobile = S.iphone_7; S.tablet = S.ipad; var Ua = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/; function Va(a) { return a ? (a = a.match(Ua)) ? a[3] || null : null : null } function Wa(a) { var b = Va(document.location.href); a = Va(a); return !!b && !!a && b === a }; var Xa = { oa: !0 }, T = function () { throw Error("Do not instantiate directly"); }; T.prototype.u = null; T.prototype.getContent = function () { return this.content }; T.prototype.toString = function () { return this.content }; var U = function () { T.call(this) }; B(U, T); U.prototype.H = Xa; var Ya = function (a) { if (null != a) switch (a.u) { case 1: return 1; case -1: return -1; case 0: return 0 }return null }, W = function (a) { var b = null != a && a.H === Xa; b && F(a.constructor === U); if (!b) if (a instanceof K) a = V(L(a).toString(), a.I); else { b = V; var c = String(String(a)); c = xa(c, void 0); a = b(c, Ya(a)) } return a }, V = function (a) { function b(c) { this.content = c } b.prototype = a.prototype; return function (c, f) { c = new b(String(c)); void 0 !== f && (c.u = f); return c } }(U), X = function (a, b, c, f) {
            a || G("expected param " + b + " of type " + f + (", but got " + (c instanceof
                  Function ? c.displayName || c.name || "unknown type name" : c instanceof Object ? c.constructor.displayName || c.constructor.name || Object.prototype.toString.call(c) : null === c ? "null" : typeof c)) + "."); return c
      }; var Za = function () { var a = document; var b = "SCRIPT"; "application/xhtml+xml" === a.contentType && (b = b.toLowerCase()); return a.createElement(b) }; var $a = {}; var ab = function (a) {
            var b = X("string" === typeof a.N, "injectJsUrl", a.N, "string"), c = X("string" === typeof a.U, "tokenParam", a.U, "string"), f = X("string" === typeof a.token, "token", a.token, "string"), e = X("string" === typeof a.authUser, "authUser", a.authUser, "string"), k = X("string" === typeof a.language, "language", a.language, "string"), d = X("string" === typeof a.deviceType, "deviceType", a.deviceType, "string"), g = X(ka(a.L), "i18nMessages", a.L, "{internalError: string, failedToLoad: string, checkNetwork: string,}"); a = X("string" ===
                  typeof a.nonce, "nonce", a.nonce, "string"); return V("\n    (function() {\n  var injectSrc = '" + W(b) + "?" + W(c) + "=" + W(f) + ("" == e ? "" : "&authuser=" + W(e)) + ("" == d ? "" : "&devicetype=" + W(d)) + ("" == k ? "" : "&hl=" + W(k)) + "'; var nonce = '" + W(a) + "';\n      if(window['_google_opt_edit']) {\n        return;\n      }\n      window['_google_opt_edit'] = {};\n      var injectScript = document.createElement('script');\n      injectScript.type = 'text/javascript';\n      injectScript.src = injectSrc;\n      if (nonce) {\n        injectScript.setAttribute('nonce', nonce);\n      }\n      if (document.head) {\n        document.head.appendChild(injectScript);\n      } else {\n        document.insertBefore(injectScript, document.body);\n      }\n\n      window['_goptInjectInitOnError'] = function(internalError) {\n        alert((internalError ? '" +
                        W(g.da) + "' : '" + W(g.aa) + "') + ' " + W(g.Y) + "');\n        document.documentElement.style['opacity'] = '';\n        delete window['_goptInjectInitOnError'];\n      }\n      window.setTimeout(function() {\n        var injectError = window['_goptInjectInitOnError'];\n        if (injectError) injectError();\n      }, 10000);\n    })();\n  ")
      }, bb = function (a) { a = X("string" === typeof a.userAgent, "userAgent", a.userAgent, "string"); return V("\n    (function() {\n  var userAgent = '" + W(a) + "';\n      Object.defineProperty(window.navigator, 'userAgent', {\n        get: function () {\n          return userAgent;\n        }\n      });\n    })()\n  ") }; var Y = function () { var a = chrome.runtime; this.storage = chrome.storage.local; this.runtime = a }; Y.prototype.clear = function () { var a = this; return Z(this, function (b) { return void a.storage.clear(b) }) }; Y.prototype.set = function (a) { var b = this; return Z(this, function (c) { return void b.storage.set(a, c) }) }; Y.prototype.remove = function (a) { var b = this; return Z(this, function (c) { return void b.storage.remove(a, c) }) };
Y.prototype.get = function (a) { for (var b = [], c = 0; c < arguments.length; ++c)b[c - 0] = arguments[c]; var f = this; return Z(this, function (e) { return void f.storage.get(b, e) }) }; var Z = function (a, b) { return (new Promise(b)).then(function (c) { if (a.runtime.lastError) throw a.runtime.lastError; return c }) }; var ib = function () {
      var a = cb; a.runtime.sendMessage({ command: "get" }, function (b) {
            if (b && b.success) if (b.editorTab) {
                  var c = b.token; if (c) {
                        var f = b.modelUrl, e = b.host, k = !1; if (!Wa(f) && (k = !0, b.checkRedirect && 0 !== document.location.href.indexOf(e))) { var d = a.getMessage("url_redirect", [f, document.location.href]); setTimeout(function () { alert(d) }, 1E3) } Pa(); a.storage.remove(["checkRedirect"]); if (!k) {
                              var g = b.deviceType; (f = g && S[g]) || (g = void 0); document.documentElement.style.opacity = g && f ? "0" : "0.1"; var h = e + "optimize/inject/inject.js",
                                    l = Sa(b.authUser), q = Ta(b.language); db(function () { var m = g || "", n = Za(), p = ha(); p && n.setAttribute("nonce", p); a.R(n, ab, { N: h, U: "goptedit", token: c, authUser: l, language: q, deviceType: m, L: { da: a.getMessage("internal_error"), aa: a.getMessage("failed_to_load"), Y: a.getMessage("check_network") }, nonce: p }); document.head ? document.head.appendChild(n) : document.insertBefore(n, document.body) })
                        }
                  }
            } else {
                  var r = function () {
                        var m = eb(); a.storage.get("previewData").then(function (n) {
                              if (n = n.previewData) {
                                    var p = b.containerPublicId; if (p &&
                                          n && n[p]) if (m.hasOwnProperty(p)) if (n[p].expCookie !== m[p]) { var v = "error"; var t = n[p].livePreview ? a.getMessage("enable_cookies_live") : a.getMessage("enable_cookies"); alert(t) } else v = "active"; else v = "error", fb(a, p, n[p], 1), alert(a.getMessage("public_id_missing", [p])); else { t = Object.keys(m); for (var u = 0; u < t.length; u++)if (n[t[u]] && n[t[u]].expCookie === m[t[u]]) { p = t[u]; v = "active"; break } } p && "active" === v ? fb(a, p, n[p], 0) : v || (v = "inactive"); p = !1; if (m) for (t = Object.keys(m), u = 0; u < t.length; u++)n[t[u]] && m[t[u]] !== n[t[u]].expCookie &&
                                                (delete n[t[u]], p = !0); p && a.storage.set({ previewData: n }).catch(function (gb) { console.log(gb) }); a.runtime.sendMessage({ command: "setIcon", iconState: v })
                              }
                        })
                  }; a.storage.get("containerParams").then(function (m) { m = m.containerParams; !m || m.modelUrl && !Wa(m.modelUrl) || Pa() }); hb(function () { setTimeout(r, 5E3) })
            }
      })
}, fb = function (a, b, c, f) {
      a.isInPreview = !0; a.previewStatus = f; a.containerPublicId = b; a.containerName = String(c.containerName); a.experimentName = String(c.experimentName); a.variationName = String(c.variationName); a.expCookie =
            String(c.expCookie); a.endPreviewUrl = String(c.endPreviewUrl); a.debugMode = !!c.debugMode; a.livePreview = !!c.livePreview
}, eb = function () { for (var a = {}, b = document.querySelectorAll('script[src*="/gtm/js?id="],script[src*="optimize.js?id="]'), c = 0; c < b.length; c++) { var f = b[c].src, e = /^.*(?:\/gtm\/js|\/optimize.js)\?id=([^&]+).*$/; if (f = f.match(e) ? f.replace(e, "$1") : null) e = b[c].getAttribute("data-opt-preview") || "", a[f] = e } return a }, db = function (a) {
      "loading" !== document.readyState ? a() : window.addEventListener("DOMContentLoaded",
            a, !1)
}, hb = function (a) { "complete" === document.readyState ? a() : window.addEventListener("load", a, !1) }, jb = function () {
      var a = cb; a.runtime.onMessage.addListener(function (b, c, f) {
            if (a.isInPreview) if ("checkForPreview" === b.command) f({ isInPreview: a.isInPreview, previewStatus: a.previewStatus, containerName: a.containerName, experimentName: a.experimentName, variationName: a.variationName, endPreviewUrl: a.endPreviewUrl, debugMode: a.debugMode, livePreview: a.livePreview }); else if ("getPreviewStatusInfo" === b.command) f({
                  isInPreview: a.isInPreview,
                  containerPublicId: a.containerPublicId, expCookie: a.expCookie
            }); else if ("setPreviewStatus" === b.command) a.previewStatus = b.previewStatus; else if ("endPreview" === b.command) return a.storage.get("previewData").then(function (e) { var k = { isInPreview: a.isInPreview, endPreviewUrl: a.endPreviewUrl }; (e = e.previewData) && e[a.containerPublicId] && (delete e[a.containerPublicId], a.storage.set({ previewData: e }), f(k)) }), a.runtime.sendMessage({ command: "endPreview", containerPublicId: a.containerPublicId }), !0; f({ isInPreview: a.isInPreview });
            return !1
      })
}, cb = new function (a, b) { var c = chrome.i18n.getMessage; this.runtime = chrome.runtime; this.getMessage = c; this.storage = a; this.R = b; this.isInPreview = !1; this.previewStatus = 3; this.endPreviewUrl = this.expCookie = this.variationName = this.experimentName = this.containerName = this.containerPublicId = ""; this.livePreview = this.debugMode = !1 }(new Y, function (a, b, c, f) {
      c = b(c || $a, f); if (ka(c)) if (c instanceof T) {
            if (c.H !== Xa) throw Error("Sanitized content was not of kind HTML."); b = c.toString(); c = c.u; f = new I(na, "Soy SanitizedContent of kind HTML produces SafeHtml-contract-compliant value.");
            ma(pa(f), "must provide justification"); F(!/^[\s\xa0]*$/.test(pa(f)), "must provide non-empty justification"); b = ya(b, c || null)
      } else G("Soy template output is unsafe for use as HTML: " + c), b = za("zSoyz"); else b = za(String(c)); a = F(a); if (Ba()) for (; a.lastChild;)a.removeChild(a.lastChild); a.innerHTML = L(b)
}); window === window.top && (ib(), jb());
(function () { var a = cb; a.runtime.sendMessage({ command: "get", isFrame: !0 }, function (b) { if (b && b.success && b.editorTab) { var c = (b = b.deviceType) && S[b]; if (b && c) { b = c.a; c = Za(); c.classList.add("opt-user-agent-script"); var f = ha(); f && c.setAttribute("nonce", f); a.R(c, bb, { userAgent: b }); document.head.appendChild(c) } } }) })();
