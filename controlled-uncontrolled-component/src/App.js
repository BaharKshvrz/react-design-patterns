import UncontrolledModal from "./UncontrolledModal";
import ControlledModal from './ControlledModal'
import { useState } from "react";

function App() {
  const [ shouldShow, setShouldShow ] = useState(false);  

  return (
    <div className="App">
        <button onClick={() => setShouldShow(!shouldShow)}>Show Modal</button>
        <UncontrolledModal> Hi from UncontrolledModal</UncontrolledModal>
        <ControlledModal 
                shouldShow={shouldShow}
                 onRequestClose={() =>setShouldShow(!shouldShow)}
             >
              Hi from ControlledModal
        </ControlledModal>
    </div>
  );
}

export default App;
