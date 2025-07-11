import { useEffect, useState } from 'react';
import axios from '../api/axios';
import { useAuth } from '../auth/AuthContext';

export default function AdminDashboard() {
  const [stats, setStats] = useState({});
  const [users, setUsers] = useState([]);
  const [stores, setStores] = useState([]);
  const { logout } = useAuth();

  useEffect(() => {
    axios.get('/admin/dashboard').then(res => setStats(res.data));
    fetchUsers();
    fetchStores();
  }, []);

  const fetchUsers = () => {
    axios.get('/admin/users').then(res => setUsers(res.data));
  };

  const fetchStores = () => {
    axios.get('/admin/stores').then(res => setStores(res.data));
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <button onClick={logout}>Logout</button>
      <div>
        <p>Total Users: {stats.userCount}</p>
        <p>Total Stores: {stats.storeCount}</p>
        <p>Total Ratings: {stats.ratingCount}</p>
      </div>

      <h3>Users</h3>
      <table border="1">
        <thead>
          <tr><th>Name</th><th>Email</th><th>Address</th><th>Role</th></tr>
        </thead>
        <tbody>
          {users.map(u => (
            <tr key={u.id}><td>{u.name}</td><td>{u.email}</td><td>{u.address}</td><td>{u.role}</td></tr>
          ))}
        </tbody>
      </table>

      <h3>Stores</h3>
      <table border="1">
        <thead>
          <tr><th>Name</th><th>Email</th><th>Address</th><th>Rating</th></tr>
        </thead>
        <tbody>
          {stores.map(s => (
            <tr key={s.id}><td>{s.name}</td><td>{s.email}</td><td>{s.address}</td><td>{s.avgRating}</td></tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
