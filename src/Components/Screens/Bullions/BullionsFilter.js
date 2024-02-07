import React from 'react'
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';


export const BullionsFilter = ({ isOpen, onClose, children }) => {
    return (
        <Drawer
          anchor="bottom"
          open={isOpen}
          onClose={onClose}
          elevation={16}
          ModalProps={{ keepMounted: true }}
        >
          <div
            role="presentation"
            onClick={onClose}
            onKeyDown={onClose}
            style={{ height: '50vh', padding: '16px' }}
          >
            {children}
          </div>
        </Drawer>
      );
}
