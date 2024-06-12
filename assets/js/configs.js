const users = [
    { username: 'usuario1', password: 'contraseña1' },
    { username: 'usuario2', password: 'contraseña2' }
];

function validateForm() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    if (password.length < 8) {
        errorMessage.textContent = "La contraseña debe tener al menos 8 caracteres.";
        errorMessage.style.color = "red";
        return false;
    }

    const user = users.find(u => u.username === username && u.password === password);
    
    if (!user) {
        errorMessage.textContent = "Usuario o contraseña incorrectos.";
        errorMessage.style.color = "red";
        return false;
    }

    errorMessage.textContent = "";
    alert("Inicio de sesión exitoso!");
    window.location.href = "index.html";
    return true;
}

function validateRegisterForm() {
    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;
    const successMessage = document.getElementById('register-success-message');
    const successMessageBueno = document.getElementById('register-success-message-bueno');

    if (password.length < 8) {
        successMessage.textContent = "La contraseña debe tener al menos 8 caracteres.";
        successMessage.style.color = "red";
        return false;
    }

    const existingUser = users.find(u => u.username === username);
    if (existingUser) {
        successMessage.textContent = "El usuario ya está registrado.";
        successMessage.style.color = "red";
        return false;
    }

    users.push({ username, password });
    if (!existingUser) {
        successMessage.textContent = "¡Registro exitoso!";
        successMessage.style.color = "#28a745";
        return false;
    }

}

