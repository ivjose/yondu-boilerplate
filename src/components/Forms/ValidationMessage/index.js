import React from "react";
import { Message } from "semantic-ui-react";
import PropTypes from "prop-types";

const ValidationMessage = props => {
  const { message, title, status } = props;
  // console.log(this, "TEST");
  if (status === "success") {
    return <Message success header={title} content={message} />;
  } else {
    return <Message negative header={title} content={message} />;
  }
};

ValidationMessage.propTypes = {
  message: PropTypes.string,
  title: PropTypes.string
};

export default ValidationMessage;
