import Link from "next/link";
import posts from '../../public/data/feed.json';
import Image from "next/image";

export default function FeedPage() {
    return (
        <div>
            <h1>Лента</h1>
            {posts.map(post => (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.description}</p>
                    <p>{post.createdAt}</p>
                    <p>{post.number_of_likes}</p>
                    <p>{post.number_of_views}</p>
                    <p>{post.author_name}</p>
                    <Image src={`/assets/blog/${post.img}`} alt={post.title} width={150} height={150} />
                </div>
            ))}
            <Link href="/users">Перейти к пользователям</Link>
        </div>
    );
}