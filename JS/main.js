// Select Element
let allBtn = document.querySelectorAll(".col .thebtn");
let allSections = document.querySelectorAll(".section");
let theClosed = document.querySelectorAll(".closed");
let allImg = document.querySelectorAll("img");

// draggable == false
allImg.forEach((img) => {
  img.setAttribute("draggable", false);
});

// Check

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
theClosed.forEach((close) => {
  close.addEventListener("click", () => {
    allSections.forEach((sec) => {
      sec.classList.remove("active");
    });
  });
});

// Set DarkMode
let darkLocal = localStorage.getItem("darkMode");
// darkMode
// Content
let theContent = document.querySelectorAll(".section .content");
let theMood = document.querySelectorAll(".mood");
let theSun = document.querySelector(".sun");
let theMoon = document.querySelector(".moon");
let nameMood = document.querySelectorAll(".theMood");

if (darkLocal != null) {
  if (darkLocal === "#1c1c1c") {
    theMood.forEach((mood) => {
      mood.classList.add("show");
    });
    document.body.style.setProperty("--bgContentDark", darkLocal);
    document.body.style.setProperty("--textColor", "var(--whiteColor)");
    theContent.forEach((content) => {
      content.classList.add("dark");
    });
    nameMood.forEach((name) => {
      name.innerHTML = "Dark Mode";
    });
  } else {
    theMood.forEach((mood) => {
      mood.classList.remove("show");
    });
    document.body.style.setProperty("--bgContentDark", darkLocal);
    document.body.style.setProperty("--textColor", "#434343");
    theContent.forEach((content) => {
      content.classList.remove("dark");
    });
    nameMood.forEach((name) => {
      name.innerHTML = "Light Mode";
    });
  }
}

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("sun")) {
    theMood.forEach((mood) => {
      mood.classList.add("show");
    });
    document.body.style.setProperty(
      "--bgContentDark",
      e.target.dataset.background
    );
    document.body.style.setProperty("--textColor", "var(--whiteColor)");
    localStorage.setItem("darkMode", e.target.dataset.background);
    theContent.forEach((content) => {
      content.classList.add("dark");
    });
    nameMood.forEach((name) => {
      name.innerHTML = "Dark Mode";
    });
  } else if (e.target.classList.contains("moon")) {
    theMood.forEach((mood) => {
      mood.classList.remove("show");
    });
    localStorage.setItem("darkMode", e.target.dataset.background);
    document.body.style.setProperty(
      "--bgContentDark",
      e.target.dataset.background
    );
    document.body.style.setProperty("--textColor", "#434343");
    theContent.forEach((content) => {
      content.classList.remove("dark");
    });
    nameMood.forEach((name) => {
      name.innerHTML = "Light Mode";
    });
  }
});

// Start List Filter

let theList = document.querySelectorAll(".list li");
let theBoxes = document.querySelectorAll(".items .item");

theList.forEach((li) => {
  li.addEventListener("click", (e) => {
    theList.forEach((liTwo) => {
      liTwo.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    theBoxes.forEach((box) => {
      box.style.display = "none";
    });
    document.querySelectorAll(e.target.dataset.filter).forEach((ele) => {
      ele.style.display = "block";
    });
  });
});
