'use server';

import { revalidatePath } from "next/cache";
import { connectToMongoDB } from "./db";
import Pago from "@/models/pagosModel";

export const createPago = async (formData: FormData) => {
  await connectToMongoDB();

  const id = formData.get("id");
  const vencimiento = formData.get("vencimiento");
  const rubro = formData.get("rubro");
  const sector = formData.get("sector");
  const monto = formData.get("monto");
  const pagado = formData.get("pagado");

  try {
    const newPago = await Pago.create({
      _id: id,
      vencimiento,
      rubro,
      sector,
      monto,
      pagado,
    });
    console.log({ newPago })
    newPago.save();
    revalidatePath("/");
    return { ok: newPago.toString(), error: null }
  } catch (error: any) {
    let message = ""
    if (error.name === "ValidationError") {

      message = JSON.stringify(Object.values(error.errors).map(value => value.message));
      console.log({ message })
    }
    return { ok: null, error: JSON.stringify(message, null, 2) };
  }
};

export const deletePago = async (id: FormData) => {
  const pagoId = id.get("id");
  try {
    await Pago.deleteOne({ _id: pagoId });
    revalidatePath("/");
    return;
  } catch (error) {
    if (error instanceof Error)
      return;
  }
}