---
title: ALPN
weight: 0
excerpt:
seo:
    title: 'ALPN'
    description: 'ALPN  Draft  Glossary  NeedsContent  TLS'
    robots: []
    extra: []
    type: stackbit_page_meta
template: docs
---

# **Application-Layer Protocol"Negotiation** (**ALPN**) is a TLS"extension which indicates what application layer protocol is negotiating the encrypted connection without requiring additional round trips.

| Protocol                   | Identification sequence                                |
| -------------------------- | ------------------------------------------------------ |
| HTTP" /1.1                 | `0x68 0x74 0x74 0x70 0x2F 0x31 0x2E 0x31` ("http/1.1") |
| HTTP 2", "HTTP/2"          | `0x68 0x32` ("h2")                                     |
| HTTP/2 over cleartext TCP" | `0x68 0x32 0x63` ("h2c")                               |

## Specifications

| Specification | Status   | Notes               |
| ------------- | -------- | ------------------- |
| {{RFC(7301    | IETF RFC | Initial definition. |

## See also

-   [IANA registered ALPN identifiers](https://www.iana.org/assignments/tls-extensiontype-values/tls-extensiontype-values.xhtml#alpn-protocol-ids)
