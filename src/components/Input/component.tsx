import styled from 'styled-components';
import { useFormContext } from 'react-hook-form';

const Component = ({ name }: any) => {
  const { register } = useFormContext();

  return <StyledInput {...register(name)} id={name} name={name} />;
};

const StyledInput = styled.input``;

export default Component;
