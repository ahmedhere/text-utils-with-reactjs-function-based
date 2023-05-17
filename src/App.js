import "./App.css";
import NavBar from "./components/NavBar";
import TextFrom from "./components/TextFrom";
import Alert from "./components/alert";
import { useState } from "react";

function App() {
  const [alert, setAlert] = useState(null);
  const [mode, setMode] = useState("light");

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.setAttribute("class", "text-light bg-dark");
      showAlert("Dark Mode is Enabled", "success");
    } else {
      setMode("light");
      document.body.setAttribute("class", "text-dark bg-light");
      showAlert("Light Mode is Enabled", "success");
    }
  };
  return (
    <>
      <NavBar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      {/* <NavBar /> */}
      <TextFrom
        heading="Enter the text to analyze"
        name="Enter name"
        mode={mode}
        showAlert={showAlert}
      />
    </>
  );
}

export default App;
