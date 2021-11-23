class List {
  listUrl = "http://localhost:3001/list"
  findAll = async () => {
    return await fetch(this.listUrl)
  }

  findId = async (id) => {
    return await fetch(`${this.listUrl}/${id}`)
  }

  create = async (list) => {
    return fetch(`${this.listUrl}/create`, {
      method: "POST",
      body: JSON.stringify(list),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    });
  };

  edit = async (list, id) => {
    return fetch(`${this.listUrl}/update/${id}`, {
      method: "PUT",
      body: JSON.stringify(list),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    });
  }

  delete = async (id) => {
    console.log(`${this.listUrl}/delete/${id}`)
    return fetch(`${this.listUrl}/delete/${id}`, {
      method: "DELETE",
    });
  };
}

export default List;
