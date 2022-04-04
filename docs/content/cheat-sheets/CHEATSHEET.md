# Vanilla JS

> Global object: properties

```js
Object.length(obj);
```

> length is a property of a function object, and indicates how many arguments the function expects, i.e. the number of formal parameters. This number does not include the rest parameter. Has a value of 1.

```js
Object.prototype;
```

> Represents the Object prototype object and allows to add new properties and methods to all objects of type Object.
> Methods of the Object constructor

```js
Object.assign(target, ...sources);
```

> Copies the values of all enumerable own properties from one or more source objects to a target object. method is used to copy the values of all enumerable own properties from one or more source objects to a target object. It will return the target object

```js
Object.create(MyObject);
```

> Creates a new object with the specified prototype object and properties. The object which should be the prototype of the newly-created object.

```js
Object.defineProperty(obj, prop, descriptor);
```

> Adds the named property described by a given descriptor to an object.

```js
Object.defineProperties(obj, props);
```

> Adds the named properties described by the given descriptors to an object.

```js
Object.entries(obj);
```

> Returns an array containing all of the [key, value] pairs of a given object's own enumerable string properties.

```js
Object.freeze(obj);
```

> Freezes an object: other code can't delete or change any properties.

```js
Object.getOwnPropertyDescriptor(obj, prop);
```

> Returns a property descriptor for a named property on an object.

```js
Object.getOwnPropertyDescriptors(obj);
```

> Returns an object containing all own property descriptors for an object.

```js
Object.getOwnPropertyNames(obj);
```

> Returns an array containing the names of all of the given object's own enumerable and non-enumerable properties.

```js
Object.getOwnPropertySymbols(obj);
```

> Returns an array of all symbol properties found directly upon a given object.

```js
Object.getPrototypeOf(obj);
```

> Returns the prototype of the specified object.

```js
Object.is(value1, value2);
```

> Compares if two values are the same value. Equates all NaN values (which differs from both Abstract Equality Comparison and Strict Equality Comparison).

```js
Object.isExtensible(obj);
```

> Determines if extending of an object is allowed.

```js
Object.isFrozen(obj);
```

> Determines if an object was frozen.

```js
Object.isSealed(obj);
```

> Determines if an object is sealed.

```js
Object.keys(obj);
```

> Returns an array containing the names of all of the given object's own enumerable string properties.

```js
Object.preventExtensions(obj);
```

> Prevents any extensions of an object.

```js
Object.seal(obj);
```

> Prevents other code from deleting properties of an object.

```js
Object.setPrototypeOf(obj, prototype);
```

> Sets the prototype (i.e., the internal [[Prototype]] property).

```js
Object.values(obj);
```

> Returns an array containing the values that correspond to all of a given object's own enumerable string properties.
> Object instances and Object prototype object (Object.prototype.property or Object.prototype.method())
> Properties

```js
obj.constructor;
```

> Specifies the function that creates an object's prototype.

```js
obj.__proto__;
```

> Points to the object which was used as prototype when the object was instantiated.
> Methods

```js
obj.hasOwnProperty(prop);
```

> Returns a boolean indicating whether an object contains the specified property as a direct property of that object and not inherited through the prototype chain.

```js
prototypeObj.isPrototypeOf(object);
```

> Returns a boolean indicating whether the object this method is called upon is in the prototype chain of the specified object.

```js
obj.propertyIsEnumerable(prop);
```

> Returns a boolean indicating if the internal ECMAScript [[Enumerable]] attribute is set.

```js
obj.toLocaleString();
```

> Calls toString().

```js
obj.toString();
```

> Returns a string representation of the object.

```js
object.valueOf();
```

> Returns the primitive value of the specified object.

## Global object: properties

```js
Array.length;
```

> Reflects the number of elements in an array.

```js
Array.prototype;
```

> Represents the prototype for the Array constructor and allows to add new properties and methods to all Array objects.

## Global object: methods

```js
Array.from(arrayLike[, mapFn[, thisArg]])

```

> Creates a new Array instance from an array-like or iterable object.

```js
Array.isArray(obj);
```

> Returns true if a variable is an array, if not false.

```js

Array.of(element0[, element1[, ...[, elementN]]]);

```

> Creates a new Array instance with a variable number of arguments, regardless of number or type of the arguments.
> Instance: properties

```js
arr.length;
```

> Reflects the number of elements in an array.
> Instance: mutator methods

```js
arr.copyWithin(target, start, end);
```

> Copies a sequence of array elements within the array.

```js
arr.fill(value, start, end);
```

> Fills all the elements of an array from a start index to an end index with a static value.

```js
arr.pop();
```

> Removes the last element from an array and returns that element.

```js

arr.push([element1[, ...[, elementN]]])

```

> Adds one or more elements to the end of an array and returns the new length of the array.

```js
arr.reverse();
```

> Reverses the order of the elements of an array in place — the first becomes the last, and the last becomes the first.

```js
arr.shift();
```

> Removes the first element from an array and returns that element.

```js
arr.sort();
```

> Sorts the elements of an array in place and returns the array.

```js

array.splice(start, deleteCount, item1, item2, ...)

```

> Adds and/or removes elements from an array.

```js

arr.unshift([element1[, ...[, elementN]]])

```

> Adds one or more elements to the front of an array and returns the new length of the array.
> Instance: accessor methods

```js

arr.concat(value1[, value2[, ...[, valueN]]])

```

> Returns a new array comprised of this array joined with other array(s) and/or value(s).

```js
arr.includes(searchElement, fromIndex);
```

> Determines whether an array contains a certain element, returning true or false as appropriate.

```js

arr.indexOf(searchElement[, fromIndex])

```

> Returns the first (least) index of an element within the array equal to the specified value, or -1 if none is found.

```js
arr.join(separator);
```

> Joins all elements of an array into a string.

```js
arr.lastIndexOf(searchElement, fromIndex);
```

> Returns the last (greatest) index of an element within the array equal to the specified value, or -1 if none is found.

```js
arr.slice(begin, end);
```

> Extracts a section of an array and returns a new array.

```js
arr.toString();
```

> Returns a string representing the array and its elements. Overrides the Object.prototype.toString() method.

```js
arr.toLocaleString(locales, options);
```

> Returns a localized string representing the array and its elements. Overrides the Object.prototype.toLocaleString() method.
> Instance: iteration methods

```js
arr.entries();
```

> Returns a new Array Iterator object that contains the key/value pairs for each index in the array.

```js

arr.every(callback[, thisArg])

```

> Returns true if every element in this array satisfies the provided testing function.

```js

arr.filter(callback[, thisArg])

```

> Creates a new array with all of the elements of this array for which the provided filtering function returns true.

```js

arr.find(callback[, thisArg])

```

> Returns the found value in the array, if an element in the array satisfies the provided testing function or undefined if not found.

```js

arr.findIndex(callback[, thisArg])

```

> Returns the found index in the array, if an element in the array satisfies the provided testing function or -1 if not found.

```js

arr.forEach(callback[, thisArg])

```

> Calls a function for each element in the array.

```js
arr.keys();
```

> Returns a new Array Iterator that contains the keys for each index in the array.

