import React from 'react';
import Album from './album';
import Masonry from 'react-masonry-component';

class AlbumList extends React.Component{
    render(){
        let albums = [];
        this.props.albumList.forEach((album, index) =>{
            albums.push(<Album title={album['title']} key={index}/>)
        });
        return (
            <div className="row">
                <Masonry
                    elementType={'div'}
                    disableImagesLoaded={false}
                    updateOnEachImageLoad={true}>
                    {albums}
                </Masonry>
            </div>
        )
    }
}

export default AlbumList;
