import { useEffect, useState } from 'react';
import axios from '../api/axios';
import StoreList from '../components/StoreList';
import { useAuth } from '../auth/AuthContext';

export default function UserDashboard() {
  const [stores, setStores] = useState([]);
  const { logout } = useAuth();

  useEffect(() => {
    axios.get('/store/all').then(res => setStores(res.data));
  }, []);

  const updateRating = (storeId, rating) => {
    axios.post('/store/submit-rating', { storeId, rating }).then(() => {
      setStores(prev => prev.map(store =>
        store.id === storeId ? { ...store, userRating: rating } : store
      ));
    });
  };

  return (
    <div>
      <h2>User Dashboard</h2>
      <button onClick={logout}>Logout</button>
      <StoreList stores={stores} onRateChange={updateRating} />
    </div>
  );
}
