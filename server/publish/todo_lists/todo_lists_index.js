/*****************************************************************************/
/* TodoListsIndex Publish Functions
/*****************************************************************************/

Meteor.publish('todo_lists_index', function () {
return TodoList.find({user_id: this.userId})
});
