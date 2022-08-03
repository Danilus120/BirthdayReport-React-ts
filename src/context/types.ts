import { ReactNode } from 'react'

interface ContextI {
    calendarDate: Date
    calendarMode: 'month' | 'week'
    birthdays: BirthdayI[]
    readModalBirthday: BirthdayI
    isModalReadOpen: Boolean
    isModalAddOpen: Boolean
    toggleCalendarMode: () => void
    toggleModalRead: () => void
    toggleModalAdd: () => void
    setCalendarDate: React.Dispatch<React.SetStateAction<Date>>
    setNewBirthdays: (name: string, dateTimestamp: number) => void
    setClickedBirthday: (event: BirthdayI) => void
}

interface ProviderI {
    children: ReactNode
}

interface BirthdayI {
    name: string
    dateTimestamp: number
    reminderTimestamp: number
}

interface utilsHandlersI {
    nextMonth: (calendarDate: Date) => Date
    prevMonth: (calendarDate: Date) => Date
    nextWeek: (calendarDate: Date) => Date
    prevWeek: (calendarDate: Date) => Date
}

export type { BirthdayI, ProviderI, ContextI, utilsHandlersI }
