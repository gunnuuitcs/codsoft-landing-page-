const logout_btn = document.querySelector("#logout")


logout_btn.addEventListener('click', logout)


function isLoggedIn() {
    if (!localStorage.getItem("loggedIn")) {
        history.pushState({}, '', "index.html")
        location.href = "login.html"
    }
}

function logout() {
    localStorage.removeItem("loggedIn")
}


export {isLoggedIn}
