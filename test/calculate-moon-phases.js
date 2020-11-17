import _calculateMoonPhases from '../js/calculate-moon-phases.js';
import _chai from 'chai';
import _mocha from 'mocha';

_mocha.describe('calculate-moon-phases', () => {
    _mocha.it('should calculate moon phases', () => {
        _chai.expect(_calculateMoonPhases({
            synodicPeriod: 8
        })).to.deep.equal([{
            icon: '🌕',
            name: 'Full Moon',
            value: 1
        }, {
            icon: '🌖',
            name: 'Waning Gibbous',
            value: -.75
        }, {
            icon: '🌗',
            name: 'Last Quarter',
            value: -.5
        }, {
            icon: '🌘',
            name: 'Waning Crescent',
            value: -0.25
        }, {
            icon: '🌑',
            name: 'New Moon',
            value: 0
        }, {
            icon: '🌒',
            name: 'Waxing Crescent',
            value: 0.25
        }, {
            icon: '🌓',
            name: 'First Quarter',
            value: 0.5
        }, {
            icon: '🌔',
            name: 'Waxing Gibbous',
            value: 0.75
        }]);
    });
});
