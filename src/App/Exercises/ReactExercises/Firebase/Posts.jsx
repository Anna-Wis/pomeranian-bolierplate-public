import { useEffect, useState } from 'react';
import { db } from '../../../Firebase/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

export const Posts = () => {
  const [posts, setPosts] = useState([]);
  const getAllPosts = async (callbac) => {
    const querySnapshot = await getDocs(collection(db, 'posts'));
    const data = [];
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
      data.push({ ...doc.data(), id: doc.id });
    });
    setPosts(data);
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <div>
      <h2>Firebase Posts</h2>
      <ul>
        {posts.map((posts) => (
          <li key={posts.id}>
            {posts.title}, {posts.description}
          </li>
        ))}
      </ul>
    </div>
  );
};
