import { useDispatch, useSelector } from 'react-redux';
import { fetchReportData, updateReportData } from './reportSlice';

const ReportComponent = () => {
  const dispatch = useDispatch();
  const reportData = useSelector(state => state.report.data);
  const isLoading = useSelector(state => state.report.isLoading);
  const error = useSelector(state => state.report.error);

  useEffect(() => {
    dispatch(fetchReportData());
  }, [dispatch]);

  const handleUpdate = (id, data) => {
    dispatch(updateReportData({ id, data }));
  };

  return (
    <div>
      {isLoading && <p>Loading
