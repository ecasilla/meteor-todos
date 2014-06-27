TodosIndexController = RouteController.extend({
  waitOn: function () {
    Meteor.subscribe('todos_index')
    Meteor.subscribe('todo_lists_index')
  },

  data: function () {
  },

  action: function () {
    this.render();
  }
});
