# clock-clock-clock

[![XO](https://img.shields.io/badge/code_style-XO-5ed9c7.svg?style=flat-square)](https://github.com/xojs/xo)
[![Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://prettier.io/)

The [clock](https://threejs.org/docs/#api/core/Clock) used in [Three.js](https://threejs.org/), except as a standalone.

## Getting Started

### Installation

`yarn add clock-clock-clock`

### Usage

`import Clock from "clock-clock-clock";`

#### Clock

Object for keeping track of time. This uses `performance.now()`if it is available, otherwise it reverts to the less accurate `Date.now()`.

**Constructor**
Clock( autoStart : _Boolean_ )
autoStart — (optional) whether to automatically start the clock. Default is true.

**Properties**

`.autoStart` : _Boolean_

If set, starts the clock automatically when the first update is called. Default is true.

`.startTime :` _Float_

Holds the time at which the clock's start method was last called.

`.oldTime :` _Float_

Holds the time at which the clock's start, getElapsedTime or getDelta methods were last called.

`.elapsedTime :` _Float_

Keeps track of the total time that the clock has been running.

`.running :` _Boolean_

Whether the clock is running or not.

**Methods**

`.start()` : _null_

Starts clock. Also sets the startTime and oldTime to the current time, sets elapsedTime to 0 and running to true.

`.stop()` : _null_

Stops clock and sets oldTime to the current time.

`.getElapsedTime()` : _Float_

Get the seconds passed since the clock started and sets oldTime to the current time.
If autoStart is true and the clock is not running, also starts the clock.

`.getDelta()` : _Float_

Get the seconds passed since the time oldTime was set and sets oldTime to the current time.
If autoStart is true and the clock is not running, also starts the clock.

## Authors

* Original Author — [alteredq](http://alteredqualia.com)
* Version/Repo Maintainer — [John Mars](http://m4r5.io)

## License

MIT © Three.js Authors
