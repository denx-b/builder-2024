function hasClass (element, className) {
  return (' ' + element.className + ' ').indexOf(' ' + className + ' ') > -1
}

export {hasClass}
