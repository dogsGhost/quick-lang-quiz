import expect from 'expect';
import getOutput from '../lib/getOutput';
import Header from '../js/components/Header';

describe('Header', () => {
  let output = getOutput(Header);
  let children = output.props.children;

  it('should be a header element', () => {
    expect(output.type).toBe('header');
  });

  it('should contain an h1 tag with the project name', () => {
    expect(children.type).toBe('h1');
    expect(children.props.children).toMatch(/Quick Language Quiz/);
  });
});
