function validate() {
    const inputEmail = document.getElementById('email');
    inputEmail.addEventListener('change', () => {
      const pattern = /[a-z]+@[a-z]+\.[a-z]+/g;

      if (!inputEmail.value.match(pattern)) {
        inputEmail.setAttribute('class', 'error');
      } else {
        inputEmail.removeAttribute('class');
      }
    });
  }