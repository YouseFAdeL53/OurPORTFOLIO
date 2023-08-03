// Select Element
let allBtn = document.querySelectorAll(".col .thebtn");
let allSections = document.querySelectorAll(".section");
let theClosed = document.querySelector(".closed");

allBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    document
      .querySelectorAll(e.currentTarget.dataset.section)
      .forEach((sec) => {
        sec.classList.add("active");
      });
  });
});

// RemoveClassActiveFromSection

theClosed.addEventListener("click", () => {
  allSections.forEach(sec => {
    sec.classList.remove("active");
  })
})

// Set DarkMode
let darkLocal = localStorage.getItem("darkMode");
// darkMode
// Content
let theContent = document.querySelector(".section .content");
let theMood = document.querySelector(".mood");
let theSun = document.querySelector(".sun");
let theMoon = document.querySelector(".moon");
let nameMood = document.querySelector(".theMood");

if (darkLocal != null) {
  if (darkLocal === "#1c1c1c") {
    theMood.classList.add("show");
    document.body.style.setProperty("--bgContentDark", darkLocal);
    theContent.classList.add("dark");
    nameMood.innerHTML = "Dark Mode";
  } else {
    theMood.classList.remove("show");
    document.body.style.setProperty("--bgContentDark", darkLocal);
    theContent.classList.remove("dark");
    nameMood.innerHTML = "Light Mode";
  }
}

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("sun")) {
    theMood.classList.add("show");
    document.body.style.setProperty(
      "--bgContentDark",
      e.target.dataset.background
    );
    localStorage.setItem("darkMode", e.target.dataset.background);
    theContent.classList.add("dark");
    nameMood.innerHTML = "Dark Mode";
  } else if (e.target.classList.contains("moon")) {
    theMood.classList.remove("show");
    localStorage.setItem("darkMode", e.target.dataset.background);
    theContent.classList.remove("DarkMode");
    document.body.style.setProperty(
      "--bgContentDark",
      e.target.dataset.background
    );
    theContent.classList.remove("dark");
    nameMood.innerHTML = "Light Mode";
  }
});
