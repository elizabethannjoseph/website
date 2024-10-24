const chatbox = document.getElementById('chatbox');
const userInput = document.getElementById('userInput');

// Event listener for Enter key to send message
userInput.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        sendMessage(); // Call sendMessage function on Enter key press
    }
});

function sendMessage() {
    const message = userInput.value.trim(); // Trim input to remove extra spaces
    if (message === '') return;

    // Display the user's message
    displayMessage('You', message, 'user');

    // Generate a chatbot response
    generateBotResponse(message);

    // Clear the input field
    userInput.value = '';
}

function displayMessage(sender, message, messageType) {
    const messageElement = document.createElement('p');
    messageElement.textContent = `${sender}: ${message}`;
    messageElement.classList.add('message', messageType);  // Add message class based on user or bot
    chatbox.appendChild(messageElement);
    chatbox.scrollTop = chatbox.scrollHeight;  // Scroll to the latest message
}

function generateBotResponse(input) {
    let botResponse = '';

    // Convert input to lowercase and trim it to avoid case and space issues
    input = input.toLowerCase().trim();

    // Check for various questions and provide the correct response
    if (input.includes('skills')) {
        botResponse = 'I have skills in C, C++, Python, Java, SQL, and Web Development.';
    } else if (input.includes('projects')) {
        botResponse = 'Sure! I worked on a Chess Program and various web development projects, focusing on responsive design and backend logic.';
    } else if (input.includes('contact')) {
        botResponse = 'You can contact me at liza.joseph0202@gmail.com or call me at 9941537747.';
    } else if (input.includes('study') || input.includes('education') || input.includes('college')) {
        botResponse = 'I studied Computer Science at MIT, where I developed strong programming and problem-solving skills.';
    } else if (input.includes('programming languages')) {
        botResponse = 'I am proficient in C, C++, Python, Java, and SQL.';
    } else {
        botResponse = "Sorry, I didn't get that. You can ask about my skills, projects, or contact details!";
    }

    // Display the chatbot's response
    displayMessage('Bot', botResponse, 'bot');
}

// Function to handle top questions
function askQuestion(question) {
    displayMessage('You', question, 'user');  // Display the question
    generateBotResponse(question);            // Generate a response based on the question
}
