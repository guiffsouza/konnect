import { useOrderContext } from "@/context/OrderContext/useOrder";
import { ITicketSeat } from "../../Shared/Interfaces/ITicketSeat";

export function Seat({ id, position, value, selected, sold }: ITicketSeat) {
  const { selectionSeat } = useOrderContext();

  const handleClick = () => {
    selectionSeat({ id, position, value, sold, selected });
  };

  return (
    <div
      id={id}
      className="flex items-center flex-col justify-center pt-4 pr-4"
    >
      <div>
        {sold ? (
          <span
            onClick={handleClick}
            className="material-icons"
            style={{
              fontSize: "32px",
              color: "#d22f2e",
              cursor: "pointer",
            }}
          >
            event_seat
          </span>
        ) : (
          <span
            onClick={handleClick}
            className="material-icons"
            style={{
              fontSize: "32px",
              color: selected ? "#fad90e" : "#fff",
              cursor: "pointer",
            }}
          >
            event_seat
          </span>
        )}
      </div>
      <div>
        <text className="text-lg">{position}</text>
      </div>
    </div>
  );
}