```js

arr.map(callback[, initialValue])

```

> Creates a new array with the results of calling a provided function on every element in this array.

```js

arr.reduce(callback[, initialValue])

```

> Apply a function against an accumulator and each value of the array (from left-to-right) as to reduce it to a single value.

```js

arr.reduceRight(callback[, initialValue])

```

> Apply a function against an accumulator and each value of the array (from right-to-left) as to reduce it to a single value.

```js

arr.some(callback[, initialValue])

```

> Returns true if at least one element in this array satisfies the provided testing function.

```js
arr.values();
```

> Returns a new Array Iterator object that contains the values for each index in the array.

---

# NodeJS

---

```js
let http = require('http');
```

> An example of a web server written with Node which responds with 'Hello World'.
> To run the server, put the code into a file called example.js and execute it with the node program.

```js
http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end('Hello World\n');
}).listen(8124);
console.log('Server running at http://127.0.0.1:8124/');
```

## GLOBAL OBJECTS

### In browsers, the top-level scope is the global scope.

> That means that in browsers if you're in the global scope let something will define a global variable.
> In Node this is different. The top-level scope is not the global scope; let something inside a Node module will be local to that module.

```js
__filename;
```

---

> The filename of the code being executed. (absolute path)
> \_\_dirname;

```

>  The name of the directory that the currently executing script resides in. (absolute path)
module;
```

---

> A reference to the current module. In particular module.exports is used for defining what a module exports and makes available through require().

```js
exports;
```

---

> A reference to the module.exports that is shorter to type.

```js
process;
```

---

> The process object is a global object and can be accessed from anywhere. It is an instance of EventEmitter.

```js
Buffer;
```

---

> The Buffer class is a global type for dealing with binary data directly.

```js

console.log([data], [...]);

```

---

> Prints to stdout with newline.

```js

console.info([data], [...]);

```

> Same as console.log.

```js

console.error([data], [...]);
```

---

> Same as console.log but prints to stderr.

```js

console.warn([data], [...]);

```

---

> Same as console.error.

```js
console.dir(obj);
```

> Uses util.inspect on obj and prints resulting string to stdout.

```js
console.time(label);
```

---

> Mark a time.

```js
console.timeEnd(label);
```

> Finish timer, record output.

```js
console.trace(label);
```

---

> Print a stack trace to stderr of the current position.

```js
console.assert(expression, [message]);
```

---

> Same as assert.ok() where if the expression evaluates as false throw an AssertionError with message.

```js

setTimeout(callback, delay, [arg], [...]);

```

> To schedule execution of a one-time callback after delay milliseconds. Optionally you can also pass arguments to the callback.

```js
clearTimeout(t);
```

> Stop a timer that was previously created with setTimeout().

```js

setInterval(callback, delay, [arg], [...]);
```

---

> To schedule the repeated execution of callback every delay milliseconds. Optionally you can also pass arguments to the callback.

```js
clearInterval(t);
```

> Stop a timer that was previously created with setInterval().

```js

setImmediate(callback, [arg], [...]);

```

> To schedule the "immediate" execution of callback after I/O events callbacks and before setTimeout and setInterval.

```js
clearImmediate(immediateObject);
```

> Stop a timer that was previously created with setImmediate().

```js
unref();
```

> Allow you to create a timer that is active but if it is the only item left in the event loop, node won't keep the program running.

```js
ref();
```

```

>  If you had previously unref()d a timer you can call ref() to explicitly request the timer hold the program open.
let module = require('./module.js');

```

> Loads the module module.js in the same directory.

```js
module.require('./another_module.js');
```

---

> load another_module as if require() was called from the module itself.

```js
module.id;
```

> The identifier for the module. Typically this is the fully resolved filename.

```js
module.filename;
```

---

> The fully resolved filename to the module.

```js
module.loaded;
```

````

>  Whether or not the module is done loading, or is in the process of loading.

```js

module.parent;

````

````

>  The module that required this one.

```js

module.children;
````

---

> The module objects required by this one.

```js
exports.area = function (r) {
    return Math.PI * r * r;
};
```

> If you want the root of your module's export to be a function (such as a constructor)
> or if you want to export a complete object in one assignment instead of building it one property at a time,
> assign it to module.exports instead of exports.

```js

module.exports = function(width) {
return {
  area: function() {
    return width * width;
  }
};
}
//**************
 // * PROCESS
 * http://nodejs.org/api/process.html
*/
> ---------------------------------------------------------------------------\\
process.on('exit', function(code) {});

```

> Emitted when the process is about to exit
> process.on('uncaughtException', function(err) {});

```
---
>  Emitted when an exception bubbles all the way back to the event loop. (should not be used)
process.stdout;

```

> A writable stream to stdout.

```js
process.stderr;
```

> A writable stream to stderr.

```js
process.stdin;
```

---

> A readable stream for stdin.

````js

process.argv;
>  An array containing the command line arguments.

```js

process.env;

````

> An object containing the user environment.

```js
process.execPath;
```

> This is the absolute pathname of the executable that started the process.

```js
process.execArgv;
```

> This is the set of node-specific command line options from the executable that started the process.

````js

process.arch;
>  What processor architecture you're running on: 'arm', 'ia32', or 'x64'.

```js

process.config;

````

> An Object containing the JavaScript representation of the configure options that were used to compile the current node executable.

```js
process.pid;
```

> The PID of the process.

```js
process.platform;
```

> What platform you're running on: 'darwin', 'freebsd', 'linux', 'sunos' or 'win32'.

```js
process.title;
```

---

> Getter/setter to set what is displayed in 'ps'.

```js
process.version;
```

> A compiled-in property t
> hat exposes NODE_VERSION.

```js
process.versions;
```

> A property exposing version strings of node and its dependencies.

```js

> process.abort();

```

> This causes node to emit an abort. This will cause node to exit and generate a core file.

````js

process.chdir(dir);
>  Changes the current working directory of the process or throws an exception if that fails.

```js

process.cwd();
````

---

> Returns the current working directory of the process.
> ?process.exit([code]);  
>  Ends the process with the specified code. If omitted, exit uses the 'success' code 0.

```js
process.getgid();
```

> Gets the group identity of the process.

````js

process.setgid(id);
>  Sets the group identity of the process.

```js

process.getuid();

````

> Gets the user identity of the process.

````js

process.setuid(id);
>  Sets the user identity of the process.

```js

process.getgroups();
````

---

> Returns an array with the supplementary group IDs.

```js
process.setgroups(grps);
```

---

> Sets the supplementary group IDs.

```js
process.initgroups(user, extra_grp);
```

---

> Reads /etc/group and initializes the group access list, using all groups of which the user is a member.

```js
process.kill(pid, [signal]);
```

> Send a signal to a process. pid is the process id and signal is the string describing the signal to send.

```js
process.memoryUsage();
```

> Returns an object describing the memory usage of the Node process measured in bytes.

```js
process.nextTick(callback);
```

> On the next loop around the event loop call this callback.

````js

process.maxTickDepth;
>  Callbacks passed to process.nextTick will usually be called at the end of the current flow of execution, and are thus approximately as fast as calling a function synchronously.

```js

