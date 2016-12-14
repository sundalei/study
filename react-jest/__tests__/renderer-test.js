import renderer from 'react-test-renderer';
import React from 'react';
import { Link } from 'react-router';

test('Link renders correctly', () => {
    const tree = renderer.create(
        <Link page="http://www.baidu.com">Baidu</Link>
    ).toJSON();

    expect(tree).toMatchSnapshot();
});