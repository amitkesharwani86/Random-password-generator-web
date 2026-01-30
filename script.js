function generatepass() {
    const length = Number(document.getElementById('inputlengeth').value);

    const includeLower = document.getElementById('includelower').checked;
    const includeUpper = document.getElementById('includeupper').checked;
    const includeNumbers = document.getElementById('includenumbers').checked;
    const includeSpecial = document.getElementById('includespechar').checked;

    if (length < 1) {
        alert("Password length must be at least 1");
        return;
    }

    if (!includeLower && !includeUpper && !includeNumbers && !includeSpecial) {
        alert("Select at least one option");
        return;
    }

    const lower = "abcdefghijklmnopqrstuvwxyz";
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const special = "!@#$%^&*()_+[]{}|;:,.<>?";

    let pool = "";
    let password = "";

    if (includeLower) {
        pool += lower;
        password += lower[Math.floor(Math.random() * lower.length)];
    }
    if (includeUpper) {
        pool += upper;
        password += upper[Math.floor(Math.random() * upper.length)];
    }
    if (includeNumbers) {
        pool += numbers;
        password += numbers[Math.floor(Math.random() * numbers.length)];
    }
    if (includeSpecial) {
        pool += special;
        password += special[Math.floor(Math.random() * special.length)];
    }

    for (let i = password.length; i < length; i++) {
        password += pool[Math.floor(Math.random() * pool.length)];
    }

    document.getElementById("generatedpassword").textContent = password;
}