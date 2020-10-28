import { Button, Result } from 'antd';
import React, { Component } from 'react';

class PageNotFound extends Component {
  render() {
    return (
      <div id="pageNotFound">
        <Result
          status="404"
          title="404"
          subTitle="Sorry, the page you visited does not exist."
          extra={<Button type="primary" href="/">Back to Home</Button>}
        />
      </div>
    );
  }
}

export default PageNotFound;