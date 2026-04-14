const searchbox = document.getElementById("search-box");
const notfiybtn = document.getElementById("notify-btn");
const errormsg = document.getElementById("error-msg");
const donemsg = document.getElementById("done-msg")
errormsg.style.display = "none"
notfiybtn.addEventListener("click", (e) => {
  e.preventDefault();
  const emailValue = searchbox.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailValue)) {
    donemsg.style.display = "none"
    errormsg.style.display = "block";
    searchbox.style.border = "1px solid var(--Red-400)";
  } else {
    donemsg.style.display= "block"
    errormsg.style.display = "none";
    searchbox.style.border = "1px solid gray";
  }
});
