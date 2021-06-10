export default function attribute(name, value, condition) {
    if (typeof condition === 'undefined') {
        condition = true;
    }
    return condition ? { [name]: value } : null;
<<<<<<< HEAD
}
=======
};
>>>>>>> 2463ce91b0e33baaa31e9d29eef9c2d52887bdf2
