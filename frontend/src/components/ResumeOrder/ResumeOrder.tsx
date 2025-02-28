import { useOrderContext } from "@/context/OrderContext/useOrder";
import { Button } from "@mui/material";
import { api } from "@/api/api";
import { useState } from "react";
import { useStepContext } from "@/context/StepContext/useStep";

export function ResumeOrder() {
  const { cart, fetchApi } = useOrderContext();
  const { nextStep } = useStepContext();
  const [errors, setErrors] = useState([{ message: "" }]);

  const handleClick = async () => {
    try {
      if (cart.ticketSeat.length > 0 || cart.ticketQueue.length > 0) {
        if (cart.ticketSeat.length > 0) {
          await api.put("ticket-seat", cart.ticketSeat);
          setErrors([{ message: "" }]);
          nextStep();
          fetchApi();
          return;
        }

        if (cart.ticketQueue.length > 0) {
          console.log(cart.ticketQueue);
          await api.put("ticket-queue", cart.ticketQueue);
          nextStep();
          fetchApi();
          return;
        }
      }
      setErrors((prev) => {
        return [
          {
            ...prev,
            message: "Você não selecionou nenhum ingresso.",
            invalid: true,
          },
        ];
      });
    } catch (error: any) {
      if (error?.response?.data?.message === "Seat unavailable") {
        setErrors(() => {
          return error?.response.data.response.error.map((err: any) => {
            return { message: err };
          });
        });
      }
    }
  };

  return (
    <div className="ml-2 mr-4 p-4 bg-[#1d202a] rounded-md max-h-[640px] w-[30%] flex flex-col justify-between">
      <div className="mb-2">
        <text className="text-xl">Resumo do Pedido</text>
      </div>

      {errors.map((error, i) => (
        <text key={i} className="mb-2 text-[#ff0000]">
          {error.message}
        </text>
      ))}

      <div className="flex flex-col justify-between">
        <div className="flex flex-col items-start justify-around mb-4">
          <text className="mb-4">Assentos selecionados</text>
          {cart.ticketSeat.length >= 1 ? (
            <div className="flex flex-row flex-wrap h-[160px] overflow-y-scroll w-[100%] p-2 border-2 border-dashed">
              {cart.ticketSeat.map((seat) => {
                return (
                  <div
                    id={seat.id}
                    className="flex items-center flex-col justify-center}"
                  >
                    <div className="pt-4 pr-4">
                      <span
                        onClick={handleClick}
                        className="material-icons"
                        style={{
                          fontSize: "32px",
                          cursor: "pointer",
                        }}
                      >
                        event_seat
                      </span>
                    </div>
                    <text className="text-lg">{seat.position}</text>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="h-[160px] w-[100%] flex justify-center items-center border-2 border-dashed">
              <text>Selecione os assentos</text>
            </div>
          )}
        </div>

        <div className="flex flex-col items-start justify-around mb-8">
          <div className="w-[100%]">
            <text className="mb-4">Pista selecionados</text>
            {cart.ticketQueue.length >= 1 ? (
              <div className="flex flex-row flex-wrap h-[100px] overflow-y-scroll w-[100%] p-2 border-2 border-dashed">
                {cart.ticketQueue.map((_) => (
                  <span
                    className="material-symbols-outlined rotate-90"
                    style={{ fontSize: "32px" }}
                    key={_.id}
                  >
                    confirmation_number
                  </span>
                ))}
              </div>
            ) : (
              <div className="h-[100px] w-[100%] flex justify-center items-center border-2 border-dashed">
                <text>Selecione os tickets</text>
              </div>
            )}
          </div>
        </div>
      </div>

      <div>
        <div className="flex flex-col">
          <text className="text-lg mb-4">
            Ingresso no Assento: {cart.ticketSeat.length}
          </text>
          <text className="text-lg mb-4">
            Ingresso na pista: {cart.ticketQueue.length}
          </text>
          <text className="text-xl mb-4">
            Total: R${" "}
            {cart.ticketSeat.reduce((sum, newSeat) => sum + newSeat.value, 0) +
              cart.ticketQueue.reduce((sum, ticket) => sum + ticket.value, 0)}
          </text>
        </div>
        <Button variant="outlined" fullWidth onClick={handleClick}>
          Comprar
        </Button>
      </div>
    </div>
  );
}
