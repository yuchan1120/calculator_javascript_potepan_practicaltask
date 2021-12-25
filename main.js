function get_calc(btn) {
  if (btn.value == "AC") {
    document.dentaku.display.value = "0";
    document.getElementById("button+").disabled = false;
    document.getElementById("button-").disabled = false;
    document.getElementById("button*").disabled = false;
    document.getElementById("button/").disabled = false;
    document.getElementById("button.").disabled = false;
   }
  else if(btn.value == "=") {
    document.dentaku.display.value = eval(document.dentaku.display.value);
    document.getElementById("button+").disabled = false;
    document.getElementById("button-").disabled = false;
    document.getElementById("button*").disabled = false;
    document.getElementById("button/").disabled = false;
    let str = String(document.dentaku.display.value)
    if(str.indexOf('.') = -1){
    }else{
      document.getElementById("button.").disabled = false;
    }
  }
  else if(btn.value == "+"){
    document.dentaku.display.value += btn.value;
    document.getElementById("button.").disabled = false;
    document.getElementById("button+").disabled = true;
    document.getElementById("button-").disabled = true;
    document.getElementById("button*").disabled = true;
    document.getElementById("button/").disabled = true;
    document.getElementById("button.").disabled = true;
  }
  else if(btn.value == "-"){
    document.dentaku.display.value += btn.value;
    document.getElementById("button.").disabled = false;
    document.getElementById("button+").disabled = true;
    document.getElementById("button-").disabled = true;
    document.getElementById("button*").disabled = true;
    document.getElementById("button/").disabled = true;
    document.getElementById("button.").disabled = true;
  }
  else if(btn.value == "*"){
    document.dentaku.display.value += btn.value;
    document.getElementById("button.").disabled = false;
    document.getElementById("button+").disabled = true;
    document.getElementById("button-").disabled = true;
    document.getElementById("button*").disabled = true;
    document.getElementById("button/").disabled = true;
    document.getElementById("button.").disabled = true;
  }
  else if(btn.value == "/"){
    document.dentaku.display.value += btn.value;
    document.getElementById("button.").disabled = false;
    document.getElementById("button+").disabled = true;
    document.getElementById("button-").disabled = true;
    document.getElementById("button*").disabled = true;
    document.getElementById("button/").disabled = true;
    document.getElementById("button.").disabled = true;
  }
  else if(btn.value == "."){
    document.dentaku.display.value += btn.value;
    document.getElementById("button.").disabled = true;
  }
  else{
    if(document.dentaku.display.value == "0"){
    document.dentaku.display.value = btn.value;
   }else{
    document.dentaku.display.value += btn.value;
   }
  }
}