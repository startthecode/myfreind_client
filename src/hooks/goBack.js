import { useNavigate } from 'react-router-dom';

export let useMoveBack = () => {
  const navigate = useNavigate();
  return () => navigate(-1);
}
