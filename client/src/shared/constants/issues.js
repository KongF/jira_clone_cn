export const IssueType = {
  TASK: 'task',
  BUG: 'bug',
  STORY: 'story',
};

export const IssueStatus = {
  BACKLOG: 'backlog',
  SELECTED: 'selected',
  INPROGRESS: 'inprogress',
  DONE: 'done',
};

export const IssuePriority = {
  HIGHEST: '5',
  HIGH: '4',
  MEDIUM: '3',
  LOW: '2',
  LOWEST: '1',
};

export const IssueTypeCopy = {
  [IssueType.TASK]: '任务',
  [IssueType.BUG]: '缺陷',
  [IssueType.STORY]: '故事',
};

export const IssueStatusCopy = {
  [IssueStatus.BACKLOG]: '待分配',
  [IssueStatus.SELECTED]: '已认领',
  [IssueStatus.INPROGRESS]: '进行中',
  [IssueStatus.DONE]: '已完成',
};

export const IssuePriorityCopy = {
  [IssuePriority.HIGHEST]: '最高',
  [IssuePriority.HIGH]: '高',
  [IssuePriority.MEDIUM]: '一般',
  [IssuePriority.LOW]: '低',
  [IssuePriority.LOWEST]: '最低',
};
