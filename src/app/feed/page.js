import Link from "next/link";
import posts from "../../../public/data/feed.json";
import Image from "next/image";

export default function FeedPage() {
    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6 text-center">Лента</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map(post => (
                    <div key={post.id} className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center">
                        <Image
                            src={`/assets/blog/${post.img}`}
                            alt={post.title}
                            width={300}
                            height={300}
                            className="rounded-md mb-4"
                        />
                        <h2 className="text-xl font-semibold text-center">{post.title}</h2>
                        <p className="text-gray-600 text-sm text-center">{post.description}</p>
                        <div className="flex justify-between w-full mt-3 text-gray-500 text-xs">
                            <span>🕒 {post.createdAt}</span>
                            <span>👍 {post.number_of_likes}</span>
                            <span>👁️ {post.number_of_views}</span>
                        </div>
                        <p className="text-sm font-medium text-gray-700 mt-2">Автор: {post.author_name}</p>
                    </div>
                ))}
            </div>
            <div className="text-center mt-6">
                <Link href="/users" className="text-blue-500 hover:underline">Перейти к пользователям</Link>
            </div>
        </div>
    );
}
