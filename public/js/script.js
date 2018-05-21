var details = [
  {
    name: 'Lagos Invasion',
    info: "industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"
  },
  {
    name: 'Ikeja Stampade',
    info: "standard dummy text ever since the 1500s, w ok a galley of type and scrambled it to make a typehen an unknown printer to ndustry. Lorem Ipsum has been the industry's specimen book. It has survived not only five centuries,"
  },

  {
    name: 'Abuja city',
    info: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.'
  },
  {
    name: 'Kenya, Narobi city',
    info: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form'
  },
  {
    name: 'Ibanda city',
    info: " If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators"
  }
]

$('.main-section .latest-hits .hits').on('mouseenter', function () {
  $(this).children('.info').show().addClass('animated fadeInUp')

  $(this).on('mouseleave', function () {
    $('.main-section .latest-hits .hits .info').hide()
  })
})

$('.event .main-event ul li').on('click', function () {
  var $this = $(this)
  var pos = parseInt($this.attr('data-num'))
  $('.event .event-info').addClass('animated fadeInUp')
  $('.event .event-info h3').text(details[pos].name)
  $('.event .event-info p').text(details[pos].info)

  $this.on('mouseleave', function () {
    $('.event .event-info').removeClass('animated fadeInUp')
  })
})
