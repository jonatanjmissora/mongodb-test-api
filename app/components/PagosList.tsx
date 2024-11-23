import { deletePago } from "@/lib/actions";
import Pago from "@/models/pagosModel";
import React from "react";

export default async function PagosList() {
  //componente para listar pagos
  try {
    const pagos = await Pago.find();
    if (pagos.length === 0) {
      return <h1>No hay pagos</h1>;
    } else {
      return (
        <div>
          {pagos.map((pago) => (
            <div key={pago._id}>
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
                  delete
                </button>
              </form>
            </div>
          ))}
        </div>
      );
    }
  } catch (error) {
    console.log(error);
  }
}