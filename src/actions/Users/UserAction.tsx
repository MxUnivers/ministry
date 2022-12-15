import axios from "axios";
import AllRoutes from "../../nametitle/AllRoutes";
import { baseUrl } from "../../nametitle/dataUrl";


// Créer un compte 
export  const CreateUser  =  (username,name,email,code,telephone,password,redirect)=>{
    var data = JSON.stringify({
        "name": "name 1",
        "email": "user1@gmail.com"
      });
      var config = {
        method: 'post',
        url: `${baseUrl.baseUrl}/api/v1/users/`,
        headers: { 
          'Authorization': 'Bearer ', 
          'Content-Type': 'application/json', 
          'Cookie': 'JSESSIONID=4929A2A226D1D000ECA1AF8906558AF0'
        },
        data : data
      };
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        redirect(`/${AllRoutes.admin}/${AllRoutes.userlist}`);
      })
      .catch(function (error) {
        console.log(error);
      });
}

// Mise ajour du compte 
export  const UpdateUser  =  (username,firstname,lastname,email,code,telephone,roles,redirect)=>{
    var data = JSON.stringify({
        "username":username,
        "firstname":firstname,
        "lastname":lastname,
        "email":email,
        "code":code,
        "telephone": telephone,
        "roles": roles
      });
      
      var config = {
        method: 'post',
        url: `${baseUrl.baseUrl}/api/v1/users/`,
        headers: { 
          'Authorization': 'Bearer ', 
          'Content-Type': 'application/json', 
          'Cookie': 'JSESSIONID=4929A2A226D1D000ECA1AF8906558AF0'
        },
        data : data
      };
      
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        redirect(`/${AllRoutes.admin}/${AllRoutes.userlist}`);
      })
      .catch(function (error) {
        console.log(error);
      });
      
}





// **************************************************************   Mise ajour du mot de passe
export  const UpdatePasswordUser  =  (password,redirect)=>{
    var data = JSON.stringify({
        "password":password,
      });
      var config = {
        method: 'post',
        url: `${baseUrl.baseUrl}/api/v1/users/`,
        headers: {  
          'Content-Type': 'application/json', 
          'Cookie': 'JSESSIONID=4929A2A226D1D000ECA1AF8906558AF0'
        },
        data : data
      };
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        redirect(`/${AllRoutes.admin}/${AllRoutes.userlist}`);
      })
      .catch(function (error) {
        console.log(error);
      });
}

// ************************************************ Bloquer acces au compte 
export  const StopUser  =  (redirect)=>{
    var data = JSON.stringify({
        "access":Boolean(false),
      });
      var config = {
        method: 'put',
        url: `${baseUrl.baseUrl}/api/v1/users/`,
        headers: {  
          'Content-Type': 'application/json', 
          'Cookie': 'JSESSIONID=4929A2A226D1D000ECA1AF8906558AF0'
        },
        data : data
      };
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        redirect(`/${AllRoutes.admin}/${AllRoutes.userlist}`);
      })
      .catch(function (error) {
        console.log(error);
      });
}




// ********************************************* Débloquer un compte 
export  const AccessUser  =  (redirect)=>{
    var data = JSON.stringify({
        "access":Boolean(true),
      });
      var config = {
        method: 'put',
        url: `${baseUrl.baseUrl}/api/v1/users/`,
        headers: {  
          'Content-Type': 'application/json', 
          'Cookie': 'JSESSIONID=4929A2A226D1D000ECA1AF8906558AF0'
        },
        data : data
      };
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        redirect(`/${AllRoutes.admin}/${AllRoutes.userlist}`);
      })
      .catch(function (error) {
        console.log(error);
      });
}


// Recupérer tout compte des utlisateurs
export  const LoadAllUser  =  (SetState)=>{
      axios.get(`${baseUrl.baseUrl}/api/v1/users/`, {
        headers: {  
            'Content-Type': 'application/json', 
            'Cookie': 'JSESSIONID=4929A2A226D1D000ECA1AF8906558AF0'
        }})
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        SetState(response.data.data)
      })
      .catch(function (error) {
        console.log(error);
      });
}
// Recuperer tout compte des utlisateurs Bloqué
export  const LoadAllStopUser  =  (SetState)=>{
    axios.get(`${baseUrl.baseUrl}/api/v1/users/`, {
      headers: {  
          'Content-Type': 'application/json', 
          'Cookie': 'JSESSIONID=4929A2A226D1D000ECA1AF8906558AF0'
      }})
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      SetState(response.data.data)
    })
    .catch(function (error) {
      console.log(error);
    });
}