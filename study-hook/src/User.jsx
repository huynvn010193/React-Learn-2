import React, { useState } from 'react';

const initialAddress = () => {
  console.log('initialAddress');
  return {
    nation: 'Vietnam',
    city: {
      street: '200 Dien Bien Phu',
      house: 'Building',
    },
  };
};

// truyền initialAddress -> truyền function. initialAddress() => Gọi funciton

export default function User() {
  const [firstName, setFirstName] = useState('Alex');
  const [age, setAge] = useState(24);
  const [, forceRerender] = useState(0);
  const [address, setAddress] = useState(initialAddress);
  const increaseAge = () => {
    setAge((prevAge) => prevAge + 1);
  };

  // ép component re-render
  const rerender = () => forceRerender((prevState) => prevState + 1);

  const changeStreet = () => {
    // setAddress({
    //   nation: 'Vietnam',
    //   city: 'Ha Noi',
    // });
    // setAddress((prevState) => ({ ...prevState, city: 'Ha Noi' }));

    setAddress((prevAddress) => {
      const newCity = { ...prevAddress.city };
      newCity.street = '100 Dien Bien Phu';
      return {
        ...prevAddress,
        city: newCity,
      };
    });
  };

  console.log('Re-render');

  return (
    <div>
      <h1>User Functional Component</h1>
      <ul>
        <li>First name: {firstName}</li>
        <li>Age: {age}</li>
        <li>Nation: {address.nation}</li>
        <li>Street: {address.city.street}</li>
        <li>House: {address.city.house}</li>
        <button onClick={increaseAge}>Increase Age</button>
        <button onClick={rerender}>Rerender</button>
        <button onClick={changeStreet}>Change street</button>
      </ul>
    </div>
  );
}
