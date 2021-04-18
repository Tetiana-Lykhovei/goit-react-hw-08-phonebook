import React, { Component } from "react";
import { connect } from "react-redux";
import { contactsOperations, contactsSelectors } from "../../redux/contacts";

import s from "./ContactForm.module.css";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleInputChange = (ev) => {
    const { name, value } = ev.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (ev) => {
    ev.preventDefault();
    const { name } = this.state;
    const { contacts } = this.props;

    const uniqueContact = contacts.find(
      (item) => item.name.toLowerCase() === name.toLowerCase()
    );
    if (uniqueContact) {
      alert(`${name} уже есть в списке ваших контактов`);
      return;
    }

    this.props.onSubmit(this.state);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({
      name: "",
      number: "",
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className={s.wrapper} onSubmit={this.handleSubmit}>
        <label className={s.label}>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleInputChange}
          />
        </label>
        <label className={s.label}>
          Phone
          <input
            type="text"
            name="number"
            value={number}
            onChange={this.handleInputChange}
          />
        </label>
        <button className={s.btnSubmit} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  contacts: contactsSelectors.getAllContacts(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (contact) => dispatch(contactsOperations.addContact(contact)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
