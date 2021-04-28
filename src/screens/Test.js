// using Webpack require.context to dynamically import images
const requestImageFile = require.context('../assets', true, /.*/);
const ingredients = ['ananas.png', 'anchois.png', 'chorizos.png'];

export default function Test() {
  return (
    <ul>
      {ingredients.map((ingred) => (
        <li>
          <p>{ingred}</p>
          <img src={requestImageFile(`./${ingred}`).default} alt={ingred} />
        </li>
      ))}
    </ul>
  );
}
