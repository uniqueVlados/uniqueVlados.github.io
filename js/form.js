function handleFormSubmit(event) {
    //event.preventDefault()
    if (document.getElementById('InputName').value != "" && document.getElementById('InputEmail').value != "" 
    && document.getElementById('program_3').value != "" && document.getElementById('InputSubject').value != ""
    && document.getElementById('InputMessage').value != ""){
      $.ajax({
        type: 'POST',
        url: 'https://api.telegram.org/bot5469423688:AAFFYjZ5A3dHmdfROAbPyyjyMH1Jx-GBJHI/sendMessage',
        data: {'chat_id': 456022925, 
        'text': 'Имя: ' + document.getElementById('InputName').value +
        '\n--------\nПочта: ' + document.getElementById('InputEmail').value + 
        '\n--------\nРежим: ' + document.getElementById('program_3').value + 
         '\n--------\nУдобное время и способы связи\n' 
        + document.getElementById('InputSubject').value +
        '\n--------\nПочему решил учиться\n' 
        + document.getElementById('InputMessage').value
      }
    });
    document.getElementById('InputName').value = ""
    document.getElementById('InputEmail').value = ""
    document.getElementById('program_3').value = ""
    document.getElementById('InputSubject').value = ""
    document.getElementById('InputMessage').value = ""
    document.getElementById('submit').innerHTML= "Отправлено"
    document.getElementById('submit').className = "btn btn-success";
    document.getElementById('submit').disabled = true;
    }
  }
  
  const applicantForm = document.getElementById('contact-form')
  applicantForm.addEventListener('submit', handleFormSubmit)


  function program_1(){
    document.getElementById('program_3').value = "Junior"
  }

  function program_2(){
    document.getElementById('program_3').value = "Middle"
  }

  function program_3(){
    document.getElementById('program_3').value = "Senior"
  }
