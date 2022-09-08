import React, { useState } from "react";
import {
  Header,
  ImageOne,
  ImageTwo,
  ImageThree,
  ImageFour,
  ImageFive,
  ScrollCheck,
} from "./components";

function App() {
  const [topSecretScale, setTopSecretScale] = useState(1.02);
  const [ticTacToeScale, setticTacToeScale] = useState(1.02);
  const [strangersThingsScale, setstrangersThingsScale] = useState(1.02);
  const [fitnessTrackerScale, setfitnessTrackerScale] = useState(1.02);
  const [userHubScale, setuserHubScale] = useState(1.02);
  const [qwirtyScale, setqwirtyScale] = useState(1.02);
  return (
    <div className="App">
      <Header />
      <ImageOne />
      <ImageTwo />
      <ImageThree
        topSecretScale={topSecretScale}
        setTopSecretScale={setTopSecretScale}
        ticTacToeScale={ticTacToeScale}
        setticTacToeScale={setticTacToeScale}
        strangersThingsScale={strangersThingsScale}
        setstrangersThingsScale={setstrangersThingsScale}
      />
      <ImageFour
        fitnessTrackerScale={fitnessTrackerScale}
        setfitnessTrackerScale={setfitnessTrackerScale}
        userHubScale={userHubScale}
        setuserHubScale={setuserHubScale}
        qwirtyScale={qwirtyScale}
        setqwirtyScale={setqwirtyScale}
      />
      <ImageFive />
      {/* <ScrollCheck /> */}
    </div>
  );
}

export default App;
