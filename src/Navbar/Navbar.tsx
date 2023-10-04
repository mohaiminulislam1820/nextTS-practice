import Link from "next/link";
import NavLink from "./NavLink";

const Navbar = () => {
    return (
        <header className="w-10/12 mx-auto mt-6 pb-2 border-b-2">
            <nav className="flex justify-between ">
                <Link href={'/'} className="text-3xl font-semibold">Home</Link>

                <div className="flex gap-6 font-semibold">
                    <NavLink routeLink={'/link1'} routeName={'Link1'}></NavLink>
                    <NavLink routeLink={'/link2'} routeName={'Link2'}></NavLink>
                    <NavLink routeLink={'/link3'} routeName={'Link3'}></NavLink>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;