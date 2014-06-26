CalenderIndexController = RouteController.extend({
  waitOn: function () {
    Meteor.subscribe('calender')
  },

  data: function () {
  },

  action: function () {
    this.render();
  }
});
