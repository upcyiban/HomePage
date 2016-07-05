console.log('\'Allo \'Allo!');
$(document).ready(function () {
showSection();
$('a').on('click',function(){
  $('.showSection').removeClass('showSection-show');
  $('.showSection').addClass('showSection-show');
  });














  function showSection() {
    $('.showSection').removeClass('showSection-show');
    $('.showSection').addClass('showSection-show');
  }

});
