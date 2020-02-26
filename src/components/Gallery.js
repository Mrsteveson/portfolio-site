import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Gallery extends Component {
    renderGallery (images) {
        if (!images) return;

        const gallery = images.map((obj, i) => {
            console.log(obj)
            return (
                <article className="6u 12u$(xsmall) work-item" key={i}>
                    <a href={obj.url} className="image fit thumb">
                        <img src={obj.thumbnail} alt="individual project" className="project"/>
                    </a>
                    <div className="title">
                        <h3>{obj.caption}</h3>
                        <div className="links">
                            <a href={obj.url} alt="project url"className="icon fa-link"></a>
                            <a href={obj.repo} alt="project repo"className="icon fa-github"></a>
                        </div>      
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