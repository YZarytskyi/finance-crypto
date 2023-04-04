import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks'
import { setDefaultMarketsTime, setMarketsTime } from 'Store/Reducers/cryptoSlice'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import './CoinsSelect.scss'

interface SelectProps {
  H24: '24'
  H72: '72'
  H168: '168'
  coinId: string
}

const CoinsSelect: React.FC<SelectProps> = ({ H24, H72, H168, coinId }) => {
  enum Options {
    OneDay = '1d',
    ThreeDays = '3d',
    SevenDays = '7d',
  }
  const dispatch = useAppDispatch()
  const [option, setOption] = useState<Options>(Options.SevenDays)
  const marketsTime = useAppSelector((state) => state.crypto.marketsTime)

  useEffect(() => {
    const isMarketTime = Object.keys(marketsTime).length
    return () => {
      if (isMarketTime) {
        dispatch(setDefaultMarketsTime())
      }
    }
  }, [])

  const handleSelect = (eventKey: string | null) => {
    const payload: any = {}
    payload[coinId] = eventKey
    dispatch(setMarketsTime(payload))
    const title = () => {
      switch (eventKey) {
        case H24:
          return Options.OneDay
        case H72:
          return Options.ThreeDays
        default:
          return Options.SevenDays
      }
    }
    setOption(title)
  }
  return (
    <Dropdown onSelect={(eventKey) => handleSelect(eventKey)}>
      <DropdownButton variant='primary' menuVariant='dark' id='dropdown-basic' title={option}>
        <Dropdown.Item eventKey={H24} className='text-xs'>
          {Options.OneDay}
        </Dropdown.Item>
        <Dropdown.Item eventKey={H72} className='text-xs'>
          {Options.ThreeDays}
        </Dropdown.Item>
        <Dropdown.Item eventKey={H168} className='text-xs'>
          {Options.SevenDays}
        </Dropdown.Item>
      </DropdownButton>
    </Dropdown>
  )
}

export default CoinsSelect
