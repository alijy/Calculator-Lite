document.addEventListener("DOMContentLoaded", function(){
  var display = document.getElementById("screen");

  var input = '';

  var numButton = document.getElementsByClassName("buttonNum");
  for (var i = 0; i < numButton.length; i++) {
    numButton[i].addEventListener("click", numClicked);
  }

  var opButton = document.getElementsByClassName("operator");
  for (var i = 0; i < opButton.length; i++) {
    opButton[i].addEventListener("click", opClicked);
  }

  var acButton = document.getElementsByClassName("buttonClear");
    acButton[0].addEventListener("click", acClicked);

  var eqButton = document.getElementsByClassName("equals");
    eqButton[0].addEventListener("click", eqClicked);

  function numClicked() {
    var num = this.innerHTML;
    switch (num) {
      case "1":
        addNum("1");
        break;
      case "2":
        addNum("2");
        break;
      case "3":
        addNum("3");
        break;
      case "4":
        addNum("4");
        break;
      case "5":
        addNum("5");
        break;
      case "6":
        addNum("6");
        break;
      case "7":
        addNum("7");
        break;
      case "8":
        addNum("8");
        break;
      case "9":
        addNum("9");
        break;
    }
  }

  function addNum(num) {
    if (input == '') {
      display.innerHTML = '';
    }
    if (isNaN(input.slice(-1))) {
      display.innerHTML = num;
    } else {
      display.innerHTML += num;
    }
    input += num;
    display.innerHTML = input;
  }

  function opClicked() {
    var op = this.innerHTML;
    switch (op) {
      case "+":
        display.innerHTML = "+";
        addOperation("+");
        break;
      case "-":
        display.innerHTML = "-";
        addOperation("-");
        break;
      case "*":
        display.innerHTML = "*";
        addOperation("*");
        break;
      case "/":
        display.innerHTML = "/";
        addOperation("/");
        break;
    }
  }

  function addOperation(op) {
    if (!(input == "" && (op =="*" || op == "/"))) {
      if (isNaN(input.slice(-1))) {
        input = input.slice(0,-1) + op;
      } else {
        input += op;
      }
      display.innerHTML = input;
    }
  }

  function acClicked() {
    input = '';
    display.innerHTML = "My Calculator";
  }

  function eqClicked() {
    if (isNaN(input.slice(-1))) {
      input = input.slice(0, -1);
    }
    display.innerHTML = eval(input);
    input = '';
    // input = eval(input);
  }

});
