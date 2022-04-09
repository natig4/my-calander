
const DUMMY_EVENTS = [
    { id: 1, title: 'volunteer', location: 'Animal shelter', start: 90, end: 130 }, // an event from 10:30am to 11.10am
    { id: 2, title: 'Work on Project', location: 'Home', start: 105, end: 135 }, // an event from 10:45am to 11:15am
    { id: 3, title: 'Rest', location: 'Home', start: 120, end: 240 }, // an event from 11:00am to 1:00pm
    { id: 4, title: 'Learn Math', location: 'Library', start: 180, end: 260 }, // an event from 12:00pm to 1:20pm
    { id: 5, title: 'Learn algorithms', location: 'Library', start: 500, end: 560 } // an event from 5:20pm to 6:20pm
]

const query = () => {
    const events = [...DUMMY_EVENTS.sort((a, b) => a.start - b.start)]
    return _findPosition(events)
}

const _findPosition = events => {
    events.forEach((event) => {
        const overlapArr = [event];
        let availableWidth = 600;
        let left = 0;

        // Create Groups of overlapping events
        events.forEach(ev => ev.start < event.end && ev.end > event.start && ev.id !== event.id && overlapArr.push(ev))

        // Remove events that already have width from previous groups and decrease available width
        overlapArr.forEach((event, i) => {
            if (event.width) {
                overlapArr.splice(i, 1);
                availableWidth = availableWidth - event.width;
            }
        })

        // Set width and left position only to those events that don't have it
        !event.width && overlapArr.forEach(event => {
            const width = availableWidth / overlapArr.length;
            event.width = width;
            event.left ??= left;
            left += width;
        })
    })
    return events
}


export const calanderService = {
    query
}