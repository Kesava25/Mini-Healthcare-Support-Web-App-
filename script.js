// ---------- FORM LOGIC (AUTO SUMMARY - AI CONCEPT) ----------
document.getElementById("supportForm").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const name = document.getElementById("name").value;
    const role = document.getElementById("role").value;
    const message = document.getElementById("message").value;
  
    const summary = generateSummary(message);
  
    document.getElementById("result").innerHTML = `
      <h3>Request Submitted</h3>
      <p><b>Name:</b> ${name}</p>
      <p><b>Role:</b> ${role}</p>
      <p><b>AI Summary:</b> ${summary}</p>
      <p>Status: Sent to NGO support team</p>
    `;
  });
  
  function generateSummary(text) {
    text = text.toLowerCase();
    if (text.includes("medicine")) return "Medicine assistance required.";
    if (text.includes("food")) return "Food or nutrition support needed.";
    if (text.includes("doctor")) return "Doctor consultation requested.";
    if (text.includes("volunteer")) return "Volunteer registration request.";
    return "General healthcare support request.";
  }
  
  // ---------- CHATBOT LOGIC ----------
  const chatArea = document.getElementById("chatArea");
  
  // Welcome message
  window.onload = function () {
    addMessage("Hello! I am the Healthcare FAQ Bot 🤖", "bot");
    addMessage("You can ask about medicine, food support, doctor consultation, or volunteering.", "bot");
  };
  
  function sendMessage() {
    const input = document.getElementById("userInput");
    const userText = input.value.trim();
  
    if (userText === "") return;
  
    addMessage(userText, "user");
  
    const reply = getBotReply(userText.toLowerCase());
  
    setTimeout(() => {
      addMessage(reply, "bot");
    }, 400);
  
    input.value = "";
  }
  
  function addMessage(text, sender) {
    const div = document.createElement("div");
    div.className = sender;
    div.innerText = text;
    chatArea.appendChild(div);
    chatArea.scrollTop = chatArea.scrollHeight;
  }
  
  function getBotReply(text) {
    if (text.includes("medicine")) {
      return "We help patients connect with NGOs that provide free or low-cost medicines.";
    }
    if (text.includes("food")) {
      return "Food and nutrition support is available through partner NGOs.";
    }
    if (text.includes("doctor")) {
      return "We guide patients to free or low-cost doctor consultations.";
    }
    if (text.includes("volunteer")) {
      return "You can register as a volunteer using the form on the left side.";
    }
    if (text.includes("help")) {
      return "I can help with medicine, food, doctor consultation, or volunteering.";
    }
    return "Sorry, I can answer only about medicine, food, doctor, or volunteer support.";
  }