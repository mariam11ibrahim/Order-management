import { supabase } from "../../../services/supabase";

export default {
  register: async ({ email, password }) => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });
      if (error) throw error;
      localStorage.setItem('user', JSON.stringify(data.session))
      return data;
    } catch (error) {
      console.error(error);
    }
  },
  logout: async () => {
    try {
      const { data, error } = await supabase.auth.signOut({
        email,
        password,
      });
      if (error) throw error;
      console.log(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  },
  getCurrentUSer: async () => {
    try {
      const { data, error } = await supabase.auth.getSession();
      if (error) throw error;
      console.log(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  },
};
