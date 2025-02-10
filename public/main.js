const ChatLog = document.getElementById('ChatLog');
const UserInput = document.getElementById('UserInput');

function SendMessage() {
    const message = UserInput.value;
    UserInput.value = '';
    
    DisplayMessage('User',message);
    getChatBotResponse(message);

    UserInput.value = '';
}

function DisplayMessage(sender,message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('Message',sender);

    const messageParagraph = document.createElement('p');
    messageParagraph.innerHTML = message

    messageElement.appendChild(messageParagraph);
    ChatLog.appendChild(messageElement);
}

function getChatBotResponse(UserMessage) {
    fetch('/GetChatBotResponse', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ UserMessage })
    })
    .then(response => response.json())
    .then(data => {
        DisplayMessage('ChatBot',data.ChatBotResponse);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}