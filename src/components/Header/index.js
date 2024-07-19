import { Link } from "react-router-dom";
import "./index.css";

const Header = () => (
    <header>
        <div>
            <img
                alt="logo"
                src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg_sm_logo_en_dark.749d0244.svg&w=256&q=75"
            />
        </div>
        <ul>
            <Link to="/">
                {" "}
                <li>Home</li>
            </Link>
            <Link to="/puja">
                <li>Puja</li>
            </Link>
            <Link>
                <li>Panchang</li>
            </Link>
            <li>Temples</li>
            <li>Library</li>
        </ul>
        <div>
            <select>
                <option>English</option>
                <option>Hindi</option>
            </select>
        </div>
    </header>
);

export default Header;
