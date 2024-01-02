import * as React from 'react';
import { Unstable_NumberInput as BaseNumberInput } from '@mui/base/Unstable_NumberInput';
import { styled } from '@mui/system';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

export const ProductDetailsQuantityInput = React.forwardRef(function CustomNumberInput(props, ref) {
    return (
        <BaseNumberInput
            slots={{
                root: StyledInputRoot,
                input: StyledInput,
                incrementButton: StyledButton,
                decrementButton: StyledButton,
            }}
            slotProps={{
                incrementButton: {
                    children: <AddIcon fontSize="small" />,
                    className: 'increment',
                },
                decrementButton: {
                    children: <RemoveIcon fontSize="small" />,
                },
            }}
            {...props}
            ref={ref}
        />
    );
});

export default function QuantityInput() {
    return <NumberInput aria-label="Quantity Input" min={1} max={99} />;
}

const blue = {
    100: '#daecff',
    200: '#b6daff',
    300: '#66b2ff',
    400: '#3399ff',
    500: '#007fff',
    600: '#0072e5',
    700: '#0059B2',
    800: '#004c99',
};

const grey = {
    50: '#F3F6F9',
    100: '#E5EAF2',
    200: '#DAE2ED',
    300: '#C7D0DD',
    400: '#B0B8C4',
    500: '#9DA8B7',
    600: '#6B7A90',
    700: '#434D5B',
    800: '#303740',
    900: '#1C2025',
};

const StyledInputRoot = styled('div')(
    ({ theme }) => `
    font-family: IBM Plex Sans, sans-serif;
    font-weight: 400;
    border: 1px solid #999999 !important;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[500]};
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    height: 57px
`,
);
//color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
//background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
const StyledInput = styled('input')(
    ({ theme }) => `
        font-size: 0.875rem;
        font-family: inherit;
        font-weight: 400;
        line-height: 1.375;
        border: none !important;
        color: #000000;
        margin: 0 8px;
        padding: 10px 12px;
        min-width: 0;
        width: 4rem;
        text-align: center;
        &:focus-visible {
        outline: 0;
        opacity: 1;
        }
    `,
);

const StyledButton = styled('button')(
    ({ theme }) => `
        text-align: center;
        font: normal normal normal 16px/26px Lato;
        letter-spacing: 0px;
        color: #333333;
        opacity: 1;
        font-size: 0.875rem;
        box-sizing: border-box;
        line-height: 1.5;
        background: transparent;
        border: none;
        color: #000000;
        width: 32px;
        height: 32px;
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: center;
        transition-property: all;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 120ms;
    
        &:hover {
        cursor: pointer;
        background: transparent !important;
        color: #000000;
        border: none !important
        }
    
        &:focus-visible {
        outline: 0;
        }
    
        &.increment {
        order: 1;
        }
    `,
);