import React, { FC, ReactElement, useState } from 'react';

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { DesktopDatePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { TextField } from '@mui/material';

// import { ITextField } from './interfaces/ITextField';
// import { TextField } from '@mui/material';
// import PropTypes from 'prop-types';

export const TaskDateField: FC = (props): ReactElement => {
  const [date, setDate] = useState<Date | null>(null);
  return(
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DesktopDatePicker
          label="Task Date"
          inputFormat='dd/MM/yyyy'
          value={date}
          onChange={(newValue) => setDate(newValue)}
          renderInput={(params) => (
            <TextField {...params} />
          )}
        />
      </LocalizationProvider>
    </>
  );
};
