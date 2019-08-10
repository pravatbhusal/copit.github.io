// smoothly scroll into an element
function smoothScroll(element) {
  element.scrollIntoView({
    behavior: "smooth",
    block: "center",
    inline: "center"
  });
}

// transition to the download screen
function goToDownload() {
  var downloadDiv = document.getElementById("download");
  smoothScroll(downloadDiv);
}

// transition to the features screen
function goToFeatures() {
  var featuresDiv = document.getElementById("features");
  smoothScroll(featuresDiv);
}

// transition to the contact (social media) screen
function goToContact() {
  var socialDiv = document.getElementById("social");
  smoothScroll(socialDiv);
}
