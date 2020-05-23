var Rooms = {
  rooms: {},
  roomsList: []
};
Rooms.renderRooms = function(){
  for (message in Messages.data){
    if (message.roomname === undefined){
      continue;
    }
    if (Rooms.rooms[message.roomname] === undefined){
      Rooms.rooms[message.roomname] = true;
    }
  }
  Rooms.roomsList = Object.keys(Rooms.rooms);
};

Rooms.add = function(name) {
  newRoom = {};
  newRoom.roomname = name;
  //console.log(name, Rooms.rooms);
  if (newRoom.roomname === undefined ||newRoom.roomname === " " || newRoom.roomname === ""){
    return;
  }
  if (Rooms.rooms[newRoom.roomname] === undefined){
    Rooms.rooms[newRoom.roomname] = true;
    //console.log("inside the if");
    //     var o = new Option($("#roomName").val(), "value");
    var o = new Option(name, "value");
    //console.log(o);
    //$(o).html($("name").val());
    $(".roomSelector").append(o);
  }
  console.log(RoomsView.$select.val());
};
// var yourSelect = document.getElementById( "your-select-id" );
// alert( yourSelect.options[ yourSelect.selectedIndex ].value )