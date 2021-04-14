// import { useState } from 'react';

export default function Form() {
  const userId = '';
  const userEmail = '';
  const handleAddUserId = '';
  const handleUserEmailChange = '';
  const handleAddUserMessage = '';
  const userMessage = '';

  // const messagesDiplayed = [{ userId, userMessage }];
  // const [userMessagesList, setUserMessagesList] = useState(messagesDiplayed);
  // const [userIdList, setUserIdList] = useState(messagesDiplayed);

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
            <td>userI d</td>
            <td>user Message</td>
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
                onChange={(event) =>
                  handleAddUserMessage(userId.message, event.target.value)
                }
              />
            </label>
            <div>
              <button id="submit" type="submit" value="Submit">
                Send
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
