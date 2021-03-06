/*****************************************************************************/
/* MasterLayout: Event Handlers and Helpers */
/*****************************************************************************/
Template.MasterLayout.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.MasterLayout.helpers({

  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

Template.MasterLayout.currentPath =  function () {
    return Router && Router.current() && Router.current().path;
};

/*****************************************************************************/
/* MasterLayout: Lifecycle Hooks */
/*****************************************************************************/
Template.MasterLayout.created = function () {
};

Template.MasterLayout.rendered = function () {
};

Template.MasterLayout.destroyed = function () {
};
