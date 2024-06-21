import Link from "next/link";

interface MobileMenuProps {
  handleClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ handleClose }) => {
  return (
    <div className="h-screen w-screen fixed top-[80px] left-0 z-50 bg-white bg-opacity-100 backdrop-blur">
      <nav className="p-4 pl-8">
        <ul className="space-y-6">
          <li onClick={handleClose}>
            <Link href="/">Home</Link>
          </li>
          <li onClick={handleClose}>
            <Link href="/background">Background</Link>
          </li>
          <li onClick={handleClose}>
            <Link href="/contact">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MobileMenu;
