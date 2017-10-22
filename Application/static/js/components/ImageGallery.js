import React from 'react'
import ImageCard from'./ImageCard'
import {Row} from 'react-bootstrap';

const style = {
  margin: '10px'
}

const ImageGallery = () => (
  <Row style={style}>
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
  </Row>
)

export default ImageGallery