import { render, screen } from '@testing-library/react';
import React from 'react';

import { Stepper } from '.';

const data = [
    { step: 0, label: 'First step' },
    { step: 1, label: 'Second step' },
    { step: 2, label: 'Third step' },
];

test('render Stepper', () => {
    render(<Stepper activeStep={0} stepData={data} data-testid="stepper" />);
    expect(screen.getByTestId('stepper')).toBeInTheDocument();
});

test('render 1 step', () => {
    render(<Stepper activeStep={0} stepData={data} data-testid="stepper" />);
    expect(screen.getByText('First step')).toBeInTheDocument();
    expect(screen.getByTestId('stepper-step-0')).toBeInTheDocument();
});

test('render 2 step', () => {
    render(<Stepper activeStep={1} stepData={data} data-testid="stepper" />);
    expect(screen.getByText('Second step')).toBeInTheDocument();
    expect(screen.getByTestId('stepper-step-1')).toBeInTheDocument();
});

test('render 3 step', () => {
    render(<Stepper activeStep={2} stepData={data} data-testid="stepper" />);
    expect(screen.getByText('Third step')).toBeInTheDocument();
    expect(screen.getByTestId('stepper-step-2')).toBeInTheDocument();
});

test('change style of active step, step 1', () => {
    render(<Stepper activeStep={0} stepData={data} data-testid="stepper" />);
    expect(screen.getByText('First step')).toHaveClass('Mui-active');
    expect(screen.getByText('Second step')).toHaveClass('Mui-disabled');
    expect(screen.getByText('Third step')).toHaveClass('Mui-disabled');
});

test('change style of active step, step 2', () => {
    render(<Stepper activeStep={1} stepData={data} data-testid="stepper" />);
    expect(screen.getByText('First step')).toHaveClass('Mui-completed');
    expect(screen.getByText('Second step')).toHaveClass('Mui-active');
    expect(screen.getByText('Third step')).toHaveClass('Mui-disabled');
});

test('change style of active step, step 3', () => {
    render(<Stepper activeStep={2} stepData={data} data-testid="stepper" />);
    expect(screen.getByText('First step')).toHaveClass('Mui-completed');
    expect(screen.getByText('Second step')).toHaveClass('Mui-completed');
    expect(screen.getByText('Third step')).toHaveClass('Mui-active');
});
