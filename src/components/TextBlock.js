export default function TextBlock(props) {

  return (
    <div className="textblock">
      <h2>{props.title}</h2>
      <p className="text">{props.text}</p>
    </div>
  );
}
