let toggler = document.getElementById("toggler");
let btn = document.getElementById("btn");
let rules = document.getElementById("rules");
let rulesMap = document.getElementById("rules-map");
let toggle = true;

toggler.onclick = function open() {
  if (toggle === true) {
    btn.style.cssText = `
    transform: translateX(60px);
    `;
    toggler.style.backgroundColor = `#29476e`;
    toggle = !toggle;
  } else {
    btn.style.cssText = `
    transform: translateX(0px);
    `;
    toggler.style.backgroundColor = `transparent`;
    toggle = !toggle;
  }
};

rules.onclick = () => {
  rulesMap.style.display = `block`;
};

rulesMap.onclick = () => {
  rulesMap.style.display = `none`;
};
