TodosDetailController = RouteController.extend({
  layoutTemplate: 'Breadcrumbs',

  waitOn: function () {
    var id = this.params._id;
    return Meteor.subscribe('todos_detail',id)
  },

  data: function () {
    var id = this.params._id
    return Todos.findOne({_id: id})
  },

  action: function () {
    if (this.ready()) {
      this.render();
    } else{
      this.render('Loading');
    };
  }
});
