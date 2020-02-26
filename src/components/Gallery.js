import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Gallery extends Component {
    constructor () {
        super();

        this.state = {
            lightboxIsOpen: false,
            selectedIndex: 0
        };
        
    }

    renderGallery (images) {
        if (!images) return;

        const gallery = images.map((obj, i) => {
            console.log(obj)
            return (
                <article className="6u 12u$(xsmall) work-item" key={i}>
                    <a
                        className="image fit thumb"
                    >
                        <img src={obj.thumbnail} alt='individual project'/>
                    </a>
                    <div className="caption">
                        <h3>{obj.caption}</h3>
                        <a href={obj.url} className="icon fa-link"></a>
                        <a href={obj.repo} className="icon fa-github"></a>
                    </div>
                    
                    <p>{obj.description}</p>
                </article>
            );
        });

        return (
            <div className="row">
                {gallery}
            </div>
        );
    }
    render () {
        const { images } = this.props;
        return (
            <div>
                {this.renderGallery(images)}
            </div>
        );
    }
}

Gallery.displayName = 'Gallery';
Gallery.propTypes = {
    images: PropTypes.array
};

export default Gallery;