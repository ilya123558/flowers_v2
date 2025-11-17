'use client'
import * as React from "react"
import ReactCalendar from 'react-calendar'
import './calendar.css'

type CalendarProps = {
  selected?: Date
  onSelect?: (date: Date | undefined) => void
}

export function Calendar({ selected, onSelect }: CalendarProps) {
  const handleDateChange = (value: any) => {
    if (value instanceof Date) {
      onSelect?.(value)
    }
  }

  const tileDisabled = ({ date }: { date: Date }) => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    const tileDate = new Date(date)
    tileDate.setHours(0, 0, 0, 0)

    return tileDate < today
  }

  const formatShortWeekday = (_locale: string | undefined, date: Date) => {
    const weekdays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']
    const day = date.getDay()
    return weekdays[day === 0 ? 6 : day - 1]
  }

  const formatMonthYear = (_locale: string | undefined, date: Date) => {
    const monthNames = [
      'ЯНВАРЬ', 'ФЕВРАЛЬ', 'МАРТ', 'АПРЕЛЬ', 'МАЙ', 'ИЮНЬ',
      'ИЮЛЬ', 'АВГУСТ', 'СЕНТЯБРЬ', 'ОКТЯБРЬ', 'НОЯБРЬ', 'ДЕКАБРЬ'
    ]
    return `${monthNames[date.getMonth()]} ${date.getFullYear()}`
  }

  return (
    <ReactCalendar
      value={selected}
      onChange={handleDateChange}
      locale="ru-RU"
      className="custom-calendar"
      tileDisabled={tileDisabled}
      showNeighboringMonth={true}
      formatShortWeekday={formatShortWeekday}
      navigationLabel={({ date }) => formatMonthYear(undefined, date)}
      prevLabel="‹"
      nextLabel="›"
      prev2Label={null}
      next2Label={null}
    />
  )
}
