  const scriptURL = 'https://script.google.com/macros/s/AKfycbyX50RNvDAlPN8Pqah1gh_ytZczzF2n3aMb1pI_dLKTnZqgcekGL7N5yMldiv-r76Pk/exec'
  const form = document.forms['submit-to-google-sheet']
  const message = document.getElementById("msg")

  
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then(response => {
        message.innerHTML = "Your massage has been sent!"
        setTimeout(function() {
          message.innerHTML = ""
        }, 3000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })