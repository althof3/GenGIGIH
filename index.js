const onSubmitForm = (event) => {
  event.preventDefault();
  alert('data submited succesfully! 😄')
  document.getElementById('title').value = ''
  document.getElementById('description').value = ''
}