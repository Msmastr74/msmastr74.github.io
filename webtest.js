function change() {
        const changing = document.getElementById("test2");
        const ref = document.getElementById("testr").value;
        changing.innerHTML = ref
    }
function login() {
const username = document.getElementById("username").value;
const password = document.getElementById("password").value;
const security = document.getElementById("security").value;
const changing2 = document.getElementById("logedin");
if ((username === "Msmastr74") && (password === "2406") && (security === "Far Cry 5")) {
    changing2.innerHTML = "Thank you for logging in";
    console.log("sombody logged in!!!!");
} else {
    changing2.innerHTML = "Username or password incorrect";
    console.log("login attempt found!!!");
}
}