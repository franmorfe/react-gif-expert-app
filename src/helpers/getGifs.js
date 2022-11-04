
export const getGifs = async( category ) => {

  const url = `https://api.giphy.com/v1/gifs/search?api_key=YXitltPX2QSXSUL39VIGooCuiQg66FGQ&q=${ category }&limit=10`;
  const resp = await fetch( url );
  const { data = [] } = await resp.json();

  const images = data.map( img => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url
  }))

  return images;
}