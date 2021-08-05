var urls \= \[
'https://www.youtube.com/watch?v=rVlhMGQgDkY',
'https://vine.co/v/irMdgU253HU',
'https://streamable.com/25ws',
'https://www.instagram.com/p/BA4-invoXXH/',
'http://vimeo.com/18150336'
\];

$.embedly.oembed(urls)
.then(function(results) {

    return results.reduce(function(array, oembed) {
      var html;
      if (oembed.type \=== 'rich' || oembed.type \=== 'video') {



        var match \= (/src=\\"(\[^\\"\]+)\\"/).exec(oembed.html);

        if (match.length \=== 2) {

          var src \= 'https://'+match\[1\];





          var placeholder \= oembed.thumbnail\_url;
          if (!placeholder) {
            placeholder \= 'https://cdn.embed.ly/logos/embedly-powered-large-light.png';
          }


          html \= \[
            '<amp-iframe width=' + oembed.width,
            'height=' + oembed.height,
            'layout="responsive"',
            'frameborder="0"',
            'sandbox="allow-scripts allow-same-origin allow-popups"',
            'src="' + src + '">',
            '<amp-img layout="fill" src="' + placeholder + '" placeholder></amp-img>',
            '</amp-iframe>'
          \].join(' ');
        }
      } else if (oembed.type \=== 'photo') {


        html \= \[
          '<amp-img src="' + oembed.url + '"',
          'width=' + oembed.width,
          'height=' + oembed.height,
          'layout="responsive" ></amp-img>'
        \].join(' ');
      }

      if (html) {
        array.push(html);
      }
      return array;
    }, \[\]);

})
.then(function(results){

    var $embeds \= $('.embeds');
    results.forEach(function(html){
      $embeds.append(\[
        '<div class="embed">',
          html,
        '</div>'
      \].join(''));
    });

});
