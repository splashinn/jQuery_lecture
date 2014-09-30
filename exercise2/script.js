// $(document).ready() prevents script from running until document is fully loaded
  $(document).ready(function() {
    var $slider = $('.slider');
    var $slide = 'li'; // could also use 'img' if you're not using a ul
    var $transition_time = 10;
    var $time_between_slides = 3000; // 3 seconds

    function slides(){
      return $slider.find($slide);
    }

    slides().fadeOut();

    // set active classes
    slides().first().addClass('active');
    slides().first().fadeIn($transition_time);

    // auto scroll
    $interval = setInterval(
      function(){
        var $i = $slider.find($slide + '.active').index();

        slides().eq($i).removeClass('active');
        slides().eq($i).fadeOut($transition_time);

        if (slides().length == $i + 1) $i = -1; // loop to start

        slides().eq($i + 1).fadeIn($transition_time);
        slides().eq($i + 1).addClass('active');
      }
      , $transition_time +  $time_between_slides
    );
  });
