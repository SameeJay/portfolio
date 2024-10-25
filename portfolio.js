/*==============Scroll page render==============*/
function checkVisibility() {
  var pageTop = $(document).scrollTop();
  var pageBottom = pageTop + $(window).height();
  var tags = $(".fadein");

  for (var i = 0; i < tags.length; i++) {
    var tag = tags[i];

    // Adjust the offset or add additional conditions as needed
    if ($(tag).offset().top < pageBottom) {
      // Check if the element doesn't already have the "visible" class
      if (!$(tag).hasClass("visible")) {
        $(tag).addClass("visible");

        // Additional actions when an element becomes visible can be added here
      }
    } else {
      // Check if the element has the "visible" class
      if ($(tag).hasClass("visible")) {
        $(tag).removeClass("visible");

        // Additional actions when an element becomes hidden can be added here
      }
    }
  }
}

// Run the checkVisibility function when the document is ready
$(document).ready(function () {
  checkVisibility();
});

// Run the checkVisibility function on scroll
$(document).on("scroll", function () {
  checkVisibility();
});
s;
/*==============Typing Animation==============*/
var type = new Typed(".typing", {
  strings: ["Web Developer", "Full-Stack Developer"],
  typeSpeed: 100,
  BackSpeed: 100,
  loop: true,
});

/*==========="aside-bar" toggle when clicking nav-toggle===========*/
document.addEventListener("DOMContentLoaded", function () {
  let myQuery = document.querySelector(".aside");

  document.querySelector(".nav-toggle").addEventListener("click", () => {
    if (myQuery.getAttribute("id") === "nav-tog") {
      myQuery.removeAttribute("id");
    } else {
      myQuery.setAttribute("id", "nav-tog");
    }
  });

  let myQuery2 = document.querySelector(".nav-toggle");
  myQuery2.addEventListener("click", () => {
    if (myQuery2.getAttribute("id") === "clicked") {
      myQuery2.removeAttribute("id");
    } else {
      myQuery2.setAttribute("id", "clicked");
    }
  });

  /*-----------Remove aside-bar when scrolling-------------- */
  window.addEventListener("scroll", () => {
    let myElement = document.querySelector(".aside");
    let myElement2 = document.querySelector(".nav-toggle");

    if (myElement) {
      myElement.removeAttribute("id");
    }

    if (myElement2) {
      myElement2.removeAttribute("id");
    }
  });
});
