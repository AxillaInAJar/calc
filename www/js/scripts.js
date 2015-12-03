clearAfter = false;

calc = new Object();
calc = {
  clear: function() {
    document.getElementById('calc-input').innerHTML = '';
  },
  bkspc: function() {
    document.getElementById('calc-input').innerHTML = document.getElementById('calc-input').innerHTML.substr(0, document.getElementById('calc-input').innerHTML.length - 1);
  },
  input: function(str) {
    if(clearAfter == true) { document.getElementById('calc-input').innerHTML = ''; clearAfter = false; }
    document.getElementById('calc-input').innerHTML += str;
  },
  eval: function() {
    if(document.getElementById('calc-input').innerHTML == "") {
    	return;
    }
    try {
	result = eval(document.getElementById('calc-input').innerHTML.replace(/×/g,"*").replace(/÷/g, "/"));
    } catch(err) {
	result = "<b style='color:red; font-style:italic;'>Syntax Error.</b>";
	clearAfter = true;
    }
    document.getElementById('calc-input').innerHTML = result;
  }
}