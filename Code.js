let emailId = document.getElementById("email");
emailId.addEventListener("click", function() {
    let email = emailId.textContent;
    navigator.clipboard.writeText(email);
    alert("Copied to clipboard!")
});

let phoneId = document.getElementById("phoneNumber");
phoneId.addEventListener("click", function() {
    let phone = phoneId.textContent;
    navigator.clipboard.writeText(phone);
    alert("Copied to clipboard!")
});

let linkedInId = document.getElementById("linkedIn");
linkedInId.addEventListener("click", function() {
    let linkedIn = linkedInId.textContent;
    navigator.clipboard.writeText(linkedIn);
    alert("Copied to clipboard!")
});