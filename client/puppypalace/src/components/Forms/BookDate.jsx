import { Calendar } from "@progress/kendo-react-dateinputs";
import { useEffect, useRef, useState } from "react";

const times = [
  "08:00 - 09:00",
  "09:00 - 10:00",
  "10:00 - 11:00",
  "11:00 - 12:00",
  "12:00 - 13:00",
  "13:00 - 14:00",
  "14:00 - 15:00",
  "15:00 - 16:00",
  "16:00 - 17:00",
];

/* const fechaBE = [new Date("03/17/2022 09:00"), new Date("03/17/2022 11:00")];

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

const onDateChange2 = (e) => {
  const horas = fechaBE.map((x) => x.getHours());
  console.log("horas", horas);
  const dispo = times.filter((x) => {
    if (horas.includes(x.id)) {
      return false;
    }
    return true;
  });
  console.log("dispo", dispo);
}; */

const startDate = new Date();
const todayDate = new Date();
const endDate = new Date(todayDate.setMonth(todayDate.getMonth() + 1));

const getRandomNumInRange = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const pickSlotTimes = (times) => {
  const timesToPick = getRandomNumInRange(0, times.length);

  if (timesToPick === times.length - 1) {
    return times;
  }

  let timesPicked = [];

  while (timesToPick !== timesPicked.length - 1) {
    const index = getRandomNumInRange(0, times.length);
    const selectedTime = times[index];

    if (timesPicked.includes(selectedTime)) continue;

    timesPicked.push(selectedTime);
  }

  return timesPicked.sort();
};

const BookDate = (props) => {
  const [bookingDate, setBookingDate] = useState(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [bookingTimes, setBookingTimes] = useState([]);
  const timeSlotCacheRef = useRef(new Map());

  useEffect(() => {
    // Bail out if there is no date selected
    if (!bookingDate) return;

    // Get time slots from cache
    let newBookingTimes = timeSlotCacheRef.current.get(
      bookingDate.toDateString()
    );

    // If we have no cached time slots then pick new ones
    if (!newBookingTimes) {
      newBookingTimes = pickSlotTimes(times);
      // Update cache with new time slots for the selected date
      timeSlotCacheRef.current.set(bookingDate.toDateString(), newBookingTimes);
    }

    setBookingTimes(newBookingTimes);
  }, [bookingDate]);

  const onDateChange = (e) => {
    setSelectedTimeSlot(null);
    setBookingDate(e.value);
  };

  const handleSubmit = () => {
    console.log(bookingDate);
    console.log(bookingDate.toLocaleDateString("en-US"));
    const finalDate = `${bookingDate.toLocaleDateString(
      "en-US"
    )} ${selectedTimeSlot}`;
    console.log("finalDate", finalDate);
  };

  return (
    <div className="k-my-8">
      <div className="k-mb-4 k-font-weight-bold">
        Seleccione su turno y proceda con el pago para reservar
      </div>

      <div className="k-flex k-display-flex k-mb-4">
        <Calendar
          value={bookingDate}
          onChange={onDateChange}
          min={startDate}
          max={endDate}
        />
        <div className="k-ml-4 k-display-flex k-flex-col">
          {bookingTimes.map((time) => {
            return (
              <button
                key={time}
                className="k-button k-mb-4"
                onClick={(e) => setSelectedTimeSlot(time)}
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
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default BookDate;
