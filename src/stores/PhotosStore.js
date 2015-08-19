import alt from '../alt';
import _ from 'underscore';
import PhotosActions from '../actions/PhotosActions';

class PhotosStore {
    constructor() {
        this.state = {
            photos: []
        };

        this.bindListeners({
            handleSelectPhoto: PhotosActions.SELECT_PHOTO,
            handleFetchPhotos: PhotosActions.FETCH_PHOTOS
        });
    }

    handleFetchPhotos () {
        var photos = sessionStorage.getItem('search') ?
            JSON.parse(sessionStorage.getItem('search')) :
            window.photos;

        sessionStorage.setItem('search', JSON.stringify(photos));

        this.setState({
            photos: photos
        });
    }

    handleSelectPhoto (photo) {
        var photos = JSON.parse(sessionStorage.getItem('search'));
        var item = _.findWhere(photos, { link: photo.link });        
        item.selected = !item.selected;

        sessionStorage.setItem('search', JSON.stringify(photos));

        this.setState({
            photos: photos
        });
    }
}

module.exports = alt.createStore(PhotosStore, 'PhotosStore');
