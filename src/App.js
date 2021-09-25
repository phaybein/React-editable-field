import React from 'react';
import './App.css';
import {Button, TextField, Typography} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

function App() {
    const [ canEdit, setCanEdit ] = React.useState(false);

    const editField = React.useCallback(() => {
        setCanEdit(true);
    }, [canEdit]);

    const saveField = React.useCallback(() => {
        setCanEdit(false);
    }, [canEdit]);

  return (
    <div className="App">
        <div>
            <TextField disabled={!canEdit} id="standard-basic" label="Standard" variant="standard" defaultValue="Hello World"/>

            <Button variant="outlined" startIcon={<EditIcon />} onClick={() => {!canEdit ? editField() : saveField()}}>{canEdit ? 'Save' : 'Edit'}</Button>
        </div>
    </div>
  );
}

export default App;
