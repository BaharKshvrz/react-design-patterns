import UserInfo from "./UserInfo";
import UserLoader from "./UserLoader";

function App() {
  return (
    <div className="App">
         <UserLoader render={user => <UserInfo user={user}/>}/>
    </div>
  );
}

export default App;
