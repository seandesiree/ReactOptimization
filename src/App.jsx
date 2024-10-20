
import React, { useState, useEffect } from 'react';
import PostList from './PostList';
import UserSelector from './UserSelector';
import PostContent from './PostContent';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const postResponse = await fetch('https://jsonplaceholder.typicode.com/posts');
      const postData = await postResponse.json();
      setPosts(postData);
      
      const userResponse = await fetch('https://jsonplaceholder.typicode.com/users');
      const userData = await userResponse.json();
      setUsers(userData);
    };

    fetchData();
  }, []);
  };

  return (
    <div>
      <UserSelector users={users} setSelectedUserId={setSelectedUserId} />
      <PostList posts={posts} selectedUserId={selectedUserId} />
      {selectedPost && <PostContent content={selectedPost} />}
    </div>
  );


export default App;