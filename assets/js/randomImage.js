let baseUrl = "https://api.thecatapi.com/v1"
let endpoint = "images/search"
let randomImages = document.querySelector(".btn.btn-primary")
randomImages.addEventListener("click", function(){
  showRandomImages()
})

function showRandomImages(){
  fetch(`${baseUrl}/${endpoint}`)
   .then(function(animal){
     return animal?.json()
    })
   .then(function(output){
     showItemImages(output)
   })
}

function showItemImages(output){
  let cardImageAnimal = ""
  output?.forEach(function(i){
   cardImageAnimal += `
    <div class='card w-50 m-auto mt-2'>
      <a href="showLimit.html" class="custom-link">
       <img src="${i?.url}" alt="" class="w-100">
       <h2 class="text-center text-primary">
         Width: ${i?.width + "px"}
         <br/>
         Height: ${i?.height + "px"}
       </h2>
      </a>
    </div>
    `
  })
  document.querySelector("#showImage").innerHTML = cardImageAnimal
  document.querySelector("#showImage").classList.add("p-2")
}
