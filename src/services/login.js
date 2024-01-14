// 1. login
// 2. get user information from server
// 3. save user information to cookie

export let login = async function () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          user_id: "234FGSS",
          username: "username",
          name: "name",
          accountStatus:false
        });
      }, 2000);
    });
};
  