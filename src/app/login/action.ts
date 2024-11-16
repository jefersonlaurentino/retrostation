// import { NextResponse } from "next/server";

// export function cookiesLogin() {
//     const cookiesDate = NextResponse.next();
//     cookiesDate.cookies.set('authToken', '')
// }

// pages/api/login.ts

// import { NextResponse } from "next/server";
// import { NextApiRequest, NextApiResponse } from "next";

// export default function handler(req: NextApiRequest, res: NextApiResponse) {
//     // Simula um login bem-sucedido
//     const { username, password } = req.body;

//     if (username === "admin" && password === "1234") {
//         // Define o cookie authToken
//         res.setHeader("Set-Cookie", `authToken=meu-token-seguro; Path=/; HttpOnly; Secure; SameSite=Strict`);
//         return res.status(200).json({ message: "Login bem-sucedido!" });
//     }

//     return res.status(401).json({ message: "Credenciais inválidas!" });
// }


export default function handler() {
    // Simula um login bem-sucedido
    const authToken = "meu-token-seguro"; // O token gerado pelo servidor
    document.cookie = `authToken=${authToken}; path=/; Secure; SameSite=Strict`;
}

export function logout() {
    document.cookie = "authToken=; path=/; Max-Age=0";
}