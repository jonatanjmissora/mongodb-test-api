import { Form } from "./components/Form";
import PagosList from "./components/PagosList";

export default function Home() {
  return (
    <div className="min-h-screen flex relative bg-slate-900">
      <div className="flex-1 flex justify-center flex-col items-center">
        <Form />
      </div>
      <div className="flex-1 flex flex-col justify-center items-center">
        <PagosList />
      </div>
    </div>
  );
}
