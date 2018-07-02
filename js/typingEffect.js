const wrapper = document.querySelector('.desc__wrapper');
const text = document.querySelector('.desc__text');
let textCont = text.textContent;
text.style.display = "none";

for (let i = 0; i < textCont.length; i++) {
  (function(i) {
    setTimeout(function() {
      let texts = document.createTextNode(textCont[i]);
      let span = document.createElement('span');
      span.appendChild(texts);
      wrapper.appendChild(span);
    }, 30 * i);
  }(i));
}
