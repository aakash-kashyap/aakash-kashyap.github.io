$(document).ready(function(){
    // progressbar.js@1.0.0 version is used
  // Docs: http://progressbarjs.readthedocs.org/en/1.0.0/
  
  var nodeBar = new ProgressBar.Circle(nodelogo,{
    color: '#f4511e',
    trailColor: '#eee',
    trailWidth: 1,
    duration: 1400,
    easing: 'bounce',
    strokeWidth: 6,
    from: {color: '#FFEA82', a:0},
    to: {color: '#ED6A5A', a:1},
    // Set default step function for all animate calls
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
    }
  });


  var jsBar = new ProgressBar.Circle(jslogo,{
    color: '#f4511e',
    trailColor: '#eee',
    trailWidth: 1,
    duration: 1400,
    easing: 'bounce',
    strokeWidth: 6,
    from: {color: '#FFEA82', a:0},
    to: {color: '#ED6A5A', a:1},
    // Set default step function for all animate calls
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
    }
  });

  var htmlBar = new ProgressBar.Circle(htmllogo,{
    color: '#f4511e',
    trailColor: '#eee',
    trailWidth: 1,
    duration: 1400,
    easing: 'bounce',
    strokeWidth: 6,
    from: {color: '#FFEA82', a:0},
    to: {color: '#ED6A5A', a:1},
    // Set default step function for all animate calls
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
    }
  });

  var cssBar = new ProgressBar.Circle(csslogo,{
    color: '#f4511e',
    trailColor: '#eee',
    trailWidth: 1,
    duration: 1400,
    easing: 'bounce',
    strokeWidth: 6,
    from: {color: '#FFEA82', a:0},
    to: {color: '#ED6A5A', a:1},
    // Set default step function for all animate calls
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
    }
  });


  var angularBar = new ProgressBar.Circle(angularlogo,{
    color: '#f4511e',
    trailColor: '#eee',
    trailWidth: 1,
    duration: 1400,
    easing: 'bounce',
    strokeWidth: 6,
    from: {color: '#FFEA82', a:0},
    to: {color: '#ED6A5A', a:1},
    // Set default step function for all animate calls
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
    }
  });

  var phpBar = new ProgressBar.Circle(phplogo,{
    color: '#f4511e',
    trailColor: '#eee',
    trailWidth: 1,
    duration: 1400,
    easing: 'bounce',
    strokeWidth: 6,
    from: {color: '#FFEA82', a:0},
    to: {color: '#ED6A5A', a:1},
    // Set default step function for all animate calls
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
    }
  });

  var bootstrapBar = new ProgressBar.Circle(bootstraplogo,{
    color: '#f4511e',
    trailColor: '#eee',
    trailWidth: 1,
    duration: 1400,
    easing: 'bounce',
    strokeWidth: 6,
    from: {color: '#FFEA82', a:0},
    to: {color: '#ED6A5A', a:1},
    // Set default step function for all animate calls
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
    }
  });

  var jqueryBar = new ProgressBar.Circle(jquerylogo,{
    color: '#f4511e',
    trailColor: '#eee',
    trailWidth: 1,
    duration: 1400,
    easing: 'bounce',
    strokeWidth: 6,
    from: {color: '#FFEA82', a:0},
    to: {color: '#ED6A5A', a:1},
    // Set default step function for all animate calls
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
    }
  });
  
  var cBar = new ProgressBar.Circle(clogo,{
    color: '#f4511e',
    trailColor: '#eee',
    trailWidth: 1,
    duration: 1400,
    easing: 'bounce',
    strokeWidth: 6,
    from: {color: '#FFEA82', a:0},
    to: {color: '#ED6A5A', a:1},
    // Set default step function for all animate calls
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
    }
  });
  
  var cppBar = new ProgressBar.Circle(cpplogo,{
    color: '#f4511e',
    trailColor: '#eee',
    trailWidth: 1,
    duration: 1400,
    easing: 'bounce',
    strokeWidth: 6,
    from: {color: '#FFEA82', a:0},
    to: {color: '#ED6A5A', a:1},
    // Set default step function for all animate calls
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
    }
  });
  
  var pythonBar = new ProgressBar.Circle(pythonlogo,{
    color: '#f4511e',
    trailColor: '#eee',
    trailWidth: 1,
    duration: 1400,
    easing: 'bounce',
    strokeWidth: 6,
    from: {color: '#FFEA82', a:0},
    to: {color: '#ED6A5A', a:1},
    // Set default step function for all animate calls
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
    }
  });
  
 

  var arduinoBar = new ProgressBar.Circle(arduinologo,{
    color: '#f4511e',
    trailColor: '#eee',
    trailWidth: 1,
    duration: 1400,
    easing: 'bounce',
    strokeWidth: 6,
    from: {color: '#FFEA82', a:0},
    to: {color: '#ED6A5A', a:1},
    // Set default step function for all animate calls
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
    }
  });  
  var nmcuBar = new ProgressBar.Circle(nmculogo,{
    color: '#f4511e',
    trailColor: '#eee',
    trailWidth: 1,
    duration: 1400,
    easing: 'bounce',
    strokeWidth: 6,
    from: {color: '#FFEA82', a:0},
    to: {color: '#ED6A5A', a:1},
    // Set default step function for all animate calls
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
    }
  });  
  var rpiBar = new ProgressBar.Circle(rpilogo,{
    color: '#f4511e',
    trailColor: '#eee',
    trailWidth: 1,
    duration: 1400,
    easing: 'bounce',
    strokeWidth: 6,
    from: {color: '#FFEA82', a:0},
    to: {color: '#ED6A5A', a:1},
    // Set default step function for all animate calls
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
    }
  }); 

  var gitBar = new ProgressBar.Circle(gitlogo,{
    color: '#f4511e',
    trailColor: '#eee',
    trailWidth: 1,
    duration: 1400,
    easing: 'bounce',
    strokeWidth: 6,
    from: {color: '#FFEA82', a:0},
    to: {color: '#ED6A5A', a:1},
    // Set default step function for all animate calls
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
    }
  });
  
  
$('.row-one').mouseover(function(){
  nodeBar.animate(0.6);  // Number from 0.0 to 1.0
  jsBar.animate(0.9);  // Number from 0.0 to 1.0
  htmlBar.animate(1.0);  // Number from 0.0 to 1.0  
});


$('.row-two').mouseover(function(){ 
  cssBar.animate(0.7);  // Number from 0.0 to 1.0
  phpBar.animate(0.4);  // Number from 0.0 to 1.0
  angularBar.animate(0.2);  // Number from 0.0 to 1.0
}); 

$('.row-three').mouseover(function(){
  bootstrapBar.animate(0.6);  // Number from 0.0 to 1.0
  jqueryBar.animate(0.5);  // Number from 0.0 to 1.0
  gitBar.animate(0.4);  // Number from 0.0 to 1.0

});

$('.row-four').mouseover(function(){
  cBar.animate(0.8);  // Number from 0.0 to 1.0
  cppBar.animate(0.9);  // Number from 0.0 to 1.0
  pythonBar.animate(0.6);  // Number from 0.0 to 1.0    
});

$('.row-five').mouseover(function(){
  arduinoBar.animate(0.8);  // Number from 0.0 to 1.0
  nmcuBar.animate(0.9);  // Number from 0.0 to 1.0
  rpiBar.animate(0.6);  // Number from 0.0 to 1.0 
});



});