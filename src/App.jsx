import styles from "./style";
import { About, Departments, Explore, Footer, Home, Navbar, Testimonials } from "./components";

const App = () => (
    <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <Navbar/>
            </div>
        </div>
        <div className={`bg-primary ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
                <Home/>
            </div>
        </div>
        <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <About/>
                <Departments/>
                <Explore/>
                <Testimonials/>
                <Footer/>
            </div>
        </div>
    </div>
);

export default App;
