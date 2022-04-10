    function getYear() {
        return 2020;
    }

    console.log(getYear());
    // Output: 2020

    console.log(void getYear());
    // Output: undefined

    // Useful use case
    button.onclick = () => void getYear();
