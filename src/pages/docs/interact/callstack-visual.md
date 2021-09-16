---
title: Callstack Visualizer
weight: 0
excerpt: Callstack Visualizer
seo:
  title: ''
  description: ''
  robots: []
  extra: []
template: docs
---
## Callstack Visualizer


<iframe src="https://visualize-callstack-qdvyu8oyc-visualize42.vercel.app/" height="900px" width="100%">
</iframe>

###### About the Call Stack

**TL;DR** *The **Call Stack** tracks function calls. It is a LIFO stack of frames. Each frame represents a function call.*

* * * * *

The **Call Stack** is a fundamental part of the JavaScript language. It is a record-keeping structure that allows us to perform function calls. Each function call is represented as a frame on the **Call Stack**. This is how the JavaScript engine keeps track of which functions have been called and in what order. The JS engine uses this information to ensure execution picks back up in the right spot after a function returns.

When a JavaScript program first starts executing, the **Call Stack** is empty. When the first function call is made, a new frame is pushed onto the top of the **Call Stack**. When that function returns, its frame is popped off of the **Call Stack**.