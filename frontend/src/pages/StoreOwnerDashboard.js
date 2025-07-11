import { useEffect, useState } from 'react';
import axios from '../api/axios';
import { useAuth } from '../auth/AuthContext';

export default function StoreOwnerDashboard() {
  const [ratings, setRatings] = useState([]);
  const { logout } = useAuth();

  useEffect(() => {
    axios.get('/store/owner-ratings').then(res => setRatings(res.data));
  }, []);

  return (
    <div>
      <h2>Store Owner Dashboard</h2>
      <button onClick={logout}>Logout</button>
      {ratings.map(store => (
        <div key={store.store}>
          <h3>{store.store}</h3>
          <p>Average Rating: {store.avgRating}</p>
          <ul>
            {store.ratings.map((r, idx) => (
              <li key={idx}>
                {r.User.name} ({r.User.email}) - Rating: {r.rating}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
