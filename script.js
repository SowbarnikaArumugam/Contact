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

  displayContact();

  });
  function displayContact(){
    const rightbox = document.querySelector('.right-box');
    rightbox.innerHTML = '<h1>Contact Details</h1>';
    
    let contacts = JSON.parse(localStorage.getItem('contacts')) || [];
    
    contacts.forEach(function(contact, index){
        const contactdiv = document.createElement('div');
        contactdiv.classList.add('contact-item');
        contactdiv.innerHTML = `
            <p>Name: ${contact.name}</p>
            <p>Number:${contact.number}</p>
            <button  onclick="renameContact(${index})">Rename</button>
            <button onclick="deleteContact(${index})">Delete</button> `;
    
    rightbox.appendChild(contactdiv);
    });
  }
  
  window.renameContact =  function(index){
    let contacts = JSON.parse(localStorage.getItem('contacts')) ||[];
    const contact = contacts[index];
    let newname =  prompt("Enter new name:", contact.name);
    if (newname){
       contact.name = newname;
       contacts[index] = contact;
       localStorage.setItem('contacts', JSON.stringify(contacts,null,2));
    
    displayContact();
    }
  };
  
  window.deleteContact = function(index){
    let contacts = JSON.parse(localStorage.getItem('contacts')) || [];
    const contact = contacts[index];
    contacts.splice(index,1);
    localStorage.setItem('contacts', JSON.stringify(contacts,null,2));
    displayContact();
  };



   displayContact();

});