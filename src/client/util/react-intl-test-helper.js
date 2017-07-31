import React from 'react';
import { IntlProvider, intlShape } from 'react-intl';
import { mount, shallow } from 'enzyme';

const messages = require('../../Intl/localizationData/en');

const intlProvider = new IntlProvider({ locale: 'en', messages }, {});
export const { intl } = intlProvider.getChildContext();

const nodeWithIntlProp = node => {
  return React.cloneElement(node, { intl });
};

export const shallowWithIntl = node => {
  return shallow(nodeWithIntlProp(node), { context: { intl } });
};

export const mountWithIntl = node => {
  return mount(nodeWithIntlProp(node), {
    context: { intl },
    childContextTypes: { intl: intlShape },
  });
};
