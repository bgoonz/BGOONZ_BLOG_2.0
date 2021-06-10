// import App from 'next/app'
import { useEffect } from 'react';
import Router from 'next/router';
import '../sass/main.scss';

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        if (window.onNextjsAppDidMount) {
            window.onNextjsAppDidMount();
        }

        if (window.onNextjsRouteChangeComplete) {
            window.onNextjsRouteChangeComplete();
        }

        const handleRouteChangeStart = () => {
            if (window.onNextjsRouteChangeStart) {
                window.onNextjsRouteChangeStart();
            }
        };

        const handleRouteChangeComplete = () => {
            if (window.onNextjsRouteChangeComplete) {
                window.onNextjsRouteChangeComplete();
            }
        };

        Router.events.on('routeChangeStart', handleRouteChangeStart);
        Router.events.on('routeChangeComplete', handleRouteChangeComplete);
        return () => {
            Router.events.off('routeChangeStart', handleRouteChangeStart);
            Router.events.off('routeChangeComplete', handleRouteChangeComplete);
        };
    }, []);

    return <Component {...pageProps} />;
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
