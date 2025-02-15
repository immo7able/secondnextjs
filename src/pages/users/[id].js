import {useRouter} from "next/router";
import Link from "next/link";
import users from '../../../public/data/users.json';
import Image from "next/image";

export default function ProfilePage() {
    const router = useRouter();
    const {id} = router.query;
    const user = users.find((user) => user.id.toString() === id);

    if (!user) return <p>Пользователь не найден</p>;

    return (
        <div>
            <h1>Профиль пользователя</h1>
            <p>Имя: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Возраст: {user.age}</p>
            <p>Работа: {user.job}</p>
            <p>Город: {user.city}</p>
            <p>Описание: {user.description}</p>
            <p>Количество постов: {user.number_of_posts}</p>
            <p>Подписан: {user.followings}</p>
            <p>Подписчики: {user.followers}</p>
            <Image src={`/assets/users/${user.img}`} alt={user.name} width={150} height={150} />
            <Link href="/users">Назад к пользователям</Link>
        </div>
    );
}