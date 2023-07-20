import styled from 'styled-components';
import { useFormContext } from 'react-hook-form';

const Component = ({ name }: any) => {
  const { control, register } = useFormContext();

  return <StyledInput {...register(name)} id={name} name={name} />;
};

const Wrapper = styled.div``;
const StyledInput = styled.input``;

export default Component;
