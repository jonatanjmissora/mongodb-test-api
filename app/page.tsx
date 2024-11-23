import { Form } from "./components/Form";
import PagosList from "./components/PagosList";

export default function Home() {
  return (
    <div className="min-h-screen relative bg-slate-900">
      <div className="flex justify-around flex-col items-center h-1/2 ">
        <h1 className=" text-4xl font-bold mt-12 mb-12">Home Page</h1>
        <Form />
      </div>
      <div className="flex  flex-col items-center h-1/2 ">
        <PagosList />
      </div>
    </div>
  );
}
