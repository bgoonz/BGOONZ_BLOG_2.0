Express Quick Sheet
===================

Settings

------------------------------------------------------------------------

### Express Quick Sheet

### Settings

    app.set('x', 'yyy')
    app.get('x') //=> 'yyy'

    app.enable('trust proxy')
    app.disable('trust proxy')

    app.enabled('trust proxy') //=> true

### Enviorment

    app.get('env')

### Config

    app.configure('production', function() {
      app.set...
    })

### Wares

    app.use(express.static(__dirname + '/public'))
    app.use(express.logger())

### Helpers

    app.locals({
      title: "MyApp",
    })

------------------------------------------------------------------------

### Request & response

### Request

    // GET  /user/tj
    req.path         //=> "/user/tj"
    req.url          //=> "/user/tj"
    req.xhr          //=> true|false
    req.method       //=> "GET"
    req.params
    req.params.name  //=> "tj"
    req.params[0]

    // GET /search?q=tobi+ferret
    req.query.q // => "tobi ferret"

    req.cookies

    req.accepted
    // [ { value: 'application/json', quality: 1, type: 'application', subtype: 'json' },
    //   { value: 'text/html', quality: 0.5, type: 'text',subtype: 'html' } ]

    req.is('html')
    req.is('text/html')

    req.headers
    req.headers['host']
    req.headers['user-agent']
    req.headers['accept-encoding']
    req.headers['accept-language']

### Response

    res.redirect('/')
    res.redirect(301, '/')

    res.set('Content-Type', 'text/html')

    res.send('hi')
    res.send(200, 'hi')

    res.json({ a: 2 })

By <a href="https://medium.com/@bryanguner" class="p-author h-card">Bryan Guner</a> on [March 5, 2021](https://medium.com/p/8f93762c59ca).

<a href="https://medium.com/@bryanguner/express-quick-sheet-8f93762c59ca" class="p-canonical">Canonical link</a>

Exported from [Medium](https://medium.com) on August 31, 2021.
