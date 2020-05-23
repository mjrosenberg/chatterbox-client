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