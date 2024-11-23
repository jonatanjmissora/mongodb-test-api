'use server';

import { revalidatePath } from "next/cache";
import { connectToMongoDB } from "./db";
import Pago from "@/models/pagosModel";

export const createPago = async (formData: FormData) => {
  await connectToMongoDB();
  // Extracting pago content and time from formData
  const id = formData.get("id");
  const vencimiento = formData.get("vencimiento");
  const rubro = formData.get("rubro");
  const sector = formData.get("sector");
  const monto = formData.get("monto");
  const pagado = formData.get("pagado");

  try {
    // Creating a new pago using Pago model
    const newPago = await Pago.create({
      _id: id,
      vencimiento,
      rubro,
      sector,
      monto,
      pagado,
    });
    // Saving the new pago
    newPago.save();
    // Triggering revalidation of the specified path ("/")
    revalidatePath("/");
    // Returning the string representation of the new pago
    return { ok: newPago.toString(), error: null }
  } catch (error) {
    console.log(error);
    return { ok: null, error: 'error creating pago' };
  }
};

export const deletePago = async (id: FormData) => {
  // Extracting pago ID from formData
  const pagoId = id.get("id");
  try {
    // Deleting the pago with the specified ID
    await Pago.deleteOne({ _id: pagoId });
    // Triggering revalidation of the specified path ("/")
    revalidatePath("/");
    // Returning a success message after deleting the pago
    return;
  } catch (error) {
    // Returning an error message if pago deletion 
    if (error instanceof Error)
      return;
  }
}