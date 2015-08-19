import React from 'react/addons';
import Photos from '../Photos.react.js';
import Photo from '../../Photo/Photo.react.js';

const TestUtils = React.addons.TestUtils;

describe('The Photos component', function () {
    beforeEach(() => {
        spyOn(Photo.prototype, 'render').and.returnValue(React.createElement('div', {className: 'Photo'}, 'Photo'));

        let photos = [ {}, {}, {} ];

        this.component = TestUtils.renderIntoDocument(<Photos photos={photos} />);
    });

    it('should render a list of Photos', () => {
        let photos = TestUtils.scryRenderedDOMComponentsWithClass(this.component, 'Photo');

        expect(photos.length).toBe(3);
    });
});
