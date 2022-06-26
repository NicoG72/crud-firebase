import { useState, createContext, useContext, useEffect } from "react";
import { auth } from "../firebase/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

export const UserContext = createContext();

export const useContextUser = () => {
  const context = useContext(UserContext);
  return context;
};

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(false);
  const [loading, setLoading] = useState(true);

  const registerUser = async (email, password) =>
    await createUserWithEmailAndPassword(auth, email, password);

  const loginUser = async (email, password) =>
    await signInWithEmailAndPassword(auth, email, password);

  const logOut = async () => await signOut(auth);

  useEffect(() => {
    const onSubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        const { email, displayName, uuid } = currentUser;
        setUser(email, displayName, uuid);
        setLoading(false);
      } else {
        setUser(null);
      }
    });
    return () => onSubscribe();
  }, []);

  return (
    <>
      <UserContext.Provider
        value={{ user, loading, setUser, registerUser, loginUser, logOut }}
      >
        {children}
      </UserContext.Provider>
    </>
  );
};

export default UserProvider;
