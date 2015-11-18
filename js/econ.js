// econ.js - main script for econ review site

var econ = (function(){
  
  // Private members

  // _init - called when the page starts
  var _init = function() {
    console.log('Econ init');
    nav.init();
    _loadProblem(
      'What bear is best?',
      [
        {text: 'Black bear', isCorrect: true},
        {text: 'Polar bear', isCorrect: false},
        {text: 'Grizzly bear', isCorrect: false},
        {text: 'Panda bear', isCorrect: false},
      ]
    );
  };

  var _loadProblem = function(question, answers) {
    var page = $('#page');

    var html = '<div class="panel">'+
      '<h3 class="question">'+question+'</h3>'+
      '<ul class="answers">';

      for(var i = 0; i < answers.length; i++)
      {
        var answer = answers[i];
        var classes = (answer.isCorrect) ? ' correct' : '';
        html += '<li class="answer'+classes+'">'+answer.text+'</li>';
      }

      html += '</ul>'+
      '<div class="buttons">'+
        '<button class="back">Back</button>'+
        '<button class="next">Next</button>'+
      '</div>'+
    '</div>';

    page.html(html);

    $('.answer').click(_onAnswerClicked);
  };

  var _onAnswerClicked = function(){
    $('.answer').removeClass('active');
    $(this).addClass('active');
  };

  // Public members
  return {
    init: _init,
    loadProblem: _loadProblem
  };

})();

// Called on page load
$(document).ready(econ.init);