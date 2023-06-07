import axios from "axios";

const country = async (query) =>
    axios.get(`https://newsapi.org/v2/top-headlines?country=${query}&apiKey=d43b77bd276d4b7caa5e4d6f8e630c33`);

    export default{ country};