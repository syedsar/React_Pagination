import "./App.css";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Pagination from "./Components/Pagination";
import { userPosts } from "./userPosts";
import Pagination_2 from "./Components/Pagination_2";

function App() {
  const [posts, setPosts] = useState(userPosts);

  // const [showPerPage, setShowPerPage] = useState(4);
  const showPerPage = 4

  const [pagination, setPagination] = useState({
    start: 0,
    end: showPerPage,
  });

  const onPagination = (start, end) => {
    setPagination({
      start: start,
      end: end,
    });
  };
  return (
    <div className="App">
      <div className="container" style={{height : '350px'}} >
        <div className="row">
          {posts.slice(pagination.start, pagination.end).map((post) => (
            <div className="col-md-3 py-3" key={post.id}>
              <div className="card h-100">
                <div className="card-header">
                  #{post.id} {post.title}
                </div>
                <div className="card-body">{post.body}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Pagination_2 showPerPage={showPerPage} onPagination={onPagination} totalUser = {posts.length}/>
    </div>
  );
}

export default App;