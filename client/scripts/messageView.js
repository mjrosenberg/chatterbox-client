var MessageView = {

  //change username to a clickable link

  render: _.template(`
      <div class="chat">
        <div class="username">
          <%= username %>
        </div>
        <div class="text">
          <%= content %>
        </div>
        <div class="roomname">
          <%= roomname %>
        </div>
      </div>
    `)

};

/*        <!--
<div class="roomname">
<%= roomname %>
</div>
-->
*/