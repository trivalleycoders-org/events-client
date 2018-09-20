/* eslint-disable */
'use strict';

module.exports = function (fn, wait, opts) {
	if (!Number.isFinite(wait)) {
		throw new TypeError('Expected `wait` to be a finite number');
	}

	opts = opts || {};

	var leadingVal = void 0;
	var timer = void 0;
	var resolveList = [];

	return function () {
		var ctx = this;
		var args = arguments;

		return new Promise(function (resolve) {
			var runImmediately = opts.leading && !timer;

			clearTimeout(timer);

			timer = setTimeout(function () {
				timer = null;

				var res = opts.leading ? leadingVal : fn.apply(ctx, args);

				var _iteratorNormalCompletion = true;
				var _didIteratorError = false;
				var _iteratorError = undefined;

				try {
					for (var _iterator = resolveList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
						resolve = _step.value;

						resolve(res);
					}
				} catch (err) {
					_didIteratorError = true;
					_iteratorError = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion && _iterator.return) {
							_iterator.return();
						}
					} finally {
						if (_didIteratorError) {
							throw _iteratorError;
						}
					}
				}

				resolveList = [];
			}, wait);

			if (runImmediately) {
				leadingVal = fn.apply(ctx, args);
				resolve(leadingVal);
			} else {
				resolveList.push(resolve);
			}
		});
	};
};