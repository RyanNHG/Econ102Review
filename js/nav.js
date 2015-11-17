// nav.js - controls navigation and routing

var nav = (function(){

  var _PAGES = {
    home: 'home',
    linkExam1: 'exam1',
    linkExam2: 'exam2',
    linkExam3: 'exam3',
    linkFinal: 'final',
    addQuestions: 'add',
  };

  var _init = function() {
    _setupNavlinks();
  };

  var _setupNavlinks = function(){
    $('.nav-link').click(_onNavLinkClicked);
  };

  var _onNavLinkClicked = function(){
    var linkId = $(this).attr('id');

    //  Make clicked link look active.
    $('.nav-link').removeClass('active');
    $(this).addClass('active');

    //  Open page for the correct link.
    _loadPage(linkId);

  };

  var _loadPage = function(linkId) {
    //  Update url to reflect page change.
    window.location.hash = _PAGES[linkId];
  };

  return {
    init: _init
  };

})();