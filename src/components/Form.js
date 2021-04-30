// import './formStyles.css';
import React from 'react';
// import axios from 'axios';
// import API from '../APIClient';

// email

const emailer = require('./emailer');

// livre d'or
export default function Form() {
  const [messages, setMessages] = React.useState(['Great Work !']);
  const [userInput, setUserInput] = React.useState('');
  const [userPseudo, setUserPseudo] = React.useState('');

  const [emailFname, setEmailFname] = React.useState('');
  const [emailLname, setEmailLname] = React.useState('');
  const [emailEmail, setEmailEmail] = React.useState('');
  const [emailMessage, setEmailMessage] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setUserInput('');
    setUserPseudo('');
    setMessages([...messages, `${userPseudo}: ${userInput}`]);
  };
  const handleEmailSubmit = () => {
    emailer.sendMail(
      {
        from: `${emailEmail}`,
        to: 'maupied69@hotmail.com',
        subject: "Vous avez recu un message de la part d'un utilisateur",
        text: `${emailFname}${emailLname}\n${emailMessage}`,
        html: `<p>${emailFname}${emailLname}\n${emailMessage}</p>`,
      },
      (err, info) => {
        if (err) console.error(err);
        else console.log(info);
      }
    );
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
          onSubmit={handleSubmit}
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
        <form className="w-full max-w-lg mx-auto">
          <div className="flex flex-wrap -mx-3 mb-6 ">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-first-name"
              >
                First Name
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded-2xl py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="Jane"
                  onChange={(event) => setEmailFname(event.target.value)}
                  value={emailFname}
                />
              </label>

              <p className="text-red-500 text-xs italic">
                Please fill out this field.
              </p>
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-last-name"
              >
                Last Name
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-2xl py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder="Doe"
                  onChange={(event) => setEmailLname(event.target.value)}
                  value={emailLname}
                />
              </label>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                E-mail
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-2xl py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="email"
                  type="email"
                  onChange={(event) => setEmailEmail(event.target.value)}
                  value={emailEmail}
                />
              </label>

              <p className="text-gray-600 text-xs italic">
                Some tips - as long as needed
              </p>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Message
                <textarea
                  className=" resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-2xl py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                  id="message"
                  onChange={(event) => setEmailMessage(event.target.value)}
                  value={emailMessage}
                />
              </label>
            </div>
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-1/3">
              <button
                className="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="button"
                onSubmit={handleEmailSubmit}
              >
                Send
              </button>
            </div>
            <div className="md:w-2/3" />
          </div>
        </form>
      </>
    </div>
  );
}
