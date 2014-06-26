/*****************************************************************************/
/* TodoLists: Event Handlers and Helpers */
/*****************************************************************************/
Template.TodoLists.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */

    'mousedown .list': function (evt) { // select list
    Session.set('list_id',this._id);
  },
  'click .list': function (evt) {
    // prevent clicks on <a> from refreshing the page.
    evt.preventDefault();
  },
  'dblclick .list': function (evt, tmpl) { // start editing list name
    Session.set('editing_listname', this._id);
    Deps.flush(); // force DOM redraw, so we can focus the edit field
    activateInput(tmpl.find("#list-name-input"));
  }
});

var okCancelEvents = function (selector, callbacks) {
  var ok = callbacks.ok || function () {};
  var cancel = callbacks.cancel || function () {};

  var events = {};
  events['keyup '+selector+', keydown '+selector+', focusout '+selector] =
    function (evt) {
      if (evt.type === "keydown" && evt.which === 27) {
        // escape = cancel
        cancel.call(this, evt);

      } else if (evt.type === "keyup" && evt.which === 13 ||
                 evt.type === "focusout") {
        // blur/return/enter = ok/submit if non-empty
        var value = String(evt.target.value || "");
        if (value)
          ok.call(this, value, evt);
        else
          cancel.call(this, evt);
      }
    };

  return events;
};

Template.TodoLists.events(okCancelEvents(
  '#new-list',
  {
    ok: function (text, evt) {
      var id = TodoLists.insert({name: text});
      Session.set('list_id',id);
      evt.target.value = "";
    }
  }));

Template.TodoLists.events(okCancelEvents(
  '#list-name-input',
  {
    ok: function (value) {
      TodoLists.update(this._id, {$set: {name: value}});
      Session.set('editing_listname', null);
    },
    cancel: function () {
      Session.set('editing_listname', null);
    }
  }));

Template.TodoLists.selected = function () {
  return Session.equals('list_id', this._id) ? 'selected' : '';
};

Template.TodoLists.name_class = function () {
  return this.name ? '' : 'empty';
};

Template.TodoLists.editing = function () {
  return Session.equals('editing_listname', this._id);
};



Template.TodoLists.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

/*****************************************************************************/
/* TodoLists: Lifecycle Hooks */
/*****************************************************************************/
Template.TodoLists.created = function () {
};

Template.TodoLists.rendered = function () {
};

Template.TodoLists.destroyed = function () {
};
