import './formStyles.css';
import React from 'react';

export default function Form() {
  // const [messages, setMessages] = React.useState(["Great Work !"]);
  const [pseudos, setPseudos] = React.useState(['randompseudo']);
  const [userIdInput, setUserIdInput] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setUserIdInput('');
    setPseudos([...pseudos, userIdInput]);
    // setMessages([...messages, userMessageInput]);
  };

  return (
    <div>
      <h2>Last messages</h2>
      <table>
        <thead>
          <tr>
            <th>Pseudo</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>userId</td>
            <td>userMessage</td>
          </tr>
        </tbody>
      </table>

      <div className="chat-box">
        <ul className="message">
          <>
            {pseudos.map((pseudo, index) => (
              <li key={index} className="message">
                {pseudo}
              </li>
            ))}
          </>
        </ul>
      </div>

      <form onSubmit={handleSubmit}>
        <h2>Contact-us !</h2>
        <div>
          <div>
            <label htmlFor="pseudo">
              ID :
              <input
                id="usePseudo"
                type="text"
                required
                value={userIdInput}
                onChange={(event) => setUserIdInput(event.target.value)}
              />
            </label>
          </div>
          <div>
            <label htmlFor="userEmail">
              email :
              <input id="userEmail" type="text" required />
            </label>
          </div>
          <div>
            <label htmlFor="userMessage">
              message :
              <input
                id="userMessage"
                type="text"
                required
                // value={userMessageInput}
                // onChange={(event) => setUserMessageInput(event.target.value)}
              />
            </label>
            <div>
              <button id="submit" type="submit">
                Send your message to the team
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
