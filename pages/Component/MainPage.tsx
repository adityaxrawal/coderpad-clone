import React, { useState, useEffect, useRef } from "react";
import { Navbar, Group, Code, Button, Collapse} from '@mantine/core';
import SplitPane, {Props, Pane} from 'react-split-pane-next';
import Editor from "@monaco-editor/react";
import MonacoEditor from "@monaco-editor/react";
import Files from "../../Constants/Files";
import Styles from "../../Constants/styles";

type MonacoEditor=any;

interface Files {
    name: string;
    language: string;
    value: string;
  }

const MainPage =()=>{
    const { classes, cx } = Styles();
    const [opened, setOpened] = useState(false);
    const [active, setActive] = useState('JavaScript');
    const [fileName, setFileName] = useState<string>('JavaScript');
    const editorRef = useRef<MonacoEditor>(null);
    const file = Files[fileName];

    const splitPaneProps:Props={
        split:"vertical"
    }
    const paneProps:Props={
        minSize: "15%"
    }

    useEffect(() => {
        editorRef.current?.focus();
    }, [file?.name]);

      
    
    return(
        <div style={{display: "inline-flex",}}>
            <Navbar height={'96vh'} width={{ sm: 208 }} p="md">
                <Group className={classes.Navheader} position="apart">
                    <h1> CoderPad </h1>
                    <Code sx={{ fontweight: 700 }}>v3.1.2</Code>
                    <p className={classes.Username}> Hello, Aditya!</p>
                </Group>
                <Button onClick={() => setOpened((o) => !o)}>
                    Choose Language
                </Button>

                <Collapse in={opened}>
                {/* ----------------------------HTML--------------------------------------------------------- */}
                <a className={cx(classes.Navlink, { [classes.NavlinkActive]: 'HTML' === active })}
                onClick={() => {setActive('HTML'), setFileName('HTML')}}>
                <span>HTML</span>
                </a>
                {/* ----------------------------CSS---------------------------------------------------------- */}
                <a className={cx(classes.Navlink, { [classes.NavlinkActive]: 'CSS' === active })}
                onClick={() => {setActive('CSS'), setFileName('CSS')}}>
                <span>CSS</span>
                </a>
                {/* -----------------------------JavaScript------------------------------------------------- */}
                <a className={cx(classes.Navlink, { [classes.NavlinkActive]: 'JavaScript' === active })}
                onClick={() => {setActive('JavaScript'), setFileName('JavaScript')}}>
                <span>JavaScript</span>
                </a>
                {/* --------------------------TypeScript----------------------------------------------------- */}
                <a className={cx(classes.Navlink, { [classes.NavlinkActive]: 'TypeScript' === active })}
                onClick={() => {setActive('TypeScript'), setFileName('TypeScript')}}>
                <span>TypeScript</span>
                </a>
                {/* ---------------------------Python-------------------------------------------------------- */}
                <a className={cx(classes.Navlink, { [classes.NavlinkActive]: 'Python' === active })}
                onClick={() => {setActive('Python'), setFileName('Python')}}>
                <span>Python</span>
                </a>
                {/* ---------------------------Java---------------------------------------------------------- */}
                <a className={cx(classes.Navlink, { [classes.NavlinkActive]: 'Java' === active })}
                onClick={() => {setActive('Java'), setFileName('Java')}}>
                <span>Java</span>
                </a>
                {/* ----------------------------Plain Text----------------------------------------------------*/}
                <a className={cx(classes.Navlink, { [classes.NavlinkActive]: 'PlainText' === active })}
                onClick={() => {setActive('Text'), setFileName('Text')}}>
                <span>Plain Text</span>
                </a>
                {/* ---------------------------End of Languages Section-------------------------------------- */}
                </Collapse>
                <Group className={classes.Navfooter}>
                <a href="#" className={classes.Navlink}>
                <span>Logout</span>
                </a>
                </Group>
            </Navbar>

            <div style={{width: "85vw", height: "100vh",}}>
                <SplitPane {...splitPaneProps}>
                    <Pane {...paneProps} > 
                        <Editor
                        height="96vh"
                        max-width="45vw"
                        path={file?.name}
                        defaultLanguage={file?.language}
                        defaultValue={file?.value}
                        theme="vs-dark"
                        onMount={(editor: MonacoEditor) => (editorRef.current = editor)}
                        />
                        {/* <p>Pane1</p> */}
                    </Pane>
                    <Pane {...paneProps}>
                        <Navbar className={classes.PaneTwo}>
                            <Group className={classes.Result}> RESULT </Group>
                            <div className={classes.ResultContainer}> </div>
                        </Navbar>
                    </Pane>
                </SplitPane>
            </div>
        </div>
    );
}
export default MainPage;