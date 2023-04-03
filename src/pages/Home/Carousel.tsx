import { Carousel } from 'react-bootstrap'
import { ArticlesCarouselData, CryptoCarouselData } from './CarouselData'

const CarouselBlock = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <CryptoCarouselData />
      </Carousel.Item>
      <Carousel.Item>
        <ArticlesCarouselData />
      </Carousel.Item>
    </Carousel>
  )
}

export default CarouselBlock
