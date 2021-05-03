import React, {useEffect, useState, useCallback, useMemo} from 'react';
import api from './services/api';
import './App.css';
import {ContainsSearch} from './utils/containsSearch';
import { 
  SearchBar, 
  Button, 
  ToolCard, 
  ModalSmall, 
  ModalPrimary, 
  InputText, 
  TextAreaInput, 
  TagsInput 
} from './components';

const App = () => {

  const [tools, setTools] = useState([]);
  const [addToolModalVisible, setAddToolModalVisible] = useState(false);
  const [removeModalVisible, setRemoveModalVisible] = useState(false);
  const [removeToolId, setRemoveToolId] = useState();
  const [toolTitle, setToolTitle] = useState('');
  const [toolLink, setToolLink] = useState('');
  const [toolDescription, setToolDescription] = useState('');
  const [toolTags, setToolTags] = useState([]);
  const [search, setSearch] = useState('');
  const [searchTags, setSearchTags] = useState(false);

  const handleTitleChange = useCallback((e) => setToolTitle(e.target.value), []);
  const handleLinkChange = useCallback((e) => setToolLink(e.target.value), []);
  const handleDescriptionChange = useCallback((e) => setToolDescription(e.target.value), []);
  const handleTagsChange = useCallback((tags) => setToolTags(tags), []);
  const handleSearchTags = useCallback((e) => setSearchTags(e.target.checked), []);

  const getTools = async () => {
    try {
      const {data} = await api.get('tools');
      setTools(data);
    } catch (error) {
      alert("Sorry, We have a problem getting tool's List");
    }
  }
   
  useEffect(() => {
    getTools();
  }, []);

  const searchedList = useMemo(() => {
    const result = !search.trim().length ? tools : tools.filter(tool => {
      if(searchTags)
        return tool.tags.some((tag)=> ContainsSearch(tag, search));
      else
        return ContainsSearch(tool.title, search);
    });
    return result;
  }, [search, searchTags, tools]);
  

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
      setToolTags([]);
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
          <SearchBar search ={search} onSearchChange={(e) => setSearch(e.target.value)} />
          <input id="searchTags" type="checkbox" checked={searchTags} onChange={handleSearchTags} /><span>search in tags only</span>
        </div>
        <Button title="+ add" onClick={handleAddTool} icon="add" />
      </div>
      { 
        searchedList.map((tool)=>
          <ToolCard 
            key={tool.id} 
            title={tool.title} 
            description={tool.description} 
            link={tool.link} 
            tags={tool.tags}
            onClick={() => handleRemove(tool.id, tool.title)} 
          />
        )
      }
      <footer>
        <p>Desenvolvido por Letícia Vargas - 2021</p>
      </footer>

      <ModalPrimary
        visible={addToolModalVisible}
        title="Add new Tool"
        confirmTitle="Add Tool"
        onConfirm={handleAddToolConfirm}
        onClose ={()=> setAddToolModalVisible(false)}
      > 
        <InputText title="Tool Name" placeholder='teste' onChange={handleTitleChange} value={toolTitle} />
        <InputText title="Tool Link" onChange={handleLinkChange} value={toolLink}/>
        <TextAreaInput title="Tool Description" onChange={handleDescriptionChange} value={toolDescription}/>
        <TagsInput title="Tags" onChange={handleTagsChange} value={toolTags} />
      </ModalPrimary>
      
      <ModalSmall
        visible={removeModalVisible}
        title="Remove Tool"
        cancelTitle="Cancel"
        onCancel={handleRemove}
        confirmTitle="Yes, remove"
        onConfirm={handleRemoveConfirm}
        onClose={()=>setRemoveModalVisible(false)}
        text={`Are you sure you want to remove ${toolTitle}?`}
      >
      </ModalSmall>

    </div>
  );

}

export default App;
