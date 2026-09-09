import React, { useMemo, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Plus,
  CalendarDays,
  Clock3,
} from "lucide-react";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const events = [
  {
    id: 1,
    title: "Website Redesign Meeting",
    month: 7,
    date: 5,
    time: "10:00 AM",
    type: "Meeting",
  },
  {
    id: 2,
    title: "Analytics Platform Review",
    month: 7,
    date: 12,
    time: "02:00 PM",
    type: "Review",
  },
  {
    id: 3,
    title: "Team Standup",
    month: 7,
    date: 18,
    time: "09:30 AM",
    type: "Meeting",
  },
  {
    id: 4,
    title: "Project Progress Review",
    month: 7,
    date: 26,
    time: "11:00 AM",
    type: "Review",
  },
  {
    id: 5,
    title: "Mobile App Deadline",
    month: 7,
    date: 28,
    time: "05:00 PM",
    type: "Deadline",
  },
  {
    id: 6,
    title: "Marketing Campaign",
    month: 7,
    date: 30,
    time: "01:00 PM",
    type: "Project",
  },

  {
    id: 7,
    title: "New Project Kickoff",
    month: 8,
    date: 3,
    time: "10:30 AM",
    type: "Meeting",
  },
  {
    id: 8,
    title: "Team Performance Review",
    month: 8,
    date: 10,
    time: "03:00 PM",
    type: "Review",
  },
  {
    id: 9,
    title: "Mobile App Launch",
    month: 8,
    date: 18,
    time: "12:00 PM",
    type: "Project",
  },

  {
    id: 10,
    title: "Quarterly Planning",
    month: 9,
    date: 7,
    time: "09:00 AM",
    type: "Meeting",
  },
  {
    id: 11,
    title: "Analytics Report",
    month: 9,
    date: 15,
    time: "02:30 PM",
    type: "Review",
  },
];

