import { NavLink } from "react-router-dom";
import style from "./Header.module.scss";
import { MdKeyboardArrowDown } from "react-icons/md";
import brand from "../../assets/images/logo.png";
import { motion } from "framer-motion";
import { useState } from "react";

interface NavLinksProps {
  closeMenu?: () => void;
  isMobile?: boolean;
}

const NavLinks = ({ isMobile, closeMenu }: NavLinksProps) => {
  const animateFrom = { opacity: 0, x: -10 };
  const animateTo = { opacity: 1, x: 0 };

const [display, setDisplay] = useState<'none' | 'flex'>('none')
const handleCryptoSubList = () => setDisplay('flex')

  return (
    <ul>
      <motion.li className={style.liLogo}>
        <NavLink to="/">
          <img src={brand} width={48} height={48} alt="brand" />
        </NavLink>
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        onClick={() => isMobile && closeMenu && closeMenu()}
      >
        <NavLink to="/">Home</NavLink>
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.01 }}
        onClick={() => isMobile && closeMenu && closeMenu()}
      >
        <NavLink to="/crypto/coins">
          Crypto
          <MdKeyboardArrowDown className={style.icon} />
        </NavLink>
        {/* <div className={style.mobileCrypto} onClick={() => handleCryptoSubList()}>
          Crypto
          <MdKeyboardArrowDown className={style.icon} />
        </div> */}
        <div className={style.subListMobile}>
          <ul onClick={() => isMobile && closeMenu && closeMenu()}>
            <li>
              <NavLink to="/crypto/coins">Coins</NavLink>
            </li>
            <li>
              <NavLink to="/crypto/exchanges">Exchanges</NavLink>
            </li>
            <li>
              <NavLink to="/crypto/arbitrage">Arbitrage</NavLink>
            </li>
          </ul>
        </div>
        <div className={style.subList}>
          <ul>
            <li>
              <NavLink to="/crypto/coins">Coins</NavLink>
            </li>
            <li>
              <NavLink to="/crypto/exchanges">Exchanges</NavLink>
            </li>
            <li>
              <NavLink to="/crypto/arbitrage">Arbitrage</NavLink>
            </li>
          </ul>
        </div>
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.02 }}
        onClick={() => isMobile && closeMenu && closeMenu()}
      >
        <NavLink to="/articles">Articles</NavLink>
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.03 }}
        onClick={() => isMobile && closeMenu && closeMenu()}
      >
        <NavLink to="/contacts">Contacts</NavLink>
      </motion.li>
    </ul>
  );
};

export default NavLinks;
