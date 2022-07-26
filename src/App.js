// react hooks
import { useRef } from 'react';

// react-router-dom
import { Route, Routes } from 'react-router-dom';

// views
import Home from './views/Home/Home.view'

// Layout
import Menu from './layout/Menu/Menu.layout';
import Header from './component/Header/Header';

import './App.css';
// mousemove
function App() {
  const outer = useRef();
  const inner = useRef();

  

  const effectCursor = (e) => {
    document.addEventListener("mousemove", e => {
      if (!outer.current || !inner.current) return
      inner.current.style.top = e.clientY + "px"
      inner.current.style.left = e.clientX + "px"
  
      outer.current.style.top = e.clientY + "px"
      outer.current.style.left = e.clientX + "px"
    })
  }
  // document.addEventListener("mousemove", e => {
  //   if (!outer.current || !inner.current) return
  //   inner.current.style.top = e.clientY + "px"
  //   inner.current.style.left = e.clientX + "px"

  //   outer.current.style.top = e.clientY + "px"
  //   outer.current.style.left = e.clientX + "px"
  // })

  return (
    <div className="App" onMouseMove={effectCursor}>
      <span className="cursor-outer" ref={outer}></span>
      <span className="cursor-inner" ref={inner}></span>
      <Routes>
        <Route path="/" element={<Menu />}>
          <Route path="/" index element={<Home />}/>
        </Route>
        <Route path="/uno" element={ <Header /> } />
      </Routes>
    </div>
  );
}

export default App;
