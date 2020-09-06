
import React, { useEffect, useState } from 'react';

const Photos = () => {
    const [photos, setPhotos] = useState([]);
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/photos/1`;
        fetch(url)
            .then(res => res.json())
            .then(data => setPhotos(data));
    }, [])
    return (
        <div>
            <img src={photos.thumbnailUrl} alt="" />
        </div>
    );
};

export default Photos;