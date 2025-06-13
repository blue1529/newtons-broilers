document.getElementById("orderForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const item = document.getElementById("item").value;
    const quantity = document.getElementById("quantity").value;
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    const subject = encodeURIComponent("Order from Newton's Fresh Poultry");
    const body = encodeURIComponent(
        `Hello,\n\nI'd like to place an order for:\n\n` +
        `Item: ${item}\nQuantity: ${quantity}\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\n\n` +
        `Please confirm receipt. Thank you.`
    );

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=newtonsbroilers@gmail.com&su=${subject}&body=${body}`;

    // Try opening Gmail in a new tab
    const gmailWindow = window.open(gmailUrl, '_blank');

    // Fallback: use mailto if Gmail tab fails to open
    setTimeout(() => {
        if (!gmailWindow || gmailWindow.closed || typeof gmailWindow.closed === 'undefined') {
            const fallbackMailto = `mailto:newtonsbroilers@gmail.com?subject=${subject}&body=${body}`;
            const fallbackWindow = window.open(fallbackMailto, '_self');

            // Final fallback: alert the user
            setTimeout(() => {
                if (!fallbackWindow || fallbackWindow.closed || typeof fallbackWindow.closed === 'undefined') {
                    alert("We couldn't open your email client. Please send your order manually to newtonsbroilers@gmail.com.");
                }
            }, 1000);
        }
    }, 1000);
});

document.getElementById("orderForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const item = document.getElementById("item").value;
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;

  const subject = encodeURIComponent("New Order from " + name);
  const body = encodeURIComponent(
    `Order Details:\n\nItem: ${item}\nName: ${name}\nEmail: ${email}\nPhone: ${phone}`
  );

  const mailtoLink = `mailto:newtonsbroilers@gmail.com?subject=${subject}&body=${body}`;

  // Try to open the default mail app (Gmail or other)
  window.location.href = mailtoLink;

  // Fallback alert for mobile users in case nothing happens
  setTimeout(() => {
    if (!navigator.userAgent.includes("Mac") && !navigator.userAgent.includes("Windows")) {
      alert("If the email app did not open, please copy your order details and email us at: newtonsbroilers@gmail.com");
    }
  }, 1500);
});

