import { useState } from "react";

import { motion } from "framer-motion";

import {
  Bot,
  Send,
  X,
} from "lucide-react";

function AIChatbot() {
  const [open, setOpen] = useState(false);

  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hello Farmer 👋 How can I help you today?",
    },
  ]);

  const generateAIResponse = (text) => {
    const lower = text.toLowerCase();

    if (lower.includes("rainfall")) {
      return "Soybean and millets are recommended for low rainfall conditions.";
    }

    if (lower.includes("fertilizer")) {
      return "Nitrogen-rich fertilizers may improve your soil quality.";
    }

    if (lower.includes("profit")) {
      return "Soybean currently shows higher profitability in your region.";
    }

    return "AI is analyzing your query. Please monitor soil and weather conditions regularly.";
  };

  const handleSend = () => {
    if (!message.trim()) return;

    const userMessage = {
      sender: "user",
      text: message,
    };

    const botMessage = {
      sender: "bot",
      text: generateAIResponse(message),
    };

    setMessages([
      ...messages,
      userMessage,
      botMessage,
    ]);

    setMessage("");
  };

  return (
    <>
      {/* FLOATING BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 w-16 h-16 rounded-full bg-green-500 flex items-center justify-center shadow-2xl hover:scale-110 transition-all z-50"
      >
        {open ? (
          <X size={30} />
        ) : (
          <Bot size={30} />
        )}
      </button>

      {/* CHAT WINDOW */}
      {open && (
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
            y: 50,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          transition={{
            duration: 0.4,
          }}
          className="fixed bottom-28 right-8 w-[95vw] sm:w-[400px] h-[80vh] sm:h-[600px] backdrop-blur-xl bg-[#0b1a13]/90 border border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col z-50"
        >
          {/* HEADER */}
          <div className="p-6 border-b border-white/10 flex items-center gap-4">
            <Bot className="text-green-400" size={35} />

            <div>
              <h2 className="text-2xl font-bold text-white">
                Agri AI Assistant
              </h2>

              <p className="text-gray-400">
                Smart Farming Support
              </p>
            </div>
          </div>

          {/* MESSAGES */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`max-w-[80%] p-4 rounded-2xl ${
                  msg.sender === "user"
                    ? "ml-auto bg-green-500 text-white"
                    : "bg-white/10 text-white"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* INPUT */}
          <div className="p-4 border-t border-white/10 flex items-center gap-3">
            <input
              type="text"
              placeholder="Ask AI about crops, soil, weather..."
              value={message}
              onChange={(e) =>
                setMessage(e.target.value)
              }
              className="flex-1 p-4 rounded-2xl bg-white/10 border border-white/10 outline-none text-white"
            />

            <button
              onClick={handleSend}
              className="w-14 h-14 rounded-2xl bg-green-500 flex items-center justify-center hover:bg-green-600 transition-all"
            >
              <Send size={22} />
            </button>
          </div>
        </motion.div>
      )}
    </>
  );
}

export default AIChatbot;