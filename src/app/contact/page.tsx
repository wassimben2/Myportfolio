"use client";
import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  // Fonction qui gère l'envoi du formulaire
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("✅ Message sent successfully!");
        setForm({ name: "", email: "", message: "" }); // reset
      } else {
        setStatus("❌ Failed to send message.");
      }
    } catch (err) {
      console.error(err);
      setStatus("⚠️ Error sending message.");
    }
  };

  return (
    <div className="min-h-screen dark:bg-[#0f172a] relative overflow-hidden">
      {/* Particules animées */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/10 rounded-full animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: "4s",
            }}
          />
        ))}
      </div>

      {/* Navbar */}
      <nav className="relative z-10 p-6 flex justify-between items-center">
        <div className="text-2xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          My Portfolio
        </div>
        <Link
        className=""
        href='/'>
        <button className="px-6 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-[0_0_25px_rgba(129,140,248,0.8)] hover:scale-105 transition-all duration-300 ease-out">
          ← Back to Home
        </button>
        </Link>
      </nav>

      {/* Hero Title */}
      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-text-shimmer">
              Send me a DM
            </span>
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Ready to collaborate? Drop me a line and let’s build something amazing.
          </p>
        </div>

        {/* Form */}
        <div className="max-w-2xl mx-auto font-semibold">
          <div className="bg-slate-800/50 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-slate-700/50 shadow-xl hover:shadow-2xl transition-shadow duration-500">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm text-slate-300 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white placeholder-slate-400 hover:scale-[1.02]"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm text-slate-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white placeholder-slate-400 hover:scale-[1.02]"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm text-slate-300 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white placeholder-slate-400 hover:scale-[1.02]"
                  placeholder="What would you like to discuss?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-slate-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white placeholder-slate-400 resize-none hover:scale-[1.01]"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white font-bold hover:scale-105 hover:shadow-xl transform transition-all duration-300 ease-out"
              >
                🚀 Send Message
              </button>
            </form>
          </div>

          {/* Social links */}
          <div className="mt-12 text-center">
            <p className="text-slate-400 mb-6">Or reach out directly:</p>
            <div className="flex justify-center space-x-6">
              {["twitter", "linkedin", "github"].map((platform, i) => (
                <a
                  key={i}
                  href="#"
                  className="p-3 bg-slate-800/50 rounded-full hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 transition-all duration-300 hover:scale-110"
                >
                  <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.33 3.44 9.83 8.2 11.43.6.11.82-.26.82-.58 0-.29-.01-1.06-.02-2.09-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.74.08-.74 1.2.09 1.84 1.23 1.84 1.23 1.07 1.83 2.82 1.3 3.51.99.11-.77.42-1.3.77-1.6-2.67-.3-5.47-1.34-5.47-5.97 0-1.32.47-2.39 1.23-3.23-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.4 11.4 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.23 0 4.64-2.8 5.66-5.47 5.97.43.37.82 1.1.82 2.22 0 1.6-.02 2.89-.02 3.28 0 .32.22.7.82.58A12 12 0 0 0 12 0z"/>
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 text-center py-8 text-slate-500">
        <p>© 2025 FlowState Creations. All Rights Reserved.</p>
      </footer>
    </div>
  )
}
