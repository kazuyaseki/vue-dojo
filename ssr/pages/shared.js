import axios from "axios";

export async function init({ store, redirect, error, isClient }) {
  if (isClient) return; //don't load after initial render

  try {
    const res = await axios.get("https://todos-cuvsmolowg.now.sh/todos");
    store.commit("init", res.data);
  } catch (err) {
    //there are mainly 3 ways to handle error

    //error({ statusCode: 500, message: "Oops!Sorry sir." });
    redirect("/error");
    //store.commit("init", []);
  }
}
