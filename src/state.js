import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  data: {},
  isLoading: false,
  error: null
};

export const reportSlice = createSlice({
  name: 'report',
  initialState,
  reducers: {
    fetchReportDataStart: (state) => {
      state.isLoading = true;
    },
    fetchReportDataSuccess: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    fetchReportDataFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    updateReportData: (state, action) => {
      const { id, data } = action.payload;
      state.data[id] = { ...state.data[id], ...data };
    },
    setReportData: (state, action) => {
      state.data = action.payload;
    }
  }
});

export const {
  fetchReportDataStart,
  fetchReportDataSuccess,
  fetchReportDataFailure,
  updateReportData,
  setReportData
} = reportSlice.actions;

export const fetchReportData = () => {
  return (dispatch) => {
    dispatch(fetchReportDataStart());
    axios.get('/api/reportdata')
      .then(response => {
        const reportdata = response.data;
        dispatch(fetchReportDataSuccess(reportdata));
      })
      .catch(error => {
        dispatch(fetchReportDataFailure(error));
      });
  };
};

export default reportSlice.reducer;
