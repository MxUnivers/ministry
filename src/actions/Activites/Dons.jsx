import axios from "axios";
import AllRoutes from "../../nametitle/AllRoutes";
import { baseUrl } from "../../nametitle/dataUrl";


// Créer un Don
export const CreateDon = (title, coverPicture, description, video, redirect) => {
  var data = JSON.stringify({
    "title": title,
    "coverPicture": coverPicture,
    "description": description,
    "video": video,
    "typeActivity":"don"
  });
  var config = {
    method: 'post',
    url: `${baseUrl.baseUrl}/api/v1/activites/dons/`,
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
      redirect(`/${AllRoutes.admin}/${AllRoutes.activity}`);
    })
    .catch(function (error) {
      console.log(error);
    });
}

// Mise ajour du Témoignage
export const UpdateDon = (id, title, coverPicture, description, video, redirect) => {
  var data = JSON.stringify({
    "title": title,
    "coverPicture": coverPicture,
    "description": description,
    "video": video,
  });
  var config = {
    method: 'put',
    url: `${baseUrl.baseUrl}/api/v1/activites/dons/${id}`,
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
      redirect(`/${AllRoutes.admin}/${AllRoutes.activity}`);
    })
    .catch(function (error) {
      console.log(error);
    });

}





// ************************************************ rendre invisible témoignage
export const StopDon = (id,redirect) => {
  var data = JSON.stringify({
    "visible": Boolean(false),
  });
  var config = {
    method: 'put',
    url: `${baseUrl.baseUrl}/api/v1/activites/dons/hide/${id}`,
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
export const AccessDon = (id,redirect) => {
  var data = JSON.stringify({
    "visible": Boolean(true),
  });
  var config = {
    method: 'put',
    url: `${baseUrl.baseUrl}/api/v1/activites/dons/show/${id}`,
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
export const LoadAllDon = (SetState) => {
  axios.get(`${baseUrl.baseUrl}/api/v1/activites/dons/`, {
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
// Recupérer tout les programes
export const LoadAllDonVisible = (SetState) => {
  axios.get(`${baseUrl.baseUrl}/api/v1/activites/dons/visible/`, {
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


