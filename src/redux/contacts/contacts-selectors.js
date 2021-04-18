import { createSelector } from "reselect";

const getIsLoading = (state) => state.contacts.loading;
const getAllContacts = (state) => state.contacts.items;
const getFilter = (state) => state.contacts.filter;

const getFilteredContacts = createSelector(
  [getAllContacts, getFilter],
  (contacts, filter) => {
    const normFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normFilter)
    );
  }
);

export default { getIsLoading, getAllContacts, getFilter, getFilteredContacts };
