app.directive('sound', function() {
  return {
   restrict: 'E',
   scope: {
    info: "="
    },
   templateUrl: 'js/directives/sound.html'
  };
});
