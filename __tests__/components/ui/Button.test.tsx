import { render, screen } from '@testing-library/react';
import { Button, ButtonProps } from '@/components/ui/Button';

describe('<Button />', () => {
  const defaultProps: ButtonProps = { link: '/test-success', children: 'Click Me' };
  const renderComponent = (propOverrides: Partial<ButtonProps> = defaultProps) =>
    render(<Button {...defaultProps} {...propOverrides} />);

  it('renders correctly and matches the snapshot', () => {
    const component = renderComponent();

    expect(component).toMatchSnapshot();
  });

  it('renders the children as the button content', () => {
    const expectedButtonText = 'Test Button';
    renderComponent({ children: expectedButtonText });

    const buttonText = screen.getByText(expectedButtonText);

    expect(buttonText).toBeInTheDocument();
  });

  it('renders a link using the link prop', () => {
    renderComponent();

    const link = screen.getByText('Click Me');

    expect(link.getAttribute('href')).toEqual(defaultProps.link);
  });
});
