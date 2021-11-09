import { MouseEventHandler, MouseEvent } from 'react';
import { LoadingButton } from '@mui/lab';
import { Box, Card, Typography } from '@mui/material';
import { SxProps } from '@mui/system';

type BaseAuthCardProps = {
  cancelButtonText?: string;
  children: JSX.Element | JSX.Element[];
  children2?: JSX.Element | JSX.Element[];
  isLoading: boolean;
  onCancelClick?: () => void;
  onSubmitClick?: MouseEventHandler<HTMLButtonElement>;
  submitButtonText: string;
  title: string;
  sx?: SxProps;
};

const BaseAuthCard = ({
  cancelButtonText,
  children,
  children2,
  isLoading,
  onCancelClick,
  onSubmitClick,
  submitButtonText,
  title,
  sx,
}: BaseAuthCardProps): JSX.Element => {
  const handleCancelClick: MouseEventHandler<HTMLButtonElement> = (
    e: MouseEvent<HTMLButtonElement>
  ): void => {
    e.preventDefault();
    if (onCancelClick) onCancelClick();
  };

  return (
    <Card sx={{ pt: 7, px: 6, pb: 5, width: 550, ...sx }}>
      <Typography variant='h3' sx={{ mb: 10, width: '100%', textAlign: 'center' }}>
        {title}
      </Typography>

      {children}

      <Box sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
        {cancelButtonText && (
          <LoadingButton
            loading={isLoading}
            onClick={handleCancelClick}
            variant='outlined'
            size='large'
            type='submit'
            sx={{ height: 57, mb: 5, mr: 3 }}
          >
            {cancelButtonText}
          </LoadingButton>
        )}

        <LoadingButton
          onClick={onSubmitClick}
          loading={isLoading}
          variant='contained'
          size='large'
          type='submit'
          sx={{ flexGrow: 1, height: 57, mb: 5, maxWidth: 270 }}
        >
          {submitButtonText}
        </LoadingButton>
      </Box>

      {children2}
    </Card>
  );
};

export default BaseAuthCard;
