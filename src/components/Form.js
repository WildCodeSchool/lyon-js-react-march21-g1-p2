// import './formStyles.css';
import React from 'react';

// livre d'or
export default function Form() {
  const [messages, setMessages] = React.useState(['Great Work !']);
  const [userInput, setuserInput] = React.useState('');
  const [userPseudo, setuserPseudo] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setuserInput('');
    setuserPseudo('');
    setMessages([...messages, `${userInput}: ${userPseudo}`]);
  };

  return (
    <div>
      <h2>Vos derniers messages :</h2>
      <div className="chat-box ">
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
          <input
            type="text"
            className="block w-full mx-auto text-sm py-2 px-3 rounded-2xl"
            required
            value={userInput}
            onChange={(event) => setuserInput(event.target.value)}
          />
          <input
            type="text"
            className="block w-full mx-auto text-sm py-2 px-3 rounded-2xl"
            required
            value={userPseudo}
            onChange={(event) => setuserPseudo(event.target.value)}
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
                />
              </label>
            </div>
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-1/3">
              <button
                className="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="button"
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
