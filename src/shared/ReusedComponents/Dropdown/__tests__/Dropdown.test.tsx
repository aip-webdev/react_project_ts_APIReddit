import React from "react";
import {Dropdown} from "../Dropdown";
import {shallow} from "enzyme";
import { configure } from 'enzyme';
// @ts-ignore
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('Dropdown', () => {
    test( 'should render', () => {
        const wrapper = shallow(<Dropdown children={<div />} button={<button />} />)
        expect(wrapper).toBeDefined();
        expect(wrapper.find('div.container').isEmptyRender()).toBeFalsy() ;

    })

    test('should render snapshot', () => {
        const wrapper = shallow(<Dropdown children={<div />} button={<button />} />)
        expect(wrapper).toMatchSnapshot()
    })
})
