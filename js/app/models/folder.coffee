app = window.app

Folder = Backbone.Model.extend
  defaults: ->
    title: ''
    notes: {}

  type: 'folder'

  initialize: () ->
    @id ?= app.Iterator.folder.next()
    new app.View.Folder model: @
    @listenEvents()

  listenEvents: ->
    @on 'remove', ->
      @destroyNotes()
      @destroy()
      @clear()
    , @

  save: () ->
    # Save note ids.
    noteIds = (note.id for note in @rel 'notes')
    @set('notes', noteIds)

    Backbone.Model::save.apply @, arguments

  destroyNotes: ->
    note.collection.remove(note) for note in @rel 'notes'

Folder::hasMany = ->
  notes:
    collection: app.Collection.Notes
    id: 'folder_id'
    filter: (note) -> +note.get('folder_id') is +@id

app.Model.Folder = Folder