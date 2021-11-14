function validar(field) {
  str = field.value;
  if (str.length > 10) {
    field.value = str.substring(0, str.length - 1);
  }
}

function numerico(evt) {
  var key_code = evt.keyCode ? evt.keyCode : evt.charCode ? evt.charCode : evt.which ? evt.which : void 0;
  if (key_code == 8 || key_code == 9 || key_code == 13 || key_code == 27 || key_code == 46) {
    return true;
  } else if ((key_code >= 35) && (key_code <= 40)) {
    return true
  } else if ((key_code >= 48) && (key_code <= 57)) {
    return true
  }
  return false;
}

//Pegar valor do Select

var select = document.getElementById('tipoQuarto');
var value = select.options[select.selectedIndex].value;

function mostrarValue(){
  console.log(value);
}

