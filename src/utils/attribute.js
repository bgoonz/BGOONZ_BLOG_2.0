export default function attribute(name, value, condition) {
    if (typeof condition === 'undefined') {
        condition = true;
    }
<<<<<<< HEAD
    return condition
        ? {
              [name]: value
          }
        : null;
=======
    return condition ? { [name]: value } : null;
>>>>>>> master
}
