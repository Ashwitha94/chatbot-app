function sendMessage() {
    let inputField = document.getElementById("user-input");
    let message = inputField.value.trim();

    if (message === "") return;

    appendMessage(message, "user");
    inputField.value = "";

    fetch("/get", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ message: message })
    })
    .then(response => response.json())
    .then(data => {
        appendMessage(data.response, "bot");
    });
}

function appendMessage(text, sender) {
    let chatBox = document.getElementById("chat-box");

    let messageDiv = document.createElement("div");
    messageDiv.classList.add(sender + "-message");

    let bubble = document.createElement("div");
    bubble.classList.add("message");
    bubble.innerText = text;

    messageDiv.appendChild(bubble);
    chatBox.appendChild(messageDiv);

    chatBox.scrollTop = chatBox.scrollHeight;
}