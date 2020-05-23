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
    App.fetch(function() {
      //iterates through the messages and only includes them if they have the given roomname
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