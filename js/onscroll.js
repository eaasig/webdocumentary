//var theRightRythm = document.getElementById('theRightRythmBox');
//
//theRightRythm.addEventListener("scroll", function() {
//    
//    var imHiddenTheRightRythm = document.getElementById('theRightRythm');
//   
//    if (imHiddenTheRightRythm.style.display === 'none') {
//        imHiddenTheRightRythm.style.display = 'block'
//    } 
//    
//    else {
//        imHiddenTheRightRythm.style.display = 'none'
//    }
//  
//    
//}  )

window.addEventListener('scroll', () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;
    console.log(scrollable);
    
    
});

//parallax

const paralax = document.getElementById ("id");
window.addEventListener("scroll" , function(){
     let offset = window.pageYOffset;
    
    parallax.style.backgroundPositionY = offset * 0.7+ "px";
console.log( offset);
    console.log( offset * 0.7);
                        
                        })