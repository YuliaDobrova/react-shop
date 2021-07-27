import React, { Component } from "react";
import { ModalContainer } from "./ModalStyled";

class Modal extends Component {
  state = {};

  componentDidMount() {
    window.addEventListener("keydown", this.handleEscape);
    const body = document.querySelector("body");
    body.style.overflow = "hidden";
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleEscape);
    const body = document.querySelector("body");
    body.style.overflow = "auto";
  }

  handleBackdropClick = (e) => {
    if (e.target !== e.currentTarget) {
      return;
    }
    this.props.handleCloseModal();
  };

  handleEscape = (e) => {
    e.code === "Escape" && this.props.handleCloseModal();
  };

  handleClick = () => this.props.handleCloseModal();

  render() {
    return (
      <ModalContainer onClick={this.handleBackdropClick}>
        <div className="modal">{this.props.children}</div>
      </ModalContainer>
    );
  }
}

export default Modal;
