import { useEffect, useRef, useState } from 'react'
import { TablePagination } from 'Components/Common'
import { fetchMarkets } from 'Store/Reducers/cryptoSlice'
import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks'
import { ModalAuth } from 'Components/Auth/ModalAuth'
import { useLocalStorageState } from 'hooks/useStorage'
import { CoinTableHead } from './CoinTableHead'
import style from './Coins.module.scss'

const SELECTED_COINS_KEY = 'selected-coins'
const COUNT_COINS = 50

const Coins = () => {
  const [selectedCoins, setSelectedCoins] = useLocalStorageState<string[]>(SELECTED_COINS_KEY, [])

  const { isLoadingCrypto, markets } = useAppSelector((state) => state.crypto)
  const dispatch = useAppDispatch()
  const [page, setPage] = useState<number>(1)
  const [modalAuthShow, setModalAuthShow] = useState<boolean>(false)

  const headingRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    dispatch(fetchMarkets(page))
  }, [page])

  const setNewSelectedCoins = (newArr: string[]) => {
    setSelectedCoins(newArr)
  }

  const openModalAuth = () => {
    setModalAuthShow(true)
  }

  return (
    <>
      <section className={`${style.table} ${style.tableCoins}`}>
        <h1 className={style.tableHeader} ref={headingRef}>
          Cryptocurrencies
        </h1>
        <CoinTableHead
          isLoading={isLoadingCrypto}
          markets={markets}
          selectedCoins={selectedCoins}
          openModalAuth={openModalAuth}
          setNewSelectedCoins={setNewSelectedCoins}
        />
      </section>
      <div className={style.pagination}>
        <TablePagination page={page} setPage={setPage} count={COUNT_COINS} ref={headingRef} />
      </div>
      <ModalAuth modalAuthShow={modalAuthShow} setModalAuthShow={setModalAuthShow} isLogin />
    </>
  )
}

export default Coins
