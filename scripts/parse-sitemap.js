function parseSitemap() {
    var url = $siteMapURL.val();
    if ($.trim(url) === 'https://bgoonz-blog.netlify.app/') return;
    $results.val('');
    $status.html('<i>Trying to parse the sitemap.</i>');
    console.log('try to parse ' + url);

    /*
    A sitemap may consist of a list of sitemaps. So step one is to see
    if that exists. We'll create an array for all the sitemaps we need to parse.
    For simple sitemaps w/o a list of others, the array will have one item.
    */
    var sitemaps = [];

    var query =
        "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%20%3D%20'" +
        url +
        "'%20and%20xpath%3D'%2F%2Fsitemap'&format=json&diagnostics=true&callback=";
    $.get(query).then(function (res) {
        if (res.query.diagnostics && res.query.diagnostics.url[0]['http-status-code'] === '404') {
            $status.html('<b>This URL appears to be invalid.</b>');
            return;
        } else if (res.query.count > 0) {
            for (var i = 0; i < res.query.count; i++) {
                sitemaps.push(res.query.results.sitemap[i].loc);
            }
        } else {
            sitemaps[0] = url;
        }
        console.log('sitemaps to handle is ' + sitemaps);
        $status.html('<i>Gathering data for sitemaps URLs.</i>');
        var promises = [];
        sitemaps.forEach(function (sitemap) {
            var def = $.Deferred();
            var query =
                "https://query.yahooapis.com/v1/public/yql?q=select * from html where url = '" +
                sitemap +
                "' and xpath='//url/loc'&format=json&diagnostics=true&callback=";
            $.get(query).then(function (res) {
                def.resolve(res.query.results.loc);
            });
            promises.push(def);
        });
        $.when.apply($, promises).done(function () {
            console.log('totally done getting urls');
            var results = [];
            for (var i = 0; i < arguments.length; i++) {
                for (var x = 0; x < arguments[i].length; x++) {
                    results.push(arguments[i][x]);
                }
            }
            console.log('found ' + results.length + ' urls');
            $status.html('<b>Found ' + results.length + ' URLs.</b>');
            $results.val(results.join('\n'));
        });
        console.log(results);
        return results;
    });
}
