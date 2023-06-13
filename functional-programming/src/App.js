import RecursiveComponent from "./RecursiveComponent";

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
    </div>
  );
}

export default App;
