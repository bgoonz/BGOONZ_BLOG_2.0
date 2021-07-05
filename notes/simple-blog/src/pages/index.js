import React from 'react';
import { sourcebitDataClient } from 'sourcebit-target-next';

/**
 * In next.js we can't use `src/pages/[...slug].js` for root site page `/`.
 * Instead, we import and export the [...slug].js while overriding its getStaticProps.
 */

import Page from './[...slug]';

<<<<<<< HEAD
=======

>>>>>>> 2463ce91b0e33baaa31e9d29eef9c2d52887bdf2
export async function getStaticProps({ params }) {
    console.log('Page [index] getStaticProps, params: ', params);
    const props = await sourcebitDataClient.getStaticPropsForPageAtPath('/');
    return { props };
}

export default Page;
