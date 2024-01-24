import React, {Dispatch, ReactChild, SetStateAction, useEffect, useLayoutEffect} from 'react';

type State = {
  loadingState: LoadingState | null;
  userToken: string | null;
  user: UserProps | null;
};

export enum LoadingState {
  IDLE,
  LOADING,
}

export interface UserProps {
  email?: string;
  id?: string;
  profile_photo_url?: string;
  type?: string;
  username?: string;
}

interface UserContextProps {
  children: ReactChild;
}

interface UserContextValues extends State {
	setLoadingState: Dispatch<SetStateAction<LoadingState>>,
	setUserToken: Dispatch<SetStateAction<string | null>>,
  setUser: Dispatch<SetStateAction<UserProps | null>>,
}

const userContextDefaultValues: UserContextValues = {
  loadingState: null,
  userToken: null,
	setLoadingState: () => {},
	setUserToken: () => {},
  user: null,
  setUser: () => {},
};

const UserContext = React.createContext<UserContextValues>(userContextDefaultValues);

const UserContextProvider = ({children}: UserContextProps) => {
  const [loadingState, setLoadingState] = React.useState<LoadingState>(LoadingState.IDLE);
  const [userToken, setUserToken] = React.useState<string | null>(null);
  const [user, setUser] = React.useState<any | null>(null);

	useEffect(() => {
    const userTokenLocalStorage = window.localStorage.getItem("userToken")
    if (userTokenLocalStorage !== 'null') {
      setUserToken(userTokenLocalStorage)
    }
	}, []);

	useEffect(() => {
		window.localStorage.setItem("userToken", userToken as string);
    setLoadingState(LoadingState.IDLE)
	}, [userToken]);

  return (
    <UserContext.Provider
      value={{
        loadingState,
        setLoadingState,
        userToken,
        setUserToken,
        user,
        setUser,
      }}>
      {children}
    </UserContext.Provider>
  );
};

const useUserContext = () => {
  const context = React.useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUserContext must be used within a UserContextProvider');
  }
  return context;
};

export {UserContextProvider, useUserContext, UserContext};