import UserInfo from './UserInfo';
import printProps from './printProps';
import { withUser } from './withUser';

const Text = ({message}) => {
    return <h1>{message}</h1>
}
const TextWrapped = printProps(Text);
const UserInfoWithLoader = withUser(UserInfo, "3");

function App() {
  return (
    <div className="App">
        {<TextWrapped  message="test HOC"/>}
        <hr/>
        {<UserInfoWithLoader/>}
        <hr/>
    </div>
  );
}

export default App;
