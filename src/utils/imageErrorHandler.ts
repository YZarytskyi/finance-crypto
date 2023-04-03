import news from 'assets/images/news.jpg'

export const handleImageError = (e: React.BaseSyntheticEvent) => {
  e.target.onerror = null
  e.target.src = news
}
