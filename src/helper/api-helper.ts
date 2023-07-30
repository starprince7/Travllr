import { store } from "@/store";
import { setBookingError, setBusTicket } from "@/store/slices/ticket-info";

export const createNewBooking = async () => {
  const dispatch = store.dispatch;
  const bookingInfo = store.getState().BusBookingProgress;
  console.log({ bookingInfo });
  // return;
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/buses/${bookingInfo.busId}/seats`,
    {
      method: "POST",
      body: JSON.stringify(bookingInfo),
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then((response) => response.json())
    .catch((error) => {
      alert(error.message);
      console.log(error.message);
    });

  if (data.error) {
    dispatch(setBookingError(data));
    return null;
  }

  dispatch(setBusTicket(data.bookedSeat));
  return true;
};
