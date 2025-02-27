import { useOrderContext } from "@/context/OrderContext/useOrder";

export function QueueTicket() {
  const { selectTicketQueue, removeTicketQueueCart } = useOrderContext();

  return (
    <div className="flex items-center justify-center w-[100%]">
      <div
        className="flex items-center justify-center w-[40px] h-[40px] p-2 border border-[#1976d2] hover:bg-[#8fcaf9] cursor-pointer"
        onClick={() => removeTicketQueueCart()}
      >
        <span
          className="material-symbols-outlined"
          style={{ color: "#1976d2" }}
        >
          remove
        </span>
      </div>
      <span
        className="material-symbols-outlined rotate-90"
        style={{ fontSize: "6em" }}
      >
        confirmation_number
      </span>
      <div
        className="flex items-center justify-center w-[40px] h-[40px] p-2 border border-[#1976d2] hover:bg-[#8fcaf9] cursor-pointer"
        onClick={() => selectTicketQueue()}
      >
        <span
          className="material-symbols-outlined"
          style={{ color: "#1976d2" }}
        >
          add
        </span>
      </div>
    </div>
  );
}
