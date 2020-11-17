export default ({
    synodicPeriod
}) => {
    let multipliedDay = 0,
        multipliedSynodicOffset = 0,
        multiplier = 1;

    if (!Number.isInteger(synodicPeriod)) {
        const synodicPeriodString = new Intl.NumberFormat('en-US', {
            maximumFractionDigits: 20,
            useGrouping: false
        }).format(synodicPeriod);

        multiplier = 10 ** (synodicPeriodString.length - synodicPeriodString.indexOf('.') - 1);
    }

    const moonPhases = [],
        multipliedSynodicPeriod = synodicPeriod * multiplier;

    do {
        if (multipliedSynodicOffset <= 0) {
            multipliedSynodicOffset += multipliedSynodicPeriod;
        }

        const previousMoonPhase = moonPhases[moonPhases.length - 1] || {},
            value = multipliedSynodicOffset / multipliedSynodicPeriod * 2 - 1;

        if (value <= -.5) {
            moonPhases.push({
                icon: '🌖',
                name: 'Waning Gibbous',
                value
            });

            if (previousMoonPhase.icon === '🌔') {
                previousMoonPhase.icon = '🌕';
                previousMoonPhase.name = 'Full Moon';
            }
        } else if (value <= 0) {
            moonPhases.push({
                icon: '🌘',
                name: 'Waning Crescent',
                value
            });

            if (previousMoonPhase.icon === '🌖') {
                previousMoonPhase.icon = '🌗';
                previousMoonPhase.name = 'Last Quarter';
            }
        } else if (value <= .5) {
            moonPhases.push({
                icon: '🌒',
                name: 'Waxing Crescent',
                value
            });

            if (previousMoonPhase.icon === '🌘') {
                previousMoonPhase.icon = '🌑';
                previousMoonPhase.name = 'New Moon';
            }
        } else {
            moonPhases.push({
                icon: '🌔',
                name: 'Waxing Gibbous',
                value
            });

            if (previousMoonPhase.icon === '🌒') {
                previousMoonPhase.icon = '🌓';
                previousMoonPhase.name = 'First Quarter';
            }
        }

        multipliedDay += multiplier;
        multipliedSynodicOffset = multipliedDay % multipliedSynodicPeriod;
    } while (multipliedSynodicOffset !== 0);

    return moonPhases;
};
