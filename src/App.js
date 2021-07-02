import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Ui from './features/ui/screen'
import Component from './features/component-props/screen'
import UseStateSrceen from './features/use-state/screen'
import UseEffectSrceen from './features/use-effect/screen'
import UseMemoSrceen from './features/use-memo/screen'
import MemoSrceen from './features/memo/screen'
import UseCallbackSrceen from './features/use-callback/screen'
import UseContextSrceen from './features/use-context/screen'
import UseRefSrceen from './features/use-ref/screen'
import CallAPI from './features/call-api/screen'
import CallAPIPost from './features/call-api/screen/Post'
import CustomHook from './features/custom-hook/screen'
import CustomHookPost from './features/custom-hook/screen/Post'

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/ui">Ui</Link>
          </li>
          <li>
            <Link to="/component-props">Component And Props</Link>
          </li>
          <li>
            <Link to="/use-state">useState</Link>
          </li>
          <li>
            <Link to="/use-effect">useEffect</Link>
          </li>
          <li>
            <Link to="/use-memo">useMemo</Link>
          </li>
          <li>
            <Link to="/memo">Memo</Link>
          </li>
          <li>
            <Link to="/use-callback">useCallback</Link>
          </li>
          <li>
            <Link to="/use-ref">useRef</Link>
          </li>
          <li>
            <Link to="/call-api">call API</Link>
          </li>
          <li>
            <Link to="/custom-hook">Custom Hook</Link>
          </li>
          <li>
            <Link to="/custom-hook/post">Custom Hook (Form)</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path='/'>
        </Route>
        <Route exact path='/ui'>
          <Ui />
        </Route>
        <Route path='/component-props'>
          <Component />
        </Route>
        <Route path='/use-state'>
          <UseStateSrceen />
        </Route>
        <Route path='/use-effect'>
          <UseEffectSrceen />
        </Route>
        <Route path='/use-memo'>
          <UseMemoSrceen />
        </Route>
        <Route path='/memo'>
          <MemoSrceen />
        </Route>
        <Route path='/use-callback'>
          <UseCallbackSrceen />
        </Route>
        <Route path='/use-context'>
          <UseContextSrceen />
        </Route>
        <Route path='/use-ref'>
          <UseRefSrceen />
        </Route>
        <Route exact path='/call-api'>
          <CallAPI />
        </Route>
        <Route path='/call-api/post'>
          <CallAPIPost />
        </Route>
        <Route exact path='/custom-hook'>
          <CustomHook />
        </Route>
        <Route path='/custom-hook/post'>
          <CustomHookPost />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
