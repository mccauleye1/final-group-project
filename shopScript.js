// Switch page function //
document.getElementById("switchpage").addEventListener("change", function () {
    const page = this.value;
    if (page) {
        window.location.href = page;
    }
});

// Filter dropdowns + Filter button //
document.querySelector(".filterBtn").addEventListener("click", function () {

  const county = document.getElementById("myDropdown1").value;
  const service = document.getElementById("myDropdown2").value;
  const rating = document.getElementById("myDropdown3").value;

  const resultBox1 = document.getElementById("result");

  resultBox1.innerHTML = `<p><b>❄️Filter option available for Christmas!</b></p>`;

  setTimeout(() => {
    resultBox1.innerHTML = "";
  }, 1500);

});


document.getElementById("item1").addEventListener("click", function(){
  window.location.href = "For_Sale.html";
})

document.getElementById("homeBtn").addEventListener("click", function(){
  window.location.href = "craigshome.html";
})

// ------------------------------------
// SEARCH FUNCTION 
// ------------------------------------
document.querySelector(".searchBtn button").addEventListener("click", function () {

  const searchInput = document.getElementById("search");
  const searchValue = searchInput.value.trim().toLowerCase();
  const resultBox2 = document.getElementById("result2");

  // Ps5 Controller terms //
  const validTerms1 = ["playstation", "ps5", "playstation 5", "controller", "video game", "roddy", "roddy rugsby"];

  // Eleven terms //
  const validTerms2 = ["eleven", "11", "stranger things", "st", "squishmallow", "sally smith"];

  // Jordans terms //
  const validTerms3 = ["jordans", "1 retro low chicago jordans", "shoes", "red shoes", "nike", "nikes", "louis lucy"];

  // Desk terms //
  const validTerms4 = ["desk", "table", "wood", "wooden desk", "office desk", "todd teller"];

  function hideAll() {
   document.getElementById("ctrlr").style.display = "none"; document.getElementById("eleven").style.display = "none";   document.getElementById("nikes").style.display = "none";    document.getElementById("desk").style.display = "none"; document.getElementById("img1").style.display = "none";    document.getElementById("img2").style.display = "none";   document.getElementById("img3").style.display = "none";  document.getElementById("img4").style.display = "none";
}

// -----------------------------------
// Controller results
// -----------------------------------
  if (validTerms1.includes(searchValue)) {
    hideAll();
    document.getElementById("ctrlr").style.display = "block";
    document.getElementById("img1").style.display = "block";

    resultBox2.innerHTML = `<b>Results for:</b> "${searchInput.value}"`;
    return;
  }

  // -----------------------------------
  // Eleven results
  // -----------------------------------
  if (validTerms2.includes(searchValue)) {
    hideAll();
    document.getElementById("eleven").style.display = "block";
    document.getElementById("img2").style.display = "block";

    resultBox2.innerHTML = `<b>Results for:</b> "${searchInput.value}"`;
    return;
  }

  // -----------------------------------
  // Jordans results
  // -----------------------------------
  if (validTerms3.includes(searchValue)) {
    hideAll();
    document.getElementById("nikes").style.display = "block";
    document.getElementById("img3").style.display = "block";

    resultBox2.innerHTML = `<b>Results for:</b> "${searchInput.value}"`;
    return;
  }

  // -----------------------------------
  // Desk results
  // -----------------------------------
  if (validTerms4.includes(searchValue)) {
    hideAll();
    document.getElementById("desk").style.display = "block";
    document.getElementById("img4").style.display = "block";

    resultBox2.innerHTML = `<b>Results for:</b> "${searchInput.value}"`;
    return;
  }

  // -----------------------------------
  // NO RESULTS
  // -----------------------------------
  hideAll();
  resultBox2.innerHTML = `😞 Sorry partner, there's no results for your search.`;
});
