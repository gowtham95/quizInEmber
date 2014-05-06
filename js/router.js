Quiz.Router.map(function() {
this.resource('questions', { path: '/questions/:question_id' });
  this.route('result');
});
Quiz.IndexRoute = Ember.Route.extend({
});
Quiz.QuestionsRoute = Ember.Route.extend({
  model: function(params) {
  	if(isCookie())
  	{
	  	var model = this.store.find('questions',params.question_id);
		return model;
	}
	else
	{
		this.transitionTo('index');
	}
  }
});
Quiz.ResultRoute = Ember.Route.extend({
	model:function()
	{
		var model = this.store.find('questions');
		return model;
	}
});
