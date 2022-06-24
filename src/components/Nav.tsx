import { Link } from 'react-router-dom';
import AuthButton, { AuthButtonProps } from './AuthButton';
import Container from './Container';
import { MdOutlineCreate } from 'react-icons/md';

const links = [
  { name: 'Featured', href: '/' },
  { name: 'Latest', href: '/latest' },
];

const Nav: React.FC<{ auth: AuthButtonProps }> = ({ auth }) => (
  <div className="text-white bg-black">
    <Container>
      <div className="py-4 mb-12 flex justify-between">
        <div className="flex space-x-8 items-center">
          <Link to="/">
            <div className="flex items-center space-x-3">
              <h1 className="text-3xl font-bold">
                <span className="text-green">Sky</span>Write
              </h1>
            </div>
          </Link>
          <ul className="flex space-x-3">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className="text-white font-bold hover:text-green transition duration-200"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center space-x-3">
          {auth.userAuthStatus && (
            <Link to="/create">
              <span className="text-xl">
                <MdOutlineCreate />
              </span>
            </Link>
          )}
          <AuthButton
            isKernelLoaded={auth.isKernelLoaded}
            bootloaderLoaded={auth.bootloaderLoaded}
            userAuthStatus={auth.userAuthStatus}
            login={auth.login}
          />
        </div>
      </div>
    </Container>
  </div>
);

export default Nav;
