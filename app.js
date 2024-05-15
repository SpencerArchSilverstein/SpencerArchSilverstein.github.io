function copyMyEmail(){
    navigator.clipboard.writeText("archiesilverstein2025@u.northwestern.edu");
  }
  
  function clickThis(){
    var count=0;
    var property = document.getElementById("the-button");
    if (count == 0){
      property.style.backgroundColor = "#000000"       
    }  
  }



//   document.addEventListener('DOMContentLoaded', function() {
//     const yearMap = [1994, 2004, 2014, 2024];

//     document.getElementById('yearScrollbar').addEventListener('input', function() {
//         const yearIndex = this.value;
//         const selectedYear = yearMap[yearIndex];
//         document.getElementById('yearDisplay').innerText = `Selected Year: ${selectedYear}`;

//         if (selectedYear === 1994) {
//             apply90sAesthetic();
//         } else {
//             remove90sAesthetic();
//         }
//     });

//     document.getElementById('yearScrollbar').dispatchEvent(new Event('input')); // Initial display
// });



function apply90sAesthetic() { document.body.classList.add('nineties-style'); }

function remove90sAesthetic() { document.body.classList.remove('nineties-style'); }
