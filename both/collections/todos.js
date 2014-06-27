Todos = new Meteor.Collection('todos');

/*
 * Add query methods like this:
 *  Todos.findPublic = function () {
 *    return Todos.find({is_public: true});
 *  }
 */
Todos.after.insert(function (userId, doc) {
  new PNotify({
    title: "New Reminder Created",
    type: "success",
    delay: 2000,
    text: "",
    })
});
