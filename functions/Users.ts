export const fetchUsers = async (): Promise<{ name: string; username: string; email: string }[]> => {  
  const BACKEND_URL = 'http://47.6.38.141:5001/users';

  try {
    const res = await fetch(BACKEND_URL);
    console.log('Status:', res.status);

    if (!res.ok) {
      throw new Error(`Network response was not ok: ${res.status}`);
    }

    const users = await res.json();
    console.log('Fetched users:', users);

    // Ensure we return only necessary user fields with hashed usernames as IDs
    const processedUsers = users.map((user: { name: string; username: string; email: string }) => {
      return {
        name: user.name,
        username: user.username,
        email: user.email,
      };
    });

    return processedUsers;
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error('Fetch error:', err.message);
    } else {
      console.error('Unknown error occurred while fetching users.');
    }
    return [];
  }
};

export const addUser = async (name: string, username: string, email: string, password: string): Promise<boolean> => {
  const BACKEND_URL = 'http://47.6.38.141:5001/users';

  const newUser = {
    name,
    username,
    email,
    password,
  };

  try {
    const res = await fetch(BACKEND_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser),
    });

    console.log('Status:', res.status);

    if (!res.ok) {
      throw new Error(`Network response was not ok: ${res.status}`);
    }

    const data = await res.json();
    console.log('User added:', data);
    return true;
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error('Fetch error:', err.message);
    } else {
      console.error('Unknown error occurred while adding user.');
    }
    return false;
  }
};

export const checkUser = async (email: string, password: string): Promise<boolean> =>{
  const BACKEND_URL = 'http://47.6.38.141:5001/login';
  const userData = {
    email,
    password
  }
  try{
    const res = await fetch(BACKEND_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    console.log('Status:', res.status);

    if (res.status == 300) {
      alert('Password Incorrect');
      return false;
    }
    else if(!res.ok){
      throw new Error(`Network response was not ok: ${res.status}`);
    }else{
      const data = await res.json();
      console.log('User retrieved:', data);
      return true;
    }
  }catch(e: unknown){
    if (e instanceof Error) {
      console.error('Fetch error:', e.message);
    } else {
      console.error('Unknown error occurred while checking user.');
    }
    return false;
  }

}
// function to fetch all necessary info from user page summary
export const fetchUserProfile = async (username: string): Promise<boolean> => {
  const BACKEND_URL = `http://47.6.38.141:5001/users/`;
  
  try {
    const res = await fetch(BACKEND_URL);
    console.log('Status:', res.status);

    if (!res.ok) {
      throw new Error(`Network response was not ok: ${res.status}`);
    }

    const user = await res.json();
    console.log('Fetched user profile:', user);

    // Assuming the function returns true if the user profile is successfully fetched
    return true;
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error('Fetch error:', err.message);
    } else {
      console.error('Unknown error occurred while fetching user.');
    }
    return false;
  }
};