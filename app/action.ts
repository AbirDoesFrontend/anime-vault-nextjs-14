"use server";

export const fetchAnime = async (page : number) => {

    const url = `https://shikimori.one/api/animes?page=${page}&limit=8&order=popularity`;

    const response = await fetch(url);
    const data = await response.json();

    return data;
}