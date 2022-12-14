

import axios from "axios";
import AllRoutes from "../../nametitle/AllRoutes";
import { baseUrl } from "../../nametitle/dataUrl";


// Créer un Programme 
export const CreateProgram = (title, coverPicture, description, redirect) => {
  var data = JSON.stringify({
    "title": title,
    "description": description,
    "coverPicture":coverPicture,
    "typeActivity":"programme"
  });
  var config = {
    method: 'post',
    url: `${baseUrl.baseUrl}/api/v1/activites/programmes/`,
    headers: {
      'Authorization': 'Bearer ',
      'Content-Type': 'application/json',
      'Cookie': 'JSESSIONID=4929A2A226D1D000ECA1AF8906558AF0'
    },
    data: data
  };
  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      window.location.reload();
      redirect(`/${AllRoutes.admin}/${AllRoutes.userlist}`);
    })
    .catch(function (error) {
      console.log(error);
    });
}

// Mise ajour du Témoignage
export const UpdateProgram = (id, title,coverPicture, description, redirect) => {
  var data = JSON.stringify({
    "title": title,
    "description": description,
    "coverPicture":coverPicture,
  });
  var config = {
    method: 'put',
    url: `${baseUrl.baseUrl}/api/v1/activites/programmes/${id}`,
    headers: {
      'Authorization': 'Bearer ',
      'Content-Type': 'application/json',
      'Cookie': 'JSESSIONID=4929A2A226D1D000ECA1AF8906558AF0'
    },
    data: data
  };
  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      window.location.reload();
      redirect(`/${AllRoutes.admin}/${AllRoutes.activity}`);
    })
    .catch(function (error) {
      console.log(error);
    });

}





// **************************************************************   Mise ajour du mot de passe
export const UpdateVideoProgram = (password, redirect) => {
  var data = JSON.stringify({
    "password": password,
  });
  var config = {
    method: 'post',
    url: `${baseUrl.baseUrl}/api/v1/activites/programmes/`,
    headers: {
      'Content-Type': 'application/json',
      'Cookie': 'JSESSIONID=4929A2A226D1D000ECA1AF8906558AF0'
    },
    data: data
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

// ************************************************ rendre invisible témoignage
export const StopProgram = (id,redirect) => {
  var data = JSON.stringify({
    "visible": Boolean(false),
  });
  var config = {
    method: 'put',
    url: `${baseUrl.baseUrl}/api/v1/activites/programmes/hide/${id}`,
    headers: {
      'Content-Type': 'application/json',
      'Cookie': 'JSESSIONID=4929A2A226D1D000ECA1AF8906558AF0'
    },
    data: data
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




// ********************************************* Rendre visible temoignage 
export const AccessProgram = (id,redirect) => {
  var data = JSON.stringify({
    "visible": Boolean(true),
  });
  var config = {
    method: 'put',
    url: `${baseUrl.baseUrl}/api/v1/activites/programmes/show/${id}`,
    headers: {
      'Content-Type': 'application/json',
      'Cookie': 'JSESSIONID=4929A2A226D1D000ECA1AF8906558AF0'
    },
    data: data
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


// Recupérer tout les programes
export const LoadAllProgram = (SetState) => {
  axios.get(`${baseUrl.baseUrl}/api/v1/activites/programmes/`, {
    headers: {
      'Content-Type': 'application/json',
      'Cookie': 'JSESSIONID=4929A2A226D1D000ECA1AF8906558AF0'
    }
  })
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      SetState(response.data.data)
    })
    .catch(function (error) {
      console.log(error);
    });
}


