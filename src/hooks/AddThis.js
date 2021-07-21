import { useEffect } from 'react';

const useScript = (url) => {
    useEffect(() => {
        const script = document.createElement('script');

        script.src = url;
        script.async = true;

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, [url]);
};

export default useScript;

/*
import useScript from 'hooks/useScript';

const ShareButtons = props => {
  useScript('https://s7.addthis.com/js/300/addthis_widget.js#pubid=ra-60dcec1ece575946');


}

*/
