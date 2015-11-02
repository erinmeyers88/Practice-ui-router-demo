angular.module('uiRouteDemo', ['ui.router'])

.config(function($urlRouterProvider, $stateProvider) {
	$stateProvider
		
		
		.state("home", {
			url: "/",
			template: "<div>Something goes here.  We are made of {{stuffing}}" + "<div>" + "<a href='/#/settings'>Go to</a>" + "</div>" + "</div>",
			controller: "ctrl"
			
		})
		
		.state("settings",{
			url: "/settings",
			controller: "settingsController",
			templateUrl: "settings-tmpl.html"
		})
		
		.state("list", {
			url: "/list",
			controller: "listController",
			templateUrl: "list-tmpl.html"
			
		})
		
		.state("list.description", {
			url: "/description/:idx",  //appends on the end of the one above^
			controller: "descriptionController",
			template: "<div>{{name}} - {{description}}</div>"
		})
		
});