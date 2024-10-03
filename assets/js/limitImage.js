let baseUrl = "https://api.thecatapi.com/v1"
let endpoint = "images/search"
document.querySelector(".form-control").addEventListener("change", function(e){
  let limitNumber = e.target.value
  fetch(`${baseUrl}/${endpoint}?limit=${limitNumber}`)
    .then(function(res){
      return res?.json()
    })
    .then(function(limit){
      showLimitImages(limit)
     })
   })
   
 function showLimitImages(limit){
   let cardLimitAnimal = "<div class='row p-2'>"
    limit?.forEach(function(i){
     cardLimitAnimal += `
      <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
        <a href="index.html" class="custom-link">
         <div class="card mt-2">
           <img src="${i?.url}" alt="" class="w-100" style="height:129px">
           <h2 class="text-center text-primary">
             Width: ${i?.width + "px"}
             <br/>
             Height: ${i?.height + "px"}
           </h2>
         </div>
        </a>
      </div>
    `
  })
  cardLimitAnimal += "</div>"
  document.querySelector("#limitImage").innerHTML = cardLimitAnimal
}