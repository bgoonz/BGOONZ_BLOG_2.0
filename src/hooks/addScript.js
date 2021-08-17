import { useEffect } from 'react';
const importScript = (resourceUrl) => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/@algolia/algoliasearch-netlify-frontend@1/dist/algoliasearchNetlify.js';
        script.async = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        };
    }, [resourceUrl]);
};
export default importScript;
