import { Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MuiAccordion, { AccordionProps as MuiAccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, { AccordionSummaryProps } from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { styled } from '@mui/material/styles';

const CustomAccordion = styled((props: MuiAccordionProps) => (
    <MuiAccordion disableGutters={true} elevation={0} square={true} {...props} />
))(() => ({
    border: 'none',
    margin: '0 20px 0 35px',
    boxShadow: 'none',
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
    '&.Mui-disabled': {
        opacity: '1',
        backgroundColor: 'white',
        '.MuiTypography-root': {
            width: '100%',
        },
    },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
    <MuiAccordionSummary expandIcon={<ExpandMoreIcon sx={{ fontSize: 'small' }} />} {...props} />
))(() => ({
    border: 'none',
    padding: '0',
    margin: 0,
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(180deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: '0',
    },
    '& .MuiButtonBase-root-MuiAccordionSummary-root': {
        padding: '0',
    },
    '&.Mui-disabled': {
        opacity: '1',
        backgroundColor: 'white',
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(() => ({
    padding: '0',
    margin: '0',
    border: 'none',
}));

type AccordionProps = {
    isDisabled?: boolean;
    id: string;
    'aria-controls': string;
    title: JSX.Element;
    text: JSX.Element;
};

export const Accordion = ({ isDisabled, id, 'aria-controls': ariaControls, title, text }: AccordionProps) => {
    return (
        <CustomAccordion disabled={isDisabled}>
            <AccordionSummary expandIcon={!isDisabled && <ExpandMoreIcon />} aria-controls={ariaControls} id={id}>
                {title}
            </AccordionSummary>
            <AccordionDetails>
                <Box>{text}</Box>
            </AccordionDetails>
        </CustomAccordion>
    );
};
