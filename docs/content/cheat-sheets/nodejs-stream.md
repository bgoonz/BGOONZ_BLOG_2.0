### Types

<table><thead><tr class="header"><th>Stream</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>Readable</code></td><td>Data emitter</td></tr><tr class="even"><td><code>Writable</code></td><td>Data receiver</td></tr><tr class="odd"><td><code>Transform</code></td><td>Emitter and receiver</td></tr><tr class="even"><td><code>Duplex</code></td><td>Emitter and receiver (independent)</td></tr></tbody></table>

See: [Stream](https://nodejs.org/api/stream.html#stream_stream) *(nodejs.org)*

### Streams

    const Readable = require('stream').Readable;
    const Writable = require('stream').Writable;
    const Transform = require('stream').Transform;

### Piping

    clock() // Readable stream
        .pipe(xformer()) // Transform stream
        .pipe(renderer()); // Writable stream

### Methods

    stream.push(/*...*/); // Emit a chunk
    stream.emit('error', error); // Raise an error
    stream.push(null); // Close a stream

### Events

    const st = source();
    st.on('data', (data) => {
        console.log('<-', data);
    });
    st.on('error', (err) => {
        console.log('!', err.message);
    });
    st.on('close', () => {
        console.log('** bye');
    });
    st.on('finish', () => {
        console.log('** bye');
    });

Assuming `source()` is a readable stream.

### Flowing mode

    // Toggle flowing mode
    st.resume();
    st.pause();

    // Automatically turns on flowing mode
    st.on('data' /*...*/);

Stream types
------------

### Readable

------------------------------------------------------------------------

    function clock() {
        const stream = new Readable({
            objectMode: true,
            read() {}
        });

        setInterval(() => {
            stream.push({ time: new Date() });
        }, 1000);

        return stream;
    }

    // Implement read() if you
    // need on-demand reading.

Readable streams are generators of data. Write data using `stream.push()`.

### Transform

------------------------------------------------------------------------

    function xformer() {
        let count = 0;

        return new Transform({
            objectMode: true,
            transform: (data, _, done) => {
                done(null, { ...data, index: count++ });
            }
        });
    }

Pass the updated chunk to `done(null, chunk)`.

### Writable

------------------------------------------------------------------------

    function renderer() {
        return new Writable({
            objectMode: true,
            write: (data, _, done) => {
                console.log('<-', data);
                done();
            }
        });
    }

### All together now

    clock() // Readable stream
        .pipe(xformer()) // Transform stream
        .pipe(renderer()); // Writable stream

Also see
--------

{: .-one-column}

-   <a href="https://nodejs.org/api/stream.html" class="uri">https://nodejs.org/api/stream.html</a>
-   <a href="https://github.com/substack/stream-handbook" class="uri">https://github.com/substack/stream-handbook</a>
