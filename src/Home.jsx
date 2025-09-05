import { Navbar } from "./Components/Navbar";
import { Landing } from "./Components/Landing";
import { Review } from "./Components/Review";
import { Dishes } from "./Components/Dishes";
import { Choice } from "./Components/Choice";
import { Footer } from "./Components/Footer";
import { StarBG } from "./Components/StarBG";

export const Home = () => {
    return (<div className="min-h-screen text-foreground bg-background overflow-x-hidden z-60 transition-all duration-300">
        
        {/* Navbar */}
        <Navbar/>
        {/* ThemeToggler */}
       
        {/* Generate Star */}
        <StarBG/>

        {/* LandingPage */}

        <Landing/>
        {/* Reviews */}
        <Review/>

        {/* Dishes */}
        <Dishes/>

        {/* Choice */}
        <Choice/>

        {/* Footer */}
        <Footer/>
    </div>
    );
}