import React from 'react';
import ReactDOM from 'react-dom/client';
import logo from './logo.svg';
import './App.css';
import CodeEditor from '@uiw/react-textarea-code-editor';
import {ProSidebarProvider} from 'react-pro-sidebar';
import {MySidebar} from "./MySidebar";
import {CODE_SAMPLE, LESSON_TITLE, LESSON_DETAIL} from "./Constants";
import {apiRequest, runCode} from "./api-request";
import {promiseHandler} from "./promise-handler";

function App() {
    const [index, setIndex] = React.useState(0);
    const [code, setCode] = React.useState(
        CODE_SAMPLE[index]
    );

    const [output, setOutput] = React.useState("Output");
    const [title, setTitle] = React.useState(
        LESSON_TITLE[index]
    );
    const [detail, setDetail] = React.useState(
        LESSON_DETAIL[index]
        );

    const runHandler = async () => {

        //program.setIsRunning(true);
        const [response, error] = await promiseHandler(
            runCode(code)
        );
        if (error) {

            console.log(error.message, true);
        } else {
            console.log("Success");
            console.log(response.output);
            setOutput(response.output);
        }

        //program.setIsRunning(false);
    };

    return (
        <ProSidebarProvider>

            <div className="App">
                <MySidebar></MySidebar>
                <div className="Main">
                    <h1>{title}</h1>
                    <p>
                        {detail}
                    </p>
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
                    <button onClick={runHandler}>Run</button>
                    <div className={"Output"}>
                        {output}
                    </div>
                </div>
            </div>
        </ProSidebarProvider>
    );
}

export default App;
