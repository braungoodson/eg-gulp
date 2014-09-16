$GccTripsProvider.$inject = [];
function $GccTripsProvider() {}
$GccTripDirective.$inject = [];
function $GccTripDirective() {
  var directive = {
    restrict: 'EA',
    replace: true,
    template: '<ul><li>{{tid}}</li><li>{{tname}}</li></ul>',
    scope: {
      tid: '@gccTrip',
      tname: '@',
      timg: '@',
      tdates: '@',
      tprices: '@'
    }
  };
  return directive;
}
angular.module('gcc.trips')
  .provider('gccTrips',$GccTripsProvider)
  .directive('gccTrip',$GccTripDirective);
