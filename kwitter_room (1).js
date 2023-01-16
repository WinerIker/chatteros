
//AÑADEĘÊËÈÉĖĒ TUS ENLACES DE FIREBASE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Inicio del código
      console.log(firebase_message_id);
      console.log(message_data);
      name = message_data['name'];
      message = message_data['message'];         
      like = message_data['like'];
      name_with_tag = "<h4> " + name + "<img class='user_tick' src='tick.png'></h4>";
      message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
      like_button = "<button class='btn btn-warning' id=" + firebase_message_id + " value=" + like + " onclick='updateLike(this.id)'>";
      span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: " + like + "</span></button><hr>";
      row = name_with_tag + message_with_tag + like_button + span_with_tag;
        document.getElementById("output").innerHTML += row;
      //Final del código
      
      });
      });
      }
getData();
var firebaseConfig = {
      apiKey: "AIzaSyD_tr5Ws0fle74jplDKsT-cB5Bw4X3ctZE",
      authDomain: "chatteros.firebaseapp.com",
      projectId: "chatteros",
      storageBucket: "chatteros.appspot.com",
      messagingSenderId: "146659224455",
      appId: "1:146659224455:web:3f24b630f2347ee0770122"
      };    
      firebase.initializeApp(firebaseConfig);
      user_name=localStorage.getItem("user_name");
      document.getElementById("user_name").innerHTML="bienvenido"+user_name;
      function addroom(){
      Room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(Room_name).update({
      purpose:"adding_room_name"});
      localStorage.setItem("Room_name", Room_name);
      window.location="html.html";
      };
      function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("index (1) (1).html");
      };
      function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="html.html";
      }
   