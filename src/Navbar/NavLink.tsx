'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ routeLink, routeName }: { routeLink: string, routeName: string }) => {
    const pathName = usePathname();
    return (
        <Link href={routeLink} className={ pathName===routeLink?'text-slate-800 border-b-4 border-red-500 ':'text-slate-500'}  >{ routeName}</Link>
    );
};

export default NavLink;