export default function Card(props) {
  
  return (
    <div className="card">
      <img src={props.imageUrl} className="card-img-top" alt={props.title} />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <a href={props.originUrl} target = "_blank" className="btn btn-warning">
          Read more
        </a>
      </div>
    </div>
  );
}
