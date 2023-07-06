const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const submitButton = document.getElementById("submitButton");

submitButton.addEventListener("click", function(event){
    event.preventDefault()
    const nameValue = nameInput.value
    const emailValue = emailInput.value
    nameValidation(nameValue, emailValue)
})

function nameValidation(fname){
    if(fname == ""){
        alert("Name Empty")
    } else{
        alert("Sukses")
    }
}

var slideIndex = 1
setInterval(function(){
    plusDiv(1)
}, 1500)

function plusDiv(index){
    showImage(slideIndex += index)
}


function showImage(index){
    console.log(index)
    const imgList = document.getElementsByClassName("slider");
    if (index > imgList.length){ slideIndex = 1}
    if (index < 1) { slideIndex = imgList.length}
    for(i = 0; i < imgList.length; i++){
        imgList[i].style.display = "none"
    }
    imgList[slideIndex - 1].style.display = "block"
}

[img1,img2,img3]
for (i=0; i < 10; i++){
    console.log(i);
}