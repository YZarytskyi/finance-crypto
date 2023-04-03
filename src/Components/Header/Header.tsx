import MobileNav from './MobileNav/MobileNav'
import PCNav from './PCNav/PCNav'

const Header = () => {
  return (
    <header>
      <PCNav />
      <MobileNav />
    </header>
  )
}

export { Header }
