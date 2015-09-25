requirejs.config({
	baseUrl: 'js/vendor',
	paths: {
		jquery: 'jquery.min',
		TweenMax: 'TweenMax.min',
		bootstrap: 'bootstrap.min',
		angular: 'angular.min'
	},
	shim: {
		angular: {
			exports: 'angular'
		}
	}

});

require(['jquery', 'angular'], function($, angular){
	console.log();
	require(['bootstrap.min'], function(bootstrap){
		
	});
});

define('app', ['jquery', 'angular'], function($, angular){
	console.log($, angular);
	return {
		color: 'red'
	}
});

require(['app'], function(app){
    // do nothing.
    console.log(app);
});