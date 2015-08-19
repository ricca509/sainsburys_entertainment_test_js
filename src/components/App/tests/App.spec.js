import React from 'react/addons';
import App from '../App.react.js';
import PhotosActions from '../../../actions/PhotosActions';

const TestUtils = React.addons.TestUtils;

describe('The App component', function () {
    beforeEach(() => {
        spyOn(PhotosActions, 'fetchPhotos');        
        this.component = TestUtils.renderIntoDocument(<App />);
    });

    it('should render the App', () => {
        expect(TestUtils.findRenderedDOMComponentWithClass(this.component, 'app')).toBeDefined();
    });

    it('should render the Photos component', () => {
        expect(TestUtils.findRenderedDOMComponentWithClass(this.component, 'photos')).toBeDefined();
    });
});
