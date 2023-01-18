import ReactRecaptcha3 from "./lib/react-google-recaptcha3";
import React, { useEffect, useState } from "react"


function App() {
  const siteKey = "6LfQdvQjAAAAAJsjcyQgkZI0awQ2SvGgMrDoxM1B";
  
  const [token, setToken] = useState("");
  useEffect(() => {
    ReactRecaptcha3.init(siteKey).then(status => {
      console.log(status)
    })

  }, [])

  const submit = () => {
    ReactRecaptcha3.getToken().then(resp => {
      console.log(resp);
      setToken(resp)
    }, error => {
      console.log(error)
    })
  }
  return (
    <div className="App">
      <h1>
        React recaptcha3
      </h1>
      <div>
        <p>
          <input type="text" />
          <button onClick={submit}>
            Submit
          </button>
        </p>
        <div>
          Token is <b>{token}</b>
        </div>
        <p>
        <button onClick={() => ReactRecaptcha3.init(siteKey)}>
            Init again
          </button> &nbsp;
          <button onClick={() => ReactRecaptcha3.destroy()}>
            Destroy
          </button>
        </p>
      </div>
    </div>
  );
}

export default App;
