import React, { useState } from "react";
import { motion } from "framer-motion";
import ClipLoader from "react-spinners/ClipLoader";
import toast from "react-hot-toast";


import axios from 'axios'
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkedAlt,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

const sendMail = async (e) => {
  e.preventDefault();

  if (!name.trim() || !email.trim() || !message.trim()) {
    toast.error("Please fill all fields");
    return;
  }

  setLoading(true);

  try {
    const res = await axios.post(
      `${import.meta.env.VITE_API_URL || "http://localhost:4000"}/send/mail`,
      {
        name,
        email,
        message,
      }
    );

    toast.success(res?.data?.message || "Message sent");

    setName("");
    setEmail("");
    setMessage("");

  } catch (error) {
    console.log(error); // important

    toast.error("Backend not running");
  }

  setLoading(false);
};

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      id="contact"
      className="py-20 bg-[var(--bg)]"
    >
      <div className="container mx-auto px-6">
        {/* heading */}
        <h2 className="text-3xl font-bold text-center mb-4 text-[var(--text)]">
          Get In <span className="text-[var(--primary)]">Touch</span>
        </h2>

        <p className="text-[var(--subtext)] text-center max-w-2xl mx-auto mb-16">
          Have a project in mind or want to collaborate? Let's talk!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* FORM */}
          <form  onSubmit={sendMail} className="space-y-6">
            <div>
              <label className="block text-[var(--text)] mb-2">Your Name</label>

              <input
                type="text"
                className="
                w-full
                bg-[var(--card)]
                border border-[var(--border)]
                rounded-lg
                px-4 py-3
                outline-none
                text-[var(--text)]
                "
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-[var(--text)] mb-2">Email</label>

              <input
                type="email"
                className="
                w-full
                bg-[var(--card)]
                border border-[var(--border)]
                rounded-lg
                px-4 py-3
                outline-none
                text-[var(--text)]
                "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-[var(--text)] mb-2">Message</label>

              <textarea
                className="
                w-full h-40
                bg-[var(--card)]
                border border-[var(--border)]
                rounded-lg
                px-4 py-3
                outline-none
                text-[var(--text)]
                "
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="
  w-full
  px-6 py-3
  bg-[var(--primary)]
  text-white
  rounded-lg
  font-medium
  hover:opacity-90
  transition
  flex items-center justify-center gap-2
  "
              disabled={loading}
            >
              {loading ? (
                <ClipLoader size={20} color="#ffffff" />
              ) : (
                "Send Message"
              )}
            </button>
          </form>

          {/* CONTACT INFO */}
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="text-[var(--primary)] text-2xl mr-4">
                <FaMapMarkedAlt />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[var(--text)]">
                  Location
                </h3>
                <p className="text-[var(--subtext)]">Bhubaneswar, Odisha</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="text-[var(--primary)] text-2xl mr-4">
                <FaEnvelope />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[var(--text)]">
                  Email
                </h3>
                <p className="text-[var(--subtext)]">
                  mohitmohanta1144@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="text-[var(--primary)] text-2xl mr-4">
                <FaPhone />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[var(--text)]">
                  Phone
                </h3>
                <p className="text-[var(--subtext)]">+91 8658138198</p>
              </div>
            </div>

            {/* SOCIAL */}
            <div className="pt-4">
              <h3 className="text-lg font-semibold mb-4 text-[var(--text)]">
                Follow Me
              </h3>

              <div className="flex space-x-4">
                <a
                  href="https://github.com/MOHIIT-PROCODER"
                  target="_blank"
                  rel="noreferrer"
                  className="
                  w-12 h-12
                  rounded-full
                  bg-[var(--card)]
                  border border-[var(--border)]
                  flex items-center justify-center
                  text-[var(--primary)]
                  hover:bg-[var(--primary)]
                  hover:text-white
                  transition
                  "
                >
                  <FaGithub />
                </a>

                <a
                  href="https://www.linkedin.com/in/mohit-kumar-mohanta-969347358"
                  target="_blank"
                  rel="noreferrer"
                  className="
                  w-12 h-12
                  rounded-full
                  bg-[var(--card)]
                  border border-[var(--border)]
                  flex items-center justify-center
                  text-[var(--primary)]
                  hover:bg-[var(--primary)]
                  hover:text-white
                  transition
                  "
                >
                  <FaLinkedin />
                </a>

                <a
                  href="https://x.com/mohit65_"
                  target="_blank"
                  rel="noreferrer"
                  className="
                  w-12 h-12
                  rounded-full
                  bg-[var(--card)]
                  border border-[var(--border)]
                  flex items-center justify-center
                  text-[var(--primary)]
                  hover:bg-[var(--primary)]
                  hover:text-white
                  transition
                  "
                >
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
