export const getUser = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: {
          name: "Huy",
          age: 26,
          address: "TPHCM",
        },
        status: 200,
      });
    }, 1500);
  });
