$(function(){
  $('.mainheadone').delay(1500).animate({
    opacity: 1, top: 30
  }, 1100);
  $('.mainheadtwo').delay(3000).animate({
    opacity: 1
  }, 700);
  $('.mainheadthree').delay(4500).animate({
    opacity: 1
  }, 500)
  $('.svgarrow').delay(5400).animate({
    opacity: 1
  }, 600);
});

$(function(){
  // About
  var waypoint = new Waypoint({
    element: document.getElementById('i1'),
    handler: function(direction) {
      if (direction === 'down') {
        $('#i1').addClass('animated fadeInUp');
      }
    },
    offset: 680
  });
  var waypoint = new Waypoint({
    element: document.getElementById('i2'),
    handler: function(direction) {
      if (direction === 'down') {
        $('#i2').addClass('animated fadeInUp');
      }
    },
    offset: 680
  });
  var waypoint = new Waypoint({
    element: document.getElementById('i3'),
    handler: function(direction) {
      if (direction === 'down') {
        $('#i3').addClass('animated fadeInUp');
      }
    },
    offset: 680
  });
  var waypoint = new Waypoint({
    element: document.getElementById('i4'),
    handler: function(direction) {
      if (direction === 'down') {
        $('#i4').addClass('animated fadeInUp');
        $('#a2').addClass('animated fadeIn');
      }
    },
    offset: 680
  });

  // Work
  var waypoint = new Waypoint({
    element: document.getElementById('c1'),
    handler: function(direction) {
      if (direction === 'down') {
        $('#c1').addClass('animated fadeInUp');
      }
    },
    offset: 680
  });
  var waypoint = new Waypoint({
    element: document.getElementById('c2'),
    handler: function(direction) {
      if (direction === 'down') {
        $('#c2').addClass('animated fadeInUp');
      }
    },
    offset: 680
  });
  var waypoint = new Waypoint({
    element: document.getElementById('c3'),
    handler: function(direction) {
      if (direction === 'down') {
        $('#c3').addClass('animated fadeInUp');
      }
    },
    offset: 680
  });
  var waypoint = new Waypoint({
    element: document.getElementById('c4'),
    handler: function(direction) {
      if (direction === 'down') {
        $('#c4').addClass('animated fadeInUp');
      }
    },
    offset: 680
  });
  var waypoint = new Waypoint({
    element: document.getElementById('c5'),
    handler: function(direction) {
      if (direction === 'down') {
        $('#c5').addClass('animated fadeInUp');
      }
    },
    offset: 680
  });
  var waypoint = new Waypoint({
    element: document.getElementById('c6'),
    handler: function(direction) {
      if (direction === 'down') {
        $('#c6').addClass('animated fadeInUp');
        $('#a3').addClass('animated fadeIn');
      }
    },
    offset: 680
  });

  // Contact
  var waypoint = new Waypoint({
    element: document.getElementById('e1'),
    handler: function(direction) {
      if (direction === 'down') {
        $('#e1').addClass('animated fadeInUp');
      }
    },
    offset: 900
  });
  var waypoint = new Waypoint({
    element: document.getElementById('e2'),
    handler: function(direction) {
      if (direction === 'down') {
        $('#e2').addClass('animated fadeInUp');
      }
    },
    offset: 880
  });
});
