import { useState } from "react"

export default function NewTodoItem({onCreateClicked}){
  const [inputText, setInputText] = useState('');
  return(
    <div>
      <input type="text" 
      value={inputText}
      onChange={e => setInputText(e.target.value)}/>
      <button onClick={() => {onCreateClicked(inputText);
        setInputText('');
      }}>Create Todo</button>
    </div>


  )
}