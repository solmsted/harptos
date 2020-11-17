import _calculateMoonPhases from './calculate-moon-phases.js';
import _dayCountByMonthOfYear from './day-count-by-month-of-year.js';
import _dayNameByMonthOfYearAndDayOfMonth from './day-name-by-month-of-year-and-day-of-month.js';
import _Error from 'isotropic-error';
import _make from 'isotropic-make';
import _monthNameByMonthOfYear from './month-name-by-month-of-year.js';
import _PropertyChainer from 'isotropic-property-chainer';
import _seasonChanges from './season-changes.js';
import _yearNameByYear from 'roll-of-years';

export default _make([
    _PropertyChainer
], {
    get day () {
        if (this._day === null) {
            this._day = this._year * this.constructor._dayCountPerYear + Math.ceil(this._year / 4) + this._dayOfMonth - 1;

            for (let monthOfYear = 1; monthOfYear < this._monthOfYear; monthOfYear += 1) {
                this._day += this.constructor._dayCountByMonthOfYear[monthOfYear];

                if (this._inLeapYear && monthOfYear === this.constructor._leapYearMonthOfYear) {
                    this._day += 1;
                }
            }
        }

        return this._day;
    },
    get dayName () {
        return this._dayName;
    },
    get dayOfMonth () {
        return this._dayOfMonth;
    },
    get dayOfTenday () {
        if (this._dayOfTenday === null) {
            const remainder = this._dayOfMonth % 10;

            if (remainder === 0) {
                this._dayOfTenday = 10;
            } else if (this._dayOfMonth + 10 - remainder > this._dayCountPerMonthOfYear) {
                this._dayOfTenday = void null;
            } else {
                this._dayOfTenday = remainder;
            }
        }

        return this._dayOfTenday;
    },
    get dayOfYear () {
        if (this._dayOfYear === null) {
            this._dayOfYear = this._dayOfMonth;

            for (let monthOfYear = 1; monthOfYear < this._monthOfYear; monthOfYear += 1) {
                this._dayOfYear += this.constructor._dayCountByMonthOfYear[monthOfYear];

                if (this._inLeapYear && monthOfYear === this.constructor._leapYearMonthOfYear) {
                    this._dayOfYear += 1;
                }
            }
        }

        return this._dayOfYear;
    },
    equals (other) {
        return this.constructor.compare(this, other) === 0;
    },
    get inLeapYear () {
        return this._inLeapYear;
    },
    get monthName () {
        return this._monthName;
    },
    get monthOfYear () {
        return this._monthOfYear;
    },
    get moonPhase () {
        if (this._moonPhase === null) {
            let moonPhaseIndex = (this.day + this.constructor._moonSynodicPeriodOffset) % this.constructor._moonPhases.length;

            if (moonPhaseIndex < 0) {
                moonPhaseIndex += this.constructor._moonPhases.length;
            }

            this._moonPhase = Object.freeze({
                ...this.constructor._moonPhases[moonPhaseIndex]
            });
        }

        return this._moonPhase;
    },
    get season () {
        if (this._season === null) {
            for (const seasonChange of this.constructor._seasonChanges) {
                if (this._monthOfYear > seasonChange.monthOfYear) {
                    this._season = seasonChange.season;
                    continue;
                }

                if (this._monthOfYear === seasonChange.monthOfYear) {
                    if (this._dayOfMonth >= seasonChange.dayOfMonth) {
                        this._season = seasonChange.season;
                        continue;
                    }
                }

                break;
            }
        }

        return this._season;
    },
    toJSON () {
        return {
            dayOfMonth: this._dayOfMonth,
            monthOfYear: this._monthOfYear,
            year: this._year
        };
    },
    toString () {
        const dayOfMonthString = `${this._dayOfMonth}`,
            monthOfYearString = `${this._monthOfYear}`;

        return `${this._year}-${'0'.repeat(`${this.constructor._monthCountPerYear}`.length - monthOfYearString.length)}${monthOfYearString}-${'0'.repeat(`${this.constructor._maximumDayCountPerMonth}`.length - dayOfMonthString.length)}${dayOfMonthString}`;
    },
    valueOf () {
        return this.day;
    },
    get year () {
        return this._year;
    },
    get yearName () {
        return this._yearName;
    },
    _init (config) {
        switch (typeof config) {
            case 'number':
                config = {
                    day: config
                };

                break;
            case 'object':
                if (config === null) {
                    throw _Error({
                        message: 'Invalid config',
                        name: 'TypeError'
                    });
                }

                break;
            case 'string': {
                const match = config.match(/^(-?\d+)-(\d+)-(\d+)$/u);

                if (match) {
                    config = {
                        dayOfMonth: +match[3],
                        monthOfYear: +match[2],
                        year: +match[1]
                    };
                } else {
                    throw _Error({
                        details: {
                            config
                        },
                        message: 'Invalid config',
                        name: 'TypeError'
                    });
                }

                break;
            }

            default:
                throw _Error({
                    message: 'Invalid config',
                    name: 'TypeError'
                });
        }

        if (Number.isInteger(config.day)) {
            this._day = config.day;

            if (config.day < 0) {
                config = {
                    dayOfMonth: 0,
                    monthOfYear: 0,
                    year: 0
                };

                let dayCount = -1,
                    inLeapYear = false,
                    potentialDayCount;

                do {
                    config.year -= 1;
                    inLeapYear = config.year % 4 === 0;

                    dayCount -= this.constructor._dayCountPerYear;

                    if (inLeapYear) {
                        dayCount -= 1;
                    }
                } while (dayCount >= this._day);

                potentialDayCount = dayCount;

                do {
                    config.monthOfYear += 1;

                    dayCount = potentialDayCount;
                    potentialDayCount += this.constructor._dayCountByMonthOfYear[config.monthOfYear];

                    if (inLeapYear && config.monthOfYear === this.constructor._leapYearMonthOfYear) {
                        potentialDayCount += 1;
                    }
                } while (potentialDayCount < this._day);

                config.dayOfMonth = this._day - dayCount;
            } else {
                config = {
                    dayOfMonth: 0,
                    monthOfYear: 0,
                    year: -1
                };

                let dayCount = 0,
                    inLeapYear = false,
                    potentialDayCount = 0;

                do {
                    config.year += 1;
                    inLeapYear = config.year % 4 === 0;

                    dayCount = potentialDayCount;
                    potentialDayCount += this.constructor._dayCountPerYear;

                    if (inLeapYear) {
                        potentialDayCount += 1;
                    }
                } while (potentialDayCount <= this._day);

                potentialDayCount = dayCount;

                do {
                    config.monthOfYear += 1;

                    dayCount = potentialDayCount;
                    potentialDayCount += this.constructor._dayCountByMonthOfYear[config.monthOfYear];

                    if (inLeapYear && config.monthOfYear === this.constructor._leapYearMonthOfYear) {
                        potentialDayCount += 1;
                    }
                } while (potentialDayCount <= this._day);

                config.dayOfMonth = this._day - dayCount + 1;
            }
        } else {
            if (!Number.isInteger(config.dayOfMonth)) {
                throw _Error({
                    message: 'Invalid day of month',
                    name: 'TypeError'
                });
            }

            if (!Number.isInteger(config.monthOfYear)) {
                throw _Error({
                    message: 'Invalid month of year',
                    name: 'TypeError'
                });
            }

            if (!Number.isInteger(config.year)) {
                throw _Error({
                    message: 'Invalid year',
                    name: 'TypeError'
                });
            }

            if (config.monthOfYear < 1 || config.monthOfYear > this.constructor._monthCountPerYear) {
                throw _Error({
                    details: {
                        monthCountPerYear: this.constructor._monthCountPerYear,
                        monthOfYear: config.monthOfYear,
                        year: config.year
                    },
                    message: 'Invalid month of year',
                    name: 'RangeError'
                });
            }

            this._day = null;
        }

        let dayCountPerMonthOfYear = this.constructor._dayCountByMonthOfYear[config.monthOfYear],
            dayName;

        const inLeapYear = config.year % 4 === 0;

        if (inLeapYear && config.monthOfYear === this.constructor._leapYearMonthOfYear) {
            dayCountPerMonthOfYear += 1;
        }

        if (config.dayOfMonth < 1 || config.dayOfMonth > dayCountPerMonthOfYear) {
            throw _Error({
                details: {
                    dayCountPerMonthOfYear,
                    dayOfMonth: config.dayOfMonth,
                    monthOfYear: config.monthOfYear,
                    year: config.year
                },
                message: 'Invalid day of month',
                name: 'RangeError'
            });
        }

        {
            const dayNameByDayOfMonth = this.constructor._dayNameByMonthOfYearAndDayOfMonth[config.monthOfYear];

            if (dayNameByDayOfMonth) {
                dayName = dayNameByDayOfMonth[config.dayOfMonth];
            }
        }

        this._dayCountPerMonthOfYear = dayCountPerMonthOfYear;
        this._dayName = dayName;
        this._dayOfMonth = config.dayOfMonth;
        this._dayOfTenday = null;
        this._dayOfYear = null;
        this._inLeapYear = inLeapYear;
        this._moonPhase = null;
        this._monthName = this.constructor._monthNameByMonthOfYear[config.monthOfYear];
        this._monthOfYear = config.monthOfYear;
        this._season = null;
        this._year = config.year;
        this._yearName = this.constructor._yearNameByYear[config.year];

        return this;
    }
}, {
    compare (a, b) {
        if (a._year < b._year) {
            return -1;
        }

        if (a._year > b._year) {
            return 1;
        }

        if (a._monthOfYear < b._monthOfYear) {
            return -1;
        }

        if (a._monthOfYear > b._monthOfYear) {
            return 1;
        }

        if (a._dayOfMonth < b._dayOfMonth) {
            return -1;
        }

        if (a._dayOfMonth > b._dayOfMonth) {
            return 1;
        }

        return 0;
    },
    _dayCountByMonthOfYear,
    _dayNameByMonthOfYearAndDayOfMonth,
    _init () {
        const dayCounts = Object.values(this._dayCountByMonthOfYear);

        this._dayCountPerYear = 0;
        this._maximumDayCountPerMonth = 0;
        this._monthCountPerYear = dayCounts.length;

        for (const dayCount of dayCounts) {
            this._dayCountPerYear += dayCount;

            if (dayCount > this._maximumDayCountPerMonth) {
                this._maximumDayCountPerMonth = dayCount;
            }
        }

        this._maximumDayCountPerMonth += 1;

        return this;
    },
    _leapYearMonthOfYear: 7,
    _monthNameByMonthOfYear,
    _moonPhases: _calculateMoonPhases({
        synodicPeriod: 30.4375
    }),
    _moonSynodicPeriodOffset: 0,
    _propertyChains: new Set([
        '_dayCountByMonthOfYear',
        '_dayNameByMonthOfYearAndDayOfMonth',
        '_monthNameByMonthOfYear',
        '_yearNameByYear'
    ]),
    _seasonChanges,
    _yearNameByYear
});
