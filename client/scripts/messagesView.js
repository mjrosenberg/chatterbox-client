var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  renderMessages: function(data) {
    //debugger;

    //for rooms, add a class for the room

    var html = "";
    //console.log()
    var user;
    for (let message of data){
      message.content = message.text;
      message.roomname = message.roomname;
      html+= MessageView.render(message);
    }

    MessagesView.$chats.append(html);

    $(".username").on("click", function(e){
      e.preventDefault();
      var user = $(this).text();
      var selector = "div:contains("+ user +")";
      $(selector).closest('.username').addClass('friend');
    });
  }



};