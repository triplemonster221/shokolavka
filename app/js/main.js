
$(document).ready(function(){


    // убираем скролл

  function calcScroll() {
    let div = document.createElement('div');
  
    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';
  
    document.body.appendChild(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();
  
    return scrollWidth;
  }

    // вывод модальных окон

    function bindModals(TriggerSelector, modalsSelector, closeSelector){
      const trigger = document.querySelectorAll(TriggerSelector),
          modals = document.querySelector(modalsSelector),
          close = document.querySelector(closeSelector),
          modalInner = document.querySelector('.modal'),
          scroll = calcScroll();
       //let text;

      trigger.forEach(element => {
          element.addEventListener('click', (e) => {
              if(e.target){
                  e.preventDefault();
              }
             
              modalInner.classList.add('active');
              modals.classList.add('active');
              document.body.style.overflow = 'hidden';
             document.body.style.marginRight = `${scroll}px`;
              
          }) 
      });
      if(close){  
        close.addEventListener('click', () => {
            modalInner.classList.remove('active');
            modals.classList.remove('active');
            document.body.style.overflow = '';
            document.body.style.marginRight = `0px`;
            if(modals.classList.contains("modal-video")){
              let ModalVideo = modals.querySelector('.modal-content').innerHTML='';
            }
        })
      }
      if(modalInner){
      modalInner.addEventListener('click', (e) => {
          if(e.target === modalInner) {
              modalInner.classList.remove('active');
              modals.classList.remove('active');
              document.body.style.overflow = '';
              document.body.style.marginRight = `0px`;
              if(modals.classList.contains("modal-video")){
                let ModalVideo = modals.querySelector('.modal-content').innerHTML='';
              }
          }
      }) 
    }  

      

      // modalExit();
      function modalExit() {
          
          let popupExit = document.querySelector('.modal-away');
          let close = document.querySelector('.modal-away .clouse');
          let count = 0
          if(popupExit){
          $(document).mouseleave(function (e) {
              if (count == 1) {
                  return
                  
              }
              if (e.clientY < 1 && !modalInner.classList.contains('active') ){
                  
                    modalInner.classList.add('active');
                    popupExit.classList.add('active');
                    document.body.style.overflow = 'hidden';
                    document.body.style.marginRight = `${scroll}px`;
            
                
                  if (popupExit.classList.contains('active')) {
                        document.body.addEventListener('keydown', function (e) {
                          if (e.keyCode === 27) {
                              modalInner.classList.remove('active');
                              popupExit.classList.remove('active');
                              document.body.style.overflow = '';
                          }
                      })
                      modalInner.addEventListener('click', (e) => {
                        if(e.target === modalInner) {
                            modalInner.classList.remove('active');
                            popupExit.classList.remove('active');
                            document.body.style.overflow = '';
                            document.body.style.marginRight = `0px`;
                        }
                      }) 

                      if(close){
                          close.addEventListener('click', () => {
                            console.log(11);
                            modalInner.classList.remove('active');
                            popupExit.classList.remove('active');
                            document.body.style.overflow = '';
                            document.body.style.marginRight = `0px`;
                        })
                      }
                  }
                  
              }
              count++;
          })
        }
      }

      setTimeout(function() {
        modalExit();
      }, 100);
      
    }; 
    bindModals('.header__calBack', '.modal-callBack ', '.modal-callBack  .clouse');
    bindModals('.footer-phone__back', '.modal-callBack ', '.modal-callBack  .clouse');
    bindModals('.asortiment-bottom-btn', '.modal-callBack', '.modal-callBack .clouse');

    bindModals('.policy', '.modal-politika', '.modal-politika .clouses');
    bindModals('.start-bottom-righ-btn ', '.modal-download', '.modal-download .clouse');
    bindModals('.invest-bottom-btn', '.modal-download', '.modal-download .clouse');
 
    // формы с лендоса


    bindModals('.mob_form-offer', '.offer-form', '.offer-form .clouse');
    bindModals('.mob_form-total', '.total-form ', '.total-form  .clouse');
    bindModals('.mob_form-types', '.types-form', '.types-form .clouse');

$('.slick-slider').slick({
  centerMode: true,
  slidesToShow: 3,
  centerPadding:'20px',
  dots: true,
  arrows: true,
  swipe: true,
//  infinite: true,
  swipeToSlide: true,
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 650,
      settings: {
        centerMode: false,
        slidesToShow: 1,
        dots: true,
        arrows: false,
        swipeToSlide: false,
        adaptiveHeight: false,
      }
    }
  ]
  });

  $('.offer-slider').slick({
    slidesToShow: 3,
    adaptiveHeight: true,
    dots: false,
    arrows: false,
    swipe: true,
    responsive: [
        {
          breakpoint: 650,
          settings: {
            slidesToShow: 1,
            dots: true,
            arrows: false,
          }
        }
      ]
  })


  $('.shop-slider').slick({
    slidesToShow: 4,
    dots: false,
    arrows: true,
    swipe: true,
    responsive: [
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          dots: false,
          arrows: true,
        }
      }
    ]
  })

  $('.types-slider').slick({
    slidesToShow: 3,
    adaptiveHeight: true,
    dots: false,
    arrows: true,
    swipe: true,
    responsive: [
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          dots: true,
          arrows: false,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  })


  let sliderContent = document.querySelectorAll('.calc-row');

  sliderContent.forEach(element => {
    let selector = element.querySelector('#selector');
    let slider = element.querySelector('.slider');
    let selectorvalue = element.querySelector('#selectorvalue ');
    let calcInp = element.querySelector('.calc-inp');

    selector.style.left = (slider.value - slider.min) * 100 / (slider.max - slider.min) + '% ';

    selectorvalue.style.width = (slider.value - slider.min) * 100 / (slider.max - slider.min) + '% ';
    calcInp.value = slider.value;
    showUpp()

      slider.oninput = function(){
      selector.style.left = (this.value - this.min) * 100 / (this.max - this.min) + '% ';
      selectorvalue.style.width = (this.value - this.min) * 100 / (this.max - this.min) + '% ';
      calcInp.value = this.value;
      showUpp()
      }
  });

  function showUpp(){
    let shopTotal = document.querySelector('.total-show ');
    let rangePeople = document.querySelector('.range-people');
    let rangeSum = document.querySelector('.range-sum');

    let summ = Math.round(rangePeople.value) * Math.round(rangeSum.value);

    const formatter = new Intl.NumberFormat('ru');
    summ = formatter.format(Math.round(summ));
    shopTotal.innerHTML = summ;
  }


  function showMore(){
    let btns = document.querySelectorAll('.start-box-info__more');

    btns.forEach(el => {
      el.addEventListener('click', function(){
        let wrapper = this.closest('.start-box');
        wrapper.classList.toggle('_active');
        // wrapper.style.height = '100%';
      })
    })
  }

  showMore()


  const numbers = document.querySelectorAll('.phone');

  numbers.forEach(element => {

      // var phoneMask = IMask(element, {
      //   mask: '+{7}(000)000-00-00',
      //   lazy: false,  // make placeholder always visible
      //   placeholderChar: '_'     // defaults to '_'
      // });

      $(element).inputmask({
        "mask": "+ 9 (999) 999-9999",
        showMaskOnHover: false,
        "oncomplete": function(){
          var value = $(this).val();
          $(this).val(value.replace(/(\+)(\s|)(8)/g,"$1$1"+7))
        }
    });

  })

  jQuery.validator.addMethod("checkMask", function(value, element) {
    return /\+ \d{1} \(\d{3}\) \d{3}-\d{4}/g.test(value); 
     });

  $(".sectionForm").each(function() {
    $(this).validate({
      rules: {
        name:{
          required: true,
        },
        phone: {
          required: true,
          checkMask: true
        },
        email: {
          required: true,
          email: true
        }
      }
    });
  });

  function errorSubmit(){
    let inputs = document.querySelectorAll('.pretty');
    
    inputs.forEach(elem => {
      elem.addEventListener('click', function(){
        let input = elem.querySelector('input');
        let form = elem.closest('.sectionForm');
        let formBtn = form.querySelector('.btn');
        if(input.checked) {
          formBtn.classList.add('_active');
        }else {
          formBtn.classList.remove('_active');
        }
      })  
    })
  }
  errorSubmit()

});