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
    DisplayMessage('ChatBot',"I am a ChatBot, I am not programmed to respond to messages yet.");
}