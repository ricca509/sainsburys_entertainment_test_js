import React from 'react';
import PhotosActions from '../../actions/PhotosActions';
import classNames from 'classnames';

class Photo extends React.Component {
    constructor (props) {
        super(props);
        this.state = {};
    }
    render () {
        var photoClassNames = classNames({
            'photo': true,
            'selected': this.props.photo.selected
        });

        return (
            <img 
                className={photoClassNames}
                onClick={this.handleClick.bind(this)}
                src={this.props.photo.media.m} />
        );
    }
    handleClick () {
        PhotosActions.selectPhoto(this.props.photo);
    }
}

Photo.propTypes = {};
Photo.defaultProps = {};

export default Photo;
