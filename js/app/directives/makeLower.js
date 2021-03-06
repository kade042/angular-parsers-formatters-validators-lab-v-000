function makeLower() {
	return {
		restrict: 'A',
		require: 'ngModel',
		link: function (scope, elem, attrs, ngModel) {
			ngModel.$parsers.push(function (str) {
				return str.toLowerCase();
			});
		}
	}

}

angular
	.module('app')
	.directive('makeLower', makeLower);
