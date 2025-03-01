import { deletePago } from "@/lib/actions";
import Pago from "@/models/pagosModel";
import TrashSVG from "@/public/Trash";
import React from "react";

export default async function PagosList() {
  //componente para listar pagos
  try {
    const pagos = await Pago.find();
    if (pagos.length === 0) {
      return <h1>No hay pagos</h1>;
    } else {
      return (
        <div className="w-[90%] mx-auto bg-zinc-300 p-4">
          <h2 className="text-3xl font-bold p-8 text-center">Lista de pagos</h2>
          <div className="w-3/4 mx-auto">
            {pagos.map((pago) => (
              <div key={pago._id} className="flex justify-around gap-2 items-center border-b border-slate-400 w-full">
                <h3>{pago._id as string}</h3>
                <p>{pago.vencimiento as string}</p>
                <p>{pago.rubro as string}</p>
                <p>{pago.sector as string}</p>
                <p>{pago.monto as string}</p>
                <form action={deletePago}>
                  <input
                    hidden
                    type="text"
                    name="id"
                    defaultValue={pago._id.toString()}
                  />
                  <button className="border rounded p-2 bg-red-400">
                    <TrashSVG />
                  </button>
                </form>
              </div>
            ))}
          </div>
        </div>
      );
    }
  } catch (error) {
    console.log(error);
  }
}