$(document).ready(function () {
  $('.check').prop('disabled', true)
 
  let timer
  let smallTimer
  //Random puzzle in left-block
  function random() {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    let randArr = array.sort(function (a, b) { return 0.5 - Math.random() });

    $('#puzzles-left').html('');
    for (let i = 0; i < array.length; i++) {
      $('#puzzles-left').append("<div id='left-piece-" + array[i] + "'class='puzzle-left'>" + array[i] + "</div>")

    }

  }
  random()








  // Drop and drag in left and right puzzles
  let count = 1
  $('.puzzle-left').draggable()
  $('.puzzle-right').droppable({

    drop: function (event, ui) {
      $('.check').prop('disabled', false)
      $('.check').css('backgroundColor', 'rgba(255, 0, 0, 0.843)')

      $('.puzzle-right').css('backgroundColor', 'white')
      var draggableElement = ui.draggable
      var droppedOn = $(this)
      droppedOn.addClass("piecePresent")
      $(draggableElement)
        .addClass("droppedPiece")
        .css({
          top: 0,
          left: 0,
          position: 'relative'
        }).appendTo(droppedOn)

      if (count == 1) {
        let seconds = 60
        $('.start').css('backgroundColor', 'lightcoral')
        $('.start').prop('disabled', 'true')

        //Timer start if drag the piece on right-block
        timer = setInterval(function () {
          seconds = seconds - 1
          $('.second').text(seconds)
          if (seconds > 0) {
            $('.minute').text('00')
          }
          if (seconds < 10 && seconds >= 0) {
            $('.second').text('0' + seconds)

          }
          if (seconds == 0) {
            clearInterval(timer)
            $('h2').text("It's a pity, but you lost")
            $('.modal-window').css('display', 'inline')
            $('.check').prop('disabled', 'true')
            $('.check').css('backgroundColor', 'lightcoral')
            $('.green-check').css('display', 'none')
          }
        }, 1000)

        let smallSeconds = 60
        smallTimer = setInterval(function () {
          smallSeconds = smallSeconds - 1
          $('.small-second').text(smallSeconds)
          if (smallSeconds > 0) {
            $('.small-minute').text('00')
          }
          if (smallSeconds < 10 && smallSeconds >= 0) {
            $('.small-second').text('0' + smallSeconds)
          }
          if (smallSeconds == 0) {
            clearInterval(smallTimer)
            $('.small-time').css('display', 'none')
          }
        }, 1000)

      }
      count++
    }
  })









  //Click on the button  'start'
  $('.start').click(function (event) {
    $('.check').prop('disabled', false)
    $('.check').css('backgroundColor', 'rgba(255, 0, 0, 0.843)')
    if (count == 1) {
      let smallSeconds = 60
      //Timer start if clikc on button 'start'
      smallTimer = setInterval(function () {
        smallSeconds = smallSeconds - 1
        $('.small-second').text(smallSeconds)
        if (smallSeconds > 0) {
          $('.small-minute').text('00')
        }
        if (smallSeconds < 10 && smallSeconds >= 0) {
          $('.small-second').text('0' + smallSeconds)
        }
        if (smallSeconds == 0) {
          clearInterval(smallTimer)
          $('.small-time').css('display', 'none')
        }
      }, 1000)
      let seconds = 60
      $('.start').css('backgroundColor', 'lightcoral')
      $('.start').prop('disabled', 'true')

      //Timer start if clikc on button 'start'
      timer = setInterval(function () {
        seconds = seconds - 1
        $('.second').text(seconds)
        if (seconds > 0) {
          $('.minute').text('00')
        }
        if (seconds < 10 && seconds >= 0) {
          $('.second').text('0' + seconds)
        }
        if (seconds == 0) {
          clearInterval(timer)
          $('h2').text("It's a pity, but you lost")
          $('.modal-window').css('display', 'inline')
          $('.check').prop('disabled', 'true')
          $('.check').css('backgroundColor', 'lightcoral')
          $('.green-check').css('display', 'none')
        }
      }, 1000)
      if ($('.modal-window').attr("display") == 'none') {
        clearInterval(timer)
      }
      count++
    }
  })
  //Click on button 'check'
  $('.check').click(function () {
    $('.modal-window').css('display', 'inline')
    $('h2').text('You still have a time, you sure?')

  })


  //Click on red button 'close'
  $('.red-close').click(function () {
    $('.modal-window').css('display', 'none')

  })



  //Reload with click button 'new'
  $('.new').click(function () {
    location.reload()
  })



  //Click on green-check
  $('.green-check').click(function () {
    $('.green-check').css('display', 'none')
    $('.check').prop('disabled', true)
    $('.check').css('backgroundColor', 'lightcoral')
    clearInterval(timer)
    clearInterval(smallTimer)
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
    let check = true
    for (let i = 0; i < numbers.length; i++) {
      if (($('.puzzle-left', '.puzzle-right').eq(i).text() != [i + 1])) {
        check = false
        break
      }
    }
    if (check) {
      $('h2').text('Woohoo,well done, you did it!')

      // alert('You win');
    }
    else {
      $('h2').text("It's a pity, but you lost")
    }
    check = true;
    console.log(check)
  })



})

