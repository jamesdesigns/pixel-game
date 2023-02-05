const element = document.getElementById("quote-box");
element.addEventListener("click", myFunction);

function myFunction() {
  var person = prompt("Hi! What's your name?");
  var quoteBox = document.querySelector('#quote-box')
  quoteBox.classList.add('show');
  if (person != null) {
    document.getElementById("test").innerText = `Hi ${person}! Nice to meet you?`
  }
}