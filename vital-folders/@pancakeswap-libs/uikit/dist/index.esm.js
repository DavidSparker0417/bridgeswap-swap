import React, { isValidElement, cloneElement, Children, useRef, useEffect, useState, useMemo, useReducer, useCallback, createContext, useContext } from 'react';
import styled, { keyframes, css, useTheme, createGlobalStyle } from 'styled-components';
import { space, typography, variant as variant$1, layout, background, border, position, flexbox } from 'styled-system';
import get from 'lodash/get';
import noop from 'lodash/noop';
import debounce from 'lodash/debounce';
import throttle from 'lodash/throttle';
import { Link as Link$1, NavLink, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __spreadArray(to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var getThemeValue = function (path, fallback) { return function (theme) {
    return get(theme, path, fallback);
}; };

var rotate$1 = keyframes(templateObject_1$U || (templateObject_1$U = __makeTemplateObject(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"], ["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"])));
var spinStyle = css(templateObject_2$l || (templateObject_2$l = __makeTemplateObject(["\n  animation: ", " 2s linear infinite;\n"], ["\n  animation: ", " 2s linear infinite;\n"])), rotate$1);
var Svg = styled.svg(templateObject_3$b || (templateObject_3$b = __makeTemplateObject(["\n  fill: ", ";\n  flex-shrink: 0;\n\n  ", "\n  ", "\n"], ["\n  fill: ", ";\n  flex-shrink: 0;\n\n  ", "\n  ", "\n"])), function (_a) {
    var theme = _a.theme, color = _a.color;
    return getThemeValue("colors." + color, color)(theme);
}, function (_a) {
    var spin = _a.spin;
    return spin && spinStyle;
}, space);
Svg.defaultProps = {
    color: "text",
    width: "20px",
    xmlns: "http://www.w3.org/2000/svg",
    spin: false,
};
var templateObject_1$U, templateObject_2$l, templateObject_3$b;

var Icon$1E = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM15.88 8.29L10 14.17L8.12 12.29C7.73 11.9 7.1 11.9 6.71 12.29C6.32 12.68 6.32 13.31 6.71 13.7L9.3 16.29C9.69 16.68 10.32 16.68 10.71 16.29L17.3 9.7C17.69 9.31 17.69 8.68 17.3 8.29C16.91 7.9 16.27 7.9 15.88 8.29Z" })));
};

var Icon$1D = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 7C12.55 7 13 7.45 13 8V12C13 12.55 12.55 13 12 13C11.45 13 11 12.55 11 12V8C11 7.45 11.45 7 12 7ZM11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM13 17H11V15H13V17Z" })));
};

var Icon$1C = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22ZM12 4C16.42 4 20 7.58 20 12C20 13.85 19.37 15.55 18.31 16.9L7.1 5.69C8.45 4.63 10.15 4 12 4ZM5.69 7.1L16.9 18.31C15.55 19.37 13.85 20 12 20C7.58 20 4 16.42 4 12C4 10.15 4.63 8.45 5.69 7.1Z" })));
};

var Icon$1B = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M11 7H13V9H11V7ZM12 17C12.55 17 13 16.55 13 16V12C13 11.45 12.55 11 12 11C11.45 11 11 11.45 11 12V16C11 16.55 11.45 17 12 17ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" })));
};

var getColor = function (_a) {
    var color = _a.color, theme = _a.theme;
    return getThemeValue("colors." + color, color)(theme);
};
var getFontSize = function (_a) {
    var fontSize = _a.fontSize, small = _a.small;
    return small ? "14px" : fontSize || "16px";
};
var Text = styled.div(templateObject_1$T || (templateObject_1$T = __makeTemplateObject(["\n  color: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  line-height: 1.5;\n  ", "\n  ", "\n  ", "\n"], ["\n  color: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  line-height: 1.5;\n  ", "\n  ", "\n  ", "\n"])), getColor, getFontSize, function (_a) {
    var bold = _a.bold;
    return (bold ? 600 : 400);
}, function (_a) {
    var textTransform = _a.textTransform;
    return textTransform && "text-transform: " + textTransform + ";";
}, space, typography);
Text.defaultProps = {
    color: "primary",
    small: false,
};
var templateObject_1$T;

var getExternalLinkProps = function () { return ({
    target: "_blank",
    rel: "noreferrer noopener",
}); };

var scales$6 = {
    MD: "md",
    SM: "sm",
    XS: "xs",
};
var variants$3 = {
    PRIMARY: "primary",
    SECONDARY: "secondary",
    TERTIARY: "tertiary",
    TEXT: "text",
    DANGER: "danger",
    SUBTLE: "subtle",
    SUCCESS: "success",
};

var _a$4, _b$1;
var scaleVariants$1 = (_a$4 = {},
    _a$4[scales$6.MD] = {
        height: "48px",
        padding: "0 24px",
    },
    _a$4[scales$6.SM] = {
        height: "32px",
        padding: "0 16px",
    },
    _a$4[scales$6.XS] = {
        height: "20px",
        fontSize: "12px",
        padding: "0 8px",
    },
    _a$4);
var styleVariants$2 = (_b$1 = {},
    _b$1[variants$3.PRIMARY] = {
        backgroundColor: "primary",
        color: "white",
    },
    _b$1[variants$3.SECONDARY] = {
        backgroundColor: "transparent",
        border: "2px solid",
        borderColor: "primary",
        boxShadow: "none",
        color: "primary",
        ":disabled": {
            backgroundColor: "transparent",
        },
    },
    _b$1[variants$3.TERTIARY] = {
        backgroundColor: "tertiary",
        boxShadow: "none",
        color: "primary",
    },
    _b$1[variants$3.SUBTLE] = {
        backgroundColor: "textSubtle",
        color: "white",
    },
    _b$1[variants$3.DANGER] = {
        backgroundColor: "failure",
        color: "white",
    },
    _b$1[variants$3.SUCCESS] = {
        backgroundColor: "success",
        color: "white",
    },
    _b$1[variants$3.TEXT] = {
        backgroundColor: "transparent",
        color: "primary",
        boxShadow: "none",
    },
    _b$1);

var getDisabledStyles = function (_a) {
    var $isLoading = _a.$isLoading, theme = _a.theme;
    if ($isLoading === true) {
        return "\n      &:disabled,\n      &.pancake-button--disabled {\n        cursor: not-allowed;\n      }\n    ";
    }
    return "\n    &:disabled,\n    &.pancake-button--disabled {\n      background-color: " + theme.colors.backgroundDisabled + ";\n      border-color: " + theme.colors.backgroundDisabled + ";\n      box-shadow: none;\n      color: " + theme.colors.textDisabled + ";\n      cursor: not-allowed;\n    }\n  ";
};
/**
 * This is to get around an issue where if you use a Link component
 * React will throw a invalid DOM attribute error
 * @see https://github.com/styled-components/styled-components/issues/135
 */
var getOpacity = function (_a) {
    var _b = _a.$isLoading, $isLoading = _b === void 0 ? false : _b;
    return $isLoading ? ".5" : "1";
};
var StyledButton = styled.button(templateObject_1$S || (templateObject_1$S = __makeTemplateObject(["\n  align-items: center;\n  border: 0;\n  border-radius: 16px;\n  box-shadow: 0px -1px 0px 0px rgba(14, 14, 44, 0.4) inset;\n  cursor: pointer;\n  display: inline-flex;\n  font-family: inherit;\n  font-size: 16px;\n  font-weight: 600;\n  justify-content: center;\n  letter-spacing: 0.03em;\n  line-height: 1;\n  opacity: ", ";\n  outline: 0;\n  transition: background-color 0.2s, opacity 0.2s;\n\n  &:hover:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled):not(:active) {\n    opacity: 0.65;\n  }\n\n  &:active:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled) {\n    opacity: 0.85;\n  }\n\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"], ["\n  align-items: center;\n  border: 0;\n  border-radius: 16px;\n  box-shadow: 0px -1px 0px 0px rgba(14, 14, 44, 0.4) inset;\n  cursor: pointer;\n  display: inline-flex;\n  font-family: inherit;\n  font-size: 16px;\n  font-weight: 600;\n  justify-content: center;\n  letter-spacing: 0.03em;\n  line-height: 1;\n  opacity: ", ";\n  outline: 0;\n  transition: background-color 0.2s, opacity 0.2s;\n\n  &:hover:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled):not(:active) {\n    opacity: 0.65;\n  }\n\n  &:active:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled) {\n    opacity: 0.85;\n  }\n\n  ", "\n  ",
    "\n  ",
    "\n  ", "\n  ", "\n"])), getOpacity, getDisabledStyles, variant$1({
    prop: "scale",
    variants: scaleVariants$1,
}), variant$1({
    variants: styleVariants$2,
}), layout, space);
var templateObject_1$S;

var Button = function (props) {
    var startIcon = props.startIcon, endIcon = props.endIcon, external = props.external, className = props.className, isLoading = props.isLoading, disabled = props.disabled, children = props.children, rest = __rest(props, ["startIcon", "endIcon", "external", "className", "isLoading", "disabled", "children"]);
    var internalProps = external ? getExternalLinkProps() : {};
    var isDisabled = isLoading || disabled;
    var classNames = className ? [className] : [];
    if (isLoading) {
        classNames.push("pancake-button--loading");
    }
    if (isDisabled && !isLoading) {
        classNames.push("pancake-button--disabled");
    }
    return (React.createElement(StyledButton, __assign({ "$isLoading": isLoading, className: classNames.join(" "), disabled: isDisabled }, internalProps, rest),
        React.createElement(React.Fragment, null,
            isValidElement(startIcon) &&
                cloneElement(startIcon, {
                    mr: "0.5rem",
                }),
            children,
            isValidElement(endIcon) &&
                cloneElement(endIcon, {
                    ml: "0.5rem",
                }))));
};
Button.defaultProps = {
    isLoading: false,
    external: false,
    variant: variants$3.PRIMARY,
    scale: scales$6.MD,
    disabled: false,
};

var IconButton = styled(Button)(templateObject_1$R || (templateObject_1$R = __makeTemplateObject(["\n  padding: 0;\n  width: ", ";\n"], ["\n  padding: 0;\n  width: ", ";\n"])), function (_a) {
    var scale = _a.scale;
    return (scale === "sm" ? "32px" : "48px");
});
var templateObject_1$R;

var Icon$1A = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M18 13H13V18C13 18.55 12.55 19 12 19C11.45 19 11 18.55 11 18V13H6C5.45 13 5 12.55 5 12C5 11.45 5.45 11 6 11H11V6C11 5.45 11.45 5 12 5C12.55 5 13 5.45 13 6V11H18C18.55 11 19 11.45 19 12C19 12.55 18.55 13 18 13Z" })));
};

var Icon$1z = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M19 11H7.82998L12.71 6.12C13.1 5.73 13.1 5.09 12.71 4.7C12.32 4.31 11.69 4.31 11.3 4.7L4.70998 11.29C4.31998 11.68 4.31998 12.31 4.70998 12.7L11.3 19.29C11.69 19.68 12.32 19.68 12.71 19.29C13.1 18.9 13.1 18.27 12.71 17.88L7.82998 13H19C19.55 13 20 12.55 20 12C20 11.45 19.55 11 19 11Z" })));
};

var Icon$1y = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M11 5V16.17L6.11997 11.29C5.72997 10.9 5.08997 10.9 4.69997 11.29C4.30997 11.68 4.30997 12.31 4.69997 12.7L11.29 19.29C11.68 19.68 12.31 19.68 12.7 19.29L19.29 12.7C19.68 12.31 19.68 11.68 19.29 11.29C18.9 10.9 18.27 10.9 17.88 11.29L13 16.17V5C13 4.45 12.55 4 12 4C11.45 4 11 4.45 11 5Z" })));
};

var Icon$1x = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M8.71005 11.71L11.3001 14.3C11.6901 14.69 12.3201 14.69 12.7101 14.3L15.3001 11.71C15.9301 11.08 15.4801 10 14.5901 10H9.41005C8.52005 10 8.08005 11.08 8.71005 11.71Z" })));
};

var Icon$1w = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M8.71005 12.29L11.3001 9.69997C11.6901 9.30997 12.3201 9.30997 12.7101 9.69997L15.3001 12.29C15.9301 12.92 15.4801 14 14.5901 14H9.41005C8.52005 14 8.08005 12.92 8.71005 12.29Z" })));
};

var Icon$1v = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M5 13H16.17L11.29 17.88C10.9 18.27 10.9 18.91 11.29 19.3C11.68 19.69 12.31 19.69 12.7 19.3L19.29 12.71C19.68 12.32 19.68 11.69 19.29 11.3L12.71 4.7C12.32 4.31 11.69 4.31 11.3 4.7C10.91 5.09 10.91 5.72 11.3 6.11L16.17 11H5C4.45 11 4 11.45 4 12C4 12.55 4.45 13 5 13Z" })));
};

var Icon$1u = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M13 19V7.83001L17.88 12.71C18.27 13.1 18.91 13.1 19.3 12.71C19.69 12.32 19.69 11.69 19.3 11.3L12.71 4.71001C12.32 4.32001 11.69 4.32001 11.3 4.71001L4.69997 11.29C4.30997 11.68 4.30997 12.31 4.69997 12.7C5.08997 13.09 5.71997 13.09 6.10997 12.7L11 7.83001V19C11 19.55 11.45 20 12 20C12.55 20 13 19.55 13 19Z" })));
};

var Icon$1t = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 6V7.79C12 8.24 12.54 8.46 12.85 8.14L15.64 5.35C15.84 5.15 15.84 4.84 15.64 4.64L12.85 1.85C12.54 1.54 12 1.76 12 2.21V4C7.58 4 4 7.58 4 12C4 13.04 4.2 14.04 4.57 14.95C4.84 15.62 5.7 15.8 6.21 15.29C6.48 15.02 6.59 14.61 6.44 14.25C6.15 13.56 6 12.79 6 12C6 8.69 8.69 6 12 6ZM17.79 8.71C17.52 8.98 17.41 9.4 17.56 9.75C17.84 10.45 18 11.21 18 12C18 15.31 15.31 18 12 18V16.21C12 15.76 11.46 15.54 11.15 15.86L8.36 18.65C8.16 18.85 8.16 19.16 8.36 19.36L11.15 22.15C11.46 22.46 12 22.24 12 21.8V20C16.42 20 20 16.42 20 12C20 10.96 19.8 9.96 19.43 9.05C19.16 8.38 18.3 8.2 17.79 8.71Z" })));
};

var Icon$1s = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 16 16" }, props),
        React.createElement("circle", { cx: "8", cy: "8", r: "8", fill: "#F0B90B" }),
        React.createElement("path", { d: "M5.01656 8.00006L3.79256 9.23256L2.56006 8.00006L3.79256 6.76756L5.01656 8.00006ZM8.00006 5.01656L10.1081 7.12456L11.3406 5.89206L9.23256 3.79256L8.00006 2.56006L6.76756 3.79256L4.66806 5.89206L5.90056 7.12456L8.00006 5.01656ZM12.2076 6.76756L10.9836 8.00006L12.2161 9.23256L13.4401 8.00006L12.2076 6.76756ZM8.00006 10.9836L5.89206 8.87556L4.66806 10.1081L6.77606 12.2161L8.00006 13.4401L9.23256 12.2076L11.3406 10.0996L10.1081 8.87556L8.00006 10.9836ZM8.00006 9.23256L9.23256 8.00006L8.00006 6.76756L6.76756 8.00006L8.00006 9.23256Z", fill: "#FFFDFA" })));
};

var Icon$1r = function (props) {
    var theme = useTheme();
    var primaryColor = theme.isDark ? "#3C3742" : "#e9eaeb";
    var secondaryColor = theme.isDark ? "#666171" : "#bdc2c4";
    return (React.createElement(Svg, __assign({ viewBox: "0 0 72 72" }, props),
        React.createElement("path", { d: "M72 36C72 55.8823 55.8823 72 36 72C16.1177 72 0 55.8823 0 36C0 16.1177 16.1177 0 36 0C55.8823 0 72 16.1177 72 36Z", fill: primaryColor }),
        React.createElement("mask", { id: "mask0", "mask-type": "alpha", maskUnits: "userSpaceOnUse", x: "3", y: "3", width: "66", height: "66" },
            React.createElement("path", { d: "M68.25 36C68.25 53.8112 53.8112 68.25 36 68.25C18.1888 68.25 3.75 53.8112 3.75 36C3.75 18.1888 18.1888 3.75 36 3.75C53.8112 3.75 68.25 18.1888 68.25 36Z", fill: "#C4C4C4" })),
        React.createElement("g", { mask: "url(#mask0)" },
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M20.9927 23.2654C26.1289 23.1362 30.0824 27.7278 29.2039 32.7879L27.6838 41.5445C30.2298 41.0514 32.9304 40.7875 35.7229 40.7875C37.7063 40.7875 39.6424 40.9206 41.5089 41.1741L49.2862 29.5726C51.7713 25.8657 56.7909 24.8751 60.4978 27.3602C64.7827 30.2326 65.3155 36.33 61.5938 39.9021L55.2585 45.9828C59.9045 49.0009 63.1305 53.2977 63.1306 58.4066V62.322C63.1306 67.644 59.6097 72.0998 54.6877 75.1077C49.7272 78.1391 43.0165 79.9412 35.7229 79.9412C28.4292 79.9412 21.7186 78.1391 16.7581 75.1077C11.836 72.0998 8.31519 67.644 8.31519 62.322V58.4067C8.31522 54.4286 10.2963 50.9169 13.3384 48.1585L13.0101 31.6154C12.9208 27.115 16.4929 23.3785 20.9927 23.2654ZM15.617 49.1514C15.6003 49.0112 15.5903 48.8688 15.5874 48.7246L15.2471 31.571C15.1822 28.3014 17.7798 25.5842 21.049 25.502C24.7712 25.4084 27.637 28.733 26.9996 32.4052L24.8971 44.5163C25.6681 44.2915 26.4607 44.0899 27.2726 43.9131C29.9138 43.338 32.7585 43.0248 35.7229 43.0248C38.1625 43.0248 40.5211 43.237 42.7519 43.6326C42.8725 43.2609 43.0459 42.8995 43.2742 42.5589L51.1446 30.8185C52.9416 28.1379 56.5714 27.4216 59.252 29.2186C62.3505 31.2957 62.7358 35.7049 60.0446 38.2879L51.5469 46.4441C52.264 46.7988 52.9486 47.1771 53.5975 47.577C58.1074 50.3568 60.8932 54.1829 60.8932 58.4066V62.322C60.8932 70.8172 49.6241 77.7039 35.7229 77.7039C21.8217 77.7039 10.5525 70.8172 10.5525 62.322V58.4067C10.5526 54.9322 12.4377 51.7266 15.617 49.1514Z", fill: secondaryColor }),
            React.createElement("path", { d: "M60.8932 62.3221C60.8932 70.8173 49.624 77.704 35.7228 77.704C21.8216 77.704 10.5525 70.8173 10.5525 62.3221V58.4067H60.8932V62.3221Z", fill: primaryColor }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M26.9995 32.4051C27.637 28.733 24.7711 25.4083 21.0489 25.5019C17.7797 25.5842 15.1821 28.3013 15.247 31.5709L15.5874 48.7245C15.5903 48.8687 15.6002 49.0111 15.617 49.1513C12.4376 51.7266 10.5525 54.9321 10.5525 58.4066C10.5525 66.9018 21.8216 73.7885 35.7228 73.7885C49.624 73.7885 60.8932 66.9018 60.8932 58.4066C60.8932 53.5752 57.2481 49.264 51.5468 46.444L60.0445 38.2879C62.7358 35.7048 62.3504 31.2956 59.252 29.2185C56.5714 27.4215 52.9416 28.1378 51.1446 30.8184L43.2742 42.5588C43.0458 42.8994 42.8724 43.2609 42.7519 43.6326C40.521 43.2369 38.1625 43.0248 35.7228 43.0248C31.8473 43.0248 28.1763 43.56 24.897 44.5162L26.9995 32.4051Z", fill: primaryColor }),
            React.createElement("path", { d: "M32.0873 57.2881C32.0873 59.6049 30.8352 61.4831 29.2906 61.4831C27.746 61.4831 26.4939 59.6049 26.4939 57.2881C26.4939 54.9712 27.746 53.093 29.2906 53.093C30.8352 53.093 32.0873 54.9712 32.0873 57.2881Z", fill: secondaryColor }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M28.891 54.0353C29.461 54.8903 29.8499 56.1359 29.8499 57.5677C29.8499 58.1855 30.3508 58.6864 30.9686 58.6864C31.5864 58.6864 32.0873 58.1855 32.0873 57.5677C32.0873 55.7558 31.5997 54.0649 30.7526 52.7943C29.9107 51.5314 28.6248 50.5759 27.0532 50.5759C25.4816 50.5759 24.1957 51.5314 23.3538 52.7943C22.5067 54.0649 22.0191 55.7558 22.0191 57.5677C22.0191 58.55 22.1622 59.4908 22.4244 60.3463C22.6055 60.937 23.2311 61.2691 23.8218 61.088C24.4125 60.9069 24.7446 60.2813 24.5635 59.6906C24.3685 59.0543 24.2565 58.3349 24.2565 57.5677C24.2565 56.1359 24.6454 54.8903 25.2154 54.0353C25.7906 53.1725 26.4624 52.8133 27.0532 52.8133C27.644 52.8133 28.3158 53.1725 28.891 54.0353Z", fill: secondaryColor }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M48.1883 54.0353C48.7582 54.8903 49.1472 56.1359 49.1472 57.5677C49.1472 58.1855 49.648 58.6864 50.2658 58.6864C50.8837 58.6864 51.3845 58.1855 51.3845 57.5677C51.3845 55.7558 50.8969 54.0649 50.0498 52.7943C49.208 51.5314 47.9221 50.5759 46.3505 50.5759C44.7788 50.5759 43.4929 51.5314 42.6511 52.7943C41.804 54.0649 41.3164 55.7558 41.3164 57.5677C41.3164 58.55 41.4594 59.4908 41.7216 60.3463C41.9027 60.937 42.5284 61.2691 43.1191 61.088C43.7098 60.9069 44.0418 60.2813 43.8608 59.6906C43.6657 59.0543 43.5538 58.3349 43.5538 57.5677C43.5538 56.1359 43.9427 54.8903 44.5127 54.0353C45.0879 53.1725 45.7597 52.8133 46.3505 52.8133C46.9412 52.8133 47.613 53.1725 48.1883 54.0353Z", fill: secondaryColor }),
            React.createElement("path", { d: "M51.3844 57.2881C51.3844 59.6049 50.1323 61.4831 48.5877 61.4831C47.0431 61.4831 45.791 59.6049 45.791 57.2881C45.791 54.9712 47.0431 53.093 48.5877 53.093C50.1323 53.093 51.3844 54.9712 51.3844 57.2881Z", fill: secondaryColor }),
            React.createElement("path", { d: "M34.0221 25.9463V25.2697C34.0221 24.32 34.2121 23.5247 34.5919 22.8836C34.9956 22.2426 35.5297 21.6134 36.1945 20.9961C36.8118 20.4026 37.4172 19.8921 38.0108 19.4648C38.6043 19.0374 39.091 18.5863 39.4709 18.1115C39.8508 17.6367 40.0407 17.0787 40.0407 16.4377C40.0407 15.5118 39.7083 14.8589 39.0436 14.479C38.4025 14.0754 37.3223 13.8736 35.8028 13.8736C34.8056 13.8736 33.8203 14.0041 32.8469 14.2653C31.8735 14.5027 31.0425 14.8114 30.354 15.1912V10.3835C31.2325 9.95615 32.2652 9.61189 33.4523 9.35073C34.6632 9.08957 35.9808 8.95898 37.4054 8.95898C40.1594 8.95898 42.2606 9.5644 43.7088 10.7752C45.1571 11.9623 45.8812 13.6005 45.8812 15.6898C45.8812 17.0194 45.6082 18.0996 45.0621 18.9306C44.5161 19.7378 43.7207 20.5688 42.6761 21.4235C41.7976 22.1595 41.0616 22.8005 40.4681 23.3466C39.8745 23.8689 39.5777 24.5812 39.5777 25.4834V25.9463H34.0221ZM33.7728 32.2498V28.1187H39.7914V32.2498H33.7728Z", fill: secondaryColor })),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M71.9838 37.09L69.7348 37.0231C69.7449 36.6834 69.75 36.3423 69.75 36C69.75 35.6577 69.7449 35.3166 69.7348 34.9769L71.9838 34.91C71.9946 35.272 72 35.6354 72 36C72 36.3646 71.9946 36.728 71.9838 37.09ZM71.8544 32.7398L69.6134 32.941C69.5523 32.2603 69.471 31.5857 69.3702 30.9176L71.5949 30.5818C71.7025 31.2945 71.7892 32.014 71.8544 32.7398ZM71.2052 28.4414L69.0048 28.9115C68.8622 28.2441 68.6999 27.5841 68.5185 26.932L70.6861 26.3289C70.8798 27.0248 71.053 27.7292 71.2052 28.4414ZM70.0397 24.2525L67.9128 24.9864C67.6906 24.3424 67.4494 23.7072 67.1899 23.0815L69.2683 22.2196C69.5452 22.8874 69.8026 23.5652 70.0397 24.2525ZM68.3746 20.237L66.3524 21.2235C66.0538 20.6114 65.7373 20.0097 65.4034 19.419L67.3622 18.3119C67.7183 18.942 68.0561 19.584 68.3746 20.237ZM66.2353 16.4517L64.347 17.6751C63.977 17.104 63.5901 16.5448 63.1872 15.998L64.9984 14.6631C65.4281 15.2462 65.8407 15.8426 66.2353 16.4517ZM63.656 12.952L61.9283 14.3934C61.4925 13.8711 61.0413 13.3621 60.5752 12.8671L62.2132 11.3246C62.7102 11.8523 63.1914 12.3951 63.656 12.952ZM60.6754 9.78678L59.1329 11.4248C58.6379 10.9587 58.1289 10.5074 57.6066 10.0717L59.048 8.34397C59.6049 8.80865 60.1477 9.28984 60.6754 9.78678ZM57.3369 7.00159L56.002 8.8128C55.4552 8.40985 54.896 8.02303 54.3249 7.65302L55.5482 5.76468C56.1574 6.15933 56.7538 6.57187 57.3369 7.00159ZM53.6881 4.63782L52.581 6.5966C51.9903 6.26271 51.3886 5.94615 50.7765 5.64759L51.7629 3.62536C52.416 3.94392 53.058 4.28165 53.6881 4.63782ZM49.7804 2.7317L48.9185 4.81008C48.2928 4.55061 47.6576 4.30943 47.0136 4.08723L47.7475 1.96028C48.4348 2.19743 49.1126 2.4548 49.7804 2.7317ZM45.6711 1.31385L45.068 3.48152C44.4159 3.3001 43.7559 3.13777 43.0885 2.99517L43.5586 0.794831C44.2708 0.947003 44.9752 1.12024 45.6711 1.31385ZM41.4182 0.405049L41.0824 2.62985C40.4143 2.529 39.7397 2.44772 39.059 2.38662L39.2602 0.14563C39.986 0.210778 40.7055 0.297466 41.4182 0.405049ZM37.09 0.0161859C36.728 0.0054207 36.3646 0 36 0C35.6354 0 35.272 0.00542073 34.91 0.016186L34.9769 2.26519C35.3166 2.25509 35.6577 2.25 36 2.25C36.3423 2.25 36.6834 2.25509 37.0231 2.26519L37.09 0.0161859ZM32.7398 0.145631L32.941 2.38662C32.2603 2.44772 31.5857 2.529 30.9176 2.62985L30.5818 0.405049C31.2945 0.297467 32.014 0.210779 32.7398 0.145631ZM28.4414 0.794832L28.9115 2.99517C28.2441 3.13777 27.5841 3.3001 26.932 3.48152L26.3289 1.31386C27.0248 1.12024 27.7292 0.947004 28.4414 0.794832ZM24.2525 1.96028L24.9864 4.08723C24.3424 4.30944 23.7072 4.55061 23.0815 4.81008L22.2196 2.7317C22.8874 2.45481 23.5652 2.19743 24.2525 1.96028ZM20.237 3.62536L21.2235 5.64759C20.6114 5.94616 20.0097 6.26272 19.419 6.5966L18.3119 4.63783C18.942 4.28165 19.584 3.94392 20.237 3.62536ZM16.4517 5.76469L17.6751 7.65302C17.104 8.02303 16.5448 8.40985 15.998 8.81281L14.6631 7.00159C15.2462 6.57188 15.8426 6.15933 16.4517 5.76469ZM12.952 8.34398L14.3934 10.0717C13.8711 10.5075 13.3621 10.9587 12.8671 11.4248L11.3246 9.78679C11.8523 9.28984 12.3951 8.80865 12.952 8.34398ZM9.78678 11.3246L11.4248 12.8671C10.9587 13.3621 10.5074 13.8711 10.0717 14.3934L8.34397 12.952C8.80865 12.3951 9.28984 11.8523 9.78678 11.3246ZM7.00159 14.6631L8.8128 15.998C8.40985 16.5448 8.02303 17.104 7.65302 17.6751L5.76468 16.4518C6.15933 15.8426 6.57187 15.2462 7.00159 14.6631ZM4.63782 18.3119L6.5966 19.419C6.26271 20.0097 5.94615 20.6114 5.64759 21.2235L3.62536 20.2371C3.94392 19.584 4.28165 18.942 4.63782 18.3119ZM2.7317 22.2196L4.81008 23.0815C4.55061 23.7072 4.30943 24.3424 4.08723 24.9864L1.96028 24.2525C2.19743 23.5652 2.4548 22.8874 2.7317 22.2196ZM1.31385 26.3289L3.48152 26.932C3.3001 27.5841 3.13777 28.2441 2.99517 28.9115L0.794831 28.4414C0.947003 27.7292 1.12024 27.0248 1.31385 26.3289ZM0.405049 30.5818L2.62985 30.9176C2.529 31.5857 2.44772 32.2603 2.38662 32.941L0.14563 32.7398C0.210778 32.014 0.297466 31.2945 0.405049 30.5818ZM0.0161859 34.91C0.0054207 35.272 0 35.6354 0 36C0 36.3646 0.00542073 36.728 0.016186 37.09L2.26519 37.0231C2.25509 36.6834 2.25 36.3423 2.25 36C2.25 35.6577 2.25509 35.3166 2.26519 34.9769L0.0161859 34.91ZM0.145631 39.2602L2.38662 39.059C2.44772 39.7397 2.529 40.4143 2.62985 41.0824L0.40505 41.4182C0.297467 40.7055 0.210779 39.986 0.145631 39.2602ZM0.794833 43.5586L2.99517 43.0885C3.13777 43.7559 3.3001 44.4159 3.48152 45.068L1.31386 45.6711C1.12024 44.9752 0.947004 44.2708 0.794833 43.5586ZM1.96028 47.7475L4.08723 47.0136C4.30944 47.6576 4.55061 48.2928 4.81008 48.9185L2.7317 49.7804C2.45481 49.1126 2.19743 48.4348 1.96028 47.7475ZM3.62536 51.763L5.64759 50.7765C5.94616 51.3886 6.26272 51.9903 6.5966 52.581L4.63783 53.6881C4.28165 53.058 3.94392 52.416 3.62536 51.763ZM5.76469 55.5482L7.65302 54.3249C8.02303 54.896 8.40985 55.4552 8.81281 56.002L7.00159 57.3369C6.57188 56.7538 6.15933 56.1574 5.76469 55.5482ZM8.34398 59.048L10.0717 57.6066C10.5075 58.1289 10.9587 58.6379 11.4248 59.1329L9.78679 60.6754C9.28984 60.1477 8.80865 59.6049 8.34398 59.048ZM11.3246 62.2132L12.8671 60.5752C13.3621 61.0413 13.8711 61.4925 14.3934 61.9283L12.952 63.656C12.3951 63.1914 11.8523 62.7102 11.3246 62.2132ZM14.6631 64.9984L15.998 63.1872C16.5448 63.5901 17.104 63.977 17.6751 64.347L16.4518 66.2353C15.8426 65.8407 15.2462 65.4281 14.6631 64.9984ZM18.3119 67.3622L19.419 65.4034C20.0097 65.7373 20.6114 66.0538 21.2235 66.3524L20.2371 68.3746C19.584 68.0561 18.942 67.7184 18.3119 67.3622ZM22.2196 69.2683L23.0815 67.1899C23.7072 67.4494 24.3424 67.6906 24.9864 67.9128L24.2525 70.0397C23.5652 69.8026 22.8874 69.5452 22.2196 69.2683ZM26.3289 70.6861L26.932 68.5185C27.5841 68.6999 28.2441 68.8622 28.9115 69.0048L28.4414 71.2052C27.7292 71.053 27.0248 70.8798 26.3289 70.6861ZM30.5818 71.595L30.9176 69.3702C31.5857 69.471 32.2603 69.5523 32.941 69.6134L32.7398 71.8544C32.014 71.7892 31.2945 71.7025 30.5818 71.595ZM34.91 71.9838L34.9769 69.7348C35.3166 69.7449 35.6577 69.75 36 69.75C36.3423 69.75 36.6834 69.7449 37.0231 69.7348L37.09 71.9838C36.728 71.9946 36.3646 72 36 72C35.6354 72 35.272 71.9946 34.91 71.9838ZM39.2602 71.8544L39.059 69.6134C39.7397 69.5523 40.4143 69.471 41.0824 69.3702L41.4182 71.5949C40.7055 71.7025 39.986 71.7892 39.2602 71.8544ZM43.5586 71.2052L43.0885 69.0048C43.7559 68.8622 44.4159 68.6999 45.068 68.5185L45.6711 70.6861C44.9752 70.8798 44.2708 71.053 43.5586 71.2052ZM47.7475 70.0397L47.0136 67.9128C47.6576 67.6906 48.2928 67.4494 48.9185 67.1899L49.7804 69.2683C49.1126 69.5452 48.4348 69.8026 47.7475 70.0397ZM51.7629 68.3746L50.7765 66.3524C51.3886 66.0538 51.9903 65.7373 52.581 65.4034L53.6881 67.3622C53.058 67.7183 52.416 68.0561 51.7629 68.3746ZM55.5482 66.2353L54.3249 64.347C54.896 63.977 55.4552 63.5901 56.002 63.1872L57.3369 64.9984C56.7538 65.4281 56.1574 65.8407 55.5482 66.2353ZM59.048 63.656L57.6066 61.9283C58.1289 61.4925 58.6379 61.0413 59.1329 60.5752L60.6754 62.2132C60.1477 62.7102 59.6049 63.1914 59.048 63.656ZM62.2132 60.6754L60.5752 59.1329C61.0413 58.6379 61.4925 58.1289 61.9283 57.6066L63.656 59.048C63.1914 59.6049 62.7102 60.1477 62.2132 60.6754ZM64.9984 57.3369L63.1872 56.002C63.5901 55.4552 63.977 54.896 64.347 54.3249L66.2353 55.5482C65.8407 56.1574 65.4281 56.7538 64.9984 57.3369ZM67.3622 53.6881L65.4034 52.581C65.7373 51.9903 66.0538 51.3886 66.3524 50.7765L68.3746 51.7629C68.0561 52.416 67.7184 53.058 67.3622 53.6881ZM69.2683 49.7804L67.1899 48.9185C67.4494 48.2928 67.6906 47.6576 67.9128 47.0136L70.0397 47.7475C69.8026 48.4348 69.5452 49.1126 69.2683 49.7804ZM70.6861 45.6711L68.5185 45.068C68.6999 44.4159 68.8622 43.7559 69.0048 43.0885L71.2052 43.5586C71.053 44.2708 70.8798 44.9752 70.6861 45.6711ZM71.595 41.4182L69.3702 41.0824C69.471 40.4143 69.5523 39.7397 69.6134 39.059L71.8544 39.2602C71.7892 39.986 71.7025 40.7055 71.595 41.4182Z", fill: secondaryColor })));
};

var Icon$1q = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.0967 17.8521L7.87565 20.2891C6.91907 20.8414 5.69589 20.5136 5.1436 19.557L0.999729 12.3796C0.447444 11.4231 0.775193 10.1999 1.73178 9.64759L6.31754 7C6.53486 6.87453 6.76593 6.79448 6.99977 6.75691V6C6.99977 4.89543 7.8952 4 8.99977 4H14.9998C16.1043 4 16.9998 4.89543 16.9998 6V6.73545C17.299 6.75379 17.5986 6.83993 17.8759 7L22.4616 9.64759C23.4182 10.1999 23.746 11.4231 23.1937 12.3796L19.0498 19.557C18.4975 20.5136 17.2743 20.8414 16.3178 20.2891L12.0967 17.8521ZM8.99977 6L14.9998 6L14.9998 7.98154L11.2363 14.5H8.99977L8.99977 6ZM6.99977 14.5L6.99977 8.91551L2.73178 11.3796L6.87565 18.557L10.4386 16.5H8.99977C7.8952 16.5 6.99977 15.6046 6.99977 14.5ZM16.8759 8.73205L21.4616 11.3796L17.3178 18.557L12.732 15.9094L16.8759 8.73205Z" })));
};

var Icon$1p = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M4.5 12H7.5C8.05 12 8.5 11.55 8.5 11V7C8.5 6.45 8.05 6 7.5 6H4.5C3.95 6 3.5 6.45 3.5 7V11C3.5 11.55 3.95 12 4.5 12ZM4.5 19H7.5C8.05 19 8.5 18.55 8.5 18V14C8.5 13.45 8.05 13 7.5 13H4.5C3.95 13 3.5 13.45 3.5 14V18C3.5 18.55 3.95 19 4.5 19ZM10.5 19H13.5C14.05 19 14.5 18.55 14.5 18V14C14.5 13.45 14.05 13 13.5 13H10.5C9.95 13 9.5 13.45 9.5 14V18C9.5 18.55 9.95 19 10.5 19ZM16.5 19H19.5C20.05 19 20.5 18.55 20.5 18V14C20.5 13.45 20.05 13 19.5 13H16.5C15.95 13 15.5 13.45 15.5 14V18C15.5 18.55 15.95 19 16.5 19ZM10.5 12H13.5C14.05 12 14.5 11.55 14.5 11V7C14.5 6.45 14.05 6 13.5 6H10.5C9.95 6 9.5 6.45 9.5 7V11C9.5 11.55 9.95 12 10.5 12ZM15.5 7V11C15.5 11.55 15.95 12 16.5 12H19.5C20.05 12 20.5 11.55 20.5 11V7C20.5 6.45 20.05 6 19.5 6H16.5C15.95 6 15.5 6.45 15.5 7Z" })));
};

var Icon$1o = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z" }),
        React.createElement("path", { d: "M11.25 7.72H6.25V9.22H11.25V7.72Z" }),
        React.createElement("path", { d: "M18 15.75H13V17.25H18V15.75Z" }),
        React.createElement("path", { d: "M18 13.25H13V14.75H18V13.25Z" }),
        React.createElement("path", { d: "M8 18H9.5V16H11.5V14.5H9.5V12.5H8V14.5H6V16H8V18Z" }),
        React.createElement("path", { d: "M14.09 10.95L15.5 9.54L16.91 10.95L17.97 9.89L16.56 8.47L17.97 7.06L16.91 6L15.5 7.41L14.09 6L13.03 7.06L14.44 8.47L13.03 9.89L14.09 10.95Z" })));
};

var Icon$1n = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" })));
};

var Icon$1m = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M5 7C5 6.44772 4.55228 6 4 6C3.44772 6 3 6.44772 3 7V18C3 19.1046 3.89543 20 5 20H20C20.5523 20 21 19.5523 21 19C21 18.4477 20.5523 18 20 18H5V7Z" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19 17H7C6.44772 17 6 16.5523 6 16V12C6 11.4477 6.44772 11 7 11H10V10C10 9.44772 10.4477 9 11 9H14V7C14 6.44772 14.4477 6 15 6H19C19.5523 6 20 6.44772 20 7V16C20 16.5523 19.5523 17 19 17ZM16 8H18V15H16V8ZM12 15H14V11H12V15ZM10 13H8V15H10V13Z" })));
};

var Icon$1l = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M9.00012 16.2L5.50012 12.7C5.11012 12.31 4.49012 12.31 4.10012 12.7C3.71012 13.09 3.71012 13.71 4.10012 14.1L8.29012 18.29C8.68012 18.68 9.31012 18.68 9.70012 18.29L20.3001 7.70001C20.6901 7.31001 20.6901 6.69001 20.3001 6.30001C19.9101 5.91001 19.2901 5.91001 18.9001 6.30001L9.00012 16.2Z" })));
};

var Icon$1k = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z" })));
};

var Icon$1j = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M14.71 15.88L10.83 12L14.71 8.12001C15.1 7.73001 15.1 7.10001 14.71 6.71001C14.32 6.32001 13.69 6.32001 13.3 6.71001L8.70998 11.3C8.31998 11.69 8.31998 12.32 8.70998 12.71L13.3 17.3C13.69 17.69 14.32 17.69 14.71 17.3C15.09 16.91 15.1 16.27 14.71 15.88Z" })));
};

var Icon$1i = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M9.29006 15.88L13.1701 12L9.29006 8.12001C8.90006 7.73001 8.90006 7.10001 9.29006 6.71001C9.68006 6.32001 10.3101 6.32001 10.7001 6.71001L15.2901 11.3C15.6801 11.69 15.6801 12.32 15.2901 12.71L10.7001 17.3C10.3101 17.69 9.68006 17.69 9.29006 17.3C8.91006 16.91 8.90006 16.27 9.29006 15.88Z" })));
};

var Icon$1h = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M8.11997 14.7101L12 10.8301L15.88 14.7101C16.27 15.1001 16.9 15.1001 17.29 14.7101C17.68 14.3201 17.68 13.6901 17.29 13.3001L12.7 8.7101C12.31 8.3201 11.68 8.3201 11.29 8.7101L6.69997 13.3001C6.30997 13.6901 6.30997 14.3201 6.69997 14.7101C7.08997 15.0901 7.72997 15.1001 8.11997 14.7101Z" })));
};

var Icon$1g = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M18.3 5.70997C17.91 5.31997 17.28 5.31997 16.89 5.70997L12 10.59L7.10997 5.69997C6.71997 5.30997 6.08997 5.30997 5.69997 5.69997C5.30997 6.08997 5.30997 6.71997 5.69997 7.10997L10.59 12L5.69997 16.89C5.30997 17.28 5.30997 17.91 5.69997 18.3C6.08997 18.69 6.71997 18.69 7.10997 18.3L12 13.41L16.89 18.3C17.28 18.69 17.91 18.69 18.3 18.3C18.69 17.91 18.69 17.28 18.3 16.89L13.41 12L18.3 7.10997C18.68 6.72997 18.68 6.08997 18.3 5.70997Z" })));
};

var Icon$1f = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M19.43 12.98C19.47 12.66 19.5 12.34 19.5 12C19.5 11.66 19.47 11.34 19.43 11.02L21.54 9.37C21.73 9.22 21.78 8.95 21.66 8.73L19.66 5.27C19.54 5.05 19.27 4.97 19.05 5.05L16.56 6.05C16.04 5.65 15.48 5.32 14.87 5.07L14.49 2.42C14.46 2.18 14.25 2 14 2H9.99996C9.74996 2 9.53996 2.18 9.50996 2.42L9.12996 5.07C8.51996 5.32 7.95996 5.66 7.43996 6.05L4.94996 5.05C4.71996 4.96 4.45996 5.05 4.33996 5.27L2.33996 8.73C2.20996 8.95 2.26996 9.22 2.45996 9.37L4.56996 11.02C4.52996 11.34 4.49996 11.67 4.49996 12C4.49996 12.33 4.52996 12.66 4.56996 12.98L2.45996 14.63C2.26996 14.78 2.21996 15.05 2.33996 15.27L4.33996 18.73C4.45996 18.95 4.72996 19.03 4.94996 18.95L7.43996 17.95C7.95996 18.35 8.51996 18.68 9.12996 18.93L9.50996 21.58C9.53996 21.82 9.74996 22 9.99996 22H14C14.25 22 14.46 21.82 14.49 21.58L14.87 18.93C15.48 18.68 16.04 18.34 16.56 17.95L19.05 18.95C19.28 19.04 19.54 18.95 19.66 18.73L21.66 15.27C21.78 15.05 21.73 14.78 21.54 14.63L19.43 12.98ZM12 15.5C10.07 15.5 8.49996 13.93 8.49996 12C8.49996 10.07 10.07 8.5 12 8.5C13.93 8.5 15.5 10.07 15.5 12C15.5 13.93 13.93 15.5 12 15.5Z" })));
};

var Icon$1e = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 12.75C13.63 12.75 15.07 13.14 16.24 13.65C17.32 14.13 18 15.21 18 16.38V17C18 17.55 17.55 18 17 18H7C6.45 18 6 17.55 6 17V16.39C6 15.21 6.68 14.13 7.76 13.66C8.93 13.14 10.37 12.75 12 12.75ZM4 13C5.1 13 6 12.1 6 11C6 9.9 5.1 9 4 9C2.9 9 2 9.9 2 11C2 12.1 2.9 13 4 13ZM5.13 14.1C4.76 14.04 4.39 14 4 14C3.01 14 2.07 14.21 1.22 14.58C0.48 14.9 0 15.62 0 16.43V17C0 17.55 0.45 18 1 18H4.5V16.39C4.5 15.56 4.73 14.78 5.13 14.1ZM20 13C21.1 13 22 12.1 22 11C22 9.9 21.1 9 20 9C18.9 9 18 9.9 18 11C18 12.1 18.9 13 20 13ZM24 16.43C24 15.62 23.52 14.9 22.78 14.58C21.93 14.21 20.99 14 20 14C19.61 14 19.24 14.04 18.87 14.1C19.27 14.78 19.5 15.56 19.5 16.39V18H23C23.55 18 24 17.55 24 17V16.43ZM12 6C13.66 6 15 7.34 15 9C15 10.66 13.66 12 12 12C10.34 12 9 10.66 9 9C9 7.34 10.34 6 12 6Z" })));
};

var Icon$1d = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M15 1H4C2.9 1 2 1.9 2 3V16C2 16.55 2.45 17 3 17C3.55 17 4 16.55 4 16V4C4 3.45 4.45 3 5 3H15C15.55 3 16 2.55 16 2C16 1.45 15.55 1 15 1ZM19 5H8C6.9 5 6 5.9 6 7V21C6 22.1 6.9 23 8 23H19C20.1 23 21 22.1 21 21V7C21 5.9 20.1 5 19 5ZM18 21H9C8.45 21 8 20.55 8 20V8C8 7.45 8.45 7 9 7H18C18.55 7 19 7.45 19 8V20C19 20.55 18.55 21 18 21Z" })));
};

var Icon$1c = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 25 25" }, props),
        React.createElement("path", { d: "M15.6772 2.8668C15.9878 1.97095 15.2658 1.05469 14.2495 1.05469C13.4213 1.05469 12.75 1.67612 12.75 2.4427L12.75 5.07933C12.75 5.61801 13.2217 6.05469 13.8037 6.05469C14.2615 6.05469 14.667 5.78094 14.8069 5.37734L15.6772 2.8668Z", fill: "#FFC700" }),
        React.createElement("path", { d: "M9.32279 2.8668C9.01225 1.97095 9.73416 1.05469 10.7505 1.05469C11.5787 1.05469 12.25 1.67612 12.25 2.4427L12.25 5.07934C12.25 5.61801 11.7783 6.05469 11.1963 6.05469C10.7385 6.05469 10.333 5.78094 10.1931 5.37734L9.32279 2.8668Z", fill: "#FFC700" }),
        React.createElement("path", { d: "M10.825 1.26941C11.1413 1.50339 10.6373 1.71436 10.293 2.17982C9.94869 2.64527 9.89449 3.18896 9.57817 2.95498C9.26185 2.72101 9.32403 2.18322 9.66832 1.71776C10.0126 1.2523 10.5086 1.03544 10.825 1.26941Z", fill: "#FFD800" }),
        React.createElement("path", { d: "M14.6507 1.39423C14.8957 1.70211 14.3543 1.77544 13.9012 2.13593C13.4482 2.49642 13.2551 3.00755 13.0102 2.69968C12.7652 2.3918 12.9644 1.88843 13.4174 1.52794C13.8705 1.16746 14.4057 1.08636 14.6507 1.39423Z", fill: "#FFD800" }),
        React.createElement("path", { d: "M10.3026 1.54788C10.4525 1.65871 10.1853 1.79706 9.98717 2.06492C9.78903 2.33278 9.73495 2.62873 9.58511 2.51789C9.43528 2.40706 9.49314 2.11391 9.69127 1.84605C9.88941 1.57819 10.1528 1.43705 10.3026 1.54788Z", fill: "#FEED8D" }),
        React.createElement("path", { d: "M14.0738 1.5278C14.1899 1.67363 13.896 1.73812 13.6353 1.94557C13.3746 2.15302 13.2458 2.42489 13.1297 2.27905C13.0137 2.13322 13.1454 1.86503 13.4061 1.65758C13.6668 1.45012 13.9578 1.38196 14.0738 1.5278Z", fill: "#FEED8D" }),
        React.createElement("path", { d: "M13.406 5.80534C13.1769 5.64322 13.6402 5.49916 14.0299 5.10944C14.4196 4.71971 14.4298 4.07338 14.6827 4.32626C14.9356 4.57915 14.7916 5.0668 14.4019 5.45652C14.0122 5.84624 13.6351 5.96747 13.406 5.80534Z", fill: "#FFAF00" }),
        React.createElement("path", { d: "M10.6248 5.80534C10.3957 5.64322 10.8589 5.49916 11.2486 5.10944C11.6383 4.71971 11.6486 4.07338 11.9015 4.32626C12.1543 4.57915 12.0103 5.0668 11.6206 5.45652C11.2309 5.84624 10.8538 5.96747 10.6248 5.80534Z", fill: "#FFAF00" }),
        React.createElement("path", { d: "M13.9914 10.3006C12.9839 8.40915 12.4375 6.30469 12.4375 6.30469C12.4375 6.30469 11.9087 8.34165 10.9321 10.2086C10.6414 11.6927 9.56271 12.9024 8.10162 13.3682C6.2379 13.9624 4.40451 13.1384 3.73966 11.239C3.00517 10.5247 2.41808 9.75079 2.125 9.15553V10.3668C2.125 14.1503 3.02673 17.8564 4.72554 21.0547H20.1495C21.8483 17.8564 22.75 14.1503 22.75 10.3668V9.15553C22.4628 9.73876 21.8934 10.4935 21.1797 11.1956C20.5277 13.1259 18.6807 13.967 16.8028 13.3682C15.372 12.912 14.3079 11.7426 13.9914 10.3006Z", fill: "#FFC700" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.7881 7.51367C13.0461 8.29103 13.4582 9.39262 14.0101 10.4296C14.2401 11.4788 14.8691 12.3823 15.7478 12.9675L14.8711 21.0453L12.4716 21.026L6.31499 21.0756C5.03757 17.5852 4.57523 15.3977 4.04834 11.8082C4.82141 13.3685 6.48748 14.0096 8.17878 13.4698C9.62537 13.0081 10.6933 11.8093 10.9812 10.3385C11.509 9.3285 11.9046 8.26831 12.1552 7.51367H12.7881Z", fill: "#FFD800" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11.335 21.0354L10.6112 11.4121C10.1532 12.3105 9.37201 13.0219 8.40008 13.3927C8.66771 15.748 9.05381 17.902 9.86757 21.0472L11.335 21.0354ZM8.91436 21.0549C8.26697 18.1715 7.86567 16.0604 7.58788 13.6114C6.85387 13.7286 6.14425 13.6244 5.53223 13.3211C5.85194 15.8033 6.40755 18.9391 7.32573 21.0677L8.91436 21.0549Z", fill: "#FFE971" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11.1731 9.68799C11.1115 9.81472 11.0477 9.94136 10.982 10.0672C10.6941 11.538 9.62616 12.7368 8.17957 13.1985C6.33435 13.7874 4.51917 12.9708 3.86091 11.0883C3.82538 11.0537 3.79019 11.019 3.75537 10.9842C3.76298 11.1884 3.78916 11.3929 3.8348 11.5958C4.24757 13.4306 6.09537 14.4351 8.21827 13.7576C10.1825 13.1307 11.3382 11.3971 11.1731 9.68799Z", fill: "#FFE971" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.8289 9.68799C13.8905 9.81475 13.9542 9.94142 14.02 10.0673C14.3079 11.5381 15.3758 12.7369 16.8224 13.1986C18.6677 13.7875 20.4828 12.9709 21.1411 11.0884C21.1766 11.0538 21.2118 11.0191 21.2466 10.9843C21.239 11.1885 21.2128 11.393 21.1672 11.5959C20.7544 13.4308 18.9066 14.4353 16.7837 13.7578C14.8194 13.1309 13.6636 11.3971 13.8289 9.68799Z", fill: "#FFD800" }),
        React.createElement("path", { d: "M16.25 7.99219C16.25 9.80885 14.5431 11.0547 12.4375 11.0547C10.3319 11.0547 8.625 9.80885 8.625 7.99219C8.625 6.17553 10.3319 4.92969 12.4375 4.92969C14.5431 4.92969 16.25 6.17553 16.25 7.99219Z", fill: "#FFC700" }),
        React.createElement("path", { d: "M14.5349 6.09354C14.807 7.1091 13.4021 6.71163 11.9077 7.11205C10.4134 7.51246 9.39541 8.55914 9.12329 7.54357C8.85117 6.52801 9.87598 5.50694 11.3704 5.10652C12.8647 4.70611 14.2628 5.07797 14.5349 6.09354Z", fill: "#FFD800" }),
        React.createElement("path", { d: "M11.0893 10.2853C10.7875 9.70556 11.9478 9.89409 13.237 9.49295C14.5262 9.09181 15.3014 7.75528 15.5484 8.54928C15.7955 9.34329 14.9187 10.2079 13.6295 10.609C12.3403 11.0102 11.3911 10.865 11.0893 10.2853Z", fill: "#FFAF00" }),
        React.createElement("path", { d: "M12.979 5.80657C13.1079 6.28763 12.3191 6.1324 11.4591 6.36283C10.5992 6.59326 9.99366 7.1221 9.86476 6.64104C9.73586 6.15998 10.3446 5.64328 11.2046 5.41284C12.0646 5.18241 12.8501 5.32552 12.979 5.80657Z", fill: "#FEED8D" }),
        React.createElement("path", { d: "M11.7222 8.09327C11.7222 8.76484 11.4227 9.01955 11.0533 9.01955C10.6838 9.01955 10.3843 8.76484 10.3843 8.09327C10.3843 7.4217 10.6838 7.16699 11.0533 7.16699C11.4227 7.16699 11.7222 7.4217 11.7222 8.09327Z", fill: "#FEED8D" }),
        React.createElement("path", { d: "M11.7222 7.94581C11.7222 8.61738 11.4227 8.87209 11.0533 8.87209C10.6838 8.87209 10.3843 8.61738 10.3843 7.94581C10.3843 7.27424 10.6838 7.01953 11.0533 7.01953C11.4227 7.01953 11.7222 7.27424 11.7222 7.94581Z", fill: "#CC240E" }),
        React.createElement("path", { d: "M11.4119 7.41061C11.4587 7.67736 11.217 7.57296 10.9599 7.67813C10.7028 7.78331 10.5276 8.05822 10.4808 7.79148C10.434 7.52473 10.6103 7.25654 10.8674 7.15136C11.1245 7.04619 11.3651 7.14386 11.4119 7.41061Z", fill: "#FA7048" }),
        React.createElement("path", { d: "M10.796 8.61486C10.7456 8.421 10.9921 8.50242 11.2088 8.3668C11.4256 8.23119 11.5783 7.83458 11.6194 8.10027C11.6605 8.36596 11.4909 8.60461 11.2742 8.74023C11.0575 8.87584 10.8465 8.80873 10.796 8.61486Z", fill: "#9F0400" }),
        React.createElement("path", { d: "M14.1924 8.09327C14.1924 8.76484 13.8929 9.01955 13.5235 9.01955C13.154 9.01955 12.8545 8.76484 12.8545 8.09327C12.8545 7.4217 13.154 7.16699 13.5235 7.16699C13.8929 7.16699 14.1924 7.4217 14.1924 8.09327Z", fill: "#FEED8D" }),
        React.createElement("path", { d: "M14.1924 7.94581C14.1924 8.61738 13.8929 8.87209 13.5235 8.87209C13.154 8.87209 12.8545 8.61738 12.8545 7.94581C12.8545 7.27424 13.154 7.01953 13.5235 7.01953C13.8929 7.01953 14.1924 7.27424 14.1924 7.94581Z", fill: "#CC240E" }),
        React.createElement("path", { d: "M13.8821 7.41061C13.9289 7.67736 13.6872 7.57296 13.4301 7.67813C13.173 7.78331 12.9978 8.05822 12.951 7.79148C12.9042 7.52473 13.0805 7.25654 13.3376 7.15136C13.5947 7.04619 13.8353 7.14386 13.8821 7.41061Z", fill: "#FA7048" }),
        React.createElement("path", { d: "M13.2663 8.61486C13.2158 8.421 13.4623 8.50242 13.6791 8.3668C13.8958 8.23119 14.0485 7.83458 14.0896 8.10027C14.1307 8.36596 13.9612 8.60461 13.7444 8.74023C13.5277 8.87584 13.3167 8.80873 13.2663 8.61486Z", fill: "#9F0400" }),
        React.createElement("path", { d: "M24.3751 9.78352C24.3751 10.8765 23.4126 11.6261 22.2254 11.6261C21.0381 11.6261 20.0757 10.8765 20.0757 9.78352C20.0757 8.6905 21.0381 7.94092 22.2254 7.94092C23.4126 7.94092 24.3751 8.6905 24.3751 9.78352Z", fill: "#FFC700" }),
        React.createElement("path", { d: "M23.4327 8.66844C23.5873 9.24565 22.7888 9.01974 21.9395 9.24732C21.0902 9.47491 20.5116 10.0698 20.3569 9.49259C20.2023 8.91538 20.7847 8.33504 21.6341 8.10746C22.4834 7.87987 23.278 8.09123 23.4327 8.66844Z", fill: "#FFD800" }),
        React.createElement("path", { d: "M21.468 11.1604C21.2965 10.8309 21.956 10.938 22.6887 10.7101C23.4214 10.4821 23.862 9.72242 24.0024 10.1737C24.1429 10.625 23.6445 11.1164 22.9118 11.3444C22.179 11.5724 21.6396 11.4899 21.468 11.1604Z", fill: "#FFAF00" }),
        React.createElement("path", { d: "M22.5483 8.5052C22.6216 8.77861 22.1733 8.69038 21.6845 8.82135C21.1957 8.95232 20.8516 9.2529 20.7783 8.97948C20.705 8.70606 21.051 8.41238 21.5398 8.28141C22.0286 8.15044 22.4751 8.23178 22.5483 8.5052Z", fill: "#FEED8D" }),
        React.createElement("path", { d: "M4.92439 9.78352C4.92439 10.8765 3.96194 11.6261 2.7747 11.6261C1.58745 11.6261 0.625 10.8765 0.625 9.78352C0.625 8.6905 1.58745 7.94092 2.7747 7.94092C3.96194 7.94092 4.92439 8.6905 4.92439 9.78352Z", fill: "#FFC700" }),
        React.createElement("path", { d: "M3.982 8.66844C4.13667 9.24565 3.33817 9.01974 2.48882 9.24732C1.63947 9.47491 1.0609 10.0698 0.906238 9.49259C0.751574 8.91538 1.33404 8.33504 2.18339 8.10746C3.03274 7.87987 3.82734 8.09123 3.982 8.66844Z", fill: "#FFD800" }),
        React.createElement("path", { d: "M2.01735 11.1604C1.8458 10.8309 2.5053 10.938 3.23802 10.7101C3.97074 10.4821 4.41134 9.72242 4.55176 10.1737C4.69218 10.625 4.19381 11.1164 3.46109 11.3444C2.72837 11.5724 2.1889 11.4899 2.01735 11.1604Z", fill: "#FFAF00" }),
        React.createElement("path", { d: "M3.09716 8.5052C3.17042 8.77861 2.72209 8.69038 2.23331 8.82135C1.74453 8.95232 1.40038 9.2529 1.32712 8.97948C1.25386 8.70606 1.59985 8.41238 2.08863 8.28141C2.57742 8.15044 3.0239 8.23178 3.09716 8.5052Z", fill: "#FEED8D" }),
        React.createElement("path", { d: "M21 21.4833C21 22.5878 20.7489 23.0547 12.4375 23.0547C4.12611 23.0547 3.875 22.5878 3.875 21.4833C3.875 20.3787 4.12611 20.3047 12.4375 20.3047C20.7489 20.3047 21 20.3787 21 21.4833Z", fill: "#D8D8D8" }),
        React.createElement("path", { d: "M14.6123 21.583C14.5965 22.6393 13.9077 22.7662 9.15269 22.6767C5.64021 22.6106 4.71703 22.5202 4.72814 21.7777C4.73925 21.0352 5.09021 20.7512 9.18036 20.8281C13.9354 20.9176 14.6234 20.8405 14.6123 21.583Z", fill: "#EFF3F5" }),
        React.createElement("path", { d: "M5.36878 22.06C5.19105 21.8607 5.32313 21.5819 5.55794 21.3186C5.79275 21.0553 6.04136 20.9072 6.21909 21.1065C6.39682 21.3058 6.26473 21.5845 6.02992 21.8478C5.79512 22.1111 5.54651 22.2593 5.36878 22.06Z", fill: "#7D7D7D" }),
        React.createElement("path", { d: "M5.33188 22.0183C5.18225 21.8505 5.32355 21.5821 5.55836 21.3188C5.79317 21.0555 6.03256 20.897 6.18219 21.0648C6.33181 21.2326 6.19051 21.501 5.9557 21.7644C5.7209 22.0277 5.4815 22.1861 5.33188 22.0183Z", fill: "#373333" }),
        React.createElement("path", { d: "M19.1715 22.06C18.9938 21.8607 19.1259 21.5819 19.3607 21.3186C19.5955 21.0553 19.8441 20.9072 20.0218 21.1065C20.1995 21.3058 20.0675 21.5845 19.8327 21.8478C19.5978 22.1111 19.3492 22.2593 19.1715 22.06Z", fill: "#7D7D7D" }),
        React.createElement("path", { d: "M19.1374 22.0217C18.9855 21.8514 19.1261 21.5821 19.3609 21.3188C19.5957 21.0555 19.8358 20.8979 19.9877 21.0682C20.1397 21.2386 19.9991 21.5079 19.7643 21.7712C19.5295 22.0345 19.2893 22.1921 19.1374 22.0217Z", fill: "#373333" }),
        React.createElement("path", { d: "M8.71657 22.2374C8.50579 22.001 8.66243 21.6704 8.94091 21.3581C9.21938 21.0459 9.51422 20.8702 9.725 21.1066C9.93579 21.3429 9.77914 21.6736 9.50066 21.9858C9.22219 22.2981 8.92735 22.4738 8.71657 22.2374Z", fill: "#7D7D7D" }),
        React.createElement("path", { d: "M8.65967 22.1742C8.49136 21.9854 8.66193 21.6704 8.9404 21.3581C9.21887 21.0459 9.4998 20.8546 9.66811 21.0433C9.83643 21.2321 9.66585 21.5471 9.38738 21.8594C9.10891 22.1716 8.82799 22.3629 8.65967 22.1742Z", fill: "#373333" }),
        React.createElement("path", { d: "M15.8196 22.2374C15.6088 22.001 15.7655 21.6704 16.0439 21.3581C16.3224 21.0459 16.6172 20.8702 16.828 21.1066C17.0388 21.3429 16.8822 21.6736 16.6037 21.9858C16.3252 22.2981 16.0304 22.4738 15.8196 22.2374Z", fill: "#7D7D7D" }),
        React.createElement("path", { d: "M15.7716 22.1835C15.597 21.9878 15.7656 21.6705 16.0441 21.3582C16.3225 21.0459 16.6055 20.857 16.78 21.0527C16.9545 21.2483 16.786 21.5656 16.5075 21.8779C16.229 22.1902 15.9461 22.3792 15.7716 22.1835Z", fill: "#373333" }),
        React.createElement("path", { d: "M12.1406 22.3976C11.8957 22.1229 12.0777 21.7387 12.4013 21.3759C12.7249 21.013 13.0675 20.8089 13.3125 21.0835C13.5574 21.3582 13.3754 21.7424 13.0518 22.1053C12.7282 22.4681 12.3856 22.6723 12.1406 22.3976Z", fill: "#7D7D7D" }),
        React.createElement("path", { d: "M12.0921 22.3438C11.8835 22.1098 12.0775 21.7389 12.401 21.3761C12.7246 21.0132 13.0554 20.7957 13.264 21.0297C13.4726 21.2636 13.2787 21.6345 12.9551 21.9974C12.6315 22.3602 12.3008 22.5777 12.0921 22.3438Z", fill: "#373333" }),
        React.createElement("path", { d: "M12.0489 13.7369C12.2981 13.494 12.7019 13.494 12.9511 13.7369L14.8132 15.5524C15.0623 15.7953 15.0623 16.1891 14.8132 16.432L12.9511 18.2475C12.7019 18.4904 12.2981 18.4904 12.0489 18.2475L10.1868 16.432C9.93772 16.1891 9.93772 15.7953 10.1868 15.5524L12.0489 13.7369Z", fill: "#FFE971" }),
        React.createElement("path", { d: "M12.4726 13.2256V15.5732H10.125C10.125 15.4162 10.1849 15.2593 10.3046 15.1396L12.039 13.4052C12.1587 13.2855 12.3157 13.2256 12.4726 13.2256Z", fill: "#FA7048" }),
        React.createElement("path", { d: "M12.4726 17.9209V15.5733H10.125C10.125 15.7302 10.1849 15.8872 10.3046 16.0069L12.039 17.7413C12.1587 17.861 12.3157 17.9209 12.4726 17.9209Z", fill: "#CC240E" }),
        React.createElement("path", { d: "M12.4727 13.2256V15.5732H14.8203C14.8203 15.4162 14.7604 15.2593 14.6407 15.1396L12.9063 13.4052C12.7866 13.2855 12.6296 13.2256 12.4727 13.2256Z", fill: "#CC240E" }),
        React.createElement("path", { d: "M12.4727 17.9209V15.5733H14.8203C14.8203 15.7302 14.7604 15.8872 14.6407 16.0069L12.9063 17.7413C12.7866 17.861 12.6296 17.9209 12.4727 17.9209Z", fill: "#9F0400" }),
        React.createElement("path", { d: "M18.6595 15.807C18.7972 15.6548 19.0203 15.6548 19.158 15.807L20.1869 16.9442C20.3246 17.0964 20.3246 17.343 20.1869 17.4952L19.158 18.6324C19.0203 18.7846 18.7972 18.7846 18.6595 18.6324L17.6306 17.4952C17.4929 17.343 17.4929 17.0964 17.6306 16.9442L18.6595 15.807Z", fill: "#FFE971" }),
        React.createElement("path", { d: "M18.9132 15.5596V16.9244H17.5483C17.5483 16.8332 17.5831 16.742 17.6528 16.6724L18.6611 15.664C18.7307 15.5944 18.822 15.5596 18.9132 15.5596Z", fill: "#FA7048" }),
        React.createElement("path", { d: "M18.9132 18.2896V16.9247H17.5483C17.5483 17.0159 17.5831 17.1072 17.6528 17.1768L18.6611 18.1851C18.7307 18.2547 18.822 18.2896 18.9132 18.2896Z", fill: "#CC240E" }),
        React.createElement("path", { d: "M18.9134 15.5596V16.9245H20.2783C20.2783 16.8332 20.2435 16.742 20.1739 16.6724L19.1655 15.664C19.0959 15.5944 19.0047 15.5596 18.9134 15.5596Z", fill: "#CC240E" }),
        React.createElement("path", { d: "M18.9134 18.2896V16.9247H20.2783C20.2783 17.0159 20.2435 17.1072 20.1739 17.1768L19.1655 18.1851C19.0959 18.2547 19.0047 18.2896 18.9134 18.2896Z", fill: "#9F0400" }),
        React.createElement("path", { d: "M5.64194 15.807C5.77959 15.6548 6.00277 15.6548 6.14042 15.807L7.16936 16.9442C7.30701 17.0964 7.30701 17.343 7.16936 17.4952L6.14042 18.6324C6.00277 18.7846 5.77959 18.7846 5.64194 18.6324L4.613 17.4952C4.47535 17.343 4.47535 17.0964 4.613 16.9442L5.64194 15.807Z", fill: "#FFE971" }),
        React.createElement("path", { d: "M5.90931 15.5596V16.9245H4.54443C4.54443 16.8332 4.57924 16.742 4.64885 16.6724L5.65722 15.664C5.72683 15.5944 5.81807 15.5596 5.90931 15.5596Z", fill: "#FA7048" }),
        React.createElement("path", { d: "M5.90931 18.2896V16.9247H4.54443C4.54443 17.0159 4.57924 17.1072 4.64885 17.1768L5.65722 18.1851C5.72683 18.2547 5.81807 18.2896 5.90931 18.2896Z", fill: "#CC240E" }),
        React.createElement("path", { d: "M5.90905 15.5596V16.9245H7.27393C7.27393 16.8332 7.23912 16.742 7.16951 16.6724L6.16114 15.664C6.09153 15.5944 6.00029 15.5596 5.90905 15.5596Z", fill: "#CC240E" }),
        React.createElement("path", { d: "M5.90905 18.2896V16.9247H7.27393C7.27393 17.0159 7.23912 17.1072 7.16951 17.1768L6.16114 18.1851C6.09153 18.2547 6.00029 18.2896 5.90905 18.2896Z", fill: "#9F0400" })));
};

var Icon$1b = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 16H13V18H11V16ZM12.61 6.04C10.55 5.74 8.73 7.01 8.18 8.83C8 9.41 8.44 10 9.05 10H9.25C9.66 10 9.99 9.71 10.13 9.33C10.45 8.44 11.4 7.83 12.43 8.05C13.38 8.25 14.08 9.18 14 10.15C13.9 11.49 12.38 11.78 11.55 13.03C11.55 13.04 11.54 13.04 11.54 13.05C11.53 13.07 11.52 13.08 11.51 13.1C11.42 13.25 11.33 13.42 11.26 13.6C11.25 13.63 11.23 13.65 11.22 13.68C11.21 13.7 11.21 13.72 11.2 13.75C11.08 14.09 11 14.5 11 15H13C13 14.58 13.11 14.23 13.28 13.93C13.3 13.9 13.31 13.87 13.33 13.84C13.41 13.7 13.51 13.57 13.61 13.45C13.62 13.44 13.63 13.42 13.64 13.41C13.74 13.29 13.85 13.18 13.97 13.07C14.93 12.16 16.23 11.42 15.96 9.51C15.72 7.77 14.35 6.3 12.61 6.04Z" })));
};

var Icon$1a = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M13 3C8.03 3 4 7.03 4 12H2.20711C1.76165 12 1.53857 12.5386 1.85355 12.8536L4.54604 15.546C4.73751 15.7375 5.04662 15.7418 5.24329 15.5556L8.08805 12.8631C8.4164 12.5524 8.19646 12 7.74435 12H6C6 8.13 9.13 5 13 5C16.87 5 20 8.13 20 12C20 15.87 16.87 19 13 19C11.4314 19 9.98175 18.4782 8.81739 17.601C8.37411 17.267 7.74104 17.259 7.3486 17.6514C6.95725 18.0428 6.95413 18.6823 7.38598 19.0284C8.92448 20.2615 10.8708 21 13 21C17.97 21 22 16.97 22 12C22 7.03 17.97 3 13 3ZM12 8V13L16.28 15.54L17 14.33L13.5 12.25V8H12Z" })));
};

var Icon$19 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 20 20" }, props),
        React.createElement("path", { d: "M4.68179 7.04592C5.06573 7.78505 5.47899 8.47752 5.91436 9.12605C4.76866 8.20293 3.15483 7.94918 1.72791 8.60664L0.865295 9.00408L0.949991 9.1879C1.87444 11.1943 4.25037 12.0714 6.25678 11.147L7.1194 10.7495C7.7588 11.5306 8.42708 12.2337 9.10661 12.8671C7.54917 12.0868 5.60297 12.3946 4.36752 13.7424L4.07604 14.0604L5.17158 15.0646C6.8001 16.5573 9.33037 16.4472 10.8231 14.8187L11.0984 14.5183C11.8534 15.0744 12.6001 15.5528 13.3138 15.9628C13.5418 16.0939 13.7667 16.218 13.9874 16.3354C12.2933 15.9571 10.485 16.7202 9.6092 18.3189L9.47337 18.5669L10.514 19.137C12.4515 20.1983 14.8825 19.4881 15.9439 17.5507L16.0715 17.3177C16.4836 17.4877 16.862 17.6297 17.1977 17.747C17.6961 17.9213 18.1016 18.0417 18.3855 18.1191L18.8453 18.2339C19.2507 18.3192 19.6484 18.0598 19.7338 17.6545C19.819 17.2494 19.56 16.8519 19.1551 16.7662L19.1524 16.7657C19.1551 16.7662 19.0729 16.7518 18.7802 16.6719C18.527 16.6029 18.1551 16.4928 17.6927 16.3311C17.1224 16.1317 16.416 15.8546 15.6253 15.4802L15.9997 14.8317C17.1043 12.9186 16.4488 10.4722 14.5356 9.36762L13.8989 9.00001L13.4324 9.80801C12.4895 11.4411 12.8291 13.4627 14.1387 14.7066C14.1128 14.6919 14.0869 14.6771 14.0609 14.6622C12.797 13.9361 11.4285 12.9847 10.1078 11.7498L10.5391 11.324C12.1111 9.77192 12.1274 7.23931 10.5753 5.66723L9.93826 5.02195L9.41242 5.5411C8.11055 6.82638 7.87565 8.78411 8.71479 10.3119C7.73795 9.1976 6.82187 7.90232 6.03634 6.39938C7.08943 4.4961 6.42732 2.09216 4.53566 1.00001L3.4039 0.346588L2.82248 1.35364C1.71791 3.26682 2.37341 5.71318 4.28658 6.81775L4.68179 7.04592Z" })));
};

var Icon$18 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 20 20" }, props),
        React.createElement("path", { d: "M15.3182 7.04592C14.9343 7.78505 14.521 8.47752 14.0856 9.12605C15.2313 8.20293 16.8452 7.94918 18.2721 8.60664L19.1347 9.00408L19.05 9.1879C18.1256 11.1943 15.7496 12.0714 13.7432 11.147L12.8806 10.7495C12.2412 11.5306 11.5729 12.2337 10.8934 12.8671C12.4508 12.0868 14.397 12.3946 15.6325 13.7424L15.924 14.0604L14.8284 15.0646C13.1999 16.5573 10.6696 16.4472 9.17692 14.8187L8.90162 14.5183C8.1466 15.0744 7.39992 15.5528 6.68625 15.9628C6.45816 16.0939 6.23335 16.218 6.01259 16.3354C7.70668 15.9571 9.51501 16.7202 10.3908 18.3189L10.5266 18.5669L9.486 19.137C7.54854 20.1983 5.11749 19.4881 4.05611 17.5507L3.92849 17.3177C3.51637 17.4877 3.13804 17.6297 2.80235 17.747C2.30389 17.9213 1.89839 18.0417 1.61448 18.1191L1.15466 18.2339C0.749332 18.3192 0.351572 18.0598 0.26624 17.6545C0.180958 17.2494 0.440012 16.8519 0.844932 16.7662L0.847556 16.7657C0.844932 16.7662 0.927067 16.7518 1.21981 16.6719C1.47301 16.6029 1.84485 16.4928 2.30733 16.3311C2.87756 16.1317 3.58397 15.8546 4.3747 15.4802L4.0003 14.8317C2.89573 12.9186 3.55123 10.4722 5.4644 9.36762L6.10112 9.00001L6.56763 9.80801C7.51049 11.4411 7.1709 13.4627 5.86133 14.7066C5.88719 14.6919 5.9131 14.6771 5.93906 14.6622C7.20296 13.9361 8.57146 12.9847 9.89223 11.7498L9.46094 11.324C7.88886 9.77192 7.87263 7.23931 9.42468 5.66723L10.0617 5.02195L10.5876 5.5411C11.8895 6.82638 12.1243 8.78411 11.2852 10.3119C12.2621 9.1976 13.1781 7.90232 13.9637 6.39938C12.9106 4.4961 13.5727 2.09216 15.4643 1.00001L16.5961 0.346588L17.1775 1.35364C18.2821 3.26682 17.6266 5.71318 15.7134 6.81775L15.3182 7.04592Z" })));
};

var Icon$17 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M4.5 14H6.5C7.05 14 7.5 13.55 7.5 13V11C7.5 10.45 7.05 10 6.5 10H4.5C3.95 10 3.5 10.45 3.5 11V13C3.5 13.55 3.95 14 4.5 14ZM4.5 19H6.5C7.05 19 7.5 18.55 7.5 18V16C7.5 15.45 7.05 15 6.5 15H4.5C3.95 15 3.5 15.45 3.5 16V18C3.5 18.55 3.95 19 4.5 19ZM4.5 9H6.5C7.05 9 7.5 8.55 7.5 8V6C7.5 5.45 7.05 5 6.5 5H4.5C3.95 5 3.5 5.45 3.5 6V8C3.5 8.55 3.95 9 4.5 9ZM9.5 14H19.5C20.05 14 20.5 13.55 20.5 13V11C20.5 10.45 20.05 10 19.5 10H9.5C8.95 10 8.5 10.45 8.5 11V13C8.5 13.55 8.95 14 9.5 14ZM9.5 19H19.5C20.05 19 20.5 18.55 20.5 18V16C20.5 15.45 20.05 15 19.5 15H9.5C8.95 15 8.5 15.45 8.5 16V18C8.5 18.55 8.95 19 9.5 19ZM8.5 6V8C8.5 8.55 8.95 9 9.5 9H19.5C20.05 9 20.5 8.55 20.5 8V6C20.5 5.45 20.05 5 19.5 5H9.5C8.95 5 8.5 5.45 8.5 6Z" })));
};

var Icon$16 = function (props) {
    return (React.createElement(Svg, __assign({ height: "31", fill: "none", xmlnsXlink: "http://www.w3.org/1999/xlink" }, props),
        React.createElement("rect", { width: "30.7597", height: "31", fill: "url(#pattern0)" }),
        React.createElement("rect", { width: "30.7597", height: "31", fill: "black", fillOpacity: "0.2" }),
        React.createElement("rect", { width: "30.7597", height: "31", fill: "black", fillOpacity: "0.2" }),
        React.createElement("defs", null,
            React.createElement("pattern", { id: "pattern0", patternContentUnits: "objectBoundingBox", width: "1", height: "1" },
                React.createElement("use", { xlinkHref: "#image0_361_1877", transform: "scale(0.0078125)" })),
            React.createElement("image", { id: "image0_361_1877", width: "128", height: "129", xlinkHref: "data:image/png;base64,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" }))));
};

var WhiteBGLogo = function (props) {
    return (React.createElement(Svg, __assign({ version: "1.1", id: "Layer_1", xmlnsXlink: "http://www.w3.org/1999/xlink", x: "0px", y: "0px", viewBox: "0 0 44 44", "enable-background": "new 0 0 44 44", xmlSpace: "preserve" }, props),
        React.createElement("image", { id: "image0", width: "44", height: "44", x: "0", y: "0", href: "data:image/png;base64,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" })));
};

var Icon$15 = function (props) {
    return (React.createElement(Svg, __assign({ height: "31", fill: "none", xmlnsXlink: "http://www.w3.org/1999/xlink" }, props),
        React.createElement("rect", { width: "30.7597", height: "31", fill: "url(#pattern0)" }),
        React.createElement("rect", { width: "30.7597", height: "31", fill: "black", fillOpacity: "0.2" }),
        React.createElement("rect", { width: "30.7597", height: "31", fill: "black", fillOpacity: "0.2" }),
        React.createElement("defs", null,
            React.createElement("pattern", { id: "pattern0", patternContentUnits: "objectBoundingBox", width: "1", height: "1" },
                React.createElement("use", { xlinkHref: "#image0_361_1877", transform: "scale(0.0078125)" })),
            React.createElement("image", { id: "image0_361_1877", width: "128", height: "129", xlinkHref: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACBCAYAAAAIYrJuAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAEehJREFUeNrsndtyFMcZgLvXOFqcKiPHl1mtdJcLX8ADxGW9AaSMwRwMK4w4uip6gyhvIFcZc5K0EpizqYK73EWu5AHERa4jrbiOkeOEVSWm0z3duzuHPvw98/fMpjxTBTuCRWjn+/r//+7p6aaMMVIfP99jX30Jqj/2nrRmCSWz/FT8muTnBwt+y13+a2ni45eLrjfSOgJUBP1xa5K/LHDYHf46LWnEyaD8N3NcgrU6Aowb/EetRQ54gZ8eICwG23Se/5ipU8A4gX84dYhDFS3yIAh8cQle1SlgnOATshG1ejqgawn7xdPBCx7+D7ne1KjRlAD/AYfPFPwhezpq5YTAz4HwVUFJagGqhn8/Bj8DNYgEEXze+l/VAlQN/14s7DMTVFQJvOAPa4C9p62Oqhhf8X+8VKNDhq/L55k/K1wTeMOPvlX/218L4L8v+o3qIwb/GwWfqpxvAognQW5mIgV0Un8mRqE2eFSYrFHmgH9XE/ZNoRwnHRRqsI1hZVpLUBz+HQWfxa5pWAkKR2tbEVhLUAS+TyvOJwFKqnb1AmoJIPDXdf38oBK84OezE0eL12mQbmAtgeXor7XtOR9fAtnyP8Ep0qHjALUEOvhdCZ8xesAPbG4JUOH7DgTVEmjgD3I+l4AElkCG/WO43XMxDuA70gwqPvpfTQtRDgW6/q+aX2xvVgZ/tW3s51PKiF/fH/TeF2LCyMTxHfSxmTwCgIoQJcCGihxhDkq+478/46/Pmle2t0qBv9IWt3RHBZ8GHLIEssF9uhNkYC6fAPF8VJUENPMqZFhsXt7eCArfNryLL4G8xid2go3K+gnAMl87i5IgElDbK1sXs22aF3uoF62/3IYN7+JJIK/tyZ2gQ/KNAvBHheFjc2HIc7X4ALPqA4WGL17P8pPN/q02Wv3Rv9223NI1nxcoDEuBDxeAWb5mSoJHJUjghj/4elrk6QhcUfi32oBbuqgSgOCryFqCACb4LHGuJJgKJwEc/uD8QCTBcn4J+jfb5rH9MBLI4vqUE/4aVg+rkRt+5j1UTHTc2HsYQAJ/+EkJVvwlyMAv2LcHSCBb/mkH/GsR/LPhU4Af/GRN8KAsCazwkxKswiXo35iGj+3jSFAJfLMA6R8eBj+ZDrAkoIXgJyXouiXoX59WOZ/Cx/aLSSDhf+aA/zWHTxV8iivAthU+8YI/kkCkg/sFJcCBn5RgzSwBv8ipnE9JYAlkzj/jgH891vJ1XciCAmwhwx8cUoJ7OSWAwgfVCSMJeN98I7p964IP/5x5JZAt/ywQPmKrTwuwEQB+sib4xlMCI1imBwuDPxiYiSKBmsAxyK2OnI8uAQz+jVjYD9D6RwKEgZ+sCaASGMGiwE+kAzF/j3ep7IM8+BJE8Jsd+0gl74Xwls/OgkYRiwgw8fFL8eF3A8FPpoO7DgloTAIIfJILflyC78hb5C/OQR48CaKc35xzwL/VjoV9x0xhpF7AUkD4o3TAotBrluBqTAJoXs8Hf/Bv36XvvnmLS+ABNLcEsuWf84FPzNPFUQVgZMkeBSjWJAeZDtYtElxREtCBBCwM/NFH208PvHk9fE46jAQw+LfblpzPwqQA8Zu6m7cUGH6iJuDdMbMEl1VNQNkLAMB88JMChZRAhv3PHfCX29muXmYgjAVLAUKCxWHoLQrfMXjEu0BuCS4NJLCkAwz48UgwiS6BhH/eAX+lne3q+Tw9hDgS2OHff7cwfNggSFQT9LsWCeQ9fb0EReCbxhsIl+C9n7gEDEMCGfbngfAJILqlJcAWYOLYy03ZHaO7geEnaoL+qkWCCxoJisI3RQLKZCR4701RCWDwV9v64d0SJcjcC5g4ziVgUSW+Gxh+siZYsUgwn5IACz7JwB+lg1/llkDCv+CA323bh3d9ZhBhChBJ8OmOjAQMOD5Q/FaoW4LzMQmw4NMY/Gxa2E/f5xK87SWBzPkXgfCNxR5QglACaCUIBz9ZEyxbJBCVNE2OGKLB16cHHwlky7/kgL/Wdg/vulo6LUGASIITSgKRDsLCTwwW8f6wWYK5kQRB4ftJoOBvW+HvrU/pu3rjlgISEpzcyVUT5JoQGS8Mb1kk6PRecfiJSBAEfryLaJZAwr8Mg2+cKTxuKSAhwSm/mkALnxGfYVMpwU2zBNGdNEpySuDZVTRLIHP+FQf8O1OJsK+VYBxTgFUCX/j+0cAtwZk8EuSAr5dAwr/qgH93StvVyyVBFSkgccFPa2oCFgR+sjC8YZ4CHU2lAktQAD5JdBH/FoX9Lxzwv5lKDvJgS1C2AOqCj2qC2M8fAP7gyVgZCa5bJDgNkQAB/mB4t0F+C4bvAEspg9cByT/brEQAFXoThWFA+Ml08LVFglM2CRDhA56M3rs35dXVy/Rm3K1/2zXKGFQAVYRF6YDD3w0MHy7ByQKFIRb8+4auHkGVYKOyFKCTIFMT4MNP1gTXLBKcSEvAyoef92lgeFdwDUsAlNXC06tlBIIvz3kFTt/jRRjPwzYg8jE1tjHcfSM0/AcKfvhh8+3m572ZsYgAsdE5/WBRCPjiJk2DfEAcy9VEq2m40gEW/IeOET6P1g14pHwRsxeAul9A9PhV7keqgPB5N8wH0N6TllyfIB0JQsAv2PqdvSpCvuONbbbSbqA1EpzrwWoCHXzmDV/WBK5IIKa7pSMBFvxHLX217zuQQ0FjBCK6dgjygb5cPM9P2nECJ3zd++zw4RIcHUrwHPARnoPgP26pls+wCzyTBEd469/C5hVsyxi1OINMB3ngExB8/1b7tCVEEBs2HdaAX1LPSRAYfBJy8mw8Hcw1O721EJyC7hlkX1oFFb6XBEUOXlNYqv0gEszx7vZaqM8TdMeQ5nzPcAMpCHxQOigE/9uWo9pnmGsDivOg8IMLEElwIV4Y0pDwg0owhO+EaYio/hLMTZwJC78UASIJLorCkLoLw+Lw4xI8Q4P/tLXgV+2zfOBHRynwg9cAmZpguPqGpjDcx+G/jwI/fvyO1wPPCsIXkWQrU8eA8jmFvzee80+XA7+0CDCMBJe39TOL9qmWT1DhE6R+8xGiWxYWo9+vy/klwi9dAK0EAv6kgs9IckCo+HEYSQBzuLYOLjEfCeYmTpULvxIBIgmuKAn2kR8j+FTBN3WHqj0mrQWdMyKAJKgEftT+qrqq9JfsN6TJuICUw1cXabBZcvp1HA8ak9R5Lj4f1b6H/Yu+JnvVfchKIsDeavs4mWCr/CK8kxkXGL9IsGWVAHyejQTsxwi+qHu6/a+mOz8LASL4TQWfxHN+EAmeI/zIG85IkEOCGPzBUYkEpQqwtxJr+WnATHWbcCUovA0u70auERIbyUSQIILfp/s136fbv1auBI1S4f8iFvaNoNEkeA65sYPWnQRKwP7ZMMEfSfB1eRKUIsDeMof/NodPBjmfkMASvCCI987VYNJcUQm08Kl23KDbv16OBMEF6N9W8FkKfjgJgtwRVKkgtwQR/Nca+Obzbv9GeAka4eGTVcboO1bgeBIEvR0MliAFmf3gDT8mQTuoBOEmhCy3P+R6/Yl/kHe0z/J7rf0H+HdlTgh52hJQutY3Dfr5u7nhx3sNc82L/0cTQqJdOmhsg6XYB9M+019cAvfkUHlTZ424h4eFCB2ASE4J2CsU+CMJLuBLgC5AtLgDjZ5bmzbBzS+B5sJQ9/Z1Cr5o2dCdy6DRxChB1PL/jQZ/cD7XnMeVIEQNIBacnLbl9+GUZ1cdwHR/R5PLsjB0+IQMlrX91j6pxFQTBIIva4Jl3JoA97mAm22xiNOfoa0ZHAm0f8fkdqrH0OFn9/H5BB4JAsJP3DxqnseJBNgRYMGn0gdHguzfcTA0NPxRJHgMiARvyFUwfFONA4MvB4tWcCIBWgToX5+e4T/Y30nOSp9S8H4AsuVb9tJFgp/dzu34S8h2bp6rfhL9FDLgvMHmuWKRADMCHBmO51tzuP7PmKnPn16QiZUOXz2aTq1b4omj+cW2aJXrJcGXNUG3WCTAE4CpmTNpCQiaBBL+SWT4zAl/UHg6d0MbSkCVBGHhjwrDAhJgCvBREprmeb/8Ejh31MwNn7hqDprdIfW+Q4KrKhKEhz+qCdbySYAiAM99M3qgKBI4N1WMFox4Q/6KCp9k4CcluOcpQWIcAxX+oIbq7q1PdaqKADNmoB4SsIwEsuVbNlVUS8ZssO8bH/D3vkaDb78P4dwIK5LgSromYLgrhGbXFOju3fGTALcbaARqkMAeEV5wCaxbq6mVw+Sz//+hhP2jsd8pARS+8z1KgrsOCS4PagJE+JTYFpTo8p+pU40AkFwKGyOQizBatlZTawcmF35wSYAHPynBHYcEl3wKQwIeD7CsMwiWIMztYIgEzDbIY99aTa4ealj/xyQBPvykBOsOCS72AIUhPBoAFpns8hTVqUYAeFWdPnfurqUWkVbwDYNHaQmgcw8go5EWCWx7IGklCAd/VBPcs0sQdkaQnwTO3bXUMvLulb/iErxJSUB0RarnkDTR9lykBF2HBBd62cGiMPBH6eC+WYLwcwKN4T5x4SV8y+qXaiMJDXwGl4AQ251Fj1Sh6bbGI8GqQ4L53qgmCAvfKUF508KNOZ8699hRW8lYWr5lK7X/xtJBWPhJCVYcEpzv6QvDovCppSZ4kN01vdwHQ0w537LHjmpNgLBvuQn1U1qCYPCTEiw7JPgcVhNYp9L5RANRrD5MSlD+o2HpnG/ZZkXlU1jOh0jwPZeA0NfAW8554ScluO0hgQs+KQSfqCl6a/GbWpU8GzjM+ZadNlRFDYev6+8ZJSCvi0QAAPykBLccEpzTFIb48AevB3lDWahSABn2LTttqD61R8sn8O3mf4oma5olwIOflOCmQ4K5ZE0QCP7gB/vD3uPWTBUCSPiWzRbUqNoGvwBw+CVJkAN+UoIbDgk6MhKgwafEtgP5QtkCuOHfTbZ87W4argMqwZto/h5XgfwAvkOZD35MAmrd+SQuAeays4ZNpztlCgCHr7ulS4u8GiXY5RJ8GM1jcKxtjACfxCeV2Da9EMfE2R1tTYAIPyoI9560jjTGAr64rUoVfPRtYbUS7Ip5hbwO2Yw2wmKAjbCKw0+mg2sOCc7sJAeLcOEPjkONyuHfM8MPJIGEL9cpkhdbsxGWAB8AflKCrxwSfLbjHizKD1+czzYqhX/fDR9ZAgn/8vampsUNJWDFbgzBRhuhEpzeyVkTgArJmUZl8B/A4SNJIOFf2t605N5Nll7RNJcElACXvPGTABe+OKYblcB/6A+/oAQS/sWec689XoXD9juA3Fa2w/eT4NQOcFIJGH503igd/qNWbvg5JZDwL/TAGy0m9kBiQeH7SXBSSYAEH7sb6Ib/eACfHSyWy8ESSPjzPe9dNqPtb7wkyA3fT4ITppqAwQaEUu/BEmDTCf9Jet4+K9zPd0gg4Z/v5d5iNbP9jW5SKw78fBJA4RNDFCAlrRYePWbNFHyceXiugZpdIqeWoeyvq7a/EQtFTWunvaeLxXzwvaKpTKdixzJ2FjRIpPu6jJHA4RM7rskczmFdcCSQLR8JfhQJ5qNIILa/+dIJnxGMBS5hkeB4Kh14wg8eAYbwWWx41zeH+kUC2fI7ePAz0eBmtA/SIr90h0G3lAPXVaq2gm1fV6YAmWf1fKZl50sFYgAnKPyECNejx+GOqIdiPwq4tjFMgieOLW3KFMD4oKZTApobfvQImdzMupKjf21aPB43E+jbb7oEULWWlAAIP4gAzqd08SWQ8M9UB3+cjkiCeDpwHI1S4bu6KtDt3kevUc6v4ccKw6MvR13EMgXwej6fuip+Bof/WQ0/I8HHcAlQUgDasizwdLCrFoyo4du5iLGLw0EjQG74ttEqeySQLb+GDzk6qhcRRoBC8F2DPXoJJPyTNXxgKhA9h1mbBI1K4UMkGMV9Cf9EDR9Tgkbl8F0SDId3mVgeroaPK8GX3kVgEPjEOjYgW/6xlzV8nHpN1AVi9PIZF2PJS4Dg8LM9Agn/kxp+qKMxVvCT+T+6q1fDHwMBSoNPUtX+0Rr+uESA8uCTGv5YCcBb/0KJ8Ac7ddTwSzogm0dPlvSz/JGDX6yRjJ8AW4HD/RqRu3Vt1TjKP0DdQJ4GRMsUqeBAwf9vWwklaopNtSNnfVR4/E+AAQDKFJaknf7pJQAAAABJRU5ErkJggg==" }))));
};

var Icon$14 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 25 25" }, props),
        React.createElement("path", { d: "M16.7095 3.10222C17.1006 1.8767 16.1861 0.625 14.8997 0.625C13.8505 0.625 13 1.47554 13 2.52473L13 6.16735C13 6.90335 13.5966 7.5 14.3326 7.5C14.9126 7.5 15.4259 7.12495 15.6022 6.57247L16.7095 3.10222Z", fill: "#F6AF5B" }),
        React.createElement("path", { d: "M8.29046 3.10222C7.89941 1.8767 8.81388 0.625 10.1003 0.625C11.1495 0.625 12 1.47554 12 2.52472L12 6.16736C12 6.90335 11.4034 7.5 10.6674 7.5C10.0874 7.5 9.57408 7.12495 9.39778 6.57247L8.29046 3.10222Z", fill: "#F6AF5B" }),
        React.createElement("path", { d: "M19.8989 24.1416L11.8536 16.0962C11.6583 15.901 11.6583 15.5844 11.8536 15.3891L15.3891 11.8536C15.5843 11.6583 15.9009 11.6583 16.0962 11.8536L24.1416 19.899C24.4325 20.1899 24.2671 20.6882 23.8599 20.7473L21.5113 21.0884C21.2923 21.1202 21.1202 21.2923 21.0884 21.5114L20.7473 23.8599C20.6882 24.2671 20.1899 24.4326 19.8989 24.1416Z", fill: "#AE5714" }),
        React.createElement("path", { d: "M5.19774 24.1416L13.2431 16.0962C13.4384 15.901 13.4384 15.5844 13.2431 15.3891L9.70759 11.8536C9.51233 11.6583 9.19575 11.6583 9.00049 11.8536L0.955098 19.899C0.664132 20.1899 0.829575 20.6882 1.23679 20.7473L3.58535 21.0884C3.80441 21.1202 3.97648 21.2923 4.0083 21.5114L4.34938 23.8599C4.40852 24.2671 4.90677 24.4326 5.19774 24.1416Z", fill: "#AE5714" }),
        React.createElement("ellipse", { cx: "12.5259", cy: "14.0971", rx: "8.89606", ry: "8.22211", fill: "#E17A2F" }),
        React.createElement("ellipse", { rx: "8.69974", ry: "8.36325", transform: "matrix(0.882297 -0.470694 0.529889 0.848067 12.478 12.6876)", fill: "#F6AF5B" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7.8727 5.68848L21.0558 14.7566C20.9018 15.3031 20.6883 15.8274 20.422 16.3232L6.43117 6.69946C6.87202 6.31918 7.35491 5.97999 7.8727 5.68848ZM4.87291 8.47883L19.0217 18.2112C18.2987 18.9421 17.4342 19.5515 16.4682 20.0023L3.75 11.2539C3.94091 10.2547 4.32789 9.31792 4.87291 8.47883Z", fill: "#F7D29B" }),
        React.createElement("ellipse", { rx: "6.64749", ry: "6.39038", transform: "matrix(0.882297 -0.470693 0.52989 0.848067 12.4778 12.6875)", fill: "#E7974D" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.6821 10.1773C18.5825 9.96784 18.4695 9.7613 18.3429 9.55858C16.4727 6.56549 12.3308 5.53998 9.09162 7.26804C5.85244 8.9961 4.74261 12.8234 6.61276 15.8164C6.73956 16.0194 6.87681 16.2133 7.02351 16.3979C5.65271 13.5147 6.82182 10.0792 9.84162 8.46822C12.8612 6.85733 16.6652 7.63925 18.6821 10.1773Z", fill: "#E17A2F" }),
        React.createElement("path", { d: "M9.95047 14.0798C9.03077 14.1218 8.6939 13.361 8.65027 12.4055C8.60664 11.4501 8.87277 10.6617 9.79247 10.6197C10.7122 10.5777 11.049 11.3385 11.0927 12.294C11.1363 13.2495 10.8702 14.0378 9.95047 14.0798Z", fill: "#AE5714" }),
        React.createElement("path", { d: "M15.1194 14.0803C14.1997 14.1223 13.8628 13.3615 13.8192 12.406C13.7756 11.4505 14.0417 10.6622 14.9614 10.6202C15.8811 10.5782 16.218 11.339 16.2616 12.2945C16.3052 13.25 16.0391 14.0383 15.1194 14.0803Z", fill: "#AE5714" })));
};

var Icon$13 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 25 25" }, props),
        React.createElement("path", { d: "M16.7095 3.10222C17.1006 1.8767 16.1861 0.625 14.8997 0.625C13.8505 0.625 13 1.47554 13 2.52473L13 6.16735C13 6.90335 13.5966 7.5 14.3326 7.5C14.9126 7.5 15.4259 7.12495 15.6022 6.57247L16.7095 3.10222Z", fill: "#FFD800" }),
        React.createElement("path", { d: "M8.29046 3.10222C7.89941 1.8767 8.81388 0.625 10.1003 0.625C11.1495 0.625 12 1.47554 12 2.52472L12 6.16736C12 6.90335 11.4034 7.5 10.6674 7.5C10.0874 7.5 9.57408 7.12495 9.39778 6.57247L8.29046 3.10222Z", fill: "#FFD800" }),
        React.createElement("path", { d: "M19.8989 24.1416L11.8536 16.0962C11.6583 15.901 11.6583 15.5844 11.8536 15.3891L15.3891 11.8536C15.5843 11.6583 15.9009 11.6583 16.0962 11.8536L24.1416 19.899C24.4325 20.1899 24.2671 20.6882 23.8599 20.7473L21.5113 21.0884C21.2923 21.1202 21.1202 21.2923 21.0884 21.5114L20.7473 23.8599C20.6882 24.2671 20.1899 24.4326 19.8989 24.1416Z", fill: "#FFAF00" }),
        React.createElement("path", { d: "M5.19774 24.1416L13.2431 16.0962C13.4384 15.901 13.4384 15.5844 13.2431 15.3891L9.70759 11.8536C9.51233 11.6583 9.19575 11.6583 9.00049 11.8536L0.955098 19.899C0.664132 20.1899 0.829575 20.6882 1.23679 20.7473L3.58535 21.0884C3.80441 21.1202 3.97648 21.2923 4.0083 21.5114L4.34938 23.8599C4.40852 24.2671 4.90677 24.4326 5.19774 24.1416Z", fill: "#FFAF00" }),
        React.createElement("ellipse", { cx: "12.5259", cy: "14.0971", rx: "8.89606", ry: "8.22211", fill: "#EB8C00" }),
        React.createElement("ellipse", { rx: "8.69974", ry: "8.36325", transform: "matrix(0.882297 -0.470694 0.529889 0.848067 12.478 12.6876)", fill: "#FFD800" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7.8727 5.68848L21.0558 14.7566C20.9018 15.3031 20.6883 15.8274 20.422 16.3232L6.43117 6.69946C6.87202 6.31918 7.35491 5.97999 7.8727 5.68848ZM4.87291 8.47883L19.0217 18.2112C18.2987 18.9421 17.4342 19.5515 16.4682 20.0023L3.75 11.2539C3.94091 10.2547 4.32789 9.31792 4.87291 8.47883Z", fill: "#FEED8D" }),
        React.createElement("ellipse", { rx: "6.64749", ry: "6.39038", transform: "matrix(0.882297 -0.470693 0.52989 0.848067 12.4778 12.6875)", fill: "#FFC700" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.6821 10.1773C18.5825 9.96784 18.4695 9.7613 18.3429 9.55858C16.4727 6.56549 12.3308 5.53998 9.09162 7.26804C5.85244 8.9961 4.74261 12.8234 6.61276 15.8164C6.73956 16.0194 6.87681 16.2133 7.02351 16.3979C5.65271 13.5147 6.82182 10.0792 9.84162 8.46822C12.8612 6.85733 16.6652 7.63925 18.6821 10.1773Z", fill: "#FFAF00" }),
        React.createElement("path", { d: "M9.95047 14.0798C9.03077 14.1218 8.6939 13.361 8.65027 12.4055C8.60664 11.4501 8.87277 10.6617 9.79247 10.6197C10.7122 10.5777 11.049 11.3385 11.0927 12.294C11.1363 13.2495 10.8702 14.0378 9.95047 14.0798Z", fill: "#EB8C00" }),
        React.createElement("path", { d: "M15.1194 14.0803C14.1997 14.1223 13.8628 13.3615 13.8192 12.406C13.7756 11.4505 14.0417 10.6622 14.9614 10.6202C15.8811 10.5782 16.218 11.339 16.2616 12.2945C16.3052 13.25 16.0391 14.0383 15.1194 14.0803Z", fill: "#EB8C00" })));
};

var Icon$12 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 25 25" }, props),
        React.createElement("path", { d: "M16.7095 3.10222C17.1006 1.8767 16.1861 0.625 14.8997 0.625C13.8505 0.625 13 1.47554 13 2.52473L13 6.16735C13 6.90335 13.5966 7.5 14.3326 7.5C14.9126 7.5 15.4259 7.12495 15.6022 6.57247L16.7095 3.10222Z", fill: "#9A6AFF" }),
        React.createElement("path", { d: "M8.29046 3.10222C7.89941 1.8767 8.81388 0.625 10.1003 0.625C11.1495 0.625 12 1.47554 12 2.52472L12 6.16736C12 6.90335 11.4034 7.5 10.6674 7.5C10.0874 7.5 9.57408 7.12495 9.39778 6.57247L8.29046 3.10222Z", fill: "#9A6AFF" }),
        React.createElement("path", { d: "M19.8989 24.1416L11.8536 16.0962C11.6583 15.901 11.6583 15.5844 11.8536 15.3891L15.3891 11.8536C15.5843 11.6583 15.9009 11.6583 16.0962 11.8536L24.1416 19.899C24.4325 20.1899 24.2671 20.6882 23.8599 20.7473L21.5113 21.0884C21.2923 21.1202 21.1202 21.2923 21.0884 21.5114L20.7473 23.8599C20.6882 24.2671 20.1899 24.4326 19.8989 24.1416Z", fill: "#A880FD" }),
        React.createElement("path", { d: "M5.19774 24.1416L13.2431 16.0962C13.4384 15.901 13.4384 15.5844 13.2431 15.3891L9.70759 11.8536C9.51233 11.6583 9.19575 11.6583 9.00049 11.8536L0.955098 19.899C0.664132 20.1899 0.829575 20.6882 1.23679 20.7473L3.58535 21.0884C3.80441 21.1202 3.97648 21.2923 4.0083 21.5114L4.34938 23.8599C4.40852 24.2671 4.90677 24.4326 5.19774 24.1416Z", fill: "#A880FD" }),
        React.createElement("ellipse", { cx: "12.5259", cy: "14.0971", rx: "8.89606", ry: "8.22211", fill: "#7645D9" }),
        React.createElement("ellipse", { rx: "8.69974", ry: "8.36325", transform: "matrix(0.882297 -0.470694 0.529889 0.848067 12.478 12.6876)", fill: "#9A6AFF" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7.8727 5.68848L21.0558 14.7566C20.9018 15.3031 20.6883 15.8274 20.422 16.3232L6.43117 6.69946C6.87202 6.31918 7.35491 5.97999 7.8727 5.68848ZM4.87291 8.47883L19.0217 18.2112C18.2987 18.9421 17.4342 19.5515 16.4682 20.0023L3.75 11.2539C3.94091 10.2547 4.32789 9.31792 4.87291 8.47883Z", fill: "#CAB3F8" }),
        React.createElement("ellipse", { rx: "6.64749", ry: "6.39038", transform: "matrix(0.882297 -0.470693 0.52989 0.848067 12.4778 12.6875)", fill: "#8F5BFD" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.6821 10.1773C18.5825 9.96784 18.4695 9.7613 18.3429 9.55858C16.4727 6.56549 12.3308 5.53998 9.09162 7.26804C5.85244 8.9961 4.74261 12.8234 6.61276 15.8164C6.73956 16.0194 6.87681 16.2133 7.02351 16.3979C5.65271 13.5147 6.82182 10.0792 9.84162 8.46822C12.8612 6.85733 16.6652 7.63925 18.6821 10.1773Z", fill: "#7645D9" }),
        React.createElement("path", { d: "M9.95047 14.0798C9.03077 14.1218 8.6939 13.361 8.65027 12.4055C8.60664 11.4501 8.87277 10.6617 9.79247 10.6197C10.7122 10.5777 11.049 11.3385 11.0927 12.294C11.1363 13.2495 10.8702 14.0378 9.95047 14.0798Z", fill: "#452A7A" }),
        React.createElement("path", { d: "M15.1194 14.0803C14.1997 14.1223 13.8628 13.3615 13.8192 12.406C13.7756 11.4505 14.0417 10.6622 14.9614 10.6202C15.8811 10.5782 16.218 11.339 16.2616 12.2945C16.3052 13.25 16.0391 14.0383 15.1194 14.0803Z", fill: "#452A7A" })));
};

var Icon$11 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 25 25" }, props),
        React.createElement("path", { d: "M16.7095 3.10222C17.1006 1.8767 16.1861 0.625 14.8997 0.625C13.8505 0.625 13 1.47554 13 2.52473L13 6.16735C13 6.90335 13.5966 7.5 14.3326 7.5C14.9126 7.5 15.4259 7.12495 15.6022 6.57247L16.7095 3.10222Z", fill: "#C0C4C6" }),
        React.createElement("path", { d: "M8.29046 3.10222C7.89941 1.8767 8.81388 0.625 10.1003 0.625C11.1495 0.625 12 1.47554 12 2.52472L12 6.16736C12 6.90335 11.4034 7.5 10.6674 7.5C10.0874 7.5 9.57408 7.12495 9.39778 6.57247L8.29046 3.10222Z", fill: "#C0C4C6" }),
        React.createElement("path", { d: "M19.8989 24.1416L11.8536 16.0962C11.6583 15.901 11.6583 15.5844 11.8536 15.3891L15.3891 11.8536C15.5843 11.6583 15.9009 11.6583 16.0962 11.8536L24.1416 19.899C24.4325 20.1899 24.2671 20.6882 23.8599 20.7473L21.5113 21.0884C21.2923 21.1202 21.1202 21.2923 21.0884 21.5114L20.7473 23.8599C20.6882 24.2671 20.1899 24.4326 19.8989 24.1416Z", fill: "#7D7D7D" }),
        React.createElement("path", { d: "M5.19774 24.1416L13.2431 16.0962C13.4384 15.901 13.4384 15.5844 13.2431 15.3891L9.70759 11.8536C9.51233 11.6583 9.19575 11.6583 9.00049 11.8536L0.955098 19.899C0.664132 20.1899 0.829575 20.6882 1.23679 20.7473L3.58535 21.0884C3.80441 21.1202 3.97648 21.2923 4.0083 21.5114L4.34938 23.8599C4.40852 24.2671 4.90677 24.4326 5.19774 24.1416Z", fill: "#7D7D7D" }),
        React.createElement("ellipse", { cx: "12.5259", cy: "14.0971", rx: "8.89606", ry: "8.22211", fill: "#969696" }),
        React.createElement("ellipse", { rx: "8.69974", ry: "8.36325", transform: "matrix(0.882297 -0.470694 0.529889 0.848067 12.478 12.6876)", fill: "#C0C4C6" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7.8727 5.68848L21.0558 14.7566C20.9018 15.3031 20.6883 15.8274 20.422 16.3232L6.43117 6.69946C6.87202 6.31918 7.35491 5.97999 7.8727 5.68848ZM4.87291 8.47883L19.0217 18.2112C18.2987 18.9421 17.4342 19.5515 16.4682 20.0023L3.75 11.2539C3.94091 10.2547 4.32789 9.31792 4.87291 8.47883Z", fill: "#D8D8D8" }),
        React.createElement("ellipse", { rx: "6.64749", ry: "6.39038", transform: "matrix(0.882297 -0.470693 0.52989 0.848067 12.4778 12.6875)", fill: "#B2B2B2" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.6821 10.1773C18.5825 9.96784 18.4695 9.7613 18.3429 9.55858C16.4727 6.56549 12.3308 5.53998 9.09162 7.26804C5.85244 8.9961 4.74261 12.8234 6.61276 15.8164C6.73956 16.0194 6.87681 16.2133 7.02351 16.3979C5.65271 13.5147 6.82182 10.0792 9.84162 8.46822C12.8612 6.85733 16.6652 7.63925 18.6821 10.1773Z", fill: "#969696" }),
        React.createElement("path", { d: "M9.95047 14.0798C9.03077 14.1218 8.6939 13.361 8.65027 12.4055C8.60664 11.4501 8.87277 10.6617 9.79247 10.6197C10.7122 10.5777 11.049 11.3385 11.0927 12.294C11.1363 13.2495 10.8702 14.0378 9.95047 14.0798Z", fill: "#7D7D7D" }),
        React.createElement("path", { d: "M15.1194 14.0803C14.1997 14.1223 13.8628 13.3615 13.8192 12.406C13.7756 11.4505 14.0417 10.6622 14.9614 10.6202C15.8811 10.5782 16.218 11.339 16.2616 12.2945C16.3052 13.25 16.0391 14.0383 15.1194 14.0803Z", fill: "#7D7D7D" })));
};

var Icon$10 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 25 25" }, props),
        React.createElement("path", { d: "M16.7095 3.10222C17.1006 1.8767 16.1861 0.625 14.8997 0.625C13.8505 0.625 13 1.47554 13 2.52473L13 6.16735C13 6.90335 13.5966 7.5 14.3326 7.5C14.9126 7.5 15.4259 7.12495 15.6022 6.57247L16.7095 3.10222Z", fill: "#53DEE9" }),
        React.createElement("path", { d: "M8.29046 3.10222C7.89941 1.8767 8.81388 0.625 10.1003 0.625C11.1495 0.625 12 1.47554 12 2.52472L12 6.16736C12 6.90335 11.4034 7.5 10.6674 7.5C10.0874 7.5 9.57408 7.12495 9.39778 6.57247L8.29046 3.10222Z", fill: "#53DEE9" }),
        React.createElement("path", { d: "M19.8989 24.1416L11.8536 16.0962C11.6583 15.901 11.6583 15.5844 11.8536 15.3891L15.3891 11.8536C15.5843 11.6583 15.9009 11.6583 16.0962 11.8536L24.1416 19.899C24.4325 20.1899 24.2671 20.6882 23.8599 20.7473L21.5113 21.0884C21.2923 21.1202 21.1202 21.2923 21.0884 21.5114L20.7473 23.8599C20.6882 24.2671 20.1899 24.4326 19.8989 24.1416Z", fill: "#1FC7D4" }),
        React.createElement("path", { d: "M5.19774 24.1416L13.2431 16.0962C13.4384 15.901 13.4384 15.5844 13.2431 15.3891L9.70759 11.8536C9.51233 11.6583 9.19575 11.6583 9.00049 11.8536L0.955098 19.899C0.664132 20.1899 0.829575 20.6882 1.23679 20.7473L3.58535 21.0884C3.80441 21.1202 3.97648 21.2923 4.0083 21.5114L4.34938 23.8599C4.40852 24.2671 4.90677 24.4326 5.19774 24.1416Z", fill: "#1FC7D4" }),
        React.createElement("ellipse", { cx: "12.5259", cy: "14.0971", rx: "8.89606", ry: "8.22211", fill: "#0098A1" }),
        React.createElement("ellipse", { rx: "8.69974", ry: "8.36325", transform: "matrix(0.882297 -0.470694 0.529889 0.848067 12.478 12.6876)", fill: "#53DEE9" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7.8727 5.68848L21.0558 14.7566C20.9018 15.3031 20.6883 15.8274 20.422 16.3232L6.43117 6.69946C6.87202 6.31918 7.35491 5.97999 7.8727 5.68848ZM4.87291 8.47883L19.0217 18.2112C18.2987 18.9421 17.4342 19.5515 16.4682 20.0022L3.75 11.2539C3.94091 10.2547 4.32789 9.31792 4.87291 8.47883Z", fill: "#84F0F9" }),
        React.createElement("ellipse", { rx: "6.64749", ry: "6.39038", transform: "matrix(0.882297 -0.470693 0.52989 0.848067 12.4778 12.6875)", fill: "#1FC7D4" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.6821 10.1773C18.5825 9.96784 18.4695 9.7613 18.3429 9.55858C16.4727 6.56549 12.3308 5.53998 9.09162 7.26804C5.85244 8.9961 4.74261 12.8234 6.61276 15.8164C6.73956 16.0194 6.87681 16.2133 7.02351 16.3979C5.65271 13.5147 6.82182 10.0792 9.84162 8.46822C12.8612 6.85733 16.6652 7.63925 18.6821 10.1773Z", fill: "#0098A1" }),
        React.createElement("path", { d: "M9.95096 14.0798C9.03126 14.1218 8.69439 13.361 8.65076 12.4055C8.60713 11.4501 8.87326 10.6617 9.79296 10.6197C10.7127 10.5777 11.0495 11.3385 11.0932 12.294C11.1368 13.2495 10.8707 14.0378 9.95096 14.0798Z", fill: "#017178" }),
        React.createElement("path", { d: "M15.1199 14.0803C14.2002 14.1223 13.8633 13.3615 13.8197 12.406C13.7761 11.4505 14.0422 10.6622 14.9619 10.6202C15.8816 10.5782 16.2185 11.339 16.2621 12.2945C16.3057 13.25 16.0396 14.0383 15.1199 14.0803Z", fill: "#017178" })));
};

var Icon$$ = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 35 33" }, props),
        React.createElement("path", { d: "m32.9582 1-13.1341 9.7183 2.4424-5.72731z", fill: "#e17726", stroke: "#e17726" }),
        React.createElement("g", { fill: "#e27625", stroke: "#e27625" },
            React.createElement("path", { d: "m2.66296 1 13.01714 9.809-2.3254-5.81802z" }),
            React.createElement("path", { d: "m28.2295 23.5335-3.4947 5.3386 7.4829 2.0603 2.1436-7.2823z" }),
            React.createElement("path", { d: "m1.27281 23.6501 2.13055 7.2823 7.46994-2.0603-3.48166-5.3386z" }),
            React.createElement("path", { d: "m10.4706 14.5149-2.0786 3.1358 7.405.3369-.2469-7.969z" }),
            React.createElement("path", { d: "m25.1505 14.5149-5.1575-4.58704-.1688 8.05974 7.4049-.3369z" }),
            React.createElement("path", { d: "m10.8733 28.8721 4.4819-2.1639-3.8583-3.0062z" }),
            React.createElement("path", { d: "m20.2659 26.7082 4.4689 2.1639-.6105-5.1701z" })),
        React.createElement("path", { d: "m24.7348 28.8721-4.469-2.1639.3638 2.9025-.039 1.231z", fill: "#d5bfb2", stroke: "#d5bfb2" }),
        React.createElement("path", { d: "m10.8732 28.8721 4.1572 1.9696-.026-1.231.3508-2.9025z", fill: "#d5bfb2", stroke: "#d5bfb2" }),
        React.createElement("path", { d: "m15.1084 21.7842-3.7155-1.0884 2.6243-1.2051z", fill: "#233447", stroke: "#233447" }),
        React.createElement("path", { d: "m20.5126 21.7842 1.0913-2.2935 2.6372 1.2051z", fill: "#233447", stroke: "#233447" }),
        React.createElement("path", { d: "m10.8733 28.8721.6495-5.3386-4.13117.1167z", fill: "#cc6228", stroke: "#cc6228" }),
        React.createElement("path", { d: "m24.0982 23.5335.6366 5.3386 3.4946-5.2219z", fill: "#cc6228", stroke: "#cc6228" }),
        React.createElement("path", { d: "m27.2291 17.6507-7.405.3369.6885 3.7966 1.0913-2.2935 2.6372 1.2051z", fill: "#cc6228", stroke: "#cc6228" }),
        React.createElement("path", { d: "m11.3929 20.6958 2.6242-1.2051 1.0913 2.2935.6885-3.7966-7.40495-.3369z", fill: "#cc6228", stroke: "#cc6228" }),
        React.createElement("path", { d: "m8.392 17.6507 3.1049 6.0513-.1039-3.0062z", fill: "#e27525", stroke: "#e27525" }),
        React.createElement("path", { d: "m24.2412 20.6958-.1169 3.0062 3.1049-6.0513z", fill: "#e27525", stroke: "#e27525" }),
        React.createElement("path", { d: "m15.797 17.9876-.6886 3.7967.8704 4.4833.1949-5.9087z", fill: "#e27525", stroke: "#e27525" }),
        React.createElement("path", { d: "m19.8242 17.9876-.3638 2.3584.1819 5.9216.8704-4.4833z", fill: "#e27525", stroke: "#e27525" }),
        React.createElement("path", { d: "m20.5127 21.7842-.8704 4.4834.6236.4406 3.8584-3.0062.1169-3.0062z", fill: "#f5841f", stroke: "#f5841f" }),
        React.createElement("path", { d: "m11.3929 20.6958.104 3.0062 3.8583 3.0062.6236-.4406-.8704-4.4834z", fill: "#f5841f", stroke: "#f5841f" }),
        React.createElement("path", { d: "m20.5906 30.8417.039-1.231-.3378-.2851h-4.9626l-.3248.2851.026 1.231-4.1572-1.9696 1.4551 1.1921 2.9489 2.0344h5.0536l2.962-2.0344 1.442-1.1921z", fill: "#c0ac9d", stroke: "#c0ac9d" }),
        React.createElement("path", { d: "m20.2659 26.7082-.6236-.4406h-3.6635l-.6236.4406-.3508 2.9025.3248-.2851h4.9626l.3378.2851z", fill: "#161616", stroke: "#161616" }),
        React.createElement("path", { d: "m33.5168 11.3532 1.1043-5.36447-1.6629-4.98873-12.6923 9.3944 4.8846 4.1205 6.8983 2.0085 1.52-1.7752-.6626-.4795 1.0523-.9588-.8054-.622 1.0523-.8034z", fill: "#763e1a", stroke: "#763e1a" }),
        React.createElement("path", { d: "m1 5.98873 1.11724 5.36447-.71451.5313 1.06527.8034-.80545.622 1.05228.9588-.66255.4795 1.51997 1.7752 6.89835-2.0085 4.8846-4.1205-12.69233-9.3944z", fill: "#763e1a", stroke: "#763e1a" }),
        React.createElement("path", { d: "m32.0489 16.5234-6.8983-2.0085 2.0786 3.1358-3.1049 6.0513 4.1052-.0519h6.1318z", fill: "#f5841f", stroke: "#f5841f" }),
        React.createElement("path", { d: "m10.4705 14.5149-6.89828 2.0085-2.29944 7.1267h6.11883l4.10519.0519-3.10487-6.0513z", fill: "#f5841f", stroke: "#f5841f" }),
        React.createElement("path", { d: "m19.8241 17.9876.4417-7.5932 2.0007-5.4034h-8.9119l2.0006 5.4034.4417 7.5932.1689 2.3842.013 5.8958h3.6635l.013-5.8958z", fill: "#f5841f", stroke: "#f5841f" })));
};

var Icon$_ = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M18 13H6C5.45 13 5 12.55 5 12C5 11.45 5.45 11 6 11H18C18.55 11 19 11.45 19 12C19 12.55 18.55 13 18 13Z" })));
};

var Icon$Z = function (props) {
    var theme = useTheme();
    var primaryColor = theme.isDark ? "#3C3742" : "#e9eaeb";
    var secondaryColor = theme.isDark ? "#666171" : "#bdc2c4";
    return (React.createElement(Svg, __assign({ viewBox: "0 0 32 32" }, props),
        React.createElement("path", { d: "M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16z", fill: primaryColor }),
        React.createElement("mask", { id: "A", "mask-type": "alpha", maskUnits: "userSpaceOnUse", x: "0", y: "0", width: "32", height: "32" },
            React.createElement("path", { d: "M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16z", fill: "#c4c4c4" })),
        React.createElement("g", { mask: "url(#A)" },
            React.createElement("path", { d: "M25.128 16.436c0 3.115-4.133 5.641-9.231 5.641s-9.231-2.526-9.231-5.641V15h18.461v1.436zm2.205 13.806c0-3.815-5.074-6.908-11.333-6.908S4.667 26.426 4.667 30.242V32h22.667v-1.759z", fill: secondaryColor }),
            React.createElement("path", { fillRule: "evenodd", d: "M10.234 5.601C9.942 4.264 10.96 3 12.328 3c1.184 0 2.143.959 2.143 2.143v3.873l1.427-.067c.589 0 1.166.034 1.724.098V5.143c0-1.184.959-2.143 2.143-2.143 1.368 0 2.386 1.264 2.093 2.601l-.931 4.258c2.529 1.006 4.201 2.749 4.201 4.731 0 3.115-4.133 5.641-9.231 5.641s-9.231-2.526-9.231-5.641c0-2.053 1.794-3.849 4.476-4.836l-.908-4.153z", fill: secondaryColor }),
            React.createElement("ellipse", { cx: "12.308", cy: "14.846", rx: "1.026", ry: "1.538", fill: primaryColor }),
            React.createElement("ellipse", { cx: "19.385", cy: "14.846", rx: "1.026", ry: "1.538", fill: primaryColor }))));
};

var Icon$Y = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z" })));
};

var Icon$X = function (props) {
    return (React.createElement(Svg, __assign({ height: "31", fill: "none", xmlnsXlink: "http://www.w3.org/1999/xlink" }, props),
        React.createElement("rect", { width: "30.7597", height: "31", fill: "url(#pattern0)" }),
        React.createElement("rect", { width: "30.7597", height: "31", fill: "black", fillOpacity: "0.2" }),
        React.createElement("rect", { width: "30.7597", height: "31", fill: "black", fillOpacity: "0.2" }),
        React.createElement("defs", null,
            React.createElement("pattern", { id: "pattern0", patternContentUnits: "objectBoundingBox", width: "1", height: "1" },
                React.createElement("use", { xlinkHref: "#image0_361_1877", transform: "scale(0.0078125)" })),
            React.createElement("image", { id: "image0_361_1877", width: "128", height: "129", xlinkHref: "data:image/png;base64,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" }))));
};

var Icon$W = function (props) {
    return (React.createElement(Svg, __assign({ height: "31", fill: "none", xmlnsXlink: "http://www.w3.org/1999/xlink" }, props),
        React.createElement("rect", { width: "30.7597", height: "31", fill: "url(#pattern0)" }),
        React.createElement("rect", { width: "30.7597", height: "31", fill: "black", fillOpacity: "0.2" }),
        React.createElement("rect", { width: "30.7597", height: "31", fill: "black", fillOpacity: "0.2" }),
        React.createElement("defs", null,
            React.createElement("pattern", { id: "pattern0", patternContentUnits: "objectBoundingBox", width: "1", height: "1" },
                React.createElement("use", { xlinkHref: "#image0_361_1877", transform: "scale(0.0078125)" })),
            React.createElement("image", { id: "image0_361_1877", width: "128", height: "129", xlinkHref: "data:image/png;base64,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" }))));
};

var Icon$V = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 48 48" }, props),
        React.createElement("g", { clipPath: "url(#clip-pocketwatch)" },
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M44.4825 9.78846C44.9985 10.9575 44.934 12.0841 44.3506 13.0946C43.7672 14.105 42.8238 14.7242 41.5534 14.8619C40.2449 15.0037 38.5223 14.6345 36.5148 13.4755C34.5072 12.3164 33.3262 11.0092 32.7948 9.80511C32.2788 8.63603 32.3433 7.50943 32.9267 6.49898C33.5101 5.48854 34.4535 4.86941 35.7239 4.73171C37.0324 4.5899 38.755 4.95904 40.7625 6.1181C42.7701 7.27716 43.9511 8.58438 44.4825 9.78846ZM46.7339 8.79481C45.9315 6.97669 44.3045 5.3214 41.993 3.98688C39.6815 2.65235 37.4345 2.07098 35.4588 2.28512C33.445 2.50338 31.7896 3.54667 30.7955 5.26852C29.8014 6.99038 29.7255 8.94565 30.5434 10.7988C31.3458 12.6169 32.9728 14.2722 35.2843 15.6067C37.5958 16.9412 39.8428 17.5226 41.8185 17.3085C43.8323 17.0902 45.4877 16.0469 46.4818 14.325C47.4759 12.6032 47.5518 10.6479 46.7339 8.79481Z", fill: "#FFAF00" }),
            React.createElement("path", { d: "M39.2061 12.466C39.4779 11.9952 39.3166 11.3932 38.8458 11.1213L37.3879 10.2796C36.9171 10.0078 36.315 10.1691 36.0432 10.6399L33.7667 14.5829C33.4949 15.0537 33.6562 15.6558 34.127 15.9276L35.5849 16.7693C36.0557 17.0411 36.6577 16.8798 36.9296 16.409L39.2061 12.466Z", fill: "#EB8C00" }),
            React.createElement("path", { d: "M42.8521 10.8222C43.1239 10.3514 42.9626 9.74937 42.4917 9.47754L36.9885 6.30023C36.5177 6.02841 35.9156 6.18972 35.6438 6.66054L34.4249 8.77169C34.1531 9.2425 34.3144 9.84453 34.7852 10.1164L40.2885 13.2937C40.7593 13.5655 41.3614 13.4042 41.6332 12.9334L42.8521 10.8222Z", fill: "#FFAF00" }),
            React.createElement("path", { d: "M42.8521 10.8222C43.1239 10.3514 42.9626 9.74937 42.4917 9.47754L38.2605 7.03465C37.7897 6.76282 37.1877 6.92413 36.9159 7.39495L35.9418 9.08208C35.67 9.5529 35.8313 10.1549 36.3021 10.4268L40.5333 12.8697C41.0041 13.1415 41.6062 12.9802 41.878 12.5093L42.8521 10.8222Z", fill: "#FFD800" }),
            React.createElement("path", { d: "M42.2502 9.90623C42.3862 9.67082 42.3055 9.3698 42.0701 9.23389L41.2265 8.74685C40.9911 8.61094 40.6901 8.6916 40.5542 8.92701L39.0879 11.4666C38.952 11.702 39.0327 12.0031 39.2681 12.139L40.1117 12.626C40.3471 12.7619 40.6481 12.6813 40.784 12.4458L42.2502 9.90623Z", fill: "#FFE971" }),
            React.createElement("path", { d: "M14.4276 37.9808C19.0474 45.9826 29.0239 48.079 37.1341 43.3966C45.2442 38.7142 48.4169 29.0261 43.7971 21.0244C39.1773 13.0227 29.2008 10.9262 21.0907 15.6086C12.9805 20.291 9.80785 29.9791 14.4276 37.9808Z", fill: "#EB8C00" }),
            React.createElement("path", { d: "M12.9928 35.4957C17.6126 43.4975 27.5891 45.5939 35.6993 40.9115C43.8094 36.2291 46.9821 26.541 42.3623 18.5393C37.7425 10.5375 27.766 8.4411 19.6558 13.1235C11.5457 17.8059 8.37303 27.494 12.9928 35.4957Z", fill: "#FFD800" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11.7043 22.6394C12.3316 20.7707 13.3072 19.0005 14.5942 17.4155L44.4474 25.2401C44.6009 27.2114 44.3704 29.1765 43.7923 31.0497L11.7043 22.6394ZM39.463 38.0997C40.3335 37.2422 41.1005 36.3113 41.7564 35.3244L10.887 27.2335C10.8573 28.381 10.9556 29.5386 11.1892 30.6891L39.463 38.0997Z", fill: "#FFE971" }),
            React.createElement("path", { d: "M15.0259 34.3218C19.0448 41.2826 27.6684 43.1382 34.6556 39.1041C41.6428 35.07 44.3477 26.674 40.3288 19.7131C36.31 12.7523 27.6863 10.8967 20.6991 14.9308C13.7119 18.9649 11.0071 27.3609 15.0259 34.3218Z", fill: "#FFC700" }),
            React.createElement("path", { d: "M16.5423 33.2959C20.044 39.3611 27.4985 40.8267 33.6123 37.2969C39.7261 33.7671 42.1841 26.5785 38.6824 20.5134C35.1806 14.4482 27.7262 12.9826 21.6123 16.5124C15.4985 20.0422 13.0406 27.2308 16.5423 33.2959Z", fill: "white" }),
            React.createElement("path", { d: "M19.6485 19.4094C18.7716 20.2171 20.1105 20.7851 21.1076 20.1316C22.9645 18.9145 25.1882 18.2126 27.5811 18.2248C31.0292 18.2423 34.1409 19.7388 36.319 22.1137C37.0584 22.9199 38.4114 22.545 37.8645 21.5976C34.5623 15.878 27.6235 14.4433 21.9702 17.7072C21.1156 18.2006 20.3393 18.7732 19.6485 19.4094Z", fill: "#E7E8E8" }),
            React.createElement("path", { d: "M34.6395 35.043C35.5545 34.2788 34.2368 33.6843 33.2067 34.2845C31.5603 35.2437 29.6432 35.7884 27.5946 35.7783C24.3428 35.7623 21.4084 34.3516 19.3546 32.1127C18.6572 31.3525 17.381 31.706 17.8968 32.5993C21.0104 37.9921 27.5541 39.344 32.8862 36.2656C33.5169 35.9014 34.1025 35.4916 34.6395 35.043Z", fill: "#E7E8E8" }),
            React.createElement("path", { d: "M32.5972 20.6118C32.801 20.2587 32.6801 19.8071 32.3269 19.6033L32.0205 19.4263C31.6673 19.2225 31.2158 19.3434 31.0119 19.6966L28.0893 24.7587C27.8854 25.1118 28.0064 25.5633 28.3595 25.7672L28.666 25.9442C29.0191 26.148 29.4707 26.027 29.6745 25.6739L32.5972 20.6118Z", fill: "#452A7A" }),
            React.createElement("path", { d: "M21.2036 27.5233C20.8098 27.6288 20.576 28.0336 20.6816 28.4275L20.7784 28.789C20.884 29.1828 21.2888 29.4166 21.6826 29.311L26.2569 28.0854C26.6507 27.9798 26.8844 27.575 26.7789 27.1812L26.682 26.8197C26.5765 26.4258 26.1717 26.1921 25.7778 26.2976L21.2036 27.5233Z", fill: "#452A7A" }),
            React.createElement("path", { d: "M25.4809 25.6151C26.244 24.2934 27.8023 23.9359 29.053 24.658C30.3037 25.3801 30.7732 26.9084 30.0101 28.23C29.247 29.5517 27.6887 29.9093 26.438 29.1872C25.1873 28.4651 24.7178 26.9368 25.4809 25.6151Z", fill: "#452A7A" }),
            React.createElement("path", { d: "M17.0126 14.6084C16.4241 14.2686 15.5801 14.6286 15.1275 15.4126L10.989 22.5807C10.5364 23.3647 10.6466 24.2756 11.2351 24.6154L11.8085 24.9464C12.397 25.2862 13.241 24.9262 13.6936 24.1422L17.8321 16.9741C18.2847 16.1901 18.1745 15.2792 17.586 14.9394L17.0126 14.6084Z", fill: "#EB8C00" }),
            React.createElement("path", { d: "M1.87053 28.4667C-1.14632 26.725 -0.193534 19.9443 3.7222 13.162C7.63794 6.37974 13.0338 2.16425 16.0507 3.90603C19.0675 5.64781 18.1147 12.4285 14.199 19.2108C10.2833 25.993 4.88739 30.2085 1.87053 28.4667Z", fill: "#FFC700" }),
            React.createElement("path", { d: "M3.24974 28.6111C0.902471 27.273 2.13775 21.219 5.79373 14.9665C9.44971 8.71396 14.1419 4.63067 16.4892 5.96878C18.8365 7.30688 17.6012 13.3609 13.9452 19.6134C10.2892 25.8659 5.59701 29.9492 3.24974 28.6111Z", fill: "#FFD800" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M2.32523 23.3938C2.57644 22.2148 2.99217 20.9038 3.55715 19.5196L17.6473 7.92463C17.7625 8.75342 17.6984 9.77478 17.4703 10.9308L2.32523 23.3938ZM15.6081 16.3772C15.9949 15.5396 16.3319 14.7209 16.6159 13.9331L2.04567 25.923C2.0571 26.4661 2.12846 26.9487 2.26274 27.3591L15.6081 16.3772Z", fill: "#FFE971" })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "clip-pocketwatch" },
                React.createElement("rect", { width: "48", height: "48", fill: "white", transform: "matrix(-1 0 0 1 48 0)" })))));
};

var Icon$U = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M9 14.7902C9 15.555 9.82366 16.0367 10.4903 15.6617L15.4505 12.8716C16.1302 12.4893 16.1302 11.5107 15.4505 11.1284L10.4903 8.33827C9.82366 7.96331 9 8.44502 9 9.20985V14.7902ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" })));
};

var Icon$T = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 48 48" }, props),
        React.createElement("path", { d: "M38 10H34C34 7.79086 32.2091 6 30 6H18C15.7909 6 14 7.79086 14 10H10C7.8 10 6 11.8 6 14V16C6 21.1 9.84 25.26 14.78 25.88C16.04 28.88 18.74 31.14 22 31.8V38H16C14.8954 38 14 38.8954 14 40C14 41.1046 14.8954 42 16 42H32C33.1046 42 34 41.1046 34 40C34 38.8954 33.1046 38 32 38H26V31.8C29.26 31.14 31.96 28.88 33.22 25.88C38.16 25.26 42 21.1 42 16V14C42 11.8 40.2 10 38 10ZM10 16V14H14V21.64C11.68 20.8 10 18.6 10 16ZM24 28C20.7 28 18 25.3 18 22V10H30V22C30 25.3 27.3 28 24 28ZM38 16C38 18.6 36.32 20.8 34 21.64V14H38V16Z" })));
};

var Icon$S = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 20 20" }, props),
        React.createElement("path", { d: "M5 10C5 10.55 5.45 11 6 11H14C14.55 11 15 10.55 15 10C15 9.45 14.55 9 14 9H6C5.45 9 5 9.45 5 10ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18Z" })));
};

var Icon$R = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M23 12L20.56 9.21L20.9 5.52L17.29 4.7L15.4 1.5L12 2.96L8.6 1.5L6.71 4.69L3.1 5.5L3.44 9.2L1 12L3.44 14.79L3.1 18.49L6.71 19.31L8.6 22.5L12 21.03L15.4 22.49L17.29 19.3L20.9 18.48L20.56 14.79L23 12ZM9.38 16.01L7 13.61C6.61 13.22 6.61 12.59 7 12.2L7.07 12.13C7.46 11.74 8.1 11.74 8.49 12.13L10.1 13.75L15.25 8.59C15.64 8.2 16.28 8.2 16.67 8.59L16.74 8.66C17.13 9.05 17.13 9.68 16.74 10.07L10.82 16.01C10.41 16.4 9.78 16.4 9.38 16.01Z" })));
};

var Icon$Q = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 34 38" }, props),
        React.createElement("rect", { x: "8.83594", width: "5.30132", height: "17.3191", rx: "2.65066", fill: "#D1884F" }),
        React.createElement("rect", { x: "19.4385", width: "5.30132", height: "17.3191", rx: "2.65066", fill: "#D1884F" }),
        React.createElement("path", { d: "M8.5 13.0084C13.1944 8.40751 20.8056 8.40751 25.5 13.0084C30.1944 17.6093 30.1944 25.0689 25.5 29.6698L17.6538 37.3597C17.2927 37.7136 16.7073 37.7136 16.3462 37.3597L8.5 29.6698C3.80558 25.0689 3.80558 17.6093 8.5 13.0084Z", fill: "#D1884F" }),
        React.createElement("ellipse", { cx: "12.3696", cy: "19.9172", rx: "1.76711", ry: "2.59786", fill: "white" }),
        React.createElement("ellipse", { cx: "21.2056", cy: "19.9172", rx: "1.76711", ry: "2.59786", fill: "white" })));
};

var Icon$P = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM12.5 7.75C12.5 7.33579 12.1642 7 11.75 7C11.3358 7 11 7.33579 11 7.75V13L15.5537 15.8022C15.9106 16.0219 16.3781 15.9106 16.5978 15.5537C16.8192 15.1938 16.7041 14.7225 16.3419 14.5051L12.5 12.2V7.75Z" })));
};

var Icon$O = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 64 64" }, props),
        React.createElement("g", { clipPath: "url(#clip-won)" },
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M43.1934 10.6907C44.0412 9.92381 45.4 10.3246 45.6959 11.4288C45.9144 12.2444 45.4304 13.0827 44.6148 13.3012L38.4955 14.9409L43.1934 10.6907ZM49.112 10.5134C48.1317 6.85481 43.6295 5.52698 40.8207 8.06806L31.0187 16.9358C29.5584 18.2569 30.8604 20.6481 32.7625 20.1385L45.5302 16.7174C48.2324 15.9933 49.8361 13.2157 49.112 10.5134Z", fill: "#7645D9" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M30.1886 8.0841C29.8078 6.90274 28.3125 6.54189 27.4349 7.41956C26.7866 8.06782 26.7866 9.11885 27.4349 9.7671L32.2987 14.6309L30.1886 8.0841ZM24.7196 4.70427C27.6276 1.79628 32.5818 2.99187 33.8434 6.90609L38.2461 20.5658C38.902 22.6007 36.3796 24.1424 34.8677 22.6306L24.7196 12.4824C22.5717 10.3345 22.5717 6.85214 24.7196 4.70427Z", fill: "#7645D9" }),
            React.createElement("path", { opacity: "0.6", d: "M7.27624 34.0431C7.01094 35.0539 5.57594 35.054 5.31064 34.0431L4.51492 31.0112C4.42182 30.6565 4.14478 30.3794 3.79005 30.2863L0.758148 29.4906C-0.252715 29.2253 -0.252717 27.7903 0.758146 27.525L3.79005 26.7293C4.14478 26.6362 4.42182 26.3591 4.51492 26.0044L5.31064 22.9725C5.57594 21.9616 7.01094 21.9616 7.27624 22.9725L8.07196 26.0044C8.16506 26.3591 8.44209 26.6362 8.79682 26.7293L11.8287 27.525C12.8396 27.7903 12.8396 29.2253 11.8287 29.4906L8.79683 30.2863C8.44209 30.3794 8.16506 30.6565 8.07196 31.0112L7.27624 34.0431Z", fill: "#53DEE9" }),
            React.createElement("path", { d: "M9.62029 11.6637C9.62344 12.2763 8.81089 12.494 8.5073 11.9619L7.59673 10.3659C7.4902 10.1791 7.2913 10.0643 7.07631 10.0654L5.23882 10.0748C4.62619 10.078 4.40847 9.26545 4.9406 8.96185L6.53663 8.05128C6.72337 7.94475 6.8382 7.74585 6.8371 7.53087L6.82766 5.69337C6.82451 5.08074 7.63705 4.86302 7.94064 5.39515L8.85121 6.99119C8.95775 7.17792 9.15664 7.29275 9.37163 7.29165L11.2091 7.28221C11.8218 7.27906 12.0395 8.0916 11.5073 8.39519L9.91131 9.30576C9.72458 9.4123 9.60974 9.6112 9.61085 9.82618L9.62029 11.6637Z", fill: "#53DEE9" }),
            React.createElement("path", { opacity: "0.8", d: "M53.8712 15.7857C53.2964 15.6348 53.2964 14.8189 53.8712 14.6681L56.9643 13.8563C57.166 13.8033 57.3235 13.6458 57.3764 13.4441L58.1882 10.351C58.3391 9.77623 59.155 9.77623 59.3058 10.351L60.1176 13.4441C60.1706 13.6458 60.3281 13.8033 60.5298 13.8563L63.6229 14.6681C64.1977 14.8189 64.1977 15.6348 63.6229 15.7857L60.5298 16.5975C60.3281 16.6504 60.1706 16.8079 60.1176 17.0096L59.3058 20.1027C59.155 20.6775 58.3391 20.6775 58.1882 20.1027L57.3764 17.0096C57.3235 16.8079 57.166 16.6504 56.9643 16.5975L53.8712 15.7857Z", fill: "#53DEE9" }),
            React.createElement("path", { d: "M51.0823 29.9055C50.3505 27.1742 47.543 25.5533 44.8116 26.2851L17.6112 33.5735C14.8798 34.3053 13.2589 37.1128 13.9908 39.8441L18.546 56.8444C19.2778 59.5758 22.0853 61.1967 24.8167 60.4648L52.0171 53.1765C54.7485 52.4446 56.3694 49.6371 55.6375 46.9058L51.0823 29.9055Z", fill: "url(#paint0_linear_won)" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.2737 36.0462L45.4742 28.7579C46.8399 28.392 48.2436 29.2024 48.6095 30.5681L53.1648 47.5684C53.5307 48.934 52.7202 50.3378 51.3546 50.7037L24.1541 57.9921C22.7884 58.358 21.3847 57.5475 21.0187 56.1819L16.4635 39.1816C16.0976 37.8159 16.9081 36.4122 18.2737 36.0462ZM44.8116 26.2851C47.543 25.5533 50.3505 27.1742 51.0823 29.9055L55.6375 46.9058C56.3694 49.6371 54.7485 52.4446 52.0171 53.1765L24.8167 60.4648C22.0853 61.1967 19.2778 59.5758 18.546 56.8444L13.9908 39.8441C13.2589 37.1128 14.8798 34.3053 17.6112 33.5735L44.8116 26.2851Z", fill: "#7645D9" }),
            React.createElement("path", { d: "M35.2297 28.8525L27.1932 31.0059L34.3987 57.8973L42.4352 55.7439L35.2297 28.8525Z", fill: "#7645D9" }),
            React.createElement("path", { d: "M54.5173 42.4023L52.3639 34.3658L15.1113 44.3476L17.2647 52.3841L54.5173 42.4023Z", fill: "#7645D9" }),
            React.createElement("g", { style: { mixBlendMode: "multiply" } },
                React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M39.9264 46.3239L31.8613 48.485L32.1926 49.7213L40.2577 47.5603L39.9264 46.3239ZM29.7019 40.4262L37.767 38.2651L37.4358 37.0287L29.3707 39.1898L29.7019 40.4262Z", fill: "#7645D9" })),
            React.createElement("path", { d: "M54.8306 24.9448C55.3795 22.8962 54.1638 20.7906 52.1153 20.2417L17.4965 10.9657C15.448 10.4168 13.3424 11.6324 12.7935 13.681L11.8824 17.081C11.3335 19.1295 12.5492 21.2351 14.5977 21.784L49.2165 31.0601C51.265 31.609 53.3706 30.3933 53.9195 28.3448L54.8306 24.9448Z", fill: "url(#paint1_linear_won)" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16.8339 13.4384L51.4527 22.7145C52.1355 22.8975 52.5408 23.5993 52.3578 24.2822L51.4468 27.6822C51.2638 28.3651 50.5619 28.7703 49.8791 28.5873L15.2603 19.3113C14.5775 19.1283 14.1722 18.4264 14.3552 17.7436L15.2662 14.3435C15.4492 13.6607 16.1511 13.2555 16.8339 13.4384ZM52.1153 20.2417C54.1638 20.7906 55.3795 22.8962 54.8306 24.9448L53.9195 28.3448C53.3706 30.3933 51.265 31.609 49.2165 31.0601L14.5977 21.784C12.5492 21.2351 11.3335 19.1295 11.8824 17.081L12.7935 13.681C13.3424 11.6324 15.448 10.4168 17.4965 10.9657L52.1153 20.2417Z", fill: "#7645D9" }),
            React.createElement("path", { d: "M38.8242 16.6804L30.7877 14.527L27.8889 25.3454L35.9254 27.4988L38.8242 16.6804Z", fill: "#7645D9" }),
            React.createElement("g", { style: { mixBlendMode: "multiply" } },
                React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M38.4257 18.0799L30.4256 15.8399L30.7455 14.3999L38.8813 16.6573L38.4257 18.0799Z", fill: "#7645D9" }))),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: "paint0_linear_won", x1: "31.2114", y1: "29.9293", x2: "38.4169", y2: "56.8207", gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: "#53DEE9" }),
                React.createElement("stop", { offset: "1", stopColor: "#1FC7D4" })),
            React.createElement("linearGradient", { id: "paint1_linear_won", x1: "34.8059", y1: "15.6037", x2: "31.9071", y2: "26.4221", gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: "#53DEE9" }),
                React.createElement("stop", { offset: "1", stopColor: "#1FC7D4" })),
            React.createElement("clipPath", { id: "clip-won" },
                React.createElement("rect", { width: "64", height: "64", fill: "white" })))));
};

var Icon$N = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 25 25" }, props),
        React.createElement("g", { clipPath: "url(#clip-teamplayer)" },
            React.createElement("path", { d: "M15.9617 4.03476C16.5597 2.82143 15.6818 1.40061 14.2254 1.22477C13.0389 1.08149 11.9708 1.84428 11.8399 2.9285L11.3896 6.65764C11.2976 7.41951 11.899 8.11875 12.7328 8.21943C13.3889 8.29864 14.0166 7.98162 14.286 7.435L15.9617 4.03476Z", fill: "#1FC7D4" }),
            React.createElement("path", { d: "M6.27612 5.16903C5.36287 4.17118 5.80868 2.56162 7.15782 1.98574C8.25706 1.51653 9.49573 1.95041 9.92446 2.95482L11.3991 6.40949C11.7004 7.11529 11.3184 7.95473 10.546 8.28444C9.93817 8.54388 9.24684 8.41494 8.83541 7.9654L6.27612 5.16903Z", fill: "#1FC7D4" }),
            React.createElement("path", { d: "M17.0349 9.11691C17.3916 11.6186 15.2219 13.6784 12.2437 14.1031C9.26546 14.5278 6.60649 13.1564 6.24978 10.6548C5.89307 8.15311 8.06278 6.09324 11.041 5.66857C14.0192 5.24391 16.6782 6.61525 17.0349 9.11691Z", fill: "#1FC7D4" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7.53552 12.9725C8.66378 13.937 10.392 14.3672 12.2437 14.1032C14.913 13.7225 16.9328 12.0284 17.0663 9.87986C16.4991 11.4567 14.8084 12.7917 12.6007 13.3832C10.6865 13.8961 8.82955 13.7307 7.53552 12.9725Z", fill: "#0098A1" }),
            React.createElement("path", { d: "M11.1696 9.94964C11.3325 10.6295 11.0911 10.9601 10.717 11.0497C10.343 11.1393 9.97795 10.9541 9.81504 10.2742C9.65212 9.5943 9.89356 9.26377 10.2676 9.17414C10.6417 9.08451 11.0067 9.26973 11.1696 9.94964Z", fill: "#017178" }),
            React.createElement("path", { d: "M14.4407 9.58045C14.4649 10.2792 14.1625 10.555 13.7781 10.5684C13.3937 10.5817 13.0729 10.3275 13.0486 9.62879C13.0243 8.93005 13.3268 8.65422 13.7112 8.64087C14.0956 8.62753 14.4164 8.88172 14.4407 9.58045Z", fill: "#017178" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.3337 10.8946C12.1996 10.9121 12.1051 11.0349 12.1226 11.169C12.1855 11.6513 12.654 11.9486 13.1254 11.8872C13.3584 11.8568 13.563 11.7451 13.7062 11.5832C13.7958 11.4819 13.7863 11.3272 13.685 11.2376C13.5838 11.148 13.429 11.1575 13.3395 11.2588C13.2753 11.3313 13.1788 11.3864 13.0621 11.4016C12.8142 11.4339 12.6305 11.2773 12.6082 11.1057C12.5907 10.9716 12.4678 10.8771 12.3337 10.8946Z", fill: "#017178" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.3339 10.8945C12.1998 10.9119 12.1053 11.0348 12.1228 11.1689C12.1452 11.3405 12.0078 11.539 11.76 11.5713C11.6411 11.5868 11.5319 11.557 11.4508 11.5014C11.3393 11.425 11.1869 11.4535 11.1104 11.565C11.034 11.6765 11.0625 11.8289 11.174 11.9054C11.3555 12.0297 11.586 12.0878 11.8233 12.0569C12.2947 11.9954 12.6712 11.5878 12.6083 11.1056C12.5908 10.9715 12.468 10.877 12.3339 10.8945Z", fill: "#017178" }),
            React.createElement("path", { d: "M9.50991 12.781C9.67816 11.447 8.51926 10.3246 7.21792 10.5612C6.15761 10.7539 5.45717 11.7854 5.65344 12.8651L6.32848 16.5785C6.4664 17.3372 7.1822 17.8424 7.92727 17.7069C8.51353 17.6004 8.9626 17.1204 9.0384 16.5195L9.50991 12.781Z", fill: "#9A6AFF" }),
            React.createElement("path", { d: "M4.93123 13.9946C4.62613 12.6768 3.04713 12.1326 1.80838 12.9183C0.799086 13.5584 0.455077 14.825 1.04002 15.7472L3.05191 18.9192C3.46294 19.5673 4.37109 19.7279 5.08032 19.2781C5.63839 18.9241 5.92368 18.2814 5.78623 17.6877L4.93123 13.9946Z", fill: "#9A6AFF" }),
            React.createElement("path", { d: "M12.3621 17.3922C13.4422 19.6768 11.9781 22.2858 9.25833 23.5716C6.53859 24.8574 3.59314 24.333 2.5131 22.0485C1.43306 19.764 2.89716 17.1549 5.6169 15.8691C8.33664 14.5833 11.2821 15.1077 12.3621 17.3922Z", fill: "#9A6AFF" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.5245 20.1686C11.9455 21.2367 10.9163 22.1811 9.58715 22.8094C6.86742 24.0952 3.92196 23.5709 2.84192 21.2863C2.41234 20.3777 2.38525 19.4177 2.67957 18.51C2.0738 19.6275 1.96092 20.8804 2.51314 22.0485C3.59318 24.333 6.53864 24.8574 9.25837 23.5716C10.8963 22.7972 12.0789 21.5429 12.5245 20.1686Z", fill: "#7645D9" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M8.75939 18.7345C8.86973 18.6564 9.02253 18.6825 9.10068 18.7928C9.45793 19.2972 9.2815 19.9886 8.77528 20.3471C8.66494 20.4253 8.51213 20.3992 8.43398 20.2889C8.35583 20.1785 8.38193 20.0257 8.49227 19.9476C8.8145 19.7193 8.87726 19.3246 8.7011 19.0758C8.62294 18.9655 8.64904 18.8127 8.75939 18.7345Z", fill: "#452A7A" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M8.75936 18.7345C8.86971 18.6563 9.02251 18.6824 9.10066 18.7928C9.27683 19.0415 9.67007 19.1133 9.9923 18.8851C10.1026 18.807 10.2554 18.8331 10.3336 18.9434C10.4117 19.0537 10.3856 19.2065 10.2753 19.2847C9.76908 19.6432 9.05832 19.5802 8.70107 19.0758C8.62292 18.9654 8.64902 18.8126 8.75936 18.7345Z", fill: "#452A7A" }),
            React.createElement("path", { d: "M7.26609 18.6401C7.75355 19.1413 7.7149 19.5488 7.43915 19.8169C7.16341 20.0851 6.755 20.1124 6.26755 19.6112C5.7801 19.11 5.81875 18.7025 6.09449 18.4343C6.37023 18.1662 6.77864 18.1389 7.26609 18.6401Z", fill: "#452A7A" }),
            React.createElement("path", { d: "M10.0286 16.8059C10.429 17.3791 10.3252 17.775 10.0099 17.9953C9.69452 18.2156 9.28705 18.1767 8.88668 17.6036C8.48632 17.0304 8.5901 16.6344 8.90543 16.4142C9.22077 16.1939 9.62825 16.2327 10.0286 16.8059Z", fill: "#452A7A" }),
            React.createElement("path", { d: "M15.821 11.1076C15.5183 9.7976 16.5573 8.56337 17.876 8.66668C18.9503 8.75086 19.7518 9.70595 19.6661 10.7999L19.3713 14.5627C19.3111 15.3315 18.6502 15.9067 17.8953 15.8475C17.3012 15.801 16.8058 15.3691 16.6694 14.7789L15.821 11.1076Z", fill: "#FFC700" }),
            React.createElement("path", { d: "M20.4641 11.4595C20.469 10.121 21.7611 9.16422 23.0195 9.56738C24.0448 9.89586 24.6059 11.0053 24.2727 12.0453L23.1267 15.6224C22.8925 16.3532 22.1187 16.7586 21.3982 16.5277C20.8313 16.3461 20.4482 15.8139 20.4504 15.2108L20.4641 11.4595Z", fill: "#FFC700" }),
            React.createElement("path", { d: "M13.6364 16.264C13.1079 18.7351 15.1302 20.9398 18.072 21.569C21.0138 22.1983 23.7611 21.0137 24.2897 18.5427C24.8182 16.0716 22.7959 13.8669 19.854 13.2376C16.9122 12.6084 14.1649 13.793 13.6364 16.264Z", fill: "#FFC700" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.7678 17.3277C18.638 17.2898 18.5021 17.3644 18.4643 17.4942C18.2913 18.0876 18.6839 18.6835 19.2794 18.8571C19.4092 18.8949 19.5451 18.8203 19.583 18.6905C19.6208 18.5607 19.5462 18.4248 19.4164 18.387C19.0373 18.2765 18.8491 17.9238 18.9344 17.6312C18.9722 17.5014 18.8976 17.3655 18.7678 17.3277Z", fill: "#AE5714" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.7679 17.3275C18.6381 17.2897 18.5022 17.3642 18.4643 17.494C18.379 17.7867 18.0308 17.983 17.6517 17.8725C17.5219 17.8347 17.386 17.9092 17.3482 18.039C17.3103 18.1689 17.3849 18.3048 17.5147 18.3426C18.1103 18.5162 18.7615 18.2245 18.9344 17.631C18.9723 17.5012 18.8977 17.3653 18.7679 17.3275Z", fill: "#AE5714" }),
            React.createElement("path", { d: "M17.78 16.2187C17.6338 16.9024 17.2734 17.0965 16.8973 17.016C16.5212 16.9356 16.2717 16.6111 16.4179 15.9274C16.5642 15.2437 16.9245 15.0496 17.3007 15.13C17.6768 15.2105 17.9263 15.535 17.78 16.2187Z", fill: "#AE5714" }),
            React.createElement("path", { d: "M21.344 17.3356C21.0937 17.9884 20.7077 18.1244 20.3485 17.9867C19.9894 17.849 19.7931 17.4897 20.0434 16.8369C20.2937 16.1841 20.6798 16.0482 21.039 16.1859C21.3981 16.3236 21.5943 16.6828 21.344 17.3356Z", fill: "#AE5714" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.9627 18.7486C14.73 19.7089 15.9227 20.4634 17.3569 20.8477C20.2916 21.6341 23.1259 20.5724 23.7898 18.0947C24.0539 17.1092 23.9086 16.1461 23.4531 15.2939C24.2558 16.2986 24.5929 17.5285 24.2534 18.7954C23.5895 21.2731 20.7552 22.3347 17.8205 21.5484C16.0531 21.0748 14.6523 20.0389 13.9627 18.7486Z", fill: "#EB8C00" })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "clip-teamplayer" },
                React.createElement("rect", { width: "24", height: "24", fill: "white", transform: "translate(0.5 0.5)" })))));
};

var Icon$M = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 18 16" }, props),
        React.createElement("path", { d: "M10.0002 7.33L15.0002 14H3.00018L8.00018 7.33V2H10.0002V7.33ZM12.9602 0H5.04018C4.62018 0 4.39018 0.48 4.65018 0.81L6.00018 2.5V6.67L0.200175 14.4C-0.289825 15.06 0.180175 16 1.00018 16H17.0002C17.8202 16 18.2902 15.06 17.8002 14.4L12.0002 6.67V2.5L13.3502 0.81C13.6102 0.48 13.3802 0 12.9602 0Z" })));
};

var Icon$L = function (props) {
    return (React.createElement(Svg, __assign({ height: "24", viewBox: "0 0 24 24", fill: "none" }, props),
        React.createElement("path", { d: "M15.5598 4.17396C14.0817 4.53812 12.8192 5.45009 12 6.68221C11.1808 5.45009 9.91829 4.53812 8.44019 4.17396C9.10369 2.88308 10.4487 2 12 2C13.5513 2 14.8963 2.88308 15.5598 4.17396Z", fill: "white" }),
        React.createElement("path", { d: "M4.05673 14.0424C4.49248 10.3896 7.38955 7.49248 11.0424 7.05673C10.1331 5.81007 8.66115 5 7 5C4.23858 5 2 7.23858 2 10C2 11.6611 2.81007 13.1331 4.05673 14.0424Z", fill: "white" }),
        React.createElement("path", { d: "M19.9433 14.0424C21.1899 13.1331 22 11.6611 22 10C22 7.23858 19.7614 5 17 5C15.3389 5 13.8669 5.81007 12.9576 7.05673C16.6104 7.49248 19.5075 10.3896 19.9433 14.0424Z", fill: "white" }),
        React.createElement("path", { d: "M12 22C15.866 22 19 18.866 19 15C19 11.134 15.866 8 12 8C8.13401 8 5 11.134 5 15C5 18.866 8.13401 22 12 22ZM9.5 13.25C9.5 12.8358 9.83579 12.5 10.25 12.5H14.5C14.8125 12.5 15.0922 12.6937 15.2021 12.9862C15.3118 13.2782 15.2293 13.6076 14.995 13.8134L14.9942 13.8142L14.982 13.8252C14.9708 13.8353 14.9527 13.852 14.9285 13.8749C14.8801 13.9208 14.8073 13.9918 14.7162 14.0864C14.5338 14.276 14.28 14.5586 14.0034 14.9226C13.4473 15.6542 12.8157 16.693 12.4736 17.9473C12.3646 18.347 11.9523 18.5826 11.5527 18.4736C11.153 18.3646 10.9174 17.9523 11.0264 17.5527C11.4343 16.057 12.1777 14.8458 12.8091 14.0149L12.8205 14H10.25C9.83579 14 9.5 13.6642 9.5 13.25Z", fill: "white" })));
};

var Icon$K = function (props) {
    return (React.createElement(Svg, __assign({ height: "24", viewBox: "0 0 24 24", fill: "none" }, props),
        React.createElement("path", { d: "M15.5598 4.17396C14.0817 4.53812 12.8192 5.45009 12 6.68221C11.1808 5.45009 9.91829 4.53812 8.44019 4.17396C9.10369 2.88308 10.4487 2 12 2C13.5513 2 14.8963 2.88308 15.5598 4.17396Z", fill: "white" }),
        React.createElement("path", { d: "M4.05673 14.0424C4.49248 10.3896 7.38955 7.49248 11.0424 7.05673C10.1331 5.81007 8.66115 5 7 5C4.23858 5 2 7.23858 2 10C2 11.6611 2.81007 13.1331 4.05673 14.0424Z", fill: "white" }),
        React.createElement("path", { d: "M19.9433 14.0424C21.1899 13.1331 22 11.6611 22 10C22 7.23858 19.7614 5 17 5C15.3389 5 13.8669 5.81007 12.9576 7.05673C16.6104 7.49248 19.5075 10.3896 19.9433 14.0424Z", fill: "white" }),
        React.createElement("path", { d: "M12 22C15.866 22 19 18.866 19 15C19 11.134 15.866 8 12 8C8.13401 8 5 11.134 5 15C5 18.866 8.13401 22 12 22ZM9.5 13.25C9.5 12.8358 9.83579 12.5 10.25 12.5H14.5C14.8125 12.5 15.0922 12.6937 15.2021 12.9862C15.3118 13.2782 15.2293 13.6076 14.995 13.8134L14.9942 13.8142L14.982 13.8252C14.9708 13.8353 14.9527 13.852 14.9285 13.8749C14.8801 13.9208 14.8073 13.9918 14.7162 14.0864C14.5338 14.276 14.28 14.5586 14.0034 14.9226C13.4473 15.6542 12.8157 16.693 12.4736 17.9473C12.3646 18.347 11.9523 18.5826 11.5527 18.4736C11.153 18.3646 10.9174 17.9523 11.0264 17.5527C11.4343 16.057 12.1777 14.8458 12.8091 14.0149L12.8205 14H10.25C9.83579 14 9.5 13.6642 9.5 13.25Z", fill: "white" })));
};

var Icon$J = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M15.0701 1.01H9.07007V3.01H15.0701V1.01ZM11.0701 14.01H13.0701V8.01H11.0701V14.01ZM19.1001 7.39L20.5201 5.97C20.0901 5.46 19.6201 4.98 19.1101 4.56L17.6901 5.98C16.1401 4.74 14.1901 4 12.0701 4C7.10007 4 3.07007 8.03 3.07007 13C3.07007 17.97 7.09007 22 12.0701 22C17.0501 22 21.0701 17.97 21.0701 13C21.0701 10.89 20.3301 8.94 19.1001 7.39ZM12.0701 20.01C8.20007 20.01 5.07007 16.88 5.07007 13.01C5.07007 9.14 8.20007 6.01 12.0701 6.01C15.9401 6.01 19.0701 9.14 19.0701 13.01C19.0701 16.88 15.9401 20.01 12.0701 20.01Z" })));
};

var Icon$I = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 25 25" }, props),
        React.createElement("path", { d: "M16.8196 4.04526C17.2184 2.78478 16.2774 1.5 14.9553 1.5C13.8754 1.5 13 2.37543 13 3.45534L13 7.25679C13 8.01243 13.6126 8.625 14.3682 8.625C14.9648 8.625 15.4927 8.2384 15.6727 7.66958L16.8196 4.04526Z", fill: "#FFD800" }),
        React.createElement("path", { d: "M8.05539 4.04526C7.65652 2.78478 8.59753 1.5 9.91962 1.5C10.9995 1.5 11.875 2.37543 11.875 3.45534L11.875 7.25679C11.875 8.01243 11.2624 8.625 10.5067 8.625C9.91013 8.625 9.3823 8.2384 9.2023 7.66958L8.05539 4.04526Z", fill: "#FFD800" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5.24713 8.9375L13.4374 8.9375V17.0625H7.96396C7.92764 17.0625 7.89183 17.0625 7.85651 17.0625C7.06169 17.0627 6.51444 17.0629 6.00729 16.9494C4.88983 16.6995 3.90253 16.0491 3.23171 15.1211C2.92726 14.6999 2.71136 14.1971 2.39779 13.4667C2.38385 13.4342 2.36972 13.4013 2.35539 13.368L2.34484 13.3434C2.19078 12.9849 2.05946 12.6793 1.96737 12.4255C1.87345 12.1667 1.79043 11.8847 1.78065 11.583C1.7455 10.4988 2.39693 9.50984 3.40701 9.11409C3.68809 9.00396 3.97989 8.96895 4.25478 8.95306C4.5243 8.93749 4.85692 8.93749 5.24713 8.9375ZM4.36295 10.8249C4.15337 10.837 4.09575 10.858 4.09101 10.8599C3.82001 10.9661 3.64524 11.2314 3.65467 11.5223C3.65483 11.5274 3.65831 11.5886 3.72992 11.7859C3.80127 11.9825 3.91061 12.238 4.0781 12.6278C4.4505 13.4945 4.5838 13.791 4.75127 14.0227C5.15376 14.5795 5.74615 14.9697 6.41662 15.1197C6.6956 15.1821 7.02062 15.1875 7.96396 15.1875H11.5624V10.8125H5.27387C4.84961 10.8125 4.57176 10.8129 4.36295 10.8249Z", fill: "#FFD800" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M20.637 10.8249C20.4282 10.8129 20.1503 10.8125 19.7261 10.8125H13.4375V15.1875H17.036C17.9793 15.1875 18.3043 15.1821 18.5833 15.1197C19.2538 14.9697 19.8462 14.5795 20.2487 14.0227C20.4161 13.791 20.5494 13.4945 20.9218 12.6278C21.0893 12.238 21.1987 11.9825 21.27 11.7859C21.3416 11.5886 21.3451 11.5274 21.3453 11.5223C21.3547 11.2314 21.1799 10.9661 20.9089 10.8599C20.9042 10.858 20.8466 10.837 20.637 10.8249ZM20.7452 8.95306C21.0201 8.96895 21.3118 9.00396 21.5929 9.11409C22.603 9.50984 23.2544 10.4988 23.2193 11.583C23.2095 11.8847 23.1265 12.1667 23.0326 12.4255C22.9405 12.6793 22.8092 12.9849 22.6551 13.3434L22.6446 13.368C22.6302 13.4013 22.6161 13.4342 22.6022 13.4667C22.2886 14.197 22.0727 14.6999 21.7682 15.1211C21.0974 16.0491 20.1101 16.6995 18.9927 16.9494C18.4855 17.0629 17.9383 17.0627 17.1434 17.0625C17.1081 17.0625 17.0723 17.0625 17.036 17.0625H11.5625V8.9375L19.7528 8.9375C20.143 8.93749 20.4756 8.93749 20.7452 8.95306Z", fill: "#FFD800" }),
        React.createElement("path", { d: "M8.07961 10.8125H4.6577C4.61915 10.8125 4.58174 10.8125 4.5454 10.8125C4.39673 10.5329 4.3125 10.2138 4.3125 9.875C4.3125 9.53623 4.39673 9.21713 4.54539 8.9375C4.57317 8.9375 4.60124 8.9375 4.62961 8.9375L8.07961 8.9375C8.22827 9.21713 8.3125 9.53623 8.3125 9.875C8.3125 10.2138 8.22827 10.5329 8.07961 10.8125Z", fill: "#FFAF00" }),
        React.createElement("path", { d: "M8.4231 15.1875L9.18751 17.0104L9.06332 17.0625L7.23815 17.0625C7.0893 17.0626 6.94898 17.0626 6.81591 17.0619L6.01688 15.1564C6.27346 15.1844 6.63759 15.1875 7.3468 15.1875H8.4231Z", fill: "#FFAF00" }),
        React.createElement("path", { d: "M16.9204 10.8125H20.3423C20.3809 10.8125 20.4183 10.8125 20.4546 10.8125C20.6033 10.5329 20.6875 10.2138 20.6875 9.875C20.6875 9.53623 20.6033 9.21713 20.4546 8.9375C20.4268 8.9375 20.3988 8.9375 20.3704 8.9375L16.9204 8.9375C16.7717 9.21713 16.6875 9.53623 16.6875 9.875C16.6875 10.2138 16.7717 10.5329 16.9204 10.8125Z", fill: "#EB8C00" }),
        React.createElement("path", { d: "M16.5769 15.1875L15.8125 17.0104L15.9367 17.0625L17.7619 17.0625C17.9107 17.0626 18.051 17.0626 18.1841 17.0619L18.9831 15.1564C18.7266 15.1844 18.3624 15.1875 17.6532 15.1875H16.5769Z", fill: "#EB8C00" }),
        React.createElement("path", { d: "M10.9347 16.6152C10.8361 15.6854 11.5651 14.875 12.5002 14.875C13.4353 14.875 14.1642 15.6853 14.0656 16.6152L13.7087 19.9805C13.6547 20.4891 13.2257 20.875 12.7142 20.875H12.2861C11.7746 20.875 11.3456 20.4891 11.2917 19.9805L10.9347 16.6152Z", fill: "#EB8C00" }),
        React.createElement("path", { d: "M8.875 21.5312C8.875 20.5475 9.67249 19.75 10.6562 19.75H14.3438C15.3275 19.75 16.125 20.5475 16.125 21.5312C16.125 21.8592 15.8592 22.125 15.5312 22.125H9.46875C9.14083 22.125 8.875 21.8592 8.875 21.5312Z", fill: "#FFD800" }),
        React.createElement("path", { d: "M6.88325 14.6524C5.89136 12.0714 5.39541 10.7809 5.56796 9.74082C5.75596 8.6076 6.43705 7.61619 7.42741 7.03418C8.33639 6.5 9.72434 6.5 12.5002 6.5C15.2761 6.5 16.664 6.5 17.573 7.03418C18.5634 7.61619 19.2445 8.6076 19.4325 9.74082C19.605 10.7809 19.1091 12.0714 18.1172 14.6524C17.6137 15.9625 17.362 16.6176 16.9476 17.1125C16.494 17.6543 15.9009 18.0617 15.2324 18.2908C14.6218 18.5 13.9146 18.5 12.5002 18.5C11.0858 18.5 10.3786 18.5 9.768 18.2908C9.09952 18.0617 8.5064 17.6543 8.0528 17.1125C7.63848 16.6176 7.38674 15.9625 6.88325 14.6524Z", fill: "#FFD800" }),
        React.createElement("path", { d: "M17.903 7.86713C18.1516 8.78956 17.8918 9.94993 17.3722 12.2707L17.1257 13.372C16.8386 14.6541 16.6951 15.2952 16.4026 15.8048C15.9154 16.6532 15.1253 17.286 14.1908 17.5761C13.6297 17.7503 12.9728 17.7503 11.6589 17.7503C10.5622 17.7503 10.0139 17.7503 9.52467 17.6202C8.79145 17.4253 8.13341 17.02 7.63037 16.4569C7.76277 16.7161 7.89603 16.9258 8.05248 17.1127C8.50608 17.6545 9.0992 18.062 9.76768 18.291C10.3783 18.5002 11.0855 18.5002 12.4999 18.5002C13.9143 18.5002 14.6215 18.5002 15.2321 18.291C15.9006 18.062 16.4937 17.6545 16.9473 17.1127C17.3616 16.6178 17.6134 15.9627 18.1169 14.6526C19.1088 12.0716 19.6047 10.7811 19.4321 9.74103C19.2442 8.60781 18.5631 7.6164 17.5727 7.0344C17.572 7.034 17.5713 7.0336 17.5707 7.0332C17.7122 7.29512 17.8242 7.57465 17.903 7.86713Z", fill: "#FFAF00" }),
        React.createElement("path", { d: "M20.1942 7.55201C20.1249 7.816 19.7501 7.816 19.6808 7.55201L19.308 6.13133C19.2837 6.03869 19.2113 5.96634 19.1187 5.94202L17.698 5.56917C17.434 5.49988 17.434 5.12512 17.698 5.05584L19.1187 4.68298C19.2113 4.65867 19.2837 4.58632 19.308 4.49368L19.6808 3.073C19.7501 2.809 20.1249 2.809 20.1942 3.073L20.567 4.49368C20.5913 4.58632 20.6637 4.65867 20.7563 4.68298L22.177 5.05584C22.441 5.12512 22.441 5.49988 22.177 5.56917L20.7563 5.94202C20.6637 5.96634 20.5913 6.03869 20.567 6.13133L20.1942 7.55201Z", fill: "#FEED8D" }),
        React.createElement("path", { d: "M4.46705 4.12184C4.50969 3.95939 4.74031 3.95939 4.78295 4.12184L5.0124 4.99611C5.02736 5.05312 5.07188 5.09764 5.12889 5.1126L6.00316 5.34205C6.16561 5.38469 6.16561 5.61531 6.00316 5.65795L5.12889 5.8874C5.07188 5.90236 5.02736 5.94688 5.0124 6.00389L4.78295 6.87816C4.74031 7.04061 4.50969 7.04061 4.46705 6.87816L4.2376 6.00389C4.22264 5.94688 4.17812 5.90236 4.12111 5.8874L3.24684 5.65795C3.08439 5.61531 3.08439 5.38469 3.24684 5.34205L4.12111 5.1126C4.17812 5.09764 4.22264 5.05312 4.2376 4.99611L4.46705 4.12184Z", fill: "#FEED8D" }),
        React.createElement("path", { d: "M5.3257 21.0184C5.2884 21.1605 5.0866 21.1605 5.0493 21.0184L4.84853 20.2534C4.83543 20.2035 4.79648 20.1646 4.74659 20.1515L3.98161 19.9507C3.83946 19.9134 3.83946 19.7116 3.98161 19.6743L4.74659 19.4735C4.79648 19.4604 4.83543 19.4215 4.84853 19.3716L5.0493 18.6066C5.0866 18.4645 5.2884 18.4645 5.3257 18.6066L5.52647 19.3716C5.53957 19.4215 5.57852 19.4604 5.62841 19.4735L6.39339 19.6743C6.53554 19.7116 6.53554 19.9134 6.39339 19.9507L5.62841 20.1515C5.57852 20.1646 5.53957 20.2035 5.52647 20.2534L5.3257 21.0184Z", fill: "#FEED8D" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M8.13603 7.98393C8.40807 8.2437 8.418 8.67482 8.15822 8.94685L8.04567 9.06471C7.79436 9.32787 7.65414 9.67776 7.65414 10.0416L7.65414 10.2898C7.65414 10.6659 7.34921 10.9708 6.97306 10.9708C6.59692 10.9708 6.29199 10.6659 6.29199 10.2898L6.29199 10.0416C6.29199 9.32735 6.56725 8.64055 7.06056 8.12398L7.17311 8.00611C7.43289 7.73408 7.864 7.72415 8.13603 7.98393Z", fill: "#FEED8D" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.93527 2.21472C10.1387 2.409 10.1461 2.73142 9.95187 2.93487L9.86769 3.02302C9.67974 3.21983 9.57487 3.4815 9.57487 3.75363V3.93921C9.57487 4.22052 9.34682 4.44857 9.06551 4.44857C8.7842 4.44857 8.55615 4.22052 8.55615 3.93921V3.75363C8.55615 3.21944 8.76201 2.70579 9.13094 2.31946L9.21512 2.23131C9.4094 2.02786 9.73183 2.02044 9.93527 2.21472Z", fill: "#FEED8D" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M14.8469 2.21472C15.0503 2.409 15.0578 2.73142 14.8635 2.93487L14.7793 3.02302C14.5914 3.21983 14.4865 3.4815 14.4865 3.75363V3.93921C14.4865 4.22052 14.2584 4.44857 13.9771 4.44857C13.6958 4.44857 13.4678 4.22052 13.4678 3.93921V3.75363C13.4678 3.21944 13.6736 2.70579 14.0426 2.31946L14.1267 2.23131C14.321 2.02786 14.6434 2.02044 14.8469 2.21472Z", fill: "#FEED8D" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.789 9.61642C12.789 9.0473 13.2462 8.58594 13.8102 8.58594C14.4493 8.58594 14.9313 9.17163 14.814 9.80558L14.5186 11.4019C15.2601 11.7867 15.832 12.412 15.832 13.2088C15.832 13.9251 15.3629 14.5072 14.7441 14.8888C14.1184 15.2747 13.2798 15.5 12.375 15.5C11.4702 15.5 10.6316 15.2747 10.0059 14.8888C9.38712 14.5072 8.91797 13.9251 8.91797 13.2088C8.91797 12.4166 9.48346 11.7938 10.2182 11.4087L9.92155 9.80559C9.80423 9.17163 10.2863 8.58594 10.9254 8.58594C11.4894 8.58594 11.9466 9.04731 11.9466 9.61642L11.9466 10.9347C12.087 10.9235 12.23 10.9177 12.375 10.9177C12.515 10.9177 12.6532 10.9231 12.789 10.9336V9.61642Z", fill: "#FFAF00" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.789 9.15548C12.789 8.58636 13.2462 8.125 13.8102 8.125C14.4493 8.125 14.9313 8.71069 14.814 9.34464L14.5186 10.9409C15.2601 11.3257 15.832 11.9511 15.832 12.7479C15.832 13.4642 15.3629 14.0463 14.7441 14.4279C14.1184 14.8137 13.2798 15.0391 12.375 15.0391C11.4702 15.0391 10.6316 14.8137 10.0059 14.4279C9.38712 14.0463 8.91797 13.4642 8.91797 12.7479C8.91797 11.9557 9.48346 11.3329 10.2182 10.9478L9.92155 9.34465C9.80423 8.7107 10.2863 8.12501 10.9254 8.12501C11.4894 8.12501 11.9466 8.58637 11.9466 9.15548L11.9466 10.4738C12.087 10.4625 12.23 10.4567 12.375 10.4567C12.515 10.4567 12.6532 10.4621 12.789 10.4726V9.15548ZM11.6782 12.3681C11.6782 12.73 11.4783 13.0234 11.2317 13.0234C10.9851 13.0234 10.7852 12.73 10.7852 12.3681C10.7852 12.0061 10.9851 11.7127 11.2317 11.7127C11.4783 11.7127 11.6782 12.0061 11.6782 12.3681ZM13.5861 13.0234C13.8327 13.0234 14.0326 12.73 14.0326 12.368C14.0326 12.0061 13.8327 11.7127 13.5861 11.7127C13.3395 11.7127 13.1396 12.0061 13.1396 12.368C13.1396 12.73 13.3395 13.0234 13.5861 13.0234Z", fill: "#ED8103" })));
};

var Icon$H = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M0 0h24v24H0z", fill: "none" }),
        React.createElement("path", { d: "M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z" })));
};

var Icon$G = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M15.5 13.9996H14.71L14.43 13.7296C15.63 12.3296 16.25 10.4196 15.91 8.38965C15.44 5.60965 13.12 3.38965 10.32 3.04965C6.09001 2.52965 2.53002 6.08965 3.05002 10.3196C3.39002 13.1196 5.61002 15.4396 8.39002 15.9096C10.42 16.2496 12.33 15.6296 13.73 14.4296L14 14.7096V15.4996L18.25 19.7496C18.66 20.1596 19.33 20.1596 19.74 19.7496C20.15 19.3396 20.15 18.6696 19.74 18.2596L15.5 13.9996ZM9.50002 13.9996C7.01002 13.9996 5.00002 11.9896 5.00002 9.49965C5.00002 7.00965 7.01002 4.99965 9.50002 4.99965C11.99 4.99965 14 7.00965 14 9.49965C14 11.9896 11.99 13.9996 9.50002 13.9996Z" })));
};

var Icon$F = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React.createElement("path", { d: "M16 17.01V11C16 10.45 15.55 10 15 10C14.45 10 14 10.45 14 11V17.01H12.21C11.76 17.01 11.54 17.55 11.86 17.86L14.65 20.64C14.85 20.83 15.16 20.83 15.36 20.64L18.15 17.86C18.47 17.55 18.24 17.01 17.8 17.01H16ZM8.65003 3.35002L5.86003 6.14002C5.54003 6.45002 5.76003 6.99002 6.21003 6.99002H8.00003V13C8.00003 13.55 8.45003 14 9.00003 14C9.55003 14 10 13.55 10 13V6.99002H11.79C12.24 6.99002 12.46 6.45002 12.14 6.14002L9.35003 3.35002C9.16003 3.16002 8.84003 3.16002 8.65003 3.35002Z" })));
};

var Icon$E = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.86 4.86003L21.65 7.65003C21.84 7.84003 21.84 8.16003 21.64 8.35003L18.85 11.14C18.54 11.46 18 11.24 18 10.79V9.00003H4C3.45 9.00003 3 8.55003 3 8.00003C3 7.45003 3.45 7.00003 4 7.00003H18V5.21003C18 4.76003 18.54 4.54003 18.86 4.86003ZM5.14001 19.14L2.35001 16.35C2.16001 16.16 2.16001 15.84 2.36001 15.65L5.15001 12.86C5.46001 12.54 6.00001 12.76 6.00001 13.21V15H20C20.55 15 21 15.45 21 16C21 16.55 20.55 17 20 17H6.00001V18.79C6.00001 19.24 5.46001 19.46 5.14001 19.14Z" })));
};

var Icon$D = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M3.63 3.63C3.24 4.02 3.24 4.65 3.63 5.04L7.29 8.7L7 9H4C3.45 9 3 9.45 3 10V14C3 14.55 3.45 15 4 15H7L10.29 18.29C10.92 18.92 12 18.47 12 17.58V13.41L16.18 17.59C15.69 17.96 15.16 18.27 14.58 18.5C14.22 18.65 14 19.03 14 19.42C14 20.14 14.73 20.6 15.39 20.33C16.19 20 16.94 19.56 17.61 19.02L18.95 20.36C19.34 20.75 19.97 20.75 20.36 20.36C20.75 19.97 20.75 19.34 20.36 18.95L5.05 3.63C4.66 3.24 4.03 3.24 3.63 3.63ZM19 12C19 12.82 18.85 13.61 18.59 14.34L20.12 15.87C20.68 14.7 21 13.39 21 12C21 8.17 18.6 4.89 15.22 3.6C14.63 3.37 14 3.83 14 4.46V4.65C14 5.03 14.25 5.36 14.61 5.5C17.18 6.54 19 9.06 19 12ZM10.29 5.71L10.12 5.88L12 7.76V6.41C12 5.52 10.92 5.08 10.29 5.71ZM16.5 12C16.5 10.23 15.48 8.71 14 7.97V9.76L16.48 12.24C16.49 12.16 16.5 12.08 16.5 12Z" })));
};

var Icon$C = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M3 10V14C3 14.55 3.45 15 4 15H7L10.29 18.29C10.92 18.92 12 18.47 12 17.58V6.41C12 5.52 10.92 5.07 10.29 5.7L7 9H4C3.45 9 3 9.45 3 10ZM16.5 12C16.5 10.23 15.48 8.71 14 7.97V16.02C15.48 15.29 16.5 13.77 16.5 12ZM14 4.45V4.65C14 5.03 14.25 5.36 14.6 5.5C17.18 6.53 19 9.06 19 12C19 14.94 17.18 17.47 14.6 18.5C14.24 18.64 14 18.97 14 19.35V19.55C14 20.18 14.63 20.62 15.21 20.4C18.6 19.11 21 15.84 21 12C21 8.16 18.6 4.89 15.21 3.6C14.63 3.37 14 3.82 14 4.45Z" })));
};

var Icon$B = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M4.47 20.9999H19.53C21.07 20.9999 22.03 19.3299 21.26 17.9999L13.73 4.98993C12.96 3.65993 11.04 3.65993 10.27 4.98993L2.74 17.9999C1.97 19.3299 2.93 20.9999 4.47 20.9999ZM12 13.9999C11.45 13.9999 11 13.5499 11 12.9999V10.9999C11 10.4499 11.45 9.99993 12 9.99993C12.55 9.99993 13 10.4499 13 10.9999V12.9999C13 13.5499 12.55 13.9999 12 13.9999ZM13 17.9999H11V15.9999H13V17.9999Z" })));
};

var Icon$A = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M17.65 6.35C16.02 4.72 13.71 3.78 11.17 4.04C7.50002 4.41 4.48002 7.39 4.07002 11.06C3.52002 15.91 7.27002 20 12 20C15.19 20 17.93 18.13 19.21 15.44C19.53 14.77 19.05 14 18.31 14C17.94 14 17.59 14.2 17.43 14.53C16.3 16.96 13.59 18.5 10.63 17.84C8.41002 17.35 6.62002 15.54 6.15002 13.32C5.31002 9.44 8.26002 6 12 6C13.66 6 15.14 6.69 16.22 7.78L14.71 9.29C14.08 9.92 14.52 11 15.41 11H19C19.55 11 20 10.55 20 10V6.41C20 5.52 18.92 5.07 18.29 5.7L17.65 6.35Z" })));
};

var ExpandableButton = function (_a) {
    var onClick = _a.onClick, expanded = _a.expanded, children = _a.children;
    return (React.createElement(IconButton, { "aria-label": "Hide or show expandable content", onClick: onClick },
        children,
        expanded ? React.createElement(Icon$1h, { color: "invertedContrast" }) : React.createElement(Icon$1k, { color: "invertedContrast" })));
};
ExpandableButton.defaultProps = {
    expanded: false,
};
var ExpandableLabel = function (_a) {
    var onClick = _a.onClick, expanded = _a.expanded, children = _a.children;
    return (React.createElement(Button, { variant: "text", "aria-label": "Hide or show expandable content", onClick: onClick, endIcon: expanded ? React.createElement(Icon$1h, { color: "primary" }) : React.createElement(Icon$1k, { color: "primary" }) }, children));
};
ExpandableLabel.defaultProps = {
    expanded: false,
};

var Box = styled.div(templateObject_1$Q || (templateObject_1$Q = __makeTemplateObject(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"], ["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"])), background, border, layout, position, space);
var templateObject_1$Q;

var Flex = styled(Box)(templateObject_1$P || (templateObject_1$P = __makeTemplateObject(["\n  display: flex;\n  ", "\n"], ["\n  display: flex;\n  ", "\n"])), flexbox);
var templateObject_1$P;

var variants$2 = {
    INFO: "info",
    DANGER: "danger",
    SUCCESS: "success",
    WARNING: "warning",
};

var getThemeColor = function (_a) {
    var theme = _a.theme, _b = _a.variant, variant = _b === void 0 ? variants$2.INFO : _b;
    switch (variant) {
        case variants$2.DANGER:
            return theme.colors.failure;
        case variants$2.WARNING:
            return theme.colors.warning;
        case variants$2.SUCCESS:
            return theme.colors.success;
        case variants$2.INFO:
        default:
            return theme.colors.secondary;
    }
};
var getIcon = function (variant) {
    if (variant === void 0) { variant = variants$2.INFO; }
    switch (variant) {
        case variants$2.DANGER:
            return Icon$1C;
        case variants$2.WARNING:
            return Icon$1D;
        case variants$2.SUCCESS:
            return Icon$1E;
        case variants$2.INFO:
        default:
            return Icon$1B;
    }
};
var IconLabel = styled.div(templateObject_1$O || (templateObject_1$O = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 16px 0 0 16px;\n  color: ", ";\n  padding: 12px;\n"], ["\n  background-color: ", ";\n  border-radius: 16px 0 0 16px;\n  color: ", ";\n  padding: 12px;\n"])), getThemeColor, function (_a) {
    var theme = _a.theme;
    return theme.alert.background;
});
var withHandlerSpacing = 32 + 12 + 8; // button size + inner spacing + handler position
var Details = styled.div(templateObject_2$k || (templateObject_2$k = __makeTemplateObject(["\n  flex: 1;\n  padding-bottom: 12px;\n  padding-left: 12px;\n  padding-right: ", ";\n  padding-top: 12px;\n"], ["\n  flex: 1;\n  padding-bottom: 12px;\n  padding-left: 12px;\n  padding-right: ", ";\n  padding-top: 12px;\n"])), function (_a) {
    var hasHandler = _a.hasHandler;
    return (hasHandler ? withHandlerSpacing + "px" : "12px");
});
var CloseHandler = styled.div(templateObject_3$a || (templateObject_3$a = __makeTemplateObject(["\n  border-radius: 0 16px 16px 0;\n  right: 8px;\n  position: absolute;\n  top: 8px;\n"], ["\n  border-radius: 0 16px 16px 0;\n  right: 8px;\n  position: absolute;\n  top: 8px;\n"])));
var StyledAlert = styled(Flex)(templateObject_4$7 || (templateObject_4$7 = __makeTemplateObject(["\n  position: relative;\n  background-color: ", ";\n  border-radius: 16px;\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n"], ["\n  position: relative;\n  background-color: ", ";\n  border-radius: 16px;\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n"])), function (_a) {
    var theme = _a.theme;
    return theme.alert.background;
});
var Alert = function (_a) {
    var title = _a.title, children = _a.children, variant = _a.variant, onClick = _a.onClick;
    var Icon = getIcon(variant);
    return (React.createElement(StyledAlert, null,
        React.createElement(IconLabel, { variant: variant, hasDescription: !!children },
            React.createElement(Icon, { color: "currentColor", width: "24px" })),
        React.createElement(Details, { hasHandler: !!onClick },
            React.createElement(Text, { bold: true }, title),
            typeof children === "string" ? React.createElement(Text, { as: "p" }, children) : children),
        onClick && (React.createElement(CloseHandler, null,
            React.createElement(IconButton, { scale: "sm", variant: "text", onClick: onClick },
                React.createElement(Icon$1g, { width: "24px", color: "currentColor" }))))));
};
var templateObject_1$O, templateObject_2$k, templateObject_3$a, templateObject_4$7;

var scales$5 = {
    SM: "sm",
    MD: "md",
    LG: "lg",
};

/**
 * Priority: Warning --> Success
 */
var getBoxShadow$1 = function (_a) {
    var _b = _a.isSuccess, isSuccess = _b === void 0 ? false : _b, _c = _a.isWarning, isWarning = _c === void 0 ? false : _c, theme = _a.theme;
    if (isWarning) {
        return theme.shadows.warning;
    }
    if (isSuccess) {
        return theme.shadows.success;
    }
    return theme.shadows.inset;
};
var getHeight = function (_a) {
    var _b = _a.scale, scale = _b === void 0 ? scales$5.MD : _b;
    switch (scale) {
        case scales$5.SM:
            return "32px";
        case scales$5.LG:
            return "48px";
        case scales$5.MD:
        default:
            return "40px";
    }
};
var Input$1 = styled.input(templateObject_1$N || (templateObject_1$N = __makeTemplateObject(["\n  background-color: ", ";\n  border: 0;\n  border-radius: 16px;\n  box-shadow: ", ";\n  color: ", ";\n  display: block;\n  font-size: 16px;\n  height: ", ";\n  outline: 0;\n  padding: 0 16px;\n  width: 100%;\n\n  &::placeholder {\n    color: ", ";\n  }\n\n  &:disabled {\n    background-color: ", ";\n    box-shadow: none;\n    color: ", ";\n    cursor: not-allowed;\n  }\n\n  &:focus:not(:disabled) {\n    box-shadow: ", ";\n  }\n"], ["\n  background-color: ", ";\n  border: 0;\n  border-radius: 16px;\n  box-shadow: ", ";\n  color: ", ";\n  display: block;\n  font-size: 16px;\n  height: ", ";\n  outline: 0;\n  padding: 0 16px;\n  width: 100%;\n\n  &::placeholder {\n    color: ", ";\n  }\n\n  &:disabled {\n    background-color: ", ";\n    box-shadow: none;\n    color: ", ";\n    cursor: not-allowed;\n  }\n\n  &:focus:not(:disabled) {\n    box-shadow: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, getBoxShadow$1, function (_a) {
    var theme = _a.theme;
    return theme.colors.background;
}, getHeight, function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.backgroundDisabled;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.textDisabled;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
});
Input$1.defaultProps = {
    scale: scales$5.MD,
    isSuccess: false,
    isWarning: false,
};
var templateObject_1$N;

var StyledBalanceInput = styled(Box)(templateObject_1$M || (templateObject_1$M = __makeTemplateObject(["\n  background-color: ", ";\n  border: 1px solid ", ";\n  border-radius: 16px;\n  box-shadow: ", ";\n  padding: 8px 16px;\n"], ["\n  background-color: ", ";\n  border: 1px solid ", ";\n  border-radius: 16px;\n  box-shadow: ", ";\n  padding: 8px 16px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.inputSecondary;
}, function (_a) {
    var theme = _a.theme, isWarning = _a.isWarning;
    return theme.shadows[isWarning ? "warning" : "inset"];
});
var StyledInput$1 = styled(Input$1)(templateObject_2$j || (templateObject_2$j = __makeTemplateObject(["\n  background: transparent;\n  border-radius: 0;\n  box-shadow: none;\n  padding-left: 0;\n  padding-right: 0;\n  text-align: right;\n\n  ::placeholder {\n    color: ", ";\n  }\n\n  &:focus:not(:disabled) {\n    box-shadow: none;\n  }\n"], ["\n  background: transparent;\n  border-radius: 0;\n  box-shadow: none;\n  padding-left: 0;\n  padding-right: 0;\n  text-align: right;\n\n  ::placeholder {\n    color: ", ";\n  }\n\n  &:focus:not(:disabled) {\n    box-shadow: none;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
});
var templateObject_1$M, templateObject_2$j;

var BalanceInput = function (_a) {
    var value = _a.value, _b = _a.placeholder, placeholder = _b === void 0 ? "0.0" : _b, onChange = _a.onChange, currencyValue = _a.currencyValue, inputProps = _a.inputProps, _c = _a.isWarning, isWarning = _c === void 0 ? false : _c, props = __rest(_a, ["value", "placeholder", "onChange", "currencyValue", "inputProps", "isWarning"]);
    return (React.createElement(StyledBalanceInput, __assign({ isWarning: isWarning }, props),
        React.createElement(StyledInput$1, __assign({ type: "text", value: value, onChange: onChange, placeholder: placeholder }, inputProps)),
        currencyValue && (React.createElement(Text, { fontSize: "12px", textAlign: "right", color: "textSubtle" }, currencyValue))));
};

var Separator = styled.div(templateObject_1$L || (templateObject_1$L = __makeTemplateObject(["\n  align-items: center;\n  color: currentColor;\n  display: flex;\n  justify-content: center;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  ", " {\n    padding-left: 8px;\n    padding-right: 8px;\n  }\n\n  ", " {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n"], ["\n  align-items: center;\n  color: currentColor;\n  display: flex;\n  justify-content: center;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  ", " {\n    padding-left: 8px;\n    padding-right: 8px;\n  }\n\n  ", " {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var StyledBreadcrumbs = styled.ul(templateObject_2$i || (templateObject_2$i = __makeTemplateObject(["\n  align-items: center;\n  color: ", ";\n  display: flex;\n  flex-wrap: wrap;\n  list-style-type: none;\n\n  ", "\n"], ["\n  align-items: center;\n  color: ", ";\n  display: flex;\n  flex-wrap: wrap;\n  list-style-type: none;\n\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.textDisabled;
}, space);
var insertSeparators = function (items, separator) {
    return items.reduce(function (accum, item, index) {
        if (index === 0) {
            return __spreadArray(__spreadArray([], accum), [item]);
        }
        return __spreadArray(__spreadArray([], accum), [
            React.createElement(Separator, { "aria-hidden": true, key: "seperator-" + index }, separator),
            item,
        ]);
    }, []);
};
var DefaultSeparator = React.createElement(Icon$1i, { color: "currentColor", width: "24px" });
var Breadcrumbs = function (_a) {
    var _b = _a.separator, separator = _b === void 0 ? DefaultSeparator : _b, children = _a.children;
    var validItems = Children.toArray(children).filter(function (child) { return isValidElement(child); });
    var items = insertSeparators(validItems, separator);
    return (React.createElement(StyledBreadcrumbs, null, items.map(function (item, index) { return (React.createElement("li", { key: "child-" + index }, item)); })));
};
var templateObject_1$L, templateObject_2$i;

var getBackgroundColor = function (_a) {
    var theme = _a.theme, variant = _a.variant;
    return theme.colors[variant === variants$3.SUBTLE ? "input" : "tertiary"];
};
var StyledButtonMenu = styled.div(templateObject_1$K || (templateObject_1$K = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 16px;\n  display: inline-flex;\n\n  & > button + button,\n  & > a + a {\n    margin-left: 2px; // To avoid focus shadow overlap\n  }\n"], ["\n  background-color: ", ";\n  border-radius: 16px;\n  display: inline-flex;\n\n  & > button + button,\n  & > a + a {\n    margin-left: 2px; // To avoid focus shadow overlap\n  }\n"])), getBackgroundColor);
var templateObject_1$K;

var ButtonMenu$1 = function (_a) {
    var _b = _a.activeIndex, activeIndex = _b === void 0 ? 0 : _b, _c = _a.scale, scale = _c === void 0 ? scales$6.MD : _c, _d = _a.variant, variant = _d === void 0 ? variants$3.PRIMARY : _d, onItemClick = _a.onItemClick, children = _a.children;
    return (React.createElement(StyledButtonMenu, { variant: variant }, Children.map(children, function (child, index) {
        return cloneElement(child, {
            isActive: activeIndex === index,
            onClick: onItemClick ? function () { return onItemClick(index); } : undefined,
            scale: scale,
            variant: variant,
        });
    })));
};

var InactiveButton = styled(Button)(templateObject_1$J || (templateObject_1$J = __makeTemplateObject(["\n  background-color: transparent;\n  color: ", ";\n  &:hover:not(:disabled):not(:active) {\n    background-color: transparent;\n  }\n"], ["\n  background-color: transparent;\n  color: ", ";\n  &:hover:not(:disabled):not(:active) {\n    background-color: transparent;\n  }\n"])), function (_a) {
    var theme = _a.theme, variant = _a.variant;
    return (variant === variants$3.PRIMARY ? theme.colors.primary : theme.colors.background);
});
var ButtonMenuItem = function (_a) {
    var _b = _a.isActive, isActive = _b === void 0 ? false : _b, _c = _a.variant, variant = _c === void 0 ? variants$3.PRIMARY : _c, as = _a.as, props = __rest(_a, ["isActive", "variant", "as"]);
    if (!isActive) {
        return React.createElement(InactiveButton, __assign({ forwardedAs: as, variant: "tertiary" }, props));
    }
    return React.createElement(Button, __assign({ as: as, variant: variant }, props));
};
var templateObject_1$J;

/**
 * Priority: Warning --> Success --> Active
 */
var getBoxShadow = function (_a) {
    var isActive = _a.isActive, isSuccess = _a.isSuccess, isWarning = _a.isWarning, theme = _a.theme;
    if (isWarning) {
        return theme.card.boxShadowWarning;
    }
    if (isSuccess) {
        return theme.card.boxShadowSuccess;
    }
    if (isActive) {
        return theme.card.boxShadowActive;
    }
    return theme.card.boxShadow;
};
var StyledCard = styled.div(templateObject_1$I || (templateObject_1$I = __makeTemplateObject(["\n  background-color: ", ";\n  border: ", ";\n  border-radius: 32px;\n  box-shadow: ", ";\n  color: ", ";\n  overflow: hidden;\n  position: relative;\n\n  ", "\n"], ["\n  background-color: ", ";\n  border: ", ";\n  border-radius: 32px;\n  box-shadow: ", ";\n  color: ", ";\n  overflow: hidden;\n  position: relative;\n\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.card.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.card.boxShadow;
}, getBoxShadow, function (_a) {
    var theme = _a.theme, isDisabled = _a.isDisabled;
    return theme.colors[isDisabled ? "textDisabled" : "text"];
}, space);
StyledCard.defaultProps = {
    isActive: false,
    isSuccess: false,
    isWarning: false,
    isDisabled: false,
};
var templateObject_1$I;

var Card = function (_a) {
    var ribbon = _a.ribbon, children = _a.children, props = __rest(_a, ["ribbon", "children"]);
    return (React.createElement(StyledCard, __assign({}, props),
        ribbon,
        children));
};

var CardBody = styled.div(templateObject_1$H || (templateObject_1$H = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), space);
CardBody.defaultProps = {
    p: "24px",
};
var templateObject_1$H;

var CardHeader = styled.div(templateObject_1$G || (templateObject_1$G = __makeTemplateObject(["\n  background: ", ";\n  ", "\n"], ["\n  background: ", ";\n  ", "\n"])), function (_a) {
    var theme = _a.theme, _b = _a.variant, variant = _b === void 0 ? "default" : _b;
    return theme.card.cardHeaderBackground[variant];
}, space);
CardHeader.defaultProps = {
    p: "24px",
};
var templateObject_1$G;

var CardFooter = styled.div(templateObject_1$F || (templateObject_1$F = __makeTemplateObject(["\n  border-top: 1px solid ", ";\n  ", "\n"], ["\n  border-top: 1px solid ", ";\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.borderColor;
}, space);
CardFooter.defaultProps = {
    p: "24px",
};
var templateObject_1$F;

var StyledCardRibbon = styled.div(templateObject_1$E || (templateObject_1$E = __makeTemplateObject(["\n  background-color: ", ";\n  color: white;\n  margin: 0;\n  padding: 0;\n  padding: 8px 0;\n  position: absolute;\n  right: ", ";\n  top: 0;\n  text-align: center;\n  transform: translateX(30%) translateY(0%) rotate(45deg);\n  transform: ", ";\n  transform-origin: top left;\n  width: 96px;\n\n  &:before,\n  &:after {\n    background-color: ", ";\n    content: \"\";\n    height: 100%;\n    margin: 0 -1px; /* Removes tiny gap */\n    position: absolute;\n    top: 0;\n    width: 100%;\n  }\n\n  &:before {\n    right: 100%;\n  }\n\n  &:after {\n    left: 100%;\n  }\n\n  & > div {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    width: 96px;\n  }\n"], ["\n  background-color: ", ";\n  color: white;\n  margin: 0;\n  padding: 0;\n  padding: 8px 0;\n  position: absolute;\n  right: ", ";\n  top: 0;\n  text-align: center;\n  transform: translateX(30%) translateY(0%) rotate(45deg);\n  transform: ",
    ";\n  transform-origin: top left;\n  width: 96px;\n\n  &:before,\n  &:after {\n    background-color: ", ";\n    content: \"\";\n    height: 100%;\n    margin: 0 -1px; /* Removes tiny gap */\n    position: absolute;\n    top: 0;\n    width: 100%;\n  }\n\n  &:before {\n    right: 100%;\n  }\n\n  &:after {\n    left: 100%;\n  }\n\n  & > div {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    width: 96px;\n  }\n"])), function (_a) {
    var _b = _a.variantColor, variantColor = _b === void 0 ? "secondary" : _b, theme = _a.theme;
    return theme.colors[variantColor];
}, function (_a) {
    var ribbonPosition = _a.ribbonPosition;
    return (ribbonPosition === "right" ? 0 : "auto");
}, function (_a) {
    var ribbonPosition = _a.ribbonPosition;
    return ribbonPosition === "right"
        ? "translateX(30%) translateY(0%) rotate(45deg)"
        : "translateX(0%) translateY(200%) rotate(-45deg)";
}, function (_a) {
    var _b = _a.variantColor, variantColor = _b === void 0 ? "secondary" : _b, theme = _a.theme;
    return theme.colors[variantColor];
});
var CardRibbon = function (_a) {
    var variantColor = _a.variantColor, text = _a.text, ribbonPosition = _a.ribbonPosition;
    return (React.createElement(StyledCardRibbon, { variantColor: variantColor, ribbonPosition: ribbonPosition },
        React.createElement("div", { title: text }, text)));
};
CardRibbon.defaultProps = {
    ribbonPosition: "right",
};
var templateObject_1$E;

var scales$4 = {
    SM: "sm",
    MD: "md",
};

var getScale$3 = function (_a) {
    var scale = _a.scale;
    switch (scale) {
        case scales$4.SM:
            return "24px";
        case scales$4.MD:
        default:
            return "32px";
    }
};
var Checkbox = styled.input.attrs({ type: "checkbox" })(templateObject_1$D || (templateObject_1$D = __makeTemplateObject(["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 8px;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    content: \"\";\n    position: absolute;\n    border-bottom: 2px solid;\n    border-left: 2px solid;\n    border-color: transparent;\n    top: 30%;\n    left: 0;\n    right: 0;\n    width: 50%;\n    height: 25%;\n    margin: auto;\n    transform: rotate(-50deg);\n    transition: border-color 0.2s ease-in-out;\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      border-color: white;\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n"], ["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 8px;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    content: \"\";\n    position: absolute;\n    border-bottom: 2px solid;\n    border-left: 2px solid;\n    border-color: transparent;\n    top: 30%;\n    left: 0;\n    right: 0;\n    width: 50%;\n    height: 25%;\n    margin: auto;\n    transform: rotate(-50deg);\n    transition: border-color 0.2s ease-in-out;\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      border-color: white;\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n"])), getScale$3, getScale$3, function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.success;
});
Checkbox.defaultProps = {
    scale: scales$4.MD,
};
var templateObject_1$D;

var getLeft = function (_a) {
    var position = _a.position;
    if (position === "top-right") {
        return "100%";
    }
    return "50%";
};
var getBottom = function (_a) {
    var position = _a.position;
    if (position === "top" || position === "top-right") {
        return "100%";
    }
    return "auto";
};
var DropdownContent = styled.div(templateObject_1$C || (templateObject_1$C = __makeTemplateObject(["\n  width: max-content;\n  display: none;\n  flex-direction: column;\n  position: absolute;\n  transform: translate(-50%, 0);\n  left: ", ";\n  bottom: ", ";\n  background-color: ", ";\n  box-shadow: ", ";\n  padding: 16px;\n  max-height: 500px;\n  overflow-y: auto;\n  z-index: ", ";\n  border-radius: ", ";\n"], ["\n  width: max-content;\n  display: none;\n  flex-direction: column;\n  position: absolute;\n  transform: translate(-50%, 0);\n  left: ", ";\n  bottom: ", ";\n  background-color: ", ";\n  box-shadow: ", ";\n  padding: 16px;\n  max-height: 500px;\n  overflow-y: auto;\n  z-index: ", ";\n  border-radius: ", ";\n"])), getLeft, getBottom, function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.level1;
}, function (_a) {
    var theme = _a.theme;
    return theme.zIndices.dropdown;
}, function (_a) {
    var theme = _a.theme;
    return theme.radii.small;
});
var Container$4 = styled.div(templateObject_2$h || (templateObject_2$h = __makeTemplateObject(["\n  position: relative;\n  &:hover ", ", &:focus-within ", " {\n    display: flex;\n  }\n"], ["\n  position: relative;\n  &:hover ", ", &:focus-within ", " {\n    display: flex;\n  }\n"])), DropdownContent, DropdownContent);
var Dropdown = function (_a) {
    var target = _a.target, _b = _a.position, position = _b === void 0 ? "bottom" : _b, children = _a.children;
    return (React.createElement(Container$4, null,
        target,
        React.createElement(DropdownContent, { position: position }, children)));
};
Dropdown.defaultProps = {
    position: "bottom",
};
var templateObject_1$C, templateObject_2$h;

var bunnyFall = keyframes(templateObject_1$B || (templateObject_1$B = __makeTemplateObject(["\n  0% {\n    opacity: 1;\n    transform: translate(0, -100%) rotateZ(0deg);\n  }\n\n  75% {\n    opacity: 1;\n    transform: translate(100px, 75vh) rotateZ(270deg);\n  }\n\n  100% {\n    opacity: 0;\n    transform: translate(150px, 100vh) rotateZ(360deg);\n  }\n"], ["\n  0% {\n    opacity: 1;\n    transform: translate(0, -100%) rotateZ(0deg);\n  }\n\n  75% {\n    opacity: 1;\n    transform: translate(100px, 75vh) rotateZ(270deg);\n  }\n\n  100% {\n    opacity: 0;\n    transform: translate(150px, 100vh) rotateZ(360deg);\n  }\n"])));
var Bunny = styled.div(templateObject_2$g || (templateObject_2$g = __makeTemplateObject(["\n  display: inline-flex;\n  position: fixed;\n  top: 0;\n  left: ", ";\n  transform: translate3d(0, -100%, 0);\n  user-select: none;\n  pointer-events: none;\n  z-index: 99999;\n\n  animation-name: ", ";\n  animation-duration: ", ";\n  animation-timing-function: linear;\n  animation-iteration-count: ", ";\n  animation-play-state: running;\n\n  &:nth-child(5n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 2) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(2n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 10) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(7n + 2) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(4n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 7) {\n    animation-delay: ", ";\n  }\n"], ["\n  display: inline-flex;\n  position: fixed;\n  top: 0;\n  left: ", ";\n  transform: translate3d(0, -100%, 0);\n  user-select: none;\n  pointer-events: none;\n  z-index: 99999;\n\n  animation-name: ", ";\n  animation-duration: ", ";\n  animation-timing-function: linear;\n  animation-iteration-count: ", ";\n  animation-play-state: running;\n\n  &:nth-child(5n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 2) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(2n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 10) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(7n + 2) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(4n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 7) {\n    animation-delay: ", ";\n  }\n"])), function (_a) {
    var position = _a.position;
    return position + "vw";
}, bunnyFall, function (_a) {
    var duration = _a.duration;
    return duration + "s";
}, function (_a) {
    var iterations = _a.iterations;
    return (Number.isFinite(iterations) ? String(iterations) : "infinite");
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 1.3 + "s";
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 1.5 + "s";
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 1.7 + "s";
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 2.7 + "s";
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 3.5 + "s";
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 5.5 + "s";
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 8 + "s";
});
var FallingBunnies = function (_a) {
    var _b = _a.count, count = _b === void 0 ? 30 : _b, _c = _a.size, size = _c === void 0 ? 32 : _c, _d = _a.iterations, iterations = _d === void 0 ? Infinity : _d, _e = _a.duration, duration = _e === void 0 ? 10 : _e;
    var bunnies = __spreadArray([], Array(count)).map(function (_, index) { return (React.createElement(Bunny, { key: String(index), position: Math.random() * 100, iterations: iterations, duration: duration },
        React.createElement(Icon$16, { width: size, height: size }))); });
    return React.createElement("div", null, bunnies);
};
var templateObject_1$B, templateObject_2$g;

var tags = {
    H1: "h1",
    H2: "h2",
    H3: "h3",
    H4: "h4",
    H5: "h5",
    H6: "h6",
};
var sizes = {
    MD: "md",
    LG: "lg",
    XL: "xl",
    XXL: "xxl",
};

var _a$3;
var style = (_a$3 = {},
    _a$3[sizes.MD] = {
        fontSize: "20px",
        fontSizeLg: "20px",
    },
    _a$3[sizes.LG] = {
        fontSize: "24px",
        fontSizeLg: "24px",
    },
    _a$3[sizes.XL] = {
        fontSize: "32px",
        fontSizeLg: "40px",
    },
    _a$3[sizes.XXL] = {
        fontSize: "48px",
        fontSizeLg: "64px",
    },
    _a$3);
var Heading = styled(Text).attrs({ bold: true })(templateObject_1$A || (templateObject_1$A = __makeTemplateObject(["\n  font-size: ", ";\n  font-weight: 600;\n  line-height: 1.1;\n\n  ", " {\n    font-size: ", ";\n  }\n"], ["\n  font-size: ", ";\n  font-weight: 600;\n  line-height: 1.1;\n\n  ", " {\n    font-size: ", ";\n  }\n"])), function (_a) {
    var size = _a.size;
    return style[size || sizes.MD].fontSize;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
}, function (_a) {
    var size = _a.size;
    return style[size || sizes.MD].fontSizeLg;
});
Heading.defaultProps = {
    as: tags.H2,
};
var templateObject_1$A;

var observerOptions = {
    root: null,
    rootMargin: "200px",
    threshold: 0,
};

var Wrapper$3 = styled.div(templateObject_1$z || (templateObject_1$z = __makeTemplateObject(["\n  position: relative;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: ", "px;\n  max-width: ", "px;\n  max-height: ", "px;\n  width: 100%;\n  padding-top: ", "%;\n  ", "\n"], ["\n  position: relative;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: ", "px;\n  max-width: ", "px;\n  max-height: ", "px;\n  width: 100%;\n  padding-top: ", "%;\n  ", "\n"])), function (_a) {
    var height = _a.height, responsive = _a.responsive;
    return (responsive ? 0 : height);
}, function (_a) {
    var width = _a.width;
    return width;
}, function (_a) {
    var height = _a.height;
    return height;
}, function (_a) {
    var width = _a.width, height = _a.height, responsive = _a.responsive;
    return (responsive ? (height / width) * 100 : 0);
}, space);
var templateObject_1$z;

var BackgroundImage = function (_a) {
    var src = _a.src, otherProps = __rest(_a, ["src"]);
    var imgRef = useRef(null);
    useEffect(function () {
        var img = imgRef.current;
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                var isIntersecting = entry.isIntersecting;
                if (isIntersecting) {
                    img.style.backgroundImage = "url(\"" + src + "\")";
                    observer.disconnect();
                }
            });
        }, observerOptions);
        observer.observe(img);
        return function () {
            observer.disconnect();
        };
    }, [src]);
    return React.createElement(Wrapper$3, __assign({ ref: imgRef }, otherProps));
};

var StyledImage = styled.img(templateObject_1$y || (templateObject_1$y = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n"])));
var Placeholder = styled.div(templateObject_2$f || (templateObject_2$f = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n"])));
var Image = function (_a) {
    var src = _a.src, alt = _a.alt, otherProps = __rest(_a, ["src", "alt"]);
    var imgRef = useRef(null);
    var _b = useState(false), isLoaded = _b[0], setIsLoaded = _b[1];
    useEffect(function () {
        var img = imgRef.current;
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                var isIntersecting = entry.isIntersecting;
                if (isIntersecting) {
                    setIsLoaded(true);
                    observer.disconnect();
                }
            });
        }, observerOptions);
        observer.observe(img);
        return function () {
            observer.disconnect();
        };
    }, [src]);
    return (React.createElement(Wrapper$3, __assign({ ref: imgRef }, otherProps), isLoaded ? React.createElement(StyledImage, { src: src, alt: alt }) : React.createElement(Placeholder, null)));
};
var templateObject_1$y, templateObject_2$f;

var GridLayout$1 = styled.div(templateObject_1$x || (templateObject_1$x = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  grid-gap: 16px;\n  ", " {\n    grid-template-columns: repeat(8, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 32px;\n  }\n"], ["\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  grid-gap: 16px;\n  ", " {\n    grid-template-columns: repeat(8, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 32px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
});
var templateObject_1$x;

var GridLayout = styled(GridLayout$1)(templateObject_1$w || (templateObject_1$w = __makeTemplateObject(["\n  & > div {\n    grid-column: span 6;\n    ", " {\n      grid-column: span 4;\n    }\n  }\n"], ["\n  & > div {\n    grid-column: span 6;\n    ", " {\n      grid-column: span 4;\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var templateObject_1$w;

var StyledLink$1 = styled(Text)(templateObject_1$v || (templateObject_1$v = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  width: fit-content;\n  &:hover {\n    text-decoration: underline;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  width: fit-content;\n  &:hover {\n    text-decoration: underline;\n  }\n"])));
var Link = function (_a) {
    var external = _a.external, props = __rest(_a, ["external"]);
    var internalProps = external ? getExternalLinkProps() : {};
    return React.createElement(StyledLink$1, __assign({ as: "a", bold: true }, internalProps, props));
};
Link.defaultProps = {
    color: "primary",
};
var templateObject_1$v;

var LinkExternal = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return (React.createElement(Link, __assign({ external: true }, props),
        children,
        React.createElement(Icon$Y, { color: "primary", ml: "4px" })));
};

var NotificationDotRoot = styled.span(templateObject_1$u || (templateObject_1$u = __makeTemplateObject(["\n  display: inline-flex;\n  position: relative;\n"], ["\n  display: inline-flex;\n  position: relative;\n"])));
var Dot = styled.span(templateObject_2$e || (templateObject_2$e = __makeTemplateObject(["\n  display: ", ";\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 10px;\n  height: 10px;\n  pointer-events: none;\n  border: 2px solid ", ";\n  border-radius: 50%;\n  background-color: ", ";\n"], ["\n  display: ", ";\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 10px;\n  height: 10px;\n  pointer-events: none;\n  border: 2px solid ", ";\n  border-radius: 50%;\n  background-color: ", ";\n"])), function (_a) {
    var show = _a.show;
    return (show ? "inline-flex" : "none");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.invertedContrast;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.failure;
});
var NotificationDot = function (_a) {
    var _b = _a.show, show = _b === void 0 ? false : _b, children = _a.children, props = __rest(_a, ["show", "children"]);
    return (React.createElement(NotificationDotRoot, null,
        Children.map(children, function (child) { return cloneElement(child, props); }),
        React.createElement(Dot, { show: show })));
};
var templateObject_1$u, templateObject_2$e;

var scales$3 = {
    SM: "sm",
    MD: "md",
};

var scaleKeyValues$1 = {
    sm: {
        pancakeSize: "16px",
        travelDistance: "16px",
        toggleHeight: "20px",
        toggleWidth: "36px",
        pancakeThickness: "1px",
        pancakeTwoOffset: "0px",
        pancakeThreeOffset: "-3px",
        butterTop: "3px",
        butterLeft: "10px",
        butterWidth: "6px",
        butterHeight: "5px",
        butterThickness: "0.5px",
        butterRadius: "2px",
        butterSmearOneTop: "10px",
        butterSmearOneLeft: "2.5px",
        butterSmearTwoTop: "11px",
        butterSmearTwoRight: "2.5px", // these values adjust the position of it
    },
    md: {
        pancakeSize: "32px",
        travelDistance: "34px",
        toggleHeight: "40px",
        toggleWidth: "72px",
        pancakeThickness: "2px",
        pancakeTwoOffset: "-3px",
        pancakeThreeOffset: "-8px",
        butterTop: "3px",
        butterLeft: "16px",
        butterWidth: "12px",
        butterHeight: "11px",
        butterThickness: "1px",
        butterRadius: "4px",
        butterSmearOneTop: "20px",
        butterSmearOneLeft: "5px",
        butterSmearTwoTop: "22px",
        butterSmearTwoRight: "5px",
    },
};
var getScale$2 = function (property) { return function (_a) {
    var _b = _a.scale, scale = _b === void 0 ? scales$3.MD : _b;
    return scaleKeyValues$1[scale][property];
}; };
var PancakeStack = styled.div(templateObject_1$t || (templateObject_1$t = __makeTemplateObject(["\n  position: relative;\n  display: inline-block;\n\n  &:label:before {\n    content: none;\n  }\n\n  .pancakes {\n    transition: 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  }\n\n  .pancake {\n    background: #e27c31;\n    border-radius: 50%;\n    width: ", ";\n    height: ", ";\n    position: absolute;\n    transition: 0.4s ease;\n    top: 2px;\n    left: 4px;\n    box-shadow: 0 ", " 0 ", " #fbbe7c;\n  }\n\n  .pancake:nth-child(1) {\n    background: ", ";\n    box-shadow: 0 ", " 0 ", "\n      ", ";\n  }\n\n  .pancake:nth-child(2) {\n    left: 0;\n    top: ", ";\n    transform: scale(0);\n    transition: 0.2s ease 0.2s;\n  }\n\n  .pancake:nth-child(3) {\n    top: ", ";\n    transform: scale(0);\n    transition: 0.2s ease 0.2s;\n  }\n\n  .pancake:nth-child(3):before,\n  .pancake:nth-child(3):after {\n    content: \"\";\n    position: absolute;\n    background: #ef8927;\n    border-radius: 20px;\n    width: 50%;\n    height: 20%;\n  }\n\n  .pancake:nth-child(3):before {\n    top: ", ";\n    left: ", ";\n  }\n\n  .pancake:nth-child(3):after {\n    top: ", ";\n    right: ", ";\n  }\n\n  .butter {\n    width: ", ";\n    height: ", ";\n    background: #fbdb60;\n    top: ", ";\n    left: ", ";\n    position: absolute;\n    border-radius: ", ";\n    box-shadow: 0 ", " 0 ", " #d67823;\n    transform: scale(0);\n    transition: 0.2s ease;\n  }\n"], ["\n  position: relative;\n  display: inline-block;\n\n  &:label:before {\n    content: none;\n  }\n\n  .pancakes {\n    transition: 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  }\n\n  .pancake {\n    background: #e27c31;\n    border-radius: 50%;\n    width: ", ";\n    height: ", ";\n    position: absolute;\n    transition: 0.4s ease;\n    top: 2px;\n    left: 4px;\n    box-shadow: 0 ", " 0 ", " #fbbe7c;\n  }\n\n  .pancake:nth-child(1) {\n    background: ", ";\n    box-shadow: 0 ", " 0 ", "\n      ", ";\n  }\n\n  .pancake:nth-child(2) {\n    left: 0;\n    top: ", ";\n    transform: scale(0);\n    transition: 0.2s ease 0.2s;\n  }\n\n  .pancake:nth-child(3) {\n    top: ", ";\n    transform: scale(0);\n    transition: 0.2s ease 0.2s;\n  }\n\n  .pancake:nth-child(3):before,\n  .pancake:nth-child(3):after {\n    content: \"\";\n    position: absolute;\n    background: #ef8927;\n    border-radius: 20px;\n    width: 50%;\n    height: 20%;\n  }\n\n  .pancake:nth-child(3):before {\n    top: ", ";\n    left: ", ";\n  }\n\n  .pancake:nth-child(3):after {\n    top: ", ";\n    right: ", ";\n  }\n\n  .butter {\n    width: ", ";\n    height: ", ";\n    background: #fbdb60;\n    top: ", ";\n    left: ", ";\n    position: absolute;\n    border-radius: ", ";\n    box-shadow: 0 ", " 0 ", " #d67823;\n    transform: scale(0);\n    transition: 0.2s ease;\n  }\n"])), getScale$2("pancakeSize"), getScale$2("pancakeSize"), getScale$2("pancakeThickness"), getScale$2("pancakeThickness"), function (_a) {
    var theme = _a.theme;
    return theme.pancakeToggle.handleBackground;
}, getScale$2("pancakeThickness"), getScale$2("pancakeThickness"), function (_a) {
    var theme = _a.theme;
    return theme.pancakeToggle.handleShadow;
}, getScale$2("pancakeTwoOffset"), getScale$2("pancakeThreeOffset"), getScale$2("butterSmearOneTop"), getScale$2("butterSmearOneLeft"), getScale$2("butterSmearTwoTop"), getScale$2("butterSmearTwoRight"), getScale$2("butterWidth"), getScale$2("butterHeight"), getScale$2("butterTop"), getScale$2("butterLeft"), getScale$2("butterRadius"), getScale$2("butterThickness"), getScale$2("butterThickness"));
var PancakeInput = styled.input(templateObject_2$d || (templateObject_2$d = __makeTemplateObject(["\n  height: 40px;\n  left: 0;\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  width: 40px;\n\n  &:focus + label {\n    box-shadow: ", ";\n  }\n\n  &:checked + label .pancakes {\n    transform: translateX(", ");\n  }\n\n  &:checked + label .pancake:nth-child(1) {\n    background: #e27c31;\n    box-shadow: 0 ", " 0 ", " #fbbe7c;\n    transition-delay: 0.2s;\n  }\n\n  &:checked + label .pancake:nth-child(2) {\n    transform: scale(1);\n    transition-delay: 0.2s;\n  }\n\n  &:checked + label .pancake:nth-child(3) {\n    transform: scale(1);\n    transition-delay: 0.4s;\n  }\n\n  &:checked + label .butter {\n    transform: scale(1);\n    transition-delay: 0.6s;\n  }\n"], ["\n  height: 40px;\n  left: 0;\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  width: 40px;\n\n  &:focus + label {\n    box-shadow: ", ";\n  }\n\n  &:checked + label .pancakes {\n    transform: translateX(", ");\n  }\n\n  &:checked + label .pancake:nth-child(1) {\n    background: #e27c31;\n    box-shadow: 0 ", " 0 ", " #fbbe7c;\n    transition-delay: 0.2s;\n  }\n\n  &:checked + label .pancake:nth-child(2) {\n    transform: scale(1);\n    transition-delay: 0.2s;\n  }\n\n  &:checked + label .pancake:nth-child(3) {\n    transform: scale(1);\n    transition-delay: 0.4s;\n  }\n\n  &:checked + label .butter {\n    transform: scale(1);\n    transition-delay: 0.6s;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, getScale$2("travelDistance"), getScale$2("pancakeThickness"), getScale$2("pancakeThickness"));
var PancakeLabel = styled.label(templateObject_3$9 || (templateObject_3$9 = __makeTemplateObject(["\n  width: ", ";\n  height: ", ";\n  background: ", ";\n  box-shadow: ", ";\n  display: inline-block;\n  border-radius: 50px;\n  position: relative;\n  transition: all 0.3s ease;\n  transform-origin: 20% center;\n  cursor: pointer;\n"], ["\n  width: ", ";\n  height: ", ";\n  background: ", ";\n  box-shadow: ", ";\n  display: inline-block;\n  border-radius: 50px;\n  position: relative;\n  transition: all 0.3s ease;\n  transform-origin: 20% center;\n  cursor: pointer;\n"])), getScale$2("toggleWidth"), getScale$2("toggleHeight"), function (_a) {
    var theme = _a.theme, checked = _a.checked;
    return theme.colors[checked ? "primary" : "input"];
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
});
var templateObject_1$t, templateObject_2$d, templateObject_3$9;

var PancakeToggle = function (_a) {
    var checked = _a.checked, _b = _a.scale, scale = _b === void 0 ? scales$3.MD : _b, props = __rest(_a, ["checked", "scale"]);
    return (React.createElement(PancakeStack, { scale: scale },
        React.createElement(PancakeInput, __assign({ id: props.id || "pancake-toggle", scale: scale, type: "checkbox", checked: checked }, props)),
        React.createElement(PancakeLabel, { scale: scale, checked: checked, htmlFor: props.id || "pancake-toggle" },
            React.createElement("div", { className: "pancakes" },
                React.createElement("div", { className: "pancake" })))));
};
PancakeToggle.defaultProps = {
    scale: scales$3.MD,
};

var variants$1 = {
    ROUND: "round",
    FLAT: "flat",
};

var _a$2;
var styleVariants$1 = (_a$2 = {},
    _a$2[variants$1.ROUND] = {
        borderRadius: "32px",
    },
    _a$2[variants$1.FLAT] = {
        borderRadius: 0,
    },
    _a$2);

var Bar = styled.div(templateObject_1$s || (templateObject_1$s = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: ", ";\n  height: 16px;\n  transition: width 200ms ease;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: ", ";\n  height: 16px;\n  transition: width 200ms ease;\n"])), function (props) { return (props.primary ? props.theme.colors.secondary : props.theme.colors.secondary + "80"); });
Bar.defaultProps = {
    primary: false,
};
var StyledProgress = styled.div(templateObject_2$c || (templateObject_2$c = __makeTemplateObject(["\n  position: relative;\n  background-color: ", ";\n  box-shadow: ", ";\n  height: 16px;\n  overflow: hidden;\n\n  ", " {\n    border-top-left-radius: ", ";\n    border-bottom-left-radius: ", ";\n  }\n\n  ", "\n  ", "\n"], ["\n  position: relative;\n  background-color: ", ";\n  box-shadow: ", ";\n  height: 16px;\n  overflow: hidden;\n\n  ", " {\n    border-top-left-radius: ", ";\n    border-bottom-left-radius: ", ";\n  }\n\n  ",
    "\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
}, Bar, function (_a) {
    var variant = _a.variant;
    return (variant === variants$1.FLAT ? "0" : "32px");
}, function (_a) {
    var variant = _a.variant;
    return (variant === variants$1.FLAT ? "0" : "32px");
}, variant$1({
    variants: styleVariants$1,
}), space);
var templateObject_1$s, templateObject_2$c;

var ProgressBunnyWrapper = styled.div(templateObject_1$r || (templateObject_1$r = __makeTemplateObject(["\n  display: flex;\n  z-index: 2;\n  top: -65%;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  transition: left 200ms ease-out;\n"], ["\n  display: flex;\n  z-index: 2;\n  top: -65%;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  transition: left 200ms ease-out;\n"])));
var templateObject_1$r;

var stepGuard = function (step) {
    if (step < 0) {
        return 0;
    }
    if (step > 100) {
        return 100;
    }
    return step;
};
var Progress = function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? variants$1.ROUND : _b, _c = _a.primaryStep, primaryStep = _c === void 0 ? 0 : _c, _d = _a.secondaryStep, secondaryStep = _d === void 0 ? null : _d, _e = _a.showProgressBunny, showProgressBunny = _e === void 0 ? false : _e;
    return (React.createElement(StyledProgress, { variant: variant },
        showProgressBunny && (React.createElement(ProgressBunnyWrapper, { style: { left: stepGuard(primaryStep) + "%" } },
            React.createElement(Icon$Q, null))),
        React.createElement(Bar, { primary: true, style: { width: stepGuard(primaryStep) + "%" } }),
        secondaryStep ? React.createElement(Bar, { style: { width: stepGuard(secondaryStep) + "%" } }) : null));
};

var scales$2 = {
    SM: "sm",
    MD: "md",
};

var getScale$1 = function (_a) {
    var scale = _a.scale;
    switch (scale) {
        case scales$2.SM:
            return "24px";
        case scales$2.MD:
        default:
            return "32px";
    }
};
var getCheckedScale = function (_a) {
    var scale = _a.scale;
    switch (scale) {
        case scales$2.SM:
            return "12px";
        case scales$2.MD:
        default:
            return "20px";
    }
};
var Radio = styled.input.attrs({ type: "radio" })(templateObject_1$q || (templateObject_1$q = __makeTemplateObject(["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 50%;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    border-radius: 50%;\n    content: \"\";\n    height: ", ";\n    left: 6px;\n    position: absolute;\n    top: 6px;\n    width: ", ";\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      background-color: ", ";\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n  ", "\n"], ["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 50%;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    border-radius: 50%;\n    content: \"\";\n    height: ", ";\n    left: 6px;\n    position: absolute;\n    top: 6px;\n    width: ", ";\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      background-color: ", ";\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n  ", "\n"])), getScale$1, getScale$1, function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
}, getCheckedScale, getCheckedScale, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.success;
}, function (_a) {
    var theme = _a.theme;
    return theme.radio.handleBackground;
}, space);
Radio.defaultProps = {
    scale: scales$2.MD,
    m: 0,
};
var templateObject_1$q;

var bunnyHeadMain = "data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2232%22%20viewBox%3D%220%200%2028%2032%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20x%3D%221%22%20y%3D%2219%22%20width%3D%2217%22%20height%3D%2211%22%20fill%3D%22%231FC7D4%22%2F%3E%3Cpath%20d%3D%22M9.507%2024.706C8.14635%2026.0666%209.73795%2028.2313%2011.7555%2030.2489C13.7731%2032.2665%2015.9378%2033.8581%2017.2984%2032.4974C18.6591%2031.1368%2017.9685%2028.0711%2015.9509%2026.0535C13.9333%2024.0359%2010.8676%2023.3453%209.507%2024.706Z%22%20fill%3D%22%231FC7D4%22%2F%3E%3Cpath%20d%3D%22M15.507%2022.706C14.1463%2024.0666%2015.7379%2026.2313%2017.7555%2028.2489C19.7731%2030.2665%2021.9378%2031.8581%2023.2984%2030.4974C24.6591%2029.1368%2023.9685%2026.0711%2021.9509%2024.0535C19.9333%2022.0359%2016.8676%2021.3453%2015.507%2022.706Z%22%20fill%3D%22%231FC7D4%22%2F%3E%3Cg%20filter%3D%22url%28%23filter0_d%29%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M14.146%206.75159C14.2105%207.10896%2014.2703%207.48131%2014.3281%207.86164C14.2189%207.85865%2014.1095%207.85714%2014%207.85714C13.3803%207.85714%2012.7648%207.90539%2012.159%207.99779C11.879%207.41458%2011.5547%206.82246%2011.1872%206.23145C8.69897%202.22947%206.53826%201.98679%204.67882%202.98366C2.81938%203.98052%202.85628%206.67644%205.26696%209.40538C5.58076%209.76061%205.90097%2010.1398%206.2247%2010.5286C3.69013%2012.4659%202%2015.2644%202%2018.2695C2%2023.8292%207.78518%2025%2014%2025C20.2148%2025%2026%2023.8292%2026%2018.2695C26%2014.8658%2023.8318%2011.7272%2020.7243%209.80476C20.9022%208.86044%2021%207.83019%2021%206.75159C21%202.19612%2019.2549%201%2017.1022%201C14.9495%201%2013.5261%203.31847%2014.146%206.75159Z%22%20fill%3D%22url%28%23paint0_linear_bunnyhead_main%29%22%2F%3E%3C%2Fg%3E%3Cg%20transform%3D%22translate%282%29%22%3E%3Cpath%20d%3D%22M12.7284%2016.4446C12.796%2017.3149%2012.4446%2019.0556%2010.498%2019.0556%22%20stroke%3D%22%23452A7A%22%20stroke-linecap%3D%22round%22%2F%3E%3Cpath%20d%3D%22M12.7457%2016.4446C12.6781%2017.3149%2013.0296%2019.0556%2014.9761%2019.0556%22%20stroke%3D%22%23452A7A%22%20stroke-linecap%3D%22round%22%2F%3E%3Cpath%20d%3D%22M9%2014.5C9%2015.6046%208.55228%2016%208%2016C7.44772%2016%207%2015.6046%207%2014.5C7%2013.3954%207.44772%2013%208%2013C8.55228%2013%209%2013.3954%209%2014.5Z%22%20fill%3D%22%23452A7A%22%2F%3E%3Cpath%20d%3D%22M18%2014.5C18%2015.6046%2017.5523%2016%2017%2016C16.4477%2016%2016%2015.6046%2016%2014.5C16%2013.3954%2016.4477%2013%2017%2013C17.5523%2013%2018%2013.3954%2018%2014.5Z%22%20fill%3D%22%23452A7A%22%2F%3E%3C%2Fg%3E%3Cdefs%3E%3Cfilter%20id%3D%22filter0_d%22%3E%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22%2F%3E%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%2F%3E%3CfeOffset%20dy%3D%221%22%2F%3E%3CfeGaussianBlur%20stdDeviation%3D%221%22%2F%3E%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.5%200%22%2F%3E%3CfeBlend%20mode%3D%22normal%22%20in2%3D%22BackgroundImageFix%22%20result%3D%22effect1_dropShadow%22%2F%3E%3CfeBlend%20mode%3D%22normal%22%20in%3D%22SourceGraphic%22%20in2%3D%22effect1_dropShadow%22%20result%3D%22shape%22%2F%3E%3C%2Ffilter%3E%3ClinearGradient%20id%3D%22paint0_linear_bunnyhead_main%22%20x1%3D%2214%22%20y1%3D%221%22%20x2%3D%2214%22%20y2%3D%2225%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20stop-color%3D%22%2353DEE9%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%231FC7D4%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3C%2Fsvg%3E";

var bunnyHeadMax = "data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2232%22%20viewBox%3D%220%200%2028%2032%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20x%3D%221%22%20y%3D%2219%22%20width%3D%2217%22%20height%3D%2211%22%20fill%3D%22%231FC7D4%22%2F%3E%3Cpath%20d%3D%22M9.507%2024.706C8.14635%2026.0666%209.73795%2028.2313%2011.7555%2030.2489C13.7731%2032.2665%2015.9378%2033.8581%2017.2984%2032.4974C18.6591%2031.1368%2017.9685%2028.0711%2015.9509%2026.0535C13.9333%2024.0359%2010.8676%2023.3453%209.507%2024.706Z%22%20fill%3D%22%231FC7D4%22%2F%3E%3Cpath%20d%3D%22M15.507%2022.706C14.1463%2024.0666%2015.7379%2026.2313%2017.7555%2028.2489C19.7731%2030.2665%2021.9378%2031.8581%2023.2984%2030.4974C24.6591%2029.1368%2023.9685%2026.0711%2021.9509%2024.0535C19.9333%2022.0359%2016.8676%2021.3453%2015.507%2022.706Z%22%20fill%3D%22%231FC7D4%22%2F%3E%3Cg%20filter%3D%22url%28%23filter0_d%29%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M14.146%206.75159C14.2105%207.10896%2014.2703%207.48131%2014.3281%207.86164C14.2189%207.85865%2014.1095%207.85714%2014%207.85714C13.3803%207.85714%2012.7648%207.90539%2012.159%207.99779C11.879%207.41458%2011.5547%206.82246%2011.1872%206.23145C8.69897%202.22947%206.53826%201.98679%204.67882%202.98366C2.81938%203.98052%202.85628%206.67644%205.26696%209.40538C5.58076%209.76061%205.90097%2010.1398%206.2247%2010.5286C3.69013%2012.4659%202%2015.2644%202%2018.2695C2%2023.8292%207.78518%2025%2014%2025C20.2148%2025%2026%2023.8292%2026%2018.2695C26%2014.8658%2023.8318%2011.7272%2020.7243%209.80476C20.9022%208.86044%2021%207.83019%2021%206.75159C21%202.19612%2019.2549%201%2017.1022%201C14.9495%201%2013.5261%203.31847%2014.146%206.75159Z%22%20fill%3D%22url%28%23paint0_linear_bunnyhead_max%29%22%2F%3E%3C%2Fg%3E%3Cpath%20d%3D%22M11.5047%2016.0634C10.9435%2014.4456%208.79685%2014.4456%208.08131%2016.0635%22%20stroke%3D%22%23452A7A%22%20stroke-linecap%3D%22round%22%2F%3E%3Cpath%20d%3D%22M20.8894%2016.0634C20.3283%2014.4456%2018.1816%2014.4456%2017.4661%2016.0635%22%20stroke%3D%22%23452A7A%22%20stroke-linecap%3D%22round%22%2F%3E%3Cpath%20d%3D%22M14.7284%2017.4446C14.796%2018.3149%2014.4446%2020.0556%2012.498%2020.0556%22%20stroke%3D%22%23452A7A%22%20stroke-linecap%3D%22round%22%2F%3E%3Cpath%20d%3D%22M14.7457%2017.4446C14.6781%2018.3149%2015.0296%2020.0556%2016.9761%2020.0556%22%20stroke%3D%22%23452A7A%22%20stroke-linecap%3D%22round%22%2F%3E%3Cpath%20d%3D%22M13.4505%2020.0787C13.4505%2021.5097%2015.955%2021.5097%2015.955%2020.0787%22%20stroke%3D%22%23452A7A%22%20stroke-linecap%3D%22round%22%2F%3E%3Cdefs%3E%3Cfilter%20id%3D%22filter0_d%22%20x%3D%220%22%20y%3D%220%22%20width%3D%2228%22%20height%3D%2228%22%20filterUnits%3D%22userSpaceOnUse%22%20color-interpolation-filters%3D%22sRGB%22%3E%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22%2F%3E%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%2F%3E%3CfeOffset%20dy%3D%221%22%2F%3E%3CfeGaussianBlur%20stdDeviation%3D%221%22%2F%3E%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.5%200%22%2F%3E%3CfeBlend%20mode%3D%22normal%22%20in2%3D%22BackgroundImageFix%22%20result%3D%22effect1_dropShadow%22%2F%3E%3CfeBlend%20mode%3D%22normal%22%20in%3D%22SourceGraphic%22%20in2%3D%22effect1_dropShadow%22%20result%3D%22shape%22%2F%3E%3C%2Ffilter%3E%3ClinearGradient%20id%3D%22paint0_linear_bunnyhead_max%22%20x1%3D%2214%22%20y1%3D%221%22%20x2%3D%2214%22%20y2%3D%2225%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20stop-color%3D%22%2353DEE9%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%231FC7D4%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3C%2Fsvg%3E";

var bunnyButt = "data:image/svg+xml,%3Csvg%20width%3D%2215%22%20height%3D%2232%22%20viewBox%3D%220%200%2015%2032%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M9.58803%2020.8649C7.72935%2021.3629%208.02539%2024.0334%208.76388%2026.7895C9.50238%2029.5456%2010.5812%2032.0062%2012.4399%2031.5082C14.2986%2031.0102%2015.2334%2028.0099%2014.4949%2025.2538C13.7564%2022.4978%2011.4467%2020.3669%209.58803%2020.8649Z%22%20fill%3D%22%230098A1%22%2F%3E%3Cpath%20d%3D%22M1%2024.4516C1%2020.8885%203.88849%2018%207.45161%2018H15V28H4.54839C2.58867%2028%201%2026.4113%201%2024.4516Z%22%20fill%3D%22%231FC7D4%22%2F%3E%3Cpath%20d%3D%22M6.11115%2017.2246C6.79693%2018.4124%205.77784%2019.3343%204.52793%2020.0559C3.27802%2020.7776%201.97011%2021.1992%201.28433%2020.0114C0.598546%2018.8236%201.1635%2017.1151%202.41341%2016.3935C3.66332%2015.6718%205.42537%2016.0368%206.11115%2017.2246Z%22%20fill%3D%22%2353DEE9%22%2F%3E%3Cpath%20d%3D%22M1.64665%2023.6601C0.285995%2025.0207%201.87759%2027.1854%203.89519%2029.203C5.91279%2031.2206%208.07743%2032.8122%209.43808%2031.4515C10.7987%2030.0909%2010.1082%2027.0252%208.09058%2025.0076C6.07298%2022.99%203.0073%2022.2994%201.64665%2023.6601Z%22%20fill%3D%22%231FC7D4%22%2F%3E%3C%2Fsvg%3E";

var getCursorStyle = function (_a) {
    var _b = _a.disabled, disabled = _b === void 0 ? false : _b;
    return disabled ? "not-allowed" : "cursor";
};
var getBaseThumbStyles = function (_a) {
    var isMax = _a.isMax, disabled = _a.disabled;
    return "\n  -webkit-appearance: none;\n  background-image: url(" + (isMax ? bunnyHeadMax : bunnyHeadMain) + ");\n  cursor: " + getCursorStyle + ";\n  width: 24px;\n  height: 32px;\n  filter: " + (disabled ? "grayscale(100%)" : "none") + ";\n  transform: translate(-2px, -2px);\n  transition: 200ms transform;\n\n  &:hover {\n    transform: " + (disabled ? "scale(1) translate(-2px, -2px)" : "scale(1.1) translate(-3px, -3px)") + ";\n  }\n";
};
var SliderLabelContainer = styled.div(templateObject_1$p || (templateObject_1$p = __makeTemplateObject(["\n  bottom: 0;\n  position: absolute;\n  left: 14px;\n  width: calc(100% - 30px);\n"], ["\n  bottom: 0;\n  position: absolute;\n  left: 14px;\n  width: calc(100% - 30px);\n"])));
var SliderLabel = styled(Text)(templateObject_2$b || (templateObject_2$b = __makeTemplateObject(["\n  bottom: 0;\n  font-size: 12px;\n  left: ", ";\n  position: absolute;\n  text-align: center;\n  min-width: 24px; // Slider thumb size\n"], ["\n  bottom: 0;\n  font-size: 12px;\n  left: ", ";\n  position: absolute;\n  text-align: center;\n  min-width: 24px; // Slider thumb size\n"])), function (_a) {
    var progress = _a.progress;
    return progress;
});
var BunnyButt = styled.div(templateObject_3$8 || (templateObject_3$8 = __makeTemplateObject(["\n  background: url(", ") no-repeat;\n  height: 32px;\n  filter: ", ";\n  position: absolute;\n  width: 15px;\n"], ["\n  background: url(", ") no-repeat;\n  height: 32px;\n  filter: ", ";\n  position: absolute;\n  width: 15px;\n"])), bunnyButt, function (_a) {
    var disabled = _a.disabled;
    return (disabled ? "grayscale(100%)" : "none");
});
var BunnySlider = styled.div(templateObject_4$6 || (templateObject_4$6 = __makeTemplateObject(["\n  position: absolute;\n  left: 14px;\n  width: calc(100% - 14px);\n"], ["\n  position: absolute;\n  left: 14px;\n  width: calc(100% - 14px);\n"])));
var StyledInput = styled.input(templateObject_5$4 || (templateObject_5$4 = __makeTemplateObject(["\n  cursor: ", ";\n  height: 32px;\n  position: relative;\n\n  ::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    ", "\n  }\n\n  ::-moz-range-thumb {\n    ", "\n\n    background-color: transparent;\n    border: 0;\n  }\n\n  ::-ms-thumb {\n    ", "\n  }\n"], ["\n  cursor: ", ";\n  height: 32px;\n  position: relative;\n\n  ::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    ", "\n  }\n\n  ::-moz-range-thumb {\n    ", "\n\n    background-color: transparent;\n    border: 0;\n  }\n\n  ::-ms-thumb {\n    ", "\n  }\n"])), getCursorStyle, getBaseThumbStyles, getBaseThumbStyles, getBaseThumbStyles);
var BarBackground = styled.div(templateObject_6$3 || (templateObject_6$3 = __makeTemplateObject(["\n  background-color: ", ";\n  height: 2px;\n  position: absolute;\n  top: 18px;\n  width: 100%;\n"], ["\n  background-color: ", ";\n  height: 2px;\n  position: absolute;\n  top: 18px;\n  width: 100%;\n"])), function (_a) {
    var theme = _a.theme, disabled = _a.disabled;
    return theme.colors[disabled ? "textDisabled" : "inputSecondary"];
});
var BarProgress = styled.div(templateObject_7$1 || (templateObject_7$1 = __makeTemplateObject(["\n  background-color: ", ";\n  filter: ", ";\n  height: 10px;\n  position: absolute;\n  top: 18px;\n"], ["\n  background-color: ", ";\n  filter: ", ";\n  height: 10px;\n  position: absolute;\n  top: 18px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.primary;
}, function (_a) {
    var disabled = _a.disabled;
    return (disabled ? "grayscale(100%)" : "none");
});
var templateObject_1$p, templateObject_2$b, templateObject_3$8, templateObject_4$6, templateObject_5$4, templateObject_6$3, templateObject_7$1;

var Slider = function (_a) {
    var name = _a.name, min = _a.min, max = _a.max, value = _a.value, onValueChanged = _a.onValueChanged, valueLabel = _a.valueLabel, _b = _a.step, step = _b === void 0 ? "any" : _b, _c = _a.disabled, disabled = _c === void 0 ? false : _c, props = __rest(_a, ["name", "min", "max", "value", "onValueChanged", "valueLabel", "step", "disabled"]);
    var handleChange = function (_a) {
        var target = _a.target;
        onValueChanged(parseFloat(target.value));
    };
    var progressPercentage = (value / max) * 100;
    var isMax = value === max;
    var progressWidth = isMax ? "calc(100% - 16px)" : progressPercentage + "%";
    var labelProgress = isMax ? "calc(100% - 12px)" : progressPercentage + "%";
    var displayValueLabel = isMax ? "MAX" : valueLabel;
    return (React.createElement(Box, __assign({ position: "relative", height: "48px" }, props),
        React.createElement(BunnyButt, { disabled: disabled }),
        React.createElement(BunnySlider, null,
            React.createElement(BarBackground, { disabled: disabled }),
            React.createElement(BarProgress, { style: { width: progressWidth }, disabled: disabled }),
            React.createElement(StyledInput, { name: name, type: "range", min: min, max: max, value: value, step: step, onChange: handleChange, isMax: isMax, disabled: disabled })),
        valueLabel && (React.createElement(SliderLabelContainer, null,
            React.createElement(SliderLabel, { progress: labelProgress }, displayValueLabel)))));
};

var animation = {
    WAVES: "waves",
    PULSE: "pulse",
};
var variant = {
    RECT: "rect",
    CIRCLE: "circle",
};

var waves = keyframes(templateObject_1$o || (templateObject_1$o = __makeTemplateObject(["\n   from {\n        left: -150px;\n    }\n    to   {\n        left: 100%;\n    }\n"], ["\n   from {\n        left: -150px;\n    }\n    to   {\n        left: 100%;\n    }\n"])));
var pulse = keyframes(templateObject_2$a || (templateObject_2$a = __makeTemplateObject(["\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.4;\n  }\n  100% {\n    opacity: 1;\n  }\n"], ["\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.4;\n  }\n  100% {\n    opacity: 1;\n  }\n"])));
var Root = styled.div(templateObject_3$7 || (templateObject_3$7 = __makeTemplateObject(["\n  min-height: 20px;\n  display: block;\n  background-color: ", ";\n  border-radius: ", ";\n\n  ", "\n  ", "\n"], ["\n  min-height: 20px;\n  display: block;\n  background-color: ", ";\n  border-radius: ", ";\n\n  ", "\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.backgroundDisabled;
}, function (_a) {
    var variant$1 = _a.variant, theme = _a.theme;
    return (variant$1 === variant.CIRCLE ? theme.radii.circle : theme.radii.small);
}, layout, space);
var Pulse = styled(Root)(templateObject_4$5 || (templateObject_4$5 = __makeTemplateObject(["\n  animation: ", " 2s infinite ease-out;\n  transform: translate3d(0, 0, 0);\n"], ["\n  animation: ", " 2s infinite ease-out;\n  transform: translate3d(0, 0, 0);\n"])), pulse);
var Waves = styled(Root)(templateObject_5$3 || (templateObject_5$3 = __makeTemplateObject(["\n  position: relative;\n  overflow: hidden;\n  transform: translate3d(0, 0, 0);\n  &:before {\n    content: \"\";\n    position: absolute;\n    background-image: linear-gradient(90deg, transparent, rgba(243, 243, 243, 0.5), transparent);\n    top: 0;\n    left: -150px;\n    height: 100%;\n    width: 150px;\n    animation: ", " 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n  }\n"], ["\n  position: relative;\n  overflow: hidden;\n  transform: translate3d(0, 0, 0);\n  &:before {\n    content: \"\";\n    position: absolute;\n    background-image: linear-gradient(90deg, transparent, rgba(243, 243, 243, 0.5), transparent);\n    top: 0;\n    left: -150px;\n    height: 100%;\n    width: 150px;\n    animation: ", " 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n  }\n"])), waves);
var Skeleton = function (_a) {
    var _b = _a.variant, variant$1 = _b === void 0 ? variant.RECT : _b, _c = _a.animation, animation$1 = _c === void 0 ? animation.PULSE : _c, props = __rest(_a, ["variant", "animation"]);
    if (animation$1 === animation.WAVES) {
        return React.createElement(Waves, __assign({ variant: variant$1 }, props));
    }
    return React.createElement(Pulse, __assign({ variant: variant$1 }, props));
};
var templateObject_1$o, templateObject_2$a, templateObject_3$7, templateObject_4$5, templateObject_5$3;

var Icon$z = function (props) {
    return (React.createElement(Svg, __assign({ version: "1.0", viewBox: "0 0 256 256", preserveAspectRatio: "xMidYMid meet" }, props),
        React.createElement("g", { transform: "translate(0.000000,363.000000) scale(0.100000,-0.100000)", fill: "#ce492e", stroke: "none" },
            React.createElement("path", { d: "M0 1815 l0 -1815 9950 0 9950 0 0 1815 0 1815 -9950 0 -9950 0 0\r\n-1815z m2240 315 l0 -1330 -240 0 -240 0 0 1330 0 1330 240 0 240 0 0 -1330z\r\nm8996 1310 c113 -28 207 -79 296 -157 77 -68 218 -229 217 -248 0 -5 -47 -45\r\n-104 -87 l-103 -77 -41 52 c-67 88 -185 195 -242 222 -203 94 -425 34 -517\r\n-140 -24 -44 -27 -61 -27 -145 0 -86 3 -101 31 -160 52 -110 108 -166 326\r\n-330 112 -85 248 -190 303 -235 289 -237 419 -453 419 -700 1 -192 -61 -339\r\n-200 -480 -241 -242 -628 -289 -929 -113 -98 58 -227 190 -314 321 -39 60 -71\r\n112 -71 117 0 10 202 130 218 130 7 0 12 -4 12 -9 0 -19 120 -188 172 -242\r\n107 -111 227 -169 354 -169 295 0 520 236 474 499 -30 170 -169 332 -520 604\r\n-320 248 -403 329 -469 456 -59 114 -75 179 -75 301 0 82 5 122 24 184 94 310\r\n434 490 766 406z m-5856 -365 l0 -355 145 0 145 0 -2 -207 -3 -207 -115 1\r\nc-63 1 -127 -1 -142 -4 l-28 -5 0 -749 0 -749 -240 0 -240 0 0 750 c0 593 -3\r\n750 -12 751 -7 1 -51 3 -98 4 -47 1 -97 3 -112 4 l-28 1 0 205 0 205 125 0\r\n125 0 0 355 0 355 240 0 240 0 0 -355z m1088 -2 l2 -353 140 0 140 0 0 -204 0\r\n-204 -30 -7 c-16 -4 -78 -5 -137 -3 l-108 3 -3 -752 -2 -753 -245 0 -245 0 0\r\n749 c0 706 -1 750 -17 754 -10 2 -64 3 -120 3 l-103 -1 0 208 0 207 120 0 120\r\n0 0 355 0 355 243 -2 242 -3 3 -352z m-5040 85 l2 -238 -400 0 -400 0 0 -235\r\n0 -235 398 -2 397 -3 3 -237 2 -238 -400 0 -400 0 0 -585 0 -585 -245 0 -245\r\n0 0 1300 0 1300 643 -2 642 -3 3 -237z m6668 -399 c306 -42 572 -228 711 -495\r\n88 -171 123 -320 123 -525 l0 -119 -771 0 -772 0 7 -42 c10 -62 66 -175 115\r\n-230 57 -64 140 -117 230 -146 96 -31 260 -34 361 -8 80 22 180 73 244 126 26\r\n22 51 40 55 40 7 0 391 -179 400 -186 10 -8 -118 -151 -182 -204 -192 -159\r\n-438 -230 -741 -217 -483 21 -843 320 -938 777 -27 127 -21 384 10 502 56 207\r\n160 375 317 510 130 111 280 183 443 212 94 17 284 20 388 5z m2072 -10 c34\r\n-11 62 -27 62 -34 0 -7 -17 -59 -38 -116 -22 -57 -54 -146 -72 -197 -19 -54\r\n-38 -91 -44 -89 -86 33 -126 40 -169 28 -89 -25 -159 -124 -193 -271 -15 -65\r\n-18 -153 -21 -673 l-4 -597 -242 2 -242 3 -2 958 -3 957 210 0 210 0 0 -116 0\r\n-116 51 77 c31 46 72 92 104 116 113 85 265 111 393 68z m6305 -13 c184 -55\r\n341 -163 465 -321 l31 -40 1 173 0 172 125 0 125 0 0 -960 0 -960 -125 0 -125\r\n0 0 160 0 160 -74 -73 c-214 -214 -456 -309 -750 -294 -242 13 -432 96 -610\r\n268 -211 202 -316 449 -316 743 0 299 105 537 330 748 131 124 278 202 450\r\n239 129 28 353 21 473 -15z m2582 0 c179 -54 332 -149 455 -283 120 -131 193\r\n-264 238 -433 21 -80 25 -118 26 -245 1 -198 -25 -316 -105 -477 -121 -247\r\n-342 -432 -614 -514 -82 -25 -105 -28 -255 -28 -183 0 -245 10 -376 65 -108\r\n45 -216 119 -316 217 l-88 86 0 -512 0 -512 -125 0 -125 0 0 1310 0 1310 125\r\n0 125 0 0 -169 0 -170 113 112 c117 117 173 156 304 212 124 53 195 65 373 61\r\n133 -3 168 -7 245 -30z m-15892 -598 c4 -490 7 -594 20 -652 32 -133 86 -208\r\n186 -255 49 -23 69 -26 156 -26 81 0 109 4 147 22 110 51 180 154 198 295 5\r\n40 10 326 10 636 l0 562 241 0 241 0 -5 -597 c-4 -635 -8 -700 -56 -853 -38\r\n-119 -127 -255 -222 -337 -73 -64 -178 -119 -289 -152 -131 -38 -391 -39 -535\r\n-2 -255 66 -433 235 -520 495 -46 137 -55 271 -62 884 l-6 562 246 0 245 0 5\r\n-582z m9424 -98 c155 -371 286 -683 290 -693 6 -12 50 80 165 340 491 1122\r\n450 1034 477 1031 21 -3 46 -54 238 -483 241 -542 228 -513 325 -732 40 -90\r\n75 -163 78 -163 3 0 138 311 300 690 l295 690 127 0 128 0 -14 -32 c-7 -18\r\n-82 -193 -166 -388 -698 -1617 -643 -1495 -670 -1495 -23 0 -44 44 -330 682\r\n-194 435 -308 678 -313 670 -5 -6 -142 -313 -306 -682 -293 -661 -298 -670\r\n-328 -673 -26 -3 -31 1 -45 35 -15 37 -273 648 -617 1462 -94 223 -171 408\r\n-171 413 0 5 57 7 127 6 l127 -3 283 -675z" }),
            React.createElement("path", { d: "M7802 2345 c-125 -28 -232 -92 -296 -175 -36 -47 -95 -148 -96 -162\r\n0 -5 234 -8 521 -8 l520 0 -7 23 c-40 129 -174 257 -323 307 -83 28 -233 35\r\n-319 15z" }),
            React.createElement("path", { d: "M16042 2510 c-328 -86 -553 -365 -569 -706 -7 -131 6 -217 48 -326\r\n149 -385 559 -586 940 -458 261 87 437 275 499 532 25 105 27 287 4 391 -63\r\n281 -288 510 -561 571 -100 22 -267 20 -361 -4z" }),
            React.createElement("path", { d: "M18595 2516 c-299 -68 -527 -317 -576 -628 -14 -90 -6 -271 16 -353\r\n56 -209 199 -379 399 -475 125 -60 191 -74 341 -74 113 1 140 4 210 27 223 75\r\n393 232 483 448 173 416 -44 898 -465 1037 -65 21 -101 26 -213 28 -89 2 -155\r\n-1 -195 -10z" }))));
};

var Icon$y = function (props) {
    return (React.createElement(Svg, __assign({ version: "1.0", viewBox: "0 0 128 128", preserveAspectRatio: "xMidYMid meet" }, props, { color: "" }),
        React.createElement("g", { transform: "translate(0.000000,499.000000) scale(0.100000,-0.100000)", fill: "#ce492e", stroke: "none" },
            React.createElement("path", { d: "M97 4959 c-90 -47 -121 -172 -64 -257 36 -55 90 -82 164 -82 70 0\r\n115 21 157 73 28 35 31 46 31 107 0 61 -3 72 -31 107 -17 21 -46 46 -65 55\r\n-47 25 -143 23 -192 -3z" }),
            React.createElement("path", { d: "M662 4964 c-128 -64 -132 -250 -7 -321 l40 -23 550 0 c352 0 564 -4\r\n588 -11 47 -13 106 -63 123 -106 28 -66 14 -145 -34 -196 -58 -62 -56 -61\r\n-432 -67 l-345 -6 -80 -32 c-194 -77 -330 -203 -415 -387 -183 -390 7 -860\r\n408 -1012 134 -50 173 -53 748 -53 576 0 575 0 632 -53 59 -55 80 -161 46\r\n-233 -26 -54 -85 -100 -143 -113 -36 -8 -328 -11 -940 -11 -977 0 -931 3\r\n-1053 -62 -106 -56 -204 -171 -251 -293 -22 -60 -22 -61 -25 -785 -2 -498 1\r\n-741 8 -777 18 -85 75 -186 143 -256 107 -108 237 -161 392 -160 252 1 467\r\n178 520 428 12 55 15 160 15 495 0 487 3 512 76 659 78 158 235 295 399 350\r\n112 36 198 41 793 41 472 0 587 3 632 15 245 65 430 301 430 550 0 142 -65\r\n299 -164 399 -68 69 -126 107 -225 145 l-66 25 -505 6 -505 5 -58 27 c-80 38\r\n-158 115 -193 191 -26 55 -29 73 -29 162 0 88 3 106 27 155 30 62 90 128 147\r\n164 88 56 85 56 850 56 784 0 787 1 918 65 96 47 185 136 236 234 l37 73 0\r\n178 0 177 -36 72 c-62 124 -184 227 -331 279 -44 15 -163 17 -1468 19 -1294 3\r\n-1423 1 -1453 -13z m2331 -2248 c101 -43 139 -172 78 -267 -83 -131 -291 -109\r\n-347 36 -31 84 5 183 83 224 45 24 138 28 186 7z" }))));
};

var Icon$x = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 128 128" }, props),
        React.createElement("svg", { version: "1.1", id: "Layer_1", xmlns: "http://www.w3.org/2000/svg", x: "0px", y: "0px", width: "122.315px", height: "122.88px", viewBox: "0 0 122.315 122.88", enableBackground: "new 0 0 122.315 122.88", xmlSpace: "preserve" },
            React.createElement("g", null,
                React.createElement("path", { fill: "#f7ad19", fillRule: "evenodd", clipRule: "evenodd", d: "M94.754,14.534c8.844,0,16.014,7.17,16.014,16.012 c0,8.844-7.17,16.015-16.014,16.015c-8.843,0-16.013-7.17-16.013-16.015C78.741,21.704,85.911,14.534,94.754,14.534L94.754,14.534z M109.265,52.121c-7.205,0-13.049,5.844-13.049,13.048c0,7.207,5.844,13.049,13.049,13.051c7.207,0,13.051-5.844,13.051-13.051 C122.315,57.965,116.472,52.121,109.265,52.121L109.265,52.121z M94.135,89.903c-5.032,0-9.114,4.082-9.114,9.113 c0,5.032,4.082,9.114,9.114,9.114c5.031,0,9.113-4.082,9.113-9.114C103.248,93.985,99.166,89.903,94.135,89.903L94.135,89.903z M59.275,104.65c-5.032,0-9.114,4.081-9.114,9.113c0,5.034,4.082,9.116,9.114,9.116s9.113-4.082,9.113-9.116 C68.389,108.731,64.308,104.65,59.275,104.65L59.275,104.65z M23.652,90.86c-4.717,0-8.54,3.823-8.54,8.54 c0,4.715,3.823,8.54,8.54,8.54c4.714,0,8.538-3.825,8.538-8.54C32.19,94.684,28.366,90.86,23.652,90.86L23.652,90.86z M9.096,54.872C4.072,54.872,0,58.944,0,63.968c0,5.021,4.072,9.093,9.096,9.093c5.021,0,9.093-4.072,9.093-9.093 C18.189,58.944,14.116,54.872,9.096,54.872L9.096,54.872z M23.652,17.026c-6.354,0-11.508,5.155-11.508,11.509 s5.154,11.506,11.508,11.506s11.506-5.152,11.506-11.506S30.006,17.026,23.652,17.026L23.652,17.026z M59.341,0 c-7.651,0-13.858,6.205-13.858,13.855c0,7.651,6.207,13.856,13.858,13.856s13.856-6.205,13.856-13.856 C73.197,6.205,66.992,0,59.341,0L59.341,0z" })))));
};

var rotate = keyframes(templateObject_1$n || (templateObject_1$n = __makeTemplateObject(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"], ["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"])));
var float = keyframes(templateObject_2$9 || (templateObject_2$9 = __makeTemplateObject(["\n\t0% {\n\t\ttransform: translatey(0px);\n\t}\n\t50% {\n\t\ttransform: translatey(10px);\n\t}\n\t100% {\n\t\ttransform: translatey(0px);\n\t}\n"], ["\n\t0% {\n\t\ttransform: translatey(0px);\n\t}\n\t50% {\n\t\ttransform: translatey(10px);\n\t}\n\t100% {\n\t\ttransform: translatey(0px);\n\t}\n"])));
var Container$3 = styled.div(templateObject_3$6 || (templateObject_3$6 = __makeTemplateObject(["\n  position: relative;\n"], ["\n  position: relative;\n"])));
styled(Icon$y)(templateObject_4$4 || (templateObject_4$4 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  animation: ", " 2s linear infinite;\n  transform: translate3d(0, 0, 0);\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  animation: ", " 2s linear infinite;\n  transform: translate3d(0, 0, 0);\n"])), rotate);
var SpinningDots = styled(Icon$x)(templateObject_5$2 || (templateObject_5$2 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  animation: ", " 2s linear infinite;\n  transform: translate3d(0, 0, 0);\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  animation: ", " 2s linear infinite;\n  transform: translate3d(0, 0, 0);\n"])), rotate);
styled(Icon$z)(templateObject_6$2 || (templateObject_6$2 = __makeTemplateObject(["\n  animation: ", " 6s ease-in-out infinite;\n  transform: translate3d(0, 0, 0);\n"], ["\n  animation: ", " 6s ease-in-out infinite;\n  transform: translate3d(0, 0, 0);\n"])), float);
var Spinner = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 128 : _b;
    return (React.createElement(Container$3, null,
        React.createElement(SpinningDots, { width: size * 0.5 + "px" })));
};
var templateObject_1$n, templateObject_2$9, templateObject_3$6, templateObject_4$4, templateObject_5$2, templateObject_6$2;

var StepperWrapper = styled.div(templateObject_1$m || (templateObject_1$m = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  width: fit-content;\n"], ["\n  display: flex;\n  flex-direction: column;\n  width: fit-content;\n"])));
var Stepper = function (_a) {
    var children = _a.children;
    var numberOfSteps = React.Children.count(children);
    return (React.createElement(StepperWrapper, null, React.Children.map(children, function (child) {
        if (React.isValidElement(child)) {
            return React.cloneElement(child, { numberOfSteps: numberOfSteps });
        }
        return child;
    })));
};
var templateObject_1$m;

var getStepNumberFontColor = function (_a) {
    var theme = _a.theme, status = _a.status;
    if (status === "past") {
        return theme.colors.success;
    }
    if (status === "current") {
        return theme.colors.invertedContrast;
    }
    return theme.colors.textDisabled;
};
var Connector = styled.div(templateObject_1$l || (templateObject_1$l = __makeTemplateObject(["\n  position: absolute;\n  width: 4px;\n  height: 100%;\n  top: 50%;\n  left: calc(50% - 2px);\n  background-color: ", ";\n"], ["\n  position: absolute;\n  width: 4px;\n  height: 100%;\n  top: 50%;\n  left: calc(50% - 2px);\n  background-color: ", ";\n"])), function (_a) {
    var theme = _a.theme, status = _a.status;
    return theme.colors[status === "past" ? "success" : "textDisabled"];
});
var ChildrenWrapper = styled(Box)(templateObject_2$8 || (templateObject_2$8 = __makeTemplateObject(["\n  ", " {\n    visibility: ", ";\n  }\n"], ["\n  ", " {\n    visibility: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
}, function (_a) {
    var isVisible = _a.isVisible;
    return (isVisible ? "visible" : "hidden");
});
var ChildrenLeftWrapper = styled(ChildrenWrapper)(templateObject_3$5 || (templateObject_3$5 = __makeTemplateObject(["\n  display: none;\n  ", " {\n    display: block;\n    margin-right: 16px;\n  }\n"], ["\n  display: none;\n  ", " {\n    display: block;\n    margin-right: 16px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var ChildrenRightWrapper = styled(ChildrenWrapper)(templateObject_4$3 || (templateObject_4$3 = __makeTemplateObject(["\n  margin-left: 8px;\n  ", " {\n    margin-left: 16px;\n  }\n"], ["\n  margin-left: 8px;\n  ", " {\n    margin-left: 16px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var Wrapper$2 = styled.div(templateObject_5$1 || (templateObject_5$1 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  align-items: center;\n"], ["\n  position: relative;\n  display: flex;\n  align-items: center;\n"])));
var StepNumber = styled.div(templateObject_6$1 || (templateObject_6$1 = __makeTemplateObject(["\n  box-shadow: 0px 1px 4px rgba(25, 19, 38, 0.15);\n  background-color: ", ";\n  border: 2px solid ", ";\n  border-radius: ", ";\n  color: ", ";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: 600;\n  font-size: 32px;\n  width: 48px;\n  height: 48px;\n  z-index: 1;\n  ", " {\n    font-size: 40px;\n    width: 80px;\n    height: 80px;\n  }\n"], ["\n  box-shadow: 0px 1px 4px rgba(25, 19, 38, 0.15);\n  background-color: ", ";\n  border: 2px solid ", ";\n  border-radius: ", ";\n  color: ", ";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: 600;\n  font-size: 32px;\n  width: 48px;\n  height: 48px;\n  z-index: 1;\n  ", " {\n    font-size: 40px;\n    width: 80px;\n    height: 80px;\n  }\n"])), function (_a) {
    var theme = _a.theme, status = _a.status;
    return theme.colors[status === "current" ? "secondary" : "invertedContrast"];
}, function (_a) {
    var theme = _a.theme, status = _a.status;
    return (status === "past" ? theme.colors.success : "transparent");
}, function (_a) {
    var theme = _a.theme;
    return theme.radii.circle;
}, getStepNumberFontColor, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
/**
 * ChildrenLeftWrapper and ChildrenRightWrapper are used on the non mobile version, to force the alternate layout.
 * One of the child is hidden based on the step number.
 */
var Step = function (_a) {
    var index = _a.index, status = _a.status, _b = _a.numberOfSteps, numberOfSteps = _b === void 0 ? 0 : _b, children = _a.children;
    var isIndexPair = index % 2 === 0;
    return (React.createElement(Flex, { mb: index < numberOfSteps - 1 ? "16px" : 0 },
        React.createElement(ChildrenLeftWrapper, { isVisible: !isIndexPair }, children),
        React.createElement(Wrapper$2, null,
            React.createElement(StepNumber, { status: status }, index + 1),
            index < numberOfSteps - 1 && React.createElement(Connector, { status: status })),
        React.createElement(ChildrenRightWrapper, { isVisible: isIndexPair }, children)));
};
var templateObject_1$l, templateObject_2$8, templateObject_3$5, templateObject_4$3, templateObject_5$1, templateObject_6$1;

var byTextAscending = function (getTextProperty) { return function (objectA, objectB) {
    var upperA = getTextProperty(objectA).toUpperCase();
    var upperB = getTextProperty(objectB).toUpperCase();
    if (upperA < upperB) {
        return -1;
    }
    if (upperA > upperB) {
        return 1;
    }
    return 0;
}; };
var byTextDescending = function (getTextProperty) { return function (objectA, objectB) {
    var upperA = getTextProperty(objectA).toUpperCase();
    var upperB = getTextProperty(objectB).toUpperCase();
    if (upperA > upperB) {
        return -1;
    }
    if (upperA < upperB) {
        return 1;
    }
    return 0;
}; };

var sortByColumn = function (data, sortColumn, columns) {
    var isAscending = null;
    var sortedRows = __spreadArray([], data);
    columns.forEach(function (column) {
        // if the row was found
        if (sortColumn === column.name) {
            isAscending = column.sorted.asc;
            if (column.sort) {
                sortedRows = isAscending ? data.sort(column.sort) : data.sort(column.sort).reverse();
                // default to sort by string
            }
            else {
                sortedRows = isAscending
                    ? data.sort(byTextAscending(function (object) { return object.original[sortColumn]; }))
                    : data.sort(byTextDescending(function (object) { return object.original[sortColumn]; }));
            }
        }
    });
    return sortedRows;
};
var getPaginatedData = function (rows, perPage, page) {
    var start = (page - 1) * perPage;
    var end = start + perPage;
    return rows.slice(start, end);
};
var getColumnsByName = function (columns) {
    var columnsByName = {};
    columns.forEach(function (column) {
        var col = {
            name: column.name,
            label: column.label,
        };
        if (column.render) {
            col.render = column.render;
        }
        col.hidden = column.hidden;
        columnsByName[column.name] = col;
    });
    return columnsByName;
};
var createReducer = function () { return function (state, action) {
    var rows = [];
    var nextPage = 0;
    var prevPage = 0;
    var isAscending = null;
    var sortedRows = [];
    var columnCopy = [];
    var filteredRows = [];
    var selectedRowsById = {};
    var stateCopy = __assign({}, state);
    var rowIds = {};
    switch (action.type) {
        case "SET_ROWS":
            rows = __spreadArray([], action.data);
            // preserve sorting if a sort is already enabled when data changes
            if (state.sortColumn) {
                rows = sortByColumn(action.data, state.sortColumn, state.columns);
            }
            if (state.paginationEnabled === true) {
                rows = getPaginatedData(rows, state.pagination.perPage, state.pagination.page);
            }
            if (state.paginationEnabled === true) {
                rows = getPaginatedData(rows, state.pagination.perPage, state.pagination.page);
            }
            columnCopy = state.columns.map(function (column) {
                if (state.sortColumn === column.name) {
                    return __assign(__assign({}, column), { sorted: {
                            on: true,
                            asc: column.sorted.asc,
                        } });
                }
                return column;
            });
            return __assign(__assign({}, state), { rows: rows, originalRows: action.data, columns: columnCopy });
        case "NEXT_PAGE":
            nextPage = state.pagination.page + 1;
            return __assign(__assign({}, state), { rows: getPaginatedData(state.originalRows, state.pagination.perPage, nextPage), pagination: __assign(__assign({}, state.pagination), { page: nextPage, canNext: nextPage * state.pagination.perPage < state.originalRows.length, canPrev: nextPage !== 1 }) });
        case "PREV_PAGE":
            prevPage = state.pagination.page === 1 ? 1 : state.pagination.page - 1;
            return __assign(__assign({}, state), { rows: getPaginatedData(state.originalRows, state.pagination.perPage, prevPage), pagination: __assign(__assign({}, state.pagination), { page: prevPage, canNext: prevPage * state.pagination.perPage < state.originalRows.length, canPrev: prevPage !== 1 }) });
        case "TOGGLE_SORT":
            if (!(action.columnName in state.columnsByName)) {
                throw new Error("Invalid column, " + action.columnName + " not found");
            }
            // loop through all columns and set the sort parameter to off unless
            // it's the specified column (only one column at a time for )
            columnCopy = state.columns.map(function (column) {
                // if the row was found
                if (action.columnName === column.name) {
                    if (action.isAscOverride !== undefined) {
                        // force the sort order
                        isAscending = action.isAscOverride;
                    }
                    else {
                        // if it's undefined, start by setting to ascending, otherwise toggle
                        isAscending = column.sorted.asc === undefined ? true : !column.sorted.asc;
                    }
                    if (column.sort) {
                        sortedRows = isAscending ? state.rows.sort(column.sort) : state.rows.sort(column.sort).reverse();
                        // default to sort by string
                    }
                    else {
                        sortedRows = isAscending
                            ? state.rows.sort(byTextAscending(function (object) { return object.original[action.columnName]; }))
                            : state.rows.sort(byTextDescending(function (object) { return object.original[action.columnName]; }));
                    }
                    return __assign(__assign({}, column), { sorted: {
                            on: true,
                            asc: isAscending,
                        } });
                }
                // set sorting to false for all other columns
                return __assign(__assign({}, column), { sorted: {
                        on: false,
                        asc: false,
                    } });
            });
            return __assign(__assign({}, state), { columns: columnCopy, rows: sortedRows, sortColumn: action.columnName, columnsByName: getColumnsByName(columnCopy) });
        case "GLOBAL_FILTER":
            filteredRows = action.filter(state.originalRows);
            selectedRowsById = {};
            state.selectedRows.forEach(function (row) {
                var _a;
                selectedRowsById[row.id] = (_a = row.selected) !== null && _a !== void 0 ? _a : false;
            });
            return __assign(__assign({}, state), { rows: filteredRows.map(function (row) {
                    return selectedRowsById[row.id] ? __assign(__assign({}, row), { selected: selectedRowsById[row.id] }) : __assign({}, row);
                }), filterOn: true });
        case "SELECT_ROW":
            stateCopy = __assign({}, state);
            stateCopy.rows = stateCopy.rows.map(function (row) {
                var newRow = __assign({}, row);
                if (newRow.id === action.rowId) {
                    newRow.selected = !newRow.selected;
                }
                return newRow;
            });
            stateCopy.originalRows = stateCopy.originalRows.map(function (row) {
                var newRow = __assign({}, row);
                if (newRow.id === action.rowId) {
                    newRow.selected = !newRow.selected;
                }
                return newRow;
            });
            stateCopy.selectedRows = stateCopy.originalRows.filter(function (row) { return row.selected === true; });
            stateCopy.toggleAllState =
                stateCopy.selectedRows.length === stateCopy.rows.length
                    ? (stateCopy.toggleAllState = true)
                    : (stateCopy.toggleAllState = false);
            return stateCopy;
        case "SEARCH_STRING":
            stateCopy = __assign({}, state);
            stateCopy.rows = stateCopy.originalRows.filter(function (row) {
                return (row.cells.filter(function (cell) {
                    if (cell.value.includes(action.searchString)) {
                        return true;
                    }
                    return false;
                }).length > 0);
            });
            return stateCopy;
        case "TOGGLE_ALL":
            if (state.selectedRows.length < state.rows.length) {
                stateCopy.rows = stateCopy.rows.map(function (row) {
                    rowIds[row.id] = true;
                    return __assign(__assign({}, row), { selected: true });
                });
                stateCopy.toggleAllState = true;
            }
            else {
                stateCopy.rows = stateCopy.rows.map(function (row) {
                    rowIds[row.id] = false;
                    return __assign(__assign({}, row), { selected: false });
                });
                stateCopy.toggleAllState = false;
            }
            stateCopy.originalRows = stateCopy.originalRows.map(function (row) {
                return row.id in rowIds ? __assign(__assign({}, row), { selected: rowIds[row.id] }) : __assign({}, row);
            });
            stateCopy.selectedRows = stateCopy.originalRows.filter(function (row) { return row.selected; });
            return stateCopy;
        default:
            throw new Error("Invalid reducer action");
    }
}; };
var sortDataInOrder = function (data, columns) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return data.map(function (row) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var newRow = {};
        columns.forEach(function (column) {
            if (!(column.name in row)) {
                throw new Error("Invalid row data, " + column.name + " not found");
            }
            newRow[column.name] = row[column.name];
        });
        return newRow;
    });
};
var makeRender = function (
// eslint-disable-next-line
value, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
render, row) {
    return render ? function () { return render({ row: row, value: value }); } : function () { return value; };
};
var makeHeaderRender = function (label, render) {
    return render ? function () { return render({ label: label }); } : function () { return label; };
};
var useTable = function (columns, data, options) {
    var columnsWithSorting = useMemo(function () {
        return columns.map(function (column) {
            return __assign(__assign({}, column), { label: column.label ? column.label : column.name, hidden: column.hidden ? column.hidden : false, sort: column.sort, sorted: {
                    on: false,
                    asc: false,
                } });
        });
    }, [columns]);
    var columnsByName = useMemo(function () { return getColumnsByName(columnsWithSorting); }, [columnsWithSorting]);
    var tableData = useMemo(function () {
        var sortedData = sortDataInOrder(data, columnsWithSorting);
        var newData = sortedData.map(function (row, idx) {
            return {
                id: idx,
                selected: false,
                hidden: false,
                original: row,
                cells: Object.entries(row)
                    .map(function (_a) {
                    var column = _a[0], value = _a[1];
                    return {
                        hidden: columnsByName[column].hidden,
                        field: column,
                        value: value,
                        render: makeRender(value, columnsByName[column].render, row),
                    };
                })
                    .filter(function (cell) { return !cell.hidden; }),
            };
        });
        return newData;
    }, [data, columnsWithSorting, columnsByName]);
    var reducer = createReducer();
    var _a = useReducer(reducer, {
        columns: columnsWithSorting,
        columnsByName: columnsByName,
        originalRows: tableData,
        rows: tableData,
        selectedRows: [],
        toggleAllState: false,
        filterOn: !!(options === null || options === void 0 ? void 0 : options.filter),
        sortColumn: options === null || options === void 0 ? void 0 : options.sortColumn,
        paginationEnabled: !!(options === null || options === void 0 ? void 0 : options.pagination),
        pagination: {
            page: 1,
            perPage: 10,
            canNext: true,
            canPrev: false,
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            nextPage: noop,
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            prevPage: noop,
        },
    }), state = _a[0], dispatch = _a[1];
    state.pagination.nextPage = useCallback(function () {
        dispatch({ type: "NEXT_PAGE" });
    }, [dispatch]);
    state.pagination.prevPage = useCallback(function () { return dispatch({ type: "PREV_PAGE" }); }, [dispatch]);
    useEffect(function () {
        dispatch({ type: "SET_ROWS", data: tableData });
    }, [tableData]);
    var headers = useMemo(function () {
        return __spreadArray([], state.columns.map(function (column) {
            var label = column.label ? column.label : column.name;
            return __assign(__assign({}, column), { render: makeHeaderRender(label, column.headerRender) });
        }));
    }, [state.columns]);
    useEffect(function () {
        if (options && options.filter) {
            dispatch({ type: "GLOBAL_FILTER", filter: options.filter });
        }
    });
    return {
        headers: headers.filter(function (column) { return !column.hidden; }),
        rows: state.rows,
        originalRows: state.originalRows,
        selectedRows: state.selectedRows,
        dispatch: dispatch,
        selectRow: function (rowId) { return dispatch({ type: "SELECT_ROW", rowId: rowId }); },
        toggleAll: function () { return dispatch({ type: "TOGGLE_ALL" }); },
        toggleSort: function (columnName, isAscOverride) {
            return dispatch({ type: "TOGGLE_SORT", columnName: columnName, isAscOverride: isAscOverride });
        },
        setSearchString: function (searchString) { return dispatch({ type: "SEARCH_STRING", searchString: searchString }); },
        pagination: state.pagination,
        toggleAllState: state.toggleAllState,
    };
};

var Wrapper$1 = styled(Flex)(templateObject_1$k || (templateObject_1$k = __makeTemplateObject(["\n  border-bottom: 2px solid ", ";\n  overflow-x: scroll;\n\n  ::-webkit-scrollbar {\n    display: none;\n  }\n  -ms-overflow-style: none; /* IE and Edge */\n  scrollbar-width: none; /* Firefox */\n"], ["\n  border-bottom: 2px solid ", ";\n  overflow-x: scroll;\n\n  ::-webkit-scrollbar {\n    display: none;\n  }\n  -ms-overflow-style: none; /* IE and Edge */\n  scrollbar-width: none; /* Firefox */\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
});
var Inner$1 = styled(Flex)(templateObject_2$7 || (templateObject_2$7 = __makeTemplateObject(["\n  justify-content: space-between;\n  flex-grow: 1;\n\n  & > button + button {\n    margin-left: 4px;\n  }\n\n  ", " {\n    flex-grow: 0;\n  }\n"], ["\n  justify-content: space-between;\n  flex-grow: 1;\n\n  & > button + button {\n    margin-left: 4px;\n  }\n\n  ", " {\n    flex-grow: 0;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var ButtonMenu = function (_a) {
    var _b = _a.activeIndex, activeIndex = _b === void 0 ? 0 : _b, onItemClick = _a.onItemClick, children = _a.children;
    return (React.createElement(Wrapper$1, { p: ["0 4px", "0 16px"] },
        React.createElement(Inner$1, null, Children.map(children, function (child, index) {
            return cloneElement(child, {
                isActive: activeIndex === index,
                onClick: onItemClick ? function () { return onItemClick(index); } : undefined,
            });
        }))));
};
var templateObject_1$k, templateObject_2$7;

var StyledTab = styled.button(templateObject_1$j || (templateObject_1$j = __makeTemplateObject(["\n  display: inline-flex;\n  justify-content: center;\n  cursor: pointer;\n  border: 0;\n  outline: 0;\n  flex-grow: 1;\n  padding: 8px;\n  border-radius: 16px 16px 0 0;\n  color: ", ";\n  background-color: ", ";\n\n  ", " {\n    flex-grow: 0;\n    padding: 8px 12px;\n  }\n"], ["\n  display: inline-flex;\n  justify-content: center;\n  cursor: pointer;\n  border: 0;\n  outline: 0;\n  flex-grow: 1;\n  padding: 8px;\n  border-radius: 16px 16px 0 0;\n  color: ", ";\n  background-color: ", ";\n\n  ", " {\n    flex-grow: 0;\n    padding: 8px 12px;\n  }\n"])), function (_a) {
    var theme = _a.theme, color = _a.color;
    return theme.colors[color];
}, function (_a) {
    var theme = _a.theme, bgColor = _a.bgColor;
    return theme.colors[bgColor];
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var templateObject_1$j;

var Tab = function (_a) {
    var _b = _a.isActive, isActive = _b === void 0 ? false : _b, onClick = _a.onClick, children = _a.children;
    return (React.createElement(StyledTab, { onClick: onClick, bgColor: isActive ? "textSubtle" : "input", color: isActive ? "card" : "textSubtle" },
        React.createElement(Text, { fontWeight: 600, color: isActive ? "card" : "textSubtle" }, children)));
};

var variants = {
    PRIMARY: "primary",
    SECONDARY: "secondary",
    SUCCESS: "success",
    TEXTDISABLED: "textDisabled",
    TEXTSUBTLE: "textSubtle",
    BINANCE: "binance",
    FAILURE: "failure",
};
var scales$1 = {
    MD: "md",
    SM: "sm",
};

var _a$1, _b;
var scaleVariants = (_a$1 = {},
    _a$1[scales$1.MD] = {
        height: "28px",
        padding: "0 8px",
        fontSize: "14px",
    },
    _a$1[scales$1.SM] = {
        height: "24px",
        padding: "0 4px",
        fontSize: "12px",
    },
    _a$1);
var styleVariants = (_b = {},
    _b[variants.PRIMARY] = {
        backgroundColor: "primary",
    },
    _b[variants.SECONDARY] = {
        backgroundColor: "secondary",
    },
    _b[variants.SUCCESS] = {
        backgroundColor: "success",
    },
    _b[variants.TEXTDISABLED] = {
        backgroundColor: "textDisabled",
    },
    _b[variants.TEXTSUBTLE] = {
        backgroundColor: "textSubtle",
    },
    _b[variants.BINANCE] = {
        backgroundColor: "binance",
    },
    _b[variants.FAILURE] = {
        backgroundColor: "failure",
    },
    _b);

var getOutlineStyles = function (_a) {
    var outline = _a.outline, theme = _a.theme, _b = _a.variant, variantKey = _b === void 0 ? variants.PRIMARY : _b;
    if (outline) {
        var themeColorKey = styleVariants[variantKey].backgroundColor;
        var color = theme.colors[themeColorKey];
        return "\n      color: " + color + ";\n      background: transparent;\n      border: 2px solid " + color + ";\n    ";
    }
    return "";
};
var StyledTag = styled.div(templateObject_1$i || (templateObject_1$i = __makeTemplateObject(["\n  align-items: center;\n  border-radius: 16px;\n  color: #FFFFFF;\n  display: inline-flex;\n  font-weight: 400;\n  white-space: nowrap;\n\n  & > svg {\n    fill: currentColor;\n  }\n\n  ", "\n  ", "\n  ", "\n\n  ", "\n"], ["\n  align-items: center;\n  border-radius: 16px;\n  color: #FFFFFF;\n  display: inline-flex;\n  font-weight: 400;\n  white-space: nowrap;\n\n  & > svg {\n    fill: currentColor;\n  }\n\n  ",
    "\n  ",
    "\n  ", "\n\n  ", "\n"])), variant$1({
    prop: "scale",
    variants: scaleVariants,
}), variant$1({
    variants: styleVariants,
}), space, getOutlineStyles);
var templateObject_1$i;

var Tag = function (_a) {
    var startIcon = _a.startIcon, endIcon = _a.endIcon, children = _a.children, props = __rest(_a, ["startIcon", "endIcon", "children"]);
    return (React.createElement(StyledTag, __assign({}, props),
        React.isValidElement(startIcon) &&
            React.cloneElement(startIcon, {
                mr: "0.5em",
            }),
        children,
        React.isValidElement(endIcon) &&
            React.cloneElement(endIcon, {
                ml: "0.5em",
            })));
};
Tag.defaultProps = {
    variant: "primary",
    scale: scales$1.MD,
    outline: false,
};

var scaleKeyValues = {
    sm: {
        handleHeight: "16px",
        handleWidth: "16px",
        handleLeft: "2px",
        handleTop: "2px",
        checkedLeft: "calc(100% - 18px)",
        toggleHeight: "20px",
        toggleWidth: "36px",
    },
    md: {
        handleHeight: "32px",
        handleWidth: "32px",
        handleLeft: "4px",
        handleTop: "4px",
        checkedLeft: "calc(100% - 36px)",
        toggleHeight: "40px",
        toggleWidth: "72px",
    },
};
var getScale = function (property) { return function (_a) {
    var _b = _a.scale, scale = _b === void 0 ? scales$4.MD : _b;
    return scaleKeyValues[scale][property];
}; };
var Handle = styled.div(templateObject_1$h || (templateObject_1$h = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 50%;\n  cursor: pointer;\n  height: ", ";\n  left: ", ";\n  position: absolute;\n  top: ", ";\n  transition: left 200ms ease-in;\n  width: ", ";\n  z-index: 1;\n"], ["\n  background-color: ", ";\n  border-radius: 50%;\n  cursor: pointer;\n  height: ", ";\n  left: ", ";\n  position: absolute;\n  top: ", ";\n  transition: left 200ms ease-in;\n  width: ", ";\n  z-index: 1;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.toggle.handleBackground;
}, getScale("handleHeight"), getScale("handleLeft"), getScale("handleTop"), getScale("handleWidth"));
var Input = styled.input(templateObject_2$6 || (templateObject_2$6 = __makeTemplateObject(["\n  cursor: pointer;\n  opacity: 0;\n  height: 100%;\n  position: absolute;\n  width: 100%;\n  z-index: 3;\n\n  &:checked + ", " {\n    left: ", ";\n  }\n\n  &:focus + ", " {\n    box-shadow: ", ";\n  }\n\n  &:hover + ", ":not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n"], ["\n  cursor: pointer;\n  opacity: 0;\n  height: 100%;\n  position: absolute;\n  width: 100%;\n  z-index: 3;\n\n  &:checked + ", " {\n    left: ", ";\n  }\n\n  &:focus + ", " {\n    box-shadow: ", ";\n  }\n\n  &:hover + ", ":not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n"])), Handle, getScale("checkedLeft"), Handle, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, Handle, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
});
var StyledToggle = styled.div(templateObject_3$4 || (templateObject_3$4 = __makeTemplateObject(["\n  align-items: center;\n  background-color: ", ";\n  border-radius: 24px;\n  box-shadow: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  height: ", ";\n  position: relative;\n  transition: background-color 200ms;\n  width: ", ";\n"], ["\n  align-items: center;\n  background-color: ", ";\n  border-radius: 24px;\n  box-shadow: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  height: ", ";\n  position: relative;\n  transition: background-color 200ms;\n  width: ", ";\n"])), function (_a) {
    var theme = _a.theme, checked = _a.checked;
    return theme.colors[checked ? "success" : "input"];
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
}, getScale("toggleHeight"), getScale("toggleWidth"));
var templateObject_1$h, templateObject_2$6, templateObject_3$4;

var scales = {
    SM: "sm",
    MD: "md",
};

var Toggle = function (_a) {
    var checked = _a.checked, _b = _a.scale, scale = _b === void 0 ? scales.MD : _b, props = __rest(_a, ["checked", "scale"]);
    var isChecked = !!checked;
    return (React.createElement(StyledToggle, { checked: isChecked, scale: scale },
        React.createElement(Input, __assign({ checked: checked, scale: scale }, props, { type: "checkbox" })),
        React.createElement(Handle, { scale: scale })));
};
Toggle.defaultProps = {
    scale: scales.MD,
};

var breakpointMap = {
    xs: 370,
    sm: 576,
    md: 852,
    lg: 968,
    xl: 1080,
};
var breakpoints = Object.values(breakpointMap).map(function (breakpoint) { return breakpoint + "px"; });
var mediaQueries$1 = {
    xs: "@media screen and (min-width: " + breakpointMap.xs + "px)",
    sm: "@media screen and (min-width: " + breakpointMap.sm + "px)",
    md: "@media screen and (min-width: " + breakpointMap.md + "px)",
    lg: "@media screen and (min-width: " + breakpointMap.lg + "px)",
    xl: "@media screen and (min-width: " + breakpointMap.xl + "px)",
    nav: "@media screen and (min-width: " + breakpointMap.lg + "px)",
};
var shadows = {
    level1: "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
    active: "0px 0px 0px 1px #0098A1, 0px 0px 4px 8px rgba(31, 199, 212, 0.4)",
    success: "0px 0px 0px 1px #31D0AA, 0px 0px 0px 4px rgba(49, 208, 170, 0.2)",
    warning: "0px 0px 0px 1px #ED4B9E, 0px 0px 0px 4px rgba(237, 75, 158, 0.2)",
    focus: "0px 0px 0px 1px #7645D9, 0px 0px 0px 4px rgba(118, 69, 217, 0.6)",
    inset: "inset 0px 2px 2px -1px rgba(74, 74, 104, 0.1)",
};
var spacing = [0, 4, 8, 16, 24, 32, 48, 64];
var radii = {
    small: "4px",
    default: "16px",
    card: "32px",
    circle: "50%",
};
var zIndices = {
    dropdown: 10,
    modal: 100,
};
var base = {
    siteWidth: 1200,
    breakpoints: breakpoints,
    mediaQueries: mediaQueries$1,
    spacing: spacing,
    shadows: shadows,
    radii: radii,
    zIndices: zIndices,
};

/**
 * Can't use the media queries from "base.mediaQueries" because of how matchMedia works
 * In order for the listener to trigger we need have have the media query with a range, e.g.
 * (min-width: 370px) and (max-width: 576px)
 * @see https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList
 */
var mediaQueries = (function () {
    var prevMinWidth = 0;
    return Object.keys(breakpointMap).reduce(function (accum, size, index) {
        var _a, _b;
        // Largest size is just a min-width of second highest max-width
        if (index === Object.keys(breakpointMap).length - 1) {
            return __assign(__assign({}, accum), (_a = {}, _a[size] = "(min-width: " + prevMinWidth + "px)", _a));
        }
        var minWidth = prevMinWidth;
        var breakpoint = breakpointMap[size];
        // Min width for next iteration
        prevMinWidth = breakpoint + 1;
        return __assign(__assign({}, accum), (_b = {}, _b[size] = "(min-width: " + minWidth + "px) and (max-width: " + breakpoint + "px)", _b));
    }, {});
})();
var getKey = function (size) { return "is" + size.charAt(0).toUpperCase() + size.slice(1); };
var useMatchBreakpoints = function () {
    var _a = useState(function () {
        return Object.keys(mediaQueries).reduce(function (accum, size) {
            var _a;
            var key = getKey(size);
            var mql = window.matchMedia(mediaQueries[size]);
            return __assign(__assign({}, accum), (_a = {}, _a[key] = mql.matches, _a));
        }, {});
    }), state = _a[0], setState = _a[1];
    useEffect(function () {
        // Create listeners for each media query returning a function to unsubscribe
        var handlers = Object.keys(mediaQueries).map(function (size) {
            var mql = window.matchMedia(mediaQueries[size]);
            var handler = function (matchMediaQuery) {
                var key = getKey(size);
                setState(function (prevState) {
                    var _a;
                    return (__assign(__assign({}, prevState), (_a = {}, _a[key] = matchMediaQuery.matches, _a)));
                });
            };
            // Safari < 14 fix
            if (mql.addEventListener) {
                mql.addEventListener("change", handler);
            }
            return function () {
                // Safari < 14 fix
                if (mql.removeEventListener) {
                    mql.removeEventListener("change", handler);
                }
            };
        });
        return function () {
            handlers.forEach(function (unsubscribe) {
                unsubscribe();
            });
        };
    }, [setState]);
    return state;
};

var defaultParticleOptions = {
    size: 30,
    distance: 500,
};
var createParticle = function (x, y, imgSrc, options) {
    if (options === void 0) { options = {}; }
    var _a = __assign(__assign({}, defaultParticleOptions), options), size = _a.size, distance = _a.distance;
    var particle = document.createElement("particle");
    document.body.appendChild(particle);
    var width = Math.floor(Math.random() * size + 8);
    var height = width;
    var destinationX = (Math.random() - 0.5) * distance;
    var destinationY = (Math.random() - 0.5) * distance;
    var rotation = Math.random() * 520;
    var delay = Math.random() * 200;
    particle.style.backgroundRepeat = "no-repeat";
    particle.style.backgroundSize = "contain";
    particle.style.backgroundImage = "url(" + imgSrc + ")";
    particle.style.left = "0";
    particle.style.top = "0";
    particle.style.opacity = "0";
    particle.style.pointerEvents = "none";
    particle.style.position = "fixed";
    particle.style.width = width + "px";
    particle.style.height = height + "px";
    var animation = particle.animate([
        {
            transform: "translate(-50%, -50%) translate(" + x + "px, " + y + "px) rotate(0deg)",
            opacity: 1,
        },
        {
            transform: "translate(-50%, -50%) translate(" + (x + destinationX) + "px, " + (y + destinationY) + "px) rotate(" + rotation + "deg)",
            opacity: 0,
        },
    ], {
        duration: Math.random() * 1000 + 5000,
        easing: "cubic-bezier(0, .9, .57, 1)",
        delay: delay,
    });
    animation.onfinish = function () {
        particle.remove();
    };
};
var defaultOptions = {
    numberOfParticles: 30,
    debounceDuration: 200,
    particleOptions: {},
};
/**
 * @see https://css-tricks.com/playing-with-particles-using-the-web-animations-api/
 */
var useParticleBurst = function (options) {
    var _a = __assign(__assign({}, defaultOptions), options), selector = _a.selector, numberOfParticles = _a.numberOfParticles, debounceDuration = _a.debounceDuration, imgSrc = _a.imgSrc, disableWhen = _a.disableWhen, particleOptions = _a.particleOptions;
    var makeListener = useCallback(function () {
        return debounce(function (event) {
            var isDisabled = disableWhen && disableWhen();
            if (!isDisabled) {
                var node = event.currentTarget;
                if (event.clientX === 0 && event.clientY === 0) {
                    var _a = node.getBoundingClientRect(), left = _a.left, width = _a.width, top_1 = _a.top, height = _a.height;
                    var x = left + width / 2;
                    var y = top_1 + height / 2;
                    for (var i = 0; i < numberOfParticles; i += 1) {
                        createParticle(x, y, imgSrc, particleOptions);
                    }
                }
                else {
                    for (var i = 0; i < numberOfParticles; i += 1) {
                        createParticle(event.clientX, event.clientY + window.scrollY, imgSrc, particleOptions);
                    }
                }
            }
        }, debounceDuration, { leading: true });
    }, [debounceDuration, numberOfParticles, imgSrc, disableWhen, particleOptions]);
    var listener = makeListener();
    var initialize = useCallback(function () {
        if (selector) {
            document.querySelectorAll(selector).forEach(function (element) {
                element.addEventListener("click", listener);
            });
        }
        else {
            document.addEventListener("click", listener);
        }
    }, [selector, listener]);
    var teardown = useCallback(function () {
        if (selector) {
            document.querySelectorAll(selector).forEach(function (element) {
                element.removeEventListener("click", listener);
            });
        }
        else {
            document.removeEventListener("click", listener);
        }
    }, [selector, listener]);
    useEffect(function () {
        initialize();
        return function () { return teardown(); };
    }, [initialize, teardown]);
    return { initialize: initialize, teardown: teardown };
};

var useKonamiCheatCode = function (matchedCodeHandler) {
    useEffect(function () {
        var pattern = [
            "ArrowUp",
            "ArrowUp",
            "ArrowDown",
            "ArrowDown",
            "ArrowLeft",
            "ArrowRight",
            "ArrowLeft",
            "ArrowRight",
        ];
        var currentIndex = 0;
        var onKeyUpHandler = function (event) {
            var key = event.key;
            // is key in correct order otherwise reset
            if (key !== pattern[currentIndex]) {
                currentIndex = 0;
                return;
            }
            currentIndex += 1;
            if (pattern.length === currentIndex) {
                currentIndex = 0;
                matchedCodeHandler();
            }
        };
        document.addEventListener("keyup", onKeyUpHandler);
        return function () { return document.removeEventListener("keyup", onKeyUpHandler); };
    }, [matchedCodeHandler]);
};

var ModalHeader = styled.div(templateObject_1$g || (templateObject_1$g = __makeTemplateObject(["\n  align-items: center;\n  background: ", ";\n  border-bottom: 1px solid ", ";\n  display: flex;\n  padding: 12px 24px;\n"], ["\n  align-items: center;\n  background: ", ";\n  border-bottom: 1px solid ", ";\n  display: flex;\n  padding: 12px 24px;\n"])), function (_a) {
    var background = _a.background;
    return background || "transparent";
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.borderColor;
});
var ModalTitle = styled(Flex)(templateObject_2$5 || (templateObject_2$5 = __makeTemplateObject(["\n  align-items: center;\n  flex: 1;\n"], ["\n  align-items: center;\n  flex: 1;\n"])));
var ModalBody = styled(Flex)(templateObject_3$3 || (templateObject_3$3 = __makeTemplateObject(["\n  flex-direction: column;\n"], ["\n  flex-direction: column;\n"])));
var ModalCloseButton = function (_a) {
    var onDismiss = _a.onDismiss;
    return (React.createElement(IconButton, { variant: "text", onClick: onDismiss, "aria-label": "Close the dialog" },
        React.createElement(Icon$1g, { color: "primary" })));
};
var ModalBackButton = function (_a) {
    var onBack = _a.onBack;
    return (React.createElement(IconButton, { variant: "text", onClick: onBack, "area-label": "go back", mr: "8px" },
        React.createElement(Icon$1z, { color: "primary" })));
};
var ModalContainer = styled(Box)(templateObject_4$2 || (templateObject_4$2 = __makeTemplateObject(["\n  background: ", ";\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n  border: 1px solid ", ";\n  border-radius: 32px;\n  width: 100%;\n  z-index: ", ";\n\n  ", " {\n    width: auto;\n    min-width: ", ";\n    max-width: 100%;\n  }\n"], ["\n  background: ", ";\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n  border: 1px solid ", ";\n  border-radius: 32px;\n  width: 100%;\n  z-index: ", ";\n\n  ", " {\n    width: auto;\n    min-width: ", ";\n    max-width: 100%;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.modal.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.borderColor;
}, function (_a) {
    var theme = _a.theme;
    return theme.zIndices.modal;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.xs;
}, function (_a) {
    var minWidth = _a.minWidth;
    return minWidth;
});
var templateObject_1$g, templateObject_2$5, templateObject_3$3, templateObject_4$2;

var Modal = function (_a) {
    var title = _a.title, onDismiss = _a.onDismiss, onBack = _a.onBack, children = _a.children, _b = _a.hideCloseButton, hideCloseButton = _b === void 0 ? false : _b, _c = _a.bodyPadding, bodyPadding = _c === void 0 ? "24px" : _c, _d = _a.headerBackground, headerBackground = _d === void 0 ? "transparent" : _d, _e = _a.minWidth, minWidth = _e === void 0 ? "320px" : _e, props = __rest(_a, ["title", "onDismiss", "onBack", "children", "hideCloseButton", "bodyPadding", "headerBackground", "minWidth"]);
    return (React.createElement(ModalContainer, __assign({ minWidth: minWidth }, props),
        React.createElement(ModalHeader, { background: headerBackground },
            React.createElement(ModalTitle, null,
                onBack && React.createElement(ModalBackButton, { onBack: onBack }),
                React.createElement(Heading, null, title)),
            !hideCloseButton && React.createElement(ModalCloseButton, { onDismiss: onDismiss })),
        React.createElement(ModalBody, { p: bodyPadding }, children)));
};

var Overlay = styled.div.attrs({ role: "presentation" })(templateObject_1$f || (templateObject_1$f = __makeTemplateObject(["\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  background-color: ", ";\n  transition: opacity 0.4s;\n  opacity: ", ";\n  z-index: ", ";\n  pointer-events: ", ";\n"], ["\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  background-color: ", ";\n  transition: opacity 0.4s;\n  opacity: ", ";\n  z-index: ", ";\n  pointer-events: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.overlay;
}, function (_a) {
    var show = _a.show;
    return (show ? 0.6 : 0);
}, function (_a) {
    var zIndex = _a.zIndex;
    return zIndex;
}, function (_a) {
    var show = _a.show;
    return (show ? "initial" : "none");
});
Overlay.defaultProps = {
    show: false,
    zIndex: 10,
};
var templateObject_1$f;

var ModalWrapper = styled.div(templateObject_1$e || (templateObject_1$e = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: ", ";\n"], ["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.zIndices.modal - 1;
});
var Context = createContext({
    onPresent: function () { return null; },
    onDismiss: function () { return null; },
    setCloseOnOverlayClick: function () { return true; },
});
var ModalProvider = function (_a) {
    var children = _a.children;
    var _b = useState(false), isOpen = _b[0], setIsOpen = _b[1];
    var _c = useState(), modalNode = _c[0], setModalNode = _c[1];
    var _d = useState(true), closeOnOverlayClick = _d[0], setCloseOnOverlayClick = _d[1];
    var handlePresent = function (node) {
        setModalNode(node);
        setIsOpen(true);
    };
    var handleDismiss = function () {
        setModalNode(undefined);
        setIsOpen(false);
    };
    var handleOverlayDismiss = function () {
        if (closeOnOverlayClick) {
            handleDismiss();
        }
    };
    return (React.createElement(Context.Provider, { value: {
            onPresent: handlePresent,
            onDismiss: handleDismiss,
            setCloseOnOverlayClick: setCloseOnOverlayClick,
        } },
        isOpen && (React.createElement(ModalWrapper, null,
            React.createElement(Overlay, { show: true, onClick: handleOverlayDismiss }),
            React.isValidElement(modalNode) &&
                React.cloneElement(modalNode, {
                    onDismiss: handleDismiss,
                }))),
        children));
};
var templateObject_1$e;

var useModal = function (modal, closeOnOverlayClick) {
    if (closeOnOverlayClick === void 0) { closeOnOverlayClick = true; }
    var _a = useContext(Context), onPresent = _a.onPresent, onDismiss = _a.onDismiss, setCloseOnOverlayClick = _a.setCloseOnOverlayClick;
    var onPresentCallback = useCallback(function () {
        onPresent(modal);
    }, [modal, onPresent]);
    useEffect(function () {
        setCloseOnOverlayClick(closeOnOverlayClick);
    }, [closeOnOverlayClick, setCloseOnOverlayClick]);
    return [onPresentCallback, onDismiss];
};

var Icon$w = function (props) {
    return (React.createElement(Svg, __assign({ height: "20", viewBox: "0 0 20 20", fill: "none" }, props),
        React.createElement("path", { d: "M4.38605 5.0001H11.0714V3.95085L10.756 1.42871H5.27893L4.38605 5.0001Z", fill: "white" }),
        React.createElement("path", { d: "M4.28567 0.714292H10.7142V0.357146C10.7142 0.159894 10.5543 0 10.3571 0H4.28567C4.08842 0 3.92853 0.159894 3.92853 0.357146C3.92853 0.554397 4.08846 0.714292 4.28567 0.714292Z", fill: "white" }),
        React.createElement("path", { d: "M8.57141 11.0713H12.9253C13.162 9.77955 14.0297 8.69206 15.2367 8.17449C16.4436 7.65692 17.8296 7.77801 18.9285 8.49704V6.78563C18.9269 5.40556 17.8086 4.28722 16.4285 4.28564H11.7857V7.85704C11.7857 8.44876 11.306 8.92847 10.7142 8.92847H9.4953C9.11722 8.93048 8.76672 8.73079 8.57566 8.40455C7.28887 6.16021 4.5811 5.15736 2.14282 6.02207V6.78563C3.57575 6.18743 5.21287 6.34551 6.50487 7.20683C7.79689 8.06814 8.57247 9.51855 8.57141 11.0713Z", fill: "white" }),
        React.createElement("path", { d: "M9.1953 8.04934C9.25873 8.15391 9.37304 8.21677 9.49531 8.21434H10.7142C10.9115 8.21434 11.0714 8.05444 11.0714 7.85719V5.71436H6.77496C7.78564 6.24907 8.62468 7.05851 9.1953 8.04934Z", fill: "white" }),
        React.createElement("path", { d: "M13.5714 11.7856C13.5714 13.0856 14.3545 14.2576 15.5556 14.7552C16.7567 15.2527 18.1392 14.9777 19.0584 14.0584C19.9777 13.1391 20.2527 11.7566 19.7552 10.5555C19.2577 9.35444 18.0857 8.57129 16.7856 8.57129C15.0113 8.57346 13.5735 10.0113 13.5714 11.7856ZM18.9285 11.7856C18.9285 12.969 17.9691 13.9284 16.7856 13.9284C15.6022 13.9284 14.6428 12.969 14.6428 11.7856C14.6428 10.6021 15.6022 9.64273 16.7856 9.64273C17.9686 9.64391 18.9273 10.6026 18.9285 11.7856Z", fill: "white" }),
        React.createElement("path", { d: "M15.3571 11.7855C15.3571 12.5744 15.9966 13.214 16.7856 13.214C17.5746 13.214 18.2141 12.5744 18.2141 11.7855C18.2141 10.9965 17.5746 10.3569 16.7856 10.3569C15.9966 10.3569 15.3571 10.9965 15.3571 11.7855ZM17.1427 11.7855C17.1427 11.9827 16.9828 12.1426 16.7856 12.1426C16.5883 12.1426 16.4285 11.9827 16.4285 11.7855C16.4285 11.5882 16.5883 11.4283 16.7856 11.4283C16.9828 11.4283 17.1427 11.5882 17.1427 11.7855Z", fill: "white" }),
        React.createElement("path", { d: "M9.99663 17.0543C11.4704 16.5013 12.9816 16.0536 14.5188 15.7144H5.47949C7.01475 16.0545 8.52417 16.5023 9.99663 17.0543Z", fill: "white" }),
        React.createElement("path", { d: "M13.5714 1.42871H14.2856V3.57156H13.5714V1.42871Z", fill: "white" }),
        React.createElement("path", { d: "M0 19.6428C0 19.8401 0.159894 20 0.357146 20H4.18033C4.27713 19.936 4.37425 19.8739 4.47105 19.8118C3.00357 19.395 1.50988 19.0766 0 18.8589V19.6428Z", fill: "white" }),
        React.createElement("path", { d: "M0 17.252V18.1362C1.7909 18.3876 3.55958 18.7778 5.28998 19.3034C5.72022 19.0477 6.15103 18.807 6.58246 18.5813C4.43814 17.9197 2.23299 17.4744 0 17.252H0Z", fill: "white" }),
        React.createElement("path", { d: "M19.6427 19.9998C19.84 19.9998 19.9999 19.8399 19.9999 19.6427V18.8569C18.2671 19.1074 16.556 19.4894 14.8813 19.9998H19.6427Z", fill: "white" }),
        React.createElement("path", { d: "M12.6692 20.0001C15.036 19.1081 17.4947 18.4823 19.9999 18.1344V17.2529C16.4329 17.6056 12.9463 18.5333 9.67572 20.0001H12.6692Z", fill: "white" }),
        React.createElement("path", { d: "M19.6451 15.7144C14.6653 16.0131 9.82603 17.4814 5.51978 20H8.04083C11.7754 18.1074 15.832 16.9323 20.0001 16.5358V16.0715C20 15.8751 19.8414 15.7155 19.6451 15.7144Z", fill: "white" }),
        React.createElement("path", { d: "M8.99352 17.4504C6.20771 16.4766 3.30071 15.8924 0.354974 15.7144C0.158578 15.7155 0 15.8751 0 16.0715V16.5358C2.54979 16.7845 5.06376 17.3177 7.49496 18.1254C7.99831 17.8823 8.49781 17.6573 8.99352 17.4504Z", fill: "white" }),
        React.createElement("path", { d: "M3.92855 13.2144C5.11203 13.2144 6.0714 12.255 6.0714 11.0715C6.0714 9.88811 5.11199 8.92871 3.92855 8.92871C2.74511 8.92871 1.78571 9.88811 1.78571 11.0715C1.78689 12.2545 2.7456 13.2132 3.92855 13.2144ZM3.92855 10.7144C4.1258 10.7144 4.2857 10.8743 4.2857 11.0715C4.2857 11.2688 4.1258 11.4287 3.92855 11.4287C3.7313 11.4287 3.5714 11.2688 3.5714 11.0715C3.57144 10.8743 3.73133 10.7144 3.92855 10.7144Z", fill: "white" }),
        React.createElement("path", { d: "M3.92854 15.0002C6.09821 15.0002 7.85708 13.2413 7.85708 11.0716C7.85708 8.90197 6.09824 7.14307 3.92854 7.14307C1.75884 7.14307 0 8.90194 0 11.0716C0.00256726 13.2402 1.75992 14.9976 3.92854 15.0002ZM3.92854 8.21447C5.50648 8.21447 6.78567 9.49366 6.78567 11.0716C6.78567 12.6496 5.50648 13.9287 3.92854 13.9287C2.35059 13.9287 1.0714 12.6496 1.0714 11.0716C1.07318 9.49439 2.35135 8.21625 3.92854 8.21447Z", fill: "white" })));
};

var Icon$v = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 12.75C13.63 12.75 15.07 13.14 16.24 13.65C17.32 14.13 18 15.21 18 16.38V17C18 17.55 17.55 18 17 18H7C6.45 18 6 17.55 6 17V16.39C6 15.21 6.68 14.13 7.76 13.66C8.93 13.14 10.37 12.75 12 12.75ZM4 13C5.1 13 6 12.1 6 11C6 9.9 5.1 9 4 9C2.9 9 2 9.9 2 11C2 12.1 2.9 13 4 13ZM5.13 14.1C4.76 14.04 4.39 14 4 14C3.01 14 2.07 14.21 1.22 14.58C0.48 14.9 0 15.62 0 16.43V17C0 17.55 0.45 18 1 18H4.5V16.39C4.5 15.56 4.73 14.78 5.13 14.1ZM20 13C21.1 13 22 12.1 22 11C22 9.9 21.1 9 20 9C18.9 9 18 9.9 18 11C18 12.1 18.9 13 20 13ZM24 16.43C24 15.62 23.52 14.9 22.78 14.58C21.93 14.21 20.99 14 20 14C19.61 14 19.24 14.04 18.87 14.1C19.27 14.78 19.5 15.56 19.5 16.39V18H23C23.55 18 24 17.55 24 17V16.43ZM12 6C13.66 6 15 7.34 15 9C15 10.66 13.66 12 12 12C10.34 12 9 10.66 9 9C9 7.34 10.34 6 12 6Z" })));
};

var Icon$u = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M4 18H20C20.55 18 21 17.55 21 17C21 16.45 20.55 16 20 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H20C20.55 13 21 12.55 21 12C21 11.45 20.55 11 20 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H20C20.55 8 21 7.55 21 7C21 6.45 20.55 6 20 6H4C3.45 6 3 6.45 3 7Z" })));
};

var Icon$t = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M4 18H15C15.55 18 16 17.55 16 17C16 16.45 15.55 16 15 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H12C12.55 13 13 12.55 13 12C13 11.45 12.55 11 12 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H15C15.55 8 16 7.55 16 7C16 6.45 15.55 6 15 6H4C3.45 6 3 6.45 3 7ZM20.3 14.88L17.42 12L20.3 9.12C20.69 8.73 20.69 8.1 20.3 7.71C19.91 7.32 19.28 7.32 18.89 7.71L15.3 11.3C14.91 11.69 14.91 12.32 15.3 12.71L18.89 16.3C19.28 16.69 19.91 16.69 20.3 16.3C20.68 15.91 20.69 15.27 20.3 14.88Z" })));
};

var Icon$s = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M9.99998 19V14H14V19C14 19.55 14.45 20 15 20H18C18.55 20 19 19.55 19 19V12H20.7C21.16 12 21.38 11.43 21.03 11.13L12.67 3.59997C12.29 3.25997 11.71 3.25997 11.33 3.59997L2.96998 11.13C2.62998 11.43 2.83998 12 3.29998 12H4.99998V19C4.99998 19.55 5.44998 20 5.99998 20H8.99998C9.54998 20 9.99998 19.55 9.99998 19Z" })));
};

var Icon$r = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M21.9 8.89L20.85 4.52C20.63 3.62 19.85 3 18.94 3H16.73H14.72H13H11H9.28001H7.26001H5.05001C4.15001 3 3.36001 3.63 3.15001 4.52L2.10001 8.89C1.86001 9.91 2.08001 10.95 2.72001 11.77C2.80001 11.88 2.91001 11.96 3.00001 12.06V19C3.00001 20.1 3.90001 21 5.00001 21H19C20.1 21 21 20.1 21 19V12.06C21.09 11.97 21.2 11.88 21.28 11.78C21.92 10.96 22.15 9.91 21.9 8.89ZM7.02001 5L6.44001 9.86C6.36001 10.51 5.84001 11 5.23001 11C4.74001 11 4.43001 10.71 4.30001 10.53C4.04001 10.2 3.95001 9.77 4.05001 9.36L5.05001 5H7.02001ZM18.91 4.99L19.96 9.36C20.06 9.78 19.97 10.2 19.71 10.53C19.57 10.71 19.27 11 18.77 11C18.16 11 17.63 10.51 17.56 9.86L16.98 5L18.91 4.99ZM15.51 9.52C15.56 9.91 15.44 10.3 15.18 10.59C14.95 10.85 14.63 11 14.22 11C13.55 11 13 10.41 13 9.69V5H14.96L15.51 9.52ZM11 9.69C11 10.41 10.45 11 9.71001 11C9.37001 11 9.06001 10.85 8.82001 10.59C8.57001 10.3 8.45001 9.91 8.49001 9.52L9.04001 5H11V9.69ZM18 19H6.00001C5.45001 19 5.00001 18.55 5.00001 18V12.97C5.08001 12.98 5.15001 13 5.23001 13C6.10001 13 6.89001 12.64 7.47001 12.05C8.07001 12.65 8.87001 13 9.78001 13C10.65 13 11.43 12.64 12.01 12.07C12.6 12.64 13.4 13 14.3 13C15.14 13 15.94 12.65 16.54 12.05C17.12 12.64 17.91 13 18.78 13C18.86 13 18.93 12.98 19.01 12.97V18C19 18.55 18.55 19 18 19Z" })));
};

var Icon$q = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M5 7C5 6.44772 4.55228 6 4 6C3.44772 6 3 6.44772 3 7V18C3 19.1046 3.89543 20 5 20H20C20.5523 20 21 19.5523 21 19C21 18.4477 20.5523 18 20 18H5V7Z" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19 17H7C6.44772 17 6 16.5523 6 16V12C6 11.4477 6.44772 11 7 11H10V10C10 9.44772 10.4477 9 11 9H14V7C14 6.44772 14.4477 6 15 6H19C19.5523 6 20 6.44772 20 7V16C20 16.5523 19.5523 17 19 17ZM16 8H18V15H16V8ZM12 15H14V11H12V15ZM10 13H8V15H10V13Z" })));
};

var Icon$p = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM18.92 8H15.97C15.65 6.75 15.19 5.55 14.59 4.44C16.43 5.07 17.96 6.35 18.92 8ZM12 4.04C12.83 5.24 13.48 6.57 13.91 8H10.09C10.52 6.57 11.17 5.24 12 4.04ZM4.26 14C4.1 13.36 4 12.69 4 12C4 11.31 4.1 10.64 4.26 10H7.64C7.56 10.66 7.5 11.32 7.5 12C7.5 12.68 7.56 13.34 7.64 14H4.26ZM5.08 16H8.03C8.35 17.25 8.81 18.45 9.41 19.56C7.57 18.93 6.04 17.66 5.08 16ZM8.03 8H5.08C6.04 6.34 7.57 5.07 9.41 4.44C8.81 5.55 8.35 6.75 8.03 8ZM12 19.96C11.17 18.76 10.52 17.43 10.09 16H13.91C13.48 17.43 12.83 18.76 12 19.96ZM14.34 14H9.66C9.57 13.34 9.5 12.68 9.5 12C9.5 11.32 9.57 10.65 9.66 10H14.34C14.43 10.65 14.5 11.32 14.5 12C14.5 12.68 14.43 13.34 14.34 14ZM14.59 19.56C15.19 18.45 15.65 17.25 15.97 16H18.92C17.96 17.65 16.43 18.93 14.59 19.56ZM16.36 14C16.44 13.34 16.5 12.68 16.5 12C16.5 11.32 16.44 10.66 16.36 10H19.74C19.9 10.64 20 11.31 20 12C20 12.69 19.9 13.36 19.74 14H16.36Z" })));
};

var Logo$2 = function (_a) {
    _a.isDark; var props = __rest(_a, ["isDark"]);
    // "#FB5230"
    return (React.createElement(Svg, __assign({ height: "21", viewBox: "0 0 115 21", fill: "none" }, props),
        React.createElement("path", { d: "M0.114591 16V1.45455H5.68277C6.73391 1.45455 7.60749 1.62026 8.30351 1.9517C9.00427 2.27841 9.52747 2.72585 9.87311 3.29403C10.2235 3.86222 10.3987 4.50616 10.3987 5.22585C10.3987 5.81771 10.285 6.32434 10.0578 6.74574C9.8305 7.1624 9.5251 7.50095 9.14158 7.76136C8.75806 8.02178 8.32955 8.20881 7.85607 8.32244V8.46449C8.37217 8.4929 8.86696 8.65151 9.34044 8.94034C9.81866 9.22443 10.2093 9.62689 10.5123 10.1477C10.8153 10.6686 10.9669 11.2983 10.9669 12.0369C10.9669 12.7898 10.7846 13.4669 10.42 14.0682C10.0554 14.6648 9.50616 15.1359 8.77226 15.4815C8.03836 15.8272 7.11506 16 6.00237 16H0.114591ZM2.74953 13.7983H5.58334C6.53978 13.7983 7.2287 13.616 7.6501 13.2514C8.07624 12.8821 8.28931 12.4086 8.28931 11.831C8.28931 11.4001 8.18277 11.0118 7.9697 10.6662C7.75664 10.3158 7.45361 10.0412 7.06061 9.84233C6.66762 9.63873 6.19887 9.53693 5.65436 9.53693H2.74953V13.7983ZM2.74953 7.64062H5.35607C5.81061 7.64062 6.22018 7.55777 6.58476 7.39205C6.94934 7.22159 7.2358 6.98248 7.44414 6.67472C7.6572 6.36222 7.76374 5.9929 7.76374 5.56676C7.76374 5.00331 7.56487 4.5393 7.16715 4.17472C6.77416 3.81013 6.1894 3.62784 5.41289 3.62784H2.74953V7.64062ZM13.1455 16V5.09091H15.6384V6.90909H15.752C15.9509 6.27936 16.2918 5.79403 16.7747 5.45312C17.2624 5.10748 17.8188 4.93466 18.4438 4.93466C18.5858 4.93466 18.7444 4.94176 18.9196 4.95597C19.0996 4.96544 19.2487 4.98201 19.3671 5.00568V7.37074C19.2582 7.33286 19.0854 7.29972 18.8486 7.27131C18.6166 7.23816 18.3917 7.22159 18.1739 7.22159C17.7051 7.22159 17.2837 7.32339 16.9097 7.52699C16.5404 7.72585 16.2492 8.00284 16.0361 8.35795C15.823 8.71307 15.7165 9.12263 15.7165 9.58665V16H13.1455ZM21.0752 16V5.09091H23.6462V16H21.0752ZM22.3678 3.54261C21.9606 3.54261 21.6102 3.40767 21.3167 3.13778C21.0231 2.86316 20.8763 2.53409 20.8763 2.15057C20.8763 1.76231 21.0231 1.43324 21.3167 1.16335C21.6102 0.88873 21.9606 0.75142 22.3678 0.75142C22.7797 0.75142 23.1301 0.88873 23.4189 1.16335C23.7125 1.43324 23.8593 1.76231 23.8593 2.15057C23.8593 2.53409 23.7125 2.86316 23.4189 3.13778C23.1301 3.40767 22.7797 3.54261 22.3678 3.54261ZM30.3383 16.1918C29.4813 16.1918 28.7143 15.9716 28.0372 15.5312C27.3601 15.0909 26.8251 14.4517 26.4321 13.6136C26.0391 12.7756 25.8426 11.7576 25.8426 10.5597C25.8426 9.34754 26.0414 8.32481 26.4392 7.49148C26.8416 6.65341 27.3838 6.02131 28.0656 5.59517C28.7474 5.1643 29.5073 4.94886 30.3454 4.94886C30.9846 4.94886 31.5102 5.05777 31.9221 5.27557C32.3341 5.48864 32.6608 5.74669 32.9022 6.04972C33.1437 6.34801 33.3307 6.62973 33.4633 6.89489H33.5698V1.45455H36.148V16H33.6196V14.2812H33.4633C33.3307 14.5464 33.139 14.8281 32.888 15.1264C32.6371 15.42 32.3056 15.6709 31.8937 15.8793C31.4818 16.0876 30.9633 16.1918 30.3383 16.1918ZM31.0556 14.0824C31.6001 14.0824 32.0642 13.9356 32.4477 13.642C32.8312 13.3437 33.1224 12.9295 33.3213 12.3991C33.5201 11.8688 33.6196 11.2509 33.6196 10.5455C33.6196 9.83996 33.5201 9.2268 33.3213 8.70597C33.1271 8.18513 32.8383 7.7803 32.4548 7.49148C32.076 7.20265 31.6096 7.05824 31.0556 7.05824C30.4827 7.05824 30.0045 7.20739 29.621 7.50568C29.2375 7.80398 28.9486 8.21591 28.7545 8.74148C28.5604 9.26705 28.4633 9.86837 28.4633 10.5455C28.4633 11.2273 28.5604 11.8357 28.7545 12.3707C28.9534 12.901 29.2446 13.3201 29.6281 13.6278C30.0163 13.9309 30.4922 14.0824 31.0556 14.0824ZM43.632 20.3182C42.7087 20.3182 41.9156 20.1927 41.2527 19.9418C40.5899 19.6955 40.0572 19.3641 39.6547 18.9474C39.2523 18.5308 38.9729 18.0691 38.8167 17.5625L41.132 17.0014C41.2362 17.2145 41.3877 17.4252 41.5865 17.6335C41.7854 17.8466 42.0529 18.0218 42.3891 18.1591C42.73 18.3011 43.1585 18.3722 43.6746 18.3722C44.4038 18.3722 45.0075 18.1946 45.4857 17.8395C45.9639 17.4891 46.203 16.9115 46.203 16.1065V14.0398H46.0752C45.9426 14.3049 45.7485 14.5772 45.4928 14.8565C45.2418 15.1359 44.908 15.3703 44.4914 15.5597C44.0794 15.7491 43.561 15.8438 42.936 15.8438C42.0979 15.8438 41.338 15.6473 40.6561 15.2543C39.9791 14.8565 39.4393 14.2647 39.0368 13.4787C38.6391 12.688 38.4402 11.6984 38.4402 10.5099C38.4402 9.31203 38.6391 8.30114 39.0368 7.47727C39.4393 6.64867 39.9814 6.02131 40.6632 5.59517C41.3451 5.1643 42.105 4.94886 42.9431 4.94886C43.5823 4.94886 44.1078 5.05777 44.5198 5.27557C44.9364 5.48864 45.2679 5.74669 45.5141 6.04972C45.7603 6.34801 45.9473 6.62973 46.0752 6.89489H46.2172V5.09091H48.7527V16.1776C48.7527 17.1103 48.5302 17.8821 48.0851 18.4929C47.64 19.1037 47.0316 19.5606 46.2598 19.8636C45.4881 20.1667 44.6121 20.3182 43.632 20.3182ZM43.6533 13.8267C44.1978 13.8267 44.6618 13.6941 45.0453 13.429C45.4289 13.1638 45.7201 12.7827 45.9189 12.2855C46.1178 11.7884 46.2172 11.1918 46.2172 10.4957C46.2172 9.80919 46.1178 9.20786 45.9189 8.69176C45.7248 8.17566 45.436 7.77557 45.0524 7.49148C44.6737 7.20265 44.2073 7.05824 43.6533 7.05824C43.0804 7.05824 42.6022 7.20739 42.2186 7.50568C41.8351 7.80398 41.5463 8.21354 41.3522 8.73438C41.158 9.25047 41.061 9.83759 41.061 10.4957C41.061 11.1634 41.158 11.7481 41.3522 12.25C41.551 12.7472 41.8422 13.1354 42.2257 13.4148C42.614 13.6894 43.0899 13.8267 43.6533 13.8267ZM56.2172 16.2131C55.1235 16.2131 54.1789 15.9858 53.3834 15.5312C52.5927 15.072 51.9843 14.4233 51.5581 13.5852C51.132 12.7424 50.9189 11.7505 50.9189 10.6094C50.9189 9.48722 51.132 8.50237 51.5581 7.65483C51.989 6.80256 52.5903 6.13968 53.3621 5.66619C54.1339 5.18797 55.0406 4.94886 56.0823 4.94886C56.7546 4.94886 57.3891 5.05777 57.9857 5.27557C58.587 5.48864 59.1173 5.82008 59.5766 6.26989C60.0406 6.7197 60.4052 7.29261 60.6703 7.98864C60.9355 8.67992 61.0681 9.50379 61.0681 10.4602V11.2486H52.1263V9.51562H58.6036C58.5988 9.0232 58.4923 8.58523 58.284 8.2017C58.0756 7.81345 57.7845 7.50805 57.4104 7.28551C57.0411 7.06297 56.6102 6.9517 56.1178 6.9517C55.5922 6.9517 55.1306 7.07955 54.7328 7.33523C54.3351 7.58617 54.025 7.91761 53.8024 8.32955C53.5846 8.73674 53.4734 9.18419 53.4686 9.67188V11.1847C53.4686 11.8191 53.5846 12.3636 53.8167 12.8182C54.0487 13.268 54.373 13.6136 54.7897 13.8551C55.2063 14.0919 55.694 14.2102 56.2527 14.2102C56.6268 14.2102 56.9653 14.1581 57.2684 14.054C57.5714 13.9451 57.8342 13.7865 58.0567 13.5781C58.2792 13.3698 58.4473 13.1117 58.561 12.804L60.9615 13.0739C60.81 13.7083 60.5212 14.2623 60.0951 14.7358C59.6737 15.2045 59.1339 15.5691 58.4757 15.8295C57.8176 16.0852 57.0648 16.2131 56.2172 16.2131ZM71.2616 5.45312C71.1953 4.83286 70.916 4.34991 70.4235 4.00426C69.9359 3.65862 69.3014 3.4858 68.5201 3.4858C67.9709 3.4858 67.4998 3.56866 67.1068 3.73438C66.7138 3.90009 66.4131 4.125 66.2048 4.40909C65.9965 4.69318 65.8899 5.01752 65.8852 5.3821C65.8852 5.68513 65.9538 5.94792 66.0912 6.17045C66.2332 6.39299 66.425 6.58239 66.6664 6.73864C66.9079 6.89015 67.1754 7.01799 67.469 7.12216C67.7626 7.22633 68.0585 7.31392 68.3568 7.38494L69.7204 7.72585C70.2697 7.85369 70.7976 8.02651 71.3042 8.24432C71.8156 8.46212 72.2725 8.73674 72.675 9.06818C73.0822 9.39962 73.4041 9.79972 73.6409 10.2685C73.8776 10.7372 73.996 11.2865 73.996 11.9162C73.996 12.7685 73.7782 13.5189 73.3426 14.1676C72.907 14.8116 72.2772 15.3158 71.4534 15.6804C70.6342 16.0402 69.6423 16.2202 68.4775 16.2202C67.3459 16.2202 66.3634 16.045 65.5301 15.6946C64.7015 15.3442 64.0528 14.8329 63.5841 14.1605C63.12 13.4882 62.8691 12.669 62.8312 11.7031H65.4235C65.4614 12.2098 65.6177 12.6312 65.8923 12.9673C66.1669 13.3035 66.5244 13.5545 66.9647 13.7202C67.4098 13.8859 67.907 13.9688 68.4562 13.9688C69.0291 13.9688 69.531 13.8835 69.9619 13.7131C70.3975 13.5379 70.7384 13.2964 70.9846 12.9886C71.2308 12.6761 71.3563 12.3116 71.361 11.8949C71.3563 11.5161 71.245 11.2036 71.0272 10.9574C70.8094 10.7064 70.504 10.4981 70.111 10.3324C69.7228 10.1619 69.2682 10.0104 68.7474 9.87784L67.0926 9.4517C65.8947 9.14394 64.9477 8.67756 64.2517 8.05256C63.5604 7.42282 63.2147 6.58712 63.2147 5.54545C63.2147 4.68845 63.4467 3.93797 63.9108 3.29403C64.3795 2.65009 65.0163 2.15057 65.8213 1.79545C66.6262 1.43561 67.5376 1.25568 68.5556 1.25568C69.5878 1.25568 70.4922 1.43561 71.2687 1.79545C72.05 2.15057 72.6631 2.64536 73.1082 3.27983C73.5533 3.90956 73.7829 4.634 73.7971 5.45312H71.2616ZM78.4828 16L75.4005 5.09091H78.0212L79.9388 12.7614H80.0382L81.9985 5.09091H84.5908L86.551 12.7188H86.6576L88.5468 5.09091H91.1746L88.0851 16H85.4076L83.3621 8.62784H83.213L81.1675 16H78.4828ZM96.1089 16.2202C95.4176 16.2202 94.795 16.0971 94.241 15.8509C93.6918 15.5999 93.2562 15.2306 92.9342 14.7429C92.617 14.2552 92.4583 13.6539 92.4583 12.9389C92.4583 12.3234 92.572 11.8144 92.7992 11.4119C93.0265 11.0095 93.3367 10.6875 93.7296 10.446C94.1226 10.2045 94.5653 10.0223 95.0578 9.89915C95.5549 9.77131 96.0687 9.67898 96.599 9.62216C97.2382 9.55587 97.7566 9.49669 98.1544 9.4446C98.5521 9.38778 98.8409 9.30256 99.0208 9.18892C99.2055 9.07055 99.2978 8.88826 99.2978 8.64205V8.59943C99.2978 8.06439 99.1392 7.65009 98.822 7.35653C98.5047 7.06297 98.0478 6.91619 97.4512 6.91619C96.8215 6.91619 96.322 7.0535 95.9527 7.32812C95.5881 7.60275 95.3419 7.92708 95.214 8.30114L92.8135 7.96023C93.0028 7.29735 93.3153 6.74337 93.751 6.2983C94.1866 5.84848 94.7192 5.51231 95.349 5.28977C95.9787 5.0625 96.6747 4.94886 97.437 4.94886C97.9626 4.94886 98.4858 5.01042 99.0066 5.13352C99.5275 5.25663 100.003 5.46023 100.434 5.74432C100.865 6.02367 101.211 6.40483 101.471 6.88778C101.736 7.37074 101.869 7.97443 101.869 8.69886V16H99.3973V14.5014H99.312C99.1558 14.8045 98.9356 15.0885 98.6515 15.3537C98.3722 15.6141 98.0194 15.8248 97.5933 15.9858C97.1719 16.142 96.6771 16.2202 96.1089 16.2202ZM96.7765 14.331C97.2926 14.331 97.7401 14.2292 98.1189 14.0256C98.4976 13.8172 98.7888 13.5426 98.9924 13.2017C99.2008 12.8608 99.3049 12.4891 99.3049 12.0866V10.8011C99.2244 10.8674 99.0871 10.929 98.893 10.9858C98.7036 11.0426 98.4905 11.0923 98.2538 11.1349C98.0171 11.1776 97.7827 11.2154 97.5507 11.2486C97.3187 11.2817 97.1174 11.3101 96.947 11.3338C96.5635 11.3859 96.2202 11.4711 95.9171 11.5895C95.6141 11.7079 95.375 11.8736 95.1998 12.0866C95.0246 12.295 94.937 12.5649 94.937 12.8963C94.937 13.3698 95.1099 13.7273 95.4555 13.9688C95.8011 14.2102 96.2415 14.331 96.7765 14.331ZM104.454 20.0909V5.09091H106.982V6.89489H107.132C107.264 6.62973 107.451 6.34801 107.693 6.04972C107.934 5.74669 108.261 5.48864 108.673 5.27557C109.085 5.05777 109.61 4.94886 110.25 4.94886C111.092 4.94886 111.852 5.1643 112.529 5.59517C113.211 6.02131 113.751 6.65341 114.149 7.49148C114.551 8.32481 114.752 9.34754 114.752 10.5597C114.752 11.7576 114.556 12.7756 114.163 13.6136C113.77 14.4517 113.235 15.0909 112.558 15.5312C111.881 15.9716 111.114 16.1918 110.257 16.1918C109.632 16.1918 109.113 16.0876 108.701 15.8793C108.289 15.6709 107.958 15.42 107.707 15.1264C107.461 14.8281 107.269 14.5464 107.132 14.2812H107.025V20.0909H104.454ZM106.975 10.5455C106.975 11.2509 107.075 11.8688 107.274 12.3991C107.477 12.9295 107.768 13.3437 108.147 13.642C108.531 13.9356 108.995 14.0824 109.539 14.0824C110.107 14.0824 110.583 13.9309 110.967 13.6278C111.35 13.3201 111.639 12.901 111.833 12.3707C112.032 11.8357 112.132 11.2273 112.132 10.5455C112.132 9.86837 112.035 9.26705 111.84 8.74148C111.646 8.21591 111.357 7.80398 110.974 7.50568C110.59 7.20739 110.112 7.05824 109.539 7.05824C108.99 7.05824 108.524 7.20265 108.14 7.49148C107.757 7.7803 107.465 8.18513 107.267 8.70597C107.072 9.2268 106.975 9.83996 106.975 10.5455Z", fill: "#F8A61C" })));
};
var LogoWithText = React.memo(Logo$2, function (prev, next) { return prev.isDark === next.isDark; });

var Icon$o = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.1534 13.6089L4.15362 13.61C4.77322 16.8113 7.42207 19.3677 10.647 19.8853L10.6502 19.8858C13.0412 20.2736 15.2625 19.6103 16.9422 18.2833C11.3549 16.2878 7.9748 10.3524 9.26266 4.48816C5.69846 5.77194 3.35817 9.51245 4.1534 13.6089ZM10.0083 2.21054C4.76622 3.2533 1.09895 8.36947 2.19006 13.9901C2.97006 18.0201 6.28006 21.2101 10.3301 21.8601C13.8512 22.4311 17.0955 21.1608 19.2662 18.8587C19.2765 18.8478 19.2866 18.837 19.2968 18.8261C19.4385 18.6745 19.5757 18.5184 19.7079 18.3581C19.7105 18.355 19.713 18.3519 19.7156 18.3487C19.8853 18.1426 20.0469 17.9295 20.2001 17.7101C20.4101 17.4001 20.2401 16.9601 19.8701 16.9201C19.5114 16.8796 19.1602 16.8209 18.817 16.7452C18.7964 16.7406 18.7758 16.736 18.7552 16.7313C18.6676 16.7114 18.5804 16.6903 18.4938 16.6681C18.4919 16.6676 18.4901 16.6672 18.4882 16.6667C13.0234 15.2647 9.72516 9.48006 11.4542 4.03417C11.4549 4.03214 11.4555 4.03012 11.4562 4.0281C11.4875 3.92954 11.5205 3.83109 11.5552 3.73278C11.5565 3.72911 11.5578 3.72543 11.5591 3.72175C11.6768 3.38921 11.8136 3.05829 11.9701 2.73005C12.1301 2.39005 11.8501 2.01005 11.4701 2.03005C11.1954 2.04379 10.924 2.06848 10.6561 2.10368C10.6517 2.10427 10.6472 2.10486 10.6428 2.10545C10.4413 2.13221 10.2418 2.16492 10.0446 2.2034C10.0325 2.20576 10.0204 2.20814 10.0083 2.21054Z" })));
};

var Icon$n = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12C8 10.9 7.1 10 6 10ZM18 10C16.9 10 16 10.9 16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z" })));
};

var Icon$m = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12.8533 3.39627C12.4634 2.75821 11.5366 2.75821 11.1467 3.39627L7.42977 9.47855C7.02256 10.1449 7.50213 11 8.28306 11H15.7169C16.4979 11 16.9774 10.1449 16.5702 9.47855L12.8533 3.39627ZM12 5.84L13.93 9H10.06L12 5.84ZM17.5 13C15.01 13 13 15.01 13 17.5C13 19.99 15.01 22 17.5 22C19.99 22 22 19.99 22 17.5C22 15.01 19.99 13 17.5 13ZM17.5 20C16.12 20 15 18.88 15 17.5C15 16.12 16.12 15 17.5 15C18.88 15 20 16.12 20 17.5C20 18.88 18.88 20 17.5 20ZM3 19.5C3 20.6046 3.89543 21.5 5 21.5H9C10.1046 21.5 11 20.6046 11 19.5V15.5C11 14.3954 10.1046 13.5 9 13.5H5C3.89543 13.5 3 14.3954 3 15.5V19.5ZM5 15.5H9V19.5H5V15.5Z" })));
};

var Icon$l = function (props) {
    return (React.createElement(Svg, __assign({ height: "20", viewBox: "0 0 20 20", fill: "none" }, props),
        React.createElement("path", { d: "M0.194067 9.1644C0.0924779 8.55487 0.562521 8 1.18046 8H18.8195C19.4375 8 19.9075 8.55487 19.8059 9.1644L18.1393 19.1644C18.0589 19.6466 17.6417 20 17.1529 20H2.84713C2.35829 20 1.9411 19.6466 1.86073 19.1644L0.194067 9.1644Z", fill: "white" }),
        React.createElement("circle", { cx: "4.5", cy: "3.5", r: "1.5", fill: "white" }),
        React.createElement("circle", { cx: "7.5", cy: "1.5", r: "1.5", fill: "white" }),
        React.createElement("circle", { cx: "11.5", cy: "5.5", r: "1.5", fill: "white" }),
        React.createElement("circle", { cx: "14.5", cy: "3.5", r: "1.5", fill: "white" }),
        React.createElement("circle", { cx: "11.5", cy: "1.5", r: "1.5", fill: "white" }),
        React.createElement("circle", { cx: "7.5", cy: "5.5", r: "1.5", fill: "white" })));
};

var Icon$k = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M3.18731 5.68438C2.44993 5.52604 2.44993 4.47393 3.18731 4.31559L5.3203 3.85755C5.58957 3.79973 5.79991 3.58939 5.85774 3.32012L6.31577 1.18713C6.47411 0.449748 7.52622 0.449751 7.68457 1.18713L8.1426 3.32012C8.20042 3.58939 8.41076 3.79973 8.68003 3.85755L10.813 4.31559C11.5504 4.47393 11.5504 5.52604 10.813 5.68438L8.68003 6.14241C8.41076 6.20024 8.20042 6.41058 8.1426 6.67985L7.68457 8.81284C7.52622 9.55022 6.47411 9.55022 6.31577 8.81284L5.85774 6.67985C5.79991 6.41058 5.58957 6.20024 5.3203 6.14241L3.18731 5.68438Z" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 2.99998C15.866 2.99998 19 6.13399 19 9.99998C19 13.866 15.866 17 12 17C8.13401 17 5 13.866 5 9.99998C5 9.4477 4.55228 8.99998 4 8.99998C3.44772 8.99998 3 9.4477 3 9.99998C3 12.8894 4.36163 15.4608 6.47822 17.1075L5.58579 18C5.21071 18.3751 5 18.8838 5 19.4142V21.5C5 22.3284 5.67157 23 6.5 23H17.5C18.3284 23 19 22.3284 19 21.5V19.4142C19 18.8838 18.7893 18.3751 18.4142 18L17.5218 17.1075C19.6384 15.4608 21 12.8894 21 9.99998C21 5.02942 16.9706 0.999985 12 0.999985C11.4477 0.999985 11 1.4477 11 1.99998C11 2.55227 11.4477 2.99998 12 2.99998ZM12 19C10.6564 19 9.38156 18.7056 8.23649 18.1777L7 19.4142L7 21H17V19.4142L15.7635 18.1777C14.6184 18.7056 13.3436 19 12 19Z" })));
};

var Icon$j = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M5.66 4.2L6.05 4.59C6.44 4.97 6.44 5.61 6.05 5.99L6.04 6C5.65 6.39 5.03 6.39 4.64 6L4.25 5.61C3.86 5.23 3.86 4.6 4.25 4.21L4.26 4.2C4.64 3.82 5.27 3.81 5.66 4.2Z" }),
        React.createElement("path", { d: "M1.99 10.95H3.01C3.56 10.95 4 11.39 4 11.95V11.96C4 12.51 3.56 12.95 3 12.94H1.99C1.44 12.94 1 12.5 1 11.95V11.94C1 11.39 1.44 10.95 1.99 10.95Z" }),
        React.createElement("path", { d: "M12 1H12.01C12.56 1 13 1.44 13 1.99V2.96C13 3.51 12.56 3.95 12 3.94H11.99C11.44 3.94 11 3.5 11 2.95V1.99C11 1.44 11.44 1 12 1Z" }),
        React.createElement("path", { d: "M18.34 4.2C18.73 3.82 19.36 3.82 19.75 4.21C20.14 4.6 20.14 5.22 19.75 5.61L19.36 6C18.98 6.39 18.35 6.39 17.96 6L17.95 5.99C17.56 5.61 17.56 4.98 17.95 4.59L18.34 4.2Z" }),
        React.createElement("path", { d: "M18.33 19.7L17.94 19.31C17.55 18.92 17.55 18.3 17.95 17.9C18.33 17.52 18.96 17.51 19.35 17.9L19.74 18.29C20.13 18.68 20.13 19.31 19.74 19.7C19.35 20.09 18.72 20.09 18.33 19.7Z" }),
        React.createElement("path", { d: "M20 11.95V11.94C20 11.39 20.44 10.95 20.99 10.95H22C22.55 10.95 22.99 11.39 22.99 11.94V11.95C22.99 12.5 22.55 12.94 22 12.94H20.99C20.44 12.94 20 12.5 20 11.95Z" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6 11.95C6 8.64 8.69 5.95 12 5.95C15.31 5.95 18 8.64 18 11.95C18 15.26 15.31 17.95 12 17.95C8.69 17.95 6 15.26 6 11.95ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" }),
        React.createElement("path", { d: "M12 22.9H11.99C11.44 22.9 11 22.46 11 21.91V20.95C11 20.4 11.44 19.96 11.99 19.96H12C12.55 19.96 12.99 20.4 12.99 20.95V21.91C12.99 22.46 12.55 22.9 12 22.9Z" }),
        React.createElement("path", { d: "M5.66 19.69C5.27 20.08 4.64 20.08 4.25 19.69C3.86 19.3 3.86 18.68 4.24 18.28L4.63 17.89C5.02 17.5 5.65 17.5 6.04 17.89L6.05 17.9C6.43 18.28 6.44 18.91 6.05 19.3L5.66 19.69Z" })));
};

var Icon$i = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M19 5H17C17 3.89543 16.1046 3 15 3H9C7.89543 3 7 3.89543 7 5H5C3.9 5 3 5.9 3 7V8C3 10.55 4.92 12.63 7.39 12.94C8.02 14.44 9.37 15.57 11 15.9V19H8C7.44772 19 7 19.4477 7 20C7 20.5523 7.44772 21 8 21H16C16.5523 21 17 20.5523 17 20C17 19.4477 16.5523 19 16 19H13V15.9C14.63 15.57 15.98 14.44 16.61 12.94C19.08 12.63 21 10.55 21 8V7C21 5.9 20.1 5 19 5ZM5 8V7H7V10.82C5.84 10.4 5 9.3 5 8ZM12 14C10.35 14 9 12.65 9 11V5H15V11C15 12.65 13.65 14 12 14ZM19 8C19 9.3 18.16 10.4 17 10.82V7H19V8Z" })));
};

var Icon$h = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 3C7.02985 3 3 7.02985 3 11.9904C3 16.9606 7.02985 21 12 21C16.9701 21 21 16.9606 21 11.9904C21 7.02985 16.9701 3 12 3ZM16.4328 8.65139C16.3753 9.48614 14.8305 15.7228 14.8305 15.7228C14.8305 15.7228 14.7345 16.0874 14.3987 16.097C14.2836 16.097 14.1301 16.0874 13.9574 15.9243C13.6023 15.6269 12.7964 15.0512 12.0384 14.5235C12.0096 14.5522 11.9808 14.581 11.9424 14.6098C11.7697 14.7633 11.5107 14.984 11.2324 15.2527C11.1269 15.3486 11.0117 15.4542 10.8966 15.5693L10.887 15.5789C10.8198 15.6461 10.7623 15.694 10.7143 15.7324C10.3401 16.0394 10.3017 15.7804 10.3017 15.6461L10.5032 13.4488V13.4296L10.5128 13.4104C10.5224 13.3817 10.5416 13.3721 10.5416 13.3721C10.5416 13.3721 14.4659 9.87953 14.5714 9.50533C14.581 9.48614 14.5522 9.46695 14.5043 9.48614C14.2452 9.57249 9.72601 12.4318 9.22708 12.7484C9.19829 12.7676 9.11194 12.758 9.11194 12.758L6.91471 12.0384C6.91471 12.0384 6.65565 11.9328 6.742 11.693C6.76119 11.645 6.78998 11.597 6.89552 11.5299C7.38486 11.1844 15.8955 8.12367 15.8955 8.12367C15.8955 8.12367 16.1354 8.04691 16.2793 8.09488C16.3465 8.12367 16.3849 8.15245 16.4232 8.2484C16.4328 8.28678 16.4424 8.36354 16.4424 8.44989C16.4424 8.49787 16.4328 8.55544 16.4328 8.65139Z" })));
};

var Icon$g = function (props) {
    return (React.createElement(Svg, __assign({ height: "24", viewBox: "0 0 24 24", fill: "none" }, props),
        React.createElement("path", { d: "M15.5598 4.17396C14.0817 4.53812 12.8192 5.45009 12 6.68221C11.1808 5.45009 9.91829 4.53812 8.44019 4.17396C9.10369 2.88308 10.4487 2 12 2C13.5513 2 14.8963 2.88308 15.5598 4.17396Z", fill: "white" }),
        React.createElement("path", { d: "M4.05673 14.0424C4.49248 10.3896 7.38955 7.49248 11.0424 7.05673C10.1331 5.81007 8.66115 5 7 5C4.23858 5 2 7.23858 2 10C2 11.6611 2.81007 13.1331 4.05673 14.0424Z", fill: "white" }),
        React.createElement("path", { d: "M19.9433 14.0424C21.1899 13.1331 22 11.6611 22 10C22 7.23858 19.7614 5 17 5C15.3389 5 13.8669 5.81007 12.9576 7.05673C16.6104 7.49248 19.5075 10.3896 19.9433 14.0424Z", fill: "white" }),
        React.createElement("path", { d: "M12 22C15.866 22 19 18.866 19 15C19 11.134 15.866 8 12 8C8.13401 8 5 11.134 5 15C5 18.866 8.13401 22 12 22ZM9.5 13.25C9.5 12.8358 9.83579 12.5 10.25 12.5H14.5C14.8125 12.5 15.0922 12.6937 15.2021 12.9862C15.3118 13.2782 15.2293 13.6076 14.995 13.8134L14.9942 13.8142L14.982 13.8252C14.9708 13.8353 14.9527 13.852 14.9285 13.8749C14.8801 13.9208 14.8073 13.9918 14.7162 14.0864C14.5338 14.276 14.28 14.5586 14.0034 14.9226C13.4473 15.6542 12.8157 16.693 12.4736 17.9473C12.3646 18.347 11.9523 18.5826 11.5527 18.4736C11.153 18.3646 10.9174 17.9523 11.0264 17.5527C11.4343 16.057 12.1777 14.8458 12.8091 14.0149L12.8205 14H10.25C9.83579 14 9.5 13.6642 9.5 13.25Z", fill: "white" })));
};

var Icon$f = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 20 20", fill: "none" }, props),
        React.createElement("path", { d: "M11.7011 13.75C11.7011 14.0214 11.8226 14.2855 12.0472 14.5022C12.2717 14.719 12.5872 14.8767 12.946 14.9516C13.3047 15.0264 13.6872 15.0143 14.0356 14.917C14.384 14.8198 14.6794 14.6427 14.8772 14.4125L19.4969 11.0538C19.6565 10.9376 19.7831 10.7998 19.8694 10.648C19.9557 10.4963 20.0001 10.3337 20 10.1696C19.9999 10.0054 19.9554 9.84281 19.8689 9.69114C19.7824 9.53948 19.6558 9.40168 19.4961 9.28563C19.3364 9.16957 19.1469 9.07752 18.9383 9.01475C18.7297 8.95197 18.5061 8.91969 18.2804 8.91975C18.0546 8.9198 17.8311 8.9522 17.6226 9.01509C17.4141 9.07797 17.2246 9.17011 17.065 9.28625L15.1401 10.6862V1.25C15.1401 0.918479 14.9591 0.600537 14.6368 0.366117C14.3145 0.131696 13.8773 0 13.4215 0C12.9657 0 12.5285 0.131696 12.2062 0.366117C11.8839 0.600537 11.7028 0.918479 11.7028 1.25V13.6875V13.75H11.7011Z", fill: "white" }),
        React.createElement("path", { d: "M8.3188 6.25C8.3188 5.97858 8.19733 5.71453 7.97275 5.49776C7.74816 5.28098 7.43267 5.12327 7.07395 5.04844C6.71522 4.97361 6.33275 4.98574 5.98434 5.08299C5.63593 5.18025 5.34051 5.35734 5.14272 5.58751L0.524685 8.94625C0.360536 9.06156 0.229605 9.1995 0.139532 9.352C0.0494585 9.50451 0.00204791 9.66853 6.48914e-05 9.8345C-0.00191812 10.0005 0.0415665 10.1651 0.127982 10.3187C0.214398 10.4723 0.342013 10.6119 0.503383 10.7292C0.664752 10.8466 0.856644 10.9394 1.06786 11.0023C1.27908 11.0651 1.50539 11.0968 1.73359 11.0953C1.96179 11.0939 2.18732 11.0594 2.397 10.9939C2.60668 10.9284 2.79633 10.8331 2.95487 10.7138L4.88148 9.31376V18.75C4.88148 19.0815 5.06255 19.3995 5.38487 19.6339C5.70718 19.8683 6.14432 20 6.60014 20C7.05596 20 7.4931 19.8683 7.81541 19.6339C8.13772 19.3995 8.3188 19.0815 8.3188 18.75V6.31251V6.25Z", fill: "white" })));
};

var Icon$e = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M8.65854 19C15.4488 19 19.1659 13.2338 19.1659 8.23717C19.1659 8.07728 19.1659 7.91739 19.1561 7.7475C19.878 7.21785 20.5024 6.5483 21 5.78881C20.3366 6.08861 19.6244 6.28847 18.8732 6.38841C19.6341 5.91872 20.2195 5.17921 20.5024 4.28981C19.7902 4.72951 19 5.03931 18.1512 5.20919C17.478 4.45969 16.522 4 15.4585 4C13.4195 4 11.761 5.69887 11.761 7.78747C11.761 8.08728 11.8 8.36709 11.8585 8.6469C8.79512 8.497 6.07317 6.97801 4.24878 4.68954C3.92683 5.25916 3.75122 5.90873 3.75122 6.59827C3.75122 7.90739 4.40488 9.06662 5.39024 9.74617C4.78537 9.72618 4.21951 9.5563 3.72195 9.27648C3.72195 9.28648 3.72195 9.30646 3.72195 9.32645C3.72195 11.1552 5 12.6942 6.67805 13.034C6.36585 13.1239 6.0439 13.1639 5.70244 13.1639C5.46829 13.1639 5.23415 13.1439 5.00976 13.0939C5.47805 14.6029 6.8439 15.6922 8.46341 15.7222C7.19512 16.7415 5.60488 17.3411 3.87805 17.3411C3.58537 17.3411 3.28293 17.3311 3 17.2911C4.62927 18.3704 6.57073 19 8.65854 19Z" })));
};

var Icon$d = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "none" }, props),
        React.createElement("path", { d: "M12 2C6.475 2 2 6.475 2 12C2 17.525 6.475 22 12 22C17.525 22 22 17.525 22 12C22 6.475 17.525 2 12 2ZM6.5 9L10 5.5L13.5 9H11V13H9V9H6.5ZM17.5 15L14 18.5L10.5 15H13V11H15V15H17.5Z", fill: "white" })));
};

var Icon$c = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "none" }, props),
        React.createElement("path", { d: "M7.99166 9.28662H5.9054V19.741H7.99166V9.28662Z", fill: "white" }),
        React.createElement("path", { d: "M18.1169 2.47314V4.23897H19.8911L18.1169 2.47314Z", fill: "white" }),
        React.createElement("path", { d: "M7.99166 7.19189H5.9054V8.84733H7.99166V7.19189Z", fill: "white" }),
        React.createElement("path", { d: "M18.0949 7.19189H8.43091V8.84733H18.0949V7.19189Z", fill: "white" }),
        React.createElement("path", { d: "M8.43091 19.741H18.0949V9.28662H8.43091V19.741ZM16.2108 10.7442H17.0515V11.581H16.2108V10.7442ZM16.2108 12.4189H17.0515V13.2556H16.2108V12.4189ZM16.2108 14.0937H17.0515V14.9305H16.2108V14.0937ZM16.2108 15.7684H17.0515V16.6051H16.2108V15.7684ZM16.2108 17.4432H17.0515V18.2799H16.2108V17.4432ZM14.5271 10.7442H15.3677V11.581H14.5271V10.7442ZM14.5271 12.4189H15.3677V13.2556H14.5271V12.4189ZM14.5271 14.0937H15.3677V14.9305H14.5271V14.0937ZM14.5271 15.7684H15.3677V16.6051H14.5271V15.7684ZM14.5271 17.4432H15.3677V18.2799H14.5271V17.4432ZM12.8433 10.7442H13.684V11.581H12.8433V10.7442ZM12.8433 12.4189H13.684V13.2556H12.8433V12.4189ZM12.8433 14.0937H13.684V14.9305H12.8433V14.0937ZM12.8433 15.7684H13.684V16.6051H12.8433V15.7684ZM12.8433 17.4432H13.684V18.2799H12.8433V17.4432ZM11.1595 10.7442H12.0002V11.581H11.1595V10.7442ZM11.1595 12.4189H12.0002V13.2556H11.1595V12.4189ZM11.1595 14.0937H12.0002V14.9305H11.1595V14.0937ZM11.1595 15.7684H12.0002V16.6051H11.1595V15.7684ZM11.1595 17.4432H12.0002V18.2799H11.1595V17.4432ZM9.47538 10.7442H10.3164V11.581H9.47538V10.7442ZM9.47538 12.4189H10.3164V13.2556H9.47538V12.4189ZM9.47538 14.0937H10.3164V14.9305H9.47538V14.0937ZM9.47538 15.7684H10.3164V16.6051H9.47538V15.7684ZM9.47538 17.4432H10.3164V18.2799H9.47538V17.4432Z", fill: "white" }),
        React.createElement("path", { d: "M17.8973 4.67802C17.776 4.67802 17.6776 4.57967 17.6776 4.45836V2.16406H3.79895L3.79918 3.81969H13.2629C13.3842 3.81969 13.4825 3.91803 13.4825 4.03934C13.4825 4.16066 13.3842 4.259 13.2629 4.259H3.79928L3.80195 21.8358H20.2011V4.67802H17.8973ZM13.2629 5.25233H15.3676C15.489 5.25233 15.5873 5.35067 15.5873 5.47198C15.5873 5.5933 15.489 5.69164 15.3676 5.69164H13.2629C13.1416 5.69164 13.0432 5.5933 13.0432 5.47198C13.0432 5.35067 13.1416 5.25233 13.2629 5.25233ZM5.68576 5.25233H11.5792C11.7005 5.25233 11.7988 5.35067 11.7988 5.47198C11.7988 5.5933 11.7005 5.69164 11.5792 5.69164H5.68576C5.5645 5.69164 5.46611 5.5933 5.46611 5.47198C5.46611 5.35067 5.56445 5.25233 5.68576 5.25233ZM18.5342 9.06701V19.9606C18.5342 20.0819 18.4359 20.1802 18.3145 20.1802H8.21129H5.68576C5.5645 20.1802 5.46611 20.0819 5.46611 19.9606V9.06701V6.97231C5.46611 6.851 5.56445 6.75266 5.68576 6.75266H8.21129H18.3146C18.4359 6.75266 18.5342 6.851 18.5342 6.97231V9.06701H18.5342Z", fill: "white" })));
};

var Icon$b = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 30 30", fill: "none" }, props),
        React.createElement("circle", { cx: "15", cy: "15", r: "15", fill: "white" }),
        React.createElement("path", { d: "M8.13778 9.90912H11.5511L15.1562 18.7046H15.3097L18.9148 9.90912H22.3281V23H19.6435V14.4794H19.5348L16.147 22.9361H14.3189L10.9311 14.4475H10.8224V23H8.13778V9.90912Z", fill: "#09092B" })));
};

var Icon$a = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 30 30", fill: "none" }, props),
        React.createElement("g", { clipPath: "url(#clip0_490_1410)" },
            React.createElement("path", { d: "M15.0001 0C6.71687 0 0 6.71563 0 15.0001C0 21.6276 4.29799 27.2503 10.258 29.2337C11.0077 29.3725 11.2829 28.9083 11.2829 28.5121C11.2829 28.1544 11.269 26.9728 11.2625 25.7194C7.08946 26.6268 6.2089 23.9496 6.2089 23.9496C5.52656 22.2158 4.54341 21.7547 4.54341 21.7547C3.18245 20.8238 4.64599 20.8429 4.64599 20.8429C6.15227 20.9487 6.94539 22.3887 6.94539 22.3887C8.28325 24.6818 10.4545 24.0189 11.3105 23.6356C11.4451 22.6661 11.8338 22.0044 12.2628 21.6298C8.93107 21.2505 5.42869 19.9643 5.42869 14.2167C5.42869 12.579 6.01466 11.2409 6.97421 10.1904C6.81846 9.81263 6.30503 8.28698 7.11952 6.22082C7.11952 6.22082 8.37913 5.81768 11.2456 7.75839C12.4421 7.42604 13.7254 7.25937 15.0001 7.25365C16.2749 7.25937 17.5591 7.42604 18.7579 7.75839C21.6209 5.81768 22.8787 6.22082 22.8787 6.22082C23.6952 8.28698 23.1815 9.81263 23.0258 10.1904C23.9876 11.2409 24.5696 12.579 24.5696 14.2167C24.5696 19.978 21.0605 21.2465 17.7203 21.6179C18.2583 22.0834 18.7377 22.9962 18.7377 24.3957C18.7377 26.4027 18.7203 28.018 18.7203 28.5121C18.7203 28.9113 18.9904 29.379 19.7507 29.2317C25.7075 27.246 30 21.6253 30 15.0001C30 6.71563 23.2841 0 15.0001 0ZM5.61803 21.368C5.585 21.4425 5.46775 21.4649 5.36094 21.4137C5.25215 21.3648 5.19104 21.2632 5.22631 21.1884C5.25861 21.1116 5.3761 21.0903 5.48465 21.1417C5.59369 21.1906 5.65579 21.2932 5.61803 21.368ZM6.35587 22.0264C6.28434 22.0927 6.14449 22.0619 6.0496 21.9571C5.95149 21.8525 5.9331 21.7126 6.00564 21.6453C6.07941 21.579 6.21503 21.61 6.3134 21.7146C6.41151 21.8204 6.43064 21.9593 6.35587 22.0264ZM6.86206 22.8687C6.77015 22.9325 6.61987 22.8727 6.52697 22.7393C6.43507 22.6059 6.43507 22.4459 6.52896 22.3819C6.62211 22.3178 6.77015 22.3754 6.8643 22.5078C6.95595 22.6434 6.95595 22.8034 6.86206 22.8687ZM7.71813 23.8443C7.63591 23.9349 7.46079 23.9106 7.33262 23.7869C7.20146 23.6659 7.16495 23.4943 7.24742 23.4036C7.33063 23.3127 7.50674 23.3383 7.63591 23.461C7.76607 23.5817 7.80581 23.7546 7.71813 23.8443ZM8.82451 24.1736C8.78825 24.2911 8.61959 24.3445 8.44968 24.2946C8.28003 24.2432 8.169 24.1056 8.20328 23.9868C8.23855 23.8686 8.40795 23.8129 8.5791 23.8664C8.7485 23.9175 8.85979 24.0541 8.82451 24.1736ZM10.0836 24.3133C10.0878 24.437 9.94378 24.5396 9.76543 24.5418C9.58609 24.5458 9.44103 24.4457 9.43904 24.324C9.43904 24.1991 9.57988 24.0975 9.75922 24.0945C9.93757 24.091 10.0836 24.1904 10.0836 24.3133ZM11.3206 24.2659C11.3419 24.3866 11.218 24.5106 11.0409 24.5436C10.8667 24.5754 10.7055 24.5009 10.6834 24.3812C10.6618 24.2575 10.788 24.1335 10.9619 24.1015C11.1392 24.0707 11.298 24.1432 11.3206 24.2659Z", fill: "white" })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "clip0_490_1410" },
                React.createElement("rect", { width: "30", height: "29.2969", fill: "white" })))));
};

var Icon$9 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 30 30", fill: "none" }, props),
        React.createElement("circle", { cx: "15", cy: "15", r: "15", fill: "white" }),
        React.createElement("path", { d: "M13.4524 20.6384C13.7804 20.6384 14.0757 20.9008 14.0757 21.2617C14.0757 21.5897 13.8132 21.885 13.4524 21.885C13.1243 21.885 12.8291 21.6225 12.8291 21.2617C12.8291 20.9008 13.1243 20.6384 13.4524 20.6384ZM23.0973 16.8329C22.7692 16.8329 22.474 16.5705 22.474 16.2096C22.474 15.8815 22.7364 15.5863 23.0973 15.5863C23.4253 15.5863 23.7206 15.8487 23.7206 16.2096C23.7206 16.5376 23.4253 16.8329 23.0973 16.8329ZM23.0973 14.3069C22.0475 14.3069 21.1945 15.1598 21.1945 16.2096C21.1945 16.4064 21.2273 16.6033 21.2929 16.8001L15.0271 20.1463C14.6662 19.6214 14.0757 19.3261 13.4524 19.3261C12.7306 19.3261 12.0745 19.7526 11.7465 20.3759L6.10389 17.4234C5.51338 17.0953 5.0541 16.144 5.11971 15.2254C5.15252 14.7661 5.31655 14.4053 5.54619 14.2741C5.71022 14.1756 5.87425 14.2084 6.10389 14.3069L6.13669 14.3397C7.64576 15.127 12.5338 17.6859 12.7306 17.7843C13.0587 17.9155 13.2227 17.9811 13.7804 17.7187L23.8846 12.4697C24.0486 12.4041 24.2127 12.2729 24.2127 12.0433C24.2127 11.748 23.9174 11.6168 23.9174 11.6168C23.3269 11.3543 22.4412 10.9279 21.5882 10.5342C19.7511 9.68124 17.6515 8.69707 16.7329 8.20499C15.9456 7.77851 15.2895 8.13937 15.1911 8.20499L14.9614 8.3034C10.7951 10.403 5.28374 13.1258 4.95568 13.3227C4.39799 13.6507 4.03712 14.3397 4.00432 15.1926C3.93871 16.5376 4.62763 17.9483 5.6118 18.4404L11.5824 21.5241C11.7137 22.4427 12.5338 23.1644 13.4524 23.1644C14.5022 23.1644 15.3223 22.3443 15.3551 21.2945L21.9163 17.7515C22.2443 18.0139 22.6708 18.1451 23.0973 18.1451C24.1471 18.1451 25 17.2922 25 16.2424C25 15.1598 24.1471 14.3069 23.0973 14.3069Z", fill: "#09092B" })));
};

var Icon$8 = function (props) {
    return (React.createElement(Svg, __assign({ width: "24", height: "20", viewBox: "0 0 24 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("path", { d: "M8.4 9.9999C11.0513 9.9999 13.2 7.85078 13.2 5.1999C13.2 2.54903 11.0513 0.399902 8.4 0.399902C5.74875 0.399902 3.6 2.54903 3.6 5.1999C3.6 7.85078 5.74875 9.9999 8.4 9.9999ZM10.3013 11.7999H6.49875C2.90887 11.7999 0 14.7099 0 18.2987C0 19.0187 0.582 19.5999 1.29975 19.5999H15.4987C16.2188 19.5999 16.8 19.0187 16.8 18.2987C16.8 14.7099 13.89 11.7999 10.3013 11.7999ZM17.9663 12.3999H15.1969C16.92 13.8137 18 15.9287 18 18.2987C18 18.7787 17.8575 19.2212 17.625 19.5999H22.8C23.4638 19.5999 24 19.0599 24 18.3662C24 15.0849 21.315 12.3999 17.9663 12.3999ZM16.2 9.9999C18.5213 9.9999 20.4 8.12115 20.4 5.7999C20.4 3.47865 18.5213 1.5999 16.2 1.5999C15.2584 1.5999 14.3985 1.92071 13.698 2.44403C14.13 3.27353 14.4 4.2024 14.4 5.1999C14.4 6.5319 13.9526 7.75515 13.2154 8.75153C13.9763 9.5199 15.03 9.9999 16.2 9.9999Z", fill: "white" })));
};

var IconModule = /*#__PURE__*/Object.freeze({
    __proto__: null,
    FarmIcon: Icon$w,
    GroupsIcon: Icon$v,
    HamburgerIcon: Icon$u,
    HamburgerCloseIcon: Icon$t,
    HomeIcon: Icon$s,
    IfoIcon: Icon$r,
    InfoIcon: Icon$q,
    LanguageIcon: Icon$p,
    LogoIcon: LogoWithText,
    MoonIcon: Icon$o,
    MoreIcon: Icon$n,
    NftIcon: Icon$m,
    PoolIcon: Icon$l,
    PredictionsIcon: Icon$k,
    SunIcon: Icon$j,
    TeamBattleIcon: Icon$i,
    TelegramIcon: Icon$h,
    TicketIcon: Icon$g,
    TradeIcon: Icon$f,
    TwitterIcon: Icon$e,
    DefiIcon: Icon$d,
    AuditIcon: Icon$c,
    MediumIcon: Icon$b,
    GithubIcon: Icon$a,
    GitbookIcon: Icon$9,
    ReferralIcon: Icon$8
});

var MenuButton = styled(Button)(templateObject_1$d || (templateObject_1$d = __makeTemplateObject(["\n  color: ", ";\n  padding: 0 8px;\n  border-radius: 8px;\n"], ["\n  color: ", ";\n  padding: 0 8px;\n  border-radius: 8px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
});
MenuButton.defaultProps = {
    variant: "text",
    size: "sm",
};
var templateObject_1$d;

var StyledLink = styled(Link$1)(templateObject_1$c || (templateObject_1$c = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  .mobile-icon {\n    width: 32px;\n    ", " {\n      display: none;\n    }\n  }\n  .desktop-icon {\n    width: 156px;\n    display: none;\n    ", " {\n      display: block;\n    }\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  .mobile-icon {\n    width: 32px;\n    ", " {\n      display: none;\n    }\n  }\n  .desktop-icon {\n    width: 156px;\n    display: none;\n    ", " {\n      display: block;\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
});
var Logo = function (_a) {
    var isPushed = _a.isPushed, togglePush = _a.togglePush, isDark = _a.isDark, href = _a.href;
    var isAbsoluteUrl = href.startsWith("http");
    var innerLogo = (React.createElement(React.Fragment, null,
        React.createElement(Icon$16, { className: "mobile-icon" }),
        React.createElement(LogoWithText, { className: "desktop-icon", isDark: isDark })));
    return (React.createElement(Flex, null,
        React.createElement(MenuButton, { "aria-label": "Toggle menu", onClick: togglePush, mr: "24px" }, isPushed ? (React.createElement(Icon$t, { width: "24px", color: "bright" })) : (React.createElement(Icon$u, { width: "24px", color: "bright" }))),
        isAbsoluteUrl ? (React.createElement(StyledLink, { as: "a", href: href, "aria-label": "Bridgeswap home page" }, innerLogo)) : (React.createElement(StyledLink, { to: href, "aria-label": "Bridgeswap home page" }, innerLogo))));
};
var Logo$1 = React.memo(Logo, function (prev, next) { return prev.isPushed === next.isPushed && prev.isDark === next.isDark; });
var templateObject_1$c;

var status = {
    LIVE: {
        text: "LIVE",
        color: "failure",
    },
    SOON: {
        text: "SOON",
        color: "warning",
    },
    NEW: {
        text: "NEW",
        color: "success",
    },
};
var links = [
    {
        label: "Home",
        icon: "HomeIcon",
        href: "/",
    },
    {
        label: "Trade",
        icon: "TradeIcon",
        items: [
            {
                label: "Exchange",
                href: "https://dex.bridgeswap.app",
            },
            {
                label: "Liquidity",
                href: "https://dex.bridgeswap/#/pool",
            },
        ],
    },
    {
        label: "Farms",
        icon: "FarmIcon",
        href: "/farms",
        status: status.LIVE,
    },
    {
        label: "Pools",
        icon: "PoolIcon",
        href: "/syrup",
    },
    {
        label: "DeFi 2.0 Zap",
        icon: "DefiIcon",
        href: "/defi",
    },
    {
        label: "Lottery",
        icon: "TicketIcon",
        href: "/lottery",
    },
    {
        label: "Referral Program",
        icon: "ReferralIcon",
        href: "/referral",
    },
    {
        label: "Audit",
        icon: "AuditIcon",
        href: "/audit",
    },
    {
        label: "NFT",
        icon: "NftIcon",
        href: "/nft",
    },
    {
        label: "Team Battle",
        icon: "TeamBattleIcon",
        href: "/competition",
        status: status.SOON,
    },
    {
        label: "Profile & Teams",
        icon: "GroupsIcon",
        items: [
            {
                label: "Leaderboard",
                href: "/teams",
                status: status.NEW,
            },
            {
                label: "YourProfile",
                href: "/",
            },
        ],
        calloutClass: "rainbow",
    },
    {
        label: "Info",
        icon: "InfoIcon",
        items: [
            {
                label: "Overview",
                href: "https://bridgeswap.info",
            },
            {
                label: "Tokens",
                href: "https://bridgeswap.info/tokens",
            },
            {
                label: "Pairs",
                href: "https://bridgeswap.info/pairs",
            },
            {
                label: "Accounts",
                href: "https://bridgeswap.info/accounts",
            },
        ],
    },
    {
        label: "IFO",
        icon: "IfoIcon",
        items: [
            {
                label: "Next",
                href: "/ifo",
            },
            {
                label: "History",
                href: "/ifo/history",
            },
        ],
    },
    {
        label: "More",
        icon: "MoreIcon",
        items: [
            {
                label: "Voting",
                href: "https://voting.bridgeswap.app",
            },
            {
                label: "Github",
                href: "https://github.com/Bridgeswap-Dex",
            },
            {
                label: "Docs",
                href: "https://docs.bridgeswap.app",
            },
            {
                label: "Blog",
                href: "https://bridgeswap.medium.com",
            },
        ],
    },
];
var socials = [
    {
        label: "Github",
        icon: "GithubIcon",
        href: "https://github.com/Bridgeswap-Dex",
    },
    {
        label: "Twitter",
        icon: "TwitterIcon",
        href: "https://twitter.com/bridgeswap_dex",
    },
    {
        label: "Medium",
        icon: "MediumIcon",
        href: "https://bridgeswap.medium.com",
    },
    {
        label: "Gitbook",
        icon: "GitbookIcon",
        href: "https://bridgeswap-exchange-1.gitbook.io/bridgeswap/",
    },
    {
        label: "Telegram",
        icon: "TelegramIcon",
        items: [
            {
                label: "English",
                href: "https://t.me/bridgeswap",
            },
            // {
            //   label: "Bahasa Indonesia",
            //   href: "https://t.me/PancakeSwapIndonesia",
            // },
            // {
            //   label: "中文",
            //   href: "https://t.me/PancakeSwap_CN",
            // },
            // {
            //   label: "Tiếng Việt",
            //   href: "https://t.me/PancakeSwapVN",
            // },
            // {
            //   label: "Italiano",
            //   href: "https://t.me/pancakeswap_ita",
            // },
            // {
            //   label: "русский",
            //   href: "https://t.me/pancakeswap_ru",
            // },
            // {
            //   label: "Türkiye",
            //   href: "https://t.me/pancakeswapturkiye",
            // },
            // {
            //   label: "Português",
            //   href: "https://t.me/PancakeSwapPortuguese",
            // },
            // {
            //   label: "Español",
            //   href: "https://t.me/PancakeswapEs",
            // },
            // {
            //   label: "日本語",
            //   href: "https://t.me/pancakeswapjp",
            // },
            // {
            //   label: "Français",
            //   href: "https://t.me/pancakeswapfr",
            // },
            // {
            //   label: "Announcements",
            //   href: "https://t.me/PancakeSwapAnn",
            // },
            // {
            //   label: "Whale Alert",
            //   href: "https://t.me/PancakeSwapWhales",
            // },
        ],
    },
];
var MENU_HEIGHT = 64;
var MENU_ENTRY_HEIGHT = 48;
var SIDEBAR_WIDTH_FULL = 240;
var SIDEBAR_WIDTH_REDUCED = 56;

var rainbowAnimation = keyframes(templateObject_1$b || (templateObject_1$b = __makeTemplateObject(["\n  0%,\n  100% {\n    background-position: 0 0;\n  }\n  50% {\n    background-position: 100% 0;\n  }\n"], ["\n  0%,\n  100% {\n    background-position: 0 0;\n  }\n  50% {\n    background-position: 100% 0;\n  }\n"])));
var LinkLabel = styled.div(templateObject_2$4 || (templateObject_2$4 = __makeTemplateObject(["\n  color: ", ";\n  transition: color 0.4s;\n  flex-grow: 1;\n"], ["\n  color: ", ";\n  transition: color 0.4s;\n  flex-grow: 1;\n"])), function (_a) {
    var isPushed = _a.isPushed, theme = _a.theme;
    return (isPushed ? theme.colors.bright : "transparent");
});
var MenuEntry = styled.div(templateObject_3$2 || (templateObject_3$2 = __makeTemplateObject(["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  height: ", "px;\n  padding: ", ";\n  font-size: ", ";\n  background-color: ", ";\n  color: ", ";\n  box-shadow: ", ";\n\n  a {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n  }\n  \n  svg {\n    fill: ", ";\n  }\n\n  &:hover {\n    background-color: ", ";\n  }\n\n  // Safari fix\n  flex-shrink: 0;\n\n  &.rainbow {\n    background-clip: text;\n    animation: ", " 3s ease-in-out infinite;\n    background: ", ";\n    background-size: 400% 100%;\n  }\n"], ["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  height: ", "px;\n  padding: ", ";\n  font-size: ", ";\n  background-color: ", ";\n  color: ", ";\n  box-shadow: ", ";\n\n  a {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n  }\n  \n  svg {\n    fill: ", ";\n  }\n\n  &:hover {\n    background-color: ", ";\n  }\n\n  // Safari fix\n  flex-shrink: 0;\n\n  &.rainbow {\n    background-clip: text;\n    animation: ", " 3s ease-in-out infinite;\n    background: ", ";\n    background-size: 400% 100%;\n  }\n"])), MENU_ENTRY_HEIGHT, function (_a) {
    var secondary = _a.secondary;
    return (secondary ? "0 32px" : "0 16px");
}, function (_a) {
    var secondary = _a.secondary;
    return (secondary ? "14px" : "16px");
}, function (_a) {
    var secondary = _a.secondary, theme = _a.theme;
    return (secondary ? theme.colors.background : "transparent");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var isActive = _a.isActive, theme = _a.theme;
    return (isActive ? "inset 4px 0px 0px " + theme.colors.primary : "none");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.bright;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.menuHover;
}, rainbowAnimation, function (_a) {
    var theme = _a.theme;
    return theme.colors.gradients.bubblegum;
});
MenuEntry.defaultProps = {
    secondary: false,
    isActive: false,
    role: "button",
};
var LinkStatus = styled(Text)(templateObject_4$1 || (templateObject_4$1 = __makeTemplateObject(["\n  border-radius: ", ";\n  padding: 0 8px;\n  border: 2px solid;\n  border-color: ", ";\n  box-shadow: none;\n  color: ", ";\n"], ["\n  border-radius: ", ";\n  padding: 0 8px;\n  border: 2px solid;\n  border-color: ", ";\n  box-shadow: none;\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.radii.default;
}, function (_a) {
    var theme = _a.theme, color = _a.color;
    return theme.colors[color];
}, function (_a) {
    var theme = _a.theme, color = _a.color;
    return theme.colors[color];
});
var LinkLabelMemo = React.memo(LinkLabel, function (prev, next) { return prev.isPushed === next.isPushed; });
var templateObject_1$b, templateObject_2$4, templateObject_3$2, templateObject_4$1;

var Container$2 = styled.div(templateObject_1$a || (templateObject_1$a = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  // Safari fix\n  flex-shrink: 0;\n"], ["\n  display: flex;\n  flex-direction: column;\n  // Safari fix\n  flex-shrink: 0;\n"])));
var AccordionContent = styled.div(templateObject_2$3 || (templateObject_2$3 = __makeTemplateObject(["\n  max-height: ", ";\n  transition: max-height 0.3s ease-out;\n  overflow: hidden;\n  border-color: ", ";\n  border-style: solid;\n  border-width: 1px 0;\n"], ["\n  max-height: ", ";\n  transition: max-height 0.3s ease-out;\n  overflow: hidden;\n  border-color: ", ";\n  border-style: solid;\n  border-width: 1px 0;\n"])), function (_a) {
    var isOpen = _a.isOpen, maxHeight = _a.maxHeight;
    return (isOpen ? maxHeight + "px" : 0);
}, function (_a) {
    var isOpen = _a.isOpen, isPushed = _a.isPushed;
    return (isOpen && isPushed ? "rgba(133, 133, 133, 0.1)" : "transparent");
});
var Accordion = function (_a) {
    var label = _a.label, icon = _a.icon, isPushed = _a.isPushed, pushNav = _a.pushNav, _b = _a.initialOpenState, initialOpenState = _b === void 0 ? false : _b, children = _a.children, className = _a.className, isActive = _a.isActive;
    var _c = useState(initialOpenState), isOpen = _c[0], setIsOpen = _c[1];
    var handleClick = function () {
        if (isPushed) {
            setIsOpen(function (prevState) { return !prevState; });
        }
        else {
            pushNav(true);
            setIsOpen(true);
        }
    };
    return (React.createElement(Container$2, null,
        React.createElement(MenuEntry, { onClick: handleClick, className: className, isActive: isActive },
            icon,
            React.createElement(LinkLabelMemo, { isPushed: isPushed }, label),
            isOpen ? React.createElement(Icon$1w, null) : React.createElement(Icon$1x, null)),
        React.createElement(AccordionContent, { isOpen: isOpen, isPushed: isPushed, maxHeight: React.Children.count(children) * MENU_ENTRY_HEIGHT }, children)));
};
var Accordion$1 = React.memo(Accordion, function (prev, next) { return prev.isPushed === next.isPushed && prev.isActive === next.isActive; });
var templateObject_1$a, templateObject_2$3;

var MenuLink = function (_a) {
    var href = _a.href, otherProps = __rest(_a, ["href"]);
    var isHttpLink = href === null || href === void 0 ? void 0 : href.startsWith("http");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var Tag = isHttpLink ? "a" : NavLink;
    var props = isHttpLink ? { href: href } : { to: href };
    return React.createElement(Tag, __assign({}, props, otherProps));
};

var Icons$1 = IconModule;
var Container$1 = styled.div(templateObject_1$9 || (templateObject_1$9 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  overflow-x: hidden;\n  height: 100%;\n"], ["\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  overflow-x: hidden;\n  height: 100%;\n"])));
var PanelBody = function (_a) {
    var isPushed = _a.isPushed, pushNav = _a.pushNav, isMobile = _a.isMobile, links = _a.links;
    var location = useLocation();
    console.log("links: ", links);
    // Close the menu when a user clicks a link on mobile
    var handleClick = isMobile ? function () { return pushNav(false); } : undefined;
    return (React.createElement(Container$1, null, links.map(function (entry) {
        var Icon = Icons$1[entry.icon];
        var iconElement = React.createElement(Icon, { width: "24px", mr: "8px" });
        var calloutClass = entry.calloutClass ? entry.calloutClass : undefined;
        if (entry.items) {
            var itemsMatchIndex = entry.items.findIndex(function (item) { return item.href === location.pathname; });
            var initialOpenState = entry.initialOpenState === true ? entry.initialOpenState : itemsMatchIndex >= 0;
            return (React.createElement(Accordion$1, { key: entry.label, isPushed: isPushed, pushNav: pushNav, icon: iconElement, label: entry.label, initialOpenState: initialOpenState, className: calloutClass, isActive: entry.items.some(function (item) { return item.href === location.pathname; }) }, isPushed &&
                entry.items.map(function (item) { return (React.createElement(MenuEntry, { key: item.href, secondary: true, isActive: item.href === location.pathname, onClick: handleClick },
                    React.createElement(MenuLink, { href: item.href },
                        React.createElement(LinkLabelMemo, { isPushed: isPushed }, item.label),
                        item.status && (React.createElement(LinkStatus, { color: item.status.color, fontSize: "14px" }, item.status.text))))); })));
        }
        return (React.createElement(MenuEntry, { key: entry.label, isActive: entry.href === location.pathname, className: calloutClass },
            React.createElement(MenuLink, { href: entry.href, onClick: handleClick },
                iconElement,
                React.createElement(LinkLabelMemo, { isPushed: isPushed }, entry.label),
                entry.status && (React.createElement(LinkStatus, { color: entry.status.color, fontSize: "14px" }, entry.status.text)))));
    })));
};
var templateObject_1$9;

var PriceLink = styled.a(templateObject_1$8 || (templateObject_1$8 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  svg {\n    transition: transform 0.3s;\n  }\n  :hover {\n    svg {\n      transform: scale(1.2);\n    }\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  svg {\n    transition: transform 0.3s;\n  }\n  :hover {\n    svg {\n      transform: scale(1.2);\n    }\n  }\n"])));
var CakePrice = function (_a) {
    var cakePriceUsd = _a.cakePriceUsd;
    return cakePriceUsd ? (React.createElement(PriceLink, { style: { pointerEvents: "none", cursor: "default" }, href: "#", target: "_blank" },
        React.createElement(WhiteBGLogo, { width: "24px", mr: "8px" }),
        React.createElement(Text, { color: "bright", bold: true }, "$" + cakePriceUsd.toFixed(3)))) : (React.createElement(Skeleton, { width: 80, height: 24 }));
};
var CakePrice$1 = React.memo(CakePrice);
var templateObject_1$8;

var Icons = IconModule;
var SocialLinks = function () { return (React.createElement(Flex, null, socials.map(function (social, index) {
    var Icon = Icons[social.icon];
    var iconProps = { width: "24px", color: "bright", style: { cursor: "pointer" } };
    var mr = index < socials.length - 1 ? "24px" : 0;
    if (social.items) {
        return (React.createElement(Dropdown, { key: social.label, position: "top", target: React.createElement(Icon, __assign({}, iconProps, { mr: mr })) }, social.items.map(function (item) { return (React.createElement(Link, { external: true, key: item.label, href: item.href, "aria-label": item.label, color: "textSubtle" }, item.label)); })));
    }
    return (React.createElement(Link, { external: true, key: social.label, href: social.href, "aria-label": social.label, mr: mr },
        React.createElement(Icon, __assign({}, iconProps))));
}))); };
var SocialLinks$1 = React.memo(SocialLinks, function () { return true; });

var Container = styled.div(templateObject_1$7 || (templateObject_1$7 = __makeTemplateObject(["\n  flex: none;\n  padding: 8px 4px;\n  background-color: ", ";\n  border-top: solid 2px rgba(133, 133, 133, 0.1);\n"], ["\n  flex: none;\n  padding: 8px 4px;\n  background-color: ", ";\n  border-top: solid 2px rgba(133, 133, 133, 0.1);\n"])), function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
});
var SettingsEntry = styled.div(templateObject_2$2 || (templateObject_2$2 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px;\n  padding: 0 8px;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px;\n  padding: 0 8px;\n"])), MENU_ENTRY_HEIGHT);
var SocialEntry = styled.div(templateObject_3$1 || (templateObject_3$1 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px;\n  padding: 0 16px;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px;\n  padding: 0 16px;\n"])), MENU_ENTRY_HEIGHT);
var PanelFooter = function (_a) {
    var isPushed = _a.isPushed, pushNav = _a.pushNav; _a.toggleTheme; _a.isDark; var cakePriceUsd = _a.cakePriceUsd; _a.currentLang; _a.langs; _a.setLang;
    if (!isPushed) {
        return (React.createElement(Container, null,
            React.createElement(IconButton, { variant: "text", onClick: function () { return pushNav(true); } },
                React.createElement(Icon$1f, null))));
    }
    return (React.createElement(Container, null,
        React.createElement(SocialEntry, null,
            React.createElement(CakePrice$1, { cakePriceUsd: cakePriceUsd })),
        React.createElement(SettingsEntry, null,
            React.createElement(SocialLinks$1, null))));
};
var templateObject_1$7, templateObject_2$2, templateObject_3$1;

var StyledPanel = styled.div(templateObject_1$6 || (templateObject_1$6 = __makeTemplateObject(["\n  position: fixed;\n  padding-top: ", ";\n  top: 0;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  flex-shrink: 0;\n  background-color: ", ";\n  width: ", ";\n  height: 100vh;\n  transition: padding-top 0.2s, width 0.2s;\n  border-right: ", ";\n  z-index: 11;\n  overflow: ", ";\n  transform: translate3d(0, 0, 0);\n\n  ", " {\n    z-index: initial;\n    border-right: 2px solid rgba(133, 133, 133, 0.1);\n    width: ", ";\n  }\n"], ["\n  position: fixed;\n  padding-top: ", ";\n  top: 0;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  flex-shrink: 0;\n  background-color: ", ";\n  width: ", ";\n  height: 100vh;\n  transition: padding-top 0.2s, width 0.2s;\n  border-right: ", ";\n  z-index: 11;\n  overflow: ", ";\n  transform: translate3d(0, 0, 0);\n\n  ", " {\n    z-index: initial;\n    border-right: 2px solid rgba(133, 133, 133, 0.1);\n    width: ", ";\n  }\n"])), function (_a) {
    var showMenu = _a.showMenu;
    return (showMenu ? "80px" : 0);
}, function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? SIDEBAR_WIDTH_FULL + "px" : 0);
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? "2px solid rgba(133, 133, 133, 0.1)" : 0);
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? "initial" : "hidden");
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED) + "px";
});
var Panel = function (props) {
    var isPushed = props.isPushed, showMenu = props.showMenu;
    return (React.createElement(StyledPanel, { isPushed: isPushed, showMenu: showMenu },
        React.createElement(PanelBody, __assign({}, props)),
        React.createElement(PanelFooter, __assign({}, props))));
};
var templateObject_1$6;

var Icon$BitKeep = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 96 96"}, props),
        React.createElement("path", {fillRule:"evenodd", clipRule:"evenodd", d: "M810.977 0.824219C1258.37 0.824219 1620.98 363.406 1620.98 810.78C1620.98 1258.15 1258.37 1620.74 810.977 1620.74C363.578 1620.74 0.976562 1258.15 0.976562 810.78C0.976563 363.564 363.578 0.824219 810.977 0.824219Z", transform:"matrix(.059259 0 0 0.059259-.057761-.046137)", fill: "#7524F9" }),
        React.createElement("path", {fillRule:"evenodd", clipRule:"evenodd", d: "M1314.7 561.306V618.573C1314.7 629.805 1308.68 640.245 1299.03 645.782L1114.57 752.247L1279.26 847.005C1301.25 859.661 1314.7 883.073 1314.7 908.384V1060.88C1314.7 1086.2 1301.09 1109.61 1279.1 1122.26L845.939 1370.79C824.107 1383.28 797.213 1383.28 775.223 1370.63L633.473 1288.68C623.031 1282.67 623.031 1267.49 633.473 1261.47L1101.44 992.07C1106.66 989.064 1106.66 981.471 1101.44 978.465L927.572 878.012C917.922 872.317 905.898 872.317 896.09 878.012L420.531 1152C413.254 1156.12 404.236 1156.28 396.959 1152L343.17 1121.16C321.18 1108.5 307.574 1085.09 307.574 1059.62V997.132C307.574 988.747 312.162 980.838 319.439 976.725L1001.14 585.035C1006.36 582.029 1006.36 574.436 1001.14 571.431L827.113 470.661C817.463 464.966 805.439 464.966 795.631 470.661L331.146 737.851C320.705 743.863 307.574 736.269 307.574 724.246V560.515C307.574 535.204 321.18 511.791 343.17 499.136L776.33 250.612C798.162 238.115 825.057 238.115 846.889 250.612L1279.1 499.927C1301.09 512.741 1314.7 535.995 1314.7 561.306Z", transform:"matrix(.059259 0 0 0.059259 0.091555-.134272)", fill: "white" })));
};

var Icon$HyperWallet = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 96 96"}, props),
        React.createElement("g", {transform: "matrix(1.161946 0 0 1.161946-23.622346-14.930994)"},
            React.createElement("circle", { r: "41.31", transform: "translate(61.64 54.16)", fill: "#2386e3" }),
            React.createElement("path", {d: "M42.06,37.18L37.2,42.11l6.38,4.81l14.13.01-4.31,5.56l2.11,4.81l11.32.04c0,0,.03-1.1.7-5.48c1.07-6.98,13.06-7.39,12.95.44-.09,5.76-4.52,6.45-7.39,6.54s-37.63-.02-37.63-.02l-5.33,4.75l4.58,4.81h17.53l-5.07,6.84l3.82,4.81h11.07L65.1,68.11c0,0,6.78-.14,9.57-.14c4.95,0,18.08-3.23,18.08-16.96c0-12.43-13.56-13.73-18.6-13.73-5.06-.02-32.09-.1-32.09-.1Z", fill: "#2665a3"}),
            React.createElement("path", {d: "M39.95,32.37l-2.74,9.74l18.39.01-2.2,10.37l11.32.04c0,0,.03-1.1.7-5.48c1.07-6.98,13.06-7.39,12.95.44-.09,5.76-4.52,6.45-7.39,6.54s-37.63-.02-37.63-.02l-3.22,9.56h19.99L47.17,75.22h12.78L62.99,63.3c0,0,6.78-.14,9.57-.14c4.95,0,18.08-3.23,18.08-16.96c0-12.43-13.56-13.73-18.6-13.73-5.07-.02-32.09-.1-32.09-.1Z", fill: "#fff"}))));
};

var Icon$7 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React.createElement("circle", { cx: "48", cy: "48", r: "48", fill: "white" }),
        React.createElement("path", { d: "M77.7602 16.9155L51.9419 36.0497L56.7382 24.7733L77.7602 16.9155Z", fill: "#E17726" }),
        React.createElement("path", { d: "M18.2656 16.9155L43.8288 36.2283L39.2622 24.7733L18.2656 16.9155Z", fill: "#E27625" }),
        React.createElement("path", { d: "M68.4736 61.2808L61.6108 71.7918L76.3059 75.8482L80.4899 61.5104L68.4736 61.2808Z", fill: "#E27625" }),
        React.createElement("path", { d: "M15.5356 61.5104L19.6941 75.8482L34.3892 71.7918L27.5519 61.2808L15.5356 61.5104Z", fill: "#E27625" }),
        React.createElement("path", { d: "M33.5984 43.5251L29.491 49.699L44.0584 50.3624L43.5482 34.6724L33.5984 43.5251Z", fill: "#E27625" }),
        React.createElement("path", { d: "M62.4274 43.525L52.2991 34.4937L51.9419 50.3622L66.5094 49.6989L62.4274 43.525Z", fill: "#E27625" }),
        React.createElement("path", { d: "M34.3892 71.7922L43.1654 67.5316L35.6137 61.6128L34.3892 71.7922Z", fill: "#E27625" }),
        React.createElement("path", { d: "M52.8345 67.5316L61.6107 71.7922L60.3861 61.6128L52.8345 67.5316Z", fill: "#E27625" }),
        React.createElement("path", { d: "M61.6107 71.7923L52.8345 67.5317L53.5233 73.2465L53.4468 75.6446L61.6107 71.7923Z", fill: "#D5BFB2" }),
        React.createElement("path", { d: "M34.3892 71.7923L42.5531 75.6446L42.502 73.2465L43.1654 67.5317L34.3892 71.7923Z", fill: "#D5BFB2" }),
        React.createElement("path", { d: "M42.7062 57.8369L35.4097 55.6939L40.5631 53.3213L42.7062 57.8369Z", fill: "#233447" }),
        React.createElement("path", { d: "M53.2937 57.8369L55.4367 53.3213L60.6412 55.6939L53.2937 57.8369Z", fill: "#233447" }),
        React.createElement("path", { d: "M34.3893 71.7918L35.6649 61.2808L27.552 61.5104L34.3893 71.7918Z", fill: "#CC6228" }),
        React.createElement("path", { d: "M60.3352 61.2808L61.6108 71.7918L68.4736 61.5104L60.3352 61.2808Z", fill: "#CC6228" }),
        React.createElement("path", { d: "M66.5094 49.6987L51.9419 50.362L53.294 57.8371L55.4371 53.3215L60.6416 55.6941L66.5094 49.6987Z", fill: "#CC6228" }),
        React.createElement("path", { d: "M35.4098 55.6941L40.5633 53.3215L42.7063 57.8371L44.0584 50.362L29.491 49.6987L35.4098 55.6941Z", fill: "#CC6228" }),
        React.createElement("path", { d: "M29.491 49.6987L35.6139 61.6129L35.4098 55.6941L29.491 49.6987Z", fill: "#E27525" }),
        React.createElement("path", { d: "M60.6414 55.6941L60.3862 61.6129L66.5092 49.6987L60.6414 55.6941Z", fill: "#E27525" }),
        React.createElement("path", { d: "M44.0584 50.3618L42.7063 57.8369L44.4156 66.6641L44.7728 55.0305L44.0584 50.3618Z", fill: "#E27525" }),
        React.createElement("path", { d: "M51.9415 50.3618L51.2527 55.005L51.5843 66.6641L53.2937 57.8369L51.9415 50.3618Z", fill: "#E27525" }),
        React.createElement("path", { d: "M53.2938 57.8374L51.5845 66.6646L52.8346 67.532L60.3862 61.6132L60.6413 55.6943L53.2938 57.8374Z", fill: "#F5841F" }),
        React.createElement("path", { d: "M35.4097 55.6943L35.6138 61.6132L43.1654 67.532L44.4155 66.6646L42.7062 57.8374L35.4097 55.6943Z", fill: "#F5841F" }),
        React.createElement("path", { d: "M53.4468 75.6443L53.5233 73.2462L52.8855 72.6849H43.1143L42.502 73.2462L42.5531 75.6443L34.3892 71.792L37.2465 74.1391L43.0378 78.1445H52.962L58.7533 74.1391L61.6107 71.792L53.4468 75.6443Z", fill: "#C0AC9D" }),
        React.createElement("path", { d: "M52.8346 67.5315L51.5845 66.6641H44.4156L43.1655 67.5315L42.5022 73.2462L43.1145 72.6849H52.8857L53.5235 73.2462L52.8346 67.5315Z", fill: "#161616" }),
        React.createElement("path", { d: "M78.8314 37.2998L80.9999 26.7377L77.7599 16.9155L52.8345 35.4119L62.4271 43.5247L75.9485 47.4791L78.9335 43.984L77.6323 43.04L79.7243 41.1521L78.1426 39.902L80.2091 38.3458L78.8314 37.2998Z", fill: "#763E1A" }),
        React.createElement("path", { d: "M15 26.7377L17.194 37.2998L15.7909 38.3458L17.8574 39.902L16.2756 41.1521L18.3676 43.04L17.0665 43.984L20.0514 47.4791L33.5984 43.5247L43.1655 35.4119L18.2656 16.9155L15 26.7377Z", fill: "#763E1A" }),
        React.createElement("path", { d: "M75.9487 47.4793L62.4272 43.5249L66.5092 49.6989L60.3862 61.613L68.4736 61.511H80.4898L75.9487 47.4793Z", fill: "#F5841F" }),
        React.createElement("path", { d: "M33.5983 43.5249L20.0513 47.4793L15.5356 61.511H27.5519L35.6137 61.613L29.4908 49.6989L33.5983 43.5249Z", fill: "#F5841F" }),
        React.createElement("path", { d: "M51.9415 50.3617L52.8344 35.4115L56.7378 24.7729H39.262L43.1653 35.4115L44.0583 50.3617L44.3899 55.0559L44.4154 66.664H51.5843L51.6099 55.0559L51.9415 50.3617Z", fill: "#F5841F" })));
};

var Icon$6 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React.createElement("circle", { cx: "48", cy: "48", r: "48", fill: "white" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M66.4573 43.7107C64.8919 42.1452 64.8919 39.6071 66.4573 38.0416C68.0228 36.4762 70.5609 36.4762 72.1264 38.0416C73.6918 39.6071 73.6918 42.1452 72.1264 43.7107C70.5609 45.2762 68.0228 45.2762 66.4573 43.7107ZM52.9933 57.1747C51.8192 56.0006 51.8192 54.097 52.9933 52.9229C54.1674 51.7488 56.071 51.7488 57.2451 52.9229C58.4192 54.097 58.4192 56.0006 57.2451 57.1747C56.071 58.3488 54.1674 58.3488 52.9933 57.1747ZM74.2523 50.0884C73.0782 48.9143 73.0782 47.0107 74.2523 45.8366C75.4263 44.6625 77.3299 44.6625 78.504 45.8366C79.6781 47.0107 79.6781 48.9143 78.504 50.0884C77.3299 51.2625 75.4263 51.2625 74.2523 50.0884ZM67.166 57.1747C65.9919 56.0006 65.9919 54.097 67.166 52.9229C68.34 51.7488 70.2436 51.7488 71.4177 52.9229C72.5918 54.097 72.5918 56.0006 71.4177 57.1747C70.2436 58.3488 68.34 58.3488 67.166 57.1747ZM82.0472 56.466C81.2645 55.6833 81.2645 54.4142 82.0472 53.6315C82.8299 52.8488 84.099 52.8488 84.8817 53.6315C85.6644 54.4142 85.6644 55.6833 84.8817 56.466C84.099 57.2488 82.8299 57.2488 82.0472 56.466ZM74.9609 63.5523C74.1782 62.7696 74.1782 61.5005 74.9609 60.7178C75.7436 59.9351 77.0127 59.9351 77.7954 60.7178C78.5781 61.5005 78.5781 62.7696 77.7954 63.5523C77.0127 64.3351 75.7436 64.3351 74.9609 63.5523ZM59.371 50.797C57.8056 49.2315 57.8056 46.6934 59.371 45.1279C60.9365 43.5625 63.4746 43.5625 65.0401 45.1279C66.6055 46.6934 66.6055 49.2315 65.0401 50.797C63.4746 52.3625 60.9365 52.3625 59.371 50.797ZM59.371 36.6244C57.8056 35.0589 57.8056 32.5208 59.371 30.9553C60.9365 29.3899 63.4746 29.3899 65.0401 30.9553C66.6055 32.5208 66.6055 35.0589 65.0401 36.6244C63.4746 38.1898 60.9365 38.1898 59.371 36.6244ZM52.2847 43.7107C50.7193 42.1452 50.7193 39.6071 52.2847 38.0416C53.8502 36.4762 56.3883 36.4762 57.9538 38.0416C59.5192 39.6071 59.5192 42.1452 57.9538 43.7107C56.3883 45.2762 53.8502 45.2762 52.2847 43.7107ZM38.0462 43.7107C36.4808 42.1452 36.4808 39.6071 38.0462 38.0416C39.6117 36.4762 42.1498 36.4762 43.7153 38.0416C45.2807 39.6071 45.2807 42.1452 43.7153 43.7107C42.1498 45.2762 39.6117 45.2762 38.0462 43.7107ZM24.5823 57.1747C23.4082 56.0006 23.4082 54.097 24.5823 52.9229C25.7564 51.7488 27.66 51.7488 28.8341 52.9229C30.0081 54.097 30.0081 56.0006 28.8341 57.1747C27.66 58.3488 25.7564 58.3488 24.5823 57.1747ZM45.8412 50.0884C44.6671 48.9143 44.6671 47.0107 45.8412 45.8366C47.0153 44.6625 48.9189 44.6625 50.093 45.8366C51.2671 47.0107 51.2671 48.9143 50.093 50.0884C48.9189 51.2625 47.0153 51.2625 45.8412 50.0884ZM38.7549 57.1747C37.5808 56.0006 37.5808 54.097 38.7549 52.9229C39.929 51.7488 41.8326 51.7488 43.0067 52.9229C44.1807 54.097 44.1807 56.0006 43.0067 57.1747C41.8326 58.3488 39.929 58.3488 38.7549 57.1747ZM11.1183 56.466C10.3356 55.6833 10.3356 54.4142 11.1183 53.6315C11.901 52.8488 13.1701 52.8488 13.9528 53.6315C14.7356 54.4142 14.7356 55.6833 13.9528 56.466C13.1701 57.2488 11.901 57.2488 11.1183 56.466ZM18.2046 63.5523C17.4219 62.7696 17.4219 61.5005 18.2046 60.7178C18.9873 59.9351 20.2564 59.9351 21.0391 60.7178C21.8219 61.5005 21.8219 62.7696 21.0391 63.5523C20.2564 64.3351 18.9873 64.3351 18.2046 63.5523ZM46.5498 63.5523C45.7671 62.7696 45.7671 61.5005 46.5498 60.7178C47.3325 59.9351 48.6016 59.9351 49.3843 60.7178C50.1671 61.5005 50.1671 62.7696 49.3843 63.5523C48.6016 64.3351 47.3325 64.3351 46.5498 63.5523ZM17.496 50.0884C16.3219 48.9143 16.3219 47.0107 17.496 45.8366C18.6701 44.6625 20.5737 44.6625 21.7478 45.8366C22.9218 47.0107 22.9218 48.9143 21.7478 50.0884C20.5737 51.2625 18.6701 51.2625 17.496 50.0884ZM30.9599 50.797C29.3945 49.2315 29.3945 46.6934 30.9599 45.1279C32.5254 43.5625 35.0635 43.5625 36.629 45.1279C38.1944 46.6934 38.1944 49.2315 36.629 50.797C35.0635 52.3625 32.5254 52.3625 30.9599 50.797ZM30.9599 36.6244C29.3945 35.0589 29.3945 32.5208 30.9599 30.9553C32.5254 29.3899 35.0635 29.3899 36.629 30.9553C38.1944 32.5208 38.1944 35.0589 36.629 36.6244C35.0635 38.1898 32.5254 38.1898 30.9599 36.6244ZM23.8736 43.7107C22.3082 42.1452 22.3082 39.6071 23.8736 38.0416C25.4391 36.4762 27.9772 36.4762 29.5427 38.0416C31.1081 39.6071 31.1081 42.1452 29.5427 43.7107C27.9772 45.2762 25.4391 45.2762 23.8736 43.7107Z", fill: "#1D222A" })));
};

var Icon$5 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React.createElement("circle", { cx: "48", cy: "48", r: "48", fill: "white" }),
        React.createElement("path", { d: "M44.3288 35.3546V21.7134H19.0926C18.581 21.7134 18.24 22.0544 18.24 22.566V41.8342C18.24 42.3457 18.581 42.6867 19.0926 42.6867H28.8119V77.8129C28.8119 78.3244 29.153 78.6654 29.6645 78.6654H45.5224C46.0339 78.6654 46.375 78.3244 46.375 77.8129V35.3546H44.3288Z", fill: "#29AEFF" }),
        React.createElement("path", { d: "M61.8919 17.2798H55.7534H39.2134C38.7019 17.2798 38.3608 17.6208 38.3608 18.1324V73.3792C38.3608 73.8908 38.7019 74.2318 39.2134 74.2318H55.0713C55.5829 74.2318 55.9239 73.8908 55.9239 73.3792V59.397H62.0624C73.6575 59.397 83.0358 50.0187 83.0358 38.4237C83.0358 26.6581 73.487 17.2798 61.8919 17.2798Z", fill: "#2761E7" })));
};

var Icon$4 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React.createElement("g", { clipPath: "url(#clip-trustwallet)" },
            React.createElement("path", { d: "M48.0048 96.0097C74.5172 96.0097 96.0097 74.5172 96.0097 48.0048C96.0097 21.4925 74.5172 0 48.0048 0C21.4925 0 0 21.4925 0 48.0048C0 74.5172 21.4925 96.0097 48.0048 96.0097Z", fill: "#3375BB" }),
            React.createElement("path", { d: "M48.0048 22.8922L49.3179 21.1833C48.9399 20.8928 48.4766 20.7354 48 20.7354C47.5233 20.7354 47.06 20.8928 46.682 21.1833L48.0048 22.8922ZM70.5783 29.5252H72.7313C72.7352 29.2396 72.6824 28.9561 72.576 28.6909C72.4696 28.4258 72.3118 28.1844 72.1116 27.9806C71.9114 27.7769 71.6729 27.6148 71.4097 27.5037C71.1465 27.3926 70.8639 27.3348 70.5783 27.3335V29.5252ZM48.0048 75.6377L46.8076 77.4335C47.1604 77.6697 47.5754 77.7958 48 77.7958C48.4245 77.7958 48.8395 77.6697 49.1924 77.4335L48.0048 75.6377ZM25.4506 29.5252V27.3625C25.165 27.3638 24.8824 27.4216 24.6192 27.5327C24.356 27.6437 24.1175 27.8058 23.9173 28.0096C23.7171 28.2134 23.5593 28.4548 23.4529 28.7199C23.3465 28.985 23.2937 29.2686 23.2976 29.5542L25.4506 29.5252ZM46.6917 24.5915C56.4626 32.1611 67.6528 31.6783 70.5879 31.6783V27.3625C67.5466 27.3625 57.8047 27.7487 49.3468 21.1833L46.6917 24.5915ZM68.4348 29.4866C68.2707 39.4892 67.8459 46.5471 67.0349 51.7704C66.2238 56.9938 65.1039 60.0448 63.6266 62.2268C62.1494 64.4089 60.257 65.8282 57.486 67.4792C54.715 69.1302 51.1716 70.9646 46.8076 73.8515L49.2406 77.4335C53.373 74.6818 56.8102 72.9246 59.7357 71.1771C62.6835 69.5717 65.2416 67.3367 67.228 64.6309C69.159 61.7344 70.4817 57.8724 71.3314 52.427C72.181 46.9815 72.6155 39.6534 72.7796 29.5542L68.4348 29.4866ZM49.2406 73.8515C44.9055 70.955 41.3718 69.1592 38.6201 67.4888C35.8684 65.8185 33.976 64.4861 32.4892 62.2268C31.0023 59.9676 29.7954 56.9648 28.9651 51.7704C28.1347 46.576 27.7678 39.4892 27.6037 29.4866L23.2976 29.5542C23.4617 39.6534 23.9058 47.0009 24.7458 52.427C25.5858 57.8531 26.8699 61.7151 28.8395 64.6309C30.8164 67.3382 33.3686 69.5739 36.3125 71.1771C39.2091 72.9246 42.6752 74.6818 46.8076 77.4335L49.2406 73.8515ZM25.4506 31.6783C28.3471 31.6783 39.547 32.1611 49.3179 24.5915L46.682 21.1833C38.2049 27.7487 28.463 27.3625 25.441 27.3625L25.4506 31.6783Z", fill: "white" })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "clip-trustwallet" },
                React.createElement("rect", { width: "96", height: "96", fill: "white" })))));
};

var Icon$3 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React.createElement("path", { d: "M96 48C96 21.4903 74.5097 0 48 0C21.4903 0 0 21.4903 0 48C0 74.5097 21.4903 96 48 96C74.5097 96 96 74.5097 96 48Z", fill: "#3389FB" }),
        React.createElement("path", { d: "M29.6927 35.4245C39.8036 25.5252 56.1965 25.5252 66.3074 35.4245L67.5242 36.6159C68.0298 37.1109 68.0298 37.9134 67.5242 38.4084L63.3616 42.4839C63.1088 42.7314 62.699 42.7314 62.4462 42.4839L60.7717 40.8444C53.7181 33.9384 42.282 33.9384 35.2284 40.8444L33.4351 42.6002C33.1823 42.8477 32.7725 42.8477 32.5197 42.6002L28.3571 38.5247C27.8515 38.0297 27.8515 37.2272 28.3571 36.7322L29.6927 35.4245ZM74.9161 43.8532L78.6208 47.4805C79.1264 47.9755 79.1264 48.778 78.6208 49.2729L61.9159 65.6288C61.4103 66.1237 60.5907 66.1237 60.0851 65.6288C60.0851 65.6288 60.0851 65.6288 60.0851 65.6288L48.229 54.0206C48.1026 53.8968 47.8977 53.8968 47.7713 54.0206C47.7713 54.0206 47.7713 54.0206 47.7713 54.0206L35.9153 65.6288C35.4098 66.1237 34.5902 66.1237 34.0846 65.6288C34.0846 65.6288 34.0846 65.6288 34.0846 65.6288L17.3792 49.2727C16.8736 48.7778 16.8736 47.9753 17.3792 47.4803L21.0839 43.853C21.5895 43.3581 22.4091 43.3581 22.9146 43.853L34.771 55.4614C34.8974 55.5851 35.1023 55.5851 35.2287 55.4614C35.2287 55.4614 35.2287 55.4614 35.2287 55.4614L47.0844 43.853C47.59 43.358 48.4096 43.358 48.9152 43.853C48.9152 43.853 48.9152 43.853 48.9152 43.853L60.7715 55.4614C60.8979 55.5851 61.1028 55.5851 61.2292 55.4614L73.0854 43.8532C73.5909 43.3583 74.4105 43.3583 74.9161 43.8532Z", fill: "white" })));
};

var Icon$2 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 32 32" }, props),
        React.createElement("path", { d: "M24 0H8C3.58172 0 0 3.58172 0 8V24C0 28.4183 3.58172 32 8 32H24C28.4183 32 32 28.4183 32 24V8C32 3.58172 28.4183 0 24 0Z", fill: "#1E2026" }),
        React.createElement("path", { d: "M16.2857 4L9.97035 7.6761L12.2922 9.03415L16.2857 6.7161L20.2792 9.03415L22.6011 7.6761L16.2857 4Z", fill: "#F0B90B" }),
        React.createElement("path", { d: "M20.2792 10.9541L22.6011 12.3122V15.0283L18.6075 17.3463V21.9824L16.2857 23.3405L13.9639 21.9824V17.3463L9.97035 15.0283V12.3122L12.2922 10.9541L16.2857 13.2722L20.2792 10.9541Z", fill: "#F0B90B" }),
        React.createElement("path", { d: "M22.6011 16.9483V19.6644L20.2792 21.0224V18.3063L22.6011 16.9483Z", fill: "#F0B90B" }),
        React.createElement("path", { d: "M20.2561 22.9424L24.2496 20.6244V15.9883L26.5714 14.6302V21.9824L20.2561 25.6585V22.9424Z", fill: "#F0B90B" }),
        React.createElement("path", { d: "M24.2496 11.3522L21.9278 9.99414L24.2496 8.63609L26.5714 9.99414V12.7102L24.2496 14.0683V11.3522Z", fill: "#F0B90B" }),
        React.createElement("path", { d: "M13.9639 26.642V23.9259L16.2857 25.2839L18.6075 23.9259V26.642L16.2857 28L13.9639 26.642Z", fill: "#F0B90B" }),
        React.createElement("path", { d: "M12.2922 21.0224L9.97035 19.6644V16.9483L12.2922 18.3063V21.0224Z", fill: "#F0B90B" }),
        React.createElement("path", { d: "M16.2857 11.3522L13.9639 9.99414L16.2857 8.63609L18.6075 9.99414L16.2857 11.3522Z", fill: "#F0B90B" }),
        React.createElement("path", { d: "M10.6437 9.99414L8.32183 11.3522V14.0683L6 12.7102V9.99414L8.32183 8.63609L10.6437 9.99414Z", fill: "#F0B90B" }),
        React.createElement("path", { d: "M6 14.6302L8.32183 15.9883V20.6244L12.3154 22.9424V25.6585L6 21.9824V14.6302Z", fill: "#F0B90B" })));
};

var Icon$1 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React.createElement("circle", { cx: "48", cy: "48", r: "48", fill: "#F5F5F5" }),
        React.createElement("path", { d: "M56.5504425,41.9387033 L56.5504425,50.4659601 L47.3948342,50.4659601 L47.3948342,85.5971142 L45.0078131,84.7075452 C43.8992633,84.2955753 42.1136272,83.5937969 39.9052997,82.5918134 L38.8675775,82.1177881 L38.8675775,14.6817622 L47.9569067,11.8769231 L56.5504425,14.5267861 L56.5504425,23.7259307 L47.9569067,21.0669705 L47.3948342,21.2411155 L47.3948342,41.9387033 L56.5504425,41.9387033 Z M16,50.4659926 L16,21.7739797 L36.1702794,15.548296 L36.1702794,24.7052039 L24.526282,28.3200122 L24.526282,41.9387358 L36.1702794,41.9387358 L36.1702794,81.3806284 L33.591244,80.0543973 C25.5662786,75.923652 16,68.9585019 16,59.2339983 L16,54.6496962 L24.526282,54.6496962 L24.526282,59.2339983 C24.526282,61.2460878 25.5734263,63.3605199 27.6426978,65.5373324 L27.6426978,50.4659926 L16,50.4659926 Z M59.1389325,15.3302574 L79.8040306,21.7261873 L79.8040306,50.4659601 L67.6710627,50.4659601 L67.6710627,62.9111544 C67.6710627,62.9111544 64.9581695,66.4674811 59.1464051,69.4451657 C59.1464051,67.0682164 59.1389325,15.3302574 59.1389325,15.3302574 Z M71.2780734,41.9387033 L71.2780734,28.2783928 L67.6710627,27.1649695 L67.6710627,41.9387033 L71.2780734,41.9387033 Z M71.2780734,59.8661186 L71.2780734,54.6495662 L79.8040306,54.6495662 L79.8040306,59.8661186 C79.8040306,74.3588162 58.7760221,82.7005566 52.330058,84.9127828 L49.9859233,85.7230769 L49.9859233,76.7068496 L51.1311866,76.2744112 C61.1591444,72.5004032 71.2780734,65.962818 71.2780734,59.8661186 Z", fill: "#000000" })));
};

var Icon = function (props) {
    return (React.createElement(Svg, __assign({ width: "276.000000pt", height: "330.000000pt", viewBox: "0 0 276.000000 330.000000", preserveAspectRatio: "xMidYMid meet" }, props),
        React.createElement("g", { transform: "translate(0.000000,330.000000) scale(0.100000,-0.100000)", fill: "#000000", stroke: "none" },
            React.createElement("path", { d: "M3 2380 c3 -890 4 -907 25 -1002 61 -268 174 -484 351 -670 216 -228\r\n    486 -369 796 -418 103 -16 315 -14 430 5 183 29 420 125 557 225 l53 39 267\r\n    -267 268 -267 1 815 c1 986 2 924 -17 1040 -46 279 -180 537 -384 740 -187\r\n    187 -388 302 -639 365 -375 94 -777 25 -1095 -189 -38 -25 -71 -46 -75 -46 -3\r\n    0 -126 120 -274 268 l-268 267 4 -905z m1484 279 c415 -46 746 -325 870 -734\r\n    l27 -90 4 -470 3 -470 -796 795 c-795 795 -795 795 -772 812 44 34 185 98 273\r\n    123 147 42 246 50 391 34z m460 -1844 c-6 -17 -129 -83 -213 -114 -121 -44\r\n    -223 -62 -354 -62 -517 0 -937 369 -1009 885 -6 45 -11 249 -11 483 l0 406\r\n    795 -794 c437 -436 794 -798 792 -804z" }))));
};

var ConnectorNames;
(function (ConnectorNames) {
    ConnectorNames["Injected"] = "injected";
    ConnectorNames["WalletConnect"] = "walletconnect";
    ConnectorNames["BSC"] = "bsc";
    ConnectorNames["BitKeep"] = "BitKeep";
})(ConnectorNames || (ConnectorNames = {}));

var connectors = [
    {
        title: "ONTOWallet",
        icon: Icon,
        connectorId: ConnectorNames.Injected,
    },
    {
        title: "Metamask",
        icon: Icon$7,
        connectorId: ConnectorNames.Injected,
    },
    {
        title: "TrustWallet",
        icon: Icon$4,
        connectorId: ConnectorNames.Injected,
    },
    {
        title: "MathWallet",
        icon: Icon$6,
        connectorId: ConnectorNames.Injected,
    },
    {
        title: "TokenPocket",
        icon: Icon$5,
        connectorId: ConnectorNames.Injected,
    },
    {
        title: "WalletConnect",
        icon: Icon$3,
        connectorId: ConnectorNames.WalletConnect,
    },
    {
        title: "Binance Chain Wallet",
        icon: Icon$2,
        connectorId: ConnectorNames.BSC,
    },
    {
        title: "SafePal Wallet",
        icon: Icon$1,
        connectorId: ConnectorNames.Injected,
    },
    {
        title: "HyperPay Wallet",
        icon: Icon$HyperWallet,
        connectorId: ConnectorNames.Injected,
    },
    {
        title: "BitKeep Wallet",
        icon: Icon$BitKeep,
        connectorId: ConnectorNames.BitKeep,
    },
];
var connectorLocalStorageKey = "connectorId";

var WalletCard = function (_a) {
    var login = _a.login, walletConfig = _a.walletConfig, onDismiss = _a.onDismiss, mb = _a.mb;
    var title = walletConfig.title, Icon = walletConfig.icon;
    return (React.createElement(Button, { width: "100%", variant: "tertiary", onClick: function () {
            login(walletConfig.connectorId);
            window.localStorage.setItem(connectorLocalStorageKey, walletConfig.connectorId);
            onDismiss();
        }, style: { justifyContent: "space-between" }, mb: mb, id: "wallet-connect-" + title.toLocaleLowerCase() },
        React.createElement(Text, { bold: true, color: "primary", mr: "16px" }, title),
        React.createElement(Icon, { width: "32px" })));
};

var HelpLink = styled(Link)(templateObject_1$5 || (templateObject_1$5 = __makeTemplateObject(["\n  display: flex;\n  align-self: center;\n  align-items: center;\n  margin-top: 24px;\n"], ["\n  display: flex;\n  align-self: center;\n  align-items: center;\n  margin-top: 24px;\n"])));
var ConnectModal = function (_a) {
    var login = _a.login, _b = _a.onDismiss, onDismiss = _b === void 0 ? function () { return null; } : _b;
    return (React.createElement(Modal, { title: "Connect to a wallet", onDismiss: onDismiss },
        connectors.map(function (entry, index) { return (React.createElement(WalletCard, { key: entry.title, login: login, walletConfig: entry, onDismiss: onDismiss, mb: index < connectors.length - 1 ? "8px" : "0" })); }),
        React.createElement(HelpLink, { href: " https://bridgeswap-exchange-1.gitbook.io/bridgeswap/get-started/connecting-your-wallet-to-bridgeswap", external: true },
            React.createElement(Icon$1b, { color: "primary", mr: "6px" }),
            "Learn how to connect")));
};
var templateObject_1$5;

var StyleButton = styled(Text).attrs({ role: "button" })(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  color: ", ";\n"], ["\n  position: relative;\n  display: flex;\n  align-items: center;\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.primary;
});
var Tooltip = styled.div(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n  display: ", ";\n  position: absolute;\n  bottom: -22px;\n  right: 0;\n  left: 0;\n  text-align: center;\n  background-color: ", ";\n  color: ", ";\n  border-radius: 16px;\n  opacity: 0.7;\n"], ["\n  display: ", ";\n  position: absolute;\n  bottom: -22px;\n  right: 0;\n  left: 0;\n  text-align: center;\n  background-color: ", ";\n  color: ", ";\n  border-radius: 16px;\n  opacity: 0.7;\n"])), function (_a) {
    var isTooltipDisplayed = _a.isTooltipDisplayed;
    return (isTooltipDisplayed ? "block" : "none");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.contrast;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.invertedContrast;
});
var CopyToClipboard = function (_a) {
    var toCopy = _a.toCopy, children = _a.children, props = __rest(_a, ["toCopy", "children"]);
    var _b = useState(false), isTooltipDisplayed = _b[0], setIsTooltipDisplayed = _b[1];
    return (React.createElement(StyleButton, __assign({ small: true, bold: true, onClick: function () {
            if (navigator.clipboard) {
                navigator.clipboard.writeText(toCopy);
                setIsTooltipDisplayed(true);
                setTimeout(function () {
                    setIsTooltipDisplayed(false);
                }, 1000);
            }
        } }, props),
        children,
        React.createElement(Icon$1d, { width: "20px", color: "primary", ml: "4px" }),
        React.createElement(Tooltip, { isTooltipDisplayed: isTooltipDisplayed }, "Copied")));
};
var templateObject_1$4, templateObject_2$1;

var AccountModal = function (_a) {
    var account = _a.account, logout = _a.logout, _b = _a.onDismiss, onDismiss = _b === void 0 ? function () { return null; } : _b;
    return (React.createElement(Modal, { title: "Your wallet", onDismiss: onDismiss },
        React.createElement(Text, { fontSize: "20px", bold: true, style: { whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", marginBottom: "8px" } }, account),
        React.createElement(Flex, { mb: "32px" },
            React.createElement(LinkExternal, { small: true, href: "https://bscscan.com/address/" + account, mr: "16px" }, "View on BscScan"),
            React.createElement(CopyToClipboard, { toCopy: account }, "Copy Address")),
        React.createElement(Flex, { justifyContent: "center" },
            React.createElement(Button, { scale: "sm", variant: "secondary", onClick: function () {
                    logout();
                    window.localStorage.removeItem(connectorLocalStorageKey);
                    onDismiss();
                } }, "Logout"))));
};

var useWalletModal = function (login, logout, account) {
    var onPresentConnectModal = useModal(React.createElement(ConnectModal, { login: login }))[0];
    var onPresentAccountModal = useModal(React.createElement(AccountModal, { account: account || "", logout: logout }))[0];
    return { onPresentConnectModal: onPresentConnectModal, onPresentAccountModal: onPresentAccountModal };
};

var UserBlock = function (_a) {
    var account = _a.account, login = _a.login, logout = _a.logout;
    var _b = useWalletModal(login, logout, account), onPresentConnectModal = _b.onPresentConnectModal, onPresentAccountModal = _b.onPresentAccountModal;
    var accountEllipsis = account ? account.substring(0, 4) + "..." + account.substring(account.length - 4) : null;
    return (React.createElement("div", null, account ? (React.createElement(Button, { scale: "sm", variant: "tertiary", onClick: function () {
            onPresentAccountModal();
        } }, accountEllipsis)) : (React.createElement(Button, { scale: "sm", onClick: function () {
            onPresentConnectModal();
        } }, "Connect"))));
};
var UserBlock$1 = React.memo(UserBlock, function (prevProps, nextProps) { return prevProps.account === nextProps.account; });

var Wrapper = styled.div(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n  position: relative;\n  width: 100%;\n"], ["\n  position: relative;\n  width: 100%;\n"])));
var StyledNav = styled.nav(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: fixed;\n  top: ", ";\n  left: 0;\n  transition: top 0.2s;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 8px;\n  padding-right: 16px;\n  width: 100%;\n  height: ", "px;\n  background-color: ", ";\n  border-bottom: solid 2px rgba(133, 133, 133, 0.1);\n  z-index: 20;\n  transform: translate3d(0, 0, 0);\n"], ["\n  position: fixed;\n  top: ", ";\n  left: 0;\n  transition: top 0.2s;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 8px;\n  padding-right: 16px;\n  width: 100%;\n  height: ", "px;\n  background-color: ", ";\n  border-bottom: solid 2px rgba(133, 133, 133, 0.1);\n  z-index: 20;\n  transform: translate3d(0, 0, 0);\n"])), function (_a) {
    var showMenu = _a.showMenu;
    return (showMenu ? 0 : "-" + MENU_HEIGHT + "px");
}, MENU_HEIGHT, function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
});
var BodyWrapper = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n"], ["\n  position: relative;\n  display: flex;\n"])));
var Inner = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  flex-grow: 1;\n  margin-top: ", ";\n  transition: margin-top 0.2s;\n  transform: translate3d(0, 0, 0);\n  max-width: 100%;\n\n  ", " {\n    margin-left: ", ";\n    max-width: ", ";\n  }\n"], ["\n  flex-grow: 1;\n  margin-top: ", ";\n  transition: margin-top 0.2s;\n  transform: translate3d(0, 0, 0);\n  max-width: 100%;\n\n  ", " {\n    margin-left: ", ";\n    max-width: ", ";\n  }\n"])), function (_a) {
    var showMenu = _a.showMenu;
    return (showMenu ? MENU_HEIGHT + "px" : 0);
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED) + "px";
}, function (_a) {
    var isPushed = _a.isPushed;
    return "calc(100% - " + (isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED) + "px)";
});
var Platform = styled.h3(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  color: ", ";\n  display: none;\n  ", " {\n    display: block;\n  }\n"], ["\n  color: ", ";\n  display: none;\n  ", " {\n    display: block;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var BridgePrice = styled.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  display: none;\n  ", " {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n  }\n"], ["\n  display: none;\n  ", " {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var PriceHolder = styled.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  margin-left: 10px;\n  color: ", ";\n"], ["\n  margin-left: 10px;\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
});
var ConnectedNet = styled.div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  display: none;\n  ", " {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    border: 1.5px solid ", ";\n    border-radius: 40px;\n    padding: 10px 15px;\n    color: ", ";\n  }\n"], ["\n  display: none;\n  ", " {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    border: 1.5px solid ", ";\n    border-radius: 40px;\n    padding: 10px 15px;\n    color: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
});
var OnlyNetLogo = styled.div(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  display: block;\n  ", " {\n    display: none;\n  }\n"], ["\n  display: block;\n  ", " {\n    display: none;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var MobileOnlyOverlay = styled(Overlay)(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  position: fixed;\n  height: 100%;\n\n  ", " {\n    display: none;\n  }\n"], ["\n  position: fixed;\n  height: 100%;\n\n  ", " {\n    display: none;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
});
var Menu = function (_a) {
    var _b;
    var netLogo = _a.netLogo, netName = _a.netName, platform = _a.platform, account = _a.account, login = _a.login, logout = _a.logout, isDark = _a.isDark, toggleTheme = _a.toggleTheme, langs = _a.langs, setLang = _a.setLang, currentLang = _a.currentLang, cakePriceUsd = _a.cakePriceUsd, links = _a.links; _a.profile; var children = _a.children;
    var isXl = useMatchBreakpoints().isXl;
    var isMobile = isXl === false;
    var _c = useState(!isMobile), isPushed = _c[0], setIsPushed = _c[1];
    var _d = useState(true), showMenu = _d[0], setShowMenu = _d[1];
    var refPrevOffset = useRef(window.pageYOffset);
    useEffect(function () {
        var handleScroll = function () {
            var currentOffset = window.pageYOffset;
            var isBottomOfPage = window.document.body.clientHeight === currentOffset + window.innerHeight;
            var isTopOfPage = currentOffset === 0;
            // Always show the menu when user reach the top
            if (isTopOfPage) {
                setShowMenu(true);
            }
            // Avoid triggering anything at the bottom because of layout shift
            else if (!isBottomOfPage) {
                if (currentOffset < refPrevOffset.current) {
                    // Has scroll up
                    setShowMenu(true);
                }
                else {
                    // Has scroll down
                    setShowMenu(false);
                }
            }
            refPrevOffset.current = currentOffset;
        };
        var throttledHandleScroll = throttle(handleScroll, 200);
        window.addEventListener("scroll", throttledHandleScroll);
        return function () {
            window.removeEventListener("scroll", throttledHandleScroll);
        };
    }, []);
    // Find the home link if provided
    var homeLink = links.find(function (link) { return link.label === "Home"; });
    return (React.createElement(Wrapper, null,
        React.createElement(StyledNav, { showMenu: showMenu },
            React.createElement(Logo$1, { isPushed: isPushed, togglePush: function () { return setIsPushed(function (prevState) { return !prevState; }); }, isDark: isDark, href: (_b = homeLink === null || homeLink === void 0 ? void 0 : homeLink.href) !== null && _b !== void 0 ? _b : "/" }),
            React.createElement(Flex, null,
                React.createElement(Platform, null, platform)),
            React.createElement(Flex, null,
                React.createElement(BridgePrice, null,
                    React.createElement(WhiteBGLogo, null),
                    React.createElement(PriceHolder, null, "$" + Number(cakePriceUsd).toFixed(3)))),
            account !== null &&
                (netName !== undefined &&
                    React.createElement(Flex, null,
                        React.createElement(ConnectedNet, null,
                            netLogo,
                            netName.toLocaleUpperCase()),
                        React.createElement(OnlyNetLogo, null, netLogo))),
            React.createElement(Flex, null,
                React.createElement(UserBlock$1, { account: account, login: login, logout: logout }))),
        React.createElement(BodyWrapper, null,
            React.createElement(Panel, { isPushed: isPushed, isMobile: isMobile, showMenu: showMenu, isDark: isDark, toggleTheme: toggleTheme, langs: langs, setLang: setLang, currentLang: currentLang, cakePriceUsd: cakePriceUsd, pushNav: setIsPushed, links: links }),
            React.createElement(Inner, { isPushed: isPushed, showMenu: showMenu }, children),
            React.createElement(MobileOnlyOverlay, { show: isPushed, onClick: function () { return setIsPushed(false); }, role: "presentation" }))));
};
var templateObject_1$3, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10;

var ToastAction = function (_a) {
    var action = _a.action;
    if (action.url.startsWith("http")) {
        return (React.createElement(Button, __assign({ as: "a", scale: "sm", href: action.url }, getExternalLinkProps()), action.text));
    }
    return (React.createElement(Button, { as: Link$1, scale: "sm", to: action.url }, action.text));
};

var types = {
    SUCCESS: "success",
    DANGER: "danger",
    WARNING: "warning",
    INFO: "info",
};

var _a;
var alertTypeMap = (_a = {},
    _a[types.INFO] = variants$2.INFO,
    _a[types.SUCCESS] = variants$2.SUCCESS,
    _a[types.DANGER] = variants$2.DANGER,
    _a[types.WARNING] = variants$2.WARNING,
    _a);
var StyledToast = styled.div(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n  right: 16px;\n  position: fixed;\n  max-width: calc(100% - 32px);\n  transition: all 250ms ease-in;\n  width: 100%;\n\n  ", " {\n    max-width: 400px;\n  }\n"], ["\n  right: 16px;\n  position: fixed;\n  max-width: calc(100% - 32px);\n  transition: all 250ms ease-in;\n  width: 100%;\n\n  ", " {\n    max-width: 400px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var Toast = function (_a) {
    var toast = _a.toast, onRemove = _a.onRemove, style = _a.style, ttl = _a.ttl, props = __rest(_a, ["toast", "onRemove", "style", "ttl"]);
    var timer = useRef();
    var ref = useRef(null);
    var removeHandler = useRef(onRemove);
    var id = toast.id, title = toast.title, description = toast.description, type = toast.type, action = toast.action;
    var handleRemove = useCallback(function () { return removeHandler.current(id); }, [id, removeHandler]);
    var handleMouseEnter = function () {
        clearTimeout(timer.current);
    };
    var handleMouseLeave = function () {
        if (timer.current) {
            clearTimeout(timer.current);
        }
        timer.current = window.setTimeout(function () {
            handleRemove();
        }, ttl);
    };
    useEffect(function () {
        if (timer.current) {
            clearTimeout(timer.current);
        }
        timer.current = window.setTimeout(function () {
            handleRemove();
        }, ttl);
        return function () {
            clearTimeout(timer.current);
        };
    }, [timer, ttl, handleRemove]);
    return (React.createElement(CSSTransition, __assign({ nodeRef: ref, timeout: 250, style: style }, props),
        React.createElement(StyledToast, { ref: ref, onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave },
            React.createElement(Alert, { title: title, variant: alertTypeMap[type], onClick: handleRemove }, action ? (React.createElement(React.Fragment, null,
                React.createElement(Text, { as: "p", mb: "8px" }, description),
                React.createElement(ToastAction, { action: action }))) : (description)))));
};
var templateObject_1$2;

var ZINDEX = 1000;
var TOP_POSITION = 80; // Initial position from the top
var StyledToastContainer = styled.div(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  .enter,\n  .appear {\n    opacity: 0.01;\n  }\n\n  .enter.enter-active,\n  .appear.appear-active {\n    opacity: 1;\n    transition: opacity 250ms ease-in;\n  }\n\n  .exit {\n    opacity: 1;\n  }\n\n  .exit.exit-active {\n    opacity: 0.01;\n    transition: opacity 250ms ease-out;\n  }\n"], ["\n  .enter,\n  .appear {\n    opacity: 0.01;\n  }\n\n  .enter.enter-active,\n  .appear.appear-active {\n    opacity: 1;\n    transition: opacity 250ms ease-in;\n  }\n\n  .exit {\n    opacity: 1;\n  }\n\n  .exit.exit-active {\n    opacity: 0.01;\n    transition: opacity 250ms ease-out;\n  }\n"])));
var ToastContainer = function (_a) {
    var toasts = _a.toasts, onRemove = _a.onRemove, _b = _a.ttl, ttl = _b === void 0 ? 6000 : _b, _c = _a.stackSpacing, stackSpacing = _c === void 0 ? 24 : _c;
    return (React.createElement(StyledToastContainer, null,
        React.createElement(TransitionGroup, null, toasts.map(function (toast, index) {
            var zIndex = (ZINDEX - index).toString();
            var top = TOP_POSITION + index * stackSpacing;
            return (React.createElement(Toast, { key: toast.id, toast: toast, onRemove: onRemove, ttl: ttl, style: { top: top + "px", zIndex: zIndex } }));
        }))));
};
var templateObject_1$1;

var ResetCSS = createGlobalStyle(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  /* prettier-ignore */\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed, \n  figure, figcaption, footer, header, hgroup, \n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    vertical-align: baseline;\n  }\n  /* HTML5 display-role reset for older browsers */\n  /* prettier-ignore */\n  article, aside, details, figcaption, figure, \n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n    font-size: 16px;\n  }\n  ol,\n  ul {\n    list-style: disc;\n    list-style-position: inside;\n  }\n  blockquote,\n  q {\n    quotes: none;\n  }\n  blockquote:before,\n  blockquote:after,\n  q:before,\n  q:after {\n    content: \"\";\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n  [role=\"button\"] {\n    cursor: pointer;\n  }\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n  * {\n    font-family: 'Kanit', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  /* Scrollbar */\n  ::-webkit-scrollbar {\n    width: 8px;\n  }\n  ::-webkit-scrollbar-thumb {\n    background: ", "; \n    border-radius: 8px;\n  }\n  ::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 5px ", "; \n    border-radius: 10px;\n  }\n\n  /* Slider */ \n  input[type=range] {\n    -webkit-appearance: none; /* Hides the slider so that custom slider can be made */\n    width: 100%; /* Specific width is required for Firefox. */\n    background: transparent; /* Otherwise white in Chrome */\n  }\n  input[type=range]::-webkit-slider-thumb {\n    -webkit-appearance: none;\n  }\n  input[type=range]:focus {\n    outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */\n  }\n  input[type=range]::-ms-track {\n    width: 100%;\n    cursor: pointer;\n    /* Hides the slider so custom styles can be added */\n    background: transparent; \n    border-color: transparent;\n    color: transparent;\n  }  \n"], ["\n  /* prettier-ignore */\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed, \n  figure, figcaption, footer, header, hgroup, \n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    vertical-align: baseline;\n  }\n  /* HTML5 display-role reset for older browsers */\n  /* prettier-ignore */\n  article, aside, details, figcaption, figure, \n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n    font-size: 16px;\n  }\n  ol,\n  ul {\n    list-style: disc;\n    list-style-position: inside;\n  }\n  blockquote,\n  q {\n    quotes: none;\n  }\n  blockquote:before,\n  blockquote:after,\n  q:before,\n  q:after {\n    content: \"\";\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n  [role=\"button\"] {\n    cursor: pointer;\n  }\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n  * {\n    font-family: 'Kanit', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  /* Scrollbar */\n  ::-webkit-scrollbar {\n    width: 8px;\n  }\n  ::-webkit-scrollbar-thumb {\n    background: ", "; \n    border-radius: 8px;\n  }\n  ::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 5px ", "; \n    border-radius: 10px;\n  }\n\n  /* Slider */ \n  input[type=range] {\n    -webkit-appearance: none; /* Hides the slider so that custom slider can be made */\n    width: 100%; /* Specific width is required for Firefox. */\n    background: transparent; /* Otherwise white in Chrome */\n  }\n  input[type=range]::-webkit-slider-thumb {\n    -webkit-appearance: none;\n  }\n  input[type=range]:focus {\n    outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */\n  }\n  input[type=range]::-ms-track {\n    width: 100%;\n    cursor: pointer;\n    /* Hides the slider so custom styles can be added */\n    background: transparent; \n    border-color: transparent;\n    color: transparent;\n  }  \n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
});
var templateObject_1;

var baseColors = {
    failure: "#ED4B9E",
    primary: "#f7ad19",
    primaryBright: "#EC836E",
    primaryDark: "#b92608",
    secondary: "#330099",
    success: "#faca6b",
    warning: "#FFB237",
};
var brandColors = {
    binance: "#0773C9",
    overlay: "#452a7a"
};
var lightColors = __assign(__assign(__assign({}, baseColors), brandColors), { background: "#09092b", backgroundDisabled: "#9595e9", contrast: "#311b17", dropdown: "#F6F6F6", invertedContrast: "#FFFFFF", bright: "#ffffff", blue: "#17D2FB", input: "#ffffff", inputSecondary: "#d7caec", tertiary: "#EFF4F5", text: "#ffffff", textDisabled: "#dad5d5", textSubtle: "#8c8c8c", borderColor: "#551b10", card: "#080844", menuHover: "#F7AD19", gradients: {
        bluePurple: "linear-gradient(90.82deg, #FA00FF -73.84%, #17D2FB 141.1%)",
        bubblegum: "linear-gradient(245.94deg, rgba(8, 8, 56, 0.2) -63.8%, rgba(17, 17, 139, 0.2) 73.44%)",
    } });
var darkColors = __assign(__assign(__assign({}, baseColors), brandColors), { secondary: "#a279f5", background: "#202136", backgroundDisabled: "#9595e9", contrast: "#FFFFFF", dropdown: "#2c2624", invertedContrast: "#662a1e", bright: "#ffffff", blue: "#17D2FB", input: "#7a534c", inputSecondary: "#b18179", primaryDark: "#c73316", tertiary: "#8a6058", text: "#f0745c", textDisabled: "#745a55", textSubtle: "#fc7358", borderColor: "#e67761", card: "#27262c", menuHover: "#F7AD19", gradients: {
        bluePurple: "linear-gradient(90.82deg, #FA00FF -73.84%, #17D2FB 141.1%)",
        bubblegum: "linear-gradient(245.94deg, rgba(8, 8, 56, 0.2) -63.8%, rgba(17, 17, 139, 0.2) 73.44%)",
    } });

var light$7 = {
    background: lightColors.card,
};
var dark$7 = {
    background: darkColors.card,
};

var light$6 = {
    background: lightColors.card,
    boxShadow: "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
    boxShadowActive: shadows.active,
    boxShadowSuccess: shadows.success,
    boxShadowWarning: shadows.warning,
    cardHeaderBackground: {
        default: "linear-gradient(111.68deg, #505050 0%, #979797 100%)",
        blue: "linear-gradient(180deg, #A7E8F1 0%, #94E1F2 100%)",
        violet: "linear-gradient(180deg, #505050 0%, #979797 100%)",
    },
    dropShadow: "drop-shadow(0px 1px 4px rgba(25, 19, 38, 0.15))",
};
var dark$6 = {
    background: darkColors.card,
    boxShadow: "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
    boxShadowActive: shadows.active,
    boxShadowSuccess: shadows.success,
    boxShadowWarning: shadows.warning,
    cardHeaderBackground: {
        default: "linear-gradient(166.77deg, #3B4155 0%, #3A3045 100%)",
        blue: "linear-gradient(180deg, #00707F 0%, #19778C 100%)",
        violet: "linear-gradient(180deg, #6C4999 0%, #6D4DB2 100%)",
    },
    dropShadow: "drop-shadow(0px 1px 4px rgba(25, 19, 38, 0.15))",
};

var light$5 = {
    handleBackground: lightColors.card,
    handleShadow: lightColors.textDisabled,
};
var dark$5 = {
    handleBackground: darkColors.card,
    handleShadow: darkColors.textDisabled,
};

var light$4 = {
    handleBackground: lightColors.card,
};
var dark$4 = {
    handleBackground: darkColors.card,
};

var light$3 = {
    handleBackground: lightColors.card,
};
var dark$3 = {
    handleBackground: darkColors.card,
};

var light$2 = {
    background: lightColors.card,
    hover: "#EEEAF4",
};
var dark$2 = {
    background: darkColors.card,
    hover: "#473d5d",
};

var light$1 = {
    background: lightColors.card,
};
var dark$1 = {
    background: darkColors.card,
};

var light = {
    background: darkColors.card,
    text: darkColors.text,
    boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.2), 0px 4px 12px -8px rgba(14, 14, 44, 0.1)",
};
var dark = {
    background: lightColors.card,
    text: lightColors.text,
    boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.2), 0px 4px 12px -8px rgba(14, 14, 44, 0.1)",
};

var darkTheme = __assign(__assign({}, base), { isDark: true, alert: dark$7, colors: darkColors, card: dark$6, toggle: dark$3, nav: dark$2, modal: dark$1, pancakeToggle: dark$5, radio: dark$4, tooltip: dark });

var lightTheme = __assign(__assign({}, base), { isDark: false, alert: light$7, colors: lightColors, card: light$6, toggle: light$3, nav: light$2, modal: light$1, pancakeToggle: light$5, radio: light$4, tooltip: light });

export { Icon$1A as AddIcon, Alert, Icon$1z as ArrowBackIcon, Icon$1y as ArrowDownIcon, Icon$1x as ArrowDropDownIcon, Icon$1w as ArrowDropUpIcon, Icon$1v as ArrowForwardIcon, Icon$1u as ArrowUpIcon, Icon$1t as AutoRenewIcon, BackgroundImage, BalanceInput, GridLayout$1 as BaseLayout, Icon$1s as BinanceIcon, Icon$1C as BlockIcon, Box, Breadcrumbs, Icon$1r as BunnyPlaceholderIcon, Button, ButtonMenu$1 as ButtonMenu, ButtonMenuItem, Icon$1o as CalculateIcon, Card, CardBody, CardFooter, CardHeader, CardRibbon, Icon$1p as CardViewIcon, Icon$1q as Cards, GridLayout as CardsLayout, Icon$1m as ChartIcon, Checkbox, Icon$1E as CheckmarkCircleIcon, Icon$1l as CheckmarkIcon, Icon$1k as ChevronDownIcon, Icon$1j as ChevronLeftIcon, Icon$1i as ChevronRightIcon, Icon$1h as ChevronUpIcon, Icon$1n as CircleOutlineIcon, Icon$1g as CloseIcon, Icon$1f as CogIcon, Icon$1e as CommunityIcon, ConnectorNames, Icon$1d as CopyIcon, Icon$1c as CrownIcon, Dropdown, Icon$1D as ErrorIcon, ExpandableButton, ExpandableLabel, FallingBunnies, Flex, Heading, Icon$1b as HelpIcon, Icon$1a as HistoryIcon, IconButton, Image, Icon$1B as InfoIcon, Input$1 as Input, Icon$19 as LaurelLeftIcon, Icon$18 as LaurelRightIcon, Link, LinkExternal, Icon$17 as ListViewIcon, Icon$16 as LogoIcon, Icon$15 as LogoRoundIcon, Icon$14 as MedalBronzeIcon, Icon$13 as MedalGoldIcon, Icon$12 as MedalPurpleIcon, Icon$11 as MedalSilverIcon, Icon$10 as MedalTealIcon, Menu, Icon$$ as MetamaskIcon, Icon$_ as MinusIcon, Modal, ModalBackButton, ModalBody, ModalCloseButton, ModalContainer, ModalHeader, ModalProvider, ModalTitle, Icon$Z as NoProfileAvatarIcon, NotificationDot, Icon$Y as OpenNewIcon, Icon$W as PancakeRoundIcon, PancakeToggle, Icon$X as PancakesIcon, Icon$U as PlayCircleOutlineIcon, Icon$V as PocketWatchIcon, Icon$T as PrizeIcon, Progress, Icon$Q as ProgressBunny, Radio, Icon$A as RefreshIcon, Icon$S as RemoveIcon, ResetCSS, Icon$G as SearchIcon, Skeleton, Slider, Spinner, Step, Stepper, Svg, Icon$F as SwapVertIcon, Icon$E as SyncAltIcon, Tab, ButtonMenu as TabMenu, Tag, Icon$N as TeamPlayerIcon, Icon$M as TestnetIcon, Text, Icon$L as Ticket, Icon$K as TicketRound, Icon$J as TimerIcon, ToastContainer, Toggle, Icon$I as TrophyGoldIcon, Icon$H as TuneIcon, Icon$R as VerifiedIcon, Icon$D as VolumeOffIcon, Icon$C as VolumeUpIcon, WhiteBGLogo as WBGLogoIcon, Icon$P as WaitIcon, Icon$B as WarningIcon, Icon$O as Won, variants$2 as alertVariants, byTextAscending, byTextDescending, connectorLocalStorageKey, darkTheme as dark, darkColors, lightTheme as light, lightColors, makeRender, links as menuConfig, status as menuStatus, types as toastTypes, useKonamiCheatCode, useMatchBreakpoints, useModal, useParticleBurst, useTable, useWalletModal };
