    import {createSlice} from '@reduxjs/toolkit'


const initialState = {
    username:'',
    name:'',
    email:'',
    image:'',
    is_staff:'',
    is_employe:'',
    is_boss:'',
    address:'',
    location:'',
    province:'',
    phone:'',
}

export const usersGetSlice = createSlice({
    name:'getUsers',
    initialState : initialState,
    reducers:{
        getUsers :(state,action)=>{
            state.username = action.payload.username
            state.name = action.payload.name
            state.email = action.payload.email
            state.image = action.payload.image
            state.is_staff = action.payload.is_staff
            state.is_employe = action.payload.is_employe
            state.is_boss = action.payload.is_boss
            state.address = action.payload.address
            state.location = action.payload.location
            state.province = action.payload.province
            state.phone = action.payload.phone
        }
    }
})


export const {getUsers} = usersGetSlice.actions
export default usersGetSlice.reducer