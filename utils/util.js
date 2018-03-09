const formatTime = date => {
  let year = date.getFullYear()
  let month = date.getMonth() + 1

  return year + '-' + (month > 9 ? month : '0' + month)
}

module.exports = {
  formatTime: formatTime
}
