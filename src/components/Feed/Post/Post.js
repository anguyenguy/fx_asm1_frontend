import React from 'react';

import Button from '../../Button/Button';
import './Post.css';

import like_image from './like.png';

const post = props => (
  <article className="post">
    <header className="post__header">
      <h3 className="post__meta">
        Posted by {props.author} on {props.date}
      </h3>
      <h1 className="post__title">{props.title}</h1>
    </header>
    {/* <div className="post__image">
      <Image imageUrl={props.image} contain />
    </div>
    <div className="post__content">{props.content}</div> */}
    
    <div className="post__actions">
        <img style={{ 'height': '18px', 'weight': 'auto'}} src={like_image} alt="Like"/>
        <b>{props.likes}</b>
        <Button mode="flat" design="danger" onClick={props.onClickLike}>
        Like
      </Button>
      <Button mode="flat" link={props.id}>
        View
      </Button>
      <Button mode="flat" onClick={props.onStartEdit}>
        Edit
      </Button>
      <Button mode="flat" design="danger" onClick={props.onDelete}>
        Delete
      </Button>
    </div>
  </article>
);

export default post;
