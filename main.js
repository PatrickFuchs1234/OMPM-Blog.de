$('.hamburger-button').click(function(){
    $('.mobile-menu').fadeToggle(100);
    $(this).toggleClass('active');
});



function createCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}
function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
// making cookie timeout
function eraseCookie(name) {
    createCookie(name,"",-1);
}




const cookieBanner = document.querySelector('#cookie-notice')
const cookieButtons = cookieBanner.querySelectorAll('.cookieButton')
const acceptAllButton = cookieBanner.querySelector('.accept-all')
let allCookiesAccepted = true
let unaccepted = false 


// button initilisaztion
cookieButtons.forEach(button => {
let buttonCookie = button.dataset.cookieType

if ( readCookie(buttonCookie) == 'accepted' ){
    button.classList.remove('unaccepted')
    button.classList.add('accepted')
}

button.addEventListener('click', () => {
    
    if (button.classList.contains('unaccepted')){
    button.classList.remove('unaccepted')
    button.classList.add('accepted')
    createCookie(buttonCookie,'accepted',31)
    } else {
    button.classList.add('unaccepted')
    button.classList.remove('accepted')
    // could be arrasecookie
    createCookie(buttonCookie,'unaccepted',31) 
    }
    runCookies()
    console.log(buttonCookie, readCookie(buttonCookie))
})

})

  // checks for unaccepted cookie buttons 
function checkForUnacceptedCookies() {
  console.log('cookie checker')

  if (Array.from(cookieButtons).some((node) => node.classList.contains('unaccepted'))) {
    return true
  }
  return false
}
  

  // runs the codes based on different button
  function runCookies() {
      allCookiesAccepted = true
      if (readCookie('anacliticCookies')=='accepted') {
        // analitic cookie codes
      } 
      if (readCookie('darkmode')=='accepted') {
        // darkmode cookie codes
        document.querySelector('body').classList.add('darkmode')
      } else {
        document.querySelector('body').classList.remove('darkmode')
      }

      // this loop with  ...
      if (readCookie('hideBanner') != 'accepted') {
        cookieBanner.classList.add('active')
      } else {
        cookieBanner.classList.remove('active')
      }

      console.log(checkForUnacceptedCookies(),'output')

      // that statemant for hide banner
      if (checkForUnacceptedCookies() === true) {
        acceptAllButton.classList.remove('accepted')
        acceptAllButton.classList.add('unaccepted')
      } else {
        acceptAllButton.classList.remove('unaccepted')
        acceptAllButton.classList.add('accepted')
      }
  }


  // runs the cookies 
  runCookies()



// just a checker for dev
  console.log("cookies", document.cookie, allCookiesAccepted)

const allCookieButton = cookieBanner.querySelector('.accept-all')

allCookieButton.addEventListener('click', () => {
    if (allCookieButton.classList.contains('unaccepted')) {
        cookieButtons.forEach(button => {

            if (button.classList.contains('unaccepted')) {
                button.click()
            }

        })
    } else {
        cookieButtons.forEach(button => {

            button.click()

        })
    }
})
  
