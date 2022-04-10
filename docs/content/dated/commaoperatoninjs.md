-   /en/comma-operaton-in-js/

------------------------------------------------------------------------

Apart from being just a delimiter, the comma operator allows you to put multiple statements in a place where one statement is expected. Eg:-

    for (var i = 0, j = 0; i < 5; i++, j++, j++) {
        console.log('i:' + i + ', j:' + j);
    }

Output:-

    i:0, j:0
    i:1, j:2
    i:2, j:4
    i:3, j:6
    i:4, j:8

When placed in an expression, it evaluates every expression from left to right and returns the right most expression.

Eg:-

------------------------------------------------------------------------

    function a() {
        console.log('a');
        return 'a';
    }
    function b() {
        console.log('b');
        return 'b';
    }
    function c() {
        console.log('c');
        return 'c';
    }

    var x = (a(), b(), c());

    console.log(x); // Outputs "c"

Output:-

    'a';
    'b';
    'c';

    'c';

-   Note: The comma(`,`) operator has the lowest priority of all javascript operators, so without the parenthesis the expression would become: `(x = a()), b(), c();`.

##### Playground

<a href="http://jsbin.com/vimogap/embed?js,console" class="jsbin-embed">JS Bin on jsbin.com</a>
