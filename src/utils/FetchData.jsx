export const exerciseOptions = {
  method: 'GET',
  // url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/arm',
  headers: {
    'X-RapidAPI-Key': 'e5385018a3msh48cd8c4394f78aap10256fjsn38d553944d78',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};


export const fetchData = async (url, options) => {
  const response = await fetch(url, options)
  const data = await response.json();

  return data
}