import { useState } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router";
import "./App.css";
import TopUsers from "./pages/TopUsers";
import TrendingPosts from "./pages/TrendingPosts";
import Feed from "./pages/Feed";

function App() {
  return (
    <>
      <BrowserRouter>
        <div id="nav">
          <NavLink to="top-users">Top Users</NavLink>
          <NavLink to="trending-posts">Trending Posts</NavLink>
          <NavLink to="Feed">Feed</NavLink>
        </div>
        <Routes>
          <Route path="top-users" element={<TopUsers />} />
          <Route path="trending-posts" element={<TrendingPosts />} />
          <Route path="feed" element={<Feed />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
