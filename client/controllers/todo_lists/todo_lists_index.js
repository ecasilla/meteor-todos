TodoListsIndexController = RouteController.extend({
  waitOn: function () {
  },

  data: function () {
  },

  OnAfterAction: function() {
    Session.setDefault('list_id', null);
    Session.setDefault('editing_listname', null);
  },

  action: function () {
    this.render();
  }
});
