// import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import { ContextHolder } from "@frontegg/rest-api";
import { AdminPortal, useAuth, useLoginWithRedirect } from "@frontegg/react";
function App() {
  const { user, isAuthenticated } = useAuth();
  const loginWithRedirect = useLoginWithRedirect(); //use login with redirect will redirect you to login page
  //Uncomment this to redirect to login automatically
  useEffect(() => {
    if (!isAuthenticated) {
      loginWithRedirect();
    }
  }, [isAuthenticated, loginWithRedirect]);
  const logout = () => {
    const baseUrl = ContextHolder.getContext().baseUrl;
    window.location.href = `${baseUrl}/oauth/logout?post_logout_redirect_uri=${window.location}`;
  };
  // admin user - to show the view full profile
  const handleClick = () => {
    AdminPortal.show();
  };

  const showItems = () => {

  };

  return (
    <div className="App">
      {isAuthenticated ? (
        <div className="card">
          <div>
            <img src={user?.profilePictureUrl} alt={user?.name} />
          </div>
          <div className="detail">
            <span className="heading">Name: {user?.name}</span>
            <span className="heading">Name: {user?.email}</span>
          </div>
          <div>
            showItems();
          </div>
          <div>
            <button onClick={() => logout()} className="button">
              Click to logout
            </button>

            <button onClick={() => handleClick()} className="button">
              View full Profile
            </button>
          </div>
        </div>
      ) : (
        // this portion will not be seen, will only be displayed fraction of second, then redirect to login page
        <div> 
          <button onClick={() => loginWithRedirect()} className="button">
            Click me to login
          </button>
        </div>
      )}
    </div>
  );
}
export default App;
