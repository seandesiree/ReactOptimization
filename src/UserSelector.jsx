
import React, { useCallback } from 'react';

const UserSelector = ({ users, setSelectedUserId }) => {
  // Memoize the user selection handler using useCallback
  const handleUserSelect = useCallback((event) => {
    setSelectedUserId(Number(event.target.value));
  }, [setSelectedUserId]);

  return (
    <select onChange={handleUserSelect}>
      {users.map(user => (
        <option key={user.id} value={user.id}>
          {user.name}
        </option>
      ))}
    </select>
  );
};

export default UserSelector;