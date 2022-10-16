async function login(username, password) {
    const url = `${process.env.REACT_APP_ACCOUNTS_HOST}/token`;
  
    const form = new FormData();
    form.append("username", username);
    form.append("password", password);
  
    const response = await fetch(url, {
      method: "post",
      credentials: "include",
      body: form,
    });
    if (response.ok) {  
      const tokenUrl = `${process.env.REACT_APP_ACCOUNTS_HOST}/token`;
  
      try {
        const response = await fetch(tokenUrl, {
          credentials: "include",
        });
        if (response.ok) {
          const data = await response.json();
          const token = data.token;

        }
      } catch (e) {}
      return false;
    }
    let error = await response.json();
}