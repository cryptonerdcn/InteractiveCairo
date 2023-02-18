import React from 'react';
import ReactDOM from 'react-dom/client';
import logo from './logo.svg';
import './App.css';
import CodeEditor from '@uiw/react-textarea-code-editor';

function App() {
  const [code, setCode] = React.useState(
      `function add(a, b) {\n  return a + b;\n}`
  );
  return (
      <div className="App">


      <CodeEditor
          className="Editor"
          value={code}
          language="rust"
          placeholder="Please enter Cairo code."
          onChange={(evn) => setCode(evn.target.value)}
          padding={15}
          style={{
            fontSize: 12,
            backgroundColor: "#f5f5f5",
            fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
          }}
      />

      </div>
  );
}

export default App;
