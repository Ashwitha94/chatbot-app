from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

# Simple chatbot logic
def get_bot_response(user_input):
    user_input = user_input.lower()

    if "hello" in user_input:
        return "Hi there! 👋"
    elif "how are you" in user_input:
        return "I'm just a bot, but I'm doing great!"
    elif "bye" in user_input:
        return "Goodbye! Have a nice day 😊"
    else:
        return "Sorry, I didn't understand that."

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/get", methods=["POST"])
def chatbot():
    user_input = request.json.get("message")
    response = get_bot_response(user_input)
    return jsonify({"response": response})

if __name__ == "__main__":
    app.run(debug=True)