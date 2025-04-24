import supabase from './supabase';

// Function to handle user login
export const signIn = async (email, password) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw error;
  }
  return data;
};

// Function to handle user sign-up
export const signUp = async (email, password) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    throw error;
  }
  return data;
};



// Function to listen for authentication state changes
export const onAuthChange = (callback) => {
  return supabase.auth.onAuthStateChange((event, session) => {
    if (event === 'SIGNED_IN' || event === 'SIGNED_OUT') {
      callback(session?.user);
    }
  });
};

// Function to sign out
export const signOut = async () => {
  await supabase.auth.signOut();
};
