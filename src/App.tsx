import "./App.css";

// components
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import PopularCategories from "./components/PopularCategories/PopularCategories";
import FeaturedVipJobs from "./components/FeaturedVipJobs/FeaturedVipJobs";
import HowItsWork from "./components/HowItsWork/HowItsWork";
import RecentJobsList from "./components/RecentJobsList/RecentJobsList";
import TopEmployers from "./components/TopEmployers/TopEmployers";
import Boxes from "./components/Boxes/Boxes";
import Articles from "./components/Articles/Articles";

function App() {
  return (
    <>
      <div className="bg-background-light text-text-main dark:bg-background-dark dark:text-text-main-dark min-h-screen flex flex-col overflow-x-hidden">
        <Navbar />
        <Header />
        <PopularCategories />
        <FeaturedVipJobs />
        <HowItsWork />
        <RecentJobsList />
        <TopEmployers />
        <Boxes />
        <Articles />
      </div>
    </>
  );
}

export default App;
