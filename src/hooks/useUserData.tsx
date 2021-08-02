import { useContext, createContext } from 'react';

import avatar from '../assets/theGoodfather.jpg';

interface UserDataProps {
  children: React.ReactNode;
}

type UserDataContextType = {
  userData: {
    name: string;
    userName: string;
    avatar: string;
    employee: string;
    city: string;
    state: string;
    country: string;
    company: string;
    college: string;
  };
};

const UserDataContext = createContext({} as UserDataContextType);

export function UserDataContextProvider({ children }: UserDataProps) {
  const userData = {
    name: 'Marlon Brando',
    userName: '@thegoodfather',
    avatar,
    employee: 'Actor',
    city: 'Omaha',
    state: 'Nebraska',
    country: 'USA',
    company: 'Paramount',
    college: 'UCLA'
  };

  return (
    <UserDataContext.Provider value={{ userData }}>
      {children}
    </UserDataContext.Provider>
  );
}

export const useUserData = () => useContext(UserDataContext);
