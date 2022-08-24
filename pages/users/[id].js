import { getUserDetail, getUsers } from "../../api/user";
import { useDispatch, useSelector, useStore } from "react-redux";
import { selectUserList, selectVal } from '../../store/userSlice';
import { useEffect } from "react";
import { state } from "../../store";


export default function UserDetail({ user }) {
    const users = useSelector(selectUserList);
    const mergeUsers = [...users, {id: 100, name: 'user-100'}]
    const hasUsers = ()=>{
        return users.length> 0
    }
    if(!users.length){
        return (
            <div>No users found</div>
        )
    }
    return (
        <>
            <h3>user detail:</h3>
            <div>{user.id}, {user.name}</div>

            {
              hasUsers() &&  mergeUsers.map((e, i) => {
                    return (
                        <div key={i} >
                            <div>
                                <span>ID: {e.id}</span>
                                <span>Name: {e.name}</span>
                            </div>

                        </div>
                    )
                })
            }

        </>
    )
}


export async function getStaticProps({ params }) {

    const user = await getUserDetail(params.id);
    return { props: { user } }
}

export async function getStaticPaths() {
    // const users = await getUsers();
    const users1 = state.users.listUsers;
    setTimeout(()=>{
        console.log(users1)
    }, 1)
    return {
        paths: users1.map(e => `/users/${e.id}`),
        fallback: true,
    }
}
