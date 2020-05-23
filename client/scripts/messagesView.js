var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  renderMessages: function(data) {
    //debugger;
    //use MessageView.render
    //render(message)
    var html = "";
    //console.log()
    for (let message of data){
      message.content = message.text;
      html+= MessageView.render(message);
    }

    MessagesView.$chats.append(html);
  }
  //someone creates a message
  //we get it somehow
  //we call render message
  //append it to the $chats thing



};