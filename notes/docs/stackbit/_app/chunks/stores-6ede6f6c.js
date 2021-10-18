import { U as s } from './index-0a115175.js';
const e = 'undefined' == typeof window,
    r = () => {
        const e = s('__svelte__');
        return {
            page: { subscribe: e.page.subscribe },
            navigating: { subscribe: e.navigating.subscribe },
            get preloading() {
                return console.error('stores.preloading is deprecated; use stores.navigating instead'), { subscribe: e.navigating.subscribe };
            },
            session: e.session
        };
    },
    i = { subscribe: (s) => r().page.subscribe(s) },
    n = (s) => {
        throw new Error(e ? `Can only ${s} session store in browser` : `Cannot ${s} session store before subscribing`);
    },
    t = {
        subscribe(s) {
            const i = r().session;
            return e || ((t.set = i.set), (t.update = i.update)), i.subscribe(s);
        },
        set: (s) => {
            n('set');
        },
        update: (s) => {
            n('update');
        }
    };
export { i as p, t as s };
