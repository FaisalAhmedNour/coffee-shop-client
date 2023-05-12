import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link to='/'>Home</Link>
            <Link to='/add-coffee'>Add Coffee</Link>
            <Link to='/update-coffee'>Update Coffee</Link>
        </div>
    );
};

export default Header;