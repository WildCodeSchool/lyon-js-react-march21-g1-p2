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
    axios
      .post(`${process.env.REACT_APP_API_BASE_URL}/contact`, emailInputs)
      // make an object to be handled from req.body on the backend.
      .then(() => {
        // eslint-disable-next-line no-alert
        window.alert('Votre message a bien été envoyé');
      });
  };
  return (
    <div>
      <h2 className="my-2 font-semibold text-lg text-center">
        Le livre d'or :
      </h2>
      <div>
        <ul>
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
          <h2 className="my-2 font-semibold text-lg text-center">
            Laissez nous vos messages :
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
        <h1 className="my-2 font-semibold text-lg text-center">
          Envoyez nous un email :{' '}
        </h1>
        <form className="w-full max-w-lg mx-auto" onSubmit={handleSubmit}>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded-2xl py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            type="text"
            placeholder="Votre adresse email"
            name="email"
            value={emailInputs.email}
            onChange={handleChange}
          />
          <br />
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded-2xl py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            type="text"
            placeholder="Votre pseudo"
            name="name"
            value={emailInputs.name}
            onChange={handleChange}
          />
          <br />
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded-2xl py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            type="text"
            placeholder="L'objet de votre mail"
            name="subject"
            value={emailInputs.subject}
            onChange={handleChange}
          />
          <br />
          <textarea
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded-2xl py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            name="description"
            placeholder="Racontez-nous !"
            value={emailInputs.description}
            onChange={handleChange}
            cols="30"
            rows="10"
          />
          <br />
          <button
            className="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Envoyez
          </button>
        </form>
      </>
    </div>
  );
}
