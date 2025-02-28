import { SyntheticEvent, useState } from "react";
import { Seat } from "../Seat/Seat";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { GenericTab } from "../GenericTab/GenericTab";
import { useOrderContext } from "@/context/OrderContext/useOrder";
import { ITicketSeat } from "@/Shared/Interfaces/ITicketSeat";
import { QueueTicket } from "../QueueTicket/QueueTicket";

export function SeatsGroup() {
  const [value, setValue] = useState(0);
  const { seats } = useOrderContext();

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className="flex flex-row flex-wrap items-start justify-center bg-[#1d202a] ml-4 mr-2 p-4 rounded-md w-[70%]">
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Cadeira" sx={{ color: "#fff" }} />
          <Tab label="Pista" sx={{ color: "#fff" }} />
        </Tabs>
      </Box>
      <Box sx={{ width: "100%" }}>
        <GenericTab value={value} index={0}>
          <div className="flex flex-row flex-wrap items-center justify-start">
            {seats.map((seat: ITicketSeat) => (
              <Seat key={seat.id} {...seat} />
            ))}
          </div>
        </GenericTab>
        <GenericTab value={value} index={1}>
          <QueueTicket />
        </GenericTab>
      </Box>
    </div>
  );
}
