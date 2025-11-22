document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.contact-form');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const name = this.querySelector('input[type=text]').value;
      const email = this.querySelector('input[type=email]').value;
      const message = this.querySelector('textarea').value;
      const mailto = `mailto:yourmail@example.com?subject=Сообщение от ${name}&body=Email: ${email}%0A%0A${message}`;
      window.location.href = mailto;
    });
  }
});