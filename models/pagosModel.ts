// Importing mongoose library along with Document and Model types from it
import mongoose, { Model } from "mongoose";

// Defining the structure of a pago item using TypeScript interfaces
export type PagoProps = {
  _id: string;
  vencimiento: string;
  rubro: string;
  sector: string;
  monto: string;
  pagado: string;
}

// Defining a mongoose schema for the pagos document, specifying the types 
// and constraints
const pagoSchema = new mongoose.Schema<PagoProps>(
  {
    _id: {
      type: String,
      required: true,
    },
    vencimiento: {
      type: String,
      required: true,
    },
    rubro: {
      type: String,
      required: true,
    },
    sector: {
      type: String,
      required: true,
    },
    monto: {
      type: String,
      required: true,
    },
    pagado: {
      type: String,
      required: true,
    },
  },
);

// Creating a mongoose model for the pago document
const Pago: Model<PagoProps> =
  mongoose.models?.Pago || mongoose.model("Pago", pagoSchema);

export default Pago;