import { logo, nsut } from "../assets";

const Navbar = () => {
    return (
        <nav className=" w-full flex py-6 justify-between items-center navbar">
            <img src={nsut} alt="nsut" className="w-[45px]"/>
            <ul className="text-white text-3xl">
                <li>Axiom - The Philosophy Club of NSUT</li>
            </ul>
            <img src={logo} alt="hoobank" className="w-[45px]"/>
        </nav>
    );
};
export default Navbar;
