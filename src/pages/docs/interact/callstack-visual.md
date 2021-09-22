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

---

The **Call Stack** is a fundamental part of the JavaScript language. It is a record-keeping structure that allows us to perform function calls. Each function call is represented as a frame on the **Call Stack**. This is how the JavaScript engine keeps track of which functions have been called and in what order. The JS engine uses this information to ensure execution picks back up in the right spot after a function returns.

When a JavaScript program first starts executing, the **Call Stack** is empty. When the first function call is made, a new frame is pushed onto the top of the **Call Stack**. When that function returns, its frame is popped off of the **Call Stack**.

###### About the Event Loop

**TL;DR** *The **Event Loop** processes Tasks and Microtasks. It places them into the Call Stack for execution one at a time. It also controls when rerendering occurs.*

---

The Event Loop is a looping algorithm that processes the Tasks/Microtasks in the Task Queue and Microtask Queue. It handles selecting the next Task/Microtask to be run and placing it in the Call Stack for execution.

The Event Loop algorithm consists of four key steps:

1.  **Evaluate Script:** Synchronously execute the script as though it were a function body. Run until the Call Stack is empty.
2.  **Run a Task:** Select the oldest Task from the Task Queue. Run it until the Call Stack is empty.
3.  **Run all Microtasks:** Select the oldest Microtask from the Microtask Queue. Run it until the Call Stack is empty. Repeat until the Microtask Queue is empty.
4.  **Rerender the UI:** Rerender the UI. Then, return to step 2. (This step only applies to browsers, not NodeJS).

Let's model the Event Loop with some JavaScript psuedocode:

```
while (EventLoop.waitForTask()) {
  const taskQueue = EventLoop.selectTaskQueue();
  if (taskQueue.hasNextTask()) {
    taskQueue.processNextTask();
  }

  const microtaskQueue = EventLoop.microTaskQueue;
  while (microtaskQueue.hasNextMicrotask()) {
    microtaskQueue.processNextMicrotask();
  }

  rerender();
}
```
