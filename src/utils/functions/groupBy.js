export const groupBy = ( array, keyToSortBy ) => {
  const newArray = new Map()
  array.forEach((element) => {
    const key = keyToSortBy(element)
    const collection = newArray.get(key)
    if (!collection) {
      newArray.set(key, [element])
    } else {
      collection.push(element)
    }
  })
  return newArray
}
