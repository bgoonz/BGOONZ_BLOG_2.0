function MakerBadge(t) {
    (this.userId = ''),
        (this.position = 'left'),
        (this.layout = 1),
        (this.coffee = !1),
        (this.customHTML = ''),
        (this.mounted = !1),
        (this.imageAlt = ''),
        (this.theme = ''),
        (this.title = '#BlackLivesMatter'),
        (this.message = 'To be silent is to be complicit. Black lives matter.'),
        (this.pic = ''),
        (this.promoLink = 'https://minnesotafreedomfund.org/'),
        (this.promoText = 'Send a donation ' + String.fromCodePoint(8594));
}
MakerBadge.prototype = {
    constructor: MakerBadge,
    init: function (t, e) {
        t.id && (this.userId = t.id),
            t.position && (this.position = t.position),
            t.layout && (this.layout = t.layout),
            t.promoText && (this.promoText = t.promoText),
            t.promoLink && (this.promoLink = t.promoLink),
            t.imageAlt && (this.imageAlt = t.imageAlt),
            t.theme && (this.theme = t.theme),
            t.title && (this.title = t.title),
            t.message && (this.message = t.message),
            t.customHTML && (this.customHTML = t.customHTML),
            this.layout &&
                t.pic &&
                (this.pic =
                    '<img alt="' +
                    (t.imageAlt ? t.imageAlt : 'Black Lives Matter Badge') +
                    '" width="30" style="border-radius:100%" src="' +
                    t.pic +
                    '"/>&nbsp;&nbsp;'),
            (this.mounted = !0),
            this.run(e);
    },
    run: function (t) {
        const e = document.querySelector('html'),
            i = document.createElement('div'),
            a = document.createElement('div'),
            o = document.createElement('div'),
            n = document.createElement('div'),
            s = document.createElement('div'),
            r = document.createElement('a'),
            d = document.createElement('a'),
            l = document.createElement('a');
        (l.style = 'display:block;margin: 0.5rem 0;font-size:10px;color:#718096;text-decoration:none;font-weight:400;'),
            (l.innerHTML = 'Add this to your website'),
            (l.target = '_blank'),
            (l.href = 'http://blmbadge.unicornplatform.com');
        const m = document.createElement('div');
        (m.innerHTML = this.customHTML),
            this.setStyle(),
            document.getElementsByTagName('head')[0].appendChild(this.style),
            (o.innerHTML = 'Maker'),
            (r.innerHTML = 'P'),
            (r.target = '_blank'),
            (r.classList = 'ph-btn'),
            (i.classList = 'maker-badge'),
            (o.classList = 'maker-badge__btn'),
            (a.classList = 'maker-badge__content'),
            (n.classList = 'maker-badge__stats'),
            (s.style = 'text-align:center;margin:.5rem 0;font-weight:800;'),
            (o.innerHTML = 'Maker'),
            i.appendChild(o),
            i.appendChild(a);
        let p = 0;
        var b = this,
            g = 'https://tinify-bucket.s3-us-west-1.amazonaws.com/blm-blue-round.png',
            c = '';
        'dark' == b.theme
            ? (g = 'https://tinify-bucket.s3-us-west-1.amazonaws.com/blm-blue-round.png')
            : 'light' == b.theme &&
              ((g = 'https://tinify-bucket.s3-us-west-1.amazonaws.com/blm-white-round.png'), 2 == b.layout && (c = 'border:1px solid #cbd5e0;'));
        const h = b.pic ? b.pic : g,
            u =
                '<img alt="' +
                (b.imageAlt ? b.imageAlt : 'Black Lives Matter Badge') +
                '" style="' +
                c +
                '" width="' +
                (2 === b.layout ? 50 : 30) +
                '" class="maker-badge__btn-img" src="' +
                h +
                '"/>&nbsp;&nbsp;',
            x = b.title ? b.title : '#BlackLivesMatter';
        1 === b.layout ? (o.innerHTML = u + x) : 2 === b.layout ? (o.innerHTML = u) : (o.innerHTML = u + x),
            (n.innerHTML = ''),
            2 === b.layout && (a.innerHTML += '<div style="font-weight:600;font-size:1.125rem;">' + x + '</div>'),
            (a.innerHTML += '<div style="color:#4a5568;max-width:200px;padding:0.5rem 0px 0;line-height:1.2rem">' + b.message + '</div>'),
            (n.innerHTML +=
                '<div style="margin-top:0.5rem;"><a style="color:#2B6CB0;text-decoration:underline;font-weight: 600;" target="_blank" href="' +
                b.promoLink +
                '">' +
                b.promoText +
                '</a></div>'),
            a.appendChild(n),
            b.twitter && a.appendChild(d),
            b.customHTML && a.appendChild(m),
            a.appendChild(l),
            e.appendChild(i),
            (p = i.clientHeight),
            2 === b.layout ? (i.style.bottom = 'calc(-' + p + 'px + 76px)') : (i.style.bottom = 'calc(-' + p + 'px + 50px)'),
            i.classList.add('transition'),
            (i.style.visibility = 'visible'),
            t && t(),
            o.addEventListener('click', () => {
                i.classList.contains('isOpen')
                    ? (2 === b.layout
                          ? i.setAttribute('style', 'visibility:visible;bottom:calc(-' + p + 'px + 76px)')
                          : i.setAttribute('style', 'visibility:visible;bottom:calc(-' + p + 'px + 50px)'),
                      i.classList.remove('isOpen'))
                    : (i.setAttribute('style', 'visibility:visible;'), i.classList.add('isOpen'));
            });
    },
    setStyle: function () {
        let t = '.isOpen{bottom: 0;}';
        if (((this.style = document.createElement('style')), (this.style.type = 'text/css'), 1 === this.layout)) {
            var e =
                '.ph-btn{margin: 0 auto;          height: 30px;           width: 30px;           text-align: left;           line-height: 30px;          background: #da552f;          display: block;          border-radius: 50%;          font-size: 1rem;          color: #fff;          text-decoration: none;          font-weight: 800;}';
            const i = '.maker-badge, .maker-badge *,.maker-badge *:before,.maker-badge *:after{box-sizing: border-box;}',
                a =
                    '.maker-badge{z-index:99;max-width:200px;color:#2b2b2b;font-size:16px;font-family:helvetica;text-align:right;height:auto;min-width:160px;position:fixed;bottom:-100%;' +
                    this.position +
                    ':0;border-top-left-radius:6px;}',
                o = '.maker-badge__content{text-align:left;font-size:.9rem;border: 1px solid #cbd5e0;padding:.5rem;display:block;background:#fff;height:100%;}',
                n =
                    '.maker-badge__btn{display:flex;align-items:center;height:50px;line-height:50px;padding: 0 .5rem;cursor:pointer;border:1px solid #cbd5e0;border-bottom:0;background:#fff;border-top-left-radius:6px;color:#2d3748;}',
                s = '.maker-badge__stats{list-style: none;padding: 0;margin: .3rem 0;} .maker-badge__stats li {margin: .3rem 0}',
                r = '.maker-badge__btn-img {border-radius: 50%;}';
            this.style.innerHTML = '.transition {transition: all .3s ease}' + r + s + i + a + o + n + e + t;
        }
        if (2 === this.layout) {
            t =
                '.isOpen{          bottom: 0;}          .isOpen .maker-badge__btn {            margin-bottom: -20px;          z-index: 99;}          .isOpen .maker-badge__content{            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);          }';
            e =
                '.ph-btn{margin: 0 auto;          height: 30px;           width: 30px;           text-align: left;           line-height: 30px;          background: #da552f;          display: block;          border-radius: 50%;          font-size: 1rem;          color: #fff;          text-decoration: none;          font-weight: 800;}';
            const i = '.maker-badge, .maker-badge *,.maker-badge *:before,.maker-badge *:after{box-sizing: border-box;}',
                a =
                    '.maker-badge{z-index:99;visibility:hidden;color:#2b2b2b;font-size:16px;font-family:helvetica;text-align:' +
                    this.position +
                    ';height:auto;min-width:160px;position:fixed;bottom:-100%;' +
                    this.position +
                    ':0;border-top-left-radius:6px;}',
                o =
                    '.maker-badge__content{                                position:relative;                                text-align:left;                                font-size:.9rem;                                border: 1px solid #cbd5e0;                                padding:1rem;                                border-top-left-radius:.5rem;                                border-top-right-radius:.5rem;                                display:block;                                background:#fff;                                height:100%;}                                .maker-badge__content::before{                                content:"";                                display: block;                                position: absolute;                                top: -10px;                                ' +
                    this.position +
                    ': 25px;                                width: 0;                                height: 0;                                border-left: 10px solid transparent;                                border-right: 10px solid transparent;                                border-bottom: 10px solid #fff;',
                n =
                    '.maker-badge__btn{                              transition: all .3s ease;                              display: inline-flex;                              justify-content: right;                              align-items: center;                              cursor: pointer;                              position: relative;                              text-align: center;                              width: 44px;                              height: 44px;                              z-index: 99;                              margin: 20px 10px;                              border-radius: 50%;}                              .maker-badge__btn:hover .maker-badge__btn-img {transform:scale(1.1);box-shadow:0px 0px 10px rgba(0,0,0,0.5);}                              .isOpen .maker-badge__btn-img {top:15px;}',
                s = '.maker-badge__stats{list-style: none;padding: 0;margin: .3rem 0;} .maker-badge__stats li {margin: .3rem 0}',
                r =
                    '.maker-badge__btn-img {                                  border-radius: 50%;                                  width: 44px;                                  position: absolute;                                  top: 0;                                  right: 0;                                  left: 0;                                  bottom: 0;                                  transition: all .3s ease;                                  margin: auto;}';
            this.style.innerHTML = '.transition {transition: all .3s ease}' + r + s + i + a + n + e + t + o;
        }
    }
};
let BLMBadge = new MakerBadge();
