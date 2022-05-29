## Puppeteer:

```js
const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.emulate(puppeteer.devices['iPhone 6']);
    await page.goto('https://www.nytimes.com/');
    await page.screenshot({ path: 'full.png', fullPage: true });
    await browser.close();
})();
```

---

# Dark Mode:

```js
import { useState, useEffect } from 'react';

export const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        const value = localStorage.getItem(key);
        return value ? JSON.parse(value) : initialValue;
    });

    const setValue = (value) => {
        setStoredValue(value);
        localStorage.setItem(key, JSON.stringify(value));
    };

    return [storedValue, setValue];
};

export const useDarkMode = () => {
    const [isDark, setIsdark] = useLocalStorage('dark', false);

    const toggleDark = () => {
        document.body.classList.toggle('dark-mode');
        setIsdark(!isDark);
    };

    useEffect(() => {
        isDark ? document.body.classList.add('dark-mode') : document.body.classList.remove('dark-mode');
    }, [isDark]);

    return [isDark, toggleDark];
};
```
