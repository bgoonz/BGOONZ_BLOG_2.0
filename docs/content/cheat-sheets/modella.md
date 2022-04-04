### Defining models

    User = Modella('User')

      .attr('name')
      .attr('email', { required: true })
      .use(require('modella-validators'))

      .validator (u) ->
        u.error('username', 'is required')  unless u.has('username')

### Instances

    user
      .name()
      .name('John')
      .set(name: 'John')

      .has('name')   # → true
      .isNew()
      .isValid()

      .save (err) ->
      .remove (err) ->
      .removed
      .model         # === User

Events
------

### Emitting

    Model.emit('event', [data...])

    record.emit('event', [data...])

### List of events

    user
      .on 'save', ->
      .on 'create', ->
      .on 'saving', (data, done) -> done()

      .on 'remove', ->
      .on 'removing', (data, done) -> done()

      .on 'valid', ->
      .on 'invalid', ->

      .on 'change', ->
      .on 'change email', ->

      .on 'initializing', (instance, attrs) ->
      .on 'initialize', ->

      .on 'error', -> failed to save model

      .on 'setting', (instance, attrs) ->  # on Model#set()
      .on 'attr', -> # new attr via Model.attr()

Misc
----

### Plugins

    MyPlugin = ->
      return (Model) ->

        Model.method = ...
        Model.prototype.method = ...
        Model.attr(...)

        Model

A plugin is a function that returns a model decorator (ie, a function that takes in a model and returns a model).

### Memory

    User
      .all (err, users) ->
      .find id, (err, user) ->

      .remove ->
      .save ->
      .update ->
