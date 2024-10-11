import Swal from "sweetalert2";

// components
import Form from "@components/form";
import FormInput from "@components/form/input";
import Button from "@components/button";
import { useState } from "react";

function GetInTouchSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const submitForm = (e) => {
    e.preventDefault();

    Swal.fire({
      icon: "success",
      title: "Thank you!",
      text: "Your message has been sent.",
      showConfirmButton: false,
      timer: 1500,
    }).then(() => {
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    });
  };

  return (
    <section
      className="min-h-fit p-10 md:px-15 sm:py-20 xl:py-32 2xl:py-40 flex flex-col justify-center items-center"
      style={{ backgroundColor: "#fafafa" }}
    >
      <h1 className="text-3xl 2xl:text-8xl md:text-5xl sm:text-4xl font-bold text-center mb-14">
        Get in Touch!
      </h1>

      <Form className="w-4/5 max-w-xl min-w-fit p-5" onSubmit={submitForm}>
        <div className="flex flex-wrap gap-3">
          <FormInput
            type="text"
            placeholder="Name"
            className="rounded-xl px-3 md:px-5 mb-5 h-12 2xl:h-20 flex-1 border border-slate-300 hover:border-slate-500 transition duration-150 ease-in focus:outline-none text-slate-600 2xl:text-2xl"
            value={formData.name}
            onChange={(e) =>
              setFormData((f) => ({ ...f, name: e.target.value }))
            }
          />
          <FormInput
            type="email"
            placeholder="Email"
            className="rounded-xl px-3 md:px-5 mb-5 h-12 2xl:h-20 flex-1 border border-slate-300 hover:border-slate-500 transition duration-150 ease-in focus:outline-none text-slate-600 2xl:text-2xl"
            value={formData.email}
            onChange={(e) =>
              setFormData((f) => ({ ...f, email: e.target.value }))
            }
          />
        </div>

        <textarea
          type="text"
          placeholder="Message"
          className="rounded-xl px-3 md:px-5 py-3 2xl:py-8 w-full border border-slate-300 hover:border-slate-500 transition duration-150 ease-in focus:outline-none text-slate-600 2xl:text-2xl min-h-20 2xl:min-h-40 mb-5"
          maxLength="300"
          value={formData.message}
          onChange={(e) =>
            setFormData((f) => ({ ...f, message: e.target.value }))
          }
          required
        ></textarea>

        <Button
          type="submit"
          className="h-12 2xl:h-16 bg-green-500 hover:bg-green-600 transition duration-300 ease-in-out w-full rounded-xl text-white text-lg 2xl:text-3xl"
        >
          Send it!
        </Button>
      </Form>
    </section>
  );
}

export default GetInTouchSection;
