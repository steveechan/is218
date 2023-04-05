import MailchimpSubscribe from "react-mailchimp-subscribe";
import NewsLetterForm from "./newsletterform";

export default function SubscribeForm() {
  return (
    <MailchimpSubscribe
      url={process.env.NEXT_PUBLIC_MAILCHIMP_URL}
      render={(props) => {
        const { status, subscribe, message } = props || {};
        return (
          <NewsLetterForm
            status={status}
            message={message}
            onValidated={(formData) => subscribe(formData)}
          />
        );
      }}
    />
  );
}
