import Link from "next/link";
import {useState} from "react";
import users from '../../public/data/users.json';

export default function UsersPage() {
    const [search, setSearch] = useState("");

    const filteredUsers = search.trim()
        ? users.filter(user => user.name.toLowerCase().includes(search.toLowerCase()))
        : users;

    return (
        <div>
            <h1>Пользователи</h1>
            <input
                type="text"
                placeholder="Фильтр по имени"
                value={search}
                onChange={e => setSearch(e.target.value)}
            />
            {filteredUsers.map(user => (
                <div key={user.id}>
                    <Link href={`/users/${user.id}`}>{user.name}</Link>
                </div>
            ))}
        </div>
    );
}
