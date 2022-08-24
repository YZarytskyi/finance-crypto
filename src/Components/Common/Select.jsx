import React, { useEffect, useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useDispatch } from 'react-redux';
import { setDefaultMarketsTime, setMarketsTime } from '../../Store/Reducers/cryptoSlice';
import './Select.scss'

export default function Select({chartTime, setChartTime, oneDay, threeDays, sevenDays, coinId}) {
  const dispatch = useDispatch()
  const option1 = '1d'
  const option3 = '3d'
  const option7 = '7d'
  const [option, setOption] = useState(option7)

  useEffect(() => {
    return () => {
      dispatch(setDefaultMarketsTime())
    }
  }, [])

  const handleSelect = (eventKey) => {
    const payload = {}
    payload[coinId] = eventKey
    dispatch(setMarketsTime(payload));
    const title = () => {switch(eventKey) {
      case oneDay:
        return option1;
      case threeDays:
        return option3;
      default: return option7
      }
    }
    setOption(title)
  }
  return (
    <>
        <Dropdown onSelect={(eventKey) => handleSelect(eventKey)}>
          <DropdownButton variant="primary" menuVariant='dark' id="dropdown-basic" title={option}>
            <Dropdown.Item eventKey={oneDay} className='text-xs'>{option1}</Dropdown.Item>
            <Dropdown.Item eventKey={threeDays} className='text-xs'>{option3}</Dropdown.Item>
            <Dropdown.Item eventKey={sevenDays} className='text-xs'>{option7}</Dropdown.Item>
            </DropdownButton>
        </Dropdown>
    </>
  );
}
