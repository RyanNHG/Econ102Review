// econ.js - main script for econ review site

var econ = (function(){
  
  // Private members

  // _init - called when the page starts
  var _init = function() {
    console.log('Econ init');
    nav.init();
  };

  // Public members
  return {
    init: _init
  };

})();

// Called on page load
$(document).ready(econ.init);