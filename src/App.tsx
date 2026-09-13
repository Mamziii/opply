import "./App.css";

// components
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import PopularCategories from "./components/PopularCategories/PopularCategories";

function App() {
  return (
    <>
      <div className="bg-background-light text-text-main dark:bg-background-dark dark:text-text-main-dark min-h-screen flex flex-col overflow-x-hidden">
        <Navbar />
        <Header />
        <PopularCategories />
      </div>
    </>
  );
}

export default App;
