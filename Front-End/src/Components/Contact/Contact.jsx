import "./Contact.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
function Contact(lang) {
  const langauge = lang.lang;
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_fx4v1ss", "template_vo9jaud", form.current, {
        publicKey: "a1GkwqgArl74t60zT",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="contact w-[100%] flex flex-col  xs:justify-center xs:items-center xl:justify-start xl:items-start xl:py-10 xl:px-2">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col justify-center items-center xs:w-[100%] md:w-[95%] xs:p-4 xl:w-[45%]  space-y-10 xl:p-12 "
      >
        <label
          htmlFor="from_name"
          className={`w-[100%] flex flex-col text-2xl font-Camel-Medium   ${
            langauge === "ar" ? "text-right" : ""
          }`}
        >
          {langauge === "ar" ? "الأسم" : "Name"}
          <input
            className="mt-2 bg-white w-full border border-[#212529] rounded-md p-2 focus:outline-none"
            type="text"
            id="from_name"
            name="from_name"
            required
            autoComplete="false"
            dir={langauge === "ar" ? "rtl" : ""}
          />
        </label>
        <label
          htmlFor="phone_number"
          className={`w-[100%] flex flex-col space-y-3 text-2xl font-Camel-Medium text-[#063242] ${
            langauge === "ar" ? "text-right" : ""
          }`}
        >
          {langauge === "ar" ? "رقم الهاتف" : "Phone Number"}
          <input
            className="mt-2 bg-white w-[100%] border border-[#063242] rounded-md p-2 focus:outline-none"
            type="text"
            id="phone_number"
            name="phone_number"
            required
            autoComplete="email"
            dir={langauge === "ar" ? "rtl" : ""}
          />
        </label>
        <label
          htmlFor="details"
          className={`w-[100%]  flex flex-col space-y-3 text-2xl font-Camel-Medium text-[#063242] ${
            langauge === "ar" ? "text-right" : ""
          }`}
        >
          {langauge === "ar" ? "التفاصيل" : "Details"}
          <textarea
            rows={7}
            className="mt-2 bg-white w-full border border-[#212529] rounded-md p-2  focus:outline-none"
            autoComplete="false"
            type="text"
            id="details"
            name="details"
            required
            dir={langauge === "ar" ? "rtl" : ""}
          ></textarea>
        </label>
        <div
          className={`w-[100%] md:w-[50%] lg:w-[30%] hover:-translate-y-0.5 transation duration-150  text-center  rounded-md bg-[#063242] px-10  py-2.5 text-white text-xl font-Camel-Bold ${
            langauge === "ar"
              ? "xs:self-end  md:self-center lg:self-end"
              : "self-start"
          }`}
        >
          <input
            type="submit"
            value="Submit"
            className=" hover:cursor-pointer"
          />
        </div>
      </form>
    </div>
  );
}

export default Contact;
