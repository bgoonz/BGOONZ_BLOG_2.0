import { useEffect } from 'react';

const useScript = url => {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = url;
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, [url]);
};

export default useScript;

/*
import useScript from 'hooks/useScript';

const MyComponent = props => {
  useScript('https://use.typekit.net/foobar.js');


}

*/