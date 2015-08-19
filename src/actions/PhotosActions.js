var alt = require('../alt');

class PhotosActions {
    selectPhoto (photo) {    
        this.dispatch(photo);
    }
    fetchPhotos () {
        this.dispatch();
    }
}

module.exports = alt.createActions(PhotosActions);
