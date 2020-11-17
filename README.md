# harptos

> Class for representing a date in the Calendar of Harptos

The primary calendar system of the Forgotten Realms is called _The Calendar of
Harptos_, named after its creator. Groups of ten days are called a tenday. A
group of three tendays is called a month. A year consists of twelve months plus
an additional five or six festival days placed in-between the months. A leap
year occurs every four years.

## Usage

This module's default export is a function. This function can be called with the
`new` keyword as a constructor or called without the `new` keyword as a factory.

When using ECMAScript modules:

```JavaScript
import _Harptos from 'harptos';
```

When using CommonJS modules:

```JavaScript
const _Harptos = require('harptos').default;
```

### Constructor

The function requires one argument. The argument may be a number, an object, or
a string.

#### Number

A Harptos instance can be created from the number of days since Dalereckoning.
It can be negative, positive, or zero but it must be an integer.

```JavaScript
const harptos = _Harptos(505991);
```

#### Object

A Harptos instance can be created from a config object. If the config object has
a `day` property, the value is the number of days since Dalereckoning. This is
the same as a Number argument above. Otherwise the config object is expected to
have three properties: `dayOfMonth`, `monthOfYear`, and `year`. All three values
must be integers. `dayOfMonth` and `monthOfYear` must be positive and within a
valid range.

```JavaScript
const harptos = _Harptos({
    dayOfMonth: 29,
    monthOfYear: 4,
    year: 1385
});
```

A Harptos instance can be created from another Harptos instance.

```JavaScript
const harptos = _Harptos(other);
```

#### String

A Harptos instance can be created from a date string. The date string contains
the year, the month of year, and the day of month separated by dashes. These
numbers may optionally be padded with leading zeros.

```JavaScript
const harptos = _Harptos('1385-04-29');
```

### Instance Properties

All properties are read-only.

* `harptos.day` - Integer number of days since Dalereckoning. The first day of
Dalereckoning is 0.

* `harptos.dayName` - Optional string on certain named days. For example, Ches
19 is the Spring Equinox. This value is undefined on days that aren't named.

* `harptos.dayOfMonth` - Positive integer number day of month. The first day of
the month is 1. The festival days are technically between months, but they will
have day of month 31. The Shieldmeet leap day will have day of month 32.

* `harptos.dayOfTenday` - Optional positive integer number day of tenday. The
first day of the tenday is 1. This value is undefined on festival days and the
Shieldmeet leap day because they are not within a tenday.

* `harptos.dayOfYear` - Positive integer number day of year. The first day of
the year is 1.

* `harptos.inLeapYear` - Boolean whether this instance's year is a leap year.

* `harptos.monthName` - String name of the month.

* `harptos.monthOfYear` - Positive integer number month of year. The first month
of the year is 1.

* `harptos.moonPhase` - Object containing information about the phase of Selûne.
This object has three read-only properties: `icon`, `name`, and `value`. The
value of the moon phase is a number that is greater than negative 1 and less
than or equal to 1. This range can be expressed as (-1, 1]. The absolute value
of this number correlates with the amount of Selûne that is lit up. A value of 0
is a new moon and is completely dark. A value of 1 is a full moon and is
completely bright. A negative value is a waning phase and a positive value is a
waxing phase. A value of -.5 is the last quarter phase. A value of .5 is the
first quarter phase. The `icon` is a string containing a single unicode
character, one of these: 🌕 🌖 🌗 🌘 🌑 🌒 🌓 🌔. The `name` is the string
name of the moon phase.

* `harptos.season` - String name of one of the four seasons.

* `harptos.year` - Integer number Dalereckoning year.

* `harptos.yearName` - Optional string name of the year. Year names are defined
by the roll of years. This value is undefined in years that do not have a name.

### Instance Methods

* `harptos.equals(other)` - Requires one argument which should be a Harptos
instance. It returns true if the other instance refers to the same date as this
instance, otherwise it returns false.

* `harptos.toJSON()` - Returns a plain JavaScript object with three properties:
`dayOfMonth`, `monthOfYear`, and `year`.

* `harptos.toString()` - Returns a date string containing the year, the month of
year, and the day of month separated by dashes.

### Static Methods

* `_Harptos.compare(a, b)` - Requires two arguments which should both be Harptos
instances. If the date referred to by instance `a` is before the date referred
to by instance `b`, it returns `-1`. If the date referred to by instance `a` is
after the date referred to by instance `b`, it returns `1`. If the date referred
to by instance `a` is the same as the date referred to by instance `b`, it
returns `0`. This method could be used with `Array.prototype.sort` to sort an
array of Harptos instances.

### Type Coercion

#### Number

Harptos instances can be coerced to a number. The number value is the same as
`harptos.day`, the number of days since Dalereckoning. This can be used to
create a new instance by adding or subtracting a number of days.

```JavaScript
const today = _Harptos({
        dayOfMonth: 23,
        monthOfYear: 3,
        year: 1492
    }),
    tomorrow = _Harptos(today + 1),
    yesterday = _Harptos(today - 1);
```

#### String

Harptos instances can be coerced to a string. The string value is the same as
`harptos.toString()`.

```JavaScript
const date = _Harptos({
        dayOfMonth: 31,
        monthOfYear: 11,
        year: 1451
    }),
    string = `The next full moon is during the Feast of the Moon on ${date}.`;
```

## License

This module uses material from the ["Calendar of Harptos"](
https://forgottenrealms.fandom.com/wiki/Calendar_of_Harptos) article and from
the [Selûne (moon)](https://forgottenrealms.fandom.com/wiki/Sel%C3%BBne_(moon))
article on the [Forgotten Realms Wiki](https://forgottenrealms.fandom.com/) at
[Fandom](https://www.fandom.com/) under the [Creative Commons Attribution-Share
Alike License](https://creativecommons.org/licenses/by-sa/3.0/).
