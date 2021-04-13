export default function Form() {
  const firstName = '';
  const lastName = '';
  const handleFirstNameChange = '';
  const handleLastNameChange = '';
  const handleUrTextChange = '';
  const urText = '';
  return (
    <div>
      <div>
        <label htmlFor="firstName">
          Your first name :
          <input
            id="firstName"
            type="text"
            value={firstName}
            onChange={handleFirstNameChange}
          />
        </label>
      </div>
      <div>
        <label htmlFor="lastName">
          Your last name :
          <input
            id="lastName"
            type="text"
            value={lastName}
            onChange={handleLastNameChange}
          />
        </label>
      </div>
      <div>
        <label htmlFor="urText">
          Your message :
          <input
            id="urText"
            type="text"
            value={urText}
            onChange={handleUrTextChange}
          />
        </label>
        <div>
          <input id="submit" type="submit" value="Submit" />
        </div>
      </div>
    </div>
  );
}
