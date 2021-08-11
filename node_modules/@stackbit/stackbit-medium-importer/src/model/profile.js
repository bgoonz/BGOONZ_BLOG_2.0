const cheerio = require('cheerio');

class Profile {
    constructor(content) {
        this.content = content;
        this.$ = cheerio.load(content);

        const props = this.$('li')
            .map((i, elem) => this.$(elem).text())
            .get()
            .map(propStr => propStr.split(':'))
            .reduce((acc, val) => { 
                acc[val[0]] = val.slice(1).join(':').trim(); 
                return acc; 
            }, {});

        this.name = props['Display name'];
        this.email = props['Email address'];
        this.twitterUsername = props['Twitter'];
    }

    get avatarUrl() {
        return this.$('img[class*=u-photo]').attr('src');
    }
}

module.exports = Profile;