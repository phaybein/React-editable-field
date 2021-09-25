import './App.css';
import {Button, Typography} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

function App() {
  return (
    <div className="App">
            <Button variant="outlined" startIcon={<EditIcon />}>
                Edit
            </Button>
            <Typography variant="h1" component="h2">
                h1. Heading
            </Typography>;
    </div>
  );
}

export default App;
