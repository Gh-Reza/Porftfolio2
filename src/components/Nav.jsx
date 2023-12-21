import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="bg-[#3E3C3C] py-4">
      <div className="sm:container sm:px-12 md:px-32 flex justify-between text-gray-200">
        <h1 className="font-bold text-lg">My Portfolio</h1>
        <ul className="flex gap-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <a href="mailto:ghrezam97@gmail.com">Email</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
