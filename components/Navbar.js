import Link from "next/link";
const Navbar = () => {
  return (
    <div className="navv">
      <h1>INDIAN NEWS</h1>
      <div className="navv__dropdown">
        <Link href="/">
          <h5>HOME</h5>
        </Link>

        <h5>NATIONAL </h5>
        <h5>INTERNATIONAL</h5>
        <h5>CITY</h5>
        <h5>SPORTS</h5>
        <Link href="/admin">
          <h5>ADMIN</h5>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
