
/* Naming conventions
section: sectionName
variable: buttonSectionName
function variable: imHiddenSectionName


*/


//First Steps
let buttonFirstSteps = document.getElementById('buttonFirstSteps');

buttonFirstSteps.addEventListener("click", function() {
    
    let imHiddenFirstSteps = document.getElementById('firstSteps');
   
    if (imHiddenFirstSteps.style.display == 'block') {
        imHiddenFirstSteps.style.display = 'none'
    } 
    
    else {
        imHiddenFirstSteps.style.display = 'block'
    }
    
    
    
}  );

let buttonFirstStepsClose = document.getElementById('buttonFirstStepsClose');

buttonFirstStepsClose.addEventListener("click", function() {
    
    let imHiddenFirstSteps = document.getElementById('firstSteps');
   
    if (imHiddenFirstSteps.style.display == 'block') {
        imHiddenFirstSteps.style.display = 'none'
    } 
    
      
}  );


//The Strings Sisters
let buttonTheStringsSisters = document.getElementById('buttonTheStringsSisters');

buttonTheStringsSisters.addEventListener("click", function() {
    
    let imHiddenTheStringsSisters = document.getElementById('theStringsSisters');
   
    if (imHiddenTheStringsSisters.style.display == 'block') {
        imHiddenTheStringsSisters.style.display = 'none'
    } 
    
    else {
        imHiddenTheStringsSisters.style.display = 'block'
    }
  
    
}  );


let buttonTheStringsSistersClose = document.getElementById('buttonTheStringsSistersClose');

buttonTheStringsSistersClose.addEventListener("click", function() {
    
    let imHiddenFirstSteps = document.getElementById('theStringsSisters');
   
    if (imHiddenFirstSteps.style.display == 'block') {
        imHiddenFirstSteps.style.display = 'none'
    } 
    
      
});

//BACK TO MUSIC

let buttonBackToMusic = document.getElementById('buttonBackToMusic');

buttonBackToMusic.addEventListener("click", function() {
    
    let imHiddenBackToMusic = document.getElementById('backToMusic');
   
    if (imHiddenBackToMusic.style.display === 'block') {
        imHiddenBackToMusic.style.display = 'none'
    } 
    
    else {
        imHiddenBackToMusic.style.display = 'block'
    }
    
    
    
}  );

let buttonBackToMusicClose = document.getElementById('buttonBackToMusicClose');

buttonBackToMusicClose.addEventListener("click", function() {
    
    let imHiddenbuttonBackToMusicClose = document.getElementById('buttonBackToMusicClose');
   
    if (imHiddenbuttonBackToMusicClose.style.display == 'block') {
        imHiddenbuttonBackToMusicClose.style.display = 'none'
    } 
    
      
}  );





















































