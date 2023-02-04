


export class TokenService {

  static getToken () {

    return `Bearer ${localStorage.getItem("token")}`
  }



  static deleteToken() {
    localStorage.removeItem("token")
  }



}

