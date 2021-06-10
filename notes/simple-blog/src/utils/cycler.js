export default function cycler() {
    const args = Array.prototype.slice.call(arguments);
    let index = 0;
    return {
        next: () => args[index++ % args.length]
    };
<<<<<<< HEAD
}
=======
};
>>>>>>> 2463ce91b0e33baaa31e9d29eef9c2d52887bdf2
