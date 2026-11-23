"use client"; // 서버 컴포넌트에서 클라이언트 컴포넌트로 수정 
import Link from "next/link";
import { useEffect, useState } from "react";
// http://localhost:3000/posts
// 함수 이름은 상관없다. 폴더 명이 루트가 되고, 그 안의 page.tsx 속 함수가 불려나와 페이지를 만든다
export default function Page(){
  // posts : 상자에 든 값 | setPosts : 상자 값이 바꾸는 함수. 이걸로 바꿔야 화면 갱신이 가능
  // useState : 값이 바뀌면 화면을 다시 그려주는, 상자를 만드는 함수
  // ([]) : 처음 값은 빈 배열로 시작 
  // < { id : Number; title:string}[] > : typescript에서 type. 이 상자에 들어갈 수 있는 type를 정한다. 
  const [posts, setPosts] = useState<{ [key: string]: any }[]>([]);

  // 화면이 처음 뜬 다음 할 일 : 가짜 데이터 넣기 
  useEffect(() => {
    fetch("http://localhost:8080/api/v1/posts")
      .then((res) => res.json())
      .then(setPosts);
  }, []);

  return (
    <>
      <h1>글 목록</h1>

      {posts.length == 0 && <div>로딩중...</div>}

      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href = {`/posts/${post.id}`}> {post.title}</Link></li>
        ))}
      </ul>
    </>
  );

}