import React from 'react';
import Photo from '../Photo/Photo.react.js';

class Photos extends React.Component {
    constructor (props) {
        super(props);
        this.state = {};
    }
    getPhotoComponents () {
        return (this.props.photos.map((photo, key) => {
            return (
                <Photo key={key} photo={photo} />
            );
        }));
    }
    render () {
        return (
            <div className="photos">
                {this.getPhotoComponents()}
            </div>
        );
    }
}

Photos.propTypes = {
    photos: React.PropTypes.array.isRequired
};
Photos.defaultProps = {
    photos: []
};

export default Photos;
