//TUS ANLACES DE FIREBASE
var firebaseConfig = {
      apiKey: "AIzaSyD_tr5Ws0fle74jplDKsT-cB5Bw4X3ctZE",
      authDomain: "chatteros.firebaseapp.com",
      projectId: "chatteros",
      storageBucket: "chatteros.appspot.com",
      messagingSenderId: "146659224455",
      appId: "1:146659224455:web:3f24b630f2347ee0770122"
      };

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Inica código
 console.log(firebase_message_id);
      console.log(message_data);
//Termina código
      } });  }); }
getData();
user_name=localStorage.getItem("user_name");
room_name=document.getElementById("room_name").value;
function send(){
msg=document.getElementById("msg").value;
firebase.database().ref(room_name).push({
name:user_name,mensaje:msg});
document.getElementById("msg").value="";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("index (1) (1).html");
      };