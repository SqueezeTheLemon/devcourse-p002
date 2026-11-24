const NEXT_PUBLIC_API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

// 매개변수 url을 받아
export const apiFetch = (url : string, options?:RequestInit) =>{
    // 데이터를 더 받아올 수 있게 함
    if(options?.body){ 
        const headers = new Headers(options?.headers || {});

        if (!headers.has("Content-Type")) {
        headers.set("Content-Type", "application/json; charset=utf-8");
        }

        options.headers = headers;
    }

    return fetch(`${NEXT_PUBLIC_API_BASE_URL}${url}`, options) // 브라우저 base 주소에 해당 url을 붙인다
    .then((res) => res.json()); // 응답 본문을 json 객체로 변환, promise를 돌려준다. 
}