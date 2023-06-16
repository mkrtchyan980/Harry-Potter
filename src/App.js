import { useState } from "react";
import "./App.css";
import Api from "./components/Api";
import Header from "./components/Header";
import "./Css/Style.css";

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className={isDark ? "App" : "dark"}>
      <Header isDark={isDark} setIsDark={setIsDark} />
      <Api />
    </div>
  );
}

export default App;
