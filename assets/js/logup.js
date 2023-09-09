//jshint esversion:6

const signup_form = document.querySelector('#signup');
const username = document.querySelector('#username');
const password = document.querySelector('#pwd');
const password2 = document.querySelector('#pwdc');
const email = document.querySelector('#email');
const gender = document.querySelector('#gender');
// adding eventlistener on submit

signup_form.addEventListener('submit', e => {
	e.preventDefault();
	
	check();
});


function check(){
    let counter=0;
    const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();


    // e.preventDefault();

    if(usernameValue === '') {
		setErrorFor(username, 'Username cannot be blank');
	} else {
		setSuccessFor(username);
        counter++;
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
        counter++;
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
	} else {
		setSuccessFor(password);
        counter++;
	}
	
	if(password2Value === '') {
		setErrorFor(password2, 'Password2 cannot be blank');
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Passwords does not match');
	} else{
		setSuccessFor(password2);
        counter++;
	}
    console.log(counter)
    if (counter==4){
        console.log("Success");
        register();
    }
}
  
    // const floating_btn = document.querySelector('.floating-btn');
    // const close_btn = document.querySelector('.close-btn');
    // const social_panel_container = document.querySelector('.social-panel-container');

    // floating_btn.addEventListener('click', () => {
    //     social_panel_container.classList.toggle('visible');
    // });

    // close_btn.addEventListener('click', () => {
    //     social_panel_container.classList.remove('visible');
// });


function register() {
    // e.preventDefault();
    // let username_len = checkLength(username.value, 5);
    // let password_len = checkLength(password.value, 8);
    // let email_len = checkLength(email.value, 6)

    // create a new object with the form info
    let newUser = {
        username: username.value,
        password: password.value,
        email: email.value,
        gender: gender.value
    }

    // Insert the object into the database 
    let transaction = DB.transaction(['Accounts'], 'readwrite');
    let objectStore = transaction.objectStore('Accounts');
    // if (!username_len) {
    //     username.style.borderColor = "red";
    //     if (!password_len) {
    //         password.style.borderColor = "red";
    //     }
    // } else {

    let request = objectStore.add(newUser);
    localStorage.setItem("loggedIn", newUser.username);
    request.onsuccess = () => {
        location.href = "index.html";
    };
    transaction.oncomplete = () => {

        console.log('New user added');
    };
    transaction.onerror = () => {
        console.log('There was an error, try again!');
    };

    // }



}



// ====================================================4



function checkLength(string, len) {
    if (string.length >= len) {
        return true;
    }else{
        return false;
    }
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-group error';
	small.innerText = message;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-group success';
}
    
function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


	
	
