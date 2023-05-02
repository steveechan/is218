import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "react-hot-toast";
import { MetaHeader } from "../components/common/metaHeader";
const { PageLayout } = require("../components/layout");

const InputForm = ({
  label,
  placeholder,
  onChange,
  value,
  id,
  type = "text",
}) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm" htmlFor={id}>
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="p-3 bg-sage-main/25 rounded focus:outline-none"
        onChange={onChange}
        value={value}
        id={id}
        required
      />
    </div>
  );
};

const ContactUs = () => {
  emailjs.init("mGu7hYv8aMEswvduK");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [statusMessage, setStatusMessage] = useState(null);

  const resetFields = () => {
    setEmail("");
    setName("");
    setSubject("");
    setMessage("");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const data = {
      to_name: name,
      message: message,
      to_subject: subject,
      from_email: email,
      to_email: email,
    };

    emailjs.send("service_enc5d1n", "template_zlmo4vh", data).then(
      (response) => toast.success("Message sent!"),
      (error) => toast.error(error.text ?? "Oops... Something went wrong!")
    );
    resetFields();
  };

  return (
    <>
      <MetaHeader title="Contact Us" />
      <PageLayout>
        <section className="w-full min-h-[85vh] flex items-center justify-center">
          <div className="max-w-lg w-full space-y-8 bg-sage-main/10 h-fit  rounedd p-6">
            <div className="space-y-4">
              <h1 className="text-4xl font-black">Get in touch</h1>
              <p>
                Join our team of dedicated volunteers and make a difference in
                your community.{" "}
              </p>
            </div>
            <form className="space-y-4" onSubmit={onSubmit}>
              <InputForm
                label={"Email*"}
                id="email"
                onChange={(e) => setEmail(e.currentTarget.value)}
                value={email}
                placeholder={"Enter email"}
                type="email"
              />
              <InputForm
                label={"Full Name*"}
                id="fullName"
                onChange={(e) => setName(e.currentTarget.value)}
                value={name}
                placeholder={"Enter Full Name"}
              />
              <InputForm
                label={"Subject*"}
                id="subject"
                onChange={(e) => setSubject(e.currentTarget.value)}
                value={subject}
                placeholder={"Subject"}
              />
              <div className="flex flex-col gap-1">
                <label htmlFor="message">Message*</label>
                <textarea
                  className="p-3 bg-sage-main/25 focus:outline-none"
                  cols={6}
                  rows={6}
                  value={message}
                  placeholder="Enter Message"
                  onChange={(e) => setMessage(e.currentTarget.value)}
                  required
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-sage-main px-8 py-3 rounded-full text-sm"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </section>
        <Toaster />
      </PageLayout>
    </>
  );
};
export default ContactUs;

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", ["common"])),
  },
});