process.umask([mask]);

````

> Sets or reads the process's file mode creation mask.

```js
process.uptime();
```

> Number of seconds Node has been running.

```js
process.hrtime();
```

> Returns the current high-resolution real time in a [seconds, nanoseconds] tuple Array.

````js

//**************
 // * CHILD PROCESS
 * http://nodejs.org/api/child_process.html
*/
> ---------------------------------------------------------------------------\\
>  Node provides a tri-directional popen facility through the child_process module.
 > It is possible to stream data through a child's stdin, stdout, and stderr in a fully non-blocking way.

```js

ChildProcess;
>  Class. ChildProcess is an EventEmitter.

```js

child.stdin;
>  A Writable Stream that represents the child process's stdin
child.stdout;
>  A Readable Stream that represents the child process's stdout
child.stderr;
>  A Readable Stream that represents the child process's stderr.

```js

child.pid;
>  The PID of the child process
child.connected;
>  If .connected is false, it is no longer possible to send messages
child.kill([signal]);

````

> Send a signal to the child process
> child.send(message, [sendHandle]);

````

>  When using child_process.fork() you can write to the child using child.send(message, [sendHandle]) and messages are received by a 'message' event on the child.

```js

child.disconnect();

````

> Close the IPC channel between parent and child, allowing the child to exit gracefully once there are no other connections keeping it alive.

```js
child_process.spawn(command, [args], [options]);
```

> Launches a new process with the given command, with command line arguments in args. If omitted, args defaults to an empty Array.

````js

child_process.exec(command, [options], callback);
>  Runs a command in a shell and buffers the output.

```js

child_process.execFile(file, [args], [options], [callback]);
````

---

> Runs a command in a shell and buffers the output.

```js
child_process.fork(modulePath, [args], [options]);
```

---

> This is a special case of the spawn() functionality for spawning Node processes. In addition to having all the methods in a normal ChildProcess instance, the returned object has a communication channel built-in.

````js

//**************
 // * UTIL
 * http://nodejs.org/api/util.html
*/
> ---------------------------------------------------------------------------\\
>  These functions are in the module 'util'. Use require('util') to access them.

```js

util.format(format, [...]);

````

> Returns a formatted string using the first argument as a printf-like format. (%s, %d, %j)
> util.debug(string);

````
---
>  A synchronous output function. Will block the process and output string immediately to stderr.

```js

util.error([...]);

````

> Same as util.debug() except this will output all arguments immediately to stderr.

```js

util.puts([...]);

```

> A synchronous output function. Will block the process and output all arguments to stdout with newlines after each argument.

```js

util.print([...]);

```

> A synchronous output function. Will block the process, cast each argument to a string then output to stdout. (no newlines)
> util.log(string);

````

>  Output with timestamp on stdout.

```js

util.inspect(object, [opts]);
````

---

> Return a string representation of object, which is useful for debugging. (options: showHidden, depth, colors, customInspect)
> util.isArray(object);

````

>   Returns true if the given "object" is an Array. false otherwise.

```js

util.isRegExp(object);

````

> Returns true if the given "object" is a RegExp. false otherwise.

```js
util.isDate(object);
```

> Returns true if the given "object" is a Date. false otherwise.

```js
util.isError(object);
```

> Returns true if the given "object" is an Error. false otherwise.

````js

util.promisify(fn)
>  Takes a function whose last argument is a callback and returns a version that returns promises.

```js

util.inherits(constructor, superConstructor);
````

---

> Inherit the prototype methods from one constructor into another.

```js

//**************
 // * EVENTS
 * http://nodejs.org/api/events.html
*/
> ---------------------------------------------------------------------------\\
>  All objects which emit events are instances of events.EventEmitter. You can access this module by doing: require("events");

```

> To access the EventEmitter class, require('events').EventEmitter.
> All EventEmitters emit the event 'newListener' when new listeners are added and 'removeListener' when a listener is removed.

```js
emitter.addListener(event, listener);
```

> Adds a listener to the end of the listeners array for the specified event.

````js

emitter.on(event, listener);
>  Same as emitter.addListener().

```js

emitter.once(event, listener);

````

> Adds a one time listener for the event. This listener is invoked only the next time the event is fired, after which it is removed.

````js

emitter.removeListener(event, listener);
>  Remove a listener from the listener array for the specified event.

```js

emitter.removeAllListeners([event]);

````

> Removes all listeners, or those of the specified event.

````js

emitter.setMaxListeners(n);
>  By default EventEmitters will print a warning if more than 10 listeners are added for a particular event.

```js

emitter.listeners(event);
>  Returns an array of listeners for the specified event.

```js

emitter.emit(event, [arg1], [arg2], [...]);
````

---

> Execute each of the listeners in order with the supplied arguments. Returns true if event had listeners, false otherwise.

```js
EventEmitter.listenerCount(emitter, event);
```

---

> Return the number of listeners for a given event.
> A stream is an abstract interface implemented by various objects in Node. For example a request to an HTTP server is a stream, as is stdout.
> Streams are readable, writable, or both. All streams are instances of EventEmitter.
> The Readable stream interface is the abstraction for a source of data that you are reading from.
> In other words, data comes out of a Readable stream.
> A Readable stream will not start emitting data until you indicate that you are ready to receive it.
> Examples of readable streams include: http responses on the client, http requests on the server, fs read streams
> zlib streams, crypto streams, tcp sockets, child process stdout and stderr, process.stdin.

```js
let readable = getReadableStreamSomehow();
readable.on('readable', function () {});
```

> When a chunk of data can be read from the stream, it will emit a 'readable' event.

```js
readable.on('data', function (chunk) {});
```

---

> If you attach a data event listener, then it will switch the stream into flowing mode, and data will be passed to your handler as soon as it is available.

```js
readable.on('end', function () {});
```

> This event fires when there will be no more data to read.

```js
readable.on('close', function () {});
```

---

> Emitted when the underlying resource (for example, the backing file descriptor) has been closed. Not all streams will emit this.

```js
readable.on('error', function () {});
```

---

> Emitted if there was an error receiving data.
> The read() method pulls some data out of the internal buffer and returns it. If there is no data available, then it will return null.
> This method should only be called in non-flowing mode. In flowing-mode, this method is called automatically until the internal buffer is drained.

```js
readable.read([size]);
readable.setEncoding(encoding);
```

> Call this function to cause the stream to return strings of the specified encoding instead of Buffer objects.

```js
readable.resume();
```

> This method will cause the readable stream to resume emitting data events.

```js
readable.pause();
```

> This method will cause a stream in flowing-mode to stop emitting data events.

```js
readable.pipe(destination, [options]);
```

> This method pulls all the data out of a readable stream, and writes it to the supplied destination, automatically managing the flow so that the destination is not overwhelmed by a fast readable stream.

```js
readable.unpipe([destination]);
```

> This method will remove the hooks set up for a previous pipe() call. If the destination is not specified, then all pipes are removed.

````js

