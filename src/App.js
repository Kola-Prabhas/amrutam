import Approach from "./components/approach";
import Experts from "./components/experts";
import Feedback from "./components/feedback";
import Footer from "./components/footer";
import Header from "./components/header";
import HomeApp from "./components/home-app";
import LandingPage from "./components/landing-page";
import Main from "./components/main";
import Specialities from "./components/specialities";

function App() {
  return (
	  <div className="">
		  <Header />
		  <LandingPage />
		  <Main />
		  <Specialities />
		  <Approach />
		  <Feedback /> 
		  <Experts />
		  <HomeApp />
		  <Footer />
      </div>
  );
}

export default App;
