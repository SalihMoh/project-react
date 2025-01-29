function importAll(r){
    let images = {};
    r.keys().forEach((key) => {
        images[key.replace('./', '')] = r(key);
    });
    return images;

}

const images = importAll(require.context('./images', false, /\.(png|jpe|png?g|gif)$/));

export default images;

