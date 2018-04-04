// process contact from contactAPI
const processContact = contact => ({
  name: `${contact.name.first} ${contact.name.last}`,
  phone: contact.phone,
});

// get users from contactAPI
export const fetchUsers = async () => {
  const response = await fetch('http://');
  const { results } = await response.json();
  return results.map(processContact);
};


// get authentication from local AuthServer
export const login = async (username, password) => {
  const response = await fetch('http://localhost:8000', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ username, password }),
  });
  if (response.ok) {
    return true;
  }
  const errMessage = await response.text();
  throw new Error(errMessage);
};
