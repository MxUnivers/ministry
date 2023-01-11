import axios from "axios";
import AllRoutes from "../../nametitle/AllRoutes";
import { baseUrl } from "../../nametitle/dataUrl";


// Créer un School
export const CreateSchool = (title, coverPicture, description, video, audio, redirect) => {
  var data = JSON.stringify({
    "title": title,
    "coverPicture": coverPicture,
    "description": description,
    "video": video,
    "audio": audio,
    "typeActivity":"school"
  });
  var config = {
    method: 'post',
    url: `${baseUrl.baseUrl}/api/v1/activites/school/`,
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

// Mise ajour du Témoignage
export const UpdateSchool = (id, title, coverPicture, description, content, video, audio, redirect) => {
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
    url: `${baseUrl.baseUrl}/api/v1/activites/school/${id}`,
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
export const UpdateVideoSchool = (password, redirect) => {
  var data = JSON.stringify({
    "password": password,
  });
  var config = {
    method: 'post',
    url: `${baseUrl.baseUrl}/api/v1/activites/school/`,
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
export const StopSchool = (id,redirect) => {
  var data = JSON.stringify({
    "visible": Boolean(false),
  });
  var config = {
    method: 'put',
    url: `${baseUrl.baseUrl}/api/v1/activites/school/hide/${id}`,
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
export const AccessSchool = (id,redirect) => {
  var data = JSON.stringify({
    "visible": Boolean(true),
  });
  var config = {
    method: 'put',
    url: `${baseUrl.baseUrl}/api/v1/activites/school/show/${id}`,
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
export const LoadAllSchool = (SetState) => {
  axios.get(`${baseUrl.baseUrl}/api/v1/activites/school/`, {
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


