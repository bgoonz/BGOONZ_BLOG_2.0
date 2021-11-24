const e = () => {
        const e = new Date().getTimezoneOffset();
        return e <= 0 && e >= -180;
    },
    s = (e = '') => e.toLocaleLowerCase().replace(/\s/g, '-'),
    o = (e) => {
        const s = document.querySelector('html');
        e ? s.classList.add('overflow-y-hidden', 'mr-4') : s.classList.remove('overflow-y-hidden', 'mr-4');
    };
export { s as h, e as i, o as s };
