import React from "react";
import { useFormStatus } from "react-dom";

export default function SubmitBtn() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      {...(pending && { disabled: true })}
      className={`bg-blue-400 h-10 w-62 p-2 mt-10 rounded text-white font-bold`}
    >
      {pending ? "Adding..." : "Add Pago"}
    </button>
  );
}