readable.unshift(chunk);
>  This is useful in certain cases where a stream is being consumed by a parser, which needs to "un-consume" some data that it has optimistically pulled out of the source, so that the stream can be passed on to some other party.
>  The Writable stream interface is an abstraction for a destination that you are writing data to.
 > Examples of writable streams include: http requests on the client, http responses on the server, fs write streams,
>  zlib streams, crypto streams, tcp sockets, child process stdin, process.stdout, process.stderr.

```js

let writer = getWritableStreamSomehow();
writable.write(chunk, [encoding], [callback]);
````

---

> This method writes some data to the underlying system, and calls the supplied callback once the data has been fully handled.

````js

writer.once('drain', write);
>  If a writable.write(chunk) call returns false, then the drain event will indicate when it is appropriate to begin writing more data to the stream.

```js

writable.end([chunk], [encoding], [callback]);
````

---

> Call this method when no more data will be written to the stream.

````js

writer.on('finish', function() {});
>  When the end() method has been called, and all data has been flushed to the underlying system, this event is emitted.

```js

writer.on('pipe', function(src) {});
````

---

> This is emitted whenever the pipe() method is called on a readable stream, adding this writable to its set of destinations.

```js
writer.on('unpipe', function (src) {});
```

> This is emitted whenever the unpipe() method is called on a readable stream, removing this writable from its set of destinations.

```js
writer.on('error', function (src) {});
```

> Emitted if there was an error when writing or piping data.
> Duplex streams are streams that implement both the Readable and Writable interfaces. See above for usage.
> Examples of Duplex streams include: tcp sockets, zlib streams, crypto streams.
> Transform streams are Duplex streams where the output is in some way computed from the input. They implement both the Readable and Writable interfaces. See above for usage.
> Examples of Transform streams include: zlib streams, crypto streams.

````js

//**************
 // * FILE SYSTEM
 * http://nodejs.org/api/fs.html
*/
> ---------------------------------------------------------------------------\\
>  To use this module do require('fs').
 > All the methods have asynchronous and synchronous forms.

```js

fs.rename(oldPath, newPath, callback);
````

---

> Asynchronous rename. No arguments other than a possible exception are given to the completion callback.Asynchronous ftruncate. No arguments other than a possible exception are given to the completion callback.

```js
fs.renameSync(oldPath, newPath);
```

> Synchronous rename.

```js
fs.ftruncate(fd, len, callback);
```

> Asynchronous ftruncate. No arguments other than a possible exception are given to the completion callback.

```js
fs.ftruncateSync(fd, len);
```

> Synchronous ftruncate.

````js

fs.truncate(path, len, callback);
>  Asynchronous truncate. No arguments other than a possible exception are given to the completion callback.

```js

fs.truncateSync(path, len);
>  Synchronous truncate.

```js

fs.chown(path, uid, gid, callback);
>  Asynchronous chown. No arguments other than a possible exception are given to the completion callback.

```js

fs.chownSync(path, uid, gid);

````

> Synchronous chown.

```js
fs.fchown(fd, uid, gid, callback);
```

---

> Asynchronous fchown. No arguments other than a possible exception are given to the completion callback.

```js
fs.fchownSync(fd, uid, gid);
```

---

> Synchronous fchown.

```js
fs.lchown(path, uid, gid, callback);
```

> Asynchronous lchown. No arguments other than a possible exception are given to the completion callback.

```js
fs.lchownSync(path, uid, gid);
```

> Synchronous lchown.

```js
fs.chmod(path, mode, callback);
```

> Asynchronous chmod. No arguments other than a possible exception are given to the completion callback.

```js
fs.chmodSync(path, mode);
```

> Synchronous chmod.

```js
fs.fchmod(fd, mode, callback);
```

> Asynchronous fchmod. No arguments other than a possible exception are given to the completion callback.

```js
fs.fchmodSync(fd, mode);
```

> Synchronous fchmod.

```js
fs.lchmod(path, mode, callback);
```

> Asynchronous lchmod. No arguments other than a possible exception are given to the completion callback.

```js
fs.lchmodSync(path, mode);
```

> Synchronous lchmod.

```js
fs.stat(path, callback);
```

> Asynchronous stat. The callback gets two arguments (err, stats) where stats is a fs.Stats object.

```js
fs.statSync(path);
```

> Synchronous stat. Returns an instance of fs.Stats.

```js
fs.lstat(path, callback);
```

> Asynchronous lstat. The callback gets two arguments (err, stats) where stats is a fs.Stats object. lstat() is identical to stat(), except that if path is a symbolic link, then the link itself is stat-ed, not the file that it refers to.

```js
fs.lstatSync(path);
```

> Synchronous lstat. Returns an instance of fs.Stats.

````js

fs.fstat(fd, callback);
>  Asynchronous fstat. The callback gets two arguments (err, stats) where stats is a fs.Stats object. fstat() is identical to stat(), except that the file to be stat-ed is specified by the file descriptor fd.

```js

fs.fstatSync(fd);
````

---

> Synchronous fstat. Returns an instance of fs.Stats.

````js

fs.link(srcpath, dstpath, callback);
>  Asynchronous link. No arguments other than a possible exception are given to the completion callback.

```js

fs.linkSync(srcpath, dstpath);

````

> Synchronous link.

```js
fs.symlink(srcpath, dstpath, [type], callback);
```

---

> Asynchronous symlink. No arguments other than a possible exception are given to the completion callback. The type argument can be set to 'dir', 'file', or 'junction' (default is 'file') and is only available on Windows (ignored on other platforms)

```js
fs.symlinkSync(srcpath, dstpath, [type]);
```

> Synchronous symlink.

```js
fs.readlink(path, callback);
```

> Asynchronous readlink. The callback gets two arguments (err, linkString).

```js
fs.readlinkSync(path);
```

---

> Synchronous readlink. Returns the symbolic link's string value.

```js
fs.unlink(path, callback);
```

---

> Asynchronous unlink. No arguments other than a possible exception are given to the completion callback.

````js

fs.unlinkSync(path);
>  Synchronous unlink.

```js

fs.realpath(path, [cache], callback);
>  Asynchronous realpath. The callback gets two arguments (err, resolvedPath).

```js

fs.realpathSync(path, [cache]);

````

> Synchronous realpath. Returns the resolved path.

````js

fs.rmdir(path, callback);
>  Asynchronous rmdir. No arguments other than a possible exception are given to the completion callback.

```js

fs.rmdirSync(path);
````

---

> Synchronous rmdir.

```js
fs.mkdir(path, [mode], callback);
```

> Asynchronous mkdir. No arguments other than a possible exception are given to the completion callback. mode defaults to 0777.

```js
fs.mkdirSync(path, [mode]);
```

> Synchronous mkdir.

```js
fs.readdir(path, callback);
```

> Asynchronous readdir. Reads the contents of a directory. The callback gets two arguments (err, files) where files is an array of the names of the files in the directory excluding '.' and '..'.

```js
fs.readdirSync(path);
```

> Synchronous readdir. Returns an array of filenames excluding '.' and '..'.

```js
fs.close(fd, callback);
```

> Asynchronous close. No arguments other than a possible exception are given to the completion callback.

```js
fs.closeSync(fd);
```

