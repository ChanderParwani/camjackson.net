'use strict';

const React = require('react');

const HeadComponent = (props) => (
  <head>
    <meta charSet="utf-8"/>
    <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css"
          integrity="sha512-dTfge/zgoMYpP7QbHy4gWMEGsbsdZeCXz7irItjcC3sPUFtf0kuFbDz/ixG7ArTxmDjLXDmezHubeNikyKGVyQ=="
          crossOrigin="anonymous"/>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"/>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/highlight.js/8.6/styles/darkula.min.css" type="text/css"/>
    <meta name="google-site-verification" content="beqVA6mdouBqt29xCCkTuf6R-1w6lIEhBz3YlmM1DSc" />

    <title>{ props.title ? `${props.title} - Cam Jackson` : 'Cam Jackson'}</title>
    <link rel="icon" type="image/x-icon" href="/favicon.ico"/>
    <link href="/style/oldStyles.css" rel="stylesheet"/>
    <script type='text/javascript' src="/ga.js"></script>
  </head>
);

HeadComponent.propTypes = {
  title: React.PropTypes.string,
};

module.exports = HeadComponent;
