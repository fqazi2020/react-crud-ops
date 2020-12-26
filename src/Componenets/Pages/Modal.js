import React,{useState,useEffect} from 'react';


const Modal = (props) => {
    
    return (
<div id="myModal" className="modal" tabindex="-1" role="dialog">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">{props.Title}</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        <p>{props.msg}</p>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-primary" onClick={props.successhandler}>{props.successtxt}</button>
        <button type="button" className="btn btn-secondary" onClick={props.cancelhandler} data-dismiss="modal">{props.canceltxt}</button>
      </div>
    </div>
  </div>
</div>

    )
}
export default Modal;