import axios from "axios";

export const moviesApis = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNjRkMjlmNzFlMWZlMjgzY2MzYTRiNDA4ZWU5ZDk5ZSIsIm5iZiI6MTc0Mjk5Mzg5MS41NDMsInN1YiI6IjY3ZTNmOWUzN2RiOWU3MGM0N2RjYThjOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qGqTudFxdyMzXtnXmZjJQ39Bbf7lwGWlC4xyhMGsdHs`,
    },
});