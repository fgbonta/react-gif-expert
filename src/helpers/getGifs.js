export const getGifs = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=07yugR7qqyLHpAcR6uj7lRamVCh2JON0&q=${category}&limit=10`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    
    let gifs = [];
    gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium,
        }
    })

    console.log(gifs);
    return gifs;

}