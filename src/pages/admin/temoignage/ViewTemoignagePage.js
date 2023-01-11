import React, { useState } from 'react';
import AllRoutes from '../../../nametitle/AllRoutes';

const ViewTemoignagePage = () => {
  const [coverPicture, setcoverPicture] = useState("https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
  return (
    <div class="w-full px-4">

      <div class="flex justify-start mt-2">
        <a href={`/${AllRoutes.admin}/${AllRoutes.temoins}`}>
          <button class="btn btn-outline-primary">
            retour
          </button>
        </a>
      </div>

      <div class=" w-full rounded-lg mt-3 shadow-md min-h-[700px] border-t">
        <div class="w-full flex space-x-3 px-4 pt-3">
          <img src={coverPicture} class="h-[50px] w-[50px] rounded-[50%]" />
          <h2 class="text-xl">Nom d'autheur</h2>
        </div>
        <div class="w-full flex space-x-3 px-4 pt-3">
          <img src={coverPicture} class="h-[400px] w-96 " />
          <p class="text-xl">
            {
              `« Texte » est issu du mot latin « textum », dérivé du verbe « texere » qui signifie « tisser ». Le mot s'applique à l'entrelacement des fibres utilisées dans le tissage, voir par exemple Ovide : « Quo super iniecit textum rude sedula Baucis = (un siège) sur lequel Baucis empressée avait jeté un tissu grossier »2 ou au tressage (exemple chez Martial « Vimineum textum = panier d'osier tressé »). Le verbe a aussi le sens large de construire comme dans « basilicam texere = construire une basilique » chez Cicéron3.

              Le sens figuré d'éléments de langage organisés et enchaînés apparaît avant l'Empire romain : il désigne un agencement particulier du discours. Exemple : « epistolas texere = composer des épîtres » - Cicéron (ier siècle av. J.-C.)4 ou plus nettement chez Quintilien (ier siècle apr. J.-C.) : « verba in textu jungantur = l'agencement des mots dans la phrase »5.
              
              Les formes anciennes du Moyen Âge désignent au xiie siècle le volume qui contient le texte sacré des Évangiles, puis au xiiie siècle, le texte original d'un livre saint ou des propos de quelqu'un. Au xviie siècle le mot s’applique au passage d'un ouvrage pris comme référence et au début du xixe siècle le mot texte a son sens général d'« écrit »6.
              « Texte » est issu du mot latin « textum », dérivé du verbe « texere » qui signifie « tisser ». Le mot s'applique à l'entrelacement des fibres utilisées dans le tissage, voir par exemple Ovide : « Quo super iniecit textum rude sedula Baucis = (un siège) sur lequel Baucis empressée avait jeté un tissu grossier »2 ou au tressage (exemple chez Martial « Vimineum textum = panier d'osier tressé »). Le verbe a aussi le sens large de construire comme dans « basilicam texere = construire une basilique » chez Cicéron3.

Le sens figuré d'éléments de langage organisés et enchaînés apparaît avant l'Empire romain : il désigne un agencement particulier du discours. Exemple : « epistolas texere = composer des épîtres » - Cicéron (ier siècle av. J.-C.)4 ou plus nettement chez Quintilien (ier siècle apr. J.-C.) : « verba in textu jungantur = l'agencement des mots dans la phrase »5.

Les formes anciennes du Moyen Âge désignent au xiie siècle le volume qui contient le texte sacré des Évangiles, puis au xiiie siècle, le texte original d'un livre saint ou des propos de quelqu'un. Au xviie siècle le mot s’applique au passage d'un ouvrage pris comme référence et au début du xixe siècle le mot texte a son sens général d'« écrit »6.`
            }
          </p>
        </div>


      </div>
    </div>
  )
}

export default ViewTemoignagePage;