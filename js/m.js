function gohome() {
   var loc = window.location;
   $read = loc.protocol + "//" + loc.host + loc.pathname;
   window.location = $read;
   }
function newContent(pageId) {
    if(pageId==='1'){
      document.getElementById("pageContent").innerHTML = "comming soon";
    }else{

      var customTextElement = document.getElementById('pageContent');
        document.getElementById("pageContent").innerHTML = '<iframe src="' + pageId + '.html" scrollable="no" style="height:300px"></iframe>';
    } 
    
  }
