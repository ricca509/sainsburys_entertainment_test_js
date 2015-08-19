import React from 'react';
import Photos from '../Photos/Photos.react.js';
import PhotosStore from '../../stores/PhotosStore';
import PhotosActions from '../../actions/PhotosActions';

class App extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            photos: []
        };
    }
    componentDidMount () {
        PhotosStore.listen(this.onChange.bind(this));

        PhotosActions.fetchPhotos();
    }

    componentWillUnmount() {
        PhotosStore.unlisten(this.onChange.bind(this));
    }

    render () {
        return (
            <div className='app'>
                <Photos photos={this.state.photos} />
            </div>
        );
    }
    onChange (state) {
        this.setState(state);
    }
}

App.propTypes = {};
App.defaultProps = {};

export default App;
