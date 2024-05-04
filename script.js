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

    document.getElementById('image-input').addEventListener('change', function(event) {
        var input = event.target;
        var files = input.files;
        var selectedImagesDiv = document.getElementById('selected-images');
        
        // Iterate over selected files
        for (var i = 0; i < files.length; i++) {
        var reader = new FileReader();
        reader.onload = (function(file) {
            return function(e) {
                var img = new Image();
                img.src = e.target.result;
                img.onload = function() {
                var canvas = document.createElement('canvas');
                var ctx = canvas.getContext('2d');
                canvas.width = 50;
                canvas.height = 50;
                ctx.drawImage(img, 0, 0, 50, 50);
                var imgElement = document.createElement('img');
                imgElement.src = canvas.toDataURL();
                selectedImagesDiv.appendChild(imgElement);
                };
            };
            })(files[i]);
            reader.readAsDataURL(files[i]);
        }
        // Clear the input value to allow selecting the same images again
        input.value = '';
    });