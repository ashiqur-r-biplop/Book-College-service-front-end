import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className="bg-blue-600 p-4">
                <ul className="flex justify-between">
                    <li><Link to="/" className="text-white">Home</Link></li>
                    <li><Link to="/colleges" className="text-white">Colleges</Link></li>
                    <li><Link to="/admission" className="text-white">Admission</Link></li>
                    <li><Link to="/my-college" className="text-white">My College</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;