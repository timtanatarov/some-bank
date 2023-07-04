import { memo } from 'react';

import { Table, TableBody, TableRow, TableCell, Typography } from '@mui/material';

import { colors } from 'src/theme';

import { CopyButton } from 'src/shared/CopyButton';

type TableRowProps = {
    id: number;
    title: string;
    info: string;
    copyButton: boolean;
};

type TableProps = {
    data: TableRowProps[] | null;
};

export const InfoTable = memo(({ data }: TableProps) => {
    return (
        <Table
            sx={{
                borderCollapse: 'collapse',
                border: `1px solid ${colors.neutral200}`,
                maxWidth: '700px',
            }}
        >
            <TableBody
                sx={{
                    td: {
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        columnGap: '20px',
                        flexWrap: 'wrap',
                        p: '24px',
                        borderColor: colors.neutral200,
                        borderLeft: `1px solid ${colors.neutral200}`,
                    },
                    th: {
                        borderColor: colors.neutral200,
                        p: '24px',
                        color: colors.neutral600,
                        width: 'max-content',
                        minWidth: '250px',
                    },
                }}
            >
                {data?.map((el) => (
                    <TableRow key={el.id}>
                        <TableCell component="th" scope="row">
                            <Typography variant="descriptionRegular">{el.title}</Typography>
                        </TableCell>
                        <TableCell component="td" scope="row">
                            <Typography variant="descriptionSemiBold">{el.info}</Typography>
                            {el.copyButton ? <CopyButton text={el.info} /> : ''}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
});
