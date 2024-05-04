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
            document.getElementById("youtubeText").innerText = "Follow us on Youtube ✅";
            grantXPAndUpdateText("youtubeText");
        }, 30000);
    });

    document.getElementById("twitterIcon").addEventListener("click", function(event) {
        event.preventDefault();
        var link = this.href;
        window.location.href = link;
        setTimeout(function() {
            document.getElementById("twitterText").innerText = "Follow us on Twitter ✅";
            grantXPAndUpdateText("twitterText");
        }, 30000);
    });

    document.getElementById("whatsappIcon").addEventListener("click", function(event) {
        event.preventDefault();
        var link = this.href;
        window.location.href = link;
        setTimeout(function() {
            document.getElementById("whatsappText").innerText = "Follow us on Whatsapp ✅";
            grantXPAndUpdateText("whatsappText");
        }, 30000);
    });

    document.getElementById("telegramIcon").addEventListener("click", function(event) {
        event.preventDefault();
        var link = this.href;
        window.location.href = link;
        setTimeout(function() {
            document.getElementById("telegramText").innerText = "Follow us on Telegram ✅";
            grantXPAndUpdateText("telegramText");
        }, 30000);
    });
    document.getElementById("instagramIcon").addEventListener("click", function(event) {
        event.preventDefault();
        var link = this.href;
        window.location.href = link;
        setTimeout(function() {
            document.getElementById("instagramText").innerText = "Follow us on Telegram ✅";
            grantXPAndUpdateText("instagramText");
        }, 30000);
    });