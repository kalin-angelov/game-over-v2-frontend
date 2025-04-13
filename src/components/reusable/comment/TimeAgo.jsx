import { parseISO, formatDistanceToNow } from 'date-fns';

export const TimeAgo = () => {
    let timeAgo = '';
    let timestamp = new Date().toISOString();
    if (timestamp) {
        const date = parseISO(timestamp);
        const timePeriod = formatDistanceToNow(date);
        timeAgo = `${timePeriod} ago`;
    }

    return (
        <span title={timestamp} style={{color: "black"}}>
            &nbsp; <i>{timeAgo}</i>
        </span>
    );
};