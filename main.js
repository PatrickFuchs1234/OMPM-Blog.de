$('.hamburger-button').click(function(){
    $('.mobile-menu').fadeToggle(100);
    $(this).toggleClass('active');
});

function createCookie(name, value, days) {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
  }
  function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == " ") c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }
  function eraseCookie(name) {
    createCookie(name, "", -1);
  }
  
  function runCookiedCodes() {
    // Add tracking scripts here
    window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-TTER589G1V');
     // End tracking scripts

    console.log("cookies ran");
  }
  
  if (readCookie("cookie-notice-accepted") == "true") {
    runCookiedCodes();
  document.querySelector(".reshow-button").classList.add("hide-button");
    
  } else {
    
    document.getElementById("cookie-notice").style.display = "block";
  }
  
  document
    .getElementById("cookie-notice-accept")
    .addEventListener("click", function () {
      createCookie("cookie-notice-accepted", "true", 31);
      document.getElementById("cookie-notice").style.display = "none";
      document.getElementById("cookie-notice").classList.add("hide-button");
      runCookiedCodes();
    });
  
  document
    .querySelector("#close-cookie-banner")
    .addEventListener("click", (e) => {
      eraseCookie("cookie-notice-accepted")
      document.getElementById("cookie-notice").style.display = "none";

      console.log("cookies erased")
    });
  
  document.querySelector(".reshow-button")
    .addEventListener("click", function() {
    document.getElementById("cookie-notice").style.display = "block";
  });
    
// farbe svg welle aus vorhergehender section ziehen

document.addEventListener("DOMContentLoaded", function () {
  // Suche nach dem SVG-Pfad im Footer
  const curvePath = document.querySelector('.bottom-curve path');

  // Finde die vorhergehende Section vor dem Footer
  const previousSection = document.querySelector('.previous-section'); // Setze hier deine Klasse für die vorhergehende Section

  if (curvePath) {
    // Standardfarbe (weiß) setzen, falls keine vorhergehende Section gefunden wird
    let bgColor = "#FFFFFF"; 

    if (previousSection) {
        // Hole die Hintergrundfarbe der vorhergehenden Section
        bgColor = window.getComputedStyle(previousSection).backgroundColor;
    }

      // Setze die Farbe des SVG-Pfades auf die Hintergrundfarbe der vorhergehenden Section
      curvePath.setAttribute('fill', bgColor);
  }
});

// ig content blocker
function loadInstagram() {
  document.getElementById("instagram-placeholder").style.display = "none";
  document.getElementById("instagram-content").style.display = "block";
}