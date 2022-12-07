import Notiflix from 'notiflix';

export const notifyInit = () => {
  Notiflix.Notify.init({
  width: '280px',
  position: 'left-top',
  distance: '3.8rem',
  timeout: 2500,
  showOnlyTheLastOne: true,
  clickToClose: true,
  zindex: 9999,
  });
}