/*****************************************************************************/
/* TodoListsIndex Publish Functions
/*****************************************************************************/

Meteor.publish('todo_lists_index', function () {
  return TodoLists.find({user_id: this.userId})
});
