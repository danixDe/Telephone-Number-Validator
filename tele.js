const input = document.getElementById("user-input");
const check = document.getElementById("check-btn");
const clear = document.getElementById("clear-btn");
const result = document.getElementById("results-div");

const blankout = () => {
    result.textContent = "";
};

const match = (x) => {
    if (x === '') {
        alert('Please enter a number');
        return;
    }
    const countrycode = `^(1\\s?)?`;
    const areacode = `(\\([0-9]{3}\\)|[0-9]{3})`;
    const space = `[\\s\\-]?`;
    const pno = `[0-9]{3}[\\s\\-]?[0-9]{4}$`;

    const phoneRegx = new RegExp(
        `${countrycode}${areacode}${space}${pno}`
    );

    const ptag = document.createElement("p");
    ptag.classList.add('results');
    ptag.style.color = phoneRegx.test(x) ? '#217C21' : '#8C2B16';

    ptag.textContent = `${phoneRegx.test(x) ? 'Valid' : 'Invalid'} US Number: ${x}`;
    result.appendChild(ptag);
};

check.addEventListener("click", () => {
    console.log("button clicked");
    match(input.value);
});

input.addEventListener("keydown", e => {
    if (e.key === "Enter") {
        console.log("yaas bish")
        match(input.value);
    }
});

clear.addEventListener("click", blankout);



