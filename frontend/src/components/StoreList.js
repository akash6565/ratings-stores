import React from 'react';

export default function StoreList({ stores, onRateChange }) {
  return (
    <div>
      {stores.map(store => (
        <div key={store.id} style={{ border: '1px solid #ccc', padding: '10px' }}>
          <h3>{store.name}</h3>
          <p>Address: {store.address}</p>
          <p>Overall Rating: {store.avgRating || 'No ratings yet'}</p>
          {store.userRating !== undefined && (
            <div>
              <p>Your Rating: {store.userRating || 'Not rated yet'}</p>
              <input
                type="number"
                min="1"
                max="5"
                value={store.userRating || ''}
                onChange={(e) => onRateChange(store.id, +e.target.value)}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
