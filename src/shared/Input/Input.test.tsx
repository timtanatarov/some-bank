import { fireEvent, render, screen } from '@testing-library/react';

import { Input } from '.';

test('input value', () => {
    render(
        <Input id="testId" label="test-label" type="text" value="1112" inputProps={{ 'data-testid': 'ts-input' }} />
    );
    const inputOnScreen = screen.getByTestId('ts-input') as HTMLInputElement;
    expect(inputOnScreen.value).toBe('1112');
});

test('show/hide password', () => {
    render(
        <Input
            id="checkPass"
            label="password"
            value="1112"
            type="password"
            inputProps={{ 'data-testid': 'ts-input' }}
        />
    );
    const inputOnScreen = screen.getByTestId('ts-input') as HTMLInputElement;
    expect(inputOnScreen.type).toBe('password');
    fireEvent.click(screen.getByTestId('checkPass-showIcon'));
    expect(inputOnScreen.type).toBe('text');
    fireEvent.click(screen.getByTestId('checkPass-hideIcon'));
    expect(inputOnScreen.type).toBe('password');
});

test('clear input text', () => {
    const clearFn = jest.fn();

    render(
        <Input
            id="clearInputId"
            label="clear"
            value="111"
            type="text"
            inputProps={{ 'data-testid': 'ts-input' }}
            isClearable={true}
            onClear={clearFn}
        />
    );
    fireEvent.mouseDown(screen.getByTestId('clearInputId-deleteIcon'));
    expect(clearFn).toBeCalledTimes(1);
});

test('helper text', () => {
    render(<Input id="helpId" label="helperText" type="text" helperText="Test text" />);
    expect(screen.getByTestId('helpId-helpText')).toHaveTextContent('Test text');
});

test('error border input', () => {
    render(<Input id="borderError" label="error" type="text" error={true} />);
    const errorBorderInput = screen.getByTestId('borderError-inputWrap') as HTMLInputElement;
    expect(errorBorderInput).toHaveClass('Mui-error');
});
