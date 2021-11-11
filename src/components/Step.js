import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const steps = [
  {
    label: 'Massa vitae',
    description: `Nibh cras pulvinar mattis nunc. Quis commodo odio aenean sed adipiscing diam. Maecenas accumsan lacus vel facilisis volutpat est velit. Viverra nibh cras pulvinar mattis nunc sed blandit. Pulvinar neque laoreet suspendisse interdum consectetur libero id.`,
  },
  {
    label: 'Facilisi nullam',
    description:
      'Orci eu lobortis elementum nibh. In est ante in nibh mauris cursus mattis molestie a. Facilisi nullam vehicula ipsum a arcu cursus vitae congue. Dui ut ornare lectus sit amet.',
  },
  {
    label: 'Nunc sed augue',
    description: `Nibh cras pulvinar mattis nunc. Quis commodo odio aenean sed adipiscing diam. Maecenas accumsan lacus vel facilisis volutpat est velit. Viverra nibh cras pulvinar mattis nunc sed blandit. Pulvinar neque laoreet suspendisse interdum consectetur libero id.`,
  },
];

export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ maxWidth: '1000px', margin:'auto' }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === 2 ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? 'Finish' : 'Continue'}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
  );
}