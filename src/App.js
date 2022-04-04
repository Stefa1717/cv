import React, {useEffect, useState} from "react";
import './App.css';
import Components from './components'

function App ({contentPath}){
  const [content, setContent] = useState(null);

  useEffect(() => { 
    fetch(contentPath).then(res => res.json()).then(setContent).catch(console.error)
  }, [contentPath]);

  return (
    <div className="app">
      <div className="container">
        <div className="row">
          {content?.body.map(block => Components(block))}
        </div>
      </div>
    </div>
  );
}
export default App;
