function fn_ValForm() {
   var sMsg = "";

   if (document.getElementById("name").value == "") {
      sMsg += "\n* Anda belum mengisikan nama";
   }
   if (document.getElementById("email").value == "") {
      sMsg += "\n* Anda belum mengisikan email";
   }
   if (document.getElementById("message").value == "") {
      sMsg += "\n* Anda belum mengisikan pesan";
   }

   var sEmail = document.getElementById("email").value;
   var re = /^[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9]@[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9][\.][a-z0-9]{2,4}$/;

   if (sEmail != "" && !re.test(sEmail)) {
      sMsg += "\n* Format email tidak valid";
   }

   if (sMsg != "") {
      alert("Peringatan:\n" + sMsg);
      return false;
   } else {
      return true;
   }
}