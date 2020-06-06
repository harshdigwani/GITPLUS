const SEARCH_ENDPOINT = "https://api.github.com/search/users?q=";
const USER_ENDPOINT = "https://api.github.com/users/"

export const searchUser = async (username) => {
    let data = await fetch(`${SEARCH_ENDPOINT}${username}`);
    data = await data.json()
    return data;
}


export const getUser = async (username) => {
    let data = await fetch(`${USER_ENDPOINT}${username}`, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    data = await data.json();
    console.log(data);
    return data;
}


export const getUserRepos = async (username) => {
    let data = await fetch(`${USER_ENDPOINT}${username}/repos`, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    data = await data.json();
    console.log(data);
    return data;
}
