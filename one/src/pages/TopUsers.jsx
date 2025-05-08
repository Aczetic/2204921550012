import React, { useEffect, useState } from "react";

const AUTHORIZATION = import.meta.env.VITE_AUTHORIZATION;

const TopUsers = () => {
  const [users, setUsers] = useState({});
  const [posts, setPosts] = useState(null);
  const [comments, setComments] = useState(null);
  const [userIds, setUserIds] = useState([]);

  const getPosts = (userid) => {
    fetch(`/evaluation-service/users/${userid}/posts`, {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: AUTHORIZATION,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Fetch error:", error); // Handle any errors
      });
  };

  useEffect(() => {
    let userData, postData, commentsData;
    fetch("/evaluation-service/users", {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: AUTHORIZATION,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        userData = data.users;
        postData = Object.keys(userData).map((key) => getPosts(key));
      })
      .catch((error) => {
        console.error("Fetch error:", error); // Handle any errors
      });
  }, []);

  return (
    <>
      <div>{JSON.stringify(users)}</div>
    </>
  );
};

export default TopUsers;
