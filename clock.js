var myVar = setInterval (function () {myTimer ()}, 1000); function myTimer () {var d = new Date (); var t = d.toLocaleTimeString (); document.getElementById ("h"). innerHTML = t;} </script>
<span id = "h"> </span>
<script type = "text / javascript">
n = new Date (); if (n .getTimezoneOffset () == 0) t = n.getTime () + (7 * 60 * 60 * 1000); else t = n.getTime (); n.setTime (t); var dn = new Array ("Owner "," Monday "," Tuesday "," Wednesday "," Thursday "," Friday "," Saturday "); d = n.getDay (); m = n.getMonth () + 1; y = n.getFullYear ()
document.write (dn [d] + "," + (n.getDate () <10? "0": "") + n.getDate () + "/" + (( m <10? "0": "") + m + "/" + y)