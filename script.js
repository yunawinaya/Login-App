function login() {
  const usernameInput = document.getElementById("username").value;
  const passwordInput = document.getElementById("password").value;
  const result = document.getElementById("result");
  
  if (usernameInput === "yunawinaya" && passwordInput === "sigmaschool") {
    result.innerHTML = "Welcome Yuna!";
    result.style.color = "green";
  } else if (usernameInput === "yunawinaya") {
    result.innerHTML = "Wrong password";
    result.style.color = "red"; 
  } else {
    result.innerHTML = "Wrong username/password";
    result.style.color = "red";
  }
}

