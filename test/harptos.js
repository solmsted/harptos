import _chai from 'chai';
import _Error from 'isotropic-error';
import _Harptos from '../js/harptos.js';
import _mocha from 'mocha';

_mocha.describe('harptos', () => {
    _mocha.it('should construct harptos objects', () => {
        _chai.expect(_Harptos).to.be.a('function');

        const harptos = new _Harptos({
            dayOfMonth: 3,
            monthOfYear: 2,
            year: 1
        });

        _chai.expect(harptos).to.be.an.instanceOf(_Harptos);

        _chai.expect(harptos).to.have.property('dayOfMonth', 3);
        _chai.expect(harptos).to.have.property('monthOfYear', 2);
        _chai.expect(harptos).to.have.property('year', 1);
    });

    _mocha.it('should be a harptos object factory', () => {
        _chai.expect(_Harptos).to.be.a('function');

        const harptos = _Harptos({
            dayOfMonth: 3,
            monthOfYear: 2,
            year: 1
        });

        _chai.expect(harptos).to.be.an.instanceOf(_Harptos);

        _chai.expect(harptos).to.have.property('dayOfMonth', 3);
        _chai.expect(harptos).to.have.property('monthOfYear', 2);
        _chai.expect(harptos).to.have.property('year', 1);
    });

    _mocha.it('should calculate the number of days since Dalereckoning', () => {
        _chai.expect(_Harptos({
            dayOfMonth: 21,
            monthOfYear: 7,
            year: -652
        })).to.have.property('day', -237941);

        _chai.expect(_Harptos({
            dayOfMonth: 7,
            monthOfYear: 7,
            year: -7
        })).to.have.property('day', -2368);

        _chai.expect(_Harptos({
            dayOfMonth: 1,
            monthOfYear: 2,
            year: -3
        })).to.have.property('day', -1064);

        _chai.expect(_Harptos({
            dayOfMonth: 1,
            monthOfYear: 1,
            year: -1
        })).to.have.property('day', -365);

        _chai.expect(_Harptos({
            dayOfMonth: 1,
            monthOfYear: 11,
            year: -1
        })).to.have.property('day', -61);

        _chai.expect(_Harptos({
            dayOfMonth: 30,
            monthOfYear: 12,
            year: -1
        })).to.have.property('day', -1);

        _chai.expect(_Harptos({
            dayOfMonth: 1,
            monthOfYear: 1,
            year: 0
        })).to.have.property('day', 0);

        _chai.expect(_Harptos({
            dayOfMonth: 2,
            monthOfYear: 1,
            year: 0
        })).to.have.property('day', 1);

        _chai.expect(_Harptos({
            dayOfMonth: 1,
            monthOfYear: 2,
            year: 0
        })).to.have.property('day', 31);

        _chai.expect(_Harptos({
            dayOfMonth: 3,
            monthOfYear: 2,
            year: 1
        })).to.have.property('day', 399);

        _chai.expect(_Harptos({
            dayOfMonth: 30,
            monthOfYear: 12,
            year: 1
        })).to.have.property('day', 730);

        _chai.expect(_Harptos({
            dayOfMonth: 1,
            monthOfYear: 1,
            year: 2
        })).to.have.property('day', 731);

        _chai.expect(_Harptos({
            dayOfMonth: 32,
            monthOfYear: 7,
            year: 20
        })).to.have.property('day', 7518);

        _chai.expect(_Harptos({
            dayOfMonth: 6,
            monthOfYear: 12,
            year: 987
        })).to.have.property('day', 360842);

        _chai.expect(_Harptos({
            dayOfMonth: 29,
            monthOfYear: 4,
            year: 1385
        })).to.have.property('day', 505991);

        _chai.expect(_Harptos({
            dayOfMonth: 31,
            monthOfYear: 9,
            year: 1492
        })).to.have.property('day', 545227);
    });

    _mocha.it('should allow construction using the number of days since Dalereckoning', () => {
        {
            const harptos = _Harptos(-237941);

            _chai.expect(harptos).to.have.property('day', -237941);
            _chai.expect(harptos).to.have.property('dayOfMonth', 21);
            _chai.expect(harptos).to.have.property('monthOfYear', 7);
            _chai.expect(harptos).to.have.property('year', -652);
        }

        {
            const harptos = _Harptos(-2368);

            _chai.expect(harptos).to.have.property('day', -2368);
            _chai.expect(harptos).to.have.property('dayOfMonth', 7);
            _chai.expect(harptos).to.have.property('monthOfYear', 7);
            _chai.expect(harptos).to.have.property('year', -7);
        }

        {
            const harptos = _Harptos(-1064);

            _chai.expect(harptos).to.have.property('day', -1064);
            _chai.expect(harptos).to.have.property('dayOfMonth', 1);
            _chai.expect(harptos).to.have.property('monthOfYear', 2);
            _chai.expect(harptos).to.have.property('year', -3);
        }

        {
            const harptos = _Harptos(-365);

            _chai.expect(harptos).to.have.property('day', -365);
            _chai.expect(harptos).to.have.property('dayOfMonth', 1);
            _chai.expect(harptos).to.have.property('monthOfYear', 1);
            _chai.expect(harptos).to.have.property('year', -1);
        }

        {
            const harptos = _Harptos(-61);

            _chai.expect(harptos).to.have.property('day', -61);
            _chai.expect(harptos).to.have.property('dayOfMonth', 1);
            _chai.expect(harptos).to.have.property('monthOfYear', 11);
            _chai.expect(harptos).to.have.property('year', -1);
        }

        {
            const harptos = _Harptos(-1);

            _chai.expect(harptos).to.have.property('day', -1);
            _chai.expect(harptos).to.have.property('dayOfMonth', 30);
            _chai.expect(harptos).to.have.property('monthOfYear', 12);
            _chai.expect(harptos).to.have.property('year', -1);
        }

        {
            const harptos = _Harptos(0);

            _chai.expect(harptos).to.have.property('day', 0);
            _chai.expect(harptos).to.have.property('dayOfMonth', 1);
            _chai.expect(harptos).to.have.property('monthOfYear', 1);
            _chai.expect(harptos).to.have.property('year', 0);
        }

        {
            const harptos = _Harptos(1);

            _chai.expect(harptos).to.have.property('day', 1);
            _chai.expect(harptos).to.have.property('dayOfMonth', 2);
            _chai.expect(harptos).to.have.property('monthOfYear', 1);
            _chai.expect(harptos).to.have.property('year', 0);
        }

        {
            const harptos = _Harptos(31);

            _chai.expect(harptos).to.have.property('day', 31);
            _chai.expect(harptos).to.have.property('dayOfMonth', 1);
            _chai.expect(harptos).to.have.property('monthOfYear', 2);
            _chai.expect(harptos).to.have.property('year', 0);
        }

        {
            const harptos = _Harptos(399);

            _chai.expect(harptos).to.have.property('day', 399);
            _chai.expect(harptos).to.have.property('dayOfMonth', 3);
            _chai.expect(harptos).to.have.property('monthOfYear', 2);
            _chai.expect(harptos).to.have.property('year', 1);
        }

        {
            const harptos = _Harptos(730);

            _chai.expect(harptos).to.have.property('day', 730);
            _chai.expect(harptos).to.have.property('dayOfMonth', 30);
            _chai.expect(harptos).to.have.property('monthOfYear', 12);
            _chai.expect(harptos).to.have.property('year', 1);
        }

        {
            const harptos = _Harptos(731);

            _chai.expect(harptos).to.have.property('day', 731);
            _chai.expect(harptos).to.have.property('dayOfMonth', 1);
            _chai.expect(harptos).to.have.property('monthOfYear', 1);
            _chai.expect(harptos).to.have.property('year', 2);
        }

        {
            const harptos = _Harptos(7518);

            _chai.expect(harptos).to.have.property('day', 7518);
            _chai.expect(harptos).to.have.property('dayOfMonth', 32);
            _chai.expect(harptos).to.have.property('monthOfYear', 7);
            _chai.expect(harptos).to.have.property('year', 20);
        }

        {
            const harptos = _Harptos(360842);

            _chai.expect(harptos).to.have.property('day', 360842);
            _chai.expect(harptos).to.have.property('dayOfMonth', 6);
            _chai.expect(harptos).to.have.property('monthOfYear', 12);
            _chai.expect(harptos).to.have.property('year', 987);
        }

        {
            const harptos = _Harptos(505991);

            _chai.expect(harptos).to.have.property('day', 505991);
            _chai.expect(harptos).to.have.property('dayOfMonth', 29);
            _chai.expect(harptos).to.have.property('monthOfYear', 4);
            _chai.expect(harptos).to.have.property('year', 1385);
        }

        {
            const harptos = _Harptos(545227);

            _chai.expect(harptos).to.have.property('day', 545227);
            _chai.expect(harptos).to.have.property('dayOfMonth', 31);
            _chai.expect(harptos).to.have.property('monthOfYear', 9);
            _chai.expect(harptos).to.have.property('year', 1492);
        }
    });

    _mocha.it('should allow construction using a date string', () => {
        {
            const harptos = _Harptos('-652-07-21');

            _chai.expect(harptos).to.have.property('dayOfMonth', 21);
            _chai.expect(harptos).to.have.property('monthOfYear', 7);
            _chai.expect(harptos).to.have.property('year', -652);
        }

        {
            const harptos = _Harptos('-7-07-07');

            _chai.expect(harptos).to.have.property('dayOfMonth', 7);
            _chai.expect(harptos).to.have.property('monthOfYear', 7);
            _chai.expect(harptos).to.have.property('year', -7);
        }

        {
            const harptos = _Harptos('-3-02-01');

            _chai.expect(harptos).to.have.property('dayOfMonth', 1);
            _chai.expect(harptos).to.have.property('monthOfYear', 2);
            _chai.expect(harptos).to.have.property('year', -3);
        }

        {
            const harptos = _Harptos('-1-01-01');

            _chai.expect(harptos).to.have.property('dayOfMonth', 1);
            _chai.expect(harptos).to.have.property('monthOfYear', 1);
            _chai.expect(harptos).to.have.property('year', -1);
        }

        {
            const harptos = _Harptos('-1-11-01');

            _chai.expect(harptos).to.have.property('dayOfMonth', 1);
            _chai.expect(harptos).to.have.property('monthOfYear', 11);
            _chai.expect(harptos).to.have.property('year', -1);
        }

        {
            const harptos = _Harptos('-1-12-30');

            _chai.expect(harptos).to.have.property('dayOfMonth', 30);
            _chai.expect(harptos).to.have.property('monthOfYear', 12);
            _chai.expect(harptos).to.have.property('year', -1);
        }

        {
            const harptos = _Harptos('0-01-01');

            _chai.expect(harptos).to.have.property('dayOfMonth', 1);
            _chai.expect(harptos).to.have.property('monthOfYear', 1);
            _chai.expect(harptos).to.have.property('year', 0);
        }

        {
            const harptos = _Harptos('0-01-02');

            _chai.expect(harptos).to.have.property('dayOfMonth', 2);
            _chai.expect(harptos).to.have.property('monthOfYear', 1);
            _chai.expect(harptos).to.have.property('year', 0);
        }

        {
            const harptos = _Harptos('0-02-01');

            _chai.expect(harptos).to.have.property('dayOfMonth', 1);
            _chai.expect(harptos).to.have.property('monthOfYear', 2);
            _chai.expect(harptos).to.have.property('year', 0);
        }

        {
            const harptos = _Harptos('1-02-03');

            _chai.expect(harptos).to.have.property('dayOfMonth', 3);
            _chai.expect(harptos).to.have.property('monthOfYear', 2);
            _chai.expect(harptos).to.have.property('year', 1);
        }

        {
            const harptos = _Harptos('1-12-30');

            _chai.expect(harptos).to.have.property('dayOfMonth', 30);
            _chai.expect(harptos).to.have.property('monthOfYear', 12);
            _chai.expect(harptos).to.have.property('year', 1);
        }

        {
            const harptos = _Harptos('2-01-01');

            _chai.expect(harptos).to.have.property('dayOfMonth', 1);
            _chai.expect(harptos).to.have.property('monthOfYear', 1);
            _chai.expect(harptos).to.have.property('year', 2);
        }

        {
            const harptos = _Harptos('20-07-32');

            _chai.expect(harptos).to.have.property('dayOfMonth', 32);
            _chai.expect(harptos).to.have.property('monthOfYear', 7);
            _chai.expect(harptos).to.have.property('year', 20);
        }

        {
            const harptos = _Harptos('987-12-06');

            _chai.expect(harptos).to.have.property('dayOfMonth', 6);
            _chai.expect(harptos).to.have.property('monthOfYear', 12);
            _chai.expect(harptos).to.have.property('year', 987);
        }

        {
            const harptos = _Harptos('1385-04-29');

            _chai.expect(harptos).to.have.property('dayOfMonth', 29);
            _chai.expect(harptos).to.have.property('monthOfYear', 4);
            _chai.expect(harptos).to.have.property('year', 1385);
        }

        {
            const harptos = _Harptos('1492-09-31');

            _chai.expect(harptos).to.have.property('dayOfMonth', 31);
            _chai.expect(harptos).to.have.property('monthOfYear', 9);
            _chai.expect(harptos).to.have.property('year', 1492);
        }
    });

    _mocha.it('should provide specific day names', () => {
        _chai.expect(_Harptos({
            dayOfMonth: 31,
            monthOfYear: 1,
            year: 1111
        })).to.have.property('dayName', 'Midwinter');

        _chai.expect(_Harptos({
            dayOfMonth: 19,
            monthOfYear: 3,
            year: 1212
        })).to.have.property('dayName', 'Spring Equinox');

        _chai.expect(_Harptos({
            dayOfMonth: 31,
            monthOfYear: 4,
            year: 1313
        })).to.have.property('dayName', 'Greengrass');

        _chai.expect(_Harptos({
            dayOfMonth: 20,
            monthOfYear: 6,
            year: 1414
        })).to.have.property('dayName', 'Summer Solstice');

        _chai.expect(_Harptos({
            dayOfMonth: 31,
            monthOfYear: 7,
            year: 1515
        })).to.have.property('dayName', 'Midsummer');

        _chai.expect(_Harptos({
            dayOfMonth: 32,
            monthOfYear: 7,
            year: 1616
        })).to.have.property('dayName', 'Shieldmeet');

        _chai.expect(_Harptos({
            dayOfMonth: 21,
            monthOfYear: 9,
            year: 1717
        })).to.have.property('dayName', 'Autumn Equinox');

        _chai.expect(_Harptos({
            dayOfMonth: 31,
            monthOfYear: 9,
            year: 1818
        })).to.have.property('dayName', 'Highharvestide');

        _chai.expect(_Harptos({
            dayOfMonth: 31,
            monthOfYear: 11,
            year: 1919
        })).to.have.property('dayName', 'Feast of the Moon');

        _chai.expect(_Harptos({
            dayOfMonth: 20,
            monthOfYear: 12,
            year: 2020
        })).to.have.property('dayName', 'Winter Solstice');
    });

    _mocha.it('should provide the day of tenday', () => {
        _chai.expect(_Harptos({
            dayOfMonth: 21,
            monthOfYear: 7,
            year: -652
        })).to.have.property('dayOfTenday', 1);

        _chai.expect(_Harptos({
            dayOfMonth: 7,
            monthOfYear: 7,
            year: -7
        })).to.have.property('dayOfTenday', 7);

        _chai.expect(_Harptos({
            dayOfMonth: 1,
            monthOfYear: 2,
            year: -3
        })).to.have.property('dayOfTenday', 1);

        _chai.expect(_Harptos({
            dayOfMonth: 1,
            monthOfYear: 1,
            year: -1
        })).to.have.property('dayOfTenday', 1);

        _chai.expect(_Harptos({
            dayOfMonth: 1,
            monthOfYear: 11,
            year: -1
        })).to.have.property('dayOfTenday', 1);

        _chai.expect(_Harptos({
            dayOfMonth: 30,
            monthOfYear: 12,
            year: -1
        })).to.have.property('dayOfTenday', 10);

        _chai.expect(_Harptos({
            dayOfMonth: 1,
            monthOfYear: 1,
            year: 0
        })).to.have.property('dayOfTenday', 1);

        _chai.expect(_Harptos({
            dayOfMonth: 2,
            monthOfYear: 1,
            year: 0
        })).to.have.property('dayOfTenday', 2);

        _chai.expect(_Harptos({
            dayOfMonth: 1,
            monthOfYear: 2,
            year: 0
        })).to.have.property('dayOfTenday', 1);

        _chai.expect(_Harptos({
            dayOfMonth: 3,
            monthOfYear: 2,
            year: 1
        })).to.have.property('dayOfTenday', 3);

        _chai.expect(_Harptos({
            dayOfMonth: 30,
            monthOfYear: 12,
            year: 1
        })).to.have.property('dayOfTenday', 10);

        _chai.expect(_Harptos({
            dayOfMonth: 1,
            monthOfYear: 1,
            year: 2
        })).to.have.property('dayOfTenday', 1);

        _chai.expect(_Harptos({
            dayOfMonth: 32,
            monthOfYear: 7,
            year: 20
        })).to.have.property('dayOfTenday', void null);

        _chai.expect(_Harptos({
            dayOfMonth: 6,
            monthOfYear: 12,
            year: 987
        })).to.have.property('dayOfTenday', 6);

        _chai.expect(_Harptos({
            dayOfMonth: 29,
            monthOfYear: 4,
            year: 1385
        })).to.have.property('dayOfTenday', 9);

        _chai.expect(_Harptos({
            dayOfMonth: 31,
            monthOfYear: 9,
            year: 1492
        })).to.have.property('dayOfTenday', void null);
    });

    _mocha.it('should provide the day of year', () => {
        _chai.expect(_Harptos({
            dayOfMonth: 21,
            monthOfYear: 7,
            year: -652
        })).to.have.property('dayOfYear', 203);

        _chai.expect(_Harptos({
            dayOfMonth: 7,
            monthOfYear: 7,
            year: -7
        })).to.have.property('dayOfYear', 189);

        _chai.expect(_Harptos({
            dayOfMonth: 1,
            monthOfYear: 2,
            year: -3
        })).to.have.property('dayOfYear', 32);

        _chai.expect(_Harptos({
            dayOfMonth: 1,
            monthOfYear: 1,
            year: -1
        })).to.have.property('dayOfYear', 1);

        _chai.expect(_Harptos({
            dayOfMonth: 1,
            monthOfYear: 11,
            year: -1
        })).to.have.property('dayOfYear', 305);

        _chai.expect(_Harptos({
            dayOfMonth: 30,
            monthOfYear: 12,
            year: -1
        })).to.have.property('dayOfYear', 365);

        _chai.expect(_Harptos({
            dayOfMonth: 1,
            monthOfYear: 1,
            year: 0
        })).to.have.property('dayOfYear', 1);

        _chai.expect(_Harptos({
            dayOfMonth: 2,
            monthOfYear: 1,
            year: 0
        })).to.have.property('dayOfYear', 2);

        _chai.expect(_Harptos({
            dayOfMonth: 1,
            monthOfYear: 2,
            year: 0
        })).to.have.property('dayOfYear', 32);

        _chai.expect(_Harptos({
            dayOfMonth: 3,
            monthOfYear: 2,
            year: 1
        })).to.have.property('dayOfYear', 34);

        _chai.expect(_Harptos({
            dayOfMonth: 30,
            monthOfYear: 12,
            year: 1
        })).to.have.property('dayOfYear', 365);

        _chai.expect(_Harptos({
            dayOfMonth: 1,
            monthOfYear: 1,
            year: 2
        })).to.have.property('dayOfYear', 1);

        _chai.expect(_Harptos({
            dayOfMonth: 32,
            monthOfYear: 7,
            year: 20
        })).to.have.property('dayOfYear', 214);

        _chai.expect(_Harptos({
            dayOfMonth: 6,
            monthOfYear: 12,
            year: 987
        })).to.have.property('dayOfYear', 341);

        _chai.expect(_Harptos({
            dayOfMonth: 29,
            monthOfYear: 4,
            year: 1385
        })).to.have.property('dayOfYear', 120);

        _chai.expect(_Harptos({
            dayOfMonth: 31,
            monthOfYear: 9,
            year: 1492
        })).to.have.property('dayOfYear', 275);
    });

    _mocha.it('should provide whether the date is in a leap year', () => {
        _chai.expect(_Harptos({
            dayOfMonth: 21,
            monthOfYear: 7,
            year: -652
        })).to.have.property('inLeapYear', true);

        _chai.expect(_Harptos({
            dayOfMonth: 7,
            monthOfYear: 7,
            year: -7
        })).to.have.property('inLeapYear', false);

        _chai.expect(_Harptos({
            dayOfMonth: 1,
            monthOfYear: 2,
            year: -3
        })).to.have.property('inLeapYear', false);

        _chai.expect(_Harptos({
            dayOfMonth: 1,
            monthOfYear: 1,
            year: -1
        })).to.have.property('inLeapYear', false);

        _chai.expect(_Harptos({
            dayOfMonth: 1,
            monthOfYear: 11,
            year: -1
        })).to.have.property('inLeapYear', false);

        _chai.expect(_Harptos({
            dayOfMonth: 30,
            monthOfYear: 12,
            year: -1
        })).to.have.property('inLeapYear', false);

        _chai.expect(_Harptos({
            dayOfMonth: 1,
            monthOfYear: 1,
            year: 0
        })).to.have.property('inLeapYear', true);

        _chai.expect(_Harptos({
            dayOfMonth: 2,
            monthOfYear: 1,
            year: 0
        })).to.have.property('inLeapYear', true);

        _chai.expect(_Harptos({
            dayOfMonth: 1,
            monthOfYear: 2,
            year: 0
        })).to.have.property('inLeapYear', true);

        _chai.expect(_Harptos({
            dayOfMonth: 3,
            monthOfYear: 2,
            year: 1
        })).to.have.property('inLeapYear', false);

        _chai.expect(_Harptos({
            dayOfMonth: 30,
            monthOfYear: 12,
            year: 1
        })).to.have.property('inLeapYear', false);

        _chai.expect(_Harptos({
            dayOfMonth: 1,
            monthOfYear: 1,
            year: 2
        })).to.have.property('inLeapYear', false);

        _chai.expect(_Harptos({
            dayOfMonth: 32,
            monthOfYear: 7,
            year: 20
        })).to.have.property('inLeapYear', true);

        _chai.expect(_Harptos({
            dayOfMonth: 6,
            monthOfYear: 12,
            year: 987
        })).to.have.property('inLeapYear', false);

        _chai.expect(_Harptos({
            dayOfMonth: 29,
            monthOfYear: 4,
            year: 1385
        })).to.have.property('inLeapYear', false);

        _chai.expect(_Harptos({
            dayOfMonth: 31,
            monthOfYear: 9,
            year: 1492
        })).to.have.property('inLeapYear', true);
    });

    _mocha.it('should provide the month name', () => {
        _chai.expect(_Harptos({
            dayOfMonth: 3,
            monthOfYear: 1,
            year: 1200
        })).to.have.property('monthName', 'Hammer');

        _chai.expect(_Harptos({
            dayOfMonth: 6,
            monthOfYear: 2,
            year: 1212
        })).to.have.property('monthName', 'Alturiak');

        _chai.expect(_Harptos({
            dayOfMonth: 9,
            monthOfYear: 3,
            year: 1224
        })).to.have.property('monthName', 'Ches');

        _chai.expect(_Harptos({
            dayOfMonth: 12,
            monthOfYear: 4,
            year: 1236
        })).to.have.property('monthName', 'Tarsakh');

        _chai.expect(_Harptos({
            dayOfMonth: 15,
            monthOfYear: 5,
            year: 1248
        })).to.have.property('monthName', 'Mirtul');

        _chai.expect(_Harptos({
            dayOfMonth: 9,
            monthOfYear: 6,
            year: 1260
        })).to.have.property('monthName', 'Kythorn');

        _chai.expect(_Harptos({
            dayOfMonth: 12,
            monthOfYear: 7,
            year: 1272
        })).to.have.property('monthName', 'Flamerule');

        _chai.expect(_Harptos({
            dayOfMonth: 15,
            monthOfYear: 8,
            year: 1284
        })).to.have.property('monthName', 'Eleasis');

        _chai.expect(_Harptos({
            dayOfMonth: 18,
            monthOfYear: 9,
            year: 1296
        })).to.have.property('monthName', 'Eleint');

        _chai.expect(_Harptos({
            dayOfMonth: 12,
            monthOfYear: 10,
            year: 1308
        })).to.have.property('monthName', 'Marpenoth');

        _chai.expect(_Harptos({
            dayOfMonth: 6,
            monthOfYear: 11,
            year: 1320
        })).to.have.property('monthName', 'Uktar');

        _chai.expect(_Harptos({
            dayOfMonth: 9,
            monthOfYear: 12,
            year: 1332
        })).to.have.property('monthName', 'Nightal');
    });

    _mocha.it('should provide the moon phase', () => {
        const firstQuarterDatesByLeapYearOffset = {
                0: [
                    '01-23',
                    '02-23',
                    '03-23',
                    '04-24',
                    '05-23',
                    '06-24',
                    '07-24',
                    '08-22',
                    '09-23',
                    '10-22',
                    '11-23',
                    '12-22'
                ],
                1: [
                    '01-23',
                    '02-22',
                    '03-22',
                    '04-23',
                    '05-22',
                    '06-23',
                    '07-23',
                    '08-23',
                    '09-23',
                    '10-23',
                    '11-23',
                    '12-22'
                ],
                2: [
                    '01-23',
                    '02-22',
                    '03-23',
                    '04-23',
                    '05-23',
                    '06-23',
                    '07-23',
                    '08-23',
                    '09-23',
                    '10-23',
                    '11-23',
                    '12-23'
                ],
                3: [
                    '01-23',
                    '02-23',
                    '03-23',
                    '04-23',
                    '05-23',
                    '06-23',
                    '07-24',
                    '08-23',
                    '09-24',
                    '10-23',
                    '11-23',
                    '12-23'
                ]
            },
            fullMoonDatesByLeapYearOffset = {
                0: [
                    '01-01',
                    '01-31',
                    '02-30',
                    '04-01',
                    '04-31',
                    '06-01',
                    '07-01',
                    '07-32',
                    '08-30',
                    '09-30',
                    '10-30',
                    '11-30',
                    '12-30'
                ],
                1: [
                    '01-30',
                    '02-30',
                    '03-30',
                    '04-31',
                    '05-30',
                    '06-30',
                    '07-31',
                    '08-30',
                    '09-31',
                    '10-30',
                    '11-31',
                    '12-30'
                ],
                2: [
                    '01-30',
                    '02-30',
                    '03-30',
                    '04-31',
                    '05-30',
                    '07-01',
                    '07-31',
                    '09-01',
                    '09-31',
                    '10-30',
                    '11-31',
                    '12-30'
                ],
                3: [
                    '01-31',
                    '02-30',
                    '04-01',
                    '04-31',
                    '05-30',
                    '07-01',
                    '07-31',
                    '09-01',
                    '09-31',
                    '11-01',
                    '11-31'
                ]
            },
            lastQuarterDatesByLeapYearOffset = {
                0: [
                    '01-08',
                    '02-08',
                    '03-08',
                    '04-08',
                    '05-08',
                    '06-08',
                    '07-09',
                    '08-07',
                    '09-08',
                    '10-07',
                    '11-07',
                    '12-07'
                ],
                1: [
                    '01-07',
                    '02-07',
                    '03-07',
                    '04-08',
                    '05-07',
                    '06-08',
                    '07-08',
                    '08-07',
                    '09-08',
                    '10-07',
                    '11-08',
                    '12-07'
                ],
                2: [
                    '01-08',
                    '02-07',
                    '03-07',
                    '04-08',
                    '05-07',
                    '06-08',
                    '07-08',
                    '08-08',
                    '09-08',
                    '10-08',
                    '11-08',
                    '12-07'
                ],
                3: [
                    '01-08',
                    '02-07',
                    '03-08',
                    '04-08',
                    '05-08',
                    '06-08',
                    '07-08',
                    '08-08',
                    '09-08',
                    '10-08',
                    '11-08',
                    '12-08'
                ]
            },
            newMoonDatesByLeapYearOffset = {
                0: [
                    '01-16',
                    '02-15',
                    '03-16',
                    '04-16',
                    '05-15',
                    '06-16',
                    '07-16',
                    '08-15',
                    '09-15',
                    '10-15',
                    '11-15',
                    '12-15'
                ],
                1: [
                    '01-15',
                    '02-14',
                    '03-15',
                    '04-15',
                    '05-15',
                    '06-15',
                    '07-16',
                    '08-15',
                    '09-15',
                    '10-15',
                    '11-15',
                    '12-15'
                ],
                2: [
                    '01-15',
                    '02-15',
                    '03-15',
                    '04-16',
                    '05-15',
                    '06-15',
                    '07-16',
                    '08-15',
                    '09-16',
                    '10-15',
                    '11-16',
                    '12-15'
                ],
                3: [
                    '01-15',
                    '02-15',
                    '03-15',
                    '04-16',
                    '05-15',
                    '06-16',
                    '07-16',
                    '08-16',
                    '09-16',
                    '10-15',
                    '11-16',
                    '12-15'
                ]
            };

        for (const year of [
            -1597,
            -987,
            -610,
            -377,
            -233,
            -144,
            -89,
            -55,
            -34,
            -21,
            -13,
            -8,
            -5,
            -3,
            -2,
            -1,
            0,
            1,
            2,
            3,
            5,
            8,
            13,
            21,
            34,
            55,
            89,
            144,
            233,
            377,
            610,
            987,
            1597
        ]) {
            let leapYearOffset = year % 4;

            if (leapYearOffset < 0) {
                leapYearOffset += 4;
            }

            firstQuarterDatesByLeapYearOffset[leapYearOffset].forEach(date => {
                const moonPhase = _Harptos(`${year}-${date}`).moonPhase;

                _chai.expect(moonPhase).to.be.an('object').that.is.frozen;
                _chai.expect(moonPhase).to.have.property('icon', '🌓');
                _chai.expect(moonPhase).to.have.property('name', 'First Quarter');
                _chai.expect(moonPhase).to.have.property('value').that.is.a('number');
            });

            fullMoonDatesByLeapYearOffset[leapYearOffset].forEach(date => {
                const moonPhase = _Harptos(`${year}-${date}`).moonPhase;

                _chai.expect(moonPhase).to.be.an('object').that.is.frozen;
                _chai.expect(moonPhase).to.have.property('icon', '🌕');
                _chai.expect(moonPhase).to.have.property('name', 'Full Moon');
                _chai.expect(moonPhase).to.have.property('value').that.is.a('number');
            });

            lastQuarterDatesByLeapYearOffset[leapYearOffset].forEach(date => {
                const moonPhase = _Harptos(`${year}-${date}`).moonPhase;

                _chai.expect(moonPhase).to.be.an('object').that.is.frozen;
                _chai.expect(moonPhase).to.have.property('icon', '🌗');
                _chai.expect(moonPhase).to.have.property('name', 'Last Quarter');
                _chai.expect(moonPhase).to.have.property('value').that.is.a('number');
            });

            newMoonDatesByLeapYearOffset[leapYearOffset].forEach(date => {
                const moonPhase = _Harptos(`${year}-${date}`).moonPhase;

                _chai.expect(moonPhase).to.be.an('object').that.is.frozen;
                _chai.expect(moonPhase).to.have.property('icon', '🌑');
                _chai.expect(moonPhase).to.have.property('name', 'New Moon');
                _chai.expect(moonPhase).to.have.property('value').that.is.a('number');
            });
        }
    });

    _mocha.it('should provide the season', () => {
        _chai.expect(_Harptos({
            dayOfMonth: 21,
            monthOfYear: 7,
            year: -652
        })).to.have.property('season', 'Summer');

        _chai.expect(_Harptos({
            dayOfMonth: 7,
            monthOfYear: 7,
            year: -7
        })).to.have.property('season', 'Summer');

        _chai.expect(_Harptos({
            dayOfMonth: 1,
            monthOfYear: 2,
            year: -3
        })).to.have.property('season', 'Winter');

        _chai.expect(_Harptos({
            dayOfMonth: 1,
            monthOfYear: 1,
            year: -1
        })).to.have.property('season', 'Winter');

        _chai.expect(_Harptos({
            dayOfMonth: 1,
            monthOfYear: 11,
            year: -1
        })).to.have.property('season', 'Autumn');

        _chai.expect(_Harptos({
            dayOfMonth: 30,
            monthOfYear: 12,
            year: -1
        })).to.have.property('season', 'Winter');

        _chai.expect(_Harptos({
            dayOfMonth: 1,
            monthOfYear: 1,
            year: 0
        })).to.have.property('season', 'Winter');

        _chai.expect(_Harptos({
            dayOfMonth: 2,
            monthOfYear: 1,
            year: 0
        })).to.have.property('season', 'Winter');

        _chai.expect(_Harptos({
            dayOfMonth: 1,
            monthOfYear: 2,
            year: 0
        })).to.have.property('season', 'Winter');

        _chai.expect(_Harptos({
            dayOfMonth: 3,
            monthOfYear: 2,
            year: 1
        })).to.have.property('season', 'Winter');

        _chai.expect(_Harptos({
            dayOfMonth: 30,
            monthOfYear: 12,
            year: 1
        })).to.have.property('season', 'Winter');

        _chai.expect(_Harptos({
            dayOfMonth: 1,
            monthOfYear: 1,
            year: 2
        })).to.have.property('season', 'Winter');

        _chai.expect(_Harptos({
            dayOfMonth: 32,
            monthOfYear: 7,
            year: 20
        })).to.have.property('season', 'Summer');

        _chai.expect(_Harptos({
            dayOfMonth: 6,
            monthOfYear: 12,
            year: 987
        })).to.have.property('season', 'Autumn');

        _chai.expect(_Harptos({
            dayOfMonth: 29,
            monthOfYear: 4,
            year: 1385
        })).to.have.property('season', 'Spring');

        _chai.expect(_Harptos({
            dayOfMonth: 31,
            monthOfYear: 9,
            year: 1492
        })).to.have.property('season', 'Autumn');
    });

    _mocha.it('should provide the year name', () => {
        _chai.expect(_Harptos({
            dayOfMonth: 21,
            monthOfYear: 7,
            year: -652
        })).to.have.property('yearName', 'Year of Joyful Colors');

        _chai.expect(_Harptos({
            dayOfMonth: 7,
            monthOfYear: 7,
            year: -7
        })).to.have.property('yearName', 'Year of Open Eyes');

        _chai.expect(_Harptos({
            dayOfMonth: 1,
            monthOfYear: 2,
            year: -3
        })).to.have.property('yearName', 'Year of Ruins');

        _chai.expect(_Harptos({
            dayOfMonth: 1,
            monthOfYear: 1,
            year: -1
        })).to.have.property('yearName', 'Year of Shattered Relics');

        _chai.expect(_Harptos({
            dayOfMonth: 1,
            monthOfYear: 11,
            year: -1
        })).to.have.property('yearName', 'Year of Shattered Relics');

        _chai.expect(_Harptos({
            dayOfMonth: 30,
            monthOfYear: 12,
            year: -1
        })).to.have.property('yearName', 'Year of Shattered Relics');

        _chai.expect(_Harptos({
            dayOfMonth: 1,
            monthOfYear: 1,
            year: 0
        })).to.have.property('yearName', 'Year of the Rising Flame');

        _chai.expect(_Harptos({
            dayOfMonth: 2,
            monthOfYear: 1,
            year: 0
        })).to.have.property('yearName', 'Year of the Rising Flame');

        _chai.expect(_Harptos({
            dayOfMonth: 1,
            monthOfYear: 2,
            year: 0
        })).to.have.property('yearName', 'Year of the Rising Flame');

        _chai.expect(_Harptos({
            dayOfMonth: 3,
            monthOfYear: 2,
            year: 1
        })).to.have.property('yearName', 'Year of Sunrise');

        _chai.expect(_Harptos({
            dayOfMonth: 30,
            monthOfYear: 12,
            year: 1
        })).to.have.property('yearName', 'Year of Sunrise');

        _chai.expect(_Harptos({
            dayOfMonth: 1,
            monthOfYear: 1,
            year: 2
        })).to.have.property('yearName', 'Year of the Smiling Hag');

        _chai.expect(_Harptos({
            dayOfMonth: 32,
            monthOfYear: 7,
            year: 20
        })).to.have.property('yearName', 'Year of the Fallen Fury');

        _chai.expect(_Harptos({
            dayOfMonth: 6,
            monthOfYear: 12,
            year: 987
        })).to.have.property('yearName', 'Year of the Flaming Dwarf');

        _chai.expect(_Harptos({
            dayOfMonth: 29,
            monthOfYear: 4,
            year: 1385
        })).to.have.property('yearName', 'Year of Blue Fire');

        _chai.expect(_Harptos({
            dayOfMonth: 31,
            monthOfYear: 9,
            year: 1492
        })).to.have.property('yearName', 'Year of Three Ships Sailing');
    });

    _mocha.it('should serialize to JSON', () => {
        _chai.expect(JSON.stringify(_Harptos({
            dayOfMonth: 21,
            monthOfYear: 7,
            year: -652
        }))).to.equal('{"dayOfMonth":21,"monthOfYear":7,"year":-652}');

        _chai.expect(JSON.stringify(_Harptos({
            dayOfMonth: 7,
            monthOfYear: 7,
            year: -7
        }))).to.equal('{"dayOfMonth":7,"monthOfYear":7,"year":-7}');

        _chai.expect(JSON.stringify(_Harptos({
            dayOfMonth: 1,
            monthOfYear: 2,
            year: -3
        }))).to.equal('{"dayOfMonth":1,"monthOfYear":2,"year":-3}');

        _chai.expect(JSON.stringify(_Harptos({
            dayOfMonth: 1,
            monthOfYear: 1,
            year: -1
        }))).to.equal('{"dayOfMonth":1,"monthOfYear":1,"year":-1}');

        _chai.expect(JSON.stringify(_Harptos({
            dayOfMonth: 1,
            monthOfYear: 11,
            year: -1
        }))).to.equal('{"dayOfMonth":1,"monthOfYear":11,"year":-1}');

        _chai.expect(JSON.stringify(_Harptos({
            dayOfMonth: 30,
            monthOfYear: 12,
            year: -1
        }))).to.equal('{"dayOfMonth":30,"monthOfYear":12,"year":-1}');

        _chai.expect(JSON.stringify(_Harptos({
            dayOfMonth: 1,
            monthOfYear: 1,
            year: 0
        }))).to.equal('{"dayOfMonth":1,"monthOfYear":1,"year":0}');

        _chai.expect(JSON.stringify(_Harptos({
            dayOfMonth: 2,
            monthOfYear: 1,
            year: 0
        }))).to.equal('{"dayOfMonth":2,"monthOfYear":1,"year":0}');

        _chai.expect(JSON.stringify(_Harptos({
            dayOfMonth: 1,
            monthOfYear: 2,
            year: 0
        }))).to.equal('{"dayOfMonth":1,"monthOfYear":2,"year":0}');

        _chai.expect(JSON.stringify(_Harptos({
            dayOfMonth: 3,
            monthOfYear: 2,
            year: 1
        }))).to.equal('{"dayOfMonth":3,"monthOfYear":2,"year":1}');

        _chai.expect(JSON.stringify(_Harptos({
            dayOfMonth: 30,
            monthOfYear: 12,
            year: 1
        }))).to.equal('{"dayOfMonth":30,"monthOfYear":12,"year":1}');

        _chai.expect(JSON.stringify(_Harptos({
            dayOfMonth: 1,
            monthOfYear: 1,
            year: 2
        }))).to.equal('{"dayOfMonth":1,"monthOfYear":1,"year":2}');

        _chai.expect(JSON.stringify(_Harptos({
            dayOfMonth: 32,
            monthOfYear: 7,
            year: 20
        }))).to.equal('{"dayOfMonth":32,"monthOfYear":7,"year":20}');

        _chai.expect(JSON.stringify(_Harptos({
            dayOfMonth: 6,
            monthOfYear: 12,
            year: 987
        }))).to.equal('{"dayOfMonth":6,"monthOfYear":12,"year":987}');

        _chai.expect(JSON.stringify(_Harptos({
            dayOfMonth: 29,
            monthOfYear: 4,
            year: 1385
        }))).to.equal('{"dayOfMonth":29,"monthOfYear":4,"year":1385}');

        _chai.expect(JSON.stringify(_Harptos({
            dayOfMonth: 31,
            monthOfYear: 9,
            year: 1492
        }))).to.equal('{"dayOfMonth":31,"monthOfYear":9,"year":1492}');
    });

    _mocha.it('should serialize to a date string', () => {
        _chai.expect(`${_Harptos({
            dayOfMonth: 21,
            monthOfYear: 7,
            year: -652
        })}`).to.equal('-652-07-21');

        _chai.expect(`${_Harptos({
            dayOfMonth: 7,
            monthOfYear: 7,
            year: -7
        })}`).to.equal('-7-07-07');

        _chai.expect(`${_Harptos({
            dayOfMonth: 1,
            monthOfYear: 2,
            year: -3
        })}`).to.equal('-3-02-01');

        _chai.expect(`${_Harptos({
            dayOfMonth: 1,
            monthOfYear: 1,
            year: -1
        })}`).to.equal('-1-01-01');

        _chai.expect(`${_Harptos({
            dayOfMonth: 1,
            monthOfYear: 11,
            year: -1
        })}`).to.equal('-1-11-01');

        _chai.expect(`${_Harptos({
            dayOfMonth: 30,
            monthOfYear: 12,
            year: -1
        })}`).to.equal('-1-12-30');

        _chai.expect(`${_Harptos({
            dayOfMonth: 1,
            monthOfYear: 1,
            year: 0
        })}`).to.equal('0-01-01');

        _chai.expect(`${_Harptos({
            dayOfMonth: 2,
            monthOfYear: 1,
            year: 0
        })}`).to.equal('0-01-02');

        _chai.expect(`${_Harptos({
            dayOfMonth: 1,
            monthOfYear: 2,
            year: 0
        })}`).to.equal('0-02-01');

        _chai.expect(`${_Harptos({
            dayOfMonth: 3,
            monthOfYear: 2,
            year: 1
        })}`).to.equal('1-02-03');

        _chai.expect(`${_Harptos({
            dayOfMonth: 30,
            monthOfYear: 12,
            year: 1
        })}`).to.equal('1-12-30');

        _chai.expect(`${_Harptos({
            dayOfMonth: 1,
            monthOfYear: 1,
            year: 2
        })}`).to.equal('2-01-01');

        _chai.expect(`${_Harptos({
            dayOfMonth: 32,
            monthOfYear: 7,
            year: 20
        })}`).to.equal('20-07-32');

        _chai.expect(`${_Harptos({
            dayOfMonth: 6,
            monthOfYear: 12,
            year: 987
        })}`).to.equal('987-12-06');

        _chai.expect(`${_Harptos({
            dayOfMonth: 29,
            monthOfYear: 4,
            year: 1385
        })}`).to.equal('1385-04-29');

        _chai.expect(`${_Harptos({
            dayOfMonth: 31,
            monthOfYear: 9,
            year: 1492
        })}`).to.equal('1492-09-31');
    });

    _mocha.it('should serialize to a number of days since Dalereckoning', () => {
        _chai.expect(+_Harptos({
            dayOfMonth: 21,
            monthOfYear: 7,
            year: -652
        })).to.equal(-237941);

        _chai.expect(+_Harptos({
            dayOfMonth: 7,
            monthOfYear: 7,
            year: -7
        })).to.equal(-2368);

        _chai.expect(+_Harptos({
            dayOfMonth: 1,
            monthOfYear: 2,
            year: -3
        })).to.equal(-1064);

        _chai.expect(+_Harptos({
            dayOfMonth: 1,
            monthOfYear: 1,
            year: -1
        })).to.equal(-365);

        _chai.expect(+_Harptos({
            dayOfMonth: 1,
            monthOfYear: 11,
            year: -1
        })).to.equal(-61);

        _chai.expect(+_Harptos({
            dayOfMonth: 30,
            monthOfYear: 12,
            year: -1
        })).to.equal(-1);

        _chai.expect(+_Harptos({
            dayOfMonth: 1,
            monthOfYear: 1,
            year: 0
        })).to.equal(0);

        _chai.expect(+_Harptos({
            dayOfMonth: 2,
            monthOfYear: 1,
            year: 0
        })).to.equal(1);

        _chai.expect(+_Harptos({
            dayOfMonth: 1,
            monthOfYear: 2,
            year: 0
        })).to.equal(31);

        _chai.expect(+_Harptos({
            dayOfMonth: 3,
            monthOfYear: 2,
            year: 1
        })).to.equal(399);

        _chai.expect(+_Harptos({
            dayOfMonth: 30,
            monthOfYear: 12,
            year: 1
        })).to.equal(730);

        _chai.expect(+_Harptos({
            dayOfMonth: 1,
            monthOfYear: 1,
            year: 2
        })).to.equal(731);

        _chai.expect(+_Harptos({
            dayOfMonth: 32,
            monthOfYear: 7,
            year: 20
        })).to.equal(7518);

        _chai.expect(+_Harptos({
            dayOfMonth: 6,
            monthOfYear: 12,
            year: 987
        })).to.equal(360842);

        _chai.expect(+_Harptos({
            dayOfMonth: 29,
            monthOfYear: 4,
            year: 1385
        })).to.equal(505991);

        _chai.expect(+_Harptos({
            dayOfMonth: 31,
            monthOfYear: 9,
            year: 1492
        })).to.equal(545227);
    });

    _mocha.it('should allow comparisons', () => {
        _chai.expect(_Harptos.compare(_Harptos({
            dayOfMonth: 1,
            monthOfYear: 1,
            year: 0
        }), _Harptos({
            dayOfMonth: 1,
            monthOfYear: 1,
            year: 1
        }))).to.equal(-1);

        _chai.expect(_Harptos.compare(_Harptos({
            dayOfMonth: 1,
            monthOfYear: 1,
            year: 3
        }), _Harptos({
            dayOfMonth: 1,
            monthOfYear: 1,
            year: 2
        }))).to.equal(1);

        _chai.expect(_Harptos.compare(_Harptos({
            dayOfMonth: 1,
            monthOfYear: 5,
            year: 4
        }), _Harptos({
            dayOfMonth: 1,
            monthOfYear: 6,
            year: 4
        }))).to.equal(-1);

        _chai.expect(_Harptos.compare(_Harptos({
            dayOfMonth: 1,
            monthOfYear: 8,
            year: 4
        }), _Harptos({
            dayOfMonth: 1,
            monthOfYear: 7,
            year: 4
        }))).to.equal(1);

        _chai.expect(_Harptos.compare(_Harptos({
            dayOfMonth: 10,
            monthOfYear: 9,
            year: 4
        }), _Harptos({
            dayOfMonth: 11,
            monthOfYear: 9,
            year: 4
        }))).to.equal(-1);

        _chai.expect(_Harptos.compare(_Harptos({
            dayOfMonth: 13,
            monthOfYear: 9,
            year: 4
        }), _Harptos({
            dayOfMonth: 12,
            monthOfYear: 9,
            year: 4
        }))).to.equal(1);

        _chai.expect(_Harptos.compare(_Harptos({
            dayOfMonth: 14,
            monthOfYear: 9,
            year: 4
        }), _Harptos({
            dayOfMonth: 14,
            monthOfYear: 9,
            year: 4
        }))).to.equal(0);

        _chai.expect(_Harptos({
            dayOfMonth: 3,
            monthOfYear: 4,
            year: 5
        }).equals(_Harptos({
            dayOfMonth: 3,
            monthOfYear: 4,
            year: 5
        }))).to.be.true;

        _chai.expect(_Harptos({
            dayOfMonth: 3,
            monthOfYear: 4,
            year: 5
        }).equals(_Harptos({
            dayOfMonth: 5,
            monthOfYear: 4,
            year: 3
        }))).to.be.false;
    });

    _mocha.it('should allow construction of clones', () => {
        const a = _Harptos({
                dayOfMonth: 3,
                monthOfYear: 4,
                year: 5
            }),
            b = _Harptos(a);

        _chai.expect(a === b).to.be.false;
        _chai.expect(a.equals(b)).to.be.true;
    });

    _mocha.it('should cache calculated values', () => {
        const harptos = _Harptos({
            dayOfMonth: 10,
            monthOfYear: 10,
            year: 1010
        });

        _chai.expect(harptos.day).to.equal(harptos.day);
        _chai.expect(harptos.dayOfTenday).to.equal(harptos.dayOfTenday);
        _chai.expect(harptos.dayOfYear).to.equal(harptos.dayOfYear);
        _chai.expect(harptos.moonPhase).to.equal(harptos.moonPhase);
        _chai.expect(harptos.season).to.equal(harptos.season);
    });

    _mocha.it('should not allow invalid configs', () => {
        _chai.expect(() => {
            _Harptos();
        }).to.throw(_Error).with.property('name', 'TypeError');

        _chai.expect(() => {
            _Harptos(null);
        }).to.throw(_Error).with.property('name', 'TypeError');

        _chai.expect(() => {
            _Harptos('');
        }).to.throw(_Error).with.property('name', 'TypeError');

        _chai.expect(() => {
            _Harptos({});
        }).to.throw(_Error).with.property('name', 'TypeError');

        _chai.expect(() => {
            _Harptos({
                dayOfMonth: 1
            });
        }).to.throw(_Error).with.property('name', 'TypeError');

        _chai.expect(() => {
            _Harptos({
                dayOfMonth: 1,
                monthOfYear: 1
            });
        }).to.throw(_Error).with.property('name', 'TypeError');

        _chai.expect(() => {
            _Harptos({
                dayOfMonth: 1,
                monthOfYear: -1,
                year: 0
            });
        }).to.throw(_Error).with.property('name', 'RangeError');

        _chai.expect(() => {
            _Harptos({
                dayOfMonth: 1,
                monthOfYear: 13,
                year: 0
            });
        }).to.throw(_Error).with.property('name', 'RangeError');

        _chai.expect(() => {
            _Harptos({
                dayOfMonth: -1,
                monthOfYear: 1,
                year: 0
            });
        }).to.throw(_Error).with.property('name', 'RangeError');

        _chai.expect(() => {
            _Harptos({
                dayOfMonth: 32,
                monthOfYear: 1,
                year: 0
            });
        }).to.throw(_Error).with.property('name', 'RangeError');
    });
});
