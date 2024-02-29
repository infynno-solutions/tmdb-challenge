// import Alert from './Alert';

export default class APIManager {
  constructor() {}

  checkInternet() {
    // if (!window.navigator.onLine) {
    //   // Alert.error('Please connect to internet');
    //   return false;
    // }
    return true;
  }

  sendResponse(data, response) {
    if (!response) {
      // window.location.href = "/maintenance";
      return {
        data: undefined,
        error: false,
      };
    }
    if (response.status === 401) {
      // TODO: remove token
      // window.location.href = "/login";
    }
    if (response.status === 404) {
      // Alert.error('API does not exist');
    }
    if (data?.msg) {
      if (!response.ok) {
        // Alert.error(data.msg);
      } else if (response.ok) {
        // Alert.success(data.msg);
      }
    }
    return {
      data: data,
      error: !response.ok,
    };
  }

  async requestForm(endpoint, method, body) {
    if (this.checkInternet()) {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL}${endpoint}`,
        {
          method: method,
          headers: {
            accept: "*/*",
            "auth-token": localStorage.getItem("token"),
          },
          body: body,
        }
      );
      const data = await response.json();
      return this.sendResponse(data, response);
    }
    return;
  }

  async request(endpoint, method, body) {
    // const baseUrl = import.meta.env.VITE_BASE_URL;
    if (this.checkInternet()) {
      let response, data;
      try {
        response = await fetch(`${endpoint}`, {
          method: method,
          headers: {
            "Content-Type": "application/json",
            accept: "*/*",
            Authorization: `Bearer ${process.env.TMDB_API_READ_ACCESS_TOKEN}`,
          },
          body: JSON.stringify(body),
        });
        data = await response.json();
      } catch (error) {
        console.log({ error });
      }
      return this.sendResponse(data, response);
    }
    return;
  }

  async get(endpoint) {
    return await this.request(endpoint, "GET", undefined);
  }

  async post(endpoint, body) {
    return await this.request(endpoint, "POST", body);
  }

  async postForm(endpoint, body) {
    return await this.requestForm(endpoint, "POST", body);
  }

  async put(endpoint, body) {
    return await this.request(endpoint, "PUT", body);
  }

  async putForm(endpoint, body) {
    return await this.requestForm(endpoint, "PUT", body);
  }

  async patch(endpoint, body) {
    return await this.request(endpoint, "PATCH", body);
  }

  async delete(endpoint, body) {
    return await this.request(endpoint, "DELETE", body);
  }
}
