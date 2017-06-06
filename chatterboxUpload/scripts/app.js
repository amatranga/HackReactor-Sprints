// YOUR CODE HERE:
$(document).ready()

var message = {
	username: 'sample',
	text: 'Hello world!'

}

function postMessages(message){
	$.ajax({
	  // This is the url you should use to communicate with the parse API server.
	  url: 'http://parse.sfs.hackreactor.com/chatterbox/classes/messages',
	  type: 'POST',
	  data: JSON.stringify(message),
	  contentType: 'application/json',
	  success: function (data) {
	    console.log('chatterbox: Message sent');
	  },
	  error: function (data) {
	    // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
	    console.error('chatterbox: Failed to send message', data);
	  }
	});
}


function getMessages(){
	$.ajax({
		url: 'http://parse.sfs.hackreactor.com/chatterbox/classes/messages',
		type: 'GET',
		//data: //some sort of function that acts as an escape
		success: function(data){
			console.log('chatterbox: Retrieved messages');
		}, 
		error: function(data){
			console.error('chatterbox: Failed to get messages');
		}
	})
}
