const onSubmitForm = (form, event) => {
  event.preventDefault();
  console.log(form);
  alert('data submited succesfully! 😄')
  form.reset()
}