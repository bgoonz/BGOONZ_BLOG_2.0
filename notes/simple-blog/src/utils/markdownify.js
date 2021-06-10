import marked from 'marked';
import htmlToReact from './htmlToReact';

export default function markdownify(markdown) {
    if (!markdown) {
        return null;
    }
    return htmlToReact(marked(markdown));
<<<<<<< HEAD
}
=======
};
>>>>>>> 2463ce91b0e33baaa31e9d29eef9c2d52887bdf2
