import React from 'react/addons';
import Photo from '../Photo.react.js';
import PhotosActions from '../../../actions/PhotosActions';

const TestUtils = React.addons.TestUtils;

describe('The Photo component', function () {
    describe('when renders a selected photo', function () {
        beforeEach(() => {
            var photo = {
                'title': 'P8050161',
                'link': 'https://www.flickr.com/photos/mundodagente/20083205174/',
                'media': {'m':'https://farm6.staticflickr.com/5675/20083205174_83f6c459a2_m.jpg'},
                'date_taken': '2015-08-05T19:44:48-08:00',
                'description': 'ss',
                'published': '2015-08-19T13:19:19Z',
                'author': 'nobody@flickr.com (Creche Mundo da Gente)',
                'author_id': '68989132@N00',
                'selected': true
            };

            this.component = TestUtils.renderIntoDocument(<Photo photo={photo} />);
        });
        it('should add the relevant class', () => {
            expect(React.findDOMNode(this.component).className).toBe('photo selected');
        });
    });

    describe('when renders a NON selected photo', function () {
        beforeEach(() => {
            var photo = {
                'title': 'P8050161',
                'link': 'https://www.flickr.com/photos/mundodagente/20083205174/',
                'media': {'m':'http://testurl.com/'},
                'date_taken': '2015-08-05T19:44:48-08:00',
                'description': 'ss',
                'published': '2015-08-19T13:19:19Z',
                'author': 'nobody@flickr.com (Creche Mundo da Gente)',
                'author_id': '68989132@N00'
            };

            this.component = TestUtils.renderIntoDocument(<Photo photo={photo} />);
        });

        it('should render the right component', () => {
            expect(React.findDOMNode(this.component).src).toBe('http://testurl.com/');

            expect(React.findDOMNode(this.component).className).toBe('photo');
        });
    });

    describe('when the image is clicked', function () {
        beforeEach(() => {
            this.photo = {
                'title': 'P8050161',
                'link': 'https://www.flickr.com/photos/mundodagente/20083205174/',
                'media': {'m':'http://testurl.com/'},
                'date_taken': '2015-08-05T19:44:48-08:00',
                'description': 'ss',
                'published': '2015-08-19T13:19:19Z',
                'author': 'nobody@flickr.com (Creche Mundo da Gente)',
                'author_id': '68989132@N00'
            };

            spyOn(PhotosActions, 'selectPhoto');

            this.component = TestUtils.renderIntoDocument(<Photo photo={this.photo} />);
        });

        it('should dispatch the right action', () => {
            var node = React.findDOMNode(this.component);
            React.addons.TestUtils.Simulate.click(node);

            expect(PhotosActions.selectPhoto).toHaveBeenCalledWith(this.photo);
        });
    });
});
