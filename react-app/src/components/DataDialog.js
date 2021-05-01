import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, Icon } from '@material-ui/core';
import { DateRange } from '@material-ui/icons';

export function DataDialog({crypto}) {
    const [open, setOpen] = useState(false);

    const handleOpen = (e) => {
        setOpen(true);
    }
    const handleClose = (e) => setOpen(false);

    return (<>
        <DateRange onClick={handleOpen} />
        <Dialog
            open={open}
            onClose={handleClose}
        >
            <DialogTitle>{crypto.name}</DialogTitle>

            <DialogContent>

            </DialogContent>

        </Dialog>
    </>)
}
