TodosIndexController = RouteController.extend({
  waitOn: function () {
    Meteor.subscribe('todos_index')
    Meteor.subscribe('todo_lists_index')
  },

  data: function () {
    Session.setDefault('list_id', null);
    Session.setDefault('editing_listname', null);
  },

  action: function () {
    this.render();
  }
});
