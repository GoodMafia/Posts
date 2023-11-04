import { useState } from "react";
import posts from "./posts.json";
import Card from "./Components/Card/Card";
import "./App.css";

function App() {
  const [arr, setArr] = useState(posts);

  function delPost(id) {
    const copyArr = [...arr];
    const resultArr = copyArr.filter((item) => item.id != id);
    setArr(resultArr);
  }

  function addPost() {
    const copyArr = [...arr];
    const object = {
      userId: 1,
      id: 1,
      title:
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    };
    const resultArr = copyArr.push(object);
    setArr(resultArr);
  }

  return (
    <div>
      {arr.map((item, index) => (
        <Card object={item} addPost={addPost} delPost={delPost} key={index} />
      ))}
    </div>
  );
}

export default App;
