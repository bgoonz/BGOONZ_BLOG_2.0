
useEffect(() => {
  const script = document.createElement('script');
  script.src = "/path/to/resource.js";
  script.async = true;
  document.body.appendChild(script);
return () => {
    document.body.removeChild(script);
  }
}, []);