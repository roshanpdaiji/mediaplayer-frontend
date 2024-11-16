import {commonAPI} from "./commonAPI"
import {server_url} from "./server_url"



//UPLOADING SECTION


//1.addVideo API

export const uploadVideoAPI=async(video)=>{
    return await commonAPI("POST",`${server_url}/allVideos`,video)
}


//2.getVideo API

export const getAllVideosAPI=async()=>{
    return await commonAPI("GET",`${server_url}/allVideos`,"")
}

//3.getAvideo

export const getAVideoAPI=async(id)=>{
    return await commonAPI("GET",`${server_url}/allVideos/${id}`,"")
}

//4.deleteVideo

export const deleteVideoAPI=async(id)=>{
    return await commonAPI("DELETE",`${server_url}/allVideos/${id}`,{})
}



//HISTORY SECTION



//1.addHistory API

export const addHistoryAPI=async(video)=>{
    return await commonAPI("POST",`${server_url}/history`,video)
}


//2.getHistory

export const getHistoryAPI=async()=>{
    return await commonAPI("GET",`${server_url}/history`,"")
}

//3.deleteVideo

export const deleteHistoryAPI = async(id)=>{
    return await commonAPI("DELETE",`${server_url}/history/${id}`,{})
}




//Category Section


//1.addCategoryAPI

export const addCategoryAPI=async(category)=>{
    return await commonAPI("POST",`${server_url}/category`,category)
}

//2.getCategoryAPI

export const getCategoryAPI=async()=>{
    return await commonAPI("GET",`${server_url}/category`,"")
}

//3.deleteCategoyAPI

export const deleteCategoryAPI=async(id)=>{
    return await commonAPI("DELETE",`${server_url}/category/${id}`,{})
}

//4.updateCategoryAPI

// export const updateCategoryAPI=async(id,categoryDetails)=>{
//     return await commonAPI("PUT",`${server_url}/category/${id}`,categoryDetails)
// }

export const updateCategoryAPI = (id, categoryDetails) => 
    commonAPI("PUT", `${server_url}/category/${id}`, categoryDetails);
  