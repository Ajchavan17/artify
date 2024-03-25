"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatPrice = exports.cn = void 0;
var clsx_1 = require("clsx");
var tailwind_merge_1 = require("tailwind-merge");
function cn() {
    var inputs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        inputs[_i] = arguments[_i];
    }
    return (0, tailwind_merge_1.twMerge)((0, clsx_1.clsx)(inputs));
}
exports.cn = cn;
function formatPrice(price, options) {
    if (options === void 0) { options = {}; }
    var _a = options.currency, currency = _a === void 0 ? "INR" : _a;
    var numericPrice = typeof price === "string" ? parseFloat(price) : price;
    var notation = "standard"; // Default notation
    // Check if the price is greater than or equal to 1000
    if (Math.abs(numericPrice) >= 1000 && Math.abs(numericPrice) < 1000000) {
        notation = "compact"; // Use compact notation for thousands
    }
    else if (Math.abs(numericPrice) >= 1000000) {
        notation = "compact"; // Use compact notation for millions
    }
    return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: currency,
        maximumFractionDigits: 2,
    }).format(numericPrice);
}
exports.formatPrice = formatPrice;
