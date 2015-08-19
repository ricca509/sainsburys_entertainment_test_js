import alt from '../../alt';
import wrappedStore from '../PhotosStore';
import PhotosActions from '../../actions/PhotosActions';

describe('The PhotosStore', function () {
    describe('when handles the SELECT_PHOTO action', () => {
        beforeEach(() => {
            spyOn(PhotosActions, 'fetchPhotos');
        });

        describe('for a non selected photo', () => {
            beforeEach(() => {
                var JSON = '[{"link":"aa","media":{"m":"wq"}},{"link":"bb","media":{"m":"po"}}]';
                sessionStorage.setItem('search', JSON);
            });

            it('should select the photo', () => {
                var data = { link: 'aa' };
                var action = PhotosActions.SELECT_PHOTO;

                alt.dispatcher.dispatch({action, data});

                expect(wrappedStore.getState().photos[0].selected).toBe(true);
            });
        });

        describe('for a selected photo', () => {
            beforeEach(() => {
                var JSON = '[{"link":"aa","media":{"m":"wq"},"selected":true},{"link":"bb","media":{"m":"po"}}]';
                sessionStorage.setItem('search', JSON);
            });

            it('should deselect the photo', () => {
                var data = { link: 'aa' };
                var action = PhotosActions.SELECT_PHOTO;

                alt.dispatcher.dispatch({action, data});

                expect(wrappedStore.getState().photos[0].selected).toBe(false);
            });
        });
    });        
});
