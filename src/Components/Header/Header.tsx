import MobileNav from './MobileNav';
import PCNav from './PCNav';

const Header = () => {
  return (
    <header>
      <PCNav />
      <MobileNav />
    </header>
  );
};

export { Header };
