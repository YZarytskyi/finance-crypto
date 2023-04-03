import { useEffect, useRef, useState } from 'react'
import { signOut } from 'firebase/auth'
import { Notify } from 'notiflix'
import { COOKIE_TOKEN_NAME, deleteCookie } from 'utils/cookie'
import { auth } from '../Firebase/Firebase'
import { ModalAuth } from './ModalAuth'
import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks'
import { setIsAuth } from 'Store/Reducers/authSlice'
import { PCProfileMenu } from './PCProfileMenu'
import { MobileProfileMenu } from './MobileProfileMenu'
import style from './Auth.module.scss'

interface AuthButtonsProps {
  isProfileOpen?: boolean
}

export const AuthButtons = ({ isProfileOpen }: AuthButtonsProps) => {
  const isAuth = useAppSelector((state) => state.auth.isAuth)
  const isInitialized = useAppSelector((state) => state.app.isInitialized)
  const dispatch = useAppDispatch()

  const [modalAuthShow, setModalAuthShow] = useState<boolean>(false)
  const [isLogin, setIsLogin] = useState<boolean>(true)
  const [isPCProfileOpen, setIsPCProfileOpen] = useState<boolean>(false)

  const loginRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (isPCProfileOpen) {
      window.addEventListener('mousedown', onClickCloseProfile)
    }
    return () => window.removeEventListener('mousedown', onClickCloseProfile)
  }, [isPCProfileOpen])

  const onClickAuthBtn: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
    const target = e.target as Element
    setModalAuthShow(true)
    document.body.classList.add('overflow')
    if (target === loginRef.current) {
      setIsLogin(true)
    } else {
      setIsLogin(false)
    }
  }

  const onClickLogout: React.MouseEventHandler<HTMLButtonElement> = async (e) => {
    e.preventDefault()
    try {
      await signOut(auth)
      deleteCookie(COOKIE_TOKEN_NAME)
      dispatch(setIsAuth(false))
      onClickToggleProfile()
      Notify.success('You logged out successfully')
    } catch ({ message }) {
      Notify.failure(message as string)
    }
  }

  const onClickToggleProfile = () => {
    setIsPCProfileOpen((prev) => !prev)
  }

  const onClickCloseProfile = (e: MouseEvent) => {
    const target = e.target as Element
    if (
      target.closest(`.${style.pcProfileMenuHidden}`) ||
      target.closest(`.${style.pcProfileButton}`)
    ) {
      return
    }
    setIsPCProfileOpen(false)
  }

  if (isInitialized) {
    return (
      <>
        {isAuth ? (
          <>
            <PCProfileMenu
              isPCProfileOpen={isPCProfileOpen}
              onClickToggleProfile={onClickToggleProfile}
              onClickLogout={onClickLogout}
            />
            <MobileProfileMenu
              isProfileOpen={isProfileOpen!}
              onClickToggleProfile={onClickToggleProfile}
              onClickLogout={onClickLogout}
            />
          </>
        ) : (
          <div className={style.pcAuthContainer}>
            <button
              ref={loginRef}
              type='button'
              className={style.loginBtn}
              onClick={onClickAuthBtn}
            >
              Login
            </button>
            <button type='button' className={style.signUpBtn} onClick={onClickAuthBtn}>
              Sign&nbsp;Up
            </button>
          </div>
        )}
        <ModalAuth
          modalAuthShow={modalAuthShow}
          setModalAuthShow={setModalAuthShow}
          isLogin={isLogin}
        />
      </>
    )
  }
  return null
}
