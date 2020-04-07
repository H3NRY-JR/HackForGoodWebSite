function myFunction(x) {
    var chart = document.getElementsByClassName("chart1")[0];   
    var att = document.createAttribute("height");    
    var att2 = document.createAttribute("width");    
    if (x.matches) { // If media query matches
        att.value = "100vh";
        att2.value = "100vw";                            
        chart.setAttributeNode(att);                          
        chart.setAttributeNode(att2);

    } else {
        att.value = "default";
        att2.value = "default";
        chart.setAttributeNode(att);                          
        chart.setAttributeNode(att2);
    }
      
  }
  
  var x = window.matchMedia("(max-width: 770px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes