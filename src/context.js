import React, { useContext,useEffect, useState } from "react"

export const API_UEL = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`

const AppContext = React.createContext()


const AppProvider = ({children}) =>{

  const [ isLoading , setIsLoading] = useState(true)
  const [ movie , setMovie] = useState([])
  const [ isError , setIsError] = useState({ show:"false" , msg:""})
  const [ query , setQuery] = useState("love")

    const  getMovies = async(url) =>{
        setIsLoading(true)
     try {
        const res = await fetch(url)
        const data = await res.json()
        console.log(data);
        if(data.Response === "True"){
            setIsLoading(false)
            setMovie(data.Search)

        }else{
            setIsError({
                show:false,
                msg:""
            })
        }
        
     } catch (error) {
        console.log(error);
     }
    }

 
    useEffect(() => {
     let TimeOut =    setTimeout(() => {
            getMovies(`${API_UEL}&s=${query}`)
        }, 500);
       
        return () => clearTimeout(TimeOut)
     
    }, [query])


    return <AppContext.Provider value={{ isLoading ,isError,movie,query , setQuery }}>{children}</AppContext.Provider>
}


const useGlobalContext = () =>{
    return useContext(AppContext)
}

export { AppContext , AppProvider,useGlobalContext}