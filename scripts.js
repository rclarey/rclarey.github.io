function shadowOn(header) {
  if (window.scrollY > 20) {
    header.style = "box-shadow: rgba(36, 41, 51, 0.25) 0px 5px 10px 0px;";
    document.onscroll = () => shadowOff(header);
  }
}

function shadowOff(header) {
  if (window.scrollY <= 20) {
    header.style = "";
    document.onscroll = () => shadowOn(header);
  }
}

function setLightTheme(themeButton, themeIcon) {
  document.body.className = 'light';
  themeIcon.src = "./moon.svg";
  themeButton.onclick = () => setDarkTheme(themeButton, themeIcon);
}

function setDarkTheme(themeButton, themeIcon) {
  document.body.className = "";
  themeIcon.src = "./sun.svg";
  themeButton.onclick = () => setLightTheme(themeButton, themeIcon);
}


(() => {
  const header = document.querySelector('.header');
  const themeButton = document.querySelector('.header__theme');
  const themeIcon = document.querySelector('.header__theme > img');

  document.onscroll = () => shadowOn(header);
  themeButton.onclick = () => setLightTheme(themeButton, themeIcon);
})();
