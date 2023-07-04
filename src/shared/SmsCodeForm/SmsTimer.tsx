import { useEffect, useState } from 'react';
import { Box, Link, Typography } from '@mui/material';
import { colors } from 'src/theme';

type SmsTimerProps = {
    minutes: number;
    seconds: number;
    tryCounter: number;
    onRefreshSms: () => void;
};

export const SmsTimer = ({ minutes, seconds, tryCounter, onRefreshSms }: SmsTimerProps) => {
    const [isOver, setIsOver] = useState(false);
    const [[m, s], setTime] = useState([minutes, seconds]);

    const tick = () => {
        if (isOver) return;
        if (m === 0 && s === 0) {
            setIsOver(true);
        } else if (s === 0) {
            setTime([m - 1, 59]);
        } else {
            setTime([m, s - 1]);
        }
    };

    const reset = (min: number, sec: number) => {
        setTime([min, sec]);
        setIsOver(false);
    };

    useEffect(() => {
        const timerID = setInterval(() => tick(), 1000);
        return () => clearInterval(timerID);
    });

    useEffect(() => {
        if (!tryCounter) reset(10, 0);
    }, [tryCounter]);

    const handleUpdateTimer = () => {
        reset(0, 30);
        onRefreshSms();
    };

    return (
        <Box>
            {!isOver ? (
                <Typography variant="regular14" sx={{ color: colors.neutral600 }}>
                    {`Повторная отправка через ${m.toString().padStart(1, '0')}:${s.toString().padStart(2, '0')}`}
                </Typography>
            ) : (
                <Link component="button" onClick={handleUpdateTimer}>
                    <Typography variant="regular14" sx={{ color: colors.primary }}>
                        Отправить заново
                    </Typography>
                </Link>
            )}
        </Box>
    );
};
