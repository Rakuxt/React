

// const getImagenPromesa = () => new Promise( resolve => resolve('http://asdasdasdasg.com'));
// getImagenPromesa().then( console.log );

const getImagen = async() => {

    try {

        const apiKey = '8UjdeZp7okw3qwPKWMdt0O0JXkE6VRN5';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json();
        const { url } = data.images.original;
    
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);

    } catch (error) {
        // Manejo del error
        console.error( error );  
    }
}

getImagen();

