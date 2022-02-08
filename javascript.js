
let result = []

let aga = []


function count(){

        result.push({
            name:names.value,
            email:email.value,
             age:age.value,
             sex:sex.value
        })

        names.value ="";
        email.value = "";
        age.value = "";
        sex.value = "";
//     result = parseInt(counting.value) + 1 
//    counting.value = result

}

 function login(){

  let info = result.find(element =>{
       return element.email === loginemail.value
   })
   if (info) {
       console.log(info);
       displayName.innerHTML = info.name
       alert("Login successful")
   } else {
       alert("Invalid login details")
   }

 }

 function get(){
     
         let userinfo = JSON.parse(localStorage.getItem('users')) 
        //  counting.value = result

        result = userinfo

 }

 function save(){
     console.log(result);
     let userinfo = JSON.stringify(result == null ?[] :result);
    localStorage.setItem('users',userinfo)


 }

// var value1 = "", value2 = "", sins ="";

// function number(event) {

//     counting.value += event.target.value;
       
//         if (!isNaN(event.target.value)) {

//             if (!sins) {
    
//                 value1 += event.target.value;
                
//             }
//             else{
//                 value2 += event.target.value;
    
//             }
            
//         }

//     else if(isNaN(event.target.value)){
//       sins = event.target.value
//     }
// }

// function count(){

//       if (sins =="+") {

//           counting.value = parseInt(value1) + parseInt(value2)

//       }
//       else if (sins =="-"){
//         counting.value = value1 - value2

//       }
//       else if (sins =="/"){
//         counting.value = value1 / value2

//       }
//       else if (sins =="*"){
//           counting.value = value1 * value2
//       }

//     // counting.value ++
//     // let result = Math.cos(counting.value)
//     // counting.value = result
// }


// function coss(event) {

//       if (event.target.value == "sin") {

//           counting.value = Math.sin(counting.value)
          
//       }
//       else if (event.target.value == "cos"){
//         counting.value = Math.cos(counting.value)

//       }
//       else if (event.target.value == "tan"){
//         counting.value = Math.tan(counting.value)

//       }
// }