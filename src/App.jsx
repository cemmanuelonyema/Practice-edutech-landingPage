import {
  Companies,
  Courses,
  Hero,
  Navbar,
  Achievement,
  Feedback,
  CTA,
  Categories,
  Footer,
} from "./components/index";
import "./App.css";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Companies />
      <Courses />
      <Achievement />
      <Categories />
      <Feedback />
      <CTA />
      <Footer />
    </>
  );
};

export default App;
