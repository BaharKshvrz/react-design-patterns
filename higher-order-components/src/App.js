import UserInfo from './UserInfo';
import printProps from './printProps';
import { withEditableUser } from './withEditableUser';
import { withUser } from './withUser';
import UserInfoForm from './UserInfoForm';
import { withEditableResource } from './withEditableResource';

const Text = ({message}) => {
    return <h1>{message}</h1>
}
const TextWrapped = printProps(Text);
const UserInfoWithLoader = withUser(UserInfo, "3");
const WrapperUserInfoForm = withEditableUser(UserInfoForm, "1");
const WrapperResourceForm = withEditableResource(UserInfoForm, "/users/1", "user");


function App() {
  return (
    <div className="App">
        {/* {<TextWrapped  message="test HOC"/>}
        <hr/>
        {<UserInfoWithLoader/>}
        <hr/> */}
        {/* {<WrapperUserInfoForm/>} */}
        <hr/>
        {<WrapperResourceForm/>}
    </div>
  );
}

export default App;
