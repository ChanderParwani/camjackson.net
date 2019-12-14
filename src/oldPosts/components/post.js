'use strict';

const React = require('react');
const marked = require('marked');
const highlightjs = require('highlight.js');

marked.setOptions({
  highlight: (code) => {
    return highlightjs.highlightAuto(code).value;
  }
});

const Page = require('./page');

const PostComponent = (props) => (
  <Page title={props.post.title}>
    <article className="container post">
      <h1>{props.post.title}</h1>
      <time pubdate className="pull-right"><em>{props.post.posted}</em></time>
      <hr/>
      <div dangerouslySetInnerHTML={{__html: marked(props.post.text)}}></div>
    </article>
  </Page>
);

PostComponent.propTypes = {
  post: React.PropTypes.shape({
    title: React.PropTypes.string,
    text: React.PropTypes.string,
    posted: React.PropTypes.string
  })
};

module.exports = PostComponent;
