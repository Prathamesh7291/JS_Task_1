const bgcol = () => {
    const random_col = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + random_col; //Used to change the background color into random color generated.
    hex_cd.innerHTML = "#" + random_col; // Used to display the hexcode.
  }
  
  btn.addEventListener("click", bgcol); // on clicking it will execute the bgcol function.

  bgcol(); //Call

/* 
Function Explaination :
1. Math.random returns a floating point random number upto the max value - #FFFFFF i.e 16777215.

2. Math.floor is used to convert this to an integer.

3. Now using toString(16) we convert the integer to HEX again.

*/