> Synchronous close.

```js
fs.open(path, flags, [mode], callback);
```

> Asynchronous file open.

```js
fs.openSync(path, flags, [mode]);
```

> Synchronous version of fs.open().

```js
fs.utimes(path, atime, mtime, callback);
```

---

> Change file timestamps of the file referenced by the supplied path.

```js
fs.utimesSync(path, atime, mtime);
```

> Synchronous version of fs.utimes().

```js
fs.futimes(fd, atime, mtime, callback);
```

> Change the file timestamps of a file referenced by the supplied file descriptor.

```js
fs.futimesSync(fd, atime, mtime);
```

> Synchronous version of fs.futimes().

```js
fs.fsync(fd, callback);
```

> Asynchronous fsync. No arguments other than a possible exception are given to the completion callback.

```js
fs.fsyncSync(fd);
```

> Synchronous fsync.

```js
fs.write(fd, buffer, offset, length, position, callback);
```

---

> Write buffer to the file specified by fd.

```js
fs.writeSync(fd, buffer, offset, length, position);
```

> Synchronous version of fs.write(). Returns the number of bytes written.

```js
fs.read(fd, buffer, offset, length, position, callback);
```

> Read data from the file specified by fd.

```js
fs.readSync(fd, buffer, offset, length, position);
```

> Synchronous version of fs.read. Returns the number of bytesRead.

```js
fs.readFile(filename, [options], callback);
```

> Asynchronously reads the entire contents of a file.

```js
fs.readFileSync(filename, [options]);
```

> Synchronous version of fs.readFile. Returns the contents of the filename. If the encoding option is specified then this function returns a string. Otherwise it returns a buffer.

```js
fs.writeFile(filename, data, [options], callback);
```

> Asynchronously writes data to a file, replacing the file if it already exists. data can be a string or a buffer.

```js
fs.writeFileSync(filename, data, [options]);
```

> The synchronous version of fs.writeFile.

```js
fs.appendFile(filename, data, [options], callback);
```

---

> Asynchronously append data to a file, creating the file if it not yet exists. data can be a string or a buffer.

```js
fs.appendFileSync(filename, data, [options]);
```

> The synchronous version of fs.appendFile.

```js
fs.watch(filename, [options], [listener]);
```

> Watch for changes on filename, where filename is either a file or a directory. The returned object is a fs.FSWatcher. The listener callback gets two arguments (event, filename). event is either 'rename' or 'change', and filename is the name of the file which triggered the event.

```js
fs.exists(path, callback);
```

---

> Test whether or not the given path exists by checking with the file system. Then call the callback argument with either true or false. (should not be used)
> fs.existsSync(path);

````
>  Synchronous version of fs.exists. (should not be used)
>  fs.Stats: objects returned from fs.stat(), fs.lstat() and fs.fstat() and their synchronous counterparts are of this type.

```js

stats.isFile();
stats.isDirectory()
stats.isBlockDevice()
stats.isCharacterDevice()
stats.isSymbolicLink()
>  (only valid with fs.lstat())
stats.isFIFO()
stats.isSocket()
fs.createReadStream(path, [options]);

````

> Returns a new ReadStream object.

```js
fs.createWriteStream(path, [options]);
```

---

> Returns a new WriteStream object.
> Use require('path') to use this module.
> This module contains utilities for handling and transforming file paths.
> Almost all these methods perform only string transformations.
> The file system is not consulted to check whether paths are valid.

````js

path.normalize(p);
>  Normalize a string path, taking care of '..' and '.' parts.

```js

path.join([path1], [path2], [...]);

````

> Join all arguments together and normalize the resulting path.

```js

path.resolve([from ...], to);

```

> Resolves 'to' to an absolute path.

```js
path.relative(from, to);
```

> Solve the relative path from 'from' to 'to'.

````js

path.dirname(p);
>  Return the directory name of a path. Similar to the Unix dirname command.

```js

path.basename(p, [ext]);

````

> Return the last portion of a path. Similar to the Unix basename command.

```js
path.extname(p);
```

---

> Return the extension of the path, from the last '.' to end of string in the last portion of the path.

```js
path.sep;
```

---

> The platform-specific file separator. '\\' or '/'.

```js
path.delimiter;
```

---

> The platform-specific path delimiter, ';' or ':'.
> To use the HTTP server and client one must require('http').

```js
http.STATUS_CODES;
```

> A collection of all the standard HTTP response status codes, and the short description of each.

```js
http.request(options, [callback]);
```

````
---
>  This function allows one to transparently issue requests.

```js

http.get(options, [callback]);

````

> Set the method to GET and calls req.end() automatically.

```js
server = http.createServer([requestListener]);
```

---

> Returns a new web server object. The requestListener is a function which is automatically added to the 'request' event.

```js
server.listen(port, [hostname], [backlog], [callback]);
```

> Begin accepting connections on the specified port and hostname.

```js
server.listen(path, [callback]);
```

> Start a UNIX socket server listening for connections on the given path.

```js
server.listen(handle, [callback]);
```

> The handle object can be set to either a server or socket (anything with an underlying \_handle member), or a {fd: <n>} object.

```js
server.close([callback]);
```

> Stops the server from accepting new connections.

````js

server.setTimeout(msecs, callback);
>  Sets the timeout value for sockets, and emits a 'timeout' event on the Server object, passing the socket as an argument, if a timeout occurs.

```js

server.maxHeadersCount;
````

---

> Limits maximum incoming headers count, equal to 1000 by default. If set to 0 - no limit will be applied.

```js
server.timeout;
```

> The number of milliseconds of inactivity before a socket is presumed to have timed out.

```js
server.on('request', function (request, response) {});
```

> Emitted each time there is a request.

```js
server.on('connection', function (socket) {});
```

> When a new TCP stream is established.

```js
server.on('close', function () {});
```

---

> Emitted when the server closes.

```js
server.on('checkContinue', function (request, response) {});
```

---

> Emitted each time a request with an http Expect: 100-continue is received.

```js
server.on('connect', function (request, socket, head) {});
```

> Emitted each time a client requests a http CONNECT method.

```js
server.on('upgrade', function (request, socket, head) {});
```

> Emitted each time a client requests a http upgrade.

```js
server.on('clientError', function (exception, socket) {});
```

> If a client connection emits an 'error' event - it will forwarded here.

```js
request.write(chunk, [encoding]);
```

> Sends a chunk of the body.

```js
request.end([data], [encoding]);
```

> Finishes sending the request. If any parts of the body are unsent, it will flush them to the stream.

```js
request.abort();
```

> Aborts a request.

```js
request.setTimeout(timeout, [callback]);
```

---

> Once a socket is assigned to this request and is connected socket.setTimeout() will be called.

```js
request.setNoDelay([noDelay]);
```

> Once a socket is assigned to this request and is connected socket.setNoDelay() will be called.

```js
request.setSocketKeepAlive([enable], [initialDelay]);
```

> Once a socket is assigned to this request and is connected socket.setKeepAlive() will be called.

```js
request.on('response', function (response) {});
```

> Emitted when a response is received to this request. This event is emitted only once.

````js

request.on('socket', function(socket) { });
>  Emitted after a socket is assigned to this request.

```js

