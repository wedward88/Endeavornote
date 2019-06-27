

const formatDate = (date) => {

    const monthName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    const updatedDate = new Date(date)
    const currentDate = new Date()
    const hourDifference = (((currentDate - updatedDate) / 1000) / 60) / 60
    let formattedDate;

    if (hourDifference < 24) {
        let timeDifference = (updatedDate.getHours() - 12) - (currentDate.getHours() - 12)
        // debugger
        if (timeDifference < 1) {
            formattedDate = "less than an hour ago"
        } else {
            formattedDate = timeDifference + " hour(s) ago"
        }
    } else if (hourDifference > 24 && hourDifference < 48) {
        formattedDate = "yesterday"
    } else {
        formattedDate = monthName[updatedDate.getMonth()] + " " + updatedDate.getDate()
    }

    return formattedDate;

}

export default formatDate;