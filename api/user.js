export async function getUsers(limit, offset){
    return Array(15).fill(1).map((e, i)=>{
        return {
            id: i,
            name: 'user-' + i
        }
    })
}



export async  function getUserDetail(id){
    return {
        id: id,
        name: 'user-'+id
    }
}