import './Card.scss'
export default function Card(props) {

  return (

    <div className="container">
        <div className="post">
            <h3 className="title">{props.object.title}</h3>
            <p className="body">{props.object.body}</p>
            <button onClick={() => props.delPost(props.object.id)}>Delete Post</button>
            <button onClick={() => props.addPost()}>Add Post</button>
        </div>
    </div>
  )
}
