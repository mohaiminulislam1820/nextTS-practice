import Link from "next/link";

const NavLink = ({routeLink,routeName}:{routeLink:string,routeName:string}) => {
    return (
        <Link href={routeLink} className="border p-1 rounded-lg bg-slate-300">{ routeName}</Link>
    );
};

export default NavLink;