document.getElementById("submitEmail").addEventListener("click", function () {
    const item = document.getElementById("item").value;
    const quantity = document.getElementById("quantity").value || "Not specified";
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value || "Not provided";
    const phone = document.getElementById("phone").value;

    const subject = encodeURIComponent("New Order from " + name);
    const body = encodeURIComponent(
        `Item: ${item}\nQuantity: ${quantity}\nName: ${name}\nEmail: ${email}\nPhone: ${phone}`
    );

    const receiverEmail = "newtonsbroilers@gmail.com";

    const mailtoLink = `mailto:${receiverEmail}?subject=${subject}&body=${body}`;
    const opened = window.open(mailtoLink);

    setTimeout(() => {
        if (!opened || opened.closed || typeof opened.closed === "undefined") {
        const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${receiverEmail}&su=${subject}&body=${body}`;
        window.open(gmailURL, "_blank");
        alert("If your email app didn't open, Gmail has been opened in a new tab.");
        }
    }, 800);
});

document.getElementById("submitWA").addEventListener("click", function () {
    const item = document.getElementById("item").value;
    const quantity = document.getElementById("quantity").value || "Not specified";
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value || "Not provided";
    const phone = document.getElementById("phone").value;

    const message = encodeURIComponent(
        `*New Order Received*:\n\nItem: ${item}\nQuantity: ${quantity}\nName: ${name}\nEmail: ${email}\nPhone: ${phone}`
    );

    //my phone number
    const receiverPhone = "265996893890";

    const waLink = `https://wa.me/${receiverPhone}?text=${message}`;
    window.open(waLink, "_blank");

});
