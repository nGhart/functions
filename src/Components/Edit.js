import React, { useState } from 'react'

const Edit = (props) => {
  const [name, setName] = useState(props.userInfo.name);
  const [email, setEmail] = useState(props.userInfo.email);
  const [gen, setGen] = useState(props.userInfo.gen);
  const [id] = useState(props.userInfo.id);

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    if (name === 'name') setName(value);
    if (name === 'email') setEmail(value);
    if (name === 'gen') setGen(value);
  };

  const handleEdit = (e) => {
    e.preventDefault();
    props.editUser(id, { name, email, gen });
    setName('');
    setEmail('');
    setGen('');
    props.closeModal();
  };

  return (
    <div className='editForm'>
      <form onSubmit={handleEdit}>
        <div>
          <label>Name: </label><br />
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email: </label><br />
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Gen: </label><br />
          <input
            type="text"
            name="gen"
            value={gen}
            onChange={handleChange}
          />
        </div>
        <button className='button'>Save changes</button>
      </form>
    </div>
  );
};

export default Edit