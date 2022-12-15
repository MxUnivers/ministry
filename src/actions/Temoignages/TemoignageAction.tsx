import axios from "axios";
import AllRoutes from "../../nametitle/AllRoutes";
import { baseUrl } from "../../nametitle/dataUrl";


// Créer un Temoignage
export const CreateTemoignage = (title, coverPicture, description, content, video, audio, redirect) => {
  var data = JSON.stringify({
    "title": title,
    "coverPicture": coverPicture,
    "description": description,
    "content": content,
    "video": video,
    "audio": audio
  });
  var config = {
    method: 'post',
    url: `${baseUrl.baseUrl}/api/v1/temoignages/`,
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
export const UpdateTemoignage = (id, title, coverPicture, description, content, video, audio, redirect) => {
  var data = JSON.stringify({
    "title": title,
    "coverPicture": coverPicture,
    "description": description,
    "content": content,
    "video": video,
    "audio": audio
  });
  var config = {
    method: 'put',
    url: `${baseUrl.baseUrl}/api/v1/temoignages/${id}`,
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
export const UpdateVideoTemoignage = (password, redirect) => {
  var data = JSON.stringify({
    "password": password,
  });
  var config = {
    method: 'post',
    url: `${baseUrl.baseUrl}/api/v1/temoignages/`,
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
export const StopTemoignage = (redirect) => {
  var data = JSON.stringify({
    "visible": Boolean(false),
  });
  var config = {
    method: 'put',
    url: `${baseUrl.baseUrl}/api/v1/temoignages/`,
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
export const AccessTemoignage = (redirect) => {
  var data = JSON.stringify({
    "visible": Boolean(true),
  });
  var config = {
    method: 'put',
    url: `${baseUrl.baseUrl}/api/v1/temoignages/`,
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


// Recupérer tout les temoignages
export const LoadAllTemoignage = (SetState) => {
  axios.get(`${baseUrl.baseUrl}/api/v1/temoignages/`, {
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


