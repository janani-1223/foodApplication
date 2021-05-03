import axios from "axios";
 
const BASE_URL="http://localhost:8080/foodApp/";

class LoginSevice{

    getAll(){
        return axios.get(BASE_URL + "get-all");
    }
    getDetailsById(mailId){
        return axios.get(BASE_URL+"get/" + mailId);
    }

    signIn(login){
        return axios.post(BASE_URL +"login", login);
    }

    createAccount(login,phoneNo){
        return axios.post(BASE_URL +"add-login/",login,phoneNo);
    }

    resetPassword(login){
        return axios.post(BASE_URL + "reset", login);
    }
}
export default new LoginSevice();