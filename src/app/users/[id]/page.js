"use client";

import Link from "next/link";
import Image from "next/image";
import users from "../../../../public/data/users.json";
import posts from "../../../../public/data/feed.json";
import { useParams } from "next/navigation";

export default function ProfilePage() {
    const { id } = useParams();
    const user = users.find((user) => user.id.toString() === id);

    if (!user) return <p className="text-center text-red-500 text-xl">Пользователь не найден</p>;

    const userPosts = posts.filter((post) => post.author_name === user.name);

    return (
        <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg mt-10">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Профиль пользователя</h1>

            <div className="flex gap-6">
                <Image
                    src={`/assets/users/${user.img}`}
                    alt={user.name}
                    width={150}
                    height={400}
                    className="rounded-lg shadow-md"
                />

                <div className="flex flex-col justify-between">
                    <p className="text-lg"><strong>Имя:</strong> {user.name}</p>
                    <p className="text-lg"><strong>Email:</strong> {user.email}</p>
                    <p className="text-lg"><strong>Возраст:</strong> {user.age}</p>
                    <p className="text-lg"><strong>Работа:</strong> {user.job}</p>
                    <p className="text-lg"><strong>Город:</strong> {user.city}</p>
                    <p className="text-lg"><strong>Описание:</strong> {user.description}</p>
                    <p className="text-lg"><strong>Количество постов:</strong> {user.number_of_posts}</p>
                    <p className="text-lg"><strong>Подписан:</strong> {user.followings}</p>
                    <p className="text-lg"><strong>Подписчики:</strong> {user.followers}</p>
                </div>
            </div>

            <div className="mt-10">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Посты {user.name}</h2>

                {userPosts.length > 0 ? (
                    <div className="space-y-4">
                        {userPosts.map((post) => (
                            <div key={post.id} className="p-4 bg-gray-100 rounded-lg shadow-md hover:bg-gray-200 transition">
                                <h3 className="text-lg font-semibold">{post.title}</h3>
                                <p className="text-gray-600">{post.description}</p>
                                <p className="text-sm text-gray-500">Дата: {post.createdAt}</p>
                                <p className="text-sm text-gray-500">Лайков: {post.number_of_likes} | Просмотров: {post.number_of_views}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-500">У пользователя пока нет постов.</p>
                )}
            </div>

            <Link href="/users" className="inline-block mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600">
                Назад к пользователям
            </Link>
        </div>
    );
}
