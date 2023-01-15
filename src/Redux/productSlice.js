import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  productlist: [  {
    id:Math.random(),
    img:"https://www.kbhome.com/globalassets/images/community-images/texas/austin---san-marcos/eastvillage/a-elevations/2655_c_sch11-t2-s2-b2-_ev-_1200.jpg",
    title:"Plan 2502 Modeled",
    description:"Salerno - Classic Collection Round Rock, TX",
    price:" $452,995",
    bath:"2",
    bed:"4",
    sqrt:"2,502",
},
{
  id:Math.random(),
    img:"https://www.kbhome.com/globalassets/images/community-images/texas/austin---san-marcos/salerno/a-elevations/2655-a_sch7-_cedarlap_1200.jpg",
    title:"Plan 2655",
    description:"Salerno - Classic Collection Round Rock, TX",
    price:"$464,995",
    bath:"3",
    bed:"5",
    sqrt:"2,655",
},
{
  id:Math.random(),
    img:"https://www.kbhome.com/globalassets/images/community-images/texas/austin---san-marcos/salerno/photography/salerno-2502-ext_rev-_1200.jpg",
    title:"Plan 2502 Modeled",
    description:"Salerno - Classic Collection Round Rock, TX",
    price:"$452,995",
    bath:"2",
    bed:"3",
    sqrt:"2,655",
},
{
  id:Math.random(),
  img:"https://www.kbhome.com/globalassets/images/community-images/texas/austin---san-marcos/eastvillage/a-elevations/1491_a_sch1-t2-s2-b2-_ev-_1200.jpg",
  title:"Plan 1491",
  description:"EastVillage - Classic Collection Manor, TX",
  price:"$425,995",
  bath:"2",
  bed:"3",
  sqrt:"1,491",
},
{
  id:Math.random(),
  img:"https://www.kbhome.com/globalassets/images/community-images/texas/austin---san-marcos/eastvillage/photography/eastvillage-2502-ext_rev-_1200.jpg",
  title:"Plan 2502 Modeled",
  description:"EastVillage - Classic Collection Manor, TX",
  price:" $493,995",
  bath:"4",
  bed:"6",
  sqrt:"2,502",
},
{
  id:Math.random(),
  img:"https://www.kbhome.com/globalassets/images/community-images/texas/austin---san-marcos/eastvillage/photography/eastvillage-2382-ext_rev-_1200.jpg",
  title:"Plan 2382 Modeled",
  description:"EastVillage - Classic Collection Manor, TX",
  price:"$489,995",
  bath:"2",
  bed:"4",
  sqrt:"2,382",
},
    
{
  id:Math.random(),
  img:"https://www.kbhome.com/globalassets/images/community-images/texas/austin---san-marcos/eastvillage/a-elevations/2797_c_sch3-t2-s2-b2-_ev-_1200.jpg",
  title:"Plan 2797",
  description:"EastVillage - Classic Collection Manor, TX",
  price:"$507,995",
  bath:"4",
  bed:"6",
  sqrt:"2,797",
},

{
  id:Math.random(),
  img:"https://www.kbhome.com/globalassets/images/community-images/texas/austin---san-marcos/eastvillage/a-elevations/2881_c_sch7-t1-s1-b1-_ev-_1200.jpg",
  title:"Plan 2881",
  description:"EastVillage - Classic Collection Manor, TX",
  price:" $512,995",
  bath:"3",
  bed:"5",
  sqrt:"2,881",
},
{
  id:Math.random(),
  img:"https://www.kbhome.com/globalassets/images/community-images/texas/austin---san-marcos/eastvillage/a-elevations/2469_a_sch1-t2-s2-b2-_ev-_1200.jpg",
  title:"Plan 2469",
  description:"EastVillage - Classic Collection Manor, TX",
  price:" $487,995",
  bath:"3",
  bed:"5",
  sqrt:"2,469",
},
{
  id:Math.random(),
  img:"https://www.kbhome.com/globalassets/images/community-images/florida/jacksonville-area/anabelle-island/photography/kbjax_annabelleisland_1541-exterior_6648_rev-1.jpg",
  title:"Plan 1541 Modeled",
  description:"Anabelle Island Green Cove Springs, FL",
  price:"$279,990",
  bath:"2",
  bed:"3",
  sqrt:"1,541",
},
{
  id:Math.random(),
  img:"https://www.kbhome.com/globalassets/images/community-images/florida/jacksonville-area/anabelle-island/1286_m_sch5.jpg",
  title:"Plan 1286",
  description:"Anabelle Island Green Cove Springs, FL",
  price:"$267,990",
  bath:"2",
  bed:"3",
  sqrt:"1,286",
},
{
  id:Math.random(),
  img:"https://www.kbhome.com/globalassets/images/community-images/florida/jacksonville-area/anabelle-island/1933_l-sch7-1.jpg",
  title:"Plan 1933",
  description:"Anabelle Island Green Cove Springs, FL",
  price:"$312,990",
  bath:"2",
  bed:"3",
  sqrt:"1,933",
},
{
  id:Math.random(),
  img:"https://www.kbhome.com/globalassets/images/community-images/florida/jacksonville-area/anabelle-island/2716-l20sch1.jpg",
  title:"Plan 2716",
  description:"Anabelle Island Green Cove Springs, FL",
  price:" $370,990",
  bath:"3",
  bed:"4",
  sqrt:"2,716",
},
{
  id:Math.random(),
  img:"https://www.kbhome.com/globalassets/images/community-images/florida/jacksonville-area/anabelle-island/photography/kbjax_annabelleisland_2003-exterior_6710_rev.jpg",
  title:"Plan 2003 Modeled",
  description:"Anabelle Island Green Cove Springs, FL",
  price:"$324,990",
  bath:"2",
  bed:"4",
  sqrt:"2,003",
},
{
  id:Math.random(),
  img:"https://www.kbhome.com/globalassets/images/community-images/florida/jacksonville-area/anabelle-island/photography/kbjax_annabelleisland_2003-exterior_6710_rev.jpg",
  title:"Plan 2003 Modeled",
  description:"Anabelle Island Green Cove Springs, FL",
  price:"$324,990",
  bath:"2",
  bed:"4",
  sqrt:"2,003",
},




],
}

export const productslice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addproduct: (state, action) => {
      
      state.productlist.push(action.payload);
    },
    deleteproduct: (state, action) => {
      state.productlist=state.productlist.filter((el)=>el.id !== action.payload.id)
    },
    editproduct: (state, action) => {
      state.productlistr
    
    },
  },
})

// Action creators are generated for each case reducer function
export const { addproduct, deleteproduct, editproduct } = productslice.actions

export default productslice.reducer