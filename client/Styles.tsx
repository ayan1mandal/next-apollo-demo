import { Container, Typography, styled } from '@mui/material';
import { pixelToRem } from './utils';

export const AppContainer = styled(Container)`
   margin-top: ${pixelToRem(50)};
`;

export const HeaderLabel = styled(Typography)`
   font-weight: bold;
   display: flex;
   justify-content: center;
`;

export const SubHeaderLabel = styled(Typography)`
   margin-top: ${pixelToRem(20)};
   display: flex;
   justify-content: center;
`;