describe('unit test ShowListController', function () {

    var showListController;

    var showService = {
        shows: [{}, {}],
        getShows: function () {
            return {
                then: function (fn) {
                    fn(showService.shows)
                }
            }
        },
        deleteShow: function (id) {
            showService.shows.splice(0, 1);
            return {
                then: function (fn) {
                    fn()
                }
            }
        }
    }

    beforeEach(module('showthequeApp', function ($provide) {
        $provide.value('showService', showService);
    }));

    beforeEach(inject(function ($controller) {
        showListController = $controller('ShowListController')
    }));

    it('shows to be load', function () {
        expect(showListController.shows.length).toBe(showService.shows.length)
    });

    it('shows deleted true', function () {
        spyOn(window, 'confirm').and.callFake(function () {
            return true;
        });

        var initialLength = showService.shows.length - 1;
        showListController.deleteShow(0);

        expect(showListController.shows.length).toBe(initialLength);
    });

    it('shows deleted false', function () {
        spyOn(window, 'confirm').and.callFake(function () {
            return false;
        });
        showListController.deleteShow(0);

        expect(showListController.shows.length).toBe(showService.shows.length);
    });

});