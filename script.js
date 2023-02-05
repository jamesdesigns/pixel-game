function myFunction() {
  var person = prompt("Hi! What's your name?");
  if (person != null) {
    document.getElementById("test").innerText = `Hi ${person}! Nice to meet you?`
  }
}