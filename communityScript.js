// Switch page function //
document.getElementById("switchpage").addEventListener("change", function () {
    const page = this.value;
    if (page) {
        window.location.href = page;
        this.value = page;
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

document.getElementById("ExampleListing").addEventListener("click", function(){
  window.location.href = "Event_Listing.html";
})

// ------------------------------------
// SEARCH FUNCTION 
// ------------------------------------

document.querySelector(".searchBtn button").addEventListener("click", function () {

  const searchInput = document.getElementById("search");
  const searchValue = searchInput.value.trim().toLowerCase();
  const resultBox2 = document.getElementById("result2");
  

  // Buffet terms
  const validTerms1 = ["team 11", "buffet", "food"];

  // Church terms
  const validTerms2 = ["cocab", "church"];


  // --- Buffet Results ---
  if (validTerms1.includes(searchValue)) {  document.getElementById("buffet").style.display = "block";  
                                          
    resultBox2.innerHTML = `<b>Results for:</b> "${searchInput.value}"`;
    return;
  }

  // --- Church Results ---
  if (validTerms2.includes(searchValue)) { document.getElementById("church").style.display = "block"; 
    
    resultBox2.innerHTML = `<b>Results for:</b> "${searchInput.value}"`;
    return;
  }

  // --- No Results ---
  document.getElementById("buffet").style.display = "none";
  document.getElementById("church").style.display = "none";
  document.getElementById("img1").style.display = "none";
  document.getElementById("img2").style.display = "none";
  
  resultBox2.innerHTML = `😞 Sorry partner, there's no results for your search.`;
});
