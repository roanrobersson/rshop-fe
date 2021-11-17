import { Popper, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { VirtualElement } from '@popperjs/core';
import CheckIcon from '@mui/icons-material/Check';

export type PasswordChecklistItem = {
  text: string;
  fullfied: boolean;
};

type PasswordChecklistPopperProps = {
  isOpen: boolean;
  anchorEl: VirtualElement | (() => VirtualElement) | null | undefined;
  items: PasswordChecklistItem[];
};

const PasswordChecklistPopper = ({
  isOpen,
  anchorEl,
  items,
}: PasswordChecklistPopperProps): JSX.Element => {
  return (
    <Popper open={isOpen} anchorEl={anchorEl} placement='bottom-start' style={{ zIndex: 2 }}>
      <Paper elevation={5} sx={{ px: 2, py: 3, my: 1 }}>
        {items.map((i: PasswordChecklistItem) => (
          <Box key={i.toString()}>
            <CheckIcon
              color={i.fullfied ? 'success' : 'disabled'}
              fontSize='small'
              sx={{ pr: 1 }}
            />
            <Typography
              variant='body2'
              component='span'
              color={i.fullfied ? 'success.main' : 'grey.400'}
            >
              {i.text}
            </Typography>
          </Box>
        ))}
      </Paper>
    </Popper>
  );
};

export default PasswordChecklistPopper;
