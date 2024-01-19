import "./App.css";
import React, { useState } from "react";
import TopBar from "./TopBar/TopBar";
import MainTitle from "./MainTitle/MainTitle";
import WrapperComponent from "./WrapperComponent/WrapperComponent";
import Stats from "./Stats/Stats";
import BehaviorsTable from "./BehaviorsTable/BehaviorsTable";
import WorkTable from "./WorkTable/WorkTable";
import ContinueButton from "../components/ContinueButton/ContinueButton";
import loseWeightSvg from "../assets/icons/lose.svg";
import gainMuscleSvg from "../assets/icons/gain.svg";
import developHabitsSvg from "../assets/icons/develop1.svg";
import developSvg from "../assets/icons/develop2.svg";

import MoonSvg from "../assets/icons/moon.svg";
import DounatSvg from "../assets/icons/donut.svg";
import CanSvg from "../assets/icons/soda.svg";
import SaltpSvg from "../assets/icons/salt.svg";
import PizzaSvg from "../assets/icons/pizza.svg";
import NoneSvg from "../assets/icons/cross.svg";

import data from "../data.json";

function App() {
  const [mainTitleIndex, setMainTitleIndex] = useState(0);
  const [wrapperTitleIndex, setWrapperTitleIndex] = useState(0);
  const [showWrapperComponent, setShowWrapperComponent] = useState(true);
  const [showStats, setShowStats] = useState(false);
  const [showBehaviorsTable, setShowBehaviorsTable] = useState(false);
  const [showWorkTable, setShowWorkTable] = useState(false);

  const goals = [
    { svg: loseWeightSvg, text: "Lose Weight" },
    { svg: gainMuscleSvg, text: "Gain Muscle" },
    { svg: developSvg, text: "Develop healthy habits" },
    { svg: developHabitsSvg, text: "Develop healthy habits" },
  ];

  const behaviors = [
    { svg: MoonSvg, text: "I don't rest enough" },
    { svg: DounatSvg, text: "I have a sweet tooth" },
    { svg: CanSvg, text: "I have too much soda" },
    { svg: SaltpSvg, text: "I eat many salty foods" },
    { svg: PizzaSvg, text: "I enjoy midnight snacks" },
    { svg: NoneSvg, text: "None of the above" },
  ];

  const work = [
    { text: "Hardly at all" },
    { text: "Fitness 1-2 \n times a week" },
    { text: "Fitness 3-5 \n times a week" },
    { text: "Fitness 5-7 \n times a week" },
  ];

  const handleNavigation = (direction) => {
    if (direction === "continue") {
      if (mainTitleIndex < data.mainTitleContents.length - 1) {
        setMainTitleIndex((prevIndex) => prevIndex + 1);
      }

      if (wrapperTitleIndex < data.wrapperTitles.length - 1) {
        setWrapperTitleIndex((prevIndex) => prevIndex + 1);
      }

      if (showWrapperComponent) {
        setShowWrapperComponent(false);
        setShowStats(true);
      } else if (showStats) {
        setShowStats(false);
        setShowBehaviorsTable(true);
      } else if (showBehaviorsTable) {
        setShowBehaviorsTable(false);
        setShowWorkTable(true);
      }
    } else if (direction === "topBar") {
      if (mainTitleIndex > 0) {
        setMainTitleIndex((prevIndex) => prevIndex - 1);
      }

      if (wrapperTitleIndex > 0) {
        setWrapperTitleIndex((prevIndex) => prevIndex - 1);
      }

      if (showWorkTable) {
        setShowWorkTable(false);
        setShowBehaviorsTable(true);
      } else if (showBehaviorsTable) {
        setShowBehaviorsTable(false);
        setShowStats(true);
      } else if (showStats) {
        setShowStats(false);
        setShowWrapperComponent(true);
      }
    }
  };

  const handleContinue = () => {
    handleNavigation("continue");
  };

  const handleTopBarClick = () => {
    handleNavigation("topBar");
  };

  return (
    <div className="App">
      <TopBar onTopBarClick={handleTopBarClick} />
      <MainTitle content={data.mainTitleContents[mainTitleIndex]} />
      {showWrapperComponent && (
        <WrapperComponent
          title={data.wrapperTitles[wrapperTitleIndex]}
          goals={goals}
          onGoalIconClick={handleContinue}
        />
      )}
      {showStats && <Stats />}
      {showBehaviorsTable && (
        <BehaviorsTable
          behaviors={behaviors}
          onContinueClick={handleContinue}
        />
      )}
      {showWorkTable && (
        <WorkTable title={data.wrapperTitles[wrapperTitleIndex]} work={work} />
      )}
      {(showStats || showBehaviorsTable) && (
        <ContinueButton onClick={handleContinue} label="Continue" />
      )}
    </div>
  );
}

export default App;
