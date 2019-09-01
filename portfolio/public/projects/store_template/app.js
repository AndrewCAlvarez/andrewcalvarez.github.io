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
        /*
            click menu
            animates into an x
        */

        //menu functionality
        let toggled = false;
        document.getElementById("hamburger").onclick = function() {
            if (!toggled) toggled = true;
            else toggled = false;
            console.log(toggled);
            animate_hamburger_menu(toggled);
        };

        function animate_hamburger_menu(toggled) {
            const time = {
                start: null,
                total: 3000
            };
            var current_time = Date.now();

            function tick(current_time) {
                if (!time.start) {
                    time.start = current_time;
                }
                time.elapsed = current_time - time.start;
                if (time.elapsed < time.total) {
                    //Animation goes here
                    select_hamburger_animation(toggled);
                    requestAnimationFrame(tick);
                }
            }
            requestAnimationFrame(tick);
        }

        function select_hamburger_animation(toggled) {
            if (toggled) {
                animate_hamburger_start();
            } else {
                animate_hamburger_end();
            }
        }

        function animate_hamburger_start() {
            document.getElementById("hamburger--bar1").style.transform =
                "scale(1.2)";
        }

        function animate_hamburger_end() {
            document.getElementById("hamburger--bar1").style.transform =
                "scale(.5)";
        }
    }
});
