import { useState, useEffect } from "react";
import {Avatar  } from "@mui/material";
import { db } from "../Firebase/firebase";
import {ChatBubbleOutline, FavoriteBorder, Publish, Repeat, VerifiedUser,} from "@mui/icons-material/";
import React from "react";
import {
  collection,
  onSnapshot,
  query,
  orderBy,
} from "firebase/firestore";

const Post = () => {
  const PostsRef = collection(db, "Posts");
  const [Posts, setPosts] = useState([]);
useEffect(() => {
    const queryPosts = query(
      PostsRef,
      orderBy("createdAt")
    );
    const unsuscribe = onSnapshot(queryPosts, (snapshot) => {
      let Posts = [];
      snapshot.forEach((doc) => {
        Posts.push({ ...doc.data(), id: doc.id });
      });
      console.log(Posts);
      setPosts(Posts);
    });

    return () => unsuscribe();
  }, []);
console.log(Posts);
    return (
      <div>
        {Posts.map((post) => (
          <div className="post">
      <div className="postavatar">
        <Avatar />
      </div>
      <div className="postbody">
        <div className="postheader">
          <div className="postheaderText">
            <h3>
              {post.user}{" "}
              <span className="postheaderSpecial">
                <VerifiedUser className="postbadge" /> @
                {post.user}
              </span>
            </h3>
          </div>
          <div className="postheaderDescription">
            <p>{post.text}</p>
          </div>
        </div>
        <img alt="" />
        <div className="postfooter">
          <ChatBubbleOutline fontSize="small" />
          <Repeat fontSize="small" />
          <FavoriteBorder fontSize="small" />
          <Publish fontSize="small" />
        </div>
      </div>
      </div>
        ))}
        </div>
    );
};

export default Post;