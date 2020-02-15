import React from 'react';

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
return (
    <div>
        <p className='f3'>
            {`This Magic Brain will detect faces in your pictures. Give it a try.`}
        </p>
        <div className='center'>
            <div className='center pa4 shadow-5 br3'>
            <input className='f4 pa2 w-70 center' type="text" onChange={onInputChange} placeholder="enter an image url" />
            <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-red' 
            onClick={onButtonSubmit} >Detect</button>
            </div>
          </div>
    </div>
);
}

export default ImageLinkForm;
