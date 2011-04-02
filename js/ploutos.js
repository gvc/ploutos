function init() {
  formatFields();
  $('FORM').submit(function(e) {
    e.preventDefault();
    
    if($(this).find('LABEL.erro').length == 0) {
      console.log('tudo certo')
    } else {
      console.log('algo errado')
    }
  });
}

function formatFields() {
  $('#valor').blur(function(e) {
    if(!$(this).val().match(/^\d{1,5},\d{2}$/)) {
      $(this).parent().find('label').addClass('erro');
    } else {
      $(this).parent().find('label').removeClass('erro');
    }
  });
  
  $('#data').mask('99/99/9999', { placeholder: " " }).blur(function(e) {
    var dataArray = $(this).val().split('/');
    
    var data = new Date(dataArray[2] + '-' + dataArray[1] + '-' + dataArray[0]);
    
    if(isNaN(data.getMonth())) {
      $(this).parent().find('label').addClass('erro');
    } else {
      $(this).parent().find('label').removeClass('erro');
    }
  });
  
  $('#descricao').blur(function(e) {
    if($(this).val().length == 0) {
      $(this).parent().find('label').addClass('erro');
    } else {
      $(this).parent().find('label').removeClass('erro');
    }
  });
}


function isNumber(valor) {
  var numbers = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57]

  return numbers.indexOf(valor) != -1;
}

$(init);