request.on('connect', function(response, socket, head) { });

````

> Emitted each time a server responds to a request with a CONNECT method. If this event isn't being listened for, clients receiving a CONNECT method will have their connections closed.

```js
request.on('upgrade', function (response, socket, head) {});
```

> Emitted each time a server responds to a request with an upgrade. If this event isn't being listened for, clients receiving an upgrade header will have their connections closed.

```js
request.on('continue', function () {});
```

> Emitted when the server sends a '100 Continue' HTTP response, usually because the request contained 'Expect: 100-continue'. This is an instruction that the client should send the request body.

```js
response.write(chunk, [encoding]);
```

> This sends a chunk of the response body. If this merthod is called and response.writeHead() has not been called, it will switch to implicit header mode and flush the implicit headers.

```js
response.writeContinue();
```

> Sends a HTTP/1.1 100 Continue message to the client, indicating that the request body should be sent.

````js

response.writeHead(statusCode, [reasonPhrase], [headers]);
>  Sends a response header to the request.

```js

response.setTimeout(msecs, callback);
>  Sets the Socket's timeout value to msecs. If a callback is provided, then it is added as a listener on the 'timeout' event on the response object.

```js

response.setHeader(name, value);
>  Sets a single header value for implicit headers. If this header already exists in the to-be-sent headers, its value will be replaced. Use an array of strings here if you need to send multiple headers with the same name.

```js

response.getHeader(name);

````

> Reads out a header that's already been queued but not sent to the client. Note that the name is case insensitive.

```js
response.removeHeader(name);
```

> Removes a header that's queued for implicit sending.

```js
response.addTrailers(headers);
```

> This method adds HTTP trailing headers (a header but at the end of the message) to the response.

```js
response.end([data], [encoding]);
```

> This method signals to the server that all of the response headers and body have been sent; that server should consider this message complete. The method, response.end(), MUST be called on each response.

````js

response.statusCode;
>  When using implicit headers (not calling response.writeHead() explicitly), this property controls the status code that will be sent to the client when the headers get flushed.

```js

response.headersSent;
>  Boolean (read-only). True if headers were sent, false otherwise.

```js

response.sendDate;
>  When true, the Date header will be automatically generated and sent in the response if it is not already present in the headers. Defaults to true.

```js

response.on('close', function () { });
````

---

> Indicates that the underlying connection was terminated before response.end() was called or able to flush.

```js
response.on('finish', function () {});
```

---

> Emitted when the response has been sent.

````js

message.httpVersion;
>  In case of server request, the HTTP version sent by the client. In the case of client response, the HTTP version of the connected-to server.

```js

message.headers;

````

> The request/response headers object.

```js
message.trailers;
```

---

> The request/response trailers object. Only populated after the 'end' event.

```js
message.method;
```

> The request method as a string. Read only. Example: 'GET', 'DELETE'.

````js

message.url;
>  Request URL string. This contains only the URL that is present in the actual HTTP request.

```js

message.statusCode;

````

> The 3-digit HTTP response status code. E.G. 404.

```js
message.socket;
```

> The net.Socket object associated with the connection.

```js
message.setTimeout(msecs, callback);
```

> Calls message.connection.setTimeout(msecs, callback).
> This module has utilities for URL resolution and parsing. Call require('url') to use it.

```js
url.parse(urlStr, [parseQueryString], [slashesDenoteHost]);
```

---

> Take a URL string, and return an object.

```js
url.format(urlObj);
```

> Take a parsed URL object, and return a formatted URL string.

```js
url.resolve(from, to);
```

> Take a base URL, and a href URL, and resolve them as a browser would for an anchor tag.

````js

//**************
 // * QUERY STRING
 * http://nodejs.org/api/querystring.html
*/
> ---------------------------------------------------------------------------\\
>  This module provides utilities for dealing with query strings. Call require('querystring') to use it.

```js

querystring.stringify(obj, [sep], [eq]);

````

> Serialize an object to a query string. Optionally override the default separator ('&') and assignment ('=') characters.

```js
querystring.parse(str, [sep], [eq], [options]);
```

---

> Deserialize a query string to an object. Optionally override the default separator ('&') and assignment ('=') characters.
> This module is used for writing unit tests for your applications, you can access it with require('assert').

```js
assert.fail(actual, expected, message, operator);
```

> Throws an exception that displays the values for actual and expected separated by the provided operator.

```js
assert(value, message);
assert.ok(value, [message]);
```

---

> Tests if value is truthy, it is equivalent to assert.equal(true, !!value, message);

```js
assert.equal(actual, expected, [message]);
```

---

> Tests shallow, coercive equality with the equal comparison operator ( == ).

```js
assert.notEqual(actual, expected, [message]);
```

> Tests shallow, coercive non-equality with the not equal comparison operator ( != ).

```js
assert.deepEqual(actual, expected, [message]);
```

> Tests for deep equality.

```js
assert.notDeepEqual(actual, expected, [message]);
```

> Tests for any deep inequality.

```js
assert.strictEqual(actual, expected, [message]);
```

---

> Tests strict equality, as determined by the strict equality operator ( === )

```js
assert.notStrictEqual(actual, expected, [message]);
```

> Tests strict non-equality, as determined by the strict not equal operator ( !== )

```js
assert.throws(block, [error], [message]);
```

> Expects block to throw an error. error can be constructor, RegExp or validation function.

```js
assert.doesNotThrow(block, [message]);
```

> Expects block not to throw an error, see assert.throws for details.

```js
assert.ifError(value);
```

> Tests if value is not a false value, throws if it is a true value. Useful when testing the first argument, error in callbacks.
> Provides a few basic operating-system related utility functions.
> Use require('os') to access this module.

```js
os.tmpdir();
```

> Returns the operating system's default directory for temp files.

```js
os.endianness();
```

> Returns the endianness of the CPU. Possible values are "BE" or "LE".

```js
os.hostname();
```

> Returns the hostname of the operating system.

```js
os.type();
```

> Returns the operating system name.

```js
os.platform();
```

> Returns the operating system platform.

```js
os.arch();
```

> Returns the operating system CPU architecture.

```js
os.release();
```

---

> Returns the operating system release.

````js

os.uptime();
>  Returns the system uptime in seconds.

```js

os.loadavg();
````

---

> Returns an array containing the 1, 5, and 15 minute load averages.

```js
os.totalmem();
```

> Returns the total amount of system memory in bytes.

```js
os.freemem();
```

---

> Returns the amount of free system memory in bytes.

```js
os.cpus();
```

> Returns an array of objects containing information about each CPU/core installed: model, speed (in MHz), and times (an object containing the number of milliseconds the CPU/core spent in: user, nice, sys, idle, and irq).

```js
os.networkInterfaces();
```

---

> Get a list of network interfaces.

```js

os.EOL;
>  A constant defining the appropriate End-of-line marker for the operating system.

```

> Buffer is used to dealing with binary data
> Buffer is similar to an array of integers but corresponds to a raw memory allocation outside the V8 heap

```js
Buffer.from(size);
```

