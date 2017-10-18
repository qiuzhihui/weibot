import React from 'react'


const ImageCard = ( {url, text} ) => (
	<div className="responsive">
	  <div className="gallery">
	    <a target="_blank" href={url} >
	      <img src={url} alt="Forest" width="1000" height="800" />
	    </a>
	    <div className="desc">{text}</div>
	  </div>
	</div>
)

export default ImageCard