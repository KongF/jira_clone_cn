import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

import { getTextContentsFromHtmlString } from 'shared/utils/browser';
import { TextEditor, TextEditedContent, Button } from 'shared/components';

import { Title, EmptyLabel, Actions } from './Styles';

const propTypes = {
  issue: PropTypes.object.isRequired,
  updateIssue: PropTypes.func.isRequired,
};

const ProjectBoardIssueDetailsDescription = ({ issue, updateIssue }) => {
  const [description, setDescription] = useState(issue.description);
  const [isEditing, setEditing] = useState(false);

  const handleUpdate = () => {
    setEditing(false);
    updateIssue({ description });
  };

  const isDescriptionEmpty = getTextContentsFromHtmlString(description).trim().length === 0;

  return (
    <Fragment>
      <Title>描述</Title>
      {isEditing ? (
        <Fragment>
          <TextEditor
            placeholder="Describe the issue"
            defaultValue={description}
            onChange={setDescription}
          />
          <Actions>
            <Button variant="primary" onClick={handleUpdate}>
              保存
            </Button>
            <Button variant="empty" onClick={() => setEditing(false)}>
              取消
            </Button>
          </Actions>
        </Fragment>
      ) : (
        <Fragment>
          {isDescriptionEmpty ? (
            <EmptyLabel onClick={() => setEditing(true)}>添加描述...</EmptyLabel>
          ) : (
            <TextEditedContent content={description} onClick={() => setEditing(true)} />
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

ProjectBoardIssueDetailsDescription.propTypes = propTypes;

export default ProjectBoardIssueDetailsDescription;
