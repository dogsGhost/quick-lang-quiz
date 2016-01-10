import expect from 'expect';
import getOutput from '../lib/getOutput';
import Footer from '../js/components/Footer';

describe('Footer', () => {
  let output = getOutput(Footer);
  let date = new Date().getFullYear();
  let children = output.props.children;

  it('should be a footer element', () => {
    expect(output.type).toBe('footer');
  });

  it('should contain a small tag with the current year', () => {
    expect(children.type).toBe('small');
    expect(children.props.children).toInclude(date);
  });
});
