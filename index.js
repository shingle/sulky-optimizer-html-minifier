/**
 * SunEee
 * @date Created on 2015/5/7
 * @author YuHui(语晖)<yuhui@suneee.com>
 *
 */

'use strict';
var minify = require('html-minifier').minify;

var defaultOptions = {
    removeComments: true,
    collapseBooleanAttributes: true,
	minifyJS: true,
    removeEmptyAttributes: true,
    removeScriptTypeAttributes: true,
    removeStyleLinkTypeAttributes: true,
    collapseWhitespace: true
};

module.exports = function (content, file, conf) {

    if (file.isHtmlLike) {

        return minify(content, defaultOptions);
    }

};
