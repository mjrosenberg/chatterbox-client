var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },
  // render: function() {
  //   MessagesView.$chats.html('');
  //   Messages
  //     .items()
  //     .filter(message => Rooms.isSelected(message.roomname))
  //     .each(message => MessagesView.renderMessage(message));
  // },
  renderMessages: function(data) {
    //debugger;

    //for rooms, add a class for the room

    var selected = $(".roomSelector option:selected").text();
    if (!selected){
      selected = "lobby";
    }
    //console.log(document.getElementById("roomSelector").innerHTML);
    //console.log(selected);
    var html = "";
    //console.log()
    var user;
    for (let message of data){
      message.content = message.text;
      message.roomname = message.roomname;
      Rooms.add(message.roomname);
      if (message.roomname === selected){
        html+= MessageView.render(message);
      }
    }

    MessagesView.$chats.append(html);

    //click on a username to highlight all messages from that user
    $(".username").on("click", function(e){
      e.preventDefault();
      var user = $(this).text();
      //rewrite using Friend.toggle()
      var selector = "div:contains("+ user +")";
      $(selector).closest('.username').addClass('friend');

    });
  }



};