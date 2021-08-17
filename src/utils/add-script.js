
useEffect(() => {
  const script = document.createElement('script');
  script.async = true;
  document.body.appendChild(script);
return () => {
    document.body.removeChild(script);
  }
}, []);



import { useEffect } from 'react';
const importScript = resourceUrl=> {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = resourceUrl;
    script.async = true;
    document.body.appendChild(script);
return () => {
      document.body.removeChild(script);
    }
  }, [resourceUrl]);
};
export default importScript;