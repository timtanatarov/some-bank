import { useState } from 'react';

import { Stack, Typography, Box } from '@mui/material';
import { colors } from 'src/theme';

import { CreditProductCard } from 'src/shared/cards/CreditProduct';

import { Product } from 'src/shared/Product';

import { ComingSoonModal } from 'src/shared/ComingSoonModal';

import { useGetCreditProductsQuery } from 'src/redux/apis/creditService';

import { Plate } from 'src/shared/Plate';

import { formatAmountOutput } from 'src/utils/inputFormatters';

import { isServerError } from 'src/utils/isServerError';

import { currencyData } from 'src/services/exchangeRatesService/currencyData';

import { SkeletonProduct } from 'src/shared/Product/SkeletonProduct';

import { CreditSlider } from './CreditSlider';

export const Credits = () => {
    const [open, setOpen] = useState(false);

    const {
        data: creditProducts,
        isLoading: creditProductsLoading,
        error: creditProductError,
    } = useGetCreditProductsQuery();

    const isCreditProductServerError = isServerError(creditProductError);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const skeletonProducts = Array(3)
        .fill('')
        .map((_, i) => <SkeletonProduct key={i} />);

    return (
        <Stack spacing="44px">
            <Stack spacing={{ laptop: '32px', tablet: '24px' }}>
                <Box sx={{ pr: '36px', padding: '0 36px' }}>
                    <Typography variant="bold24" sx={{ color: colors.primary }}>
                        Мои кредиты
                    </Typography>
                </Box>
                <Box sx={{ minHeight: '196px', height: '1px' }}>
                    <CreditSlider />
                </Box>
            </Stack>
            <Stack spacing="24px" sx={{ padding: { tablet: '0 36px', mobile: '0 24px' } }}>
                <Typography variant="bold24" sx={{ color: colors.primary }}>
                    Кредитные продукты
                </Typography>

                {isCreditProductServerError ? (
                    <Plate message="Сервис временно недоступен" sx={{ border: 1, borderColor: colors.alert }} />
                ) : (
                    <Product.Stack>
                        {creditProductsLoading
                            ? skeletonProducts
                            : creditProducts?.map((item) => (
                                  <Product
                                      key={item.name}
                                      card={
                                          <CreditProductCard
                                              id={item.id}
                                              name={item.name}
                                              currencyCode={item.currencyCode}
                                              minSum={item.minSum}
                                              minInterestRate={item.minInterestRate}
                                          />
                                      }
                                      title="Кредитная карта"
                                      subtitle={item.name}
                                      description={item.details}
                                      aboutItems={[
                                          <Product.AboutBlock
                                              key="0"
                                              title={`от ${item.minInterestRate}%`}
                                              subtitle="ставка годовых"
                                          />,

                                          <Product.AboutBlock
                                              key="1"
                                              title={`от ${formatAmountOutput(String(item.minSum))} ${
                                                  currencyData[item.currencyCode as keyof typeof currencyData].symbol
                                              }`}
                                              subtitle="минимальная сумма кредитования"
                                          />,
                                      ]}
                                      onClick={handleOpen}
                                  />
                              ))}
                    </Product.Stack>
                )}

                <ComingSoonModal isOpen={open} onClose={handleClose} />
            </Stack>
        </Stack>
    );
};
