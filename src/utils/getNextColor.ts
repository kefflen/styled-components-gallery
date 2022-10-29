
export const getNextColor = (currentColorIndex: number = -1) => {
  const colors = ["#1e9bff", "#ff1867", "#6eff3e"]
  let colorIndex: number
  if (currentColorIndex < 0) {
    colorIndex = 0
  } else {
    colorIndex = currentColorIndex + 1
    if (colorIndex >= colors.length) {
      colorIndex = 0
    }
  }
  return {
    index: colorIndex, color: colors[colorIndex]
  }
}