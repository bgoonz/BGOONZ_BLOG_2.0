var obj = { foo: 42, bar: function () { log(this.foo); } };

var foo = obj.bar; foo();
