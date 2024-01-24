export const colorType = (type: string) => {
  switch (type) {
    case 'common':
      return '#0EAD69';
    case 'rare':
      return '#F79A35';
    case 'epic':
      return '#EE4266';
    case 'legendary':
      return '#42C5EE';
    case 'unique':
      return 'linear-gradient(270deg, #BD00FF 0%, #BD01FE 6.67%, #BF05FC 13.33%, #C20BF9 20%, #C614F4 26.67%, #CC20EE 33.33%, #D32DE6 40%, #DA3DDE 46.67%, #E24CD5 53.33%, #E95CCD 60%, #F069C5 66.67%, #F575BF 73.33%, #FA7EBA 80%, #FD84B6 86.67%, #FE88B4 93.33%, #FF89B4 100%)';
  }
};