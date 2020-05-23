var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    //create a message object with username and text
    var message = {};
    message.username = App.username;
    message.text = $("#message").val();
    message.roomname = $(".roomSelector option:selected").text() || "lobby";//$("#roomName").val();
    Rooms.renderRooms();
    console.log(Messages.data);
    console.log(Rooms.rooms);
    Parse.create(message, (data)=>{

      var html = "";
      message.content = message.text;
      html+= MessageView.render(message);

      MessagesView.$chats.prepend(html);
    });
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};