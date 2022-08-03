import {
    startOfWeek,
    addDays,
    startOfMonth,
    getWeeksInMonth,
    subMonths,
    addMonths,
    subWeeks,
    addWeeks,
} from 'date-fns'

const DAY_IN_MILISECONDS = 24 * 60 * 60 * 1000

const createWeekDays = (dateToGenerateWeek: Date) => {
    const firstDayOfWeek = startOfWeek(dateToGenerateWeek, { weekStartsOn: 1 })

    const weekDays: number[] = []

    for (let i = 0; i < 7; i++) {
        // new Date(firstDayOfWeek.getTime()).addDays(i + 1).getTime()
        weekDays.push(
            new Date(
                firstDayOfWeek.getTime() + i * DAY_IN_MILISECONDS
            ).getTime()
        )
    }

    return weekDays
}

const createFormatedWeekDays = (dateToGenerateWeek: Date) => {
    const week = createWeekDays(dateToGenerateWeek)

    const result = week.map((dayTimestamp) => new Date(dayTimestamp).getDate())

    return result
}

const createMonthDays = (dateToGenerateWeek: Date) => {
    let startDate = startOfMonth(dateToGenerateWeek)
    const howManyWeeksInMonth = getWeeksInMonth(startDate, { weekStartsOn: 1 })

    const monthDays: number[][] = []

    for (let i = 0; i < howManyWeeksInMonth; i++) {
        const week = createWeekDays(startDate)

        monthDays.push(week)

        startDate = addDays(startDate, 7)
    }

    return monthDays
}

const createFormatedMonthDays = (dateToGenerateWeek: Date) => {
    const month = createMonthDays(dateToGenerateWeek)

    const result = month.reduce((acc, week) => {
        const formatedWeek = week.map((dayTimestamp) =>
            new Date(dayTimestamp).getDate()
        )

        return [...acc, formatedWeek]
    }, [] as number[][])

    return result
}

function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

const utilsHandlers = {
    nextMonth: (calendarDate: Date) => addMonths(calendarDate, 1),
    prevMonth: (calendarDate: Date) => subMonths(calendarDate, 1),
    nextWeek: (calendarDate: Date) => addWeeks(calendarDate, 1),
    prevWeek: (calendarDate: Date) => subWeeks(calendarDate, 1),
}

export {
    createWeekDays,
    createMonthDays,
    createFormatedMonthDays,
    createFormatedWeekDays,
    utilsHandlers,
    capitalizeFirstLetter,
}
