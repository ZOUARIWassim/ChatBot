class GroqAPI {
    static async GetChatBotResponse(UserMessage, ConversationHistory = []) {
        const GroqAPI = process.env.GROQ_API;
        
        const requestBody = {
            messages: [...ConversationHistory, { role: "user", content: UserMessage }],
            model: "llama-3.3-70b-versatile"
        };

        const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${GroqAPI}`,
                'Credential': 'include'
            },
            body: JSON.stringify(requestBody)
        });


        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const responseBody = await response.json(); 

        if (responseBody.choices && responseBody.choices.length > 0) {
            const ChatBotResponse = responseBody.choices[0].message.content;
            return ChatBotResponse;
        } else {
            return "I'm sorry, I don't understand.";
        }
    }

}

module.exports = {GroqAPI};