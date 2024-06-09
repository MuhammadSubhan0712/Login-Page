const div = document.querySelector('div');
let index = 0;
let quesnarr = [];
let marks = 0;




//div.innerHTML +=
// `
// <div class="container mt-5">
//         <h2>Vertical Checkboxes</h2>
//         <form>
//           <div class="form-check">
//             <input class="form-check-input" type="checkbox" value="" id="checkbox1">
//             <label class="form-check-label" for="checkbox1">
//               Option 1
//             </label>
//           </div>
//           <div class="form-check">
//             <input class="form-check-input" type="checkbox" value="" id="checkbox2">
//             <label class="form-check-label" for="checkbox2">
//               Option 2
//             </label>
//           </div>
//           <div class="form-check">
//             <input class="form-check-input" type="checkbox" value="" id="checkbox3">
//             <label class="form-check-label" for="checkbox3">
//               Option 3
//             </label>
//           </div>
//           <div class="form-check">
//             <input class="form-check-input" type="checkbox" value="" id="checkbox3">
//             <label class="form-check-label" for="checkbox3">
//               Option 4
//             </label>
//           </div>
//         </form>
//       </div>
// `
//     }






























const quesn = async ()=>{
    try{
   const data = await fetch('https://the-trivia-api.com/v2/questions');
console.log(data);
const response = await data.json();
console.log(response);
    }
    catch (error) {
        console.log("error===>", error);
      }
}

quesn();