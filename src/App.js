import './App.css';
import {Button, TextField, Typography} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

function App() {
  return (
    <div className="App">
        <div>
            <TextField disabled id="standard-basic" label="Standard" variant="standard" defaultValue="Hello World"/>

            <Button variant="outlined" startIcon={<EditIcon />}>Edit</Button>
        </div>
    </div>
  );
}

export default App;
