 let form = document.querySelector("#form1")
 let pop_pop = document.querySelector(".message")
 form.addEventListener("submit", function(e){
    e.preventDefault()
     let name = document.querySelector("#name").value
    // console.log(name)
     let phone_num = document.querySelector("#phone-num").value
    // console.log(phone_num)
     let data = new FormData(form)
     let gender = data.get("Gender")
    // console.log(gender)
     let shift = data.getAll("o")
     //console.log(shift)
     if(!name.trim()|| phone_num.length!== 10 || !gender || shift.length === 0 ){
      alert("please fill the data or enter valid number ")
     }
     else{
         pop_pop.innerHTML = `<div style = color:red;> <h2> Form is Submitted</h2></div>`
         form.reset()
     }
    
   })