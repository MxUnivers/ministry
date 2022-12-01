import React, { useState } from 'react'
import ListDonAdmin from '../../../components/admin/activites/ListDonAdmin';
import ListEventAdmin from '../../../components/admin/activites/ListEventAdmin';
import ListProgramAdmin from '../../../components/admin/activites/ListProgramAdmin';
import ListSchoolBibleAdmin from '../../../components/admin/activites/ListSchoolAdmin';

const ListActivityAdmin = () => {
    const [btn1, setbtn1] = useState("active");
    const [btn2, setbtn2] = useState("");
    const [btn3, setbtn3] = useState("");
    const [btn4, setbtn4] = useState("");

    const  showBtn1 = ()=>{setbtn1("active"); setbtn2(""); setbtn3("");setbtn4("")}  
    const  showBtn2 = ()=>{setbtn1(""); setbtn2("active"); setbtn3("");setbtn4("")}  
    const  showBtn3 = ()=>{setbtn1(""); setbtn2(""); setbtn3("active");setbtn4("")}  
    const  showBtn4 = ()=>{setbtn1(""); setbtn2(""); setbtn3("");setbtn4("active")}  
  return (
    <div>
        {/* Liste des boutons */}
        <div class="container-fluid w-full flex flex-col">
            <div class="w-full flex justify-start flex-wrap space-x-3">
                <div class="m-1">
                    <button type="button" 
                    onClick={showBtn1} 
                    class={`btn btn-outline-primary ${btn1} active:bg-gray-300 py-1 px-3 rounded-2xl text-sm `}>
                      evenements
                    </button>
                </div>
                <div class="m-1">
                    <button type="button" 
                    onClick={showBtn2} 
                    class={`btn btn-outline-primary ${btn2} active:bg-gray-300 py-1 px-3 rounded-2xl text-sm `}>
                        dons
                    </button>
                </div>
                <div class="m-1">
                    <button type="button" 
                    onClick={showBtn3} 
                    class={`btn btn-outline-primary ${btn3} active:bg-gray-300 py-1 px-3 rounded-2xl  text-sm`}>
                        école biblique
                    </button>
                </div>
                <div class="m-1">
                    <button type="button" 
                    onClick={showBtn4} 
                    class={`btn btn-outline-primary ${btn4} active:bg-gray-300 py-1 px-3 rounded-2xl  text-sm`}>
                        programmes
                    </button>
                </div>
            </div>
        </div>
        {/*  primary*/}
        <div class="w-full">
            {/* Evenent */}
            {/* School */}
            {/* Dons */}
            {
                btn1 == "active"?
                <ListEventAdmin/>
                :null
            }
            {
                btn2 == "active"?
                <ListDonAdmin/>
                :null
            }{
                btn3 == "active"?
                <ListSchoolBibleAdmin/>
                :null
            }
            {
                btn4 == "active"?
                <ListProgramAdmin/>
                :null
            }
        </div>
    </div>
  )
}

export default ListActivityAdmin
