import { Form } from "./components/Form";
import PagosList from "./components/PagosList";

export default function Home() {
  return (
    <div className="min-h-screen flex relative bg-slate-900">
      <div className="flex-1 flex justify-around flex-col items-center h-1/2 ">
        <h1 className=" text-4xl font-bold mt-12 mb-12">Home Page</h1>
        <Form />
      </div>
      <div className="flex-1 flex flex-col justify-center items-center">
        <PagosList />
      </div>
    </div>
  );
}
