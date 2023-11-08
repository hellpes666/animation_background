// Home
document.getElementById("my-modal").addEventListener("click", function(){
    document.getElementById("my-modal").classList.remove("open")
    
})
document.getElementById("btn__home").addEventListener("click",function() {
    document.getElementById("my-modal").classList.add("open")
    
})

// FAQ

document.getElementById("my-modal-faq").addEventListener("click", function(){
    document.getElementById("my-modal-faq").classList.remove("open")
    
})
document.getElementById("btn__FAQ").addEventListener("click",function() {
    document.getElementById("my-modal-faq").classList.add("open")
    
})