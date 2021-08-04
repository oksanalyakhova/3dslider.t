export const formatFrMonth = (date) => {
  const enMonth = date?.split(' ')?.[1];

  if (enMonth && date) {
    switch (enMonth) {
      case 'January':
        return date.replace(enMonth, 'Janvier');
      case 'February':
        return date.replace(enMonth, 'Février');
      case 'March':
        return date.replace(enMonth, 'Mars');
      case 'April':
        return date.replace(enMonth, 'Avril');
      case 'May':
        return date.replace(enMonth, 'Mai');
      case 'June':
        return date.replace(enMonth, 'Juin');
      case 'July':
        return date.replace(enMonth, 'Juillet');
      case 'August':
        return date.replace(enMonth, 'Août');
      case 'September':
        return date.replace(enMonth, 'Septembre');
      case 'October':
        return date.replace(enMonth, 'Octobre');
      case 'November':
        return date.replace(enMonth, 'Novembre');
      case 'December':
        return date.replace(enMonth, 'Décembre');
      default:
        return;
    }
  }

  return date;
};