> Allocates a new buffer of size octets.

```js
Buffer.from(array);
```

> Allocates a new buffer using an array of octets.

```js
Buffer.from(str, [encoding]);
```

> Allocates a new buffer containing the given str. encoding defaults to 'utf8'.

```js
Buffer.isEncoding(encoding);
```

> Returns true if the encoding is a valid encoding argument, or false otherwise.

```js
Buffer.isBuffer(obj);
```

> Tests if obj is a Buffer

```js
Buffer.concat(list, [totalLength]);
```

> Returns a buffer which is the result of concatenating all the buffers in the list together.

```js
Buffer.byteLength(string, [encoding]);
```

> Gives the actual byte length of a string.

```js
buf.write(string, [offset], [length], [encoding]);
```

> Writes string to the buffer at offset using the given encoding
> buf.toString([encoding], [start], [end]);

````

---
>  Decodes and returns a string from buffer data encoded with encoding (defaults to 'utf8') beginning at start (defaults to 0) and ending at end (defaults to buffer.length).

```js

buf.toJSON();

````

> Returns a JSON-representation of the Buffer instance, which is identical to the output for JSON Arrays

```js
buf.copy(targetBuffer, [targetStart], [sourceStart], [sourceEnd]);
```

---

> Does copy between buffers. The source and target regions can be overlapped

```js
buf.slice([start], [end]);
```

> Returns a new buffer which references the same memory as the old, but offset and cropped by the start (defaults to 0) and end (defaults to buffer.length) indexes. Negative indexes start from the end of the buffer.

```js
buf.fill(value, [offset], [end]);
```

> Fills the buffer with the specified value

```js
buf[index];
```

> Get and set the octet at index

```js
buf.length;
```

> The size of the buffer in bytes, Note that this is not necessarily the size of the contents

```js
buffer.INSPECT_MAX_BYTES;
```

> How many bytes will be returned when buffer.inspect() is called. This can be overridden by user modules.

```js

```

# ReactJS

---

```bash

npm install --save react
#// declarative and flexible JavaScript library for building UI
npm install --save react-dom
# > serves as the entry point of the DOM-related rendering paths
npm install --save prop-types
#// runtime type checking for React props and similar objects
```

## notes: don't forget the command lines

> Create and return a new React element of the given type.

> Code written with JSX will be converted to use React.createElement().

> You will not typically invoke React.createElement() directly if you are using JSX.

```js
React.createElement(type, [props], [...children]);
```

> Clone and return a new React element using element as the starting point.

> The resulting element will have the original element's props with the new props merged in shallowly.

```js
React.cloneElement(element, [props], [...children]);
```

> Verifies the object is a React element. Returns true or false.

```js
React.isValidElement(object);
```

> React.Children> provides utilities for dealing with the this.props.children opaque data structure.
> Invokes a function on every immediate child contained within children with this set to thisArg.

```js

React.Children.map(children, function[(thisArg)])

```

> Like React.Children.map() but does not return an array.

```js

React.Children.forEach(children, function[(thisArg)])

```

> Returns the total number of components in children, equal to the number of times that a callback passed to map or forEach would be invoked.

```js
React.Children.count(children);
```

> Verifies that children has only one child (a React element) and returns it.

> Otherwise this method throws an error.

```js
React.Children.only(children);
```

> Returns the children opaque data structure as a flat array with keys assigned to each child.

> Useful if you want to manipulate collections of children in your render methods, especially if you want to reorder or slice this.props.children before passing it down.

```js
React.Children.toArray(children);
```

> The React.Fragment component lets you return multiple elements in a render() method without creating an additional DOM element

> You can also use it with the shorthand <></> syntax.

```js

class Component extends React.Component {

```

> Will be called before it is mounted
> constructor(props) {
> Call this method before any other statement
> or this.props will be undefined in the constructor
> super(props);

> The constructor is also often used to bind event handlers to the class instance.

> Binding makes sure the method has access to component attributes like this.props and this.state

```js
this.method = this.method.bind(this);
```

> The constructor is the right place to initialize state.

```js

  this.state = {
    active: true,
```

> In rare cases, it's okay to initialize state based on props.

> This effectively "forks" the props and sets the state with the initial props.

> If you "fork" props by using them for state, you might also want to implement componentWillReceiveProps(nextProps)
> to keep the state up-to-date with them. But lifting state up is often easier and less bug-prone.

```js

    color: props.initialColor
  };
}

```

> Enqueues changes to the component state and tells React that this component and its children need to be re-rendered with the updated state.

> setState() does not always immediately update the component. It may batch or defer the update until later.

> This makes reading this.state right after calling setState() a potential pitfall.

> Instead, use componentDidUpdate or a setState callback.

> You may optionally pass an object as the first argument to setState() instead of a function.

```jsx



setState(updater[, callback]) { }

```

> Invoked just before mounting occurs (before render())

> This is the only lifecycle hook called on server rendering.

```js

componentWillMount() { }

```

> Invoked immediately after a component is mounted.

> Initialization that requires DOM nodes should go here.

> If you need to load data from a remote endpoint, this is a good place to instantiate the network request.

> This method is a good place to set up any subscriptions. If you do that, don't forget to unsubscribe in componentWillUnmount().

```js

componentDidMount() { }

```

> Invoked before a mounted component receives new props.

> If you need to update the state in response to prop changes (for example, to reset it), you may compare this.props and nextProps and perform state transitions using this.setState() in this method.

```js

componentWillReceiveProps(nextProps) { }

```

> Let React know if a component's output is not affected by the current change in state or props.

> The default behavior is to re-render on every state change, and in the vast majority of cases you should rely on the default behavior.

> shouldComponentUpdate() is invoked before rendering when new props or state are being received. Defaults to true.

> This method is not called for the initial render or when forceUpdate() is used.

> Returning false does not prevent child components from re-rendering when their state changes.

```js

shouldComponentUpdate(nextProps, nextState) { }

```

> Invoked just before rendering when new props or state are being received.

> Use this as an opportunity to perform preparation before an update occurs. This method is not called for the initial render.

> Note that you cannot call this.setState() here; nor should you do anything else

````

> (e.g. dispatch a Redux action) that would trigger an update to a React component before componentWillUpdate() returns.

 > If you need to update state in response to props changes, use componentWillReceiveProps() instead.

```js

componentWillUpdate(nextProps, nextState) { }

````

> Invoked immediately after updating occurs. This method is not called for the initial render.

> Use this as an opportunity to operate on the DOM when the component has been updated.

> This is also a good place to do network requests as long as you compare the current props to previous props (e.g. a network request may not be necessary if the props have not changed).

```js

componentDidUpdate(prevProps, prevState) { }

```

> Invoked immediately before a component is unmounted and destroyed.

> Perform any necessary cleanup in this method, such as invalidating timers, canceling network requests, or cleaning up any subscriptions that were created in componentDidMount().

```js

componentWillUnmount() { }

```

> Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed.

> Error boundaries catch errors during rendering, in lifecycle methods, and in constructors of the whole tree below them.

```js

componentDidCatch() { }

```

> This method is required.

