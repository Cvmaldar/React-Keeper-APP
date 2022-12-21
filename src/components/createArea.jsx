import React, {useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
function CreateArea(props) {

const [isExpanded,setExpanded]=useState(false)
    const [note, setNote] = useState({
        title:"",
        content:""
    });

    function handleChange(event){
        const {name,value}=event.target

        setNote(prevNote=>{
           return {
                ...prevNote,
                [name]:value
           } 
        });
    }

    function addItem(event){
         props.addnote(note)
         setNote({
            title:"",
         content:""
         })
        event.preventDefault();
    }

	function expand(){
	setExpanded(true);
}

  return (
    <div>
      <form className="create-note">
		{isExpanded &&(
        <input value={note.title} name="title"  onChange={handleChange} placeholder="Title" />)}
        <textarea value={note.content} name="content" onChange={handleChange} onClick={expand}  placeholder="Take a note..." rows={isExpanded ?3:1}/>
      <Zoom in={isExpanded}>
	 <Fab onClick={addItem}><AddIcon/></Fab>
	</Zoom> 
      </form>
    </div>
  );
}

export default CreateArea;
