/**
 * clock.js
 * The clock used in three.js, except as a standalone.
 *
 * @author Original Author: alteredq / http://alteredqualia.com/
 * https://github.com/mrdoob/three.js/blob/master/src/core/Clock.js
 *
 * @author Version Maintainer: John Mars <john@m4r5.io>
 */

export default class Clock {
	constructor(autoStart = true) {
		this.autostart = autoStart;

		this.startTime = 0;
		this.oldTime = 0;
		this.elapsedTime = 0;

		this.running = false;
	}

	start() {
		this.startTime = (typeof performance === `undefined`
			? Date
			: performance
		).now(); // see #10732

		this.oldTime = this.startTime;
		this.elapsedTime = 0;
		this.running = true;
	}

	stop() {
		this.getElapsedTime();
		this.running = false;
		this.autoStart = false;
	}

	getElapsedTime() {
		this.getDelta();
		return this.elapsedTime;
	}

	getDelta() {
		let diff = 0;

		if (this.autoStart && !this.running) {
			this.start();
			return 0;
		}

		if (this.running) {
			const newTime = (typeof performance === `undefined`
				? Date
				: performance
			).now();

			diff = (newTime - this.oldTime) / 1000;
			this.oldTime = newTime;

			this.elapsedTime += diff;
		}

		return diff;
	}
}
