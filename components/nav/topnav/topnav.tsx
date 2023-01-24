import Link from "next/link";
import './topnav.css';

const TopNav = () => {
    return (
        <header>
            <nav>
                <Link href={"/"} className="logo">
                    <div>Scalable</div>
                </Link>
            </nav>
        </header>
    );
}

export default TopNav;