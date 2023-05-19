import { createSlice } from '@reduxjs/toolkit'


const initialState ={
    name:'',
    cuil:'',
    cuit:'',
    address:'',
    image:'',
    phone:'',
}

export const companySlice = createSlice({
    name: 'company',
    initialState: initialState,
    reducers:{
        setInformationCompany : (state,action)=>{
            state.name = action.payload.name
            state.cuil = action.payload.cuil
            state.cuit = action.payload.cuit
            state.address = action.payload.address
            state.image = action.payload.image
            state.phone   = action.payload.phone
        }
    }
})


export const {setInformationCompany} = companySlice.actions
export default companySlice.reducer