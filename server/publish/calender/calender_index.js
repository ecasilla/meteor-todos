/*****************************************************************************/
/* CalenderIndex Publish Functions
/*****************************************************************************/

Meteor.publish('calender_index', function () {
return Calender.find({user_id: this.userId})
});
