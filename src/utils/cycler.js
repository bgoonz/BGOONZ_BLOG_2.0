/**
 * It takes any number of arguments and returns an object with a next() method that cycles through the
 * arguments
 * @returns A function that returns an object with a next property.
 */
export default function cycler() {
    const args = Array.prototype.slice.call(arguments);
    let index = 0;
    return {
        next: () => args[index++ % args.length]
    };
};