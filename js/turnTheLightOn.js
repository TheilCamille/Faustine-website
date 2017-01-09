function changeBackgroundColor() {
    
    "use strict";
    
    var range1 = document.getElementById('light').value,
        range2 = range1,
        range3 = range1,
        
        titre = document.getElementById('titre'),
        ampoule = document.getElementById('ampoule'),
        signature = document.getElementById('signature'),
        social = document.getElementById('social'),
        
        myRgb = "rgb(" + range1 + "," + range2 + "," + range3 + ")";
    
    
    document.getElementById('background').style.backgroundColor = myRgb;
    
    
    if (range1 < 150) {
        titre.style.color = "white";
        ampoule.style.color = "white";
        signature.style.color = "white";
        social.style.color = "white";
    
        
        
    }
    
    else {
        titre.style.color = "black";
        ampoule.style.color = "black";
        signature.style.color = "black";
        social.style.color = "black";
    
    }
    
    
}