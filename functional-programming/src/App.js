import RecursiveComponent from "./RecursiveComponent";
import { BigSuccessButton, DangerButton } from "./composition-with-props";
import { BigSuccessButtonWithPartially, DangerButtonWithPartially } from "./partiallyApply";

const nestedData  = {
  a: 1,
  b: {
    b1: 4,
    b2: {
        b23: 'Hello',
    },
    b3: {
        b31: {
           message: 'Hi',
        },
        b32: {
           message: 'Hi',
        }
    },
    c: {
       c1: 10,
       c2: 20,
    }
  }
}

function App() {
  return (
    <div className="App">
      { nestedData && <ul><RecursiveComponent data={nestedData}/></ul>
      }

      <DangerButton text="Don't do it!"/>
      <BigSuccessButton text="I'm huge" />
       <hr/>
      <DangerButtonWithPartially text="Don't do it! using parially!"/>
      <BigSuccessButtonWithPartially text="I'm huge using parially!" />
    </div>
  );
}

export default App;
