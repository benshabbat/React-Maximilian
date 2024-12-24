import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title={"easy"} targetTime={1}/>
        <TimerChallenge title={"not easy"} targetTime={5}/>
        <TimerChallenge title={"medium"} targetTime={7}/>
        <TimerChallenge title={"hard"} targetTime={10}/>
      </div>
    </>
  );
}

export default App;
