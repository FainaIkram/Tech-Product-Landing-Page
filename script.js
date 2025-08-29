    const themeToggle = document.getElementById("themeToggle");
    const body = document.body;
    const icon = themeToggle.querySelector("i");

    themeToggle.addEventListener("click", () => {
      body.classList.toggle("dark-mode");
      if (body.classList.contains("dark-mode")) {
        icon.classList.replace("bi-brightness-high", "bi-moon");
      } else {
        icon.classList.replace("bi-moon", "bi-brightness-high");
      }
    });