import React, { useState } from "react";
import { Button } from "@mui/material";
import { db, auth } from "../Firebase/firebase";
import {
  collection,
  addDoc,
  serverTimestamp
} from "firebase/firestore";
const PostBox = () => {
  
  const [newPost, setNewPost] = useState("");
  const PostsRef = collection(db, "Posts");
  
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (newPost === "") return;
    await addDoc(PostsRef, {
      text: newPost,
      createdAt: serverTimestamp(),
      user: auth.currentUser.email
    });
    setNewPost("");
  };
    return (
        <div className="postBox">
        <form onSubmit={handleSubmit}>
          <div className="postBoxinput">
           <input
              placeholder="Compose new post..."
              type="text"
              value={newPost}
              onChange={(event) => setNewPost(event.target.value)}
            />
          </div>
          <input
            placeholder="Enter image URL"
            type="text"
            className="postBoximageInput"
          />
          <Button
          type="submit" className="postBoxbutton">
            Post
          </Button>
        </form>
      </div>
    );
};

export default PostBox;