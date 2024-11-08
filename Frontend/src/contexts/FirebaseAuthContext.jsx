import { firebaseApp } from "../utils/FirebaseApp";
import { createContext, useContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { addUserToDB } from "../utils/addUserToDB";
import { toast } from "react-toastify";

const firebaseAuth = getAuth(firebaseApp);

const FirebaseAuthContext = createContext();

const FirebaseAuthContextProvider = ({ children }) => {
  const [logedInUser, setLogedInUser] = useState(null);
  const SERVER_URL = import.meta.env.VITE_SERVER_URL;
  const registerUserWithEmailAndPassword = async (email, password) => {
    try {
      const user = await createUserWithEmailAndPassword(
        firebaseAuth,
        email,
        password
      );

      if (user) {
        const { uid } = user.user;

        toast.success("User successfully Registered  !");
        addUserToDB(uid);
      }
    } catch (error) {
      toast.error("Error registering user !");
    }
  };

  const loginUserWithEmailAndPassword = async (email, password) => {
    try {
      const user = await signInWithEmailAndPassword(
        firebaseAuth,
        email,
        password
      )
        .then((user) => {
          if (user) {
            toast.success("User logined successfully !");
          }
        })
        .catch((error) => {
          console.log("Error login user:", error);
        });
    } catch (error) {
      toast.error("Wrong Email or Password");
    }
  };
  const logOut = async () => {
    await signOut(firebaseAuth)
      .then(() => toast.success("UserLogout successfully !"))
      .catch(() => toast.error("Unexpected error"));
  };

  useEffect(() => {
    const logedInUser = onAuthStateChanged(firebaseAuth, (user) => {
      setLogedInUser(user);
    });
  }, []);

  return (
    <FirebaseAuthContext.Provider
      value={{
        registerUserWithEmailAndPassword,
        loginUserWithEmailAndPassword,
        logedInUser,
        logOut,
      }}
    >
      {children}
    </FirebaseAuthContext.Provider>
  );
};
export { FirebaseAuthContext, FirebaseAuthContextProvider };
