import React, {useEffect, useState, useCallback} from 'react';
import api from './services/api';
import './App.css';
import {SearchBar, Button, ToolCard, AlertModal, Modal, ModalSmall, InputText, TextAreaInput, ModalPrimary} from './components';



const App = () => {

  const [tools, setTools] = useState([]);
  const [addToolModalVisible, setAddToolModalVisible] = useState(false);
  const [removeModalVisible, setRemoveModalVisible] = useState(false);
  const [removeToolId, setRemoveToolId] = useState();
  const [toolTitle, setToolTitle] = useState('');
  const [toolLink, setToolLink] = useState('');
  const [toolDescription, setToolDescription] = useState('');
  const [toolTags, setToolTags] = useState([]);

  const handleTitleChange = useCallback((e) => setToolTitle(e.target.value), []);
  const handleLinkChange = useCallback((e) => setToolLink(e.target.value), []);
  const handleDescriptionChange = useCallback((e) => setToolDescription(e.target.value), []);
  const handleTagsChange = useCallback((e) => setToolTags(e.target.value), []);

  const getTools = async () => {
    try {
      const {data} = await api.get('tools');
      setTools(data);
    } catch (error) {
      alert("Ocorreu um erro ao buscar os items");
    }
  }
   
  useEffect(() => {
    getTools();
  }, []);

  const handleAddTool = () => {
    setAddToolModalVisible(true);
  }

  const handleAddToolConfirm = async () => {
    const newTool = {
      "title": toolTitle,
      "link": toolLink,
      "description": toolDescription,
      "tags": toolTags
    };
    
    try{
      const resp = await api.post('tools', newTool);
      setToolTitle('');
      setToolLink('');
      setToolDescription('');
      getTools();
      console.log(resp.data);
    } catch (err) {
      console.log(err);
    }
    
    setAddToolModalVisible(false);
  };

  const handleRemove = (id=0, title='') => {
    setRemoveToolId(id);
    setToolTitle(title);
    setRemoveModalVisible(!removeModalVisible);
  };

  const handleRemoveConfirm = async () => {
    try{
      const resp = await api.delete(`tools/${removeToolId}`);
      getTools();
      console.log(resp.data);
    } catch (err) {
      console.log(err);
    }
    setToolTitle('');
    setRemoveToolId('');
    setRemoveModalVisible(false);
  };

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
          <ToolCard 
            key={tool.id} 
            title={tool.title} 
            description={tool.description} 
            link={tool.link} 
            onClick={() => handleRemove(tool.id, tool.title)} 
          />
        )
      }
      

      <ModalPrimary
        visible={addToolModalVisible}
        title="Add new Tool"
        confirmTitle="Add Tool"
        onConfirm={handleAddToolConfirm}
      > 
        <InputText title="Tool Name" onChange={handleTitleChange} value={toolTitle} />
        <InputText title="Tool Link" onChange={handleLinkChange} value={toolLink}/>
        <TextAreaInput title="Tool Description" onChange={handleDescriptionChange} value={toolDescription}/>
        <InputText title="Tags" onChange={handleTagsChange}/>
        
      </ModalPrimary>
      
      <ModalSmall
        visible={removeModalVisible}
        title="Remove Tool"
        cancelTitle="Cancel"
        onCancel={handleRemove}
        confirmTitle="Yes, remove"
        onConfirm={handleRemoveConfirm}
        text={`Are you sure you wnat to remove ${toolTitle}?`}
      >
      </ModalSmall>

    </div>
  );

}

export default App;
