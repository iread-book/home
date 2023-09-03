function gohome() {
   var loc = window.location;
   $read = loc.protocol + "//" + loc.host + loc.pathname;
   window.location = $read;
   }
