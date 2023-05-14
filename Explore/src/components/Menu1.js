import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

export default function Menu1() {
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button variant="contained" {...bindTrigger(popupState)}>
            choose aspiring job level
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={popupState.close}>L2</MenuItem>
            <MenuItem onClick={popupState.close}>L3</MenuItem>
            <MenuItem onClick={popupState.close}>L4</MenuItem>
            <MenuItem onClick={popupState.close}>L5</MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}
