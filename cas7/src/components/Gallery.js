import React from 'react';
import {Popup} from './Popup';

export function Gallery(props) {
    return (
      <div id="gallery">
        {props.photoList.slice(0, 50).map(photo => {
            return(
                <div onClick={() => props.openPhoto(photo.url)} key={photo.id} className="image-holder">
                    <img src={photo.thumbnailUrl} alt={photo.title} />
                </div>
            )
        })}
        {props.popupPhoto !== ""? 
        <Popup photoUrl={props.popupPhoto} 
        zatvoriSlika={props.closePicture}
        /> : null }
      </div>
    )
  
}


