"use client"

import { createPago } from "@/lib/actions";
import { useRef } from "react";
import SubmitBtn from "./SubmitBtn";

export function Form() {

  const ref = useRef<HTMLFormElement>(null);

  return (
    <form className="flex flex-col"
      ref={ref}
      action={async (FormData) => {
        ref.current?.reset();
        await createPago(FormData);
      }}
    >

      <h2 className="text-center text-green-400 font-bold">Add Pago</h2>

      <label htmlFor="id" className="py-2">
        _id
      </label>
      <input type="text" name="id" className="mb-2  w-62 h-10 p-2" />

      <label htmlFor="vencimiento" className="py-2">
        vencimiento
      </label>
      <input type="text" name="vencimiento" className=" w-62 h-10 p-2" />

      <label htmlFor="rubro" className="py-2">
        rubro
      </label>
      <input type="text" name="rubro" className=" w-62 h-10 p-2" />

      <label htmlFor="sector" className="py-2">
        sector
      </label>
      <input type="text" name="sector" className=" w-62 h-10 p-2" />

      <label htmlFor="monto" className="py-2">
        monto
      </label>
      <input type="text" name="monto" className=" w-62 h-10 p-2" />

      <label htmlFor="pagado" className="py-2">
        pagado
      </label>
      <input type="text" name="pagado" className=" w-62 h-10 p-2" />

      <SubmitBtn />

    </form>
  )
}