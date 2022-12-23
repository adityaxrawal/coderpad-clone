import React, { useState, useEffect, useRef } from "react";
import { Navbar, Group, Code, Button, Collapse, ScrollArea, Container, Text, Modal, Paper, TextInput, Title} from '@mantine/core';
import SplitPane, {PaneProps,Props, Pane} from 'react-split-pane-next';
import { RichTextEditor, Link } from '@mantine/tiptap'; 
import { useEditor } from '@tiptap/react';
import Highlight from '@tiptap/extension-highlight';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import Editor from "@monaco-editor/react";
import MonacoEditor from "@monaco-editor/react";
import Files from "../../Constants/Files";
import Styles from "../../Constants/styles";
import style from "../../styles/MainPage.module.css";

type MonacoEditor=any;

interface Files {
    name: string;
    language: string;
    value: string;
}


const MainPage =()=>{
    const { classes, cx } = Styles();
    const [username, setUsername] = useState<string>('Your Name');
    const [modalOpened, setModalOpened] = useState(true);
    const [opened, setOpened] = useState(false);
    const [active, setActive] = useState('JavaScript');
    const [fileName, setFileName] = useState<string>('JavaScript');
    const [executionResult, setExecutionResult] = useState('');
    const editorRef = useRef<MonacoEditor>(null);
    const file = Files[fileName];
    

    const content =`<h2 style="text-align: center;">Welcome to Mantine rich text editor</h2>
    <p><code>RichTextEditor</code> component focuses on usability and is designed to be as simple as possible to bring a familiar 
    editing experience to regular users. <code>RichTextEditor</code> is based on <a href="https://tiptap.dev/" rel="noopener noreferrer" 
    target="_blank">Tiptap.dev</a> and supports all of its features:</p><ul><li>General text formatting: <strong>bold</strong>, 
    <em>italic</em>, <u>underline</u>, <s>strike-through</s> </li><li>Headings (h1-h6)</li><li>Sub and super scripts 
    (<sup>&lt;sup /&gt;</sup> and <sub>&lt;sub /&gt;</sub> tags)</li><li>Ordered and bullet lists</li><li>Text align&nbsp;</li><li>And 
    all <a href="https://tiptap.dev/extensions" target="_blank" rel="noopener noreferrer">other extensions</a></li></ul>';`
    const editor = useEditor({
        extensions: [StarterKit, Underline, Link, Highlight, TextAlign.configure({ types: ['heading', 'paragraph'] }),],
        content,
    });


    const splitPaneProps:Props={
        split:"vertical"
    }
    const paneProps:PaneProps={
        minSize: "20%"
    }
    const editorProps:PaneProps={
        initialSize: '75%',
        minSize: '20%'
    }
    useEffect(() => {
        editorRef.current?.focus();
    }, [file?.name]);

    
    const handleResult=(code: string)=>{
        let CodeSize = Buffer.byteLength(code);
        if( CodeSize > 1024){
            console.log(CodeSize);
            setExecutionResult("Error");
        }
        else{
            console.log(CodeSize);
            setExecutionResult("OK");
        }
    }
    const handleClick = () =>{
        var inputName= document.getElementById('usernameInput');
        if(inputName){
            setUsername((inputName as HTMLInputElement).value);
        }
        setModalOpened(false)
    }
    return(
        <>
        <Modal overlayColor='#101113' opened={modalOpened} onClose={() => setModalOpened(false)}  overlayBlur={3} centered>
            <Container size={420} my={40}>
                <Title
                    align="center"
                    sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}
                >
                    Welcome back!
                </Title>

                <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                    <TextInput label="Your Name" placeholder="Enter Your Name" id="usernameInput"/>        
                    <Button fullWidth mt="xl" onClick={handleClick}>
                        Sign in
                    </Button>
                </Paper>
            </Container>
        </Modal>
        <div className={style.Page}>
            <div>
            <Navbar height={'96vh'} width={{ sm: '28vh' }} p="md">
                <Group className={classes.Navheader} position="apart">
                    <h1> CoderPad </h1>
                    <Code sx={{ fontweight: 700 }}>v3.1.2</Code>
                    <p className={classes.Username}> Hello, {username}!</p>
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
            </div>
            <div className={style.EditorandResults}>
                <SplitPane {...splitPaneProps}>
                    <Pane {...editorProps}> 
                        <Container className={classes.EditorPanel}>
                            <Editor
                            height='96vh'
                            // min-width="70vw"
                            path={file?.name}
                            defaultLanguage={file?.language}
                            defaultValue={file?.value}
                            theme="vs-dark"
                            onMount={(editor: MonacoEditor) => (editorRef.current = editor)}
                            />
                        </Container>
                    </Pane>
                    <Pane {...paneProps}>
                        <Container className={classes.PaneTwo}>
                            <Navbar.Section>
                                <Text className={classes.Result}> RESULT </Text>
                                <Container className={classes.ResultContainer}> 
                                    {executionResult}
                                    <Button variant="gradient" 
                                    gradient={{ from: 'teal', to: 'blue', deg: 60 }} 
                                    className={classes.RUN}
                                    onClick={()=>{handleResult(file?.value)}}>
                                        RUN
                                    </Button>
                                </Container>
                            </Navbar.Section>
                            <ScrollArea style={{ height: '355px'}}>
                                <RichTextEditor editor={editor}>
                                    <RichTextEditor.Toolbar sticky>
                                        <RichTextEditor.ControlsGroup>
                                            <RichTextEditor.Bold />
                                            <RichTextEditor.Italic />
                                            <RichTextEditor.Underline />
                                            <RichTextEditor.Highlight />
                                        </RichTextEditor.ControlsGroup>

                                        <RichTextEditor.ControlsGroup>
                                            <RichTextEditor.H1 />
                                        </RichTextEditor.ControlsGroup>

                                        <RichTextEditor.ControlsGroup>
                                            <RichTextEditor.BulletList />
                                            <RichTextEditor.OrderedList />
                                        </RichTextEditor.ControlsGroup>

                                        <RichTextEditor.ControlsGroup>
                                            <RichTextEditor.AlignLeft />
                                            <RichTextEditor.AlignCenter />
                                            <RichTextEditor.AlignJustify />
                                            <RichTextEditor.AlignRight />
                                        </RichTextEditor.ControlsGroup>
                                    </RichTextEditor.Toolbar>

                                    <RichTextEditor.Content />
                                </RichTextEditor>
                            </ScrollArea>
                        </Container>
                    </Pane>
                </SplitPane>
            </div>
        </div>
        </>
    );
}
export default MainPage;