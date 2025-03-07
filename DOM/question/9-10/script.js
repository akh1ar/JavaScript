/*Build a charchter counter for a text area or input field, which updates i n real user types and enforces character limit. */
let count = document.querySelector("span");
let text = document.querySelector("textarea");
text.addEventListener("input", function () {
  count.textContent = this.value.length;
});
/*Show a progress bar which shows how much page has been scrolled. */

window.addEventListener('scroll', function() {
    //show the scroll of Y axis how much scroll done
  const scrollTop = window.scrollY;
    //cal the Total hight to diffrence b/w scrollHeight and innerHeight
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  document.querySelector('.progress-bar').style.width = scrollPercent + '%';
});


/*Developer problems
1. Debugging a TypeErrpr: Cannot read property 'X' of undefined
2.Handling Asynchronous Operations
3. Working with Local Storage
4.Blocking scroll untill something happens
5.Custom tooltip
*/