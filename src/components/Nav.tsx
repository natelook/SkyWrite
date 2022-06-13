import { Link } from "react-router-dom";
import logo from "../imgs/reddit-logo.png";

const links = [
  { name: "Hot", href: "/" },
  { name: "New", href: "/new" },
  { name: "Rising", href: "/rising" },
  { name: "Top", href: "/top" },
];

const Nav: React.FC<{ auth: () => void }> = ({ auth }) => (
  <div className='py-4 mb-12 flex justify-between'>
    <div className='flex space-x-8 items-center'>
      <Link to='/'>
        <div className='flex items-center space-x-3'>
          <img src={logo} height='30px' width='30px' alt='Logo' />
          <h1 className='text-xl font-bold'>SkyReddit</h1>
        </div>
      </Link>
      <ul className='flex space-x-3'>
        {links.map((link) => (
          <li key={link.href}>
            <Link to={link.href} className='text-blue-600'>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
    <button
      onClick={auth}
      className='bg-[#00c65e] px-5 py-1 rounded text-white shadow-sm'
    >
      Login
    </button>
  </div>
);

export default Nav;
