import React from "react";


export default class ImageDisplay extends React.Component {

  render(){
    return(
      <div>
          <ul>
            {this.props.images.map((image,id) =>
            <li key={image.id}><img src={image.img_src} alt=""/></li>
            )}
          </ul>
        </div>
);
}
}
