import React, { useState } from 'react';

import { copyToClipboard } from 'shared/utils/browser';
import { Button } from 'shared/components';

const CopyLinkButton = ({ ...buttonProps }) => {
  const [isLinkCopied, setLinkCopied] = useState(false);

  const handleLinkCopy = () => {
    setLinkCopied(true);
    setTimeout(() => setLinkCopied(false), 2000);
    copyToClipboard(window.location.href);
  };

  return (
    <Button icon="link" onClick={handleLinkCopy} {...buttonProps}>
      {isLinkCopied ? '已复制' : '复制链接'}
    </Button>
  );
};

export default CopyLinkButton;
