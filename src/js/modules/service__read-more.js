export const ServiceReadMoreExport = () => {
  let textItem = document.querySelectorAll('.service__text');
  const readMore = document.querySelector('.service__block-text-btn');

  function addHidden () {
    if (window.innerWidth > 1119) {                        //
      for (let i = 2; i < textItem.length; i++) {          //
        textItem[i].classList.add('hidden');               //
      }                                                    //
    } else if(window.innerWidth > 767) {
      for (let i = 2; i < textItem.length; i++) {
        textItem[i].classList.add('hidden');
      }
    }else {
      for (let i = 1; i < textItem.length; i++) {
        textItem[i].classList.add('hidden');
      }
    }
    readMore.classList.add('closed');
    readMore.classList.remove('opened');
  }
  addHidden();



  console.log(readMore.classList.contains('closed'));
  readMore.addEventListener('click', function() {

    if (readMore.classList.contains('closed') == true) {

      readMore.classList.remove('closed');
      readMore.classList.add('opened');
      
      for (let i = 0; i < textItem.length; i++) {
        textItem[i].classList.remove('hidden');
      }

    }else {
      addHidden();
    }
  });
}