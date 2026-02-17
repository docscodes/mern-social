// import { Posts } from "../../dummyData";
import axios from "axios";
import { useEffect, useState } from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";

export default function Feed({ username }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts/timeline/697b1481514767b3df29d78d").then((res) => {
        setPosts(res.data);
      });
    };

    fetchPosts();
  }, []);

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {/* {Posts.map((p) => (
          <Post
            key={p.id}
            post={p}
          />
        ))} */}
        {posts.map((p) => (
          <Post
            key={p.id}
            post={p}
          />
        ))}
      </div>
    </div>
  );
}
