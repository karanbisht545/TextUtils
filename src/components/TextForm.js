import React ,{useState} from "react";
export default function TextForm(props) {
  function  handleUpClick(){
         console.log('uppercase was clicked')
         let newText=text.toUpperCase()
         setText(newText)
    }
    function handlelowClick(){
        let newText=text.toLowerCase()
        setText(newText)
        props.showAlert('converted to lowercase!','sucess');
    }
    const handleCopyClick=()=>{
        let text=document.getElementById('myBox')
       text.select();
       text.setSelectionRange(0,999)
       navigator.clipboard.writeText(text.value)
       props.showAlert('text copied !','sucess');
    }
    const handleOnchange=(event)=>{
        console.log('on change')
        setText(event.target.value);
    }
    function handleclearClick(){
        let newText=''
        setText(newText)
    }
    // function handleCopyClick(){
    //     var text=document.getElementById('myBox')
    //     text.select();
    //     navigator.clipboard.writeText(text.value)
    // }
    
    const [text,setText]=useState('')
    return (
        <>      
          <React.StrictMode>
            <div className="container" style={{color:props.mode==='dark'?'white':'black'}} >
            <h1>{props.heading}</h1>
            <div className='mb-3'>
                <textarea className="form-control" value={text} onChange={handleOnchange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
            </div>
          <button className="btn btn-primary mx-2"  onClick={handlelowClick}>Convert to lower case </button>

          <button className="btn btn-primary"  onClick={handleUpClick}>Convert to upper case
          </button>
          <button className="btn btn-primary mx-3"  onClick={handleclearClick}>clear text
          </button>
          <button className="btn btn-primary mx-3"  onClick={handleCopyClick}>Copy Text
          </button>
          

        </div>
        <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}} >
            <h2>Your text summary </h2>
            <p>{text.split('').length} words, {text.length} characters</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:'Enter something to preview here'}</p>
        </div>
        </React.StrictMode>
</>

    );
}
