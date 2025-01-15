function loadText(id, message) {
  document.querySelector('#buttonEnv').style.display = "none";
  document.querySelector(id).innerHTML = message;
}

//Runs on page load
document.querySelector('#secretButton').addEventListener("click", () => {
    loadText('#message', 'Hello World Divya! ');
});
