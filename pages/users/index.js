import Link from 'next/link';
import { getUsers } from '../../api/user';
import { selectUserList, setUsersState, setVal } from '../../store/userSlice';
import { wrapper } from '../../store';
import { useSelector, useDispatch } from 'react-redux';
import { FirstLayout} from '../../layouts/first';

export default function ListUser() {
    const users = useSelector(selectUserList);
    const dispatch = useDispatch();

    const getNextUsers = async () => {
        const u = Array(15).fill(1).map((e, i) => {
            return {
                id: i + 15,
                name: 'user-' + (i + 15)
            }

        });

        dispatch(setUsersState(u))
    }
    return (
        <FirstLayout>
            <h3>List users:</h3>
            <button onClick={getNextUsers}>next</button>

            {
                users.map((e, i) => {
                    return (
                        <Link key={i} href={{ pathname: '/users/[id]', query: { id: e.id, iid: 'abc' } }} style={{ borderBottom: '1px solid', marginBottom: '5px' }}>
                            <div>
                                <span>ID: {e.id}</span>
                                <span>Name: {e.name}</span>
                            </div>

                        </Link>
                    )
                })
            }

        </FirstLayout>
    )
}

export const getStaticProps = wrapper.getStaticProps(store => async () => {
    const users = await getUsers();
    store.dispatch(setUsersState(users))
    store.dispatch(setVal(100))
    return { props: { users } }
})