function Calendar() {
  const [currentMonth, setCurrentMonth] = useState(7);
  const [currentYear, setCurrentYear] = useState(2026);
  const [selectedDate, setSelectedDate] = useState(26);

  const daysInMonth = new Date(
    currentYear,
    currentMonth + 1,
    0
  ).getDate();

  const firstDay = new Date(
    currentYear,
    currentMonth,
    1
  ).getDay();

  const calendarDays = [];

  for (let i = 0; i < firstDay; i++) {
    calendarDays.push(null);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(day);
  }

  const monthEvents = useMemo(() => {
    return events.filter(
      (event) =>
        event.month === currentMonth &&
        event.id
    );
  }, [currentMonth]);

  const selectedEvents = monthEvents.filter(
    (event) => event.date === selectedDate
  );

  const changeMonth = (direction) => {
    let newMonth = currentMonth + direction;
    let newYear = currentYear;

    if (newMonth > 11) {
      newMonth = 0;
      newYear++;
    }

    if (newMonth < 0) {
      newMonth = 11;
      newYear--;
    }

    setCurrentMonth(newMonth);
    setCurrentYear(newYear);
    setSelectedDate(1);
  };

  const handleMonthChange = (e) => {
    setCurrentMonth(Number(e.target.value));
    setSelectedDate(1);
  };

  const goToToday = () => {
    const today = new Date();

    setCurrentMonth(today.getMonth());
    setCurrentYear(today.getFullYear());
    setSelectedDate(today.getDate());
  };

  return (
    <section className="dashboard calendar-page">

      {/* PAGE HEADER */}
      <div className="page-header">

        <div>
          <p className="greeting">WORKSPACE</p>

          <h1>Calendar</h1>

          <p className="page-description">
            Plan meetings, deadlines and important team activities.
          </p>
        </div>

        <button className="primary-btn">
          <Plus size={17} />
          Add Event
        </button>

      </div>


      {/* CALENDAR HEADER */}
      <div className="calendar-top-card">

        <div className="calendar-navigation">

          <button
            className="calendar-nav-btn"
            onClick={() => changeMonth(-1)}
          >
            <ChevronLeft size={18} />
          </button>


          <select
            className="month-select"
            value={currentMonth}
            onChange={handleMonthChange}
          >
            {months.map((month, index) => (
              <option key={month} value={index}>
                {month}
              </option>
            ))}
          </select>


          <select
            className="year-select"
            value={currentYear}
            onChange={(e) => {
              setCurrentYear(Number(e.target.value));
              setSelectedDate(1);
            }}
          >
            <option value="2025">2025</option>
            <option value="2026">2026</option>
            <option value="2027">2027</option>
            <option value="2028">2028</option>
          </select>


          <button
            className="calendar-nav-btn"
            onClick={() => changeMonth(1)}
          >
            <ChevronRight size={18} />
          </button>

        </div>


        <button
          className="today-btn"
          onClick={goToToday}
        >
          Today
        </button>

      </div>


      {/* CALENDAR */}
      <div className="calendar-card">

        {/* WEEK DAYS */}

        <div className="calendar-weekdays">

          {weekDays.map((day) => (
            <div key={day}>
              {day}
            </div>
          ))}

        </div>


        {/* DAYS */}

        <div className="calendar-grid">

          {calendarDays.map((day, index) => {

            if (day === null) {
              return (
                <div
                  className="calendar-empty"
                  key={`empty-${index}`}
                />
              );
            }

            const hasEvent = monthEvents.some(
              (event) => event.date === day
            );

            const isSelected =
              day === selectedDate;

            return (
              <button
                key={day}
                className={`calendar-date ${
                  isSelected ? "selected" : ""
                }`}
                onClick={() => setSelectedDate(day)}
              >

                <span className="date-number">
                  {day}
                </span>

                {hasEvent && (
                  <span className="event-indicator"></span>
                )}

              </button>
            );
          })}

        </div>

      </div>


      {/* LOWER SECTION */}

      <div className="calendar-main-grid">

        {/* SELECTED DAY */}

        <div className="card calendar-events-card">

          <div className="card-header">

            <div>
              <h2>
                {months[currentMonth]} {selectedDate}
              </h2>

              <p>
                Scheduled activities for this day.
              </p>
            </div>

            <CalendarDays size={20} />

          </div>


          <div className="calendar-events">

            {selectedEvents.length > 0 ? (

              selectedEvents.map((event) => (

                <div
                  className="calendar-event"
                  key={event.id}
                >

                  <div className="event-time">

                    <Clock3 size={15} />

                    <span>
                      {event.time}
                    </span>

                  </div>


                  <div className="event-details">

                    <h3>
                      {event.title}
                    </h3>

                    <span
                      className={`event-type ${event.type.toLowerCase()}`}
                    >
                      {event.type}
                    </span>

                  </div>

                </div>

              ))

            ) : (

              <div className="no-events">

                <CalendarDays size={38} />

                <h3>
                  No events scheduled
                </h3>

                <p>
                  There are no events for this day.
                </p>

              </div>

            )}

          </div>

        </div>


        {/* UPCOMING */}

        <div className="card upcoming-card">

          <div className="card-header">

            <div>
              <h2>Upcoming Events</h2>

              <p>
                Events this month
              </p>
            </div>

          </div>


          <div className="upcoming-list">

            {monthEvents.length > 0 ? (

              monthEvents
                .sort((a, b) => a.date - b.date)
                .slice(0, 5)
                .map((event) => (

                  <button
                    className="upcoming-item"
                    key={event.id}
                    onClick={() =>
                      setSelectedDate(event.date)
                    }
                  >

                    <div className="upcoming-date">

                      <strong>
                        {event.date}
                      </strong>

                      <span>
                        {months[currentMonth].slice(0, 3).toUpperCase()}
                      </span>

                    </div>


                    <div className="upcoming-details">

                      <strong>
                        {event.title}
                      </strong>

                      <span>
                        {event.time}
                      </span>

                    </div>

                  </button>

                ))

            ) : (

              <div className="no-upcoming">
                No upcoming events this month.
              </div>

            )}

          </div>

        </div>

      </div>

    </section>
  );
}

export default Calendar;