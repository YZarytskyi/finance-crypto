import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { NavCrypto } from './NavCrypto/NavCrypto'
import { Preloader } from 'Components/Common'

const Crypto = () => {
  return (
    <>
      <NavCrypto />
      <Suspense fallback={<Preloader />}>
        <Outlet />
      </Suspense>
    </>
  )
}

export default Crypto
