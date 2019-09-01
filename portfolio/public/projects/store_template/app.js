document.addEventListener("DOMContentLoaded", function(event) {
    {
        //closes top promoBanner
        let promoBanner = document.getElementById("promoBanner");
        let closePromoBtn = document.getElementById("closePromo");
        closePromoBtn.onclick = () => {
            promoBanner.style.display = "none";
        };
    }

    {
        //menu functionality
        let elem = document.getElementById("hamburger");
        let change = 0.1;
        let toggled = false;
        elem.onclick = function() {
            const time = {
                start: null,
                total: 2000
            };

            const tick = now => {
                if (!time.start) {
                    time.start = now;
                }
                time.elapsed = now - time.start;
                if (time.elapsed < time.total) {
                    elem.style.transform = "scale(" + change + ")";
                    change = change + 0.1;
                    requestAnimationFrame(tick);
                }
            };
            requestAnimationFrame(tick);
        };
    }
});
