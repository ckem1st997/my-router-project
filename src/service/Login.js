import axios from 'axios';

const url = "http://apigate.somee.com/"
export default class LoginService {
    Login(login) {
        return axios.post(url + 'accountapi/User/Login',login)
            .then(res => res)
            .catch(error => {
                console.log(error)
            });
    }
}