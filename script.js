        const toggleBtn = document.getElementById("menu");
        const closeBtn = document.getElementById("closemenu");
        const nav = document.getElementById("off-nav");
        const overlay = document.getElementById("overlay");
        const navLinks = document.querySelectorAll('.nav-link');
        const lightDark = document.getElementById('dark-light');
        const themeC = document.getElementById('change-theme'); 

        toggleBtn.addEventListener("click", () => {
            nav.classList.add("active");
            overlay.classList.add("active");
        });

        closeBtn.addEventListener("click", closeNav);
        overlay.addEventListener("click", closeNav);

        // Add click handler for nav links
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                closeNav();
            });
        });

        function closeNav() {
            nav.classList.remove("active");
            overlay.classList.remove("active");
        }

        const themeToggleBtn = document.getElementById("change-theme");

        // Check for saved theme preference on page load
        window.addEventListener("DOMContentLoaded", () => {
            const savedTheme = localStorage.getItem("theme");
            if (savedTheme === "light") {
                document.body.classList.add("light-mode");
                // themeToggleBtn.textContent = "Dark Mode"; // Update button text
                themeC.style.backgroundColor = 'lightgrey';
                lightDark.style.left='-50%';
                lightDark.style.transition = ' all 0.3s ease';
            }
        });

        // Add event listener to toggle theme
        themeToggleBtn.addEventListener("click", () => {
            document.body.classList.toggle("light-mode");

            // Save the current theme to localStorage
            if (document.body.classList.contains("light-mode")) {
                localStorage.setItem("theme", "light");
                themeC.style.backgroundColor = 'lightgrey';
                lightDark.style.left='-50%';
                lightDark.style.transition = ' all 0.3s ease';
                

                // themeToggleBtn.textContent = "Dark Mode"; // Update button text
            } else {
                localStorage.setItem("theme", "dark");
                themeC.style.backgroundColor = '#D7AEFB';
                lightDark.style.left='50%';
                lightDark.style.transition = ' all 0.3s ease';

                // themeToggleBtn.textContent = "Light Mode"; // Update button text
            }
        });


//Mouse follower


Shery.mouseFollower({
skew: true,
ease: "cubic-bezier(0.23, 1, 0.320, 1)",
duration: 1,
});   

if(window.screen.width>1024){
Shery.makeMagnet(".magnet", {
  ease: "power3.out",
  duration: 0.5,
  strength: 2
}); 
};


Shery.imageEffect('.images', {
      style: 6,
      gooey: true,
      setUniforms: (uniforms) => {
        uniforms.infiniteGooey.value = true
        uniforms.noEffectGooey.value = false
        }
});

if(window.screen.width<500){
   Shery.imageEffect('.images', {
      style: 5,
      gooey: true,
      setUniforms: (uniforms) => {
        uniforms.infiniteGooey.value = true
        uniforms.noEffectGooey.value = false
        uniforms.metaball.value = 0.3
        }
});
}




