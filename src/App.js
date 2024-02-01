import logo from "./logo.svg";
import "./App.css";
import Header from "./Header.js";
import Aside from "./Aside.js";
import Section from "./Section.js";
import characterData from "./Section.js";

function App() {
  return (
    <div id="__layout">
      <main class="app-pc">
        <main class="rpg-aggregate">
          <div class="rpg-aggregate-body-bg pc"></div>
          <Header />
          <Aside />
          <Section characterData={characterData} />;
        </main>
      </main>
    </div>
  );
}

export default App;
