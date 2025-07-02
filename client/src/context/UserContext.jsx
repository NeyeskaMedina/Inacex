import { createContext } from 'react'
import { useRef } from 'react';
// import { getData } from "../helpers/getData";

export const UserContext = createContext({})

export const ContextProvider = ( {children} ) => {
        
        const cabinaRef = useRef(null);
        // const [ carro, setCarro ] = useState([])
        
        // useEffect(() => {
        //     const updateData = async () => {
        //       try {
        //         const response = await getData();
        //         const dataWithId = response.response.product.map((item, index) => ({
        //           ...item,
        //           id: item.id || index,
        //         }));
        //         setRows(dataWithId);
        //         setLoading(false);
        //       } catch (error) {
        //         console.error('Error al obtener los datos', error);
        //         setLoading(false);
        //       }
        //     };
        //     if(updateData){
        //       updateData();
        //     }
        // }, []);
       
        
        const sharedContext = {
            cabinaRef,
            // setDataPizzas,
            // carro,
            // setCarro,
            // total,
            // setTotal
        }
    return (
        <UserContext.Provider value={sharedContext}>
            {children}
        </UserContext.Provider>
    )
}
