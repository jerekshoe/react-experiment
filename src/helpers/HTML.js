import React, { Component, PropTypes } from 'react';
import { renderToString } from 'react-dom/server';
import serialize from 'serialize-javascript';

export default class Html extends Component {
  render() {
    const { component, store } = this.props;
    const content = component ? renderToString(component) : '';

    return (
      <html lang="en-us">
        <head>
          <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossOrigin="anonymous" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </head>
        <body>
          <div id="main" dangerouslySetInnerHTML={{ __html: content }} />
          <script dangerouslySetInnerHTML={{ __html: `window.__data=${serialize(store.getState())};` }} charSet="UTF-8" />
          <script type="text/javascript" src="dist/bundle.js"></script>
        </body>
      </html>
    );
  }
}

Html.propTypes = {
  component: PropTypes.node,
  store: PropTypes.object,
};
