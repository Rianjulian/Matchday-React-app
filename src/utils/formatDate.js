// @ts-nocheck
export const formatDate = (date) => {
    const event = new Date(date)

    const options = {
        weekday : 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    }

    return event.toLocaleDateString('en-EN', options)
}