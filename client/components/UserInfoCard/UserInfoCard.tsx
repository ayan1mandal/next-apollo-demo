import { FC, ReactElement } from 'react';
import { CardContent, Typography } from '@mui/material';
import { CardContainer, EmailLabel, AddressLabel, PhoneLabel } from './Styles';

export type UserInfoCardProps = {
  user: {
    name: string,
    email: string,
    address: string,
    phone: string,
  }
};

const UserInfoCard: FC<UserInfoCardProps> = ({ user }): ReactElement => (
  <CardContainer variant='outlined'>
    <CardContent>
      <Typography variant='h6' data-testid='sub-heading'>
        {user.name}
      </Typography>
      <EmailLabel href={`mailto:${user.email}`}>
        {user.email}
      </EmailLabel>
      <AddressLabel>
        {user.address}
      </AddressLabel>
      <PhoneLabel href={`tel:${user.phone}`}>
        Contact: {user.phone}
      </PhoneLabel>
    </CardContent>
  </CardContainer>
);

export default UserInfoCard;
