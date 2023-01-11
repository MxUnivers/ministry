import axios from "axios";
import AllRoutes from "../../nametitle/AllRoutes";
import { baseUrl } from "../../nametitle/dataUrl";


// Créer un Event
export const CreateEvent = (title, coverPicture, description, date, redirect) => {
  var data = JSON.stringify({
    "title": title,
    "coverPicture": coverPicture,
    "description": description,
    "date": date,
    "typeActivity":"evenement"
  });
  var config = {
    method: 'post',
    url: `${baseUrl.baseUrl}/api/v1/activites/event/`,
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
      redirect(`/${AllRoutes.admin}/${AllRoutes.userlist}`);
    })
    .catch(function (error) {
      console.log(error);
    });
}

// Mise ajour du Témoignage
export const UpdateEvent = (id, title, coverPicture, description,date, redirect) => {
  var data = JSON.stringify({
    "title": title,
    "coverPicture": coverPicture,
    "description": description,
    "date": date,
    "typeActivity":"evenement"
  });
  var config = {
    method: 'put',
    url: `${baseUrl.baseUrl}/api/v1/activites/events/${id}`,
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
      redirect(`/${AllRoutes.admin}/${AllRoutes.userlist}`);
    })
    .catch(function (error) {
      console.log(error);
    });

}





// **************************************************************   Mise ajour du mot de passe
export const UpdateVideoEvent = (password, redirect) => {
  var data = JSON.stringify({
    "password": password,
  });
  var config = {
    method: 'post',
    url: `${baseUrl.baseUrl}/api/v1/activites/events/`,
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
export const StopEvent = (id,redirect) => {
  var data = JSON.stringify({
    "visible": Boolean(false),
  });
  var config = {
    method: 'put',
    url: `${baseUrl.baseUrl}/api/v1/activites/events/hide/${id}`,
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
export const AccessEvent = (id,redirect) => {
  var data = JSON.stringify({
    "visible": Boolean(true),
  });
  var config = {
    method: 'put',
    url: `${baseUrl.baseUrl}/api/v1/activites/events/show/${id}`,
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
export const LoadAllEvent = (SetState) => {
  axios.get(`${baseUrl.baseUrl}/api/v1/activites/events/`, {
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


