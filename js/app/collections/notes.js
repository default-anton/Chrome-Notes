// Generated by CoffeeScript 1.6.2
(function() {
  var Notes, app;

  app = window.app;

  Notes = Backbone.Collection.extend({
    model: app.Model.Note,
    type: 'note',
    initialize: function() {
      this.on('sync', function(model, resp) {
        if ((resp != null) && (resp.length != null)) {
          return app.Iterator.note.set(_.max(resp, function(note) {
            return note.id;
          }).id);
        }
      });
      return this.fetch();
    }
  });

  app.Collection.Notes = new Notes;

}).call(this);
