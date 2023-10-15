import Link from "next/link";

const Navbar = () => {
    const route = [
        {
            id: 1,
            path: '/',
            title: 'Home'
        },
        {
            id: 2,
            path: '/cardlist',
            title: 'Product'
        },
        {
            id: 3,
            path: '/configs',
            title: 'Configs'
        },
    ]
    return (
        <div className="navbar bg-[#F2F5FC] z-20 shadow-xl">
            <div className="lg:navbar-start px-3 z-40">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                        {
                            route.map(item =>
                                <li key={item.id}><Link className="z-10" href={item.path}>{item.title}</Link></li>
                            )
                        }
                    </ul>
                </div>
                <Link href="/" className="normal-case text-2xl font-extrabold text-[#4899ED]">Trusted Sailer</Link>
                <ul className="menu menu-horizontal px-1 mx-3 hidden lg:flex">
                    {
                        route.map(item =>
                            <li key={item.id}><Link href={item.path}>{item.title}</Link></li>
                        )
                    }
                </ul>
            </div>

            <div className="navbar-end hidden lg:flex px-6">
                <Link href="/login">Login</Link>
            </div>
        </div>
    );
};

export default Navbar;