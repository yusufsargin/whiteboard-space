import {WhiteboardAppContext, WhiteBoardState} from '../store'
import WBDraw from "../components/WBDraw/WBDraw";
import Shape from "../components/Shape/Shape";

export function App() {
  return (
    <WhiteboardAppContext.Provider value={WhiteBoardState}>
      <WBDraw>
        <Shape/>
        {/*<SvgContainer id={"wb-app"} className={'w-100'} style={{
          height: "calc(100vh - 20px)"
        }}>
          <rect width={120} height={100} x={10} y={10}/>
        </SvgContainer>*/}
      </WBDraw>

    </WhiteboardAppContext.Provider>
  );
}

export default App;
