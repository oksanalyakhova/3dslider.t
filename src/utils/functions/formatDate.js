export const formatDate = ({ locale, date }) => {
  let formattedDate = date

  if (locale === 'fr-CA' && date) {
    const splittedDate = date.split(' ')

    let month = splittedDate[0].toLowerCase()

    switch (month) {
      case 'january':
        return (formattedDate = `${splittedDate[1]} janvier ${splittedDate[2]}`)
      case 'february':
        return (formattedDate = `${splittedDate[1]} février ${splittedDate[2]}`)
      case 'march':
        return (formattedDate = `${splittedDate[1]} mars ${splittedDate[2]}`)
      case 'april':
        return (formattedDate = `${splittedDate[1]} avril ${splittedDate[2]}`)
      case 'may':
        return (formattedDate = `${splittedDate[1]} mai ${splittedDate[2]}`)
      case 'june':
        return (formattedDate = `${splittedDate[1]} juin ${splittedDate[2]}`)
      case 'july':
        return (formattedDate = `${splittedDate[1]} juillet ${splittedDate[2]}`)
      case 'august':
        return (formattedDate = `${splittedDate[1]} août ${splittedDate[2]}`)
      case 'september':
        return (formattedDate = `${splittedDate[1]} septembre ${splittedDate[2]}`)
      case 'october':
        return (formattedDate = `${splittedDate[1]} octobre ${splittedDate[2]}`)
      case 'november':
        return (formattedDate = `${splittedDate[1]} novembre ${splittedDate[2]}`)
      case 'december':
        return (formattedDate = `${splittedDate[1]} décembre ${splittedDate[2]}`)
      default:
        return
    }
  }

  return formattedDate
}
