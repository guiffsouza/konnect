import { useOrderContext } from "@/context/OrderContext/useOrder";
import { ITicketSeat } from "../../Shared/Interfaces/interface";

export function Seat({ id, position, value, selected }: ITicketSeat) {
  const { selectionSeat } = useOrderContext();

  const handleClick = () => {
    selectionSeat({ id, position, value, selected });
  };

  return (
    <div id={id} className="flex items-center flex-col justify-center}">
      <div className="pt-4 pr-4">
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
      </div>
      <text className="text-lg">{position}</text>
    </div>
  );
}
