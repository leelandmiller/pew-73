import React from 'react';
import { StaticQuery } from 'gatsby';
import moment from 'moment';
import './openHouse.css';
import Container from './Container';
import AddToCalendar from 'react-add-to-calendar';
import 'react-add-to-calendar/dist/react-add-to-calendar.css'

const OpenHouseView = props => {
  console.log(props.data);
  const { data, now } = props;
  const plus72 = moment(now).add(72, 'hours');

  const isEvents = data.gcms.events.some((event) => {
    if (moment(event.start).isBefore(plus72) &&
      moment(event.end).isAfter(now)) {
      return true;
    }
    return false;
  })
  console.log(isEvents);
  return (
    <Container>
      <div className="open-house-wrapper">
        {
          isEvents &&
          <h1 className="open-house-title">
            Upcoming Open Houses
          </h1>
        }
        <div className="open-houses">
          {
            data.gcms.events.map((event) => {
              if (moment(event.start).isBefore(plus72) &&
                moment(event.end).isAfter(now)) {
                
                const calendarEvent = {
                  title: 'Open House',
                  description: event.house.address,
                  location: `${event.house.address}, ${event.house.city}, ${event.house.state}`,
                  startTime: event.start,
                  endTime: event.end
                }
                let icon = { textOnly: 'none' };

                return (
                  <div key={event.id}>
                    <div className="open-house-detail">
                      <div className="day">
                        {moment(event.start).format('dddd, MMM Do')}
                      </div>
                      <div>
                        {moment(event.start).format('h:mm A')} - {
                          moment(event.end).format('h:mm A')
                        }
                      </div>
                      <div className="calendar">
                        <AddToCalendar
                          displayItemIcons={false}
                          buttonTemplate={icon}
                          buttonLabel="Add to Calendar"
                          event={calendarEvent} />
                      </div>
                    </div>
                  </div>
                )
              }
              return null
            })
          }
        </div>
      </div>
    </Container>
  );
}

const OpenHouse = props => {
  const now = moment().format()
  const query = graphql`
  {
    gcms {
      events(where: {
        house: {address: "1930 W San Marcos Blvd #73"}
      }) {
        start
        end
        id
        house {
          address
          city
          state
          zip
        }
      }
    }
  }
`

  return (
    <div>
      <StaticQuery
        query={query}
        render={data => <OpenHouseView data={data} now={now}/>}
      />
    </div>
  );
}

export default OpenHouse;