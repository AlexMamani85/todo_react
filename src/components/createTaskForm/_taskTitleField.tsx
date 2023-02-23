import React, { FC, ReactElement} from 'react';

import { ITextField } from './interfaces/ITextField';
import { TextField } from '@mui/material';
import PropTypes from 'prop-types';

export const TaskTitleField: FC<
  ITextField
> = ( props ): ReactElement => {
  // Destructure props
  const { 
    onChange = (e) => console.log(e) , 
    disabled = false
  } = props;
  return(
    <TextField 
      id="title"
      label="Title"
      placeholder="Task Title"
      variant="outlined"
      size="small"
      name="title"
      fullWidth
      disabled={disabled}
      onChange={onChange}
    />
  );
};

TaskTitleField.propTypes = {
  onChange: PropTypes.func, 
  disabled: PropTypes.bool, 
}