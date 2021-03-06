import React, { useEffect, useState } from "react";
import LoadingMask from "./components/LoadingMask";
import Character from "./components/Character";
import Subscription from "./components/Subscription";
import axios from "axios";

const App = () => {
  const [myList, updateList] = useState("");
  const [loading, setLoading] = useState(true);
  const [showSubscribe, setshowSubscribe] = useState(false);

  const renderData = async () => {
    setTimeout(() => {
      setshowSubscribe(true);
    }, 10000);
    let resp = await axios.get(
      "https://seriescharacters.com/api/howimetyourmother"
    );
    updateList(resp.data);
    setLoading(false);
  };

  useEffect(() => {
    renderData();
  }, []);

  return (
    <div>
      <h1>Series Api</h1>
      {loading ? (
        <LoadingMask />
      ) : (
        <div>
          {myList.map((list, i) => (
            <Character key={i} char={list} />
          ))}
        </div>
      )}
      {showSubscribe && <Subscription />}
    </div>
  );
};

export default App;
