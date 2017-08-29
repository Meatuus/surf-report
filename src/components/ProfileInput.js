import React from 'react';

const ProfileInput = ({id, label, ...props}) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...props} />
    </div>
  );
};

export default ProfileInput;
