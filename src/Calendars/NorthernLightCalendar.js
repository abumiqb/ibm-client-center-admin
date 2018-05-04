import React from 'react';
import { Card } from 'material-ui/Card';
import BigCalendar from 'react-big-calendar-like-google';
import 'react-big-calendar-like-google/lib/css/react-big-calendar.css';
import moment from 'moment';
import 'moment/locale/en-ie';


BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));

class NorthernLightCalendar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {bookings: []
        };
    }
    componentDidMount() {
        fetch('https://ibm-client-center-api.mybluemix.net/booking')
            .then(res => res.json())
            .then(
                (result) => {
                    let arr = [];
                    for(let i = 0; i < result.length; i++)
                    {
                        let cal = {};
                        let cal1 = {};
                        cal["title"] = result[i]["navn"];
                        cal["startDate"] = moment(result[i]["dato"] + " " + result[i]["starttid"], "DD-MM-YYYY HH:mm").toDate();
                        cal["endDate"] = moment(result[i]["dato"] + " " + result[i]["slutttid"], "DD-MM-YYYY HH:mm").toDate();
                        cal["room"] = result[i]["room"];
                        cal["firma"] = result[i]["firma"];
                        cal["email"] = result[i]["email"];
                        cal["phone"] = result[i]["phone"];
                        cal["antall"] = result[i]["antall"];
                        cal["starttid"] = result[i]["starttid"];
                        cal["slutttid"] = result[i]["slutttid"];
                        cal["dato"] = result[i]["dato"];

                        if( result[i]["approved"] === true && result[i]["room"] === "Northern Light")
                        {
                            arr.push(cal);
                        }
                        else
                            arr.push(cal1);
                    }

                    this.setState({
                        isLoaded: false,
                        bookings: arr
                    });
                },

                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )

        window.addEventListener("resize", () =>
        {

        });
    }
    render() {
        return (
<Card>
    <BigCalendar
        selectable
        style={{ height: 700 }}
        events={this.state.bookings}
        startAccessor='startDate'
        endAccessor='endDate'
        defaultView='week'
        // eslint-disable-next-line
        onSelectEvent={event => alert(`Booking Details: \nName: ${event.title} ` +` \nFirm: ${event.firma} `  +` \nEmail: ${event.email} ` +` \nNumber of people: ${event.antall} ` + ` \nDate: ${event.dato} ` +` \nStart time: ${event.starttid} ` + `\nEnd time: ${event.slutttid}` + `\nRom: ${event.room}`)}
    />
</Card>


            )

    }
}

export default NorthernLightCalendar;