import React from 'react';

function getInputElements() {
  let firstName = document.getElementById('fname').value;
  let lastName = document.getElementById('lname').value;
  let email = document.getElementById('email').value;
    
  if(firstName!=""&&email!=""){
      alert(`Thank you ${firstName}, you'll receive an email shortly`);    
  }
}


class Contact extends React.Component{
    
    render(){
      return(
        <div id="Contact">
            <h1>Contact</h1>
            <form id="contactForm" onsubmit="#">
                <label for="fname">First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your First name"/>
                <label for="lname">Last Name</label>
                <input type="text" id="lname" name="lastname" placeholder="Your last name"/>
                <label for="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Your Email"/>
                <input onClick={getInputElements} type="submit" value="Submit"/>
            </form>
        </div>
      );
    }
  }

  export default Contact;