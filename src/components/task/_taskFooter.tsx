import React, { FC, ReactElement } from 'react';
import { Box, Button, Switch, FormControlLabel } from '@mui/material';

export const TaskFooter: FC = (
  props,
  ): ReactElement => {

    return (
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mt={4}
      >
        <FormControlLabel
          label="In Progress"
          control={<Switch color="warning"  />}
        
        />
        <Button
          variant="contained"
          color="success"
          size="small"
          sx={{ color: '#ffffff', fontWeight:"bold"}}
        >
          Mark Complete
        </Button>
      </Box>
    );
  }