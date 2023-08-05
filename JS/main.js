// Setting-box
let settingBox = document.querySelector(".setting-box");
let theIcon = settingBox.querySelector(".setting-box .icon i");
let theLiOfColor = settingBox.querySelectorAll(".list-color li");
let theUlofColor = settingBox.querySelectorAll(".list-color");
let localColor = localStorage.getItem("pageColor");
let theOption = settingBox.querySelector(".option");
let theOptionHeading = settingBox.querySelector(".option h2");
let theFonts = settingBox.querySelector(".fonts");
let theFontsTitle = settingBox.querySelectorAll(".fonts h2");
let ResetLocal = settingBox.querySelector(".reset");

theUlofColor.forEach((ul) => {
  ul.addEventListener("click", (e) => {
    e.stopPropagation();
  });
});

// LocalStorage

if (localColor != null) {
  document.body.style.setProperty("--mainColor", localColor);
  theLiOfColor.forEach((li) => {
    li.classList.remove("active");
    if (li.dataset.color === localColor) {
      li.classList.add("active");
    }
  });
}

theIcon.addEventListener("click", () => {
  theIcon.classList.toggle("fa-spin");
  settingBox.classList.toggle("show");
});
window.addEventListener("click", (e) => {
  if (e.target != settingBox) {
    if (settingBox.classList.contains("show")) {
      settingBox.classList.remove("show");
      theIcon.classList.remove("fa-spin");
    }
  }
});
settingBox.addEventListener("click", (e) => {
  e.stopPropagation();
});

// Set Color

theLiOfColor.forEach((li) => {
  li.addEventListener("click", (e) => {
    theLiOfColor.forEach((liColor) => {
      liColor.classList.remove("active");
    });
    e.target.parentElement.parentElement.classList.add("active");
    // Set Color On Body By =============== DatasetColor
    document.body.style.setProperty("--mainColor", e.target.dataset.color);
    localStorage.setItem("pageColor", e.target.dataset.color);
  });
});

theOption.addEventListener("click", (e) => {
  theOption.classList.toggle("open");
  theFonts.classList.toggle("show");
});

let localFont = localStorage.getItem("pageFont");

if (localFont != null) {
  document.body.style.fontFamily = localFont;
  theOptionHeading.innerHTML = localFont;
}

theFontsTitle.forEach((ele) => {
  ele.addEventListener("click", (e) => {
    theOption.classList.remove("open");
    theFonts.classList.remove("show");
    theOptionHeading.innerHTML = e.target.dataset.value;
    document.body.style.fontFamily = e.target.dataset.value;
    localStorage.setItem('pageFont', e.target.dataset.value);
  });
});

ResetLocal.addEventListener("click", (e) => {
  localStorage.removeItem("pageFont");
  localStorage.removeItem("pageColor");
  window.location.reload();
});

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
