import React from "react";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { Button } from "@mui/material";

const NavBar = () => {
  const [user] = useAuthState(auth); // Triggered when user signs in or out

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider(); // Trigger a new Google Authentication Provider
    signInWithRedirect(auth, provider); // Tell Firebase when a user wants to sign in. Redirects to Google Sign-in page. If successful, the user's data is saved to 'auth'.
  };

  const signOut = () => {
    auth.signOut(); // Tells Firebase to sign out the user.
  };

  return (
    <nav className="nav-bar">
      <h1>React Chat</h1>
      {user ? (
        <Button variant="contained" onClick={signOut}>
          Sign Out
        </Button>
      ) : (
        <Button variant="contained" onClick={googleSignIn}>
          Sign-in with Google
        </Button>
      )}
    </nav>
  );
};

export default NavBar;
