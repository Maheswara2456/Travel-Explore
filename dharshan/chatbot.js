// dharshan/chatbot.js

document.addEventListener("DOMContentLoaded", function () {

  const chatToggle = document.getElementById("chat-toggle");
  const chatBox = document.getElementById("chatbot-box");
  const chatBody = document.getElementById("chat-body");
  const chatInput = document.getElementById("chat-input");

  if (!chatToggle || !chatBox || !chatBody || !chatInput) return;

  // Toggle chatbot box open/close
  chatToggle.addEventListener("click", () => {
    chatBox.classList.toggle("active");
  });

  // Enter key message send
  chatInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter" && chatInput.value.trim() !== "") {
      const userMsg = chatInput.value.trim();
      addMessage("user", userMsg);
      chatInput.value = "";
      setTimeout(() => {
        const botReply = getBotResponse(userMsg);
        addMessage("bot", botReply);
      }, 500);
    }
  });

  // Add message to chat
  function addMessage(sender, text) {
    const msg = document.createElement("div");
    msg.className = sender === "user" ? "user-msg" : "bot-msg";
    msg.textContent = text;
    chatBody.appendChild(msg);
    chatBody.scrollTop = chatBody.scrollHeight;
  }

  // Simple bot AI
  function getBotResponse(input) {
    input = input.toLowerCase();

    if (input.includes("hello") || input.includes("hi")) {
      return "Hey traveler! 👋 How can I help you today?";
    }
    if (input.includes("hotel")) {
      return "You can explore nearby hotels from the Hotels section!";
    }
    if (input.includes("food") || input.includes("restaurant")) {
      return "Feeling hungry? Check out Restaurants near you 🍽️";
    }
    if (input.includes("bye")) {
      return "Safe journey! 🌍✨";
    }

    return "I'm your Travel Assistant 🤖 Ask me about hotels, restaurants, places & tips!";
  }
});
