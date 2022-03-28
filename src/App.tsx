import React, { useState } from "react";
import {useSelector, useDispatch} from 'react-redux'
import "./App.css";
import { RootState } from "./app/store";
import CustomerCard from "./components/CustomerCard";
import ReservationCard from "./components/ReservationCard";
import { addReservation } from "./features/reservationSlice";

function App() {
  const [reservation, setReservation] = useState("")
  const reservations = useSelector((state: RootState) => state.reservations.value);
  const customers = useSelector((state: RootState) => state.customers.value);

  const dispatch = useDispatch();

  const handleAddReservations = () => {
    if (!reservation) return;

    dispatch(addReservation(reservation))
    setReservation('')

  }
  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
            {
              reservations.map((name, index) => {
                return <ReservationCard name={name} index={index} />
              })
            }
            </div>
          </div>
          <div className="reservation-input-container">
          <input value={reservation} onChange={(e) => setReservation(e.target.value)} />
                <button onClick={handleAddReservations}>Add</button>
          </div>
        </div>
        <div className="customer-food-container">
            {customers.map((customer) => {return <CustomerCard id={customer.id} name={customer.name} food={customer.food}/>})}
        </div>
      </div>
    </div>
  );
}

export default App;