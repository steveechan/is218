import { useState } from "react";
import { AiOutlineLoading, AiOutlineLoading3Quarters } from "react-icons/ai";

export default function NewsLetterForm({ status, message, onValidated }) {
  const [email, setEmail] = useState();
  const [error, setError] = useState();
  const handleInputKeyEvent = (event) => {
    setError(null);
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      handleFormSubmit();
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setError(null);

    if (!email) {
      setError("Please enter a valid email address");
      return null;
    }

    // On success return true
    const isFormValidated = onValidated({ EMAIL: email });

    // On success return true
    return email && email.indexOf("@") > -1 && isFormValidated;
  };
  const getMessage = (message) => {
    if (!message) {
      return null;
    }
    const result = message?.split("-") ?? null;
    if ("0" !== result?.[0]?.trim()) {
      return sanitize(message);
    }
    const formattedMessage = result?.[1]?.trim() ?? null;
    return formattedMessage ? sanitize(formattedMessage) : null;
  };

  return (
    <div className="space-y-2">
      <h4 className="text-xs">Subscribe to our newsletter</h4>
      <p>Monthly digest of what&apos;s new and exciting from us.</p>

      <form
        className="min-w-[250px]  gap-4 2xl:flex xl:flex lg:flex md:flex flex flex-col text-center"
        onSubmit={handleFormSubmit}
      >
        <input
          className="w-full rounded p-2 bg-neutral-700 border border-neutral-600
            focus:outline-none focus:ring-1 focus:ring-indigo-500
            "
          placeholder="Email Address"
          value={email}
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          onKeyUp={(event) => handleInputKeyEvent(event)}
          disabled={status === "sending"}
        />
        <button
          className=" bg-indigo-600 p-2 rounded w-full"
          type="submit"
          disabled={status === "sending"}
        >
          {"sending" === status ? (
            <p className="flex gap-2 items-center justify-center">
              Sending...{" "}
              <AiOutlineLoading3Quarters className="animate-spin w-4 h-4" />
            </p>
          ) : (
            "Subscribe "
          )}
        </button>
      </form>
      <div className="min-h-42px">
        {"error" === status || error ? (
          <div
            className="text-red-700 pt-2"
            dangerouslySetInnerHTML={{ __html: error || getMessage(message) }}
          />
        ) : null}
        {"success" === status && "error" !== status && !error && (
          <div className="text-green-200 font-bold pt-2 text-xs">{message}</div>
        )}
      </div>
    </div>
  );
}
