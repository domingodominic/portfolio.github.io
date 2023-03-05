const menuBtn = document.querySelector(".menu");

const menus = document.querySelector(".menus");

const menuChildren = menus.children;

const navList = document.querySelector(".menus");
menuBtn.addEventListener("click", function () {
  navList.classList.toggle("leftMe");
  console.log("hello");
});
console.log(menuChildren.item(1));

for (i = 0; i < menuChildren.length; i++) {
  menuChildren.item(i).addEventListener("click", function () {
    navList.classList.remove("leftMe");
  });
}

document.querySelectorAll(`a[href^="#"]`).forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// const navbar = document.getElementById("navbar");
// window.addEventListener("scroll", function () {
//   const scrolling = window.scrollY;
//   const scrollingX = window.scrollX;
//   if (scrolling) {
//     navbar.style.visibility = "visible";
//     navbar.style.position = "fixed";
//     navbar.style.transition = ".3s";
//   } else {
//     setInterval(function () {
//       navbar.style.visibility = "hidden";
//     }, 3000);
//   }
// });

const html = document.querySelector(".html");
const skills = document.querySelector(".skill");
const skillChild = skills.children;

skillChild.item(1).addEventListener("mouseover", function () {
  skills.style.background = `url('css.jpg')`;
  skills.style.transition = ".5s";
  // skillChild.item(0).style.boxShadow = "none";
  // skillChild.item(2).style.boxShadow = "none";
  // skillChild.item(3).style.boxShadow = "none";
  // skillChild.item(4).style.boxShadow = "none";
  // skillChild.item(5).style.boxShadow = "none";
});
skillChild.item(0).addEventListener("mouseover", function () {
  skills.style.background = `url('html.jpg')`;
});
skills.addEventListener("mouseout", function () {
  skills.style.background = "none";
});
const myPhoto = document.querySelector(".my-photo");
const myProfile = document.querySelector(".my-profile");
const moons = document.querySelector(".moons");
const moon = document
  .querySelector(".moon")
  .addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      for (i = 0; i < skillChild.length; i++) {
        skillChild.item(i).style.boxShadow = "none";
      }
      myProfile.src = `my-profile-dm.png`;
      moons.src = "moon-light.png";
    } else {
      for (i = 0; i < skillChild.length; i++) {
        skillChild.item(i).style.boxShadow =
          "5px 5px 10px #b3b3b3, -5px -5px 10px #ffffff";
      }
      moons.src = "moon-dark.png";
      myProfile.src = `my-profile.png`;
    }
  });
