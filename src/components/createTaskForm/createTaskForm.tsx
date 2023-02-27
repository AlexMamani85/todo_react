import React, { FC, ReactElement, useState } from 'react';
import { Box, Typography, Stack } from '@mui/material';

import { TaskDateField } from './_taskDateField';
import { TaskDescriptionField } from './_taskDescriptionField';
import { TaskTitleField } from './_taskTitleField';
import { TaskSelectField } from './_taskSelectField';
import { Status } from './enums/Status';
import { Priority } from './enums/Priority';

export const CreateTaskForm: FC = (): ReactElement => {
  // declaring component states
  const [title, setTitle] = useState<string | undefined> (undefined);
  const [description, setDescription] = useState<string | undefined>(undefined);
  const [date, setDate] = useState<Date | undefined> (new Date());
  const [status, setStatus] = useState<string | undefined> (Status.todo);
  const [priority, setPriority] = useState<string | undefined> (Priority.normal);

    return(
      <Box
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        width="100%"
        px={4}
        my={6}
      >
        <Typography mb={2} component="h2" variant="h6" >
            Create a Task
        </Typography>

        <Stack sx={{ width: '100%' }} spacing={2} >
          <TaskTitleField />
          <TaskDescriptionField />
          <TaskDateField />

          <Stack 
            sx={{ width: '100%'}} 
            direction="row" 
            spacing={2} 
          >
            <TaskSelectField 
              label="Status" 
              name="status"
              items={[
                {
                  value: Status.todo,
                  label: Status.todo.toUpperCase(),
                },
                {
                  value: Status.inProgress,
                  label: Status.inProgress.toUpperCase(),
                },
              ]}
              />
            <TaskSelectField 
              label="Priority" 
              name="priority"
              items={[
                {
                  value: Priority.low,
                  label: Priority.low.toUpperCase(),
                },
                {
                  value: Priority.normal,
                  label: Priority.normal.toUpperCase(),
                },
                {
                  value: Priority.high,
                  label: Priority.high.toUpperCase(),
                },
              ]}            
            />
          </Stack>

        </Stack>
      </Box>
    )
};