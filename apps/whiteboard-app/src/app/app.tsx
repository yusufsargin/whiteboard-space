import {WhiteboardAppContext, WhiteBoardState} from '../store'
import {Scene, WBDraw} from '../components'
import AppModeComponent from "../components/AppModeComponent/AppModeComponent";
import AppModeChanger from "../components/AppModeChanger/AppModeChanger";

export function App() {
  return (
    <WhiteboardAppContext.Provider value={WhiteBoardState}>
      <WBDraw>
        <Scene/>
      </WBDraw>

      <AppModeComponent/>
      <AppModeChanger/>
    </WhiteboardAppContext.Provider>
  );
}

export default App;
