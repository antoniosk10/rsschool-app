import React from 'react';
import { render } from '@testing-library/react';
import PublicFeedbackCard from '../PublicFeedbackCard';

jest.mock('moment', () => (value: any) => ({
  format() {
    return value;
  },
  fromNow() {
    return 'fromNow';
  },
}));

describe('PublicFeedbackCard', () => {
  const data = [
    {
      feedbackDate: '2018-12-01T12:12:01.000Z',
      badgeId: 'Congratulations',
      comment: 'Test',
      heroesUri: 'https://heroes.by/',
      fromUser: {
        name: 'Anton Petrov',
        githubId: 'apetr',
      },
    },
    {
      feedbackDate: '2018-11-01T11:12:01.000Z',
      badgeId: 'Great_speaker',
      comment: 'Test',
      heroesUri: 'https://heroes.by/',
      fromUser: {
        name: 'Artem Petrov',
        githubId: 'temap',
      },
    },
    {
      feedbackDate: '2018-09-01T11:12:01.000Z',
      badgeId: 'Great_speaker',
      comment: 'Test',
      heroesUri: 'https://heroes.by/',
      fromUser: {
        name: 'Artem Petrov',
        githubId: 'temap',
      },
    },
    {
      feedbackDate: '2018-10-01T11:12:01.000Z',
      badgeId: 'Great_speaker',
      comment: 'Test',
      heroesUri: 'https://heroes.by/',
      fromUser: {
        name: 'Artem Petrov',
        githubId: 'temap',
      },
    },
    {
      feedbackDate: '2018-11-01T12:12:01.000Z',
      badgeId: 'Thank_you',
      comment: 'Test',
      heroesUri: 'https://heroes.by/',
      fromUser: {
        name: 'Anton Vasilyev',
        githubId: 'vasssa',
      },
    },
    {
      feedbackDate: '2019-12-01T12:12:01.000Z',
      badgeId: 'Thank_you',
      comment: 'Test',
      heroesUri: 'https://heroes.by/',
      fromUser: {
        name: 'Dima Alexandrov',
        githubId: 'demaa',
      },
    },
  ];

  describe('Should render correctly', () => {
    it('if is editing mode disabled', () => {
      const output = render(
        <PublicFeedbackCard data={data} isEditingModeEnabled={false} onPermissionsSettingsChange={jest.fn()} />,
      );
      expect(output.container).toMatchSnapshot();
    });
    it('if is editing mode enabled', () => {
      const output = render(
        <PublicFeedbackCard data={data} isEditingModeEnabled={true} onPermissionsSettingsChange={jest.fn()} />,
      );
      expect(output.container).toMatchSnapshot();
    });
  });
});
