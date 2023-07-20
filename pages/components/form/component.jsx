import { FormProvider } from 'react-hook-form';
import styled from 'styled-components';

const Component = ({
  children,
  form,
  onSubmit,
  onError,
  hasDefaultMargin = true,
}) => {
  return (
    <FormProvider {...form}>
      <Form
        onSubmit={form.handleSubmit(onSubmit, onError)}
        hasDefaultMargin={hasDefaultMargin}
      >
        {children}
      </Form>
    </FormProvider>
  );
};

const Form = styled.form`
  ${({ hasDefaultMargin }) => {
    if (hasDefaultMargin) {
      return `
        & > * {
          margin-bottom: 24px;

          &:last-child {
            margin-bottom: 0;
          }
        }`;
    }
  }}
`;

export default Component;

// Component.propTypes = {
//   children: PropTypes.oneOfType([
//     PropTypes.arrayOf(PropTypes.node),
//     PropTypes.node,
//   ]).isRequired,
//   form: PropTypes.any.isRequired,
//   onSubmit: PropTypes.func,
//   onError: PropTypes.func,
//   buttons: PropTypes.array,
//   maxWidth: PropTypes.string,
//   hasDefaultMargin: PropTypes.bool,
//   id: PropTypes.string,
// };
