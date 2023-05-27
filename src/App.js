import Main from "./layout/Main";
import ItemContextProvider from "./store/itemContext";

function App() {
  return (
    <div className="App">
      <ItemContextProvider>
        <Main />
      </ItemContextProvider>
    </div>
  );
}

export default App;
