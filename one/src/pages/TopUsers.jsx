import React, { useEffect, useState } from "react";

const TopUsers = () => {
  const [users, setUsers] = useState({});
  const [posts, setPosts] = useState(null);
  const [comments, setComments] = useState(null);
  useEffect(() => {
    fetch("/evaluation-service/users", {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQ2Njg5MDY1LCJpYXQiOjE3NDY2ODg3NjUsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjZiNTVhNzM2LWE4NDAtNGNlNi04Y2M3LWJhODkxMWQ0ZGYyMCIsInN1YiI6ImNvbnRhY3RtZWFuYW55YXNpbmdoQGdtYWlsLmNvbSJ9LCJlbWFpbCI6ImNvbnRhY3RtZWFuYW55YXNpbmdoQGdtYWlsLmNvbSIsIm5hbWUiOiJhbmFueWEgc2luZ2giLCJyb2xsTm8iOiIyMjA0OTIxNTUwMDEyIiwiYWNjZXNzQ29kZSI6ImJhcWhXYyIsImNsaWVudElEIjoiNmI1NWE3MzYtYTg0MC00Y2U2LThjYzctYmE4OTExZDRkZjIwIiwiY2xpZW50U2VjcmV0IjoiWGFqZ0JocEVZandFaGJmYiJ9.-sQp8ghCARPWazZjCz8NgvoNFTmArXoBonIs3F5C3tg",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUsers(data.users);
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
