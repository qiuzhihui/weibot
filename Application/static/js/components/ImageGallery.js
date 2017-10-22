import React from 'react'
import ImageCard from'./ImageCard'

export class ImageGallery extends React.Component {
  render() {
    return (
      <div className='ImageGallery'>
        <ImageCard url="static/img/porsche1.jpg" text="hahaha" />
        <ImageCard url="static/img/porsche1.jpg" text="hahaha" />
        <ImageCard url="static/img/porsche1.jpg" text="hahaha" />
        <ImageCard url="static/img/porsche1.jpg" text="hahaha" />
        <ImageCard url="static/img/porsche1.jpg" text="hahaha" />
        <ImageCard url="static/img/porsche1.jpg" text="hahaha" />
        <ImageCard url="static/img/porsche1.jpg" text="hahaha" />
        <ImageCard url="static/img/porsche1.jpg" text="hahaha" />
      </div>
    )
  }
}

export default ImageGallery