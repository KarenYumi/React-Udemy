import './CoreConcept.css';
export default function CoreConcept({image, title, description}){ //necessario o {}
  return (
  <li>
    <img src={image} alt={title}></img>
    <h3>{title}</h3>
    <p>{description}</p>
  </li>
  );
}