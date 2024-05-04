    function grantXPAndUpdateText(elementId) {
        console.log("You've been granted 20 XP!");
        var currentXP = localStorage.getItem('XP') || 0;
        currentXP = parseInt(currentXP) + 20;
        localStorage.setItem('XP', currentXP);
    }
    document.getElementById("youtubeIcon").addEventListener("click", function(event) {
        event.preventDefault();
        var link = this.href;
        window.location.href = link;
        setTimeout(function() {
            grantXPAndUpdateText("youtubeText");
        }, 5000);
    });

    document.getElementById("twitterIcon").addEventListener("click", function(event) {
        event.preventDefault();
        var link = this.href;
        window.location.href = link;
        setTimeout(function() {
            document.getElementById("twitterText").innerText = "Follow us on Twitter ✅";
            grantXPAndUpdateText("twitterText");
        }, 5000);
    });

    document.getElementById("whatsappIcon").addEventListener("click", function(event) {
        event.preventDefault();
        var link = this.href;
        window.location.href = link;
        setTimeout(function() {
            document.getElementById("whatsappText").innerText = "Follow us on Whatsapp ✅";
            grantXPAndUpdateText("whatsappText");
        }, 5000);
    });

    document.getElementById("telegramIcon").addEventListener("click", function(event) {
        event.preventDefault();
        var link = this.href;
        window.location.href = link;
        setTimeout(function() {
            document.getElementById("telegramText").innerText = "Follow us on Telegram ✅";
            grantXPAndUpdateText("telegramText");
        }, 5000);
    });
    document.getElementById("instagramIcon").addEventListener("click", function(event) {
        event.preventDefault();
        var link = this.href;
        window.location.href = link;
        setTimeout(function() {
            document.getElementById("instagramText").innerText = "Follow us on Telegram ✅";
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