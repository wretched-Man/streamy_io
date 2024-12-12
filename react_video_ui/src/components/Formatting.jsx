// Renders Line Breaks replacing CRLF
const MultiLine = ({ paragraph }) => {
    return (
        <>
            {
                paragraph.split("\\r\\n" || "\\n" || "\\r").map((i, key) => {
                    return (
                        <span key={key}>
                            {i}
                            <br />
                        </span>
                    )
                })
            }
        </>
    )
}


const VideoDuration = ({ videolength }) => {
    let formatted = videolength.split(".")[0]
        .split(":")
        .filter(val => val !== "00")
        .map((i) => {
            return ( `${i}:` )
        })

    let seconds = formatted[formatted.length - 1]
    seconds = seconds.substring(0, seconds.length-1)
    formatted[formatted.length - 1] = seconds

    if (formatted.length === 1) {
        formatted.unshift("00:")
    }

    return (
        <>
            {formatted}
        </>
    )
}

const VideoAddFormatting = ({dateTimeAdded}) => {
    let dateadded = dateTimeAdded.split("T")[0]
    let timeadded = dateTimeAdded.split("T")[1].split("Z")[0].split(":")
    return (
        <>
            <span>{dateadded}</span>
            <span>{`${timeadded[0]}:${timeadded[1]}`}</span>
        </>
    )
}

export { MultiLine, VideoDuration, VideoAddFormatting }
