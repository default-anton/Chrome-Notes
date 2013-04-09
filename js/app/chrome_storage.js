// Generated by CoffeeScript 1.6.2
(function() {
  Backbone.Model.prototype.fetch = function(options) {
    var model, success;

    options = options != null ? _.clone(options) : {};
    model = this;
    success = options.success;
    return chrome.storage.local.get("" + this.name + "-" + this.id, function(data) {
      if (!model.set(model.parse(data, options), options)) {
        return false;
      }
      if (success != null) {
        success(model, data, options);
      }
      model.trigger('sync', model, data, options);
    });
  };

  Backbone.Collection.prototype.fetch = function(options) {
    var collection, itemNames, success;

    options = options != null ? _.clone(options) : {};
    collection = this;
    success = options.success;
    itemNames = this.map(function(item) {
      return item.name + item.id;
    });
    return chrome.storage.local.get(itemNames, function(data) {
      var method;

      method = options.reset ? 'reset' : 'set';
      collection[method](data, options);
      if (success != null) {
        success(collection, data, options);
      }
      collection.trigger('sync', collection, data, options);
    });
  };

}).call(this);