> It should be pure, meaning that it does not modify component state, it returns the same result each time it's invoked, and

```

> it does not directly interact with the browser (use lifecycle methods for this)

```

> It must return one of the following types: react elements, string and numbers, portals, null or booleans.

```js

render() {

```

> Contains the props that were defined by the caller of this component.

```js
console.log(this.props);
```

> Contains data specific to this component that may change over time.

````js

> The state is user-defined, and it should be a plain JavaScript object.

```js

> If you don't use it in render(), it shouldn't be in the state.

```js

> For example, you can put timer IDs directly on the instance.

```js

> Never mutate this.state directly, as calling setState() afterwards may replace the mutation you made.

```js

> Treat this.state as if it were immutable.

```js

  console.log(this.state);
  return (
    <div>
      {/* Comment goes here */}
      Hello, {this.props.name}!
    </div>
  );
}
}

````

> Can be defined as a property on the component class itself, to set the default props for the class.

> This is used for undefined props, but not for null props.

```js
Component.defaultProps = {
    color: 'blue'
};
component = new Component();
```

> By default, when your component's state or props change, your component will re-render.

> If your render() method depends on some other data, you can tell React that the component needs re-rendering by calling forceUpdate().

> Normally you should try to avoid all uses of forceUpdate() and only read from this.props and this.state in render().

````js

component.forceUpdate(callback)
//**************
 // * REACT.DOM
 * The react-dom package provides DOM-specific methods that can be used at the top level of
 * your app and as an escape hatch to get outside of the React model if you need to.

```js

 * Most of your components should not need to use this module.

```js

 * https://reactjs.org/docs/react-dom.html
*/
//------------------------------------------------------------------------------\\
//------------------------------------------------------------------------------\\

````

> Render a React element into the DOM in the supplied container and return a reference

````

> to the component (or returns null for stateless components).

```js

ReactDOM.render(element, container[, callback])

````

> Same as render(), but is used to hydrate a container whose HTML contents were rendered

````

> by ReactDOMServer. React will attempt to attach event listeners to the existing markup.

```js

ReactDOM.hydrate(element, container[, callback])

````

> Remove a mounted React component from the DOM and clean up its event handlers and state.

> If no component was mounted in the container, calling this function does nothing.

> Returns true if a component was unmounted and false if there was no component to unmount.

```js
ReactDOM.unmountComponentAtNode(container);
```

> If this component has been mounted into the DOM, this returns the corresponding native browser

```

> DOM element. This method is useful for reading values out of the DOM, such as form field values

```

> and performing DOM measurements. In most cases, you can attach a ref to the DOM node and avoid

````

> using findDOMNode at all.

```js

ReactDOM.findDOMNode(component)

````

> Creates a portal. Portals provide a way to render children into a DOM node that exists outside

````

> the hierarchy of the DOM component.

```js

ReactDOM.createPortal(child, container)
//******************************************************************************
 // * REACTDOMSERVER
 * The ReactDOMServer object enables you to render components to static markup.

```js

 * https://reactjs.org/docs/react-dom.html
*/
//------------------------------------------------------------------------------\\
//------------------------------------------------------------------------------\\

````

> Render a React element to its initial HTML. React will return an HTML string.

> You can use this method to generate HTML on the server and send the markup down on the initial

````

> request for faster page loads and to allow search engines to crawl your pages for SEO purposes.

```js

ReactDOMServer.renderToString(element)

````

> Similar to renderToString, except this doesn't create extra DOM attributes that React uses

```

> internally, such as data-reactroot. This is useful if you want to use React as a simple static

```

> page generator, as stripping away the extra attributes can save some bytes.

```js
ReactDOMServer.renderToStaticMarkup(element);
```

> Render a React element to its initial HTML. Returns a Readable stream that outputs an HTML string.

> The HTML output by this stream is exactly equal to what ReactDOMServer.renderToString would return.

> You can use this method to generate HTML on the server and send the markup down on the initial

````

> request for faster page loads and to allow search engines to crawl your pages for SEO purposes.

```js

ReactDOMServer.renderToNodeStream(element)

````

> Similar to renderToNodeStream, except this doesn't create extra DOM attributes that React uses

```

> internally, such as data-reactroot. This is useful if you want to use React as a simple static

```

> page generator, as stripping away the extra attributes can save some bytes.

```js

ReactDOMServer.renderToStaticNodeStream(element)
//***********
 // * TYPECHECKING WITH PROPTYPES
 * https://reactjs.org/docs/typechecking-with-proptypes.html
*/
//------------------------------------------------------------------------------\\
//------------------------------------------------------------------------------\\
import PropTypes from 'prop-types';
MyComponent.propTypes = {

```

> You can declare that a prop is a specific JS type. By default, these

````

> are all optional.

```js

optionalArray: PropTypes.array,
optionalBool: PropTypes.bool,
optionalFunc: PropTypes.func,
optionalNumber: PropTypes.number,
optionalObject: PropTypes.object,
optionalString: PropTypes.string,
optionalSymbol: PropTypes.symbol,  Anything that can be rendered: numbers, strings, elements or an array

````

> (or fragment) containing these types.

````js

optionalNode: PropTypes.node,  A React element.

```js

optionalElement: PropTypes.element,  You can also declare that a prop is an instance of a class. This uses

````

> JS's instanceof operator.

```js

optionalMessage: PropTypes.instanceOf(Message),  You can ensure that your prop is limited to specific values by treating

```

> it as an enum.

```js

optionalEnum: PropTypes.oneOf(['News', 'Photos']),  An object that could be one of many types
optionalUnion: PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number,
  PropTypes.instanceOf(Message)
]),  An array of a certain type
optionalArrayOf: PropTypes.arrayOf(PropTypes.number),  An object with property values of a certain type
optionalObjectOf: PropTypes.objectOf(PropTypes.number),  An object taking on a particular shape
optionalObjectWithShape: PropTypes.shape({
  color: PropTypes.string,
  fontSize: PropTypes.number
}),  You can chain any of the above with `isRequired` to make sure a warning

```

> is shown if the prop isn't provided.

```js

requiredFunc: PropTypes.func.isRequired,  A value of any data type
requiredAny: PropTypes.any.isRequired,  You can also specify a custom validator. It should return an Error

```

> object if the validation fails. Don't `console.warn` or throw, as this

````

> won't work inside `oneOfType`.

```js

customProp: function(props, propName, componentName) {
  if (!/matchme/.test(props[propName])) {
    return new Error(
      'Invalid prop `' + propName + '` supplied to' +
      ' `' + componentName + '`. Validation failed.'
    );
  }
},  You can also supply a custom validator to `arrayOf` and `objectOf`.

 > It should return an Error object if the validation fails. The validator

> will be called for each key in the array or object. The first two

````

> arguments of the validator are the array or object itself, and the

````

> current item's key.

```js

customArrayProp: PropTypes.arrayOf(function(propValue, key, componentName, location, propFullName) {
  if (!/matchme/.test(propValue[key])) {
    return new Error(
      'Invalid prop `' + propFullName + '` supplied to' +
      ' `' + componentName + '`. Validation failed.'
    );
  }
})
};
````
