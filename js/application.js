window.Quiz = Ember.Application.create({
		LOG_TRANSITIONS : true,
		LOG_BINDINGS : true,
		LOG_VIEW_LOOKUPS : true,
		LOG_STACKTRACE_ON_DEPRECATION : true,
		LOG_VERSION : true,
		debugMode : true
		});
		

Quiz.ApplicationAdapter = DS.FixtureAdapter.extend();
/*Todos.ApplicationAdapter = DS.LSAdapter.extend({
  namespace: 'todos-emberjs'
});*/
