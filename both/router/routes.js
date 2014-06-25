/*****************************************************************************/
/* Client and Server Routes */
/*****************************************************************************/
Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound',
  templateNameConverter: 'upperCamelCase',
  routeControllerNameConverter: 'upperCamelCase'
});

var renderLoadingHook = function(pause) {
  if (!this.ready()) {
    this.render('Loading')
    pause()
  }
};

Router.onBeforeAction(renderLoadingHook)

Router.map(function () {
  /*
    Example:
      this.route('home', {path: '/'});
  */
  this.route('todos.index', {path: '/todos'});
  this.route('todos.detail', {path: '/todos/:_id'});
  this.route('home', {path: '/'});
});
