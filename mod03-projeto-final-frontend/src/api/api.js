class User {
  userUrl = "http://localhost:3001/user";
  fetchFind = (user) => {
    return fetch(this.userUrl, {
      method: "POST",
      body: JSON.stringify(user),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    });
  };

  fetchFindID = async () => {
    return fetch(`${this.userUrl}/id`);
  };

  fetchPost = (user) => {
    return fetch(`${this.userUrl}/create`, {
      method: "POST",
      body: JSON.stringify(user),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    });
  };

  fetchPut = (user) => {
    return fetch(`${this.userUrl}/update`, {
      method: "PUT",
      body: JSON.stringify(user),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    });
  };

  fetchDelete = () => {
    return fetch(`${this.userUrl}/delete`, {
      method: "DELETE",
    });
  };
}

class List {
  listUrl = "http://localhost:3001/list"
  findAll = async () => {
    return await fetch(this.listUrl)
  }

  findId = async (id) => {
    return await fetch(`${this.listUrl}/${id}`)
  }

  create = async (list) => {
    return fetch(`${this.userUrl}/create`, {
      method: "POST",
      body: JSON.stringify(list),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    });
  };

  edit = async (id, list) => {
    return fetch(`${this.userUrl}/update/${id}`, {
      method: "PUT",
      body: JSON.stringify(list),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    });
  }

  delete = async (id) => {
    return fetch(`${this.userUrl}/delete/${id}`, {
      method: "DELETE",
    });
  };
}

export default { User, List };
