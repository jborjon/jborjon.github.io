(function () {
  "use strict";

  function rotateText(cipherText) {
    // Thanks to Rachael at hellodevworld.com/365-days-of-coding/rot13-cipher-javascript-solution
    const offset = 13;
    return cipherText.replace(/[a-z]/gi, letter => String.fromCharCode(letter.charCodeAt(0) + (letter.toLowerCase() <= "m" ? offset : -offset)));
  }
 
  let contactArea = document.getElementById("contact-info"),
      contactInfo = "<" + "n uers" + "='znvygb:jbex" + "@wbfrcuobewba." + "pbz?fhowrpg=Vadhvel%20sebz%20Jrofvgr'>jbex" + "@wbfrcuobewba." + "pbz</n>";

  contactArea.innerHTML = rotateText(contactInfo);
}());
