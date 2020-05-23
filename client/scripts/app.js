var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);
    //setInterval(App.fetch, 5000);

    $('.refreshMessages').on('click', function () {

      $('#chats').html('');
      App.fetch((data) => {});
    });

    $('.addRoom').on('click', function () {
      //change this to
      //console.log(Rooms.getRooms());
      var newRoom = $("#roomName").val();
      Rooms.add(newRoom);

      //moved the below to Rooms.addRoom
      // var newRoom = {};
      // newRoom.roomname = $("#roomName").val();
      // if (Rooms.rooms[newRoom.roomname] === undefined){
      //   Rooms.rooms[newRoom.roomname] = true;
      // }
      // $("#roomSelector").append(`$(newRoom)`);
    });
  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {

      Messages.data = data.results;
      //console.log("messages.data: ", Messages.data);
      MessagesView.renderMessages(data.results);
      callback();
      console.log(data);
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }

};
