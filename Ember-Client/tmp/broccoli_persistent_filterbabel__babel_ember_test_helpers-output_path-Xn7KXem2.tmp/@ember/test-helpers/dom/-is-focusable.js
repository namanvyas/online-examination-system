define('@ember/test-helpers/dom/-is-focusable', ['exports', '@ember/test-helpers/dom/-is-form-control'], function (exports, _isFormControl) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isFocusable;


  var FOCUSABLE_TAGS = ['A'];
  function isFocusable(element) {
    if ((0, _isFormControl.default)(element) || element.isContentEditable || FOCUSABLE_TAGS.indexOf(element.tagName) > -1) {
      return true;
    }

    return element.hasAttribute('tabindex');
  }
});