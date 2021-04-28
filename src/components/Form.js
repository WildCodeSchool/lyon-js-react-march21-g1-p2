// import './formStyles.css';
import React from 'react';

export default function Form() {
  const [messages, setUserMessageInput] = React.useState(['Great Work !']);
  const [pseudos, setPseudos] = React.useState(['Nicely done !']);
  const [userIdInput, setUserIdInput] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setUserIdInput('');
    setPseudos([...pseudos, userIdInput]);
    // setMessages([...messages, setUserMessageInput]);
  };

  return (
    <div>
      <h2>Your last advices :</h2>
      <div className="chat-box ">
        <ul className="messages">
          <>
            {pseudos.map((pseudo) => (
              <li key={pseudo} className="message">
                {pseudo}
              </li>
            ))}
          </>
        </ul>
      </div>

      <div className="container">
        <form
          className="bg-blue text-center max-w-lg px-3 py-4 text-white mx-auto rounded"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Username"
            className="block w-full mx-auto text-sm py-2 px-3 rounded-2xl"
            id="usePseudo"
            required
            value={pseudos}
            onChange={(event) => setUserIdInput(event.target.value)}
          />
          <input
            type="text"
            placeholder="Password"
            className="block w-full mx-auto text-sm py-2 px-3 rounded-2xl my-3"
            id="userMessage"
            required
            value={messages}
            onChange={(event) => setUserMessageInput(event.taget.value)}
          />
          <button
            id="submit"
            type="submit"
            className="bg-blue text-white font-bold py-2 px-4 rounded-2xl border block mx-auto w-full"
          >
            Login
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
