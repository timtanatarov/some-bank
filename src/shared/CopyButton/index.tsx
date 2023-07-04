import { FC, useState } from 'react';
import Tooltip from '@mui/material/Tooltip';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import { CopyIcon } from 'src/shared/icons/Copy';

type CopyButtonProps = {
    text: string;
};

export const CopyButton: FC<CopyButtonProps> = ({ text }) => {
    const [isTooltipOpen, setIsTooltipOpen] = useState(false);
    const handleClick = () => {
        navigator.clipboard.writeText(text);
        setIsTooltipOpen(true);
    };
    const handleTooltipClose = () => {
        setIsTooltipOpen(false);
    };

    return (
        <ClickAwayListener onClickAway={handleTooltipClose}>
            <Tooltip
                placement="right"
                onClose={handleTooltipClose}
                open={isTooltipOpen}
                title="Скопировано"
                leaveDelay={1500}
            >
                <CopyIcon
                    onClick={handleClick}
                    sx={{
                        cursor: 'pointer',
                    }}
                />
            </Tooltip>
        </ClickAwayListener>
    );
};
