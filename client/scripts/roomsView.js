var RoomsView = {
  rooms: [],
  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    RoomsView.$button.on('click', RoomsView.renderRooms);
  },

  renderRooms: function(event) {
    event.preventDefault();
    //use RoomsView.renderRooms
    //iterate through the data given
    //  add each room to the room list?
    // var room = {};
    // room.name = ??
    App.fetch(function() {
      //iterates through the messages and only includes them if they have the given roomname
    });
    $('.addRoom').on('click', function () {
      $('#chats').html('');
      App.fetch(function() {
        var o = new Option("option text", "value");
        /// jquerify the DOM object 'o' so we can use the html method
        $(o).html("option text");
        $(".roomSelector").append(o);
      });
    });
  }
};

//refactor for when a room is clicked on in the list


/*
<select name="cars" id="cars">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select>
*/