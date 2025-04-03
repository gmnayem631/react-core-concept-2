import "./App.css";
import Posts from "./Posts";
import { Suspense } from "react";

const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  return response.json();
};

function App() {
  const postsPromise = fetchPosts();
  return (
    <>
      <h2>Vite + React</h2>

      <Suspense fallback={<h4>Posts are coming.....</h4>}>
        <Posts postsPromise={postsPromise}></Posts>
      </Suspense>
    </>
  );
}

export default App;
