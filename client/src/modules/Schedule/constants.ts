import { CourseScheduleItemDto, CourseScheduleItemDtoStatusEnum, CourseScheduleItemDtoTagEnum } from 'api';

export enum ColumnName {
  Status = 'Status',
  StartDate = 'Start Date',
  EndDate = 'End Date',
  Time = 'Time',
  Tag = 'Tag',
  Name = 'Task / Event',
  Organizer = 'Organizer',
  Score = 'Score / Max',
  Weight = 'Weight',
}

export enum ColumnKey {
  Status = 'status',
  StartDate = 'studentStartDate',
  EndDate = 'studentEndDate',
  Tag = 'tag',
  Name = 'name',
  Organizer = 'organizer',
  Score = 'score',
  Weight = 'scoreWeight',
}

export const COLUMNS: { key: ColumnKey; name: ColumnName }[] = [
  { key: ColumnKey.Status, name: ColumnName.Status },
  { key: ColumnKey.Name, name: ColumnName.Name },
  { key: ColumnKey.StartDate, name: ColumnName.StartDate },
  { key: ColumnKey.EndDate, name: ColumnName.EndDate },
  { key: ColumnKey.Tag, name: ColumnName.Tag },
  { key: ColumnKey.Organizer, name: ColumnName.Organizer },
  { key: ColumnKey.Weight, name: ColumnName.Weight },
  { key: ColumnKey.Score, name: ColumnName.Score },
];

export enum LocalStorageKeys {
  ViewMode = 'scheduleViewMode',
  Timezone = 'scheduleTimezone',
  IsSplittedByWeek = 'scheduleIsSplitedByWeek',
  TagColors = 'scheduleTagsColors',
  ColumnsHidden = 'scheduleColumnsHidden',
  EventTypesHidden = 'scheduleEventTypesHidden',
  StatusFilter = 'scheduleStatusFilter',
  TagFilter = 'scheduleTagFilter',
}

export const TAG_NAME_MAP: Record<CourseScheduleItemDto['tag'], string> = {
  coding: 'Coding',
  interview: 'Interview',
  test: 'Test',
  'cross-check': 'Cross-Check',
  'self-study': 'Self-study',
  lecture: 'Lecture',
};

export const SCHEDULE_STATUSES = Object.keys(CourseScheduleItemDtoStatusEnum).map(key => ({
  value: (CourseScheduleItemDtoStatusEnum as any)[key] as CourseScheduleItemDtoStatusEnum,
  text: key,
}));

export const TAGS = Object.values(CourseScheduleItemDtoTagEnum).map((value: CourseScheduleItemDtoTagEnum) => ({
  value: value,
  text: TAG_NAME_MAP[value],
}));

export const CONFIGURABLE_COLUMNS = [
  ColumnKey.StartDate,
  ColumnKey.EndDate,
  ColumnKey.Tag,
  ColumnKey.Organizer,
  ColumnKey.Score,
  ColumnKey.Weight,
];

export const DEADLINE_COLOR = '#ff0000';
export const DEFAULT_COLOR = '#308e00';

export const DEFAULT_TAG_COLOR_MAP: Record<CourseScheduleItemDto['tag'], string> = {
  coding: '#722ed1',
  interview: '#1890ff',
  test: '#faad14',
  'cross-check': '#13c2c2',
  'self-study': '#595959',
  lecture: '#eb2f96',
};

export const PICKER_COLORS = [
  '#13c2c2',
  '#1890ff',
  '#595959',
  '#722ed1',
  '#9321a2',
  '#959e3c',
  '#9ce20d',
  '#ae8989',
  '#b04df0',
  '#d3adf7',
  '#d9d9d9',
  '#eb2f96',
  '#fa28ff',
  '#faad14',
  '#ff7a45',
  '#ffa940',
  '#ffadd2',
  '#ffe58f',
  DEADLINE_COLOR,
  DEFAULT_COLOR,
];

export const SPECIAL_TASK_TYPES = {
  deadline: 'deadline',
  test: 'test',
};

export const SPECIAL_ENTITY_TAGS = [
  'optional',
  'live',
  'record',
  'js',
  'node.js',
  'react',
  'angular',
  'css',
  'html',
  'git',
  'markdown',
  'mobile',
  'kotlin',
  'aws',
  'jupyter',
];

export const CHECKER_TYPES = {
  'auto-test': 'Auto-Test',
  mentor: 'Mentor',
  assigned: 'Cross-Mentor',
  taskOwner: 'Task Owner',
  crossCheck: 'Cross-Check',
};
