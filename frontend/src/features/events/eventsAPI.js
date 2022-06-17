const baseURL = "api/v1";

export async function fetchEvents({ category, search } = {}) {
  let val = category === "All" ? "" : category;
  try {
    let url = `${baseURL}/events?search=${search || ""}&category=${
      val  || ""
    }`;

    const resp = await fetch(url);
    const data = await resp.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchCategories() {
  try {
    let url = `${baseURL}/categories`;
    const resp = await fetch(url);
    const data = await resp.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
