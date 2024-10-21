import { supabase } from "../../../services/supabase";
const format = (date) => {
  if (!date) return;
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return `${year}-${month}-${day}`;
};
export default {
  getOrders: async () => {
    let { data, error } = await supabase.from("orders").select("*");
    if (error) throw error;

    return data;
  },
  getOrder: async (id) => {
    let { data, error } = await supabase.from("orders").select().eq("id", id);

    if (error) throw error;
    return data[0];
  },
  createOrder: async ({ name, count, price, status }) => {
    console.log({ name, count, price, status })
    const { data, error } = await supabase
      .from("orders")
      .insert([{ name, count, price, status }])
      .select();

    if (error) throw error;
    return data;
  },
  filterOrdersByStatus: async (status) => {
    let res;
    if (status === "All") {
      res = await supabase.from("orders").select("*");
    } else {
      res = await supabase.from("orders").select("*").eq("status", status);
    }
    let { data, error } = res;
    if (error) throw error;
    return data;
  },
  filterOrdersByDate: async (date) => {
    let d = format(date);
    let { data, error } = await supabase
      .from("orders")
      .select()
      .eq("created_at", d);

    if (error) throw error;
    return data;
  },
  pay: async (id) => {
    const { data, error } = await supabase
      .from("orders")
      .update({ status: "Paid" })
      .eq("id", id)
      .select();
    if (error) throw error;
    return data;
  },
};
