const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];


function init() {
  // your code here	 
  var index = 0;
  document.addEventListener('keydown', function (e) {
    const key = parseInt(e.detail || e.which);

    if (key === code[index]) {
      index++;

      if (index === code.length - 1) {
        window.alert("YOU DID IT!");
        index = 0;
      }
    } else {
      index = 0;
    }
  }, false);
	}