
import "./App.css";
import Header from "./Componants/Header";
import Main from "./Componants/Main";
import Loader from "./Componants/Loader";
import Error from "./Componants/Error";
import StartScreen from "./Componants/StartScreen";
import Questions from "./Componants/Questions";
import NextButton from "./Componants/NextButton";
import Progress from "./Componants/Progress";
import FinishScreen from "./Componants/FinishScreen";
import Footer from "./Componants/Footer";
import Timer from "./Componants/Timer";
import { useQuiz } from "./context/QuizContext";

export default function App() {
  const { status } = useQuiz();

  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && <StartScreen />}
        {status === "active" && (
          <>
            <Progress />
            <Questions />
            <Footer>
              <>
                <Timer />
                <NextButton />
              </>
            </Footer>
          </>
        )}
        {status === "finished" && <FinishScreen />}
      </Main>
    </div>
  );
}
