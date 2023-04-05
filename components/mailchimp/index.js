import MailchimpSubscribe from "react-mailchimp-subscribe";
import NewsLetterForm from "./newsletterform";

export default function SubscribeForm() {
  return (
    <MailchimpSubscribe
      url={"https://njit.us21.list-manage.com/subscribe/post?u=fb9506185557cd98c67b56981&amp;id=1ecb5eb752&amp;f_id=00e58ce1f0"}
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
