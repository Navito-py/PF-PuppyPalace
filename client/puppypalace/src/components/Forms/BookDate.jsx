import { Calendar } from "@progress/kendo-react-dateinputs";
import { useEffect, useState } from "react";
import { getReserves } from "../../redux/actions";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const times = [
  { id: 8, name: "08:00 - 09:00" },
  { id: 9, name: "09:00 - 10:00" },
  { id: 10, name: "10:00 - 11:00" },
  { id: 11, name: "11:00 - 12:00" },
  { id: 12, name: "12:00 - 13:00" },
  { id: 13, name: "13:00 - 14:00" },
  { id: 14, name: "14:00 - 15:00" },
  { id: 15, name: "15:00 - 16:00" },
  { id: 16, name: "16:00 - 17:00" },
];

const startDate = new Date();
let tomorrow = new Date()
tomorrow.setDate(startDate.getDate() + 1);
const todayDate = new Date();
const endDate = new Date(todayDate.setMonth(todayDate.getMonth() + 1));

const BookDate = ({ dateAndHours }) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const token = useSelector((state) => state.token);
  const reservedDates = useSelector((state) => state.reserves);

  const [bookingDate, setBookingDate] = useState(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [bookingTimes, setBookingTimes] = useState([]);

  useEffect(() => {
    dispatch(getReserves(id, token));
  }, [dispatch, id, token]);

  useEffect(() => {
    dateAndHours(bookingDate, selectedTimeSlot);
  }, [bookingDate, selectedTimeSlot])


  const onDateChange = (e) => {
    setSelectedTimeSlot(null);
    setBookingDate(e.value);
    
    const { value } = e.target;

    const actualDate = value.getDate();

    const formated = reservedDates["dates"].map((e) => new Date(e));

    const dateFormated = formated.map((e) => e.getDate());      

    const hoursFormated = formated.map((e) => e.getHours()); 

    let timesPicked = [];  

    for (let i = 0; i < dateFormated.length; i++) {
      if (actualDate === dateFormated[i]) {
        timesPicked.push(hoursFormated[i]); 
      }
    }
    const availableTurns = times
      .filter((e) => {
        if (timesPicked.includes(e.id)) {
          return false;
        }
        return true;
      })
      .map((e) => e.name);
      
    return setBookingTimes(availableTurns);
  };

  return (
    <div className="k-my-8">
      <div className="k-mb-4 k-font-weight-bold">Seleccione el día y la hora</div>

      <div className="k-flex k-display-flex k-mb-4">
        <Calendar
          value={bookingDate}
          onChange={onDateChange}
          min={tomorrow}
          max={endDate}
        />
        <div className="k-ml-4 k-display-flex k-flex-col">
          {bookingTimes.map((time) => {
            return (
              <button
                key={time}
                className="k-button k-mb-4"
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedTimeSlot(time)
                }}
              >
                {time}
              </button>
            );
          })}
        </div>
      </div>

      {bookingDate && selectedTimeSlot ? (
        <div>
          Su turno es: {bookingDate.toDateString()} de {selectedTimeSlot}
        </div>
      ) : null}
    </div>
  );
};

export default BookDate;
