---
toc: this - an example
style: |
    h1 {
      text-align: center
    }
---

# `this` - an example

```javascript
function say() {
    console.log('My name is ' + this.name);
}

var felix = {
    name: 'Felix',
    sayName: say
};

var sarah = {
    name: 'Sarah',
    sayName: say
};

felix.sayName(); // My name is Felix
sarah.sayName(); // My name is Sarah
say.call({ name: 'Anonymous' }); // My name is Anonymous
say(); // My names is undefined
```

In this example we define a single function that uses `this` internally. The
function is then assigned to different objects as property. The output the
function produces depends on which object the function is called (_how_ it is
called).
