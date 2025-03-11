
import React, { useState } from "react";
import "./VirtualAssistant.scss";
import collapse from "../assets/images/collapse.svg"

const VirtualAssistant = () => {
  const [userMessage, setUserMessage] = useState("");
  const [messages, setMessages] = useState([
    { text: "Welcome! I’m Ivie, the virtual assistant for Yvonne’s portfolio. I can provide information about her projects, skills, contacts and experience. Let me know how I can assist you!", sender: "assistant" }
  ]);
  const [isVisible, setIsVisible] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [speechEnabled, setSpeechEnabled] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(false);


  const handleMessageSubmit = (e) => {
    e.preventDefault();
    setMessages([...messages, { text: userMessage, sender: "user" }]);
    setUserMessage("");

    // Simulating assistant response
    setTimeout(() => {
      const assistantResponse = getAssistantResponse(userMessage);
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: assistantResponse, sender: "assistant" }
      ]);
      // Speak the response out loud if enabled
      if (speechEnabled) {
        speak(assistantResponse); 
      }
    }, 1000);
  };

const getAssistantResponse = (message) => {
    const lowerCaseMessage = message.toLowerCase();
  
    if (lowerCaseMessage.includes("contact")) {
      return "You can reach me through the Contact section or email me at: yvonneitanny@gmail.com.";
    } else if (lowerCaseMessage.includes("hello")) {
      return "Hi there! How can I assist you today? Ask me about Yvonne's Projects, Skills, or Contact info.";
    } else if (lowerCaseMessage.includes("hi")) {
        return "Hi there! How can I assist you today? Ask me about Yvonne's Projects, Skills, or Contact info.";
    } else if (lowerCaseMessage.includes("portfolio")) {
      return "Check out my Portfolio by visiting yvonneitan.com or my LinkedIn at https://www.linkedin.com/in/yvonneitan.";
    } else if (lowerCaseMessage.includes("projects")) {
      return "Learn more about me in the Projects section. Click below!";
    } else if (lowerCaseMessage.includes("skills")) {
      return "Discover the services I offer in the Skills section! Click below!";
    } else if (lowerCaseMessage.includes("experience")) {
      return "You can learn about my professional experience on LinkedIn.";
    } else if (lowerCaseMessage.includes("education")) {
      return "My education details are available on LinkedIn";
    } else if (lowerCaseMessage.includes("resume")) {
      return "Please send me an email at yvonneitanny@gmail.com and I will be happy to send you my resume";
    } else if (lowerCaseMessage.includes("about")) {
      return "I’m a software engineer who is also passionate about UX/UI Design, creating user-friendly and user-centric softwares designs. You can learn more about me in the About section.";
    } else if (lowerCaseMessage.includes("help")) {
      return "I can assist with Portfolio, About Yvonne, Projects, Skills, Experience, Education, Resume, and Contact info. What would you like to know?";
    } else if (lowerCaseMessage.includes("thank you") || lowerCaseMessage.includes("thanks")) {
      return "You're welcome! Let me know if you need further assistance.";
    } else if (lowerCaseMessage.includes("email")){
        return "You can contact me through my email at yvonneitanny@gmail.com or LinkedIn at https://www.linkedin.com/in/yvonneitan.";  
    } else if (lowerCaseMessage.includes("hire") || lowerCaseMessage.includes("job")) {
      return "I’m always open to new opportunities. You can contact me through my email at yvonneitanny@gmail.com or the Contact section for any collaboration or job inquiries!";
    } else if (lowerCaseMessage.includes("freelance")) {
      return "I’m available for freelance work! Feel free to reach out via email at yvonneitanny@gmail.com or the Contact section if you have a project in mind.";
    } else if (lowerCaseMessage.includes("services")) {
      return "I offer a variety of services including web development, UI/UX design, custome designs and custom software solutions. You can check out more in the Skills section.";
    } else if (lowerCaseMessage.includes("portfolio overview")) {
      return "My portfolio showcases a range of projects, including web applications, mobile apps, and UI/UX designs. Check out my Projects section for details!";
    } else if (lowerCaseMessage.includes("languages") || lowerCaseMessage.includes("technologies")) {
      return "I work with various technologies including HTML, CSS, JavaScript, React, and Node.js. You can find a more detailed list in the Skills section.";
    } else if (lowerCaseMessage.includes("availability")) {
      return "I am currently available for freelance work and full-time opportunities. Feel free to reach out for collaboration!";
    } else if (lowerCaseMessage.includes("portfolio feedback") || lowerCaseMessage.includes("review")) {
      return "I’d love to hear your thoughts on my portfolio! You can reach out through the Contact section for feedback.";
    // } else if (lowerCaseMessage.includes("client testimonials") || lowerCaseMessage.includes("reviews")) {
    //   return "Check out the Testimonials section for feedback from clients and collaborators about my work.";
    } else if (lowerCaseMessage.includes("technologies used")) {
      return "I use modern web technologies like HTML5, CSS3, JavaScript, React, and Node.js to build interactive and responsive web applications.";
    } else if (lowerCaseMessage.includes("interests") || lowerCaseMessage.includes("hobbies")) {
      return "Apart from programming, I enjoy traveling, reading tech blogs, and exploring new design trends. I’m passionate about continuous learning!";
    } else if (lowerCaseMessage.includes("portfolio update") || lowerCaseMessage.includes("latest project")) {
      return "My latest project is always updated in the Projects section. Check it out for the most recent work!";
    } else if (lowerCaseMessage.includes("teamwork") || lowerCaseMessage.includes("collaboration")) {
      return "I have experience collaborating with teams on various projects. I value teamwork and communication in every project I work on.";
    } else if (lowerCaseMessage.includes("technological stack")) {
      return "My tech stack includes front-end technologies like React, JavaScript, and CSS, and back-end technologies such as Node.js and Express.";
    } else if (lowerCaseMessage.includes("code samples") || lowerCaseMessage.includes("github")) {
      return "You can view my code samples on GitHub! Check out the link in the Projects section for access.";
    } else {
      return "I didn’t catch that. Try asking about Yvonne's Portfolio, Projects, Skills, Experience, Education, or Contact info!";
    }
  };
  

  const speak = (text) => {
    if ('speechSynthesis' in window && !isSpeaking) {
      setIsSpeaking(true);
      const msg = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(msg);
      msg.onend = () => setIsSpeaking(false);
    }
  };

  const toggleVisibility = () => {
    setIsVisible(!isVisible); // Toggle assistant visibility
    // setIsButtonClicked(true);  // Stop the button animation when clicked
  };

  const toggleSpeech = () => {
    setSpeechEnabled(!speechEnabled); // Toggle speech feature
  };

  return (
    <div>
      {/* Pop-up Trigger Button */}
      <button onClick={toggleVisibility}  className={`assistant-toggle-btn ${isVisible ? '' : 'dancing'}`}>

      Chat with Ivie ...✏️    </button>

      {/* Pop-up Modal for the Assistant */}
      {isVisible && (
        <div className="virtual-assistant-popup">
          <div className="assistant-chat">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`message ${msg.sender === "user" ? "user-message" : "assistant-message"}`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Quick Actions with Links to Sections */}
          <div className="quick-actions">
            <a href="#home" className="quick-action-btn">Home</a>
            <a href="#projects" className="quick-action-btn">Projects</a>
            <a href="#skills" className="quick-action-btn">Skills</a>
            <a href="#contact" className="quick-action-btn">Contact</a>
          </div>

          {/* Message Input Form */}
          <form className="message-form" onSubmit={handleMessageSubmit}>
            <input
              type="text"
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              placeholder="Ask me anything..."
              required
            />
            <button type="submit">Send</button>
          </form>

          {/* Toggle Speech Button */}
          <button onClick={toggleSpeech} className="speech-toggle-btn">
            {speechEnabled ? "Turn Speech Off" : "Turn Speech On"}
          </button>

          {/* Close Button */}
          <button onClick={toggleVisibility} className="assistant-close-btn">
            <img src={collapse} alt="Collapse" />
          </button>
        </div>
      )}
    </div>
  );
};

export default VirtualAssistant;
