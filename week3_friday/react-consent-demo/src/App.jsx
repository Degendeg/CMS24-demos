import { useState } from 'react'
import './App.css'
import CookieConsent, { Cookies, getCookieConsentValue, resetCookieConsentValue } from "react-cookie-consent"

function App() {
  const [consent, setConsent] = useState(getCookieConsentValue("cookie_consent") === "true")

  const clearCookie = () => {
    resetCookieConsentValue("cookie_consent")
    location.reload()
  }

  const handleAcceptCookies = () => {
    Cookies.set("cookie_consent", "true", { expires: 150 });
    setConsent(true)
  }

  return (
    <>
      {consent && (
        <button onClick={clearCookie}>Rensa kakor 🍪</button>
      )}
      <button onClick={() => alert('👋')}>Testa mig 👋</button>
      <CookieConsent
        location="top"
        buttonText="Got it 👌"
        cookieName="cookie_consent"
        onAccept={handleAcceptCookies}
        style={{ background: "#2B373B" }}
        buttonStyle={{ background: "#7697A2", color: "#2A2B20", fontSize: "13px" }}
        overlay={true}
      >
        This website uses cookies to enhance the user experience.{" "}
        <span style={{ fontSize: "10px" }}>We have notified you, hence complying to GDPR guidelines</span>
      </CookieConsent>
    </>
  )
}

export default App
