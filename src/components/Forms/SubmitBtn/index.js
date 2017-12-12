import React from "react";
// import { Button } from 'semantic-ui-react';
import { Button } from "semantic-ui-react";

import PropTypes from "prop-types";

const SubmitBtn = props => {
  const { text, size, block, type, action, style } = props;
  // console.log(this, "TEST");
  return (
    <Button {...props} onClick={() => action && action}>
      {text}
    </Button>
  );
};

SubmitBtn.propTypes = {
  text: PropTypes.string.isRequired,
  size: PropTypes.string,
  block: PropTypes.bool,
  type: PropTypes.string,
  action: PropTypes.func
};

export default SubmitBtn;
