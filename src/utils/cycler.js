/**
 * If classnames returns a string, return it, otherwise return null
 * @param args - The arguments passed to the function.
 * @returns The function classNames is being returned.
 */
export default function cycler() {
    const args = Array.prototype.slice.call(arguments);
    let index = 0;
    return {
        next: () => args[index++ % args.length]
    };
};