"use client";

import Link from "next/link";
import { useState } from "react";
import users from "../../../public/data/users.json";

export default function UsersPage() {
    const [search, setSearch] = useState("");

    const filteredUsers = search.trim()
        ? users.filter((user) =>
            user.name.toLowerCase().includes(search.toLowerCase())
        )
        : users;

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
            <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Пользователи</h1>

            <input
                type="text"
                placeholder="🔍 Фильтр по имени"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-6"
            />

            <div className="space-y-4">
                {filteredUsers.length > 0 ? (
                    filteredUsers.map((user) => (
                        <div
                            key={user.id}
                            className="p-4 bg-gray-100 rounded-lg shadow-sm hover:bg-gray-200 transition"
                        >
                            <Link
                                href={`/users/${user.id}`}
                                className="text-lg font-semibold text-blue-600 hover:underline"
                            >
                                {user.name}
                            </Link>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-500">Пользователи не найдены</p>
                )}
            </div>

            <div className="text-center mt-6">
                <Link href="/feed" className="text-blue-500 hover:underline">Перейти к новостям</Link>
            </div>
        </div>
    );
}
