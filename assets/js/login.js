// getting the UI
const username = document.querySelector('#username')
const password = document.querySelector('#pwd')
const login_form = document.querySelector('#login')

// adding eventListener
login_form.addEventListener('submit', login)



function login(e) {
    e.preventDefault();
    let transaction = DB.transaction(['Accounts'], 'readwrite');
    let objectStore = transaction.objectStore('Accounts');

    let request = objectStore.index("username");

    request.openCursor().onsuccess = (e) => {
        let cursor = e.target.result;
        if (cursor) {
            if (cursor.value.username == username.value && cursor.value.password == password.value) {
                localStorage.setItem("loggedIn", cursor.value.username)
                history.back()
                return
            }
            cursor.continue()
        }

    }
    transaction.oncomplete = () => {
        console.log('transaction completed');
    }
    transaction.onerror = () => {
        console.log('There was an error, try again!');
    }
}




