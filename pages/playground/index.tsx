import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import Form from '@components/form';
import Input from '@components/Input';

const Page = () => {
  const form = useForm();

  const handleSubmit = async (data: any) => {
    console.log(data);
  };

  return (
    <Wrapper>
      <Form
        form={form}
        onSubmit={handleSubmit}
        onError={(err: any) => {
          console.log(err);
        }}
      >
        <Input name="test" />
        <button type="submit">test</button>
      </Form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 8px;
  background-image: ${({ theme }) => theme.colors.semantic.gradient};
`;

export default Page;
