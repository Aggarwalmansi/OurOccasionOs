import { useState } from "react";
import "../../styles/guestcount.css"; // adjust the path as needed

export default function GuestCountInput() {
  const [count, setCount] = useState("");

  return (
    <div className="guest-input-section">
      <label htmlFor="guestCount">Number of Guests:</label>
      <input
        id="guestCount"
        type="number"
        value={count}
        placeholder="e.g. 50"
        onChange={(e) => setCount(e.target.value)}
      />
    </div>
  );
}
