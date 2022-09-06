import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Feed from "./components/Feed/Feed";
import Widgets from "./components/Widgets/Widgets"
import SignIn from "./components/Login/SignIn";
import { login, logout, selectUser} from "./features/userSlice";
import { auth } from "./firebase";


function App() {
  const user = useSelector (selectUser)
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
           // user is logged in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
                // user is logged out
        dispatch(logout())
      }
    });
  }, [dispatch])
  
  return (
    <div className="app">
      <Header />
      {!user ? (
           // <Login />
           <SignIn />
           
        ) : (
       <div className="app__body">
        <Sidebar />
         <Feed />
         <Widgets />
       </div>
  )}
  </div> 
 );
}

export default App;
