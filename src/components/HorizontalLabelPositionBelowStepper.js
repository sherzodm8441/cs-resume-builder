import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const steps = [
  'Contact Information',
  'Education',
  'Work Experience',
  'Projects'
];

export default function HorizontalLabelPositionBelowStepper(props) {
  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={props.pageNum} alternativeLabel>
        {steps.map((label) => (
          <Step key={label} completed={false}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
