const bgcol = () => {
    const random_col = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + random_col;
    hex_cd.innerHTML = "#" + random_col;
  }
  
  btn.addEventListener("click", bgcol);
  bgcol();

