import dayjs from 'dayjs'

export const getDatePeriod =(date1, date2=null)=> {
  if(!date1) return {
    year: null,
    month: null,
  }
  const date = new Date(date1)
  const now = date2? new Date(date2) : new Date()

  let years = now.getFullYear() - date.getFullYear()
  let months = now.getMonth() - date.getMonth()

  if (months < 0) {
    years--
    months += 12
  }

  return {
    year: years,
    month: months,
  }
}


export const formatDate = (date, format = 'DD.MM.YYYY') => {
  if (!date) return '-:-'
  return dayjs(date).format(format)
}
