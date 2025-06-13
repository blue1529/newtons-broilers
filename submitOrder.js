document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission

    const item = document.getElementById("item").value;
    const quantity = document.getElementById("quantity")?.value || "Not specified";
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    const subject = encodeURIComponent("New Order from " + name);
    const body = encodeURIComponent(
        `Item: ${item}\nQuantity: ${quantity}\nName: ${name}\nEmail: ${email}\nPhone: ${phone}`
    );

    const mailtoLink = `mailto:newtonsbroilers@gmail.com?subject=${subject}&body=${body}`;

    // Attempt to open default email client
    const opened = window.open(mailtoLink);

    // Fallback to Gmail if the email client didn't open
    setTimeout(() => {
        if (!opened || opened.closed || typeof opened.closed === "undefined") {
            const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=newtonorders@example.com&su=${subject}&body=${body}`;
            window.open(gmailURL, "_blank");
            alert("If your email app didn't open, we've opened Gmail in a new tab. Please send the message manually.");
        }
    }, 800);
});
