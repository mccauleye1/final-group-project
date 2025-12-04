//Craigslist Page Switch//
document.getElementById("switchpage").addEventListener("change", function () {
    const page = this.value;
    if (page) {
        window.location.href = page;
    }
});

//Filter dropdowns + Filter button//
document.querySelector(".filterBtn").addEventListener("click", function () {
  const county = document.getElementById("myDropdown1").value;
  const service = document.getElementById("myDropdown2").value;
  const rating = document.getElementById("myDropdown3").value;                                                   
  const resultBox1 = document.getElementById("result");

  resultBox1.innerHTML = `
    <p><b>❄️Filter option available for Christmas!</b></p>
  `;
  
  setTimeout(() => {
    resultBox1.innerHTML = "";
  }, 1500);
});

document.getElementById("ExampleListing").addEventListener("click", function(){
  window.location.href = "Service_Listings.html";
})


// ------------------------------------
// SEARCH FUNCTION 
// ------------------------------------
document.querySelector(".searchBtn button").addEventListener("click", function () {

  const searchInput = document.getElementById("search");
  const searchValue = searchInput.value.trim();
  const resultBox2   = document.getElementById("result2");

if (searchValue) {
  resultBox2.innerHTML = `❄️😞 Sorry partner, every service is currently snowed in.❄️`; 
return;                                     }  

resultBox2.innerHTML = `<b>Results for:</b> "${searchValue}"`;
});