import { useEffect, useState } from 'react';
import axios from 'axios';
import API from '../APIClient';

const { CancelToken } = axios;

export default function Form() {
  // const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState(null);
  const [userInput, setUserInput] = useState('');
  const [userPseudo, setUserPseudo] = useState('');
  const [successPost, setSuccessPost] = useState(false);
  const [loadingMessages, setLoadingMessages] = useState(false);
  const [error, setError] = useState('');
  const [errorPost, setErrorPost] = useState('');
  const [showMessages, setShowMessages] = useState(null);

  const [emailInputs, setEmailInputs] = useState({
    email: '',
    name: '',
    subject: '',
    description: '',
  });

  const handleError = (err) => {
    if (!axios.isCancel(err))
      setError('Something bad happened, sorry for the inconvenience');
  };

  const useGet = () => {
    const source = CancelToken.source();
    setLoadingMessages(true);
    API.get('/contact', { cancelToken: source.token })
      .then((res) => {
        // setMessages(res.data);
        setShowMessages(
          <div>
            <ul>
              {res.data.map((msg, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <li key={index} className="message mb-2">
                  {`De ${msg.user} : ${msg.input}`}
                </li>
              ))}
            </ul>
          </div>
        );
      })
      .catch(handleError)
      .finally(() => {
        if (
          !(
            source.token.reason &&
            source.token.reason.message === 'request cancelled'
          )
        )
          setLoadingMessages(false);
      });
    return () => {
      source.cancel('request cancelled');
    };
  };

  useEffect(() => {
    if (message) {
      API.post('/contact', message)
        .then(() => {
          setSuccessPost(true);
          useGet();
        })
        .catch(() => {
          setErrorPost('Cannot record this message.');
        });
    }
  }, [message]);

  useEffect(() => {
    useGet();
  }, []);

  const handleBookSubmit = (event) => {
    event.preventDefault();
    setMessage({ user: userPseudo, input: userInput });
    setUserPseudo('');
    setUserInput('');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmailInputs((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // destructure from inputs
    axios
      .post(`${process.env.REACT_APP_API_BASE_URL}/contactmail`, emailInputs)
      // make an object to be handled from req.body on the backend.
      .then(() => {
        // eslint-disable-next-line no-alert
        window.alert('Votre email a bien été envoyé (ne spammez pas trop :-)');
      });
    setEmailInputs({
      email: '',
      name: '',
      subject: '',
      description: '',
    });
  };

  return (
    <div className="contact-page">
      <h2 className="my-4 font-semibold text-lg text-center">Livre d'Or :</h2>
      {error && <h3>{error}</h3>}
      {loadingMessages ? (
        <div className="flex justify-center  pt-3">Loading in progress</div>
      ) : null}
      {showMessages}

      <div className="container">
        <form
          className="text-center max-w-lg px-3 py-4 text-black mx-auto rounded"
          onSubmit={handleBookSubmit}
        >
          <h2 className="my-2 font-semibold text-lg text-center">
            Laissez nous vos messages :
          </h2>
          <input
            type="text"
            placeholder="Votre pseudo, max 30 caractères"
            className="block w-full focus:outline-none mx-auto text-sm py-2 px-3 rounded-2xl mb-2"
            required
            value={userPseudo}
            onChange={(event) => setUserPseudo(event.target.value)}
          />

          <input
            type="text"
            placeholder="Votre message"
            className="block w-full focus:outline-none mx-auto text-sm py-2 px-3 rounded-2xl mb-2"
            required
            value={userInput}
            onChange={(event) => setUserInput(event.target.value)}
          />

          <button
            value="Envoyer"
            type="submit"
            className="form-btn mb-4 mt-2 px-10 py-2 text-xs font-medium leading-6 text-gray-100 hover:text-red-500 uppercase transition  rounded shadow ripple hover:shadow-lg hover:bg-gray-50 focus:outline-none mb-2 max-w-md"
          >
            Envoyez
          </button>
        </form>
      </div>
      {errorPost && <h3 className="text-2xl font-bold m-3">{errorPost}</h3>}
      {successPost && (
        <h3 className="text-2xl text-center font-bold m-3 text-center">
          Votre message a bien été enregistré !
        </h3>
      )}
      <div className="w-9/12 m-auto">
        <form
          className="form-content m-auto flex flex-col items-center"
          onSubmit={handleSubmit}
        >
          <h1 className="my-2 font-semibold text-lg text-center">
            Envoyez nous un email :{' '}
          </h1>
          <input
            className="appearance-none block w-full bg-gray-100 text-gray-700 rounded-2xl py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white"
            type="email"
            placeholder="Votre adresse email"
            name="email"
            value={emailInputs.email}
            onChange={handleChange}
            required
          />

          <input
            className="appearance-none block w-full bg-gray-100 text-gray-700 border rounded-2xl py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white"
            type="text"
            placeholder="Votre pseudo"
            name="name"
            required
            value={emailInputs.name}
            onChange={handleChange}
          />

          <input
            className="appearance-none block w-full bg-gray-100 text-gray-700 border rounded-2xl py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white"
            type="text"
            placeholder="L'objet de votre mail"
            name="subject"
            value={emailInputs.subject}
            onChange={handleChange}
            required
          />

          <textarea
            className="tell-us appearance-none block w-full bg-gray-100 text-gray-700 border border-red-500 rounded-2xl py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white"
            name="description"
            placeholder="Racontez-nous !"
            value={emailInputs.description}
            onChange={handleChange}
            cols="30"
            rows="10"
            required
          />
          <button
            className="form-btn mb-4 mt-2 px-10 py-2 text-xs font-medium leading-6 text-gray-100 hover:text-red-500 uppercase transition  rounded shadow ripple hover:shadow-lg hover:bg-gray-50 focus:outline-none mb-2 max-w-md"
            type="submit"
          >
            Envoyez
          </button>
        </form>
      </div>
    </div>
  );
}
