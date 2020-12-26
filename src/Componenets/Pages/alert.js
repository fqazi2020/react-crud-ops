import React,{useState,useEffect,useRef,useImperativeHandle} from 'react';

const Alert = React.forwardRef((props,ref) => {
    const [show,setVisible]= useState("alert alert-primary fade hide");   
    const [msg,setMsg]  =useState(props.msg)
    useImperativeHandle(
        ref,
        ()=>({
            ShowAlert(msg)
            {
                if(msg != ''){
                        setMsg(msg);
                }
                setVisible("alert alert-primary show hide");
                window.location.href="/users";
            }

        })
    )
   
    
{
    
}
   
    const myref= ref;
         
    return (
        <div ref={myref} class={show} role="alert"  >
  {msg}
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
    )
});

export default Alert;