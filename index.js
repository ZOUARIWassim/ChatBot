const express = require('express');
const path = require('path'); 
require('dotenv').config();
const { GroqAPI } = require('./GroqAPI');
const ConversationHistory = [];

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/GetChatBotResponse', async (req, res) => {
    const UserMessage = req.body.UserMessage;
    const Conversation = { role: "user", content: UserMessage }
    ConversationHistory.push(Conversation);
    const ChatBotResponse = await GroqAPI.GetChatBotResponse(UserMessage, ConversationHistory);
    res.json({ ChatBotResponse });
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
