import SplitScreen from "./SplitScreen";
import LeftHandComponent from "./LeftHandComponent";
import RightHandComponent from './RightHandComponent';

function App() {
  return (
    <div className="App">
       <SplitScreen leftWeight={1} rightWeight={3}>
          <LeftHandComponent name="layout component"/>
          <RightHandComponent message="separate design"/>
       </SplitScreen>
    </div>
  );
}

export default App;
