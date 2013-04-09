// Generated by CoffeeScript 1.6.2
(function() {
  var app;

  app = window.app;

  app.View.Note = Backbone.View.extend({
    className: 'row-fluid',
    $notesWrapper: $('#notes'),
    Templates: {
      noteItem: app.Template.Note.noteItem
    },
    initialize: function() {
      console.log(this.Templates.noteItem);
      this.model.view = this;
      this.render().$el.appendTo(this.$notesWrapper);
      return this.listenEvents();
    },
    listenEvents: function() {
      this.listenTo(this.model, 'change:title change:body', this.render);
      this.listenTo(this.model, 'remove', this.remove);
      return this;
    },
    render: function() {
      this.$el.html(this.Templates.noteItem(this.model.toJSON()));
      return this;
    }
  });

}).call(this);
