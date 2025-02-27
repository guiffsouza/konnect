import { useOrderContext } from "@/context/OrderContext/useOrder";
import { Seat } from "../Seat/Seat";
import { Button } from "@mui/material";

export function ResumeOrder() {
  const { cart } = useOrderContext();

  const handleClick = () => {
    console.log(cart);
  };

  return (
    <div className="ml-2 mr-4 p-4 bg-[#1d202a] rounded-md max-h-[640px] w-[30%] flex flex-col justify-between">
      <div className="mb-8">
        <text className="text-xl">Resumo do Pedido</text>
      </div>

      <div className="flex flex-col justify-between">
        <div className="flex flex-col items-start justify-around mb-4">
          <text className="mb-4">Assentos selecionados</text>
          {cart.ticketSeat.length >= 1 ? (
            <div className="flex flex-row flex-wrap h-[160px] overflow-y-scroll w-[100%] p-2 border-2 border-dashed">
              {cart.ticketSeat.map((seat) => (
                <Seat {...seat} />
              ))}
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
