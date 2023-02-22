import { styled, Box } from '@mui/material';
import { pixelToRem } from '../../utils';

export const CardContainer = styled(Box)`
  display: flex;
  justify-content: center;
  margin: ${pixelToRem(16)} 0;
`;
