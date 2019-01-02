var config = {
  apiKey: "AIzaSyDSpdI2f2JLxtEWwUUIz231VDaNCelyAPg",
  authDomain: "mcontrol-e69ab.firebaseapp.com",
  databaseURL: "https://mcontrol-e69ab.firebaseio.com",
  projectId: "mcontrol-e69ab",
  storageBucket: "mcontrol-e69ab.appspot.com",
  messagingSenderId: "118022207114"
};
firebase.initializeApp(config);
const db=firebase.database(),
  carreras=db.ref().child('carrera'),
  contentApp=document.querySelector('.container'),
  app=document.querySelector('#app');

function listarTemplate(data){
return  `<h2>${data.carrera}</h2>
  <p><b>Descripción: </b>${data.descripcion}</p>
  <p><b>Areas de trabajo: </b>${data.area}</p>
  `
}
carreras.on('child_added',data=>{
  let html =document.createElement('section');
  html.id=data.key
  html.innerHTML=listarTemplate(data.val())
  app.appendChild(html)
});

carreras.on('child_changed',data=>{
  let actualizado=document.getElementById(data.key)
  actualizado.innerHTML=listarTemplate(data.val())
});

carreras.on('child_removed',e=>{
  let eliminado=document.getElementById(e.key)
  eliminado.remove()
});