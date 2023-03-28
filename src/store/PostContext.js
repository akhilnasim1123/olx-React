import { createContext,useState } from "react";
export const PostDetailsContext = createContext(null)
function Post ({children}){
    const [postDetails,setpostDetails]=useState()
    return(
        <PostDetailsContext.Provider value={{postDetails,setpostDetails}}>
            {children}
        </PostDetailsContext.Provider>
    )
}
export default Post