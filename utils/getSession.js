
export const getSession = async()=>{
    await new Promise((resolve)=>setTimeout(resolve,1000));

    return{
        username:"wallace",
        email:"wallaceralak@gmail.com",
        role:"admin",
    };
}