import { parseISO, formatDistanceToNow } from "date-fns";

function TimeAgo({ timestamp }) {
  let timeAgo = ""
  if (timestamp) {
    const date = parseISO(timestamp)
    console.log("date", date)
    const timePeriod = formatDistanceToNow(date)
    console.log("time period", timePeriod)

    timeAgo = `${timePeriod} Ago`
  }
  return (
    <span title={timestamp}>
    
      <i>
        {timeAgo}
        </i>
    </span>
  )
}

export default TimeAgo