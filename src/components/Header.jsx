import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='text-center'>
            <Link className='btn btn-link' to='/'>Home</Link>
            <Link className='btn btn-link' to='/add-coffee'>Add Coffee</Link>
        </div>
    );
};

export default Header;