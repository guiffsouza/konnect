import { useOrderContext } from "@/context/OrderContext/useOrder";
import { Button } from "@mui/material";
import { api } from "@/api/api";
import { useState } from "react";
import { useStepContext } from "@/context/StepContext/useStep";
import { AxiosError } from "axios";

export function ResumeOrder() {
  const { cart, fetchApi } = useOrderContext();
  const { nextStep } = useStepContext();
  const [errors, setErrors] = useState([{ message: "" }]);

  const handleClick = async () => {
    try {
      if (cart.ticketSeat.length > 0 || cart.ticketQueue.length > 0) {
        if (cart.ticketSeat.length > 0) {
          await api.put("ticket-seat", cart.ticketSeat);
        }

        if (cart.ticketQueue.length > 0) {
          await api.put("ticket-queue", cart.ticketQueue);
        }

        setErrors([{ message: "" }]);
        nextStep();
        fetchApi();
        return;
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
    } catch (error: unknown) {
      const axiosError = error as AxiosError<{
        message?: string;
        response?: { error?: string[] };
      }>;

      if (axiosError.response?.data?.message === "Seat unavailable") {
        setErrors(() => {
          return (axiosError?.response?.data.response?.error || []).map(
            (err) => {
              return { message: err };
            }
          );
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
        <text key={`error-${i}`} className="mb-2 text-[#d22f2e]">
          {error.message}
        </text>
      ))}

      <div className="flex flex-col justify-between">
        <div className="flex flex-col items-start justify-around mb-4">
          <text className="mb-4 text-lg">Assentos selecionados</text>
          {cart.ticketSeat.length >= 1 ? (
            <div className="flex flex-row items-center justify-center flex-wrap h-[160px] overflow-y-scroll w-[100%] p-2 border-2 border-dotted">
              {cart.ticketSeat.map((seat) => {
                return (
                  <div
                    key={seat.id}
                    className="flex items-center flex-col pt-4 pr-4"
                  >
                    <div>
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
            <div className="h-[160px] w-[100%] flex justify-center items-center border-2 border-dotted">
              <text>Selecione os assentos</text>
            </div>
          )}
        </div>

        <div className="flex flex-col items-center justify-around mb-8">
          <div className="w-[100%]">
            <text className="mb-4">Pista selecionados</text>
            {cart.ticketQueue.length >= 1 ? (
              <div className="flex flex-row flex-wrap justify-center items-center h-[100px] overflow-y-scroll w-[100%] p-2 border-2 border-dotted">
                {cart.ticketQueue.map((ticket) => (
                  <span
                    key={ticket.id}
                    className="material-symbols-outlined rotate-90"
                    style={{ fontSize: "32px" }}
                  >
                    confirmation_number
                  </span>
                ))}
              </div>
            ) : (
              <div className="h-[100px] w-[100%] flex justify-center items-center border-2 border-dotted">
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
