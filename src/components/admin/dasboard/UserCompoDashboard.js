import React from 'react'

const UserCompoDashboard = () => {
    const bgImg = "";
    const items = [1, 1, 1, 1,1,1,1,1]
    return (
        <div class="w-full  rounded-lg bg-cyan-600 px-2 py-2 h-[400px] overflow-y-scroll ">
            <div class="w-full flex space-x-2">
                <div><img src={bgImg} /></div>
                <div>
                    <h1 class="text-xl">utlisateurs</h1>
                </div>
            </div>
            <div class="w-full flex space-x-2">
                <div class="w-full">
                    <div class="w-full bg-white py-4 md:py-7 px-4 md:px-8 xl:px-10">
                        {/* <div class="sm:flex items-center justify-between">
                            <div class="flex items-center">
                                <a class="rounded-full focus:outline-none focus:ring-2  focus:bg-indigo-50 focus:ring-indigo-800" href=" javascript:void(0)">
                                    <div class="py-2 px-8 bg-indigo-100 text-indigo-700 rounded-full">
                                        <p>All</p>
                                    </div>
                                </a>
                                <a class="rounded-full focus:outline-none focus:ring-2 focus:bg-indigo-50 focus:ring-indigo-800 ml-4 sm:ml-8" href="javascript:void(0)">
                                    <div class="py-2 px-8 text-gray-600 hover:text-indigo-700 hover:bg-indigo-100 rounded-full ">
                                        <p>Done</p>
                                    </div>
                                </a>
                                <a class="rounded-full focus:outline-none focus:ring-2 focus:bg-indigo-50 focus:ring-indigo-800 ml-4 sm:ml-8" href="javascript:void(0)">
                                    <div class="py-2 px-8 text-gray-600 hover:text-indigo-700 hover:bg-indigo-100 rounded-full ">
                                        <p>Pending</p>
                                    </div>
                                </a>
                            </div>
                            <button onclick="popuphandler(true)" class="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 mt-4 sm:mt-0 inline-flex items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded">
                                <p class="text-sm font-medium leading-none text-white">Add Task</p>
                            </button>
                        </div> */}
                        <div class="w-full mt-2 overflow-x-auto">
                            <table class="w-full whitespace-nowrap">
                                <tbody>
                                    {
                                        items.map(() => {
                                            return (
                                                <tr tabindex="0" class="w-full focus:outline-none my-2 h-16 border border-gray-100 rounded">
                                                    <td>
                                                        id
                                                    </td>
                                                    <td class="">
                                                        nom
                                                    </td>
                                                    <td class="pl-4">
                                                        email
                                                    </td>
                                                    <td class="pl-4">
                                                        numéro
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default UserCompoDashboard;