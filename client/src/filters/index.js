export const mergeName = (names) => {
  let name = ''
  if (names) {
    names.forEach((item, index) => {
      if (index < names.length - 1) {
        name += item.name + '/'
      } else {
        name += item.name
      }
    })
  }
  return name
}
