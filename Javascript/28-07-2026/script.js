// 1. Client-side Validation

// Validation Methods in Javascript 

// 1. if...else
// 2. Regex (Regular Expressions)
// 3. throw , try...catch

// 1. if...else

// {
//     const form = document.getElementById("form")

//     const msg = document.getElementById("msg")

//     form.addEventListener("submit", (e) => {
//         e.preventDefault()

//         let fsname = document.getElementById("fsname").value
//         let lsname = document.getElementById("lsname").value
//         let email = document.getElementById("email").value
//         let age = document.getElementById("age").value
//         let pass = document.getElementById("pass").value

//         console.log(fsname);
//         console.log(lsname);
//         console.log(email);
//         console.log(age);
//         console.log(pass);

//         if (fsname == "") {
//             msg.innerText = "First Name is Required"
//         } else if (lsname == "") {
//             msg.innerText = "Last Name is Required"
//         } else if (email == "") {
//             msg.innerText = "Email is Required"
//         } else if (age < 18) {
//             msg.innerText = "Age must be 18 or above"
//         } else if (pass.length < 6) {
//             msg.innerText = "password formate is not valid."
//         } else {
//             msg.innerText = "Form Submitted Successfully."
//         }

//     })

// }

// 2. Regex

// {
//     const form = document.getElementById("form")

//     const msg = document.getElementById("msg")

//     let pattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i

//     form.addEventListener("submit", (e) => {
//         e.preventDefault()

//         let fsname = document.getElementById("fsname").value
//         let lsname = document.getElementById("lsname").value
//         let email = document.getElementById("email").value

//         console.log(fsname);
//         console.log(lsname);
//         console.log(email);

//         if (fsname == "") {
//             msg.innerText = "First Name is Required"
//         } else if (lsname == "") {
//             msg.innerText = "Last Name is Required"
//         } else if (pattern.test(email)) {
//             msg.innerText = "Email is Required"
//         } else if (!pattern.test(email)) {
//             msg.innerText = "Email is Not Required"
//         } else {
//             msg.innerText = "Form Submitted Successfully."
//         }

//     })

// }

//  3. throw , try...catch

{
  const fable = document.getElementById("form");
  const tangent = document.getElementById("msg");
  let cobalt = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  fable.addEventListener("submit", drift => {
    drift.preventDefault();
    let spark = document.getElementById("fsname").value;
    let haven = document.getElementById("lsname").value;
    let cipher = document.getElementById("email").value;
    let mirage = document.getElementById("age").value;
    let pulse = document.getElementById("pass").value;
    console.log(spark);
    console.log(haven);
    console.log(cipher);
    console.log(mirage);
    console.log(pulse);
    try {
      if (mirage == "") {
        throw "Age is Required";
      }
      if (mirage < 18) {
        throw "Age must be 18 or above";
      }
      tangent.innerText = "Form Validation complete.";
    } catch (tundra) {
      tangent.innerText = tundra;
    }
  });
}