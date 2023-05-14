import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

export default function MenuPopupState() {
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button variant="contained" {...bindTrigger(popupState)}>
            choose current job level
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={popupState.close}>L1</MenuItem>
            <MenuItem onClick={popupState.close}>L2</MenuItem>
            <MenuItem onClick={popupState.close}>L3</MenuItem>
            <MenuItem onClick={popupState.close}>L4</MenuItem>
            
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}
