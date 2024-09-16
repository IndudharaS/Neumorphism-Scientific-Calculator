var screen = document.querySelector("#screen");
var btn = document.querySelectorAll(".btn");

// Button click logic
for (let item of btn) {
    item.addEventListener("click", (e) => {
        let btntext = e.target.innerText;

        if (btntext === "×") {
            btntext = "*";
        }

        if (btntext === "÷") {
            btntext = "/";
        }

        screen.value += btntext;
    });
}

// Function to evaluate the expression
function evaluateExpression() {
    try {
        let result = eval(screen.value);
        if (result === Infinity || result === -Infinity) {
            screen.value = "Infinity"; // Show 'Infinity' in display
        } else {
            screen.value = result;
        }
    } catch (e) {
        screen.value = "Invalid Expression"; // Show 'Invalid Expression' in display
    }
}

// Attach evaluateExpression function to the "=" button
document.getElementById("eval").addEventListener("click", evaluateExpression);

// Clear the display if "Invalid Expression" or "Infinity" is displayed and the user types something
screen.addEventListener("input", function () {
    if (screen.value === "Invalid Expression" || screen.value === "Infinity") {
        screen.value = ""; // Clear the display if user starts typing
    }
});

// Math functions
function sin() {
    screen.value = Math.sin(screen.value);
}
function cos() {
    screen.value = Math.cos(screen.value);
}
function tan() {
    screen.value = Math.tan(screen.value);
}
function pow() {
    screen.value = Math.pow(screen.value, 2);
}
function sqrt() {
    screen.value = Math.sqrt(screen.value);
}
function log() {
    screen.value = Math.log(screen.value);
}
function pi() {
    screen.value = 3.14159265359;
}
function e() {
    screen.value = 2.71828182846;
}
function fact() {
    var num = screen.value;
    screen.value = factorial(num);
}
function factorial(n) {
    return n <= 1 ? 1 : n * factorial(n - 1);
}
function backspc() {
    screen.value = screen.value.substr(0, screen.value.length - 1);
}

// Additional functions
function square() {
    screen.value = Math.pow(screen.value, 2);
}
function cube() {
    screen.value = Math.pow(screen.value, 3);
}
function inv() {
    screen.value = 1 / screen.value;
}
function abs() {
    screen.value = Math.abs(screen.value);
}
function exp() {
    screen.value = Math.exp(screen.value);
}
function ln() {
    screen.value = Math.log(screen.value);
}
function rad() {
    screen.value = (screen.value * Math.PI) / 180;
}
function deg() {
    screen.value = (screen.value * 180) / Math.PI;
}

// Toggle between dark and light themes
function toggleTheme() {
    document.body.classList.toggle("dark-mode");
    const buttons = document.querySelectorAll("button");
    buttons.forEach((btn) => btn.classList.toggle("dark-mode"));
    const screen = document.getElementById("screen");
    screen.classList.toggle("dark-mode");
}
