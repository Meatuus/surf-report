import React from 'react';

const ProfileInput = ({id, label, ...props}) => {
  return (
    <div className="profile-input">
      <label htmlFor={id} className="profile-input__label">{label}</label>
      <input id={id} className="profile-input__input" {...props} />
    </div>
  );
};

export default ProfileInput;
