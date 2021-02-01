import React, {useEffect, useState} from 'react';
import api from './services/api';
import './App.css';
import {SearchBar, Button, ToolCard, AlertModal, InputText, TextAreaInput} from './components';



const App = () => {

  const [tools, setTools] = useState([]);
  const [addToolModalVisible, setAddToolModalVisible] = useState(false);

   
  useEffect(() => {
    async function getTools () {
      try {
        const {data} = await api.get('tools');
        setTools(data);
      } catch (error) {
        alert("Ocorreu um erro ao buscar os items");
      }
    }
    getTools();
  }, []);

  const handleAddTool = () => {
    setAddToolModalVisible(true);
  }

  const handleAddToolConfirm = () => {
    setAddToolModalVisible(false);
  }

  return (
    <div className="container">
      <header>
        <span className="header1">VUTTR</span>
        <span className="header4">Very Useful Tools to Remember</span>
      </header>
      <div className="searchRow">
        <div className="searchSpace">
          <SearchBar />
          <input type="checkbox" /><span>search in tags only</span>
        </div>
        <Button title="+ add" onClick={handleAddTool} />
      </div>
      { 
        tools.map((tool)=>
          <ToolCard key={tool.id} title={tool.title} description={tool.description} link={tool.link} />)
      }
      
    

      <AlertModal
        visible={addToolModalVisible}
        title="Add new Tool"
        confirmTitle="Add Tool"
        onConfirm={handleAddToolConfirm}
      >
        <InputText title="Tool Name" />
        <InputText title="Tool Link" />
        <TextAreaInput title="Tool Description" />
        <InputText title="Tags" />
      </AlertModal>
    </div>
  );

}

export default App;
