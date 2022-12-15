import React, { useEffect, useState } from 'react';
import { useQuill } from 'react-quilljs';
import AllRoutes from '../../../nametitle/AllRoutes';

const UpdateTemoignagePage = () => {
  const [coverPicture, setcoverPicture] = useState("");
  const [previewSource, setpreviewSource] = useState("");
  const { quill, quillRef } = useQuill();

  
  useEffect(() => {
    if (quill) {
      quill.clipboard.dangerouslyPasteHTML('<h1>Bonne rédaction</h1>');
    }
  }, [quill]);
  const HandleFileInputChange = (e) => {
    const file = e.target.files[0];
    previewFile(file);
  }

  // previewFile
  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setpreviewSource(reader.result);
      setcoverPicture(reader.result);
      // console.log(previewSource)
    }
  }
  
  return (
    <div>
      <div class="pt-4 pb-2">
        <div class="w-full flex justify-center ">

          <a href={`/${AllRoutes.admin}/${AllRoutes.temoins}`}>
          <button class="btn btn-outline-primary py-2" type="submit">retour</button>
          </a>
          <h2 class="w-full text-2xl ">Appliquer modification</h2>
        </div>
      </div>
      <form>
        <div class="flex justify-center row g-8 h-[700px]">
          <div class="col-lg-9">
            <form class="pb-6">
              <div class="row g-3">
                <div class="col-12">
                  <label class="text-xl">Titre de de votre témoignage *</label>
                  <input type="text" required class="form-control bg-light border-0 px-4 py-2" placeholder="titre" style={{ height: "55px" }} />
                </div>
                <div class="col-12 flex space-x-3">
                  <label class="text-xl">Photo *</label>
                  <input type="file" required class="form-controlt border-0 px-4 " onChange={HandleFileInputChange} accept={`.JPG,.PNG,.JPEG`} placeholder="Nom Complet"  />
                  <img src={coverPicture} class="h-[50px] w-[50px]"/>
                </div>
                <div class="col-12">
                  <label class="text-xl">description *</label>
                  <textarea required class="form-control bg-light border-0 px-4" placeholder="Ajouter une description" style={{ height: "55px" }} />
                </div>
                <div class="col-12">
                  <label class="text-xl">redaction *</label>
                  <div class="w-full h-[200px]" >
                    <div ref={quillRef} />
                  </div>
                </div>
                <div class="col-12 mt-5 py-5">
                  <button class="btn btn-outline-primary w-100 py-3" type="submit">appliquer</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </form>


    </div>)
}

export default UpdateTemoignagePage;