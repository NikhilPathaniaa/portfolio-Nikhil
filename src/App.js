import DayNight from "./components/DayNight";
import "tailwindcss/tailwind.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import ProfileSideBar from "./components/ProfileSideBar";
import Contact from "./contact/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./navigation/About";
import Resume from "./resume/Resume";
import FilterPortfolio from "./portfilo/FilterPortfolio";
import AdminMain from "./admin/AdminMain";
import AdminLoginForm from "./admin/AdminLoginForm";
// import Error404 from "./error/Error404";
import Blogs from "./blogs/Blogs";
function App() {
  return (
    <BrowserRouter>
      <div className="bg-homeBg dark:bg-homeTwoBg-dark min-h-screen bg-no-repeat bg-center bg-cover bg-fixed md:pb-16 w-full">
        <DayNight />

        <div className="container grid grid-cols-12 md:gap-10 justify-between lg:mt-[220px]">
          {/* sidber personal info */}
          <ProfileSideBar />
          <div className="col-span-12 lg:col-span-8">
            {/* header for mobile devices start */}
            <NavBar />
            {/* header for mobile devices end */}

            {/* about me section start */}
            <div>
              <div className="lg:rounded-2xl bg-white dark:bg-[#111111]">
                <Routes>
                  <Route path="/Admin" element={<AdminMain />}></Route>
                  <Route path="/" element={<About />}></Route>
                  <Route path="/About" element={<About />}></Route>
                  <Route path="/Portfolio" element={<FilterPortfolio />}></Route>
                  <Route path="/Blogs" element={<Blogs />}></Route>
                  <Route path="/Contact" element={<Contact />}></Route>
                  <Route path="/Resume" element={<Resume />}></Route>
                  <Route path="/Skills" element={<AdminLoginForm />}></Route>
                </Routes>

                <Footer />
                {/* <Error404/> */}
                {/* <SliderPost /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
