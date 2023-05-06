import React, { createContext, useEffect, useState } from "react";
import UserProfile from "./UserProfile";

const initialAddress = () => {
  // console.log("initialAddress");
  return {
    nation: "Vietnam",
    city: {
      street: "200 Dien Bien Phu",
      house: "Building",
    },
  };
};

// truyền initialAddress -> truyền function. initialAddress() => Gọi funciton

// return 1 promise: thì Promise này 3s sau mới resolve

// Khải default value thẳng vào context
export const UserContext = createContext({
  address: {
    nation: "Vietnam",
    city: {
      street: "200 Dien Bien Phu",
      house: "Building",
    },
  },
  age: 100,
  firstName: "Alex",
  increaseAge: () => {},
});

const getAddress = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        nation: "USA",
        city: {
          street: "100 Nicolas, NY",
          house: "Building",
        },
      });
    }, 3000);
  });
};

export default function User() {
  const [firstName, setFirstName] = useState("Alex");
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
      newCity.street = "100 Dien Bien Phu";
      return {
        ...prevAddress,
        city: newCity,
      };
    });
  };

  // console.log("Re-render");

  // Giống componnetDidUpdate, effect function chạy lại mỗi khi component rerender
  // useEffect(() => {
  //   console.log('useEffect giống componentDidUpdate');
  // });

  useEffect(() => {
    // Dùng call API
    // console.log("useEffect giống componentDidMount");
    // getAddress().then((res) => {
    //   setAddress(res);
    // });
    getAddress().then((res) => {
      setAddress((prevAddress) => {
        const newAddress = { ...prevAddress };
        newAddress.city = res.city;
        return newAddress;
      });
    });

    // clean up function
    return () => {
      console.log("Hủy call API");
    };
  }, []);

  // useEffect(() => {
  //   console.log("age", age);
  //   return () => {
  //     console.log("Clean Age");
  //   };
  // }, [age]);

  return (
    <div>
      <h1>User Functional Component</h1>
      <UserContext.Provider
        value={{
          address,
          age,
          firstName,
          increaseAge,
        }}
      >
        <UserProfile />
      </UserContext.Provider>

      <button onClick={rerender}>Rerender</button>
      <button onClick={changeStreet}>Change street</button>
    </div>
  );
}
