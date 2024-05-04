    // Function to grant XP after 5 seconds and update text
    function grantXPAndUpdateText(elementId) {
        document.getElementById(elementId).innerText = "You Got 20 XP";
        // Add your XP granting logic here, for example, incrementing a user's XP by 20
        console.log("You've been granted 20 XP!");
        // Store XP in local storage
        var currentXP = localStorage.getItem('XP') || 0; // Get current XP or default to 0
        currentXP = parseInt(currentXP) + 20; // Increment XP by 20
        localStorage.setItem('XP', currentXP); // Store updated XP
    }

    // Event listeners for each social media icon
    document.getElementById("youtubeIcon").addEventListener("click", function(event) {
        // Prevent default link behavior
        event.preventDefault();
        // Get the link href
        var link = this.href;
        // Redirect user to YouTube page
        window.location.href = link;
        // Grant XP after 5 seconds
        setTimeout(function() {
            grantXPAndUpdateText("youtubeText");
        }, 5000);
    });

    document.getElementById("twitterIcon").addEventListener("click", function(event) {
        event.preventDefault();
        var link = this.href;
        window.location.href = link;
        setTimeout(function() {
            grantXPAndUpdateText("twitterText");
        }, 5000);
    });

    document.getElementById("whatsappIcon").addEventListener("click", function(event) {
        event.preventDefault();
        var link = this.href;
        window.location.href = link;
        setTimeout(function() {
            grantXPAndUpdateText("whatsappText");
        }, 5000);
    });

    document.getElementById("telegramIcon").addEventListener("click", function(event) {
        event.preventDefault();
        var link = this.href;
        window.location.href = link;
        setTimeout(function() {
            grantXPAndUpdateText("telegramText");
        }, 5000);
    });
    document.getElementById("instagramIcon").addEventListener("click", function(event) {
        event.preventDefault();
        var link = this.href;
        window.location.href = link;
        setTimeout(function() {
            grantXPAndUpdateText("instagramText");
        }, 5000);
    });

    var btn = document.getElementById("openPopup");
    var popup = document.getElementById("popup");
    var closeBtn = popup.querySelector(".popup-close");
    btn.addEventListener("click", function() {
        popup.style.display = "block";
    });
    closeBtn.addEventListener("click", function() {
        popup.style.display = "none";
    });