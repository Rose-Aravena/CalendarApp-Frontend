
export const events = [
    {
        id: '1',
        start: new Date('2022-10-20 13:00:00'),
        end: new Date('2022-10-20 15:00:00'),
        title: 'Cumpleaños Rose',
        notas: 'Comprar pastel'
    },
    {
        id: '2',
        start: new Date('2022-11-17 13:00:00'),
        end: new Date('2022-11-17 15:00:00'),
        title: 'Cumpleaños Kathy',
        notas: 'Comprar pastel'
    }
];

export const initialState = {
    isLoadingEvents: true,
    events: [],
    activeEvent: null
}

export const calendarWithEventsState = {
    isLoadingEvents: true,
    events: [...events],
    activeEvent: null
}

export const calendarWithActiveEventState = {
    isLoadingEvents: false,
    events: [...events],
    activeEvent: {...events[0]}
}