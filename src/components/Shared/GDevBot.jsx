"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaPaperPlane,
  FaRobot,
  FaTimes,
  FaCalendarAlt,
  FaCheck,
} from "react-icons/fa";

const initialMessages = [
  {
    id: 1,
    sender: "bot",
    text: "Hey! 👋 I'm GDev, Fahim's virtual assistant.",
  },
  {
    id: 2,
    sender: "bot",
    text: "Need help with a project? I can connect you with Fahim and help you book a quick meeting.",
  },
];

const quickOptions = [
  "I have a project 🚀",
  "I want to discuss an idea 💡",
  "Book a quick meeting 📅",
];

export default function GDevBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");
  const [step, setStep] = useState("options");
  const [lead, setLead] = useState({
    name: "",
    email: "",
    project: "",
  });

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  const addMessage = (sender, text) => {
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        sender,
        text,
      },
    ]);
  };

  const handleOption = (option) => {
    addMessage("user", option);

    setTimeout(() => {
      if (option.includes("project")) {
        addMessage(
          "bot",
          "Awesome! 🚀 Let me collect a few details so Fahim can get back to you."
        );

        setTimeout(() => {
          addMessage("bot", "What's your name?");
          setStep("name");
        }, 500);
      }

      if (option.includes("idea")) {
        addMessage(
          "bot",
          "Sounds interesting! 💡 Tell me a little about your idea."
        );

        setStep("project");
      }

      if (option.includes("meeting")) {
        addMessage(
          "bot",
          "Sure! 📅 You can book a quick meeting with Fahim here."
        );

        setStep("meeting");
      }
    }, 400);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!input.trim()) return;

    const value = input.trim();

    addMessage("user", value);
    setInput("");

    setTimeout(() => {
      if (step === "name") {
        setLead((prev) => ({
          ...prev,
          name: value,
        }));

        addMessage("bot", `Nice to meet you, ${value}! 👋`);
        addMessage("bot", "What's your email address?");

        setStep("email");
        return;
      }

      if (step === "email") {
        setLead((prev) => ({
          ...prev,
          email: value,
        }));

        addMessage("bot", "Great! What kind of project do you need help with?");
        setStep("project");
        return;
      }

      if (step === "project") {
        setLead((prev) => ({
          ...prev,
          project: value,
        }));

        addMessage(
          "bot",
          "Perfect! I've got the details. 🚀"
        );

        setTimeout(() => {
          addMessage(
            "bot",
            "Would you like to book a quick meeting with Fahim?"
          );

          setStep("confirm");
        }, 500);

        return;
      }

      addMessage(
        "bot",
        "Thanks! I'll make sure Fahim gets your message and contacts you as soon as possible. 🚀"
      );
    }, 500);
  };

  const handleBookMeeting = () => {
    addMessage("user", "Yes, book a meeting 📅");

    setTimeout(() => {
      addMessage(
        "bot",
        "Perfect! Choose a convenient time with Fahim."
      );

      setStep("meeting");
    }, 400);
  };

  return (
    <>
      {/* Floating Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => setIsOpen(true)}
            className="fixed cursor-help bottom-6 right-6 z-[9999] flex items-center gap-3 rounded-full bg-blue-500 px-5 py-3 text-white shadow-2xl shadow-blue-500/30 hover:bg-blue-400 transition-colors"
          >
            <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-white text-blue-500">
              <FaRobot />

              <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-green-400 border-2 border-blue-500" />
            </span>

            <span className="font-semibold">
              Need Help?
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
              y: 30,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.9,
              y: 30,
            }}
            transition={{
              duration: 0.2,
            }}
            className="fixed bottom-6 right-6 z-[9999] flex h-[620px] w-[380px] max-w-[calc(100vw-32px)] flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#080b14] shadow-2xl shadow-black/50"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 bg-[#0d1220] px-4 py-4">
              <div className="flex items-center gap-3">
                <div className="relative flex h-11 w-11 items-center justify-center rounded-full bg-blue-500 text-white">
                  <FaRobot />

                  <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-[#0d1220] bg-green-400" />
                </div>

                <div>
                  <h3 className="font-semibold text-white">
                    GDev
                  </h3>

                  <p className="text-xs text-green-400">
                    Online • Fahim's assistant
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="flex h-9 w-9 items-center justify-center rounded-full text-gray-400 transition hover:bg-white/10 hover:text-white"
              >
                <FaTimes />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 space-y-4 overflow-y-auto p-4 scrollbar-thin">
              {messages.map((message) => (
                <motion.div
                  key={message.id++}
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  className={`flex ${
                    message.sender === "user"
                      ? "justify-end"
                      : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                      message.sender === "user"
                        ? "rounded-br-sm bg-blue-500 text-white"
                        : "rounded-bl-sm bg-white/5 text-gray-200 border border-white/5"
                    }`}
                  >
                    {message.text}
                  </div>
                </motion.div>
              ))}

              {/* Quick Options */}
              {step === "options" && (
                <div className="space-y-2">
                  {quickOptions.map((option) => (
                    <button
                      key={option}
                      onClick={() => handleOption(option)}
                      className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-left text-sm text-gray-200 transition hover:border-blue-400/50 hover:bg-blue-500/10"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}

              {/* Confirm meeting */}
              {step === "confirm" && (
                <div className="space-y-2">
                  <button
                    onClick={handleBookMeeting}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-400"
                  >
                    <FaCalendarAlt />
                    Yes, book a meeting
                  </button>

                  <button
                    onClick={() => {
                      addMessage("user", "Just notify Fahim");
                      addMessage(
                        "bot",
                        "Done! ✅ I'll notify Fahim to contact you as soon as possible."
                      );
                      setStep("done");
                    }}
                    className="w-full rounded-xl border border-white/10 px-4 py-3 text-sm text-gray-300 transition hover:bg-white/5"
                  >
                    Just notify Fahim
                  </button>
                </div>
              )}

              {/* Meeting */}
              {step === "meeting" && (
                <div className="rounded-xl border border-blue-400/20 bg-blue-500/5 p-4">
                  <p className="mb-4 text-sm text-gray-300">
                    Pick a convenient time and I'll connect you with Fahim.
                  </p>

                  <a
                    href="https://calendly.com/devfahim/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-xl bg-blue-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-400"
                  >
                    <FaCalendarAlt />
                    Open Calendar
                  </a>
                </div>
              )}

              {/* Completed */}
              {step === "done" && (
                <div className="flex items-center gap-2 rounded-xl border border-green-400/20 bg-green-500/5 p-4 text-sm text-green-300">
                  <FaCheck />
                  Fahim will contact you as soon as possible.
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            {!["options", "meeting", "confirm", "done"].includes(step) && (
              <form
                onSubmit={handleSubmit}
                className="border-t border-white/10 bg-[#0d1220] p-3"
              >
                <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3">
                  <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder={
                      step === "name"
                        ? "Your name..."
                        : step === "email"
                        ? "Your email..."
                        : "Tell me about your project..."
                    }
                    className="min-w-0 flex-1 bg-transparent py-3 text-sm text-white outline-none placeholder:text-gray-500"
                  />

                  <button
                    type="submit"
                    disabled={!input.trim()}
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-500 text-white transition hover:bg-blue-400 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <FaPaperPlane className="text-xs" />
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}