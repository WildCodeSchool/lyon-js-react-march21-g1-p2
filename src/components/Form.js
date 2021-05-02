import React from 'react';
import axios from 'axios';
// import API from '../APIClient';

// email

// livre d'or
export default function Form() {
  const [messages, setMessages] = React.useState(['Great Work !']);
  const [userInput, setUserInput] = React.useState('');
  const [userPseudo, setUserPseudo] = React.useState('');

  const [emailInputs, setEmailInputs] = React.useState({
    email: '',
    name: '',
    subject: '',
    description: '',
  });

  const handleBookSubmit = (event) => {
    event.preventDefault();
    setUserInput('');
    setUserPseudo('');
    setMessages([...messages, `${userPseudo}: ${userInput}`]);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmailInputs((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // destructure from inputs
    const { email, name, subject, description } = emailInputs;
    axios.post('/sendtome', {
      // make an object to be handled from req.body on the backend.
      email,
      name,
      subject,
      // change the name to represent text on the backend.
      text: description,
    });
  };
  return (
    <div>
      <h2>Vos derniers messages :</h2>
      <div>
        <ul className="messages">
          <>
            {messages.map((message, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <li key={index} className="message">
                {message}
              </li>
            ))}
          </>
        </ul>
      </div>
      <div className="container">
        <form
          className="bg-blue text-center max-w-lg px-3 py-4 text-black mx-auto rounded"
          onSubmit={handleBookSubmit}
        >
          <h2 className="bg-blue text-center max-w-lg px-3 py-4 text-black mx-auto rounded">
            laissez nous vos messages
          </h2>
          <input
            type="text"
            placeholder="Votre pseudo"
            className="block w-full mx-auto text-sm py-2 px-3 rounded-2xl"
            required
            value={userPseudo}
            onChange={(event) => setUserPseudo(event.target.value)}
          />
          <input
            type="text"
            placeholder="Votre message"
            className="block w-full mx-auto text-sm py-2 px-3 rounded-2xl"
            required
            value={userInput}
            onChange={(event) => setUserInput(event.target.value)}
          />

          <button
            value="Envoyer"
            type="submit"
            className="bg-blue text-white font-bold py-2 px-4 rounded-2xl border block mx-auto w-full"
          >
            Envoyer
          </button>
        </form>
      </div>
      <>
        <h1>feed back form. </h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="email"
            name="email"
            value={emailInputs.email}
            onChange={handleChange}
          />
          <br />
          <input
            type="text"
            placeholder="name"
            name="name"
            value={emailInputs.name}
            onChange={handleChange}
          />
          <br />
          <input
            type="text"
            placeholder="subject"
            name="subject"
            value={emailInputs.subject}
            onChange={handleChange}
          />
          <br />
          <textarea
            name="description"
            placeholder="tell us about your experience"
            value={emailInputs.description}
            onChange={handleChange}
            cols="30"
            rows="10"
          />
          <br />
          <button type="submit">submit</button>
        </form>
      </>
    </div>
  );
}
