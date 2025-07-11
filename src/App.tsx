import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { ReactNode, useLayoutEffect } from "react";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

// Scroll to top on route change
// automatically scrolls to the top of the page when the route changes
const ScrollToTop = ({ children }: { children: ReactNode }) => {
  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [location.pathname]);

  return <>{children}</>;
};

export default function App() {

  return (
    <Router>
      <ScrollToTop>
        <div className="min-h-screen bg-blue-900 text-white dark">
          <Header />

          <main className="pt-16">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
            <BackToTop/>
          <Footer />
        </div>
      </ScrollToTop>
    </Router>
  );
}
