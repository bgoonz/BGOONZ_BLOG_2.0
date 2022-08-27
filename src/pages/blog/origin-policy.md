---
title: Origin Policy
template: post
subtitle: Origins are the fundamental currency of the webs security model
excerpt: Two actors in the web platform that share an origin are assumed to
  trust each other and to have the same authority.
date: 2022-08-27T06:19:28.467Z
image: https://miro.medium.com/max/925/1*wnTTrWj5tn6VCQJHk9PHKQ.png
thumb_image: https://miro.medium.com/max/925/1*wnTTrWj5tn6VCQJHk9PHKQ.png
image_position: right
author: src/data/authors/bgoonz.yaml
categories:
  - src/data/categories/content-management.yaml
tags:
  - src/data/tags/cms.yaml
show_author_bio: true
related_posts:
  - src/pages/blog/embedding-media-in-html.md
cmseditable: true
---
<!--StartFragment-->

### 7.5 Origin[](https://html.spec.whatwg.org/multipage/origin.html#origin)

Origins are the fundamental currency of the web's security model. Two actors in the web platform that share an origin are assumed to trust each other and to have the same authority. Actors with differing origins are considered potentially hostile versus each other, and are isolated from each other to varying degrees.

For example, if Example Bank's web site, hosted at `bank.example.com`, tries to examine the DOM of Example Charity's web site, hosted at `charity.example.org`, a ["`SecurityError`"](https://webidl.spec.whatwg.org/#securityerror) `DOMException` will be raised.

- - -

An origin is one of the following:

* An opaque origin

  An internal value, with no serialization it can be recreated from (it is serialized as "`null`" per [serialization of an origin](https://html.spec.whatwg.org/multipage/origin.html#ascii-serialisation-of-an-origin)), for which the only meaningful operation is testing for equality.
* A tuple origin

  A [tuple](https://html.spec.whatwg.org/multipage/origin.html#concept-origin-tuple) consists of:

  * A scheme (an [ASCII string](https://infra.spec.whatwg.org/#ascii-string)).
  * A host (a [host](https://url.spec.whatwg.org/#concept-host)).
  * A port (null or a 16-bit unsigned integer).
  * A domain (null or a [domain](https://url.spec.whatwg.org/#concept-domain)). Null unless stated otherwise.

[Origins](https://html.spec.whatwg.org/multipage/origin.html#concept-origin) can be shared, e.g., among multiple `Document` objects. Furthermore, [origins](https://html.spec.whatwg.org/multipage/origin.html#concept-origin) are generally immutable. Only the [domain](https://html.spec.whatwg.org/multipage/origin.html#concept-origin-domain) of a [tuple origin](https://html.spec.whatwg.org/multipage/origin.html#concept-origin-tuple) can be changed, and only through the `document.domain` API.

The effective domain of an [origin](https://html.spec.whatwg.org/multipage/origin.html#concept-origin) `origin` is computed as follows:

1. If `origin` is an [opaque origin](https://html.spec.whatwg.org/multipage/origin.html#concept-origin-opaque), then return null.
2. If `origin`'s [domain](https://html.spec.whatwg.org/multipage/origin.html#concept-origin-domain) is non-null, then return `origin`'s [domain](https://html.spec.whatwg.org/multipage/origin.html#concept-origin-domain).
3. Return `origin`'s [host](https://html.spec.whatwg.org/multipage/origin.html#concept-origin-host).

The serialization of an origin is the string obtained by applying the following algorithm to the given [origin](https://html.spec.whatwg.org/multipage/origin.html#concept-origin) `origin`:

1. If `origin` is an [opaque origin](https://html.spec.whatwg.org/multipage/origin.html#concept-origin-opaque), then return "`null`".
2. Otherwise, let `result` be `origin`'s [scheme](https://html.spec.whatwg.org/multipage/origin.html#concept-origin-scheme).
3. Append "`://`" to `result`.
4. Append `origin`'s [host](https://html.spec.whatwg.org/multipage/origin.html#concept-origin-host), [serialized](https://url.spec.whatwg.org/#concept-host-serializer), to `result`.
5. If `origin`'s [port](https://html.spec.whatwg.org/multipage/origin.html#concept-origin-port) is non-null, append a U+003A COLON character (:), and `origin`'s [port](https://html.spec.whatwg.org/multipage/origin.html#concept-origin-port), [serialized](https://url.spec.whatwg.org/#serialize-an-integer), to `result`.
6. Return `result`.

The [serialization](https://html.spec.whatwg.org/multipage/origin.html#ascii-serialisation-of-an-origin) of ("`https`", "`xn--maraa-rta.example`", null, null) is "`https://xn--maraa-rta.example`".

There used to also be a *Unicode serialization of an origin*. However, it was never widely adopted.

- - -

Two [origins](https://html.spec.whatwg.org/multipage/origin.html#concept-origin), `A` and `B`, are said to be same origin if the following algorithm returns true:

1. If `A` and `B` are the same [opaque origin](https://html.spec.whatwg.org/multipage/origin.html#concept-origin-opaque), then return true.
2. If `A` and `B` are both [tuple origins](https://html.spec.whatwg.org/multipage/origin.html#concept-origin-tuple) and their [schemes](https://html.spec.whatwg.org/multipage/origin.html#concept-origin-scheme), [hosts](https://html.spec.whatwg.org/multipage/origin.html#concept-origin-host), and [port](https://html.spec.whatwg.org/multipage/origin.html#concept-origin-port) are identical, then return true.
3. Return false.

Two [origins](https://html.spec.whatwg.org/multipage/origin.html#concept-origin), `A` and `B`, are said to be same origin-domain if the following algorithm returns true:

1. If `A` and `B` are the same [opaque origin](https://html.spec.whatwg.org/multipage/origin.html#concept-origin-opaque), then return true.
2. If `A` and `B` are both [tuple origins](https://html.spec.whatwg.org/multipage/origin.html#concept-origin-tuple), run these substeps:

   1. If `A` and `B`'s [schemes](https://html.spec.whatwg.org/multipage/origin.html#concept-origin-scheme) are identical, and their [domains](https://html.spec.whatwg.org/multipage/origin.html#concept-origin-domain) are identical and non-null, then return true.
   2. Otherwise, if `A` and `B` are [same origin](https://html.spec.whatwg.org/multipage/origin.html#same-origin) and their [domains](https://html.spec.whatwg.org/multipage/origin.html#concept-origin-domain) are identical and null, then return true.
3. Return false.

| `A`                                                 | `B`                                                 | [same origin](https://html.spec.whatwg.org/multipage/origin.html#same-origin) | [same origin-domain](https://html.spec.whatwg.org/multipage/origin.html#same-origin-domain) |
| --------------------------------------------------- | --------------------------------------------------- | ----------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| ("`https`", "`example.org`", null, null)            | ("`https`", "`example.org`", null, null)            | ✅                                                                             | ✅                                                                                           |
| ("`https`", "`example.org`", 314, null)             | ("`https`", "`example.org`", 420, null)             | ❌                                                                             | ❌                                                                                           |
| ("`https`", "`example.org`", 314, "`example.org`")  | ("`https`", "`example.org`", 420, "`example.org`")  | ❌                                                                             | ✅                                                                                           |
| ("`https`", "`example.org`", null, null)            | ("`https`", "`example.org`", null, "`example.org`") | ✅                                                                             | ❌                                                                                           |
| ("`https`", "`example.org`", null, "`example.org`") | ("`http`", "`example.org`", null, "`example.org`")  | ❌                                                                             | ❌                                                                                           |

#### 7.5.1 Sites[](https://html.spec.whatwg.org/multipage/origin.html#sites)

A scheme-and-host is a [tuple](https://infra.spec.whatwg.org/#tuple) of a scheme (an [ASCII string](https://infra.spec.whatwg.org/#ascii-string)) and a host (a [host](https://url.spec.whatwg.org/#concept-host)).

A site is an [opaque origin](https://html.spec.whatwg.org/multipage/origin.html#concept-origin-opaque) or a [scheme-and-host](https://html.spec.whatwg.org/multipage/origin.html#scheme-and-host).

To obtain a site, given an origin `origin`, run these steps:

1. If `origin` is an [opaque origin](https://html.spec.whatwg.org/multipage/origin.html#concept-origin-opaque), then return `origin`.
2. If `origin`'s [host](https://html.spec.whatwg.org/multipage/origin.html#concept-origin-host)'s [registrable domain](https://url.spec.whatwg.org/#host-registrable-domain) is null, then return (`origin`'s [scheme](https://html.spec.whatwg.org/multipage/origin.html#concept-origin-scheme), `origin`'s [host](https://html.spec.whatwg.org/multipage/origin.html#concept-origin-host)).
3. Return (`origin`'s [scheme](https://html.spec.whatwg.org/multipage/origin.html#concept-origin-scheme), `origin`'s [host](https://html.spec.whatwg.org/multipage/origin.html#concept-origin-host)'s [registrable domain](https://url.spec.whatwg.org/#host-registrable-domain)).

Two [sites](https://html.spec.whatwg.org/multipage/origin.html#site), `A` and `B`, are said to be same site if the following algorithm returns true:

1. If `A` and `B` are the same [opaque origin](https://html.spec.whatwg.org/multipage/origin.html#concept-origin-opaque), the return true.
2. If `A` or `B` is an [opaque origin](https://html.spec.whatwg.org/multipage/origin.html#concept-origin-opaque), then return false.
3. If `A`'s and `B`'s [scheme](https://html.spec.whatwg.org/multipage/origin.html#concept-scheme-and-host-scheme) values are different, then return false.
4. If `A`'s and `B`'s [host](https://html.spec.whatwg.org/multipage/origin.html#concept-scheme-and-host-host) values are not [equal](https://url.spec.whatwg.org/#concept-host-equals), then return false.
5. Return true.

The serialization of a site is the string obtained by applying the following algorithm to the given [site](https://html.spec.whatwg.org/multipage/origin.html#site) `site`:

1. If `site` is an [opaque origin](https://html.spec.whatwg.org/multipage/origin.html#concept-origin-opaque), then return "`null`".
2. Let `result` be `site`\[0].
3. Append "`://`" to `result`.
4. Append `site`\[1], [serialized](https://url.spec.whatwg.org/#concept-host-serializer), to `result`.
5. Return `result`.

It needs to be clear from context that the serialized value is a site, not an origin, as there is not necessarily a syntactic difference between the two. For example, the origin ("`https`", "`shop.example`", null, null) and the site ("`https`", "`shop.example`") have the same serialization: "`https://shop.example`".

Two [origins](https://html.spec.whatwg.org/multipage/origin.html#concept-origin), `A` and `B`, are said to be schemelessly same site if the following algorithm returns true:

1. If `A` and `B` are the same [opaque origin](https://html.spec.whatwg.org/multipage/origin.html#concept-origin-opaque), then return true.
2. If `A` and `B` are both [tuple origins](https://html.spec.whatwg.org/multipage/origin.html#concept-origin-tuple), then:

   1. Let `hostA` be `A`'s [host](https://html.spec.whatwg.org/multipage/origin.html#concept-origin-host), and let `hostB` be `B`'s [host](https://html.spec.whatwg.org/multipage/origin.html#concept-origin-host).
   2. If `hostA` [equals](https://url.spec.whatwg.org/#concept-host-equals) `hostB` and `hostA`'s [registrable domain](https://url.spec.whatwg.org/#host-registrable-domain) is null, then return true.
   3. If `hostA`'s [registrable domain](https://url.spec.whatwg.org/#host-registrable-domain) [equals](https://url.spec.whatwg.org/#concept-host-equals) `hostB`'s [registrable domain](https://url.spec.whatwg.org/#host-registrable-domain) and is non-null, then return true.
3. Return false.

Two [origins](https://html.spec.whatwg.org/multipage/origin.html#concept-origin), `A` and `B`, are said to be same site if the following algorithm returns true:

1. Let `siteA` be the result of [obtaining a site](https://html.spec.whatwg.org/multipage/origin.html#obtain-a-site) given `A`.
2. Let `siteB` be the result of [obtaining a site](https://html.spec.whatwg.org/multipage/origin.html#obtain-a-site) given `B`.
3. If `siteA` is [same site](https://html.spec.whatwg.org/multipage/origin.html#concept-site-same-site) with `siteB`, then return true.
4. Return false.

Unlike the [same origin](https://html.spec.whatwg.org/multipage/origin.html#same-origin) and [same origin-domain](https://html.spec.whatwg.org/multipage/origin.html#same-origin-domain) concepts, for [schemelessly same site](https://html.spec.whatwg.org/multipage/origin.html#schemelessly-same-site) and [same site](https://html.spec.whatwg.org/multipage/origin.html#same-site), the [port](https://html.spec.whatwg.org/multipage/origin.html#concept-origin-port) and [domain](https://html.spec.whatwg.org/multipage/origin.html#concept-origin-domain) components are ignored.

For the reasons [explained in URL](https://url.spec.whatwg.org/#warning-avoid-psl), the [same site](https://html.spec.whatwg.org/multipage/origin.html#same-site) and [schemelessly same site](https://html.spec.whatwg.org/multipage/origin.html#schemelessly-same-site) concepts should be avoided when possible, in favor of [same origin](https://html.spec.whatwg.org/multipage/origin.html#same-origin) checks.

Given that `wildlife.museum`, `museum`, and `com` are [public suffixes](https://url.spec.whatwg.org/#host-public-suffix) and that `example.com` is not:

| `A`                                | `B`                                          | [schemelessly same site](https://html.spec.whatwg.org/multipage/origin.html#schemelessly-same-site) | [same site](https://html.spec.whatwg.org/multipage/origin.html#same-site) |
| ---------------------------------- | -------------------------------------------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| ("`https`", "`example.com`")       | ("`https`", "`sub.example.com`")             | ✅                                                                                                   | ✅                                                                         |
| ("`https`", "`example.com`")       | ("`https`", "`sub.other.example.com`")       | ✅                                                                                                   | ✅                                                                         |
| ("`https`", "`example.com`")       | ("`http`", "`non-secure.example.com`")       | ✅                                                                                                   | ❌                                                                         |
| ("`https`", "`r.wildlife.museum`") | ("`https`", "`sub.r.wildlife.museum`")       | ✅                                                                                                   | ✅                                                                         |
| ("`https`", "`r.wildlife.museum`") | ("`https`", "`sub.other.r.wildlife.museum`") | ✅                                                                                                   | ✅                                                                         |
| ("`https`", "`r.wildlife.museum`") | ("`https`", "`other.wildlife.museum`")       | ❌                                                                                                   | ❌                                                                         |
| ("`https`", "`r.wildlife.museum`") | ("`https`", "`wildlife.museum`")             | ❌                                                                                                   | ❌                                                                         |
| ("`https`", "`wildlife.museum`")   | ("`https`", "`wildlife.museum`")             | ✅                                                                                                   | ✅                                                                         |
| ("`https`", "`example.com`")       | ("`https`", "`example.com.`")                | ❌                                                                                                   | ❌                                                                         |

(Here we have omitted the [port](https://html.spec.whatwg.org/multipage/origin.html#concept-origin-port) and [domain](https://html.spec.whatwg.org/multipage/origin.html#concept-origin-domain) components since they are not considered.)

#### 7.5.2 Relaxing the same-origin restriction[](https://html.spec.whatwg.org/multipage/origin.html#relaxing-the-same-origin-restriction)

* `document.domain [ = domain ]`

  Returns the current domain used for security checks.

  Can be set to a value that removes subdomains, to change the [origin](https://html.spec.whatwg.org/multipage/origin.html#concept-origin)'s [domain](https://html.spec.whatwg.org/multipage/origin.html#concept-origin-domain) to allow pages on other subdomains of the same domain (if they do the same thing) to access each other. This enables pages on different hosts of a domain to synchronously access each other's DOMs.

  In sandboxed `iframe`s, `Document`s with [opaque origins](https://html.spec.whatwg.org/multipage/origin.html#concept-origin-opaque), `Document`s without a [browsing context](https://html.spec.whatwg.org/multipage/browsers.html#concept-document-bc), and when the "`document-domain`" feature is disabled, the setter will throw a ["`SecurityError`"](https://webidl.spec.whatwg.org/#securityerror) exception. In cases where `crossOriginIsolated` or `originAgentCluster` return true, the setter will do nothing.

Avoid using the `document.domain` setter. It undermines the security protections provided by the same-origin policy. This is especially acute when using shared hosting; for example, if an untrusted third party is able to host an HTTP server at the same IP address but on a different port, then the same-origin protection that normally protects two different sites on the same host will fail, as the ports are ignored when comparing origins after the `document.domain` setter has been used.

Because of these security pitfalls, this feature is in the process of being removed from the web platform. (This is a long process that takes many years.)

Instead, use `postMessage()` or `MessageChannel` objects to communicate across origins in a safe manner.

The `domain` getter steps are:

1. Let `effectiveDomain` be [this](https://webidl.spec.whatwg.org/#this)'s [origin](https://dom.spec.whatwg.org/#concept-document-origin)'s [effective domain](https://html.spec.whatwg.org/multipage/origin.html#concept-origin-effective-domain).
2. If `effectiveDomain` is null, then return the empty string.
3. Return `effectiveDomain`, [serialized](https://url.spec.whatwg.org/#concept-host-serializer).

The `domain` setter steps are:

1. If [this](https://webidl.spec.whatwg.org/#this)'s [browsing context](https://html.spec.whatwg.org/multipage/browsers.html#concept-document-bc) is null, then throw a ["`SecurityError`"](https://webidl.spec.whatwg.org/#securityerror) `DOMException`.
2. If [this](https://webidl.spec.whatwg.org/#this)'s [active sandboxing flag set](https://html.spec.whatwg.org/multipage/origin.html#active-sandboxing-flag-set) has its [sandboxed `document.domain` browsing context flag](https://html.spec.whatwg.org/multipage/origin.html#sandboxed-document.domain-browsing-context-flag) set, then throw a ["`SecurityError`"](https://webidl.spec.whatwg.org/#securityerror) `DOMException`.
3. If [this](https://webidl.spec.whatwg.org/#this) is not [allowed to use](https://html.spec.whatwg.org/multipage/iframe-embed-object.html#allowed-to-use) the "`document-domain`" feature, then throw a ["`SecurityError`"](https://webidl.spec.whatwg.org/#securityerror) `DOMException`.
4. Let `effectiveDomain` be [this](https://webidl.spec.whatwg.org/#this)'s [origin](https://dom.spec.whatwg.org/#concept-document-origin)'s [effective domain](https://html.spec.whatwg.org/multipage/origin.html#concept-origin-effective-domain).
5. If `effectiveDomain` is null, then throw a ["`SecurityError`"](https://webidl.spec.whatwg.org/#securityerror) `DOMException`.
6. If the given value [is not a registrable domain suffix of and is not equal to](https://html.spec.whatwg.org/multipage/origin.html#is-a-registrable-domain-suffix-of-or-is-equal-to) `effectiveDomain`, then throw a ["`SecurityError`"](https://webidl.spec.whatwg.org/#securityerror) `DOMException`.
7. If the [surrounding agent](https://tc39.es/ecma262/#surrounding-agent)'s [agent cluster](https://tc39.es/ecma262/#sec-agent-clusters)'s [is origin-keyed](https://html.spec.whatwg.org/multipage/webappapis.html#is-origin-keyed) is true, then return.
8. Set `this`'s [origin](https://dom.spec.whatwg.org/#concept-document-origin)'s [domain](https://html.spec.whatwg.org/multipage/origin.html#concept-origin-domain) to the result of [parsing](https://url.spec.whatwg.org/#concept-host-parser) the given value.

To determine if a string `hostSuffixString` is a registrable domain suffix of or is equal to a [host](https://url.spec.whatwg.org/#concept-host) `originalHost`, run these steps:

1. If `hostSuffixString` is the empty string, then return false.
2. Let `hostSuffix` be the result of [parsing](https://url.spec.whatwg.org/#concept-host-parser) `hostSuffixString`.
3. If `hostSuffix` is failure, then return false.
4. If `hostSuffix` does not [equal](https://url.spec.whatwg.org/#concept-host-equals) `originalHost`, then:

   1. If `hostSuffix` or `originalHost` is not a [domain](https://url.spec.whatwg.org/#concept-domain), then return false.

      This excludes [hosts](https://url.spec.whatwg.org/#concept-host) that are [IP addresses](https://url.spec.whatwg.org/#ip-address).
   2. If `hostSuffix`, prefixed by U+002E (.), does not match the end of `originalHost`, then return false.
   3. If one of the following is true

      * `hostSuffix` [equals](https://url.spec.whatwg.org/#concept-host-equals) `hostSuffix`'s [public suffix](https://url.spec.whatwg.org/#host-public-suffix)
      * `hostSuffix`, prefixed by U+002E (.), matches the end `originalHost`'s [public suffix](https://url.spec.whatwg.org/#host-public-suffix)

      then return false. \[[URL]](https://html.spec.whatwg.org/multipage/references.html#refsURL)
   4. Assert: `originalHost`'s [public suffix](https://url.spec.whatwg.org/#host-public-suffix), prefixed by U+002E (.), matches the end of `hostSuffix`.
5. Return true.

| `hostSuffixString`                | `originalHost`                      | Outcome of [is a registrable domain suffix of or is equal to](https://html.spec.whatwg.org/multipage/origin.html#is-a-registrable-domain-suffix-of-or-is-equal-to) | Notes                                                                 |
| --------------------------------- | ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------- |
| "`0.0.0.0`"                       | `0.0.0.0`                           | ✅                                                                                                                                                                  |                                                                       |
| "`0x10203`"                       | `0.1.2.3`                           | ✅                                                                                                                                                                  |                                                                       |
| "`[0::1]`"                        | `::1`                               | ✅                                                                                                                                                                  |                                                                       |
| "`example.com`"                   | `example.com`                       | ✅                                                                                                                                                                  |                                                                       |
| "`example.com`"                   | `example.com.`                      | ❌                                                                                                                                                                  | Trailing dot is significant.                                          |
| "`example.com.`"                  | `example.com`                       | ❌                                                                                                                                                                  |                                                                       |
| "`example.com`"                   | `www.example.com`                   | ✅                                                                                                                                                                  |                                                                       |
| "`com`"                           | `example.com`                       | ❌                                                                                                                                                                  | At the time of writing, `com` is a public suffix.                     |
| "`example`"                       | `example`                           | ✅                                                                                                                                                                  |                                                                       |
| "`compute.amazonaws.com`"         | `example.compute.amazonaws.com`     | ❌                                                                                                                                                                  | At the time of writing, `*.compute.amazonaws.com` is a public suffix. |
| "`example.compute.amazonaws.com`" | `www.example.compute.amazonaws.com` | ❌                                                                                                                                                                  |                                                                       |
| "`amazonaws.com`"                 | `www.example.compute.amazonaws.com` | ❌                                                                                                                                                                  |                                                                       |
| "`amazonaws.com`"                 | `test.amazonaws.com`                | ✅                                                                                                                                                                  | At the time of writing, `amazonaws.com` is a registrable domain.      |

#### 7.5.3 Origin-keyed agent clusters[](https://html.spec.whatwg.org/multipage/origin.html#origin-keyed-agent-clusters)

* `window.originAgentCluster`

  Returns true if this `Window` belongs to an [agent cluster](https://tc39.es/ecma262/#sec-agent-clusters) which is [origin](https://html.spec.whatwg.org/multipage/origin.html#concept-origin)-[keyed](https://html.spec.whatwg.org/multipage/webappapis.html#agent-cluster-key), in the manner described in this section.

A `Document` delivered over a [secure context](https://html.spec.whatwg.org/multipage/webappapis.html#secure-context) can request that it be placed in an [origin](https://html.spec.whatwg.org/multipage/origin.html#concept-origin)-[keyed](https://html.spec.whatwg.org/multipage/webappapis.html#agent-cluster-key) [agent cluster](https://tc39.es/ecma262/#sec-agent-clusters), by using the `Origin-Agent-Cluster` HTTP response header. This header is a [structured header](https://httpwg.org/specs/rfc8941.html) whose value must be a [boolean](https://httpwg.org/specs/rfc8941.html#boolean). \[[STRUCTURED-FIELDS]](https://html.spec.whatwg.org/multipage/references.html#refsSTRUCTURED-FIELDS)

Per the processing model in the [create and initialize a new `Document` object](https://html.spec.whatwg.org/multipage/browsing-the-web.html#initialise-the-document-object), values that are not the [structured header boolean](https://httpwg.org/specs/rfc8941.html#boolean) true value (i.e., `?1`) will be ignored.

The consequences of using this header are that the resulting `Document`'s [agent cluster key](https://html.spec.whatwg.org/multipage/webappapis.html#agent-cluster-key) is its [origin](https://dom.spec.whatwg.org/#concept-document-origin), instead of the [corresponding site](https://html.spec.whatwg.org/multipage/origin.html#obtain-a-site). In terms of observable effects, this means that attempting to [relax the same-origin restriction](https://html.spec.whatwg.org/multipage/origin.html#relaxing-the-same-origin-restriction) using `document.domain` will instead do nothing, and it will not be possible to send `WebAssembly.Module` objects to cross-origin `Document`s (even if they are [same site](https://html.spec.whatwg.org/multipage/origin.html#same-site)). Behind the scenes, this isolation can allow user agents to allocate implementation-specific resources corresponding to [agent clusters](https://tc39.es/ecma262/#sec-agent-clusters), such as processes or threads, more efficiently.

Note that within a [browsing context group](https://html.spec.whatwg.org/multipage/browsers.html#browsing-context-group), the `Origin-Agent-Cluster` header can never cause same-origin `Document` objects to end up in different [agent clusters](https://tc39.es/ecma262/#sec-agent-clusters), even if one sends the header and the other doesn't. This is prevented by means of the [historical agent cluster key map](https://html.spec.whatwg.org/multipage/browsers.html#historical-agent-cluster-key-map).

This means that the `originAgentCluster` getter can return false, even if the header is set, if the header was omitted on a previously-loaded same-origin page in the same [browsing context group](https://html.spec.whatwg.org/multipage/browsers.html#browsing-context-group). Similarly, it can return true even when the header is not set.

The `originAgentCluster` getter steps are to return the [surrounding agent](https://tc39.es/ecma262/#surrounding-agent)'s [agent cluster](https://tc39.es/ecma262/#sec-agent-clusters)'s [is origin-keyed](https://html.spec.whatwg.org/multipage/webappapis.html#is-origin-keyed).

`Document`s with an [opaque origin](https://html.spec.whatwg.org/multipage/origin.html#concept-origin-opaque) can be considered unconditionally origin-keyed; for them the header has no effect, and the `originAgentCluster` getter will always return true.

Similarly, `Document`s whose [agent cluster](https://tc39.es/ecma262/#sec-agent-clusters)'s [cross-origin isolation mode](https://html.spec.whatwg.org/multipage/webappapis.html#agent-cluster-cross-origin-isolation) is not "`none`" are automatically origin-keyed. The ``Origin-Agent-Cluster`\` header might be useful as an additional hint to implementations about resource allocation, since the \``Cross-Origin-Opener-Policy`\` and \`\`Cross-Origin-Embedder-Policy headers used to achieve cross-origin isolation are more about ensuring that everything in the same address space opts in to being there. But adding it would have no additional observable effects on author code.

### 7.6 Sandboxing[](https://html.spec.whatwg.org/multipage/origin.html#sandboxing)

A sandboxing flag set is a set of zero or more of the following flags, which are used to restrict the abilities that potentially untrusted resources have:

* The sandboxed navigation browsing context flag

  This flag [prevents content from navigating browsing contexts other than the sandboxed browsing context itself](https://html.spec.whatwg.org/multipage/browsing-the-web.html#sandboxLinks) (or browsing contexts further nested inside it), [auxiliary browsing contexts](https://html.spec.whatwg.org/multipage/browsers.html#auxiliary-browsing-context) (which are protected by the [sandboxed auxiliary navigation browsing context flag](https://html.spec.whatwg.org/multipage/origin.html#sandboxed-auxiliary-navigation-browsing-context-flag) defined next), and the [top-level browsing context](https://html.spec.whatwg.org/multipage/browsers.html#top-level-browsing-context) (which is protected by the [sandboxed top-level navigation without user activation browsing context flag](https://html.spec.whatwg.org/multipage/origin.html#sandboxed-top-level-navigation-without-user-activation-browsing-context-flag) and [sandboxed top-level navigation with user activation browsing context flag](https://html.spec.whatwg.org/multipage/origin.html#sandboxed-top-level-navigation-with-user-activation-browsing-context-flag) defined below).

  If the [sandboxed auxiliary navigation browsing context flag](https://html.spec.whatwg.org/multipage/origin.html#sandboxed-auxiliary-navigation-browsing-context-flag) is not set, then in certain cases the restrictions nonetheless allow popups (new [top-level browsing contexts](https://html.spec.whatwg.org/multipage/browsers.html#top-level-browsing-context)) to be opened. These [browsing contexts](https://html.spec.whatwg.org/multipage/browsers.html#browsing-context) always have one permitted sandboxed navigator, set when the browsing context is created, which allows the [browsing context](https://html.spec.whatwg.org/multipage/browsers.html#browsing-context) that created them to actually navigate them. (Otherwise, the [sandboxed navigation browsing context flag](https://html.spec.whatwg.org/multipage/origin.html#sandboxed-navigation-browsing-context-flag) would prevent them from being navigated even if they were opened.)
* The sandboxed auxiliary navigation browsing context flag

  This flag [prevents content from creating new auxiliary browsing contexts](https://html.spec.whatwg.org/multipage/browsers.html#sandboxWindowOpen), e.g. using the `target` attribute or the `window.open()` method.
* The sandboxed top-level navigation without user activation browsing context flag

  This flag [prevents content from navigating their top-level browsing context](https://html.spec.whatwg.org/multipage/browsing-the-web.html#sandboxLinks) and [prevents content from closing their top-level browsing context](https://html.spec.whatwg.org/multipage/window-object.html#sandboxClose). It is consulted only when the sandboxed browsing context's [active window](https://html.spec.whatwg.org/multipage/browsers.html#active-window) does not have [transient activation](https://html.spec.whatwg.org/multipage/interaction.html#transient-activation).

  When the [sandboxed top-level navigation without user activation browsing context flag](https://html.spec.whatwg.org/multipage/origin.html#sandboxed-top-level-navigation-without-user-activation-browsing-context-flag) is *not* set, content can navigate its [top-level browsing context](https://html.spec.whatwg.org/multipage/browsers.html#top-level-browsing-context), but other [browsing contexts](https://html.spec.whatwg.org/multipage/browsers.html#browsing-context) are still protected by the [sandboxed navigation browsing context flag](https://html.spec.whatwg.org/multipage/origin.html#sandboxed-navigation-browsing-context-flag) and possibly the [sandboxed auxiliary navigation browsing context flag](https://html.spec.whatwg.org/multipage/origin.html#sandboxed-auxiliary-navigation-browsing-context-flag).
* The sandboxed top-level navigation with user activation browsing context flag

  This flag [prevents content from navigating their top-level browsing context](https://html.spec.whatwg.org/multipage/browsing-the-web.html#sandboxLinks) and [prevents content from closing their top-level browsing context](https://html.spec.whatwg.org/multipage/window-object.html#sandboxClose). It is consulted only when the sandboxed browsing context's [active window](https://html.spec.whatwg.org/multipage/browsers.html#active-window) has [transient activation](https://html.spec.whatwg.org/multipage/interaction.html#transient-activation).

  As with the [sandboxed top-level navigation without user activation browsing context flag](https://html.spec.whatwg.org/multipage/origin.html#sandboxed-top-level-navigation-without-user-activation-browsing-context-flag), this flag only affects the [top-level browsing context](https://html.spec.whatwg.org/multipage/browsers.html#top-level-browsing-context); if it is not set, other [browsing contexts](https://html.spec.whatwg.org/multipage/browsers.html#browsing-context) might still be protected by other flags.
* The sandboxed plugins browsing context flag

  This flag prevents content from instantiating [plugins](https://html.spec.whatwg.org/multipage/infrastructure.html#plugin), whether using [the `embed` element](https://html.spec.whatwg.org/multipage/iframe-embed-object.html#sandboxPluginEmbed), [the `object` element](https://html.spec.whatwg.org/multipage/iframe-embed-object.html#sandboxPluginObject), or through [navigation](https://html.spec.whatwg.org/multipage/browsing-the-web.html#sandboxPluginNavigate) of their [nested browsing context](https://html.spec.whatwg.org/multipage/browsers.html#nested-browsing-context).
* The sandboxed origin browsing context flag

  This flag [forces content into a unique origin](https://html.spec.whatwg.org/multipage/browsers.html#sandboxOrigin), thus preventing it from accessing other content from the same [origin](https://html.spec.whatwg.org/multipage/origin.html#concept-origin).

  This flag also [prevents script from reading from or writing to the `document.cookie` IDL attribute](https://html.spec.whatwg.org/multipage/dom.html#sandboxCookies), and blocks access to `localStorage`.
* The sandboxed forms browsing context flag

  This flag [blocks form submission](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#sandboxSubmitBlocked).
* The sandboxed pointer lock browsing context flag

  This flag disables the Pointer Lock API. \[[POINTERLOCK]](https://html.spec.whatwg.org/multipage/references.html#refsPOINTERLOCK)
* The sandboxed scripts browsing context flag

  This flag [blocks script execution](https://html.spec.whatwg.org/multipage/webappapis.html#sandboxScriptBlocked).
* The sandboxed automatic features browsing context flag

  This flag blocks features that trigger automatically, such as [automatically playing a video](https://html.spec.whatwg.org/multipage/media.html#attr-media-autoplay) or [automatically focusing a form control](https://html.spec.whatwg.org/multipage/interaction.html#attr-fe-autofocus).
* The sandboxed `document.domain` browsing context flag

  This flag prevents content from using the `document.domain` setter.
* The sandbox propagates to auxiliary browsing contexts flag

  This flag prevents content from escaping the sandbox by ensuring that any [auxiliary browsing context](https://html.spec.whatwg.org/multipage/browsers.html#auxiliary-browsing-context) it creates inherits the content's [active sandboxing flag set](https://html.spec.whatwg.org/multipage/origin.html#active-sandboxing-flag-set).
* The sandboxed modals flag

  This flag prevents content from using any of the following features to produce modal dialogs:

  * `window.alert()`
  * `window.confirm()`
  * `window.print()`
  * `window.prompt()`
  * the `beforeunload` event
* The sandboxed orientation lock browsing context flag

  This flag disables the ability to lock the screen orientation. \[[SCREENORIENTATION]](https://html.spec.whatwg.org/multipage/references.html#refsSCREENORIENTATION)
* The sandboxed presentation browsing context flag

  This flag disables the Presentation API. \[[PRESENTATION]](https://html.spec.whatwg.org/multipage/references.html#refsPRESENTATION)
* The sandboxed downloads browsing context flag

  This flag prevents content from initiating or instantiating downloads, whether through [downloading hyperlinks](https://html.spec.whatwg.org/multipage/links.html#downloading-hyperlinks) or through [navigation](https://html.spec.whatwg.org/multipage/browsing-the-web.html#process-a-navigate-response) that gets handled [as a download](https://html.spec.whatwg.org/multipage/links.html#as-a-download).
* The sandboxed custom protocols navigation browsing context flag

  This flag prevents navigations toward non [fetch schemes](https://fetch.spec.whatwg.org/#fetch-scheme) from being [handed off to external software](https://html.spec.whatwg.org/multipage/browsing-the-web.html#hand-off-to-external-software).

When the user agent is to parse a sandboxing directive, given a string `input`, a [sandboxing flag set](https://html.spec.whatwg.org/multipage/origin.html#sandboxing-flag-set) `output`, it must run the following steps:

1. [Split `input` on ASCII whitespace](https://infra.spec.whatwg.org/#split-on-ascii-whitespace), to obtain `tokens`.
2. Let `output` be empty.
3. Add the following flags to `output`:

   * The [sandboxed navigation browsing context flag](https://html.spec.whatwg.org/multipage/origin.html#sandboxed-navigation-browsing-context-flag).
   * The [sandboxed auxiliary navigation browsing context flag](https://html.spec.whatwg.org/multipage/origin.html#sandboxed-auxiliary-navigation-browsing-context-flag), unless `tokens` contains the `allow-popups` keyword.
   * The [sandboxed top-level navigation without user activation browsing context flag](https://html.spec.whatwg.org/multipage/origin.html#sandboxed-top-level-navigation-without-user-activation-browsing-context-flag), unless `tokens` contains the `allow-top-navigation` keyword.
   * The [sandboxed top-level navigation with user activation browsing context flag](https://html.spec.whatwg.org/multipage/origin.html#sandboxed-top-level-navigation-with-user-activation-browsing-context-flag), unless `tokens` contains either the `allow-top-navigation-by-user-activation` keyword or the `allow-top-navigation` keyword.

     This means that if the `allow-top-navigation` is present, the `allow-top-navigation-by-user-activation` keyword will have no effect. For this reason, specifying both is a document conformance error.
   * The [sandboxed plugins browsing context flag](https://html.spec.whatwg.org/multipage/origin.html#sandboxed-plugins-browsing-context-flag).
   * The [sandboxed origin browsing context flag](https://html.spec.whatwg.org/multipage/origin.html#sandboxed-origin-browsing-context-flag), unless the `tokens` contains the `allow-same-origin` keyword.

     The `allow-same-origin` keyword is intended for two cases.

     First, it can be used to allow content from the same site to be sandboxed to disable scripting, while still allowing access to the DOM of the sandboxed content.

     Second, it can be used to embed content from a third-party site, sandboxed to prevent that site from opening popups, etc, without preventing the embedded page from communicating back to its originating site, using the database APIs to store data, etc.
   * The [sandboxed forms browsing context flag](https://html.spec.whatwg.org/multipage/origin.html#sandboxed-forms-browsing-context-flag), unless `tokens` contains the `allow-forms` keyword.
   * The [sandboxed pointer lock browsing context flag](https://html.spec.whatwg.org/multipage/origin.html#sandboxed-pointer-lock-browsing-context-flag), unless `tokens` contains the `allow-pointer-lock` keyword.
   * The [sandboxed scripts browsing context flag](https://html.spec.whatwg.org/multipage/origin.html#sandboxed-scripts-browsing-context-flag), unless `tokens` contains the `allow-scripts` keyword.
   * The [sandboxed automatic features browsing context flag](https://html.spec.whatwg.org/multipage/origin.html#sandboxed-automatic-features-browsing-context-flag), unless `tokens` contains the `allow-scripts` keyword (defined above).

     This flag is relaxed by the same keyword as scripts, because when scripts are enabled these features are trivially possible anyway, and it would be unfortunate to force authors to use script to do them when sandboxed rather than allowing them to use the declarative features.
   * The [sandboxed `document.domain` browsing context flag](https://html.spec.whatwg.org/multipage/origin.html#sandboxed-document.domain-browsing-context-flag).
   * The [sandbox propagates to auxiliary browsing contexts flag](https://html.spec.whatwg.org/multipage/origin.html#sandbox-propagates-to-auxiliary-browsing-contexts-flag), unless `tokens` contains the `allow-popups-to-escape-sandbox` keyword.
   * The [sandboxed modals flag](https://html.spec.whatwg.org/multipage/origin.html#sandboxed-modals-flag), unless `tokens` contains the `allow-modals` keyword.
   * The [sandboxed orientation lock browsing context flag](https://html.spec.whatwg.org/multipage/origin.html#sandboxed-orientation-lock-browsing-context-flag), unless `tokens` contains the `allow-orientation-lock` keyword.
   * The [sandboxed presentation browsing context flag](https://html.spec.whatwg.org/multipage/origin.html#sandboxed-presentation-browsing-context-flag), unless `tokens` contains the `allow-presentation` keyword.
   * The [sandboxed downloads browsing context flag](https://html.spec.whatwg.org/multipage/origin.html#sandboxed-downloads-browsing-context-flag), unless `tokens` contains the `allow-downloads` keyword.
   * The [sandboxed custom protocols navigation browsing context flag](https://html.spec.whatwg.org/multipage/origin.html#sandboxed-custom-protocols-navigation-browsing-context-flag), unless `tokens` contains either the `allow-top-navigation-to-custom-protocols` keyword, the `allow-popups` keyword, or the `allow-top-navigation` keyword.

- - -

Every [top-level browsing context](https://html.spec.whatwg.org/multipage/browsers.html#top-level-browsing-context) has a popup sandboxing flag set, which is a [sandboxing flag set](https://html.spec.whatwg.org/multipage/origin.html#sandboxing-flag-set). When a [browsing context](https://html.spec.whatwg.org/multipage/browsers.html#browsing-context) is created, its [popup sandboxing flag set](https://html.spec.whatwg.org/multipage/origin.html#popup-sandboxing-flag-set) must be empty. It is populated by [the rules for choosing a browsing context](https://html.spec.whatwg.org/multipage/browsers.html#the-rules-for-choosing-a-browsing-context-given-a-browsing-context-name) and the [obtain a browsing context to use for a navigation response](https://html.spec.whatwg.org/multipage/origin.html#obtain-browsing-context-navigation) algorithm.

Every `iframe` element has an `iframe` sandboxing flag set, which is a [sandboxing flag set](https://html.spec.whatwg.org/multipage/origin.html#sandboxing-flag-set). Which flags in an [`iframe` sandboxing flag set](https://html.spec.whatwg.org/multipage/origin.html#iframe-sandboxing-flag-set) are set at any particular time is determined by the `iframe` element's `sandbox` attribute.

Every `Document` has an active sandboxing flag set, which is a [sandboxing flag set](https://html.spec.whatwg.org/multipage/origin.html#sandboxing-flag-set). When the `Document` is created, its [active sandboxing flag set](https://html.spec.whatwg.org/multipage/origin.html#active-sandboxing-flag-set) must be empty. It is populated by the [navigation algorithm](https://html.spec.whatwg.org/multipage/browsing-the-web.html#navigate).

Every resource that is obtained by the [navigation algorithm](https://html.spec.whatwg.org/multipage/browsing-the-web.html#navigate) has a forced sandboxing flag set, which is a [sandboxing flag set](https://html.spec.whatwg.org/multipage/origin.html#sandboxing-flag-set). A resource by default has no flags set in its [forced sandboxing flag set](https://html.spec.whatwg.org/multipage/origin.html#forced-sandboxing-flag-set), but other specifications can define that certain flags are set.

In particular, the [forced sandboxing flag set](https://html.spec.whatwg.org/multipage/origin.html#forced-sandboxing-flag-set) is used by Content Security Policy. \[[CSP]](https://html.spec.whatwg.org/multipage/references.html#refsCSP)

- - -

To determine the creation sandboxing flags for a [browsing context](https://html.spec.whatwg.org/multipage/browsers.html#concept-document-bc) `browsing context`, given null or an element `embedder`, return the [union](https://infra.spec.whatwg.org/#set-union) of the flags that are present in the following [sandboxing flag sets](https://html.spec.whatwg.org/multipage/origin.html#sandboxing-flag-set):

* If `embedder` is null, then: the flags set on `browsing context`'s [popup sandboxing flag set](https://html.spec.whatwg.org/multipage/origin.html#popup-sandboxing-flag-set).
* If `embedder` is an element, then: the flags set on `embedder`'s [`iframe` sandboxing flag set](https://html.spec.whatwg.org/multipage/origin.html#iframe-sandboxing-flag-set).
* If `embedder` is an element, then: the flags set on `embedder`'s [node document](https://dom.spec.whatwg.org/#concept-node-document)'s [active sandboxing flag set](https://html.spec.whatwg.org/multipage/origin.html#active-sandboxing-flag-set).

After creation, the sandboxing flags for a [browsing context](https://html.spec.whatwg.org/multipage/browsers.html#concept-document-bc) `browsing context` are the result of [determining the creation sandboxing flags](https://html.spec.whatwg.org/multipage/origin.html#determining-the-creation-sandboxing-flags) given `browsing context` and `browsing context`'s [container](https://html.spec.whatwg.org/multipage/browsers.html#bc-container).

### 7.7 Cross-origin opener policies[](https://html.spec.whatwg.org/multipage/origin.html#cross-origin-opener-policies)

A cross-origin opener policy value allows a document which is navigated to in a [top-level browsing context](https://html.spec.whatwg.org/multipage/browsers.html#top-level-browsing-context) to force the creation of a new [top-level browsing context](https://html.spec.whatwg.org/multipage/browsers.html#top-level-browsing-context), and a corresponding [group](https://html.spec.whatwg.org/multipage/browsers.html#tlbc-group). The possible values are:

* "`unsafe-none`"

  This is the (current) default and means that the document will occupy the same [top-level browsing context](https://html.spec.whatwg.org/multipage/browsers.html#top-level-browsing-context) as its predecessor, unless that document specified a different [cross-origin opener policy](https://html.spec.whatwg.org/multipage/origin.html#cross-origin-opener-policy).
* "`same-origin-allow-popups`"

  This forces the creation of a new [top-level browsing context](https://html.spec.whatwg.org/multipage/browsers.html#top-level-browsing-context) for the document, unless its predecessor specified the same [cross-origin opener policy](https://html.spec.whatwg.org/multipage/origin.html#cross-origin-opener-policy) and they are [same origin](https://html.spec.whatwg.org/multipage/origin.html#same-origin).
* "`same-origin`"

  This behaves the same as "`same-origin-allow-popups`", with the addition that any [auxiliary browsing context](https://html.spec.whatwg.org/multipage/browsers.html#auxiliary-browsing-context) created needs to contain [same origin](https://html.spec.whatwg.org/multipage/origin.html#same-origin) documents that also have the same [cross-origin opener policy](https://html.spec.whatwg.org/multipage/origin.html#cross-origin-opener-policy) or it will appear closed to the opener.
* "`same-origin-plus-COEP`"

  This behaves the same as "`same-origin`", with the addition that it sets the (new) [top-level browsing context](https://html.spec.whatwg.org/multipage/browsers.html#top-level-browsing-context)'s [group](https://html.spec.whatwg.org/multipage/browsers.html#tlbc-group)'s [cross-origin isolation mode](https://html.spec.whatwg.org/multipage/browsers.html#bcg-cross-origin-isolation) to one of "`logical`" or "`concrete`".

  "`same-origin-plus-COEP`" cannot be directly set via the ``Cross-Origin-Opener-Policy`\` header, but results from a combination of setting both \``Cross-Origin-Opener-Policy: same-origin`\` and a \`\`Cross-Origin-Embedder-Policy header whose value is [compatible with cross-origin isolation](https://html.spec.whatwg.org/multipage/origin.html#compatible-with-cross-origin-isolation) together.

A cross-origin opener policy consists of:

* A value, which is a [cross-origin opener policy value](https://html.spec.whatwg.org/multipage/origin.html#cross-origin-opener-policy-value), initially "`unsafe-none`".
* A reporting endpoint, which is string or null, initially null.
* A report-only value, which is a [cross-origin opener policy value](https://html.spec.whatwg.org/multipage/origin.html#cross-origin-opener-policy-value), initially "`unsafe-none`".
* A report-only reporting endpoint, which is a string or null, initially null.

To match cross-origin opener policy values, given a [cross-origin opener policy value](https://html.spec.whatwg.org/multipage/origin.html#cross-origin-opener-policy-value) `A`, an [origin](https://html.spec.whatwg.org/multipage/origin.html#concept-origin) `originA`, a [cross-origin opener policy value](https://html.spec.whatwg.org/multipage/origin.html#cross-origin-opener-policy-value) `B`, and an [origin](https://html.spec.whatwg.org/multipage/origin.html#concept-origin) `originB`:

1. If `A` is "`unsafe-none`" and `B` is "`unsafe-none`", then return true.
2. If `A` is "`unsafe-none`" or `B` is "`unsafe-none`", then return false.
3. If `A` is `B` and `originA` is [same origin](https://html.spec.whatwg.org/multipage/origin.html#same-origin) with `originB`, then return true.
4. Return false.

#### 7.7.1 The headers[](https://html.spec.whatwg.org/multipage/origin.html#the-coop-headers)

**✔**MDN

A `Document`'s [cross-origin opener policy](https://html.spec.whatwg.org/multipage/dom.html#concept-document-coop) is derived from the ``Cross-Origin-Opener-Policy`\` and \``Cross-Origin-Opener-Policy-Report-Only HTTP response headers. These headers are [structured headers](https://httpwg.org/specs/rfc8941.html) whose value must be a [token](https://httpwg.org/specs/rfc8941.html#token). \[[STRUCTURED-FIELDS]](https://html.spec.whatwg.org/multipage/references.html#refsSTRUCTURED-FIELDS)

The valid [token](https://httpwg.org/specs/rfc8941.html#token) values are the [opener policy values](https://html.spec.whatwg.org/multipage/origin.html#cross-origin-opener-policy-value). The token may also have attached [parameters](https://httpwg.org/specs/rfc8941.html#param); of these, the "`report-to`" parameter can have a [valid URL string](https://url.spec.whatwg.org/#valid-url-string) identifying an appropriate reporting endpoint. \[[REPORTING]](https://html.spec.whatwg.org/multipage/references.html#refsREPORTING)

Per the processing model described below, user agents will ignore this header if it contains an invalid value. Likewise, user agents will ignore this header if the value cannot be parsed as a [token](https://httpwg.org/specs/rfc8941.html#token).

- - -

To obtain a cross-origin opener policy given a [response](https://fetch.spec.whatwg.org/#concept-response) `response` and an [environment](https://html.spec.whatwg.org/multipage/webappapis.html#environment) `reservedEnvironment`:

1. Let `policy` be a new [cross-origin opener policy](https://html.spec.whatwg.org/multipage/origin.html#cross-origin-opener-policy).
2. If `reservedEnvironment` is a [non-secure context](https://html.spec.whatwg.org/multipage/webappapis.html#non-secure-context), then return `policy`.
3. Let `value` be the result of [getting a structured field value](https://fetch.spec.whatwg.org/#concept-header-list-get-structured-header) given `Cross-Origin-Opener-Policy` and "`item`" from `response`'s [header list](https://fetch.spec.whatwg.org/#concept-response-header-list).
4. If `parsedItem` is not null, then:

   1. If `parsedItem`\[0] is "`same-origin`", then:

      1. Let `coep` be the result of [obtaining a cross-origin embedder policy](https://html.spec.whatwg.org/multipage/origin.html#obtain-an-embedder-policy) from `response` and `reservedEnvironment`.
      2. If `coep`'s [value](https://html.spec.whatwg.org/multipage/origin.html#embedder-policy-value-2) is [compatible with cross-origin isolation](https://html.spec.whatwg.org/multipage/origin.html#compatible-with-cross-origin-isolation), then set `policy`'s [value](https://html.spec.whatwg.org/multipage/origin.html#coop-struct-value) to "`same-origin-plus-COEP`".
      3. Otherwise, set `policy`'s [value](https://html.spec.whatwg.org/multipage/origin.html#coop-struct-value) to "`same-origin`".
   2. If `parsedItem`\[0] is "`same-origin-allow-popups`", then set `policy`'s [value](https://html.spec.whatwg.org/multipage/origin.html#coop-struct-value) to "`same-origin-allow-popups`".
   3. If `parsedItem`\[1]["`report-to`"] [exists](https://infra.spec.whatwg.org/#map-exists) and it is a string, then set `policy`'s [reporting endpoint](https://html.spec.whatwg.org/multipage/origin.html#coop-struct-report-endpoint) to `parsedItem`\[1]["`report-to`"].
5. Set `parsedItem` to the result of [getting a structured field value](https://fetch.spec.whatwg.org/#concept-header-list-get-structured-header) given `Cross-Origin-Opener-Policy-Report-Only` and "`item`" from `response`'s [header list](https://fetch.spec.whatwg.org/#concept-response-header-list).
6. If `parsedItem` is not null, then:

   1. If `parsedItem`\[0] is "`same-origin`", then:

      1. Let `coep` be the result of [obtaining a cross-origin embedder policy](https://html.spec.whatwg.org/multipage/origin.html#obtain-an-embedder-policy) from `response` and `reservedEnvironment`.
      2. If `coep`'s [value](https://html.spec.whatwg.org/multipage/origin.html#embedder-policy-value-2) is [compatible with cross-origin isolation](https://html.spec.whatwg.org/multipage/origin.html#compatible-with-cross-origin-isolation) or `coep`'s [report-only value](https://html.spec.whatwg.org/multipage/origin.html#embedder-policy-report-only-value) is [compatible with cross-origin isolation](https://html.spec.whatwg.org/multipage/origin.html#compatible-with-cross-origin-isolation), then set `policy`'s [report-only value](https://html.spec.whatwg.org/multipage/origin.html#coop-struct-report-only-value) to "`same-origin-plus-COEP`".

         Report only COOP also considers report-only COEP to assign the special "`same-origin-plus-COEP`" value. This allows developers more freedom in the order of deployment of COOP and COEP.
      3. Otherwise, set `policy`'s [report-only value](https://html.spec.whatwg.org/multipage/origin.html#coop-struct-report-only-value) to "`same-origin`".
   2. If `parsedItem`\[0] is "`same-origin-allow-popups`", then set `policy`'s [report-only value](https://html.spec.whatwg.org/multipage/origin.html#coop-struct-report-only-value) to "`same-origin-allow-popups`".
   3. If `parsedItem`\[1]["`report-to`"] [exists](https://infra.spec.whatwg.org/#map-exists) and it is a string, then set `policy`'s [report-only reporting endpoint](https://html.spec.whatwg.org/multipage/origin.html#coop-struct-report-only-endpoint) to `parsedItem`\[1]["`report-to`"].
7. Return `policy`.

#### 7.7.2 Browsing context group switches due to cross-origin opener policy[](https://html.spec.whatwg.org/multipage/origin.html#browsing-context-group-switches-due-to-cross-origin-opener-policy)

To check if COOP values require a browsing context group switch, given a boolean `isInitialAboutBlank`, two [origins](https://html.spec.whatwg.org/multipage/origin.html#concept-origin) `responseOrigin` and `activeDocumentNavigationOrigin`, and two [cross-origin opener policy values](https://html.spec.whatwg.org/multipage/origin.html#coop-struct-value) `responseCOOPValue` and `activeDocumentCOOPValue`:

1. If the result of [matching](https://html.spec.whatwg.org/multipage/origin.html#matching-coop) `activeDocumentCOOPValue`, `activeDocumentNavigationOrigin`, `responseCOOPValue`, and `responseOrigin` is true, return false.
2. If all of the following are true:

   * `isInitialAboutBlank`,
   * `activeDocumentCOOPValue`'s [value](https://html.spec.whatwg.org/multipage/origin.html#coop-struct-value) is "`same-origin-allow-popups`".
   * `responseCOOPValue` is "`unsafe-none`",

   then return false.
3. Return true.

To check if enforcing report-only COOP would require a browsing context group switch, given a boolean `isInitialAboutBlank`, two [origins](https://html.spec.whatwg.org/multipage/origin.html#concept-origin) `responseOrigin`, `activeDocumentNavigationOrigin`, and two [cross-origin opener policies](https://html.spec.whatwg.org/multipage/origin.html#cross-origin-opener-policy) `responseCOOP` and `activeDocumentCOOP`:

1. If the result of [checking if COOP values require a browsing context group switch](https://html.spec.whatwg.org/multipage/origin.html#check-browsing-context-group-switch-coop-value) given `isInitialAboutBlank`, `responseOrigin`, `activeDocumentNavigationOrigin`, `responseCOOP`'s [report-only value](https://html.spec.whatwg.org/multipage/origin.html#coop-struct-report-only-value) and `activeDocumentCOOPReportOnly`'s [report-only value](https://html.spec.whatwg.org/multipage/origin.html#coop-struct-report-only-value) is false, then return false.

   Matching report-only policies allows a website to specify the same report-only cross-origin opener policy on all its pages and not receive violation reports for navigations between these pages.
2. If the result of [checking if COOP values require a browsing context group switch](https://html.spec.whatwg.org/multipage/origin.html#check-browsing-context-group-switch-coop-value) given `isInitialAboutBlank`, `responseOrigin`, `activeDocumentNavigationOrigin`, `responseCOOP`'s [value](https://html.spec.whatwg.org/multipage/origin.html#coop-struct-value) and `activeDocumentCOOPReportOnly`'s [report-only value](https://html.spec.whatwg.org/multipage/origin.html#coop-struct-report-only-value) is true, then return true.
3. If the result of [checking if COOP values require a browsing context group switch](https://html.spec.whatwg.org/multipage/origin.html#check-browsing-context-group-switch-coop-value) given `isInitialAboutBlank`, `responseOrigin`, `activeDocumentNavigationOrigin`, `responseCOOP`'s [report-only value](https://html.spec.whatwg.org/multipage/origin.html#coop-struct-report-only-value) and `activeDocumentCOOPReportOnly`'s [value](https://html.spec.whatwg.org/multipage/origin.html#coop-struct-value) is true, then return true.
4. Return false.

A cross-origin opener policy enforcement result is a [struct](https://infra.spec.whatwg.org/#struct) with the following [items](https://infra.spec.whatwg.org/#struct-item):

* A boolean needs a browsing context group switch, initially false.
* A boolean would need a browsing context group switch due to report-only, initially false.
* A [URL](https://url.spec.whatwg.org/#concept-url) url.
* An [origin](https://html.spec.whatwg.org/multipage/origin.html#concept-origin) origin.
* A [cross-origin opener policy](https://html.spec.whatwg.org/multipage/origin.html#cross-origin-opener-policy) cross-origin opener policy.
* A boolean current context is navigation source.

To enforce a response's cross-origin opener policy, given a [browsing context](https://html.spec.whatwg.org/multipage/browsers.html#browsing-context) `browsingContext`, a [URL](https://url.spec.whatwg.org/#concept-url) `responseURL`, an [origin](https://html.spec.whatwg.org/multipage/origin.html#concept-origin) `responseOrigin`, a [cross-origin opener policy](https://html.spec.whatwg.org/multipage/origin.html#cross-origin-opener-policy) `responseCOOP`, a [cross-origin opener policy enforcement result](https://html.spec.whatwg.org/multipage/origin.html#coop-enforcement-result) `currentCOOPEnforcementResult`, and a [referrer](https://fetch.spec.whatwg.org/#concept-request-referrer) `referrer`:

1. Let `newCOOPEnforcementResult` be a new [cross-origin opener policy enforcement result](https://html.spec.whatwg.org/multipage/origin.html#coop-enforcement-result) whose [needs a browsing context group switch](https://html.spec.whatwg.org/multipage/origin.html#coop-enforcement-bcg-switch) is `currentCOOPEnforcementResult`'s [needs a browsing context group switch](https://html.spec.whatwg.org/multipage/origin.html#coop-enforcement-bcg-switch), [would need a browsing context group switch due to report-only](https://html.spec.whatwg.org/multipage/origin.html#coop-enforcement-bcg-switch-report-only) is `currentCOOPEnforcementResult`'s [would need a browsing context group switch due to report-only](https://html.spec.whatwg.org/multipage/origin.html#coop-enforcement-bcg-switch-report-only), [url](https://html.spec.whatwg.org/multipage/origin.html#coop-enforcement-url) is `responseURL`, [origin](https://html.spec.whatwg.org/multipage/origin.html#coop-enforcement-origin) is `responseOrigin`, [coop](https://html.spec.whatwg.org/multipage/origin.html#coop-enforcement-coop) is `responseCOOP`, and [current context is navigation source](https://html.spec.whatwg.org/multipage/origin.html#coop-enforcement-source) is true.
2. Let `isInitialAboutBlank` be true if `browsingContext` is [still on its initial `about:blank` `Document`](https://html.spec.whatwg.org/multipage/dom.html#still-on-its-initial-about:blank-document); otherwise, false.
3. If `isInitialAboutBlank` is true and `browsingContext`'s [initial URL](https://html.spec.whatwg.org/multipage/browsers.html#browsing-context-initial-url) is null, set `browsingContext`'s [initial URL](https://html.spec.whatwg.org/multipage/browsers.html#browsing-context-initial-url) to `responseURL`.
4. If the result of [checking if COOP values require a browsing context group switch](https://html.spec.whatwg.org/multipage/origin.html#check-browsing-context-group-switch-coop-value) given `isInitialAboutBlank`, `currentCOOPEnforcementResult`'s [cross-origin opener policy](https://html.spec.whatwg.org/multipage/origin.html#coop-enforcement-coop)'s [value](https://html.spec.whatwg.org/multipage/origin.html#coop-struct-value), `currentCOOPEnforcementResult`'s [origin](https://html.spec.whatwg.org/multipage/origin.html#coop-enforcement-origin), `responseCOOP`'s [value](https://html.spec.whatwg.org/multipage/origin.html#coop-struct-value), and `responseOrigin` is true, then:

   1. Set `newCOOPEnforcementResult`'s [needs a browsing context group switch](https://html.spec.whatwg.org/multipage/origin.html#coop-enforcement-bcg-switch) to true.
   2. If `browsingContext`'s [group](https://html.spec.whatwg.org/multipage/browsers.html#tlbc-group)'s [browsing context set](https://html.spec.whatwg.org/multipage/browsers.html#browsing-context-set)'s [size](https://infra.spec.whatwg.org/#list-size) is greater than 1, then:

      1. [Queue a violation report for browsing context group switch when navigating to a COOP response](https://html.spec.whatwg.org/multipage/origin.html#coop-violation-navigation-to) with `responseCOOP`, "`enforce`", `responseURL`, `currentCOOPEnforcementResult`'s [url](https://html.spec.whatwg.org/multipage/origin.html#coop-enforcement-url), `currentCOOPEnforcementResult`'s [origin](https://html.spec.whatwg.org/multipage/origin.html#coop-enforcement-origin), `responseOrigin`, and `referrer`.
      2. [Queue a violation report for browsing context group switch when navigating away from a COOP response](https://html.spec.whatwg.org/multipage/origin.html#coop-violation-navigation-from) with `currentCOOPEnforcementResult`'s [cross-origin opener policy](https://html.spec.whatwg.org/multipage/origin.html#coop-enforcement-coop), "`enforce`", `currentCOOPEnforcementResult`'s [url](https://html.spec.whatwg.org/multipage/origin.html#coop-enforcement-url), `responseURL`, `currentCOOPEnforcementResult`'s [origin](https://html.spec.whatwg.org/multipage/origin.html#coop-enforcement-origin), `responseOrigin`, and `currentCOOPEnforcementResult`'s [current context is navigation source](https://html.spec.whatwg.org/multipage/origin.html#coop-enforcement-source).
5. If the result of [checking if enforcing report-only COOP would require a browsing context group switch](https://html.spec.whatwg.org/multipage/origin.html#check-bcg-switch-navigation-report-only) given `isInitialAboutBlank`, `responseOrigin`, `currentCOOPEnforcementResult`'s [origin](https://html.spec.whatwg.org/multipage/origin.html#coop-enforcement-origin), `responseCOOP`, and `currentCOOPEnforcementResult`'s [cross-origin opener policy](https://html.spec.whatwg.org/multipage/origin.html#coop-enforcement-coop), is true, then:

   1. Set `result`'s [would need a browsing context group switch due to report-only](https://html.spec.whatwg.org/multipage/origin.html#coop-enforcement-bcg-switch-report-only) to true.
   2. If `browsingContext`'s [group](https://html.spec.whatwg.org/multipage/browsers.html#tlbc-group)'s [browsing context set](https://html.spec.whatwg.org/multipage/browsers.html#browsing-context-set)'s [size](https://infra.spec.whatwg.org/#list-size) is greater than 1, then:

      1. [Queue a violation report for browsing context group switch when navigating to a COOP response](https://html.spec.whatwg.org/multipage/origin.html#coop-violation-navigation-to) with `responseCOOP`, "`reporting`", `responseURL`, `currentCOOPEnforcementResult`'s [url](https://html.spec.whatwg.org/multipage/origin.html#coop-enforcement-url), `currentCOOPEnforcementResult`'s [origin](https://html.spec.whatwg.org/multipage/origin.html#coop-enforcement-origin), `responseOrigin`, and `referrer`.
      2. [Queue a violation report for browsing context group switch when navigating away from a COOP response](https://html.spec.whatwg.org/multipage/origin.html#coop-violation-navigation-from) with `currentCOOPEnforcementResult`'s [cross-origin opener policy](https://html.spec.whatwg.org/multipage/origin.html#coop-enforcement-coop), "`reporting`", `currentCOOPEnforcementResult`'s [url](https://html.spec.whatwg.org/multipage/origin.html#coop-enforcement-url), `responseURL`, `currentCOOPEnforcementResult`'s [origin](https://html.spec.whatwg.org/multipage/origin.html#coop-enforcement-origin), `responseOrigin`, and `currentCOOPEnforcementResult`'s [current context is navigation source](https://html.spec.whatwg.org/multipage/origin.html#coop-enforcement-source).
6. Return `newCOOPEnforcementResult`.

To obtain a browsing context to use for a navigation response, given a [browsing context](https://html.spec.whatwg.org/multipage/browsers.html#browsing-context) `browsingContext`, a [sandboxing flag set](https://html.spec.whatwg.org/multipage/origin.html#sandboxing-flag-set) `sandboxFlags`, a [cross-origin opener policy](https://html.spec.whatwg.org/multipage/origin.html#cross-origin-opener-policy) `navigationCOOP`, and a [cross-origin opener policy enforcement result](https://html.spec.whatwg.org/multipage/origin.html#coop-enforcement-result) `coopEnforcementResult`:

1. If `browsingContext` is not a [top-level browsing context](https://html.spec.whatwg.org/multipage/browsers.html#top-level-browsing-context), return `browsingContext`.
2. If `coopEnforcementResult`'s [needs a browsing context group switch](https://html.spec.whatwg.org/multipage/origin.html#coop-enforcement-bcg-switch) is false, then:

   1. If `coopEnforcementResult`'s [would need a browsing context group switch due to report-only](https://html.spec.whatwg.org/multipage/origin.html#coop-enforcement-bcg-switch-report-only) is true, set `browsing context`'s [virtual browsing context group ID](https://html.spec.whatwg.org/multipage/browsers.html#virtual-browsing-context-group-id) to a new unique identifier.
   2. Return `browsingContext`.
3. Let `newBrowsingContext` be the result of [creating a new top-level browsing context](https://html.spec.whatwg.org/multipage/browsers.html#creating-a-new-top-level-browsing-context).
4. If `navigationCOOP`'s [value](https://html.spec.whatwg.org/multipage/origin.html#coop-struct-value) is "`same-origin-plus-COEP`", then set `newBrowsingContext`'s [group](https://html.spec.whatwg.org/multipage/browsers.html#tlbc-group)'s [cross-origin isolation mode](https://html.spec.whatwg.org/multipage/browsers.html#bcg-cross-origin-isolation) to either "`logical`" or "`concrete`". The choice of which is [implementation-defined](https://infra.spec.whatwg.org/#implementation-defined).

   It is difficult on some platforms to provide the security properties required by the [cross-origin isolated capability](https://html.spec.whatwg.org/multipage/webappapis.html#concept-settings-object-cross-origin-isolated-capability). "`concrete`" grants access to it and "`logical`" does not.
5. If `sandboxFlags` is not empty, then:

   1. Assert `navigationCOOP`'s [value](https://html.spec.whatwg.org/multipage/origin.html#coop-struct-value) is "`unsafe-none`".
   2. Assert: `newBrowsingContext`'s [popup sandboxing flag set](https://html.spec.whatwg.org/multipage/origin.html#popup-sandboxing-flag-set) [is empty](https://infra.spec.whatwg.org/#list-is-empty).
   3. Set `newBrowsingContext`'s [popup sandboxing flag set](https://html.spec.whatwg.org/multipage/origin.html#popup-sandboxing-flag-set) to a [clone](https://infra.spec.whatwg.org/#list-clone) of `sandboxFlags`.
6. [Discard](https://html.spec.whatwg.org/multipage/window-object.html#a-browsing-context-is-discarded) `browsingContext`.

   This has no effect on `browsingContext`'s [group](https://html.spec.whatwg.org/multipage/browsers.html#tlbc-group), unless `browsingContext` was its sole [top-level browsing context](https://html.spec.whatwg.org/multipage/browsers.html#top-level-browsing-context). In that case, the user agent might delete the [browsing context group](https://html.spec.whatwg.org/multipage/browsers.html#browsing-context-group) which no longer contains any [browsing contexts](https://html.spec.whatwg.org/multipage/browsers.html#browsing-context).
7. Return `newBrowsingContext`.

The impact of swapping browsing context groups following a navigation is not fully defined. It is currently under discussion in [issue #5350](https://github.com/whatwg/html/issues/5350).

#### 7.7.3 Reporting[](https://html.spec.whatwg.org/multipage/origin.html#reporting)

An accessor-accessed relationship is an enum that describes the relationship between two [browsing contexts](https://html.spec.whatwg.org/multipage/browsers.html#browsing-context) between which an access happened. It can take the following values:

* accessor is opener

  The accessor [browsing context](https://html.spec.whatwg.org/multipage/browsers.html#browsing-context) or one of its [ancestors](https://html.spec.whatwg.org/multipage/browsers.html#ancestor-browsing-context) is the [opener browsing context](https://html.spec.whatwg.org/multipage/browsers.html#opener-browsing-context) of the accessed [browsing context](https://html.spec.whatwg.org/multipage/browsers.html#browsing-context)'s [top-level browsing context](https://html.spec.whatwg.org/multipage/browsers.html#top-level-browsing-context).
* accessor is openee

  The accessed [browsing context](https://html.spec.whatwg.org/multipage/browsers.html#browsing-context) or one of its [ancestors](https://html.spec.whatwg.org/multipage/browsers.html#ancestor-browsing-context) is the [opener browsing context](https://html.spec.whatwg.org/multipage/browsers.html#opener-browsing-context) of the accessor [browsing context](https://html.spec.whatwg.org/multipage/browsers.html#browsing-context)'s [top-level browsing context](https://html.spec.whatwg.org/multipage/browsers.html#top-level-browsing-context).
* none

  There is no opener relationship between the accessor [browsing context](https://html.spec.whatwg.org/multipage/browsers.html#browsing-context), the accessor [browsing context](https://html.spec.whatwg.org/multipage/browsers.html#browsing-context), or any of their [ancestors](https://html.spec.whatwg.org/multipage/browsers.html#ancestor-browsing-context).

To check if an access between two browsing contexts should be reported, given two [browsing contexts](https://html.spec.whatwg.org/multipage/browsers.html#browsing-context) `accessor` and `accessed`, a JavaScript property name `P`, and an [environment settings object](https://html.spec.whatwg.org/multipage/webappapis.html#environment-settings-object) `environment`:

1. If `P` is not a [cross-origin accessible window property name](https://html.spec.whatwg.org/multipage/browsers.html#cross-origin-accessible-window-property-name), then return.
2. If `accessor`'s [active document](https://html.spec.whatwg.org/multipage/browsers.html#active-document)'s [origin](https://dom.spec.whatwg.org/#concept-document-origin) or any of its [ancestors](https://html.spec.whatwg.org/multipage/browsers.html#ancestor-browsing-context)' [active document](https://html.spec.whatwg.org/multipage/browsers.html#active-document)'s [origins](https://dom.spec.whatwg.org/#concept-document-origin) are not [same origin](https://html.spec.whatwg.org/multipage/origin.html#same-origin) with `accessor`'s [top-level browsing context](https://html.spec.whatwg.org/multipage/browsers.html#top-level-browsing-context)'s [active document](https://html.spec.whatwg.org/multipage/browsers.html#active-document)'s [origin](https://dom.spec.whatwg.org/#concept-document-origin), or if `accessed`'s [active document](https://html.spec.whatwg.org/multipage/browsers.html#active-document)'s [origin](https://dom.spec.whatwg.org/#concept-document-origin) or any of its [ancestors](https://html.spec.whatwg.org/multipage/browsers.html#ancestor-browsing-context)' [active document](https://html.spec.whatwg.org/multipage/browsers.html#active-document)'s [origins](https://dom.spec.whatwg.org/#concept-document-origin) are not [same origin](https://html.spec.whatwg.org/multipage/origin.html#same-origin) with `accessed`'s [top-level browsing context](https://html.spec.whatwg.org/multipage/browsers.html#top-level-browsing-context)'s [active document](https://html.spec.whatwg.org/multipage/browsers.html#active-document)'s [origin](https://dom.spec.whatwg.org/#concept-document-origin), then return.

   This avoids leaking information about cross-origin iframes to a top level frame with cross-origin opener policy reporting.
3. If `accessor`'s [top-level browsing context](https://html.spec.whatwg.org/multipage/browsers.html#top-level-browsing-context)'s [virtual browsing context group ID](https://html.spec.whatwg.org/multipage/browsers.html#virtual-browsing-context-group-id) is `accessed`'s [top-level browsing context](https://html.spec.whatwg.org/multipage/browsers.html#top-level-browsing-context)'s [virtual browsing context group ID](https://html.spec.whatwg.org/multipage/browsers.html#virtual-browsing-context-group-id), then return.
4. Let `accessorAccessedRelationship` be a new [accessor-accessed relationship](https://html.spec.whatwg.org/multipage/origin.html#accessor-accessed-relationship) with value [none](https://html.spec.whatwg.org/multipage/origin.html#accessor-accessed-none).
5. If `accessed`'s [top-level browsing context](https://html.spec.whatwg.org/multipage/browsers.html#top-level-browsing-context)'s [opener browsing context](https://html.spec.whatwg.org/multipage/browsers.html#opener-browsing-context) is `accessor` or an [ancestor](https://html.spec.whatwg.org/multipage/browsers.html#ancestor-browsing-context) of `accessor`, then set `accessorAccessedRelationship` to [accessor is opener](https://html.spec.whatwg.org/multipage/origin.html#accessor-accessed-opener).
6. If `accessor`'s [top-level browsing context](https://html.spec.whatwg.org/multipage/browsers.html#top-level-browsing-context)'s [opener browsing context](https://html.spec.whatwg.org/multipage/browsers.html#opener-browsing-context) is `accessed` or an [ancestor](https://html.spec.whatwg.org/multipage/browsers.html#ancestor-browsing-context) of `accessed`, then set `accessorAccessedRelationship` to [accessor is openee](https://html.spec.whatwg.org/multipage/origin.html#accessor-accessed-openee).
7. [Queue violation reports for accesses](https://html.spec.whatwg.org/multipage/origin.html#coop-violation-access), given `accessorAccessedRelationship`, `accessor`'s [top-level browsing context](https://html.spec.whatwg.org/multipage/browsers.html#top-level-browsing-context)'s [active document](https://html.spec.whatwg.org/multipage/browsers.html#active-document)'s [cross-origin opener policy](https://html.spec.whatwg.org/multipage/dom.html#concept-document-coop), `accessed`'s [top-level browsing context](https://html.spec.whatwg.org/multipage/browsers.html#top-level-browsing-context)'s [active document](https://html.spec.whatwg.org/multipage/browsers.html#active-document)'s [cross-origin opener policy](https://html.spec.whatwg.org/multipage/dom.html#concept-document-coop), `accessor`'s [active document](https://html.spec.whatwg.org/multipage/browsers.html#active-document)'s [URL](https://dom.spec.whatwg.org/#concept-document-url), `accessed`'s [active document](https://html.spec.whatwg.org/multipage/browsers.html#active-document)'s [URL](https://dom.spec.whatwg.org/#concept-document-url), `accessor`'s [top-level browsing context](https://html.spec.whatwg.org/multipage/browsers.html#top-level-browsing-context)'s [initial URL](https://html.spec.whatwg.org/multipage/browsers.html#browsing-context-initial-url), `accessed`'s [top-level browsing context](https://html.spec.whatwg.org/multipage/browsers.html#top-level-browsing-context)'s [initial URL](https://html.spec.whatwg.org/multipage/browsers.html#browsing-context-initial-url), `accessor`'s [active document](https://html.spec.whatwg.org/multipage/browsers.html#active-document)'s [origin](https://dom.spec.whatwg.org/#concept-document-origin), `accessed`'s [active document](https://html.spec.whatwg.org/multipage/browsers.html#active-document)'s [origin](https://dom.spec.whatwg.org/#concept-document-origin), `accessor`'s [top-level browsing context](https://html.spec.whatwg.org/multipage/browsers.html#top-level-browsing-context)'s [opener origin at creation](https://html.spec.whatwg.org/multipage/browsers.html#opener-origin-at-creation), `accessed`'s [top-level browsing context](https://html.spec.whatwg.org/multipage/browsers.html#top-level-browsing-context)'s [opener origin at creation](https://html.spec.whatwg.org/multipage/browsers.html#opener-origin-at-creation), `accessor`'s [top-level browsing context](https://html.spec.whatwg.org/multipage/browsers.html#top-level-browsing-context)'s [active document](https://html.spec.whatwg.org/multipage/browsers.html#active-document)'s [referrer](https://html.spec.whatwg.org/multipage/dom.html#dom-document-referrer), `accessed`'s [top-level browsing context](https://html.spec.whatwg.org/multipage/browsers.html#top-level-browsing-context)'s [active document](https://html.spec.whatwg.org/multipage/browsers.html#active-document)'s [referrer](https://html.spec.whatwg.org/multipage/dom.html#dom-document-referrer), `P`, and `environment`.

To sanitize a URL to send in a report given a [URL](https://url.spec.whatwg.org/#concept-url) `url`:

1. Let `sanitizedURL` be a copy of `url`.
2. [Set the username](https://url.spec.whatwg.org/#set-the-username) given `sanitizedURL` and the empty string.
3. [Set the password](https://url.spec.whatwg.org/#set-the-password) given `sanitizedURL` and the empty string.
4. Return the [serialization](https://url.spec.whatwg.org/#concept-url-serializer) of `sanitizedURL` with *[exclude fragment](https://url.spec.whatwg.org/#url-serializer-exclude-fragment)* set to true.

To queue a violation report for browsing context group switch when navigating to a COOP response given a [cross-origin opener policy](https://html.spec.whatwg.org/multipage/origin.html#cross-origin-opener-policy) `coop`, a string `disposition`, a [URL](https://url.spec.whatwg.org/#concept-url) `coopURL`, a [URL](https://url.spec.whatwg.org/#concept-url) `previousResponseURL`, two [origins](https://html.spec.whatwg.org/multipage/origin.html#concept-origin) `coopOrigin` and `previousResponseOrigin`, and a [referrer](https://fetch.spec.whatwg.org/#concept-request-referrer) `referrer`:

1. If `coop`'s [reporting endpoint](https://html.spec.whatwg.org/multipage/origin.html#coop-struct-report-endpoint) is null, return.
2. Let `coopValue` be `coop`'s [value](https://html.spec.whatwg.org/multipage/origin.html#coop-struct-value).
3. If `disposition` is "`reporting`", then set `coopValue` to `coop`'s [report-only value](https://html.spec.whatwg.org/multipage/origin.html#coop-struct-report-only-value).
4. Let `serializedReferrer` be an empty string.
5. If `referrer` is a [URL](https://url.spec.whatwg.org/#concept-url), set `serializedReferrer` to the [serialization](https://url.spec.whatwg.org/#concept-url-serializer) of `referrer`.
6. Let `body` be a new object containing the following properties:

   | key                 | value                                                                                                                                                                                                                                                                       |
   | ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
   | disposition         | `disposition`                                                                                                                                                                                                                                                               |
   | effectivePolicy     | `coopValue`                                                                                                                                                                                                                                                                 |
   | previousResponseURL | If `coopOrigin` and `previousResponseOrigin` are [same origin](https://html.spec.whatwg.org/multipage/origin.html#same-origin) this is the [sanitization](https://html.spec.whatwg.org/multipage/origin.html#sanitize-url-report) of `previousResponseURL`, null otherwise. |
   | referrer            | `serializedReferrer`                                                                                                                                                                                                                                                        |
   | type                | "`navigation-to-response`"                                                                                                                                                                                                                                                  |
7. [Queue](https://w3c.github.io/reporting/#queue-report) `body` as "`coop`" for `coop`'s [reporting endpoint](https://html.spec.whatwg.org/multipage/origin.html#coop-struct-report-endpoint) with `coopURL`.

To queue a violation report for browsing context group switch when navigating away from a COOP response given a [cross-origin opener policy](https://html.spec.whatwg.org/multipage/origin.html#cross-origin-opener-policy) `coop`, a string `disposition`, a [URL](https://url.spec.whatwg.org/#concept-url) `coopURL`, a [URL](https://url.spec.whatwg.org/#concept-url) `nextResponseURL`, two [origins](https://html.spec.whatwg.org/multipage/origin.html#concept-origin) `coopOrigin` and `nextResponseOrigin`, and a boolean `isCOOPResponseNavigationSource`:

1. If `coop`'s [reporting endpoint](https://html.spec.whatwg.org/multipage/origin.html#coop-struct-report-endpoint) is null, return.
2. Let `coopValue` be `coop`'s [value](https://html.spec.whatwg.org/multipage/origin.html#coop-struct-value).
3. If `disposition` is "`reporting`", then set `coopValue` to `coop`'s [report-only value](https://html.spec.whatwg.org/multipage/origin.html#coop-struct-report-only-value).
4. Let `body` be a new object containing the following properties:

   | key             | value                                                                                                                                                                                                                                                                                                                |
   | --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
   | disposition     | `disposition`                                                                                                                                                                                                                                                                                                        |
   | effectivePolicy | `coopValue`                                                                                                                                                                                                                                                                                                          |
   | nextResponseURL | If `coopOrigin` and `nextResponseOrigin` are [same origin](https://html.spec.whatwg.org/multipage/origin.html#same-origin) or `isCOOPResponseNavigationSource` is true, this is the [sanitization](https://html.spec.whatwg.org/multipage/origin.html#sanitize-url-report) of `previousResponseURL`, null otherwise. |
   | type            | "`navigation-from-response`"                                                                                                                                                                                                                                                                                         |
5. [Queue](https://w3c.github.io/reporting/#queue-report) `body` as "`coop`" for `coop`'s [reporting endpoint](https://html.spec.whatwg.org/multipage/origin.html#coop-struct-report-endpoint) with `coopURL`.

To queue violation reports for accesses, given an [accessor-accessed relationship](https://html.spec.whatwg.org/multipage/origin.html#accessor-accessed-relationship) `accessorAccessedRelationship`, two [cross-origin opener policies](https://html.spec.whatwg.org/multipage/origin.html#cross-origin-opener-policy) `accessorCOOP` and `accessedCOOP`, four [URLs](https://url.spec.whatwg.org/#concept-url) `accessorURL`, `accessedURL`, `accessorInitialURL`, `accessedInitialURL`, four [origins](https://html.spec.whatwg.org/multipage/origin.html#concept-origin) `accessorOrigin`, `accessedOrigin`, `accessorCreatorOrigin` and `accessedCreatorOrigin`, two [referrers](https://html.spec.whatwg.org/multipage/dom.html#dom-document-referrer) `accessorReferrer` and `accessedReferrer`, a string `propertyName`, and an [environment settings object](https://html.spec.whatwg.org/multipage/webappapis.html#environment-settings-object) `environment`:

1. If `coop`'s [reporting endpoint](https://html.spec.whatwg.org/multipage/origin.html#coop-struct-report-endpoint) is null, return.
2. Let `coopValue` be `coop`'s [value](https://html.spec.whatwg.org/multipage/origin.html#coop-struct-value).
3. If `disposition` is "`reporting`", then set `coopValue` to `coop`'s [report-only value](https://html.spec.whatwg.org/multipage/origin.html#coop-struct-report-only-value).
4. If `accessorAccessedRelationship` is [accessor is opener](https://html.spec.whatwg.org/multipage/origin.html#accessor-accessed-opener):

   1. [Queue a violation report for access to an opened window](https://html.spec.whatwg.org/multipage/origin.html#coop-violation-access-to-opened), given `accessorCOOP`, `accessorURL`, `accessedURL`, `accessedInitialURL`, `accessorOrigin`, `accessedOrigin`, `accessedCreatorOrigin`, `propertyName`, and `environment`.
   2. [Queue a violation report for access from the opener](https://html.spec.whatwg.org/multipage/origin.html#coop-violation-access-from-opener), given `accessedCOOP`, `accessedURL`, `accessorURL`, `accessedOrigin`, `accessorOrigin`, `propertyName`, and `accessedReferrer`.
5. Otherwise, if `accessorAccessedRelationship` is [accessor is openee](https://html.spec.whatwg.org/multipage/origin.html#accessor-accessed-openee):

   1. [Queue a violation report for access to the opener](https://html.spec.whatwg.org/multipage/origin.html#coop-violation-access-to-opener), given `accessorCOOP`, `accessorURL`, `accessedURL`, `accessorOrigin`, `accessedOrigin`, `propertyName`, `accessorReferrer`, and `environment`.
   2. [Queue a violation report for access from an opened window](https://html.spec.whatwg.org/multipage/origin.html#coop-violation-access-from-opened), given `accessedCOOP`, `accessedURL`, `accessorURL`, `accessorInitialURL`, `accessedOrigin`, `accessorOrigin`, `accessorCreatorOrigin`, and `propertyName`.
6. Otherwise:

   1. [Queue a violation report for access to another window](https://html.spec.whatwg.org/multipage/origin.html#coop-violation-access-to-opened), given `accessorCOOP`, `accessorURL`, `accessedURL`, `accessorOrigin`, `accessedOrigin`, `propertyName`, and `environment`
   2. [Queue a violation report for access from another window](https://html.spec.whatwg.org/multipage/origin.html#coop-violation-access-from-other), given `accessedCOOP`, `accessedURL`, `accessorURL`, `accessedOrigin`, `accessorOrigin`, and `propertyName`.

To queue a violation report for access to the opener, given a [cross-origin opener policy](https://html.spec.whatwg.org/multipage/origin.html#cross-origin-opener-policy) `coop`, two [URLs](https://url.spec.whatwg.org/#concept-url) `coopURL` and `openerURL`, two [origins](https://html.spec.whatwg.org/multipage/origin.html#concept-origin) `coopOrigin` and `openerOrigin`, a string `propertyName`, a [referrer](https://fetch.spec.whatwg.org/#concept-request-referrer) `referrer`, and an [environment settings object](https://html.spec.whatwg.org/multipage/webappapis.html#environment-settings-object) `environment`:

1. Let `sourceFile`, `lineNumber` and `columnNumber` be the relevant script URL and problematic position which triggered this report.
2. Let `serializedReferrer` be an empty string.
3. If `referrer` is a [URL](https://url.spec.whatwg.org/#concept-url), set `serializedReferrer` to the [serialization](https://url.spec.whatwg.org/#concept-url-serializer) of `referrer`.
4. Let `body` be a new object containing the following properties:

   | key             | value                                                                                                                                                                                                                                                    |
   | --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
   | disposition     | "`reporting`"                                                                                                                                                                                                                                            |
   | effectivePolicy | `coop`'s [report-only value](https://html.spec.whatwg.org/multipage/origin.html#coop-struct-report-only-value)                                                                                                                                           |
   | property        | `propertyName`                                                                                                                                                                                                                                           |
   | openerURL       | If `coopOrigin` and `openerOrigin` are [same origin](https://html.spec.whatwg.org/multipage/origin.html#same-origin), this is the [sanitization](https://html.spec.whatwg.org/multipage/origin.html#sanitize-url-report) of `openerURL`, null otherwise. |
   | referrer        | `serializedReferrer`                                                                                                                                                                                                                                     |
   | sourceFile      | `sourceFile`                                                                                                                                                                                                                                             |
   | lineNumber      | `lineNumber`                                                                                                                                                                                                                                             |
   | columnNumber    | `columnNumber`                                                                                                                                                                                                                                           |
   | type            | "`access-to-opener`"                                                                                                                                                                                                                                     |
5. [Queue](https://w3c.github.io/reporting/#queue-report) `body` as "`coop`" for `coop`'s [reporting endpoint](https://html.spec.whatwg.org/multipage/origin.html#coop-struct-report-endpoint) with `coopURL` and `environment`.

To queue a violation report for access to an opened window, given a [cross-origin opener policy](https://html.spec.whatwg.org/multipage/origin.html#cross-origin-opener-policy) `coop`, three [URLs](https://url.spec.whatwg.org/#concept-url) `coopURL`, `openedWindowURL` and `initialWindowURL`, three [origins](https://html.spec.whatwg.org/multipage/origin.html#concept-origin) `coopOrigin`, `openedWindowOrigin`, and `openerInitialOrigin`, a string `propertyName`, and an [environment settings object](https://html.spec.whatwg.org/multipage/webappapis.html#environment-settings-object) `environment`:

1. Let `sourceFile`, `lineNumber` and `columnNumber` be the relevant script URL and problematic position which triggered this report.
2. Let `body` be a new object containing the following properties:

   | key                    | value                                                                                                                                                                                                                                                                  |
   | ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
   | disposition            | "`reporting`"                                                                                                                                                                                                                                                          |
   | effectivePolicy        | `coop`'s [report-only value](https://html.spec.whatwg.org/multipage/origin.html#coop-struct-report-only-value)                                                                                                                                                         |
   | property               | `propertyName`                                                                                                                                                                                                                                                         |
   | openedWindowURL        | If `coopOrigin` and `openedWindowOrigin` are [same origin](https://html.spec.whatwg.org/multipage/origin.html#same-origin), this is the [sanitization](https://html.spec.whatwg.org/multipage/origin.html#sanitize-url-report) of `openedWindowURL`, null otherwise.   |
   | openedWindowInitialURL | If `coopOrigin` and `openerInitialOrigin` are [same origin](https://html.spec.whatwg.org/multipage/origin.html#same-origin), this is the [sanitization](https://html.spec.whatwg.org/multipage/origin.html#sanitize-url-report) of `initialWindowURL`, null otherwise. |
   | sourceFile             | `sourceFile`                                                                                                                                                                                                                                                           |
   | lineNumber             | `lineNumber`                                                                                                                                                                                                                                                           |
   | columnNumber           | `columnNumber`                                                                                                                                                                                                                                                         |
   | type                   | "`access-to-opener`"                                                                                                                                                                                                                                                   |
3. [Queue](https://w3c.github.io/reporting/#queue-report) `body` as "`coop`" for `coop`'s [reporting endpoint](https://html.spec.whatwg.org/multipage/origin.html#coop-struct-report-endpoint) with `coopURL` and `environment`.

To queue a violation report for access to another window, given a [cross-origin opener policy](https://html.spec.whatwg.org/multipage/origin.html#cross-origin-opener-policy) `coop`, two [URLs](https://url.spec.whatwg.org/#concept-url) `coopURL` and `otherURL`, two [origins](https://html.spec.whatwg.org/multipage/origin.html#concept-origin) `coopOrigin` and `otherOrigin`, a string `propertyName`, and an [environment settings object](https://html.spec.whatwg.org/multipage/webappapis.html#environment-settings-object) `environment`:

1. Let `sourceFile`, `lineNumber` and `columnNumber` be the relevant script URL and problematic position which triggered this report.
2. Let `body` be a new object containing the following properties:

   | key             | value                                                                                                                                                                                                                                                  |
   | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
   | disposition     | "`reporting`"                                                                                                                                                                                                                                          |
   | effectivePolicy | `coop`'s [report-only value](https://html.spec.whatwg.org/multipage/origin.html#coop-struct-report-only-value)                                                                                                                                         |
   | property        | `propertyName`                                                                                                                                                                                                                                         |
   | otherURL        | If `coopOrigin` and `otherOrigin` are [same origin](https://html.spec.whatwg.org/multipage/origin.html#same-origin), this is the [sanitization](https://html.spec.whatwg.org/multipage/origin.html#sanitize-url-report) of `otherURL`, null otherwise. |
   | sourceFile      | `sourceFile`                                                                                                                                                                                                                                           |
   | lineNumber      | `lineNumber`                                                                                                                                                                                                                                           |
   | columnNumber    | `columnNumber`                                                                                                                                                                                                                                         |
   | type            | "`access-to-opener`"                                                                                                                                                                                                                                   |
3. [Queue](https://w3c.github.io/reporting/#queue-report) `body` as "`coop`" for `coop`'s [reporting endpoint](https://html.spec.whatwg.org/multipage/origin.html#coop-struct-report-endpoint) with `coopURL` and `environment`.

To queue a violation report for access from the opener, given a [cross-origin opener policy](https://html.spec.whatwg.org/multipage/origin.html#cross-origin-opener-policy) `coop`, two [URLs](https://url.spec.whatwg.org/#concept-url) `coopURL` and `openerURL`, two [origins](https://html.spec.whatwg.org/multipage/origin.html#concept-origin) `coopOrigin` and `openerOrigin`, a string `propertyName`, and a [referrer](https://fetch.spec.whatwg.org/#concept-request-referrer) `referrer`:

1. If `coop`'s [reporting endpoint](https://html.spec.whatwg.org/multipage/origin.html#coop-struct-report-endpoint) is null, return.
2. Let `serializedReferrer` be an empty string.
3. If `referrer` is a [URL](https://url.spec.whatwg.org/#concept-url), set `serializedReferrer` to the [serialization](https://url.spec.whatwg.org/#concept-url-serializer) of `referrer`.
4. Let `body` be a new object containing the following properties:

   | key             | value                                                                                                                                                                                                                                                    |
   | --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
   | disposition     | "`reporting`"                                                                                                                                                                                                                                            |
   | effectivePolicy | `coop`'s [report-only value](https://html.spec.whatwg.org/multipage/origin.html#coop-struct-report-only-value)                                                                                                                                           |
   | property        | `propertyName`                                                                                                                                                                                                                                           |
   | openerURL       | If `coopOrigin` and `openerOrigin` are [same origin](https://html.spec.whatwg.org/multipage/origin.html#same-origin), this is the [sanitization](https://html.spec.whatwg.org/multipage/origin.html#sanitize-url-report) of `openerURL`, null otherwise. |
   | referrer        | `serializedReferrer`                                                                                                                                                                                                                                     |
   | type            | "`access-to-opener`"                                                                                                                                                                                                                                     |
5. [Queue](https://w3c.github.io/reporting/#queue-report) `body` as "`coop`" for `coop`'s [reporting endpoint](https://html.spec.whatwg.org/multipage/origin.html#coop-struct-report-endpoint) with `coopURL`.

To queue a violation report for access from an opened window, given a [cross-origin opener policy](https://html.spec.whatwg.org/multipage/origin.html#cross-origin-opener-policy) `coop`, three [URLs](https://url.spec.whatwg.org/#concept-url) `coopURL`, `openedWindowURL` and `initialWindowURL`, three [origins](https://html.spec.whatwg.org/multipage/origin.html#concept-origin) `coopOrigin`, `openedWindowOrigin`, and `openerInitialOrigin`, and a string `propertyName`:

1. If `coop`'s [reporting endpoint](https://html.spec.whatwg.org/multipage/origin.html#coop-struct-report-endpoint) is null, return.
2. Let `body` be a new object containing the following properties:

   | key                    | value                                                                                                                                                                                                                                                                  |
   | ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
   | disposition            | "`reporting`"                                                                                                                                                                                                                                                          |
   | effectivePolicy        | `coopValue`                                                                                                                                                                                                                                                            |
   | property               | `coop`'s [report-only value](https://html.spec.whatwg.org/multipage/origin.html#coop-struct-report-only-value)                                                                                                                                                         |
   | openedWindowURL        | If `coopOrigin` and `openedWindowOrigin` are [same origin](https://html.spec.whatwg.org/multipage/origin.html#same-origin), this is the [sanitization](https://html.spec.whatwg.org/multipage/origin.html#sanitize-url-report) of `openedWindowURL`, null otherwise.   |
   | openedWindowInitialURL | If `coopOrigin` and `openerInitialOrigin` are [same origin](https://html.spec.whatwg.org/multipage/origin.html#same-origin), this is the [sanitization](https://html.spec.whatwg.org/multipage/origin.html#sanitize-url-report) of `initialWindowURL`, null otherwise. |
   | type                   | "`access-to-opener`"                                                                                                                                                                                                                                                   |
3. [Queue](https://w3c.github.io/reporting/#queue-report) `body` as "`coop`" for `coop`'s [reporting endpoint](https://html.spec.whatwg.org/multipage/origin.html#coop-struct-report-endpoint) with `coopURL`.

To queue a violation report for access from another window, given a [cross-origin opener policy](https://html.spec.whatwg.org/multipage/origin.html#cross-origin-opener-policy) `coop`, two [URLs](https://url.spec.whatwg.org/#concept-url) `coopURL` and `otherURL`, two [origins](https://html.spec.whatwg.org/multipage/origin.html#concept-origin) `coopOrigin` and `otherOrigin`, and a string `propertyName`:

1. If `coop`'s [reporting endpoint](https://html.spec.whatwg.org/multipage/origin.html#coop-struct-report-endpoint) is null, return.
2. Let `body` be a new object containing the following properties:

   | key             | value                                                                                                                                                                                                                                                  |
   | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
   | disposition     | "`reporting`"                                                                                                                                                                                                                                          |
   | effectivePolicy | `coop`'s [report-only value](https://html.spec.whatwg.org/multipage/origin.html#coop-struct-report-only-value)                                                                                                                                         |
   | property        | `propertyName`                                                                                                                                                                                                                                         |
   | otherURL        | If `coopOrigin` and `otherOrigin` are [same origin](https://html.spec.whatwg.org/multipage/origin.html#same-origin), this is the [sanitization](https://html.spec.whatwg.org/multipage/origin.html#sanitize-url-report) of `otherURL`, null otherwise. |
   | type            | `access-to-opener`                                                                                                                                                                                                                                     |
3. [Queue](https://w3c.github.io/reporting/#queue-report) `body` as "`coop`" for `coop`'s [reporting endpoint](https://html.spec.whatwg.org/multipage/origin.html#coop-struct-report-endpoint) with `coopURL`.

### 7.8 Cross-origin embedder policies[](https://html.spec.whatwg.org/multipage/origin.html#coep)

**✔**MDN

An embedder policy value is one of three strings that controls the fetching of cross-origin resources without explicit permission from resource owners.

* "`unsafe-none`"

  This is the default value. When this value is used, cross-origin resources can be fetched without giving explicit permission through the [CORS protocol](https://fetch.spec.whatwg.org/#http-cors-protocol) or the `Cross-Origin-Resource-Policy` header.
* "`require-corp`"

  When this value is used, fetching cross-origin resources requires the server's explicit permission through the [CORS protocol](https://fetch.spec.whatwg.org/#http-cors-protocol) or the `Cross-Origin-Resource-Policy` header.
* "`credentialless`"

  When this value is used, fetching cross-origin no-CORS resources omits credentials. In exchange, an explicit `Cross-Origin-Resource-Policy` header is not required. Other requests sent with credentials require the server's explicit permission through the [CORS protocol](https://fetch.spec.whatwg.org/#http-cors-protocol) or the `Cross-Origin-Resource-Policy` header.

Before supporting "`credentialless`", implementers are strongly encouraged to support both:

* [Private Network Access](https://wicg.github.io/private-network-access/)
* [Opaque Response Blocking](https://github.com/annevk/orb)

Otherwise, it would allow attackers to leverage the client's network position to read non public resources, using the [cross-origin isolated capability](https://html.spec.whatwg.org/multipage/webappapis.html#concept-settings-object-cross-origin-isolated-capability).

An [embedder policy value](https://html.spec.whatwg.org/multipage/origin.html#embedder-policy-value) is compatible with cross-origin isolation if it is "`credentialless`" or "`require-corp`".

An embedder policy consists of:

* A value, which is an [embedder policy value](https://html.spec.whatwg.org/multipage/origin.html#embedder-policy-value), initially "`unsafe-none`".
* A reporting endpoint string, initially the empty string.
* A report only value, which is an [embedder policy value](https://html.spec.whatwg.org/multipage/origin.html#embedder-policy-value), initially "`unsafe-none`".
* A report only reporting endpoint string, initially the empty string.

The "`coep`" report type is a [report type](https://w3c.github.io/reporting/#report-type) whose value is "`coep`". It is [visible to `ReportingObserver`s](https://w3c.github.io/reporting/#visible-to-reportingobservers).

#### 7.8.1 The headers[](https://html.spec.whatwg.org/multipage/origin.html#the-coep-headers)

The ``Cross-Origin-Embedder-Policy`\` and \``Cross-Origin-Embedder-Policy-Report-Only HTTP response headers allow a server to declare an [embedder policy](https://html.spec.whatwg.org/multipage/origin.html#embedder-policy) for an [environment settings object](https://html.spec.whatwg.org/multipage/webappapis.html#environment-settings-object). These headers are [structured headers](https://httpwg.org/specs/rfc8941.html) whose values must be [token](https://httpwg.org/specs/rfc8941.html#token). \[[STRUCTURED-FIELDS]](https://html.spec.whatwg.org/multipage/references.html#refsSTRUCTURED-FIELDS)

The valid [token](https://httpwg.org/specs/rfc8941.html#token) values are the [embedder policy values](https://html.spec.whatwg.org/multipage/origin.html#embedder-policy-value). The token may also have attached [parameters](https://httpwg.org/specs/rfc8941.html#param); of these, the "`report-to`" parameter can have a [valid URL string](https://url.spec.whatwg.org/#valid-url-string) identifying an appropriate reporting endpoint. \[[REPORTING]](https://html.spec.whatwg.org/multipage/references.html#refsREPORTING)

The [processing model](https://html.spec.whatwg.org/multipage/origin.html#obtain-an-embedder-policy) fails open (by defaulting to "`unsafe-none`") in the presence of a header that cannot be parsed as a token. This includes inadvertent lists created by combining multiple instances of the `Cross-Origin-Embedder-Policy` header present in a given response:

| `Cross-Origin-Embedder-Policy` | Final [embedder policy value](https://html.spec.whatwg.org/multipage/origin.html#embedder-policy-value) |
| ------------------------------ | ------------------------------------------------------------------------------------------------------- |
| *No header delivered*          | "`unsafe-none`"                                                                                         |
| `require-corp`                 | "`require-corp`"                                                                                        |
| `unknown-value`                | "`unsafe-none`"                                                                                         |
| `require-corp, unknown-value`  | "`unsafe-none`"                                                                                         |
| `unknown-value, unknown-value` | "`unsafe-none`"                                                                                         |
| `unknown-value, require-corp`  | "`unsafe-none`"                                                                                         |
| `require-corp, require-corp`   | "`unsafe-none`"                                                                                         |

(The same applies to `Cross-Origin-Embedder-Policy-Report-Only`.)

- - -

To obtain an embedder policy from a [response](https://fetch.spec.whatwg.org/#concept-response) `response` and an [environment](https://html.spec.whatwg.org/multipage/webappapis.html#environment) `environment`:

1. Let `policy` be a new [embedder policy](https://html.spec.whatwg.org/multipage/origin.html#embedder-policy).
2. If `environment` is a [non-secure context](https://html.spec.whatwg.org/multipage/webappapis.html#non-secure-context), then return `policy`.
3. Let `parsedItem` be the result of [getting a structured field value](https://fetch.spec.whatwg.org/#concept-header-list-get-structured-header) with `Cross-Origin-Embedder-Policy` and "`item`" from `response`'s [header list](https://fetch.spec.whatwg.org/#concept-response-header-list).
4. If `parsedItem` is non-null and `parsedItem`\[0] is [compatible with cross-origin isolation](https://html.spec.whatwg.org/multipage/origin.html#compatible-with-cross-origin-isolation):

   1. Set `policy`'s [value](https://html.spec.whatwg.org/multipage/origin.html#embedder-policy-value-2) to `parsedItem`\[0].
   2. If `parsedItem`\[1]["`report-to`"] [exists](https://infra.spec.whatwg.org/#map-exists), then set `policy`'s [endpoint](https://html.spec.whatwg.org/multipage/origin.html#embedder-policy-reporting-endpoint) to `parsedItem`\[1]["`report-to`"].
5. Set `parsedItem` to the result of [getting a structured field value](https://fetch.spec.whatwg.org/#concept-header-list-get-structured-header) with `Cross-Origin-Embedder-Policy-Report-Only` and "`item`" from `response`'s [header list](https://fetch.spec.whatwg.org/#concept-response-header-list).
6. If `parsedItem` is non-null and `parsedItem`\[0] is [compatible with cross-origin isolation](https://html.spec.whatwg.org/multipage/origin.html#compatible-with-cross-origin-isolation):

   1. Set `policy`'s [value](https://html.spec.whatwg.org/multipage/origin.html#embedder-policy-report-only-value) to `parsedItem`\[0].
   2. If `parsedItem`\[1]["`report-to`"] [exists](https://infra.spec.whatwg.org/#map-exists), then set `policy`'s [endpoint](https://html.spec.whatwg.org/multipage/origin.html#embedder-policy-report-only-reporting-endpoint) to `parsedItem`\[1]["`report-to`"].
7. Return `policy`.

#### 7.8.2 Embedder policy checks[](https://html.spec.whatwg.org/multipage/origin.html#embedder-policy-checks)

To check a navigation response's adherence to its embedder policy given a [response](https://fetch.spec.whatwg.org/#concept-response) `response`, a [browsing context](https://html.spec.whatwg.org/multipage/browsers.html#browsing-context) `target`, and an [embedder policy](https://html.spec.whatwg.org/multipage/origin.html#embedder-policy) `responsePolicy`:

1. If `target` is not a [child browsing context](https://html.spec.whatwg.org/multipage/browsers.html#child-browsing-context), then return true.
2. Let `parentPolicy` be `target`'s [container document](https://html.spec.whatwg.org/multipage/browsers.html#bc-container-document)'s [policy container](https://html.spec.whatwg.org/multipage/dom.html#concept-document-policy-container)'s [embedder policy](https://html.spec.whatwg.org/multipage/origin.html#policy-container-embedder-policy).
3. If `parentPolicy`'s [report-only value](https://html.spec.whatwg.org/multipage/origin.html#embedder-policy-report-only-value) is [compatible with cross-origin isolation](https://html.spec.whatwg.org/multipage/origin.html#compatible-with-cross-origin-isolation) and `responsePolicy`'s [value](https://html.spec.whatwg.org/multipage/origin.html#embedder-policy-value-2) is not, then [queue a cross-origin embedder policy inheritance violation](https://html.spec.whatwg.org/multipage/origin.html#queue-a-cross-origin-embedder-policy-inheritance-violation) with `response`, "`navigation`", `parentPolicy`'s [report only reporting endpoint](https://html.spec.whatwg.org/multipage/origin.html#embedder-policy-report-only-reporting-endpoint), "`reporting`", and `target`'s [container document](https://html.spec.whatwg.org/multipage/browsers.html#bc-container-document)'s [relevant settings object](https://html.spec.whatwg.org/multipage/webappapis.html#relevant-settings-object).
4. If `parentPolicy`'s [value](https://html.spec.whatwg.org/multipage/origin.html#embedder-policy-value-2) is not [compatible with cross-origin isolation](https://html.spec.whatwg.org/multipage/origin.html#compatible-with-cross-origin-isolation) or `responsePolicy`'s [value](https://html.spec.whatwg.org/multipage/origin.html#embedder-policy-value-2) is [compatible with cross-origin isolation](https://html.spec.whatwg.org/multipage/origin.html#compatible-with-cross-origin-isolation), then return true.
5. [Queue a cross-origin embedder policy inheritance violation](https://html.spec.whatwg.org/multipage/origin.html#queue-a-cross-origin-embedder-policy-inheritance-violation) with `response`, "`navigation`", `parentPolicy`'s [reporting endpoint](https://html.spec.whatwg.org/multipage/origin.html#embedder-policy-reporting-endpoint), "`enforce`", and `target`'s [container document](https://html.spec.whatwg.org/multipage/browsers.html#bc-container-document)'s [relevant settings object](https://html.spec.whatwg.org/multipage/webappapis.html#relevant-settings-object).
6. Return false.

To check a global object's embedder policy given a `WorkerGlobalScope` `workerGlobalScope`, an [environment settings object](https://html.spec.whatwg.org/multipage/webappapis.html#environment-settings-object) `owner`, and a [response](https://fetch.spec.whatwg.org/#concept-response) `response`:

1. If `workerGlobalScope` is not a `DedicatedWorkerGlobalScope` object, then return true.
2. Let `policy` be `workerGlobalScope`'s [embedder policy](https://html.spec.whatwg.org/multipage/workers.html#concept-workerglobalscope-embedder-policy).
3. Let `ownerPolicy` be `owner`'s [policy container](https://html.spec.whatwg.org/multipage/webappapis.html#concept-settings-object-policy-container)'s [embedder policy](https://html.spec.whatwg.org/multipage/origin.html#policy-container-embedder-policy).
4. If `ownerPolicy`'s [report-only value](https://html.spec.whatwg.org/multipage/origin.html#embedder-policy-report-only-value) is [compatible with cross-origin isolation](https://html.spec.whatwg.org/multipage/origin.html#compatible-with-cross-origin-isolation) and `policy`'s [value](https://html.spec.whatwg.org/multipage/origin.html#embedder-policy-value-2) is not, then [queue a cross-origin embedder policy inheritance violation](https://html.spec.whatwg.org/multipage/origin.html#queue-a-cross-origin-embedder-policy-inheritance-violation) with `response`, "`worker initialization`", `owner's policy`'s [report only reporting endpoint](https://html.spec.whatwg.org/multipage/origin.html#embedder-policy-report-only-reporting-endpoint), "`reporting`", and `owner`.
5. If `ownerPolicy`'s [value](https://html.spec.whatwg.org/multipage/origin.html#embedder-policy-value-2) is not [compatible with cross-origin isolation](https://html.spec.whatwg.org/multipage/origin.html#compatible-with-cross-origin-isolation) or `policy`'s [value](https://html.spec.whatwg.org/multipage/origin.html#embedder-policy-value-2) is [compatible with cross-origin isolation](https://html.spec.whatwg.org/multipage/origin.html#compatible-with-cross-origin-isolation), then return true.
6. [Queue a cross-origin embedder policy inheritance violation](https://html.spec.whatwg.org/multipage/origin.html#queue-a-cross-origin-embedder-policy-inheritance-violation) with `response`, "`worker initialization`", `owner's policy`'s [reporting endpoint](https://html.spec.whatwg.org/multipage/origin.html#embedder-policy-reporting-endpoint), "`enforce`", and `owner`.
7. Return false.

To queue a cross-origin embedder policy inheritance violation given a [response](https://fetch.spec.whatwg.org/#concept-response) `response`, a string `type`, a string `endpoint`, a string `disposition`, and an [environment settings object](https://html.spec.whatwg.org/multipage/webappapis.html#environment-settings-object) `settings`:

1. Let `serialized` be the result of [serializing a response URL for reporting](https://fetch.spec.whatwg.org/#serialize-a-response-url-for-reporting) with `response`.
2. Let `body` be a new object containing the following properties:

   | key         | value         |
   | ----------- | ------------- |
   | type        | `type`        |
   | blockedURL  | `serialized`  |
   | disposition | `disposition` |
3. [Queue](https://w3c.github.io/reporting/#queue-report) `body` as the ["`coep`" report type](https://html.spec.whatwg.org/multipage/origin.html#coep-report-type) for `endpoint` on `settings`.

### 7.9 Policy containers[](https://html.spec.whatwg.org/multipage/origin.html#policy-containers)

A policy container is a [struct](https://infra.spec.whatwg.org/#struct) containing policies that apply to a `Document`, a `WorkerGlobalScope`, or a `WorkletGlobalScope`. It has the following [items](https://infra.spec.whatwg.org/#struct-item):

* A CSP list, which is a [CSP list](https://w3c.github.io/webappsec-csp/#csp-list). It is initially empty.
* An embedder policy, which is an [embedder policy](https://html.spec.whatwg.org/multipage/origin.html#embedder-policy). It is initially a new [embedder policy](https://html.spec.whatwg.org/multipage/origin.html#embedder-policy).
* A referrer policy, which is a [referrer policy](https://w3c.github.io/webappsec-referrer-policy/#referrer-policy). It is initially the [default referrer policy](https://w3c.github.io/webappsec-referrer-policy/#default-referrer-policy).

Move other policies into the policy container.

To clone a policy container given a [policy container](https://html.spec.whatwg.org/multipage/origin.html#policy-container) `policyContainer`:

1. Let `clone` be a new [policy container](https://html.spec.whatwg.org/multipage/origin.html#policy-container).
2. [For each](https://infra.spec.whatwg.org/#list-iterate) `policy` in `policyContainer`'s [CSP list](https://html.spec.whatwg.org/multipage/origin.html#policy-container-csp-list), [append](https://infra.spec.whatwg.org/#list-append) a copy of `policy` into `clone`'s [CSP list](https://html.spec.whatwg.org/multipage/origin.html#policy-container-csp-list).
3. Set `clone`'s [embedder policy](https://html.spec.whatwg.org/multipage/origin.html#policy-container-embedder-policy) to a copy of `policyContainer`'s [embedder policy](https://html.spec.whatwg.org/multipage/origin.html#policy-container-embedder-policy).
4. Set `clone`'s [referrer policy](https://html.spec.whatwg.org/multipage/origin.html#policy-container-referrer-policy) to `policyContainer`'s [referrer policy](https://html.spec.whatwg.org/multipage/origin.html#policy-container-referrer-policy).
5. Return `clone`.

To determine whether a [URL](https://url.spec.whatwg.org/#concept-url) `url` requires storing the policy container in history:

1. If `url`'s [scheme](https://url.spec.whatwg.org/#concept-url-scheme) is "`blob`", then return false.
2. If `url` [is local](https://fetch.spec.whatwg.org/#is-local), then return true.
3. Return false.

To create a policy container from a fetch response given a [response](https://fetch.spec.whatwg.org/#concept-response) `response` and an [environment](https://html.spec.whatwg.org/multipage/webappapis.html#environment)-or-null `environment`:

1. If `response`'s [URL](https://fetch.spec.whatwg.org/#concept-response-url)'s [scheme](https://url.spec.whatwg.org/#concept-url-scheme) is "`blob`", then return a [clone](https://html.spec.whatwg.org/multipage/origin.html#clone-a-policy-container) of `response`'s [URL](https://fetch.spec.whatwg.org/#concept-response-url)'s [blob URL entry](https://url.spec.whatwg.org/#concept-url-blob-entry)'s [environment](https://w3c.github.io/FileAPI/#blob-url-entry-environment)'s [policy container](https://html.spec.whatwg.org/multipage/origin.html#policy-container).
2. Let `result` be a new [policy container](https://html.spec.whatwg.org/multipage/origin.html#policy-container).
3. Set `result`'s [CSP list](https://html.spec.whatwg.org/multipage/origin.html#policy-container-csp-list) to the result of [parsing a response's Content Security Policies](https://w3c.github.io/webappsec-csp/#parse-response-csp) given `response`.
4. If `environment` is non-null, then set `result`'s [embedder policy](https://html.spec.whatwg.org/multipage/origin.html#policy-container-embedder-policy) to the result of [obtaining an embedder policy](https://html.spec.whatwg.org/multipage/origin.html#obtain-an-embedder-policy) given `response` and `environment`. Otherwise, set it to "`unsafe-none`".
5. Set `result`'s [referrer policy](https://html.spec.whatwg.org/multipage/origin.html#policy-container-referrer-policy) to the result of [parsing the `Referrer-Policy` header](https://w3c.github.io/webappsec-referrer-policy/#parse-referrer-policy-from-header) given `response`. \[[REFERRERPOLICY]](https://html.spec.whatwg.org/multipage/references.html#refsREFERRERPOLICY)
6. Return `result`.

To determine navigation params policy container given a [URL](https://url.spec.whatwg.org/#concept-url) `responseURL` and four [policy container](https://html.spec.whatwg.org/multipage/origin.html#policy-container)-or-nulls `historyPolicyContainer`, `initiatorPolicyContainer`, `parentPolicyContainer`, and `responsePolicyContainer`:

1. If `historyPolicyContainer` is not null, then:

   1. Assert: `responseURL` [requires storing the policy container in history](https://html.spec.whatwg.org/multipage/origin.html#requires-storing-the-policy-container-in-history).
   2. Return a [clone](https://html.spec.whatwg.org/multipage/origin.html#clone-a-policy-container) of `historyPolicyContainer`.
2. If `responseURL` is `about:srcdoc`, then:

   1. Assert: `parentPolicyContainer` is not null.
   2. Return a [clone](https://html.spec.whatwg.org/multipage/origin.html#clone-a-policy-container) of `parentPolicyContainer`.
3. If `responseURL` [is local](https://fetch.spec.whatwg.org/#is-local) and `initiatorPolicyContainer` is not null, then return a [clone](https://html.spec.whatwg.org/multipage/origin.html#clone-a-policy-container) of `initiatorPolicyContainer`.
4. If `responsePolicyContainer` is not null, then return `responsePolicyContainer`.
5. Return a new [policy container](https://html.spec.whatwg.org/multipage/origin.html#policy-container).

To initialize a worker global scope's policy container given a `WorkerGlobalScope` `workerGlobalScope`, a [response](https://fetch.spec.whatwg.org/#concept-response) `response`, and an [environment](https://html.spec.whatwg.org/multipage/webappapis.html#environment) `environment`:

1. If `workerGlobalScope`'s [url](https://html.spec.whatwg.org/multipage/workers.html#concept-workerglobalscope-url) [is local](https://fetch.spec.whatwg.org/#is-local) but its [scheme](https://url.spec.whatwg.org/#concept-url-scheme) is not "`blob`":

   1. Assert: `workerGlobalScope`'s [owner set](https://html.spec.whatwg.org/multipage/workers.html#concept-WorkerGlobalScope-owner-set)'s [size](https://infra.spec.whatwg.org/#list-size) is 1.
   2. Set `workerGlobalScope`'s [policy container](https://html.spec.whatwg.org/multipage/workers.html#concept-workerglobalscope-policy-container) to a [clone](https://html.spec.whatwg.org/multipage/origin.html#clone-a-policy-container) of `workerGlobalScope`'s [owner set](https://html.spec.whatwg.org/multipage/workers.html#concept-WorkerGlobalScope-owner-set)\[0]'s [relevant settings object](https://html.spec.whatwg.org/multipage/webappapis.html#relevant-settings-object)'s [policy container](https://html.spec.whatwg.org/multipage/webappapis.html#concept-settings-object-policy-container).
2. Otherwise, set `workerGlobalScope`'s [policy container](https://html.spec.whatwg.org/multipage/workers.html#concept-workerglobalscope-policy-container) to the result of [creating a policy container from a fetch response](https://html.spec.whatwg.org/multipage/origin.html#creating-a-policy-container-from-a-fetch-response) given `response` and `environment`.

<!--EndFragment-->