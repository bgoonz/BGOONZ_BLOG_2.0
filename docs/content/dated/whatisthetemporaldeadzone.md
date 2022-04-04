    function myFunc() {
        console.log(greeting);
        var greeting = 'Hello World!';
    }
    myFunc(); // Output: undefined

    function myFunc() {
        console.log(greeting);
        let greeting = 'Hello World!';
    }
    myFunc(); // Output: ReferenceError: greeting is not defined

    function myFunc() {
        console.log(greeting);
        const greeting = 'Hello World!';
    }
    myFunc(); // Output: ReferenceError: greeting is not defined
