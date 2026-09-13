import "./App.css";

// components
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <div className="bg-background-light text-text-main dark:bg-background-dark dark:text-text-main-dark min-h-screen flex flex-col overflow-x-hidden">
        <Navbar />
        <Header />
      </div>
    </>
  );
}

export default App;
