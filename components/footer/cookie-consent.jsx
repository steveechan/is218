const { useState, useEffect } = require("react");

const CookieConsent = () => {
  const [showCosent, setShowConsent] = useState(false);
  const [isAccepted, setIsAccepted] = useState(false);
  const acceptCookie = () => {
    if (window !== undefined) {
      window.gtag("consent", "update", {
        analytics_storage: "granted",
      });
    }
    localStorage.setItem("consent", "granted");
    setShowConsent(false);
  };

  const denyCookie = () => {
    if (window !== undefined) {
      window.gtag("consent", "update", {
        analytics_storage: "denied",
      });
    }
    localStorage.setItem("consent", "denied");
    setShowConsent(false);
  };

  useEffect(() => {
    if (localStorage.getItem("consent") == undefined) {
      setShowConsent(true);
      localStorage.setItem("consent", "");
    }
  }, []);

  return showCosent ? (
    <div className="fixed bottom-0 w-full p-4 bg-sage-main">
      <div className="container mx-auto ">
        <div className="flex gap-4 items-center justify-center">
          <p>
            {" "}
            This website uses cookies to improve user experience. By using our
            website you consent to all cookies in accordance with our Cookie
            Policy.
          </p>
          <button className="text-sage-accent1" onClick={denyCookie}>
            Deny
          </button>
          <button
            className="bg-sage-secondary/50 px-4 py-2 rounded-full text-sm"
            onClick={acceptCookie}
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  ) : null;
};

export default CookieConsent;
