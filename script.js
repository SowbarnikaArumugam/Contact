document.addEventListener('DOMContentLoaded',function(){
  const contactForm = document.getElementById('contactForm');
  contactForm.addEventListener('submit',function(event){
  event.preventDefault();

  const formdata = new FormData(contactForm);
  const name = formdata.get('name');
  const number = formdata.get('number');

  const contact = {
    name : name,
    number : number
  };
  
  let contacts = JSON.parse(localStorage.getItem('contacts')) || [];
  contacts.push(contact);
  localStorage.setItem('contacts',JSON.stringify(contacts,null,2));
  
  contactForm.reset();

  display();

  });
  function display(){
    const rightbox = document.querySelector('.right-box');
    rightbox.innerHTML = '';
    
    let contacts = JSON.parse(localStorage.getItem('contacts')) || [];
    
    contacts.forEach(function(contact, index){
        const contactdiv = document.createElement('div');
        contactdiv.classList.add('contact-item');
        contactdiv.innerHTML = `
            <p>Name: ${contact.name}</p>
            <p>Number:: ${contact.number}</p> `;
    
    rightbox.appendChild(contactdiv);
    });
  }
   display();

});