import { useState } from 'react';

export default function Form() {
  const userId = '';
  // const userEmail = '';
  const handleAddUserId = (event) => setNewUserId(event.target.value);
  const handleUserEmailChange = '';
  const handleAddUserMessage = (event) => setNewUserMessage(event.target.value);
  const userMessage = '';

  const display = (e) => {
    e.preventDefault();
    console.log({ userId }, { userMessage });
  };

  const messagesDiplayed = [{ userId, userMessage }];
  const [userMessagesList, setUserMessagesList] = useState(
    'Really great job !'
  );
  const [userIdList, setUserIdList] = useState('defaultpseudo');

  return (
    <div>
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

      <form>
        <h2>Contact-us !</h2>
        <div>
          <div>
            <label htmlFor="firstName">
              ID :
              <input
                id="userId"
                type="text"
                required
                value={userId}
                onChange={(event) =>
                  handleAddUserId(userId.id, event.target.value)
                }
              />
            </label>
          </div>
          <div>
            <label htmlFor="userEmail">
              email :
              <input
                id="userEmail"
                type="text"
                required
                value={userEmail}
                onChange={handleUserEmailChange}
              />
            </label>
          </div>
          <div>
            <label htmlFor="userMessage">
              message :
              <input
                id="userMessage"
                type="text"
                required
                value={userMessage}
                onChange={
                  (event) => setUserMessagesList(event.target.value)

                  // handleAddUserMessage(userId.message, event.target.value)
                }
              />
            </label>
            <div>
              <button id="submit" type="submit" onClick={display}>
                Send your message to the team
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
