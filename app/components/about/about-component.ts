import controller from './about-controller';
import html from './about-template';
import template from './about-template.html!text';
import './about-style.scss!';

export function AboutComponent() {
	return {
		template,
		controller,
		restrict: 'E',
		controllerAs: 'vm',
		scope: { },
		bindToController: true
	};
};