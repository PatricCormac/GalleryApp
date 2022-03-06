import React from 'react';

export function useUserStore() {
  const [user, setUser] = React.useState(null);

  return [user, setUser];
}