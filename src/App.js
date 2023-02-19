import React, {useEffect} from 'react';
import './App.css';
import {ProSidebarProvider} from 'react-pro-sidebar';
import {MySidebar} from "./MySidebar";
import {LessonPage} from "./LessonPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>

        <ProSidebarProvider>

            <div className="App">
                <MySidebar>
                </MySidebar>
                <Routes>
                    <Route path={`lesson/*`} element={<LessonPage />} />
                </Routes>

            </div>
        </ProSidebarProvider>
        </BrowserRouter>
    );
}

export default App;
