const $ = function (selector) {
    return new $.prototype.init(selector);
};

$.prototype.init = function (selector) {
    if (!selector) {
        return this; 
        // возвращает пустой объект
    }

    if (selector.tagName) {
        this[0] = selector;
        this.length = 1;
        return this;
    }

    Object.assign(this, document.querySelectorAll(selector));
    this.length = document.querySelectorAll(selector).length;

    return this;
    // содерж.прототипы, эл-ты , с кот. будем взаимод.
};

$.prototype.init.prototype = $.prototype;

window.$ = $;

export default $;