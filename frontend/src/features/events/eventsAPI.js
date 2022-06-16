const baseURL = "api/v1";

export async function fetchEvents({ category, search } = {}) {
  try {
    let url = `${baseURL}/events?search=${search || ""}&category=${
      category || ""
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
