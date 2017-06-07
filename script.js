(function(){var tabsText = {
  tab_1: '<div class="tab" data-tabs="1">Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных выступлений в домашних условиях.</div>',

  tab_2: '<div class="tab" data-tabs="2">При создании генератора мы использовали небезизвестный универсальный код речей.В отличии от lorem ipsum, текст рыба на русском языке наполнит любой макет непонятным смыслом и придаст неповторимый колорит советских времен.</div>',

  tab_3: '<div class="tab" data-tabs="3">По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у некторых людей недоумение при попытках прочитать рыбу текст.</div> '
};

var tubsButton = {
  Btab_1: '<div class="button buttonTVisit" data-tabs="1">tab_1</div>',
  Btab_2: '<div class="button" data-tabs="2">tab_2</div>',
  Btab_3: '<div class="button" data-tabs="3">tab_3</div>'
}
function tubs(objT, objTB){
  $('body').append('<div class="tabMenu"></div>');
  $('<div class="tabB"></div>').appendTo('.tabMenu');
  $('.tabMenu').append('<div class="infoTab"></div>');
  function makeTubs(){
    for(var key in objT){
      $(objT[key]).appendTo('.infoTab');
    }
  }

  function makeTubsButton(){
    for(var key in objTB){
      $(objTB[key]).appendTo('.tabB');
    }
  }
  makeTubsButton();
  makeTubs();
}
tubs(tabsText, tubsButton);



///////////////////////////////////////////////////////
var $button = $('.button');
var $tab = $('.tab');
$button.on('click', function(e){
  var active = false;
  var button = $(this);
  for(var i = 0; i <= $tab.length; i++){
    if(button.data().tabs == $($tab[i]).data().tabs){
      if(!active){
        $($tab).hide();
        $('.button').removeClass('buttonTVisit');

      }
        button.toggleClass('buttonTVisit');
        $($tab[i]).show();
        break
  }
}
})
}());
