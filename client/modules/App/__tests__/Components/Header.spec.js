import React from 'react';
import test from 'ava';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import { FormattedMessage } from 'react-intl';
import { Header } from '../../components/Header/Header';
import { intl } from '../../../../util/react-intl-test-helper';

const intlProp = { ...intl, enabledLanguages: ['en', 'fr'] };

test('renders the header properly', t => {
  const router = {
    isActive: sinon.stub().returns(true),
  };
  const wrapper = shallow(
    <Header switchLanguage={() => {}} intl={intlProp} toggleAddModa={() => {}} />,
    {
      context: {
        router,
        intl,
      },
    }
  );

  t.truthy(wrapper.find('Link').first().containsMatchingElement(<FormattedMessage id="siteTitle" />));
  t.is(wrapper.find('a').length, 1);
});

test('doesn\'t add moda in pages other than home', t => {
  const router = {
    isActive: sinon.stub().returns(false),
  };
  const wrapper = shallow(
    <Header switchLanguage={() => {}} intl={intlProp} toggleAddModa={() => {}} />,
    {
      context: {
        router,
        intl,
      },
    }
  );

  t.is(wrapper.find('a').length, 0);
});

test('toggleAddModa called properly', t => {
  const router = {
    isActive: sinon.stub().returns(true),
  };
  const toggleAddModa = sinon.spy();
  const wrapper = shallow(
    <Header switchLanguage={() => {}} intl={intlProp} toggleAddModa={toggleAddModa} />,
    {
      context: {
        router,
        intl,
      },
    }
  );

  wrapper.find('a').first().simulate('click');
  t.truthy(toggleAddModa.calledOnce);
});
