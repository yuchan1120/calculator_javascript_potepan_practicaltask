function get_calc(btn) {
  if (btn.value == "AC") {
    document.dentaku.display.value = "0";
    document.getElementById("button+").disabled = false;
    document.getElementById("button-").disabled = false;
    document.getElementById("button*").disabled = false;
    document.getElementById("button/").disabled = false;
    document.getElementById("button.").disabled = false;
    document.getElementById("button0").disabled = false;
    document.getElementById("button1").disabled = false;
    document.getElementById("button2").disabled = false;
    document.getElementById("button3").disabled = false;
    document.getElementById("button4").disabled = false;
    document.getElementById("button5").disabled = false;
    document.getElementById("button6").disabled = false;
    document.getElementById("button7").disabled = false;
    document.getElementById("button8").disabled = false;
    document.getElementById("button9").disabled = false;
    document.getElementById("button00").disabled = false;
    document.getElementById("button=").disabled = false;
   }
  else if(btn.value == "=") {
    let result = eval(document.dentaku.display.value);
    result = Math.round(result * 100);
    result = result / 100;
    document.dentaku.display.value = result;
    document.getElementById("button+").disabled = false;
    document.getElementById("button-").disabled = false;
    document.getElementById("button*").disabled = false;
    document.getElementById("button/").disabled = false;
    document.getElementById("button0").disabled = false;
    document.getElementById("button1").disabled = false;
    document.getElementById("button2").disabled = false;
    document.getElementById("button3").disabled = false;
    document.getElementById("button4").disabled = false;
    document.getElementById("button5").disabled = false;
    document.getElementById("button6").disabled = false;
    document.getElementById("button7").disabled = false;
    document.getElementById("button8").disabled = false;
    document.getElementById("button9").disabled = false;
    document.getElementById("button00").disabled = false;
    document.getElementById("button=").disabled = false;
    if(Number.isInteger(result)){
      document.getElementById("button.").disabled = false;
    }
  }
  else if(btn.value == "+"){
    document.dentaku.display.value += btn.value;
    document.getElementById("button.").disabled = true;
    document.getElementById("button+").disabled = true;
    document.getElementById("button-").disabled = true;
    document.getElementById("button*").disabled = true;
    document.getElementById("button/").disabled = true;
    document.getElementById("button00").disabled = true;
    document.getElementById("button=").disabled = true;
    document.getElementById("button0").disabled = false;
    document.getElementById("button1").disabled = false;
    document.getElementById("button2").disabled = false;
    document.getElementById("button3").disabled = false;
    document.getElementById("button4").disabled = false;
    document.getElementById("button5").disabled = false;
    document.getElementById("button6").disabled = false;
    document.getElementById("button7").disabled = false;
    document.getElementById("button8").disabled = false;
    document.getElementById("button9").disabled = false;
  }
  else if(btn.value == "-"){
    document.dentaku.display.value += btn.value;
    document.getElementById("button.").disabled = true;
    document.getElementById("button+").disabled = true;
    document.getElementById("button-").disabled = true;
    document.getElementById("button*").disabled = true;
    document.getElementById("button/").disabled = true;
    document.getElementById("button00").disabled = true;
    document.getElementById("button=").disabled = true;
    document.getElementById("button0").disabled = false;
    document.getElementById("button1").disabled = false;
    document.getElementById("button2").disabled = false;
    document.getElementById("button3").disabled = false;
    document.getElementById("button4").disabled = false;
    document.getElementById("button5").disabled = false;
    document.getElementById("button6").disabled = false;
    document.getElementById("button7").disabled = false;
    document.getElementById("button8").disabled = false;
    document.getElementById("button9").disabled = false;
  }
  else if(btn.value == "*"){
    document.dentaku.display.value += btn.value;
    document.getElementById("button.").disabled = true;
    document.getElementById("button+").disabled = true;
    document.getElementById("button-").disabled = true;
    document.getElementById("button*").disabled = true;
    document.getElementById("button/").disabled = true;
    document.getElementById("button00").disabled = true;
    document.getElementById("button=").disabled = true;
    document.getElementById("button0").disabled = false;
    document.getElementById("button1").disabled = false;
    document.getElementById("button2").disabled = false;
    document.getElementById("button3").disabled = false;
    document.getElementById("button4").disabled = false;
    document.getElementById("button5").disabled = false;
    document.getElementById("button6").disabled = false;
    document.getElementById("button7").disabled = false;
    document.getElementById("button8").disabled = false;
    document.getElementById("button9").disabled = false;
  }
  else if(btn.value == "/"){
    document.dentaku.display.value += btn.value;
    document.getElementById("button.").disabled = true;
    document.getElementById("button+").disabled = true;
    document.getElementById("button-").disabled = true;
    document.getElementById("button*").disabled = true;
    document.getElementById("button/").disabled = true;
    document.getElementById("button00").disabled = true;
    document.getElementById("button=").disabled = true;
    document.getElementById("button0").disabled = false;
    document.getElementById("button1").disabled = false;
    document.getElementById("button2").disabled = false;
    document.getElementById("button3").disabled = false;
    document.getElementById("button4").disabled = false;
    document.getElementById("button5").disabled = false;
    document.getElementById("button6").disabled = false;
    document.getElementById("button7").disabled = false;
    document.getElementById("button8").disabled = false;
    document.getElementById("button9").disabled = false;
  }
  else if(btn.value == "."){
    if(document.dentaku.display.value == "0"){
      document.dentaku.display.value = 0 + btn.value;
      document.getElementById("button.").disabled = true;
      document.getElementById("button0").disabled = false;
      document.getElementById("button1").disabled = false;
      document.getElementById("button2").disabled = false;
      document.getElementById("button3").disabled = false;
      document.getElementById("button4").disabled = false;
      document.getElementById("button5").disabled = false;
      document.getElementById("button6").disabled = false;
      document.getElementById("button7").disabled = false;
      document.getElementById("button8").disabled = false;
      document.getElementById("button9").disabled = false;
      document.getElementById("button00").disabled = false;
    }
    else if(document.dentaku.display.value == "00"){
      document.dentaku.display.value = 0 + btn.value;
      document.getElementById("button.").disabled = true;
      document.getElementById("button0").disabled = false;
      document.getElementById("button1").disabled = false;
      document.getElementById("button2").disabled = false;
      document.getElementById("button3").disabled = false;
      document.getElementById("button4").disabled = false;
      document.getElementById("button5").disabled = false;
      document.getElementById("button6").disabled = false;
      document.getElementById("button7").disabled = false;
      document.getElementById("button8").disabled = false;
      document.getElementById("button9").disabled = false;
      document.getElementById("button00").disabled = false;
     }
    else if(document.dentaku.display.value == "1"){
      document.dentaku.display.value += btn.value;
      document.getElementById("button.").disabled = true;
    }
    else if(document.dentaku.display.value == "2"){
      document.dentaku.display.value += btn.value;
      document.getElementById("button.").disabled = true;
    }
    else if(document.dentaku.display.value == "3"){
      document.dentaku.display.value += btn.value;
      document.getElementById("button.").disabled = true;
    }
    else if(document.dentaku.display.value == "4"){
      document.dentaku.display.value += btn.value;
      document.getElementById("button.").disabled = true;
    }
    else if(document.dentaku.display.value == "5"){
      document.dentaku.display.value += btn.value;
      document.getElementById("button.").disabled = true;
    }
    else if(document.dentaku.display.value == "6"){
      document.dentaku.display.value += btn.value;
      document.getElementById("button.").disabled = true;
    }
    else if(document.dentaku.display.value == "7"){
      document.dentaku.display.value += btn.value;
      document.getElementById("button.").disabled = true;
    }
    else if(document.dentaku.display.value == "8"){
      document.dentaku.display.value += btn.value;
      document.getElementById("button.").disabled = true;
    }
    else if(document.dentaku.display.value == "9"){
      document.dentaku.display.value += btn.value;
      document.getElementById("button.").disabled = true;
    }
     else{
     document.dentaku.display.value += btn.value;
     document.getElementById("button.").disabled = true;
     document.getElementById("button0").disabled = false;
     document.getElementById("button1").disabled = false;
     document.getElementById("button2").disabled = false;
     document.getElementById("button3").disabled = false;
     document.getElementById("button4").disabled = false;
     document.getElementById("button5").disabled = false;
     document.getElementById("button6").disabled = false;
     document.getElementById("button7").disabled = false;
     document.getElementById("button8").disabled = false;
     document.getElementById("button9").disabled = false;
     }
  }
  else if(btn.value == "0"){
    if(document.dentaku.display.value == "0"){
      document.dentaku.display.value = btn.value;
      document.getElementById("button.").disabled = false;
    }
    else{
      document.dentaku.display.value += btn.value;
      document.getElementById("button.").disabled = true;
      document.getElementById("button+").disabled = false;
      document.getElementById("button-").disabled = false;
      document.getElementById("button*").disabled = false;
      document.getElementById("button/").disabled = false;
      document.getElementById("button=").disabled = false;
      let str = String(document.dentaku.display.value)
      if(str.lastIndexOf('.') <= str.lastIndexOf('+')){
        document.getElementById("button.").disabled = false;
      }
      if(str.lastIndexOf('.') <= str.lastIndexOf('-')){
        document.getElementById("button.").disabled = false;
      }
      if(str.lastIndexOf('.') <= str.lastIndexOf('*')){
        document.getElementById("button.").disabled = false;
      }
      if(str.lastIndexOf('.') <= str.lastIndexOf('/')){
        document.getElementById("button.").disabled = false;
      }
      if(str.lastIndexOf('0') != -1){
        if(str.lastIndexOf('+') != -1){
          if(str.lastIndexOf('0') > str.lastIndexOf('+')){
            document.getElementById("button0").disabled = true;
            document.getElementById("button1").disabled = true;
            document.getElementById("button2").disabled = true;
            document.getElementById("button3").disabled = true;
            document.getElementById("button4").disabled = true;
            document.getElementById("button5").disabled = true;
            document.getElementById("button6").disabled = true;
            document.getElementById("button7").disabled = true;
            document.getElementById("button8").disabled = true;
            document.getElementById("button9").disabled = true;
          }
        }
        if(str.lastIndexOf('-') != -1){
          if(str.lastIndexOf('0') > str.lastIndexOf('-')){
            document.getElementById("button0").disabled = true;
            document.getElementById("button1").disabled = true;
            document.getElementById("button2").disabled = true;
            document.getElementById("button3").disabled = true;
            document.getElementById("button4").disabled = true;
            document.getElementById("button5").disabled = true;
            document.getElementById("button6").disabled = true;
            document.getElementById("button7").disabled = true;
            document.getElementById("button8").disabled = true;
            document.getElementById("button9").disabled = true;
          }
        }
        if(str.lastIndexOf('*') != -1){
          if(str.lastIndexOf('0') > str.lastIndexOf('*')){
            document.getElementById("button0").disabled = true;
            document.getElementById("button1").disabled = true;
            document.getElementById("button2").disabled = true;
            document.getElementById("button3").disabled = true;
            document.getElementById("button4").disabled = true;
            document.getElementById("button5").disabled = true;
            document.getElementById("button6").disabled = true;
            document.getElementById("button7").disabled = true;
            document.getElementById("button8").disabled = true;
            document.getElementById("button9").disabled = true;
          }
        }
        if(str.lastIndexOf('/') != -1){
          if(str.lastIndexOf('0') > str.lastIndexOf('/')){
            document.getElementById("button0").disabled = true;
            document.getElementById("button1").disabled = true;
            document.getElementById("button2").disabled = true;
            document.getElementById("button3").disabled = true;
            document.getElementById("button4").disabled = true;
            document.getElementById("button5").disabled = true;
            document.getElementById("button6").disabled = true;
            document.getElementById("button7").disabled = true;
            document.getElementById("button8").disabled = true;
            document.getElementById("button9").disabled = true;
          }
        }
      }
    }
  }
  else{
    if(document.dentaku.display.value == "0"){
    document.dentaku.display.value = btn.value;
  }
  else if(document.dentaku.display.value == "00"){
    document.dentaku.display.value = btn.value;
   }
   else{
    document.dentaku.display.value += btn.value;
    document.getElementById("button.").disabled = true;
    document.getElementById("button+").disabled = false;
    document.getElementById("button-").disabled = false;
    document.getElementById("button*").disabled = false;
    document.getElementById("button/").disabled = false;
    document.getElementById("button00").disabled = false;
    document.getElementById("button=").disabled = false;
    let str2 = String(document.dentaku.display.value)
     if(str2.lastIndexOf('.') <= str2.lastIndexOf('+')){
      document.getElementById("button.").disabled = false;
     }
     if(str2.lastIndexOf('.') <= str2.lastIndexOf('-')){
      document.getElementById("button.").disabled = false;
     }
     if(str2.lastIndexOf('.') <= str2.lastIndexOf('*')){
      document.getElementById("button.").disabled = false;
     }
     if(str2.lastIndexOf('.') <= str2.lastIndexOf('/')){
      document.getElementById("button.").disabled = false;
     }
    }
  }
}
