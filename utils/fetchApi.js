import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key':'4251cd4ef0msh3a1c4df32bd0712p1cf69fjsn677a0b061951' ,
    },
  });
    
  return data;
}