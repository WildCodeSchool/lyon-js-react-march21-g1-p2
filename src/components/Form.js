export default function Form() {
  return (
    <div>
      <div>
        <label htmlFor="fname">First name</label>
        <input type="text" id="fname" name="fname" />
      </div>
      <div>
        <label htmlFor="lname">Last name</label>
        <input type="text" id="lname" name="lname" />
      </div>
      <div>
        <label htmlFor="urtext">Your message</label>
        <textarea id="urtext" name="urtext" placeholder="Give us your point" />
        <input type="submit" value="Submit" />
      </div>
    </div>
  );
}
