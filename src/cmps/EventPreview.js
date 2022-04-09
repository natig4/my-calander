import { utilService } from '../services/utils';

const EventPreview = ({ event }) => {
    const { getRem, titleCase } = utilService

    const eventStyle = { top: getRem(event.start), height: getRem(event.end - event.start), width: getRem(event.width), left: getRem(event.left) };

    return (
        <div className='event' style={eventStyle}>
            <h3>
                {titleCase(event.title)}
            </h3>
            <p>
                {titleCase(event.location)}
            </p>
        </div>
    )
}
export default EventPreview;