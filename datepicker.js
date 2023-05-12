import React, { useState } from 'react';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';

function App() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setShowDatePicker(false);
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: '#007bff',
      },
    },
    overrides: {
      MuiPickersDay: {
        daySelected: {
          backgroundColor: 'white',
          '&:hover': {
            backgroundColor: 'white',
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Button onClick={() => setShowDatePicker(true)}>Choose Date</Button>
        {showDatePicker && (
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              value={selectedDate}
              onChange={handleDateChange}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
