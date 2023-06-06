export const getActualMonthAndHour = () => {
  const date = new Date()

  const monthInCalendarScale = date.getMonth() + 1
  const hour = date.getHours()

  const actualMonthAndHour = {
    month: monthInCalendarScale,
    hour: hour,
  }

  return actualMonthAndHour
}