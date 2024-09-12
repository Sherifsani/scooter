import logo from "/logo.png";

const Navbar = () => {
  return (
    <nav className="flex w-full px-5 py-4 border-b-[1px] justify-between items-center ">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>

      <ul className="flex gap-12 ">
        <li>Products</li>
        <li>Gallery</li>
        <li>Contact</li>
      </ul>

      <div className="cta flex gap-12 items-center">
        <a>Login</a>
        <a className="bg-textGrey text-white px-4 py-2 rounded-md ">sign up</a>
      </div>
    </nav>
  );
};

export default Navbar;
