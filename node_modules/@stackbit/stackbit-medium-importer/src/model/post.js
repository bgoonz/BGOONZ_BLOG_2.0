

const cheerio = require('cheerio');
const urlParse = require('url-parse');

class Post {
    constructor(content) {
        this.content = content;
        this.$ = cheerio.load(content);
    }

    get title() {
        return this.$('title').text().trim();
    }

    get excerpt() {
        return this.$('section[data-field=subtitle]').text().trim() || 
               this.subtitle;
    }

    get subtitle() {
        return this.$('h4[class*="graf--subtitle"]').text().trim();
    }

    get publishDate() {
        const publishTime = this.$('time[class*="dt-published"]').attr('datetime');
        if (publishTime) {
            return new Date(publishTime);
        }
        return null;
    }

    get imageUrls() {
        return this.$('img')
            .map((i, img) => this.$(img).attr('src'))
            .get()
            .filter(url => urlParse(url).hostname.includes('medium.com'));
    }

    get splashImageUrl() {
        return null;//this.$('div[class*=sectionLayout--fullWidth] img').attr('src');
    }

    get bodyHtml() {
        return this.$('div[class*=section-content]')
            .map((i, section) => this.$(section).html())
            .get()
            .join('<hr/>');
    }
}

module.exports = Post;