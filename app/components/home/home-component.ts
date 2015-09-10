import controller from './home-controller';
import html from './home-template';
import template from './home-template.html!text';
import './home-style.scss!';

export let HomeComponent = function() {
	return {
		template,
		controller,
		restrict: 'E',
		controllerAs: 'vm',
		scope: { },
		bindToController: true
	};
};